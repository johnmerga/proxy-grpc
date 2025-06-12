// Original file: src/proto/proxy.proto


export interface CreateCashierAdjustmentRequest {
  'currency'?: (string);
  'amount'?: (string);
  'gameSessionId'?: (string);
  'tableId'?: (string);
  'tournamentId'?: (string);
  'reason'?: (string);
  'userId'?: (string);
  'playthroughRequirement'?: (string);
  'expirationDates'?: (string);
}

export interface CreateCashierAdjustmentRequest__Output {
  'currency': (string);
  'amount': (string);
  'gameSessionId': (string);
  'tableId': (string);
  'tournamentId': (string);
  'reason': (string);
  'userId': (string);
  'playthroughRequirement': (string);
  'expirationDates': (string);
}
