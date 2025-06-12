// Original file: src/proto/proxy.proto


export interface ResetPasswordRequest {
  'username'?: (string);
  'answers'?: (string);
  'newPassword'?: (string);
  'confirmPassword'?: (string);
}

export interface ResetPasswordRequest__Output {
  'username': (string);
  'answers': (string);
  'newPassword': (string);
  'confirmPassword': (string);
}
