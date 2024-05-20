import { PoolToken, PoolTokenAmino, PoolTokenSDKType } from "../../pool/pool_token";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPoolTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryPoolTokenRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryPoolTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryPoolTokenRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolTokenRequest";
  value: QueryPoolTokenRequestAmino;
}
export interface QueryPoolTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryPoolTokenResponse {
  poolToken: PoolToken;
}
export interface QueryPoolTokenResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryPoolTokenResponseAmino {
  pool_token?: PoolTokenAmino;
}
export interface QueryPoolTokenResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolTokenResponse";
  value: QueryPoolTokenResponseAmino;
}
export interface QueryPoolTokenResponseSDKType {
  pool_token: PoolTokenSDKType;
}
export interface QueryAllPoolTokenRequest {
  poolId: bigint;
}
export interface QueryAllPoolTokenRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryAllPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryAllPoolTokenRequestAmino {
  pool_id?: string;
}
export interface QueryAllPoolTokenRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryAllPoolTokenRequest";
  value: QueryAllPoolTokenRequestAmino;
}
export interface QueryAllPoolTokenRequestSDKType {
  pool_id: bigint;
}
export interface QueryAllPoolTokenResponse {
  poolTokens: PoolToken[];
}
export interface QueryAllPoolTokenResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryAllPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryAllPoolTokenResponseAmino {
  pool_tokens?: PoolTokenAmino[];
}
export interface QueryAllPoolTokenResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryAllPoolTokenResponse";
  value: QueryAllPoolTokenResponseAmino;
}
export interface QueryAllPoolTokenResponseSDKType {
  pool_tokens: PoolTokenSDKType[];
}
function createBaseQueryPoolTokenRequest(): QueryPoolTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryPoolTokenRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolTokenRequest",
  is(o: any): o is QueryPoolTokenRequest {
    return o && (o.$typeUrl === QueryPoolTokenRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryPoolTokenRequestSDKType {
    return o && (o.$typeUrl === QueryPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryPoolTokenRequestAmino {
    return o && (o.$typeUrl === QueryPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: QueryPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTokenRequest>): QueryPoolTokenRequest {
    const message = createBaseQueryPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryPoolTokenRequestAmino): QueryPoolTokenRequest {
    const message = createBaseQueryPoolTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryPoolTokenRequest, useInterfaces: boolean = true): QueryPoolTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTokenRequestAminoMsg): QueryPoolTokenRequest {
    return QueryPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTokenRequestProtoMsg, useInterfaces: boolean = true): QueryPoolTokenRequest {
    return QueryPoolTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolTokenRequest): Uint8Array {
    return QueryPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTokenRequest): QueryPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolTokenRequest",
      value: QueryPoolTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolTokenRequest.typeUrl, QueryPoolTokenRequest);
function createBaseQueryPoolTokenResponse(): QueryPoolTokenResponse {
  return {
    poolToken: PoolToken.fromPartial({})
  };
}
export const QueryPoolTokenResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolTokenResponse",
  is(o: any): o is QueryPoolTokenResponse {
    return o && (o.$typeUrl === QueryPoolTokenResponse.typeUrl || PoolToken.is(o.poolToken));
  },
  isSDK(o: any): o is QueryPoolTokenResponseSDKType {
    return o && (o.$typeUrl === QueryPoolTokenResponse.typeUrl || PoolToken.isSDK(o.pool_token));
  },
  isAmino(o: any): o is QueryPoolTokenResponseAmino {
    return o && (o.$typeUrl === QueryPoolTokenResponse.typeUrl || PoolToken.isAmino(o.pool_token));
  },
  encode(message: QueryPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolToken !== undefined) {
      PoolToken.encode(message.poolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken = PoolToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTokenResponse {
    return {
      poolToken: isSet(object.poolToken) ? PoolToken.fromJSON(object.poolToken) : undefined
    };
  },
  toJSON(message: QueryPoolTokenResponse): unknown {
    const obj: any = {};
    message.poolToken !== undefined && (obj.poolToken = message.poolToken ? PoolToken.toJSON(message.poolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTokenResponse>): QueryPoolTokenResponse {
    const message = createBaseQueryPoolTokenResponse();
    message.poolToken = object.poolToken !== undefined && object.poolToken !== null ? PoolToken.fromPartial(object.poolToken) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolTokenResponseAmino): QueryPoolTokenResponse {
    const message = createBaseQueryPoolTokenResponse();
    if (object.pool_token !== undefined && object.pool_token !== null) {
      message.poolToken = PoolToken.fromAmino(object.pool_token);
    }
    return message;
  },
  toAmino(message: QueryPoolTokenResponse, useInterfaces: boolean = true): QueryPoolTokenResponseAmino {
    const obj: any = {};
    obj.pool_token = message.poolToken ? PoolToken.toAmino(message.poolToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTokenResponseAminoMsg): QueryPoolTokenResponse {
    return QueryPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTokenResponseProtoMsg, useInterfaces: boolean = true): QueryPoolTokenResponse {
    return QueryPoolTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolTokenResponse): Uint8Array {
    return QueryPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTokenResponse): QueryPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolTokenResponse",
      value: QueryPoolTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolTokenResponse.typeUrl, QueryPoolTokenResponse);
function createBaseQueryAllPoolTokenRequest(): QueryAllPoolTokenRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryAllPoolTokenRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryAllPoolTokenRequest",
  is(o: any): o is QueryAllPoolTokenRequest {
    return o && (o.$typeUrl === QueryAllPoolTokenRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryAllPoolTokenRequestSDKType {
    return o && (o.$typeUrl === QueryAllPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryAllPoolTokenRequestAmino {
    return o && (o.$typeUrl === QueryAllPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryAllPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenRequest();
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
  fromJSON(object: any): QueryAllPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryAllPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenRequest>): QueryAllPoolTokenRequest {
    const message = createBaseQueryAllPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAllPoolTokenRequestAmino): QueryAllPoolTokenRequest {
    const message = createBaseQueryAllPoolTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryAllPoolTokenRequest, useInterfaces: boolean = true): QueryAllPoolTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenRequestAminoMsg): QueryAllPoolTokenRequest {
    return QueryAllPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenRequestProtoMsg, useInterfaces: boolean = true): QueryAllPoolTokenRequest {
    return QueryAllPoolTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolTokenRequest): Uint8Array {
    return QueryAllPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenRequest): QueryAllPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryAllPoolTokenRequest",
      value: QueryAllPoolTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolTokenRequest.typeUrl, QueryAllPoolTokenRequest);
function createBaseQueryAllPoolTokenResponse(): QueryAllPoolTokenResponse {
  return {
    poolTokens: []
  };
}
export const QueryAllPoolTokenResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryAllPoolTokenResponse",
  is(o: any): o is QueryAllPoolTokenResponse {
    return o && (o.$typeUrl === QueryAllPoolTokenResponse.typeUrl || Array.isArray(o.poolTokens) && (!o.poolTokens.length || PoolToken.is(o.poolTokens[0])));
  },
  isSDK(o: any): o is QueryAllPoolTokenResponseSDKType {
    return o && (o.$typeUrl === QueryAllPoolTokenResponse.typeUrl || Array.isArray(o.pool_tokens) && (!o.pool_tokens.length || PoolToken.isSDK(o.pool_tokens[0])));
  },
  isAmino(o: any): o is QueryAllPoolTokenResponseAmino {
    return o && (o.$typeUrl === QueryAllPoolTokenResponse.typeUrl || Array.isArray(o.pool_tokens) && (!o.pool_tokens.length || PoolToken.isAmino(o.pool_tokens[0])));
  },
  encode(message: QueryAllPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolTokens) {
      PoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolTokens.push(PoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenResponse {
    return {
      poolTokens: Array.isArray(object?.poolTokens) ? object.poolTokens.map((e: any) => PoolToken.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAllPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.poolTokens) {
      obj.poolTokens = message.poolTokens.map(e => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolTokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenResponse>): QueryAllPoolTokenResponse {
    const message = createBaseQueryAllPoolTokenResponse();
    message.poolTokens = object.poolTokens?.map(e => PoolToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllPoolTokenResponseAmino): QueryAllPoolTokenResponse {
    const message = createBaseQueryAllPoolTokenResponse();
    message.poolTokens = object.pool_tokens?.map(e => PoolToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllPoolTokenResponse, useInterfaces: boolean = true): QueryAllPoolTokenResponseAmino {
    const obj: any = {};
    if (message.poolTokens) {
      obj.pool_tokens = message.poolTokens.map(e => e ? PoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_tokens = message.poolTokens;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenResponseAminoMsg): QueryAllPoolTokenResponse {
    return QueryAllPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenResponseProtoMsg, useInterfaces: boolean = true): QueryAllPoolTokenResponse {
    return QueryAllPoolTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolTokenResponse): Uint8Array {
    return QueryAllPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenResponse): QueryAllPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryAllPoolTokenResponse",
      value: QueryAllPoolTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolTokenResponse.typeUrl, QueryAllPoolTokenResponse);