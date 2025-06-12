// Original file: src/proto/proxy.proto


export interface RankHandsRequest {
  'playerHands'?: (string);
  'tableCards'?: (string);
  'additionalChecks'?: (boolean);
  'wildcardValue'?: (number);
}

export interface RankHandsRequest__Output {
  'playerHands': (string);
  'tableCards': (string);
  'additionalChecks': (boolean);
  'wildcardValue': (number);
}
