import { HostChain, HostChainAmino, HostChainSDKType } from "../../icstaking/host_chain";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryHostChainRequest {
  hostChainId: string;
}
export interface QueryHostChainRequestProtoMsg {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainRequest";
  value: Uint8Array;
}
export interface QueryHostChainRequestAmino {
  host_chain_id?: string;
}
export interface QueryHostChainRequestAminoMsg {
  type: "/pryzmatics.server.icstaking.QueryHostChainRequest";
  value: QueryHostChainRequestAmino;
}
export interface QueryHostChainRequestSDKType {
  host_chain_id: string;
}
export interface QueryHostChainResponse {
  hostChain: HostChain;
}
export interface QueryHostChainResponseProtoMsg {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainResponse";
  value: Uint8Array;
}
export interface QueryHostChainResponseAmino {
  host_chain?: HostChainAmino;
}
export interface QueryHostChainResponseAminoMsg {
  type: "/pryzmatics.server.icstaking.QueryHostChainResponse";
  value: QueryHostChainResponseAmino;
}
export interface QueryHostChainResponseSDKType {
  host_chain: HostChainSDKType;
}
export interface QueryHostChainsRequest {
  pagination?: PageRequest;
}
export interface QueryHostChainsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainsRequest";
  value: Uint8Array;
}
export interface QueryHostChainsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryHostChainsRequestAminoMsg {
  type: "/pryzmatics.server.icstaking.QueryHostChainsRequest";
  value: QueryHostChainsRequestAmino;
}
export interface QueryHostChainsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryHostChainsResponse {
  hostChains: HostChain[];
  pagination?: PageResponse;
}
export interface QueryHostChainsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainsResponse";
  value: Uint8Array;
}
export interface QueryHostChainsResponseAmino {
  host_chains?: HostChainAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryHostChainsResponseAminoMsg {
  type: "/pryzmatics.server.icstaking.QueryHostChainsResponse";
  value: QueryHostChainsResponseAmino;
}
export interface QueryHostChainsResponseSDKType {
  host_chains: HostChainSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryHostChainUnbondingTimeRequest {
  hostChainId: string;
}
export interface QueryHostChainUnbondingTimeRequestProtoMsg {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainUnbondingTimeRequest";
  value: Uint8Array;
}
export interface QueryHostChainUnbondingTimeRequestAmino {
  host_chain_id?: string;
}
export interface QueryHostChainUnbondingTimeRequestAminoMsg {
  type: "/pryzmatics.server.icstaking.QueryHostChainUnbondingTimeRequest";
  value: QueryHostChainUnbondingTimeRequestAmino;
}
export interface QueryHostChainUnbondingTimeRequestSDKType {
  host_chain_id: string;
}
export interface QueryHostChainUnbondingTimeResponse {
  unbondingTime: Duration;
}
export interface QueryHostChainUnbondingTimeResponseProtoMsg {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainUnbondingTimeResponse";
  value: Uint8Array;
}
export interface QueryHostChainUnbondingTimeResponseAmino {
  unbonding_time?: DurationAmino;
}
export interface QueryHostChainUnbondingTimeResponseAminoMsg {
  type: "/pryzmatics.server.icstaking.QueryHostChainUnbondingTimeResponse";
  value: QueryHostChainUnbondingTimeResponseAmino;
}
export interface QueryHostChainUnbondingTimeResponseSDKType {
  unbonding_time: DurationSDKType;
}
function createBaseQueryHostChainRequest(): QueryHostChainRequest {
  return {
    hostChainId: ""
  };
}
export const QueryHostChainRequest = {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainRequest",
  is(o: any): o is QueryHostChainRequest {
    return o && (o.$typeUrl === QueryHostChainRequest.typeUrl || typeof o.hostChainId === "string");
  },
  isSDK(o: any): o is QueryHostChainRequestSDKType {
    return o && (o.$typeUrl === QueryHostChainRequest.typeUrl || typeof o.host_chain_id === "string");
  },
  isAmino(o: any): o is QueryHostChainRequestAmino {
    return o && (o.$typeUrl === QueryHostChainRequest.typeUrl || typeof o.host_chain_id === "string");
  },
  encode(message: QueryHostChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHostChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainRequest();
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
  fromJSON(object: any): QueryHostChainRequest {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : ""
    };
  },
  toJSON(message: QueryHostChainRequest): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    return obj;
  },
  fromPartial(object: Partial<QueryHostChainRequest>): QueryHostChainRequest {
    const message = createBaseQueryHostChainRequest();
    message.hostChainId = object.hostChainId ?? "";
    return message;
  },
  fromAmino(object: QueryHostChainRequestAmino): QueryHostChainRequest {
    const message = createBaseQueryHostChainRequest();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    return message;
  },
  toAmino(message: QueryHostChainRequest, useInterfaces: boolean = true): QueryHostChainRequestAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    return obj;
  },
  fromAminoMsg(object: QueryHostChainRequestAminoMsg): QueryHostChainRequest {
    return QueryHostChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostChainRequestProtoMsg, useInterfaces: boolean = true): QueryHostChainRequest {
    return QueryHostChainRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHostChainRequest): Uint8Array {
    return QueryHostChainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostChainRequest): QueryHostChainRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icstaking.QueryHostChainRequest",
      value: QueryHostChainRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostChainRequest.typeUrl, QueryHostChainRequest);
