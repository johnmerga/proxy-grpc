// Original file: src/proto/proxy.proto


export interface MakePlayerActionRequest {
  'tournamentInstanceId'?: (string);
  'tableInstanceId'?: (string);
  'action'?: (string);
  'bet'?: (number);
  'latestRtt'?: (string);
  'isAuto'?: (string);
}

export interface MakePlayerActionRequest__Output {
  'tournamentInstanceId': (string);
  'tableInstanceId': (string);
  'action': (string);
  'bet': (number);
  'latestRtt': (string);
  'isAuto': (string);
}
