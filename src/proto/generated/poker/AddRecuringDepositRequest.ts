// Original file: src/proto/proxy.proto


export interface AddRecuringDepositRequest {
  'minimumBalanceThreshold'?: (string);
  'rechargeThresholdAmount'?: (string);
  'enableRecuringPayment'?: (boolean);
}

export interface AddRecuringDepositRequest__Output {
  'minimumBalanceThreshold': (string);
  'rechargeThresholdAmount': (string);
  'enableRecuringPayment': (boolean);
}
