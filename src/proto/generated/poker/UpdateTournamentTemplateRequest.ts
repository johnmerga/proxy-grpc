// Original file: src/proto/proxy.proto


export interface UpdateTournamentTemplateRequest {
  'buyin'?: (string);
  'buyinChips'?: (string);
  'minPrizePoolValue'?: (string);
  'rake'?: (string);
  'isForMoney'?: (string);
  'rebuysPermitted'?: (string);
  'addonsPermitted'?: (string);
  'addonThreshold'?: (string);
  'rebuysRoundStart'?: (string);
  'rebuysRoundEnd'?: (string);
  'addonsRoundStart'?: (string);
  'addonsRoundEnd'?: (string);
  'scheduledBreaks'?: (string);
  'timeLimitSeconds'?: (string);
  'pendingTimeoutSeconds'?: (string);
  'minPlayersPerTable'?: (string);
  'maxPlayersPerTable'?: (string);
  'blindLevelAndValues'?: (string);
  'smallBlindMaxValue'?: (string);
  'tableTimer'?: (string);
  'tourPlayersMin'?: (string);
  'tourPlayersMax'?: (string);
  'type'?: (string);
  'blindsIncreaseIntervalSeconds'?: (string);
  'blindsIncreaseIntervalRounds'?: (string);
  'tableType'?: (string);
  'tableMaxNumRaises'?: (string);
  'rebalancingTableAlgorithm'?: (string);
  'status'?: (string);
  'useDecimals'?: (string);
  'name'?: (string);
  'gameType'?: (string);
  'flashPrizePoolValues'?: (string);
  'additionalPrizePoolPayoutId'?: (string);
  'additionalPayoutPlayer'?: (string);
  'prizePoolPayoutId'?: (string);
  'useAdditionalPayoutOnly'?: (string);
  'addonChips'?: (string);
  'uniqueDeck'?: (string);
  'instantPayout'?: (string);
  'tournamentTemplateId'?: (string);
  'tournamentImage'?: (string);
  'wildcardsEnabled'?: (string);
  'wildcardValue'?: (string);
  'chipsInPenny'?: (string);
  'pairMixedAddonPlayers'?: (string);
  'hardCapEnabled'?: (string);
  'newFlashMode'?: (string);
  'usernamePrivacy'?: (string);
  'revealCardsAfterAction'?: (string);
  'enableAdditionalPayout'?: (string);
  'enableAdditionalPayoutMultiplier'?: (string);
  'forceAllinFlashMode'?: (string);
  'drawAndReplaceActivated'?: (string);
  'tournamentActiveImage'?: (string);
  'middleActiveImage'?: (string);
  'tournamentWaitingImage'?: (string);
  'uploadFullImage'?: (string);
  'numberOfRecentActiveUsers'?: (string);
  'activePlayersInLastXSeconds'?: (string);
}

export interface UpdateTournamentTemplateRequest__Output {
  'buyin': (string);
  'buyinChips': (string);
  'minPrizePoolValue': (string);
  'rake': (string);
  'isForMoney': (string);
  'rebuysPermitted': (string);
  'addonsPermitted': (string);
  'addonThreshold': (string);
  'rebuysRoundStart': (string);
  'rebuysRoundEnd': (string);
  'addonsRoundStart': (string);
  'addonsRoundEnd': (string);
  'scheduledBreaks': (string);
  'timeLimitSeconds': (string);
  'pendingTimeoutSeconds': (string);
  'minPlayersPerTable': (string);
  'maxPlayersPerTable': (string);
  'blindLevelAndValues': (string);
  'smallBlindMaxValue': (string);
  'tableTimer': (string);
  'tourPlayersMin': (string);
  'tourPlayersMax': (string);
  'type': (string);
  'blindsIncreaseIntervalSeconds': (string);
  'blindsIncreaseIntervalRounds': (string);
  'tableType': (string);
  'tableMaxNumRaises': (string);
  'rebalancingTableAlgorithm': (string);
  'status': (string);
  'useDecimals': (string);
  'name': (string);
  'gameType': (string);
  'flashPrizePoolValues': (string);
  'additionalPrizePoolPayoutId': (string);
  'additionalPayoutPlayer': (string);
  'prizePoolPayoutId': (string);
  'useAdditionalPayoutOnly': (string);
  'addonChips': (string);
  'uniqueDeck': (string);
  'instantPayout': (string);
  'tournamentTemplateId': (string);
  'tournamentImage': (string);
  'wildcardsEnabled': (string);
  'wildcardValue': (string);
  'chipsInPenny': (string);
  'pairMixedAddonPlayers': (string);
  'hardCapEnabled': (string);
  'newFlashMode': (string);
  'usernamePrivacy': (string);
  'revealCardsAfterAction': (string);
  'enableAdditionalPayout': (string);
  'enableAdditionalPayoutMultiplier': (string);
  'forceAllinFlashMode': (string);
  'drawAndReplaceActivated': (string);
  'tournamentActiveImage': (string);
  'middleActiveImage': (string);
  'tournamentWaitingImage': (string);
  'uploadFullImage': (string);
  'numberOfRecentActiveUsers': (string);
  'activePlayersInLastXSeconds': (string);
}
