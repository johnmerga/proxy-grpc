// Original file: src/proto/proxy.proto


export interface TransactionIDsFromProcessingLogFeesRequest {
  'paginationCurrentPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'startDate'?: (string);
  'endDate'?: (string);
  'status'?: (string);
}

export interface TransactionIDsFromProcessingLogFeesRequest__Output {
  'paginationCurrentPage': (string);
  'paginationItemsPerPage': (string);
  'startDate': (string);
  'endDate': (string);
  'status': (string);
}
