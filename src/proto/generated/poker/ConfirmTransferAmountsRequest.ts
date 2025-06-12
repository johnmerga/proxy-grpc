// Original file: src/proto/proxy.proto


export interface ConfirmTransferAmountsRequest {
  'amount1'?: (string);
  'amount2'?: (string);
  'verificationIdFromPaymentMethod'?: (string);
}

export interface ConfirmTransferAmountsRequest__Output {
  'amount1': (string);
  'amount2': (string);
  'verificationIdFromPaymentMethod': (string);
}
