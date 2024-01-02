import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { HostChain, HostChainAmino, HostChainSDKType, HostChainState, HostChainStateAmino, HostChainStateSDKType } from "./host_chain";
import { Undelegation, UndelegationAmino, UndelegationSDKType, ChannelUndelegation, ChannelUndelegationAmino, ChannelUndelegationSDKType } from "./undelegation";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetHostChainRequest {
  hostChainId: string;
}
export interface QueryGetHostChainRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainRequest";
  value: Uint8Array;
}
export interface QueryGetHostChainRequestAmino {
  host_chain_id?: string;
}
export interface QueryGetHostChainRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryGetHostChainRequest";
  value: QueryGetHostChainRequestAmino;
}
export interface QueryGetHostChainRequestSDKType {
  host_chain_id: string;
}
export interface QueryGetHostChainResponse {
  hostChain: HostChain;
}
export interface QueryGetHostChainResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainResponse";
  value: Uint8Array;
}
export interface QueryGetHostChainResponseAmino {
  host_chain?: HostChainAmino;
}
export interface QueryGetHostChainResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryGetHostChainResponse";
  value: QueryGetHostChainResponseAmino;
}
export interface QueryGetHostChainResponseSDKType {
  host_chain: HostChainSDKType;
}
export interface QueryAllHostChainRequest {
  pagination?: PageRequest;
}
export interface QueryAllHostChainRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainRequest";
  value: Uint8Array;
}
export interface QueryAllHostChainRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllHostChainRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryAllHostChainRequest";
  value: QueryAllHostChainRequestAmino;
}
export interface QueryAllHostChainRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllHostChainResponse {
  hostChain: HostChain[];
  pagination?: PageResponse;
}
export interface QueryAllHostChainResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainResponse";
  value: Uint8Array;
}
export interface QueryAllHostChainResponseAmino {
  host_chain?: HostChainAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllHostChainResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryAllHostChainResponse";
  value: QueryAllHostChainResponseAmino;
}
export interface QueryAllHostChainResponseSDKType {
  host_chain: HostChainSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetHostChainStateRequest {
  hostChainId: string;
}
export interface QueryGetHostChainStateRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainStateRequest";
  value: Uint8Array;
}
export interface QueryGetHostChainStateRequestAmino {
  host_chain_id?: string;
}
export interface QueryGetHostChainStateRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryGetHostChainStateRequest";
  value: QueryGetHostChainStateRequestAmino;
}
export interface QueryGetHostChainStateRequestSDKType {
  host_chain_id: string;
}
export interface QueryGetHostChainStateResponse {
  hostChainState: HostChainState;
}
export interface QueryGetHostChainStateResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainStateResponse";
  value: Uint8Array;
}
export interface QueryGetHostChainStateResponseAmino {
  host_chain_state?: HostChainStateAmino;
}
export interface QueryGetHostChainStateResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryGetHostChainStateResponse";
  value: QueryGetHostChainStateResponseAmino;
}
export interface QueryGetHostChainStateResponseSDKType {
  host_chain_state: HostChainStateSDKType;
}
export interface QueryAllHostChainStateRequest {
  pagination?: PageRequest;
}
export interface QueryAllHostChainStateRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainStateRequest";
  value: Uint8Array;
}
export interface QueryAllHostChainStateRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllHostChainStateRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryAllHostChainStateRequest";
  value: QueryAllHostChainStateRequestAmino;
}
export interface QueryAllHostChainStateRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllHostChainStateResponse {
  hostChainState: HostChainState[];
  pagination?: PageResponse;
}
export interface QueryAllHostChainStateResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainStateResponse";
  value: Uint8Array;
}
export interface QueryAllHostChainStateResponseAmino {
  host_chain_state?: HostChainStateAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllHostChainStateResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryAllHostChainStateResponse";
  value: QueryAllHostChainStateResponseAmino;
}
export interface QueryAllHostChainStateResponseSDKType {
  host_chain_state: HostChainStateSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetUndelegationRequest {
  hostChain: string;
  epoch: bigint;
}
export interface QueryGetUndelegationRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryGetUndelegationRequest";
  value: Uint8Array;
}
export interface QueryGetUndelegationRequestAmino {
  host_chain?: string;
  epoch?: string;
}
export interface QueryGetUndelegationRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryGetUndelegationRequest";
  value: QueryGetUndelegationRequestAmino;
}
export interface QueryGetUndelegationRequestSDKType {
  host_chain: string;
  epoch: bigint;
}
export interface QueryGetUndelegationResponse {
  undelegation: Undelegation;
}
export interface QueryGetUndelegationResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryGetUndelegationResponse";
  value: Uint8Array;
}
export interface QueryGetUndelegationResponseAmino {
  undelegation?: UndelegationAmino;
}
export interface QueryGetUndelegationResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryGetUndelegationResponse";
  value: QueryGetUndelegationResponseAmino;
}
export interface QueryGetUndelegationResponseSDKType {
  undelegation: UndelegationSDKType;
}
export interface QueryAllUndelegationRequest {
  hostChain: string;
  pagination?: PageRequest;
}
export interface QueryAllUndelegationRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryAllUndelegationRequest";
  value: Uint8Array;
}
export interface QueryAllUndelegationRequestAmino {
  host_chain?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllUndelegationRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryAllUndelegationRequest";
  value: QueryAllUndelegationRequestAmino;
}
export interface QueryAllUndelegationRequestSDKType {
  host_chain: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllUndelegationResponse {
  undelegation: Undelegation[];
  pagination?: PageResponse;
}
export interface QueryAllUndelegationResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryAllUndelegationResponse";
  value: Uint8Array;
}
export interface QueryAllUndelegationResponseAmino {
  undelegation?: UndelegationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUndelegationResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryAllUndelegationResponse";
  value: QueryAllUndelegationResponseAmino;
}
export interface QueryAllUndelegationResponseSDKType {
  undelegation: UndelegationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryIncompleteUndelegationRequest {
  hostChain: string;
  pagination?: PageRequest;
}
export interface QueryIncompleteUndelegationRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryIncompleteUndelegationRequest";
  value: Uint8Array;
}
export interface QueryIncompleteUndelegationRequestAmino {
  host_chain?: string;
  pagination?: PageRequestAmino;
}
export interface QueryIncompleteUndelegationRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryIncompleteUndelegationRequest";
  value: QueryIncompleteUndelegationRequestAmino;
}
export interface QueryIncompleteUndelegationRequestSDKType {
  host_chain: string;
  pagination?: PageRequestSDKType;
}
export interface QueryIncompleteUndelegationResponse {
  undelegation: Undelegation[];
  pagination?: PageResponse;
}
export interface QueryIncompleteUndelegationResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryIncompleteUndelegationResponse";
  value: Uint8Array;
}
export interface QueryIncompleteUndelegationResponseAmino {
  undelegation?: UndelegationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryIncompleteUndelegationResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryIncompleteUndelegationResponse";
  value: QueryIncompleteUndelegationResponseAmino;
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
export interface QueryGetChannelUndelegationRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryGetChannelUndelegationRequest";
  value: Uint8Array;
}
export interface QueryGetChannelUndelegationRequestAmino {
  host_chain?: string;
  epoch?: string;
  transfer_channel?: string;
}
export interface QueryGetChannelUndelegationRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryGetChannelUndelegationRequest";
  value: QueryGetChannelUndelegationRequestAmino;
}
export interface QueryGetChannelUndelegationRequestSDKType {
  host_chain: string;
  epoch: bigint;
  transfer_channel: string;
}
export interface QueryGetChannelUndelegationResponse {
  channelUndelegation: ChannelUndelegation;
}
export interface QueryGetChannelUndelegationResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryGetChannelUndelegationResponse";
  value: Uint8Array;
}
export interface QueryGetChannelUndelegationResponseAmino {
  channel_undelegation?: ChannelUndelegationAmino;
}
export interface QueryGetChannelUndelegationResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryGetChannelUndelegationResponse";
  value: QueryGetChannelUndelegationResponseAmino;
}
export interface QueryGetChannelUndelegationResponseSDKType {
  channel_undelegation: ChannelUndelegationSDKType;
}
export interface QueryAllChannelUndelegationRequest {
  hostChain: string;
  epoch: bigint;
  pagination?: PageRequest;
}
export interface QueryAllChannelUndelegationRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryAllChannelUndelegationRequest";
  value: Uint8Array;
}
export interface QueryAllChannelUndelegationRequestAmino {
  host_chain?: string;
  epoch?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllChannelUndelegationRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryAllChannelUndelegationRequest";
  value: QueryAllChannelUndelegationRequestAmino;
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
export interface QueryAllChannelUndelegationResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryAllChannelUndelegationResponse";
  value: Uint8Array;
}
export interface QueryAllChannelUndelegationResponseAmino {
  channel_undelegation?: ChannelUndelegationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllChannelUndelegationResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryAllChannelUndelegationResponse";
  value: QueryAllChannelUndelegationResponseAmino;
}
export interface QueryAllChannelUndelegationResponseSDKType {
  channel_undelegation: ChannelUndelegationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDelegationQueueBalanceRequest {
  hostChain: string;
  transferChannel: string;
}
export interface QueryDelegationQueueBalanceRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryDelegationQueueBalanceRequest";
  value: Uint8Array;
}
export interface QueryDelegationQueueBalanceRequestAmino {
  host_chain?: string;
  transfer_channel?: string;
}
export interface QueryDelegationQueueBalanceRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryDelegationQueueBalanceRequest";
  value: QueryDelegationQueueBalanceRequestAmino;
}
export interface QueryDelegationQueueBalanceRequestSDKType {
  host_chain: string;
  transfer_channel: string;
}
export interface QueryDelegationQueueBalanceResponse {
  balance: Coin;
}
export interface QueryDelegationQueueBalanceResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryDelegationQueueBalanceResponse";
  value: Uint8Array;
}
export interface QueryDelegationQueueBalanceResponseAmino {
  balance?: CoinAmino;
}
export interface QueryDelegationQueueBalanceResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryDelegationQueueBalanceResponse";
  value: QueryDelegationQueueBalanceResponseAmino;
}
export interface QueryDelegationQueueBalanceResponseSDKType {
  balance: CoinSDKType;
}
export interface QueryEpochInfoRequest {
  hostChain: string;
}
export interface QueryEpochInfoRequestProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryEpochInfoRequest";
  value: Uint8Array;
}
export interface QueryEpochInfoRequestAmino {
  host_chain?: string;
}
export interface QueryEpochInfoRequestAminoMsg {
  type: "/pryzm.icstaking.v1.QueryEpochInfoRequest";
  value: QueryEpochInfoRequestAmino;
}
export interface QueryEpochInfoRequestSDKType {
  host_chain: string;
}
export interface QueryEpochInfoResponse {
  lastDelegationTime: Timestamp;
  lastUndelegationTime: Timestamp;
  currentUndelegationEpoch: bigint;
}
export interface QueryEpochInfoResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.QueryEpochInfoResponse";
  value: Uint8Array;
}
export interface QueryEpochInfoResponseAmino {
  last_delegation_time?: string;
  last_undelegation_time?: string;
  current_undelegation_epoch?: string;
}
export interface QueryEpochInfoResponseAminoMsg {
  type: "/pryzm.icstaking.v1.QueryEpochInfoResponse";
  value: QueryEpochInfoResponseAmino;
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
  typeUrl: "/pryzm.icstaking.v1.QueryParamsRequest",
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
      typeUrl: "/pryzm.icstaking.v1.QueryParamsRequest",
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
  typeUrl: "/pryzm.icstaking.v1.QueryParamsResponse",
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
      typeUrl: "/pryzm.icstaking.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetHostChainRequest(): QueryGetHostChainRequest {
  return {
    hostChainId: ""
  };
}
export const QueryGetHostChainRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainRequest",
  is(o: any): o is QueryGetHostChainRequest {
    return o && (o.$typeUrl === QueryGetHostChainRequest.typeUrl || typeof o.hostChainId === "string");
  },
  isSDK(o: any): o is QueryGetHostChainRequestSDKType {
    return o && (o.$typeUrl === QueryGetHostChainRequest.typeUrl || typeof o.host_chain_id === "string");
  },
  isAmino(o: any): o is QueryGetHostChainRequestAmino {
    return o && (o.$typeUrl === QueryGetHostChainRequest.typeUrl || typeof o.host_chain_id === "string");
  },
  encode(message: QueryGetHostChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetHostChainRequest {
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
  },
  fromAmino(object: QueryGetHostChainRequestAmino): QueryGetHostChainRequest {
    const message = createBaseQueryGetHostChainRequest();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    return message;
  },
  toAmino(message: QueryGetHostChainRequest, useInterfaces: boolean = true): QueryGetHostChainRequestAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    return obj;
  },
  fromAminoMsg(object: QueryGetHostChainRequestAminoMsg): QueryGetHostChainRequest {
    return QueryGetHostChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHostChainRequestProtoMsg, useInterfaces: boolean = true): QueryGetHostChainRequest {
    return QueryGetHostChainRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetHostChainRequest): Uint8Array {
    return QueryGetHostChainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHostChainRequest): QueryGetHostChainRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainRequest",
      value: QueryGetHostChainRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetHostChainRequest.typeUrl, QueryGetHostChainRequest);
