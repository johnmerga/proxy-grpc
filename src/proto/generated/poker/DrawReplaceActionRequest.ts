// Original file: src/proto/proxy.proto


export interface DrawReplaceActionRequest {
  'userId'?: (string);
  'tournamentInstanceId'?: (string);
  'tableInstanceId'?: (string);
  'latestRtt'?: (string);
  'skipDraw'?: (boolean);
  'changeIdxs'?: (string)[];
}

export interface DrawReplaceActionRequest__Output {
  'userId': (string);
  'tournamentInstanceId': (string);
  'tableInstanceId': (string);
  'latestRtt': (string);
  'skipDraw': (boolean);
  'changeIdxs': (string)[];
}
