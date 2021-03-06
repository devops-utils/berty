import * as api from '@berty-tech/api'
import { PayloadAction, CaseReducer } from '@reduxjs/toolkit'

export type Events<State> = {
	undefined: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {}
		}>
	>
	groupMemberDeviceAdded: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// GroupMemberDeviceAdded seems event of type GroupAddMemberDevice
				memberPk: Uint8Array
				devicePk: Uint8Array
				memberSig: Uint8Array
			}
		}>
	>
	groupDeviceSecretAdded: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// GroupDeviceSecretAdded seems event of type GroupAddDeviceSecret
				devicePk: Uint8Array
				destMemberPk: Uint8Array
				payload: Uint8Array
			}
		}>
	>
	accountGroupJoined: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountGroupJoined seems event of type AccountGroupJoined
				devicePk: Uint8Array
				group: api.berty.types.v1.IGroup
			}
		}>
	>
	accountGroupLeft: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountGroupLeft seems event of type AccountGroupLeft
				devicePk: Uint8Array
				groupPk: Uint8Array
			}
		}>
	>
	accountContactRequestDisabled: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactRequestDisabled seems event of type AccountContactRequestDisabled
				devicePk: Uint8Array
			}
		}>
	>
	accountContactRequestEnabled: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactRequestEnabled seems event of type AccountContactRequestEnabled
				devicePk: Uint8Array
			}
		}>
	>
	accountContactRequestReferenceReset: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactRequestReferenceReset seems event of type AccountContactRequestReferenceReset
				devicePk: Uint8Array
				publicRendezvousSeed: Uint8Array
			}
		}>
	>
	accountContactRequestOutgoingEnqueued: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactRequestOutgoingEnqueued seems event of type AccountContactRequestEnqueued
				devicePk: Uint8Array
				groupPk: Uint8Array
				contact: api.berty.types.v1.IShareableContact
				ownMetadata: Uint8Array
			}
		}>
	>
	accountContactRequestOutgoingSent: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactRequestOutgoingSent seems event of type AccountContactRequestSent
				devicePk: Uint8Array
				contactPk: Uint8Array
			}
		}>
	>
	accountContactRequestIncomingReceived: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactRequestIncomingReceived seems event of type AccountContactRequestReceived
				devicePk: Uint8Array
				contactPk: Uint8Array
				contactRendezvousSeed: Uint8Array
				contactMetadata: Uint8Array
			}
		}>
	>
	accountContactRequestIncomingDiscarded: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactRequestIncomingDiscarded seems event of type AccountContactRequestDiscarded
				devicePk: Uint8Array
				contactPk: Uint8Array
			}
		}>
	>
	accountContactRequestIncomingAccepted: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactRequestIncomingAccepted seems event of type AccountContactRequestAccepted
				devicePk: Uint8Array
				contactPk: Uint8Array
				groupPk: Uint8Array
			}
		}>
	>
	accountContactBlocked: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactBlocked seems event of type AccountContactBlocked
				devicePk: Uint8Array
				contactPk: Uint8Array
			}
		}>
	>
	accountContactUnblocked: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// AccountContactUnblocked seems event of type AccountContactUnblocked
				devicePk: Uint8Array
				contactPk: Uint8Array
			}
		}>
	>
	contactAliasKeyAdded: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// ContactAliasKeyAdded seems event of type ContactAddAliasKey
				devicePk: Uint8Array
				aliasPk: Uint8Array
			}
		}>
	>
	multiMemberGroupAliasResolverAdded: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// MultiMemberGroupAliasResolverAdded seems event of type MultiMemberGroupAddAliasResolver
				devicePk: Uint8Array
				aliasResolver: Uint8Array
				aliasProof: Uint8Array
			}
		}>
	>
	multiMemberGroupInitialMemberAnnounced: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {}
		}>
	>
	multiMemberGroupAdminRoleGranted: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {
				// MultiMemberGroupAdminRoleGranted seems event of type MultiMemberGroupAdminRoleGrant
			}
		}>
	>
	groupMetadataPayloadSent: CaseReducer<
		State,
		PayloadAction<{
			eventContext: api.berty.types.v1.IEventContext
			metadata: api.berty.types.v1.IGroupMetadata
			event: {}
		}>
	>
}

export enum EventsNames {
	undefined,
	groupMemberDeviceAdded,
	groupDeviceSecretAdded,
	accountGroupJoined,
	accountGroupLeft,
	accountContactRequestDisabled,
	accountContactRequestEnabled,
	accountContactRequestReferenceReset,
	accountContactRequestOutgoingEnqueued,
	accountContactRequestOutgoingSent,
	accountContactRequestIncomingReceived,
	accountContactRequestIncomingDiscarded,
	accountContactRequestIncomingAccepted,
	accountContactBlocked,
	accountContactUnblocked,
	contactAliasKeyAdded,
	multiMemberGroupAliasResolverAdded,
	multiMemberGroupInitialMemberAnnounced,
	multiMemberGroupAdminRoleGranted,
	groupMetadataPayloadSent,
}
