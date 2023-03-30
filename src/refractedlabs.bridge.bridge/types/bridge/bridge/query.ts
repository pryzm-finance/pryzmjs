/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { ActorType, actorTypeFromJSON, actorTypeToJSON } from "./actor";
import { ActorDelegation } from "./actor_delegation";
import { ActorMissCounter } from "./actor_miss_counter";
import { Connection } from "./connection";
import { ConsensusStatus } from "./consensus_status";
import { MessageMetadata } from "./message";
import { Params } from "./params";
import { Ping } from "./ping";
import { RetriableMessage } from "./retriable_message";

export const protobufPackage = "refractedlabs.bridge.bridge";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetConnectionRequest {
  connectionId: string;
}

export interface QueryGetConnectionResponse {
  connection: Connection | undefined;
}

export interface QueryAllConnectionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllConnectionResponse {
  connection: Connection[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMessageMetadataRequest {
  hash: string;
}

export interface QueryGetMessageMetadataResponse {
  messageMetadata: MessageMetadata | undefined;
}

export interface QueryAllMessageMetadataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMessageMetadataResponse {
  messageMetadata: MessageMetadata[];
  pagination: PageResponse | undefined;
}

export interface QueryGetConsensusStatusRequest {
  chain: string;
}

export interface QueryGetConsensusStatusResponse {
  consensusStatus: ConsensusStatus | undefined;
}

export interface QueryAllConsensusStatusRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllConsensusStatusResponse {
  consensusStatus: ConsensusStatus[];
  pagination: PageResponse | undefined;
}

export interface QueryGetActorMissCounterRequest {
  actorType: ActorType;
  connectionId: string;
  actor: string;
}

export interface QueryGetActorMissCounterResponse {
  actorMissCounter: ActorMissCounter | undefined;
}

export interface QueryAllActorMissCounterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActorMissCounterResponse {
  actorMissCounter: ActorMissCounter[];
  pagination: PageResponse | undefined;
}

export interface QueryGetActorDelegationRequest {
  actorType: ActorType;
  connectionId: string;
  actor: string;
}

export interface QueryGetActorDelegationResponse {
  actorDelegation: ActorDelegation | undefined;
}

export interface QueryAllActorDelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActorDelegationResponse {
  actorDelegation: ActorDelegation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetRetriableMessageRequest {
  msgHash: string;
}

export interface QueryGetRetriableMessageResponse {
  retriableMessage: RetriableMessage | undefined;
}

export interface QueryAllRetriableMessageRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRetriableMessageResponse {
  retriableMessage: RetriableMessage[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPingRequest {
  msgHash: string;
}

export interface QueryGetPingResponse {
  ping: Ping | undefined;
}

export interface QueryAllPingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPingResponse {
  ping: Ping[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetConnectionRequest(): QueryGetConnectionRequest {
  return { connectionId: "" };
}

export const QueryGetConnectionRequest = {
  encode(message: QueryGetConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetConnectionRequest {
    return { connectionId: isSet(object.connectionId) ? String(object.connectionId) : "" };
  },

  toJSON(message: QueryGetConnectionRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetConnectionRequest>, I>>(object: I): QueryGetConnectionRequest {
    const message = createBaseQueryGetConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseQueryGetConnectionResponse(): QueryGetConnectionResponse {
  return { connection: undefined };
}

export const QueryGetConnectionResponse = {
  encode(message: QueryGetConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      Connection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = Connection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetConnectionResponse {
    return { connection: isSet(object.connection) ? Connection.fromJSON(object.connection) : undefined };
  },

  toJSON(message: QueryGetConnectionResponse): unknown {
    const obj: any = {};
    message.connection !== undefined
      && (obj.connection = message.connection ? Connection.toJSON(message.connection) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetConnectionResponse>, I>>(object: I): QueryGetConnectionResponse {
    const message = createBaseQueryGetConnectionResponse();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? Connection.fromPartial(object.connection)
      : undefined;
    return message;
  },
};

function createBaseQueryAllConnectionRequest(): QueryAllConnectionRequest {
  return { pagination: undefined };
}

export const QueryAllConnectionRequest = {
  encode(message: QueryAllConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConnectionRequest();
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

  fromJSON(object: any): QueryAllConnectionRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllConnectionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllConnectionRequest>, I>>(object: I): QueryAllConnectionRequest {
    const message = createBaseQueryAllConnectionRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllConnectionResponse(): QueryAllConnectionResponse {
  return { connection: [], pagination: undefined };
}

export const QueryAllConnectionResponse = {
  encode(message: QueryAllConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connection) {
      Connection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection.push(Connection.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllConnectionResponse {
    return {
      connection: Array.isArray(object?.connection) ? object.connection.map((e: any) => Connection.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllConnectionResponse): unknown {
    const obj: any = {};
    if (message.connection) {
      obj.connection = message.connection.map((e) => e ? Connection.toJSON(e) : undefined);
    } else {
      obj.connection = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllConnectionResponse>, I>>(object: I): QueryAllConnectionResponse {
    const message = createBaseQueryAllConnectionResponse();
    message.connection = object.connection?.map((e) => Connection.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMessageMetadataRequest(): QueryGetMessageMetadataRequest {
  return { hash: "" };
}

export const QueryGetMessageMetadataRequest = {
  encode(message: QueryGetMessageMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMessageMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMessageMetadataRequest();
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

  fromJSON(object: any): QueryGetMessageMetadataRequest {
    return { hash: isSet(object.hash) ? String(object.hash) : "" };
  },

  toJSON(message: QueryGetMessageMetadataRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMessageMetadataRequest>, I>>(
    object: I,
  ): QueryGetMessageMetadataRequest {
    const message = createBaseQueryGetMessageMetadataRequest();
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBaseQueryGetMessageMetadataResponse(): QueryGetMessageMetadataResponse {
  return { messageMetadata: undefined };
}

export const QueryGetMessageMetadataResponse = {
  encode(message: QueryGetMessageMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageMetadata !== undefined) {
      MessageMetadata.encode(message.messageMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMessageMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMessageMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageMetadata = MessageMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMessageMetadataResponse {
    return {
      messageMetadata: isSet(object.messageMetadata) ? MessageMetadata.fromJSON(object.messageMetadata) : undefined,
    };
  },

  toJSON(message: QueryGetMessageMetadataResponse): unknown {
    const obj: any = {};
    message.messageMetadata !== undefined
      && (obj.messageMetadata = message.messageMetadata ? MessageMetadata.toJSON(message.messageMetadata) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMessageMetadataResponse>, I>>(
    object: I,
  ): QueryGetMessageMetadataResponse {
    const message = createBaseQueryGetMessageMetadataResponse();
    message.messageMetadata = (object.messageMetadata !== undefined && object.messageMetadata !== null)
      ? MessageMetadata.fromPartial(object.messageMetadata)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMessageMetadataRequest(): QueryAllMessageMetadataRequest {
  return { pagination: undefined };
}

export const QueryAllMessageMetadataRequest = {
  encode(message: QueryAllMessageMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMessageMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMessageMetadataRequest();
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

  fromJSON(object: any): QueryAllMessageMetadataRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMessageMetadataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMessageMetadataRequest>, I>>(
    object: I,
  ): QueryAllMessageMetadataRequest {
    const message = createBaseQueryAllMessageMetadataRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMessageMetadataResponse(): QueryAllMessageMetadataResponse {
  return { messageMetadata: [], pagination: undefined };
}

export const QueryAllMessageMetadataResponse = {
  encode(message: QueryAllMessageMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messageMetadata) {
      MessageMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMessageMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMessageMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageMetadata.push(MessageMetadata.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMessageMetadataResponse {
    return {
      messageMetadata: Array.isArray(object?.messageMetadata)
        ? object.messageMetadata.map((e: any) => MessageMetadata.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMessageMetadataResponse): unknown {
    const obj: any = {};
    if (message.messageMetadata) {
      obj.messageMetadata = message.messageMetadata.map((e) => e ? MessageMetadata.toJSON(e) : undefined);
    } else {
      obj.messageMetadata = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMessageMetadataResponse>, I>>(
    object: I,
  ): QueryAllMessageMetadataResponse {
    const message = createBaseQueryAllMessageMetadataResponse();
    message.messageMetadata = object.messageMetadata?.map((e) => MessageMetadata.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetConsensusStatusRequest(): QueryGetConsensusStatusRequest {
  return { chain: "" };
}

export const QueryGetConsensusStatusRequest = {
  encode(message: QueryGetConsensusStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConsensusStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConsensusStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetConsensusStatusRequest {
    return { chain: isSet(object.chain) ? String(object.chain) : "" };
  },

  toJSON(message: QueryGetConsensusStatusRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetConsensusStatusRequest>, I>>(
    object: I,
  ): QueryGetConsensusStatusRequest {
    const message = createBaseQueryGetConsensusStatusRequest();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseQueryGetConsensusStatusResponse(): QueryGetConsensusStatusResponse {
  return { consensusStatus: undefined };
}

export const QueryGetConsensusStatusResponse = {
  encode(message: QueryGetConsensusStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusStatus !== undefined) {
      ConsensusStatus.encode(message.consensusStatus, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConsensusStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConsensusStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStatus = ConsensusStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetConsensusStatusResponse {
    return {
      consensusStatus: isSet(object.consensusStatus) ? ConsensusStatus.fromJSON(object.consensusStatus) : undefined,
    };
  },

  toJSON(message: QueryGetConsensusStatusResponse): unknown {
    const obj: any = {};
    message.consensusStatus !== undefined
      && (obj.consensusStatus = message.consensusStatus ? ConsensusStatus.toJSON(message.consensusStatus) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetConsensusStatusResponse>, I>>(
    object: I,
  ): QueryGetConsensusStatusResponse {
    const message = createBaseQueryGetConsensusStatusResponse();
    message.consensusStatus = (object.consensusStatus !== undefined && object.consensusStatus !== null)
      ? ConsensusStatus.fromPartial(object.consensusStatus)
      : undefined;
    return message;
  },
};

function createBaseQueryAllConsensusStatusRequest(): QueryAllConsensusStatusRequest {
  return { pagination: undefined };
}

export const QueryAllConsensusStatusRequest = {
  encode(message: QueryAllConsensusStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConsensusStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConsensusStatusRequest();
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

  fromJSON(object: any): QueryAllConsensusStatusRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllConsensusStatusRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllConsensusStatusRequest>, I>>(
    object: I,
  ): QueryAllConsensusStatusRequest {
    const message = createBaseQueryAllConsensusStatusRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllConsensusStatusResponse(): QueryAllConsensusStatusResponse {
  return { consensusStatus: [], pagination: undefined };
}

export const QueryAllConsensusStatusResponse = {
  encode(message: QueryAllConsensusStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.consensusStatus) {
      ConsensusStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConsensusStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConsensusStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStatus.push(ConsensusStatus.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllConsensusStatusResponse {
    return {
      consensusStatus: Array.isArray(object?.consensusStatus)
        ? object.consensusStatus.map((e: any) => ConsensusStatus.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllConsensusStatusResponse): unknown {
    const obj: any = {};
    if (message.consensusStatus) {
      obj.consensusStatus = message.consensusStatus.map((e) => e ? ConsensusStatus.toJSON(e) : undefined);
    } else {
      obj.consensusStatus = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllConsensusStatusResponse>, I>>(
    object: I,
  ): QueryAllConsensusStatusResponse {
    const message = createBaseQueryAllConsensusStatusResponse();
    message.consensusStatus = object.consensusStatus?.map((e) => ConsensusStatus.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetActorMissCounterRequest(): QueryGetActorMissCounterRequest {
  return { actorType: 0, connectionId: "", actor: "" };
}

export const QueryGetActorMissCounterRequest = {
  encode(message: QueryGetActorMissCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actorType !== 0) {
      writer.uint32(8).int32(message.actorType);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.actor !== "") {
      writer.uint32(26).string(message.actor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActorMissCounterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActorMissCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.int32() as any;
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.actor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActorMissCounterRequest {
    return {
      actorType: isSet(object.actorType) ? actorTypeFromJSON(object.actorType) : 0,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      actor: isSet(object.actor) ? String(object.actor) : "",
    };
  },

  toJSON(message: QueryGetActorMissCounterRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = actorTypeToJSON(message.actorType));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.actor !== undefined && (obj.actor = message.actor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetActorMissCounterRequest>, I>>(
    object: I,
  ): QueryGetActorMissCounterRequest {
    const message = createBaseQueryGetActorMissCounterRequest();
    message.actorType = object.actorType ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.actor = object.actor ?? "";
    return message;
  },
};

function createBaseQueryGetActorMissCounterResponse(): QueryGetActorMissCounterResponse {
  return { actorMissCounter: undefined };
}

export const QueryGetActorMissCounterResponse = {
  encode(message: QueryGetActorMissCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actorMissCounter !== undefined) {
      ActorMissCounter.encode(message.actorMissCounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActorMissCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActorMissCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorMissCounter = ActorMissCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActorMissCounterResponse {
    return {
      actorMissCounter: isSet(object.actorMissCounter) ? ActorMissCounter.fromJSON(object.actorMissCounter) : undefined,
    };
  },

  toJSON(message: QueryGetActorMissCounterResponse): unknown {
    const obj: any = {};
    message.actorMissCounter !== undefined && (obj.actorMissCounter = message.actorMissCounter
      ? ActorMissCounter.toJSON(message.actorMissCounter)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetActorMissCounterResponse>, I>>(
    object: I,
  ): QueryGetActorMissCounterResponse {
    const message = createBaseQueryGetActorMissCounterResponse();
    message.actorMissCounter = (object.actorMissCounter !== undefined && object.actorMissCounter !== null)
      ? ActorMissCounter.fromPartial(object.actorMissCounter)
      : undefined;
    return message;
  },
};

function createBaseQueryAllActorMissCounterRequest(): QueryAllActorMissCounterRequest {
  return { pagination: undefined };
}

export const QueryAllActorMissCounterRequest = {
  encode(message: QueryAllActorMissCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActorMissCounterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActorMissCounterRequest();
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

  fromJSON(object: any): QueryAllActorMissCounterRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllActorMissCounterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllActorMissCounterRequest>, I>>(
    object: I,
  ): QueryAllActorMissCounterRequest {
    const message = createBaseQueryAllActorMissCounterRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllActorMissCounterResponse(): QueryAllActorMissCounterResponse {
  return { actorMissCounter: [], pagination: undefined };
}

export const QueryAllActorMissCounterResponse = {
  encode(message: QueryAllActorMissCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actorMissCounter) {
      ActorMissCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActorMissCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActorMissCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorMissCounter.push(ActorMissCounter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllActorMissCounterResponse {
    return {
      actorMissCounter: Array.isArray(object?.actorMissCounter)
        ? object.actorMissCounter.map((e: any) => ActorMissCounter.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllActorMissCounterResponse): unknown {
    const obj: any = {};
    if (message.actorMissCounter) {
      obj.actorMissCounter = message.actorMissCounter.map((e) => e ? ActorMissCounter.toJSON(e) : undefined);
    } else {
      obj.actorMissCounter = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllActorMissCounterResponse>, I>>(
    object: I,
  ): QueryAllActorMissCounterResponse {
    const message = createBaseQueryAllActorMissCounterResponse();
    message.actorMissCounter = object.actorMissCounter?.map((e) => ActorMissCounter.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetActorDelegationRequest(): QueryGetActorDelegationRequest {
  return { actorType: 0, connectionId: "", actor: "" };
}

export const QueryGetActorDelegationRequest = {
  encode(message: QueryGetActorDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actorType !== 0) {
      writer.uint32(8).int32(message.actorType);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.actor !== "") {
      writer.uint32(26).string(message.actor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActorDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActorDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.int32() as any;
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.actor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActorDelegationRequest {
    return {
      actorType: isSet(object.actorType) ? actorTypeFromJSON(object.actorType) : 0,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      actor: isSet(object.actor) ? String(object.actor) : "",
    };
  },

  toJSON(message: QueryGetActorDelegationRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = actorTypeToJSON(message.actorType));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.actor !== undefined && (obj.actor = message.actor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetActorDelegationRequest>, I>>(
    object: I,
  ): QueryGetActorDelegationRequest {
    const message = createBaseQueryGetActorDelegationRequest();
    message.actorType = object.actorType ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.actor = object.actor ?? "";
    return message;
  },
};

function createBaseQueryGetActorDelegationResponse(): QueryGetActorDelegationResponse {
  return { actorDelegation: undefined };
}

export const QueryGetActorDelegationResponse = {
  encode(message: QueryGetActorDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actorDelegation !== undefined) {
      ActorDelegation.encode(message.actorDelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActorDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActorDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorDelegation = ActorDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActorDelegationResponse {
    return {
      actorDelegation: isSet(object.actorDelegation) ? ActorDelegation.fromJSON(object.actorDelegation) : undefined,
    };
  },

  toJSON(message: QueryGetActorDelegationResponse): unknown {
    const obj: any = {};
    message.actorDelegation !== undefined
      && (obj.actorDelegation = message.actorDelegation ? ActorDelegation.toJSON(message.actorDelegation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetActorDelegationResponse>, I>>(
    object: I,
  ): QueryGetActorDelegationResponse {
    const message = createBaseQueryGetActorDelegationResponse();
    message.actorDelegation = (object.actorDelegation !== undefined && object.actorDelegation !== null)
      ? ActorDelegation.fromPartial(object.actorDelegation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllActorDelegationRequest(): QueryAllActorDelegationRequest {
  return { pagination: undefined };
}

export const QueryAllActorDelegationRequest = {
  encode(message: QueryAllActorDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActorDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActorDelegationRequest();
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

  fromJSON(object: any): QueryAllActorDelegationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllActorDelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllActorDelegationRequest>, I>>(
    object: I,
  ): QueryAllActorDelegationRequest {
    const message = createBaseQueryAllActorDelegationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllActorDelegationResponse(): QueryAllActorDelegationResponse {
  return { actorDelegation: [], pagination: undefined };
}

export const QueryAllActorDelegationResponse = {
  encode(message: QueryAllActorDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actorDelegation) {
      ActorDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActorDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActorDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorDelegation.push(ActorDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllActorDelegationResponse {
    return {
      actorDelegation: Array.isArray(object?.actorDelegation)
        ? object.actorDelegation.map((e: any) => ActorDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllActorDelegationResponse): unknown {
    const obj: any = {};
    if (message.actorDelegation) {
      obj.actorDelegation = message.actorDelegation.map((e) => e ? ActorDelegation.toJSON(e) : undefined);
    } else {
      obj.actorDelegation = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllActorDelegationResponse>, I>>(
    object: I,
  ): QueryAllActorDelegationResponse {
    const message = createBaseQueryAllActorDelegationResponse();
    message.actorDelegation = object.actorDelegation?.map((e) => ActorDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRetriableMessageRequest(): QueryGetRetriableMessageRequest {
  return { msgHash: "" };
}

export const QueryGetRetriableMessageRequest = {
  encode(message: QueryGetRetriableMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgHash !== "") {
      writer.uint32(10).string(message.msgHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRetriableMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRetriableMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRetriableMessageRequest {
    return { msgHash: isSet(object.msgHash) ? String(object.msgHash) : "" };
  },

  toJSON(message: QueryGetRetriableMessageRequest): unknown {
    const obj: any = {};
    message.msgHash !== undefined && (obj.msgHash = message.msgHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRetriableMessageRequest>, I>>(
    object: I,
  ): QueryGetRetriableMessageRequest {
    const message = createBaseQueryGetRetriableMessageRequest();
    message.msgHash = object.msgHash ?? "";
    return message;
  },
};

function createBaseQueryGetRetriableMessageResponse(): QueryGetRetriableMessageResponse {
  return { retriableMessage: undefined };
}

export const QueryGetRetriableMessageResponse = {
  encode(message: QueryGetRetriableMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retriableMessage !== undefined) {
      RetriableMessage.encode(message.retriableMessage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRetriableMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRetriableMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retriableMessage = RetriableMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRetriableMessageResponse {
    return {
      retriableMessage: isSet(object.retriableMessage) ? RetriableMessage.fromJSON(object.retriableMessage) : undefined,
    };
  },

  toJSON(message: QueryGetRetriableMessageResponse): unknown {
    const obj: any = {};
    message.retriableMessage !== undefined && (obj.retriableMessage = message.retriableMessage
      ? RetriableMessage.toJSON(message.retriableMessage)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRetriableMessageResponse>, I>>(
    object: I,
  ): QueryGetRetriableMessageResponse {
    const message = createBaseQueryGetRetriableMessageResponse();
    message.retriableMessage = (object.retriableMessage !== undefined && object.retriableMessage !== null)
      ? RetriableMessage.fromPartial(object.retriableMessage)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRetriableMessageRequest(): QueryAllRetriableMessageRequest {
  return { pagination: undefined };
}

export const QueryAllRetriableMessageRequest = {
  encode(message: QueryAllRetriableMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRetriableMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRetriableMessageRequest();
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

  fromJSON(object: any): QueryAllRetriableMessageRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRetriableMessageRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRetriableMessageRequest>, I>>(
    object: I,
  ): QueryAllRetriableMessageRequest {
    const message = createBaseQueryAllRetriableMessageRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRetriableMessageResponse(): QueryAllRetriableMessageResponse {
  return { retriableMessage: [], pagination: undefined };
}

export const QueryAllRetriableMessageResponse = {
  encode(message: QueryAllRetriableMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.retriableMessage) {
      RetriableMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRetriableMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRetriableMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retriableMessage.push(RetriableMessage.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllRetriableMessageResponse {
    return {
      retriableMessage: Array.isArray(object?.retriableMessage)
        ? object.retriableMessage.map((e: any) => RetriableMessage.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRetriableMessageResponse): unknown {
    const obj: any = {};
    if (message.retriableMessage) {
      obj.retriableMessage = message.retriableMessage.map((e) => e ? RetriableMessage.toJSON(e) : undefined);
    } else {
      obj.retriableMessage = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRetriableMessageResponse>, I>>(
    object: I,
  ): QueryAllRetriableMessageResponse {
    const message = createBaseQueryAllRetriableMessageResponse();
    message.retriableMessage = object.retriableMessage?.map((e) => RetriableMessage.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPingRequest(): QueryGetPingRequest {
  return { msgHash: "" };
}

export const QueryGetPingRequest = {
  encode(message: QueryGetPingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgHash !== "") {
      writer.uint32(10).string(message.msgHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPingRequest {
    return { msgHash: isSet(object.msgHash) ? String(object.msgHash) : "" };
  },

  toJSON(message: QueryGetPingRequest): unknown {
    const obj: any = {};
    message.msgHash !== undefined && (obj.msgHash = message.msgHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPingRequest>, I>>(object: I): QueryGetPingRequest {
    const message = createBaseQueryGetPingRequest();
    message.msgHash = object.msgHash ?? "";
    return message;
  },
};

function createBaseQueryGetPingResponse(): QueryGetPingResponse {
  return { ping: undefined };
}

export const QueryGetPingResponse = {
  encode(message: QueryGetPingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ping = Ping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPingResponse {
    return { ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined };
  },

  toJSON(message: QueryGetPingResponse): unknown {
    const obj: any = {};
    message.ping !== undefined && (obj.ping = message.ping ? Ping.toJSON(message.ping) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPingResponse>, I>>(object: I): QueryGetPingResponse {
    const message = createBaseQueryGetPingResponse();
    message.ping = (object.ping !== undefined && object.ping !== null) ? Ping.fromPartial(object.ping) : undefined;
    return message;
  },
};

function createBaseQueryAllPingRequest(): QueryAllPingRequest {
  return { pagination: undefined };
}

export const QueryAllPingRequest = {
  encode(message: QueryAllPingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPingRequest();
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

  fromJSON(object: any): QueryAllPingRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPingRequest>, I>>(object: I): QueryAllPingRequest {
    const message = createBaseQueryAllPingRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPingResponse(): QueryAllPingResponse {
  return { ping: [], pagination: undefined };
}

export const QueryAllPingResponse = {
  encode(message: QueryAllPingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ping) {
      Ping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ping.push(Ping.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPingResponse {
    return {
      ping: Array.isArray(object?.ping) ? object.ping.map((e: any) => Ping.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPingResponse): unknown {
    const obj: any = {};
    if (message.ping) {
      obj.ping = message.ping.map((e) => e ? Ping.toJSON(e) : undefined);
    } else {
      obj.ping = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPingResponse>, I>>(object: I): QueryAllPingResponse {
    const message = createBaseQueryAllPingResponse();
    message.ping = object.ping?.map((e) => Ping.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Connection by index. */
  Connection(request: QueryGetConnectionRequest): Promise<QueryGetConnectionResponse>;
  /** Queries a list of Connection items. */
  ConnectionAll(request: QueryAllConnectionRequest): Promise<QueryAllConnectionResponse>;
  /** Queries a MessageMetadata by index. */
  MessageMetadata(request: QueryGetMessageMetadataRequest): Promise<QueryGetMessageMetadataResponse>;
  /** Queries a list of MessageMetadata items. */
  MessageMetadataAll(request: QueryAllMessageMetadataRequest): Promise<QueryAllMessageMetadataResponse>;
  /** Queries a ConsensusStatus by index. */
  ConsensusStatus(request: QueryGetConsensusStatusRequest): Promise<QueryGetConsensusStatusResponse>;
  /** Queries a list of ConsensusStatus items. */
  ConsensusStatusAll(request: QueryAllConsensusStatusRequest): Promise<QueryAllConsensusStatusResponse>;
  /** Queries a ActorMissCounter by index. */
  ActorMissCounter(request: QueryGetActorMissCounterRequest): Promise<QueryGetActorMissCounterResponse>;
  /** Queries a list of ActorMissCounter items. */
  ActorMissCounterAll(request: QueryAllActorMissCounterRequest): Promise<QueryAllActorMissCounterResponse>;
  /** Queries a ActorDelegation by index. */
  ActorDelegation(request: QueryGetActorDelegationRequest): Promise<QueryGetActorDelegationResponse>;
  /** Queries a list of ActorDelegation items. */
  ActorDelegationAll(request: QueryAllActorDelegationRequest): Promise<QueryAllActorDelegationResponse>;
  /** Queries a RetriableMessage by index. */
  RetriableMessage(request: QueryGetRetriableMessageRequest): Promise<QueryGetRetriableMessageResponse>;
  /** Queries a list of RetriableMessage items. */
  RetriableMessageAll(request: QueryAllRetriableMessageRequest): Promise<QueryAllRetriableMessageResponse>;
  /** Queries a Ping by index. */
  Ping(request: QueryGetPingRequest): Promise<QueryGetPingResponse>;
  /** Queries a list of Ping items. */
  PingAll(request: QueryAllPingRequest): Promise<QueryAllPingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Connection = this.Connection.bind(this);
    this.ConnectionAll = this.ConnectionAll.bind(this);
    this.MessageMetadata = this.MessageMetadata.bind(this);
    this.MessageMetadataAll = this.MessageMetadataAll.bind(this);
    this.ConsensusStatus = this.ConsensusStatus.bind(this);
    this.ConsensusStatusAll = this.ConsensusStatusAll.bind(this);
    this.ActorMissCounter = this.ActorMissCounter.bind(this);
    this.ActorMissCounterAll = this.ActorMissCounterAll.bind(this);
    this.ActorDelegation = this.ActorDelegation.bind(this);
    this.ActorDelegationAll = this.ActorDelegationAll.bind(this);
    this.RetriableMessage = this.RetriableMessage.bind(this);
    this.RetriableMessageAll = this.RetriableMessageAll.bind(this);
    this.Ping = this.Ping.bind(this);
    this.PingAll = this.PingAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Connection(request: QueryGetConnectionRequest): Promise<QueryGetConnectionResponse> {
    const data = QueryGetConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "Connection", data);
    return promise.then((data) => QueryGetConnectionResponse.decode(new _m0.Reader(data)));
  }

  ConnectionAll(request: QueryAllConnectionRequest): Promise<QueryAllConnectionResponse> {
    const data = QueryAllConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "ConnectionAll", data);
    return promise.then((data) => QueryAllConnectionResponse.decode(new _m0.Reader(data)));
  }

  MessageMetadata(request: QueryGetMessageMetadataRequest): Promise<QueryGetMessageMetadataResponse> {
    const data = QueryGetMessageMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "MessageMetadata", data);
    return promise.then((data) => QueryGetMessageMetadataResponse.decode(new _m0.Reader(data)));
  }

  MessageMetadataAll(request: QueryAllMessageMetadataRequest): Promise<QueryAllMessageMetadataResponse> {
    const data = QueryAllMessageMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "MessageMetadataAll", data);
    return promise.then((data) => QueryAllMessageMetadataResponse.decode(new _m0.Reader(data)));
  }

  ConsensusStatus(request: QueryGetConsensusStatusRequest): Promise<QueryGetConsensusStatusResponse> {
    const data = QueryGetConsensusStatusRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "ConsensusStatus", data);
    return promise.then((data) => QueryGetConsensusStatusResponse.decode(new _m0.Reader(data)));
  }

  ConsensusStatusAll(request: QueryAllConsensusStatusRequest): Promise<QueryAllConsensusStatusResponse> {
    const data = QueryAllConsensusStatusRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "ConsensusStatusAll", data);
    return promise.then((data) => QueryAllConsensusStatusResponse.decode(new _m0.Reader(data)));
  }

  ActorMissCounter(request: QueryGetActorMissCounterRequest): Promise<QueryGetActorMissCounterResponse> {
    const data = QueryGetActorMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "ActorMissCounter", data);
    return promise.then((data) => QueryGetActorMissCounterResponse.decode(new _m0.Reader(data)));
  }

  ActorMissCounterAll(request: QueryAllActorMissCounterRequest): Promise<QueryAllActorMissCounterResponse> {
    const data = QueryAllActorMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "ActorMissCounterAll", data);
    return promise.then((data) => QueryAllActorMissCounterResponse.decode(new _m0.Reader(data)));
  }

  ActorDelegation(request: QueryGetActorDelegationRequest): Promise<QueryGetActorDelegationResponse> {
    const data = QueryGetActorDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "ActorDelegation", data);
    return promise.then((data) => QueryGetActorDelegationResponse.decode(new _m0.Reader(data)));
  }

  ActorDelegationAll(request: QueryAllActorDelegationRequest): Promise<QueryAllActorDelegationResponse> {
    const data = QueryAllActorDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "ActorDelegationAll", data);
    return promise.then((data) => QueryAllActorDelegationResponse.decode(new _m0.Reader(data)));
  }

  RetriableMessage(request: QueryGetRetriableMessageRequest): Promise<QueryGetRetriableMessageResponse> {
    const data = QueryGetRetriableMessageRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "RetriableMessage", data);
    return promise.then((data) => QueryGetRetriableMessageResponse.decode(new _m0.Reader(data)));
  }

  RetriableMessageAll(request: QueryAllRetriableMessageRequest): Promise<QueryAllRetriableMessageResponse> {
    const data = QueryAllRetriableMessageRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "RetriableMessageAll", data);
    return promise.then((data) => QueryAllRetriableMessageResponse.decode(new _m0.Reader(data)));
  }

  Ping(request: QueryGetPingRequest): Promise<QueryGetPingResponse> {
    const data = QueryGetPingRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "Ping", data);
    return promise.then((data) => QueryGetPingResponse.decode(new _m0.Reader(data)));
  }

  PingAll(request: QueryAllPingRequest): Promise<QueryAllPingResponse> {
    const data = QueryAllPingRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Query", "PingAll", data);
    return promise.then((data) => QueryAllPingResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
