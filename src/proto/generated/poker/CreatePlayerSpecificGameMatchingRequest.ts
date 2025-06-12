// Original file: src/proto/proxy.proto


export interface CreatePlayerSpecificGameMatchingRequest {
  'numberOfPlayers'?: (number);
  'playerId'?: (string);
  'matchedPlayers'?: (string);
  'status'?: (string);
}

export interface CreatePlayerSpecificGameMatchingRequest__Output {
  'numberOfPlayers': (number);
  'playerId': (string);
  'matchedPlayers': (string);
  'status': (string);
}
