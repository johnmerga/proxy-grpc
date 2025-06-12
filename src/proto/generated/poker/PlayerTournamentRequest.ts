// Original file: src/proto/proxy.proto


export interface PlayerTournamentRequest {
  'searchText'?: (string)[];
  'gameType'?: (string)[];
  'paginationCurrPage'?: (string);
  'paginationItemsPerPage'?: (string);
}

export interface PlayerTournamentRequest__Output {
  'searchText': (string)[];
  'gameType': (string)[];
  'paginationCurrPage': (string);
  'paginationItemsPerPage': (string);
}
