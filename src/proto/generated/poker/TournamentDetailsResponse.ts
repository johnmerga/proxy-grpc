// Original file: src/proto/proxy.proto

import type { PlayerStatus as _poker_PlayerStatus, PlayerStatus__Output as _poker_PlayerStatus__Output } from '../poker/PlayerStatus';

export interface TournamentDetailsResponse {
  'tournamentInstanceId'?: (string);
  'tournamentDetails'?: (string);
  'players'?: (_poker_PlayerStatus)[];
}

export interface TournamentDetailsResponse__Output {
  'tournamentInstanceId': (string);
  'tournamentDetails': (string);
  'players': (_poker_PlayerStatus__Output)[];
}
