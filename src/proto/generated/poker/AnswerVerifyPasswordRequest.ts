// Original file: src/proto/proxy.proto


export interface AnswerVerifyPasswordRequest {
  'securityQuestionId'?: (string);
  'securityQuestionAnswer'?: (string);
  'password'?: (string);
}

export interface AnswerVerifyPasswordRequest__Output {
  'securityQuestionId': (string);
  'securityQuestionAnswer': (string);
  'password': (string);
}
