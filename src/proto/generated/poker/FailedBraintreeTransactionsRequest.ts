// Original file: src/proto/proxy.proto


export interface FailedBraintreeTransactionsRequest {
  'paginationCurrentPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'startDate'?: (string);
  'endDate'?: (string);
  'cursor'?: (string);
}

export interface FailedBraintreeTransactionsRequest__Output {
  'paginationCurrentPage': (string);
  'paginationItemsPerPage': (string);
  'startDate': (string);
  'endDate': (string);
  'cursor': (string);
}
