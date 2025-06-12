// Original file: src/proto/proxy.proto

import type { PlayerStatus as _poker_PlayerStatus, PlayerStatus__Output as _poker_PlayerStatus__Output } from '../poker/PlayerStatus';

export interface GetStatusResult {
  'tournamentInstanceId'?: (string);
  'gameMeta'?: (string);
  'game'?: (string);
  'players'?: (_poker_PlayerStatus)[];
  'actionResult'?: (string);
  'tournament'?: (string);
  'rankings'?: (string);
}

export interface GetStatusResult__Output {
  'tournamentInstanceId': (string);
  'gameMeta': (string);
  'game': (string);
  'players': (_poker_PlayerStatus__Output)[];
  'actionResult': (string);
  'tournament': (string);
  'rankings': (string);
}
