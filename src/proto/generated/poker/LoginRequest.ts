// Original file: src/proto/proxy.proto


export interface LoginRequest {
  'userName'?: (string);
  'password'?: (string);
  'deviceId'?: (string);
  'remoteIp'?: (string);
  'extraHeaders'?: ({[key: string]: string});
  'geolocationData'?: (string);
  'client'?: (string);
}

export interface LoginRequest__Output {
  'userName': (string);
  'password': (string);
  'deviceId': (string);
  'remoteIp': (string);
  'extraHeaders': ({[key: string]: string});
  'geolocationData': (string);
  'client': (string);
}
