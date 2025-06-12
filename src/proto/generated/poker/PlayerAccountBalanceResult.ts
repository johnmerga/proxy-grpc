// Original file: src/proto/proxy.proto


export interface PlayerAccountBalanceResult {
  'cashInAccount'?: (number | string);
  'pointsInAccount'?: (number | string);
  'gameplayBalance'?: (string);
}

export interface PlayerAccountBalanceResult__Output {
  'cashInAccount': (number);
  'pointsInAccount': (number);
  'gameplayBalance': (string);
}
