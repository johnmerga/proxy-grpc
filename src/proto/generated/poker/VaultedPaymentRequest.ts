// Original file: src/proto/proxy.proto


export interface VaultedPaymentRequest {
  'paginationCurrentPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'startDate'?: (string);
  'endDate'?: (string);
  'cursor'?: (string);
}

export interface VaultedPaymentRequest__Output {
  'paginationCurrentPage': (string);
  'paginationItemsPerPage': (string);
  'startDate': (string);
  'endDate': (string);
  'cursor': (string);
}
