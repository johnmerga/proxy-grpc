// Original file: src/proto/proxy.proto


export interface BulkInstantDepositMatchRequest {
  'userIds'?: (string);
  'clientId'?: (string);
  'depositAmount'?: (string);
  'depositMatchAmount'?: (string);
  'maxAllowed'?: (string);
  'currencyType'?: (string);
}

export interface BulkInstantDepositMatchRequest__Output {
  'userIds': (string);
  'clientId': (string);
  'depositAmount': (string);
  'depositMatchAmount': (string);
  'maxAllowed': (string);
  'currencyType': (string);
}
