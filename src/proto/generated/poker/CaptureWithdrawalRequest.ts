// Original file: src/proto/proxy.proto


export interface CaptureWithdrawalRequest {
  'transactionId'?: (string);
  'isIdFromGraphqlApi'?: (boolean);
  'depositType'?: (string);
  'institution'?: (string);
  'accountNumber'?: (string);
  'routingNumber'?: (string);
}

export interface CaptureWithdrawalRequest__Output {
  'transactionId': (string);
  'isIdFromGraphqlApi': (boolean);
  'depositType': (string);
  'institution': (string);
  'accountNumber': (string);
  'routingNumber': (string);
}
