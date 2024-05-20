import { ExtendedPool, ExtendedPoolAmino, ExtendedPoolSDKType } from "../../pool/extended_pool";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolRequest";
  value: Uint8Array;
}
export interface QueryPoolRequestAmino {
  pool_id?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolResponse {
  pool: ExtendedPool;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolResponse";
  value: Uint8Array;
}
export interface QueryPoolResponseAmino {
  pool?: ExtendedPoolAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
  pool: ExtendedPoolSDKType;
}
export interface QueryPoolsRequest {
  pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolsRequest";
  value: Uint8Array;
}
export interface QueryPoolsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolsRequest";
  value: QueryPoolsRequestAmino;
}
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: ExtendedPool[];
  pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolsResponse";
  value: Uint8Array;
}
export interface QueryPoolsResponseAmino {
  pools?: ExtendedPoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
  pools: ExtendedPoolSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolRequest",
  is(o: any): o is QueryPoolRequest {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryPoolRequestSDKType {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryPoolRequestAmino {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolRequest, useInterfaces: boolean = true): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg, useInterfaces: boolean = true): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolRequest.typeUrl, QueryPoolRequest);
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: ExtendedPool.fromPartial({})
  };
}
export const QueryPoolResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolResponse",
  is(o: any): o is QueryPoolResponse {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || ExtendedPool.is(o.pool));
  },
  isSDK(o: any): o is QueryPoolResponseSDKType {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || ExtendedPool.isSDK(o.pool));
  },
  isAmino(o: any): o is QueryPoolResponseAmino {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || ExtendedPool.isAmino(o.pool));
  },
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      ExtendedPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = ExtendedPool.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? ExtendedPool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? ExtendedPool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? ExtendedPool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = ExtendedPool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse, useInterfaces: boolean = true): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? ExtendedPool.toAmino(message.pool, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg, useInterfaces: boolean = true): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolResponse.typeUrl, QueryPoolResponse);
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolsRequest",
  is(o: any): o is QueryPoolsRequest {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPoolsRequestSDKType {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPoolsRequestAmino {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
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
  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsRequest, useInterfaces: boolean = true): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg, useInterfaces: boolean = true): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsRequest.typeUrl, QueryPoolsRequest);
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolsResponse",
  is(o: any): o is QueryPoolsResponse {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || ExtendedPool.is(o.pools[0])));
  },
  isSDK(o: any): o is QueryPoolsResponseSDKType {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || ExtendedPool.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is QueryPoolsResponseAmino {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || ExtendedPool.isAmino(o.pools[0])));
  },
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      ExtendedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(ExtendedPool.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => ExtendedPool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? ExtendedPool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => ExtendedPool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => ExtendedPool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsResponse, useInterfaces: boolean = true): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? ExtendedPool.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg, useInterfaces: boolean = true): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsResponse.typeUrl, QueryPoolsResponse);