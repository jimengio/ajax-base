import { ILang } from "./interface";
export const enUS: ILang = {
  "validatorId_gt.datetime": "{0} must contain a valid CIDR notation",
  "validatorId_gt.items-item.one": "{0} must be a resolvable IPv6 address",
  "validatorId_gt.items-item.other": "{0} must be a resolvable IP address",
  "validatorId_gt.number": "{0} must be a valid ISBN number",
  "validatorId_gt.string-character.one": "{0} must be greater than or equal to the current Date & Time",
  "validatorId_gt.string-character.other": "{0} must contain at least {1} item",
  "validatorId_gte.datetime": "{0} must be a valid IPv4 UDP address",
  "validatorId_gte.items-item.one": "{0} must be a valid UUID",
  "validatorId_gte.items-item.other": "{0} must be a valid version 3 UUID",
  "validatorId_gte.number": "{0} must be less than or equal to {1}",
  "validatorId_gte.string-character.one": "{0} must be a valid IPv6 TCP address",
  "validatorId_gte.string-character.other": "{0} must be a valid IPv4 TCP address",
  "validatorId_len.items-item.one": "{0} must be a valid numeric value",
  "validatorId_len.items-item.other": "{0} must be a valid number",
  "validatorId_len.number": "{0} must contain multibyte characters",
  "validatorId_len.string-character.one": "{0} must contain at least {1} item",
  "validatorId_len.string-character.other": "{0} must be a maximum of {1} in length characters",
  "validatorId_lt.datetime": "{0} must contain the text '{1}'",
  "validatorId_lt.items-item.one": "{0} cannot contain any of the following characters '{1}'",
  "validatorId_lt.items-item.other": "{0} cannot contain the following '{1}'",
  "validatorId_lt.number": "{0} should not be equal to {1}",
  "validatorId_lt.string-character.one": "{0} must be greater than {1}",
  "validatorId_lt.string-character.other": "{0} must contain more than {1} items",
  "validatorId_lte.datetime": "{0} is a invalid field",
  "validatorId_lte.items-item.one": "{0} must be equal to {1}",
  "validatorId_lte.items-item.other": "{0} must contain {1} items",
  "validatorId_lte.number": "{0} must be a resolvable IPv4 address",
  "validatorId_lte.string-character.one": "{0} must contain at maximum {1} item",
  "validatorId_lte.string-character.other": "{0} must contain at maximum {1} items",
  "validatorId_max.items-item.one": "{0} must contain only printable ascii characters",
  "validatorId_max.items-item.other": "{0} is a required field",
  "validatorId_max.number": "{0} must be a valid URL",
  "validatorId_max.string-character.one": "{0} must be equal to {1}",
  "validatorId_max.string-character.other": "{0} cannot contain the text '{1}'",
  "validatorId_min.items-item.one": "{0} must be equal to {1}",
  "validatorId_min.items-item.other": "{0} is not equal to {1}",
  "validatorId_min.number": "{0} must be greater than {1}",
  "validatorId_min.string-character.one": "{0} must be less than or equal to the current Date & Time",
  "validatorId_min.string-character.other": "{0} must be less than {1}",
  activateCodeAlreadyUsed: "activate code already used",
  activateCodeInvalid: "invalid activate code",
  authCodeInvalid: "invalid auth code",
  authCreateFailed: "token create failed",
  authEnterpriseFailed: "enterprise info auth failed",
  authExpiredToken: "expired token",
  authInActived: "inactived",
  authInvalidHeader: "authorization not in request headers",
  authInvalidToken: "invalid token",
  authInvalidType: "invalid auth type",
  authNeedSSL: "please access api with ssl",
  authSuNoPerm: "no permission to su",
  authTimesExceedLimit: "auth times exceed limit",
  authTypeNotSupport: "auth type not support",
  authUserNotFound: "user info not found",
  authWrongSuInfo: "invalid su info",
  cannotHaveTheSameNameAsTheParentRegion: "Cannot have the same name as the parent region!",
  categoryShouldNotBeDeleted: "Category should not be deleted",
  commandExecution: "failed to execute command",
  diagnoseModelUpdate: "bayes model update failed",
  enterpriseExpiredErrorInfo: "Your business has exceeded the license date limit and needs to be renewed before continuing to use.",
  handlerNotSet: "handler not set",
  inspectionMethodReferencedNotDeleted: "This inspection method has been referenced by the check item, please modify the relevant check item first!",
  insufficientNumberOfOrdersCanBeGenerated: "Insufficient number of orders can be generated. Please modify the numbering rules !",
  invalidAuthorizationInfo: "Invalid authorization info",
  IOError: "io error",
  lblBadRequest: "Bad request",
  lblDataNotFound: "Data not found",
  lblDBDeadLockError: "Database dead lock.",
  lblDBDup: "Data duplicate.",
  lblDBInternalError: "Database error.",
  lblNoPermission: "No permission",
  lblRequestTimeout: "Request timeout",
  lblServerError: "Server error",
  lblUnauthorized: "Please sign in",
  lblUnknownError: "Unknown error",
  noConnectionToServer: "No connection to server",
  orderHandlerDuplicate: "handler should not be same with seller or buyer",
  orderItemAmountOrPriceEmpty: "item amount empty or unit price empty",
  orderItemsEmpty: "order items not set",
  orderNotWorking: "order is not in working progress",
  orderNumberAlreadyExists: "Order number already exists",
  orderSnEmpty: "order sn is required",
  orderUserIdsEmpty: "user ids should not be empty",
  pleaseWaitAMoment: "please wait a moment",
  regionContainsContent: "Area contains content (subordinate area or stock material) and cannot be deleted",
  sequenceRuleConflicted: "Sequence rule conflicted",
  sequenceRuleInvalid: "seuqnece rule invalid",
  sequenceRuleNotFound: "sequence rule not found",
  systemUnitProhibitsModification: "System unit prohibits modification",
  theWarehouseHasASubareaThatCannotBeDeleted: "The warehouse has a subarea that cannot be deleted!",
  unitNotSet: "unit not set",
  userMobileAlreadyBinded: "user mobile already binded",
  userMobileNeedBind: "user mobile need to bind",
  userMobileUsedByOthers: "user mobile used by others",
  validatorId_alpha: "{0} must be {1} in length characters",
  validatorId_alphanum: "{0} must be {1} or greater",
  validatorId_ascii: "{0} must be less than {1} in length characters",
  validatorId_cidr: "{0} must be {1} or less",
  validatorId_cidrv4: "{0} must be at maximum {1} in length characters",
  validatorId_cidrv6: "{0} must be greater than the current Date & Time",
  validatorId_contains: "{0} must be a valid RGB color",
  validatorId_containsany: "{0} can only contain alphabetic characters",
  validatorId_datauri: "{0} cannot be equal to {1}",
  validatorId_email: "{0} must be less than {1} in length character",
  validatorId_eq: "{0} must be greater than or equal to {1}",
  validatorId_eqcsfield: "{0} must be a valid IPv4 address",
  validatorId_eqfield: "{0} must be less than or equal to {1}",
  validatorId_excludes: "{0} can only contain alphanumeric characters",
  validatorId_excludesall: "{0} must contain a valid MAC address",
  validatorId_excludesrune: "{0} must contain less than {1} items",
  validatorId_gtcsfield: "{0} must contain at least one of the following characters '{1}'",
  validatorId_gtecsfield: "{0} must be a valid hexadecimal",
  validatorId_gtefield: "{0} must be greater than {1}",
  validatorId_gtfield: "{0} must be a valid IPv6 UDP address",
  validatorId_hexadecimal: "{0} must be {1} or less",
  validatorId_hexcolor: "{0} must be a valid HEX color",
  validatorId_hsl: "{0} must contain a valid CIDR notation for an IPv6 address",
  validatorId_hsla: "{0} must be {1} or greater",
  validatorId_ip4_addr: "{0} must be a valid version 5 UUID",
  validatorId_ip6_addr: "{0} must be at least {1} in length characters",
  validatorId_ip: "{0} must contain valid latitude coordinates",
  validatorId_ip_addr: "{0} must contain {1} item",
  validatorId_ipv4: "{0} must be at least {1} in length character",
  validatorId_ipv6: "{0} must be a valid HSLA color",
  validatorId_isbn10: "{0} must be a valid color",
  validatorId_isbn13: "{0} must be less than {1}",
  validatorId_isbn: "{0} must be a resolvable UNIX address",
  validatorId_iscolor: "{0} must be a maximum of {1} in length character",
  validatorId_latitude: "{0} must be a valid RGBA color",
  validatorId_longitude: "{0} cannot be equal to {1}",
  validatorId_ltcsfield: "{0} must be a valid ISBN-10 number",
  validatorId_ltecsfield: "{0} must be greater than {1} in length character",
  validatorId_ltefield: "{0} must contain less than {1} item",
  validatorId_ltfield: "{0} must be {1} in length character",
  validatorId_mac: "{0} must be a valid IPv6 address",
  validatorId_multibyte: "{0} must be a valid email address",
  validatorId_ne: "{0} must be less than the current Date & Time",
  validatorId_necsfield: "{0} must be greater than or equal to {1}",
  validatorId_nefield: "{0} must contain at least {1} items",
  validatorId_number: "{0} must be a valid UDP address",
  validatorId_numeric: "{0} must contain a valid CIDR notation for an IPv4 address",
  validatorId_printascii: "{0} must be a valid TCP address",
  validatorId_required: "{0} must be a valid SSN number",
  validatorId_rgb: "{0} must be less than {1}",
  validatorId_rgba: "{0} must contain a valid Data URI",
  validatorId_ssn: "{0} must contain at maximum {1} items",
  validatorId_tcp4_addr: "{0} must be at least {1} in length character",
  validatorId_tcp6_addr: "{0} must contain more than {1} item",
  validatorId_tcp_addr: "{0} must be a valid IP address",
  validatorId_udp4_addr: "{0} must be a valid URI",
  validatorId_udp6_addr: "{0} must be a valid version 4 UUID",
  validatorId_udp_addr: "{0} must contain a valid longitude coordinates",
  validatorId_unix_addr: "{0} must be at least {1} in length characters",
  validatorId_uri: "{0} must be a valid HSL color",
  validatorId_url: "{0} must contain at least {1} items",
  validatorId_username: "{0} must contain only ascii characters",
  validatorId_uuid3: "{0} must contain at maximum {1} item",
  validatorId_uuid4: "{0} must be at maximum {1} in length character",
  validatorId_uuid5: "{0} must be a valid ISBN-13 number",
  validatorId_uuid: "{0} must be greater than {1} in length characters",
  workflowNotFound: "workflow not found",
};
