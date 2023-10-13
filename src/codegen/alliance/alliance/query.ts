import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { AllianceAsset, AllianceAssetSDKType } from "./alliance";
import { Delegation, DelegationSDKType } from "./delegations";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { UnbondingDelegation, UnbondingDelegationSDKType } from "./unbonding";
import { RedelegationEntry, RedelegationEntrySDKType } from "./redelegations";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params */
export interface QueryParamsRequest {}
/** Params */
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** Alliances */
export interface QueryAlliancesRequest {
  pagination: PageRequest;
}
/** Alliances */
export interface QueryAlliancesRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAlliancesResponse {
  alliances: AllianceAsset[];
  pagination: PageResponse;
}
export interface QueryAlliancesResponseSDKType {
  alliances: AllianceAssetSDKType[];
  pagination: PageResponseSDKType;
}
/** Alliance */
export interface QueryAllianceRequest {
  denom: string;
}
/** Alliance */
export interface QueryAllianceRequestSDKType {
  denom: string;
}
export interface QueryAllianceResponse {
  alliance: AllianceAsset;
}
export interface QueryAllianceResponseSDKType {
  alliance: AllianceAssetSDKType;
}
/** @deprecated */
export interface QueryIBCAllianceRequest {
  hash: string;
}
/** @deprecated */
export interface QueryIBCAllianceRequestSDKType {
  hash: string;
}
export interface QueryAllianceValidatorRequest {
  validatorAddr: string;
}
export interface QueryAllianceValidatorRequestSDKType {
  validator_addr: string;
}
export interface QueryAllAllianceValidatorsRequest {
  pagination: PageRequest;
}
export interface QueryAllAllianceValidatorsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllAlliancesDelegationsRequest {
  pagination: PageRequest;
}
export interface QueryAllAlliancesDelegationsRequestSDKType {
  pagination: PageRequestSDKType;
}
/** AlliancesDelegation */
export interface QueryAlliancesDelegationsRequest {
  delegatorAddr: string;
  pagination: PageRequest;
}
/** AlliancesDelegation */
export interface QueryAlliancesDelegationsRequestSDKType {
  delegator_addr: string;
  pagination: PageRequestSDKType;
}
/** AlliancesDelegationByValidator */
export interface QueryAlliancesDelegationByValidatorRequest {
  delegatorAddr: string;
  validatorAddr: string;
  pagination: PageRequest;
}
/** AlliancesDelegationByValidator */
export interface QueryAlliancesDelegationByValidatorRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  pagination: PageRequestSDKType;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation;
  balance: Coin;
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
  pagination: PageResponse;
}
export interface QueryAlliancesDelegationsResponseSDKType {
  delegations: DelegationResponseSDKType[];
  pagination: PageResponseSDKType;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination: PageRequest;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  denom: string;
  pagination: PageRequestSDKType;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  hash: string;
  pagination: PageRequest;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  hash: string;
  pagination: PageRequestSDKType;
}
export interface QueryAllianceDelegationResponse {
  delegation: DelegationResponse;
}
export interface QueryAllianceDelegationResponseSDKType {
  delegation: DelegationResponseSDKType;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination: PageRequest;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRewardsRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  denom: string;
  pagination: PageRequestSDKType;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  hash: string;
  pagination: PageRequest;
}
/** @deprecated */
export interface QueryIBCAllianceDelegationRewardsRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
  hash: string;
  pagination: PageRequestSDKType;
}
export interface QueryAllianceDelegationRewardsResponse {
  rewards: Coin[];
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
export interface QueryAllianceValidatorResponseSDKType {
  validator_addr: string;
  total_delegation_shares: DecCoinSDKType[];
  validator_shares: DecCoinSDKType[];
  total_staked: DecCoinSDKType[];
}
export interface QueryAllianceValidatorsResponse {
  validators: QueryAllianceValidatorResponse[];
  pagination: PageResponse;
}
export interface QueryAllianceValidatorsResponseSDKType {
  validators: QueryAllianceValidatorResponseSDKType[];
  pagination: PageResponseSDKType;
}
/** AllianceDelegation */
export interface QueryAllianceUnbondingsByDenomAndDelegatorRequest {
  denom: string;
  delegatorAddr: string;
  pagination: PageRequest;
}
/** AllianceDelegation */
export interface QueryAllianceUnbondingsByDenomAndDelegatorRequestSDKType {
  denom: string;
  delegator_addr: string;
  pagination: PageRequestSDKType;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorResponse {
  unbondings: UnbondingDelegation[];
  pagination: PageResponse;
}
export interface QueryAllianceUnbondingsByDenomAndDelegatorResponseSDKType {
  unbondings: UnbondingDelegationSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryAllianceUnbondingsRequest {
  denom: string;
  delegatorAddr: string;
  validatorAddr: string;
  pagination: PageRequest;
}
export interface QueryAllianceUnbondingsRequestSDKType {
  denom: string;
  delegator_addr: string;
  validator_addr: string;
  pagination: PageRequestSDKType;
}
export interface QueryAllianceUnbondingsResponse {
  unbondings: UnbondingDelegation[];
  pagination: PageResponse;
}
export interface QueryAllianceUnbondingsResponseSDKType {
  unbondings: UnbondingDelegationSDKType[];
  pagination: PageResponseSDKType;
}
/** Redelegations */
export interface QueryAllianceRedelegationsRequest {
  denom: string;
  delegatorAddr: string;
  pagination: PageRequest;
}
/** Redelegations */
export interface QueryAllianceRedelegationsRequestSDKType {
  denom: string;
  delegator_addr: string;
  pagination: PageRequestSDKType;
}
export interface QueryAllianceRedelegationsResponse {
  redelegations: RedelegationEntry[];
  pagination: PageResponse;
}
export interface QueryAllianceRedelegationsResponseSDKType {
  redelegations: RedelegationEntrySDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAlliancesRequest(): QueryAlliancesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAlliancesRequest = {
  encode(message: QueryAlliancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAlliancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAlliancesResponse(): QueryAlliancesResponse {
  return {
    alliances: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAlliancesResponse = {
  encode(message: QueryAlliancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.alliances) {
      AllianceAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAlliancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alliances.push(AllianceAsset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceRequest(): QueryAllianceRequest {
  return {
    denom: ""
  };
}
export const QueryAllianceRequest = {
  encode(message: QueryAllianceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceRequest {
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
  }
};
function createBaseQueryAllianceResponse(): QueryAllianceResponse {
  return {
    alliance: AllianceAsset.fromPartial({})
  };
}
export const QueryAllianceResponse = {
  encode(message: QueryAllianceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alliance !== undefined) {
      AllianceAsset.encode(message.alliance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alliance = AllianceAsset.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryIBCAllianceRequest(): QueryIBCAllianceRequest {
  return {
    hash: ""
  };
}
export const QueryIBCAllianceRequest = {
  encode(message: QueryIBCAllianceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCAllianceRequest {
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
  }
};
function createBaseQueryAllianceValidatorRequest(): QueryAllianceValidatorRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryAllianceValidatorRequest = {
  encode(message: QueryAllianceValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceValidatorRequest {
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
  }
};
function createBaseQueryAllAllianceValidatorsRequest(): QueryAllAllianceValidatorsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllAllianceValidatorsRequest = {
  encode(message: QueryAllAllianceValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAllianceValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllianceValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllAlliancesDelegationsRequest(): QueryAllAlliancesDelegationsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllAlliancesDelegationsRequest = {
  encode(message: QueryAllAlliancesDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAlliancesDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAlliancesDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAlliancesDelegationsRequest(): QueryAlliancesDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAlliancesDelegationsRequest = {
  encode(message: QueryAlliancesDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAlliancesDelegationsRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAlliancesDelegationByValidatorRequest(): QueryAlliancesDelegationByValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAlliancesDelegationByValidatorRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAlliancesDelegationByValidatorRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: Delegation.fromPartial({}),
    balance: Coin.fromPartial({})
  };
}
export const DelegationResponse = {
  encode(message: DelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAlliancesDelegationsResponse(): QueryAlliancesDelegationsResponse {
  return {
    delegations: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAlliancesDelegationsResponse = {
  encode(message: QueryAlliancesDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAlliancesDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceDelegationRequest(): QueryAllianceDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    denom: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllianceDelegationRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceDelegationRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryIBCAllianceDelegationRequest(): QueryIBCAllianceDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    hash: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryIBCAllianceDelegationRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCAllianceDelegationRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceDelegationResponse(): QueryAllianceDelegationResponse {
  return {
    delegation: DelegationResponse.fromPartial({})
  };
}
export const QueryAllianceDelegationResponse = {
  encode(message: QueryAllianceDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = DelegationResponse.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceDelegationRewardsRequest(): QueryAllianceDelegationRewardsRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    denom: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllianceDelegationRewardsRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceDelegationRewardsRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryIBCAllianceDelegationRewardsRequest(): QueryIBCAllianceDelegationRewardsRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    hash: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryIBCAllianceDelegationRewardsRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCAllianceDelegationRewardsRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceDelegationRewardsResponse(): QueryAllianceDelegationRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryAllianceDelegationRewardsResponse = {
  encode(message: QueryAllianceDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
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
  }
};
function createBaseQueryAllianceValidatorResponse(): QueryAllianceValidatorResponse {
  return {
    validatorAddr: "",
    totalDelegationShares: [],
    validatorShares: [],
    totalStaked: []
  };
}
export const QueryAllianceValidatorResponse = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceValidatorResponse {
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
          message.totalDelegationShares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validatorShares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalStaked.push(DecCoin.decode(reader, reader.uint32()));
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
  }
};
function createBaseQueryAllianceValidatorsResponse(): QueryAllianceValidatorsResponse {
  return {
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllianceValidatorsResponse = {
  encode(message: QueryAllianceValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      QueryAllianceValidatorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(QueryAllianceValidatorResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceUnbondingsByDenomAndDelegatorRequest(): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
  return {
    denom: "",
    delegatorAddr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllianceUnbondingsByDenomAndDelegatorRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse(): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
  return {
    unbondings: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllianceUnbondingsByDenomAndDelegatorResponse = {
  encode(message: QueryAllianceUnbondingsByDenomAndDelegatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceUnbondingsRequest(): QueryAllianceUnbondingsRequest {
  return {
    denom: "",
    delegatorAddr: "",
    validatorAddr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllianceUnbondingsRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceUnbondingsRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceUnbondingsResponse(): QueryAllianceUnbondingsResponse {
  return {
    unbondings: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllianceUnbondingsResponse = {
  encode(message: QueryAllianceUnbondingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceUnbondingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceRedelegationsRequest(): QueryAllianceRedelegationsRequest {
  return {
    denom: "",
    delegatorAddr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllianceRedelegationsRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceRedelegationsRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryAllianceRedelegationsResponse(): QueryAllianceRedelegationsResponse {
  return {
    redelegations: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllianceRedelegationsResponse = {
  encode(message: QueryAllianceRedelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegations) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceRedelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegations.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
  }
};