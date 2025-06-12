// Original file: src/proto/proxy.proto


export interface JoinAnyTournamentStatusResult {
  'active'?: (boolean);
  'tournamentsLeft'?: (number);
  'totalTournaments'?: (number);
  'joinAnyStatus'?: (string);
  'joinAnyStatusMessage'?: (string);
  'joinAnyGameType'?: (string);
  'joinAnyGameMode'?: (string);
}

export interface JoinAnyTournamentStatusResult__Output {
  'active': (boolean);
  'tournamentsLeft': (number);
  'totalTournaments': (number);
  'joinAnyStatus': (string);
  'joinAnyStatusMessage': (string);
  'joinAnyGameType': (string);
  'joinAnyGameMode': (string);
}
