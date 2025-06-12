// Original file: src/proto/proxy.proto


export interface MakeTransactionRequest {
  'paymentMethodNonce'?: (string);
  'amount'?: (string);
  'aCustomerId'?: (string);
  'paymentMethodToken'?: (string);
}

export interface MakeTransactionRequest__Output {
  'paymentMethodNonce': (string);
  'amount': (string);
  'aCustomerId': (string);
  'paymentMethodToken': (string);
}