function createBaseQueryGetHostChainResponse(): QueryGetHostChainResponse {
  return {
    hostChain: HostChain.fromPartial({})
  };
}
export const QueryGetHostChainResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainResponse",
  is(o: any): o is QueryGetHostChainResponse {
    return o && (o.$typeUrl === QueryGetHostChainResponse.typeUrl || HostChain.is(o.hostChain));
  },
  isSDK(o: any): o is QueryGetHostChainResponseSDKType {
    return o && (o.$typeUrl === QueryGetHostChainResponse.typeUrl || HostChain.isSDK(o.host_chain));
  },
  isAmino(o: any): o is QueryGetHostChainResponseAmino {
    return o && (o.$typeUrl === QueryGetHostChainResponse.typeUrl || HostChain.isAmino(o.host_chain));
  },
  encode(message: QueryGetHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = HostChain.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryGetHostChainResponseAmino): QueryGetHostChainResponse {
    const message = createBaseQueryGetHostChainResponse();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = HostChain.fromAmino(object.host_chain);
    }
    return message;
  },
  toAmino(message: QueryGetHostChainResponse, useInterfaces: boolean = true): QueryGetHostChainResponseAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain ? HostChain.toAmino(message.hostChain, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetHostChainResponseAminoMsg): QueryGetHostChainResponse {
    return QueryGetHostChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHostChainResponseProtoMsg, useInterfaces: boolean = true): QueryGetHostChainResponse {
    return QueryGetHostChainResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetHostChainResponse): Uint8Array {
    return QueryGetHostChainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHostChainResponse): QueryGetHostChainResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainResponse",
      value: QueryGetHostChainResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetHostChainResponse.typeUrl, QueryGetHostChainResponse);
