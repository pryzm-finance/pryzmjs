import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { HostChain, HostChainSDKType, HostChainState, HostChainStateSDKType } from "./host_chain";
import { Undelegation, UndelegationSDKType, ChannelUndelegation, ChannelUndelegationSDKType } from "./undelegation";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetHostChainRequest {
  hostChainId: string;
}
export interface QueryGetHostChainRequestSDKType {
  host_chain_id: string;
}
export interface QueryGetHostChainResponse {
  hostChain: HostChain;
}
export interface QueryGetHostChainResponseSDKType {
  host_chain: HostChainSDKType;
}
export interface QueryAllHostChainRequest {
  pagination?: PageRequest;
}
export interface QueryAllHostChainRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllHostChainResponse {
  hostChain: HostChain[];
  pagination?: PageResponse;
}
export interface QueryAllHostChainResponseSDKType {
  host_chain: HostChainSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetHostChainStateRequest {
  hostChainId: string;
}
export interface QueryGetHostChainStateRequestSDKType {
  host_chain_id: string;
}
export interface QueryGetHostChainStateResponse {
  hostChainState: HostChainState;
}
export interface QueryGetHostChainStateResponseSDKType {
  host_chain_state: HostChainStateSDKType;
}
export interface QueryAllHostChainStateRequest {
  pagination?: PageRequest;
}
export interface QueryAllHostChainStateRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllHostChainStateResponse {
  hostChainState: HostChainState[];
  pagination?: PageResponse;
}
export interface QueryAllHostChainStateResponseSDKType {
  host_chain_state: HostChainStateSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetUndelegationRequest {
  hostChain: string;
  epoch: bigint;
}
export interface QueryGetUndelegationRequestSDKType {
  host_chain: string;
  epoch: bigint;
}
export interface QueryGetUndelegationResponse {
  undelegation: Undelegation;
}
export interface QueryGetUndelegationResponseSDKType {
  undelegation: UndelegationSDKType;
}
export interface QueryAllUndelegationRequest {
  hostChain: string;
  pagination?: PageRequest;
}
export interface QueryAllUndelegationRequestSDKType {
  host_chain: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllUndelegationResponse {
  undelegation: Undelegation[];
  pagination?: PageResponse;
}
export interface QueryAllUndelegationResponseSDKType {
  undelegation: UndelegationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryIncompleteUndelegationRequest {
  hostChain: string;
  pagination?: PageRequest;
}
export interface QueryIncompleteUndelegationRequestSDKType {
  host_chain: string;
  pagination?: PageRequestSDKType;
}
export interface QueryIncompleteUndelegationResponse {
  undelegation: Undelegation[];
  pagination?: PageResponse;
}
export interface QueryIncompleteUndelegationResponseSDKType {
  undelegation: UndelegationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetChannelUndelegationRequest {
  hostChain: string;
  epoch: bigint;
  transferChannel: string;
}
export interface QueryGetChannelUndelegationRequestSDKType {
  host_chain: string;
  epoch: bigint;
  transfer_channel: string;
}
export interface QueryGetChannelUndelegationResponse {
  channelUndelegation: ChannelUndelegation;
}
export interface QueryGetChannelUndelegationResponseSDKType {
  channel_undelegation: ChannelUndelegationSDKType;
}
export interface QueryAllChannelUndelegationRequest {
  hostChain: string;
  epoch: bigint;
  pagination?: PageRequest;
}
export interface QueryAllChannelUndelegationRequestSDKType {
  host_chain: string;
  epoch: bigint;
  pagination?: PageRequestSDKType;
}
export interface QueryAllChannelUndelegationResponse {
  channelUndelegation: ChannelUndelegation[];
  pagination?: PageResponse;
}
export interface QueryAllChannelUndelegationResponseSDKType {
  channel_undelegation: ChannelUndelegationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDelegationQueueBalanceRequest {
  hostChain: string;
  transferChannel: string;
}
export interface QueryDelegationQueueBalanceRequestSDKType {
  host_chain: string;
  transfer_channel: string;
}
export interface QueryDelegationQueueBalanceResponse {
  balance: Coin;
}
export interface QueryDelegationQueueBalanceResponseSDKType {
  balance: CoinSDKType;
}
export interface QueryEpochInfoRequest {
  hostChain: string;
}
export interface QueryEpochInfoRequestSDKType {
  host_chain: string;
}
export interface QueryEpochInfoResponse {
  lastDelegationTime: Timestamp;
  lastUndelegationTime: Timestamp;
  currentUndelegationEpoch: bigint;
}
export interface QueryEpochInfoResponseSDKType {
  last_delegation_time: TimestampSDKType;
  last_undelegation_time: TimestampSDKType;
  current_undelegation_epoch: bigint;
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
function createBaseQueryGetHostChainRequest(): QueryGetHostChainRequest {
  return {
    hostChainId: ""
  };
}
export const QueryGetHostChainRequest = {
  encode(message: QueryGetHostChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHostChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetHostChainRequest {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : ""
    };
  },
  toJSON(message: QueryGetHostChainRequest): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetHostChainRequest>): QueryGetHostChainRequest {
    const message = createBaseQueryGetHostChainRequest();
    message.hostChainId = object.hostChainId ?? "";
    return message;
  }
};
function createBaseQueryGetHostChainResponse(): QueryGetHostChainResponse {
  return {
    hostChain: HostChain.fromPartial({})
  };
}
export const QueryGetHostChainResponse = {
  encode(message: QueryGetHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = HostChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetHostChainResponse {
    return {
      hostChain: isSet(object.hostChain) ? HostChain.fromJSON(object.hostChain) : undefined
    };
  },
  toJSON(message: QueryGetHostChainResponse): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetHostChainResponse>): QueryGetHostChainResponse {
    const message = createBaseQueryGetHostChainResponse();
    message.hostChain = object.hostChain !== undefined && object.hostChain !== null ? HostChain.fromPartial(object.hostChain) : undefined;
    return message;
  }
};
function createBaseQueryAllHostChainRequest(): QueryAllHostChainRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllHostChainRequest = {
  encode(message: QueryAllHostChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHostChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainRequest();
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
  fromJSON(object: any): QueryAllHostChainRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllHostChainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllHostChainRequest>): QueryAllHostChainRequest {
    const message = createBaseQueryAllHostChainRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllHostChainResponse(): QueryAllHostChainResponse {
  return {
    hostChain: [],
    pagination: undefined
  };
}
export const QueryAllHostChainResponse = {
  encode(message: QueryAllHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hostChain) {
      HostChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain.push(HostChain.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllHostChainResponse {
    return {
      hostChain: Array.isArray(object?.hostChain) ? object.hostChain.map((e: any) => HostChain.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllHostChainResponse): unknown {
    const obj: any = {};
    if (message.hostChain) {
      obj.hostChain = message.hostChain.map(e => e ? HostChain.toJSON(e) : undefined);
    } else {
      obj.hostChain = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllHostChainResponse>): QueryAllHostChainResponse {
    const message = createBaseQueryAllHostChainResponse();
    message.hostChain = object.hostChain?.map(e => HostChain.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetHostChainStateRequest(): QueryGetHostChainStateRequest {
  return {
    hostChainId: ""
  };
}
export const QueryGetHostChainStateRequest = {
  encode(message: QueryGetHostChainStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHostChainStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetHostChainStateRequest {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : ""
    };
  },
  toJSON(message: QueryGetHostChainStateRequest): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetHostChainStateRequest>): QueryGetHostChainStateRequest {
    const message = createBaseQueryGetHostChainStateRequest();
    message.hostChainId = object.hostChainId ?? "";
    return message;
  }
};
function createBaseQueryGetHostChainStateResponse(): QueryGetHostChainStateResponse {
  return {
    hostChainState: HostChainState.fromPartial({})
  };
}
export const QueryGetHostChainStateResponse = {
  encode(message: QueryGetHostChainStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainState !== undefined) {
      HostChainState.encode(message.hostChainState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHostChainStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainState = HostChainState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetHostChainStateResponse {
    return {
      hostChainState: isSet(object.hostChainState) ? HostChainState.fromJSON(object.hostChainState) : undefined
    };
  },
  toJSON(message: QueryGetHostChainStateResponse): unknown {
    const obj: any = {};
    message.hostChainState !== undefined && (obj.hostChainState = message.hostChainState ? HostChainState.toJSON(message.hostChainState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetHostChainStateResponse>): QueryGetHostChainStateResponse {
    const message = createBaseQueryGetHostChainStateResponse();
    message.hostChainState = object.hostChainState !== undefined && object.hostChainState !== null ? HostChainState.fromPartial(object.hostChainState) : undefined;
    return message;
  }
};
function createBaseQueryAllHostChainStateRequest(): QueryAllHostChainStateRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllHostChainStateRequest = {
  encode(message: QueryAllHostChainStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHostChainStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainStateRequest();
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
  fromJSON(object: any): QueryAllHostChainStateRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllHostChainStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllHostChainStateRequest>): QueryAllHostChainStateRequest {
    const message = createBaseQueryAllHostChainStateRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllHostChainStateResponse(): QueryAllHostChainStateResponse {
  return {
    hostChainState: [],
    pagination: undefined
  };
}
export const QueryAllHostChainStateResponse = {
  encode(message: QueryAllHostChainStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hostChainState) {
      HostChainState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHostChainStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainState.push(HostChainState.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllHostChainStateResponse {
    return {
      hostChainState: Array.isArray(object?.hostChainState) ? object.hostChainState.map((e: any) => HostChainState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllHostChainStateResponse): unknown {
    const obj: any = {};
    if (message.hostChainState) {
      obj.hostChainState = message.hostChainState.map(e => e ? HostChainState.toJSON(e) : undefined);
    } else {
      obj.hostChainState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllHostChainStateResponse>): QueryAllHostChainStateResponse {
    const message = createBaseQueryAllHostChainStateResponse();
    message.hostChainState = object.hostChainState?.map(e => HostChainState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetUndelegationRequest(): QueryGetUndelegationRequest {
  return {
    hostChain: "",
    epoch: BigInt(0)
  };
}
export const QueryGetUndelegationRequest = {
  encode(message: QueryGetUndelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUndelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUndelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUndelegationRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetUndelegationRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetUndelegationRequest>): QueryGetUndelegationRequest {
    const message = createBaseQueryGetUndelegationRequest();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    return message;
  }
};
function createBaseQueryGetUndelegationResponse(): QueryGetUndelegationResponse {
  return {
    undelegation: Undelegation.fromPartial({})
  };
}
export const QueryGetUndelegationResponse = {
  encode(message: QueryGetUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.undelegation !== undefined) {
      Undelegation.encode(message.undelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation = Undelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUndelegationResponse {
    return {
      undelegation: isSet(object.undelegation) ? Undelegation.fromJSON(object.undelegation) : undefined
    };
  },
  toJSON(message: QueryGetUndelegationResponse): unknown {
    const obj: any = {};
    message.undelegation !== undefined && (obj.undelegation = message.undelegation ? Undelegation.toJSON(message.undelegation) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUndelegationResponse>): QueryGetUndelegationResponse {
    const message = createBaseQueryGetUndelegationResponse();
    message.undelegation = object.undelegation !== undefined && object.undelegation !== null ? Undelegation.fromPartial(object.undelegation) : undefined;
    return message;
  }
};
function createBaseQueryAllUndelegationRequest(): QueryAllUndelegationRequest {
  return {
    hostChain: "",
    pagination: undefined
  };
}
export const QueryAllUndelegationRequest = {
  encode(message: QueryAllUndelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUndelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUndelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
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
  fromJSON(object: any): QueryAllUndelegationRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllUndelegationRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUndelegationRequest>): QueryAllUndelegationRequest {
    const message = createBaseQueryAllUndelegationRequest();
    message.hostChain = object.hostChain ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUndelegationResponse(): QueryAllUndelegationResponse {
  return {
    undelegation: [],
    pagination: undefined
  };
}
export const QueryAllUndelegationResponse = {
  encode(message: QueryAllUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.undelegation) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation.push(Undelegation.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllUndelegationResponse {
    return {
      undelegation: Array.isArray(object?.undelegation) ? object.undelegation.map((e: any) => Undelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllUndelegationResponse): unknown {
    const obj: any = {};
    if (message.undelegation) {
      obj.undelegation = message.undelegation.map(e => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.undelegation = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUndelegationResponse>): QueryAllUndelegationResponse {
    const message = createBaseQueryAllUndelegationResponse();
    message.undelegation = object.undelegation?.map(e => Undelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryIncompleteUndelegationRequest(): QueryIncompleteUndelegationRequest {
  return {
    hostChain: "",
    pagination: undefined
  };
}
export const QueryIncompleteUndelegationRequest = {
  encode(message: QueryIncompleteUndelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncompleteUndelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncompleteUndelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
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
  fromJSON(object: any): QueryIncompleteUndelegationRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIncompleteUndelegationRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIncompleteUndelegationRequest>): QueryIncompleteUndelegationRequest {
    const message = createBaseQueryIncompleteUndelegationRequest();
    message.hostChain = object.hostChain ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryIncompleteUndelegationResponse(): QueryIncompleteUndelegationResponse {
  return {
    undelegation: [],
    pagination: undefined
  };
}
export const QueryIncompleteUndelegationResponse = {
  encode(message: QueryIncompleteUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.undelegation) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncompleteUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncompleteUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation.push(Undelegation.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryIncompleteUndelegationResponse {
    return {
      undelegation: Array.isArray(object?.undelegation) ? object.undelegation.map((e: any) => Undelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIncompleteUndelegationResponse): unknown {
    const obj: any = {};
    if (message.undelegation) {
      obj.undelegation = message.undelegation.map(e => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.undelegation = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIncompleteUndelegationResponse>): QueryIncompleteUndelegationResponse {
    const message = createBaseQueryIncompleteUndelegationResponse();
    message.undelegation = object.undelegation?.map(e => Undelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetChannelUndelegationRequest(): QueryGetChannelUndelegationRequest {
  return {
    hostChain: "",
    epoch: BigInt(0),
    transferChannel: ""
  };
}
export const QueryGetChannelUndelegationRequest = {
  encode(message: QueryGetChannelUndelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetChannelUndelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetChannelUndelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetChannelUndelegationRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : ""
    };
  },
  toJSON(message: QueryGetChannelUndelegationRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    return obj;
  },
  fromPartial(object: Partial<QueryGetChannelUndelegationRequest>): QueryGetChannelUndelegationRequest {
    const message = createBaseQueryGetChannelUndelegationRequest();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.transferChannel = object.transferChannel ?? "";
    return message;
  }
};
function createBaseQueryGetChannelUndelegationResponse(): QueryGetChannelUndelegationResponse {
  return {
    channelUndelegation: ChannelUndelegation.fromPartial({})
  };
}
export const QueryGetChannelUndelegationResponse = {
  encode(message: QueryGetChannelUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelUndelegation !== undefined) {
      ChannelUndelegation.encode(message.channelUndelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetChannelUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetChannelUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelUndelegation = ChannelUndelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetChannelUndelegationResponse {
    return {
      channelUndelegation: isSet(object.channelUndelegation) ? ChannelUndelegation.fromJSON(object.channelUndelegation) : undefined
    };
  },
  toJSON(message: QueryGetChannelUndelegationResponse): unknown {
    const obj: any = {};
    message.channelUndelegation !== undefined && (obj.channelUndelegation = message.channelUndelegation ? ChannelUndelegation.toJSON(message.channelUndelegation) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetChannelUndelegationResponse>): QueryGetChannelUndelegationResponse {
    const message = createBaseQueryGetChannelUndelegationResponse();
    message.channelUndelegation = object.channelUndelegation !== undefined && object.channelUndelegation !== null ? ChannelUndelegation.fromPartial(object.channelUndelegation) : undefined;
    return message;
  }
};
function createBaseQueryAllChannelUndelegationRequest(): QueryAllChannelUndelegationRequest {
  return {
    hostChain: "",
    epoch: BigInt(0),
    pagination: undefined
  };
}
export const QueryAllChannelUndelegationRequest = {
  encode(message: QueryAllChannelUndelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllChannelUndelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllChannelUndelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = reader.uint64();
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
  fromJSON(object: any): QueryAllChannelUndelegationRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllChannelUndelegationRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllChannelUndelegationRequest>): QueryAllChannelUndelegationRequest {
    const message = createBaseQueryAllChannelUndelegationRequest();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllChannelUndelegationResponse(): QueryAllChannelUndelegationResponse {
  return {
    channelUndelegation: [],
    pagination: undefined
  };
}
export const QueryAllChannelUndelegationResponse = {
  encode(message: QueryAllChannelUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channelUndelegation) {
      ChannelUndelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllChannelUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllChannelUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelUndelegation.push(ChannelUndelegation.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllChannelUndelegationResponse {
    return {
      channelUndelegation: Array.isArray(object?.channelUndelegation) ? object.channelUndelegation.map((e: any) => ChannelUndelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllChannelUndelegationResponse): unknown {
    const obj: any = {};
    if (message.channelUndelegation) {
      obj.channelUndelegation = message.channelUndelegation.map(e => e ? ChannelUndelegation.toJSON(e) : undefined);
    } else {
      obj.channelUndelegation = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllChannelUndelegationResponse>): QueryAllChannelUndelegationResponse {
    const message = createBaseQueryAllChannelUndelegationResponse();
    message.channelUndelegation = object.channelUndelegation?.map(e => ChannelUndelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegationQueueBalanceRequest(): QueryDelegationQueueBalanceRequest {
  return {
    hostChain: "",
    transferChannel: ""
  };
}
export const QueryDelegationQueueBalanceRequest = {
  encode(message: QueryDelegationQueueBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(18).string(message.transferChannel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationQueueBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationQueueBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.transferChannel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationQueueBalanceRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : ""
    };
  },
  toJSON(message: QueryDelegationQueueBalanceRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegationQueueBalanceRequest>): QueryDelegationQueueBalanceRequest {
    const message = createBaseQueryDelegationQueueBalanceRequest();
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    return message;
  }
};
function createBaseQueryDelegationQueueBalanceResponse(): QueryDelegationQueueBalanceResponse {
  return {
    balance: Coin.fromPartial({})
  };
}
export const QueryDelegationQueueBalanceResponse = {
  encode(message: QueryDelegationQueueBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationQueueBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationQueueBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationQueueBalanceResponse {
    return {
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: QueryDelegationQueueBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegationQueueBalanceResponse>): QueryDelegationQueueBalanceResponse {
    const message = createBaseQueryDelegationQueueBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseQueryEpochInfoRequest(): QueryEpochInfoRequest {
  return {
    hostChain: ""
  };
}
export const QueryEpochInfoRequest = {
  encode(message: QueryEpochInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochInfoRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : ""
    };
  },
  toJSON(message: QueryEpochInfoRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    return obj;
  },
  fromPartial(object: Partial<QueryEpochInfoRequest>): QueryEpochInfoRequest {
    const message = createBaseQueryEpochInfoRequest();
    message.hostChain = object.hostChain ?? "";
    return message;
  }
};
function createBaseQueryEpochInfoResponse(): QueryEpochInfoResponse {
  return {
    lastDelegationTime: Timestamp.fromPartial({}),
    lastUndelegationTime: Timestamp.fromPartial({}),
    currentUndelegationEpoch: BigInt(0)
  };
}
export const QueryEpochInfoResponse = {
  encode(message: QueryEpochInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastDelegationTime !== undefined) {
      Timestamp.encode(message.lastDelegationTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastUndelegationTime !== undefined) {
      Timestamp.encode(message.lastUndelegationTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentUndelegationEpoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.currentUndelegationEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastDelegationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastUndelegationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.currentUndelegationEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochInfoResponse {
    return {
      lastDelegationTime: isSet(object.lastDelegationTime) ? fromJsonTimestamp(object.lastDelegationTime) : undefined,
      lastUndelegationTime: isSet(object.lastUndelegationTime) ? fromJsonTimestamp(object.lastUndelegationTime) : undefined,
      currentUndelegationEpoch: isSet(object.currentUndelegationEpoch) ? BigInt(object.currentUndelegationEpoch.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryEpochInfoResponse): unknown {
    const obj: any = {};
    message.lastDelegationTime !== undefined && (obj.lastDelegationTime = fromTimestamp(message.lastDelegationTime).toISOString());
    message.lastUndelegationTime !== undefined && (obj.lastUndelegationTime = fromTimestamp(message.lastUndelegationTime).toISOString());
    message.currentUndelegationEpoch !== undefined && (obj.currentUndelegationEpoch = (message.currentUndelegationEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryEpochInfoResponse>): QueryEpochInfoResponse {
    const message = createBaseQueryEpochInfoResponse();
    message.lastDelegationTime = object.lastDelegationTime !== undefined && object.lastDelegationTime !== null ? Timestamp.fromPartial(object.lastDelegationTime) : undefined;
    message.lastUndelegationTime = object.lastUndelegationTime !== undefined && object.lastUndelegationTime !== null ? Timestamp.fromPartial(object.lastUndelegationTime) : undefined;
    message.currentUndelegationEpoch = object.currentUndelegationEpoch !== undefined && object.currentUndelegationEpoch !== null ? BigInt(object.currentUndelegationEpoch.toString()) : BigInt(0);
    return message;
  }
};