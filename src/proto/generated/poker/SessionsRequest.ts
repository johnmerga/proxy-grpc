// Original file: src/proto/proxy.proto


export interface SessionsRequest {
  'paginationCurrPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'startDate'?: (string);
  'endDate'?: (string);
}

export interface SessionsRequest__Output {
  'paginationCurrPage': (string);
  'paginationItemsPerPage': (string);
  'startDate': (string);
  'endDate': (string);
}