function createBaseQueryAllHostChainRequest(): QueryAllHostChainRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllHostChainRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainRequest",
  is(o: any): o is QueryAllHostChainRequest {
    return o && o.$typeUrl === QueryAllHostChainRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllHostChainRequestSDKType {
    return o && o.$typeUrl === QueryAllHostChainRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllHostChainRequestAmino {
    return o && o.$typeUrl === QueryAllHostChainRequest.typeUrl;
  },
  encode(message: QueryAllHostChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllHostChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainRequest();
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
  },
  fromAmino(object: QueryAllHostChainRequestAmino): QueryAllHostChainRequest {
    const message = createBaseQueryAllHostChainRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHostChainRequest, useInterfaces: boolean = true): QueryAllHostChainRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHostChainRequestAminoMsg): QueryAllHostChainRequest {
    return QueryAllHostChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHostChainRequestProtoMsg, useInterfaces: boolean = true): QueryAllHostChainRequest {
    return QueryAllHostChainRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllHostChainRequest): Uint8Array {
    return QueryAllHostChainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHostChainRequest): QueryAllHostChainRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainRequest",
      value: QueryAllHostChainRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllHostChainRequest.typeUrl, QueryAllHostChainRequest);
function createBaseQueryAllHostChainResponse(): QueryAllHostChainResponse {
  return {
    hostChain: [],
    pagination: undefined
  };
}
export const QueryAllHostChainResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainResponse",
  is(o: any): o is QueryAllHostChainResponse {
    return o && (o.$typeUrl === QueryAllHostChainResponse.typeUrl || Array.isArray(o.hostChain) && (!o.hostChain.length || HostChain.is(o.hostChain[0])));
  },
  isSDK(o: any): o is QueryAllHostChainResponseSDKType {
    return o && (o.$typeUrl === QueryAllHostChainResponse.typeUrl || Array.isArray(o.host_chain) && (!o.host_chain.length || HostChain.isSDK(o.host_chain[0])));
  },
  isAmino(o: any): o is QueryAllHostChainResponseAmino {
    return o && (o.$typeUrl === QueryAllHostChainResponse.typeUrl || Array.isArray(o.host_chain) && (!o.host_chain.length || HostChain.isAmino(o.host_chain[0])));
  },
  encode(message: QueryAllHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hostChain) {
      HostChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain.push(HostChain.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: QueryAllHostChainResponseAmino): QueryAllHostChainResponse {
    const message = createBaseQueryAllHostChainResponse();
    message.hostChain = object.host_chain?.map(e => HostChain.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHostChainResponse, useInterfaces: boolean = true): QueryAllHostChainResponseAmino {
    const obj: any = {};
    if (message.hostChain) {
      obj.host_chain = message.hostChain.map(e => e ? HostChain.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.host_chain = null;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHostChainResponseAminoMsg): QueryAllHostChainResponse {
    return QueryAllHostChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHostChainResponseProtoMsg, useInterfaces: boolean = true): QueryAllHostChainResponse {
    return QueryAllHostChainResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllHostChainResponse): Uint8Array {
    return QueryAllHostChainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHostChainResponse): QueryAllHostChainResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainResponse",
      value: QueryAllHostChainResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllHostChainResponse.typeUrl, QueryAllHostChainResponse);
function createBaseQueryGetHostChainStateRequest(): QueryGetHostChainStateRequest {
  return {
    hostChainId: ""
  };
}
export const QueryGetHostChainStateRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainStateRequest",
  is(o: any): o is QueryGetHostChainStateRequest {
    return o && (o.$typeUrl === QueryGetHostChainStateRequest.typeUrl || typeof o.hostChainId === "string");
  },
  isSDK(o: any): o is QueryGetHostChainStateRequestSDKType {
    return o && (o.$typeUrl === QueryGetHostChainStateRequest.typeUrl || typeof o.host_chain_id === "string");
  },
  isAmino(o: any): o is QueryGetHostChainStateRequestAmino {
    return o && (o.$typeUrl === QueryGetHostChainStateRequest.typeUrl || typeof o.host_chain_id === "string");
  },
  encode(message: QueryGetHostChainStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetHostChainStateRequest {
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
  },
  fromAmino(object: QueryGetHostChainStateRequestAmino): QueryGetHostChainStateRequest {
    const message = createBaseQueryGetHostChainStateRequest();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    return message;
  },
  toAmino(message: QueryGetHostChainStateRequest, useInterfaces: boolean = true): QueryGetHostChainStateRequestAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    return obj;
  },
  fromAminoMsg(object: QueryGetHostChainStateRequestAminoMsg): QueryGetHostChainStateRequest {
    return QueryGetHostChainStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHostChainStateRequestProtoMsg, useInterfaces: boolean = true): QueryGetHostChainStateRequest {
    return QueryGetHostChainStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetHostChainStateRequest): Uint8Array {
    return QueryGetHostChainStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHostChainStateRequest): QueryGetHostChainStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainStateRequest",
      value: QueryGetHostChainStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetHostChainStateRequest.typeUrl, QueryGetHostChainStateRequest);
function createBaseQueryGetHostChainStateResponse(): QueryGetHostChainStateResponse {
  return {
    hostChainState: HostChainState.fromPartial({})
  };
}
export const QueryGetHostChainStateResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainStateResponse",
  is(o: any): o is QueryGetHostChainStateResponse {
    return o && (o.$typeUrl === QueryGetHostChainStateResponse.typeUrl || HostChainState.is(o.hostChainState));
  },
  isSDK(o: any): o is QueryGetHostChainStateResponseSDKType {
    return o && (o.$typeUrl === QueryGetHostChainStateResponse.typeUrl || HostChainState.isSDK(o.host_chain_state));
  },
  isAmino(o: any): o is QueryGetHostChainStateResponseAmino {
    return o && (o.$typeUrl === QueryGetHostChainStateResponse.typeUrl || HostChainState.isAmino(o.host_chain_state));
  },
  encode(message: QueryGetHostChainStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainState !== undefined) {
      HostChainState.encode(message.hostChainState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetHostChainStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainState = HostChainState.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryGetHostChainStateResponseAmino): QueryGetHostChainStateResponse {
    const message = createBaseQueryGetHostChainStateResponse();
    if (object.host_chain_state !== undefined && object.host_chain_state !== null) {
      message.hostChainState = HostChainState.fromAmino(object.host_chain_state);
    }
    return message;
  },
  toAmino(message: QueryGetHostChainStateResponse, useInterfaces: boolean = true): QueryGetHostChainStateResponseAmino {
    const obj: any = {};
    obj.host_chain_state = message.hostChainState ? HostChainState.toAmino(message.hostChainState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetHostChainStateResponseAminoMsg): QueryGetHostChainStateResponse {
    return QueryGetHostChainStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHostChainStateResponseProtoMsg, useInterfaces: boolean = true): QueryGetHostChainStateResponse {
    return QueryGetHostChainStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetHostChainStateResponse): Uint8Array {
    return QueryGetHostChainStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHostChainStateResponse): QueryGetHostChainStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryGetHostChainStateResponse",
      value: QueryGetHostChainStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetHostChainStateResponse.typeUrl, QueryGetHostChainStateResponse);
function createBaseQueryAllHostChainStateRequest(): QueryAllHostChainStateRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllHostChainStateRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainStateRequest",
  is(o: any): o is QueryAllHostChainStateRequest {
    return o && o.$typeUrl === QueryAllHostChainStateRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllHostChainStateRequestSDKType {
    return o && o.$typeUrl === QueryAllHostChainStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllHostChainStateRequestAmino {
    return o && o.$typeUrl === QueryAllHostChainStateRequest.typeUrl;
  },
  encode(message: QueryAllHostChainStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllHostChainStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainStateRequest();
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
  },
  fromAmino(object: QueryAllHostChainStateRequestAmino): QueryAllHostChainStateRequest {
    const message = createBaseQueryAllHostChainStateRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHostChainStateRequest, useInterfaces: boolean = true): QueryAllHostChainStateRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHostChainStateRequestAminoMsg): QueryAllHostChainStateRequest {
    return QueryAllHostChainStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHostChainStateRequestProtoMsg, useInterfaces: boolean = true): QueryAllHostChainStateRequest {
    return QueryAllHostChainStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllHostChainStateRequest): Uint8Array {
    return QueryAllHostChainStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHostChainStateRequest): QueryAllHostChainStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainStateRequest",
      value: QueryAllHostChainStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllHostChainStateRequest.typeUrl, QueryAllHostChainStateRequest);
function createBaseQueryAllHostChainStateResponse(): QueryAllHostChainStateResponse {
  return {
    hostChainState: [],
    pagination: undefined
  };
}
export const QueryAllHostChainStateResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainStateResponse",
  is(o: any): o is QueryAllHostChainStateResponse {
    return o && (o.$typeUrl === QueryAllHostChainStateResponse.typeUrl || Array.isArray(o.hostChainState) && (!o.hostChainState.length || HostChainState.is(o.hostChainState[0])));
  },
  isSDK(o: any): o is QueryAllHostChainStateResponseSDKType {
    return o && (o.$typeUrl === QueryAllHostChainStateResponse.typeUrl || Array.isArray(o.host_chain_state) && (!o.host_chain_state.length || HostChainState.isSDK(o.host_chain_state[0])));
  },
  isAmino(o: any): o is QueryAllHostChainStateResponseAmino {
    return o && (o.$typeUrl === QueryAllHostChainStateResponse.typeUrl || Array.isArray(o.host_chain_state) && (!o.host_chain_state.length || HostChainState.isAmino(o.host_chain_state[0])));
  },
  encode(message: QueryAllHostChainStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hostChainState) {
      HostChainState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllHostChainStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainState.push(HostChainState.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: QueryAllHostChainStateResponseAmino): QueryAllHostChainStateResponse {
    const message = createBaseQueryAllHostChainStateResponse();
    message.hostChainState = object.host_chain_state?.map(e => HostChainState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHostChainStateResponse, useInterfaces: boolean = true): QueryAllHostChainStateResponseAmino {
    const obj: any = {};
    if (message.hostChainState) {
      obj.host_chain_state = message.hostChainState.map(e => e ? HostChainState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.host_chain_state = null;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHostChainStateResponseAminoMsg): QueryAllHostChainStateResponse {
    return QueryAllHostChainStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHostChainStateResponseProtoMsg, useInterfaces: boolean = true): QueryAllHostChainStateResponse {
    return QueryAllHostChainStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllHostChainStateResponse): Uint8Array {
    return QueryAllHostChainStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHostChainStateResponse): QueryAllHostChainStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryAllHostChainStateResponse",
      value: QueryAllHostChainStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllHostChainStateResponse.typeUrl, QueryAllHostChainStateResponse);
function createBaseQueryGetUndelegationRequest(): QueryGetUndelegationRequest {
  return {
    hostChain: "",
    epoch: BigInt(0)
  };
}
export const QueryGetUndelegationRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryGetUndelegationRequest",
  is(o: any): o is QueryGetUndelegationRequest {
    return o && (o.$typeUrl === QueryGetUndelegationRequest.typeUrl || typeof o.hostChain === "string" && typeof o.epoch === "bigint");
  },
  isSDK(o: any): o is QueryGetUndelegationRequestSDKType {
    return o && (o.$typeUrl === QueryGetUndelegationRequest.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint");
  },
  isAmino(o: any): o is QueryGetUndelegationRequestAmino {
    return o && (o.$typeUrl === QueryGetUndelegationRequest.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint");
  },
  encode(message: QueryGetUndelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetUndelegationRequest {
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
  },
  fromAmino(object: QueryGetUndelegationRequestAmino): QueryGetUndelegationRequest {
    const message = createBaseQueryGetUndelegationRequest();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    return message;
  },
  toAmino(message: QueryGetUndelegationRequest, useInterfaces: boolean = true): QueryGetUndelegationRequestAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUndelegationRequestAminoMsg): QueryGetUndelegationRequest {
    return QueryGetUndelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUndelegationRequestProtoMsg, useInterfaces: boolean = true): QueryGetUndelegationRequest {
    return QueryGetUndelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetUndelegationRequest): Uint8Array {
    return QueryGetUndelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUndelegationRequest): QueryGetUndelegationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryGetUndelegationRequest",
      value: QueryGetUndelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetUndelegationRequest.typeUrl, QueryGetUndelegationRequest);
function createBaseQueryGetUndelegationResponse(): QueryGetUndelegationResponse {
  return {
    undelegation: Undelegation.fromPartial({})
  };
}
export const QueryGetUndelegationResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryGetUndelegationResponse",
  is(o: any): o is QueryGetUndelegationResponse {
    return o && (o.$typeUrl === QueryGetUndelegationResponse.typeUrl || Undelegation.is(o.undelegation));
  },
  isSDK(o: any): o is QueryGetUndelegationResponseSDKType {
    return o && (o.$typeUrl === QueryGetUndelegationResponse.typeUrl || Undelegation.isSDK(o.undelegation));
  },
  isAmino(o: any): o is QueryGetUndelegationResponseAmino {
    return o && (o.$typeUrl === QueryGetUndelegationResponse.typeUrl || Undelegation.isAmino(o.undelegation));
  },
  encode(message: QueryGetUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.undelegation !== undefined) {
      Undelegation.encode(message.undelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation = Undelegation.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryGetUndelegationResponseAmino): QueryGetUndelegationResponse {
    const message = createBaseQueryGetUndelegationResponse();
    if (object.undelegation !== undefined && object.undelegation !== null) {
      message.undelegation = Undelegation.fromAmino(object.undelegation);
    }
    return message;
  },
  toAmino(message: QueryGetUndelegationResponse, useInterfaces: boolean = true): QueryGetUndelegationResponseAmino {
    const obj: any = {};
    obj.undelegation = message.undelegation ? Undelegation.toAmino(message.undelegation, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUndelegationResponseAminoMsg): QueryGetUndelegationResponse {
    return QueryGetUndelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUndelegationResponseProtoMsg, useInterfaces: boolean = true): QueryGetUndelegationResponse {
    return QueryGetUndelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetUndelegationResponse): Uint8Array {
    return QueryGetUndelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUndelegationResponse): QueryGetUndelegationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryGetUndelegationResponse",
      value: QueryGetUndelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetUndelegationResponse.typeUrl, QueryGetUndelegationResponse);
function createBaseQueryAllUndelegationRequest(): QueryAllUndelegationRequest {
  return {
    hostChain: "",
    pagination: undefined
  };
}
export const QueryAllUndelegationRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryAllUndelegationRequest",
  is(o: any): o is QueryAllUndelegationRequest {
    return o && (o.$typeUrl === QueryAllUndelegationRequest.typeUrl || typeof o.hostChain === "string");
  },
  isSDK(o: any): o is QueryAllUndelegationRequestSDKType {
    return o && (o.$typeUrl === QueryAllUndelegationRequest.typeUrl || typeof o.host_chain === "string");
  },
  isAmino(o: any): o is QueryAllUndelegationRequestAmino {
    return o && (o.$typeUrl === QueryAllUndelegationRequest.typeUrl || typeof o.host_chain === "string");
  },
  encode(message: QueryAllUndelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllUndelegationRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryAllUndelegationRequestAmino): QueryAllUndelegationRequest {
    const message = createBaseQueryAllUndelegationRequest();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUndelegationRequest, useInterfaces: boolean = true): QueryAllUndelegationRequestAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUndelegationRequestAminoMsg): QueryAllUndelegationRequest {
    return QueryAllUndelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUndelegationRequestProtoMsg, useInterfaces: boolean = true): QueryAllUndelegationRequest {
    return QueryAllUndelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllUndelegationRequest): Uint8Array {
    return QueryAllUndelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUndelegationRequest): QueryAllUndelegationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryAllUndelegationRequest",
      value: QueryAllUndelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllUndelegationRequest.typeUrl, QueryAllUndelegationRequest);
function createBaseQueryAllUndelegationResponse(): QueryAllUndelegationResponse {
  return {
    undelegation: [],
    pagination: undefined
  };
}
export const QueryAllUndelegationResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryAllUndelegationResponse",
  is(o: any): o is QueryAllUndelegationResponse {
    return o && (o.$typeUrl === QueryAllUndelegationResponse.typeUrl || Array.isArray(o.undelegation) && (!o.undelegation.length || Undelegation.is(o.undelegation[0])));
  },
  isSDK(o: any): o is QueryAllUndelegationResponseSDKType {
    return o && (o.$typeUrl === QueryAllUndelegationResponse.typeUrl || Array.isArray(o.undelegation) && (!o.undelegation.length || Undelegation.isSDK(o.undelegation[0])));
  },
  isAmino(o: any): o is QueryAllUndelegationResponseAmino {
    return o && (o.$typeUrl === QueryAllUndelegationResponse.typeUrl || Array.isArray(o.undelegation) && (!o.undelegation.length || Undelegation.isAmino(o.undelegation[0])));
  },
  encode(message: QueryAllUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.undelegation) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation.push(Undelegation.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: QueryAllUndelegationResponseAmino): QueryAllUndelegationResponse {
    const message = createBaseQueryAllUndelegationResponse();
    message.undelegation = object.undelegation?.map(e => Undelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUndelegationResponse, useInterfaces: boolean = true): QueryAllUndelegationResponseAmino {
    const obj: any = {};
    if (message.undelegation) {
      obj.undelegation = message.undelegation.map(e => e ? Undelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.undelegation = null;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUndelegationResponseAminoMsg): QueryAllUndelegationResponse {
    return QueryAllUndelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUndelegationResponseProtoMsg, useInterfaces: boolean = true): QueryAllUndelegationResponse {
    return QueryAllUndelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllUndelegationResponse): Uint8Array {
    return QueryAllUndelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUndelegationResponse): QueryAllUndelegationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryAllUndelegationResponse",
      value: QueryAllUndelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllUndelegationResponse.typeUrl, QueryAllUndelegationResponse);
function createBaseQueryIncompleteUndelegationRequest(): QueryIncompleteUndelegationRequest {
  return {
    hostChain: "",
    pagination: undefined
  };
}
export const QueryIncompleteUndelegationRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryIncompleteUndelegationRequest",
  is(o: any): o is QueryIncompleteUndelegationRequest {
    return o && (o.$typeUrl === QueryIncompleteUndelegationRequest.typeUrl || typeof o.hostChain === "string");
  },
  isSDK(o: any): o is QueryIncompleteUndelegationRequestSDKType {
    return o && (o.$typeUrl === QueryIncompleteUndelegationRequest.typeUrl || typeof o.host_chain === "string");
  },
  isAmino(o: any): o is QueryIncompleteUndelegationRequestAmino {
    return o && (o.$typeUrl === QueryIncompleteUndelegationRequest.typeUrl || typeof o.host_chain === "string");
  },
  encode(message: QueryIncompleteUndelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIncompleteUndelegationRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryIncompleteUndelegationRequestAmino): QueryIncompleteUndelegationRequest {
    const message = createBaseQueryIncompleteUndelegationRequest();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIncompleteUndelegationRequest, useInterfaces: boolean = true): QueryIncompleteUndelegationRequestAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncompleteUndelegationRequestAminoMsg): QueryIncompleteUndelegationRequest {
    return QueryIncompleteUndelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIncompleteUndelegationRequestProtoMsg, useInterfaces: boolean = true): QueryIncompleteUndelegationRequest {
    return QueryIncompleteUndelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIncompleteUndelegationRequest): Uint8Array {
    return QueryIncompleteUndelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncompleteUndelegationRequest): QueryIncompleteUndelegationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryIncompleteUndelegationRequest",
      value: QueryIncompleteUndelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIncompleteUndelegationRequest.typeUrl, QueryIncompleteUndelegationRequest);
function createBaseQueryIncompleteUndelegationResponse(): QueryIncompleteUndelegationResponse {
  return {
    undelegation: [],
    pagination: undefined
  };
}
export const QueryIncompleteUndelegationResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryIncompleteUndelegationResponse",
  is(o: any): o is QueryIncompleteUndelegationResponse {
    return o && (o.$typeUrl === QueryIncompleteUndelegationResponse.typeUrl || Array.isArray(o.undelegation) && (!o.undelegation.length || Undelegation.is(o.undelegation[0])));
  },
  isSDK(o: any): o is QueryIncompleteUndelegationResponseSDKType {
    return o && (o.$typeUrl === QueryIncompleteUndelegationResponse.typeUrl || Array.isArray(o.undelegation) && (!o.undelegation.length || Undelegation.isSDK(o.undelegation[0])));
  },
  isAmino(o: any): o is QueryIncompleteUndelegationResponseAmino {
    return o && (o.$typeUrl === QueryIncompleteUndelegationResponse.typeUrl || Array.isArray(o.undelegation) && (!o.undelegation.length || Undelegation.isAmino(o.undelegation[0])));
  },
  encode(message: QueryIncompleteUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.undelegation) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIncompleteUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncompleteUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation.push(Undelegation.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: QueryIncompleteUndelegationResponseAmino): QueryIncompleteUndelegationResponse {
    const message = createBaseQueryIncompleteUndelegationResponse();
    message.undelegation = object.undelegation?.map(e => Undelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIncompleteUndelegationResponse, useInterfaces: boolean = true): QueryIncompleteUndelegationResponseAmino {
    const obj: any = {};
    if (message.undelegation) {
      obj.undelegation = message.undelegation.map(e => e ? Undelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.undelegation = null;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncompleteUndelegationResponseAminoMsg): QueryIncompleteUndelegationResponse {
    return QueryIncompleteUndelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIncompleteUndelegationResponseProtoMsg, useInterfaces: boolean = true): QueryIncompleteUndelegationResponse {
    return QueryIncompleteUndelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIncompleteUndelegationResponse): Uint8Array {
    return QueryIncompleteUndelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncompleteUndelegationResponse): QueryIncompleteUndelegationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryIncompleteUndelegationResponse",
      value: QueryIncompleteUndelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIncompleteUndelegationResponse.typeUrl, QueryIncompleteUndelegationResponse);
function createBaseQueryGetChannelUndelegationRequest(): QueryGetChannelUndelegationRequest {
  return {
    hostChain: "",
    epoch: BigInt(0),
    transferChannel: ""
  };
}
export const QueryGetChannelUndelegationRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryGetChannelUndelegationRequest",
  is(o: any): o is QueryGetChannelUndelegationRequest {
    return o && (o.$typeUrl === QueryGetChannelUndelegationRequest.typeUrl || typeof o.hostChain === "string" && typeof o.epoch === "bigint" && typeof o.transferChannel === "string");
  },
  isSDK(o: any): o is QueryGetChannelUndelegationRequestSDKType {
    return o && (o.$typeUrl === QueryGetChannelUndelegationRequest.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint" && typeof o.transfer_channel === "string");
  },
  isAmino(o: any): o is QueryGetChannelUndelegationRequestAmino {
    return o && (o.$typeUrl === QueryGetChannelUndelegationRequest.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint" && typeof o.transfer_channel === "string");
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetChannelUndelegationRequest {
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
  },
  fromAmino(object: QueryGetChannelUndelegationRequestAmino): QueryGetChannelUndelegationRequest {
    const message = createBaseQueryGetChannelUndelegationRequest();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    return message;
  },
  toAmino(message: QueryGetChannelUndelegationRequest, useInterfaces: boolean = true): QueryGetChannelUndelegationRequestAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    return obj;
  },
  fromAminoMsg(object: QueryGetChannelUndelegationRequestAminoMsg): QueryGetChannelUndelegationRequest {
    return QueryGetChannelUndelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetChannelUndelegationRequestProtoMsg, useInterfaces: boolean = true): QueryGetChannelUndelegationRequest {
    return QueryGetChannelUndelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetChannelUndelegationRequest): Uint8Array {
    return QueryGetChannelUndelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetChannelUndelegationRequest): QueryGetChannelUndelegationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryGetChannelUndelegationRequest",
      value: QueryGetChannelUndelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetChannelUndelegationRequest.typeUrl, QueryGetChannelUndelegationRequest);
function createBaseQueryGetChannelUndelegationResponse(): QueryGetChannelUndelegationResponse {
  return {
    channelUndelegation: ChannelUndelegation.fromPartial({})
  };
}
export const QueryGetChannelUndelegationResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryGetChannelUndelegationResponse",
  is(o: any): o is QueryGetChannelUndelegationResponse {
    return o && (o.$typeUrl === QueryGetChannelUndelegationResponse.typeUrl || ChannelUndelegation.is(o.channelUndelegation));
  },
  isSDK(o: any): o is QueryGetChannelUndelegationResponseSDKType {
    return o && (o.$typeUrl === QueryGetChannelUndelegationResponse.typeUrl || ChannelUndelegation.isSDK(o.channel_undelegation));
  },
  isAmino(o: any): o is QueryGetChannelUndelegationResponseAmino {
    return o && (o.$typeUrl === QueryGetChannelUndelegationResponse.typeUrl || ChannelUndelegation.isAmino(o.channel_undelegation));
  },
  encode(message: QueryGetChannelUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelUndelegation !== undefined) {
      ChannelUndelegation.encode(message.channelUndelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetChannelUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetChannelUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelUndelegation = ChannelUndelegation.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryGetChannelUndelegationResponseAmino): QueryGetChannelUndelegationResponse {
    const message = createBaseQueryGetChannelUndelegationResponse();
    if (object.channel_undelegation !== undefined && object.channel_undelegation !== null) {
      message.channelUndelegation = ChannelUndelegation.fromAmino(object.channel_undelegation);
    }
    return message;
  },
  toAmino(message: QueryGetChannelUndelegationResponse, useInterfaces: boolean = true): QueryGetChannelUndelegationResponseAmino {
    const obj: any = {};
    obj.channel_undelegation = message.channelUndelegation ? ChannelUndelegation.toAmino(message.channelUndelegation, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetChannelUndelegationResponseAminoMsg): QueryGetChannelUndelegationResponse {
    return QueryGetChannelUndelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetChannelUndelegationResponseProtoMsg, useInterfaces: boolean = true): QueryGetChannelUndelegationResponse {
    return QueryGetChannelUndelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetChannelUndelegationResponse): Uint8Array {
    return QueryGetChannelUndelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetChannelUndelegationResponse): QueryGetChannelUndelegationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryGetChannelUndelegationResponse",
      value: QueryGetChannelUndelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetChannelUndelegationResponse.typeUrl, QueryGetChannelUndelegationResponse);
function createBaseQueryAllChannelUndelegationRequest(): QueryAllChannelUndelegationRequest {
  return {
    hostChain: "",
    epoch: BigInt(0),
    pagination: undefined
  };
}
export const QueryAllChannelUndelegationRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryAllChannelUndelegationRequest",
  is(o: any): o is QueryAllChannelUndelegationRequest {
    return o && (o.$typeUrl === QueryAllChannelUndelegationRequest.typeUrl || typeof o.hostChain === "string" && typeof o.epoch === "bigint");
  },
  isSDK(o: any): o is QueryAllChannelUndelegationRequestSDKType {
    return o && (o.$typeUrl === QueryAllChannelUndelegationRequest.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint");
  },
  isAmino(o: any): o is QueryAllChannelUndelegationRequestAmino {
    return o && (o.$typeUrl === QueryAllChannelUndelegationRequest.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint");
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllChannelUndelegationRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryAllChannelUndelegationRequestAmino): QueryAllChannelUndelegationRequest {
    const message = createBaseQueryAllChannelUndelegationRequest();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllChannelUndelegationRequest, useInterfaces: boolean = true): QueryAllChannelUndelegationRequestAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllChannelUndelegationRequestAminoMsg): QueryAllChannelUndelegationRequest {
    return QueryAllChannelUndelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllChannelUndelegationRequestProtoMsg, useInterfaces: boolean = true): QueryAllChannelUndelegationRequest {
    return QueryAllChannelUndelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllChannelUndelegationRequest): Uint8Array {
    return QueryAllChannelUndelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllChannelUndelegationRequest): QueryAllChannelUndelegationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryAllChannelUndelegationRequest",
      value: QueryAllChannelUndelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllChannelUndelegationRequest.typeUrl, QueryAllChannelUndelegationRequest);
function createBaseQueryAllChannelUndelegationResponse(): QueryAllChannelUndelegationResponse {
  return {
    channelUndelegation: [],
    pagination: undefined
  };
}
export const QueryAllChannelUndelegationResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryAllChannelUndelegationResponse",
  is(o: any): o is QueryAllChannelUndelegationResponse {
    return o && (o.$typeUrl === QueryAllChannelUndelegationResponse.typeUrl || Array.isArray(o.channelUndelegation) && (!o.channelUndelegation.length || ChannelUndelegation.is(o.channelUndelegation[0])));
  },
  isSDK(o: any): o is QueryAllChannelUndelegationResponseSDKType {
    return o && (o.$typeUrl === QueryAllChannelUndelegationResponse.typeUrl || Array.isArray(o.channel_undelegation) && (!o.channel_undelegation.length || ChannelUndelegation.isSDK(o.channel_undelegation[0])));
  },
  isAmino(o: any): o is QueryAllChannelUndelegationResponseAmino {
    return o && (o.$typeUrl === QueryAllChannelUndelegationResponse.typeUrl || Array.isArray(o.channel_undelegation) && (!o.channel_undelegation.length || ChannelUndelegation.isAmino(o.channel_undelegation[0])));
  },
  encode(message: QueryAllChannelUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channelUndelegation) {
      ChannelUndelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllChannelUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllChannelUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelUndelegation.push(ChannelUndelegation.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: QueryAllChannelUndelegationResponseAmino): QueryAllChannelUndelegationResponse {
    const message = createBaseQueryAllChannelUndelegationResponse();
    message.channelUndelegation = object.channel_undelegation?.map(e => ChannelUndelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllChannelUndelegationResponse, useInterfaces: boolean = true): QueryAllChannelUndelegationResponseAmino {
    const obj: any = {};
    if (message.channelUndelegation) {
      obj.channel_undelegation = message.channelUndelegation.map(e => e ? ChannelUndelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.channel_undelegation = null;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllChannelUndelegationResponseAminoMsg): QueryAllChannelUndelegationResponse {
    return QueryAllChannelUndelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllChannelUndelegationResponseProtoMsg, useInterfaces: boolean = true): QueryAllChannelUndelegationResponse {
    return QueryAllChannelUndelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllChannelUndelegationResponse): Uint8Array {
    return QueryAllChannelUndelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllChannelUndelegationResponse): QueryAllChannelUndelegationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryAllChannelUndelegationResponse",
      value: QueryAllChannelUndelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllChannelUndelegationResponse.typeUrl, QueryAllChannelUndelegationResponse);
function createBaseQueryDelegationQueueBalanceRequest(): QueryDelegationQueueBalanceRequest {
  return {
    hostChain: "",
    transferChannel: ""
  };
}
export const QueryDelegationQueueBalanceRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryDelegationQueueBalanceRequest",
  is(o: any): o is QueryDelegationQueueBalanceRequest {
    return o && (o.$typeUrl === QueryDelegationQueueBalanceRequest.typeUrl || typeof o.hostChain === "string" && typeof o.transferChannel === "string");
  },
  isSDK(o: any): o is QueryDelegationQueueBalanceRequestSDKType {
    return o && (o.$typeUrl === QueryDelegationQueueBalanceRequest.typeUrl || typeof o.host_chain === "string" && typeof o.transfer_channel === "string");
  },
  isAmino(o: any): o is QueryDelegationQueueBalanceRequestAmino {
    return o && (o.$typeUrl === QueryDelegationQueueBalanceRequest.typeUrl || typeof o.host_chain === "string" && typeof o.transfer_channel === "string");
  },
  encode(message: QueryDelegationQueueBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(18).string(message.transferChannel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegationQueueBalanceRequest {
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
  },
  fromAmino(object: QueryDelegationQueueBalanceRequestAmino): QueryDelegationQueueBalanceRequest {
    const message = createBaseQueryDelegationQueueBalanceRequest();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    return message;
  },
  toAmino(message: QueryDelegationQueueBalanceRequest, useInterfaces: boolean = true): QueryDelegationQueueBalanceRequestAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationQueueBalanceRequestAminoMsg): QueryDelegationQueueBalanceRequest {
    return QueryDelegationQueueBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationQueueBalanceRequestProtoMsg, useInterfaces: boolean = true): QueryDelegationQueueBalanceRequest {
    return QueryDelegationQueueBalanceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegationQueueBalanceRequest): Uint8Array {
    return QueryDelegationQueueBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationQueueBalanceRequest): QueryDelegationQueueBalanceRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryDelegationQueueBalanceRequest",
      value: QueryDelegationQueueBalanceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegationQueueBalanceRequest.typeUrl, QueryDelegationQueueBalanceRequest);
function createBaseQueryDelegationQueueBalanceResponse(): QueryDelegationQueueBalanceResponse {
  return {
    balance: Coin.fromPartial({})
  };
}
export const QueryDelegationQueueBalanceResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryDelegationQueueBalanceResponse",
  is(o: any): o is QueryDelegationQueueBalanceResponse {
    return o && (o.$typeUrl === QueryDelegationQueueBalanceResponse.typeUrl || Coin.is(o.balance));
  },
  isSDK(o: any): o is QueryDelegationQueueBalanceResponseSDKType {
    return o && (o.$typeUrl === QueryDelegationQueueBalanceResponse.typeUrl || Coin.isSDK(o.balance));
  },
  isAmino(o: any): o is QueryDelegationQueueBalanceResponseAmino {
    return o && (o.$typeUrl === QueryDelegationQueueBalanceResponse.typeUrl || Coin.isAmino(o.balance));
  },
  encode(message: QueryDelegationQueueBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegationQueueBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationQueueBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryDelegationQueueBalanceResponseAmino): QueryDelegationQueueBalanceResponse {
    const message = createBaseQueryDelegationQueueBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: QueryDelegationQueueBalanceResponse, useInterfaces: boolean = true): QueryDelegationQueueBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationQueueBalanceResponseAminoMsg): QueryDelegationQueueBalanceResponse {
    return QueryDelegationQueueBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationQueueBalanceResponseProtoMsg, useInterfaces: boolean = true): QueryDelegationQueueBalanceResponse {
    return QueryDelegationQueueBalanceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegationQueueBalanceResponse): Uint8Array {
    return QueryDelegationQueueBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationQueueBalanceResponse): QueryDelegationQueueBalanceResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryDelegationQueueBalanceResponse",
      value: QueryDelegationQueueBalanceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegationQueueBalanceResponse.typeUrl, QueryDelegationQueueBalanceResponse);
function createBaseQueryEpochInfoRequest(): QueryEpochInfoRequest {
  return {
    hostChain: ""
  };
}
export const QueryEpochInfoRequest = {
  typeUrl: "/pryzm.icstaking.v1.QueryEpochInfoRequest",
  is(o: any): o is QueryEpochInfoRequest {
    return o && (o.$typeUrl === QueryEpochInfoRequest.typeUrl || typeof o.hostChain === "string");
  },
  isSDK(o: any): o is QueryEpochInfoRequestSDKType {
    return o && (o.$typeUrl === QueryEpochInfoRequest.typeUrl || typeof o.host_chain === "string");
  },
  isAmino(o: any): o is QueryEpochInfoRequestAmino {
    return o && (o.$typeUrl === QueryEpochInfoRequest.typeUrl || typeof o.host_chain === "string");
  },
  encode(message: QueryEpochInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryEpochInfoRequest {
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
  },
  fromAmino(object: QueryEpochInfoRequestAmino): QueryEpochInfoRequest {
    const message = createBaseQueryEpochInfoRequest();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    return message;
  },
  toAmino(message: QueryEpochInfoRequest, useInterfaces: boolean = true): QueryEpochInfoRequestAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfoRequestAminoMsg): QueryEpochInfoRequest {
    return QueryEpochInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochInfoRequestProtoMsg, useInterfaces: boolean = true): QueryEpochInfoRequest {
    return QueryEpochInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryEpochInfoRequest): Uint8Array {
    return QueryEpochInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfoRequest): QueryEpochInfoRequestProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryEpochInfoRequest",
      value: QueryEpochInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEpochInfoRequest.typeUrl, QueryEpochInfoRequest);
function createBaseQueryEpochInfoResponse(): QueryEpochInfoResponse {
  return {
    lastDelegationTime: Timestamp.fromPartial({}),
    lastUndelegationTime: Timestamp.fromPartial({}),
    currentUndelegationEpoch: BigInt(0)
  };
}
export const QueryEpochInfoResponse = {
  typeUrl: "/pryzm.icstaking.v1.QueryEpochInfoResponse",
  is(o: any): o is QueryEpochInfoResponse {
    return o && (o.$typeUrl === QueryEpochInfoResponse.typeUrl || Timestamp.is(o.lastDelegationTime) && Timestamp.is(o.lastUndelegationTime) && typeof o.currentUndelegationEpoch === "bigint");
  },
  isSDK(o: any): o is QueryEpochInfoResponseSDKType {
    return o && (o.$typeUrl === QueryEpochInfoResponse.typeUrl || Timestamp.isSDK(o.last_delegation_time) && Timestamp.isSDK(o.last_undelegation_time) && typeof o.current_undelegation_epoch === "bigint");
  },
  isAmino(o: any): o is QueryEpochInfoResponseAmino {
    return o && (o.$typeUrl === QueryEpochInfoResponse.typeUrl || Timestamp.isAmino(o.last_delegation_time) && Timestamp.isAmino(o.last_undelegation_time) && typeof o.current_undelegation_epoch === "bigint");
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryEpochInfoResponse {
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
  },
  fromAmino(object: QueryEpochInfoResponseAmino): QueryEpochInfoResponse {
    const message = createBaseQueryEpochInfoResponse();
    if (object.last_delegation_time !== undefined && object.last_delegation_time !== null) {
      message.lastDelegationTime = Timestamp.fromAmino(object.last_delegation_time);
    }
    if (object.last_undelegation_time !== undefined && object.last_undelegation_time !== null) {
      message.lastUndelegationTime = Timestamp.fromAmino(object.last_undelegation_time);
    }
    if (object.current_undelegation_epoch !== undefined && object.current_undelegation_epoch !== null) {
      message.currentUndelegationEpoch = BigInt(object.current_undelegation_epoch);
    }
    return message;
  },
  toAmino(message: QueryEpochInfoResponse, useInterfaces: boolean = true): QueryEpochInfoResponseAmino {
    const obj: any = {};
    obj.last_delegation_time = message.lastDelegationTime ? Timestamp.toAmino(message.lastDelegationTime, useInterfaces) : undefined;
    obj.last_undelegation_time = message.lastUndelegationTime ? Timestamp.toAmino(message.lastUndelegationTime, useInterfaces) : undefined;
    obj.current_undelegation_epoch = message.currentUndelegationEpoch ? message.currentUndelegationEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfoResponseAminoMsg): QueryEpochInfoResponse {
    return QueryEpochInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochInfoResponseProtoMsg, useInterfaces: boolean = true): QueryEpochInfoResponse {
    return QueryEpochInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryEpochInfoResponse): Uint8Array {
    return QueryEpochInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfoResponse): QueryEpochInfoResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.QueryEpochInfoResponse",
      value: QueryEpochInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEpochInfoResponse.typeUrl, QueryEpochInfoResponse);