import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { UserStakeState, UserStakeStateSDKType } from "./user_stake_state";
import { AssetPoolState, AssetPoolStateSDKType, AssetMaturityPoolState, AssetMaturityPoolStateSDKType } from "./asset_pool_state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryBondedAmountRequest {
  assetId: string;
  maturity: string;
  address: string;
}
export interface QueryBondedAmountRequestSDKType {
  asset_id: string;
  maturity: string;
  address: string;
}
export interface QueryBondedAmountResponse {
  amount: string;
}
export interface QueryBondedAmountResponseSDKType {
  amount: string;
}
export interface QueryRewardRequest {
  denom: string;
  address: string;
}
export interface QueryRewardRequestSDKType {
  denom: string;
  address: string;
}
export interface QueryRewardResponse {
  amount: Coin;
}
export interface QueryRewardResponseSDKType {
  amount: CoinSDKType;
}
export interface QueryGetUserStakeStateRequest {
  address: string;
  assetId: string;
  maturitySymbol: string;
}
export interface QueryGetUserStakeStateRequestSDKType {
  address: string;
  asset_id: string;
  maturity_symbol: string;
}
export interface QueryGetUserStakeStateResponse {
  userStakeState: UserStakeState;
}
export interface QueryGetUserStakeStateResponseSDKType {
  user_stake_state: UserStakeStateSDKType;
}
export interface QueryAllUserStakeStateRequest {
  pagination?: PageRequest;
  address: string;
  assetId: string;
}
export interface QueryAllUserStakeStateRequestSDKType {
  pagination?: PageRequestSDKType;
  address: string;
  asset_id: string;
}
export interface QueryAllUserStakeStateResponse {
  userStakeState: UserStakeState[];
  pagination?: PageResponse;
}
export interface QueryAllUserStakeStateResponseSDKType {
  user_stake_state: UserStakeStateSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetAssetPoolStateRequest {
  assetId: string;
}
export interface QueryGetAssetPoolStateRequestSDKType {
  asset_id: string;
}
export interface QueryGetAssetPoolStateResponse {
  assetPoolState: AssetPoolState;
}
export interface QueryGetAssetPoolStateResponseSDKType {
  asset_pool_state: AssetPoolStateSDKType;
}
export interface QueryAllAssetPoolStateRequest {
  pagination?: PageRequest;
}
export interface QueryAllAssetPoolStateRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAssetPoolStateResponse {
  assetPoolState: AssetPoolState[];
  pagination?: PageResponse;
}
export interface QueryAllAssetPoolStateResponseSDKType {
  asset_pool_state: AssetPoolStateSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetAssetMaturityPoolStateRequest {
  assetId: string;
  maturitySymbol: string;
}
export interface QueryGetAssetMaturityPoolStateRequestSDKType {
  asset_id: string;
  maturity_symbol: string;
}
export interface QueryGetAssetMaturityPoolStateResponse {
  assetMaturityPoolState: AssetMaturityPoolState;
}
export interface QueryGetAssetMaturityPoolStateResponseSDKType {
  asset_maturity_pool_state: AssetMaturityPoolStateSDKType;
}
export interface QueryAllAssetMaturityPoolStateRequest {
  pagination?: PageRequest;
}
export interface QueryAllAssetMaturityPoolStateRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAssetMaturityPoolStateResponse {
  assetMaturityPoolState: AssetMaturityPoolState[];
  pagination?: PageResponse;
}
export interface QueryAllAssetMaturityPoolStateResponseSDKType {
  asset_maturity_pool_state: AssetMaturityPoolStateSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryBondedAmountRequest(): QueryBondedAmountRequest {
  return {
    assetId: "",
    maturity: "",
    address: ""
  };
}
export const QueryBondedAmountRequest = {
  encode(message: QueryBondedAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.maturity !== "") {
      writer.uint32(18).string(message.maturity);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.maturity = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBondedAmountRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturity: isSet(object.maturity) ? String(object.maturity) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryBondedAmountRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryBondedAmountRequest>): QueryBondedAmountRequest {
    const message = createBaseQueryBondedAmountRequest();
    message.assetId = object.assetId ?? "";
    message.maturity = object.maturity ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryBondedAmountResponse(): QueryBondedAmountResponse {
  return {
    amount: ""
  };
}
export const QueryBondedAmountResponse = {
  encode(message: QueryBondedAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBondedAmountResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: QueryBondedAmountResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<QueryBondedAmountResponse>): QueryBondedAmountResponse {
    const message = createBaseQueryBondedAmountResponse();
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseQueryRewardRequest(): QueryRewardRequest {
  return {
    denom: "",
    address: ""
  };
}
export const QueryRewardRequest = {
  encode(message: QueryRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryRewardRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardRequest>): QueryRewardRequest {
    const message = createBaseQueryRewardRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryRewardResponse(): QueryRewardResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryRewardResponse = {
  encode(message: QueryRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: QueryRewardResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardResponse>): QueryRewardResponse {
    const message = createBaseQueryRewardResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseQueryGetUserStakeStateRequest(): QueryGetUserStakeStateRequest {
  return {
    address: "",
    assetId: "",
    maturitySymbol: ""
  };
}
export const QueryGetUserStakeStateRequest = {
  encode(message: QueryGetUserStakeStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserStakeStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserStakeStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.maturitySymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUserStakeStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: QueryGetUserStakeStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUserStakeStateRequest>): QueryGetUserStakeStateRequest {
    const message = createBaseQueryGetUserStakeStateRequest();
    message.address = object.address ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  }
};
function createBaseQueryGetUserStakeStateResponse(): QueryGetUserStakeStateResponse {
  return {
    userStakeState: UserStakeState.fromPartial({})
  };
}
export const QueryGetUserStakeStateResponse = {
  encode(message: QueryGetUserStakeStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userStakeState !== undefined) {
      UserStakeState.encode(message.userStakeState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserStakeStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserStakeStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userStakeState = UserStakeState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUserStakeStateResponse {
    return {
      userStakeState: isSet(object.userStakeState) ? UserStakeState.fromJSON(object.userStakeState) : undefined
    };
  },
  toJSON(message: QueryGetUserStakeStateResponse): unknown {
    const obj: any = {};
    message.userStakeState !== undefined && (obj.userStakeState = message.userStakeState ? UserStakeState.toJSON(message.userStakeState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUserStakeStateResponse>): QueryGetUserStakeStateResponse {
    const message = createBaseQueryGetUserStakeStateResponse();
    message.userStakeState = object.userStakeState !== undefined && object.userStakeState !== null ? UserStakeState.fromPartial(object.userStakeState) : undefined;
    return message;
  }
};
function createBaseQueryAllUserStakeStateRequest(): QueryAllUserStakeStateRequest {
  return {
    pagination: undefined,
    address: "",
    assetId: ""
  };
}
export const QueryAllUserStakeStateRequest = {
  encode(message: QueryAllUserStakeStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.assetId !== "") {
      writer.uint32(26).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserStakeStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserStakeStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserStakeStateRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryAllUserStakeStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.address !== undefined && (obj.address = message.address);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUserStakeStateRequest>): QueryAllUserStakeStateRequest {
    const message = createBaseQueryAllUserStakeStateRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.address = object.address ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseQueryAllUserStakeStateResponse(): QueryAllUserStakeStateResponse {
  return {
    userStakeState: [],
    pagination: undefined
  };
}
export const QueryAllUserStakeStateResponse = {
  encode(message: QueryAllUserStakeStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userStakeState) {
      UserStakeState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserStakeStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserStakeStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userStakeState.push(UserStakeState.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllUserStakeStateResponse {
    return {
      userStakeState: Array.isArray(object?.userStakeState) ? object.userStakeState.map((e: any) => UserStakeState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllUserStakeStateResponse): unknown {
    const obj: any = {};
    if (message.userStakeState) {
      obj.userStakeState = message.userStakeState.map(e => e ? UserStakeState.toJSON(e) : undefined);
    } else {
      obj.userStakeState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUserStakeStateResponse>): QueryAllUserStakeStateResponse {
    const message = createBaseQueryAllUserStakeStateResponse();
    message.userStakeState = object.userStakeState?.map(e => UserStakeState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetAssetPoolStateRequest(): QueryGetAssetPoolStateRequest {
  return {
    assetId: ""
  };
}
export const QueryGetAssetPoolStateRequest = {
  encode(message: QueryGetAssetPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAssetPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetPoolStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAssetPoolStateRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetAssetPoolStateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetPoolStateRequest>): QueryGetAssetPoolStateRequest {
    const message = createBaseQueryGetAssetPoolStateRequest();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseQueryGetAssetPoolStateResponse(): QueryGetAssetPoolStateResponse {
  return {
    assetPoolState: AssetPoolState.fromPartial({})
  };
}
export const QueryGetAssetPoolStateResponse = {
  encode(message: QueryGetAssetPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetPoolState !== undefined) {
      AssetPoolState.encode(message.assetPoolState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAssetPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetPoolStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetPoolState = AssetPoolState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAssetPoolStateResponse {
    return {
      assetPoolState: isSet(object.assetPoolState) ? AssetPoolState.fromJSON(object.assetPoolState) : undefined
    };
  },
  toJSON(message: QueryGetAssetPoolStateResponse): unknown {
    const obj: any = {};
    message.assetPoolState !== undefined && (obj.assetPoolState = message.assetPoolState ? AssetPoolState.toJSON(message.assetPoolState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetPoolStateResponse>): QueryGetAssetPoolStateResponse {
    const message = createBaseQueryGetAssetPoolStateResponse();
    message.assetPoolState = object.assetPoolState !== undefined && object.assetPoolState !== null ? AssetPoolState.fromPartial(object.assetPoolState) : undefined;
    return message;
  }
};
function createBaseQueryAllAssetPoolStateRequest(): QueryAllAssetPoolStateRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAssetPoolStateRequest = {
  encode(message: QueryAllAssetPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAssetPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetPoolStateRequest();
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
  fromJSON(object: any): QueryAllAssetPoolStateRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAssetPoolStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAssetPoolStateRequest>): QueryAllAssetPoolStateRequest {
    const message = createBaseQueryAllAssetPoolStateRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllAssetPoolStateResponse(): QueryAllAssetPoolStateResponse {
  return {
    assetPoolState: [],
    pagination: undefined
  };
}
export const QueryAllAssetPoolStateResponse = {
  encode(message: QueryAllAssetPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetPoolState) {
      AssetPoolState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAssetPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetPoolStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetPoolState.push(AssetPoolState.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllAssetPoolStateResponse {
    return {
      assetPoolState: Array.isArray(object?.assetPoolState) ? object.assetPoolState.map((e: any) => AssetPoolState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAssetPoolStateResponse): unknown {
    const obj: any = {};
    if (message.assetPoolState) {
      obj.assetPoolState = message.assetPoolState.map(e => e ? AssetPoolState.toJSON(e) : undefined);
    } else {
      obj.assetPoolState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAssetPoolStateResponse>): QueryAllAssetPoolStateResponse {
    const message = createBaseQueryAllAssetPoolStateResponse();
    message.assetPoolState = object.assetPoolState?.map(e => AssetPoolState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetAssetMaturityPoolStateRequest(): QueryGetAssetMaturityPoolStateRequest {
  return {
    assetId: "",
    maturitySymbol: ""
  };
}
export const QueryGetAssetMaturityPoolStateRequest = {
  encode(message: QueryGetAssetMaturityPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(18).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAssetMaturityPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetMaturityPoolStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.maturitySymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAssetMaturityPoolStateRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: QueryGetAssetMaturityPoolStateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetMaturityPoolStateRequest>): QueryGetAssetMaturityPoolStateRequest {
    const message = createBaseQueryGetAssetMaturityPoolStateRequest();
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  }
};
function createBaseQueryGetAssetMaturityPoolStateResponse(): QueryGetAssetMaturityPoolStateResponse {
  return {
    assetMaturityPoolState: AssetMaturityPoolState.fromPartial({})
  };
}
export const QueryGetAssetMaturityPoolStateResponse = {
  encode(message: QueryGetAssetMaturityPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetMaturityPoolState !== undefined) {
      AssetMaturityPoolState.encode(message.assetMaturityPoolState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAssetMaturityPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetMaturityPoolStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetMaturityPoolState = AssetMaturityPoolState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAssetMaturityPoolStateResponse {
    return {
      assetMaturityPoolState: isSet(object.assetMaturityPoolState) ? AssetMaturityPoolState.fromJSON(object.assetMaturityPoolState) : undefined
    };
  },
  toJSON(message: QueryGetAssetMaturityPoolStateResponse): unknown {
    const obj: any = {};
    message.assetMaturityPoolState !== undefined && (obj.assetMaturityPoolState = message.assetMaturityPoolState ? AssetMaturityPoolState.toJSON(message.assetMaturityPoolState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetMaturityPoolStateResponse>): QueryGetAssetMaturityPoolStateResponse {
    const message = createBaseQueryGetAssetMaturityPoolStateResponse();
    message.assetMaturityPoolState = object.assetMaturityPoolState !== undefined && object.assetMaturityPoolState !== null ? AssetMaturityPoolState.fromPartial(object.assetMaturityPoolState) : undefined;
    return message;
  }
};
function createBaseQueryAllAssetMaturityPoolStateRequest(): QueryAllAssetMaturityPoolStateRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAssetMaturityPoolStateRequest = {
  encode(message: QueryAllAssetMaturityPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAssetMaturityPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetMaturityPoolStateRequest();
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
  fromJSON(object: any): QueryAllAssetMaturityPoolStateRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAssetMaturityPoolStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAssetMaturityPoolStateRequest>): QueryAllAssetMaturityPoolStateRequest {
    const message = createBaseQueryAllAssetMaturityPoolStateRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllAssetMaturityPoolStateResponse(): QueryAllAssetMaturityPoolStateResponse {
  return {
    assetMaturityPoolState: [],
    pagination: undefined
  };
}
export const QueryAllAssetMaturityPoolStateResponse = {
  encode(message: QueryAllAssetMaturityPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetMaturityPoolState) {
      AssetMaturityPoolState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAssetMaturityPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetMaturityPoolStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetMaturityPoolState.push(AssetMaturityPoolState.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllAssetMaturityPoolStateResponse {
    return {
      assetMaturityPoolState: Array.isArray(object?.assetMaturityPoolState) ? object.assetMaturityPoolState.map((e: any) => AssetMaturityPoolState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAssetMaturityPoolStateResponse): unknown {
    const obj: any = {};
    if (message.assetMaturityPoolState) {
      obj.assetMaturityPoolState = message.assetMaturityPoolState.map(e => e ? AssetMaturityPoolState.toJSON(e) : undefined);
    } else {
      obj.assetMaturityPoolState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAssetMaturityPoolStateResponse>): QueryAllAssetMaturityPoolStateResponse {
    const message = createBaseQueryAllAssetMaturityPoolStateResponse();
    message.assetMaturityPoolState = object.assetMaturityPoolState?.map(e => AssetMaturityPoolState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};