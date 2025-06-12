// Original file: src/proto/proxy.proto


export interface GetCancelTournamentListRequest {
  'buyinLow'?: (string)[];
  'buyinHigh'?: (string)[];
  'status'?: (string)[];
  'limits'?: (string)[];
  'searchText'?: (string)[];
  'gameType'?: (string)[];
  'paginationCurrPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'simulationOnly'?: (boolean);
  'entryFeeLow'?: (string)[];
  'entryFeeHigh'?: (string)[];
  'timerLow'?: (string)[];
  'timerHigh'?: (string)[];
}

export interface GetCancelTournamentListRequest__Output {
  'buyinLow': (string)[];
  'buyinHigh': (string)[];
  'status': (string)[];
  'limits': (string)[];
  'searchText': (string)[];
  'gameType': (string)[];
  'paginationCurrPage': (string);
  'paginationItemsPerPage': (string);
  'simulationOnly': (boolean);
  'entryFeeLow': (string)[];
  'entryFeeHigh': (string)[];
  'timerLow': (string)[];
  'timerHigh': (string)[];
}