function createBaseQueryHostChainResponse(): QueryHostChainResponse {
  return {
    hostChain: HostChain.fromPartial({})
  };
}
export const QueryHostChainResponse = {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainResponse",
  is(o: any): o is QueryHostChainResponse {
    return o && (o.$typeUrl === QueryHostChainResponse.typeUrl || HostChain.is(o.hostChain));
  },
  isSDK(o: any): o is QueryHostChainResponseSDKType {
    return o && (o.$typeUrl === QueryHostChainResponse.typeUrl || HostChain.isSDK(o.host_chain));
  },
  isAmino(o: any): o is QueryHostChainResponseAmino {
    return o && (o.$typeUrl === QueryHostChainResponse.typeUrl || HostChain.isAmino(o.host_chain));
  },
  encode(message: QueryHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainResponse();
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
  fromJSON(object: any): QueryHostChainResponse {
    return {
      hostChain: isSet(object.hostChain) ? HostChain.fromJSON(object.hostChain) : undefined
    };
  },
  toJSON(message: QueryHostChainResponse): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostChainResponse>): QueryHostChainResponse {
    const message = createBaseQueryHostChainResponse();
    message.hostChain = object.hostChain !== undefined && object.hostChain !== null ? HostChain.fromPartial(object.hostChain) : undefined;
    return message;
  },
  fromAmino(object: QueryHostChainResponseAmino): QueryHostChainResponse {
    const message = createBaseQueryHostChainResponse();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = HostChain.fromAmino(object.host_chain);
    }
    return message;
  },
  toAmino(message: QueryHostChainResponse, useInterfaces: boolean = true): QueryHostChainResponseAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain ? HostChain.toAmino(message.hostChain, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostChainResponseAminoMsg): QueryHostChainResponse {
    return QueryHostChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostChainResponseProtoMsg, useInterfaces: boolean = true): QueryHostChainResponse {
    return QueryHostChainResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHostChainResponse): Uint8Array {
    return QueryHostChainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostChainResponse): QueryHostChainResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icstaking.QueryHostChainResponse",
      value: QueryHostChainResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostChainResponse.typeUrl, QueryHostChainResponse);
