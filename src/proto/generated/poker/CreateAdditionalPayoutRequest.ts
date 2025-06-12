// Original file: src/proto/proxy.proto


export interface CreateAdditionalPayoutRequest {
  'tournamentTemplateId'?: (string);
  'payoutStructure'?: (string);
  'isBoost'?: (boolean);
  'additionalPayoutId'?: (string);
  'boostName'?: (string);
}

export interface CreateAdditionalPayoutRequest__Output {
  'tournamentTemplateId': (string);
  'payoutStructure': (string);
  'isBoost': (boolean);
  'additionalPayoutId': (string);
  'boostName': (string);
}
