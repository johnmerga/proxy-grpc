// Original file: src/proto/proxy.proto


export interface SearchSuspendedDeviceRequest {
  'username'?: (string);
  'suspended'?: (string);
  'deviceid'?: (string);
  'paginationCurrentPage'?: (string);
  'paginationItemsPerPage'?: (string);
}

export interface SearchSuspendedDeviceRequest__Output {
  'username': (string);
  'suspended': (string);
  'deviceid': (string);
  'paginationCurrentPage': (string);
  'paginationItemsPerPage': (string);
}
