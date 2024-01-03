import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AllianceAsset, AllianceAssetAmino, AllianceAssetSDKType } from "./alliance";
import { Delegation, DelegationAmino, DelegationSDKType } from "./delegations";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType } from "./unbonding";
import { RedelegationEntry, RedelegationEntryAmino, RedelegationEntrySDKType } from "./redelegations";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
/** Params */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryParamsRequest";
  value: Uint8Array;
}
/** Params */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/alliance.alliance.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** Params */
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/alliance.alliance.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** Alliances */
export interface QueryAlliancesRequest {
  pagination?: PageRequest;
}
export interface QueryAlliancesRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAlliancesRequest";
  value: Uint8Array;
}
/** Alliances */
export interface QueryAlliancesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAlliancesRequestAminoMsg {
  type: "/alliance.alliance.QueryAlliancesRequest";
  value: QueryAlliancesRequestAmino;
}
/** Alliances */
export interface QueryAlliancesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAlliancesResponse {
  alliances: AllianceAsset[];
  pagination?: PageResponse;
}
export interface QueryAlliancesResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAlliancesResponse";
  value: Uint8Array;
}
export interface QueryAlliancesResponseAmino {
  alliances?: AllianceAssetAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAlliancesResponseAminoMsg {
  type: "/alliance.alliance.QueryAlliancesResponse";
  value: QueryAlliancesResponseAmino;
}
export interface QueryAlliancesResponseSDKType {
  alliances: AllianceAssetSDKType[];
  pagination?: PageResponseSDKType;
}
/** Alliance */
export interface QueryAllianceRequest {
  denom: string;
}
export interface QueryAllianceRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceRequest";
  value: Uint8Array;
}
/** Alliance */
export interface QueryAllianceRequestAmino {
  denom?: string;
}
export interface QueryAllianceRequestAminoMsg {
  type: "/alliance.alliance.QueryAllianceRequest";
  value: QueryAllianceRequestAmino;
}
/** Alliance */
export interface QueryAllianceRequestSDKType {
  denom: string;
}
export interface QueryAllianceResponse {
  alliance?: AllianceAsset;
}
export interface QueryAllianceResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceResponse";
  value: Uint8Array;
}
export interface QueryAllianceResponseAmino {
  alliance?: AllianceAssetAmino;
}
export interface QueryAllianceResponseAminoMsg {
  type: "/alliance.alliance.QueryAllianceResponse";
  value: QueryAllianceResponseAmino;
}
export interface QueryAllianceResponseSDKType {
  alliance?: AllianceAssetSDKType;
}
/** @deprecated */
export interface QueryIBCAllianceRequest {
  hash: string;
}
export interface QueryIBCAllianceRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryIBCAllianceRequest";
  value: Uint8Array;
}
/** @deprecated */
export interface QueryIBCAllianceRequestAmino {
  hash?: string;
}
export interface QueryIBCAllianceRequestAminoMsg {
  type: "/alliance.alliance.QueryIBCAllianceRequest";
  value: QueryIBCAllianceRequestAmino;
}
/** @deprecated */
export interface QueryIBCAllianceRequestSDKType {
  hash: string;
}
export interface QueryAllianceValidatorRequest {
  validatorAddr: string;
}
export interface QueryAllianceValidatorRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceValidatorRequest";
  value: Uint8Array;
}
export interface QueryAllianceValidatorRequestAmino {
  validator_addr?: string;
}
export interface QueryAllianceValidatorRequestAminoMsg {
  type: "/alliance.alliance.QueryAllianceValidatorRequest";
  value: QueryAllianceValidatorRequestAmino;
}
export interface QueryAllianceValidatorRequestSDKType {
  validator_addr: string;
}
export interface QueryAllAllianceValidatorsRequest {
  pagination?: PageRequest;
}
export interface QueryAllAllianceValidatorsRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllAllianceValidatorsRequest";
  value: Uint8Array;
}
export interface QueryAllAllianceValidatorsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAllianceValidatorsRequestAminoMsg {
  type: "/alliance.alliance.QueryAllAllianceValidatorsRequest";
  value: QueryAllAllianceValidatorsRequestAmino;
}
export interface QueryAllAllianceValidatorsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAlliancesDelegationsRequest {
  pagination?: PageRequest;
}
export interface QueryAllAlliancesDelegationsRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllAlliancesDelegationsRequest";
  value: Uint8Array;
}
export interface QueryAllAlliancesDelegationsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAlliancesDelegationsRequestAminoMsg {
  type: "/alliance.alliance.QueryAllAlliancesDelegationsRequest";
  value: QueryAllAlliancesDelegationsRequestAmino;
}
export interface QueryAllAlliancesDelegationsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** AlliancesDelegation */
export interface QueryAlliancesDelegationsRequest {
  delegatorAddr: string;
  pagination?: PageRequest;
}
export interface QueryAlliancesDelegationsRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAlliancesDelegationsRequest";
  value: Uint8Array;
}
/** AlliancesDelegation */
export interface QueryAlliancesDelegationsRequestAmino {
  delegator_addr?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAlliancesDelegationsRequestAminoMsg {
  type: "/alliance.alliance.QueryAlliancesDelegationsRequest";
  value: QueryAlliancesDelegationsRequestAmino;
}
/** AlliancesDelegation */
export interface QueryAlliancesDelegationsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
/** AlliancesDelegationByValidator */
export interface QueryAlliancesDelegationByValidatorRequest {
  delegatorAddr: string;
  validatorAddr: string;
  pagination?: PageRequest;
}
export interface QueryAlliancesDelegationByValidatorRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAlliancesDelegationByValidatorRequest";
  value: Uint8Array;
}
/** AlliancesDelegationByValidator */
export interface QueryAlliancesDelegationByValidatorRequestAmino {
  delegator_addr?: string;
  validator_addr?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAlliancesDelegationByValidatorRequestAminoMsg {
  type: "/alliance.alliance.QueryAlliancesDelegationByValidatorRequest";
  value: QueryAlliancesDelegationByValidatorRequestAmino;
}
/** AlliancesDelegationByValidator */
export interface QueryAlliancesDelegationByValidatorRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation;
  balance: Coin;
}
export interface DelegationResponseProtoMsg {
  typeUrl: "/alliance.alliance.DelegationResponse";
  value: Uint8Array;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseAmino {
  delegation?: DelegationAmino;
  balance?: CoinAmino;
}
export interface DelegationResponseAminoMsg {
  type: "/alliance.alliance.DelegationResponse";
  value: DelegationResponseAmino;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseSDKType {
  delegation: DelegationSDKType;
  balance: CoinSDKType;
}
export interface QueryAlliancesDelegationsResponse {
  delegations: DelegationResponse[];
  pagination?: PageResponse;
}
export interface QueryAlliancesDelegationsResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAlliancesDelegationsResponse";
  value: Uint8Array;
}
export interface QueryAlliancesDelegationsResponseAmino {
  delegations?: DelegationResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAlliancesDelegationsResponseAminoMsg {
  type: "/alliance.alliance.QueryAlliancesDelegationsResponse";
  value: QueryAlliancesDelegationsResponseAmino;
}
export interface QueryAlliancesDelegationsResponseSDKType {
  delegations: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination?: PageRequest;
}
export interface QueryAllianceDelegationRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceDelegationRequest";
  value: Uint8Array;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRequestAmino {
  delegator_addr?: string;
  validator_addr?: string;
  denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllianceDelegationRequestAminoMsg {
  type: "/alliance.alliance.QueryAllianceDelegationRequest";
  value: QueryAllianceDelegationRequestAmino;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  denom: string;
  pagination?: PageRequestSDKType;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  hash: string;
  pagination?: PageRequest;
}
export interface QueryIBCAllianceDelegationRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryIBCAllianceDelegationRequest";
  value: Uint8Array;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRequestAmino {
  delegator_addr?: string;
  validator_addr?: string;
  hash?: string;
  pagination?: PageRequestAmino;
}
export interface QueryIBCAllianceDelegationRequestAminoMsg {
  type: "/alliance.alliance.QueryIBCAllianceDelegationRequest";
  value: QueryIBCAllianceDelegationRequestAmino;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  hash: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllianceDelegationResponse {
  delegation: DelegationResponse;
}
export interface QueryAllianceDelegationResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceDelegationResponse";
  value: Uint8Array;
}
export interface QueryAllianceDelegationResponseAmino {
  delegation?: DelegationResponseAmino;
}
export interface QueryAllianceDelegationResponseAminoMsg {
  type: "/alliance.alliance.QueryAllianceDelegationResponse";
  value: QueryAllianceDelegationResponseAmino;
}
export interface QueryAllianceDelegationResponseSDKType {
  delegation: DelegationResponseSDKType;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination?: PageRequest;
}
export interface QueryAllianceDelegationRewardsRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceDelegationRewardsRequest";
  value: Uint8Array;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRewardsRequestAmino {
  delegator_addr?: string;
  validator_addr?: string;
  denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllianceDelegationRewardsRequestAminoMsg {
  type: "/alliance.alliance.QueryAllianceDelegationRewardsRequest";
  value: QueryAllianceDelegationRewardsRequestAmino;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRewardsRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  denom: string;
  pagination?: PageRequestSDKType;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  hash: string;
  pagination?: PageRequest;
}
export interface QueryIBCAllianceDelegationRewardsRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryIBCAllianceDelegationRewardsRequest";
  value: Uint8Array;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRewardsRequestAmino {
  delegator_addr?: string;
  validator_addr?: string;
  hash?: string;
  pagination?: PageRequestAmino;
}
export interface QueryIBCAllianceDelegationRewardsRequestAminoMsg {
  type: "/alliance.alliance.QueryIBCAllianceDelegationRewardsRequest";
  value: QueryIBCAllianceDelegationRewardsRequestAmino;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRewardsRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  hash: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllianceDelegationRewardsResponse {
  rewards: Coin[];
}
export interface QueryAllianceDelegationRewardsResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceDelegationRewardsResponse";
  value: Uint8Array;
}
export interface QueryAllianceDelegationRewardsResponseAmino {
  rewards?: CoinAmino[];
}
export interface QueryAllianceDelegationRewardsResponseAminoMsg {
  type: "/alliance.alliance.QueryAllianceDelegationRewardsResponse";
  value: QueryAllianceDelegationRewardsResponseAmino;
}
export interface QueryAllianceDelegationRewardsResponseSDKType {
  rewards: CoinSDKType[];
}
export interface QueryAllianceValidatorResponse {
  validatorAddr: string;
  totalDelegationShares: DecCoin[];
  validatorShares: DecCoin[];
  totalStaked: DecCoin[];
}
export interface QueryAllianceValidatorResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceValidatorResponse";
  value: Uint8Array;
}
export interface QueryAllianceValidatorResponseAmino {
  validator_addr?: string;
  total_delegation_shares?: DecCoinAmino[];
  validator_shares?: DecCoinAmino[];
  total_staked?: DecCoinAmino[];
}
export interface QueryAllianceValidatorResponseAminoMsg {
  type: "/alliance.alliance.QueryAllianceValidatorResponse";
  value: QueryAllianceValidatorResponseAmino;
}
export interface QueryAllianceValidatorResponseSDKType {
  validator_addr: string;
  total_delegation_shares: DecCoinSDKType[];
  validator_shares: DecCoinSDKType[];
  total_staked: DecCoinSDKType[];
}
export interface QueryAllianceValidatorsResponse {
  validators: QueryAllianceValidatorResponse[];
  pagination?: PageResponse;
}
export interface QueryAllianceValidatorsResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceValidatorsResponse";
  value: Uint8Array;
}
export interface QueryAllianceValidatorsResponseAmino {
  validators?: QueryAllianceValidatorResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllianceValidatorsResponseAminoMsg {
  type: "/alliance.alliance.QueryAllianceValidatorsResponse";
  value: QueryAllianceValidatorsResponseAmino;
}
export interface QueryAllianceValidatorsResponseSDKType {
  validators: QueryAllianceValidatorResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** AllianceDelegation */
export interface QueryAllianceUnbondingsByDenomAndDelegatorRequest {
  denom: string;
  delegatorAddr: string;
  pagination?: PageRequest;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceUnbondingsByDenomAndDelegatorRequest";
  value: Uint8Array;
}
/** AllianceDelegation */
export interface QueryAllianceUnbondingsByDenomAndDelegatorRequestAmino {
  denom?: string;
  delegator_addr?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorRequestAminoMsg {
  type: "/alliance.alliance.QueryAllianceUnbondingsByDenomAndDelegatorRequest";
  value: QueryAllianceUnbondingsByDenomAndDelegatorRequestAmino;
}
/** AllianceDelegation */
export interface QueryAllianceUnbondingsByDenomAndDelegatorRequestSDKType {
  denom: string;
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorResponse {
  unbondings: UnbondingDelegation[];
  pagination?: PageResponse;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceUnbondingsByDenomAndDelegatorResponse";
  value: Uint8Array;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorResponseAmino {
  unbondings?: UnbondingDelegationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorResponseAminoMsg {
  type: "/alliance.alliance.QueryAllianceUnbondingsByDenomAndDelegatorResponse";
  value: QueryAllianceUnbondingsByDenomAndDelegatorResponseAmino;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorResponseSDKType {
  unbondings: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAllianceUnbondingsRequest {
  denom: string;
  delegatorAddr: string;
  validatorAddr: string;
  pagination?: PageRequest;
}
export interface QueryAllianceUnbondingsRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceUnbondingsRequest";
  value: Uint8Array;
}
export interface QueryAllianceUnbondingsRequestAmino {
  denom?: string;
  delegator_addr?: string;
  validator_addr?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllianceUnbondingsRequestAminoMsg {
  type: "/alliance.alliance.QueryAllianceUnbondingsRequest";
  value: QueryAllianceUnbondingsRequestAmino;
}
export interface QueryAllianceUnbondingsRequestSDKType {
  denom: string;
  delegator_addr: string;
  validator_addr: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllianceUnbondingsResponse {
  unbondings: UnbondingDelegation[];
  pagination?: PageResponse;
}
export interface QueryAllianceUnbondingsResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceUnbondingsResponse";
  value: Uint8Array;
}
export interface QueryAllianceUnbondingsResponseAmino {
  unbondings?: UnbondingDelegationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllianceUnbondingsResponseAminoMsg {
  type: "/alliance.alliance.QueryAllianceUnbondingsResponse";
  value: QueryAllianceUnbondingsResponseAmino;
}
export interface QueryAllianceUnbondingsResponseSDKType {
  unbondings: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/** Redelegations */
export interface QueryAllianceRedelegationsRequest {
  denom: string;
  delegatorAddr: string;
  pagination?: PageRequest;
}
export interface QueryAllianceRedelegationsRequestProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceRedelegationsRequest";
  value: Uint8Array;
}
/** Redelegations */
export interface QueryAllianceRedelegationsRequestAmino {
  denom?: string;
  delegator_addr?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllianceRedelegationsRequestAminoMsg {
  type: "/alliance.alliance.QueryAllianceRedelegationsRequest";
  value: QueryAllianceRedelegationsRequestAmino;
}
/** Redelegations */
export interface QueryAllianceRedelegationsRequestSDKType {
  denom: string;
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllianceRedelegationsResponse {
  redelegations: RedelegationEntry[];
  pagination?: PageResponse;
}
export interface QueryAllianceRedelegationsResponseProtoMsg {
  typeUrl: "/alliance.alliance.QueryAllianceRedelegationsResponse";
  value: Uint8Array;
}
export interface QueryAllianceRedelegationsResponseAmino {
  redelegations?: RedelegationEntryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllianceRedelegationsResponseAminoMsg {
  type: "/alliance.alliance.QueryAllianceRedelegationsResponse";
  value: QueryAllianceRedelegationsResponseAmino;
}
export interface QueryAllianceRedelegationsResponseSDKType {
  redelegations: RedelegationEntrySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/alliance.alliance.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/alliance.alliance.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryAlliancesRequest(): QueryAlliancesRequest {
  return {
    pagination: undefined
  };
}
export const QueryAlliancesRequest = {
  typeUrl: "/alliance.alliance.QueryAlliancesRequest",
  is(o: any): o is QueryAlliancesRequest {
    return o && o.$typeUrl === QueryAlliancesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAlliancesRequestSDKType {
    return o && o.$typeUrl === QueryAlliancesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAlliancesRequestAmino {
    return o && o.$typeUrl === QueryAlliancesRequest.typeUrl;
  },
  encode(message: QueryAlliancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAlliancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAlliancesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAlliancesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAlliancesRequest>): QueryAlliancesRequest {
    const message = createBaseQueryAlliancesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAlliancesRequestAmino): QueryAlliancesRequest {
    const message = createBaseQueryAlliancesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAlliancesRequest, useInterfaces: boolean = true): QueryAlliancesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAlliancesRequestAminoMsg): QueryAlliancesRequest {
    return QueryAlliancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAlliancesRequestProtoMsg, useInterfaces: boolean = true): QueryAlliancesRequest {
    return QueryAlliancesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAlliancesRequest): Uint8Array {
    return QueryAlliancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAlliancesRequest): QueryAlliancesRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAlliancesRequest",
      value: QueryAlliancesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAlliancesRequest.typeUrl, QueryAlliancesRequest);
function createBaseQueryAlliancesResponse(): QueryAlliancesResponse {
  return {
    alliances: [],
    pagination: undefined
  };
}
export const QueryAlliancesResponse = {
  typeUrl: "/alliance.alliance.QueryAlliancesResponse",
  is(o: any): o is QueryAlliancesResponse {
    return o && (o.$typeUrl === QueryAlliancesResponse.typeUrl || Array.isArray(o.alliances) && (!o.alliances.length || AllianceAsset.is(o.alliances[0])));
  },
  isSDK(o: any): o is QueryAlliancesResponseSDKType {
    return o && (o.$typeUrl === QueryAlliancesResponse.typeUrl || Array.isArray(o.alliances) && (!o.alliances.length || AllianceAsset.isSDK(o.alliances[0])));
  },
  isAmino(o: any): o is QueryAlliancesResponseAmino {
    return o && (o.$typeUrl === QueryAlliancesResponse.typeUrl || Array.isArray(o.alliances) && (!o.alliances.length || AllianceAsset.isAmino(o.alliances[0])));
  },
  encode(message: QueryAlliancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.alliances) {
      AllianceAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAlliancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alliances.push(AllianceAsset.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAlliancesResponse {
    return {
      alliances: Array.isArray(object?.alliances) ? object.alliances.map((e: any) => AllianceAsset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAlliancesResponse): unknown {
    const obj: any = {};
    if (message.alliances) {
      obj.alliances = message.alliances.map(e => e ? AllianceAsset.toJSON(e) : undefined);
    } else {
      obj.alliances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAlliancesResponse>): QueryAlliancesResponse {
    const message = createBaseQueryAlliancesResponse();
    message.alliances = object.alliances?.map(e => AllianceAsset.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAlliancesResponseAmino): QueryAlliancesResponse {
    const message = createBaseQueryAlliancesResponse();
    message.alliances = object.alliances?.map(e => AllianceAsset.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAlliancesResponse, useInterfaces: boolean = true): QueryAlliancesResponseAmino {
    const obj: any = {};
    if (message.alliances) {
      obj.alliances = message.alliances.map(e => e ? AllianceAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.alliances = message.alliances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAlliancesResponseAminoMsg): QueryAlliancesResponse {
    return QueryAlliancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAlliancesResponseProtoMsg, useInterfaces: boolean = true): QueryAlliancesResponse {
    return QueryAlliancesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAlliancesResponse): Uint8Array {
    return QueryAlliancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAlliancesResponse): QueryAlliancesResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAlliancesResponse",
      value: QueryAlliancesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAlliancesResponse.typeUrl, QueryAlliancesResponse);
function createBaseQueryAllianceRequest(): QueryAllianceRequest {
  return {
    denom: ""
  };
}
export const QueryAllianceRequest = {
  typeUrl: "/alliance.alliance.QueryAllianceRequest",
  is(o: any): o is QueryAllianceRequest {
    return o && (o.$typeUrl === QueryAllianceRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryAllianceRequestSDKType {
    return o && (o.$typeUrl === QueryAllianceRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryAllianceRequestAmino {
    return o && (o.$typeUrl === QueryAllianceRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryAllianceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryAllianceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceRequest>): QueryAllianceRequest {
    const message = createBaseQueryAllianceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryAllianceRequestAmino): QueryAllianceRequest {
    const message = createBaseQueryAllianceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryAllianceRequest, useInterfaces: boolean = true): QueryAllianceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceRequestAminoMsg): QueryAllianceRequest {
    return QueryAllianceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceRequestProtoMsg, useInterfaces: boolean = true): QueryAllianceRequest {
    return QueryAllianceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceRequest): Uint8Array {
    return QueryAllianceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceRequest): QueryAllianceRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceRequest",
      value: QueryAllianceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceRequest.typeUrl, QueryAllianceRequest);
function createBaseQueryAllianceResponse(): QueryAllianceResponse {
  return {
    alliance: undefined
  };
}
export const QueryAllianceResponse = {
  typeUrl: "/alliance.alliance.QueryAllianceResponse",
  is(o: any): o is QueryAllianceResponse {
    return o && o.$typeUrl === QueryAllianceResponse.typeUrl;
  },
  isSDK(o: any): o is QueryAllianceResponseSDKType {
    return o && o.$typeUrl === QueryAllianceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryAllianceResponseAmino {
    return o && o.$typeUrl === QueryAllianceResponse.typeUrl;
  },
  encode(message: QueryAllianceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alliance !== undefined) {
      AllianceAsset.encode(message.alliance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alliance = AllianceAsset.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceResponse {
    return {
      alliance: isSet(object.alliance) ? AllianceAsset.fromJSON(object.alliance) : undefined
    };
  },
  toJSON(message: QueryAllianceResponse): unknown {
    const obj: any = {};
    message.alliance !== undefined && (obj.alliance = message.alliance ? AllianceAsset.toJSON(message.alliance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceResponse>): QueryAllianceResponse {
    const message = createBaseQueryAllianceResponse();
    message.alliance = object.alliance !== undefined && object.alliance !== null ? AllianceAsset.fromPartial(object.alliance) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceResponseAmino): QueryAllianceResponse {
    const message = createBaseQueryAllianceResponse();
    if (object.alliance !== undefined && object.alliance !== null) {
      message.alliance = AllianceAsset.fromAmino(object.alliance);
    }
    return message;
  },
  toAmino(message: QueryAllianceResponse, useInterfaces: boolean = true): QueryAllianceResponseAmino {
    const obj: any = {};
    obj.alliance = message.alliance ? AllianceAsset.toAmino(message.alliance, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceResponseAminoMsg): QueryAllianceResponse {
    return QueryAllianceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceResponseProtoMsg, useInterfaces: boolean = true): QueryAllianceResponse {
    return QueryAllianceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceResponse): Uint8Array {
    return QueryAllianceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceResponse): QueryAllianceResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceResponse",
      value: QueryAllianceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceResponse.typeUrl, QueryAllianceResponse);
function createBaseQueryIBCAllianceRequest(): QueryIBCAllianceRequest {
  return {
    hash: ""
  };
}
export const QueryIBCAllianceRequest = {
  typeUrl: "/alliance.alliance.QueryIBCAllianceRequest",
  is(o: any): o is QueryIBCAllianceRequest {
    return o && (o.$typeUrl === QueryIBCAllianceRequest.typeUrl || typeof o.hash === "string");
  },
  isSDK(o: any): o is QueryIBCAllianceRequestSDKType {
    return o && (o.$typeUrl === QueryIBCAllianceRequest.typeUrl || typeof o.hash === "string");
  },
  isAmino(o: any): o is QueryIBCAllianceRequestAmino {
    return o && (o.$typeUrl === QueryIBCAllianceRequest.typeUrl || typeof o.hash === "string");
  },
  encode(message: QueryIBCAllianceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIBCAllianceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCAllianceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIBCAllianceRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message: QueryIBCAllianceRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object: Partial<QueryIBCAllianceRequest>): QueryIBCAllianceRequest {
    const message = createBaseQueryIBCAllianceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryIBCAllianceRequestAmino): QueryIBCAllianceRequest {
    const message = createBaseQueryIBCAllianceRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: QueryIBCAllianceRequest, useInterfaces: boolean = true): QueryIBCAllianceRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryIBCAllianceRequestAminoMsg): QueryIBCAllianceRequest {
    return QueryIBCAllianceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIBCAllianceRequestProtoMsg, useInterfaces: boolean = true): QueryIBCAllianceRequest {
    return QueryIBCAllianceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIBCAllianceRequest): Uint8Array {
    return QueryIBCAllianceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIBCAllianceRequest): QueryIBCAllianceRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryIBCAllianceRequest",
      value: QueryIBCAllianceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIBCAllianceRequest.typeUrl, QueryIBCAllianceRequest);
function createBaseQueryAllianceValidatorRequest(): QueryAllianceValidatorRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryAllianceValidatorRequest = {
  typeUrl: "/alliance.alliance.QueryAllianceValidatorRequest",
  is(o: any): o is QueryAllianceValidatorRequest {
    return o && (o.$typeUrl === QueryAllianceValidatorRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryAllianceValidatorRequestSDKType {
    return o && (o.$typeUrl === QueryAllianceValidatorRequest.typeUrl || typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryAllianceValidatorRequestAmino {
    return o && (o.$typeUrl === QueryAllianceValidatorRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryAllianceValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceValidatorRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message: QueryAllianceValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceValidatorRequest>): QueryAllianceValidatorRequest {
    const message = createBaseQueryAllianceValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryAllianceValidatorRequestAmino): QueryAllianceValidatorRequest {
    const message = createBaseQueryAllianceValidatorRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryAllianceValidatorRequest, useInterfaces: boolean = true): QueryAllianceValidatorRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceValidatorRequestAminoMsg): QueryAllianceValidatorRequest {
    return QueryAllianceValidatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceValidatorRequestProtoMsg, useInterfaces: boolean = true): QueryAllianceValidatorRequest {
    return QueryAllianceValidatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceValidatorRequest): Uint8Array {
    return QueryAllianceValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceValidatorRequest): QueryAllianceValidatorRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceValidatorRequest",
      value: QueryAllianceValidatorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceValidatorRequest.typeUrl, QueryAllianceValidatorRequest);
function createBaseQueryAllAllianceValidatorsRequest(): QueryAllAllianceValidatorsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAllianceValidatorsRequest = {
  typeUrl: "/alliance.alliance.QueryAllAllianceValidatorsRequest",
  is(o: any): o is QueryAllAllianceValidatorsRequest {
    return o && o.$typeUrl === QueryAllAllianceValidatorsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllAllianceValidatorsRequestSDKType {
    return o && o.$typeUrl === QueryAllAllianceValidatorsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllAllianceValidatorsRequestAmino {
    return o && o.$typeUrl === QueryAllAllianceValidatorsRequest.typeUrl;
  },
  encode(message: QueryAllAllianceValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllAllianceValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllianceValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllAllianceValidatorsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAllianceValidatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAllianceValidatorsRequest>): QueryAllAllianceValidatorsRequest {
    const message = createBaseQueryAllAllianceValidatorsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAllianceValidatorsRequestAmino): QueryAllAllianceValidatorsRequest {
    const message = createBaseQueryAllAllianceValidatorsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAllianceValidatorsRequest, useInterfaces: boolean = true): QueryAllAllianceValidatorsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAllianceValidatorsRequestAminoMsg): QueryAllAllianceValidatorsRequest {
    return QueryAllAllianceValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAllianceValidatorsRequestProtoMsg, useInterfaces: boolean = true): QueryAllAllianceValidatorsRequest {
    return QueryAllAllianceValidatorsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllAllianceValidatorsRequest): Uint8Array {
    return QueryAllAllianceValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAllianceValidatorsRequest): QueryAllAllianceValidatorsRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllAllianceValidatorsRequest",
      value: QueryAllAllianceValidatorsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllAllianceValidatorsRequest.typeUrl, QueryAllAllianceValidatorsRequest);
function createBaseQueryAllAlliancesDelegationsRequest(): QueryAllAlliancesDelegationsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAlliancesDelegationsRequest = {
  typeUrl: "/alliance.alliance.QueryAllAlliancesDelegationsRequest",
  is(o: any): o is QueryAllAlliancesDelegationsRequest {
    return o && o.$typeUrl === QueryAllAlliancesDelegationsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllAlliancesDelegationsRequestSDKType {
    return o && o.$typeUrl === QueryAllAlliancesDelegationsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllAlliancesDelegationsRequestAmino {
    return o && o.$typeUrl === QueryAllAlliancesDelegationsRequest.typeUrl;
  },
  encode(message: QueryAllAlliancesDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllAlliancesDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAlliancesDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllAlliancesDelegationsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAlliancesDelegationsRequest>): QueryAllAlliancesDelegationsRequest {
    const message = createBaseQueryAllAlliancesDelegationsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAlliancesDelegationsRequestAmino): QueryAllAlliancesDelegationsRequest {
    const message = createBaseQueryAllAlliancesDelegationsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAlliancesDelegationsRequest, useInterfaces: boolean = true): QueryAllAlliancesDelegationsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAlliancesDelegationsRequestAminoMsg): QueryAllAlliancesDelegationsRequest {
    return QueryAllAlliancesDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAlliancesDelegationsRequestProtoMsg, useInterfaces: boolean = true): QueryAllAlliancesDelegationsRequest {
    return QueryAllAlliancesDelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllAlliancesDelegationsRequest): Uint8Array {
    return QueryAllAlliancesDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAlliancesDelegationsRequest): QueryAllAlliancesDelegationsRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllAlliancesDelegationsRequest",
      value: QueryAllAlliancesDelegationsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllAlliancesDelegationsRequest.typeUrl, QueryAllAlliancesDelegationsRequest);
function createBaseQueryAlliancesDelegationsRequest(): QueryAlliancesDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryAlliancesDelegationsRequest = {
  typeUrl: "/alliance.alliance.QueryAlliancesDelegationsRequest",
  is(o: any): o is QueryAlliancesDelegationsRequest {
    return o && (o.$typeUrl === QueryAlliancesDelegationsRequest.typeUrl || typeof o.delegatorAddr === "string");
  },
  isSDK(o: any): o is QueryAlliancesDelegationsRequestSDKType {
    return o && (o.$typeUrl === QueryAlliancesDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
  },
  isAmino(o: any): o is QueryAlliancesDelegationsRequestAmino {
    return o && (o.$typeUrl === QueryAlliancesDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
  },
  encode(message: QueryAlliancesDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAlliancesDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAlliancesDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAlliancesDelegationsRequest>): QueryAlliancesDelegationsRequest {
    const message = createBaseQueryAlliancesDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAlliancesDelegationsRequestAmino): QueryAlliancesDelegationsRequest {
    const message = createBaseQueryAlliancesDelegationsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAlliancesDelegationsRequest, useInterfaces: boolean = true): QueryAlliancesDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAlliancesDelegationsRequestAminoMsg): QueryAlliancesDelegationsRequest {
    return QueryAlliancesDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAlliancesDelegationsRequestProtoMsg, useInterfaces: boolean = true): QueryAlliancesDelegationsRequest {
    return QueryAlliancesDelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAlliancesDelegationsRequest): Uint8Array {
    return QueryAlliancesDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAlliancesDelegationsRequest): QueryAlliancesDelegationsRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAlliancesDelegationsRequest",
      value: QueryAlliancesDelegationsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAlliancesDelegationsRequest.typeUrl, QueryAlliancesDelegationsRequest);
function createBaseQueryAlliancesDelegationByValidatorRequest(): QueryAlliancesDelegationByValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    pagination: undefined
  };
}
export const QueryAlliancesDelegationByValidatorRequest = {
  typeUrl: "/alliance.alliance.QueryAlliancesDelegationByValidatorRequest",
  is(o: any): o is QueryAlliancesDelegationByValidatorRequest {
    return o && (o.$typeUrl === QueryAlliancesDelegationByValidatorRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryAlliancesDelegationByValidatorRequestSDKType {
    return o && (o.$typeUrl === QueryAlliancesDelegationByValidatorRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryAlliancesDelegationByValidatorRequestAmino {
    return o && (o.$typeUrl === QueryAlliancesDelegationByValidatorRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  encode(message: QueryAlliancesDelegationByValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAlliancesDelegationByValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesDelegationByValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAlliancesDelegationByValidatorRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAlliancesDelegationByValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAlliancesDelegationByValidatorRequest>): QueryAlliancesDelegationByValidatorRequest {
    const message = createBaseQueryAlliancesDelegationByValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAlliancesDelegationByValidatorRequestAmino): QueryAlliancesDelegationByValidatorRequest {
    const message = createBaseQueryAlliancesDelegationByValidatorRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAlliancesDelegationByValidatorRequest, useInterfaces: boolean = true): QueryAlliancesDelegationByValidatorRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAlliancesDelegationByValidatorRequestAminoMsg): QueryAlliancesDelegationByValidatorRequest {
    return QueryAlliancesDelegationByValidatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAlliancesDelegationByValidatorRequestProtoMsg, useInterfaces: boolean = true): QueryAlliancesDelegationByValidatorRequest {
    return QueryAlliancesDelegationByValidatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAlliancesDelegationByValidatorRequest): Uint8Array {
    return QueryAlliancesDelegationByValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAlliancesDelegationByValidatorRequest): QueryAlliancesDelegationByValidatorRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAlliancesDelegationByValidatorRequest",
      value: QueryAlliancesDelegationByValidatorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAlliancesDelegationByValidatorRequest.typeUrl, QueryAlliancesDelegationByValidatorRequest);
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: Delegation.fromPartial({}),
    balance: Coin.fromPartial({})
  };
}
export const DelegationResponse = {
  typeUrl: "/alliance.alliance.DelegationResponse",
  is(o: any): o is DelegationResponse {
    return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.is(o.delegation) && Coin.is(o.balance));
  },
  isSDK(o: any): o is DelegationResponseSDKType {
    return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.isSDK(o.delegation) && Coin.isSDK(o.balance));
  },
  isAmino(o: any): o is DelegationResponseAmino {
    return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.isAmino(o.delegation) && Coin.isAmino(o.balance));
  },
  encode(message: DelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationResponse {
    return {
      delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: DelegationResponseAmino): DelegationResponse {
    const message = createBaseDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromAmino(object.delegation);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: DelegationResponse, useInterfaces: boolean = true): DelegationResponseAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? Delegation.toAmino(message.delegation, useInterfaces) : undefined;
    obj.balance = message.balance ? Coin.toAmino(message.balance, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationResponseAminoMsg): DelegationResponse {
    return DelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationResponseProtoMsg, useInterfaces: boolean = true): DelegationResponse {
    return DelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DelegationResponse): Uint8Array {
    return DelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: DelegationResponse): DelegationResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.DelegationResponse",
      value: DelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegationResponse.typeUrl, DelegationResponse);
function createBaseQueryAlliancesDelegationsResponse(): QueryAlliancesDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined
  };
}
export const QueryAlliancesDelegationsResponse = {
  typeUrl: "/alliance.alliance.QueryAlliancesDelegationsResponse",
  is(o: any): o is QueryAlliancesDelegationsResponse {
    return o && (o.$typeUrl === QueryAlliancesDelegationsResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || DelegationResponse.is(o.delegations[0])));
  },
  isSDK(o: any): o is QueryAlliancesDelegationsResponseSDKType {
    return o && (o.$typeUrl === QueryAlliancesDelegationsResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || DelegationResponse.isSDK(o.delegations[0])));
  },
  isAmino(o: any): o is QueryAlliancesDelegationsResponseAmino {
    return o && (o.$typeUrl === QueryAlliancesDelegationsResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || DelegationResponse.isAmino(o.delegations[0])));
  },
  encode(message: QueryAlliancesDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAlliancesDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAlliancesDelegationsResponse {
    return {
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAlliancesDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAlliancesDelegationsResponse>): QueryAlliancesDelegationsResponse {
    const message = createBaseQueryAlliancesDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAlliancesDelegationsResponseAmino): QueryAlliancesDelegationsResponse {
    const message = createBaseQueryAlliancesDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAlliancesDelegationsResponse, useInterfaces: boolean = true): QueryAlliancesDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAlliancesDelegationsResponseAminoMsg): QueryAlliancesDelegationsResponse {
    return QueryAlliancesDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAlliancesDelegationsResponseProtoMsg, useInterfaces: boolean = true): QueryAlliancesDelegationsResponse {
    return QueryAlliancesDelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAlliancesDelegationsResponse): Uint8Array {
    return QueryAlliancesDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAlliancesDelegationsResponse): QueryAlliancesDelegationsResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAlliancesDelegationsResponse",
      value: QueryAlliancesDelegationsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAlliancesDelegationsResponse.typeUrl, QueryAlliancesDelegationsResponse);
function createBaseQueryAllianceDelegationRequest(): QueryAllianceDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    denom: "",
    pagination: undefined
  };
}
export const QueryAllianceDelegationRequest = {
  typeUrl: "/alliance.alliance.QueryAllianceDelegationRequest",
  is(o: any): o is QueryAllianceDelegationRequest {
    return o && (o.$typeUrl === QueryAllianceDelegationRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryAllianceDelegationRequestSDKType {
    return o && (o.$typeUrl === QueryAllianceDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryAllianceDelegationRequestAmino {
    return o && (o.$typeUrl === QueryAllianceDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string" && typeof o.denom === "string");
  },
  encode(message: QueryAllianceDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceDelegationRequest>): QueryAllianceDelegationRequest {
    const message = createBaseQueryAllianceDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceDelegationRequestAmino): QueryAllianceDelegationRequest {
    const message = createBaseQueryAllianceDelegationRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceDelegationRequest, useInterfaces: boolean = true): QueryAllianceDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceDelegationRequestAminoMsg): QueryAllianceDelegationRequest {
    return QueryAllianceDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceDelegationRequestProtoMsg, useInterfaces: boolean = true): QueryAllianceDelegationRequest {
    return QueryAllianceDelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceDelegationRequest): Uint8Array {
    return QueryAllianceDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceDelegationRequest): QueryAllianceDelegationRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceDelegationRequest",
      value: QueryAllianceDelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceDelegationRequest.typeUrl, QueryAllianceDelegationRequest);
function createBaseQueryIBCAllianceDelegationRequest(): QueryIBCAllianceDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    hash: "",
    pagination: undefined
  };
}
export const QueryIBCAllianceDelegationRequest = {
  typeUrl: "/alliance.alliance.QueryIBCAllianceDelegationRequest",
  is(o: any): o is QueryIBCAllianceDelegationRequest {
    return o && (o.$typeUrl === QueryIBCAllianceDelegationRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string" && typeof o.hash === "string");
  },
  isSDK(o: any): o is QueryIBCAllianceDelegationRequestSDKType {
    return o && (o.$typeUrl === QueryIBCAllianceDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string" && typeof o.hash === "string");
  },
  isAmino(o: any): o is QueryIBCAllianceDelegationRequestAmino {
    return o && (o.$typeUrl === QueryIBCAllianceDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string" && typeof o.hash === "string");
  },
  encode(message: QueryIBCAllianceDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIBCAllianceDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCAllianceDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIBCAllianceDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIBCAllianceDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.hash !== undefined && (obj.hash = message.hash);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIBCAllianceDelegationRequest>): QueryIBCAllianceDelegationRequest {
    const message = createBaseQueryIBCAllianceDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.hash = object.hash ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryIBCAllianceDelegationRequestAmino): QueryIBCAllianceDelegationRequest {
    const message = createBaseQueryIBCAllianceDelegationRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIBCAllianceDelegationRequest, useInterfaces: boolean = true): QueryIBCAllianceDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIBCAllianceDelegationRequestAminoMsg): QueryIBCAllianceDelegationRequest {
    return QueryIBCAllianceDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIBCAllianceDelegationRequestProtoMsg, useInterfaces: boolean = true): QueryIBCAllianceDelegationRequest {
    return QueryIBCAllianceDelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIBCAllianceDelegationRequest): Uint8Array {
    return QueryIBCAllianceDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIBCAllianceDelegationRequest): QueryIBCAllianceDelegationRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryIBCAllianceDelegationRequest",
      value: QueryIBCAllianceDelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIBCAllianceDelegationRequest.typeUrl, QueryIBCAllianceDelegationRequest);
function createBaseQueryAllianceDelegationResponse(): QueryAllianceDelegationResponse {
  return {
    delegation: DelegationResponse.fromPartial({})
  };
}
export const QueryAllianceDelegationResponse = {
  typeUrl: "/alliance.alliance.QueryAllianceDelegationResponse",
  is(o: any): o is QueryAllianceDelegationResponse {
    return o && (o.$typeUrl === QueryAllianceDelegationResponse.typeUrl || DelegationResponse.is(o.delegation));
  },
  isSDK(o: any): o is QueryAllianceDelegationResponseSDKType {
    return o && (o.$typeUrl === QueryAllianceDelegationResponse.typeUrl || DelegationResponse.isSDK(o.delegation));
  },
  isAmino(o: any): o is QueryAllianceDelegationResponseAmino {
    return o && (o.$typeUrl === QueryAllianceDelegationResponse.typeUrl || DelegationResponse.isAmino(o.delegation));
  },
  encode(message: QueryAllianceDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = DelegationResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceDelegationResponse {
    return {
      delegation: isSet(object.delegation) ? DelegationResponse.fromJSON(object.delegation) : undefined
    };
  },
  toJSON(message: QueryAllianceDelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? DelegationResponse.toJSON(message.delegation) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceDelegationResponse>): QueryAllianceDelegationResponse {
    const message = createBaseQueryAllianceDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? DelegationResponse.fromPartial(object.delegation) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceDelegationResponseAmino): QueryAllianceDelegationResponse {
    const message = createBaseQueryAllianceDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = DelegationResponse.fromAmino(object.delegation);
    }
    return message;
  },
  toAmino(message: QueryAllianceDelegationResponse, useInterfaces: boolean = true): QueryAllianceDelegationResponseAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? DelegationResponse.toAmino(message.delegation, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceDelegationResponseAminoMsg): QueryAllianceDelegationResponse {
    return QueryAllianceDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceDelegationResponseProtoMsg, useInterfaces: boolean = true): QueryAllianceDelegationResponse {
    return QueryAllianceDelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceDelegationResponse): Uint8Array {
    return QueryAllianceDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceDelegationResponse): QueryAllianceDelegationResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceDelegationResponse",
      value: QueryAllianceDelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceDelegationResponse.typeUrl, QueryAllianceDelegationResponse);
function createBaseQueryAllianceDelegationRewardsRequest(): QueryAllianceDelegationRewardsRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    denom: "",
    pagination: undefined
  };
}
export const QueryAllianceDelegationRewardsRequest = {
  typeUrl: "/alliance.alliance.QueryAllianceDelegationRewardsRequest",
  is(o: any): o is QueryAllianceDelegationRewardsRequest {
    return o && (o.$typeUrl === QueryAllianceDelegationRewardsRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryAllianceDelegationRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryAllianceDelegationRewardsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryAllianceDelegationRewardsRequestAmino {
    return o && (o.$typeUrl === QueryAllianceDelegationRewardsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string" && typeof o.denom === "string");
  },
  encode(message: QueryAllianceDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceDelegationRewardsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceDelegationRewardsRequest>): QueryAllianceDelegationRewardsRequest {
    const message = createBaseQueryAllianceDelegationRewardsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceDelegationRewardsRequestAmino): QueryAllianceDelegationRewardsRequest {
    const message = createBaseQueryAllianceDelegationRewardsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceDelegationRewardsRequest, useInterfaces: boolean = true): QueryAllianceDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceDelegationRewardsRequestAminoMsg): QueryAllianceDelegationRewardsRequest {
    return QueryAllianceDelegationRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceDelegationRewardsRequestProtoMsg, useInterfaces: boolean = true): QueryAllianceDelegationRewardsRequest {
    return QueryAllianceDelegationRewardsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceDelegationRewardsRequest): Uint8Array {
    return QueryAllianceDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceDelegationRewardsRequest): QueryAllianceDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceDelegationRewardsRequest",
      value: QueryAllianceDelegationRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceDelegationRewardsRequest.typeUrl, QueryAllianceDelegationRewardsRequest);
function createBaseQueryIBCAllianceDelegationRewardsRequest(): QueryIBCAllianceDelegationRewardsRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    hash: "",
    pagination: undefined
  };
}
export const QueryIBCAllianceDelegationRewardsRequest = {
  typeUrl: "/alliance.alliance.QueryIBCAllianceDelegationRewardsRequest",
  is(o: any): o is QueryIBCAllianceDelegationRewardsRequest {
    return o && (o.$typeUrl === QueryIBCAllianceDelegationRewardsRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string" && typeof o.hash === "string");
  },
  isSDK(o: any): o is QueryIBCAllianceDelegationRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryIBCAllianceDelegationRewardsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string" && typeof o.hash === "string");
  },
  isAmino(o: any): o is QueryIBCAllianceDelegationRewardsRequestAmino {
    return o && (o.$typeUrl === QueryIBCAllianceDelegationRewardsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string" && typeof o.hash === "string");
  },
  encode(message: QueryIBCAllianceDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIBCAllianceDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCAllianceDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIBCAllianceDelegationRewardsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIBCAllianceDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.hash !== undefined && (obj.hash = message.hash);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIBCAllianceDelegationRewardsRequest>): QueryIBCAllianceDelegationRewardsRequest {
    const message = createBaseQueryIBCAllianceDelegationRewardsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.hash = object.hash ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryIBCAllianceDelegationRewardsRequestAmino): QueryIBCAllianceDelegationRewardsRequest {
    const message = createBaseQueryIBCAllianceDelegationRewardsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIBCAllianceDelegationRewardsRequest, useInterfaces: boolean = true): QueryIBCAllianceDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIBCAllianceDelegationRewardsRequestAminoMsg): QueryIBCAllianceDelegationRewardsRequest {
    return QueryIBCAllianceDelegationRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIBCAllianceDelegationRewardsRequestProtoMsg, useInterfaces: boolean = true): QueryIBCAllianceDelegationRewardsRequest {
    return QueryIBCAllianceDelegationRewardsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIBCAllianceDelegationRewardsRequest): Uint8Array {
    return QueryIBCAllianceDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIBCAllianceDelegationRewardsRequest): QueryIBCAllianceDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryIBCAllianceDelegationRewardsRequest",
      value: QueryIBCAllianceDelegationRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIBCAllianceDelegationRewardsRequest.typeUrl, QueryIBCAllianceDelegationRewardsRequest);
function createBaseQueryAllianceDelegationRewardsResponse(): QueryAllianceDelegationRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryAllianceDelegationRewardsResponse = {
  typeUrl: "/alliance.alliance.QueryAllianceDelegationRewardsResponse",
  is(o: any): o is QueryAllianceDelegationRewardsResponse {
    return o && (o.$typeUrl === QueryAllianceDelegationRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])));
  },
  isSDK(o: any): o is QueryAllianceDelegationRewardsResponseSDKType {
    return o && (o.$typeUrl === QueryAllianceDelegationRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is QueryAllianceDelegationRewardsResponseAmino {
    return o && (o.$typeUrl === QueryAllianceDelegationRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])));
  },
  encode(message: QueryAllianceDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceDelegationRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAllianceDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceDelegationRewardsResponse>): QueryAllianceDelegationRewardsResponse {
    const message = createBaseQueryAllianceDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllianceDelegationRewardsResponseAmino): QueryAllianceDelegationRewardsResponse {
    const message = createBaseQueryAllianceDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllianceDelegationRewardsResponse, useInterfaces: boolean = true): QueryAllianceDelegationRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllianceDelegationRewardsResponseAminoMsg): QueryAllianceDelegationRewardsResponse {
    return QueryAllianceDelegationRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceDelegationRewardsResponseProtoMsg, useInterfaces: boolean = true): QueryAllianceDelegationRewardsResponse {
    return QueryAllianceDelegationRewardsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceDelegationRewardsResponse): Uint8Array {
    return QueryAllianceDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceDelegationRewardsResponse): QueryAllianceDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceDelegationRewardsResponse",
      value: QueryAllianceDelegationRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceDelegationRewardsResponse.typeUrl, QueryAllianceDelegationRewardsResponse);
function createBaseQueryAllianceValidatorResponse(): QueryAllianceValidatorResponse {
  return {
    validatorAddr: "",
    totalDelegationShares: [],
    validatorShares: [],
    totalStaked: []
  };
}
export const QueryAllianceValidatorResponse = {
  typeUrl: "/alliance.alliance.QueryAllianceValidatorResponse",
  is(o: any): o is QueryAllianceValidatorResponse {
    return o && (o.$typeUrl === QueryAllianceValidatorResponse.typeUrl || typeof o.validatorAddr === "string" && Array.isArray(o.totalDelegationShares) && (!o.totalDelegationShares.length || DecCoin.is(o.totalDelegationShares[0])) && Array.isArray(o.validatorShares) && (!o.validatorShares.length || DecCoin.is(o.validatorShares[0])) && Array.isArray(o.totalStaked) && (!o.totalStaked.length || DecCoin.is(o.totalStaked[0])));
  },
  isSDK(o: any): o is QueryAllianceValidatorResponseSDKType {
    return o && (o.$typeUrl === QueryAllianceValidatorResponse.typeUrl || typeof o.validator_addr === "string" && Array.isArray(o.total_delegation_shares) && (!o.total_delegation_shares.length || DecCoin.isSDK(o.total_delegation_shares[0])) && Array.isArray(o.validator_shares) && (!o.validator_shares.length || DecCoin.isSDK(o.validator_shares[0])) && Array.isArray(o.total_staked) && (!o.total_staked.length || DecCoin.isSDK(o.total_staked[0])));
  },
  isAmino(o: any): o is QueryAllianceValidatorResponseAmino {
    return o && (o.$typeUrl === QueryAllianceValidatorResponse.typeUrl || typeof o.validator_addr === "string" && Array.isArray(o.total_delegation_shares) && (!o.total_delegation_shares.length || DecCoin.isAmino(o.total_delegation_shares[0])) && Array.isArray(o.validator_shares) && (!o.validator_shares.length || DecCoin.isAmino(o.validator_shares[0])) && Array.isArray(o.total_staked) && (!o.total_staked.length || DecCoin.isAmino(o.total_staked[0])));
  },
  encode(message: QueryAllianceValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    for (const v of message.totalDelegationShares) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorShares) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.totalStaked) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.totalDelegationShares.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.validatorShares.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.totalStaked.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceValidatorResponse {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      totalDelegationShares: Array.isArray(object?.totalDelegationShares) ? object.totalDelegationShares.map((e: any) => DecCoin.fromJSON(e)) : [],
      validatorShares: Array.isArray(object?.validatorShares) ? object.validatorShares.map((e: any) => DecCoin.fromJSON(e)) : [],
      totalStaked: Array.isArray(object?.totalStaked) ? object.totalStaked.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAllianceValidatorResponse): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    if (message.totalDelegationShares) {
      obj.totalDelegationShares = message.totalDelegationShares.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.totalDelegationShares = [];
    }
    if (message.validatorShares) {
      obj.validatorShares = message.validatorShares.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.validatorShares = [];
    }
    if (message.totalStaked) {
      obj.totalStaked = message.totalStaked.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.totalStaked = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceValidatorResponse>): QueryAllianceValidatorResponse {
    const message = createBaseQueryAllianceValidatorResponse();
    message.validatorAddr = object.validatorAddr ?? "";
    message.totalDelegationShares = object.totalDelegationShares?.map(e => DecCoin.fromPartial(e)) || [];
    message.validatorShares = object.validatorShares?.map(e => DecCoin.fromPartial(e)) || [];
    message.totalStaked = object.totalStaked?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllianceValidatorResponseAmino): QueryAllianceValidatorResponse {
    const message = createBaseQueryAllianceValidatorResponse();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    message.totalDelegationShares = object.total_delegation_shares?.map(e => DecCoin.fromAmino(e)) || [];
    message.validatorShares = object.validator_shares?.map(e => DecCoin.fromAmino(e)) || [];
    message.totalStaked = object.total_staked?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllianceValidatorResponse, useInterfaces: boolean = true): QueryAllianceValidatorResponseAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    if (message.totalDelegationShares) {
      obj.total_delegation_shares = message.totalDelegationShares.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total_delegation_shares = message.totalDelegationShares;
    }
    if (message.validatorShares) {
      obj.validator_shares = message.validatorShares.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_shares = message.validatorShares;
    }
    if (message.totalStaked) {
      obj.total_staked = message.totalStaked.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total_staked = message.totalStaked;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllianceValidatorResponseAminoMsg): QueryAllianceValidatorResponse {
    return QueryAllianceValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceValidatorResponseProtoMsg, useInterfaces: boolean = true): QueryAllianceValidatorResponse {
    return QueryAllianceValidatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceValidatorResponse): Uint8Array {
    return QueryAllianceValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceValidatorResponse): QueryAllianceValidatorResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceValidatorResponse",
      value: QueryAllianceValidatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceValidatorResponse.typeUrl, QueryAllianceValidatorResponse);
function createBaseQueryAllianceValidatorsResponse(): QueryAllianceValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryAllianceValidatorsResponse = {
  typeUrl: "/alliance.alliance.QueryAllianceValidatorsResponse",
  is(o: any): o is QueryAllianceValidatorsResponse {
    return o && (o.$typeUrl === QueryAllianceValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || QueryAllianceValidatorResponse.is(o.validators[0])));
  },
  isSDK(o: any): o is QueryAllianceValidatorsResponseSDKType {
    return o && (o.$typeUrl === QueryAllianceValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || QueryAllianceValidatorResponse.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is QueryAllianceValidatorsResponseAmino {
    return o && (o.$typeUrl === QueryAllianceValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || QueryAllianceValidatorResponse.isAmino(o.validators[0])));
  },
  encode(message: QueryAllianceValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      QueryAllianceValidatorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(QueryAllianceValidatorResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => QueryAllianceValidatorResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? QueryAllianceValidatorResponse.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceValidatorsResponse>): QueryAllianceValidatorsResponse {
    const message = createBaseQueryAllianceValidatorsResponse();
    message.validators = object.validators?.map(e => QueryAllianceValidatorResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceValidatorsResponseAmino): QueryAllianceValidatorsResponse {
    const message = createBaseQueryAllianceValidatorsResponse();
    message.validators = object.validators?.map(e => QueryAllianceValidatorResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceValidatorsResponse, useInterfaces: boolean = true): QueryAllianceValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? QueryAllianceValidatorResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceValidatorsResponseAminoMsg): QueryAllianceValidatorsResponse {
    return QueryAllianceValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceValidatorsResponseProtoMsg, useInterfaces: boolean = true): QueryAllianceValidatorsResponse {
    return QueryAllianceValidatorsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceValidatorsResponse): Uint8Array {
    return QueryAllianceValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceValidatorsResponse): QueryAllianceValidatorsResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceValidatorsResponse",
      value: QueryAllianceValidatorsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceValidatorsResponse.typeUrl, QueryAllianceValidatorsResponse);
function createBaseQueryAllianceUnbondingsByDenomAndDelegatorRequest(): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
  return {
    denom: "",
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryAllianceUnbondingsByDenomAndDelegatorRequest = {
  typeUrl: "/alliance.alliance.QueryAllianceUnbondingsByDenomAndDelegatorRequest",
  is(o: any): o is QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    return o && (o.$typeUrl === QueryAllianceUnbondingsByDenomAndDelegatorRequest.typeUrl || typeof o.denom === "string" && typeof o.delegatorAddr === "string");
  },
  isSDK(o: any): o is QueryAllianceUnbondingsByDenomAndDelegatorRequestSDKType {
    return o && (o.$typeUrl === QueryAllianceUnbondingsByDenomAndDelegatorRequest.typeUrl || typeof o.denom === "string" && typeof o.delegator_addr === "string");
  },
  isAmino(o: any): o is QueryAllianceUnbondingsByDenomAndDelegatorRequestAmino {
    return o && (o.$typeUrl === QueryAllianceUnbondingsByDenomAndDelegatorRequest.typeUrl || typeof o.denom === "string" && typeof o.delegator_addr === "string");
  },
  encode(message: QueryAllianceUnbondingsByDenomAndDelegatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.delegatorAddr !== "") {
      writer.uint32(18).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.delegatorAddr = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceUnbondingsByDenomAndDelegatorRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceUnbondingsByDenomAndDelegatorRequest>): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorRequest();
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceUnbondingsByDenomAndDelegatorRequestAmino): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceUnbondingsByDenomAndDelegatorRequest, useInterfaces: boolean = true): QueryAllianceUnbondingsByDenomAndDelegatorRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceUnbondingsByDenomAndDelegatorRequestAminoMsg): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    return QueryAllianceUnbondingsByDenomAndDelegatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceUnbondingsByDenomAndDelegatorRequestProtoMsg, useInterfaces: boolean = true): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    return QueryAllianceUnbondingsByDenomAndDelegatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceUnbondingsByDenomAndDelegatorRequest): Uint8Array {
    return QueryAllianceUnbondingsByDenomAndDelegatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceUnbondingsByDenomAndDelegatorRequest): QueryAllianceUnbondingsByDenomAndDelegatorRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceUnbondingsByDenomAndDelegatorRequest",
      value: QueryAllianceUnbondingsByDenomAndDelegatorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceUnbondingsByDenomAndDelegatorRequest.typeUrl, QueryAllianceUnbondingsByDenomAndDelegatorRequest);
function createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse(): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
  return {
    unbondings: [],
    pagination: undefined
  };
}
export const QueryAllianceUnbondingsByDenomAndDelegatorResponse = {
  typeUrl: "/alliance.alliance.QueryAllianceUnbondingsByDenomAndDelegatorResponse",
  is(o: any): o is QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    return o && (o.$typeUrl === QueryAllianceUnbondingsByDenomAndDelegatorResponse.typeUrl || Array.isArray(o.unbondings) && (!o.unbondings.length || UnbondingDelegation.is(o.unbondings[0])));
  },
  isSDK(o: any): o is QueryAllianceUnbondingsByDenomAndDelegatorResponseSDKType {
    return o && (o.$typeUrl === QueryAllianceUnbondingsByDenomAndDelegatorResponse.typeUrl || Array.isArray(o.unbondings) && (!o.unbondings.length || UnbondingDelegation.isSDK(o.unbondings[0])));
  },
  isAmino(o: any): o is QueryAllianceUnbondingsByDenomAndDelegatorResponseAmino {
    return o && (o.$typeUrl === QueryAllianceUnbondingsByDenomAndDelegatorResponse.typeUrl || Array.isArray(o.unbondings) && (!o.unbondings.length || UnbondingDelegation.isAmino(o.unbondings[0])));
  },
  encode(message: QueryAllianceUnbondingsByDenomAndDelegatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(UnbondingDelegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    return {
      unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e: any) => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceUnbondingsByDenomAndDelegatorResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceUnbondingsByDenomAndDelegatorResponse>): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse();
    message.unbondings = object.unbondings?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceUnbondingsByDenomAndDelegatorResponseAmino): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse();
    message.unbondings = object.unbondings?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceUnbondingsByDenomAndDelegatorResponse, useInterfaces: boolean = true): QueryAllianceUnbondingsByDenomAndDelegatorResponseAmino {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? UnbondingDelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.unbondings = message.unbondings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceUnbondingsByDenomAndDelegatorResponseAminoMsg): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    return QueryAllianceUnbondingsByDenomAndDelegatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceUnbondingsByDenomAndDelegatorResponseProtoMsg, useInterfaces: boolean = true): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    return QueryAllianceUnbondingsByDenomAndDelegatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceUnbondingsByDenomAndDelegatorResponse): Uint8Array {
    return QueryAllianceUnbondingsByDenomAndDelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceUnbondingsByDenomAndDelegatorResponse): QueryAllianceUnbondingsByDenomAndDelegatorResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceUnbondingsByDenomAndDelegatorResponse",
      value: QueryAllianceUnbondingsByDenomAndDelegatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceUnbondingsByDenomAndDelegatorResponse.typeUrl, QueryAllianceUnbondingsByDenomAndDelegatorResponse);
function createBaseQueryAllianceUnbondingsRequest(): QueryAllianceUnbondingsRequest {
  return {
    denom: "",
    delegatorAddr: "",
    validatorAddr: "",
    pagination: undefined
  };
}
export const QueryAllianceUnbondingsRequest = {
  typeUrl: "/alliance.alliance.QueryAllianceUnbondingsRequest",
  is(o: any): o is QueryAllianceUnbondingsRequest {
    return o && (o.$typeUrl === QueryAllianceUnbondingsRequest.typeUrl || typeof o.denom === "string" && typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryAllianceUnbondingsRequestSDKType {
    return o && (o.$typeUrl === QueryAllianceUnbondingsRequest.typeUrl || typeof o.denom === "string" && typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryAllianceUnbondingsRequestAmino {
    return o && (o.$typeUrl === QueryAllianceUnbondingsRequest.typeUrl || typeof o.denom === "string" && typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  encode(message: QueryAllianceUnbondingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.delegatorAddr !== "") {
      writer.uint32(18).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(26).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceUnbondingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.delegatorAddr = reader.string();
          break;
        case 3:
          message.validatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceUnbondingsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceUnbondingsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceUnbondingsRequest>): QueryAllianceUnbondingsRequest {
    const message = createBaseQueryAllianceUnbondingsRequest();
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceUnbondingsRequestAmino): QueryAllianceUnbondingsRequest {
    const message = createBaseQueryAllianceUnbondingsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceUnbondingsRequest, useInterfaces: boolean = true): QueryAllianceUnbondingsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceUnbondingsRequestAminoMsg): QueryAllianceUnbondingsRequest {
    return QueryAllianceUnbondingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceUnbondingsRequestProtoMsg, useInterfaces: boolean = true): QueryAllianceUnbondingsRequest {
    return QueryAllianceUnbondingsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceUnbondingsRequest): Uint8Array {
    return QueryAllianceUnbondingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceUnbondingsRequest): QueryAllianceUnbondingsRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceUnbondingsRequest",
      value: QueryAllianceUnbondingsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceUnbondingsRequest.typeUrl, QueryAllianceUnbondingsRequest);
function createBaseQueryAllianceUnbondingsResponse(): QueryAllianceUnbondingsResponse {
  return {
    unbondings: [],
    pagination: undefined
  };
}
export const QueryAllianceUnbondingsResponse = {
  typeUrl: "/alliance.alliance.QueryAllianceUnbondingsResponse",
  is(o: any): o is QueryAllianceUnbondingsResponse {
    return o && (o.$typeUrl === QueryAllianceUnbondingsResponse.typeUrl || Array.isArray(o.unbondings) && (!o.unbondings.length || UnbondingDelegation.is(o.unbondings[0])));
  },
  isSDK(o: any): o is QueryAllianceUnbondingsResponseSDKType {
    return o && (o.$typeUrl === QueryAllianceUnbondingsResponse.typeUrl || Array.isArray(o.unbondings) && (!o.unbondings.length || UnbondingDelegation.isSDK(o.unbondings[0])));
  },
  isAmino(o: any): o is QueryAllianceUnbondingsResponseAmino {
    return o && (o.$typeUrl === QueryAllianceUnbondingsResponse.typeUrl || Array.isArray(o.unbondings) && (!o.unbondings.length || UnbondingDelegation.isAmino(o.unbondings[0])));
  },
  encode(message: QueryAllianceUnbondingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceUnbondingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(UnbondingDelegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceUnbondingsResponse {
    return {
      unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e: any) => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceUnbondingsResponse>): QueryAllianceUnbondingsResponse {
    const message = createBaseQueryAllianceUnbondingsResponse();
    message.unbondings = object.unbondings?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceUnbondingsResponseAmino): QueryAllianceUnbondingsResponse {
    const message = createBaseQueryAllianceUnbondingsResponse();
    message.unbondings = object.unbondings?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceUnbondingsResponse, useInterfaces: boolean = true): QueryAllianceUnbondingsResponseAmino {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? UnbondingDelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.unbondings = message.unbondings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceUnbondingsResponseAminoMsg): QueryAllianceUnbondingsResponse {
    return QueryAllianceUnbondingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceUnbondingsResponseProtoMsg, useInterfaces: boolean = true): QueryAllianceUnbondingsResponse {
    return QueryAllianceUnbondingsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceUnbondingsResponse): Uint8Array {
    return QueryAllianceUnbondingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceUnbondingsResponse): QueryAllianceUnbondingsResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceUnbondingsResponse",
      value: QueryAllianceUnbondingsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceUnbondingsResponse.typeUrl, QueryAllianceUnbondingsResponse);
function createBaseQueryAllianceRedelegationsRequest(): QueryAllianceRedelegationsRequest {
  return {
    denom: "",
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryAllianceRedelegationsRequest = {
  typeUrl: "/alliance.alliance.QueryAllianceRedelegationsRequest",
  is(o: any): o is QueryAllianceRedelegationsRequest {
    return o && (o.$typeUrl === QueryAllianceRedelegationsRequest.typeUrl || typeof o.denom === "string" && typeof o.delegatorAddr === "string");
  },
  isSDK(o: any): o is QueryAllianceRedelegationsRequestSDKType {
    return o && (o.$typeUrl === QueryAllianceRedelegationsRequest.typeUrl || typeof o.denom === "string" && typeof o.delegator_addr === "string");
  },
  isAmino(o: any): o is QueryAllianceRedelegationsRequestAmino {
    return o && (o.$typeUrl === QueryAllianceRedelegationsRequest.typeUrl || typeof o.denom === "string" && typeof o.delegator_addr === "string");
  },
  encode(message: QueryAllianceRedelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.delegatorAddr !== "") {
      writer.uint32(18).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceRedelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.delegatorAddr = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceRedelegationsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceRedelegationsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceRedelegationsRequest>): QueryAllianceRedelegationsRequest {
    const message = createBaseQueryAllianceRedelegationsRequest();
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceRedelegationsRequestAmino): QueryAllianceRedelegationsRequest {
    const message = createBaseQueryAllianceRedelegationsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceRedelegationsRequest, useInterfaces: boolean = true): QueryAllianceRedelegationsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceRedelegationsRequestAminoMsg): QueryAllianceRedelegationsRequest {
    return QueryAllianceRedelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceRedelegationsRequestProtoMsg, useInterfaces: boolean = true): QueryAllianceRedelegationsRequest {
    return QueryAllianceRedelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceRedelegationsRequest): Uint8Array {
    return QueryAllianceRedelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceRedelegationsRequest): QueryAllianceRedelegationsRequestProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceRedelegationsRequest",
      value: QueryAllianceRedelegationsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceRedelegationsRequest.typeUrl, QueryAllianceRedelegationsRequest);
function createBaseQueryAllianceRedelegationsResponse(): QueryAllianceRedelegationsResponse {
  return {
    redelegations: [],
    pagination: undefined
  };
}
export const QueryAllianceRedelegationsResponse = {
  typeUrl: "/alliance.alliance.QueryAllianceRedelegationsResponse",
  is(o: any): o is QueryAllianceRedelegationsResponse {
    return o && (o.$typeUrl === QueryAllianceRedelegationsResponse.typeUrl || Array.isArray(o.redelegations) && (!o.redelegations.length || RedelegationEntry.is(o.redelegations[0])));
  },
  isSDK(o: any): o is QueryAllianceRedelegationsResponseSDKType {
    return o && (o.$typeUrl === QueryAllianceRedelegationsResponse.typeUrl || Array.isArray(o.redelegations) && (!o.redelegations.length || RedelegationEntry.isSDK(o.redelegations[0])));
  },
  isAmino(o: any): o is QueryAllianceRedelegationsResponseAmino {
    return o && (o.$typeUrl === QueryAllianceRedelegationsResponse.typeUrl || Array.isArray(o.redelegations) && (!o.redelegations.length || RedelegationEntry.isAmino(o.redelegations[0])));
  },
  encode(message: QueryAllianceRedelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegations) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllianceRedelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegations.push(RedelegationEntry.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllianceRedelegationsResponse {
    return {
      redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => RedelegationEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllianceRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationEntry.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceRedelegationsResponse>): QueryAllianceRedelegationsResponse {
    const message = createBaseQueryAllianceRedelegationsResponse();
    message.redelegations = object.redelegations?.map(e => RedelegationEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllianceRedelegationsResponseAmino): QueryAllianceRedelegationsResponse {
    const message = createBaseQueryAllianceRedelegationsResponse();
    message.redelegations = object.redelegations?.map(e => RedelegationEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllianceRedelegationsResponse, useInterfaces: boolean = true): QueryAllianceRedelegationsResponseAmino {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationEntry.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.redelegations = message.redelegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllianceRedelegationsResponseAminoMsg): QueryAllianceRedelegationsResponse {
    return QueryAllianceRedelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllianceRedelegationsResponseProtoMsg, useInterfaces: boolean = true): QueryAllianceRedelegationsResponse {
    return QueryAllianceRedelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllianceRedelegationsResponse): Uint8Array {
    return QueryAllianceRedelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllianceRedelegationsResponse): QueryAllianceRedelegationsResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueryAllianceRedelegationsResponse",
      value: QueryAllianceRedelegationsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllianceRedelegationsResponse.typeUrl, QueryAllianceRedelegationsResponse);