// Original file: src/proto/proxy.proto

import type { PayoutOptions as _poker_PayoutOptions, PayoutOptions__Output as _poker_PayoutOptions__Output } from '../poker/PayoutOptions';

export interface AddPayoutStructureRequest {
  'payouts'?: (_poker_PayoutOptions)[];
}

export interface AddPayoutStructureRequest__Output {
  'payouts': (_poker_PayoutOptions__Output)[];
}
