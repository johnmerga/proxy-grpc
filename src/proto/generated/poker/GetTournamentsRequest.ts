// Original file: src/proto/proxy.proto


export interface GetTournamentsRequest {
  'userOnly'?: (boolean);
  'isForMoney'?: (boolean);
  'buyinLow'?: (string)[];
  'buyinHigh'?: (string)[];
  'status'?: (string)[];
  'timerLow'?: (string)[];
  'timerHigh'?: (string)[];
  'limits'?: (string)[];
  'openings'?: (string)[];
  'searchText'?: (string)[];
  'gameType'?: (string)[];
  'paginationCurrPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'allTournaments'?: (boolean);
  'simulationOnly'?: (boolean);
  'entryFeeLow'?: (string)[];
  'entryFeeHigh'?: (string)[];
}

export interface GetTournamentsRequest__Output {
  'userOnly': (boolean);
  'isForMoney': (boolean);
  'buyinLow': (string)[];
  'buyinHigh': (string)[];
  'status': (string)[];
  'timerLow': (string)[];
  'timerHigh': (string)[];
  'limits': (string)[];
  'openings': (string)[];
  'searchText': (string)[];
  'gameType': (string)[];
  'paginationCurrPage': (string);
  'paginationItemsPerPage': (string);
  'allTournaments': (boolean);
  'simulationOnly': (boolean);
  'entryFeeLow': (string)[];
  'entryFeeHigh': (string)[];
}
