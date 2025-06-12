// Original file: src/proto/proxy.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AcceptTOSRequest as _poker_AcceptTOSRequest, AcceptTOSRequest__Output as _poker_AcceptTOSRequest__Output } from '../poker/AcceptTOSRequest';
import type { AcceptTOSResult as _poker_AcceptTOSResult, AcceptTOSResult__Output as _poker_AcceptTOSResult__Output } from '../poker/AcceptTOSResult';
import type { AccountStatementsRequest as _poker_AccountStatementsRequest, AccountStatementsRequest__Output as _poker_AccountStatementsRequest__Output } from '../poker/AccountStatementsRequest';
import type { AccountStatementsResponse as _poker_AccountStatementsResponse, AccountStatementsResponse__Output as _poker_AccountStatementsResponse__Output } from '../poker/AccountStatementsResponse';
import type { AccountUpdatesRequest as _poker_AccountUpdatesRequest, AccountUpdatesRequest__Output as _poker_AccountUpdatesRequest__Output } from '../poker/AccountUpdatesRequest';
import type { AccountUpdatesResult as _poker_AccountUpdatesResult, AccountUpdatesResult__Output as _poker_AccountUpdatesResult__Output } from '../poker/AccountUpdatesResult';
import type { ActionPendingWithdrawaRequest as _poker_ActionPendingWithdrawaRequest, ActionPendingWithdrawaRequest__Output as _poker_ActionPendingWithdrawaRequest__Output } from '../poker/ActionPendingWithdrawaRequest';
import type { ActionPendingWithdrawaResponse as _poker_ActionPendingWithdrawaResponse, ActionPendingWithdrawaResponse__Output as _poker_ActionPendingWithdrawaResponse__Output } from '../poker/ActionPendingWithdrawaResponse';
import type { ActiveJoinAnyTournamentsRequest as _poker_ActiveJoinAnyTournamentsRequest, ActiveJoinAnyTournamentsRequest__Output as _poker_ActiveJoinAnyTournamentsRequest__Output } from '../poker/ActiveJoinAnyTournamentsRequest';
import type { ActiveJoinAnyTournamentsResult as _poker_ActiveJoinAnyTournamentsResult, ActiveJoinAnyTournamentsResult__Output as _poker_ActiveJoinAnyTournamentsResult__Output } from '../poker/ActiveJoinAnyTournamentsResult';
import type { ActiveStatsRequest as _poker_ActiveStatsRequest, ActiveStatsRequest__Output as _poker_ActiveStatsRequest__Output } from '../poker/ActiveStatsRequest';
import type { ActiveStatsResponse as _poker_ActiveStatsResponse, ActiveStatsResponse__Output as _poker_ActiveStatsResponse__Output } from '../poker/ActiveStatsResponse';
import type { ActiveUsersDataRequest as _poker_ActiveUsersDataRequest, ActiveUsersDataRequest__Output as _poker_ActiveUsersDataRequest__Output } from '../poker/ActiveUsersDataRequest';
import type { ActiveUsersDataResponse as _poker_ActiveUsersDataResponse, ActiveUsersDataResponse__Output as _poker_ActiveUsersDataResponse__Output } from '../poker/ActiveUsersDataResponse';
import type { ActiveUsersRequest as _poker_ActiveUsersRequest, ActiveUsersRequest__Output as _poker_ActiveUsersRequest__Output } from '../poker/ActiveUsersRequest';
import type { ActiveUsersResult as _poker_ActiveUsersResult, ActiveUsersResult__Output as _poker_ActiveUsersResult__Output } from '../poker/ActiveUsersResult';
import type { AddAdminPagePermissionsRequest as _poker_AddAdminPagePermissionsRequest, AddAdminPagePermissionsRequest__Output as _poker_AddAdminPagePermissionsRequest__Output } from '../poker/AddAdminPagePermissionsRequest';
import type { AddAdminPagePermissionsResponse as _poker_AddAdminPagePermissionsResponse, AddAdminPagePermissionsResponse__Output as _poker_AddAdminPagePermissionsResponse__Output } from '../poker/AddAdminPagePermissionsResponse';
import type { AddClientEmailRequest as _poker_AddClientEmailRequest, AddClientEmailRequest__Output as _poker_AddClientEmailRequest__Output } from '../poker/AddClientEmailRequest';
import type { AddClientEmailResponse as _poker_AddClientEmailResponse, AddClientEmailResponse__Output as _poker_AddClientEmailResponse__Output } from '../poker/AddClientEmailResponse';
import type { AddNotificationTemplatesRequest as _poker_AddNotificationTemplatesRequest, AddNotificationTemplatesRequest__Output as _poker_AddNotificationTemplatesRequest__Output } from '../poker/AddNotificationTemplatesRequest';
import type { AddNotificationTemplatesResponse as _poker_AddNotificationTemplatesResponse, AddNotificationTemplatesResponse__Output as _poker_AddNotificationTemplatesResponse__Output } from '../poker/AddNotificationTemplatesResponse';
import type { AddPayoutStructureRequest as _poker_AddPayoutStructureRequest, AddPayoutStructureRequest__Output as _poker_AddPayoutStructureRequest__Output } from '../poker/AddPayoutStructureRequest';
import type { AddPayoutStructureResponse as _poker_AddPayoutStructureResponse, AddPayoutStructureResponse__Output as _poker_AddPayoutStructureResponse__Output } from '../poker/AddPayoutStructureResponse';
import type { AddPushNotificationKeyRequest as _poker_AddPushNotificationKeyRequest, AddPushNotificationKeyRequest__Output as _poker_AddPushNotificationKeyRequest__Output } from '../poker/AddPushNotificationKeyRequest';
import type { AddPushNotificationKeyResponse as _poker_AddPushNotificationKeyResponse, AddPushNotificationKeyResponse__Output as _poker_AddPushNotificationKeyResponse__Output } from '../poker/AddPushNotificationKeyResponse';
import type { AddRecuringDepositRequest as _poker_AddRecuringDepositRequest, AddRecuringDepositRequest__Output as _poker_AddRecuringDepositRequest__Output } from '../poker/AddRecuringDepositRequest';
import type { AddRecuringDepositResponse as _poker_AddRecuringDepositResponse, AddRecuringDepositResponse__Output as _poker_AddRecuringDepositResponse__Output } from '../poker/AddRecuringDepositResponse';
import type { AddTournamentTemplateToLobbyRequest as _poker_AddTournamentTemplateToLobbyRequest, AddTournamentTemplateToLobbyRequest__Output as _poker_AddTournamentTemplateToLobbyRequest__Output } from '../poker/AddTournamentTemplateToLobbyRequest';
import type { AddTournamentTemplateToLobbyResponse as _poker_AddTournamentTemplateToLobbyResponse, AddTournamentTemplateToLobbyResponse__Output as _poker_AddTournamentTemplateToLobbyResponse__Output } from '../poker/AddTournamentTemplateToLobbyResponse';
import type { AddonPlayerRequest as _poker_AddonPlayerRequest, AddonPlayerRequest__Output as _poker_AddonPlayerRequest__Output } from '../poker/AddonPlayerRequest';
import type { AddonPlayerResponse as _poker_AddonPlayerResponse, AddonPlayerResponse__Output as _poker_AddonPlayerResponse__Output } from '../poker/AddonPlayerResponse';
import type { AdjustmentRequest as _poker_AdjustmentRequest, AdjustmentRequest__Output as _poker_AdjustmentRequest__Output } from '../poker/AdjustmentRequest';
import type { AdminAddRequest as _poker_AdminAddRequest, AdminAddRequest__Output as _poker_AdminAddRequest__Output } from '../poker/AdminAddRequest';
import type { AdminJoinAnyTournamentRequest as _poker_AdminJoinAnyTournamentRequest, AdminJoinAnyTournamentRequest__Output as _poker_AdminJoinAnyTournamentRequest__Output } from '../poker/AdminJoinAnyTournamentRequest';
import type { AdminPageRequest as _poker_AdminPageRequest, AdminPageRequest__Output as _poker_AdminPageRequest__Output } from '../poker/AdminPageRequest';
import type { AdminRemoveRequest as _poker_AdminRemoveRequest, AdminRemoveRequest__Output as _poker_AdminRemoveRequest__Output } from '../poker/AdminRemoveRequest';
import type { AdminRoleAddRequest as _poker_AdminRoleAddRequest, AdminRoleAddRequest__Output as _poker_AdminRoleAddRequest__Output } from '../poker/AdminRoleAddRequest';
import type { AdminRoleRemoveRequest as _poker_AdminRoleRemoveRequest, AdminRoleRemoveRequest__Output as _poker_AdminRoleRemoveRequest__Output } from '../poker/AdminRoleRemoveRequest';
import type { AdminRoleRequest as _poker_AdminRoleRequest, AdminRoleRequest__Output as _poker_AdminRoleRequest__Output } from '../poker/AdminRoleRequest';
import type { AdminRoleUpdateRequest as _poker_AdminRoleUpdateRequest, AdminRoleUpdateRequest__Output as _poker_AdminRoleUpdateRequest__Output } from '../poker/AdminRoleUpdateRequest';
import type { AdminUpdateRequest as _poker_AdminUpdateRequest, AdminUpdateRequest__Output as _poker_AdminUpdateRequest__Output } from '../poker/AdminUpdateRequest';
import type { AllUiSettingsRequest as _poker_AllUiSettingsRequest, AllUiSettingsRequest__Output as _poker_AllUiSettingsRequest__Output } from '../poker/AllUiSettingsRequest';
import type { AnswerVerifyPasswordRequest as _poker_AnswerVerifyPasswordRequest, AnswerVerifyPasswordRequest__Output as _poker_AnswerVerifyPasswordRequest__Output } from '../poker/AnswerVerifyPasswordRequest';
import type { AnswerVerifyPasswordResponse as _poker_AnswerVerifyPasswordResponse, AnswerVerifyPasswordResponse__Output as _poker_AnswerVerifyPasswordResponse__Output } from '../poker/AnswerVerifyPasswordResponse';
import type { ApiKeyRequest as _poker_ApiKeyRequest, ApiKeyRequest__Output as _poker_ApiKeyRequest__Output } from '../poker/ApiKeyRequest';
import type { ApiKeyResponse as _poker_ApiKeyResponse, ApiKeyResponse__Output as _poker_ApiKeyResponse__Output } from '../poker/ApiKeyResponse';
import type { BufferRequest as _poker_BufferRequest, BufferRequest__Output as _poker_BufferRequest__Output } from '../poker/BufferRequest';
import type { BufferResponse as _poker_BufferResponse, BufferResponse__Output as _poker_BufferResponse__Output } from '../poker/BufferResponse';
import type { BulkInstantDepositMatchRequest as _poker_BulkInstantDepositMatchRequest, BulkInstantDepositMatchRequest__Output as _poker_BulkInstantDepositMatchRequest__Output } from '../poker/BulkInstantDepositMatchRequest';
import type { BulkInstantDepositMatchResponse as _poker_BulkInstantDepositMatchResponse, BulkInstantDepositMatchResponse__Output as _poker_BulkInstantDepositMatchResponse__Output } from '../poker/BulkInstantDepositMatchResponse';
import type { ByPassWithdrawalLimitsRequest as _poker_ByPassWithdrawalLimitsRequest, ByPassWithdrawalLimitsRequest__Output as _poker_ByPassWithdrawalLimitsRequest__Output } from '../poker/ByPassWithdrawalLimitsRequest';
import type { ByPassWithdrawalLimitsResponse as _poker_ByPassWithdrawalLimitsResponse, ByPassWithdrawalLimitsResponse__Output as _poker_ByPassWithdrawalLimitsResponse__Output } from '../poker/ByPassWithdrawalLimitsResponse';
import type { CancelAnySimulatedGamesRequest as _poker_CancelAnySimulatedGamesRequest, CancelAnySimulatedGamesRequest__Output as _poker_CancelAnySimulatedGamesRequest__Output } from '../poker/CancelAnySimulatedGamesRequest';
import type { CancelAnySimulatedGamesResponse as _poker_CancelAnySimulatedGamesResponse, CancelAnySimulatedGamesResponse__Output as _poker_CancelAnySimulatedGamesResponse__Output } from '../poker/CancelAnySimulatedGamesResponse';
import type { CancelJoinAnyTournamentRequest as _poker_CancelJoinAnyTournamentRequest, CancelJoinAnyTournamentRequest__Output as _poker_CancelJoinAnyTournamentRequest__Output } from '../poker/CancelJoinAnyTournamentRequest';
import type { CancelJoinAnyTournamentResult as _poker_CancelJoinAnyTournamentResult, CancelJoinAnyTournamentResult__Output as _poker_CancelJoinAnyTournamentResult__Output } from '../poker/CancelJoinAnyTournamentResult';
import type { CancelJoinAnyUsersRequest as _poker_CancelJoinAnyUsersRequest, CancelJoinAnyUsersRequest__Output as _poker_CancelJoinAnyUsersRequest__Output } from '../poker/CancelJoinAnyUsersRequest';
import type { CancelJoinAnyUsersResult as _poker_CancelJoinAnyUsersResult, CancelJoinAnyUsersResult__Output as _poker_CancelJoinAnyUsersResult__Output } from '../poker/CancelJoinAnyUsersResult';
import type { CancelTournamentRequest as _poker_CancelTournamentRequest, CancelTournamentRequest__Output as _poker_CancelTournamentRequest__Output } from '../poker/CancelTournamentRequest';
import type { CancelTournamentResponse as _poker_CancelTournamentResponse, CancelTournamentResponse__Output as _poker_CancelTournamentResponse__Output } from '../poker/CancelTournamentResponse';
import type { CancelTournamentsRequest as _poker_CancelTournamentsRequest, CancelTournamentsRequest__Output as _poker_CancelTournamentsRequest__Output } from '../poker/CancelTournamentsRequest';
import type { CancelTournamentsResponse as _poker_CancelTournamentsResponse, CancelTournamentsResponse__Output as _poker_CancelTournamentsResponse__Output } from '../poker/CancelTournamentsResponse';
import type { CaptureDepositRequest as _poker_CaptureDepositRequest, CaptureDepositRequest__Output as _poker_CaptureDepositRequest__Output } from '../poker/CaptureDepositRequest';
import type { CaptureDepositResponse as _poker_CaptureDepositResponse, CaptureDepositResponse__Output as _poker_CaptureDepositResponse__Output } from '../poker/CaptureDepositResponse';
import type { CaptureWithdrawalRequest as _poker_CaptureWithdrawalRequest, CaptureWithdrawalRequest__Output as _poker_CaptureWithdrawalRequest__Output } from '../poker/CaptureWithdrawalRequest';
import type { CaptureWithdrawalResponse as _poker_CaptureWithdrawalResponse, CaptureWithdrawalResponse__Output as _poker_CaptureWithdrawalResponse__Output } from '../poker/CaptureWithdrawalResponse';
import type { ChangeDisplayNameForExtensionsRequest as _poker_ChangeDisplayNameForExtensionsRequest, ChangeDisplayNameForExtensionsRequest__Output as _poker_ChangeDisplayNameForExtensionsRequest__Output } from '../poker/ChangeDisplayNameForExtensionsRequest';
import type { ChangeDisplayNameForExtensionsResponse as _poker_ChangeDisplayNameForExtensionsResponse, ChangeDisplayNameForExtensionsResponse__Output as _poker_ChangeDisplayNameForExtensionsResponse__Output } from '../poker/ChangeDisplayNameForExtensionsResponse';
import type { ChangeDisplayNameForReportsRequest as _poker_ChangeDisplayNameForReportsRequest, ChangeDisplayNameForReportsRequest__Output as _poker_ChangeDisplayNameForReportsRequest__Output } from '../poker/ChangeDisplayNameForReportsRequest';
import type { ChangeDisplayNameForReportsResponse as _poker_ChangeDisplayNameForReportsResponse, ChangeDisplayNameForReportsResponse__Output as _poker_ChangeDisplayNameForReportsResponse__Output } from '../poker/ChangeDisplayNameForReportsResponse';
import type { ChangePasswordRequest as _poker_ChangePasswordRequest, ChangePasswordRequest__Output as _poker_ChangePasswordRequest__Output } from '../poker/ChangePasswordRequest';
import type { ChangePasswordResponse as _poker_ChangePasswordResponse, ChangePasswordResponse__Output as _poker_ChangePasswordResponse__Output } from '../poker/ChangePasswordResponse';
import type { ChangeStatusOfWorksheetReportRequest as _poker_ChangeStatusOfWorksheetReportRequest, ChangeStatusOfWorksheetReportRequest__Output as _poker_ChangeStatusOfWorksheetReportRequest__Output } from '../poker/ChangeStatusOfWorksheetReportRequest';
import type { ChangeStatusOfWorksheetReportResponse as _poker_ChangeStatusOfWorksheetReportResponse, ChangeStatusOfWorksheetReportResponse__Output as _poker_ChangeStatusOfWorksheetReportResponse__Output } from '../poker/ChangeStatusOfWorksheetReportResponse';
import type { CheckWithdrawalRequest as _poker_CheckWithdrawalRequest, CheckWithdrawalRequest__Output as _poker_CheckWithdrawalRequest__Output } from '../poker/CheckWithdrawalRequest';
import type { CheckWithdrawalResponse as _poker_CheckWithdrawalResponse, CheckWithdrawalResponse__Output as _poker_CheckWithdrawalResponse__Output } from '../poker/CheckWithdrawalResponse';
import type { ClientAddRequest as _poker_ClientAddRequest, ClientAddRequest__Output as _poker_ClientAddRequest__Output } from '../poker/ClientAddRequest';
import type { ClientAddResponse as _poker_ClientAddResponse, ClientAddResponse__Output as _poker_ClientAddResponse__Output } from '../poker/ClientAddResponse';
import type { ClientAffiliateToggleRequest as _poker_ClientAffiliateToggleRequest, ClientAffiliateToggleRequest__Output as _poker_ClientAffiliateToggleRequest__Output } from '../poker/ClientAffiliateToggleRequest';
import type { ClientAffiliateToggleResponse as _poker_ClientAffiliateToggleResponse, ClientAffiliateToggleResponse__Output as _poker_ClientAffiliateToggleResponse__Output } from '../poker/ClientAffiliateToggleResponse';
import type { ClientGroupTournamentImageRequest as _poker_ClientGroupTournamentImageRequest, ClientGroupTournamentImageRequest__Output as _poker_ClientGroupTournamentImageRequest__Output } from '../poker/ClientGroupTournamentImageRequest';
import type { ClientLogoRequest as _poker_ClientLogoRequest, ClientLogoRequest__Output as _poker_ClientLogoRequest__Output } from '../poker/ClientLogoRequest';
import type { ClientLogoResponse as _poker_ClientLogoResponse, ClientLogoResponse__Output as _poker_ClientLogoResponse__Output } from '../poker/ClientLogoResponse';
import type { ClientRemoveRequest as _poker_ClientRemoveRequest, ClientRemoveRequest__Output as _poker_ClientRemoveRequest__Output } from '../poker/ClientRemoveRequest';
import type { ClientRemoveResponse as _poker_ClientRemoveResponse, ClientRemoveResponse__Output as _poker_ClientRemoveResponse__Output } from '../poker/ClientRemoveResponse';
import type { ClientRequest as _poker_ClientRequest, ClientRequest__Output as _poker_ClientRequest__Output } from '../poker/ClientRequest';
import type { ClientResponse as _poker_ClientResponse, ClientResponse__Output as _poker_ClientResponse__Output } from '../poker/ClientResponse';
import type { ClientTokenRequest as _poker_ClientTokenRequest, ClientTokenRequest__Output as _poker_ClientTokenRequest__Output } from '../poker/ClientTokenRequest';
import type { ClientTokenResponse as _poker_ClientTokenResponse, ClientTokenResponse__Output as _poker_ClientTokenResponse__Output } from '../poker/ClientTokenResponse';
import type { ClientTournamentImageRequest as _poker_ClientTournamentImageRequest, ClientTournamentImageRequest__Output as _poker_ClientTournamentImageRequest__Output } from '../poker/ClientTournamentImageRequest';
import type { ClientTournamentImageResponse as _poker_ClientTournamentImageResponse, ClientTournamentImageResponse__Output as _poker_ClientTournamentImageResponse__Output } from '../poker/ClientTournamentImageResponse';
import type { ClientUpdateRequest as _poker_ClientUpdateRequest, ClientUpdateRequest__Output as _poker_ClientUpdateRequest__Output } from '../poker/ClientUpdateRequest';
import type { ClientUpdateResponse as _poker_ClientUpdateResponse, ClientUpdateResponse__Output as _poker_ClientUpdateResponse__Output } from '../poker/ClientUpdateResponse';
import type { CompareWildHandRequest as _poker_CompareWildHandRequest, CompareWildHandRequest__Output as _poker_CompareWildHandRequest__Output } from '../poker/CompareWildHandRequest';
import type { ComponentPermissionAddRequest as _poker_ComponentPermissionAddRequest, ComponentPermissionAddRequest__Output as _poker_ComponentPermissionAddRequest__Output } from '../poker/ComponentPermissionAddRequest';
import type { ComponentPermissionRemoveRequest as _poker_ComponentPermissionRemoveRequest, ComponentPermissionRemoveRequest__Output as _poker_ComponentPermissionRemoveRequest__Output } from '../poker/ComponentPermissionRemoveRequest';
import type { ComponentPermissionRequest as _poker_ComponentPermissionRequest, ComponentPermissionRequest__Output as _poker_ComponentPermissionRequest__Output } from '../poker/ComponentPermissionRequest';
import type { ComponentPermissionUpdateRequest as _poker_ComponentPermissionUpdateRequest, ComponentPermissionUpdateRequest__Output as _poker_ComponentPermissionUpdateRequest__Output } from '../poker/ComponentPermissionUpdateRequest';
import type { ConfirmTransferAmountsRequest as _poker_ConfirmTransferAmountsRequest, ConfirmTransferAmountsRequest__Output as _poker_ConfirmTransferAmountsRequest__Output } from '../poker/ConfirmTransferAmountsRequest';
import type { ConfirmTransferAmountsResponse as _poker_ConfirmTransferAmountsResponse, ConfirmTransferAmountsResponse__Output as _poker_ConfirmTransferAmountsResponse__Output } from '../poker/ConfirmTransferAmountsResponse';
import type { CreateAdditionalPayoutRequest as _poker_CreateAdditionalPayoutRequest, CreateAdditionalPayoutRequest__Output as _poker_CreateAdditionalPayoutRequest__Output } from '../poker/CreateAdditionalPayoutRequest';
import type { CreateAdditionalPayoutResponse as _poker_CreateAdditionalPayoutResponse, CreateAdditionalPayoutResponse__Output as _poker_CreateAdditionalPayoutResponse__Output } from '../poker/CreateAdditionalPayoutResponse';
import type { CreateCashierAdjustmentRequest as _poker_CreateCashierAdjustmentRequest, CreateCashierAdjustmentRequest__Output as _poker_CreateCashierAdjustmentRequest__Output } from '../poker/CreateCashierAdjustmentRequest';
import type { CreateCashierAdjustmentResponse as _poker_CreateCashierAdjustmentResponse, CreateCashierAdjustmentResponse__Output as _poker_CreateCashierAdjustmentResponse__Output } from '../poker/CreateCashierAdjustmentResponse';
import type { CreateExcludedIdentityRequest as _poker_CreateExcludedIdentityRequest, CreateExcludedIdentityRequest__Output as _poker_CreateExcludedIdentityRequest__Output } from '../poker/CreateExcludedIdentityRequest';
import type { CreateExcludedIdentityResponse as _poker_CreateExcludedIdentityResponse, CreateExcludedIdentityResponse__Output as _poker_CreateExcludedIdentityResponse__Output } from '../poker/CreateExcludedIdentityResponse';
import type { CreateMultipleUsersRequest as _poker_CreateMultipleUsersRequest, CreateMultipleUsersRequest__Output as _poker_CreateMultipleUsersRequest__Output } from '../poker/CreateMultipleUsersRequest';
import type { CreateMultipleUsersResult as _poker_CreateMultipleUsersResult, CreateMultipleUsersResult__Output as _poker_CreateMultipleUsersResult__Output } from '../poker/CreateMultipleUsersResult';
import type { CreatePlayerSpecificGameMatchingRequest as _poker_CreatePlayerSpecificGameMatchingRequest, CreatePlayerSpecificGameMatchingRequest__Output as _poker_CreatePlayerSpecificGameMatchingRequest__Output } from '../poker/CreatePlayerSpecificGameMatchingRequest';
import type { CreatePlayerSpecificGameMatchingResponse as _poker_CreatePlayerSpecificGameMatchingResponse, CreatePlayerSpecificGameMatchingResponse__Output as _poker_CreatePlayerSpecificGameMatchingResponse__Output } from '../poker/CreatePlayerSpecificGameMatchingResponse';
import type { CreateTournamentReservationTimeRequest as _poker_CreateTournamentReservationTimeRequest, CreateTournamentReservationTimeRequest__Output as _poker_CreateTournamentReservationTimeRequest__Output } from '../poker/CreateTournamentReservationTimeRequest';
import type { CreateTournamentReservationTimeResponse as _poker_CreateTournamentReservationTimeResponse, CreateTournamentReservationTimeResponse__Output as _poker_CreateTournamentReservationTimeResponse__Output } from '../poker/CreateTournamentReservationTimeResponse';
import type { CreateTournamentTemplateRequest as _poker_CreateTournamentTemplateRequest, CreateTournamentTemplateRequest__Output as _poker_CreateTournamentTemplateRequest__Output } from '../poker/CreateTournamentTemplateRequest';
import type { CreateTournamentTemplateResponse as _poker_CreateTournamentTemplateResponse, CreateTournamentTemplateResponse__Output as _poker_CreateTournamentTemplateResponse__Output } from '../poker/CreateTournamentTemplateResponse';
import type { CustomCssRequest as _poker_CustomCssRequest, CustomCssRequest__Output as _poker_CustomCssRequest__Output } from '../poker/CustomCssRequest';
import type { CustomCssResponse as _poker_CustomCssResponse, CustomCssResponse__Output as _poker_CustomCssResponse__Output } from '../poker/CustomCssResponse';
import type { DataResponse as _poker_DataResponse, DataResponse__Output as _poker_DataResponse__Output } from '../poker/DataResponse';
import type { DeleteClientEmailRequest as _poker_DeleteClientEmailRequest, DeleteClientEmailRequest__Output as _poker_DeleteClientEmailRequest__Output } from '../poker/DeleteClientEmailRequest';
import type { DeleteClientEmailResponse as _poker_DeleteClientEmailResponse, DeleteClientEmailResponse__Output as _poker_DeleteClientEmailResponse__Output } from '../poker/DeleteClientEmailResponse';
import type { DeletePageExtensionRequest as _poker_DeletePageExtensionRequest, DeletePageExtensionRequest__Output as _poker_DeletePageExtensionRequest__Output } from '../poker/DeletePageExtensionRequest';
import type { DeletePageExtensionResponse as _poker_DeletePageExtensionResponse, DeletePageExtensionResponse__Output as _poker_DeletePageExtensionResponse__Output } from '../poker/DeletePageExtensionResponse';
import type { DeletePaymentMethodRequest as _poker_DeletePaymentMethodRequest, DeletePaymentMethodRequest__Output as _poker_DeletePaymentMethodRequest__Output } from '../poker/DeletePaymentMethodRequest';
import type { DeletePaymentMethodResponse as _poker_DeletePaymentMethodResponse, DeletePaymentMethodResponse__Output as _poker_DeletePaymentMethodResponse__Output } from '../poker/DeletePaymentMethodResponse';
import type { DeletePrizePoolStatusRequest as _poker_DeletePrizePoolStatusRequest, DeletePrizePoolStatusRequest__Output as _poker_DeletePrizePoolStatusRequest__Output } from '../poker/DeletePrizePoolStatusRequest';
import type { DeletePrizePoolStatusResponse as _poker_DeletePrizePoolStatusResponse, DeletePrizePoolStatusResponse__Output as _poker_DeletePrizePoolStatusResponse__Output } from '../poker/DeletePrizePoolStatusResponse';
import type { DeleteUSerGeoLocationResponse as _poker_DeleteUSerGeoLocationResponse, DeleteUSerGeoLocationResponse__Output as _poker_DeleteUSerGeoLocationResponse__Output } from '../poker/DeleteUSerGeoLocationResponse';
import type { DeleteUserGeoLocationRequest as _poker_DeleteUserGeoLocationRequest, DeleteUserGeoLocationRequest__Output as _poker_DeleteUserGeoLocationRequest__Output } from '../poker/DeleteUserGeoLocationRequest';
import type { DeleteWorksheetOrReportRequest as _poker_DeleteWorksheetOrReportRequest, DeleteWorksheetOrReportRequest__Output as _poker_DeleteWorksheetOrReportRequest__Output } from '../poker/DeleteWorksheetOrReportRequest';
import type { DeleteWorksheetOrReportResponse as _poker_DeleteWorksheetOrReportResponse, DeleteWorksheetOrReportResponse__Output as _poker_DeleteWorksheetOrReportResponse__Output } from '../poker/DeleteWorksheetOrReportResponse';
import type { DepositsRequest as _poker_DepositsRequest, DepositsRequest__Output as _poker_DepositsRequest__Output } from '../poker/DepositsRequest';
import type { DisableWithdrawalRequest as _poker_DisableWithdrawalRequest, DisableWithdrawalRequest__Output as _poker_DisableWithdrawalRequest__Output } from '../poker/DisableWithdrawalRequest';
import type { DisableWithdrawalResponse as _poker_DisableWithdrawalResponse, DisableWithdrawalResponse__Output as _poker_DisableWithdrawalResponse__Output } from '../poker/DisableWithdrawalResponse';
import type { DisabledWithdrawalsRequest as _poker_DisabledWithdrawalsRequest, DisabledWithdrawalsRequest__Output as _poker_DisabledWithdrawalsRequest__Output } from '../poker/DisabledWithdrawalsRequest';
import type { DisabledWithdrawalsResponse as _poker_DisabledWithdrawalsResponse, DisabledWithdrawalsResponse__Output as _poker_DisabledWithdrawalsResponse__Output } from '../poker/DisabledWithdrawalsResponse';
import type { DrawAddActionRequest as _poker_DrawAddActionRequest, DrawAddActionRequest__Output as _poker_DrawAddActionRequest__Output } from '../poker/DrawAddActionRequest';
import type { DrawReplaceActionRequest as _poker_DrawReplaceActionRequest, DrawReplaceActionRequest__Output as _poker_DrawReplaceActionRequest__Output } from '../poker/DrawReplaceActionRequest';
import type { DriverLicenseImageRequest as _poker_DriverLicenseImageRequest, DriverLicenseImageRequest__Output as _poker_DriverLicenseImageRequest__Output } from '../poker/DriverLicenseImageRequest';
import type { DriverLicenseImageResponse as _poker_DriverLicenseImageResponse, DriverLicenseImageResponse__Output as _poker_DriverLicenseImageResponse__Output } from '../poker/DriverLicenseImageResponse';
import type { DriversLicenseRequest as _poker_DriversLicenseRequest, DriversLicenseRequest__Output as _poker_DriversLicenseRequest__Output } from '../poker/DriversLicenseRequest';
import type { DriversLicenseResponse as _poker_DriversLicenseResponse, DriversLicenseResponse__Output as _poker_DriversLicenseResponse__Output } from '../poker/DriversLicenseResponse';
import type { DuplicateUserForDeviceIdRequest as _poker_DuplicateUserForDeviceIdRequest, DuplicateUserForDeviceIdRequest__Output as _poker_DuplicateUserForDeviceIdRequest__Output } from '../poker/DuplicateUserForDeviceIdRequest';
import type { DuplicateUserForDeviceIdResponse as _poker_DuplicateUserForDeviceIdResponse, DuplicateUserForDeviceIdResponse__Output as _poker_DuplicateUserForDeviceIdResponse__Output } from '../poker/DuplicateUserForDeviceIdResponse';
import type { EditThemesRequest as _poker_EditThemesRequest, EditThemesRequest__Output as _poker_EditThemesRequest__Output } from '../poker/EditThemesRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { ExtractPageExtensionRequest as _poker_ExtractPageExtensionRequest, ExtractPageExtensionRequest__Output as _poker_ExtractPageExtensionRequest__Output } from '../poker/ExtractPageExtensionRequest';
import type { ExtractPageExtensionResponse as _poker_ExtractPageExtensionResponse, ExtractPageExtensionResponse__Output as _poker_ExtractPageExtensionResponse__Output } from '../poker/ExtractPageExtensionResponse';
import type { FailedBraintreeTransactionsRequest as _poker_FailedBraintreeTransactionsRequest, FailedBraintreeTransactionsRequest__Output as _poker_FailedBraintreeTransactionsRequest__Output } from '../poker/FailedBraintreeTransactionsRequest';
import type { FailedBraintreeTransactionsResponse as _poker_FailedBraintreeTransactionsResponse, FailedBraintreeTransactionsResponse__Output as _poker_FailedBraintreeTransactionsResponse__Output } from '../poker/FailedBraintreeTransactionsResponse';
import type { FailedReferralLogsRequest as _poker_FailedReferralLogsRequest, FailedReferralLogsRequest__Output as _poker_FailedReferralLogsRequest__Output } from '../poker/FailedReferralLogsRequest';
import type { FailedReferralLogsResponse as _poker_FailedReferralLogsResponse, FailedReferralLogsResponse__Output as _poker_FailedReferralLogsResponse__Output } from '../poker/FailedReferralLogsResponse';
import type { FetchSecurityQuestionsRequest as _poker_FetchSecurityQuestionsRequest, FetchSecurityQuestionsRequest__Output as _poker_FetchSecurityQuestionsRequest__Output } from '../poker/FetchSecurityQuestionsRequest';
import type { FetchSecurityQuestionsResponse as _poker_FetchSecurityQuestionsResponse, FetchSecurityQuestionsResponse__Output as _poker_FetchSecurityQuestionsResponse__Output } from '../poker/FetchSecurityQuestionsResponse';
import type { FloatResponse as _poker_FloatResponse, FloatResponse__Output as _poker_FloatResponse__Output } from '../poker/FloatResponse';
import type { GamePlayStatusForUserPerTableRequest as _poker_GamePlayStatusForUserPerTableRequest, GamePlayStatusForUserPerTableRequest__Output as _poker_GamePlayStatusForUserPerTableRequest__Output } from '../poker/GamePlayStatusForUserPerTableRequest';
import type { GamePlayStatusForUserPerTableResponse as _poker_GamePlayStatusForUserPerTableResponse, GamePlayStatusForUserPerTableResponse__Output as _poker_GamePlayStatusForUserPerTableResponse__Output } from '../poker/GamePlayStatusForUserPerTableResponse';
import type { GeofenceAddRequest as _poker_GeofenceAddRequest, GeofenceAddRequest__Output as _poker_GeofenceAddRequest__Output } from '../poker/GeofenceAddRequest';
import type { GeofenceAddResponse as _poker_GeofenceAddResponse, GeofenceAddResponse__Output as _poker_GeofenceAddResponse__Output } from '../poker/GeofenceAddResponse';
import type { GeofenceBlacklistRequest as _poker_GeofenceBlacklistRequest, GeofenceBlacklistRequest__Output as _poker_GeofenceBlacklistRequest__Output } from '../poker/GeofenceBlacklistRequest';
import type { GeofenceBlacklistResponse as _poker_GeofenceBlacklistResponse, GeofenceBlacklistResponse__Output as _poker_GeofenceBlacklistResponse__Output } from '../poker/GeofenceBlacklistResponse';
import type { GeofenceClientGlobalRuleRequest as _poker_GeofenceClientGlobalRuleRequest, GeofenceClientGlobalRuleRequest__Output as _poker_GeofenceClientGlobalRuleRequest__Output } from '../poker/GeofenceClientGlobalRuleRequest';
import type { GeofenceClientGlobalRuleResponse as _poker_GeofenceClientGlobalRuleResponse, GeofenceClientGlobalRuleResponse__Output as _poker_GeofenceClientGlobalRuleResponse__Output } from '../poker/GeofenceClientGlobalRuleResponse';
import type { GeofenceClientsRequest as _poker_GeofenceClientsRequest, GeofenceClientsRequest__Output as _poker_GeofenceClientsRequest__Output } from '../poker/GeofenceClientsRequest';
import type { GeofenceClientsResponse as _poker_GeofenceClientsResponse, GeofenceClientsResponse__Output as _poker_GeofenceClientsResponse__Output } from '../poker/GeofenceClientsResponse';
import type { GeofenceDeviceRuleRequest as _poker_GeofenceDeviceRuleRequest, GeofenceDeviceRuleRequest__Output as _poker_GeofenceDeviceRuleRequest__Output } from '../poker/GeofenceDeviceRuleRequest';
import type { GeofenceDeviceRuleResponse as _poker_GeofenceDeviceRuleResponse, GeofenceDeviceRuleResponse__Output as _poker_GeofenceDeviceRuleResponse__Output } from '../poker/GeofenceDeviceRuleResponse';
import type { GeofenceGlobalRuleRequest as _poker_GeofenceGlobalRuleRequest, GeofenceGlobalRuleRequest__Output as _poker_GeofenceGlobalRuleRequest__Output } from '../poker/GeofenceGlobalRuleRequest';
import type { GeofenceGlobalRuleResponse as _poker_GeofenceGlobalRuleResponse, GeofenceGlobalRuleResponse__Output as _poker_GeofenceGlobalRuleResponse__Output } from '../poker/GeofenceGlobalRuleResponse';
import type { GeofenceRemoveRequest as _poker_GeofenceRemoveRequest, GeofenceRemoveRequest__Output as _poker_GeofenceRemoveRequest__Output } from '../poker/GeofenceRemoveRequest';
import type { GeofenceRemoveResponse as _poker_GeofenceRemoveResponse, GeofenceRemoveResponse__Output as _poker_GeofenceRemoveResponse__Output } from '../poker/GeofenceRemoveResponse';
import type { GeofenceRequest as _poker_GeofenceRequest, GeofenceRequest__Output as _poker_GeofenceRequest__Output } from '../poker/GeofenceRequest';
import type { GeofenceResponse as _poker_GeofenceResponse, GeofenceResponse__Output as _poker_GeofenceResponse__Output } from '../poker/GeofenceResponse';
import type { GeofenceUpdateRequest as _poker_GeofenceUpdateRequest, GeofenceUpdateRequest__Output as _poker_GeofenceUpdateRequest__Output } from '../poker/GeofenceUpdateRequest';
import type { GeofenceUpdateResponse as _poker_GeofenceUpdateResponse, GeofenceUpdateResponse__Output as _poker_GeofenceUpdateResponse__Output } from '../poker/GeofenceUpdateResponse';
import type { GeofenceUsersRequest as _poker_GeofenceUsersRequest, GeofenceUsersRequest__Output as _poker_GeofenceUsersRequest__Output } from '../poker/GeofenceUsersRequest';
import type { GeofenceUsersResponse as _poker_GeofenceUsersResponse, GeofenceUsersResponse__Output as _poker_GeofenceUsersResponse__Output } from '../poker/GeofenceUsersResponse';
import type { GeofenceWhitelistRequest as _poker_GeofenceWhitelistRequest, GeofenceWhitelistRequest__Output as _poker_GeofenceWhitelistRequest__Output } from '../poker/GeofenceWhitelistRequest';
import type { GeofenceWhitelistResponse as _poker_GeofenceWhitelistResponse, GeofenceWhitelistResponse__Output as _poker_GeofenceWhitelistResponse__Output } from '../poker/GeofenceWhitelistResponse';
import type { GeolocationRequest as _poker_GeolocationRequest, GeolocationRequest__Output as _poker_GeolocationRequest__Output } from '../poker/GeolocationRequest';
import type { GeolocationResult as _poker_GeolocationResult, GeolocationResult__Output as _poker_GeolocationResult__Output } from '../poker/GeolocationResult';
import type { GeopollRequest as _poker_GeopollRequest, GeopollRequest__Output as _poker_GeopollRequest__Output } from '../poker/GeopollRequest';
import type { GeopollResponse as _poker_GeopollResponse, GeopollResponse__Output as _poker_GeopollResponse__Output } from '../poker/GeopollResponse';
import type { GetAdditionalPayoutByIdRequest as _poker_GetAdditionalPayoutByIdRequest, GetAdditionalPayoutByIdRequest__Output as _poker_GetAdditionalPayoutByIdRequest__Output } from '../poker/GetAdditionalPayoutByIdRequest';
import type { GetAdditionalPayoutByIdResponse as _poker_GetAdditionalPayoutByIdResponse, GetAdditionalPayoutByIdResponse__Output as _poker_GetAdditionalPayoutByIdResponse__Output } from '../poker/GetAdditionalPayoutByIdResponse';
import type { GetAdditionalPayoutDetailRequest as _poker_GetAdditionalPayoutDetailRequest, GetAdditionalPayoutDetailRequest__Output as _poker_GetAdditionalPayoutDetailRequest__Output } from '../poker/GetAdditionalPayoutDetailRequest';
import type { GetAdditionalPayoutDetailResponse as _poker_GetAdditionalPayoutDetailResponse, GetAdditionalPayoutDetailResponse__Output as _poker_GetAdditionalPayoutDetailResponse__Output } from '../poker/GetAdditionalPayoutDetailResponse';
import type { GetAllBoostedAdditionalPayoutRequest as _poker_GetAllBoostedAdditionalPayoutRequest, GetAllBoostedAdditionalPayoutRequest__Output as _poker_GetAllBoostedAdditionalPayoutRequest__Output } from '../poker/GetAllBoostedAdditionalPayoutRequest';
import type { GetAllBoostedAdditionalPayoutResponse as _poker_GetAllBoostedAdditionalPayoutResponse, GetAllBoostedAdditionalPayoutResponse__Output as _poker_GetAllBoostedAdditionalPayoutResponse__Output } from '../poker/GetAllBoostedAdditionalPayoutResponse';
import type { GetAllClientEmailRequest as _poker_GetAllClientEmailRequest, GetAllClientEmailRequest__Output as _poker_GetAllClientEmailRequest__Output } from '../poker/GetAllClientEmailRequest';
import type { GetAllClientEmailResponse as _poker_GetAllClientEmailResponse, GetAllClientEmailResponse__Output as _poker_GetAllClientEmailResponse__Output } from '../poker/GetAllClientEmailResponse';
import type { GetCancelTournamentListRequest as _poker_GetCancelTournamentListRequest, GetCancelTournamentListRequest__Output as _poker_GetCancelTournamentListRequest__Output } from '../poker/GetCancelTournamentListRequest';
import type { GetCancelTournamentListResponse as _poker_GetCancelTournamentListResponse, GetCancelTournamentListResponse__Output as _poker_GetCancelTournamentListResponse__Output } from '../poker/GetCancelTournamentListResponse';
import type { GetClientEmailRequest as _poker_GetClientEmailRequest, GetClientEmailRequest__Output as _poker_GetClientEmailRequest__Output } from '../poker/GetClientEmailRequest';
import type { GetClientEmailResponse as _poker_GetClientEmailResponse, GetClientEmailResponse__Output as _poker_GetClientEmailResponse__Output } from '../poker/GetClientEmailResponse';
import type { GetCustomerIDRequest as _poker_GetCustomerIDRequest, GetCustomerIDRequest__Output as _poker_GetCustomerIDRequest__Output } from '../poker/GetCustomerIDRequest';
import type { GetCustomerIDResponse as _poker_GetCustomerIDResponse, GetCustomerIDResponse__Output as _poker_GetCustomerIDResponse__Output } from '../poker/GetCustomerIDResponse';
import type { GetDeviceTokenUsersRequest as _poker_GetDeviceTokenUsersRequest, GetDeviceTokenUsersRequest__Output as _poker_GetDeviceTokenUsersRequest__Output } from '../poker/GetDeviceTokenUsersRequest';
import type { GetDeviceTokenUsersResponse as _poker_GetDeviceTokenUsersResponse, GetDeviceTokenUsersResponse__Output as _poker_GetDeviceTokenUsersResponse__Output } from '../poker/GetDeviceTokenUsersResponse';
import type { GetFreePlayPromoUsersRequest as _poker_GetFreePlayPromoUsersRequest, GetFreePlayPromoUsersRequest__Output as _poker_GetFreePlayPromoUsersRequest__Output } from '../poker/GetFreePlayPromoUsersRequest';
import type { GetFreePlayPromoUsersResponse as _poker_GetFreePlayPromoUsersResponse, GetFreePlayPromoUsersResponse__Output as _poker_GetFreePlayPromoUsersResponse__Output } from '../poker/GetFreePlayPromoUsersResponse';
import type { GetGameplayHistoriesRequest as _poker_GetGameplayHistoriesRequest, GetGameplayHistoriesRequest__Output as _poker_GetGameplayHistoriesRequest__Output } from '../poker/GetGameplayHistoriesRequest';
import type { GetGameplayHistoriesResponse as _poker_GetGameplayHistoriesResponse, GetGameplayHistoriesResponse__Output as _poker_GetGameplayHistoriesResponse__Output } from '../poker/GetGameplayHistoriesResponse';
import type { GetHandHistoryRequest as _poker_GetHandHistoryRequest, GetHandHistoryRequest__Output as _poker_GetHandHistoryRequest__Output } from '../poker/GetHandHistoryRequest';
import type { GetHandHistoryResponse as _poker_GetHandHistoryResponse, GetHandHistoryResponse__Output as _poker_GetHandHistoryResponse__Output } from '../poker/GetHandHistoryResponse';
import type { GetLobbyTournamentTemplateListRequest as _poker_GetLobbyTournamentTemplateListRequest, GetLobbyTournamentTemplateListRequest__Output as _poker_GetLobbyTournamentTemplateListRequest__Output } from '../poker/GetLobbyTournamentTemplateListRequest';
import type { GetLobbyTournamentTemplateListResponse as _poker_GetLobbyTournamentTemplateListResponse, GetLobbyTournamentTemplateListResponse__Output as _poker_GetLobbyTournamentTemplateListResponse__Output } from '../poker/GetLobbyTournamentTemplateListResponse';
import type { GetLobbyVisibleTournamentListRequest as _poker_GetLobbyVisibleTournamentListRequest, GetLobbyVisibleTournamentListRequest__Output as _poker_GetLobbyVisibleTournamentListRequest__Output } from '../poker/GetLobbyVisibleTournamentListRequest';
import type { GetLobbyVisibleTournamentListResponse as _poker_GetLobbyVisibleTournamentListResponse, GetLobbyVisibleTournamentListResponse__Output as _poker_GetLobbyVisibleTournamentListResponse__Output } from '../poker/GetLobbyVisibleTournamentListResponse';
import type { GetNotificationTemplatesRequest as _poker_GetNotificationTemplatesRequest, GetNotificationTemplatesRequest__Output as _poker_GetNotificationTemplatesRequest__Output } from '../poker/GetNotificationTemplatesRequest';
import type { GetNotificationTemplatesResponse as _poker_GetNotificationTemplatesResponse, GetNotificationTemplatesResponse__Output as _poker_GetNotificationTemplatesResponse__Output } from '../poker/GetNotificationTemplatesResponse';
import type { GetPageExtensionsRequest as _poker_GetPageExtensionsRequest, GetPageExtensionsRequest__Output as _poker_GetPageExtensionsRequest__Output } from '../poker/GetPageExtensionsRequest';
import type { GetPageExtensionsResponse as _poker_GetPageExtensionsResponse, GetPageExtensionsResponse__Output as _poker_GetPageExtensionsResponse__Output } from '../poker/GetPageExtensionsResponse';
import type { GetPagePermissionsRequest as _poker_GetPagePermissionsRequest, GetPagePermissionsRequest__Output as _poker_GetPagePermissionsRequest__Output } from '../poker/GetPagePermissionsRequest';
import type { GetPagePermissionsResponse as _poker_GetPagePermissionsResponse, GetPagePermissionsResponse__Output as _poker_GetPagePermissionsResponse__Output } from '../poker/GetPagePermissionsResponse';
import type { GetPasswordResetLinkRequest as _poker_GetPasswordResetLinkRequest, GetPasswordResetLinkRequest__Output as _poker_GetPasswordResetLinkRequest__Output } from '../poker/GetPasswordResetLinkRequest';
import type { GetPasswordResetLinkResponse as _poker_GetPasswordResetLinkResponse, GetPasswordResetLinkResponse__Output as _poker_GetPasswordResetLinkResponse__Output } from '../poker/GetPasswordResetLinkResponse';
import type { GetPayoutStructureRequest as _poker_GetPayoutStructureRequest, GetPayoutStructureRequest__Output as _poker_GetPayoutStructureRequest__Output } from '../poker/GetPayoutStructureRequest';
import type { GetPayoutStructureResponse as _poker_GetPayoutStructureResponse, GetPayoutStructureResponse__Output as _poker_GetPayoutStructureResponse__Output } from '../poker/GetPayoutStructureResponse';
import type { GetPendingTransactionsRequest as _poker_GetPendingTransactionsRequest, GetPendingTransactionsRequest__Output as _poker_GetPendingTransactionsRequest__Output } from '../poker/GetPendingTransactionsRequest';
import type { GetPendingTransactionsResponse as _poker_GetPendingTransactionsResponse, GetPendingTransactionsResponse__Output as _poker_GetPendingTransactionsResponse__Output } from '../poker/GetPendingTransactionsResponse';
import type { GetPlayerSpecificGameMatchingRequest as _poker_GetPlayerSpecificGameMatchingRequest, GetPlayerSpecificGameMatchingRequest__Output as _poker_GetPlayerSpecificGameMatchingRequest__Output } from '../poker/GetPlayerSpecificGameMatchingRequest';
import type { GetPlayerSpecificGameMatchingResponse as _poker_GetPlayerSpecificGameMatchingResponse, GetPlayerSpecificGameMatchingResponse__Output as _poker_GetPlayerSpecificGameMatchingResponse__Output } from '../poker/GetPlayerSpecificGameMatchingResponse';
import type { GetPoolAccountBalanceRequest as _poker_GetPoolAccountBalanceRequest, GetPoolAccountBalanceRequest__Output as _poker_GetPoolAccountBalanceRequest__Output } from '../poker/GetPoolAccountBalanceRequest';
import type { GetPoolAccountBalanceResponse as _poker_GetPoolAccountBalanceResponse, GetPoolAccountBalanceResponse__Output as _poker_GetPoolAccountBalanceResponse__Output } from '../poker/GetPoolAccountBalanceResponse';
import type { GetRankingsRequest as _poker_GetRankingsRequest, GetRankingsRequest__Output as _poker_GetRankingsRequest__Output } from '../poker/GetRankingsRequest';
import type { GetRankingsResult as _poker_GetRankingsResult, GetRankingsResult__Output as _poker_GetRankingsResult__Output } from '../poker/GetRankingsResult';
import type { GetRecuringDepositRequest as _poker_GetRecuringDepositRequest, GetRecuringDepositRequest__Output as _poker_GetRecuringDepositRequest__Output } from '../poker/GetRecuringDepositRequest';
import type { GetRecuringDepositResponse as _poker_GetRecuringDepositResponse, GetRecuringDepositResponse__Output as _poker_GetRecuringDepositResponse__Output } from '../poker/GetRecuringDepositResponse';
import type { GetReportsForAffiliateCopyRequest as _poker_GetReportsForAffiliateCopyRequest, GetReportsForAffiliateCopyRequest__Output as _poker_GetReportsForAffiliateCopyRequest__Output } from '../poker/GetReportsForAffiliateCopyRequest';
import type { GetReportsForAffiliateCopyResponse as _poker_GetReportsForAffiliateCopyResponse, GetReportsForAffiliateCopyResponse__Output as _poker_GetReportsForAffiliateCopyResponse__Output } from '../poker/GetReportsForAffiliateCopyResponse';
import type { GetReservationTimeEditorRequest as _poker_GetReservationTimeEditorRequest, GetReservationTimeEditorRequest__Output as _poker_GetReservationTimeEditorRequest__Output } from '../poker/GetReservationTimeEditorRequest';
import type { GetReservationTimeEditorResponse as _poker_GetReservationTimeEditorResponse, GetReservationTimeEditorResponse__Output as _poker_GetReservationTimeEditorResponse__Output } from '../poker/GetReservationTimeEditorResponse';
import type { GetRoyalHandsRequest as _poker_GetRoyalHandsRequest, GetRoyalHandsRequest__Output as _poker_GetRoyalHandsRequest__Output } from '../poker/GetRoyalHandsRequest';
import type { GetRoyalHandsResponse as _poker_GetRoyalHandsResponse, GetRoyalHandsResponse__Output as _poker_GetRoyalHandsResponse__Output } from '../poker/GetRoyalHandsResponse';
import type { GetStatusRequest as _poker_GetStatusRequest, GetStatusRequest__Output as _poker_GetStatusRequest__Output } from '../poker/GetStatusRequest';
import type { GetStatusResult as _poker_GetStatusResult, GetStatusResult__Output as _poker_GetStatusResult__Output } from '../poker/GetStatusResult';
import type { GetTournamentAdditionalPayoutBoostRequest as _poker_GetTournamentAdditionalPayoutBoostRequest, GetTournamentAdditionalPayoutBoostRequest__Output as _poker_GetTournamentAdditionalPayoutBoostRequest__Output } from '../poker/GetTournamentAdditionalPayoutBoostRequest';
import type { GetTournamentAdditionalPayoutBoostResponse as _poker_GetTournamentAdditionalPayoutBoostResponse, GetTournamentAdditionalPayoutBoostResponse__Output as _poker_GetTournamentAdditionalPayoutBoostResponse__Output } from '../poker/GetTournamentAdditionalPayoutBoostResponse';
import type { GetTournamentReservationBlacklistScheduleRequest as _poker_GetTournamentReservationBlacklistScheduleRequest, GetTournamentReservationBlacklistScheduleRequest__Output as _poker_GetTournamentReservationBlacklistScheduleRequest__Output } from '../poker/GetTournamentReservationBlacklistScheduleRequest';
import type { GetTournamentReservationBlacklistScheduleResponse as _poker_GetTournamentReservationBlacklistScheduleResponse, GetTournamentReservationBlacklistScheduleResponse__Output as _poker_GetTournamentReservationBlacklistScheduleResponse__Output } from '../poker/GetTournamentReservationBlacklistScheduleResponse';
import type { GetTournamentReservationTimeRequest as _poker_GetTournamentReservationTimeRequest, GetTournamentReservationTimeRequest__Output as _poker_GetTournamentReservationTimeRequest__Output } from '../poker/GetTournamentReservationTimeRequest';
import type { GetTournamentReservationTimeResponse as _poker_GetTournamentReservationTimeResponse, GetTournamentReservationTimeResponse__Output as _poker_GetTournamentReservationTimeResponse__Output } from '../poker/GetTournamentReservationTimeResponse';
import type { GetTournamentTemplateBufferStateRequest as _poker_GetTournamentTemplateBufferStateRequest, GetTournamentTemplateBufferStateRequest__Output as _poker_GetTournamentTemplateBufferStateRequest__Output } from '../poker/GetTournamentTemplateBufferStateRequest';
import type { GetTournamentTemplateBufferStateResponse as _poker_GetTournamentTemplateBufferStateResponse, GetTournamentTemplateBufferStateResponse__Output as _poker_GetTournamentTemplateBufferStateResponse__Output } from '../poker/GetTournamentTemplateBufferStateResponse';
import type { GetTournamentTemplateDetailRequest as _poker_GetTournamentTemplateDetailRequest, GetTournamentTemplateDetailRequest__Output as _poker_GetTournamentTemplateDetailRequest__Output } from '../poker/GetTournamentTemplateDetailRequest';
import type { GetTournamentTemplateDetailResponse as _poker_GetTournamentTemplateDetailResponse, GetTournamentTemplateDetailResponse__Output as _poker_GetTournamentTemplateDetailResponse__Output } from '../poker/GetTournamentTemplateDetailResponse';
import type { GetTournamentTemplateListRequest as _poker_GetTournamentTemplateListRequest, GetTournamentTemplateListRequest__Output as _poker_GetTournamentTemplateListRequest__Output } from '../poker/GetTournamentTemplateListRequest';
import type { GetTournamentTemplateListResponse as _poker_GetTournamentTemplateListResponse, GetTournamentTemplateListResponse__Output as _poker_GetTournamentTemplateListResponse__Output } from '../poker/GetTournamentTemplateListResponse';
import type { GetTournamentsRequest as _poker_GetTournamentsRequest, GetTournamentsRequest__Output as _poker_GetTournamentsRequest__Output } from '../poker/GetTournamentsRequest';
import type { GetTournamentsResponse as _poker_GetTournamentsResponse, GetTournamentsResponse__Output as _poker_GetTournamentsResponse__Output } from '../poker/GetTournamentsResponse';
import type { GetUserByEmailRequest as _poker_GetUserByEmailRequest, GetUserByEmailRequest__Output as _poker_GetUserByEmailRequest__Output } from '../poker/GetUserByEmailRequest';
import type { GetUserByEmailResponse as _poker_GetUserByEmailResponse, GetUserByEmailResponse__Output as _poker_GetUserByEmailResponse__Output } from '../poker/GetUserByEmailResponse';
import type { GetUserExportDataRequest as _poker_GetUserExportDataRequest, GetUserExportDataRequest__Output as _poker_GetUserExportDataRequest__Output } from '../poker/GetUserExportDataRequest';
import type { GetUserExportDataResponse as _poker_GetUserExportDataResponse, GetUserExportDataResponse__Output as _poker_GetUserExportDataResponse__Output } from '../poker/GetUserExportDataResponse';
import type { GetUserInfoRequest as _poker_GetUserInfoRequest, GetUserInfoRequest__Output as _poker_GetUserInfoRequest__Output } from '../poker/GetUserInfoRequest';
import type { GetUserInfoResponse as _poker_GetUserInfoResponse, GetUserInfoResponse__Output as _poker_GetUserInfoResponse__Output } from '../poker/GetUserInfoResponse';
import type { GetWithdrawalPendingRequest as _poker_GetWithdrawalPendingRequest, GetWithdrawalPendingRequest__Output as _poker_GetWithdrawalPendingRequest__Output } from '../poker/GetWithdrawalPendingRequest';
import type { GetWithdrawalPendingResponse as _poker_GetWithdrawalPendingResponse, GetWithdrawalPendingResponse__Output as _poker_GetWithdrawalPendingResponse__Output } from '../poker/GetWithdrawalPendingResponse';
import type { GetWorksheetsAndReportsRequest as _poker_GetWorksheetsAndReportsRequest, GetWorksheetsAndReportsRequest__Output as _poker_GetWorksheetsAndReportsRequest__Output } from '../poker/GetWorksheetsAndReportsRequest';
import type { GetWorksheetsAndReportsResponse as _poker_GetWorksheetsAndReportsResponse, GetWorksheetsAndReportsResponse__Output as _poker_GetWorksheetsAndReportsResponse__Output } from '../poker/GetWorksheetsAndReportsResponse';
import type { GlobalSettingsRequest as _poker_GlobalSettingsRequest, GlobalSettingsRequest__Output as _poker_GlobalSettingsRequest__Output } from '../poker/GlobalSettingsRequest';
import type { GlobalSettingsResponse as _poker_GlobalSettingsResponse, GlobalSettingsResponse__Output as _poker_GlobalSettingsResponse__Output } from '../poker/GlobalSettingsResponse';
import type { GroupClientAddRequest as _poker_GroupClientAddRequest, GroupClientAddRequest__Output as _poker_GroupClientAddRequest__Output } from '../poker/GroupClientAddRequest';
import type { GroupClientAddResponse as _poker_GroupClientAddResponse, GroupClientAddResponse__Output as _poker_GroupClientAddResponse__Output } from '../poker/GroupClientAddResponse';
import type { GroupedClientRemoveRequest as _poker_GroupedClientRemoveRequest, GroupedClientRemoveRequest__Output as _poker_GroupedClientRemoveRequest__Output } from '../poker/GroupedClientRemoveRequest';
import type { GroupedClientRemoveResponse as _poker_GroupedClientRemoveResponse, GroupedClientRemoveResponse__Output as _poker_GroupedClientRemoveResponse__Output } from '../poker/GroupedClientRemoveResponse';
import type { GroupedClientRequest as _poker_GroupedClientRequest, GroupedClientRequest__Output as _poker_GroupedClientRequest__Output } from '../poker/GroupedClientRequest';
import type { GroupedClientResponse as _poker_GroupedClientResponse, GroupedClientResponse__Output as _poker_GroupedClientResponse__Output } from '../poker/GroupedClientResponse';
import type { GroupedClientUpdateRequest as _poker_GroupedClientUpdateRequest, GroupedClientUpdateRequest__Output as _poker_GroupedClientUpdateRequest__Output } from '../poker/GroupedClientUpdateRequest';
import type { GroupedClientUpdateResponse as _poker_GroupedClientUpdateResponse, GroupedClientUpdateResponse__Output as _poker_GroupedClientUpdateResponse__Output } from '../poker/GroupedClientUpdateResponse';
import type { ImageRequest as _poker_ImageRequest, ImageRequest__Output as _poker_ImageRequest__Output } from '../poker/ImageRequest';
import type { ImageResponse as _poker_ImageResponse, ImageResponse__Output as _poker_ImageResponse__Output } from '../poker/ImageResponse';
import type { IsEmailAvailableRequest as _poker_IsEmailAvailableRequest, IsEmailAvailableRequest__Output as _poker_IsEmailAvailableRequest__Output } from '../poker/IsEmailAvailableRequest';
import type { IsEmailAvailableResponse as _poker_IsEmailAvailableResponse, IsEmailAvailableResponse__Output as _poker_IsEmailAvailableResponse__Output } from '../poker/IsEmailAvailableResponse';
import type { IsWithdrawAllowedRequest as _poker_IsWithdrawAllowedRequest, IsWithdrawAllowedRequest__Output as _poker_IsWithdrawAllowedRequest__Output } from '../poker/IsWithdrawAllowedRequest';
import type { IsWithdrawAllowedResponse as _poker_IsWithdrawAllowedResponse, IsWithdrawAllowedResponse__Output as _poker_IsWithdrawAllowedResponse__Output } from '../poker/IsWithdrawAllowedResponse';
import type { JoinAnyTournamentAdminRequest as _poker_JoinAnyTournamentAdminRequest, JoinAnyTournamentAdminRequest__Output as _poker_JoinAnyTournamentAdminRequest__Output } from '../poker/JoinAnyTournamentAdminRequest';
import type { JoinAnyTournamentRequest as _poker_JoinAnyTournamentRequest, JoinAnyTournamentRequest__Output as _poker_JoinAnyTournamentRequest__Output } from '../poker/JoinAnyTournamentRequest';
import type { JoinAnyTournamentResult as _poker_JoinAnyTournamentResult, JoinAnyTournamentResult__Output as _poker_JoinAnyTournamentResult__Output } from '../poker/JoinAnyTournamentResult';
import type { JoinAnyTournamentStatusRequest as _poker_JoinAnyTournamentStatusRequest, JoinAnyTournamentStatusRequest__Output as _poker_JoinAnyTournamentStatusRequest__Output } from '../poker/JoinAnyTournamentStatusRequest';
import type { JoinAnyTournamentStatusResult as _poker_JoinAnyTournamentStatusResult, JoinAnyTournamentStatusResult__Output as _poker_JoinAnyTournamentStatusResult__Output } from '../poker/JoinAnyTournamentStatusResult';
import type { JoinAnyUsersListRequest as _poker_JoinAnyUsersListRequest, JoinAnyUsersListRequest__Output as _poker_JoinAnyUsersListRequest__Output } from '../poker/JoinAnyUsersListRequest';
import type { JoinAnyUsersListResult as _poker_JoinAnyUsersListResult, JoinAnyUsersListResult__Output as _poker_JoinAnyUsersListResult__Output } from '../poker/JoinAnyUsersListResult';
import type { JoinRequestStatsRequest as _poker_JoinRequestStatsRequest, JoinRequestStatsRequest__Output as _poker_JoinRequestStatsRequest__Output } from '../poker/JoinRequestStatsRequest';
import type { JoinRequestStatsResponse as _poker_JoinRequestStatsResponse, JoinRequestStatsResponse__Output as _poker_JoinRequestStatsResponse__Output } from '../poker/JoinRequestStatsResponse';
import type { JoinTournamentRequest as _poker_JoinTournamentRequest, JoinTournamentRequest__Output as _poker_JoinTournamentRequest__Output } from '../poker/JoinTournamentRequest';
import type { JoinTournamentResponse as _poker_JoinTournamentResponse, JoinTournamentResponse__Output as _poker_JoinTournamentResponse__Output } from '../poker/JoinTournamentResponse';
import type { JoinTournamentTemplateRequest as _poker_JoinTournamentTemplateRequest, JoinTournamentTemplateRequest__Output as _poker_JoinTournamentTemplateRequest__Output } from '../poker/JoinTournamentTemplateRequest';
import type { JoinTournamentTemplateResponse as _poker_JoinTournamentTemplateResponse, JoinTournamentTemplateResponse__Output as _poker_JoinTournamentTemplateResponse__Output } from '../poker/JoinTournamentTemplateResponse';
import type { KeyTransactionPayouRequest as _poker_KeyTransactionPayouRequest, KeyTransactionPayouRequest__Output as _poker_KeyTransactionPayouRequest__Output } from '../poker/KeyTransactionPayouRequest';
import type { KeyTransactionPayouResponse as _poker_KeyTransactionPayouResponse, KeyTransactionPayouResponse__Output as _poker_KeyTransactionPayouResponse__Output } from '../poker/KeyTransactionPayouResponse';
import type { LabelEditorRequest as _poker_LabelEditorRequest, LabelEditorRequest__Output as _poker_LabelEditorRequest__Output } from '../poker/LabelEditorRequest';
import type { LabelEditorResponse as _poker_LabelEditorResponse, LabelEditorResponse__Output as _poker_LabelEditorResponse__Output } from '../poker/LabelEditorResponse';
import type { LaunchTournamentRequest as _poker_LaunchTournamentRequest, LaunchTournamentRequest__Output as _poker_LaunchTournamentRequest__Output } from '../poker/LaunchTournamentRequest';
import type { LaunchTournamentResponse as _poker_LaunchTournamentResponse, LaunchTournamentResponse__Output as _poker_LaunchTournamentResponse__Output } from '../poker/LaunchTournamentResponse';
import type { LoginRequest as _poker_LoginRequest, LoginRequest__Output as _poker_LoginRequest__Output } from '../poker/LoginRequest';
import type { LoginResult as _poker_LoginResult, LoginResult__Output as _poker_LoginResult__Output } from '../poker/LoginResult';
import type { LogoutRequest as _poker_LogoutRequest, LogoutRequest__Output as _poker_LogoutRequest__Output } from '../poker/LogoutRequest';
import type { LogoutResult as _poker_LogoutResult, LogoutResult__Output as _poker_LogoutResult__Output } from '../poker/LogoutResult';
import type { MakeDepositRequest as _poker_MakeDepositRequest, MakeDepositRequest__Output as _poker_MakeDepositRequest__Output } from '../poker/MakeDepositRequest';
import type { MakeDepositResponse as _poker_MakeDepositResponse, MakeDepositResponse__Output as _poker_MakeDepositResponse__Output } from '../poker/MakeDepositResponse';
import type { MakePlayerActionRequest as _poker_MakePlayerActionRequest, MakePlayerActionRequest__Output as _poker_MakePlayerActionRequest__Output } from '../poker/MakePlayerActionRequest';
import type { MakeSngRequest as _poker_MakeSngRequest, MakeSngRequest__Output as _poker_MakeSngRequest__Output } from '../poker/MakeSngRequest';
import type { MakeSngResponse as _poker_MakeSngResponse, MakeSngResponse__Output as _poker_MakeSngResponse__Output } from '../poker/MakeSngResponse';
import type { MakeSngWithRandomUsersRequest as _poker_MakeSngWithRandomUsersRequest, MakeSngWithRandomUsersRequest__Output as _poker_MakeSngWithRandomUsersRequest__Output } from '../poker/MakeSngWithRandomUsersRequest';
import type { MakeTransactionRequest as _poker_MakeTransactionRequest, MakeTransactionRequest__Output as _poker_MakeTransactionRequest__Output } from '../poker/MakeTransactionRequest';
import type { MakeTransactionResponse as _poker_MakeTransactionResponse, MakeTransactionResponse__Output as _poker_MakeTransactionResponse__Output } from '../poker/MakeTransactionResponse';
import type { MakeWithdrawalRequest as _poker_MakeWithdrawalRequest, MakeWithdrawalRequest__Output as _poker_MakeWithdrawalRequest__Output } from '../poker/MakeWithdrawalRequest';
import type { MakeWithdrawalResponse as _poker_MakeWithdrawalResponse, MakeWithdrawalResponse__Output as _poker_MakeWithdrawalResponse__Output } from '../poker/MakeWithdrawalResponse';
import type { ManualAdjustmentByBatchRequest as _poker_ManualAdjustmentByBatchRequest, ManualAdjustmentByBatchRequest__Output as _poker_ManualAdjustmentByBatchRequest__Output } from '../poker/ManualAdjustmentByBatchRequest';
import type { ManualAdjustmentByBatchResponse as _poker_ManualAdjustmentByBatchResponse, ManualAdjustmentByBatchResponse__Output as _poker_ManualAdjustmentByBatchResponse__Output } from '../poker/ManualAdjustmentByBatchResponse';
import type { MobilePaymentRequest as _poker_MobilePaymentRequest, MobilePaymentRequest__Output as _poker_MobilePaymentRequest__Output } from '../poker/MobilePaymentRequest';
import type { MobilePaymentResponse as _poker_MobilePaymentResponse, MobilePaymentResponse__Output as _poker_MobilePaymentResponse__Output } from '../poker/MobilePaymentResponse';
import type { ModifyPlayerSpecificGameMatchingRequest as _poker_ModifyPlayerSpecificGameMatchingRequest, ModifyPlayerSpecificGameMatchingRequest__Output as _poker_ModifyPlayerSpecificGameMatchingRequest__Output } from '../poker/ModifyPlayerSpecificGameMatchingRequest';
import type { ModifyPlayerSpecificGameMatchingResponse as _poker_ModifyPlayerSpecificGameMatchingResponse, ModifyPlayerSpecificGameMatchingResponse__Output as _poker_ModifyPlayerSpecificGameMatchingResponse__Output } from '../poker/ModifyPlayerSpecificGameMatchingResponse';
import type { MountHashesRequest as _poker_MountHashesRequest, MountHashesRequest__Output as _poker_MountHashesRequest__Output } from '../poker/MountHashesRequest';
import type { MountHashesResponse as _poker_MountHashesResponse, MountHashesResponse__Output as _poker_MountHashesResponse__Output } from '../poker/MountHashesResponse';
import type { MultipleEmailSendRequest as _poker_MultipleEmailSendRequest, MultipleEmailSendRequest__Output as _poker_MultipleEmailSendRequest__Output } from '../poker/MultipleEmailSendRequest';
import type { MultipleEmailSendResponse as _poker_MultipleEmailSendResponse, MultipleEmailSendResponse__Output as _poker_MultipleEmailSendResponse__Output } from '../poker/MultipleEmailSendResponse';
import type { NewDeckRequest as _poker_NewDeckRequest, NewDeckRequest__Output as _poker_NewDeckRequest__Output } from '../poker/NewDeckRequest';
import type { NewDeckResponse as _poker_NewDeckResponse, NewDeckResponse__Output as _poker_NewDeckResponse__Output } from '../poker/NewDeckResponse';
import type { NextTournamentRequest as _poker_NextTournamentRequest, NextTournamentRequest__Output as _poker_NextTournamentRequest__Output } from '../poker/NextTournamentRequest';
import type { NextTournamentResult as _poker_NextTournamentResult, NextTournamentResult__Output as _poker_NextTournamentResult__Output } from '../poker/NextTournamentResult';
import type { NotificationEmailLogsRequest as _poker_NotificationEmailLogsRequest, NotificationEmailLogsRequest__Output as _poker_NotificationEmailLogsRequest__Output } from '../poker/NotificationEmailLogsRequest';
import type { NotificationEmailLogsResponse as _poker_NotificationEmailLogsResponse, NotificationEmailLogsResponse__Output as _poker_NotificationEmailLogsResponse__Output } from '../poker/NotificationEmailLogsResponse';
import type { OrderLobbyTournamentsInMostPlayedOrderRequest as _poker_OrderLobbyTournamentsInMostPlayedOrderRequest, OrderLobbyTournamentsInMostPlayedOrderRequest__Output as _poker_OrderLobbyTournamentsInMostPlayedOrderRequest__Output } from '../poker/OrderLobbyTournamentsInMostPlayedOrderRequest';
import type { OrderLobbyTournamentsInMostPlayedOrderResponse as _poker_OrderLobbyTournamentsInMostPlayedOrderResponse, OrderLobbyTournamentsInMostPlayedOrderResponse__Output as _poker_OrderLobbyTournamentsInMostPlayedOrderResponse__Output } from '../poker/OrderLobbyTournamentsInMostPlayedOrderResponse';
import type { PendingDepositRequest as _poker_PendingDepositRequest, PendingDepositRequest__Output as _poker_PendingDepositRequest__Output } from '../poker/PendingDepositRequest';
import type { PendingDepositsRequest as _poker_PendingDepositsRequest, PendingDepositsRequest__Output as _poker_PendingDepositsRequest__Output } from '../poker/PendingDepositsRequest';
import type { PlayerAccountBalanceRequest as _poker_PlayerAccountBalanceRequest, PlayerAccountBalanceRequest__Output as _poker_PlayerAccountBalanceRequest__Output } from '../poker/PlayerAccountBalanceRequest';
import type { PlayerAccountBalanceResult as _poker_PlayerAccountBalanceResult, PlayerAccountBalanceResult__Output as _poker_PlayerAccountBalanceResult__Output } from '../poker/PlayerAccountBalanceResult';
import type { PlayerMailingAddressRequest as _poker_PlayerMailingAddressRequest, PlayerMailingAddressRequest__Output as _poker_PlayerMailingAddressRequest__Output } from '../poker/PlayerMailingAddressRequest';
import type { PlayerMailingAddressResponse as _poker_PlayerMailingAddressResponse, PlayerMailingAddressResponse__Output as _poker_PlayerMailingAddressResponse__Output } from '../poker/PlayerMailingAddressResponse';
import type { PlayerMailingAddressStatusResponse as _poker_PlayerMailingAddressStatusResponse, PlayerMailingAddressStatusResponse__Output as _poker_PlayerMailingAddressStatusResponse__Output } from '../poker/PlayerMailingAddressStatusResponse';
import type { PlayerMailingAddressUpdateRequest as _poker_PlayerMailingAddressUpdateRequest, PlayerMailingAddressUpdateRequest__Output as _poker_PlayerMailingAddressUpdateRequest__Output } from '../poker/PlayerMailingAddressUpdateRequest';
import type { PlayerMailingAddressesResponse as _poker_PlayerMailingAddressesResponse, PlayerMailingAddressesResponse__Output as _poker_PlayerMailingAddressesResponse__Output } from '../poker/PlayerMailingAddressesResponse';
import type { PlayerTournamentRequest as _poker_PlayerTournamentRequest, PlayerTournamentRequest__Output as _poker_PlayerTournamentRequest__Output } from '../poker/PlayerTournamentRequest';
import type { PrizeRevealRequest as _poker_PrizeRevealRequest, PrizeRevealRequest__Output as _poker_PrizeRevealRequest__Output } from '../poker/PrizeRevealRequest';
import type { PrizeRevealResponse as _poker_PrizeRevealResponse, PrizeRevealResponse__Output as _poker_PrizeRevealResponse__Output } from '../poker/PrizeRevealResponse';
import type { PromoRequest as _poker_PromoRequest, PromoRequest__Output as _poker_PromoRequest__Output } from '../poker/PromoRequest';
import type { PromoResponse as _poker_PromoResponse, PromoResponse__Output as _poker_PromoResponse__Output } from '../poker/PromoResponse';
import type { PurgeGeopollRequest as _poker_PurgeGeopollRequest, PurgeGeopollRequest__Output as _poker_PurgeGeopollRequest__Output } from '../poker/PurgeGeopollRequest';
import type { PurgeGeopollResponse as _poker_PurgeGeopollResponse, PurgeGeopollResponse__Output as _poker_PurgeGeopollResponse__Output } from '../poker/PurgeGeopollResponse';
import type { RankHandsRequest as _poker_RankHandsRequest, RankHandsRequest__Output as _poker_RankHandsRequest__Output } from '../poker/RankHandsRequest';
import type { RankHandsResult as _poker_RankHandsResult, RankHandsResult__Output as _poker_RankHandsResult__Output } from '../poker/RankHandsResult';
import type { ReferalStatRequest as _poker_ReferalStatRequest, ReferalStatRequest__Output as _poker_ReferalStatRequest__Output } from '../poker/ReferalStatRequest';
import type { ReferalStatResponse as _poker_ReferalStatResponse, ReferalStatResponse__Output as _poker_ReferalStatResponse__Output } from '../poker/ReferalStatResponse';
import type { ReferalsRequest as _poker_ReferalsRequest, ReferalsRequest__Output as _poker_ReferalsRequest__Output } from '../poker/ReferalsRequest';
import type { ReferalsResponse as _poker_ReferalsResponse, ReferalsResponse__Output as _poker_ReferalsResponse__Output } from '../poker/ReferalsResponse';
import type { RemoveAdminPagePermissionsRequest as _poker_RemoveAdminPagePermissionsRequest, RemoveAdminPagePermissionsRequest__Output as _poker_RemoveAdminPagePermissionsRequest__Output } from '../poker/RemoveAdminPagePermissionsRequest';
import type { RemoveAdminPagePermissionsResponse as _poker_RemoveAdminPagePermissionsResponse, RemoveAdminPagePermissionsResponse__Output as _poker_RemoveAdminPagePermissionsResponse__Output } from '../poker/RemoveAdminPagePermissionsResponse';
import type { RemoveNotificationTemplatesRequest as _poker_RemoveNotificationTemplatesRequest, RemoveNotificationTemplatesRequest__Output as _poker_RemoveNotificationTemplatesRequest__Output } from '../poker/RemoveNotificationTemplatesRequest';
import type { RemoveNotificationTemplatesResponse as _poker_RemoveNotificationTemplatesResponse, RemoveNotificationTemplatesResponse__Output as _poker_RemoveNotificationTemplatesResponse__Output } from '../poker/RemoveNotificationTemplatesResponse';
import type { RemoveTournamentReservationTimeRequest as _poker_RemoveTournamentReservationTimeRequest, RemoveTournamentReservationTimeRequest__Output as _poker_RemoveTournamentReservationTimeRequest__Output } from '../poker/RemoveTournamentReservationTimeRequest';
import type { RemoveTournamentReservationTimeResponse as _poker_RemoveTournamentReservationTimeResponse, RemoveTournamentReservationTimeResponse__Output as _poker_RemoveTournamentReservationTimeResponse__Output } from '../poker/RemoveTournamentReservationTimeResponse';
import type { RemoveTournamentTemplateFromLobbyRequest as _poker_RemoveTournamentTemplateFromLobbyRequest, RemoveTournamentTemplateFromLobbyRequest__Output as _poker_RemoveTournamentTemplateFromLobbyRequest__Output } from '../poker/RemoveTournamentTemplateFromLobbyRequest';
import type { RemoveTournamentTemplateFromLobbyResponse as _poker_RemoveTournamentTemplateFromLobbyResponse, RemoveTournamentTemplateFromLobbyResponse__Output as _poker_RemoveTournamentTemplateFromLobbyResponse__Output } from '../poker/RemoveTournamentTemplateFromLobbyResponse';
import type { ReservationBlackListToggleRequest as _poker_ReservationBlackListToggleRequest, ReservationBlackListToggleRequest__Output as _poker_ReservationBlackListToggleRequest__Output } from '../poker/ReservationBlackListToggleRequest';
import type { ReservationBlackListToggleResponse as _poker_ReservationBlackListToggleResponse, ReservationBlackListToggleResponse__Output as _poker_ReservationBlackListToggleResponse__Output } from '../poker/ReservationBlackListToggleResponse';
import type { ReservationBlackListedTournamentTemplatesRequest as _poker_ReservationBlackListedTournamentTemplatesRequest, ReservationBlackListedTournamentTemplatesRequest__Output as _poker_ReservationBlackListedTournamentTemplatesRequest__Output } from '../poker/ReservationBlackListedTournamentTemplatesRequest';
import type { ReservationBlackListedTournamentTemplatesResponse as _poker_ReservationBlackListedTournamentTemplatesResponse, ReservationBlackListedTournamentTemplatesResponse__Output as _poker_ReservationBlackListedTournamentTemplatesResponse__Output } from '../poker/ReservationBlackListedTournamentTemplatesResponse';
import type { ReservationBlackListedUserRequest as _poker_ReservationBlackListedUserRequest, ReservationBlackListedUserRequest__Output as _poker_ReservationBlackListedUserRequest__Output } from '../poker/ReservationBlackListedUserRequest';
import type { ReservationBlackListedUserResponse as _poker_ReservationBlackListedUserResponse, ReservationBlackListedUserResponse__Output as _poker_ReservationBlackListedUserResponse__Output } from '../poker/ReservationBlackListedUserResponse';
import type { ResetPasswordRequest as _poker_ResetPasswordRequest, ResetPasswordRequest__Output as _poker_ResetPasswordRequest__Output } from '../poker/ResetPasswordRequest';
import type { ResetPasswordResponse as _poker_ResetPasswordResponse, ResetPasswordResponse__Output as _poker_ResetPasswordResponse__Output } from '../poker/ResetPasswordResponse';
import type { SSNWhitelistRequest as _poker_SSNWhitelistRequest, SSNWhitelistRequest__Output as _poker_SSNWhitelistRequest__Output } from '../poker/SSNWhitelistRequest';
import type { SSNWhitelistResponse as _poker_SSNWhitelistResponse, SSNWhitelistResponse__Output as _poker_SSNWhitelistResponse__Output } from '../poker/SSNWhitelistResponse';
import type { SearchExcludedUserRequest as _poker_SearchExcludedUserRequest, SearchExcludedUserRequest__Output as _poker_SearchExcludedUserRequest__Output } from '../poker/SearchExcludedUserRequest';
import type { SearchExcludedUserResult as _poker_SearchExcludedUserResult, SearchExcludedUserResult__Output as _poker_SearchExcludedUserResult__Output } from '../poker/SearchExcludedUserResult';
import type { SearchSuspendedDeviceRequest as _poker_SearchSuspendedDeviceRequest, SearchSuspendedDeviceRequest__Output as _poker_SearchSuspendedDeviceRequest__Output } from '../poker/SearchSuspendedDeviceRequest';
import type { SearchSuspendedDeviceResult as _poker_SearchSuspendedDeviceResult, SearchSuspendedDeviceResult__Output as _poker_SearchSuspendedDeviceResult__Output } from '../poker/SearchSuspendedDeviceResult';
import type { SearchUserRequest as _poker_SearchUserRequest, SearchUserRequest__Output as _poker_SearchUserRequest__Output } from '../poker/SearchUserRequest';
import type { SearchUserResult as _poker_SearchUserResult, SearchUserResult__Output as _poker_SearchUserResult__Output } from '../poker/SearchUserResult';
import type { SendPushNotificationRequest as _poker_SendPushNotificationRequest, SendPushNotificationRequest__Output as _poker_SendPushNotificationRequest__Output } from '../poker/SendPushNotificationRequest';
import type { SendPushotificationResponse as _poker_SendPushotificationResponse, SendPushotificationResponse__Output as _poker_SendPushotificationResponse__Output } from '../poker/SendPushotificationResponse';
import type { SessionsRequest as _poker_SessionsRequest, SessionsRequest__Output as _poker_SessionsRequest__Output } from '../poker/SessionsRequest';
import type { SetBulkFreePlayAdjustmentRequest as _poker_SetBulkFreePlayAdjustmentRequest, SetBulkFreePlayAdjustmentRequest__Output as _poker_SetBulkFreePlayAdjustmentRequest__Output } from '../poker/SetBulkFreePlayAdjustmentRequest';
import type { SetBulkFreePlayAdjustmentResponse as _poker_SetBulkFreePlayAdjustmentResponse, SetBulkFreePlayAdjustmentResponse__Output as _poker_SetBulkFreePlayAdjustmentResponse__Output } from '../poker/SetBulkFreePlayAdjustmentResponse';
import type { SetDefaultPaymentMethodRequest as _poker_SetDefaultPaymentMethodRequest, SetDefaultPaymentMethodRequest__Output as _poker_SetDefaultPaymentMethodRequest__Output } from '../poker/SetDefaultPaymentMethodRequest';
import type { SetDefaultPaymentMethodResponse as _poker_SetDefaultPaymentMethodResponse, SetDefaultPaymentMethodResponse__Output as _poker_SetDefaultPaymentMethodResponse__Output } from '../poker/SetDefaultPaymentMethodResponse';
import type { SetReservationTimeEditorRequest as _poker_SetReservationTimeEditorRequest, SetReservationTimeEditorRequest__Output as _poker_SetReservationTimeEditorRequest__Output } from '../poker/SetReservationTimeEditorRequest';
import type { SetReservationTimeEditorResponse as _poker_SetReservationTimeEditorResponse, SetReservationTimeEditorResponse__Output as _poker_SetReservationTimeEditorResponse__Output } from '../poker/SetReservationTimeEditorResponse';
import type { SetTournamentAdditionalPayoutBoostRequest as _poker_SetTournamentAdditionalPayoutBoostRequest, SetTournamentAdditionalPayoutBoostRequest__Output as _poker_SetTournamentAdditionalPayoutBoostRequest__Output } from '../poker/SetTournamentAdditionalPayoutBoostRequest';
import type { SetTournamentAdditionalPayoutBoostResponse as _poker_SetTournamentAdditionalPayoutBoostResponse, SetTournamentAdditionalPayoutBoostResponse__Output as _poker_SetTournamentAdditionalPayoutBoostResponse__Output } from '../poker/SetTournamentAdditionalPayoutBoostResponse';
import type { SetTournamentReservationTimeRequest as _poker_SetTournamentReservationTimeRequest, SetTournamentReservationTimeRequest__Output as _poker_SetTournamentReservationTimeRequest__Output } from '../poker/SetTournamentReservationTimeRequest';
import type { SetTournamentReservationTimeResponse as _poker_SetTournamentReservationTimeResponse, SetTournamentReservationTimeResponse__Output as _poker_SetTournamentReservationTimeResponse__Output } from '../poker/SetTournamentReservationTimeResponse';
import type { SignupFailureErrorRequest as _poker_SignupFailureErrorRequest, SignupFailureErrorRequest__Output as _poker_SignupFailureErrorRequest__Output } from '../poker/SignupFailureErrorRequest';
import type { SignupFailureErrorResponse as _poker_SignupFailureErrorResponse, SignupFailureErrorResponse__Output as _poker_SignupFailureErrorResponse__Output } from '../poker/SignupFailureErrorResponse';
import type { SignupRequest as _poker_SignupRequest, SignupRequest__Output as _poker_SignupRequest__Output } from '../poker/SignupRequest';
import type { SignupResult as _poker_SignupResult, SignupResult__Output as _poker_SignupResult__Output } from '../poker/SignupResult';
import type { SimulateGamesRequest as _poker_SimulateGamesRequest, SimulateGamesRequest__Output as _poker_SimulateGamesRequest__Output } from '../poker/SimulateGamesRequest';
import type { StartTournamentTableInstanceRequest as _poker_StartTournamentTableInstanceRequest, StartTournamentTableInstanceRequest__Output as _poker_StartTournamentTableInstanceRequest__Output } from '../poker/StartTournamentTableInstanceRequest';
import type { StartTournamentTableInstanceResponse as _poker_StartTournamentTableInstanceResponse, StartTournamentTableInstanceResponse__Output as _poker_StartTournamentTableInstanceResponse__Output } from '../poker/StartTournamentTableInstanceResponse';
import type { StatusResponse as _poker_StatusResponse, StatusResponse__Output as _poker_StatusResponse__Output } from '../poker/StatusResponse';
import type { TableSubscribeRequest as _poker_TableSubscribeRequest, TableSubscribeRequest__Output as _poker_TableSubscribeRequest__Output } from '../poker/TableSubscribeRequest';
import type { TableSubscribeResponse as _poker_TableSubscribeResponse, TableSubscribeResponse__Output as _poker_TableSubscribeResponse__Output } from '../poker/TableSubscribeResponse';
import type { TemplateEditorRequest as _poker_TemplateEditorRequest, TemplateEditorRequest__Output as _poker_TemplateEditorRequest__Output } from '../poker/TemplateEditorRequest';
import type { TemplateEditorResponse as _poker_TemplateEditorResponse, TemplateEditorResponse__Output as _poker_TemplateEditorResponse__Output } from '../poker/TemplateEditorResponse';
import type { TemplateStatsRequest as _poker_TemplateStatsRequest, TemplateStatsRequest__Output as _poker_TemplateStatsRequest__Output } from '../poker/TemplateStatsRequest';
import type { TemplateStatsResponse as _poker_TemplateStatsResponse, TemplateStatsResponse__Output as _poker_TemplateStatsResponse__Output } from '../poker/TemplateStatsResponse';
import type { ThemesRequest as _poker_ThemesRequest, ThemesRequest__Output as _poker_ThemesRequest__Output } from '../poker/ThemesRequest';
import type { ThemesResponse as _poker_ThemesResponse, ThemesResponse__Output as _poker_ThemesResponse__Output } from '../poker/ThemesResponse';
import type { ToggleRecuringDepositRequest as _poker_ToggleRecuringDepositRequest, ToggleRecuringDepositRequest__Output as _poker_ToggleRecuringDepositRequest__Output } from '../poker/ToggleRecuringDepositRequest';
import type { ToggleRecuringDepositResponse as _poker_ToggleRecuringDepositResponse, ToggleRecuringDepositResponse__Output as _poker_ToggleRecuringDepositResponse__Output } from '../poker/ToggleRecuringDepositResponse';
import type { TournamentDetailsRequest as _poker_TournamentDetailsRequest, TournamentDetailsRequest__Output as _poker_TournamentDetailsRequest__Output } from '../poker/TournamentDetailsRequest';
import type { TournamentDetailsResponse as _poker_TournamentDetailsResponse, TournamentDetailsResponse__Output as _poker_TournamentDetailsResponse__Output } from '../poker/TournamentDetailsResponse';
import type { TournamentPayoutStructureResponse as _poker_TournamentPayoutStructureResponse, TournamentPayoutStructureResponse__Output as _poker_TournamentPayoutStructureResponse__Output } from '../poker/TournamentPayoutStructureResponse';
import type { TournamentStatusRequest as _poker_TournamentStatusRequest, TournamentStatusRequest__Output as _poker_TournamentStatusRequest__Output } from '../poker/TournamentStatusRequest';
import type { TournamentStatusResponse as _poker_TournamentStatusResponse, TournamentStatusResponse__Output as _poker_TournamentStatusResponse__Output } from '../poker/TournamentStatusResponse';
import type { TransactionIDsFromProcessingLogFeesRequest as _poker_TransactionIDsFromProcessingLogFeesRequest, TransactionIDsFromProcessingLogFeesRequest__Output as _poker_TransactionIDsFromProcessingLogFeesRequest__Output } from '../poker/TransactionIDsFromProcessingLogFeesRequest';
import type { TransactionIDsFromProcessingLogFeesResponse as _poker_TransactionIDsFromProcessingLogFeesResponse, TransactionIDsFromProcessingLogFeesResponse__Output as _poker_TransactionIDsFromProcessingLogFeesResponse__Output } from '../poker/TransactionIDsFromProcessingLogFeesResponse';
import type { TransactionsRequest as _poker_TransactionsRequest, TransactionsRequest__Output as _poker_TransactionsRequest__Output } from '../poker/TransactionsRequest';
import type { UiSettingsRequest as _poker_UiSettingsRequest, UiSettingsRequest__Output as _poker_UiSettingsRequest__Output } from '../poker/UiSettingsRequest';
import type { UiSettingsResponse as _poker_UiSettingsResponse, UiSettingsResponse__Output as _poker_UiSettingsResponse__Output } from '../poker/UiSettingsResponse';
import type { UnregisterAnyTournamentRequest as _poker_UnregisterAnyTournamentRequest, UnregisterAnyTournamentRequest__Output as _poker_UnregisterAnyTournamentRequest__Output } from '../poker/UnregisterAnyTournamentRequest';
import type { UnregisterAnyTournamentResult as _poker_UnregisterAnyTournamentResult, UnregisterAnyTournamentResult__Output as _poker_UnregisterAnyTournamentResult__Output } from '../poker/UnregisterAnyTournamentResult';
import type { UnregisterTournamentRequest as _poker_UnregisterTournamentRequest, UnregisterTournamentRequest__Output as _poker_UnregisterTournamentRequest__Output } from '../poker/UnregisterTournamentRequest';
import type { UnregisterTournamentResponse as _poker_UnregisterTournamentResponse, UnregisterTournamentResponse__Output as _poker_UnregisterTournamentResponse__Output } from '../poker/UnregisterTournamentResponse';
import type { UnsubscribeFromTournamentTemplateBufferRequest as _poker_UnsubscribeFromTournamentTemplateBufferRequest, UnsubscribeFromTournamentTemplateBufferRequest__Output as _poker_UnsubscribeFromTournamentTemplateBufferRequest__Output } from '../poker/UnsubscribeFromTournamentTemplateBufferRequest';
import type { UnsubscribeFromTournamentTemplateBufferResponse as _poker_UnsubscribeFromTournamentTemplateBufferResponse, UnsubscribeFromTournamentTemplateBufferResponse__Output as _poker_UnsubscribeFromTournamentTemplateBufferResponse__Output } from '../poker/UnsubscribeFromTournamentTemplateBufferResponse';
import type { UpdateAccountBalanceRequest as _poker_UpdateAccountBalanceRequest, UpdateAccountBalanceRequest__Output as _poker_UpdateAccountBalanceRequest__Output } from '../poker/UpdateAccountBalanceRequest';
import type { UpdateAccountBalanceResponse as _poker_UpdateAccountBalanceResponse, UpdateAccountBalanceResponse__Output as _poker_UpdateAccountBalanceResponse__Output } from '../poker/UpdateAccountBalanceResponse';
import type { UpdateAccountPoolBalanceResponse as _poker_UpdateAccountPoolBalanceResponse, UpdateAccountPoolBalanceResponse__Output as _poker_UpdateAccountPoolBalanceResponse__Output } from '../poker/UpdateAccountPoolBalanceResponse';
import type { UpdateBlockedUserReservationDelayRequest as _poker_UpdateBlockedUserReservationDelayRequest, UpdateBlockedUserReservationDelayRequest__Output as _poker_UpdateBlockedUserReservationDelayRequest__Output } from '../poker/UpdateBlockedUserReservationDelayRequest';
import type { UpdateBlockedUserReservationDelayResponse as _poker_UpdateBlockedUserReservationDelayResponse, UpdateBlockedUserReservationDelayResponse__Output as _poker_UpdateBlockedUserReservationDelayResponse__Output } from '../poker/UpdateBlockedUserReservationDelayResponse';
import type { UpdateBoostedAdditionalPayoutRequest as _poker_UpdateBoostedAdditionalPayoutRequest, UpdateBoostedAdditionalPayoutRequest__Output as _poker_UpdateBoostedAdditionalPayoutRequest__Output } from '../poker/UpdateBoostedAdditionalPayoutRequest';
import type { UpdateBoostedAdditionalPayoutResponse as _poker_UpdateBoostedAdditionalPayoutResponse, UpdateBoostedAdditionalPayoutResponse__Output as _poker_UpdateBoostedAdditionalPayoutResponse__Output } from '../poker/UpdateBoostedAdditionalPayoutResponse';
import type { UpdateClientEmailRequest as _poker_UpdateClientEmailRequest, UpdateClientEmailRequest__Output as _poker_UpdateClientEmailRequest__Output } from '../poker/UpdateClientEmailRequest';
import type { UpdateClientEmailResponse as _poker_UpdateClientEmailResponse, UpdateClientEmailResponse__Output as _poker_UpdateClientEmailResponse__Output } from '../poker/UpdateClientEmailResponse';
import type { UpdateClientForAffiliateRequest as _poker_UpdateClientForAffiliateRequest, UpdateClientForAffiliateRequest__Output as _poker_UpdateClientForAffiliateRequest__Output } from '../poker/UpdateClientForAffiliateRequest';
import type { UpdateClientForAffiliateResponse as _poker_UpdateClientForAffiliateResponse, UpdateClientForAffiliateResponse__Output as _poker_UpdateClientForAffiliateResponse__Output } from '../poker/UpdateClientForAffiliateResponse';
import type { UpdateClientGroupForAffiliateRequest as _poker_UpdateClientGroupForAffiliateRequest, UpdateClientGroupForAffiliateRequest__Output as _poker_UpdateClientGroupForAffiliateRequest__Output } from '../poker/UpdateClientGroupForAffiliateRequest';
import type { UpdateClientGroupForAffiliateResponse as _poker_UpdateClientGroupForAffiliateResponse, UpdateClientGroupForAffiliateResponse__Output as _poker_UpdateClientGroupForAffiliateResponse__Output } from '../poker/UpdateClientGroupForAffiliateResponse';
import type { UpdateFreePlayPromoUsersRequest as _poker_UpdateFreePlayPromoUsersRequest, UpdateFreePlayPromoUsersRequest__Output as _poker_UpdateFreePlayPromoUsersRequest__Output } from '../poker/UpdateFreePlayPromoUsersRequest';
import type { UpdateFreePlayPromoUsersResponse as _poker_UpdateFreePlayPromoUsersResponse, UpdateFreePlayPromoUsersResponse__Output as _poker_UpdateFreePlayPromoUsersResponse__Output } from '../poker/UpdateFreePlayPromoUsersResponse';
import type { UpdateLobbyVisibleTournamentOrderRequest as _poker_UpdateLobbyVisibleTournamentOrderRequest, UpdateLobbyVisibleTournamentOrderRequest__Output as _poker_UpdateLobbyVisibleTournamentOrderRequest__Output } from '../poker/UpdateLobbyVisibleTournamentOrderRequest';
import type { UpdateLobbyVisibleTournamentOrderResponse as _poker_UpdateLobbyVisibleTournamentOrderResponse, UpdateLobbyVisibleTournamentOrderResponse__Output as _poker_UpdateLobbyVisibleTournamentOrderResponse__Output } from '../poker/UpdateLobbyVisibleTournamentOrderResponse';
import type { UpdateNotificationTemplatesRequest as _poker_UpdateNotificationTemplatesRequest, UpdateNotificationTemplatesRequest__Output as _poker_UpdateNotificationTemplatesRequest__Output } from '../poker/UpdateNotificationTemplatesRequest';
import type { UpdateNotificationTemplatesResponse as _poker_UpdateNotificationTemplatesResponse, UpdateNotificationTemplatesResponse__Output as _poker_UpdateNotificationTemplatesResponse__Output } from '../poker/UpdateNotificationTemplatesResponse';
import type { UpdatePaymentMethodRequest as _poker_UpdatePaymentMethodRequest, UpdatePaymentMethodRequest__Output as _poker_UpdatePaymentMethodRequest__Output } from '../poker/UpdatePaymentMethodRequest';
import type { UpdatePaymentMethodResponse as _poker_UpdatePaymentMethodResponse, UpdatePaymentMethodResponse__Output as _poker_UpdatePaymentMethodResponse__Output } from '../poker/UpdatePaymentMethodResponse';
import type { UpdatePendingRequest as _poker_UpdatePendingRequest, UpdatePendingRequest__Output as _poker_UpdatePendingRequest__Output } from '../poker/UpdatePendingRequest';
import type { UpdatePoolAccountBalanceRequest as _poker_UpdatePoolAccountBalanceRequest, UpdatePoolAccountBalanceRequest__Output as _poker_UpdatePoolAccountBalanceRequest__Output } from '../poker/UpdatePoolAccountBalanceRequest';
import type { UpdateRecuringDepositRequest as _poker_UpdateRecuringDepositRequest, UpdateRecuringDepositRequest__Output as _poker_UpdateRecuringDepositRequest__Output } from '../poker/UpdateRecuringDepositRequest';
import type { UpdateRecuringDepositResponse as _poker_UpdateRecuringDepositResponse, UpdateRecuringDepositResponse__Output as _poker_UpdateRecuringDepositResponse__Output } from '../poker/UpdateRecuringDepositResponse';
import type { UpdateReportsForAffiliateCopyRequest as _poker_UpdateReportsForAffiliateCopyRequest, UpdateReportsForAffiliateCopyRequest__Output as _poker_UpdateReportsForAffiliateCopyRequest__Output } from '../poker/UpdateReportsForAffiliateCopyRequest';
import type { UpdateReportsForAffiliateCopyResponse as _poker_UpdateReportsForAffiliateCopyResponse, UpdateReportsForAffiliateCopyResponse__Output as _poker_UpdateReportsForAffiliateCopyResponse__Output } from '../poker/UpdateReportsForAffiliateCopyResponse';
import type { UpdateReservationBlackListedTournamentTemplatesRequest as _poker_UpdateReservationBlackListedTournamentTemplatesRequest, UpdateReservationBlackListedTournamentTemplatesRequest__Output as _poker_UpdateReservationBlackListedTournamentTemplatesRequest__Output } from '../poker/UpdateReservationBlackListedTournamentTemplatesRequest';
import type { UpdateReservationBlackListedTournamentTemplatesResponse as _poker_UpdateReservationBlackListedTournamentTemplatesResponse, UpdateReservationBlackListedTournamentTemplatesResponse__Output as _poker_UpdateReservationBlackListedTournamentTemplatesResponse__Output } from '../poker/UpdateReservationBlackListedTournamentTemplatesResponse';
import type { UpdateSSNWhitelistRequest as _poker_UpdateSSNWhitelistRequest, UpdateSSNWhitelistRequest__Output as _poker_UpdateSSNWhitelistRequest__Output } from '../poker/UpdateSSNWhitelistRequest';
import type { UpdateSSNWhitelistResponse as _poker_UpdateSSNWhitelistResponse, UpdateSSNWhitelistResponse__Output as _poker_UpdateSSNWhitelistResponse__Output } from '../poker/UpdateSSNWhitelistResponse';
import type { UpdateSecurityQuestionsRequest as _poker_UpdateSecurityQuestionsRequest, UpdateSecurityQuestionsRequest__Output as _poker_UpdateSecurityQuestionsRequest__Output } from '../poker/UpdateSecurityQuestionsRequest';
import type { UpdateSecurityQuestionsResponse as _poker_UpdateSecurityQuestionsResponse, UpdateSecurityQuestionsResponse__Output as _poker_UpdateSecurityQuestionsResponse__Output } from '../poker/UpdateSecurityQuestionsResponse';
import type { UpdateTournamentReservationBlacklistScheduleRequest as _poker_UpdateTournamentReservationBlacklistScheduleRequest, UpdateTournamentReservationBlacklistScheduleRequest__Output as _poker_UpdateTournamentReservationBlacklistScheduleRequest__Output } from '../poker/UpdateTournamentReservationBlacklistScheduleRequest';
import type { UpdateTournamentReservationBlacklistScheduleResponse as _poker_UpdateTournamentReservationBlacklistScheduleResponse, UpdateTournamentReservationBlacklistScheduleResponse__Output as _poker_UpdateTournamentReservationBlacklistScheduleResponse__Output } from '../poker/UpdateTournamentReservationBlacklistScheduleResponse';
import type { UpdateTournamentTemplateRequest as _poker_UpdateTournamentTemplateRequest, UpdateTournamentTemplateRequest__Output as _poker_UpdateTournamentTemplateRequest__Output } from '../poker/UpdateTournamentTemplateRequest';
import type { UpdateUserInfoRequest as _poker_UpdateUserInfoRequest, UpdateUserInfoRequest__Output as _poker_UpdateUserInfoRequest__Output } from '../poker/UpdateUserInfoRequest';
import type { UpdateUserInfoResponse as _poker_UpdateUserInfoResponse, UpdateUserInfoResponse__Output as _poker_UpdateUserInfoResponse__Output } from '../poker/UpdateUserInfoResponse';
import type { UpdateUserProfileInfoRequest as _poker_UpdateUserProfileInfoRequest, UpdateUserProfileInfoRequest__Output as _poker_UpdateUserProfileInfoRequest__Output } from '../poker/UpdateUserProfileInfoRequest';
import type { UpdateUserProfileInfoResponse as _poker_UpdateUserProfileInfoResponse, UpdateUserProfileInfoResponse__Output as _poker_UpdateUserProfileInfoResponse__Output } from '../poker/UpdateUserProfileInfoResponse';
import type { UploadPageExtensionRequest as _poker_UploadPageExtensionRequest, UploadPageExtensionRequest__Output as _poker_UploadPageExtensionRequest__Output } from '../poker/UploadPageExtensionRequest';
import type { UploadPageExtensionResponse as _poker_UploadPageExtensionResponse, UploadPageExtensionResponse__Output as _poker_UploadPageExtensionResponse__Output } from '../poker/UploadPageExtensionResponse';
import type { UploadToS3Request as _poker_UploadToS3Request, UploadToS3Request__Output as _poker_UploadToS3Request__Output } from '../poker/UploadToS3Request';
import type { UploadToS3Response as _poker_UploadToS3Response, UploadToS3Response__Output as _poker_UploadToS3Response__Output } from '../poker/UploadToS3Response';
import type { UploadWorksheetReportRequest as _poker_UploadWorksheetReportRequest, UploadWorksheetReportRequest__Output as _poker_UploadWorksheetReportRequest__Output } from '../poker/UploadWorksheetReportRequest';
import type { UploadWorksheetReportResponse as _poker_UploadWorksheetReportResponse, UploadWorksheetReportResponse__Output as _poker_UploadWorksheetReportResponse__Output } from '../poker/UploadWorksheetReportResponse';
import type { UserWithNoWithdrawalRestrictionsRequest as _poker_UserWithNoWithdrawalRestrictionsRequest, UserWithNoWithdrawalRestrictionsRequest__Output as _poker_UserWithNoWithdrawalRestrictionsRequest__Output } from '../poker/UserWithNoWithdrawalRestrictionsRequest';
import type { UserWithNoWithdrawalRestrictionsResponse as _poker_UserWithNoWithdrawalRestrictionsResponse, UserWithNoWithdrawalRestrictionsResponse__Output as _poker_UserWithNoWithdrawalRestrictionsResponse__Output } from '../poker/UserWithNoWithdrawalRestrictionsResponse';
import type { ValidateSecurityQuestionsRequest as _poker_ValidateSecurityQuestionsRequest, ValidateSecurityQuestionsRequest__Output as _poker_ValidateSecurityQuestionsRequest__Output } from '../poker/ValidateSecurityQuestionsRequest';
import type { ValidateSecurityQuestionsResponse as _poker_ValidateSecurityQuestionsResponse, ValidateSecurityQuestionsResponse__Output as _poker_ValidateSecurityQuestionsResponse__Output } from '../poker/ValidateSecurityQuestionsResponse';
import type { VaultPaymentMethodRequest as _poker_VaultPaymentMethodRequest, VaultPaymentMethodRequest__Output as _poker_VaultPaymentMethodRequest__Output } from '../poker/VaultPaymentMethodRequest';
import type { VaultPaymentMethodResponse as _poker_VaultPaymentMethodResponse, VaultPaymentMethodResponse__Output as _poker_VaultPaymentMethodResponse__Output } from '../poker/VaultPaymentMethodResponse';
import type { VaultedPaymentRequest as _poker_VaultedPaymentRequest, VaultedPaymentRequest__Output as _poker_VaultedPaymentRequest__Output } from '../poker/VaultedPaymentRequest';
import type { VaultedPaymentResponse as _poker_VaultedPaymentResponse, VaultedPaymentResponse__Output as _poker_VaultedPaymentResponse__Output } from '../poker/VaultedPaymentResponse';
import type { VerifySSNLastFourRequest as _poker_VerifySSNLastFourRequest, VerifySSNLastFourRequest__Output as _poker_VerifySSNLastFourRequest__Output } from '../poker/VerifySSNLastFourRequest';
import type { VerifySSNLastFourResponse as _poker_VerifySSNLastFourResponse, VerifySSNLastFourResponse__Output as _poker_VerifySSNLastFourResponse__Output } from '../poker/VerifySSNLastFourResponse';
import type { VerifyUserPasswordRequest as _poker_VerifyUserPasswordRequest, VerifyUserPasswordRequest__Output as _poker_VerifyUserPasswordRequest__Output } from '../poker/VerifyUserPasswordRequest';
import type { VerifyUserPasswordResponse as _poker_VerifyUserPasswordResponse, VerifyUserPasswordResponse__Output as _poker_VerifyUserPasswordResponse__Output } from '../poker/VerifyUserPasswordResponse';
import type { VerifyUsersFirstFiveSSNDigitRequest as _poker_VerifyUsersFirstFiveSSNDigitRequest, VerifyUsersFirstFiveSSNDigitRequest__Output as _poker_VerifyUsersFirstFiveSSNDigitRequest__Output } from '../poker/VerifyUsersFirstFiveSSNDigitRequest';
import type { VerifyUsersFirstFiveSSNDigitResponse as _poker_VerifyUsersFirstFiveSSNDigitResponse, VerifyUsersFirstFiveSSNDigitResponse__Output as _poker_VerifyUsersFirstFiveSSNDigitResponse__Output } from '../poker/VerifyUsersFirstFiveSSNDigitResponse';
import type { WelcomeBackPromoLogsRequest as _poker_WelcomeBackPromoLogsRequest, WelcomeBackPromoLogsRequest__Output as _poker_WelcomeBackPromoLogsRequest__Output } from '../poker/WelcomeBackPromoLogsRequest';
import type { WelcomeBackPromoLogsResponse as _poker_WelcomeBackPromoLogsResponse, WelcomeBackPromoLogsResponse__Output as _poker_WelcomeBackPromoLogsResponse__Output } from '../poker/WelcomeBackPromoLogsResponse';
import type { WhitelistUserRequest as _poker_WhitelistUserRequest, WhitelistUserRequest__Output as _poker_WhitelistUserRequest__Output } from '../poker/WhitelistUserRequest';
import type { WhitelistUserResult as _poker_WhitelistUserResult, WhitelistUserResult__Output as _poker_WhitelistUserResult__Output } from '../poker/WhitelistUserResult';
import type { WhitelistedClientsRequest as _poker_WhitelistedClientsRequest, WhitelistedClientsRequest__Output as _poker_WhitelistedClientsRequest__Output } from '../poker/WhitelistedClientsRequest';
import type { WhitelistedClientsResult as _poker_WhitelistedClientsResult, WhitelistedClientsResult__Output as _poker_WhitelistedClientsResult__Output } from '../poker/WhitelistedClientsResult';
import type { WhitelistedUsersRequest as _poker_WhitelistedUsersRequest, WhitelistedUsersRequest__Output as _poker_WhitelistedUsersRequest__Output } from '../poker/WhitelistedUsersRequest';
import type { WhitelistedUsersResult as _poker_WhitelistedUsersResult, WhitelistedUsersResult__Output as _poker_WhitelistedUsersResult__Output } from '../poker/WhitelistedUsersResult';
import type { WildHandRequest as _poker_WildHandRequest, WildHandRequest__Output as _poker_WildHandRequest__Output } from '../poker/WildHandRequest';
import type { WildHandResponse as _poker_WildHandResponse, WildHandResponse__Output as _poker_WildHandResponse__Output } from '../poker/WildHandResponse';
import type { WithdrawalsRequest as _poker_WithdrawalsRequest, WithdrawalsRequest__Output as _poker_WithdrawalsRequest__Output } from '../poker/WithdrawalsRequest';
import type { promoQualificationDataRequest as _poker_promoQualificationDataRequest, promoQualificationDataRequest__Output as _poker_promoQualificationDataRequest__Output } from '../poker/promoQualificationDataRequest';
import type { promoQualificationDataResponse as _poker_promoQualificationDataResponse, promoQualificationDataResponse__Output as _poker_promoQualificationDataResponse__Output } from '../poker/promoQualificationDataResponse';

export interface SngClient extends grpc.Client {
  GetRankings(argument: _poker_GetRankingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetRankingsResult__Output>): grpc.ClientUnaryCall;
  GetRankings(argument: _poker_GetRankingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetRankingsResult__Output>): grpc.ClientUnaryCall;
  GetRankings(argument: _poker_GetRankingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetRankingsResult__Output>): grpc.ClientUnaryCall;
  GetRankings(argument: _poker_GetRankingsRequest, callback: grpc.requestCallback<_poker_GetRankingsResult__Output>): grpc.ClientUnaryCall;
  getRankings(argument: _poker_GetRankingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetRankingsResult__Output>): grpc.ClientUnaryCall;
  getRankings(argument: _poker_GetRankingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetRankingsResult__Output>): grpc.ClientUnaryCall;
  getRankings(argument: _poker_GetRankingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetRankingsResult__Output>): grpc.ClientUnaryCall;
  getRankings(argument: _poker_GetRankingsRequest, callback: grpc.requestCallback<_poker_GetRankingsResult__Output>): grpc.ClientUnaryCall;
  
  GetStatus(argument: _poker_GetStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  GetStatus(argument: _poker_GetStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  GetStatus(argument: _poker_GetStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  GetStatus(argument: _poker_GetStatusRequest, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  getStatus(argument: _poker_GetStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  getStatus(argument: _poker_GetStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  getStatus(argument: _poker_GetStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  getStatus(argument: _poker_GetStatusRequest, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  
  GetUserByEmail(argument: _poker_GetUserByEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  GetUserByEmail(argument: _poker_GetUserByEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  GetUserByEmail(argument: _poker_GetUserByEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  GetUserByEmail(argument: _poker_GetUserByEmailRequest, callback: grpc.requestCallback<_poker_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _poker_GetUserByEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _poker_GetUserByEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _poker_GetUserByEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _poker_GetUserByEmailRequest, callback: grpc.requestCallback<_poker_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _poker_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _poker_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _poker_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _poker_LoginRequest, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _poker_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _poker_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _poker_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _poker_LoginRequest, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  
  Logout(argument: _poker_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LogoutResult__Output>): grpc.ClientUnaryCall;
  Logout(argument: _poker_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_LogoutResult__Output>): grpc.ClientUnaryCall;
  Logout(argument: _poker_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LogoutResult__Output>): grpc.ClientUnaryCall;
  Logout(argument: _poker_LogoutRequest, callback: grpc.requestCallback<_poker_LogoutResult__Output>): grpc.ClientUnaryCall;
  logout(argument: _poker_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LogoutResult__Output>): grpc.ClientUnaryCall;
  logout(argument: _poker_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_LogoutResult__Output>): grpc.ClientUnaryCall;
  logout(argument: _poker_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LogoutResult__Output>): grpc.ClientUnaryCall;
  logout(argument: _poker_LogoutRequest, callback: grpc.requestCallback<_poker_LogoutResult__Output>): grpc.ClientUnaryCall;
  
  MakePlayerAction(argument: _poker_MakePlayerActionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  MakePlayerAction(argument: _poker_MakePlayerActionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  MakePlayerAction(argument: _poker_MakePlayerActionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  MakePlayerAction(argument: _poker_MakePlayerActionRequest, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  makePlayerAction(argument: _poker_MakePlayerActionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  makePlayerAction(argument: _poker_MakePlayerActionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  makePlayerAction(argument: _poker_MakePlayerActionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  makePlayerAction(argument: _poker_MakePlayerActionRequest, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  
  MakeSng(argument: _poker_MakeSngRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeSngResponse__Output>): grpc.ClientUnaryCall;
  MakeSng(argument: _poker_MakeSngRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_MakeSngResponse__Output>): grpc.ClientUnaryCall;
  MakeSng(argument: _poker_MakeSngRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeSngResponse__Output>): grpc.ClientUnaryCall;
  MakeSng(argument: _poker_MakeSngRequest, callback: grpc.requestCallback<_poker_MakeSngResponse__Output>): grpc.ClientUnaryCall;
  makeSng(argument: _poker_MakeSngRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeSngResponse__Output>): grpc.ClientUnaryCall;
  makeSng(argument: _poker_MakeSngRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_MakeSngResponse__Output>): grpc.ClientUnaryCall;
  makeSng(argument: _poker_MakeSngRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeSngResponse__Output>): grpc.ClientUnaryCall;
  makeSng(argument: _poker_MakeSngRequest, callback: grpc.requestCallback<_poker_MakeSngResponse__Output>): grpc.ClientUnaryCall;
  
  MakeSngWithRandomUsers(argument: _poker_MakeSngWithRandomUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  MakeSngWithRandomUsers(argument: _poker_MakeSngWithRandomUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  MakeSngWithRandomUsers(argument: _poker_MakeSngWithRandomUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  MakeSngWithRandomUsers(argument: _poker_MakeSngWithRandomUsersRequest, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  makeSngWithRandomUsers(argument: _poker_MakeSngWithRandomUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  makeSngWithRandomUsers(argument: _poker_MakeSngWithRandomUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  makeSngWithRandomUsers(argument: _poker_MakeSngWithRandomUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  makeSngWithRandomUsers(argument: _poker_MakeSngWithRandomUsersRequest, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  
  Signup(argument: _poker_SignupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  Signup(argument: _poker_SignupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  Signup(argument: _poker_SignupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  Signup(argument: _poker_SignupRequest, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  signup(argument: _poker_SignupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  signup(argument: _poker_SignupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  signup(argument: _poker_SignupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  signup(argument: _poker_SignupRequest, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  
  TableSubscribe(argument: _poker_TableSubscribeRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_poker_TableSubscribeResponse__Output>;
  TableSubscribe(argument: _poker_TableSubscribeRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_poker_TableSubscribeResponse__Output>;
  tableSubscribe(argument: _poker_TableSubscribeRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_poker_TableSubscribeResponse__Output>;
  tableSubscribe(argument: _poker_TableSubscribeRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_poker_TableSubscribeResponse__Output>;
  
  Test(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Test(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Test(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Test(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  test(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  test(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  test(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  test(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  acceptTOS(argument: _poker_AcceptTOSRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AcceptTOSResult__Output>): grpc.ClientUnaryCall;
  acceptTOS(argument: _poker_AcceptTOSRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AcceptTOSResult__Output>): grpc.ClientUnaryCall;
  acceptTOS(argument: _poker_AcceptTOSRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AcceptTOSResult__Output>): grpc.ClientUnaryCall;
  acceptTOS(argument: _poker_AcceptTOSRequest, callback: grpc.requestCallback<_poker_AcceptTOSResult__Output>): grpc.ClientUnaryCall;
  acceptTos(argument: _poker_AcceptTOSRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AcceptTOSResult__Output>): grpc.ClientUnaryCall;
  acceptTos(argument: _poker_AcceptTOSRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AcceptTOSResult__Output>): grpc.ClientUnaryCall;
  acceptTos(argument: _poker_AcceptTOSRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AcceptTOSResult__Output>): grpc.ClientUnaryCall;
  acceptTos(argument: _poker_AcceptTOSRequest, callback: grpc.requestCallback<_poker_AcceptTOSResult__Output>): grpc.ClientUnaryCall;
  
  actionOnPendingRequest(argument: _poker_UpdatePendingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  actionOnPendingRequest(argument: _poker_UpdatePendingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  actionOnPendingRequest(argument: _poker_UpdatePendingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  actionOnPendingRequest(argument: _poker_UpdatePendingRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  actionPendingWithdrawal(argument: _poker_ActionPendingWithdrawaRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActionPendingWithdrawaResponse__Output>): grpc.ClientUnaryCall;
  actionPendingWithdrawal(argument: _poker_ActionPendingWithdrawaRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ActionPendingWithdrawaResponse__Output>): grpc.ClientUnaryCall;
  actionPendingWithdrawal(argument: _poker_ActionPendingWithdrawaRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActionPendingWithdrawaResponse__Output>): grpc.ClientUnaryCall;
  actionPendingWithdrawal(argument: _poker_ActionPendingWithdrawaRequest, callback: grpc.requestCallback<_poker_ActionPendingWithdrawaResponse__Output>): grpc.ClientUnaryCall;
  
  addAdminData(argument: _poker_AdminAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addAdminData(argument: _poker_AdminAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addAdminData(argument: _poker_AdminAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addAdminData(argument: _poker_AdminAddRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  addAdminPagePermissions(argument: _poker_AddAdminPagePermissionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddAdminPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  addAdminPagePermissions(argument: _poker_AddAdminPagePermissionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AddAdminPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  addAdminPagePermissions(argument: _poker_AddAdminPagePermissionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddAdminPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  addAdminPagePermissions(argument: _poker_AddAdminPagePermissionsRequest, callback: grpc.requestCallback<_poker_AddAdminPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  
  addAdminRoleData(argument: _poker_AdminRoleAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addAdminRoleData(argument: _poker_AdminRoleAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addAdminRoleData(argument: _poker_AdminRoleAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addAdminRoleData(argument: _poker_AdminRoleAddRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  addApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  addApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  addApiKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  addApiKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  addApnApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  addApnApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  addApnApiKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  addApnApiKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  addBraintreeCredential(argument: _poker_ClientResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientResponse__Output>): grpc.ClientUnaryCall;
  addBraintreeCredential(argument: _poker_ClientResponse, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientResponse__Output>): grpc.ClientUnaryCall;
  addBraintreeCredential(argument: _poker_ClientResponse, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientResponse__Output>): grpc.ClientUnaryCall;
  addBraintreeCredential(argument: _poker_ClientResponse, callback: grpc.requestCallback<_poker_ClientResponse__Output>): grpc.ClientUnaryCall;
  
  addClientData(argument: _poker_ClientAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientAddResponse__Output>): grpc.ClientUnaryCall;
  addClientData(argument: _poker_ClientAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientAddResponse__Output>): grpc.ClientUnaryCall;
  addClientData(argument: _poker_ClientAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientAddResponse__Output>): grpc.ClientUnaryCall;
  addClientData(argument: _poker_ClientAddRequest, callback: grpc.requestCallback<_poker_ClientAddResponse__Output>): grpc.ClientUnaryCall;
  
  addClientEmail(argument: _poker_AddClientEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddClientEmailResponse__Output>): grpc.ClientUnaryCall;
  addClientEmail(argument: _poker_AddClientEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AddClientEmailResponse__Output>): grpc.ClientUnaryCall;
  addClientEmail(argument: _poker_AddClientEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddClientEmailResponse__Output>): grpc.ClientUnaryCall;
  addClientEmail(argument: _poker_AddClientEmailRequest, callback: grpc.requestCallback<_poker_AddClientEmailResponse__Output>): grpc.ClientUnaryCall;
  
  addComponentPermissionData(argument: _poker_ComponentPermissionAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addComponentPermissionData(argument: _poker_ComponentPermissionAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addComponentPermissionData(argument: _poker_ComponentPermissionAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  addComponentPermissionData(argument: _poker_ComponentPermissionAddRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  addGeofenceData(argument: _poker_GeofenceAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceAddResponse__Output>): grpc.ClientUnaryCall;
  addGeofenceData(argument: _poker_GeofenceAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceAddResponse__Output>): grpc.ClientUnaryCall;
  addGeofenceData(argument: _poker_GeofenceAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceAddResponse__Output>): grpc.ClientUnaryCall;
  addGeofenceData(argument: _poker_GeofenceAddRequest, callback: grpc.requestCallback<_poker_GeofenceAddResponse__Output>): grpc.ClientUnaryCall;
  
  addNotificationTemplates(argument: _poker_AddNotificationTemplatesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  addNotificationTemplates(argument: _poker_AddNotificationTemplatesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AddNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  addNotificationTemplates(argument: _poker_AddNotificationTemplatesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  addNotificationTemplates(argument: _poker_AddNotificationTemplatesRequest, callback: grpc.requestCallback<_poker_AddNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  
  addPayoutStructure(argument: _poker_AddPayoutStructureRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  addPayoutStructure(argument: _poker_AddPayoutStructureRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AddPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  addPayoutStructure(argument: _poker_AddPayoutStructureRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  addPayoutStructure(argument: _poker_AddPayoutStructureRequest, callback: grpc.requestCallback<_poker_AddPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  
  addPlayerMailingAddress(argument: _poker_PlayerMailingAddressUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  addPlayerMailingAddress(argument: _poker_PlayerMailingAddressUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  addPlayerMailingAddress(argument: _poker_PlayerMailingAddressUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  addPlayerMailingAddress(argument: _poker_PlayerMailingAddressUpdateRequest, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  
  addPushNotificationKey(argument: _poker_AddPushNotificationKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddPushNotificationKeyResponse__Output>): grpc.ClientUnaryCall;
  addPushNotificationKey(argument: _poker_AddPushNotificationKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AddPushNotificationKeyResponse__Output>): grpc.ClientUnaryCall;
  addPushNotificationKey(argument: _poker_AddPushNotificationKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddPushNotificationKeyResponse__Output>): grpc.ClientUnaryCall;
  addPushNotificationKey(argument: _poker_AddPushNotificationKeyRequest, callback: grpc.requestCallback<_poker_AddPushNotificationKeyResponse__Output>): grpc.ClientUnaryCall;
  
  addRecuringDeposit(argument: _poker_AddRecuringDepositRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  addRecuringDeposit(argument: _poker_AddRecuringDepositRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AddRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  addRecuringDeposit(argument: _poker_AddRecuringDepositRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  addRecuringDeposit(argument: _poker_AddRecuringDepositRequest, callback: grpc.requestCallback<_poker_AddRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  
  addTournamentTemplateToLobby(argument: _poker_AddTournamentTemplateToLobbyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddTournamentTemplateToLobbyResponse__Output>): grpc.ClientUnaryCall;
  addTournamentTemplateToLobby(argument: _poker_AddTournamentTemplateToLobbyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AddTournamentTemplateToLobbyResponse__Output>): grpc.ClientUnaryCall;
  addTournamentTemplateToLobby(argument: _poker_AddTournamentTemplateToLobbyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddTournamentTemplateToLobbyResponse__Output>): grpc.ClientUnaryCall;
  addTournamentTemplateToLobby(argument: _poker_AddTournamentTemplateToLobbyRequest, callback: grpc.requestCallback<_poker_AddTournamentTemplateToLobbyResponse__Output>): grpc.ClientUnaryCall;
  
  addonPlayer(argument: _poker_AddonPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddonPlayerResponse__Output>): grpc.ClientUnaryCall;
  addonPlayer(argument: _poker_AddonPlayerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AddonPlayerResponse__Output>): grpc.ClientUnaryCall;
  addonPlayer(argument: _poker_AddonPlayerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AddonPlayerResponse__Output>): grpc.ClientUnaryCall;
  addonPlayer(argument: _poker_AddonPlayerRequest, callback: grpc.requestCallback<_poker_AddonPlayerResponse__Output>): grpc.ClientUnaryCall;
  
  adjustBulkInstantDepositMatch(argument: _poker_BulkInstantDepositMatchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_BulkInstantDepositMatchResponse__Output>): grpc.ClientUnaryCall;
  adjustBulkInstantDepositMatch(argument: _poker_BulkInstantDepositMatchRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_BulkInstantDepositMatchResponse__Output>): grpc.ClientUnaryCall;
  adjustBulkInstantDepositMatch(argument: _poker_BulkInstantDepositMatchRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_BulkInstantDepositMatchResponse__Output>): grpc.ClientUnaryCall;
  adjustBulkInstantDepositMatch(argument: _poker_BulkInstantDepositMatchRequest, callback: grpc.requestCallback<_poker_BulkInstantDepositMatchResponse__Output>): grpc.ClientUnaryCall;
  
  adminJoinAnyTournament(argument: _poker_AdminJoinAnyTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  adminJoinAnyTournament(argument: _poker_AdminJoinAnyTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  adminJoinAnyTournament(argument: _poker_AdminJoinAnyTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  adminJoinAnyTournament(argument: _poker_AdminJoinAnyTournamentRequest, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  
  adminLogin(argument: _poker_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  adminLogin(argument: _poker_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  adminLogin(argument: _poker_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  adminLogin(argument: _poker_LoginRequest, callback: grpc.requestCallback<_poker_LoginResult__Output>): grpc.ClientUnaryCall;
  
  answerSecurityQusetionAndVerifyPassword(argument: _poker_AnswerVerifyPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AnswerVerifyPasswordResponse__Output>): grpc.ClientUnaryCall;
  answerSecurityQusetionAndVerifyPassword(argument: _poker_AnswerVerifyPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AnswerVerifyPasswordResponse__Output>): grpc.ClientUnaryCall;
  answerSecurityQusetionAndVerifyPassword(argument: _poker_AnswerVerifyPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AnswerVerifyPasswordResponse__Output>): grpc.ClientUnaryCall;
  answerSecurityQusetionAndVerifyPassword(argument: _poker_AnswerVerifyPasswordRequest, callback: grpc.requestCallback<_poker_AnswerVerifyPasswordResponse__Output>): grpc.ClientUnaryCall;
  
  blackListReservationQueueUsers(argument: _poker_ReservationBlackListToggleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  blackListReservationQueueUsers(argument: _poker_ReservationBlackListToggleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  blackListReservationQueueUsers(argument: _poker_ReservationBlackListToggleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  blackListReservationQueueUsers(argument: _poker_ReservationBlackListToggleRequest, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  
  blacklistClientsOnGeofence(argument: _poker_GeofenceBlacklistRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceBlacklistResponse__Output>): grpc.ClientUnaryCall;
  blacklistClientsOnGeofence(argument: _poker_GeofenceBlacklistRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceBlacklistResponse__Output>): grpc.ClientUnaryCall;
  blacklistClientsOnGeofence(argument: _poker_GeofenceBlacklistRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceBlacklistResponse__Output>): grpc.ClientUnaryCall;
  blacklistClientsOnGeofence(argument: _poker_GeofenceBlacklistRequest, callback: grpc.requestCallback<_poker_GeofenceBlacklistResponse__Output>): grpc.ClientUnaryCall;
  
  blacklistUsersOnGeofence(argument: _poker_GeofenceBlacklistRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceBlacklistResponse__Output>): grpc.ClientUnaryCall;
  blacklistUsersOnGeofence(argument: _poker_GeofenceBlacklistRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceBlacklistResponse__Output>): grpc.ClientUnaryCall;
  blacklistUsersOnGeofence(argument: _poker_GeofenceBlacklistRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceBlacklistResponse__Output>): grpc.ClientUnaryCall;
  blacklistUsersOnGeofence(argument: _poker_GeofenceBlacklistRequest, callback: grpc.requestCallback<_poker_GeofenceBlacklistResponse__Output>): grpc.ClientUnaryCall;
  
  byPassWithdrawalLimits(argument: _poker_ByPassWithdrawalLimitsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ByPassWithdrawalLimitsResponse__Output>): grpc.ClientUnaryCall;
  byPassWithdrawalLimits(argument: _poker_ByPassWithdrawalLimitsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ByPassWithdrawalLimitsResponse__Output>): grpc.ClientUnaryCall;
  byPassWithdrawalLimits(argument: _poker_ByPassWithdrawalLimitsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ByPassWithdrawalLimitsResponse__Output>): grpc.ClientUnaryCall;
  byPassWithdrawalLimits(argument: _poker_ByPassWithdrawalLimitsRequest, callback: grpc.requestCallback<_poker_ByPassWithdrawalLimitsResponse__Output>): grpc.ClientUnaryCall;
  
  cancelAnySimulatedGames(argument: _poker_CancelAnySimulatedGamesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelAnySimulatedGamesResponse__Output>): grpc.ClientUnaryCall;
  cancelAnySimulatedGames(argument: _poker_CancelAnySimulatedGamesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CancelAnySimulatedGamesResponse__Output>): grpc.ClientUnaryCall;
  cancelAnySimulatedGames(argument: _poker_CancelAnySimulatedGamesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelAnySimulatedGamesResponse__Output>): grpc.ClientUnaryCall;
  cancelAnySimulatedGames(argument: _poker_CancelAnySimulatedGamesRequest, callback: grpc.requestCallback<_poker_CancelAnySimulatedGamesResponse__Output>): grpc.ClientUnaryCall;
  
  cancelJoinAnyAllUsers(argument: _poker_JoinAnyTournamentStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelJoinAnyUsersResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyAllUsers(argument: _poker_JoinAnyTournamentStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CancelJoinAnyUsersResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyAllUsers(argument: _poker_JoinAnyTournamentStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelJoinAnyUsersResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyAllUsers(argument: _poker_JoinAnyTournamentStatusRequest, callback: grpc.requestCallback<_poker_CancelJoinAnyUsersResult__Output>): grpc.ClientUnaryCall;
  
  cancelJoinAnyMultipleUsers(argument: _poker_CancelJoinAnyUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelJoinAnyUsersResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyMultipleUsers(argument: _poker_CancelJoinAnyUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CancelJoinAnyUsersResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyMultipleUsers(argument: _poker_CancelJoinAnyUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelJoinAnyUsersResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyMultipleUsers(argument: _poker_CancelJoinAnyUsersRequest, callback: grpc.requestCallback<_poker_CancelJoinAnyUsersResult__Output>): grpc.ClientUnaryCall;
  
  cancelJoinAnyTournament(argument: _poker_CancelJoinAnyTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelJoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyTournament(argument: _poker_CancelJoinAnyTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CancelJoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyTournament(argument: _poker_CancelJoinAnyTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelJoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  cancelJoinAnyTournament(argument: _poker_CancelJoinAnyTournamentRequest, callback: grpc.requestCallback<_poker_CancelJoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  
  cancelTournament(argument: _poker_CancelTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelTournamentResponse__Output>): grpc.ClientUnaryCall;
  cancelTournament(argument: _poker_CancelTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CancelTournamentResponse__Output>): grpc.ClientUnaryCall;
  cancelTournament(argument: _poker_CancelTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelTournamentResponse__Output>): grpc.ClientUnaryCall;
  cancelTournament(argument: _poker_CancelTournamentRequest, callback: grpc.requestCallback<_poker_CancelTournamentResponse__Output>): grpc.ClientUnaryCall;
  
  cancelTournaments(argument: _poker_CancelTournamentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelTournamentsResponse__Output>): grpc.ClientUnaryCall;
  cancelTournaments(argument: _poker_CancelTournamentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CancelTournamentsResponse__Output>): grpc.ClientUnaryCall;
  cancelTournaments(argument: _poker_CancelTournamentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CancelTournamentsResponse__Output>): grpc.ClientUnaryCall;
  cancelTournaments(argument: _poker_CancelTournamentsRequest, callback: grpc.requestCallback<_poker_CancelTournamentsResponse__Output>): grpc.ClientUnaryCall;
  
  captureProcessedDeposit(argument: _poker_CaptureDepositRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CaptureDepositResponse__Output>): grpc.ClientUnaryCall;
  captureProcessedDeposit(argument: _poker_CaptureDepositRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CaptureDepositResponse__Output>): grpc.ClientUnaryCall;
  captureProcessedDeposit(argument: _poker_CaptureDepositRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CaptureDepositResponse__Output>): grpc.ClientUnaryCall;
  captureProcessedDeposit(argument: _poker_CaptureDepositRequest, callback: grpc.requestCallback<_poker_CaptureDepositResponse__Output>): grpc.ClientUnaryCall;
  
  captureProcessedWithdrawal(argument: _poker_CaptureWithdrawalRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CaptureWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  captureProcessedWithdrawal(argument: _poker_CaptureWithdrawalRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CaptureWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  captureProcessedWithdrawal(argument: _poker_CaptureWithdrawalRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CaptureWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  captureProcessedWithdrawal(argument: _poker_CaptureWithdrawalRequest, callback: grpc.requestCallback<_poker_CaptureWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  
  changeDisplayNameForExtensions(argument: _poker_ChangeDisplayNameForExtensionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ChangeDisplayNameForExtensionsResponse__Output>): grpc.ClientUnaryCall;
  changeDisplayNameForExtensions(argument: _poker_ChangeDisplayNameForExtensionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ChangeDisplayNameForExtensionsResponse__Output>): grpc.ClientUnaryCall;
  changeDisplayNameForExtensions(argument: _poker_ChangeDisplayNameForExtensionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ChangeDisplayNameForExtensionsResponse__Output>): grpc.ClientUnaryCall;
  changeDisplayNameForExtensions(argument: _poker_ChangeDisplayNameForExtensionsRequest, callback: grpc.requestCallback<_poker_ChangeDisplayNameForExtensionsResponse__Output>): grpc.ClientUnaryCall;
  
  changeDisplayNameForReports(argument: _poker_ChangeDisplayNameForReportsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ChangeDisplayNameForReportsResponse__Output>): grpc.ClientUnaryCall;
  changeDisplayNameForReports(argument: _poker_ChangeDisplayNameForReportsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ChangeDisplayNameForReportsResponse__Output>): grpc.ClientUnaryCall;
  changeDisplayNameForReports(argument: _poker_ChangeDisplayNameForReportsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ChangeDisplayNameForReportsResponse__Output>): grpc.ClientUnaryCall;
  changeDisplayNameForReports(argument: _poker_ChangeDisplayNameForReportsRequest, callback: grpc.requestCallback<_poker_ChangeDisplayNameForReportsResponse__Output>): grpc.ClientUnaryCall;
  
  changePassword(argument: _poker_ChangePasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _poker_ChangePasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _poker_ChangePasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _poker_ChangePasswordRequest, callback: grpc.requestCallback<_poker_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  
  changeStatusOfWorksheetReport(argument: _poker_ChangeStatusOfWorksheetReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ChangeStatusOfWorksheetReportResponse__Output>): grpc.ClientUnaryCall;
  changeStatusOfWorksheetReport(argument: _poker_ChangeStatusOfWorksheetReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ChangeStatusOfWorksheetReportResponse__Output>): grpc.ClientUnaryCall;
  changeStatusOfWorksheetReport(argument: _poker_ChangeStatusOfWorksheetReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ChangeStatusOfWorksheetReportResponse__Output>): grpc.ClientUnaryCall;
  changeStatusOfWorksheetReport(argument: _poker_ChangeStatusOfWorksheetReportRequest, callback: grpc.requestCallback<_poker_ChangeStatusOfWorksheetReportResponse__Output>): grpc.ClientUnaryCall;
  
  checkForUpdates(argument: _poker_AccountUpdatesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AccountUpdatesResult__Output>): grpc.ClientUnaryCall;
  checkForUpdates(argument: _poker_AccountUpdatesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AccountUpdatesResult__Output>): grpc.ClientUnaryCall;
  checkForUpdates(argument: _poker_AccountUpdatesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AccountUpdatesResult__Output>): grpc.ClientUnaryCall;
  checkForUpdates(argument: _poker_AccountUpdatesRequest, callback: grpc.requestCallback<_poker_AccountUpdatesResult__Output>): grpc.ClientUnaryCall;
  
  checkIsEmailAvailable(argument: _poker_IsEmailAvailableRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_IsEmailAvailableResponse__Output>): grpc.ClientUnaryCall;
  checkIsEmailAvailable(argument: _poker_IsEmailAvailableRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_IsEmailAvailableResponse__Output>): grpc.ClientUnaryCall;
  checkIsEmailAvailable(argument: _poker_IsEmailAvailableRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_IsEmailAvailableResponse__Output>): grpc.ClientUnaryCall;
  checkIsEmailAvailable(argument: _poker_IsEmailAvailableRequest, callback: grpc.requestCallback<_poker_IsEmailAvailableResponse__Output>): grpc.ClientUnaryCall;
  
  clearTournamentBuffer(argument: _poker_BufferRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_BufferResponse__Output>): grpc.ClientUnaryCall;
  clearTournamentBuffer(argument: _poker_BufferRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_BufferResponse__Output>): grpc.ClientUnaryCall;
  clearTournamentBuffer(argument: _poker_BufferRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_BufferResponse__Output>): grpc.ClientUnaryCall;
  clearTournamentBuffer(argument: _poker_BufferRequest, callback: grpc.requestCallback<_poker_BufferResponse__Output>): grpc.ClientUnaryCall;
  
  clientAffiliateToggle(argument: _poker_ClientAffiliateToggleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientAffiliateToggleResponse__Output>): grpc.ClientUnaryCall;
  clientAffiliateToggle(argument: _poker_ClientAffiliateToggleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientAffiliateToggleResponse__Output>): grpc.ClientUnaryCall;
  clientAffiliateToggle(argument: _poker_ClientAffiliateToggleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientAffiliateToggleResponse__Output>): grpc.ClientUnaryCall;
  clientAffiliateToggle(argument: _poker_ClientAffiliateToggleRequest, callback: grpc.requestCallback<_poker_ClientAffiliateToggleResponse__Output>): grpc.ClientUnaryCall;
  
  confirmTransferAmounts(argument: _poker_ConfirmTransferAmountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ConfirmTransferAmountsResponse__Output>): grpc.ClientUnaryCall;
  confirmTransferAmounts(argument: _poker_ConfirmTransferAmountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ConfirmTransferAmountsResponse__Output>): grpc.ClientUnaryCall;
  confirmTransferAmounts(argument: _poker_ConfirmTransferAmountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ConfirmTransferAmountsResponse__Output>): grpc.ClientUnaryCall;
  confirmTransferAmounts(argument: _poker_ConfirmTransferAmountsRequest, callback: grpc.requestCallback<_poker_ConfirmTransferAmountsResponse__Output>): grpc.ClientUnaryCall;
  
  createAdditionalPayoutBoost(argument: _poker_CreateAdditionalPayoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  createAdditionalPayoutBoost(argument: _poker_CreateAdditionalPayoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CreateAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  createAdditionalPayoutBoost(argument: _poker_CreateAdditionalPayoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  createAdditionalPayoutBoost(argument: _poker_CreateAdditionalPayoutRequest, callback: grpc.requestCallback<_poker_CreateAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  
  createCashierAdjustment(argument: _poker_CreateCashierAdjustmentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateCashierAdjustmentResponse__Output>): grpc.ClientUnaryCall;
  createCashierAdjustment(argument: _poker_CreateCashierAdjustmentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CreateCashierAdjustmentResponse__Output>): grpc.ClientUnaryCall;
  createCashierAdjustment(argument: _poker_CreateCashierAdjustmentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateCashierAdjustmentResponse__Output>): grpc.ClientUnaryCall;
  createCashierAdjustment(argument: _poker_CreateCashierAdjustmentRequest, callback: grpc.requestCallback<_poker_CreateCashierAdjustmentResponse__Output>): grpc.ClientUnaryCall;
  
  createExcludedIdentity(argument: _poker_CreateExcludedIdentityRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateExcludedIdentityResponse__Output>): grpc.ClientUnaryCall;
  createExcludedIdentity(argument: _poker_CreateExcludedIdentityRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CreateExcludedIdentityResponse__Output>): grpc.ClientUnaryCall;
  createExcludedIdentity(argument: _poker_CreateExcludedIdentityRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateExcludedIdentityResponse__Output>): grpc.ClientUnaryCall;
  createExcludedIdentity(argument: _poker_CreateExcludedIdentityRequest, callback: grpc.requestCallback<_poker_CreateExcludedIdentityResponse__Output>): grpc.ClientUnaryCall;
  
  createMultipleUsers(argument: _poker_CreateMultipleUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateMultipleUsersResult__Output>): grpc.ClientUnaryCall;
  createMultipleUsers(argument: _poker_CreateMultipleUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CreateMultipleUsersResult__Output>): grpc.ClientUnaryCall;
  createMultipleUsers(argument: _poker_CreateMultipleUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateMultipleUsersResult__Output>): grpc.ClientUnaryCall;
  createMultipleUsers(argument: _poker_CreateMultipleUsersRequest, callback: grpc.requestCallback<_poker_CreateMultipleUsersResult__Output>): grpc.ClientUnaryCall;
  
  createPaymentMethod(argument: _poker_MobilePaymentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MobilePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPaymentMethod(argument: _poker_MobilePaymentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_MobilePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPaymentMethod(argument: _poker_MobilePaymentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MobilePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPaymentMethod(argument: _poker_MobilePaymentRequest, callback: grpc.requestCallback<_poker_MobilePaymentResponse__Output>): grpc.ClientUnaryCall;
  
  createPlayerSpecificGameMatching(argument: _poker_CreatePlayerSpecificGameMatchingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreatePlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  createPlayerSpecificGameMatching(argument: _poker_CreatePlayerSpecificGameMatchingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CreatePlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  createPlayerSpecificGameMatching(argument: _poker_CreatePlayerSpecificGameMatchingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreatePlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  createPlayerSpecificGameMatching(argument: _poker_CreatePlayerSpecificGameMatchingRequest, callback: grpc.requestCallback<_poker_CreatePlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  
  createTournamentReservationTimeDate(argument: _poker_CreateTournamentReservationTimeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  createTournamentReservationTimeDate(argument: _poker_CreateTournamentReservationTimeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CreateTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  createTournamentReservationTimeDate(argument: _poker_CreateTournamentReservationTimeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  createTournamentReservationTimeDate(argument: _poker_CreateTournamentReservationTimeRequest, callback: grpc.requestCallback<_poker_CreateTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  
  createTournamentTemplate(argument: _poker_CreateTournamentTemplateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateTournamentTemplateResponse__Output>): grpc.ClientUnaryCall;
  createTournamentTemplate(argument: _poker_CreateTournamentTemplateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CreateTournamentTemplateResponse__Output>): grpc.ClientUnaryCall;
  createTournamentTemplate(argument: _poker_CreateTournamentTemplateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CreateTournamentTemplateResponse__Output>): grpc.ClientUnaryCall;
  createTournamentTemplate(argument: _poker_CreateTournamentTemplateRequest, callback: grpc.requestCallback<_poker_CreateTournamentTemplateResponse__Output>): grpc.ClientUnaryCall;
  
  deleteClientEmail(argument: _poker_DeleteClientEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeleteClientEmailResponse__Output>): grpc.ClientUnaryCall;
  deleteClientEmail(argument: _poker_DeleteClientEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DeleteClientEmailResponse__Output>): grpc.ClientUnaryCall;
  deleteClientEmail(argument: _poker_DeleteClientEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeleteClientEmailResponse__Output>): grpc.ClientUnaryCall;
  deleteClientEmail(argument: _poker_DeleteClientEmailRequest, callback: grpc.requestCallback<_poker_DeleteClientEmailResponse__Output>): grpc.ClientUnaryCall;
  
  deletePageExtensions(argument: _poker_DeletePageExtensionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeletePageExtensionResponse__Output>): grpc.ClientUnaryCall;
  deletePageExtensions(argument: _poker_DeletePageExtensionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DeletePageExtensionResponse__Output>): grpc.ClientUnaryCall;
  deletePageExtensions(argument: _poker_DeletePageExtensionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeletePageExtensionResponse__Output>): grpc.ClientUnaryCall;
  deletePageExtensions(argument: _poker_DeletePageExtensionRequest, callback: grpc.requestCallback<_poker_DeletePageExtensionResponse__Output>): grpc.ClientUnaryCall;
  
  deletePaymentMethod(argument: _poker_DeletePaymentMethodRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeletePaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  deletePaymentMethod(argument: _poker_DeletePaymentMethodRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DeletePaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  deletePaymentMethod(argument: _poker_DeletePaymentMethodRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeletePaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  deletePaymentMethod(argument: _poker_DeletePaymentMethodRequest, callback: grpc.requestCallback<_poker_DeletePaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  
  deletePlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  deletePlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  deletePlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  deletePlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  
  deletePrizePoolPayout(argument: _poker_DeletePrizePoolStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeletePrizePoolStatusResponse__Output>): grpc.ClientUnaryCall;
  deletePrizePoolPayout(argument: _poker_DeletePrizePoolStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DeletePrizePoolStatusResponse__Output>): grpc.ClientUnaryCall;
  deletePrizePoolPayout(argument: _poker_DeletePrizePoolStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeletePrizePoolStatusResponse__Output>): grpc.ClientUnaryCall;
  deletePrizePoolPayout(argument: _poker_DeletePrizePoolStatusRequest, callback: grpc.requestCallback<_poker_DeletePrizePoolStatusResponse__Output>): grpc.ClientUnaryCall;
  
  deleteTheme(argument: _poker_ThemesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  deleteTheme(argument: _poker_ThemesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  deleteTheme(argument: _poker_ThemesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  deleteTheme(argument: _poker_ThemesRequest, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  
  deleteUiSettings(argument: _poker_UiSettingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  deleteUiSettings(argument: _poker_UiSettingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  deleteUiSettings(argument: _poker_UiSettingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  deleteUiSettings(argument: _poker_UiSettingsRequest, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  
  deleteUserGeoLocation(argument: _poker_DeleteUserGeoLocationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeleteUSerGeoLocationResponse__Output>): grpc.ClientUnaryCall;
  deleteUserGeoLocation(argument: _poker_DeleteUserGeoLocationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DeleteUSerGeoLocationResponse__Output>): grpc.ClientUnaryCall;
  deleteUserGeoLocation(argument: _poker_DeleteUserGeoLocationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeleteUSerGeoLocationResponse__Output>): grpc.ClientUnaryCall;
  deleteUserGeoLocation(argument: _poker_DeleteUserGeoLocationRequest, callback: grpc.requestCallback<_poker_DeleteUSerGeoLocationResponse__Output>): grpc.ClientUnaryCall;
  
  deleteWorksheetOrReport(argument: _poker_DeleteWorksheetOrReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeleteWorksheetOrReportResponse__Output>): grpc.ClientUnaryCall;
  deleteWorksheetOrReport(argument: _poker_DeleteWorksheetOrReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DeleteWorksheetOrReportResponse__Output>): grpc.ClientUnaryCall;
  deleteWorksheetOrReport(argument: _poker_DeleteWorksheetOrReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DeleteWorksheetOrReportResponse__Output>): grpc.ClientUnaryCall;
  deleteWorksheetOrReport(argument: _poker_DeleteWorksheetOrReportRequest, callback: grpc.requestCallback<_poker_DeleteWorksheetOrReportResponse__Output>): grpc.ClientUnaryCall;
  
  disableWithdrawals(argument: _poker_DisableWithdrawalRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DisableWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  disableWithdrawals(argument: _poker_DisableWithdrawalRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DisableWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  disableWithdrawals(argument: _poker_DisableWithdrawalRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DisableWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  disableWithdrawals(argument: _poker_DisableWithdrawalRequest, callback: grpc.requestCallback<_poker_DisableWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  
  drawAddAction(argument: _poker_DrawAddActionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  drawAddAction(argument: _poker_DrawAddActionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  drawAddAction(argument: _poker_DrawAddActionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  drawAddAction(argument: _poker_DrawAddActionRequest, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  
  drawReplaceAction(argument: _poker_DrawReplaceActionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  drawReplaceAction(argument: _poker_DrawReplaceActionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  drawReplaceAction(argument: _poker_DrawReplaceActionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  drawReplaceAction(argument: _poker_DrawReplaceActionRequest, callback: grpc.requestCallback<_poker_GetStatusResult__Output>): grpc.ClientUnaryCall;
  
  editTheme(argument: _poker_EditThemesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  editTheme(argument: _poker_EditThemesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  editTheme(argument: _poker_EditThemesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  editTheme(argument: _poker_EditThemesRequest, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  
  enablePromoForAnyTournament(argument: _poker_PromoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PromoResponse__Output>): grpc.ClientUnaryCall;
  enablePromoForAnyTournament(argument: _poker_PromoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PromoResponse__Output>): grpc.ClientUnaryCall;
  enablePromoForAnyTournament(argument: _poker_PromoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PromoResponse__Output>): grpc.ClientUnaryCall;
  enablePromoForAnyTournament(argument: _poker_PromoRequest, callback: grpc.requestCallback<_poker_PromoResponse__Output>): grpc.ClientUnaryCall;
  
  extractPageExtensions(argument: _poker_ExtractPageExtensionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ExtractPageExtensionResponse__Output>): grpc.ClientUnaryCall;
  extractPageExtensions(argument: _poker_ExtractPageExtensionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ExtractPageExtensionResponse__Output>): grpc.ClientUnaryCall;
  extractPageExtensions(argument: _poker_ExtractPageExtensionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ExtractPageExtensionResponse__Output>): grpc.ClientUnaryCall;
  extractPageExtensions(argument: _poker_ExtractPageExtensionRequest, callback: grpc.requestCallback<_poker_ExtractPageExtensionResponse__Output>): grpc.ClientUnaryCall;
  
  fetchSecurityQuestions(argument: _poker_FetchSecurityQuestionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  fetchSecurityQuestions(argument: _poker_FetchSecurityQuestionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  fetchSecurityQuestions(argument: _poker_FetchSecurityQuestionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  fetchSecurityQuestions(argument: _poker_FetchSecurityQuestionsRequest, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  
  getAccountStatements(argument: _poker_AccountStatementsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AccountStatementsResponse__Output>): grpc.ClientUnaryCall;
  getAccountStatements(argument: _poker_AccountStatementsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_AccountStatementsResponse__Output>): grpc.ClientUnaryCall;
  getAccountStatements(argument: _poker_AccountStatementsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_AccountStatementsResponse__Output>): grpc.ClientUnaryCall;
  getAccountStatements(argument: _poker_AccountStatementsRequest, callback: grpc.requestCallback<_poker_AccountStatementsResponse__Output>): grpc.ClientUnaryCall;
  
  getActiveJoinAnyTournaments(argument: _poker_ActiveJoinAnyTournamentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveJoinAnyTournamentsResult__Output>): grpc.ClientUnaryCall;
  getActiveJoinAnyTournaments(argument: _poker_ActiveJoinAnyTournamentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ActiveJoinAnyTournamentsResult__Output>): grpc.ClientUnaryCall;
  getActiveJoinAnyTournaments(argument: _poker_ActiveJoinAnyTournamentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveJoinAnyTournamentsResult__Output>): grpc.ClientUnaryCall;
  getActiveJoinAnyTournaments(argument: _poker_ActiveJoinAnyTournamentsRequest, callback: grpc.requestCallback<_poker_ActiveJoinAnyTournamentsResult__Output>): grpc.ClientUnaryCall;
  
  getActiveStats(argument: _poker_ActiveStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveStatsResponse__Output>): grpc.ClientUnaryCall;
  getActiveStats(argument: _poker_ActiveStatsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ActiveStatsResponse__Output>): grpc.ClientUnaryCall;
  getActiveStats(argument: _poker_ActiveStatsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveStatsResponse__Output>): grpc.ClientUnaryCall;
  getActiveStats(argument: _poker_ActiveStatsRequest, callback: grpc.requestCallback<_poker_ActiveStatsResponse__Output>): grpc.ClientUnaryCall;
  
  getActiveUsers(argument: _poker_ActiveUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveUsersResult__Output>): grpc.ClientUnaryCall;
  getActiveUsers(argument: _poker_ActiveUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ActiveUsersResult__Output>): grpc.ClientUnaryCall;
  getActiveUsers(argument: _poker_ActiveUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveUsersResult__Output>): grpc.ClientUnaryCall;
  getActiveUsers(argument: _poker_ActiveUsersRequest, callback: grpc.requestCallback<_poker_ActiveUsersResult__Output>): grpc.ClientUnaryCall;
  
  getActiveUsersData(argument: _poker_ActiveUsersDataRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveUsersDataResponse__Output>): grpc.ClientUnaryCall;
  getActiveUsersData(argument: _poker_ActiveUsersDataRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ActiveUsersDataResponse__Output>): grpc.ClientUnaryCall;
  getActiveUsersData(argument: _poker_ActiveUsersDataRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveUsersDataResponse__Output>): grpc.ClientUnaryCall;
  getActiveUsersData(argument: _poker_ActiveUsersDataRequest, callback: grpc.requestCallback<_poker_ActiveUsersDataResponse__Output>): grpc.ClientUnaryCall;
  
  getAdditionalPayoutById(argument: _poker_GetAdditionalPayoutByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetAdditionalPayoutByIdResponse__Output>): grpc.ClientUnaryCall;
  getAdditionalPayoutById(argument: _poker_GetAdditionalPayoutByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetAdditionalPayoutByIdResponse__Output>): grpc.ClientUnaryCall;
  getAdditionalPayoutById(argument: _poker_GetAdditionalPayoutByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetAdditionalPayoutByIdResponse__Output>): grpc.ClientUnaryCall;
  getAdditionalPayoutById(argument: _poker_GetAdditionalPayoutByIdRequest, callback: grpc.requestCallback<_poker_GetAdditionalPayoutByIdResponse__Output>): grpc.ClientUnaryCall;
  
  getAdditionalPayoutForTournament(argument: _poker_GetAdditionalPayoutDetailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetAdditionalPayoutDetailResponse__Output>): grpc.ClientUnaryCall;
  getAdditionalPayoutForTournament(argument: _poker_GetAdditionalPayoutDetailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetAdditionalPayoutDetailResponse__Output>): grpc.ClientUnaryCall;
  getAdditionalPayoutForTournament(argument: _poker_GetAdditionalPayoutDetailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetAdditionalPayoutDetailResponse__Output>): grpc.ClientUnaryCall;
  getAdditionalPayoutForTournament(argument: _poker_GetAdditionalPayoutDetailRequest, callback: grpc.requestCallback<_poker_GetAdditionalPayoutDetailResponse__Output>): grpc.ClientUnaryCall;
  
  getAdjustmentRequest(argument: _poker_AdjustmentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdjustmentRequest(argument: _poker_AdjustmentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdjustmentRequest(argument: _poker_AdjustmentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdjustmentRequest(argument: _poker_AdjustmentRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getAdminPagePermissions(argument: _poker_GetPagePermissionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  getAdminPagePermissions(argument: _poker_GetPagePermissionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  getAdminPagePermissions(argument: _poker_GetPagePermissionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  getAdminPagePermissions(argument: _poker_GetPagePermissionsRequest, callback: grpc.requestCallback<_poker_GetPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  
  getAdminRoleData(argument: _poker_AdminRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdminRoleData(argument: _poker_AdminRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdminRoleData(argument: _poker_AdminRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdminRoleData(argument: _poker_AdminRoleRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getAdminRoles(argument: _poker_AdminUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdminRoles(argument: _poker_AdminUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdminRoles(argument: _poker_AdminUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdminRoles(argument: _poker_AdminUpdateRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getAdmins(argument: _poker_ActiveUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdmins(argument: _poker_ActiveUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdmins(argument: _poker_ActiveUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getAdmins(argument: _poker_ActiveUsersRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getAllBoostedAdditionalPayout(argument: _poker_GetAllBoostedAdditionalPayoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetAllBoostedAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  getAllBoostedAdditionalPayout(argument: _poker_GetAllBoostedAdditionalPayoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetAllBoostedAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  getAllBoostedAdditionalPayout(argument: _poker_GetAllBoostedAdditionalPayoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetAllBoostedAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  getAllBoostedAdditionalPayout(argument: _poker_GetAllBoostedAdditionalPayoutRequest, callback: grpc.requestCallback<_poker_GetAllBoostedAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  
  getAllClientEmail(argument: _poker_GetAllClientEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetAllClientEmailResponse__Output>): grpc.ClientUnaryCall;
  getAllClientEmail(argument: _poker_GetAllClientEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetAllClientEmailResponse__Output>): grpc.ClientUnaryCall;
  getAllClientEmail(argument: _poker_GetAllClientEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetAllClientEmailResponse__Output>): grpc.ClientUnaryCall;
  getAllClientEmail(argument: _poker_GetAllClientEmailRequest, callback: grpc.requestCallback<_poker_GetAllClientEmailResponse__Output>): grpc.ClientUnaryCall;
  
  getAllHandHistoryData(argument: _poker_GetHandHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getAllHandHistoryData(argument: _poker_GetHandHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getAllHandHistoryData(argument: _poker_GetHandHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getAllHandHistoryData(argument: _poker_GetHandHistoryRequest, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  
  getAllUiSettings(argument: _poker_UiSettingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  getAllUiSettings(argument: _poker_UiSettingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  getAllUiSettings(argument: _poker_UiSettingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  getAllUiSettings(argument: _poker_UiSettingsRequest, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  
  getAmountInplay(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FloatResponse__Output>): grpc.ClientUnaryCall;
  getAmountInplay(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_FloatResponse__Output>): grpc.ClientUnaryCall;
  getAmountInplay(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FloatResponse__Output>): grpc.ClientUnaryCall;
  getAmountInplay(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_poker_FloatResponse__Output>): grpc.ClientUnaryCall;
  
  getApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getApiKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getApiKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  getApnPushNotificationKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getApnPushNotificationKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getApnPushNotificationKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getApnPushNotificationKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  getApprovedRequest(argument: _poker_PendingDepositRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getApprovedRequest(argument: _poker_PendingDepositRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getApprovedRequest(argument: _poker_PendingDepositRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getApprovedRequest(argument: _poker_PendingDepositRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getBlacklistedClientsonGeofence(argument: _poker_GeofenceClientsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceClientsResponse__Output>): grpc.ClientUnaryCall;
  getBlacklistedClientsonGeofence(argument: _poker_GeofenceClientsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceClientsResponse__Output>): grpc.ClientUnaryCall;
  getBlacklistedClientsonGeofence(argument: _poker_GeofenceClientsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceClientsResponse__Output>): grpc.ClientUnaryCall;
  getBlacklistedClientsonGeofence(argument: _poker_GeofenceClientsRequest, callback: grpc.requestCallback<_poker_GeofenceClientsResponse__Output>): grpc.ClientUnaryCall;
  
  getBlacklistedUsersonGeofence(argument: _poker_GeofenceUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceUsersResponse__Output>): grpc.ClientUnaryCall;
  getBlacklistedUsersonGeofence(argument: _poker_GeofenceUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceUsersResponse__Output>): grpc.ClientUnaryCall;
  getBlacklistedUsersonGeofence(argument: _poker_GeofenceUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceUsersResponse__Output>): grpc.ClientUnaryCall;
  getBlacklistedUsersonGeofence(argument: _poker_GeofenceUsersRequest, callback: grpc.requestCallback<_poker_GeofenceUsersResponse__Output>): grpc.ClientUnaryCall;
  
  getBotList(argument: _poker_ActiveUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveUsersResult__Output>): grpc.ClientUnaryCall;
  getBotList(argument: _poker_ActiveUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ActiveUsersResult__Output>): grpc.ClientUnaryCall;
  getBotList(argument: _poker_ActiveUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ActiveUsersResult__Output>): grpc.ClientUnaryCall;
  getBotList(argument: _poker_ActiveUsersRequest, callback: grpc.requestCallback<_poker_ActiveUsersResult__Output>): grpc.ClientUnaryCall;
  
  getCancelTournamentList(argument: _poker_GetCancelTournamentListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetCancelTournamentListResponse__Output>): grpc.ClientUnaryCall;
  getCancelTournamentList(argument: _poker_GetCancelTournamentListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetCancelTournamentListResponse__Output>): grpc.ClientUnaryCall;
  getCancelTournamentList(argument: _poker_GetCancelTournamentListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetCancelTournamentListResponse__Output>): grpc.ClientUnaryCall;
  getCancelTournamentList(argument: _poker_GetCancelTournamentListRequest, callback: grpc.requestCallback<_poker_GetCancelTournamentListResponse__Output>): grpc.ClientUnaryCall;
  
  getClientData(argument: _poker_ClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientResponse__Output>): grpc.ClientUnaryCall;
  getClientData(argument: _poker_ClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientResponse__Output>): grpc.ClientUnaryCall;
  getClientData(argument: _poker_ClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientResponse__Output>): grpc.ClientUnaryCall;
  getClientData(argument: _poker_ClientRequest, callback: grpc.requestCallback<_poker_ClientResponse__Output>): grpc.ClientUnaryCall;
  
  getClientEmail(argument: _poker_GetClientEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetClientEmailResponse__Output>): grpc.ClientUnaryCall;
  getClientEmail(argument: _poker_GetClientEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetClientEmailResponse__Output>): grpc.ClientUnaryCall;
  getClientEmail(argument: _poker_GetClientEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetClientEmailResponse__Output>): grpc.ClientUnaryCall;
  getClientEmail(argument: _poker_GetClientEmailRequest, callback: grpc.requestCallback<_poker_GetClientEmailResponse__Output>): grpc.ClientUnaryCall;
  
  getClientGroupTournamentImage(argument: _poker_ClientGroupTournamentImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  getClientGroupTournamentImage(argument: _poker_ClientGroupTournamentImageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  getClientGroupTournamentImage(argument: _poker_ClientGroupTournamentImageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  getClientGroupTournamentImage(argument: _poker_ClientGroupTournamentImageRequest, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  
  getClientToken(argument: _poker_ClientTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTokenResponse__Output>): grpc.ClientUnaryCall;
  getClientToken(argument: _poker_ClientTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientTokenResponse__Output>): grpc.ClientUnaryCall;
  getClientToken(argument: _poker_ClientTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTokenResponse__Output>): grpc.ClientUnaryCall;
  getClientToken(argument: _poker_ClientTokenRequest, callback: grpc.requestCallback<_poker_ClientTokenResponse__Output>): grpc.ClientUnaryCall;
  
  getClientTournamentImage(argument: _poker_ClientTournamentImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  getClientTournamentImage(argument: _poker_ClientTournamentImageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  getClientTournamentImage(argument: _poker_ClientTournamentImageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  getClientTournamentImage(argument: _poker_ClientTournamentImageRequest, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  
  getClients(argument: _poker_WhitelistedClientsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistedClientsResult__Output>): grpc.ClientUnaryCall;
  getClients(argument: _poker_WhitelistedClientsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WhitelistedClientsResult__Output>): grpc.ClientUnaryCall;
  getClients(argument: _poker_WhitelistedClientsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistedClientsResult__Output>): grpc.ClientUnaryCall;
  getClients(argument: _poker_WhitelistedClientsRequest, callback: grpc.requestCallback<_poker_WhitelistedClientsResult__Output>): grpc.ClientUnaryCall;
  
  getComponentPermissionData(argument: _poker_ComponentPermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getComponentPermissionData(argument: _poker_ComponentPermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getComponentPermissionData(argument: _poker_ComponentPermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getComponentPermissionData(argument: _poker_ComponentPermissionRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getCustomCss(argument: _poker_CustomCssRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CustomCssResponse__Output>): grpc.ClientUnaryCall;
  getCustomCss(argument: _poker_CustomCssRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CustomCssResponse__Output>): grpc.ClientUnaryCall;
  getCustomCss(argument: _poker_CustomCssRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CustomCssResponse__Output>): grpc.ClientUnaryCall;
  getCustomCss(argument: _poker_CustomCssRequest, callback: grpc.requestCallback<_poker_CustomCssResponse__Output>): grpc.ClientUnaryCall;
  
  getCustomerID(argument: _poker_GetCustomerIDRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetCustomerIDResponse__Output>): grpc.ClientUnaryCall;
  getCustomerID(argument: _poker_GetCustomerIDRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetCustomerIDResponse__Output>): grpc.ClientUnaryCall;
  getCustomerID(argument: _poker_GetCustomerIDRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetCustomerIDResponse__Output>): grpc.ClientUnaryCall;
  getCustomerID(argument: _poker_GetCustomerIDRequest, callback: grpc.requestCallback<_poker_GetCustomerIDResponse__Output>): grpc.ClientUnaryCall;
  getCustomerId(argument: _poker_GetCustomerIDRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetCustomerIDResponse__Output>): grpc.ClientUnaryCall;
  getCustomerId(argument: _poker_GetCustomerIDRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetCustomerIDResponse__Output>): grpc.ClientUnaryCall;
  getCustomerId(argument: _poker_GetCustomerIDRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetCustomerIDResponse__Output>): grpc.ClientUnaryCall;
  getCustomerId(argument: _poker_GetCustomerIDRequest, callback: grpc.requestCallback<_poker_GetCustomerIDResponse__Output>): grpc.ClientUnaryCall;
  
  getDefaultPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressResponse__Output>): grpc.ClientUnaryCall;
  getDefaultPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PlayerMailingAddressResponse__Output>): grpc.ClientUnaryCall;
  getDefaultPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressResponse__Output>): grpc.ClientUnaryCall;
  getDefaultPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, callback: grpc.requestCallback<_poker_PlayerMailingAddressResponse__Output>): grpc.ClientUnaryCall;
  
  getDepositsRequest(argument: _poker_DepositsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDepositsRequest(argument: _poker_DepositsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDepositsRequest(argument: _poker_DepositsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDepositsRequest(argument: _poker_DepositsRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getDisabledWithdrawals(argument: _poker_DisabledWithdrawalsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DisabledWithdrawalsResponse__Output>): grpc.ClientUnaryCall;
  getDisabledWithdrawals(argument: _poker_DisabledWithdrawalsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DisabledWithdrawalsResponse__Output>): grpc.ClientUnaryCall;
  getDisabledWithdrawals(argument: _poker_DisabledWithdrawalsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DisabledWithdrawalsResponse__Output>): grpc.ClientUnaryCall;
  getDisabledWithdrawals(argument: _poker_DisabledWithdrawalsRequest, callback: grpc.requestCallback<_poker_DisabledWithdrawalsResponse__Output>): grpc.ClientUnaryCall;
  
  getDistinctPage(argument: _poker_AdminPageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDistinctPage(argument: _poker_AdminPageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDistinctPage(argument: _poker_AdminPageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDistinctPage(argument: _poker_AdminPageRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getDistinctRole(argument: _poker_AdminRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDistinctRole(argument: _poker_AdminRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDistinctRole(argument: _poker_AdminRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getDistinctRole(argument: _poker_AdminRoleRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getDriversLicense(argument: _poker_DriversLicenseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DriversLicenseResponse__Output>): grpc.ClientUnaryCall;
  getDriversLicense(argument: _poker_DriversLicenseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DriversLicenseResponse__Output>): grpc.ClientUnaryCall;
  getDriversLicense(argument: _poker_DriversLicenseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DriversLicenseResponse__Output>): grpc.ClientUnaryCall;
  getDriversLicense(argument: _poker_DriversLicenseRequest, callback: grpc.requestCallback<_poker_DriversLicenseResponse__Output>): grpc.ClientUnaryCall;
  
  getDuplicateUserForDeviceId(argument: _poker_DuplicateUserForDeviceIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DuplicateUserForDeviceIdResponse__Output>): grpc.ClientUnaryCall;
  getDuplicateUserForDeviceId(argument: _poker_DuplicateUserForDeviceIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DuplicateUserForDeviceIdResponse__Output>): grpc.ClientUnaryCall;
  getDuplicateUserForDeviceId(argument: _poker_DuplicateUserForDeviceIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DuplicateUserForDeviceIdResponse__Output>): grpc.ClientUnaryCall;
  getDuplicateUserForDeviceId(argument: _poker_DuplicateUserForDeviceIdRequest, callback: grpc.requestCallback<_poker_DuplicateUserForDeviceIdResponse__Output>): grpc.ClientUnaryCall;
  
  getFailedBraintreeTransactions(argument: _poker_FailedBraintreeTransactionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FailedBraintreeTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getFailedBraintreeTransactions(argument: _poker_FailedBraintreeTransactionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_FailedBraintreeTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getFailedBraintreeTransactions(argument: _poker_FailedBraintreeTransactionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FailedBraintreeTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getFailedBraintreeTransactions(argument: _poker_FailedBraintreeTransactionsRequest, callback: grpc.requestCallback<_poker_FailedBraintreeTransactionsResponse__Output>): grpc.ClientUnaryCall;
  
  getFailedReferralLogs(argument: _poker_FailedReferralLogsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FailedReferralLogsResponse__Output>): grpc.ClientUnaryCall;
  getFailedReferralLogs(argument: _poker_FailedReferralLogsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_FailedReferralLogsResponse__Output>): grpc.ClientUnaryCall;
  getFailedReferralLogs(argument: _poker_FailedReferralLogsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FailedReferralLogsResponse__Output>): grpc.ClientUnaryCall;
  getFailedReferralLogs(argument: _poker_FailedReferralLogsRequest, callback: grpc.requestCallback<_poker_FailedReferralLogsResponse__Output>): grpc.ClientUnaryCall;
  
  getFreePlayPromoUsers(argument: _poker_GetFreePlayPromoUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetFreePlayPromoUsersResponse__Output>): grpc.ClientUnaryCall;
  getFreePlayPromoUsers(argument: _poker_GetFreePlayPromoUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetFreePlayPromoUsersResponse__Output>): grpc.ClientUnaryCall;
  getFreePlayPromoUsers(argument: _poker_GetFreePlayPromoUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetFreePlayPromoUsersResponse__Output>): grpc.ClientUnaryCall;
  getFreePlayPromoUsers(argument: _poker_GetFreePlayPromoUsersRequest, callback: grpc.requestCallback<_poker_GetFreePlayPromoUsersResponse__Output>): grpc.ClientUnaryCall;
  
  getGamePlayStatusForUserPerTable(argument: _poker_GamePlayStatusForUserPerTableRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GamePlayStatusForUserPerTableResponse__Output>): grpc.ClientUnaryCall;
  getGamePlayStatusForUserPerTable(argument: _poker_GamePlayStatusForUserPerTableRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GamePlayStatusForUserPerTableResponse__Output>): grpc.ClientUnaryCall;
  getGamePlayStatusForUserPerTable(argument: _poker_GamePlayStatusForUserPerTableRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GamePlayStatusForUserPerTableResponse__Output>): grpc.ClientUnaryCall;
  getGamePlayStatusForUserPerTable(argument: _poker_GamePlayStatusForUserPerTableRequest, callback: grpc.requestCallback<_poker_GamePlayStatusForUserPerTableResponse__Output>): grpc.ClientUnaryCall;
  
  getGameplayHistories(argument: _poker_GetGameplayHistoriesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetGameplayHistoriesResponse__Output>): grpc.ClientUnaryCall;
  getGameplayHistories(argument: _poker_GetGameplayHistoriesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetGameplayHistoriesResponse__Output>): grpc.ClientUnaryCall;
  getGameplayHistories(argument: _poker_GetGameplayHistoriesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetGameplayHistoriesResponse__Output>): grpc.ClientUnaryCall;
  getGameplayHistories(argument: _poker_GetGameplayHistoriesRequest, callback: grpc.requestCallback<_poker_GetGameplayHistoriesResponse__Output>): grpc.ClientUnaryCall;
  
  getGeofenceData(argument: _poker_GeofenceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceResponse__Output>): grpc.ClientUnaryCall;
  getGeofenceData(argument: _poker_GeofenceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceResponse__Output>): grpc.ClientUnaryCall;
  getGeofenceData(argument: _poker_GeofenceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceResponse__Output>): grpc.ClientUnaryCall;
  getGeofenceData(argument: _poker_GeofenceRequest, callback: grpc.requestCallback<_poker_GeofenceResponse__Output>): grpc.ClientUnaryCall;
  
  getGeopoll(argument: _poker_GeopollRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeopollResponse__Output>): grpc.ClientUnaryCall;
  getGeopoll(argument: _poker_GeopollRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeopollResponse__Output>): grpc.ClientUnaryCall;
  getGeopoll(argument: _poker_GeopollRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeopollResponse__Output>): grpc.ClientUnaryCall;
  getGeopoll(argument: _poker_GeopollRequest, callback: grpc.requestCallback<_poker_GeopollResponse__Output>): grpc.ClientUnaryCall;
  
  getGlobalSettings(argument: _poker_GlobalSettingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GlobalSettingsResponse__Output>): grpc.ClientUnaryCall;
  getGlobalSettings(argument: _poker_GlobalSettingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GlobalSettingsResponse__Output>): grpc.ClientUnaryCall;
  getGlobalSettings(argument: _poker_GlobalSettingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GlobalSettingsResponse__Output>): grpc.ClientUnaryCall;
  getGlobalSettings(argument: _poker_GlobalSettingsRequest, callback: grpc.requestCallback<_poker_GlobalSettingsResponse__Output>): grpc.ClientUnaryCall;
  
  getGroupedClientData(argument: _poker_GroupedClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GroupedClientResponse__Output>): grpc.ClientUnaryCall;
  getGroupedClientData(argument: _poker_GroupedClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GroupedClientResponse__Output>): grpc.ClientUnaryCall;
  getGroupedClientData(argument: _poker_GroupedClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GroupedClientResponse__Output>): grpc.ClientUnaryCall;
  getGroupedClientData(argument: _poker_GroupedClientRequest, callback: grpc.requestCallback<_poker_GroupedClientResponse__Output>): grpc.ClientUnaryCall;
  
  getHandHistoryData(argument: _poker_GetHandHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getHandHistoryData(argument: _poker_GetHandHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getHandHistoryData(argument: _poker_GetHandHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getHandHistoryData(argument: _poker_GetHandHistoryRequest, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  
  getHandHistoryStat(argument: _poker_GetHandHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getHandHistoryStat(argument: _poker_GetHandHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getHandHistoryStat(argument: _poker_GetHandHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getHandHistoryStat(argument: _poker_GetHandHistoryRequest, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  
  getIgdpparPoolAdjustment(argument: _poker_GetPoolAccountBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPoolAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  getIgdpparPoolAdjustment(argument: _poker_GetPoolAccountBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetPoolAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  getIgdpparPoolAdjustment(argument: _poker_GetPoolAccountBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPoolAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  getIgdpparPoolAdjustment(argument: _poker_GetPoolAccountBalanceRequest, callback: grpc.requestCallback<_poker_GetPoolAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  
  getJoinAnyTournamentStatus(argument: _poker_JoinAnyTournamentStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyTournamentStatusResult__Output>): grpc.ClientUnaryCall;
  getJoinAnyTournamentStatus(argument: _poker_JoinAnyTournamentStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_JoinAnyTournamentStatusResult__Output>): grpc.ClientUnaryCall;
  getJoinAnyTournamentStatus(argument: _poker_JoinAnyTournamentStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyTournamentStatusResult__Output>): grpc.ClientUnaryCall;
  getJoinAnyTournamentStatus(argument: _poker_JoinAnyTournamentStatusRequest, callback: grpc.requestCallback<_poker_JoinAnyTournamentStatusResult__Output>): grpc.ClientUnaryCall;
  
  getJoinAnyUsersList(argument: _poker_JoinAnyUsersListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyUsersListResult__Output>): grpc.ClientUnaryCall;
  getJoinAnyUsersList(argument: _poker_JoinAnyUsersListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_JoinAnyUsersListResult__Output>): grpc.ClientUnaryCall;
  getJoinAnyUsersList(argument: _poker_JoinAnyUsersListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyUsersListResult__Output>): grpc.ClientUnaryCall;
  getJoinAnyUsersList(argument: _poker_JoinAnyUsersListRequest, callback: grpc.requestCallback<_poker_JoinAnyUsersListResult__Output>): grpc.ClientUnaryCall;
  
  getJoinrequestTracker(argument: _poker_JoinRequestStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinRequestStatsResponse__Output>): grpc.ClientUnaryCall;
  getJoinrequestTracker(argument: _poker_JoinRequestStatsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_JoinRequestStatsResponse__Output>): grpc.ClientUnaryCall;
  getJoinrequestTracker(argument: _poker_JoinRequestStatsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinRequestStatsResponse__Output>): grpc.ClientUnaryCall;
  getJoinrequestTracker(argument: _poker_JoinRequestStatsRequest, callback: grpc.requestCallback<_poker_JoinRequestStatsResponse__Output>): grpc.ClientUnaryCall;
  
  getLabelEditor(argument: _poker_LabelEditorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LabelEditorResponse__Output>): grpc.ClientUnaryCall;
  getLabelEditor(argument: _poker_LabelEditorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_LabelEditorResponse__Output>): grpc.ClientUnaryCall;
  getLabelEditor(argument: _poker_LabelEditorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LabelEditorResponse__Output>): grpc.ClientUnaryCall;
  getLabelEditor(argument: _poker_LabelEditorRequest, callback: grpc.requestCallback<_poker_LabelEditorResponse__Output>): grpc.ClientUnaryCall;
  
  getLobbyTournamentTemplateList(argument: _poker_GetLobbyTournamentTemplateListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetLobbyTournamentTemplateListResponse__Output>): grpc.ClientUnaryCall;
  getLobbyTournamentTemplateList(argument: _poker_GetLobbyTournamentTemplateListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetLobbyTournamentTemplateListResponse__Output>): grpc.ClientUnaryCall;
  getLobbyTournamentTemplateList(argument: _poker_GetLobbyTournamentTemplateListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetLobbyTournamentTemplateListResponse__Output>): grpc.ClientUnaryCall;
  getLobbyTournamentTemplateList(argument: _poker_GetLobbyTournamentTemplateListRequest, callback: grpc.requestCallback<_poker_GetLobbyTournamentTemplateListResponse__Output>): grpc.ClientUnaryCall;
  
  getLobbyVisibleTournamentList(argument: _poker_GetLobbyVisibleTournamentListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetLobbyVisibleTournamentListResponse__Output>): grpc.ClientUnaryCall;
  getLobbyVisibleTournamentList(argument: _poker_GetLobbyVisibleTournamentListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetLobbyVisibleTournamentListResponse__Output>): grpc.ClientUnaryCall;
  getLobbyVisibleTournamentList(argument: _poker_GetLobbyVisibleTournamentListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetLobbyVisibleTournamentListResponse__Output>): grpc.ClientUnaryCall;
  getLobbyVisibleTournamentList(argument: _poker_GetLobbyVisibleTournamentListRequest, callback: grpc.requestCallback<_poker_GetLobbyVisibleTournamentListResponse__Output>): grpc.ClientUnaryCall;
  
  getNextTournament(argument: _poker_NextTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_NextTournamentResult__Output>): grpc.ClientUnaryCall;
  getNextTournament(argument: _poker_NextTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_NextTournamentResult__Output>): grpc.ClientUnaryCall;
  getNextTournament(argument: _poker_NextTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_NextTournamentResult__Output>): grpc.ClientUnaryCall;
  getNextTournament(argument: _poker_NextTournamentRequest, callback: grpc.requestCallback<_poker_NextTournamentResult__Output>): grpc.ClientUnaryCall;
  
  getNotificationEmailLogs(argument: _poker_NotificationEmailLogsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_NotificationEmailLogsResponse__Output>): grpc.ClientUnaryCall;
  getNotificationEmailLogs(argument: _poker_NotificationEmailLogsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_NotificationEmailLogsResponse__Output>): grpc.ClientUnaryCall;
  getNotificationEmailLogs(argument: _poker_NotificationEmailLogsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_NotificationEmailLogsResponse__Output>): grpc.ClientUnaryCall;
  getNotificationEmailLogs(argument: _poker_NotificationEmailLogsRequest, callback: grpc.requestCallback<_poker_NotificationEmailLogsResponse__Output>): grpc.ClientUnaryCall;
  
  getNotificationTemplates(argument: _poker_GetNotificationTemplatesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  getNotificationTemplates(argument: _poker_GetNotificationTemplatesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  getNotificationTemplates(argument: _poker_GetNotificationTemplatesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  getNotificationTemplates(argument: _poker_GetNotificationTemplatesRequest, callback: grpc.requestCallback<_poker_GetNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  
  getPageExtensions(argument: _poker_GetPageExtensionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPageExtensionsResponse__Output>): grpc.ClientUnaryCall;
  getPageExtensions(argument: _poker_GetPageExtensionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetPageExtensionsResponse__Output>): grpc.ClientUnaryCall;
  getPageExtensions(argument: _poker_GetPageExtensionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPageExtensionsResponse__Output>): grpc.ClientUnaryCall;
  getPageExtensions(argument: _poker_GetPageExtensionsRequest, callback: grpc.requestCallback<_poker_GetPageExtensionsResponse__Output>): grpc.ClientUnaryCall;
  
  getPasswordResetLink(argument: _poker_GetPasswordResetLinkRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPasswordResetLinkResponse__Output>): grpc.ClientUnaryCall;
  getPasswordResetLink(argument: _poker_GetPasswordResetLinkRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetPasswordResetLinkResponse__Output>): grpc.ClientUnaryCall;
  getPasswordResetLink(argument: _poker_GetPasswordResetLinkRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPasswordResetLinkResponse__Output>): grpc.ClientUnaryCall;
  getPasswordResetLink(argument: _poker_GetPasswordResetLinkRequest, callback: grpc.requestCallback<_poker_GetPasswordResetLinkResponse__Output>): grpc.ClientUnaryCall;
  
  getPayoutStructure(argument: _poker_GetPayoutStructureRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  getPayoutStructure(argument: _poker_GetPayoutStructureRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  getPayoutStructure(argument: _poker_GetPayoutStructureRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  getPayoutStructure(argument: _poker_GetPayoutStructureRequest, callback: grpc.requestCallback<_poker_GetPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  
  getPendingDepositsRequest(argument: _poker_PendingDepositsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getPendingDepositsRequest(argument: _poker_PendingDepositsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getPendingDepositsRequest(argument: _poker_PendingDepositsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getPendingDepositsRequest(argument: _poker_PendingDepositsRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getPendingRequest(argument: _poker_PendingDepositRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getPendingRequest(argument: _poker_PendingDepositRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getPendingRequest(argument: _poker_PendingDepositRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getPendingRequest(argument: _poker_PendingDepositRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getPendingTransactions(argument: _poker_GetPendingTransactionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPendingTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getPendingTransactions(argument: _poker_GetPendingTransactionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetPendingTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getPendingTransactions(argument: _poker_GetPendingTransactionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPendingTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getPendingTransactions(argument: _poker_GetPendingTransactionsRequest, callback: grpc.requestCallback<_poker_GetPendingTransactionsResponse__Output>): grpc.ClientUnaryCall;
  
  getPlaceholderUser(argument: _poker_ReservationBlackListedUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListedUserResponse__Output>): grpc.ClientUnaryCall;
  getPlaceholderUser(argument: _poker_ReservationBlackListedUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReservationBlackListedUserResponse__Output>): grpc.ClientUnaryCall;
  getPlaceholderUser(argument: _poker_ReservationBlackListedUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListedUserResponse__Output>): grpc.ClientUnaryCall;
  getPlaceholderUser(argument: _poker_ReservationBlackListedUserRequest, callback: grpc.requestCallback<_poker_ReservationBlackListedUserResponse__Output>): grpc.ClientUnaryCall;
  
  getPlayerAccountBalance(argument: _poker_PlayerAccountBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerAccountBalanceResult__Output>): grpc.ClientUnaryCall;
  getPlayerAccountBalance(argument: _poker_PlayerAccountBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PlayerAccountBalanceResult__Output>): grpc.ClientUnaryCall;
  getPlayerAccountBalance(argument: _poker_PlayerAccountBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerAccountBalanceResult__Output>): grpc.ClientUnaryCall;
  getPlayerAccountBalance(argument: _poker_PlayerAccountBalanceRequest, callback: grpc.requestCallback<_poker_PlayerAccountBalanceResult__Output>): grpc.ClientUnaryCall;
  
  getPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressResponse__Output>): grpc.ClientUnaryCall;
  getPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PlayerMailingAddressResponse__Output>): grpc.ClientUnaryCall;
  getPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressResponse__Output>): grpc.ClientUnaryCall;
  getPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, callback: grpc.requestCallback<_poker_PlayerMailingAddressResponse__Output>): grpc.ClientUnaryCall;
  
  getPlayerMailingAddresses(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressesResponse__Output>): grpc.ClientUnaryCall;
  getPlayerMailingAddresses(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PlayerMailingAddressesResponse__Output>): grpc.ClientUnaryCall;
  getPlayerMailingAddresses(argument: _poker_PlayerMailingAddressRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressesResponse__Output>): grpc.ClientUnaryCall;
  getPlayerMailingAddresses(argument: _poker_PlayerMailingAddressRequest, callback: grpc.requestCallback<_poker_PlayerMailingAddressesResponse__Output>): grpc.ClientUnaryCall;
  
  getPlayerSpecificGameMatching(argument: _poker_GetPlayerSpecificGameMatchingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  getPlayerSpecificGameMatching(argument: _poker_GetPlayerSpecificGameMatchingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetPlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  getPlayerSpecificGameMatching(argument: _poker_GetPlayerSpecificGameMatchingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  getPlayerSpecificGameMatching(argument: _poker_GetPlayerSpecificGameMatchingRequest, callback: grpc.requestCallback<_poker_GetPlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  
  getPlayerTournaments(argument: _poker_PlayerTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentsResponse__Output>): grpc.ClientUnaryCall;
  getPlayerTournaments(argument: _poker_PlayerTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentsResponse__Output>): grpc.ClientUnaryCall;
  getPlayerTournaments(argument: _poker_PlayerTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentsResponse__Output>): grpc.ClientUnaryCall;
  getPlayerTournaments(argument: _poker_PlayerTournamentRequest, callback: grpc.requestCallback<_poker_GetTournamentsResponse__Output>): grpc.ClientUnaryCall;
  
  getPoolAccountBalance(argument: _poker_GetPoolAccountBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPoolAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  getPoolAccountBalance(argument: _poker_GetPoolAccountBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetPoolAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  getPoolAccountBalance(argument: _poker_GetPoolAccountBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetPoolAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  getPoolAccountBalance(argument: _poker_GetPoolAccountBalanceRequest, callback: grpc.requestCallback<_poker_GetPoolAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  
  getPromoQualificationData(argument: _poker_promoQualificationDataRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_promoQualificationDataResponse__Output>): grpc.ClientUnaryCall;
  getPromoQualificationData(argument: _poker_promoQualificationDataRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_promoQualificationDataResponse__Output>): grpc.ClientUnaryCall;
  getPromoQualificationData(argument: _poker_promoQualificationDataRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_promoQualificationDataResponse__Output>): grpc.ClientUnaryCall;
  getPromoQualificationData(argument: _poker_promoQualificationDataRequest, callback: grpc.requestCallback<_poker_promoQualificationDataResponse__Output>): grpc.ClientUnaryCall;
  
  getPushNotificationKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getPushNotificationKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getPushNotificationKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  getPushNotificationKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  getRandomSecurityQuestion(argument: _poker_FetchSecurityQuestionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  getRandomSecurityQuestion(argument: _poker_FetchSecurityQuestionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  getRandomSecurityQuestion(argument: _poker_FetchSecurityQuestionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  getRandomSecurityQuestion(argument: _poker_FetchSecurityQuestionsRequest, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  
  getRecuringDeposit(argument: _poker_GetRecuringDepositRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  getRecuringDeposit(argument: _poker_GetRecuringDepositRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  getRecuringDeposit(argument: _poker_GetRecuringDepositRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  getRecuringDeposit(argument: _poker_GetRecuringDepositRequest, callback: grpc.requestCallback<_poker_GetRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  
  getReportsForAffiliateCopy(argument: _poker_GetReportsForAffiliateCopyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetReportsForAffiliateCopyResponse__Output>): grpc.ClientUnaryCall;
  getReportsForAffiliateCopy(argument: _poker_GetReportsForAffiliateCopyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetReportsForAffiliateCopyResponse__Output>): grpc.ClientUnaryCall;
  getReportsForAffiliateCopy(argument: _poker_GetReportsForAffiliateCopyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetReportsForAffiliateCopyResponse__Output>): grpc.ClientUnaryCall;
  getReportsForAffiliateCopy(argument: _poker_GetReportsForAffiliateCopyRequest, callback: grpc.requestCallback<_poker_GetReportsForAffiliateCopyResponse__Output>): grpc.ClientUnaryCall;
  
  getReservationBlackListedTournamentTemplates(argument: _poker_ReservationBlackListedTournamentTemplatesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListedTournamentTemplatesResponse__Output>): grpc.ClientUnaryCall;
  getReservationBlackListedTournamentTemplates(argument: _poker_ReservationBlackListedTournamentTemplatesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReservationBlackListedTournamentTemplatesResponse__Output>): grpc.ClientUnaryCall;
  getReservationBlackListedTournamentTemplates(argument: _poker_ReservationBlackListedTournamentTemplatesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListedTournamentTemplatesResponse__Output>): grpc.ClientUnaryCall;
  getReservationBlackListedTournamentTemplates(argument: _poker_ReservationBlackListedTournamentTemplatesRequest, callback: grpc.requestCallback<_poker_ReservationBlackListedTournamentTemplatesResponse__Output>): grpc.ClientUnaryCall;
  
  getReservationDataList(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  getReservationDataList(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  getReservationDataList(argument: _poker_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  getReservationDataList(argument: _poker_SearchUserRequest, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  
  getReservationTimeEditor(argument: _poker_GetReservationTimeEditorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetReservationTimeEditorResponse__Output>): grpc.ClientUnaryCall;
  getReservationTimeEditor(argument: _poker_GetReservationTimeEditorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetReservationTimeEditorResponse__Output>): grpc.ClientUnaryCall;
  getReservationTimeEditor(argument: _poker_GetReservationTimeEditorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetReservationTimeEditorResponse__Output>): grpc.ClientUnaryCall;
  getReservationTimeEditor(argument: _poker_GetReservationTimeEditorRequest, callback: grpc.requestCallback<_poker_GetReservationTimeEditorResponse__Output>): grpc.ClientUnaryCall;
  
  getRoyalHands(argument: _poker_GetRoyalHandsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetRoyalHandsResponse__Output>): grpc.ClientUnaryCall;
  getRoyalHands(argument: _poker_GetRoyalHandsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetRoyalHandsResponse__Output>): grpc.ClientUnaryCall;
  getRoyalHands(argument: _poker_GetRoyalHandsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetRoyalHandsResponse__Output>): grpc.ClientUnaryCall;
  getRoyalHands(argument: _poker_GetRoyalHandsRequest, callback: grpc.requestCallback<_poker_GetRoyalHandsResponse__Output>): grpc.ClientUnaryCall;
  
  getSSNWhiteList(argument: _poker_SSNWhitelistRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  getSSNWhiteList(argument: _poker_SSNWhitelistRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  getSSNWhiteList(argument: _poker_SSNWhitelistRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  getSSNWhiteList(argument: _poker_SSNWhitelistRequest, callback: grpc.requestCallback<_poker_SSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  getSsnWhiteList(argument: _poker_SSNWhitelistRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  getSsnWhiteList(argument: _poker_SSNWhitelistRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  getSsnWhiteList(argument: _poker_SSNWhitelistRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  getSsnWhiteList(argument: _poker_SSNWhitelistRequest, callback: grpc.requestCallback<_poker_SSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  
  getSessionsRequest(argument: _poker_SessionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getSessionsRequest(argument: _poker_SessionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getSessionsRequest(argument: _poker_SessionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getSessionsRequest(argument: _poker_SessionsRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getShuffledDeck(argument: _poker_NewDeckRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_NewDeckResponse__Output>): grpc.ClientUnaryCall;
  getShuffledDeck(argument: _poker_NewDeckRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_NewDeckResponse__Output>): grpc.ClientUnaryCall;
  getShuffledDeck(argument: _poker_NewDeckRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_NewDeckResponse__Output>): grpc.ClientUnaryCall;
  getShuffledDeck(argument: _poker_NewDeckRequest, callback: grpc.requestCallback<_poker_NewDeckResponse__Output>): grpc.ClientUnaryCall;
  
  getSignupFailureLogs(argument: _poker_SignupFailureErrorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupFailureErrorResponse__Output>): grpc.ClientUnaryCall;
  getSignupFailureLogs(argument: _poker_SignupFailureErrorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SignupFailureErrorResponse__Output>): grpc.ClientUnaryCall;
  getSignupFailureLogs(argument: _poker_SignupFailureErrorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupFailureErrorResponse__Output>): grpc.ClientUnaryCall;
  getSignupFailureLogs(argument: _poker_SignupFailureErrorRequest, callback: grpc.requestCallback<_poker_SignupFailureErrorResponse__Output>): grpc.ClientUnaryCall;
  
  getSingleHandHistoryStat(argument: _poker_GetHandHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getSingleHandHistoryStat(argument: _poker_GetHandHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getSingleHandHistoryStat(argument: _poker_GetHandHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  getSingleHandHistoryStat(argument: _poker_GetHandHistoryRequest, callback: grpc.requestCallback<_poker_GetHandHistoryResponse__Output>): grpc.ClientUnaryCall;
  
  getTemplateEditor(argument: _poker_TemplateEditorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TemplateEditorResponse__Output>): grpc.ClientUnaryCall;
  getTemplateEditor(argument: _poker_TemplateEditorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_TemplateEditorResponse__Output>): grpc.ClientUnaryCall;
  getTemplateEditor(argument: _poker_TemplateEditorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TemplateEditorResponse__Output>): grpc.ClientUnaryCall;
  getTemplateEditor(argument: _poker_TemplateEditorRequest, callback: grpc.requestCallback<_poker_TemplateEditorResponse__Output>): grpc.ClientUnaryCall;
  
  getTemplateStats(argument: _poker_TemplateStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TemplateStatsResponse__Output>): grpc.ClientUnaryCall;
  getTemplateStats(argument: _poker_TemplateStatsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_TemplateStatsResponse__Output>): grpc.ClientUnaryCall;
  getTemplateStats(argument: _poker_TemplateStatsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TemplateStatsResponse__Output>): grpc.ClientUnaryCall;
  getTemplateStats(argument: _poker_TemplateStatsRequest, callback: grpc.requestCallback<_poker_TemplateStatsResponse__Output>): grpc.ClientUnaryCall;
  
  getThemes(argument: _poker_ThemesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  getThemes(argument: _poker_ThemesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  getThemes(argument: _poker_ThemesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  getThemes(argument: _poker_ThemesRequest, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentAdditionalPayoutBoost(argument: _poker_GetTournamentAdditionalPayoutBoostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  getTournamentAdditionalPayoutBoost(argument: _poker_GetTournamentAdditionalPayoutBoostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  getTournamentAdditionalPayoutBoost(argument: _poker_GetTournamentAdditionalPayoutBoostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  getTournamentAdditionalPayoutBoost(argument: _poker_GetTournamentAdditionalPayoutBoostRequest, callback: grpc.requestCallback<_poker_GetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentAdditionalPayoutBoostsPerTemplate(argument: _poker_GetTournamentAdditionalPayoutBoostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  getTournamentAdditionalPayoutBoostsPerTemplate(argument: _poker_GetTournamentAdditionalPayoutBoostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  getTournamentAdditionalPayoutBoostsPerTemplate(argument: _poker_GetTournamentAdditionalPayoutBoostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  getTournamentAdditionalPayoutBoostsPerTemplate(argument: _poker_GetTournamentAdditionalPayoutBoostRequest, callback: grpc.requestCallback<_poker_GetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentDetails(argument: _poker_TournamentDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TournamentDetailsResponse__Output>): grpc.ClientUnaryCall;
  getTournamentDetails(argument: _poker_TournamentDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_TournamentDetailsResponse__Output>): grpc.ClientUnaryCall;
  getTournamentDetails(argument: _poker_TournamentDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TournamentDetailsResponse__Output>): grpc.ClientUnaryCall;
  getTournamentDetails(argument: _poker_TournamentDetailsRequest, callback: grpc.requestCallback<_poker_TournamentDetailsResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentReservationBlacklistSchedule(argument: _poker_GetTournamentReservationBlacklistScheduleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentReservationBlacklistScheduleResponse__Output>): grpc.ClientUnaryCall;
  getTournamentReservationBlacklistSchedule(argument: _poker_GetTournamentReservationBlacklistScheduleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentReservationBlacklistScheduleResponse__Output>): grpc.ClientUnaryCall;
  getTournamentReservationBlacklistSchedule(argument: _poker_GetTournamentReservationBlacklistScheduleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentReservationBlacklistScheduleResponse__Output>): grpc.ClientUnaryCall;
  getTournamentReservationBlacklistSchedule(argument: _poker_GetTournamentReservationBlacklistScheduleRequest, callback: grpc.requestCallback<_poker_GetTournamentReservationBlacklistScheduleResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentReservationTime(argument: _poker_GetTournamentReservationTimeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  getTournamentReservationTime(argument: _poker_GetTournamentReservationTimeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  getTournamentReservationTime(argument: _poker_GetTournamentReservationTimeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  getTournamentReservationTime(argument: _poker_GetTournamentReservationTimeRequest, callback: grpc.requestCallback<_poker_GetTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentStatus(argument: _poker_TournamentStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TournamentStatusResponse__Output>): grpc.ClientUnaryCall;
  getTournamentStatus(argument: _poker_TournamentStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_TournamentStatusResponse__Output>): grpc.ClientUnaryCall;
  getTournamentStatus(argument: _poker_TournamentStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TournamentStatusResponse__Output>): grpc.ClientUnaryCall;
  getTournamentStatus(argument: _poker_TournamentStatusRequest, callback: grpc.requestCallback<_poker_TournamentStatusResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentTemplateBufferState(argument: _poker_GetTournamentTemplateBufferStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentTemplateBufferStateResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateBufferState(argument: _poker_GetTournamentTemplateBufferStateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentTemplateBufferStateResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateBufferState(argument: _poker_GetTournamentTemplateBufferStateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentTemplateBufferStateResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateBufferState(argument: _poker_GetTournamentTemplateBufferStateRequest, callback: grpc.requestCallback<_poker_GetTournamentTemplateBufferStateResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentTemplateDetail(argument: _poker_GetTournamentTemplateDetailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentTemplateDetailResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateDetail(argument: _poker_GetTournamentTemplateDetailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentTemplateDetailResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateDetail(argument: _poker_GetTournamentTemplateDetailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentTemplateDetailResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateDetail(argument: _poker_GetTournamentTemplateDetailRequest, callback: grpc.requestCallback<_poker_GetTournamentTemplateDetailResponse__Output>): grpc.ClientUnaryCall;
  
  getTournamentTemplateList(argument: _poker_GetTournamentTemplateListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentTemplateListResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateList(argument: _poker_GetTournamentTemplateListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentTemplateListResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateList(argument: _poker_GetTournamentTemplateListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentTemplateListResponse__Output>): grpc.ClientUnaryCall;
  getTournamentTemplateList(argument: _poker_GetTournamentTemplateListRequest, callback: grpc.requestCallback<_poker_GetTournamentTemplateListResponse__Output>): grpc.ClientUnaryCall;
  
  getTournaments(argument: _poker_GetTournamentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentsResponse__Output>): grpc.ClientUnaryCall;
  getTournaments(argument: _poker_GetTournamentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetTournamentsResponse__Output>): grpc.ClientUnaryCall;
  getTournaments(argument: _poker_GetTournamentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetTournamentsResponse__Output>): grpc.ClientUnaryCall;
  getTournaments(argument: _poker_GetTournamentsRequest, callback: grpc.requestCallback<_poker_GetTournamentsResponse__Output>): grpc.ClientUnaryCall;
  
  getTransactionIDsFromProcessingLogFees(argument: _poker_TransactionIDsFromProcessingLogFeesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TransactionIDsFromProcessingLogFeesResponse__Output>): grpc.ClientUnaryCall;
  getTransactionIDsFromProcessingLogFees(argument: _poker_TransactionIDsFromProcessingLogFeesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_TransactionIDsFromProcessingLogFeesResponse__Output>): grpc.ClientUnaryCall;
  getTransactionIDsFromProcessingLogFees(argument: _poker_TransactionIDsFromProcessingLogFeesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TransactionIDsFromProcessingLogFeesResponse__Output>): grpc.ClientUnaryCall;
  getTransactionIDsFromProcessingLogFees(argument: _poker_TransactionIDsFromProcessingLogFeesRequest, callback: grpc.requestCallback<_poker_TransactionIDsFromProcessingLogFeesResponse__Output>): grpc.ClientUnaryCall;
  
  getTransactionRequest(argument: _poker_TransactionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getTransactionRequest(argument: _poker_TransactionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getTransactionRequest(argument: _poker_TransactionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getTransactionRequest(argument: _poker_TransactionsRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getUiSettings(argument: _poker_UiSettingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  getUiSettings(argument: _poker_UiSettingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  getUiSettings(argument: _poker_UiSettingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  getUiSettings(argument: _poker_UiSettingsRequest, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  
  getUserExportData(argument: _poker_GetUserExportDataRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetUserExportDataResponse__Output>): grpc.ClientUnaryCall;
  getUserExportData(argument: _poker_GetUserExportDataRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetUserExportDataResponse__Output>): grpc.ClientUnaryCall;
  getUserExportData(argument: _poker_GetUserExportDataRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetUserExportDataResponse__Output>): grpc.ClientUnaryCall;
  getUserExportData(argument: _poker_GetUserExportDataRequest, callback: grpc.requestCallback<_poker_GetUserExportDataResponse__Output>): grpc.ClientUnaryCall;
  
  getUserInfo(argument: _poker_GetUserInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetUserInfoResponse__Output>): grpc.ClientUnaryCall;
  getUserInfo(argument: _poker_GetUserInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetUserInfoResponse__Output>): grpc.ClientUnaryCall;
  getUserInfo(argument: _poker_GetUserInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetUserInfoResponse__Output>): grpc.ClientUnaryCall;
  getUserInfo(argument: _poker_GetUserInfoRequest, callback: grpc.requestCallback<_poker_GetUserInfoResponse__Output>): grpc.ClientUnaryCall;
  
  getUserNoWithdrawlRestrictions(argument: _poker_UserWithNoWithdrawalRestrictionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UserWithNoWithdrawalRestrictionsResponse__Output>): grpc.ClientUnaryCall;
  getUserNoWithdrawlRestrictions(argument: _poker_UserWithNoWithdrawalRestrictionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UserWithNoWithdrawalRestrictionsResponse__Output>): grpc.ClientUnaryCall;
  getUserNoWithdrawlRestrictions(argument: _poker_UserWithNoWithdrawalRestrictionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UserWithNoWithdrawalRestrictionsResponse__Output>): grpc.ClientUnaryCall;
  getUserNoWithdrawlRestrictions(argument: _poker_UserWithNoWithdrawalRestrictionsRequest, callback: grpc.requestCallback<_poker_UserWithNoWithdrawalRestrictionsResponse__Output>): grpc.ClientUnaryCall;
  
  getUserSecurityQuestions(argument: _poker_FetchSecurityQuestionsResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSecurityQuestions(argument: _poker_FetchSecurityQuestionsResponse, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSecurityQuestions(argument: _poker_FetchSecurityQuestionsResponse, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSecurityQuestions(argument: _poker_FetchSecurityQuestionsResponse, callback: grpc.requestCallback<_poker_FetchSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  
  getUsersWithDeviceToken(argument: _poker_GetDeviceTokenUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetDeviceTokenUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithDeviceToken(argument: _poker_GetDeviceTokenUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetDeviceTokenUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithDeviceToken(argument: _poker_GetDeviceTokenUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetDeviceTokenUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithDeviceToken(argument: _poker_GetDeviceTokenUsersRequest, callback: grpc.requestCallback<_poker_GetDeviceTokenUsersResponse__Output>): grpc.ClientUnaryCall;
  
  getVaultedPayment(argument: _poker_VaultedPaymentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VaultedPaymentResponse__Output>): grpc.ClientUnaryCall;
  getVaultedPayment(argument: _poker_VaultedPaymentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_VaultedPaymentResponse__Output>): grpc.ClientUnaryCall;
  getVaultedPayment(argument: _poker_VaultedPaymentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VaultedPaymentResponse__Output>): grpc.ClientUnaryCall;
  getVaultedPayment(argument: _poker_VaultedPaymentRequest, callback: grpc.requestCallback<_poker_VaultedPaymentResponse__Output>): grpc.ClientUnaryCall;
  
  getWelcomeBackPromoLogs(argument: _poker_WelcomeBackPromoLogsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WelcomeBackPromoLogsResponse__Output>): grpc.ClientUnaryCall;
  getWelcomeBackPromoLogs(argument: _poker_WelcomeBackPromoLogsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WelcomeBackPromoLogsResponse__Output>): grpc.ClientUnaryCall;
  getWelcomeBackPromoLogs(argument: _poker_WelcomeBackPromoLogsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WelcomeBackPromoLogsResponse__Output>): grpc.ClientUnaryCall;
  getWelcomeBackPromoLogs(argument: _poker_WelcomeBackPromoLogsRequest, callback: grpc.requestCallback<_poker_WelcomeBackPromoLogsResponse__Output>): grpc.ClientUnaryCall;
  
  getWhitelistedClientsonGeofence(argument: _poker_GeofenceClientsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceClientsResponse__Output>): grpc.ClientUnaryCall;
  getWhitelistedClientsonGeofence(argument: _poker_GeofenceClientsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceClientsResponse__Output>): grpc.ClientUnaryCall;
  getWhitelistedClientsonGeofence(argument: _poker_GeofenceClientsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceClientsResponse__Output>): grpc.ClientUnaryCall;
  getWhitelistedClientsonGeofence(argument: _poker_GeofenceClientsRequest, callback: grpc.requestCallback<_poker_GeofenceClientsResponse__Output>): grpc.ClientUnaryCall;
  
  getWhitelistedUserEmails(argument: _poker_WhitelistedUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistedUsersResult__Output>): grpc.ClientUnaryCall;
  getWhitelistedUserEmails(argument: _poker_WhitelistedUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WhitelistedUsersResult__Output>): grpc.ClientUnaryCall;
  getWhitelistedUserEmails(argument: _poker_WhitelistedUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistedUsersResult__Output>): grpc.ClientUnaryCall;
  getWhitelistedUserEmails(argument: _poker_WhitelistedUsersRequest, callback: grpc.requestCallback<_poker_WhitelistedUsersResult__Output>): grpc.ClientUnaryCall;
  
  getWhitelistedUsers(argument: _poker_WhitelistedUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistedUsersResult__Output>): grpc.ClientUnaryCall;
  getWhitelistedUsers(argument: _poker_WhitelistedUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WhitelistedUsersResult__Output>): grpc.ClientUnaryCall;
  getWhitelistedUsers(argument: _poker_WhitelistedUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistedUsersResult__Output>): grpc.ClientUnaryCall;
  getWhitelistedUsers(argument: _poker_WhitelistedUsersRequest, callback: grpc.requestCallback<_poker_WhitelistedUsersResult__Output>): grpc.ClientUnaryCall;
  
  getWhitelistedUsersonGeofence(argument: _poker_GeofenceUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceUsersResponse__Output>): grpc.ClientUnaryCall;
  getWhitelistedUsersonGeofence(argument: _poker_GeofenceUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceUsersResponse__Output>): grpc.ClientUnaryCall;
  getWhitelistedUsersonGeofence(argument: _poker_GeofenceUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceUsersResponse__Output>): grpc.ClientUnaryCall;
  getWhitelistedUsersonGeofence(argument: _poker_GeofenceUsersRequest, callback: grpc.requestCallback<_poker_GeofenceUsersResponse__Output>): grpc.ClientUnaryCall;
  
  getWithdrawalPending(argument: _poker_GetWithdrawalPendingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetWithdrawalPendingResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawalPending(argument: _poker_GetWithdrawalPendingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetWithdrawalPendingResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawalPending(argument: _poker_GetWithdrawalPendingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetWithdrawalPendingResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawalPending(argument: _poker_GetWithdrawalPendingRequest, callback: grpc.requestCallback<_poker_GetWithdrawalPendingResponse__Output>): grpc.ClientUnaryCall;
  
  getWithdrawalsRequest(argument: _poker_WithdrawalsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawalsRequest(argument: _poker_WithdrawalsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawalsRequest(argument: _poker_WithdrawalsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawalsRequest(argument: _poker_WithdrawalsRequest, callback: grpc.requestCallback<_poker_DataResponse__Output>): grpc.ClientUnaryCall;
  
  getWorksheetsAndReports(argument: _poker_GetWorksheetsAndReportsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetWorksheetsAndReportsResponse__Output>): grpc.ClientUnaryCall;
  getWorksheetsAndReports(argument: _poker_GetWorksheetsAndReportsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GetWorksheetsAndReportsResponse__Output>): grpc.ClientUnaryCall;
  getWorksheetsAndReports(argument: _poker_GetWorksheetsAndReportsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GetWorksheetsAndReportsResponse__Output>): grpc.ClientUnaryCall;
  getWorksheetsAndReports(argument: _poker_GetWorksheetsAndReportsRequest, callback: grpc.requestCallback<_poker_GetWorksheetsAndReportsResponse__Output>): grpc.ClientUnaryCall;
  
  groupClientData(argument: _poker_GroupClientAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GroupClientAddResponse__Output>): grpc.ClientUnaryCall;
  groupClientData(argument: _poker_GroupClientAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GroupClientAddResponse__Output>): grpc.ClientUnaryCall;
  groupClientData(argument: _poker_GroupClientAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GroupClientAddResponse__Output>): grpc.ClientUnaryCall;
  groupClientData(argument: _poker_GroupClientAddRequest, callback: grpc.requestCallback<_poker_GroupClientAddResponse__Output>): grpc.ClientUnaryCall;
  
  isWithdrawAllowed(argument: _poker_IsWithdrawAllowedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_IsWithdrawAllowedResponse__Output>): grpc.ClientUnaryCall;
  isWithdrawAllowed(argument: _poker_IsWithdrawAllowedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_IsWithdrawAllowedResponse__Output>): grpc.ClientUnaryCall;
  isWithdrawAllowed(argument: _poker_IsWithdrawAllowedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_IsWithdrawAllowedResponse__Output>): grpc.ClientUnaryCall;
  isWithdrawAllowed(argument: _poker_IsWithdrawAllowedRequest, callback: grpc.requestCallback<_poker_IsWithdrawAllowedResponse__Output>): grpc.ClientUnaryCall;
  
  joinAnyTournament(argument: _poker_JoinAnyTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  joinAnyTournament(argument: _poker_JoinAnyTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  joinAnyTournament(argument: _poker_JoinAnyTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  joinAnyTournament(argument: _poker_JoinAnyTournamentRequest, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  
  joinAnyTournamentAdmin(argument: _poker_JoinAnyTournamentAdminRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  joinAnyTournamentAdmin(argument: _poker_JoinAnyTournamentAdminRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  joinAnyTournamentAdmin(argument: _poker_JoinAnyTournamentAdminRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  joinAnyTournamentAdmin(argument: _poker_JoinAnyTournamentAdminRequest, callback: grpc.requestCallback<_poker_JoinAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  
  joinTournament(argument: _poker_JoinTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinTournamentResponse__Output>): grpc.ClientUnaryCall;
  joinTournament(argument: _poker_JoinTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_JoinTournamentResponse__Output>): grpc.ClientUnaryCall;
  joinTournament(argument: _poker_JoinTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinTournamentResponse__Output>): grpc.ClientUnaryCall;
  joinTournament(argument: _poker_JoinTournamentRequest, callback: grpc.requestCallback<_poker_JoinTournamentResponse__Output>): grpc.ClientUnaryCall;
  
  joinTournamentTempalte(argument: _poker_JoinTournamentTemplateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinTournamentTemplateResponse__Output>): grpc.ClientUnaryCall;
  joinTournamentTempalte(argument: _poker_JoinTournamentTemplateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_JoinTournamentTemplateResponse__Output>): grpc.ClientUnaryCall;
  joinTournamentTempalte(argument: _poker_JoinTournamentTemplateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_JoinTournamentTemplateResponse__Output>): grpc.ClientUnaryCall;
  joinTournamentTempalte(argument: _poker_JoinTournamentTemplateRequest, callback: grpc.requestCallback<_poker_JoinTournamentTemplateResponse__Output>): grpc.ClientUnaryCall;
  
  keyTransactionPayout(argument: _poker_KeyTransactionPayouRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_KeyTransactionPayouResponse__Output>): grpc.ClientUnaryCall;
  keyTransactionPayout(argument: _poker_KeyTransactionPayouRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_KeyTransactionPayouResponse__Output>): grpc.ClientUnaryCall;
  keyTransactionPayout(argument: _poker_KeyTransactionPayouRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_KeyTransactionPayouResponse__Output>): grpc.ClientUnaryCall;
  keyTransactionPayout(argument: _poker_KeyTransactionPayouRequest, callback: grpc.requestCallback<_poker_KeyTransactionPayouResponse__Output>): grpc.ClientUnaryCall;
  
  launchTournament(argument: _poker_LaunchTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LaunchTournamentResponse__Output>): grpc.ClientUnaryCall;
  launchTournament(argument: _poker_LaunchTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_LaunchTournamentResponse__Output>): grpc.ClientUnaryCall;
  launchTournament(argument: _poker_LaunchTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LaunchTournamentResponse__Output>): grpc.ClientUnaryCall;
  launchTournament(argument: _poker_LaunchTournamentRequest, callback: grpc.requestCallback<_poker_LaunchTournamentResponse__Output>): grpc.ClientUnaryCall;
  
  makeDeposit(argument: _poker_MakeDepositRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeDepositResponse__Output>): grpc.ClientUnaryCall;
  makeDeposit(argument: _poker_MakeDepositRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_MakeDepositResponse__Output>): grpc.ClientUnaryCall;
  makeDeposit(argument: _poker_MakeDepositRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeDepositResponse__Output>): grpc.ClientUnaryCall;
  makeDeposit(argument: _poker_MakeDepositRequest, callback: grpc.requestCallback<_poker_MakeDepositResponse__Output>): grpc.ClientUnaryCall;
  
  makeTransaction(argument: _poker_MakeTransactionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeTransactionResponse__Output>): grpc.ClientUnaryCall;
  makeTransaction(argument: _poker_MakeTransactionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_MakeTransactionResponse__Output>): grpc.ClientUnaryCall;
  makeTransaction(argument: _poker_MakeTransactionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeTransactionResponse__Output>): grpc.ClientUnaryCall;
  makeTransaction(argument: _poker_MakeTransactionRequest, callback: grpc.requestCallback<_poker_MakeTransactionResponse__Output>): grpc.ClientUnaryCall;
  
  makeWithdrawal(argument: _poker_MakeWithdrawalRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  makeWithdrawal(argument: _poker_MakeWithdrawalRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_MakeWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  makeWithdrawal(argument: _poker_MakeWithdrawalRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MakeWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  makeWithdrawal(argument: _poker_MakeWithdrawalRequest, callback: grpc.requestCallback<_poker_MakeWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  
  manualAdjustmentByBatch(argument: _poker_ManualAdjustmentByBatchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ManualAdjustmentByBatchResponse__Output>): grpc.ClientUnaryCall;
  manualAdjustmentByBatch(argument: _poker_ManualAdjustmentByBatchRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ManualAdjustmentByBatchResponse__Output>): grpc.ClientUnaryCall;
  manualAdjustmentByBatch(argument: _poker_ManualAdjustmentByBatchRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ManualAdjustmentByBatchResponse__Output>): grpc.ClientUnaryCall;
  manualAdjustmentByBatch(argument: _poker_ManualAdjustmentByBatchRequest, callback: grpc.requestCallback<_poker_ManualAdjustmentByBatchResponse__Output>): grpc.ClientUnaryCall;
  
  modifyPlayerSpecificGameMatching(argument: _poker_ModifyPlayerSpecificGameMatchingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ModifyPlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  modifyPlayerSpecificGameMatching(argument: _poker_ModifyPlayerSpecificGameMatchingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ModifyPlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  modifyPlayerSpecificGameMatching(argument: _poker_ModifyPlayerSpecificGameMatchingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ModifyPlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  modifyPlayerSpecificGameMatching(argument: _poker_ModifyPlayerSpecificGameMatchingRequest, callback: grpc.requestCallback<_poker_ModifyPlayerSpecificGameMatchingResponse__Output>): grpc.ClientUnaryCall;
  
  mountHashes(argument: _poker_MountHashesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MountHashesResponse__Output>): grpc.ClientUnaryCall;
  mountHashes(argument: _poker_MountHashesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_MountHashesResponse__Output>): grpc.ClientUnaryCall;
  mountHashes(argument: _poker_MountHashesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MountHashesResponse__Output>): grpc.ClientUnaryCall;
  mountHashes(argument: _poker_MountHashesRequest, callback: grpc.requestCallback<_poker_MountHashesResponse__Output>): grpc.ClientUnaryCall;
  
  orderLobbyTournamentsInMostPlayedOrder(argument: _poker_OrderLobbyTournamentsInMostPlayedOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_OrderLobbyTournamentsInMostPlayedOrderResponse__Output>): grpc.ClientUnaryCall;
  orderLobbyTournamentsInMostPlayedOrder(argument: _poker_OrderLobbyTournamentsInMostPlayedOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_OrderLobbyTournamentsInMostPlayedOrderResponse__Output>): grpc.ClientUnaryCall;
  orderLobbyTournamentsInMostPlayedOrder(argument: _poker_OrderLobbyTournamentsInMostPlayedOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_OrderLobbyTournamentsInMostPlayedOrderResponse__Output>): grpc.ClientUnaryCall;
  orderLobbyTournamentsInMostPlayedOrder(argument: _poker_OrderLobbyTournamentsInMostPlayedOrderRequest, callback: grpc.requestCallback<_poker_OrderLobbyTournamentsInMostPlayedOrderResponse__Output>): grpc.ClientUnaryCall;
  
  placeholderUserStatusToggle(argument: _poker_ReservationBlackListToggleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  placeholderUserStatusToggle(argument: _poker_ReservationBlackListToggleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  placeholderUserStatusToggle(argument: _poker_ReservationBlackListToggleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  placeholderUserStatusToggle(argument: _poker_ReservationBlackListToggleRequest, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  
  purgeGeopoll(argument: _poker_PurgeGeopollRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PurgeGeopollResponse__Output>): grpc.ClientUnaryCall;
  purgeGeopoll(argument: _poker_PurgeGeopollRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PurgeGeopollResponse__Output>): grpc.ClientUnaryCall;
  purgeGeopoll(argument: _poker_PurgeGeopollRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PurgeGeopollResponse__Output>): grpc.ClientUnaryCall;
  purgeGeopoll(argument: _poker_PurgeGeopollRequest, callback: grpc.requestCallback<_poker_PurgeGeopollResponse__Output>): grpc.ClientUnaryCall;
  
  rankHands(argument: _poker_RankHandsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RankHandsResult__Output>): grpc.ClientUnaryCall;
  rankHands(argument: _poker_RankHandsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_RankHandsResult__Output>): grpc.ClientUnaryCall;
  rankHands(argument: _poker_RankHandsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RankHandsResult__Output>): grpc.ClientUnaryCall;
  rankHands(argument: _poker_RankHandsRequest, callback: grpc.requestCallback<_poker_RankHandsResult__Output>): grpc.ClientUnaryCall;
  
  referalStat(argument: _poker_ReferalStatRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReferalStatResponse__Output>): grpc.ClientUnaryCall;
  referalStat(argument: _poker_ReferalStatRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReferalStatResponse__Output>): grpc.ClientUnaryCall;
  referalStat(argument: _poker_ReferalStatRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReferalStatResponse__Output>): grpc.ClientUnaryCall;
  referalStat(argument: _poker_ReferalStatRequest, callback: grpc.requestCallback<_poker_ReferalStatResponse__Output>): grpc.ClientUnaryCall;
  
  referals(argument: _poker_ReferalsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReferalsResponse__Output>): grpc.ClientUnaryCall;
  referals(argument: _poker_ReferalsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReferalsResponse__Output>): grpc.ClientUnaryCall;
  referals(argument: _poker_ReferalsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReferalsResponse__Output>): grpc.ClientUnaryCall;
  referals(argument: _poker_ReferalsRequest, callback: grpc.requestCallback<_poker_ReferalsResponse__Output>): grpc.ClientUnaryCall;
  
  removeAdminData(argument: _poker_AdminRemoveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeAdminData(argument: _poker_AdminRemoveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeAdminData(argument: _poker_AdminRemoveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeAdminData(argument: _poker_AdminRemoveRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  removeAdminPagePermissions(argument: _poker_RemoveAdminPagePermissionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RemoveAdminPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  removeAdminPagePermissions(argument: _poker_RemoveAdminPagePermissionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_RemoveAdminPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  removeAdminPagePermissions(argument: _poker_RemoveAdminPagePermissionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RemoveAdminPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  removeAdminPagePermissions(argument: _poker_RemoveAdminPagePermissionsRequest, callback: grpc.requestCallback<_poker_RemoveAdminPagePermissionsResponse__Output>): grpc.ClientUnaryCall;
  
  removeAdminRoleData(argument: _poker_AdminRoleRemoveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeAdminRoleData(argument: _poker_AdminRoleRemoveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeAdminRoleData(argument: _poker_AdminRoleRemoveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeAdminRoleData(argument: _poker_AdminRoleRemoveRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  removeApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removeApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removeApiKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removeApiKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  removeClientData(argument: _poker_ClientRemoveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeClientData(argument: _poker_ClientRemoveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeClientData(argument: _poker_ClientRemoveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeClientData(argument: _poker_ClientRemoveRequest, callback: grpc.requestCallback<_poker_ClientRemoveResponse__Output>): grpc.ClientUnaryCall;
  
  removeComponentPermissionData(argument: _poker_ComponentPermissionRemoveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeComponentPermissionData(argument: _poker_ComponentPermissionRemoveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeComponentPermissionData(argument: _poker_ComponentPermissionRemoveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeComponentPermissionData(argument: _poker_ComponentPermissionRemoveRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  removeGeofenceData(argument: _poker_GeofenceRemoveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeGeofenceData(argument: _poker_GeofenceRemoveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeGeofenceData(argument: _poker_GeofenceRemoveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeGeofenceData(argument: _poker_GeofenceRemoveRequest, callback: grpc.requestCallback<_poker_GeofenceRemoveResponse__Output>): grpc.ClientUnaryCall;
  
  removeGroupedClientData(argument: _poker_GroupedClientRemoveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GroupedClientRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeGroupedClientData(argument: _poker_GroupedClientRemoveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GroupedClientRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeGroupedClientData(argument: _poker_GroupedClientRemoveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GroupedClientRemoveResponse__Output>): grpc.ClientUnaryCall;
  removeGroupedClientData(argument: _poker_GroupedClientRemoveRequest, callback: grpc.requestCallback<_poker_GroupedClientRemoveResponse__Output>): grpc.ClientUnaryCall;
  
  removeNotificationTemplates(argument: _poker_RemoveNotificationTemplatesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RemoveNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  removeNotificationTemplates(argument: _poker_RemoveNotificationTemplatesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_RemoveNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  removeNotificationTemplates(argument: _poker_RemoveNotificationTemplatesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RemoveNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  removeNotificationTemplates(argument: _poker_RemoveNotificationTemplatesRequest, callback: grpc.requestCallback<_poker_RemoveNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  
  removePushNotificationKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removePushNotificationKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removePushNotificationKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removePushNotificationKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  removeTournament(argument: _poker_GetTournamentTemplateDetailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeTournament(argument: _poker_GetTournamentTemplateDetailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeTournament(argument: _poker_GetTournamentTemplateDetailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  removeTournament(argument: _poker_GetTournamentTemplateDetailRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  removeTournamentReservationTime(argument: _poker_RemoveTournamentReservationTimeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RemoveTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  removeTournamentReservationTime(argument: _poker_RemoveTournamentReservationTimeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_RemoveTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  removeTournamentReservationTime(argument: _poker_RemoveTournamentReservationTimeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RemoveTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  removeTournamentReservationTime(argument: _poker_RemoveTournamentReservationTimeRequest, callback: grpc.requestCallback<_poker_RemoveTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  
  removeTournamentTemplateFromLobby(argument: _poker_RemoveTournamentTemplateFromLobbyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RemoveTournamentTemplateFromLobbyResponse__Output>): grpc.ClientUnaryCall;
  removeTournamentTemplateFromLobby(argument: _poker_RemoveTournamentTemplateFromLobbyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_RemoveTournamentTemplateFromLobbyResponse__Output>): grpc.ClientUnaryCall;
  removeTournamentTemplateFromLobby(argument: _poker_RemoveTournamentTemplateFromLobbyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_RemoveTournamentTemplateFromLobbyResponse__Output>): grpc.ClientUnaryCall;
  removeTournamentTemplateFromLobby(argument: _poker_RemoveTournamentTemplateFromLobbyRequest, callback: grpc.requestCallback<_poker_RemoveTournamentTemplateFromLobbyResponse__Output>): grpc.ClientUnaryCall;
  
  removeUserFromReservationQueue(argument: _poker_ReservationBlackListToggleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  removeUserFromReservationQueue(argument: _poker_ReservationBlackListToggleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  removeUserFromReservationQueue(argument: _poker_ReservationBlackListToggleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  removeUserFromReservationQueue(argument: _poker_ReservationBlackListToggleRequest, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  
  removeWhitelistUser(argument: _poker_WhitelistUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  removeWhitelistUser(argument: _poker_WhitelistUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  removeWhitelistUser(argument: _poker_WhitelistUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  removeWhitelistUser(argument: _poker_WhitelistUserRequest, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  
  removeWhitelistedUserEmail(argument: _poker_WhitelistUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  removeWhitelistedUserEmail(argument: _poker_WhitelistUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  removeWhitelistedUserEmail(argument: _poker_WhitelistUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  removeWhitelistedUserEmail(argument: _poker_WhitelistUserRequest, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  
  removeapnPushNotificationKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removeapnPushNotificationKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removeapnPushNotificationKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  removeapnPushNotificationKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  reservationBlackListToggle(argument: _poker_ReservationBlackListToggleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  reservationBlackListToggle(argument: _poker_ReservationBlackListToggleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  reservationBlackListToggle(argument: _poker_ReservationBlackListToggleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  reservationBlackListToggle(argument: _poker_ReservationBlackListToggleRequest, callback: grpc.requestCallback<_poker_ReservationBlackListToggleResponse__Output>): grpc.ClientUnaryCall;
  
  reservationBlackListedUser(argument: _poker_ReservationBlackListedUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListedUserResponse__Output>): grpc.ClientUnaryCall;
  reservationBlackListedUser(argument: _poker_ReservationBlackListedUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ReservationBlackListedUserResponse__Output>): grpc.ClientUnaryCall;
  reservationBlackListedUser(argument: _poker_ReservationBlackListedUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ReservationBlackListedUserResponse__Output>): grpc.ClientUnaryCall;
  reservationBlackListedUser(argument: _poker_ReservationBlackListedUserRequest, callback: grpc.requestCallback<_poker_ReservationBlackListedUserResponse__Output>): grpc.ClientUnaryCall;
  
  resetApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  resetApiKey(argument: _poker_ApiKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  resetApiKey(argument: _poker_ApiKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  resetApiKey(argument: _poker_ApiKeyRequest, callback: grpc.requestCallback<_poker_ApiKeyResponse__Output>): grpc.ClientUnaryCall;
  
  resetPassword(argument: _poker_ResetPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _poker_ResetPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _poker_ResetPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _poker_ResetPasswordRequest, callback: grpc.requestCallback<_poker_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  
  searchAdjustmentUsersByUsername(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchAdjustmentUsersByUsername(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchAdjustmentUsersByUsername(argument: _poker_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchAdjustmentUsersByUsername(argument: _poker_SearchUserRequest, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  
  searchExcludedUser(argument: _poker_SearchExcludedUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchExcludedUserResult__Output>): grpc.ClientUnaryCall;
  searchExcludedUser(argument: _poker_SearchExcludedUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchExcludedUserResult__Output>): grpc.ClientUnaryCall;
  searchExcludedUser(argument: _poker_SearchExcludedUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchExcludedUserResult__Output>): grpc.ClientUnaryCall;
  searchExcludedUser(argument: _poker_SearchExcludedUserRequest, callback: grpc.requestCallback<_poker_SearchExcludedUserResult__Output>): grpc.ClientUnaryCall;
  
  searchPlaceholderAdjustments(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchPlaceholderAdjustments(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchPlaceholderAdjustments(argument: _poker_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchPlaceholderAdjustments(argument: _poker_SearchUserRequest, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  
  searchPlaceholderPlayerByUsername(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchPlaceholderPlayerByUsername(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchPlaceholderPlayerByUsername(argument: _poker_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchPlaceholderPlayerByUsername(argument: _poker_SearchUserRequest, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  
  searchReservationBlackListByUsername(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchReservationBlackListByUsername(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchReservationBlackListByUsername(argument: _poker_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchReservationBlackListByUsername(argument: _poker_SearchUserRequest, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  
  searchReservationQueueUsers(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchReservationQueueUsers(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchReservationQueueUsers(argument: _poker_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchReservationQueueUsers(argument: _poker_SearchUserRequest, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  
  searchSignUpLogs(argument: _poker_SignupFailureErrorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupFailureErrorResponse__Output>): grpc.ClientUnaryCall;
  searchSignUpLogs(argument: _poker_SignupFailureErrorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SignupFailureErrorResponse__Output>): grpc.ClientUnaryCall;
  searchSignUpLogs(argument: _poker_SignupFailureErrorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupFailureErrorResponse__Output>): grpc.ClientUnaryCall;
  searchSignUpLogs(argument: _poker_SignupFailureErrorRequest, callback: grpc.requestCallback<_poker_SignupFailureErrorResponse__Output>): grpc.ClientUnaryCall;
  
  searchSuspendedDeviceByUserName(argument: _poker_SearchSuspendedDeviceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  searchSuspendedDeviceByUserName(argument: _poker_SearchSuspendedDeviceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  searchSuspendedDeviceByUserName(argument: _poker_SearchSuspendedDeviceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  searchSuspendedDeviceByUserName(argument: _poker_SearchSuspendedDeviceRequest, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  
  searchUserByUsername(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchUserByUsername(argument: _poker_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchUserByUsername(argument: _poker_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  searchUserByUsername(argument: _poker_SearchUserRequest, callback: grpc.requestCallback<_poker_SearchUserResult__Output>): grpc.ClientUnaryCall;
  
  sendEmailToMultipleUser(argument: _poker_MultipleEmailSendRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MultipleEmailSendResponse__Output>): grpc.ClientUnaryCall;
  sendEmailToMultipleUser(argument: _poker_MultipleEmailSendRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_MultipleEmailSendResponse__Output>): grpc.ClientUnaryCall;
  sendEmailToMultipleUser(argument: _poker_MultipleEmailSendRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_MultipleEmailSendResponse__Output>): grpc.ClientUnaryCall;
  sendEmailToMultipleUser(argument: _poker_MultipleEmailSendRequest, callback: grpc.requestCallback<_poker_MultipleEmailSendResponse__Output>): grpc.ClientUnaryCall;
  
  sendGeolocationData(argument: _poker_GeolocationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeolocationResult__Output>): grpc.ClientUnaryCall;
  sendGeolocationData(argument: _poker_GeolocationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeolocationResult__Output>): grpc.ClientUnaryCall;
  sendGeolocationData(argument: _poker_GeolocationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeolocationResult__Output>): grpc.ClientUnaryCall;
  sendGeolocationData(argument: _poker_GeolocationRequest, callback: grpc.requestCallback<_poker_GeolocationResult__Output>): grpc.ClientUnaryCall;
  
  sendPushNotification(argument: _poker_SendPushNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SendPushotificationResponse__Output>): grpc.ClientUnaryCall;
  sendPushNotification(argument: _poker_SendPushNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SendPushotificationResponse__Output>): grpc.ClientUnaryCall;
  sendPushNotification(argument: _poker_SendPushNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SendPushotificationResponse__Output>): grpc.ClientUnaryCall;
  sendPushNotification(argument: _poker_SendPushNotificationRequest, callback: grpc.requestCallback<_poker_SendPushotificationResponse__Output>): grpc.ClientUnaryCall;
  
  setBulkFreePlayAdjustment(argument: _poker_SetBulkFreePlayAdjustmentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetBulkFreePlayAdjustmentResponse__Output>): grpc.ClientUnaryCall;
  setBulkFreePlayAdjustment(argument: _poker_SetBulkFreePlayAdjustmentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SetBulkFreePlayAdjustmentResponse__Output>): grpc.ClientUnaryCall;
  setBulkFreePlayAdjustment(argument: _poker_SetBulkFreePlayAdjustmentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetBulkFreePlayAdjustmentResponse__Output>): grpc.ClientUnaryCall;
  setBulkFreePlayAdjustment(argument: _poker_SetBulkFreePlayAdjustmentRequest, callback: grpc.requestCallback<_poker_SetBulkFreePlayAdjustmentResponse__Output>): grpc.ClientUnaryCall;
  
  setDefaultPaymentMethod(argument: _poker_SetDefaultPaymentMethodRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetDefaultPaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  setDefaultPaymentMethod(argument: _poker_SetDefaultPaymentMethodRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SetDefaultPaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  setDefaultPaymentMethod(argument: _poker_SetDefaultPaymentMethodRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetDefaultPaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  setDefaultPaymentMethod(argument: _poker_SetDefaultPaymentMethodRequest, callback: grpc.requestCallback<_poker_SetDefaultPaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  
  setDefaultPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  setDefaultPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  setDefaultPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  setDefaultPlayerMailingAddress(argument: _poker_PlayerMailingAddressRequest, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  
  setGeofenceClientGlobalRule(argument: _poker_GeofenceClientGlobalRuleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceClientGlobalRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceClientGlobalRule(argument: _poker_GeofenceClientGlobalRuleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceClientGlobalRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceClientGlobalRule(argument: _poker_GeofenceClientGlobalRuleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceClientGlobalRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceClientGlobalRule(argument: _poker_GeofenceClientGlobalRuleRequest, callback: grpc.requestCallback<_poker_GeofenceClientGlobalRuleResponse__Output>): grpc.ClientUnaryCall;
  
  setGeofenceDeviceRule(argument: _poker_GeofenceDeviceRuleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceDeviceRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceDeviceRule(argument: _poker_GeofenceDeviceRuleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceDeviceRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceDeviceRule(argument: _poker_GeofenceDeviceRuleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceDeviceRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceDeviceRule(argument: _poker_GeofenceDeviceRuleRequest, callback: grpc.requestCallback<_poker_GeofenceDeviceRuleResponse__Output>): grpc.ClientUnaryCall;
  
  setGeofenceGlobalRule(argument: _poker_GeofenceGlobalRuleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceGlobalRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceGlobalRule(argument: _poker_GeofenceGlobalRuleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceGlobalRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceGlobalRule(argument: _poker_GeofenceGlobalRuleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceGlobalRuleResponse__Output>): grpc.ClientUnaryCall;
  setGeofenceGlobalRule(argument: _poker_GeofenceGlobalRuleRequest, callback: grpc.requestCallback<_poker_GeofenceGlobalRuleResponse__Output>): grpc.ClientUnaryCall;
  
  setGlobalSettings(argument: _poker_GlobalSettingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GlobalSettingsResponse__Output>): grpc.ClientUnaryCall;
  setGlobalSettings(argument: _poker_GlobalSettingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GlobalSettingsResponse__Output>): grpc.ClientUnaryCall;
  setGlobalSettings(argument: _poker_GlobalSettingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GlobalSettingsResponse__Output>): grpc.ClientUnaryCall;
  setGlobalSettings(argument: _poker_GlobalSettingsRequest, callback: grpc.requestCallback<_poker_GlobalSettingsResponse__Output>): grpc.ClientUnaryCall;
  
  setLabelEditor(argument: _poker_LabelEditorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LabelEditorResponse__Output>): grpc.ClientUnaryCall;
  setLabelEditor(argument: _poker_LabelEditorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_LabelEditorResponse__Output>): grpc.ClientUnaryCall;
  setLabelEditor(argument: _poker_LabelEditorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_LabelEditorResponse__Output>): grpc.ClientUnaryCall;
  setLabelEditor(argument: _poker_LabelEditorRequest, callback: grpc.requestCallback<_poker_LabelEditorResponse__Output>): grpc.ClientUnaryCall;
  
  setPrizeAsRevealed(argument: _poker_PrizeRevealRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PrizeRevealResponse__Output>): grpc.ClientUnaryCall;
  setPrizeAsRevealed(argument: _poker_PrizeRevealRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PrizeRevealResponse__Output>): grpc.ClientUnaryCall;
  setPrizeAsRevealed(argument: _poker_PrizeRevealRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PrizeRevealResponse__Output>): grpc.ClientUnaryCall;
  setPrizeAsRevealed(argument: _poker_PrizeRevealRequest, callback: grpc.requestCallback<_poker_PrizeRevealResponse__Output>): grpc.ClientUnaryCall;
  
  setReservationTimeEditor(argument: _poker_SetReservationTimeEditorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetReservationTimeEditorResponse__Output>): grpc.ClientUnaryCall;
  setReservationTimeEditor(argument: _poker_SetReservationTimeEditorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SetReservationTimeEditorResponse__Output>): grpc.ClientUnaryCall;
  setReservationTimeEditor(argument: _poker_SetReservationTimeEditorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetReservationTimeEditorResponse__Output>): grpc.ClientUnaryCall;
  setReservationTimeEditor(argument: _poker_SetReservationTimeEditorRequest, callback: grpc.requestCallback<_poker_SetReservationTimeEditorResponse__Output>): grpc.ClientUnaryCall;
  
  setTemplateEditor(argument: _poker_TemplateEditorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TemplateEditorResponse__Output>): grpc.ClientUnaryCall;
  setTemplateEditor(argument: _poker_TemplateEditorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_TemplateEditorResponse__Output>): grpc.ClientUnaryCall;
  setTemplateEditor(argument: _poker_TemplateEditorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TemplateEditorResponse__Output>): grpc.ClientUnaryCall;
  setTemplateEditor(argument: _poker_TemplateEditorRequest, callback: grpc.requestCallback<_poker_TemplateEditorResponse__Output>): grpc.ClientUnaryCall;
  
  setTheme(argument: _poker_ThemesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  setTheme(argument: _poker_ThemesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  setTheme(argument: _poker_ThemesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  setTheme(argument: _poker_ThemesRequest, callback: grpc.requestCallback<_poker_ThemesResponse__Output>): grpc.ClientUnaryCall;
  
  setTournamentAdditionalPayoutBoost(argument: _poker_SetTournamentAdditionalPayoutBoostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  setTournamentAdditionalPayoutBoost(argument: _poker_SetTournamentAdditionalPayoutBoostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  setTournamentAdditionalPayoutBoost(argument: _poker_SetTournamentAdditionalPayoutBoostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  setTournamentAdditionalPayoutBoost(argument: _poker_SetTournamentAdditionalPayoutBoostRequest, callback: grpc.requestCallback<_poker_SetTournamentAdditionalPayoutBoostResponse__Output>): grpc.ClientUnaryCall;
  
  setTournamentReservationTime(argument: _poker_SetTournamentReservationTimeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  setTournamentReservationTime(argument: _poker_SetTournamentReservationTimeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SetTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  setTournamentReservationTime(argument: _poker_SetTournamentReservationTimeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SetTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  setTournamentReservationTime(argument: _poker_SetTournamentReservationTimeRequest, callback: grpc.requestCallback<_poker_SetTournamentReservationTimeResponse__Output>): grpc.ClientUnaryCall;
  
  setUiSettings(argument: _poker_AllUiSettingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  setUiSettings(argument: _poker_AllUiSettingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  setUiSettings(argument: _poker_AllUiSettingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  setUiSettings(argument: _poker_AllUiSettingsRequest, callback: grpc.requestCallback<_poker_UiSettingsResponse__Output>): grpc.ClientUnaryCall;
  
  simulateGames(argument: _poker_SimulateGamesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  simulateGames(argument: _poker_SimulateGamesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  simulateGames(argument: _poker_SimulateGamesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  simulateGames(argument: _poker_SimulateGamesRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  startTournamentTableInstance(argument: _poker_StartTournamentTableInstanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StartTournamentTableInstanceResponse__Output>): grpc.ClientUnaryCall;
  startTournamentTableInstance(argument: _poker_StartTournamentTableInstanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StartTournamentTableInstanceResponse__Output>): grpc.ClientUnaryCall;
  startTournamentTableInstance(argument: _poker_StartTournamentTableInstanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StartTournamentTableInstanceResponse__Output>): grpc.ClientUnaryCall;
  startTournamentTableInstance(argument: _poker_StartTournamentTableInstanceRequest, callback: grpc.requestCallback<_poker_StartTournamentTableInstanceResponse__Output>): grpc.ClientUnaryCall;
  
  suspendDeviceIdManually(argument: _poker_SearchSuspendedDeviceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  suspendDeviceIdManually(argument: _poker_SearchSuspendedDeviceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  suspendDeviceIdManually(argument: _poker_SearchSuspendedDeviceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  suspendDeviceIdManually(argument: _poker_SearchSuspendedDeviceRequest, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  
  testCompareHandsWild(argument: _poker_CompareWildHandRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WildHandResponse__Output>): grpc.ClientUnaryCall;
  testCompareHandsWild(argument: _poker_CompareWildHandRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WildHandResponse__Output>): grpc.ClientUnaryCall;
  testCompareHandsWild(argument: _poker_CompareWildHandRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WildHandResponse__Output>): grpc.ClientUnaryCall;
  testCompareHandsWild(argument: _poker_CompareWildHandRequest, callback: grpc.requestCallback<_poker_WildHandResponse__Output>): grpc.ClientUnaryCall;
  
  testHandsWild(argument: _poker_WildHandRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WildHandResponse__Output>): grpc.ClientUnaryCall;
  testHandsWild(argument: _poker_WildHandRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WildHandResponse__Output>): grpc.ClientUnaryCall;
  testHandsWild(argument: _poker_WildHandRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WildHandResponse__Output>): grpc.ClientUnaryCall;
  testHandsWild(argument: _poker_WildHandRequest, callback: grpc.requestCallback<_poker_WildHandResponse__Output>): grpc.ClientUnaryCall;
  
  toggleRecuringDeposit(argument: _poker_ToggleRecuringDepositRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ToggleRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  toggleRecuringDeposit(argument: _poker_ToggleRecuringDepositRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ToggleRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  toggleRecuringDeposit(argument: _poker_ToggleRecuringDepositRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ToggleRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  toggleRecuringDeposit(argument: _poker_ToggleRecuringDepositRequest, callback: grpc.requestCallback<_poker_ToggleRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  
  tournamentPayoutStructure(argument: _poker_TournamentDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TournamentPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  tournamentPayoutStructure(argument: _poker_TournamentDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_TournamentPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  tournamentPayoutStructure(argument: _poker_TournamentDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_TournamentPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  tournamentPayoutStructure(argument: _poker_TournamentDetailsRequest, callback: grpc.requestCallback<_poker_TournamentPayoutStructureResponse__Output>): grpc.ClientUnaryCall;
  
  unregisterAnyTournament(argument: _poker_UnregisterAnyTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UnregisterAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  unregisterAnyTournament(argument: _poker_UnregisterAnyTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UnregisterAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  unregisterAnyTournament(argument: _poker_UnregisterAnyTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UnregisterAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  unregisterAnyTournament(argument: _poker_UnregisterAnyTournamentRequest, callback: grpc.requestCallback<_poker_UnregisterAnyTournamentResult__Output>): grpc.ClientUnaryCall;
  
  unregisterTournament(argument: _poker_UnregisterTournamentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UnregisterTournamentResponse__Output>): grpc.ClientUnaryCall;
  unregisterTournament(argument: _poker_UnregisterTournamentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UnregisterTournamentResponse__Output>): grpc.ClientUnaryCall;
  unregisterTournament(argument: _poker_UnregisterTournamentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UnregisterTournamentResponse__Output>): grpc.ClientUnaryCall;
  unregisterTournament(argument: _poker_UnregisterTournamentRequest, callback: grpc.requestCallback<_poker_UnregisterTournamentResponse__Output>): grpc.ClientUnaryCall;
  
  unsubscribeFromTournamentTemplateBuffer(argument: _poker_UnsubscribeFromTournamentTemplateBufferRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UnsubscribeFromTournamentTemplateBufferResponse__Output>): grpc.ClientUnaryCall;
  unsubscribeFromTournamentTemplateBuffer(argument: _poker_UnsubscribeFromTournamentTemplateBufferRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UnsubscribeFromTournamentTemplateBufferResponse__Output>): grpc.ClientUnaryCall;
  unsubscribeFromTournamentTemplateBuffer(argument: _poker_UnsubscribeFromTournamentTemplateBufferRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UnsubscribeFromTournamentTemplateBufferResponse__Output>): grpc.ClientUnaryCall;
  unsubscribeFromTournamentTemplateBuffer(argument: _poker_UnsubscribeFromTournamentTemplateBufferRequest, callback: grpc.requestCallback<_poker_UnsubscribeFromTournamentTemplateBufferResponse__Output>): grpc.ClientUnaryCall;
  
  unsuspendUserDevice(argument: _poker_SearchSuspendedDeviceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  unsuspendUserDevice(argument: _poker_SearchSuspendedDeviceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  unsuspendUserDevice(argument: _poker_SearchSuspendedDeviceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  unsuspendUserDevice(argument: _poker_SearchSuspendedDeviceRequest, callback: grpc.requestCallback<_poker_SearchSuspendedDeviceResult__Output>): grpc.ClientUnaryCall;
  
  updateAdminData(argument: _poker_AdminUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateAdminData(argument: _poker_AdminUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateAdminData(argument: _poker_AdminUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateAdminData(argument: _poker_AdminUpdateRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  updateAdminRoleData(argument: _poker_AdminRoleUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateAdminRoleData(argument: _poker_AdminRoleUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateAdminRoleData(argument: _poker_AdminRoleUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateAdminRoleData(argument: _poker_AdminRoleUpdateRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  updateBlockedUserReservationDelay(argument: _poker_UpdateBlockedUserReservationDelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateBlockedUserReservationDelayResponse__Output>): grpc.ClientUnaryCall;
  updateBlockedUserReservationDelay(argument: _poker_UpdateBlockedUserReservationDelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateBlockedUserReservationDelayResponse__Output>): grpc.ClientUnaryCall;
  updateBlockedUserReservationDelay(argument: _poker_UpdateBlockedUserReservationDelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateBlockedUserReservationDelayResponse__Output>): grpc.ClientUnaryCall;
  updateBlockedUserReservationDelay(argument: _poker_UpdateBlockedUserReservationDelayRequest, callback: grpc.requestCallback<_poker_UpdateBlockedUserReservationDelayResponse__Output>): grpc.ClientUnaryCall;
  
  updateBoostedAdditionalPayout(argument: _poker_UpdateBoostedAdditionalPayoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateBoostedAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  updateBoostedAdditionalPayout(argument: _poker_UpdateBoostedAdditionalPayoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateBoostedAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  updateBoostedAdditionalPayout(argument: _poker_UpdateBoostedAdditionalPayoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateBoostedAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  updateBoostedAdditionalPayout(argument: _poker_UpdateBoostedAdditionalPayoutRequest, callback: grpc.requestCallback<_poker_UpdateBoostedAdditionalPayoutResponse__Output>): grpc.ClientUnaryCall;
  
  updateClientData(argument: _poker_ClientUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateClientData(argument: _poker_ClientUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateClientData(argument: _poker_ClientUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateClientData(argument: _poker_ClientUpdateRequest, callback: grpc.requestCallback<_poker_ClientUpdateResponse__Output>): grpc.ClientUnaryCall;
  
  updateClientEmail(argument: _poker_UpdateClientEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateClientEmailResponse__Output>): grpc.ClientUnaryCall;
  updateClientEmail(argument: _poker_UpdateClientEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateClientEmailResponse__Output>): grpc.ClientUnaryCall;
  updateClientEmail(argument: _poker_UpdateClientEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateClientEmailResponse__Output>): grpc.ClientUnaryCall;
  updateClientEmail(argument: _poker_UpdateClientEmailRequest, callback: grpc.requestCallback<_poker_UpdateClientEmailResponse__Output>): grpc.ClientUnaryCall;
  
  updateClientForAffiliateData(argument: _poker_UpdateClientForAffiliateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateClientForAffiliateResponse__Output>): grpc.ClientUnaryCall;
  updateClientForAffiliateData(argument: _poker_UpdateClientForAffiliateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateClientForAffiliateResponse__Output>): grpc.ClientUnaryCall;
  updateClientForAffiliateData(argument: _poker_UpdateClientForAffiliateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateClientForAffiliateResponse__Output>): grpc.ClientUnaryCall;
  updateClientForAffiliateData(argument: _poker_UpdateClientForAffiliateRequest, callback: grpc.requestCallback<_poker_UpdateClientForAffiliateResponse__Output>): grpc.ClientUnaryCall;
  
  updateClientGroupForAffiliateData(argument: _poker_UpdateClientGroupForAffiliateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateClientGroupForAffiliateResponse__Output>): grpc.ClientUnaryCall;
  updateClientGroupForAffiliateData(argument: _poker_UpdateClientGroupForAffiliateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateClientGroupForAffiliateResponse__Output>): grpc.ClientUnaryCall;
  updateClientGroupForAffiliateData(argument: _poker_UpdateClientGroupForAffiliateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateClientGroupForAffiliateResponse__Output>): grpc.ClientUnaryCall;
  updateClientGroupForAffiliateData(argument: _poker_UpdateClientGroupForAffiliateRequest, callback: grpc.requestCallback<_poker_UpdateClientGroupForAffiliateResponse__Output>): grpc.ClientUnaryCall;
  
  updateComponentPermissionData(argument: _poker_ComponentPermissionUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateComponentPermissionData(argument: _poker_ComponentPermissionUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateComponentPermissionData(argument: _poker_ComponentPermissionUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateComponentPermissionData(argument: _poker_ComponentPermissionUpdateRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  updateCustomCss(argument: _poker_CustomCssRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CustomCssResponse__Output>): grpc.ClientUnaryCall;
  updateCustomCss(argument: _poker_CustomCssRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CustomCssResponse__Output>): grpc.ClientUnaryCall;
  updateCustomCss(argument: _poker_CustomCssRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CustomCssResponse__Output>): grpc.ClientUnaryCall;
  updateCustomCss(argument: _poker_CustomCssRequest, callback: grpc.requestCallback<_poker_CustomCssResponse__Output>): grpc.ClientUnaryCall;
  
  updateFreePlayPromoUsers(argument: _poker_UpdateFreePlayPromoUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateFreePlayPromoUsersResponse__Output>): grpc.ClientUnaryCall;
  updateFreePlayPromoUsers(argument: _poker_UpdateFreePlayPromoUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateFreePlayPromoUsersResponse__Output>): grpc.ClientUnaryCall;
  updateFreePlayPromoUsers(argument: _poker_UpdateFreePlayPromoUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateFreePlayPromoUsersResponse__Output>): grpc.ClientUnaryCall;
  updateFreePlayPromoUsers(argument: _poker_UpdateFreePlayPromoUsersRequest, callback: grpc.requestCallback<_poker_UpdateFreePlayPromoUsersResponse__Output>): grpc.ClientUnaryCall;
  
  updateGeofenceData(argument: _poker_GeofenceUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateGeofenceData(argument: _poker_GeofenceUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateGeofenceData(argument: _poker_GeofenceUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateGeofenceData(argument: _poker_GeofenceUpdateRequest, callback: grpc.requestCallback<_poker_GeofenceUpdateResponse__Output>): grpc.ClientUnaryCall;
  
  updateGroupedClientData(argument: _poker_GroupedClientUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GroupedClientUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateGroupedClientData(argument: _poker_GroupedClientUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GroupedClientUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateGroupedClientData(argument: _poker_GroupedClientUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GroupedClientUpdateResponse__Output>): grpc.ClientUnaryCall;
  updateGroupedClientData(argument: _poker_GroupedClientUpdateRequest, callback: grpc.requestCallback<_poker_GroupedClientUpdateResponse__Output>): grpc.ClientUnaryCall;
  
  updateIgdpparPoolAdjustment(argument: _poker_UpdatePoolAccountBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateAccountPoolBalanceResponse__Output>): grpc.ClientUnaryCall;
  updateIgdpparPoolAdjustment(argument: _poker_UpdatePoolAccountBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateAccountPoolBalanceResponse__Output>): grpc.ClientUnaryCall;
  updateIgdpparPoolAdjustment(argument: _poker_UpdatePoolAccountBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateAccountPoolBalanceResponse__Output>): grpc.ClientUnaryCall;
  updateIgdpparPoolAdjustment(argument: _poker_UpdatePoolAccountBalanceRequest, callback: grpc.requestCallback<_poker_UpdateAccountPoolBalanceResponse__Output>): grpc.ClientUnaryCall;
  
  updateLobbyVisibleTournamentOrder(argument: _poker_UpdateLobbyVisibleTournamentOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateLobbyVisibleTournamentOrderResponse__Output>): grpc.ClientUnaryCall;
  updateLobbyVisibleTournamentOrder(argument: _poker_UpdateLobbyVisibleTournamentOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateLobbyVisibleTournamentOrderResponse__Output>): grpc.ClientUnaryCall;
  updateLobbyVisibleTournamentOrder(argument: _poker_UpdateLobbyVisibleTournamentOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateLobbyVisibleTournamentOrderResponse__Output>): grpc.ClientUnaryCall;
  updateLobbyVisibleTournamentOrder(argument: _poker_UpdateLobbyVisibleTournamentOrderRequest, callback: grpc.requestCallback<_poker_UpdateLobbyVisibleTournamentOrderResponse__Output>): grpc.ClientUnaryCall;
  
  updateNotificationTemplates(argument: _poker_UpdateNotificationTemplatesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  updateNotificationTemplates(argument: _poker_UpdateNotificationTemplatesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  updateNotificationTemplates(argument: _poker_UpdateNotificationTemplatesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  updateNotificationTemplates(argument: _poker_UpdateNotificationTemplatesRequest, callback: grpc.requestCallback<_poker_UpdateNotificationTemplatesResponse__Output>): grpc.ClientUnaryCall;
  
  updatePaymentMethod(argument: _poker_UpdatePaymentMethodRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdatePaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  updatePaymentMethod(argument: _poker_UpdatePaymentMethodRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdatePaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  updatePaymentMethod(argument: _poker_UpdatePaymentMethodRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdatePaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  updatePaymentMethod(argument: _poker_UpdatePaymentMethodRequest, callback: grpc.requestCallback<_poker_UpdatePaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  
  updatePlayerAccountBalance(argument: _poker_UpdateAccountBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  updatePlayerAccountBalance(argument: _poker_UpdateAccountBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  updatePlayerAccountBalance(argument: _poker_UpdateAccountBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  updatePlayerAccountBalance(argument: _poker_UpdateAccountBalanceRequest, callback: grpc.requestCallback<_poker_UpdateAccountBalanceResponse__Output>): grpc.ClientUnaryCall;
  
  updatePlayerMailingAddress(argument: _poker_PlayerMailingAddressUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  updatePlayerMailingAddress(argument: _poker_PlayerMailingAddressUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  updatePlayerMailingAddress(argument: _poker_PlayerMailingAddressUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  updatePlayerMailingAddress(argument: _poker_PlayerMailingAddressUpdateRequest, callback: grpc.requestCallback<_poker_PlayerMailingAddressStatusResponse__Output>): grpc.ClientUnaryCall;
  
  updatePoolAccountBalance(argument: _poker_UpdatePoolAccountBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateAccountPoolBalanceResponse__Output>): grpc.ClientUnaryCall;
  updatePoolAccountBalance(argument: _poker_UpdatePoolAccountBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateAccountPoolBalanceResponse__Output>): grpc.ClientUnaryCall;
  updatePoolAccountBalance(argument: _poker_UpdatePoolAccountBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateAccountPoolBalanceResponse__Output>): grpc.ClientUnaryCall;
  updatePoolAccountBalance(argument: _poker_UpdatePoolAccountBalanceRequest, callback: grpc.requestCallback<_poker_UpdateAccountPoolBalanceResponse__Output>): grpc.ClientUnaryCall;
  
  updateRecuringDeposit(argument: _poker_UpdateRecuringDepositRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  updateRecuringDeposit(argument: _poker_UpdateRecuringDepositRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  updateRecuringDeposit(argument: _poker_UpdateRecuringDepositRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  updateRecuringDeposit(argument: _poker_UpdateRecuringDepositRequest, callback: grpc.requestCallback<_poker_UpdateRecuringDepositResponse__Output>): grpc.ClientUnaryCall;
  
  updateReportsForAffiliateCopy(argument: _poker_UpdateReportsForAffiliateCopyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateReportsForAffiliateCopyResponse__Output>): grpc.ClientUnaryCall;
  updateReportsForAffiliateCopy(argument: _poker_UpdateReportsForAffiliateCopyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateReportsForAffiliateCopyResponse__Output>): grpc.ClientUnaryCall;
  updateReportsForAffiliateCopy(argument: _poker_UpdateReportsForAffiliateCopyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateReportsForAffiliateCopyResponse__Output>): grpc.ClientUnaryCall;
  updateReportsForAffiliateCopy(argument: _poker_UpdateReportsForAffiliateCopyRequest, callback: grpc.requestCallback<_poker_UpdateReportsForAffiliateCopyResponse__Output>): grpc.ClientUnaryCall;
  
  updateReservationBlackListedTournamentTemplates(argument: _poker_UpdateReservationBlackListedTournamentTemplatesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateReservationBlackListedTournamentTemplatesResponse__Output>): grpc.ClientUnaryCall;
  updateReservationBlackListedTournamentTemplates(argument: _poker_UpdateReservationBlackListedTournamentTemplatesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateReservationBlackListedTournamentTemplatesResponse__Output>): grpc.ClientUnaryCall;
  updateReservationBlackListedTournamentTemplates(argument: _poker_UpdateReservationBlackListedTournamentTemplatesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateReservationBlackListedTournamentTemplatesResponse__Output>): grpc.ClientUnaryCall;
  updateReservationBlackListedTournamentTemplates(argument: _poker_UpdateReservationBlackListedTournamentTemplatesRequest, callback: grpc.requestCallback<_poker_UpdateReservationBlackListedTournamentTemplatesResponse__Output>): grpc.ClientUnaryCall;
  
  updateSSNWhiteList(argument: _poker_UpdateSSNWhitelistRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateSSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  updateSSNWhiteList(argument: _poker_UpdateSSNWhitelistRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateSSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  updateSSNWhiteList(argument: _poker_UpdateSSNWhitelistRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateSSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  updateSSNWhiteList(argument: _poker_UpdateSSNWhitelistRequest, callback: grpc.requestCallback<_poker_UpdateSSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  updateSsnWhiteList(argument: _poker_UpdateSSNWhitelistRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateSSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  updateSsnWhiteList(argument: _poker_UpdateSSNWhitelistRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateSSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  updateSsnWhiteList(argument: _poker_UpdateSSNWhitelistRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateSSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  updateSsnWhiteList(argument: _poker_UpdateSSNWhitelistRequest, callback: grpc.requestCallback<_poker_UpdateSSNWhitelistResponse__Output>): grpc.ClientUnaryCall;
  
  updateSecurityQuestions(argument: _poker_UpdateSecurityQuestionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  updateSecurityQuestions(argument: _poker_UpdateSecurityQuestionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  updateSecurityQuestions(argument: _poker_UpdateSecurityQuestionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  updateSecurityQuestions(argument: _poker_UpdateSecurityQuestionsRequest, callback: grpc.requestCallback<_poker_UpdateSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  
  updateTournament(argument: _poker_UpdateTournamentTemplateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateTournament(argument: _poker_UpdateTournamentTemplateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateTournament(argument: _poker_UpdateTournamentTemplateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  updateTournament(argument: _poker_UpdateTournamentTemplateRequest, callback: grpc.requestCallback<_poker_StatusResponse__Output>): grpc.ClientUnaryCall;
  
  updateTournamentReservationBlacklistSchedule(argument: _poker_UpdateTournamentReservationBlacklistScheduleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateTournamentReservationBlacklistScheduleResponse__Output>): grpc.ClientUnaryCall;
  updateTournamentReservationBlacklistSchedule(argument: _poker_UpdateTournamentReservationBlacklistScheduleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateTournamentReservationBlacklistScheduleResponse__Output>): grpc.ClientUnaryCall;
  updateTournamentReservationBlacklistSchedule(argument: _poker_UpdateTournamentReservationBlacklistScheduleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateTournamentReservationBlacklistScheduleResponse__Output>): grpc.ClientUnaryCall;
  updateTournamentReservationBlacklistSchedule(argument: _poker_UpdateTournamentReservationBlacklistScheduleRequest, callback: grpc.requestCallback<_poker_UpdateTournamentReservationBlacklistScheduleResponse__Output>): grpc.ClientUnaryCall;
  
  updateUserInfo(argument: _poker_UpdateUserInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateUserInfoResponse__Output>): grpc.ClientUnaryCall;
  updateUserInfo(argument: _poker_UpdateUserInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateUserInfoResponse__Output>): grpc.ClientUnaryCall;
  updateUserInfo(argument: _poker_UpdateUserInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateUserInfoResponse__Output>): grpc.ClientUnaryCall;
  updateUserInfo(argument: _poker_UpdateUserInfoRequest, callback: grpc.requestCallback<_poker_UpdateUserInfoResponse__Output>): grpc.ClientUnaryCall;
  
  updateUserProfileInfo(argument: _poker_UpdateUserProfileInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateUserProfileInfoResponse__Output>): grpc.ClientUnaryCall;
  updateUserProfileInfo(argument: _poker_UpdateUserProfileInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UpdateUserProfileInfoResponse__Output>): grpc.ClientUnaryCall;
  updateUserProfileInfo(argument: _poker_UpdateUserProfileInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UpdateUserProfileInfoResponse__Output>): grpc.ClientUnaryCall;
  updateUserProfileInfo(argument: _poker_UpdateUserProfileInfoRequest, callback: grpc.requestCallback<_poker_UpdateUserProfileInfoResponse__Output>): grpc.ClientUnaryCall;
  
  uploadClientGroupTournamentImage(argument: _poker_ClientGroupTournamentImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  uploadClientGroupTournamentImage(argument: _poker_ClientGroupTournamentImageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  uploadClientGroupTournamentImage(argument: _poker_ClientGroupTournamentImageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  uploadClientGroupTournamentImage(argument: _poker_ClientGroupTournamentImageRequest, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  
  uploadClientLogo(argument: _poker_ClientLogoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientLogoResponse__Output>): grpc.ClientUnaryCall;
  uploadClientLogo(argument: _poker_ClientLogoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientLogoResponse__Output>): grpc.ClientUnaryCall;
  uploadClientLogo(argument: _poker_ClientLogoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientLogoResponse__Output>): grpc.ClientUnaryCall;
  uploadClientLogo(argument: _poker_ClientLogoRequest, callback: grpc.requestCallback<_poker_ClientLogoResponse__Output>): grpc.ClientUnaryCall;
  
  uploadClientTournamentImage(argument: _poker_ClientTournamentImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  uploadClientTournamentImage(argument: _poker_ClientTournamentImageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  uploadClientTournamentImage(argument: _poker_ClientTournamentImageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  uploadClientTournamentImage(argument: _poker_ClientTournamentImageRequest, callback: grpc.requestCallback<_poker_ClientTournamentImageResponse__Output>): grpc.ClientUnaryCall;
  
  uploadDriverLicense(argument: _poker_DriverLicenseImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DriverLicenseImageResponse__Output>): grpc.ClientUnaryCall;
  uploadDriverLicense(argument: _poker_DriverLicenseImageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_DriverLicenseImageResponse__Output>): grpc.ClientUnaryCall;
  uploadDriverLicense(argument: _poker_DriverLicenseImageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_DriverLicenseImageResponse__Output>): grpc.ClientUnaryCall;
  uploadDriverLicense(argument: _poker_DriverLicenseImageRequest, callback: grpc.requestCallback<_poker_DriverLicenseImageResponse__Output>): grpc.ClientUnaryCall;
  
  uploadPageExtension(argument: _poker_UploadPageExtensionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UploadPageExtensionResponse__Output>): grpc.ClientUnaryCall;
  uploadPageExtension(argument: _poker_UploadPageExtensionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UploadPageExtensionResponse__Output>): grpc.ClientUnaryCall;
  uploadPageExtension(argument: _poker_UploadPageExtensionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UploadPageExtensionResponse__Output>): grpc.ClientUnaryCall;
  uploadPageExtension(argument: _poker_UploadPageExtensionRequest, callback: grpc.requestCallback<_poker_UploadPageExtensionResponse__Output>): grpc.ClientUnaryCall;
  
  uploadToS3(argument: _poker_UploadToS3Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UploadToS3Response__Output>): grpc.ClientUnaryCall;
  uploadToS3(argument: _poker_UploadToS3Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UploadToS3Response__Output>): grpc.ClientUnaryCall;
  uploadToS3(argument: _poker_UploadToS3Request, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UploadToS3Response__Output>): grpc.ClientUnaryCall;
  uploadToS3(argument: _poker_UploadToS3Request, callback: grpc.requestCallback<_poker_UploadToS3Response__Output>): grpc.ClientUnaryCall;
  
  uploadTournamentImage(argument: _poker_ImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ImageResponse__Output>): grpc.ClientUnaryCall;
  uploadTournamentImage(argument: _poker_ImageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ImageResponse__Output>): grpc.ClientUnaryCall;
  uploadTournamentImage(argument: _poker_ImageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ImageResponse__Output>): grpc.ClientUnaryCall;
  uploadTournamentImage(argument: _poker_ImageRequest, callback: grpc.requestCallback<_poker_ImageResponse__Output>): grpc.ClientUnaryCall;
  
  uploadWorksheetReport(argument: _poker_UploadWorksheetReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UploadWorksheetReportResponse__Output>): grpc.ClientUnaryCall;
  uploadWorksheetReport(argument: _poker_UploadWorksheetReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_UploadWorksheetReportResponse__Output>): grpc.ClientUnaryCall;
  uploadWorksheetReport(argument: _poker_UploadWorksheetReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_UploadWorksheetReportResponse__Output>): grpc.ClientUnaryCall;
  uploadWorksheetReport(argument: _poker_UploadWorksheetReportRequest, callback: grpc.requestCallback<_poker_UploadWorksheetReportResponse__Output>): grpc.ClientUnaryCall;
  
  validateExperian(argument: _poker_SignupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  validateExperian(argument: _poker_SignupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  validateExperian(argument: _poker_SignupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  validateExperian(argument: _poker_SignupRequest, callback: grpc.requestCallback<_poker_SignupResult__Output>): grpc.ClientUnaryCall;
  
  validateSecurityQuestionsForLogin(argument: _poker_ValidateSecurityQuestionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ValidateSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  validateSecurityQuestionsForLogin(argument: _poker_ValidateSecurityQuestionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_ValidateSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  validateSecurityQuestionsForLogin(argument: _poker_ValidateSecurityQuestionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_ValidateSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  validateSecurityQuestionsForLogin(argument: _poker_ValidateSecurityQuestionsRequest, callback: grpc.requestCallback<_poker_ValidateSecurityQuestionsResponse__Output>): grpc.ClientUnaryCall;
  
  vaultPaymentMethod(argument: _poker_VaultPaymentMethodRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VaultPaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  vaultPaymentMethod(argument: _poker_VaultPaymentMethodRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_VaultPaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  vaultPaymentMethod(argument: _poker_VaultPaymentMethodRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VaultPaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  vaultPaymentMethod(argument: _poker_VaultPaymentMethodRequest, callback: grpc.requestCallback<_poker_VaultPaymentMethodResponse__Output>): grpc.ClientUnaryCall;
  
  verifySSNLastFourDigits(argument: _poker_VerifySSNLastFourRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifySSNLastFourResponse__Output>): grpc.ClientUnaryCall;
  verifySSNLastFourDigits(argument: _poker_VerifySSNLastFourRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_VerifySSNLastFourResponse__Output>): grpc.ClientUnaryCall;
  verifySSNLastFourDigits(argument: _poker_VerifySSNLastFourRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifySSNLastFourResponse__Output>): grpc.ClientUnaryCall;
  verifySSNLastFourDigits(argument: _poker_VerifySSNLastFourRequest, callback: grpc.requestCallback<_poker_VerifySSNLastFourResponse__Output>): grpc.ClientUnaryCall;
  verifySsnLastFourDigits(argument: _poker_VerifySSNLastFourRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifySSNLastFourResponse__Output>): grpc.ClientUnaryCall;
  verifySsnLastFourDigits(argument: _poker_VerifySSNLastFourRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_VerifySSNLastFourResponse__Output>): grpc.ClientUnaryCall;
  verifySsnLastFourDigits(argument: _poker_VerifySSNLastFourRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifySSNLastFourResponse__Output>): grpc.ClientUnaryCall;
  verifySsnLastFourDigits(argument: _poker_VerifySSNLastFourRequest, callback: grpc.requestCallback<_poker_VerifySSNLastFourResponse__Output>): grpc.ClientUnaryCall;
  
  verifyUserPassword(argument: _poker_VerifyUserPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifyUserPasswordResponse__Output>): grpc.ClientUnaryCall;
  verifyUserPassword(argument: _poker_VerifyUserPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_VerifyUserPasswordResponse__Output>): grpc.ClientUnaryCall;
  verifyUserPassword(argument: _poker_VerifyUserPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifyUserPasswordResponse__Output>): grpc.ClientUnaryCall;
  verifyUserPassword(argument: _poker_VerifyUserPasswordRequest, callback: grpc.requestCallback<_poker_VerifyUserPasswordResponse__Output>): grpc.ClientUnaryCall;
  
  verifyUserSSNAgain(argument: _poker_VerifyUsersFirstFiveSSNDigitRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifyUsersFirstFiveSSNDigitResponse__Output>): grpc.ClientUnaryCall;
  verifyUserSSNAgain(argument: _poker_VerifyUsersFirstFiveSSNDigitRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_VerifyUsersFirstFiveSSNDigitResponse__Output>): grpc.ClientUnaryCall;
  verifyUserSSNAgain(argument: _poker_VerifyUsersFirstFiveSSNDigitRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifyUsersFirstFiveSSNDigitResponse__Output>): grpc.ClientUnaryCall;
  verifyUserSSNAgain(argument: _poker_VerifyUsersFirstFiveSSNDigitRequest, callback: grpc.requestCallback<_poker_VerifyUsersFirstFiveSSNDigitResponse__Output>): grpc.ClientUnaryCall;
  verifyUserSsnAgain(argument: _poker_VerifyUsersFirstFiveSSNDigitRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifyUsersFirstFiveSSNDigitResponse__Output>): grpc.ClientUnaryCall;
  verifyUserSsnAgain(argument: _poker_VerifyUsersFirstFiveSSNDigitRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_VerifyUsersFirstFiveSSNDigitResponse__Output>): grpc.ClientUnaryCall;
  verifyUserSsnAgain(argument: _poker_VerifyUsersFirstFiveSSNDigitRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_VerifyUsersFirstFiveSSNDigitResponse__Output>): grpc.ClientUnaryCall;
  verifyUserSsnAgain(argument: _poker_VerifyUsersFirstFiveSSNDigitRequest, callback: grpc.requestCallback<_poker_VerifyUsersFirstFiveSSNDigitResponse__Output>): grpc.ClientUnaryCall;
  
  whitelistClientsOnGeofence(argument: _poker_GeofenceWhitelistRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceWhitelistResponse__Output>): grpc.ClientUnaryCall;
  whitelistClientsOnGeofence(argument: _poker_GeofenceWhitelistRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceWhitelistResponse__Output>): grpc.ClientUnaryCall;
  whitelistClientsOnGeofence(argument: _poker_GeofenceWhitelistRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceWhitelistResponse__Output>): grpc.ClientUnaryCall;
  whitelistClientsOnGeofence(argument: _poker_GeofenceWhitelistRequest, callback: grpc.requestCallback<_poker_GeofenceWhitelistResponse__Output>): grpc.ClientUnaryCall;
  
  whitelistUser(argument: _poker_WhitelistUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  whitelistUser(argument: _poker_WhitelistUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  whitelistUser(argument: _poker_WhitelistUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  whitelistUser(argument: _poker_WhitelistUserRequest, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  
  whitelistUserEmail(argument: _poker_WhitelistUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  whitelistUserEmail(argument: _poker_WhitelistUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  whitelistUserEmail(argument: _poker_WhitelistUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  whitelistUserEmail(argument: _poker_WhitelistUserRequest, callback: grpc.requestCallback<_poker_WhitelistUserResult__Output>): grpc.ClientUnaryCall;
  
  whitelistUsersOnGeofence(argument: _poker_GeofenceWhitelistRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceWhitelistResponse__Output>): grpc.ClientUnaryCall;
  whitelistUsersOnGeofence(argument: _poker_GeofenceWhitelistRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_GeofenceWhitelistResponse__Output>): grpc.ClientUnaryCall;
  whitelistUsersOnGeofence(argument: _poker_GeofenceWhitelistRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_GeofenceWhitelistResponse__Output>): grpc.ClientUnaryCall;
  whitelistUsersOnGeofence(argument: _poker_GeofenceWhitelistRequest, callback: grpc.requestCallback<_poker_GeofenceWhitelistResponse__Output>): grpc.ClientUnaryCall;
  
  withdrawCheckByMail(argument: _poker_CheckWithdrawalRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CheckWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  withdrawCheckByMail(argument: _poker_CheckWithdrawalRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_poker_CheckWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  withdrawCheckByMail(argument: _poker_CheckWithdrawalRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_poker_CheckWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  withdrawCheckByMail(argument: _poker_CheckWithdrawalRequest, callback: grpc.requestCallback<_poker_CheckWithdrawalResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface SngHandlers extends grpc.UntypedServiceImplementation {
  GetRankings: grpc.handleUnaryCall<_poker_GetRankingsRequest__Output, _poker_GetRankingsResult>;
  
  GetStatus: grpc.handleUnaryCall<_poker_GetStatusRequest__Output, _poker_GetStatusResult>;
  
  GetUserByEmail: grpc.handleUnaryCall<_poker_GetUserByEmailRequest__Output, _poker_GetUserByEmailResponse>;
  
  Login: grpc.handleUnaryCall<_poker_LoginRequest__Output, _poker_LoginResult>;
  
  Logout: grpc.handleUnaryCall<_poker_LogoutRequest__Output, _poker_LogoutResult>;
  
  MakePlayerAction: grpc.handleUnaryCall<_poker_MakePlayerActionRequest__Output, _poker_GetStatusResult>;
  
  MakeSng: grpc.handleUnaryCall<_poker_MakeSngRequest__Output, _poker_MakeSngResponse>;
  
  MakeSngWithRandomUsers: grpc.handleUnaryCall<_poker_MakeSngWithRandomUsersRequest__Output, _poker_GetStatusResult>;
  
  Signup: grpc.handleUnaryCall<_poker_SignupRequest__Output, _poker_SignupResult>;
  
  TableSubscribe: grpc.handleServerStreamingCall<_poker_TableSubscribeRequest__Output, _poker_TableSubscribeResponse>;
  
  Test: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _google_protobuf_Empty>;
  
  acceptTOS: grpc.handleUnaryCall<_poker_AcceptTOSRequest__Output, _poker_AcceptTOSResult>;
  
  actionOnPendingRequest: grpc.handleUnaryCall<_poker_UpdatePendingRequest__Output, _poker_StatusResponse>;
  
  actionPendingWithdrawal: grpc.handleUnaryCall<_poker_ActionPendingWithdrawaRequest__Output, _poker_ActionPendingWithdrawaResponse>;
  
  addAdminData: grpc.handleUnaryCall<_poker_AdminAddRequest__Output, _poker_StatusResponse>;
  
  addAdminPagePermissions: grpc.handleUnaryCall<_poker_AddAdminPagePermissionsRequest__Output, _poker_AddAdminPagePermissionsResponse>;
  
  addAdminRoleData: grpc.handleUnaryCall<_poker_AdminRoleAddRequest__Output, _poker_StatusResponse>;
  
  addApiKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  addApnApiKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  addBraintreeCredential: grpc.handleUnaryCall<_poker_ClientResponse__Output, _poker_ClientResponse>;
  
  addClientData: grpc.handleUnaryCall<_poker_ClientAddRequest__Output, _poker_ClientAddResponse>;
  
  addClientEmail: grpc.handleUnaryCall<_poker_AddClientEmailRequest__Output, _poker_AddClientEmailResponse>;
  
  addComponentPermissionData: grpc.handleUnaryCall<_poker_ComponentPermissionAddRequest__Output, _poker_StatusResponse>;
  
  addGeofenceData: grpc.handleUnaryCall<_poker_GeofenceAddRequest__Output, _poker_GeofenceAddResponse>;
  
  addNotificationTemplates: grpc.handleUnaryCall<_poker_AddNotificationTemplatesRequest__Output, _poker_AddNotificationTemplatesResponse>;
  
  addPayoutStructure: grpc.handleUnaryCall<_poker_AddPayoutStructureRequest__Output, _poker_AddPayoutStructureResponse>;
  
  addPlayerMailingAddress: grpc.handleUnaryCall<_poker_PlayerMailingAddressUpdateRequest__Output, _poker_PlayerMailingAddressStatusResponse>;
  
  addPushNotificationKey: grpc.handleUnaryCall<_poker_AddPushNotificationKeyRequest__Output, _poker_AddPushNotificationKeyResponse>;
  
  addRecuringDeposit: grpc.handleUnaryCall<_poker_AddRecuringDepositRequest__Output, _poker_AddRecuringDepositResponse>;
  
  addTournamentTemplateToLobby: grpc.handleUnaryCall<_poker_AddTournamentTemplateToLobbyRequest__Output, _poker_AddTournamentTemplateToLobbyResponse>;
  
  addonPlayer: grpc.handleUnaryCall<_poker_AddonPlayerRequest__Output, _poker_AddonPlayerResponse>;
  
  adjustBulkInstantDepositMatch: grpc.handleUnaryCall<_poker_BulkInstantDepositMatchRequest__Output, _poker_BulkInstantDepositMatchResponse>;
  
  adminJoinAnyTournament: grpc.handleUnaryCall<_poker_AdminJoinAnyTournamentRequest__Output, _poker_JoinAnyTournamentResult>;
  
  adminLogin: grpc.handleUnaryCall<_poker_LoginRequest__Output, _poker_LoginResult>;
  
  answerSecurityQusetionAndVerifyPassword: grpc.handleUnaryCall<_poker_AnswerVerifyPasswordRequest__Output, _poker_AnswerVerifyPasswordResponse>;
  
  blackListReservationQueueUsers: grpc.handleUnaryCall<_poker_ReservationBlackListToggleRequest__Output, _poker_ReservationBlackListToggleResponse>;
  
  blacklistClientsOnGeofence: grpc.handleUnaryCall<_poker_GeofenceBlacklistRequest__Output, _poker_GeofenceBlacklistResponse>;
  
  blacklistUsersOnGeofence: grpc.handleUnaryCall<_poker_GeofenceBlacklistRequest__Output, _poker_GeofenceBlacklistResponse>;
  
  byPassWithdrawalLimits: grpc.handleUnaryCall<_poker_ByPassWithdrawalLimitsRequest__Output, _poker_ByPassWithdrawalLimitsResponse>;
  
  cancelAnySimulatedGames: grpc.handleUnaryCall<_poker_CancelAnySimulatedGamesRequest__Output, _poker_CancelAnySimulatedGamesResponse>;
  
  cancelJoinAnyAllUsers: grpc.handleUnaryCall<_poker_JoinAnyTournamentStatusRequest__Output, _poker_CancelJoinAnyUsersResult>;
  
  cancelJoinAnyMultipleUsers: grpc.handleUnaryCall<_poker_CancelJoinAnyUsersRequest__Output, _poker_CancelJoinAnyUsersResult>;
  
  cancelJoinAnyTournament: grpc.handleUnaryCall<_poker_CancelJoinAnyTournamentRequest__Output, _poker_CancelJoinAnyTournamentResult>;
  
  cancelTournament: grpc.handleUnaryCall<_poker_CancelTournamentRequest__Output, _poker_CancelTournamentResponse>;
  
  cancelTournaments: grpc.handleUnaryCall<_poker_CancelTournamentsRequest__Output, _poker_CancelTournamentsResponse>;
  
  captureProcessedDeposit: grpc.handleUnaryCall<_poker_CaptureDepositRequest__Output, _poker_CaptureDepositResponse>;
  
  captureProcessedWithdrawal: grpc.handleUnaryCall<_poker_CaptureWithdrawalRequest__Output, _poker_CaptureWithdrawalResponse>;
  
  changeDisplayNameForExtensions: grpc.handleUnaryCall<_poker_ChangeDisplayNameForExtensionsRequest__Output, _poker_ChangeDisplayNameForExtensionsResponse>;
  
  changeDisplayNameForReports: grpc.handleUnaryCall<_poker_ChangeDisplayNameForReportsRequest__Output, _poker_ChangeDisplayNameForReportsResponse>;
  
  changePassword: grpc.handleUnaryCall<_poker_ChangePasswordRequest__Output, _poker_ChangePasswordResponse>;
  
  changeStatusOfWorksheetReport: grpc.handleUnaryCall<_poker_ChangeStatusOfWorksheetReportRequest__Output, _poker_ChangeStatusOfWorksheetReportResponse>;
  
  checkForUpdates: grpc.handleUnaryCall<_poker_AccountUpdatesRequest__Output, _poker_AccountUpdatesResult>;
  
  checkIsEmailAvailable: grpc.handleUnaryCall<_poker_IsEmailAvailableRequest__Output, _poker_IsEmailAvailableResponse>;
  
  clearTournamentBuffer: grpc.handleUnaryCall<_poker_BufferRequest__Output, _poker_BufferResponse>;
  
  clientAffiliateToggle: grpc.handleUnaryCall<_poker_ClientAffiliateToggleRequest__Output, _poker_ClientAffiliateToggleResponse>;
  
  confirmTransferAmounts: grpc.handleUnaryCall<_poker_ConfirmTransferAmountsRequest__Output, _poker_ConfirmTransferAmountsResponse>;
  
  createAdditionalPayoutBoost: grpc.handleUnaryCall<_poker_CreateAdditionalPayoutRequest__Output, _poker_CreateAdditionalPayoutResponse>;
  
  createCashierAdjustment: grpc.handleUnaryCall<_poker_CreateCashierAdjustmentRequest__Output, _poker_CreateCashierAdjustmentResponse>;
  
  createExcludedIdentity: grpc.handleUnaryCall<_poker_CreateExcludedIdentityRequest__Output, _poker_CreateExcludedIdentityResponse>;
  
  createMultipleUsers: grpc.handleUnaryCall<_poker_CreateMultipleUsersRequest__Output, _poker_CreateMultipleUsersResult>;
  
  createPaymentMethod: grpc.handleUnaryCall<_poker_MobilePaymentRequest__Output, _poker_MobilePaymentResponse>;
  
  createPlayerSpecificGameMatching: grpc.handleUnaryCall<_poker_CreatePlayerSpecificGameMatchingRequest__Output, _poker_CreatePlayerSpecificGameMatchingResponse>;
  
  createTournamentReservationTimeDate: grpc.handleUnaryCall<_poker_CreateTournamentReservationTimeRequest__Output, _poker_CreateTournamentReservationTimeResponse>;
  
  createTournamentTemplate: grpc.handleUnaryCall<_poker_CreateTournamentTemplateRequest__Output, _poker_CreateTournamentTemplateResponse>;
  
  deleteClientEmail: grpc.handleUnaryCall<_poker_DeleteClientEmailRequest__Output, _poker_DeleteClientEmailResponse>;
  
  deletePageExtensions: grpc.handleUnaryCall<_poker_DeletePageExtensionRequest__Output, _poker_DeletePageExtensionResponse>;
  
  deletePaymentMethod: grpc.handleUnaryCall<_poker_DeletePaymentMethodRequest__Output, _poker_DeletePaymentMethodResponse>;
  
  deletePlayerMailingAddress: grpc.handleUnaryCall<_poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressStatusResponse>;
  
  deletePrizePoolPayout: grpc.handleUnaryCall<_poker_DeletePrizePoolStatusRequest__Output, _poker_DeletePrizePoolStatusResponse>;
  
  deleteTheme: grpc.handleUnaryCall<_poker_ThemesRequest__Output, _poker_ThemesResponse>;
  
  deleteUiSettings: grpc.handleUnaryCall<_poker_UiSettingsRequest__Output, _poker_UiSettingsResponse>;
  
  deleteUserGeoLocation: grpc.handleUnaryCall<_poker_DeleteUserGeoLocationRequest__Output, _poker_DeleteUSerGeoLocationResponse>;
  
  deleteWorksheetOrReport: grpc.handleUnaryCall<_poker_DeleteWorksheetOrReportRequest__Output, _poker_DeleteWorksheetOrReportResponse>;
  
  disableWithdrawals: grpc.handleUnaryCall<_poker_DisableWithdrawalRequest__Output, _poker_DisableWithdrawalResponse>;
  
  drawAddAction: grpc.handleUnaryCall<_poker_DrawAddActionRequest__Output, _poker_GetStatusResult>;
  
  drawReplaceAction: grpc.handleUnaryCall<_poker_DrawReplaceActionRequest__Output, _poker_GetStatusResult>;
  
  editTheme: grpc.handleUnaryCall<_poker_EditThemesRequest__Output, _poker_ThemesResponse>;
  
  enablePromoForAnyTournament: grpc.handleUnaryCall<_poker_PromoRequest__Output, _poker_PromoResponse>;
  
  extractPageExtensions: grpc.handleUnaryCall<_poker_ExtractPageExtensionRequest__Output, _poker_ExtractPageExtensionResponse>;
  
  fetchSecurityQuestions: grpc.handleUnaryCall<_poker_FetchSecurityQuestionsRequest__Output, _poker_FetchSecurityQuestionsResponse>;
  
  getAccountStatements: grpc.handleUnaryCall<_poker_AccountStatementsRequest__Output, _poker_AccountStatementsResponse>;
  
  getActiveJoinAnyTournaments: grpc.handleUnaryCall<_poker_ActiveJoinAnyTournamentsRequest__Output, _poker_ActiveJoinAnyTournamentsResult>;
  
  getActiveStats: grpc.handleUnaryCall<_poker_ActiveStatsRequest__Output, _poker_ActiveStatsResponse>;
  
  getActiveUsers: grpc.handleUnaryCall<_poker_ActiveUsersRequest__Output, _poker_ActiveUsersResult>;
  
  getActiveUsersData: grpc.handleUnaryCall<_poker_ActiveUsersDataRequest__Output, _poker_ActiveUsersDataResponse>;
  
  getAdditionalPayoutById: grpc.handleUnaryCall<_poker_GetAdditionalPayoutByIdRequest__Output, _poker_GetAdditionalPayoutByIdResponse>;
  
  getAdditionalPayoutForTournament: grpc.handleUnaryCall<_poker_GetAdditionalPayoutDetailRequest__Output, _poker_GetAdditionalPayoutDetailResponse>;
  
  getAdjustmentRequest: grpc.handleUnaryCall<_poker_AdjustmentRequest__Output, _poker_DataResponse>;
  
  getAdminPagePermissions: grpc.handleUnaryCall<_poker_GetPagePermissionsRequest__Output, _poker_GetPagePermissionsResponse>;
  
  getAdminRoleData: grpc.handleUnaryCall<_poker_AdminRoleRequest__Output, _poker_DataResponse>;
  
  getAdminRoles: grpc.handleUnaryCall<_poker_AdminUpdateRequest__Output, _poker_DataResponse>;
  
  getAdmins: grpc.handleUnaryCall<_poker_ActiveUsersRequest__Output, _poker_DataResponse>;
  
  getAllBoostedAdditionalPayout: grpc.handleUnaryCall<_poker_GetAllBoostedAdditionalPayoutRequest__Output, _poker_GetAllBoostedAdditionalPayoutResponse>;
  
  getAllClientEmail: grpc.handleUnaryCall<_poker_GetAllClientEmailRequest__Output, _poker_GetAllClientEmailResponse>;
  
  getAllHandHistoryData: grpc.handleUnaryCall<_poker_GetHandHistoryRequest__Output, _poker_GetHandHistoryResponse>;
  
  getAllUiSettings: grpc.handleUnaryCall<_poker_UiSettingsRequest__Output, _poker_UiSettingsResponse>;
  
  getAmountInplay: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _poker_FloatResponse>;
  
  getApiKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  getApnPushNotificationKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  getApprovedRequest: grpc.handleUnaryCall<_poker_PendingDepositRequest__Output, _poker_DataResponse>;
  
  getBlacklistedClientsonGeofence: grpc.handleUnaryCall<_poker_GeofenceClientsRequest__Output, _poker_GeofenceClientsResponse>;
  
  getBlacklistedUsersonGeofence: grpc.handleUnaryCall<_poker_GeofenceUsersRequest__Output, _poker_GeofenceUsersResponse>;
  
  getBotList: grpc.handleUnaryCall<_poker_ActiveUsersRequest__Output, _poker_ActiveUsersResult>;
  
  getCancelTournamentList: grpc.handleUnaryCall<_poker_GetCancelTournamentListRequest__Output, _poker_GetCancelTournamentListResponse>;
  
  getClientData: grpc.handleUnaryCall<_poker_ClientRequest__Output, _poker_ClientResponse>;
  
  getClientEmail: grpc.handleUnaryCall<_poker_GetClientEmailRequest__Output, _poker_GetClientEmailResponse>;
  
  getClientGroupTournamentImage: grpc.handleUnaryCall<_poker_ClientGroupTournamentImageRequest__Output, _poker_ClientTournamentImageResponse>;
  
  getClientToken: grpc.handleUnaryCall<_poker_ClientTokenRequest__Output, _poker_ClientTokenResponse>;
  
  getClientTournamentImage: grpc.handleUnaryCall<_poker_ClientTournamentImageRequest__Output, _poker_ClientTournamentImageResponse>;
  
  getClients: grpc.handleUnaryCall<_poker_WhitelistedClientsRequest__Output, _poker_WhitelistedClientsResult>;
  
  getComponentPermissionData: grpc.handleUnaryCall<_poker_ComponentPermissionRequest__Output, _poker_DataResponse>;
  
  getCustomCss: grpc.handleUnaryCall<_poker_CustomCssRequest__Output, _poker_CustomCssResponse>;
  
  getCustomerID: grpc.handleUnaryCall<_poker_GetCustomerIDRequest__Output, _poker_GetCustomerIDResponse>;
  
  getDefaultPlayerMailingAddress: grpc.handleUnaryCall<_poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressResponse>;
  
  getDepositsRequest: grpc.handleUnaryCall<_poker_DepositsRequest__Output, _poker_DataResponse>;
  
  getDisabledWithdrawals: grpc.handleUnaryCall<_poker_DisabledWithdrawalsRequest__Output, _poker_DisabledWithdrawalsResponse>;
  
  getDistinctPage: grpc.handleUnaryCall<_poker_AdminPageRequest__Output, _poker_DataResponse>;
  
  getDistinctRole: grpc.handleUnaryCall<_poker_AdminRoleRequest__Output, _poker_DataResponse>;
  
  getDriversLicense: grpc.handleUnaryCall<_poker_DriversLicenseRequest__Output, _poker_DriversLicenseResponse>;
  
  getDuplicateUserForDeviceId: grpc.handleUnaryCall<_poker_DuplicateUserForDeviceIdRequest__Output, _poker_DuplicateUserForDeviceIdResponse>;
  
  getFailedBraintreeTransactions: grpc.handleUnaryCall<_poker_FailedBraintreeTransactionsRequest__Output, _poker_FailedBraintreeTransactionsResponse>;
  
  getFailedReferralLogs: grpc.handleUnaryCall<_poker_FailedReferralLogsRequest__Output, _poker_FailedReferralLogsResponse>;
  
  getFreePlayPromoUsers: grpc.handleUnaryCall<_poker_GetFreePlayPromoUsersRequest__Output, _poker_GetFreePlayPromoUsersResponse>;
  
  getGamePlayStatusForUserPerTable: grpc.handleUnaryCall<_poker_GamePlayStatusForUserPerTableRequest__Output, _poker_GamePlayStatusForUserPerTableResponse>;
  
  getGameplayHistories: grpc.handleUnaryCall<_poker_GetGameplayHistoriesRequest__Output, _poker_GetGameplayHistoriesResponse>;
  
  getGeofenceData: grpc.handleUnaryCall<_poker_GeofenceRequest__Output, _poker_GeofenceResponse>;
  
  getGeopoll: grpc.handleUnaryCall<_poker_GeopollRequest__Output, _poker_GeopollResponse>;
  
  getGlobalSettings: grpc.handleUnaryCall<_poker_GlobalSettingsRequest__Output, _poker_GlobalSettingsResponse>;
  
  getGroupedClientData: grpc.handleUnaryCall<_poker_GroupedClientRequest__Output, _poker_GroupedClientResponse>;
  
  getHandHistoryData: grpc.handleUnaryCall<_poker_GetHandHistoryRequest__Output, _poker_GetHandHistoryResponse>;
  
  getHandHistoryStat: grpc.handleUnaryCall<_poker_GetHandHistoryRequest__Output, _poker_GetHandHistoryResponse>;
  
  getIgdpparPoolAdjustment: grpc.handleUnaryCall<_poker_GetPoolAccountBalanceRequest__Output, _poker_GetPoolAccountBalanceResponse>;
  
  getJoinAnyTournamentStatus: grpc.handleUnaryCall<_poker_JoinAnyTournamentStatusRequest__Output, _poker_JoinAnyTournamentStatusResult>;
  
  getJoinAnyUsersList: grpc.handleUnaryCall<_poker_JoinAnyUsersListRequest__Output, _poker_JoinAnyUsersListResult>;
  
  getJoinrequestTracker: grpc.handleUnaryCall<_poker_JoinRequestStatsRequest__Output, _poker_JoinRequestStatsResponse>;
  
  getLabelEditor: grpc.handleUnaryCall<_poker_LabelEditorRequest__Output, _poker_LabelEditorResponse>;
  
  getLobbyTournamentTemplateList: grpc.handleUnaryCall<_poker_GetLobbyTournamentTemplateListRequest__Output, _poker_GetLobbyTournamentTemplateListResponse>;
  
  getLobbyVisibleTournamentList: grpc.handleUnaryCall<_poker_GetLobbyVisibleTournamentListRequest__Output, _poker_GetLobbyVisibleTournamentListResponse>;
  
  getNextTournament: grpc.handleUnaryCall<_poker_NextTournamentRequest__Output, _poker_NextTournamentResult>;
  
  getNotificationEmailLogs: grpc.handleUnaryCall<_poker_NotificationEmailLogsRequest__Output, _poker_NotificationEmailLogsResponse>;
  
  getNotificationTemplates: grpc.handleUnaryCall<_poker_GetNotificationTemplatesRequest__Output, _poker_GetNotificationTemplatesResponse>;
  
  getPageExtensions: grpc.handleUnaryCall<_poker_GetPageExtensionsRequest__Output, _poker_GetPageExtensionsResponse>;
  
  getPasswordResetLink: grpc.handleUnaryCall<_poker_GetPasswordResetLinkRequest__Output, _poker_GetPasswordResetLinkResponse>;
  
  getPayoutStructure: grpc.handleUnaryCall<_poker_GetPayoutStructureRequest__Output, _poker_GetPayoutStructureResponse>;
  
  getPendingDepositsRequest: grpc.handleUnaryCall<_poker_PendingDepositsRequest__Output, _poker_DataResponse>;
  
  getPendingRequest: grpc.handleUnaryCall<_poker_PendingDepositRequest__Output, _poker_DataResponse>;
  
  getPendingTransactions: grpc.handleUnaryCall<_poker_GetPendingTransactionsRequest__Output, _poker_GetPendingTransactionsResponse>;
  
  getPlaceholderUser: grpc.handleUnaryCall<_poker_ReservationBlackListedUserRequest__Output, _poker_ReservationBlackListedUserResponse>;
  
  getPlayerAccountBalance: grpc.handleUnaryCall<_poker_PlayerAccountBalanceRequest__Output, _poker_PlayerAccountBalanceResult>;
  
  getPlayerMailingAddress: grpc.handleUnaryCall<_poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressResponse>;
  
  getPlayerMailingAddresses: grpc.handleUnaryCall<_poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressesResponse>;
  
  getPlayerSpecificGameMatching: grpc.handleUnaryCall<_poker_GetPlayerSpecificGameMatchingRequest__Output, _poker_GetPlayerSpecificGameMatchingResponse>;
  
  getPlayerTournaments: grpc.handleUnaryCall<_poker_PlayerTournamentRequest__Output, _poker_GetTournamentsResponse>;
  
  getPoolAccountBalance: grpc.handleUnaryCall<_poker_GetPoolAccountBalanceRequest__Output, _poker_GetPoolAccountBalanceResponse>;
  
  getPromoQualificationData: grpc.handleUnaryCall<_poker_promoQualificationDataRequest__Output, _poker_promoQualificationDataResponse>;
  
  getPushNotificationKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  getRandomSecurityQuestion: grpc.handleUnaryCall<_poker_FetchSecurityQuestionsRequest__Output, _poker_FetchSecurityQuestionsResponse>;
  
  getRecuringDeposit: grpc.handleUnaryCall<_poker_GetRecuringDepositRequest__Output, _poker_GetRecuringDepositResponse>;
  
  getReportsForAffiliateCopy: grpc.handleUnaryCall<_poker_GetReportsForAffiliateCopyRequest__Output, _poker_GetReportsForAffiliateCopyResponse>;
  
  getReservationBlackListedTournamentTemplates: grpc.handleUnaryCall<_poker_ReservationBlackListedTournamentTemplatesRequest__Output, _poker_ReservationBlackListedTournamentTemplatesResponse>;
  
  getReservationDataList: grpc.handleUnaryCall<_poker_SearchUserRequest__Output, _poker_SearchUserResult>;
  
  getReservationTimeEditor: grpc.handleUnaryCall<_poker_GetReservationTimeEditorRequest__Output, _poker_GetReservationTimeEditorResponse>;
  
  getRoyalHands: grpc.handleUnaryCall<_poker_GetRoyalHandsRequest__Output, _poker_GetRoyalHandsResponse>;
  
  getSSNWhiteList: grpc.handleUnaryCall<_poker_SSNWhitelistRequest__Output, _poker_SSNWhitelistResponse>;
  
  getSessionsRequest: grpc.handleUnaryCall<_poker_SessionsRequest__Output, _poker_DataResponse>;
  
  getShuffledDeck: grpc.handleUnaryCall<_poker_NewDeckRequest__Output, _poker_NewDeckResponse>;
  
  getSignupFailureLogs: grpc.handleUnaryCall<_poker_SignupFailureErrorRequest__Output, _poker_SignupFailureErrorResponse>;
  
  getSingleHandHistoryStat: grpc.handleUnaryCall<_poker_GetHandHistoryRequest__Output, _poker_GetHandHistoryResponse>;
  
  getTemplateEditor: grpc.handleUnaryCall<_poker_TemplateEditorRequest__Output, _poker_TemplateEditorResponse>;
  
  getTemplateStats: grpc.handleUnaryCall<_poker_TemplateStatsRequest__Output, _poker_TemplateStatsResponse>;
  
  getThemes: grpc.handleUnaryCall<_poker_ThemesRequest__Output, _poker_ThemesResponse>;
  
  getTournamentAdditionalPayoutBoost: grpc.handleUnaryCall<_poker_GetTournamentAdditionalPayoutBoostRequest__Output, _poker_GetTournamentAdditionalPayoutBoostResponse>;
  
  getTournamentAdditionalPayoutBoostsPerTemplate: grpc.handleUnaryCall<_poker_GetTournamentAdditionalPayoutBoostRequest__Output, _poker_GetTournamentAdditionalPayoutBoostResponse>;
  
  getTournamentDetails: grpc.handleUnaryCall<_poker_TournamentDetailsRequest__Output, _poker_TournamentDetailsResponse>;
  
  getTournamentReservationBlacklistSchedule: grpc.handleUnaryCall<_poker_GetTournamentReservationBlacklistScheduleRequest__Output, _poker_GetTournamentReservationBlacklistScheduleResponse>;
  
  getTournamentReservationTime: grpc.handleUnaryCall<_poker_GetTournamentReservationTimeRequest__Output, _poker_GetTournamentReservationTimeResponse>;
  
  getTournamentStatus: grpc.handleUnaryCall<_poker_TournamentStatusRequest__Output, _poker_TournamentStatusResponse>;
  
  getTournamentTemplateBufferState: grpc.handleUnaryCall<_poker_GetTournamentTemplateBufferStateRequest__Output, _poker_GetTournamentTemplateBufferStateResponse>;
  
  getTournamentTemplateDetail: grpc.handleUnaryCall<_poker_GetTournamentTemplateDetailRequest__Output, _poker_GetTournamentTemplateDetailResponse>;
  
  getTournamentTemplateList: grpc.handleUnaryCall<_poker_GetTournamentTemplateListRequest__Output, _poker_GetTournamentTemplateListResponse>;
  
  getTournaments: grpc.handleUnaryCall<_poker_GetTournamentsRequest__Output, _poker_GetTournamentsResponse>;
  
  getTransactionIDsFromProcessingLogFees: grpc.handleUnaryCall<_poker_TransactionIDsFromProcessingLogFeesRequest__Output, _poker_TransactionIDsFromProcessingLogFeesResponse>;
  
  getTransactionRequest: grpc.handleUnaryCall<_poker_TransactionsRequest__Output, _poker_DataResponse>;
  
  getUiSettings: grpc.handleUnaryCall<_poker_UiSettingsRequest__Output, _poker_UiSettingsResponse>;
  
  getUserExportData: grpc.handleUnaryCall<_poker_GetUserExportDataRequest__Output, _poker_GetUserExportDataResponse>;
  
  getUserInfo: grpc.handleUnaryCall<_poker_GetUserInfoRequest__Output, _poker_GetUserInfoResponse>;
  
  getUserNoWithdrawlRestrictions: grpc.handleUnaryCall<_poker_UserWithNoWithdrawalRestrictionsRequest__Output, _poker_UserWithNoWithdrawalRestrictionsResponse>;
  
  getUserSecurityQuestions: grpc.handleUnaryCall<_poker_FetchSecurityQuestionsResponse__Output, _poker_FetchSecurityQuestionsResponse>;
  
  getUsersWithDeviceToken: grpc.handleUnaryCall<_poker_GetDeviceTokenUsersRequest__Output, _poker_GetDeviceTokenUsersResponse>;
  
  getVaultedPayment: grpc.handleUnaryCall<_poker_VaultedPaymentRequest__Output, _poker_VaultedPaymentResponse>;
  
  getWelcomeBackPromoLogs: grpc.handleUnaryCall<_poker_WelcomeBackPromoLogsRequest__Output, _poker_WelcomeBackPromoLogsResponse>;
  
  getWhitelistedClientsonGeofence: grpc.handleUnaryCall<_poker_GeofenceClientsRequest__Output, _poker_GeofenceClientsResponse>;
  
  getWhitelistedUserEmails: grpc.handleUnaryCall<_poker_WhitelistedUsersRequest__Output, _poker_WhitelistedUsersResult>;
  
  getWhitelistedUsers: grpc.handleUnaryCall<_poker_WhitelistedUsersRequest__Output, _poker_WhitelistedUsersResult>;
  
  getWhitelistedUsersonGeofence: grpc.handleUnaryCall<_poker_GeofenceUsersRequest__Output, _poker_GeofenceUsersResponse>;
  
  getWithdrawalPending: grpc.handleUnaryCall<_poker_GetWithdrawalPendingRequest__Output, _poker_GetWithdrawalPendingResponse>;
  
  getWithdrawalsRequest: grpc.handleUnaryCall<_poker_WithdrawalsRequest__Output, _poker_DataResponse>;
  
  getWorksheetsAndReports: grpc.handleUnaryCall<_poker_GetWorksheetsAndReportsRequest__Output, _poker_GetWorksheetsAndReportsResponse>;
  
  groupClientData: grpc.handleUnaryCall<_poker_GroupClientAddRequest__Output, _poker_GroupClientAddResponse>;
  
  isWithdrawAllowed: grpc.handleUnaryCall<_poker_IsWithdrawAllowedRequest__Output, _poker_IsWithdrawAllowedResponse>;
  
  joinAnyTournament: grpc.handleUnaryCall<_poker_JoinAnyTournamentRequest__Output, _poker_JoinAnyTournamentResult>;
  
  joinAnyTournamentAdmin: grpc.handleUnaryCall<_poker_JoinAnyTournamentAdminRequest__Output, _poker_JoinAnyTournamentResult>;
  
  joinTournament: grpc.handleUnaryCall<_poker_JoinTournamentRequest__Output, _poker_JoinTournamentResponse>;
  
  joinTournamentTempalte: grpc.handleUnaryCall<_poker_JoinTournamentTemplateRequest__Output, _poker_JoinTournamentTemplateResponse>;
  
  keyTransactionPayout: grpc.handleUnaryCall<_poker_KeyTransactionPayouRequest__Output, _poker_KeyTransactionPayouResponse>;
  
  launchTournament: grpc.handleUnaryCall<_poker_LaunchTournamentRequest__Output, _poker_LaunchTournamentResponse>;
  
  makeDeposit: grpc.handleUnaryCall<_poker_MakeDepositRequest__Output, _poker_MakeDepositResponse>;
  
  makeTransaction: grpc.handleUnaryCall<_poker_MakeTransactionRequest__Output, _poker_MakeTransactionResponse>;
  
  makeWithdrawal: grpc.handleUnaryCall<_poker_MakeWithdrawalRequest__Output, _poker_MakeWithdrawalResponse>;
  
  manualAdjustmentByBatch: grpc.handleUnaryCall<_poker_ManualAdjustmentByBatchRequest__Output, _poker_ManualAdjustmentByBatchResponse>;
  
  modifyPlayerSpecificGameMatching: grpc.handleUnaryCall<_poker_ModifyPlayerSpecificGameMatchingRequest__Output, _poker_ModifyPlayerSpecificGameMatchingResponse>;
  
  mountHashes: grpc.handleUnaryCall<_poker_MountHashesRequest__Output, _poker_MountHashesResponse>;
  
  orderLobbyTournamentsInMostPlayedOrder: grpc.handleUnaryCall<_poker_OrderLobbyTournamentsInMostPlayedOrderRequest__Output, _poker_OrderLobbyTournamentsInMostPlayedOrderResponse>;
  
  placeholderUserStatusToggle: grpc.handleUnaryCall<_poker_ReservationBlackListToggleRequest__Output, _poker_ReservationBlackListToggleResponse>;
  
  purgeGeopoll: grpc.handleUnaryCall<_poker_PurgeGeopollRequest__Output, _poker_PurgeGeopollResponse>;
  
  rankHands: grpc.handleUnaryCall<_poker_RankHandsRequest__Output, _poker_RankHandsResult>;
  
  referalStat: grpc.handleUnaryCall<_poker_ReferalStatRequest__Output, _poker_ReferalStatResponse>;
  
  referals: grpc.handleUnaryCall<_poker_ReferalsRequest__Output, _poker_ReferalsResponse>;
  
  removeAdminData: grpc.handleUnaryCall<_poker_AdminRemoveRequest__Output, _poker_StatusResponse>;
  
  removeAdminPagePermissions: grpc.handleUnaryCall<_poker_RemoveAdminPagePermissionsRequest__Output, _poker_RemoveAdminPagePermissionsResponse>;
  
  removeAdminRoleData: grpc.handleUnaryCall<_poker_AdminRoleRemoveRequest__Output, _poker_StatusResponse>;
  
  removeApiKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  removeClientData: grpc.handleUnaryCall<_poker_ClientRemoveRequest__Output, _poker_ClientRemoveResponse>;
  
  removeComponentPermissionData: grpc.handleUnaryCall<_poker_ComponentPermissionRemoveRequest__Output, _poker_StatusResponse>;
  
  removeGeofenceData: grpc.handleUnaryCall<_poker_GeofenceRemoveRequest__Output, _poker_GeofenceRemoveResponse>;
  
  removeGroupedClientData: grpc.handleUnaryCall<_poker_GroupedClientRemoveRequest__Output, _poker_GroupedClientRemoveResponse>;
  
  removeNotificationTemplates: grpc.handleUnaryCall<_poker_RemoveNotificationTemplatesRequest__Output, _poker_RemoveNotificationTemplatesResponse>;
  
  removePushNotificationKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  removeTournament: grpc.handleUnaryCall<_poker_GetTournamentTemplateDetailRequest__Output, _poker_StatusResponse>;
  
  removeTournamentReservationTime: grpc.handleUnaryCall<_poker_RemoveTournamentReservationTimeRequest__Output, _poker_RemoveTournamentReservationTimeResponse>;
  
  removeTournamentTemplateFromLobby: grpc.handleUnaryCall<_poker_RemoveTournamentTemplateFromLobbyRequest__Output, _poker_RemoveTournamentTemplateFromLobbyResponse>;
  
  removeUserFromReservationQueue: grpc.handleUnaryCall<_poker_ReservationBlackListToggleRequest__Output, _poker_ReservationBlackListToggleResponse>;
  
  removeWhitelistUser: grpc.handleUnaryCall<_poker_WhitelistUserRequest__Output, _poker_WhitelistUserResult>;
  
  removeWhitelistedUserEmail: grpc.handleUnaryCall<_poker_WhitelistUserRequest__Output, _poker_WhitelistUserResult>;
  
  removeapnPushNotificationKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  reservationBlackListToggle: grpc.handleUnaryCall<_poker_ReservationBlackListToggleRequest__Output, _poker_ReservationBlackListToggleResponse>;
  
  reservationBlackListedUser: grpc.handleUnaryCall<_poker_ReservationBlackListedUserRequest__Output, _poker_ReservationBlackListedUserResponse>;
  
  resetApiKey: grpc.handleUnaryCall<_poker_ApiKeyRequest__Output, _poker_ApiKeyResponse>;
  
  resetPassword: grpc.handleUnaryCall<_poker_ResetPasswordRequest__Output, _poker_ResetPasswordResponse>;
  
  searchAdjustmentUsersByUsername: grpc.handleUnaryCall<_poker_SearchUserRequest__Output, _poker_SearchUserResult>;
  
  searchExcludedUser: grpc.handleUnaryCall<_poker_SearchExcludedUserRequest__Output, _poker_SearchExcludedUserResult>;
  
  searchPlaceholderAdjustments: grpc.handleUnaryCall<_poker_SearchUserRequest__Output, _poker_SearchUserResult>;
  
  searchPlaceholderPlayerByUsername: grpc.handleUnaryCall<_poker_SearchUserRequest__Output, _poker_SearchUserResult>;
  
  searchReservationBlackListByUsername: grpc.handleUnaryCall<_poker_SearchUserRequest__Output, _poker_SearchUserResult>;
  
  searchReservationQueueUsers: grpc.handleUnaryCall<_poker_SearchUserRequest__Output, _poker_SearchUserResult>;
  
  searchSignUpLogs: grpc.handleUnaryCall<_poker_SignupFailureErrorRequest__Output, _poker_SignupFailureErrorResponse>;
  
  searchSuspendedDeviceByUserName: grpc.handleUnaryCall<_poker_SearchSuspendedDeviceRequest__Output, _poker_SearchSuspendedDeviceResult>;
  
  searchUserByUsername: grpc.handleUnaryCall<_poker_SearchUserRequest__Output, _poker_SearchUserResult>;
  
  sendEmailToMultipleUser: grpc.handleUnaryCall<_poker_MultipleEmailSendRequest__Output, _poker_MultipleEmailSendResponse>;
  
  sendGeolocationData: grpc.handleUnaryCall<_poker_GeolocationRequest__Output, _poker_GeolocationResult>;
  
  sendPushNotification: grpc.handleUnaryCall<_poker_SendPushNotificationRequest__Output, _poker_SendPushotificationResponse>;
  
  setBulkFreePlayAdjustment: grpc.handleUnaryCall<_poker_SetBulkFreePlayAdjustmentRequest__Output, _poker_SetBulkFreePlayAdjustmentResponse>;
  
  setDefaultPaymentMethod: grpc.handleUnaryCall<_poker_SetDefaultPaymentMethodRequest__Output, _poker_SetDefaultPaymentMethodResponse>;
  
  setDefaultPlayerMailingAddress: grpc.handleUnaryCall<_poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressStatusResponse>;
  
  setGeofenceClientGlobalRule: grpc.handleUnaryCall<_poker_GeofenceClientGlobalRuleRequest__Output, _poker_GeofenceClientGlobalRuleResponse>;
  
  setGeofenceDeviceRule: grpc.handleUnaryCall<_poker_GeofenceDeviceRuleRequest__Output, _poker_GeofenceDeviceRuleResponse>;
  
  setGeofenceGlobalRule: grpc.handleUnaryCall<_poker_GeofenceGlobalRuleRequest__Output, _poker_GeofenceGlobalRuleResponse>;
  
  setGlobalSettings: grpc.handleUnaryCall<_poker_GlobalSettingsRequest__Output, _poker_GlobalSettingsResponse>;
  
  setLabelEditor: grpc.handleUnaryCall<_poker_LabelEditorRequest__Output, _poker_LabelEditorResponse>;
  
  setPrizeAsRevealed: grpc.handleUnaryCall<_poker_PrizeRevealRequest__Output, _poker_PrizeRevealResponse>;
  
  setReservationTimeEditor: grpc.handleUnaryCall<_poker_SetReservationTimeEditorRequest__Output, _poker_SetReservationTimeEditorResponse>;
  
  setTemplateEditor: grpc.handleUnaryCall<_poker_TemplateEditorRequest__Output, _poker_TemplateEditorResponse>;
  
  setTheme: grpc.handleUnaryCall<_poker_ThemesRequest__Output, _poker_ThemesResponse>;
  
  setTournamentAdditionalPayoutBoost: grpc.handleUnaryCall<_poker_SetTournamentAdditionalPayoutBoostRequest__Output, _poker_SetTournamentAdditionalPayoutBoostResponse>;
  
  setTournamentReservationTime: grpc.handleUnaryCall<_poker_SetTournamentReservationTimeRequest__Output, _poker_SetTournamentReservationTimeResponse>;
  
  setUiSettings: grpc.handleUnaryCall<_poker_AllUiSettingsRequest__Output, _poker_UiSettingsResponse>;
  
  simulateGames: grpc.handleUnaryCall<_poker_SimulateGamesRequest__Output, _poker_StatusResponse>;
  
  startTournamentTableInstance: grpc.handleUnaryCall<_poker_StartTournamentTableInstanceRequest__Output, _poker_StartTournamentTableInstanceResponse>;
  
  suspendDeviceIdManually: grpc.handleUnaryCall<_poker_SearchSuspendedDeviceRequest__Output, _poker_SearchSuspendedDeviceResult>;
  
  testCompareHandsWild: grpc.handleUnaryCall<_poker_CompareWildHandRequest__Output, _poker_WildHandResponse>;
  
  testHandsWild: grpc.handleUnaryCall<_poker_WildHandRequest__Output, _poker_WildHandResponse>;
  
  toggleRecuringDeposit: grpc.handleUnaryCall<_poker_ToggleRecuringDepositRequest__Output, _poker_ToggleRecuringDepositResponse>;
  
  tournamentPayoutStructure: grpc.handleUnaryCall<_poker_TournamentDetailsRequest__Output, _poker_TournamentPayoutStructureResponse>;
  
  unregisterAnyTournament: grpc.handleUnaryCall<_poker_UnregisterAnyTournamentRequest__Output, _poker_UnregisterAnyTournamentResult>;
  
  unregisterTournament: grpc.handleUnaryCall<_poker_UnregisterTournamentRequest__Output, _poker_UnregisterTournamentResponse>;
  
  unsubscribeFromTournamentTemplateBuffer: grpc.handleUnaryCall<_poker_UnsubscribeFromTournamentTemplateBufferRequest__Output, _poker_UnsubscribeFromTournamentTemplateBufferResponse>;
  
  unsuspendUserDevice: grpc.handleUnaryCall<_poker_SearchSuspendedDeviceRequest__Output, _poker_SearchSuspendedDeviceResult>;
  
  updateAdminData: grpc.handleUnaryCall<_poker_AdminUpdateRequest__Output, _poker_StatusResponse>;
  
  updateAdminRoleData: grpc.handleUnaryCall<_poker_AdminRoleUpdateRequest__Output, _poker_StatusResponse>;
  
  updateBlockedUserReservationDelay: grpc.handleUnaryCall<_poker_UpdateBlockedUserReservationDelayRequest__Output, _poker_UpdateBlockedUserReservationDelayResponse>;
  
  updateBoostedAdditionalPayout: grpc.handleUnaryCall<_poker_UpdateBoostedAdditionalPayoutRequest__Output, _poker_UpdateBoostedAdditionalPayoutResponse>;
  
  updateClientData: grpc.handleUnaryCall<_poker_ClientUpdateRequest__Output, _poker_ClientUpdateResponse>;
  
  updateClientEmail: grpc.handleUnaryCall<_poker_UpdateClientEmailRequest__Output, _poker_UpdateClientEmailResponse>;
  
  updateClientForAffiliateData: grpc.handleUnaryCall<_poker_UpdateClientForAffiliateRequest__Output, _poker_UpdateClientForAffiliateResponse>;
  
  updateClientGroupForAffiliateData: grpc.handleUnaryCall<_poker_UpdateClientGroupForAffiliateRequest__Output, _poker_UpdateClientGroupForAffiliateResponse>;
  
  updateComponentPermissionData: grpc.handleUnaryCall<_poker_ComponentPermissionUpdateRequest__Output, _poker_StatusResponse>;
  
  updateCustomCss: grpc.handleUnaryCall<_poker_CustomCssRequest__Output, _poker_CustomCssResponse>;
  
  updateFreePlayPromoUsers: grpc.handleUnaryCall<_poker_UpdateFreePlayPromoUsersRequest__Output, _poker_UpdateFreePlayPromoUsersResponse>;
  
  updateGeofenceData: grpc.handleUnaryCall<_poker_GeofenceUpdateRequest__Output, _poker_GeofenceUpdateResponse>;
  
  updateGroupedClientData: grpc.handleUnaryCall<_poker_GroupedClientUpdateRequest__Output, _poker_GroupedClientUpdateResponse>;
  
  updateIgdpparPoolAdjustment: grpc.handleUnaryCall<_poker_UpdatePoolAccountBalanceRequest__Output, _poker_UpdateAccountPoolBalanceResponse>;
  
  updateLobbyVisibleTournamentOrder: grpc.handleUnaryCall<_poker_UpdateLobbyVisibleTournamentOrderRequest__Output, _poker_UpdateLobbyVisibleTournamentOrderResponse>;
  
  updateNotificationTemplates: grpc.handleUnaryCall<_poker_UpdateNotificationTemplatesRequest__Output, _poker_UpdateNotificationTemplatesResponse>;
  
  updatePaymentMethod: grpc.handleUnaryCall<_poker_UpdatePaymentMethodRequest__Output, _poker_UpdatePaymentMethodResponse>;
  
  updatePlayerAccountBalance: grpc.handleUnaryCall<_poker_UpdateAccountBalanceRequest__Output, _poker_UpdateAccountBalanceResponse>;
  
  updatePlayerMailingAddress: grpc.handleUnaryCall<_poker_PlayerMailingAddressUpdateRequest__Output, _poker_PlayerMailingAddressStatusResponse>;
  
  updatePoolAccountBalance: grpc.handleUnaryCall<_poker_UpdatePoolAccountBalanceRequest__Output, _poker_UpdateAccountPoolBalanceResponse>;
  
  updateRecuringDeposit: grpc.handleUnaryCall<_poker_UpdateRecuringDepositRequest__Output, _poker_UpdateRecuringDepositResponse>;
  
  updateReportsForAffiliateCopy: grpc.handleUnaryCall<_poker_UpdateReportsForAffiliateCopyRequest__Output, _poker_UpdateReportsForAffiliateCopyResponse>;
  
  updateReservationBlackListedTournamentTemplates: grpc.handleUnaryCall<_poker_UpdateReservationBlackListedTournamentTemplatesRequest__Output, _poker_UpdateReservationBlackListedTournamentTemplatesResponse>;
  
  updateSSNWhiteList: grpc.handleUnaryCall<_poker_UpdateSSNWhitelistRequest__Output, _poker_UpdateSSNWhitelistResponse>;
  
  updateSecurityQuestions: grpc.handleUnaryCall<_poker_UpdateSecurityQuestionsRequest__Output, _poker_UpdateSecurityQuestionsResponse>;
  
  updateTournament: grpc.handleUnaryCall<_poker_UpdateTournamentTemplateRequest__Output, _poker_StatusResponse>;
  
  updateTournamentReservationBlacklistSchedule: grpc.handleUnaryCall<_poker_UpdateTournamentReservationBlacklistScheduleRequest__Output, _poker_UpdateTournamentReservationBlacklistScheduleResponse>;
  
  updateUserInfo: grpc.handleUnaryCall<_poker_UpdateUserInfoRequest__Output, _poker_UpdateUserInfoResponse>;
  
  updateUserProfileInfo: grpc.handleUnaryCall<_poker_UpdateUserProfileInfoRequest__Output, _poker_UpdateUserProfileInfoResponse>;
  
  uploadClientGroupTournamentImage: grpc.handleUnaryCall<_poker_ClientGroupTournamentImageRequest__Output, _poker_ClientTournamentImageResponse>;
  
  uploadClientLogo: grpc.handleUnaryCall<_poker_ClientLogoRequest__Output, _poker_ClientLogoResponse>;
  
  uploadClientTournamentImage: grpc.handleUnaryCall<_poker_ClientTournamentImageRequest__Output, _poker_ClientTournamentImageResponse>;
  
  uploadDriverLicense: grpc.handleUnaryCall<_poker_DriverLicenseImageRequest__Output, _poker_DriverLicenseImageResponse>;
  
  uploadPageExtension: grpc.handleUnaryCall<_poker_UploadPageExtensionRequest__Output, _poker_UploadPageExtensionResponse>;
  
  uploadToS3: grpc.handleUnaryCall<_poker_UploadToS3Request__Output, _poker_UploadToS3Response>;
  
  uploadTournamentImage: grpc.handleUnaryCall<_poker_ImageRequest__Output, _poker_ImageResponse>;
  
  uploadWorksheetReport: grpc.handleUnaryCall<_poker_UploadWorksheetReportRequest__Output, _poker_UploadWorksheetReportResponse>;
  
  validateExperian: grpc.handleUnaryCall<_poker_SignupRequest__Output, _poker_SignupResult>;
  
  validateSecurityQuestionsForLogin: grpc.handleUnaryCall<_poker_ValidateSecurityQuestionsRequest__Output, _poker_ValidateSecurityQuestionsResponse>;
  
  vaultPaymentMethod: grpc.handleUnaryCall<_poker_VaultPaymentMethodRequest__Output, _poker_VaultPaymentMethodResponse>;
  
  verifySSNLastFourDigits: grpc.handleUnaryCall<_poker_VerifySSNLastFourRequest__Output, _poker_VerifySSNLastFourResponse>;
  
  verifyUserPassword: grpc.handleUnaryCall<_poker_VerifyUserPasswordRequest__Output, _poker_VerifyUserPasswordResponse>;
  
  verifyUserSSNAgain: grpc.handleUnaryCall<_poker_VerifyUsersFirstFiveSSNDigitRequest__Output, _poker_VerifyUsersFirstFiveSSNDigitResponse>;
  
  whitelistClientsOnGeofence: grpc.handleUnaryCall<_poker_GeofenceWhitelistRequest__Output, _poker_GeofenceWhitelistResponse>;
  
  whitelistUser: grpc.handleUnaryCall<_poker_WhitelistUserRequest__Output, _poker_WhitelistUserResult>;
  
  whitelistUserEmail: grpc.handleUnaryCall<_poker_WhitelistUserRequest__Output, _poker_WhitelistUserResult>;
  
  whitelistUsersOnGeofence: grpc.handleUnaryCall<_poker_GeofenceWhitelistRequest__Output, _poker_GeofenceWhitelistResponse>;
  
  withdrawCheckByMail: grpc.handleUnaryCall<_poker_CheckWithdrawalRequest__Output, _poker_CheckWithdrawalResponse>;
  
}

export interface SngDefinition extends grpc.ServiceDefinition {
  GetRankings: MethodDefinition<_poker_GetRankingsRequest, _poker_GetRankingsResult, _poker_GetRankingsRequest__Output, _poker_GetRankingsResult__Output>
  GetStatus: MethodDefinition<_poker_GetStatusRequest, _poker_GetStatusResult, _poker_GetStatusRequest__Output, _poker_GetStatusResult__Output>
  GetUserByEmail: MethodDefinition<_poker_GetUserByEmailRequest, _poker_GetUserByEmailResponse, _poker_GetUserByEmailRequest__Output, _poker_GetUserByEmailResponse__Output>
  Login: MethodDefinition<_poker_LoginRequest, _poker_LoginResult, _poker_LoginRequest__Output, _poker_LoginResult__Output>
  Logout: MethodDefinition<_poker_LogoutRequest, _poker_LogoutResult, _poker_LogoutRequest__Output, _poker_LogoutResult__Output>
  MakePlayerAction: MethodDefinition<_poker_MakePlayerActionRequest, _poker_GetStatusResult, _poker_MakePlayerActionRequest__Output, _poker_GetStatusResult__Output>
  MakeSng: MethodDefinition<_poker_MakeSngRequest, _poker_MakeSngResponse, _poker_MakeSngRequest__Output, _poker_MakeSngResponse__Output>
  MakeSngWithRandomUsers: MethodDefinition<_poker_MakeSngWithRandomUsersRequest, _poker_GetStatusResult, _poker_MakeSngWithRandomUsersRequest__Output, _poker_GetStatusResult__Output>
  Signup: MethodDefinition<_poker_SignupRequest, _poker_SignupResult, _poker_SignupRequest__Output, _poker_SignupResult__Output>
  TableSubscribe: MethodDefinition<_poker_TableSubscribeRequest, _poker_TableSubscribeResponse, _poker_TableSubscribeRequest__Output, _poker_TableSubscribeResponse__Output>
  Test: MethodDefinition<_google_protobuf_Empty, _google_protobuf_Empty, _google_protobuf_Empty__Output, _google_protobuf_Empty__Output>
  acceptTOS: MethodDefinition<_poker_AcceptTOSRequest, _poker_AcceptTOSResult, _poker_AcceptTOSRequest__Output, _poker_AcceptTOSResult__Output>
  actionOnPendingRequest: MethodDefinition<_poker_UpdatePendingRequest, _poker_StatusResponse, _poker_UpdatePendingRequest__Output, _poker_StatusResponse__Output>
  actionPendingWithdrawal: MethodDefinition<_poker_ActionPendingWithdrawaRequest, _poker_ActionPendingWithdrawaResponse, _poker_ActionPendingWithdrawaRequest__Output, _poker_ActionPendingWithdrawaResponse__Output>
  addAdminData: MethodDefinition<_poker_AdminAddRequest, _poker_StatusResponse, _poker_AdminAddRequest__Output, _poker_StatusResponse__Output>
  addAdminPagePermissions: MethodDefinition<_poker_AddAdminPagePermissionsRequest, _poker_AddAdminPagePermissionsResponse, _poker_AddAdminPagePermissionsRequest__Output, _poker_AddAdminPagePermissionsResponse__Output>
  addAdminRoleData: MethodDefinition<_poker_AdminRoleAddRequest, _poker_StatusResponse, _poker_AdminRoleAddRequest__Output, _poker_StatusResponse__Output>
  addApiKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  addApnApiKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  addBraintreeCredential: MethodDefinition<_poker_ClientResponse, _poker_ClientResponse, _poker_ClientResponse__Output, _poker_ClientResponse__Output>
  addClientData: MethodDefinition<_poker_ClientAddRequest, _poker_ClientAddResponse, _poker_ClientAddRequest__Output, _poker_ClientAddResponse__Output>
  addClientEmail: MethodDefinition<_poker_AddClientEmailRequest, _poker_AddClientEmailResponse, _poker_AddClientEmailRequest__Output, _poker_AddClientEmailResponse__Output>
  addComponentPermissionData: MethodDefinition<_poker_ComponentPermissionAddRequest, _poker_StatusResponse, _poker_ComponentPermissionAddRequest__Output, _poker_StatusResponse__Output>
  addGeofenceData: MethodDefinition<_poker_GeofenceAddRequest, _poker_GeofenceAddResponse, _poker_GeofenceAddRequest__Output, _poker_GeofenceAddResponse__Output>
  addNotificationTemplates: MethodDefinition<_poker_AddNotificationTemplatesRequest, _poker_AddNotificationTemplatesResponse, _poker_AddNotificationTemplatesRequest__Output, _poker_AddNotificationTemplatesResponse__Output>
  addPayoutStructure: MethodDefinition<_poker_AddPayoutStructureRequest, _poker_AddPayoutStructureResponse, _poker_AddPayoutStructureRequest__Output, _poker_AddPayoutStructureResponse__Output>
  addPlayerMailingAddress: MethodDefinition<_poker_PlayerMailingAddressUpdateRequest, _poker_PlayerMailingAddressStatusResponse, _poker_PlayerMailingAddressUpdateRequest__Output, _poker_PlayerMailingAddressStatusResponse__Output>
  addPushNotificationKey: MethodDefinition<_poker_AddPushNotificationKeyRequest, _poker_AddPushNotificationKeyResponse, _poker_AddPushNotificationKeyRequest__Output, _poker_AddPushNotificationKeyResponse__Output>
  addRecuringDeposit: MethodDefinition<_poker_AddRecuringDepositRequest, _poker_AddRecuringDepositResponse, _poker_AddRecuringDepositRequest__Output, _poker_AddRecuringDepositResponse__Output>
  addTournamentTemplateToLobby: MethodDefinition<_poker_AddTournamentTemplateToLobbyRequest, _poker_AddTournamentTemplateToLobbyResponse, _poker_AddTournamentTemplateToLobbyRequest__Output, _poker_AddTournamentTemplateToLobbyResponse__Output>
  addonPlayer: MethodDefinition<_poker_AddonPlayerRequest, _poker_AddonPlayerResponse, _poker_AddonPlayerRequest__Output, _poker_AddonPlayerResponse__Output>
  adjustBulkInstantDepositMatch: MethodDefinition<_poker_BulkInstantDepositMatchRequest, _poker_BulkInstantDepositMatchResponse, _poker_BulkInstantDepositMatchRequest__Output, _poker_BulkInstantDepositMatchResponse__Output>
  adminJoinAnyTournament: MethodDefinition<_poker_AdminJoinAnyTournamentRequest, _poker_JoinAnyTournamentResult, _poker_AdminJoinAnyTournamentRequest__Output, _poker_JoinAnyTournamentResult__Output>
  adminLogin: MethodDefinition<_poker_LoginRequest, _poker_LoginResult, _poker_LoginRequest__Output, _poker_LoginResult__Output>
  answerSecurityQusetionAndVerifyPassword: MethodDefinition<_poker_AnswerVerifyPasswordRequest, _poker_AnswerVerifyPasswordResponse, _poker_AnswerVerifyPasswordRequest__Output, _poker_AnswerVerifyPasswordResponse__Output>
  blackListReservationQueueUsers: MethodDefinition<_poker_ReservationBlackListToggleRequest, _poker_ReservationBlackListToggleResponse, _poker_ReservationBlackListToggleRequest__Output, _poker_ReservationBlackListToggleResponse__Output>
  blacklistClientsOnGeofence: MethodDefinition<_poker_GeofenceBlacklistRequest, _poker_GeofenceBlacklistResponse, _poker_GeofenceBlacklistRequest__Output, _poker_GeofenceBlacklistResponse__Output>
  blacklistUsersOnGeofence: MethodDefinition<_poker_GeofenceBlacklistRequest, _poker_GeofenceBlacklistResponse, _poker_GeofenceBlacklistRequest__Output, _poker_GeofenceBlacklistResponse__Output>
  byPassWithdrawalLimits: MethodDefinition<_poker_ByPassWithdrawalLimitsRequest, _poker_ByPassWithdrawalLimitsResponse, _poker_ByPassWithdrawalLimitsRequest__Output, _poker_ByPassWithdrawalLimitsResponse__Output>
  cancelAnySimulatedGames: MethodDefinition<_poker_CancelAnySimulatedGamesRequest, _poker_CancelAnySimulatedGamesResponse, _poker_CancelAnySimulatedGamesRequest__Output, _poker_CancelAnySimulatedGamesResponse__Output>
  cancelJoinAnyAllUsers: MethodDefinition<_poker_JoinAnyTournamentStatusRequest, _poker_CancelJoinAnyUsersResult, _poker_JoinAnyTournamentStatusRequest__Output, _poker_CancelJoinAnyUsersResult__Output>
  cancelJoinAnyMultipleUsers: MethodDefinition<_poker_CancelJoinAnyUsersRequest, _poker_CancelJoinAnyUsersResult, _poker_CancelJoinAnyUsersRequest__Output, _poker_CancelJoinAnyUsersResult__Output>
  cancelJoinAnyTournament: MethodDefinition<_poker_CancelJoinAnyTournamentRequest, _poker_CancelJoinAnyTournamentResult, _poker_CancelJoinAnyTournamentRequest__Output, _poker_CancelJoinAnyTournamentResult__Output>
  cancelTournament: MethodDefinition<_poker_CancelTournamentRequest, _poker_CancelTournamentResponse, _poker_CancelTournamentRequest__Output, _poker_CancelTournamentResponse__Output>
  cancelTournaments: MethodDefinition<_poker_CancelTournamentsRequest, _poker_CancelTournamentsResponse, _poker_CancelTournamentsRequest__Output, _poker_CancelTournamentsResponse__Output>
  captureProcessedDeposit: MethodDefinition<_poker_CaptureDepositRequest, _poker_CaptureDepositResponse, _poker_CaptureDepositRequest__Output, _poker_CaptureDepositResponse__Output>
  captureProcessedWithdrawal: MethodDefinition<_poker_CaptureWithdrawalRequest, _poker_CaptureWithdrawalResponse, _poker_CaptureWithdrawalRequest__Output, _poker_CaptureWithdrawalResponse__Output>
  changeDisplayNameForExtensions: MethodDefinition<_poker_ChangeDisplayNameForExtensionsRequest, _poker_ChangeDisplayNameForExtensionsResponse, _poker_ChangeDisplayNameForExtensionsRequest__Output, _poker_ChangeDisplayNameForExtensionsResponse__Output>
  changeDisplayNameForReports: MethodDefinition<_poker_ChangeDisplayNameForReportsRequest, _poker_ChangeDisplayNameForReportsResponse, _poker_ChangeDisplayNameForReportsRequest__Output, _poker_ChangeDisplayNameForReportsResponse__Output>
  changePassword: MethodDefinition<_poker_ChangePasswordRequest, _poker_ChangePasswordResponse, _poker_ChangePasswordRequest__Output, _poker_ChangePasswordResponse__Output>
  changeStatusOfWorksheetReport: MethodDefinition<_poker_ChangeStatusOfWorksheetReportRequest, _poker_ChangeStatusOfWorksheetReportResponse, _poker_ChangeStatusOfWorksheetReportRequest__Output, _poker_ChangeStatusOfWorksheetReportResponse__Output>
  checkForUpdates: MethodDefinition<_poker_AccountUpdatesRequest, _poker_AccountUpdatesResult, _poker_AccountUpdatesRequest__Output, _poker_AccountUpdatesResult__Output>
  checkIsEmailAvailable: MethodDefinition<_poker_IsEmailAvailableRequest, _poker_IsEmailAvailableResponse, _poker_IsEmailAvailableRequest__Output, _poker_IsEmailAvailableResponse__Output>
  clearTournamentBuffer: MethodDefinition<_poker_BufferRequest, _poker_BufferResponse, _poker_BufferRequest__Output, _poker_BufferResponse__Output>
  clientAffiliateToggle: MethodDefinition<_poker_ClientAffiliateToggleRequest, _poker_ClientAffiliateToggleResponse, _poker_ClientAffiliateToggleRequest__Output, _poker_ClientAffiliateToggleResponse__Output>
  confirmTransferAmounts: MethodDefinition<_poker_ConfirmTransferAmountsRequest, _poker_ConfirmTransferAmountsResponse, _poker_ConfirmTransferAmountsRequest__Output, _poker_ConfirmTransferAmountsResponse__Output>
  createAdditionalPayoutBoost: MethodDefinition<_poker_CreateAdditionalPayoutRequest, _poker_CreateAdditionalPayoutResponse, _poker_CreateAdditionalPayoutRequest__Output, _poker_CreateAdditionalPayoutResponse__Output>
  createCashierAdjustment: MethodDefinition<_poker_CreateCashierAdjustmentRequest, _poker_CreateCashierAdjustmentResponse, _poker_CreateCashierAdjustmentRequest__Output, _poker_CreateCashierAdjustmentResponse__Output>
  createExcludedIdentity: MethodDefinition<_poker_CreateExcludedIdentityRequest, _poker_CreateExcludedIdentityResponse, _poker_CreateExcludedIdentityRequest__Output, _poker_CreateExcludedIdentityResponse__Output>
  createMultipleUsers: MethodDefinition<_poker_CreateMultipleUsersRequest, _poker_CreateMultipleUsersResult, _poker_CreateMultipleUsersRequest__Output, _poker_CreateMultipleUsersResult__Output>
  createPaymentMethod: MethodDefinition<_poker_MobilePaymentRequest, _poker_MobilePaymentResponse, _poker_MobilePaymentRequest__Output, _poker_MobilePaymentResponse__Output>
  createPlayerSpecificGameMatching: MethodDefinition<_poker_CreatePlayerSpecificGameMatchingRequest, _poker_CreatePlayerSpecificGameMatchingResponse, _poker_CreatePlayerSpecificGameMatchingRequest__Output, _poker_CreatePlayerSpecificGameMatchingResponse__Output>
  createTournamentReservationTimeDate: MethodDefinition<_poker_CreateTournamentReservationTimeRequest, _poker_CreateTournamentReservationTimeResponse, _poker_CreateTournamentReservationTimeRequest__Output, _poker_CreateTournamentReservationTimeResponse__Output>
  createTournamentTemplate: MethodDefinition<_poker_CreateTournamentTemplateRequest, _poker_CreateTournamentTemplateResponse, _poker_CreateTournamentTemplateRequest__Output, _poker_CreateTournamentTemplateResponse__Output>
  deleteClientEmail: MethodDefinition<_poker_DeleteClientEmailRequest, _poker_DeleteClientEmailResponse, _poker_DeleteClientEmailRequest__Output, _poker_DeleteClientEmailResponse__Output>
  deletePageExtensions: MethodDefinition<_poker_DeletePageExtensionRequest, _poker_DeletePageExtensionResponse, _poker_DeletePageExtensionRequest__Output, _poker_DeletePageExtensionResponse__Output>
  deletePaymentMethod: MethodDefinition<_poker_DeletePaymentMethodRequest, _poker_DeletePaymentMethodResponse, _poker_DeletePaymentMethodRequest__Output, _poker_DeletePaymentMethodResponse__Output>
  deletePlayerMailingAddress: MethodDefinition<_poker_PlayerMailingAddressRequest, _poker_PlayerMailingAddressStatusResponse, _poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressStatusResponse__Output>
  deletePrizePoolPayout: MethodDefinition<_poker_DeletePrizePoolStatusRequest, _poker_DeletePrizePoolStatusResponse, _poker_DeletePrizePoolStatusRequest__Output, _poker_DeletePrizePoolStatusResponse__Output>
  deleteTheme: MethodDefinition<_poker_ThemesRequest, _poker_ThemesResponse, _poker_ThemesRequest__Output, _poker_ThemesResponse__Output>
  deleteUiSettings: MethodDefinition<_poker_UiSettingsRequest, _poker_UiSettingsResponse, _poker_UiSettingsRequest__Output, _poker_UiSettingsResponse__Output>
  deleteUserGeoLocation: MethodDefinition<_poker_DeleteUserGeoLocationRequest, _poker_DeleteUSerGeoLocationResponse, _poker_DeleteUserGeoLocationRequest__Output, _poker_DeleteUSerGeoLocationResponse__Output>
  deleteWorksheetOrReport: MethodDefinition<_poker_DeleteWorksheetOrReportRequest, _poker_DeleteWorksheetOrReportResponse, _poker_DeleteWorksheetOrReportRequest__Output, _poker_DeleteWorksheetOrReportResponse__Output>
  disableWithdrawals: MethodDefinition<_poker_DisableWithdrawalRequest, _poker_DisableWithdrawalResponse, _poker_DisableWithdrawalRequest__Output, _poker_DisableWithdrawalResponse__Output>
  drawAddAction: MethodDefinition<_poker_DrawAddActionRequest, _poker_GetStatusResult, _poker_DrawAddActionRequest__Output, _poker_GetStatusResult__Output>
  drawReplaceAction: MethodDefinition<_poker_DrawReplaceActionRequest, _poker_GetStatusResult, _poker_DrawReplaceActionRequest__Output, _poker_GetStatusResult__Output>
  editTheme: MethodDefinition<_poker_EditThemesRequest, _poker_ThemesResponse, _poker_EditThemesRequest__Output, _poker_ThemesResponse__Output>
  enablePromoForAnyTournament: MethodDefinition<_poker_PromoRequest, _poker_PromoResponse, _poker_PromoRequest__Output, _poker_PromoResponse__Output>
  extractPageExtensions: MethodDefinition<_poker_ExtractPageExtensionRequest, _poker_ExtractPageExtensionResponse, _poker_ExtractPageExtensionRequest__Output, _poker_ExtractPageExtensionResponse__Output>
  fetchSecurityQuestions: MethodDefinition<_poker_FetchSecurityQuestionsRequest, _poker_FetchSecurityQuestionsResponse, _poker_FetchSecurityQuestionsRequest__Output, _poker_FetchSecurityQuestionsResponse__Output>
  getAccountStatements: MethodDefinition<_poker_AccountStatementsRequest, _poker_AccountStatementsResponse, _poker_AccountStatementsRequest__Output, _poker_AccountStatementsResponse__Output>
  getActiveJoinAnyTournaments: MethodDefinition<_poker_ActiveJoinAnyTournamentsRequest, _poker_ActiveJoinAnyTournamentsResult, _poker_ActiveJoinAnyTournamentsRequest__Output, _poker_ActiveJoinAnyTournamentsResult__Output>
  getActiveStats: MethodDefinition<_poker_ActiveStatsRequest, _poker_ActiveStatsResponse, _poker_ActiveStatsRequest__Output, _poker_ActiveStatsResponse__Output>
  getActiveUsers: MethodDefinition<_poker_ActiveUsersRequest, _poker_ActiveUsersResult, _poker_ActiveUsersRequest__Output, _poker_ActiveUsersResult__Output>
  getActiveUsersData: MethodDefinition<_poker_ActiveUsersDataRequest, _poker_ActiveUsersDataResponse, _poker_ActiveUsersDataRequest__Output, _poker_ActiveUsersDataResponse__Output>
  getAdditionalPayoutById: MethodDefinition<_poker_GetAdditionalPayoutByIdRequest, _poker_GetAdditionalPayoutByIdResponse, _poker_GetAdditionalPayoutByIdRequest__Output, _poker_GetAdditionalPayoutByIdResponse__Output>
  getAdditionalPayoutForTournament: MethodDefinition<_poker_GetAdditionalPayoutDetailRequest, _poker_GetAdditionalPayoutDetailResponse, _poker_GetAdditionalPayoutDetailRequest__Output, _poker_GetAdditionalPayoutDetailResponse__Output>
  getAdjustmentRequest: MethodDefinition<_poker_AdjustmentRequest, _poker_DataResponse, _poker_AdjustmentRequest__Output, _poker_DataResponse__Output>
  getAdminPagePermissions: MethodDefinition<_poker_GetPagePermissionsRequest, _poker_GetPagePermissionsResponse, _poker_GetPagePermissionsRequest__Output, _poker_GetPagePermissionsResponse__Output>
  getAdminRoleData: MethodDefinition<_poker_AdminRoleRequest, _poker_DataResponse, _poker_AdminRoleRequest__Output, _poker_DataResponse__Output>
  getAdminRoles: MethodDefinition<_poker_AdminUpdateRequest, _poker_DataResponse, _poker_AdminUpdateRequest__Output, _poker_DataResponse__Output>
  getAdmins: MethodDefinition<_poker_ActiveUsersRequest, _poker_DataResponse, _poker_ActiveUsersRequest__Output, _poker_DataResponse__Output>
  getAllBoostedAdditionalPayout: MethodDefinition<_poker_GetAllBoostedAdditionalPayoutRequest, _poker_GetAllBoostedAdditionalPayoutResponse, _poker_GetAllBoostedAdditionalPayoutRequest__Output, _poker_GetAllBoostedAdditionalPayoutResponse__Output>
  getAllClientEmail: MethodDefinition<_poker_GetAllClientEmailRequest, _poker_GetAllClientEmailResponse, _poker_GetAllClientEmailRequest__Output, _poker_GetAllClientEmailResponse__Output>
  getAllHandHistoryData: MethodDefinition<_poker_GetHandHistoryRequest, _poker_GetHandHistoryResponse, _poker_GetHandHistoryRequest__Output, _poker_GetHandHistoryResponse__Output>
  getAllUiSettings: MethodDefinition<_poker_UiSettingsRequest, _poker_UiSettingsResponse, _poker_UiSettingsRequest__Output, _poker_UiSettingsResponse__Output>
  getAmountInplay: MethodDefinition<_google_protobuf_Empty, _poker_FloatResponse, _google_protobuf_Empty__Output, _poker_FloatResponse__Output>
  getApiKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  getApnPushNotificationKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  getApprovedRequest: MethodDefinition<_poker_PendingDepositRequest, _poker_DataResponse, _poker_PendingDepositRequest__Output, _poker_DataResponse__Output>
  getBlacklistedClientsonGeofence: MethodDefinition<_poker_GeofenceClientsRequest, _poker_GeofenceClientsResponse, _poker_GeofenceClientsRequest__Output, _poker_GeofenceClientsResponse__Output>
  getBlacklistedUsersonGeofence: MethodDefinition<_poker_GeofenceUsersRequest, _poker_GeofenceUsersResponse, _poker_GeofenceUsersRequest__Output, _poker_GeofenceUsersResponse__Output>
  getBotList: MethodDefinition<_poker_ActiveUsersRequest, _poker_ActiveUsersResult, _poker_ActiveUsersRequest__Output, _poker_ActiveUsersResult__Output>
  getCancelTournamentList: MethodDefinition<_poker_GetCancelTournamentListRequest, _poker_GetCancelTournamentListResponse, _poker_GetCancelTournamentListRequest__Output, _poker_GetCancelTournamentListResponse__Output>
  getClientData: MethodDefinition<_poker_ClientRequest, _poker_ClientResponse, _poker_ClientRequest__Output, _poker_ClientResponse__Output>
  getClientEmail: MethodDefinition<_poker_GetClientEmailRequest, _poker_GetClientEmailResponse, _poker_GetClientEmailRequest__Output, _poker_GetClientEmailResponse__Output>
  getClientGroupTournamentImage: MethodDefinition<_poker_ClientGroupTournamentImageRequest, _poker_ClientTournamentImageResponse, _poker_ClientGroupTournamentImageRequest__Output, _poker_ClientTournamentImageResponse__Output>
  getClientToken: MethodDefinition<_poker_ClientTokenRequest, _poker_ClientTokenResponse, _poker_ClientTokenRequest__Output, _poker_ClientTokenResponse__Output>
  getClientTournamentImage: MethodDefinition<_poker_ClientTournamentImageRequest, _poker_ClientTournamentImageResponse, _poker_ClientTournamentImageRequest__Output, _poker_ClientTournamentImageResponse__Output>
  getClients: MethodDefinition<_poker_WhitelistedClientsRequest, _poker_WhitelistedClientsResult, _poker_WhitelistedClientsRequest__Output, _poker_WhitelistedClientsResult__Output>
  getComponentPermissionData: MethodDefinition<_poker_ComponentPermissionRequest, _poker_DataResponse, _poker_ComponentPermissionRequest__Output, _poker_DataResponse__Output>
  getCustomCss: MethodDefinition<_poker_CustomCssRequest, _poker_CustomCssResponse, _poker_CustomCssRequest__Output, _poker_CustomCssResponse__Output>
  getCustomerID: MethodDefinition<_poker_GetCustomerIDRequest, _poker_GetCustomerIDResponse, _poker_GetCustomerIDRequest__Output, _poker_GetCustomerIDResponse__Output>
  getDefaultPlayerMailingAddress: MethodDefinition<_poker_PlayerMailingAddressRequest, _poker_PlayerMailingAddressResponse, _poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressResponse__Output>
  getDepositsRequest: MethodDefinition<_poker_DepositsRequest, _poker_DataResponse, _poker_DepositsRequest__Output, _poker_DataResponse__Output>
  getDisabledWithdrawals: MethodDefinition<_poker_DisabledWithdrawalsRequest, _poker_DisabledWithdrawalsResponse, _poker_DisabledWithdrawalsRequest__Output, _poker_DisabledWithdrawalsResponse__Output>
  getDistinctPage: MethodDefinition<_poker_AdminPageRequest, _poker_DataResponse, _poker_AdminPageRequest__Output, _poker_DataResponse__Output>
  getDistinctRole: MethodDefinition<_poker_AdminRoleRequest, _poker_DataResponse, _poker_AdminRoleRequest__Output, _poker_DataResponse__Output>
  getDriversLicense: MethodDefinition<_poker_DriversLicenseRequest, _poker_DriversLicenseResponse, _poker_DriversLicenseRequest__Output, _poker_DriversLicenseResponse__Output>
  getDuplicateUserForDeviceId: MethodDefinition<_poker_DuplicateUserForDeviceIdRequest, _poker_DuplicateUserForDeviceIdResponse, _poker_DuplicateUserForDeviceIdRequest__Output, _poker_DuplicateUserForDeviceIdResponse__Output>
  getFailedBraintreeTransactions: MethodDefinition<_poker_FailedBraintreeTransactionsRequest, _poker_FailedBraintreeTransactionsResponse, _poker_FailedBraintreeTransactionsRequest__Output, _poker_FailedBraintreeTransactionsResponse__Output>
  getFailedReferralLogs: MethodDefinition<_poker_FailedReferralLogsRequest, _poker_FailedReferralLogsResponse, _poker_FailedReferralLogsRequest__Output, _poker_FailedReferralLogsResponse__Output>
  getFreePlayPromoUsers: MethodDefinition<_poker_GetFreePlayPromoUsersRequest, _poker_GetFreePlayPromoUsersResponse, _poker_GetFreePlayPromoUsersRequest__Output, _poker_GetFreePlayPromoUsersResponse__Output>
  getGamePlayStatusForUserPerTable: MethodDefinition<_poker_GamePlayStatusForUserPerTableRequest, _poker_GamePlayStatusForUserPerTableResponse, _poker_GamePlayStatusForUserPerTableRequest__Output, _poker_GamePlayStatusForUserPerTableResponse__Output>
  getGameplayHistories: MethodDefinition<_poker_GetGameplayHistoriesRequest, _poker_GetGameplayHistoriesResponse, _poker_GetGameplayHistoriesRequest__Output, _poker_GetGameplayHistoriesResponse__Output>
  getGeofenceData: MethodDefinition<_poker_GeofenceRequest, _poker_GeofenceResponse, _poker_GeofenceRequest__Output, _poker_GeofenceResponse__Output>
  getGeopoll: MethodDefinition<_poker_GeopollRequest, _poker_GeopollResponse, _poker_GeopollRequest__Output, _poker_GeopollResponse__Output>
  getGlobalSettings: MethodDefinition<_poker_GlobalSettingsRequest, _poker_GlobalSettingsResponse, _poker_GlobalSettingsRequest__Output, _poker_GlobalSettingsResponse__Output>
  getGroupedClientData: MethodDefinition<_poker_GroupedClientRequest, _poker_GroupedClientResponse, _poker_GroupedClientRequest__Output, _poker_GroupedClientResponse__Output>
  getHandHistoryData: MethodDefinition<_poker_GetHandHistoryRequest, _poker_GetHandHistoryResponse, _poker_GetHandHistoryRequest__Output, _poker_GetHandHistoryResponse__Output>
  getHandHistoryStat: MethodDefinition<_poker_GetHandHistoryRequest, _poker_GetHandHistoryResponse, _poker_GetHandHistoryRequest__Output, _poker_GetHandHistoryResponse__Output>
  getIgdpparPoolAdjustment: MethodDefinition<_poker_GetPoolAccountBalanceRequest, _poker_GetPoolAccountBalanceResponse, _poker_GetPoolAccountBalanceRequest__Output, _poker_GetPoolAccountBalanceResponse__Output>
  getJoinAnyTournamentStatus: MethodDefinition<_poker_JoinAnyTournamentStatusRequest, _poker_JoinAnyTournamentStatusResult, _poker_JoinAnyTournamentStatusRequest__Output, _poker_JoinAnyTournamentStatusResult__Output>
  getJoinAnyUsersList: MethodDefinition<_poker_JoinAnyUsersListRequest, _poker_JoinAnyUsersListResult, _poker_JoinAnyUsersListRequest__Output, _poker_JoinAnyUsersListResult__Output>
  getJoinrequestTracker: MethodDefinition<_poker_JoinRequestStatsRequest, _poker_JoinRequestStatsResponse, _poker_JoinRequestStatsRequest__Output, _poker_JoinRequestStatsResponse__Output>
  getLabelEditor: MethodDefinition<_poker_LabelEditorRequest, _poker_LabelEditorResponse, _poker_LabelEditorRequest__Output, _poker_LabelEditorResponse__Output>
  getLobbyTournamentTemplateList: MethodDefinition<_poker_GetLobbyTournamentTemplateListRequest, _poker_GetLobbyTournamentTemplateListResponse, _poker_GetLobbyTournamentTemplateListRequest__Output, _poker_GetLobbyTournamentTemplateListResponse__Output>
  getLobbyVisibleTournamentList: MethodDefinition<_poker_GetLobbyVisibleTournamentListRequest, _poker_GetLobbyVisibleTournamentListResponse, _poker_GetLobbyVisibleTournamentListRequest__Output, _poker_GetLobbyVisibleTournamentListResponse__Output>
  getNextTournament: MethodDefinition<_poker_NextTournamentRequest, _poker_NextTournamentResult, _poker_NextTournamentRequest__Output, _poker_NextTournamentResult__Output>
  getNotificationEmailLogs: MethodDefinition<_poker_NotificationEmailLogsRequest, _poker_NotificationEmailLogsResponse, _poker_NotificationEmailLogsRequest__Output, _poker_NotificationEmailLogsResponse__Output>
  getNotificationTemplates: MethodDefinition<_poker_GetNotificationTemplatesRequest, _poker_GetNotificationTemplatesResponse, _poker_GetNotificationTemplatesRequest__Output, _poker_GetNotificationTemplatesResponse__Output>
  getPageExtensions: MethodDefinition<_poker_GetPageExtensionsRequest, _poker_GetPageExtensionsResponse, _poker_GetPageExtensionsRequest__Output, _poker_GetPageExtensionsResponse__Output>
  getPasswordResetLink: MethodDefinition<_poker_GetPasswordResetLinkRequest, _poker_GetPasswordResetLinkResponse, _poker_GetPasswordResetLinkRequest__Output, _poker_GetPasswordResetLinkResponse__Output>
  getPayoutStructure: MethodDefinition<_poker_GetPayoutStructureRequest, _poker_GetPayoutStructureResponse, _poker_GetPayoutStructureRequest__Output, _poker_GetPayoutStructureResponse__Output>
  getPendingDepositsRequest: MethodDefinition<_poker_PendingDepositsRequest, _poker_DataResponse, _poker_PendingDepositsRequest__Output, _poker_DataResponse__Output>
  getPendingRequest: MethodDefinition<_poker_PendingDepositRequest, _poker_DataResponse, _poker_PendingDepositRequest__Output, _poker_DataResponse__Output>
  getPendingTransactions: MethodDefinition<_poker_GetPendingTransactionsRequest, _poker_GetPendingTransactionsResponse, _poker_GetPendingTransactionsRequest__Output, _poker_GetPendingTransactionsResponse__Output>
  getPlaceholderUser: MethodDefinition<_poker_ReservationBlackListedUserRequest, _poker_ReservationBlackListedUserResponse, _poker_ReservationBlackListedUserRequest__Output, _poker_ReservationBlackListedUserResponse__Output>
  getPlayerAccountBalance: MethodDefinition<_poker_PlayerAccountBalanceRequest, _poker_PlayerAccountBalanceResult, _poker_PlayerAccountBalanceRequest__Output, _poker_PlayerAccountBalanceResult__Output>
  getPlayerMailingAddress: MethodDefinition<_poker_PlayerMailingAddressRequest, _poker_PlayerMailingAddressResponse, _poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressResponse__Output>
  getPlayerMailingAddresses: MethodDefinition<_poker_PlayerMailingAddressRequest, _poker_PlayerMailingAddressesResponse, _poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressesResponse__Output>
  getPlayerSpecificGameMatching: MethodDefinition<_poker_GetPlayerSpecificGameMatchingRequest, _poker_GetPlayerSpecificGameMatchingResponse, _poker_GetPlayerSpecificGameMatchingRequest__Output, _poker_GetPlayerSpecificGameMatchingResponse__Output>
  getPlayerTournaments: MethodDefinition<_poker_PlayerTournamentRequest, _poker_GetTournamentsResponse, _poker_PlayerTournamentRequest__Output, _poker_GetTournamentsResponse__Output>
  getPoolAccountBalance: MethodDefinition<_poker_GetPoolAccountBalanceRequest, _poker_GetPoolAccountBalanceResponse, _poker_GetPoolAccountBalanceRequest__Output, _poker_GetPoolAccountBalanceResponse__Output>
  getPromoQualificationData: MethodDefinition<_poker_promoQualificationDataRequest, _poker_promoQualificationDataResponse, _poker_promoQualificationDataRequest__Output, _poker_promoQualificationDataResponse__Output>
  getPushNotificationKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  getRandomSecurityQuestion: MethodDefinition<_poker_FetchSecurityQuestionsRequest, _poker_FetchSecurityQuestionsResponse, _poker_FetchSecurityQuestionsRequest__Output, _poker_FetchSecurityQuestionsResponse__Output>
  getRecuringDeposit: MethodDefinition<_poker_GetRecuringDepositRequest, _poker_GetRecuringDepositResponse, _poker_GetRecuringDepositRequest__Output, _poker_GetRecuringDepositResponse__Output>
  getReportsForAffiliateCopy: MethodDefinition<_poker_GetReportsForAffiliateCopyRequest, _poker_GetReportsForAffiliateCopyResponse, _poker_GetReportsForAffiliateCopyRequest__Output, _poker_GetReportsForAffiliateCopyResponse__Output>
  getReservationBlackListedTournamentTemplates: MethodDefinition<_poker_ReservationBlackListedTournamentTemplatesRequest, _poker_ReservationBlackListedTournamentTemplatesResponse, _poker_ReservationBlackListedTournamentTemplatesRequest__Output, _poker_ReservationBlackListedTournamentTemplatesResponse__Output>
  getReservationDataList: MethodDefinition<_poker_SearchUserRequest, _poker_SearchUserResult, _poker_SearchUserRequest__Output, _poker_SearchUserResult__Output>
  getReservationTimeEditor: MethodDefinition<_poker_GetReservationTimeEditorRequest, _poker_GetReservationTimeEditorResponse, _poker_GetReservationTimeEditorRequest__Output, _poker_GetReservationTimeEditorResponse__Output>
  getRoyalHands: MethodDefinition<_poker_GetRoyalHandsRequest, _poker_GetRoyalHandsResponse, _poker_GetRoyalHandsRequest__Output, _poker_GetRoyalHandsResponse__Output>
  getSSNWhiteList: MethodDefinition<_poker_SSNWhitelistRequest, _poker_SSNWhitelistResponse, _poker_SSNWhitelistRequest__Output, _poker_SSNWhitelistResponse__Output>
  getSessionsRequest: MethodDefinition<_poker_SessionsRequest, _poker_DataResponse, _poker_SessionsRequest__Output, _poker_DataResponse__Output>
  getShuffledDeck: MethodDefinition<_poker_NewDeckRequest, _poker_NewDeckResponse, _poker_NewDeckRequest__Output, _poker_NewDeckResponse__Output>
  getSignupFailureLogs: MethodDefinition<_poker_SignupFailureErrorRequest, _poker_SignupFailureErrorResponse, _poker_SignupFailureErrorRequest__Output, _poker_SignupFailureErrorResponse__Output>
  getSingleHandHistoryStat: MethodDefinition<_poker_GetHandHistoryRequest, _poker_GetHandHistoryResponse, _poker_GetHandHistoryRequest__Output, _poker_GetHandHistoryResponse__Output>
  getTemplateEditor: MethodDefinition<_poker_TemplateEditorRequest, _poker_TemplateEditorResponse, _poker_TemplateEditorRequest__Output, _poker_TemplateEditorResponse__Output>
  getTemplateStats: MethodDefinition<_poker_TemplateStatsRequest, _poker_TemplateStatsResponse, _poker_TemplateStatsRequest__Output, _poker_TemplateStatsResponse__Output>
  getThemes: MethodDefinition<_poker_ThemesRequest, _poker_ThemesResponse, _poker_ThemesRequest__Output, _poker_ThemesResponse__Output>
  getTournamentAdditionalPayoutBoost: MethodDefinition<_poker_GetTournamentAdditionalPayoutBoostRequest, _poker_GetTournamentAdditionalPayoutBoostResponse, _poker_GetTournamentAdditionalPayoutBoostRequest__Output, _poker_GetTournamentAdditionalPayoutBoostResponse__Output>
  getTournamentAdditionalPayoutBoostsPerTemplate: MethodDefinition<_poker_GetTournamentAdditionalPayoutBoostRequest, _poker_GetTournamentAdditionalPayoutBoostResponse, _poker_GetTournamentAdditionalPayoutBoostRequest__Output, _poker_GetTournamentAdditionalPayoutBoostResponse__Output>
  getTournamentDetails: MethodDefinition<_poker_TournamentDetailsRequest, _poker_TournamentDetailsResponse, _poker_TournamentDetailsRequest__Output, _poker_TournamentDetailsResponse__Output>
  getTournamentReservationBlacklistSchedule: MethodDefinition<_poker_GetTournamentReservationBlacklistScheduleRequest, _poker_GetTournamentReservationBlacklistScheduleResponse, _poker_GetTournamentReservationBlacklistScheduleRequest__Output, _poker_GetTournamentReservationBlacklistScheduleResponse__Output>
  getTournamentReservationTime: MethodDefinition<_poker_GetTournamentReservationTimeRequest, _poker_GetTournamentReservationTimeResponse, _poker_GetTournamentReservationTimeRequest__Output, _poker_GetTournamentReservationTimeResponse__Output>
  getTournamentStatus: MethodDefinition<_poker_TournamentStatusRequest, _poker_TournamentStatusResponse, _poker_TournamentStatusRequest__Output, _poker_TournamentStatusResponse__Output>
  getTournamentTemplateBufferState: MethodDefinition<_poker_GetTournamentTemplateBufferStateRequest, _poker_GetTournamentTemplateBufferStateResponse, _poker_GetTournamentTemplateBufferStateRequest__Output, _poker_GetTournamentTemplateBufferStateResponse__Output>
  getTournamentTemplateDetail: MethodDefinition<_poker_GetTournamentTemplateDetailRequest, _poker_GetTournamentTemplateDetailResponse, _poker_GetTournamentTemplateDetailRequest__Output, _poker_GetTournamentTemplateDetailResponse__Output>
  getTournamentTemplateList: MethodDefinition<_poker_GetTournamentTemplateListRequest, _poker_GetTournamentTemplateListResponse, _poker_GetTournamentTemplateListRequest__Output, _poker_GetTournamentTemplateListResponse__Output>
  getTournaments: MethodDefinition<_poker_GetTournamentsRequest, _poker_GetTournamentsResponse, _poker_GetTournamentsRequest__Output, _poker_GetTournamentsResponse__Output>
  getTransactionIDsFromProcessingLogFees: MethodDefinition<_poker_TransactionIDsFromProcessingLogFeesRequest, _poker_TransactionIDsFromProcessingLogFeesResponse, _poker_TransactionIDsFromProcessingLogFeesRequest__Output, _poker_TransactionIDsFromProcessingLogFeesResponse__Output>
  getTransactionRequest: MethodDefinition<_poker_TransactionsRequest, _poker_DataResponse, _poker_TransactionsRequest__Output, _poker_DataResponse__Output>
  getUiSettings: MethodDefinition<_poker_UiSettingsRequest, _poker_UiSettingsResponse, _poker_UiSettingsRequest__Output, _poker_UiSettingsResponse__Output>
  getUserExportData: MethodDefinition<_poker_GetUserExportDataRequest, _poker_GetUserExportDataResponse, _poker_GetUserExportDataRequest__Output, _poker_GetUserExportDataResponse__Output>
  getUserInfo: MethodDefinition<_poker_GetUserInfoRequest, _poker_GetUserInfoResponse, _poker_GetUserInfoRequest__Output, _poker_GetUserInfoResponse__Output>
  getUserNoWithdrawlRestrictions: MethodDefinition<_poker_UserWithNoWithdrawalRestrictionsRequest, _poker_UserWithNoWithdrawalRestrictionsResponse, _poker_UserWithNoWithdrawalRestrictionsRequest__Output, _poker_UserWithNoWithdrawalRestrictionsResponse__Output>
  getUserSecurityQuestions: MethodDefinition<_poker_FetchSecurityQuestionsResponse, _poker_FetchSecurityQuestionsResponse, _poker_FetchSecurityQuestionsResponse__Output, _poker_FetchSecurityQuestionsResponse__Output>
  getUsersWithDeviceToken: MethodDefinition<_poker_GetDeviceTokenUsersRequest, _poker_GetDeviceTokenUsersResponse, _poker_GetDeviceTokenUsersRequest__Output, _poker_GetDeviceTokenUsersResponse__Output>
  getVaultedPayment: MethodDefinition<_poker_VaultedPaymentRequest, _poker_VaultedPaymentResponse, _poker_VaultedPaymentRequest__Output, _poker_VaultedPaymentResponse__Output>
  getWelcomeBackPromoLogs: MethodDefinition<_poker_WelcomeBackPromoLogsRequest, _poker_WelcomeBackPromoLogsResponse, _poker_WelcomeBackPromoLogsRequest__Output, _poker_WelcomeBackPromoLogsResponse__Output>
  getWhitelistedClientsonGeofence: MethodDefinition<_poker_GeofenceClientsRequest, _poker_GeofenceClientsResponse, _poker_GeofenceClientsRequest__Output, _poker_GeofenceClientsResponse__Output>
  getWhitelistedUserEmails: MethodDefinition<_poker_WhitelistedUsersRequest, _poker_WhitelistedUsersResult, _poker_WhitelistedUsersRequest__Output, _poker_WhitelistedUsersResult__Output>
  getWhitelistedUsers: MethodDefinition<_poker_WhitelistedUsersRequest, _poker_WhitelistedUsersResult, _poker_WhitelistedUsersRequest__Output, _poker_WhitelistedUsersResult__Output>
  getWhitelistedUsersonGeofence: MethodDefinition<_poker_GeofenceUsersRequest, _poker_GeofenceUsersResponse, _poker_GeofenceUsersRequest__Output, _poker_GeofenceUsersResponse__Output>
  getWithdrawalPending: MethodDefinition<_poker_GetWithdrawalPendingRequest, _poker_GetWithdrawalPendingResponse, _poker_GetWithdrawalPendingRequest__Output, _poker_GetWithdrawalPendingResponse__Output>
  getWithdrawalsRequest: MethodDefinition<_poker_WithdrawalsRequest, _poker_DataResponse, _poker_WithdrawalsRequest__Output, _poker_DataResponse__Output>
  getWorksheetsAndReports: MethodDefinition<_poker_GetWorksheetsAndReportsRequest, _poker_GetWorksheetsAndReportsResponse, _poker_GetWorksheetsAndReportsRequest__Output, _poker_GetWorksheetsAndReportsResponse__Output>
  groupClientData: MethodDefinition<_poker_GroupClientAddRequest, _poker_GroupClientAddResponse, _poker_GroupClientAddRequest__Output, _poker_GroupClientAddResponse__Output>
  isWithdrawAllowed: MethodDefinition<_poker_IsWithdrawAllowedRequest, _poker_IsWithdrawAllowedResponse, _poker_IsWithdrawAllowedRequest__Output, _poker_IsWithdrawAllowedResponse__Output>
  joinAnyTournament: MethodDefinition<_poker_JoinAnyTournamentRequest, _poker_JoinAnyTournamentResult, _poker_JoinAnyTournamentRequest__Output, _poker_JoinAnyTournamentResult__Output>
  joinAnyTournamentAdmin: MethodDefinition<_poker_JoinAnyTournamentAdminRequest, _poker_JoinAnyTournamentResult, _poker_JoinAnyTournamentAdminRequest__Output, _poker_JoinAnyTournamentResult__Output>
  joinTournament: MethodDefinition<_poker_JoinTournamentRequest, _poker_JoinTournamentResponse, _poker_JoinTournamentRequest__Output, _poker_JoinTournamentResponse__Output>
  joinTournamentTempalte: MethodDefinition<_poker_JoinTournamentTemplateRequest, _poker_JoinTournamentTemplateResponse, _poker_JoinTournamentTemplateRequest__Output, _poker_JoinTournamentTemplateResponse__Output>
  keyTransactionPayout: MethodDefinition<_poker_KeyTransactionPayouRequest, _poker_KeyTransactionPayouResponse, _poker_KeyTransactionPayouRequest__Output, _poker_KeyTransactionPayouResponse__Output>
  launchTournament: MethodDefinition<_poker_LaunchTournamentRequest, _poker_LaunchTournamentResponse, _poker_LaunchTournamentRequest__Output, _poker_LaunchTournamentResponse__Output>
  makeDeposit: MethodDefinition<_poker_MakeDepositRequest, _poker_MakeDepositResponse, _poker_MakeDepositRequest__Output, _poker_MakeDepositResponse__Output>
  makeTransaction: MethodDefinition<_poker_MakeTransactionRequest, _poker_MakeTransactionResponse, _poker_MakeTransactionRequest__Output, _poker_MakeTransactionResponse__Output>
  makeWithdrawal: MethodDefinition<_poker_MakeWithdrawalRequest, _poker_MakeWithdrawalResponse, _poker_MakeWithdrawalRequest__Output, _poker_MakeWithdrawalResponse__Output>
  manualAdjustmentByBatch: MethodDefinition<_poker_ManualAdjustmentByBatchRequest, _poker_ManualAdjustmentByBatchResponse, _poker_ManualAdjustmentByBatchRequest__Output, _poker_ManualAdjustmentByBatchResponse__Output>
  modifyPlayerSpecificGameMatching: MethodDefinition<_poker_ModifyPlayerSpecificGameMatchingRequest, _poker_ModifyPlayerSpecificGameMatchingResponse, _poker_ModifyPlayerSpecificGameMatchingRequest__Output, _poker_ModifyPlayerSpecificGameMatchingResponse__Output>
  mountHashes: MethodDefinition<_poker_MountHashesRequest, _poker_MountHashesResponse, _poker_MountHashesRequest__Output, _poker_MountHashesResponse__Output>
  orderLobbyTournamentsInMostPlayedOrder: MethodDefinition<_poker_OrderLobbyTournamentsInMostPlayedOrderRequest, _poker_OrderLobbyTournamentsInMostPlayedOrderResponse, _poker_OrderLobbyTournamentsInMostPlayedOrderRequest__Output, _poker_OrderLobbyTournamentsInMostPlayedOrderResponse__Output>
  placeholderUserStatusToggle: MethodDefinition<_poker_ReservationBlackListToggleRequest, _poker_ReservationBlackListToggleResponse, _poker_ReservationBlackListToggleRequest__Output, _poker_ReservationBlackListToggleResponse__Output>
  purgeGeopoll: MethodDefinition<_poker_PurgeGeopollRequest, _poker_PurgeGeopollResponse, _poker_PurgeGeopollRequest__Output, _poker_PurgeGeopollResponse__Output>
  rankHands: MethodDefinition<_poker_RankHandsRequest, _poker_RankHandsResult, _poker_RankHandsRequest__Output, _poker_RankHandsResult__Output>
  referalStat: MethodDefinition<_poker_ReferalStatRequest, _poker_ReferalStatResponse, _poker_ReferalStatRequest__Output, _poker_ReferalStatResponse__Output>
  referals: MethodDefinition<_poker_ReferalsRequest, _poker_ReferalsResponse, _poker_ReferalsRequest__Output, _poker_ReferalsResponse__Output>
  removeAdminData: MethodDefinition<_poker_AdminRemoveRequest, _poker_StatusResponse, _poker_AdminRemoveRequest__Output, _poker_StatusResponse__Output>
  removeAdminPagePermissions: MethodDefinition<_poker_RemoveAdminPagePermissionsRequest, _poker_RemoveAdminPagePermissionsResponse, _poker_RemoveAdminPagePermissionsRequest__Output, _poker_RemoveAdminPagePermissionsResponse__Output>
  removeAdminRoleData: MethodDefinition<_poker_AdminRoleRemoveRequest, _poker_StatusResponse, _poker_AdminRoleRemoveRequest__Output, _poker_StatusResponse__Output>
  removeApiKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  removeClientData: MethodDefinition<_poker_ClientRemoveRequest, _poker_ClientRemoveResponse, _poker_ClientRemoveRequest__Output, _poker_ClientRemoveResponse__Output>
  removeComponentPermissionData: MethodDefinition<_poker_ComponentPermissionRemoveRequest, _poker_StatusResponse, _poker_ComponentPermissionRemoveRequest__Output, _poker_StatusResponse__Output>
  removeGeofenceData: MethodDefinition<_poker_GeofenceRemoveRequest, _poker_GeofenceRemoveResponse, _poker_GeofenceRemoveRequest__Output, _poker_GeofenceRemoveResponse__Output>
  removeGroupedClientData: MethodDefinition<_poker_GroupedClientRemoveRequest, _poker_GroupedClientRemoveResponse, _poker_GroupedClientRemoveRequest__Output, _poker_GroupedClientRemoveResponse__Output>
  removeNotificationTemplates: MethodDefinition<_poker_RemoveNotificationTemplatesRequest, _poker_RemoveNotificationTemplatesResponse, _poker_RemoveNotificationTemplatesRequest__Output, _poker_RemoveNotificationTemplatesResponse__Output>
  removePushNotificationKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  removeTournament: MethodDefinition<_poker_GetTournamentTemplateDetailRequest, _poker_StatusResponse, _poker_GetTournamentTemplateDetailRequest__Output, _poker_StatusResponse__Output>
  removeTournamentReservationTime: MethodDefinition<_poker_RemoveTournamentReservationTimeRequest, _poker_RemoveTournamentReservationTimeResponse, _poker_RemoveTournamentReservationTimeRequest__Output, _poker_RemoveTournamentReservationTimeResponse__Output>
  removeTournamentTemplateFromLobby: MethodDefinition<_poker_RemoveTournamentTemplateFromLobbyRequest, _poker_RemoveTournamentTemplateFromLobbyResponse, _poker_RemoveTournamentTemplateFromLobbyRequest__Output, _poker_RemoveTournamentTemplateFromLobbyResponse__Output>
  removeUserFromReservationQueue: MethodDefinition<_poker_ReservationBlackListToggleRequest, _poker_ReservationBlackListToggleResponse, _poker_ReservationBlackListToggleRequest__Output, _poker_ReservationBlackListToggleResponse__Output>
  removeWhitelistUser: MethodDefinition<_poker_WhitelistUserRequest, _poker_WhitelistUserResult, _poker_WhitelistUserRequest__Output, _poker_WhitelistUserResult__Output>
  removeWhitelistedUserEmail: MethodDefinition<_poker_WhitelistUserRequest, _poker_WhitelistUserResult, _poker_WhitelistUserRequest__Output, _poker_WhitelistUserResult__Output>
  removeapnPushNotificationKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  reservationBlackListToggle: MethodDefinition<_poker_ReservationBlackListToggleRequest, _poker_ReservationBlackListToggleResponse, _poker_ReservationBlackListToggleRequest__Output, _poker_ReservationBlackListToggleResponse__Output>
  reservationBlackListedUser: MethodDefinition<_poker_ReservationBlackListedUserRequest, _poker_ReservationBlackListedUserResponse, _poker_ReservationBlackListedUserRequest__Output, _poker_ReservationBlackListedUserResponse__Output>
  resetApiKey: MethodDefinition<_poker_ApiKeyRequest, _poker_ApiKeyResponse, _poker_ApiKeyRequest__Output, _poker_ApiKeyResponse__Output>
  resetPassword: MethodDefinition<_poker_ResetPasswordRequest, _poker_ResetPasswordResponse, _poker_ResetPasswordRequest__Output, _poker_ResetPasswordResponse__Output>
  searchAdjustmentUsersByUsername: MethodDefinition<_poker_SearchUserRequest, _poker_SearchUserResult, _poker_SearchUserRequest__Output, _poker_SearchUserResult__Output>
  searchExcludedUser: MethodDefinition<_poker_SearchExcludedUserRequest, _poker_SearchExcludedUserResult, _poker_SearchExcludedUserRequest__Output, _poker_SearchExcludedUserResult__Output>
  searchPlaceholderAdjustments: MethodDefinition<_poker_SearchUserRequest, _poker_SearchUserResult, _poker_SearchUserRequest__Output, _poker_SearchUserResult__Output>
  searchPlaceholderPlayerByUsername: MethodDefinition<_poker_SearchUserRequest, _poker_SearchUserResult, _poker_SearchUserRequest__Output, _poker_SearchUserResult__Output>
  searchReservationBlackListByUsername: MethodDefinition<_poker_SearchUserRequest, _poker_SearchUserResult, _poker_SearchUserRequest__Output, _poker_SearchUserResult__Output>
  searchReservationQueueUsers: MethodDefinition<_poker_SearchUserRequest, _poker_SearchUserResult, _poker_SearchUserRequest__Output, _poker_SearchUserResult__Output>
  searchSignUpLogs: MethodDefinition<_poker_SignupFailureErrorRequest, _poker_SignupFailureErrorResponse, _poker_SignupFailureErrorRequest__Output, _poker_SignupFailureErrorResponse__Output>
  searchSuspendedDeviceByUserName: MethodDefinition<_poker_SearchSuspendedDeviceRequest, _poker_SearchSuspendedDeviceResult, _poker_SearchSuspendedDeviceRequest__Output, _poker_SearchSuspendedDeviceResult__Output>
  searchUserByUsername: MethodDefinition<_poker_SearchUserRequest, _poker_SearchUserResult, _poker_SearchUserRequest__Output, _poker_SearchUserResult__Output>
  sendEmailToMultipleUser: MethodDefinition<_poker_MultipleEmailSendRequest, _poker_MultipleEmailSendResponse, _poker_MultipleEmailSendRequest__Output, _poker_MultipleEmailSendResponse__Output>
  sendGeolocationData: MethodDefinition<_poker_GeolocationRequest, _poker_GeolocationResult, _poker_GeolocationRequest__Output, _poker_GeolocationResult__Output>
  sendPushNotification: MethodDefinition<_poker_SendPushNotificationRequest, _poker_SendPushotificationResponse, _poker_SendPushNotificationRequest__Output, _poker_SendPushotificationResponse__Output>
  setBulkFreePlayAdjustment: MethodDefinition<_poker_SetBulkFreePlayAdjustmentRequest, _poker_SetBulkFreePlayAdjustmentResponse, _poker_SetBulkFreePlayAdjustmentRequest__Output, _poker_SetBulkFreePlayAdjustmentResponse__Output>
  setDefaultPaymentMethod: MethodDefinition<_poker_SetDefaultPaymentMethodRequest, _poker_SetDefaultPaymentMethodResponse, _poker_SetDefaultPaymentMethodRequest__Output, _poker_SetDefaultPaymentMethodResponse__Output>
  setDefaultPlayerMailingAddress: MethodDefinition<_poker_PlayerMailingAddressRequest, _poker_PlayerMailingAddressStatusResponse, _poker_PlayerMailingAddressRequest__Output, _poker_PlayerMailingAddressStatusResponse__Output>
  setGeofenceClientGlobalRule: MethodDefinition<_poker_GeofenceClientGlobalRuleRequest, _poker_GeofenceClientGlobalRuleResponse, _poker_GeofenceClientGlobalRuleRequest__Output, _poker_GeofenceClientGlobalRuleResponse__Output>
  setGeofenceDeviceRule: MethodDefinition<_poker_GeofenceDeviceRuleRequest, _poker_GeofenceDeviceRuleResponse, _poker_GeofenceDeviceRuleRequest__Output, _poker_GeofenceDeviceRuleResponse__Output>
  setGeofenceGlobalRule: MethodDefinition<_poker_GeofenceGlobalRuleRequest, _poker_GeofenceGlobalRuleResponse, _poker_GeofenceGlobalRuleRequest__Output, _poker_GeofenceGlobalRuleResponse__Output>
  setGlobalSettings: MethodDefinition<_poker_GlobalSettingsRequest, _poker_GlobalSettingsResponse, _poker_GlobalSettingsRequest__Output, _poker_GlobalSettingsResponse__Output>
  setLabelEditor: MethodDefinition<_poker_LabelEditorRequest, _poker_LabelEditorResponse, _poker_LabelEditorRequest__Output, _poker_LabelEditorResponse__Output>
  setPrizeAsRevealed: MethodDefinition<_poker_PrizeRevealRequest, _poker_PrizeRevealResponse, _poker_PrizeRevealRequest__Output, _poker_PrizeRevealResponse__Output>
  setReservationTimeEditor: MethodDefinition<_poker_SetReservationTimeEditorRequest, _poker_SetReservationTimeEditorResponse, _poker_SetReservationTimeEditorRequest__Output, _poker_SetReservationTimeEditorResponse__Output>
  setTemplateEditor: MethodDefinition<_poker_TemplateEditorRequest, _poker_TemplateEditorResponse, _poker_TemplateEditorRequest__Output, _poker_TemplateEditorResponse__Output>
  setTheme: MethodDefinition<_poker_ThemesRequest, _poker_ThemesResponse, _poker_ThemesRequest__Output, _poker_ThemesResponse__Output>
  setTournamentAdditionalPayoutBoost: MethodDefinition<_poker_SetTournamentAdditionalPayoutBoostRequest, _poker_SetTournamentAdditionalPayoutBoostResponse, _poker_SetTournamentAdditionalPayoutBoostRequest__Output, _poker_SetTournamentAdditionalPayoutBoostResponse__Output>
  setTournamentReservationTime: MethodDefinition<_poker_SetTournamentReservationTimeRequest, _poker_SetTournamentReservationTimeResponse, _poker_SetTournamentReservationTimeRequest__Output, _poker_SetTournamentReservationTimeResponse__Output>
  setUiSettings: MethodDefinition<_poker_AllUiSettingsRequest, _poker_UiSettingsResponse, _poker_AllUiSettingsRequest__Output, _poker_UiSettingsResponse__Output>
  simulateGames: MethodDefinition<_poker_SimulateGamesRequest, _poker_StatusResponse, _poker_SimulateGamesRequest__Output, _poker_StatusResponse__Output>
  startTournamentTableInstance: MethodDefinition<_poker_StartTournamentTableInstanceRequest, _poker_StartTournamentTableInstanceResponse, _poker_StartTournamentTableInstanceRequest__Output, _poker_StartTournamentTableInstanceResponse__Output>
  suspendDeviceIdManually: MethodDefinition<_poker_SearchSuspendedDeviceRequest, _poker_SearchSuspendedDeviceResult, _poker_SearchSuspendedDeviceRequest__Output, _poker_SearchSuspendedDeviceResult__Output>
  testCompareHandsWild: MethodDefinition<_poker_CompareWildHandRequest, _poker_WildHandResponse, _poker_CompareWildHandRequest__Output, _poker_WildHandResponse__Output>
  testHandsWild: MethodDefinition<_poker_WildHandRequest, _poker_WildHandResponse, _poker_WildHandRequest__Output, _poker_WildHandResponse__Output>
  toggleRecuringDeposit: MethodDefinition<_poker_ToggleRecuringDepositRequest, _poker_ToggleRecuringDepositResponse, _poker_ToggleRecuringDepositRequest__Output, _poker_ToggleRecuringDepositResponse__Output>
  tournamentPayoutStructure: MethodDefinition<_poker_TournamentDetailsRequest, _poker_TournamentPayoutStructureResponse, _poker_TournamentDetailsRequest__Output, _poker_TournamentPayoutStructureResponse__Output>
  unregisterAnyTournament: MethodDefinition<_poker_UnregisterAnyTournamentRequest, _poker_UnregisterAnyTournamentResult, _poker_UnregisterAnyTournamentRequest__Output, _poker_UnregisterAnyTournamentResult__Output>
  unregisterTournament: MethodDefinition<_poker_UnregisterTournamentRequest, _poker_UnregisterTournamentResponse, _poker_UnregisterTournamentRequest__Output, _poker_UnregisterTournamentResponse__Output>
  unsubscribeFromTournamentTemplateBuffer: MethodDefinition<_poker_UnsubscribeFromTournamentTemplateBufferRequest, _poker_UnsubscribeFromTournamentTemplateBufferResponse, _poker_UnsubscribeFromTournamentTemplateBufferRequest__Output, _poker_UnsubscribeFromTournamentTemplateBufferResponse__Output>
  unsuspendUserDevice: MethodDefinition<_poker_SearchSuspendedDeviceRequest, _poker_SearchSuspendedDeviceResult, _poker_SearchSuspendedDeviceRequest__Output, _poker_SearchSuspendedDeviceResult__Output>
  updateAdminData: MethodDefinition<_poker_AdminUpdateRequest, _poker_StatusResponse, _poker_AdminUpdateRequest__Output, _poker_StatusResponse__Output>
  updateAdminRoleData: MethodDefinition<_poker_AdminRoleUpdateRequest, _poker_StatusResponse, _poker_AdminRoleUpdateRequest__Output, _poker_StatusResponse__Output>
  updateBlockedUserReservationDelay: MethodDefinition<_poker_UpdateBlockedUserReservationDelayRequest, _poker_UpdateBlockedUserReservationDelayResponse, _poker_UpdateBlockedUserReservationDelayRequest__Output, _poker_UpdateBlockedUserReservationDelayResponse__Output>
  updateBoostedAdditionalPayout: MethodDefinition<_poker_UpdateBoostedAdditionalPayoutRequest, _poker_UpdateBoostedAdditionalPayoutResponse, _poker_UpdateBoostedAdditionalPayoutRequest__Output, _poker_UpdateBoostedAdditionalPayoutResponse__Output>
  updateClientData: MethodDefinition<_poker_ClientUpdateRequest, _poker_ClientUpdateResponse, _poker_ClientUpdateRequest__Output, _poker_ClientUpdateResponse__Output>
  updateClientEmail: MethodDefinition<_poker_UpdateClientEmailRequest, _poker_UpdateClientEmailResponse, _poker_UpdateClientEmailRequest__Output, _poker_UpdateClientEmailResponse__Output>
  updateClientForAffiliateData: MethodDefinition<_poker_UpdateClientForAffiliateRequest, _poker_UpdateClientForAffiliateResponse, _poker_UpdateClientForAffiliateRequest__Output, _poker_UpdateClientForAffiliateResponse__Output>
  updateClientGroupForAffiliateData: MethodDefinition<_poker_UpdateClientGroupForAffiliateRequest, _poker_UpdateClientGroupForAffiliateResponse, _poker_UpdateClientGroupForAffiliateRequest__Output, _poker_UpdateClientGroupForAffiliateResponse__Output>
  updateComponentPermissionData: MethodDefinition<_poker_ComponentPermissionUpdateRequest, _poker_StatusResponse, _poker_ComponentPermissionUpdateRequest__Output, _poker_StatusResponse__Output>
  updateCustomCss: MethodDefinition<_poker_CustomCssRequest, _poker_CustomCssResponse, _poker_CustomCssRequest__Output, _poker_CustomCssResponse__Output>
  updateFreePlayPromoUsers: MethodDefinition<_poker_UpdateFreePlayPromoUsersRequest, _poker_UpdateFreePlayPromoUsersResponse, _poker_UpdateFreePlayPromoUsersRequest__Output, _poker_UpdateFreePlayPromoUsersResponse__Output>
  updateGeofenceData: MethodDefinition<_poker_GeofenceUpdateRequest, _poker_GeofenceUpdateResponse, _poker_GeofenceUpdateRequest__Output, _poker_GeofenceUpdateResponse__Output>
  updateGroupedClientData: MethodDefinition<_poker_GroupedClientUpdateRequest, _poker_GroupedClientUpdateResponse, _poker_GroupedClientUpdateRequest__Output, _poker_GroupedClientUpdateResponse__Output>
  updateIgdpparPoolAdjustment: MethodDefinition<_poker_UpdatePoolAccountBalanceRequest, _poker_UpdateAccountPoolBalanceResponse, _poker_UpdatePoolAccountBalanceRequest__Output, _poker_UpdateAccountPoolBalanceResponse__Output>
  updateLobbyVisibleTournamentOrder: MethodDefinition<_poker_UpdateLobbyVisibleTournamentOrderRequest, _poker_UpdateLobbyVisibleTournamentOrderResponse, _poker_UpdateLobbyVisibleTournamentOrderRequest__Output, _poker_UpdateLobbyVisibleTournamentOrderResponse__Output>
  updateNotificationTemplates: MethodDefinition<_poker_UpdateNotificationTemplatesRequest, _poker_UpdateNotificationTemplatesResponse, _poker_UpdateNotificationTemplatesRequest__Output, _poker_UpdateNotificationTemplatesResponse__Output>
  updatePaymentMethod: MethodDefinition<_poker_UpdatePaymentMethodRequest, _poker_UpdatePaymentMethodResponse, _poker_UpdatePaymentMethodRequest__Output, _poker_UpdatePaymentMethodResponse__Output>
  updatePlayerAccountBalance: MethodDefinition<_poker_UpdateAccountBalanceRequest, _poker_UpdateAccountBalanceResponse, _poker_UpdateAccountBalanceRequest__Output, _poker_UpdateAccountBalanceResponse__Output>
  updatePlayerMailingAddress: MethodDefinition<_poker_PlayerMailingAddressUpdateRequest, _poker_PlayerMailingAddressStatusResponse, _poker_PlayerMailingAddressUpdateRequest__Output, _poker_PlayerMailingAddressStatusResponse__Output>
  updatePoolAccountBalance: MethodDefinition<_poker_UpdatePoolAccountBalanceRequest, _poker_UpdateAccountPoolBalanceResponse, _poker_UpdatePoolAccountBalanceRequest__Output, _poker_UpdateAccountPoolBalanceResponse__Output>
  updateRecuringDeposit: MethodDefinition<_poker_UpdateRecuringDepositRequest, _poker_UpdateRecuringDepositResponse, _poker_UpdateRecuringDepositRequest__Output, _poker_UpdateRecuringDepositResponse__Output>
  updateReportsForAffiliateCopy: MethodDefinition<_poker_UpdateReportsForAffiliateCopyRequest, _poker_UpdateReportsForAffiliateCopyResponse, _poker_UpdateReportsForAffiliateCopyRequest__Output, _poker_UpdateReportsForAffiliateCopyResponse__Output>
  updateReservationBlackListedTournamentTemplates: MethodDefinition<_poker_UpdateReservationBlackListedTournamentTemplatesRequest, _poker_UpdateReservationBlackListedTournamentTemplatesResponse, _poker_UpdateReservationBlackListedTournamentTemplatesRequest__Output, _poker_UpdateReservationBlackListedTournamentTemplatesResponse__Output>
  updateSSNWhiteList: MethodDefinition<_poker_UpdateSSNWhitelistRequest, _poker_UpdateSSNWhitelistResponse, _poker_UpdateSSNWhitelistRequest__Output, _poker_UpdateSSNWhitelistResponse__Output>
  updateSecurityQuestions: MethodDefinition<_poker_UpdateSecurityQuestionsRequest, _poker_UpdateSecurityQuestionsResponse, _poker_UpdateSecurityQuestionsRequest__Output, _poker_UpdateSecurityQuestionsResponse__Output>
  updateTournament: MethodDefinition<_poker_UpdateTournamentTemplateRequest, _poker_StatusResponse, _poker_UpdateTournamentTemplateRequest__Output, _poker_StatusResponse__Output>
  updateTournamentReservationBlacklistSchedule: MethodDefinition<_poker_UpdateTournamentReservationBlacklistScheduleRequest, _poker_UpdateTournamentReservationBlacklistScheduleResponse, _poker_UpdateTournamentReservationBlacklistScheduleRequest__Output, _poker_UpdateTournamentReservationBlacklistScheduleResponse__Output>
  updateUserInfo: MethodDefinition<_poker_UpdateUserInfoRequest, _poker_UpdateUserInfoResponse, _poker_UpdateUserInfoRequest__Output, _poker_UpdateUserInfoResponse__Output>
  updateUserProfileInfo: MethodDefinition<_poker_UpdateUserProfileInfoRequest, _poker_UpdateUserProfileInfoResponse, _poker_UpdateUserProfileInfoRequest__Output, _poker_UpdateUserProfileInfoResponse__Output>
  uploadClientGroupTournamentImage: MethodDefinition<_poker_ClientGroupTournamentImageRequest, _poker_ClientTournamentImageResponse, _poker_ClientGroupTournamentImageRequest__Output, _poker_ClientTournamentImageResponse__Output>
  uploadClientLogo: MethodDefinition<_poker_ClientLogoRequest, _poker_ClientLogoResponse, _poker_ClientLogoRequest__Output, _poker_ClientLogoResponse__Output>
  uploadClientTournamentImage: MethodDefinition<_poker_ClientTournamentImageRequest, _poker_ClientTournamentImageResponse, _poker_ClientTournamentImageRequest__Output, _poker_ClientTournamentImageResponse__Output>
  uploadDriverLicense: MethodDefinition<_poker_DriverLicenseImageRequest, _poker_DriverLicenseImageResponse, _poker_DriverLicenseImageRequest__Output, _poker_DriverLicenseImageResponse__Output>
  uploadPageExtension: MethodDefinition<_poker_UploadPageExtensionRequest, _poker_UploadPageExtensionResponse, _poker_UploadPageExtensionRequest__Output, _poker_UploadPageExtensionResponse__Output>
  uploadToS3: MethodDefinition<_poker_UploadToS3Request, _poker_UploadToS3Response, _poker_UploadToS3Request__Output, _poker_UploadToS3Response__Output>
  uploadTournamentImage: MethodDefinition<_poker_ImageRequest, _poker_ImageResponse, _poker_ImageRequest__Output, _poker_ImageResponse__Output>
  uploadWorksheetReport: MethodDefinition<_poker_UploadWorksheetReportRequest, _poker_UploadWorksheetReportResponse, _poker_UploadWorksheetReportRequest__Output, _poker_UploadWorksheetReportResponse__Output>
  validateExperian: MethodDefinition<_poker_SignupRequest, _poker_SignupResult, _poker_SignupRequest__Output, _poker_SignupResult__Output>
  validateSecurityQuestionsForLogin: MethodDefinition<_poker_ValidateSecurityQuestionsRequest, _poker_ValidateSecurityQuestionsResponse, _poker_ValidateSecurityQuestionsRequest__Output, _poker_ValidateSecurityQuestionsResponse__Output>
  vaultPaymentMethod: MethodDefinition<_poker_VaultPaymentMethodRequest, _poker_VaultPaymentMethodResponse, _poker_VaultPaymentMethodRequest__Output, _poker_VaultPaymentMethodResponse__Output>
  verifySSNLastFourDigits: MethodDefinition<_poker_VerifySSNLastFourRequest, _poker_VerifySSNLastFourResponse, _poker_VerifySSNLastFourRequest__Output, _poker_VerifySSNLastFourResponse__Output>
  verifyUserPassword: MethodDefinition<_poker_VerifyUserPasswordRequest, _poker_VerifyUserPasswordResponse, _poker_VerifyUserPasswordRequest__Output, _poker_VerifyUserPasswordResponse__Output>
  verifyUserSSNAgain: MethodDefinition<_poker_VerifyUsersFirstFiveSSNDigitRequest, _poker_VerifyUsersFirstFiveSSNDigitResponse, _poker_VerifyUsersFirstFiveSSNDigitRequest__Output, _poker_VerifyUsersFirstFiveSSNDigitResponse__Output>
  whitelistClientsOnGeofence: MethodDefinition<_poker_GeofenceWhitelistRequest, _poker_GeofenceWhitelistResponse, _poker_GeofenceWhitelistRequest__Output, _poker_GeofenceWhitelistResponse__Output>
  whitelistUser: MethodDefinition<_poker_WhitelistUserRequest, _poker_WhitelistUserResult, _poker_WhitelistUserRequest__Output, _poker_WhitelistUserResult__Output>
  whitelistUserEmail: MethodDefinition<_poker_WhitelistUserRequest, _poker_WhitelistUserResult, _poker_WhitelistUserRequest__Output, _poker_WhitelistUserResult__Output>
  whitelistUsersOnGeofence: MethodDefinition<_poker_GeofenceWhitelistRequest, _poker_GeofenceWhitelistResponse, _poker_GeofenceWhitelistRequest__Output, _poker_GeofenceWhitelistResponse__Output>
  withdrawCheckByMail: MethodDefinition<_poker_CheckWithdrawalRequest, _poker_CheckWithdrawalResponse, _poker_CheckWithdrawalRequest__Output, _poker_CheckWithdrawalResponse__Output>
}
