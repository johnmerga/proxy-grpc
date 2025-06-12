// Original file: src/proto/proxy.proto


export interface GeopollRequest {
  'paginationCurrPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'sessionDataId'?: (string);
  'ipAddress'?: (string);
}

export interface GeopollRequest__Output {
  'paginationCurrPage': (string);
  'paginationItemsPerPage': (string);
  'sessionDataId': (string);
  'ipAddress': (string);
}
