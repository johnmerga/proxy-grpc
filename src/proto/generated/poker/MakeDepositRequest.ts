// Original file: src/proto/proxy.proto


export interface MakeDepositRequest {
  'nonce'?: (string);
  'customerId'?: (string);
  'deviceData'?: (string);
  'amount'?: (number | string);
  'isTransactionFee'?: (boolean);
}

export interface MakeDepositRequest__Output {
  'nonce': (string);
  'customerId': (string);
  'deviceData': (string);
  'amount': (number);
  'isTransactionFee': (boolean);
}
