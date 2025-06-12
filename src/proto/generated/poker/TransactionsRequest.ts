// Original file: src/proto/proxy.proto


export interface TransactionsRequest {
  'paginationCurrPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'startDate'?: (string);
  'endDate'?: (string);
}

export interface TransactionsRequest__Output {
  'paginationCurrPage': (string);
  'paginationItemsPerPage': (string);
  'startDate': (string);
  'endDate': (string);
}
