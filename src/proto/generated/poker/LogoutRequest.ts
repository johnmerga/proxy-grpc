// Original file: src/proto/proxy.proto


export interface LogoutRequest {
  'remoteIp'?: (string);
  'extraHeaders'?: ({[key: string]: string});
}

export interface LogoutRequest__Output {
  'remoteIp': (string);
  'extraHeaders': ({[key: string]: string});
}
