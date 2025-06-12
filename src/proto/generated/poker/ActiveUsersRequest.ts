// Original file: src/proto/proxy.proto


export interface ActiveUsersRequest {
  'paginationCurrentPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'username'?: (string);
}

export interface ActiveUsersRequest__Output {
  'paginationCurrentPage': (string);
  'paginationItemsPerPage': (string);
  'username': (string);
}
