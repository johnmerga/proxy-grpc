// Original file: src/proto/proxy.proto


export interface GetLobbyTournamentTemplateListRequest {
  'status'?: (string)[];
  'buyinLow'?: (string)[];
  'buyinHigh'?: (string)[];
  'timerLow'?: (string)[];
  'timerHigh'?: (string)[];
  'limits'?: (string)[];
  'gameType'?: (string)[];
  'paginationCurrentPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'entryFeeLow'?: (string)[];
  'entryFeeHigh'?: (string)[];
}

export interface GetLobbyTournamentTemplateListRequest__Output {
  'status': (string)[];
  'buyinLow': (string)[];
  'buyinHigh': (string)[];
  'timerLow': (string)[];
  'timerHigh': (string)[];
  'limits': (string)[];
  'gameType': (string)[];
  'paginationCurrentPage': (string);
  'paginationItemsPerPage': (string);
  'entryFeeLow': (string)[];
  'entryFeeHigh': (string)[];
}
