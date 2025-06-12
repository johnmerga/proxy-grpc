// Original file: src/proto/proxy.proto


export interface ValidateSecurityQuestionsRequest {
  'userName'?: (string);
  'answers'?: (string);
  'deviceId'?: (string);
  'remoteIp'?: (string);
  'extraHeaders'?: ({[key: string]: string});
  'geolocationData'?: (string);
}

export interface ValidateSecurityQuestionsRequest__Output {
  'userName': (string);
  'answers': (string);
  'deviceId': (string);
  'remoteIp': (string);
  'extraHeaders': ({[key: string]: string});
  'geolocationData': (string);
}
