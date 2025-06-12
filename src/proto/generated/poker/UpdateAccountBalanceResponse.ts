// Original file: src/proto/proxy.proto


export interface UpdateAccountBalanceResponse {
  'userId'?: (string);
  'newCashInAccount'?: (number | string);
  'newPointsInAccount'?: (number | string);
  'message'?: (string);
}

export interface UpdateAccountBalanceResponse__Output {
  'userId': (string);
  'newCashInAccount': (number);
  'newPointsInAccount': (number);
  'message': (string);
}
