// Original file: src/proto/proxy.proto


export interface DuplicateUserForDeviceIdRequest {
  'username'?: (string);
  'suspended'?: (string);
  'deviceId'?: (string);
  'paginationCurrentPage'?: (string);
  'paginationItemsPerPage'?: (string);
}

export interface DuplicateUserForDeviceIdRequest__Output {
  'username': (string);
  'suspended': (string);
  'deviceId': (string);
  'paginationCurrentPage': (string);
  'paginationItemsPerPage': (string);
}
