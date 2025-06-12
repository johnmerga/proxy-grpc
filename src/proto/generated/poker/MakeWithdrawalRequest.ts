// Original file: src/proto/proxy.proto


export interface MakeWithdrawalRequest {
  'nonce'?: (string);
  'customerId'?: (string);
  'deviceData'?: (string);
  'amount'?: (number | string);
}

export interface MakeWithdrawalRequest__Output {
  'nonce': (string);
  'customerId': (string);
  'deviceData': (string);
  'amount': (number);
}
