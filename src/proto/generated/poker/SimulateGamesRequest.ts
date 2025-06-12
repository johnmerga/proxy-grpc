// Original file: src/proto/proxy.proto


export interface SimulateGamesRequest {
  'tournamentTemplateId'?: (string);
  'tournamentLimit'?: (string);
  'addonsAmount'?: (string);
  'noOfPlayers'?: (string);
  'isSingleHand'?: (string);
  'isFlashMode'?: (string);
  'isTurboMode'?: (string);
  'hasAdditionalPayout'?: (string);
}

export interface SimulateGamesRequest__Output {
  'tournamentTemplateId': (string);
  'tournamentLimit': (string);
  'addonsAmount': (string);
  'noOfPlayers': (string);
  'isSingleHand': (string);
  'isFlashMode': (string);
  'isTurboMode': (string);
  'hasAdditionalPayout': (string);
}
