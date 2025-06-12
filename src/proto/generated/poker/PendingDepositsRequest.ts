// Original file: src/proto/proxy.proto


export interface PendingDepositsRequest {
  'paginationCurrPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'startDate'?: (string);
  'endDate'?: (string);
}

export interface PendingDepositsRequest__Output {
  'paginationCurrPage': (string);
  'paginationItemsPerPage': (string);
  'startDate': (string);
  'endDate': (string);
}
