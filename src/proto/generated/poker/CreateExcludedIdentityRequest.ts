// Original file: src/proto/proxy.proto


export interface CreateExcludedIdentityRequest {
  'system'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'dateOfBirth'?: (string);
  'lastKnownAddress'?: (string);
  'otherInformation'?: (string);
  'details'?: (string);
  'aliases'?: (string);
  'status'?: (string);
}

export interface CreateExcludedIdentityRequest__Output {
  'system': (string);
  'firstName': (string);
  'lastName': (string);
  'dateOfBirth': (string);
  'lastKnownAddress': (string);
  'otherInformation': (string);
  'details': (string);
  'aliases': (string);
  'status': (string);
}
