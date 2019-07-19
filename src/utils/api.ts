import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { ApiError, ApiOption } from "./types";
import { globalErrorMessages, globalStatusCodeErrorMessages } from "./messages";
import { errorHandler, statusCodeErrorHandler } from "./handlers";
import { UrlModel } from "@jimengio/url-model";
import { showError } from "./show-error";
import { JimuApisEventBus, JimuApisEvent } from "./event-bus";
import Qs from "qs";

const instance = axios.create();
const CancelToken = axios.CancelToken;

let pendingRequestCount = 0;

function notifyRequestStart() {
  pendingRequestCount++;
  JimuApisEventBus.emit(JimuApisEvent.Inc);
}

function notifyRequestDone() {
  pendingRequestCount--;
  if (pendingRequestCount === 0) {
    JimuApisEventBus.emit(JimuApisEvent.Done);
  }
}

export function setApiBaseUrl(baseUrl: string) {
  const url = new UrlModel(baseUrl);
  instance.defaults.baseURL = url.toString();
}

export function getApiBaseUrl() {
  return instance.defaults.baseURL;
}

export function setApiDefaultHeader(headers: any, isMerge = true) {
  if (isMerge) {
    Object.assign(instance.defaults.headers, headers);
  } else {
    instance.defaults.headers = headers;
  }
}

export function setApiDefaultConfig(config: AxiosRequestConfig) {
  Object.assign(instance.defaults, config);
}

export function generateCancelToken() {
  return CancelToken.source();
}

const handleError = (err: ApiError, config?: ApiOption) => {
  if (err.isUnauthorized) {
    // 原来有个调用, 去耦合
    // clearUserInfoCache();

    JimuApisEventBus.emit(JimuApisEvent.ErrorUnauthorized);
  }

  const code = err.code;
  const statusCode = err.originError.response ? err.originError.response.status : 0;

  const customErrorMessage = config && config.errorMessage;
  const customStatusCodeErrorMessage = config && config.statusCodeErrorMessage;
  const errorMessageMap = Object.assign({}, globalErrorMessages, customErrorMessage);
  const statusCodeErrorMessageMap = Object.assign({}, globalStatusCodeErrorMessages, customStatusCodeErrorMessage);

  // errorMessageMap[code] might be set false to prevent showing messages
  showError(err, errorMessageMap, statusCodeErrorMessageMap);

  const customErrorHandler = config && config.errorHandler;
  const customStatusCodeErrorHandler = config && config.statusCodeErrorHandler;
  const errorHandlerMap = Object.assign({}, errorHandler, customErrorHandler);
  const statusCodeErrorHandlerMap = Object.assign({}, statusCodeErrorHandler, customStatusCodeErrorHandler);

  let handler;

  if (code) {
    handler = errorHandlerMap[code];
  }

  if (handler === undefined && statusCode) {
    handler = statusCodeErrorHandlerMap[statusCode];
  }

  if (handler !== false) {
    if (typeof handler === "function") {
      handler(err);
    }
  }
};

const rejectError = (error: AxiosError, config?: ApiOption) => {
  const resp = error.response;
  const data = resp && resp.data;
  const code = (data && data.code) || 0;
  const message = (data && data.message) || (data && data.Message) || data || (resp && resp.statusText);
  const errorData = data && data.data;
  const apiError = new ApiError(code, message, errorData, error);

  let isAutoHandleError = true;
  if (config && config.isAutoHandleError === false) {
    isAutoHandleError = false;
  }

  if (isAutoHandleError) handleError(apiError, config);

  return Promise.reject(apiError);
};

const handleSuccess = (resp: AxiosResponse, option: ApiOption) => {
  const { isShowProgressBar = true } = option;

  if (isShowProgressBar) {
    notifyRequestDone();
  }

  return resp.data;
};

const handleFailed = (error: AxiosError, option: ApiOption) => {
  const { isShowProgressBar = true } = option;

  if (isShowProgressBar) {
    notifyRequestDone();
  }

  return rejectError(error, option);
};

const beforeRequest = (method: Method, option: ApiOption) => {
  option.url = option.url || option.endpoint;
  if (option.query) option.params = Object.assign({}, option.params, option.query);
  option.method = option.method || method;

  const { isShowProgressBar = true } = option;

  if (isShowProgressBar) {
    notifyRequestStart();
  }
};

const doRequest = async (method: Method, option: ApiOption) => {
  beforeRequest(method, option);

  try {
    let response = await instance.request(option);
    return handleSuccess(response, option);
  } catch (err) {
    return handleFailed(err, option);
  }
};

export const get = async <T = any>(option: ApiOption): Promise<T> => {
  return doRequest("get", option);
};

/**
 * parse object params
 *
 * query: obj = {a: 1, b: 2} -> obj[a]=1&obj[b]=2
 * @param option
 */
export const getWithNestedParams = async (option: ApiOption) => {
  option.paramsSerializer = function(params) {
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      encode: false,
    });
  };

  return doRequest("get", option);
};

export const post = async <T = any>(option: ApiOption): Promise<T> => {
  return doRequest("post", option);
};

export const put = async <T = any>(option: ApiOption): Promise<T> => {
  return doRequest("put", option);
};

export const del = async <T = any>(option: ApiOption): Promise<T> => {
  return doRequest("delete", option);
};

setApiDefaultConfig({ withCredentials: true });
