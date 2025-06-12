// Original file: src/proto/proxy.proto


export interface GetUserInfoResponse {
  'firstName'?: (string);
  'lastName'?: (string);
  'email'?: (string);
  'address'?: (string);
  'dateOfBirth'?: (string);
  'phone'?: (string);
  'userRewardsId'?: (string);
  'processingFeePercentage'?: (number | string);
  'processingFeeValue'?: (number | string);
  'checkProcessingFeePercentage'?: (number | string);
  'checkProcessingFeeValue'?: (number | string);
  'witdrawalProcessingFeePercentage'?: (number | string);
  'withdrawalProcessingFeeValue'?: (number | string);
  'image'?: (string);
}

export interface GetUserInfoResponse__Output {
  'firstName': (string);
  'lastName': (string);
  'email': (string);
  'address': (string);
  'dateOfBirth': (string);
  'phone': (string);
  'userRewardsId': (string);
  'processingFeePercentage': (number);
  'processingFeeValue': (number);
  'checkProcessingFeePercentage': (number);
  'checkProcessingFeeValue': (number);
  'witdrawalProcessingFeePercentage': (number);
  'withdrawalProcessingFeeValue': (number);
  'image': (string);
}
