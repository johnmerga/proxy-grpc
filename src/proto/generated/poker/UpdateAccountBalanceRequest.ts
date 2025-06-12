// Original file: src/proto/proxy.proto


export interface UpdateAccountBalanceRequest {
  'userId'?: (string);
  'cashAmount'?: (number | string);
  'pointsAmount'?: (number | string);
  'updateMessage'?: (string);
}

export interface UpdateAccountBalanceRequest__Output {
  'userId': (string);
  'cashAmount': (number);
  'pointsAmount': (number);
  'updateMessage': (string);
}