function createBaseQueryHostChainsRequest(): QueryHostChainsRequest {
  return {
    pagination: undefined
  };
}
export const QueryHostChainsRequest = {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainsRequest",
  is(o: any): o is QueryHostChainsRequest {
    return o && o.$typeUrl === QueryHostChainsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryHostChainsRequestSDKType {
    return o && o.$typeUrl === QueryHostChainsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryHostChainsRequestAmino {
    return o && o.$typeUrl === QueryHostChainsRequest.typeUrl;
  },
  encode(message: QueryHostChainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHostChainsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainsRequest();
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
  fromJSON(object: any): QueryHostChainsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryHostChainsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostChainsRequest>): QueryHostChainsRequest {
    const message = createBaseQueryHostChainsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHostChainsRequestAmino): QueryHostChainsRequest {
    const message = createBaseQueryHostChainsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHostChainsRequest, useInterfaces: boolean = true): QueryHostChainsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostChainsRequestAminoMsg): QueryHostChainsRequest {
    return QueryHostChainsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostChainsRequestProtoMsg, useInterfaces: boolean = true): QueryHostChainsRequest {
    return QueryHostChainsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHostChainsRequest): Uint8Array {
    return QueryHostChainsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostChainsRequest): QueryHostChainsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icstaking.QueryHostChainsRequest",
      value: QueryHostChainsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostChainsRequest.typeUrl, QueryHostChainsRequest);
function createBaseQueryHostChainsResponse(): QueryHostChainsResponse {
  return {
    hostChains: [],
    pagination: undefined
  };
}
export const QueryHostChainsResponse = {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainsResponse",
  is(o: any): o is QueryHostChainsResponse {
    return o && (o.$typeUrl === QueryHostChainsResponse.typeUrl || Array.isArray(o.hostChains) && (!o.hostChains.length || HostChain.is(o.hostChains[0])));
  },
  isSDK(o: any): o is QueryHostChainsResponseSDKType {
    return o && (o.$typeUrl === QueryHostChainsResponse.typeUrl || Array.isArray(o.host_chains) && (!o.host_chains.length || HostChain.isSDK(o.host_chains[0])));
  },
  isAmino(o: any): o is QueryHostChainsResponseAmino {
    return o && (o.$typeUrl === QueryHostChainsResponse.typeUrl || Array.isArray(o.host_chains) && (!o.host_chains.length || HostChain.isAmino(o.host_chains[0])));
  },
  encode(message: QueryHostChainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hostChains) {
      HostChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHostChainsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChains.push(HostChain.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryHostChainsResponse {
    return {
      hostChains: Array.isArray(object?.hostChains) ? object.hostChains.map((e: any) => HostChain.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryHostChainsResponse): unknown {
    const obj: any = {};
    if (message.hostChains) {
      obj.hostChains = message.hostChains.map(e => e ? HostChain.toJSON(e) : undefined);
    } else {
      obj.hostChains = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostChainsResponse>): QueryHostChainsResponse {
    const message = createBaseQueryHostChainsResponse();
    message.hostChains = object.hostChains?.map(e => HostChain.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHostChainsResponseAmino): QueryHostChainsResponse {
    const message = createBaseQueryHostChainsResponse();
    message.hostChains = object.host_chains?.map(e => HostChain.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHostChainsResponse, useInterfaces: boolean = true): QueryHostChainsResponseAmino {
    const obj: any = {};
    if (message.hostChains) {
      obj.host_chains = message.hostChains.map(e => e ? HostChain.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.host_chains = message.hostChains;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostChainsResponseAminoMsg): QueryHostChainsResponse {
    return QueryHostChainsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostChainsResponseProtoMsg, useInterfaces: boolean = true): QueryHostChainsResponse {
    return QueryHostChainsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHostChainsResponse): Uint8Array {
    return QueryHostChainsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostChainsResponse): QueryHostChainsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icstaking.QueryHostChainsResponse",
      value: QueryHostChainsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostChainsResponse.typeUrl, QueryHostChainsResponse);
function createBaseQueryHostChainUnbondingTimeRequest(): QueryHostChainUnbondingTimeRequest {
  return {
    hostChainId: ""
  };
}
export const QueryHostChainUnbondingTimeRequest = {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainUnbondingTimeRequest",
  is(o: any): o is QueryHostChainUnbondingTimeRequest {
    return o && (o.$typeUrl === QueryHostChainUnbondingTimeRequest.typeUrl || typeof o.hostChainId === "string");
  },
  isSDK(o: any): o is QueryHostChainUnbondingTimeRequestSDKType {
    return o && (o.$typeUrl === QueryHostChainUnbondingTimeRequest.typeUrl || typeof o.host_chain_id === "string");
  },
  isAmino(o: any): o is QueryHostChainUnbondingTimeRequestAmino {
    return o && (o.$typeUrl === QueryHostChainUnbondingTimeRequest.typeUrl || typeof o.host_chain_id === "string");
  },
  encode(message: QueryHostChainUnbondingTimeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHostChainUnbondingTimeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainUnbondingTimeRequest();
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
  fromJSON(object: any): QueryHostChainUnbondingTimeRequest {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : ""
    };
  },
  toJSON(message: QueryHostChainUnbondingTimeRequest): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    return obj;
  },
  fromPartial(object: Partial<QueryHostChainUnbondingTimeRequest>): QueryHostChainUnbondingTimeRequest {
    const message = createBaseQueryHostChainUnbondingTimeRequest();
    message.hostChainId = object.hostChainId ?? "";
    return message;
  },
  fromAmino(object: QueryHostChainUnbondingTimeRequestAmino): QueryHostChainUnbondingTimeRequest {
    const message = createBaseQueryHostChainUnbondingTimeRequest();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    return message;
  },
  toAmino(message: QueryHostChainUnbondingTimeRequest, useInterfaces: boolean = true): QueryHostChainUnbondingTimeRequestAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    return obj;
  },
  fromAminoMsg(object: QueryHostChainUnbondingTimeRequestAminoMsg): QueryHostChainUnbondingTimeRequest {
    return QueryHostChainUnbondingTimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostChainUnbondingTimeRequestProtoMsg, useInterfaces: boolean = true): QueryHostChainUnbondingTimeRequest {
    return QueryHostChainUnbondingTimeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHostChainUnbondingTimeRequest): Uint8Array {
    return QueryHostChainUnbondingTimeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostChainUnbondingTimeRequest): QueryHostChainUnbondingTimeRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icstaking.QueryHostChainUnbondingTimeRequest",
      value: QueryHostChainUnbondingTimeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostChainUnbondingTimeRequest.typeUrl, QueryHostChainUnbondingTimeRequest);
function createBaseQueryHostChainUnbondingTimeResponse(): QueryHostChainUnbondingTimeResponse {
  return {
    unbondingTime: Duration.fromPartial({})
  };
}
export const QueryHostChainUnbondingTimeResponse = {
  typeUrl: "/pryzmatics.server.icstaking.QueryHostChainUnbondingTimeResponse",
  is(o: any): o is QueryHostChainUnbondingTimeResponse {
    return o && (o.$typeUrl === QueryHostChainUnbondingTimeResponse.typeUrl || Duration.is(o.unbondingTime));
  },
  isSDK(o: any): o is QueryHostChainUnbondingTimeResponseSDKType {
    return o && (o.$typeUrl === QueryHostChainUnbondingTimeResponse.typeUrl || Duration.isSDK(o.unbonding_time));
  },
  isAmino(o: any): o is QueryHostChainUnbondingTimeResponseAmino {
    return o && (o.$typeUrl === QueryHostChainUnbondingTimeResponse.typeUrl || Duration.isAmino(o.unbonding_time));
  },
  encode(message: QueryHostChainUnbondingTimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHostChainUnbondingTimeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainUnbondingTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostChainUnbondingTimeResponse {
    return {
      unbondingTime: isSet(object.unbondingTime) ? Duration.fromJSON(object.unbondingTime) : undefined
    };
  },
  toJSON(message: QueryHostChainUnbondingTimeResponse): unknown {
    const obj: any = {};
    message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime ? Duration.toJSON(message.unbondingTime) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostChainUnbondingTimeResponse>): QueryHostChainUnbondingTimeResponse {
    const message = createBaseQueryHostChainUnbondingTimeResponse();
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Duration.fromPartial(object.unbondingTime) : undefined;
    return message;
  },
  fromAmino(object: QueryHostChainUnbondingTimeResponseAmino): QueryHostChainUnbondingTimeResponse {
    const message = createBaseQueryHostChainUnbondingTimeResponse();
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbondingTime = Duration.fromAmino(object.unbonding_time);
    }
    return message;
  },
  toAmino(message: QueryHostChainUnbondingTimeResponse, useInterfaces: boolean = true): QueryHostChainUnbondingTimeResponseAmino {
    const obj: any = {};
    obj.unbonding_time = message.unbondingTime ? Duration.toAmino(message.unbondingTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostChainUnbondingTimeResponseAminoMsg): QueryHostChainUnbondingTimeResponse {
    return QueryHostChainUnbondingTimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostChainUnbondingTimeResponseProtoMsg, useInterfaces: boolean = true): QueryHostChainUnbondingTimeResponse {
    return QueryHostChainUnbondingTimeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHostChainUnbondingTimeResponse): Uint8Array {
    return QueryHostChainUnbondingTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostChainUnbondingTimeResponse): QueryHostChainUnbondingTimeResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icstaking.QueryHostChainUnbondingTimeResponse",
      value: QueryHostChainUnbondingTimeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostChainUnbondingTimeResponse.typeUrl, QueryHostChainUnbondingTimeResponse);