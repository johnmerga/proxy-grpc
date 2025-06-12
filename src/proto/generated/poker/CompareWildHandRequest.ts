// Original file: src/proto/proxy.proto

import type { WildHand as _poker_WildHand, WildHand__Output as _poker_WildHand__Output } from '../poker/WildHand';

export interface CompareWildHandRequest {
  'hands'?: (_poker_WildHand)[];
  'wildcard'?: (string);
}

export interface CompareWildHandRequest__Output {
  'hands': (_poker_WildHand__Output)[];
  'wildcard': (string);
}
