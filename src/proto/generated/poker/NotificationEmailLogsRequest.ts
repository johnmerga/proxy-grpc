// Original file: src/proto/proxy.proto


export interface NotificationEmailLogsRequest {
  'id'?: (string);
  'userId'?: (string);
  'recipient'?: (string);
  'notificationTemplateName'?: (string);
  'createdDate'?: (string);
  'paginationCurrentPage'?: (string);
  'paginationItemsPerPage'?: (string);
  'username'?: (string);
}

export interface NotificationEmailLogsRequest__Output {
  'id': (string);
  'userId': (string);
  'recipient': (string);
  'notificationTemplateName': (string);
  'createdDate': (string);
  'paginationCurrentPage': (string);
  'paginationItemsPerPage': (string);
  'username': (string);
}
