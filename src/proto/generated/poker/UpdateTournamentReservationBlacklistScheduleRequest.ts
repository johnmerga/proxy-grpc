// Original file: src/proto/proxy.proto


export interface UpdateTournamentReservationBlacklistScheduleRequest {
  'tournamentId'?: (string);
  'startTime'?: (string);
  'endTime'?: (string);
  'action'?: (string);
  'scheduleId'?: (string);
  'onOffInterval'?: (boolean);
  'enableInterval'?: (string);
  'disableInterval'?: (string);
}

export interface UpdateTournamentReservationBlacklistScheduleRequest__Output {
  'tournamentId': (string);
  'startTime': (string);
  'endTime': (string);
  'action': (string);
  'scheduleId': (string);
  'onOffInterval': (boolean);
  'enableInterval': (string);
  'disableInterval': (string);
}
