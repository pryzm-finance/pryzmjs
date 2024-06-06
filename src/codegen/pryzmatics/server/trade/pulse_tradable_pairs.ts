import { PulseTradablePair, PulseTradablePairAmino, PulseTradablePairSDKType } from "../../trade/pulse_tradable_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryPulseTradablePairsRequest {
  denom: string;
  /** determines whether the given denom should be considered as token_in or token_out */
  tokenIn: boolean;
}
export interface QueryPulseTradablePairsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairsRequest";
  value: Uint8Array;
}
export interface QueryPulseTradablePairsRequestAmino {
  denom?: string;
  /** determines whether the given denom should be considered as token_in or token_out */
  token_in?: boolean;
}
export interface QueryPulseTradablePairsRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryPulseTradablePairsRequest";
  value: QueryPulseTradablePairsRequestAmino;
}
export interface QueryPulseTradablePairsRequestSDKType {
  denom: string;
  token_in: boolean;
}
export interface QueryPulseTradablePairsResponse {
  pairs: PulseTradablePair[];
}
export interface QueryPulseTradablePairsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairsResponse";
  value: Uint8Array;
}
export interface QueryPulseTradablePairsResponseAmino {
  pairs?: PulseTradablePairAmino[];
}
export interface QueryPulseTradablePairsResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryPulseTradablePairsResponse";
  value: QueryPulseTradablePairsResponseAmino;
}
export interface QueryPulseTradablePairsResponseSDKType {
  pairs: PulseTradablePairSDKType[];
}
export interface QueryPulseTradablePairPriceRequest {
  tokenIn: string;
  tokenOut: string;
  poolId: bigint;
  whitelistedRoute: boolean;
}
export interface QueryPulseTradablePairPriceRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairPriceRequest";
  value: Uint8Array;
}
export interface QueryPulseTradablePairPriceRequestAmino {
  token_in?: string;
  token_out?: string;
  pool_id?: string;
  whitelisted_route?: boolean;
}
export interface QueryPulseTradablePairPriceRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryPulseTradablePairPriceRequest";
  value: QueryPulseTradablePairPriceRequestAmino;
}
export interface QueryPulseTradablePairPriceRequestSDKType {
  token_in: string;
  token_out: string;
  pool_id: bigint;
  whitelisted_route: boolean;
}
export interface QueryPulseTradablePairPriceResponse {
  price: string;
}
export interface QueryPulseTradablePairPriceResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairPriceResponse";
  value: Uint8Array;
}
export interface QueryPulseTradablePairPriceResponseAmino {
  price?: string;
}
export interface QueryPulseTradablePairPriceResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryPulseTradablePairPriceResponse";
  value: QueryPulseTradablePairPriceResponseAmino;
}
export interface QueryPulseTradablePairPriceResponseSDKType {
  price: string;
}
function createBaseQueryPulseTradablePairsRequest(): QueryPulseTradablePairsRequest {
  return {
    denom: "",
    tokenIn: false
  };
}
export const QueryPulseTradablePairsRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairsRequest",
  is(o: any): o is QueryPulseTradablePairsRequest {
    return o && (o.$typeUrl === QueryPulseTradablePairsRequest.typeUrl || typeof o.denom === "string" && typeof o.tokenIn === "boolean");
  },
  isSDK(o: any): o is QueryPulseTradablePairsRequestSDKType {
    return o && (o.$typeUrl === QueryPulseTradablePairsRequest.typeUrl || typeof o.denom === "string" && typeof o.token_in === "boolean");
  },
  isAmino(o: any): o is QueryPulseTradablePairsRequestAmino {
    return o && (o.$typeUrl === QueryPulseTradablePairsRequest.typeUrl || typeof o.denom === "string" && typeof o.token_in === "boolean");
  },
  encode(message: QueryPulseTradablePairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tokenIn === true) {
      writer.uint32(16).bool(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPulseTradablePairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPulseTradablePairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.tokenIn = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPulseTradablePairsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      tokenIn: isSet(object.tokenIn) ? Boolean(object.tokenIn) : false
    };
  },
  toJSON(message: QueryPulseTradablePairsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<QueryPulseTradablePairsRequest>): QueryPulseTradablePairsRequest {
    const message = createBaseQueryPulseTradablePairsRequest();
    message.denom = object.denom ?? "";
    message.tokenIn = object.tokenIn ?? false;
    return message;
  },
  fromAmino(object: QueryPulseTradablePairsRequestAmino): QueryPulseTradablePairsRequest {
    const message = createBaseQueryPulseTradablePairsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    return message;
  },
  toAmino(message: QueryPulseTradablePairsRequest, useInterfaces: boolean = true): QueryPulseTradablePairsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.token_in = message.tokenIn === false ? undefined : message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: QueryPulseTradablePairsRequestAminoMsg): QueryPulseTradablePairsRequest {
    return QueryPulseTradablePairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPulseTradablePairsRequestProtoMsg, useInterfaces: boolean = true): QueryPulseTradablePairsRequest {
    return QueryPulseTradablePairsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPulseTradablePairsRequest): Uint8Array {
    return QueryPulseTradablePairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPulseTradablePairsRequest): QueryPulseTradablePairsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairsRequest",
      value: QueryPulseTradablePairsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPulseTradablePairsRequest.typeUrl, QueryPulseTradablePairsRequest);
function createBaseQueryPulseTradablePairsResponse(): QueryPulseTradablePairsResponse {
  return {
    pairs: []
  };
}
export const QueryPulseTradablePairsResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairsResponse",
  is(o: any): o is QueryPulseTradablePairsResponse {
    return o && (o.$typeUrl === QueryPulseTradablePairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || PulseTradablePair.is(o.pairs[0])));
  },
  isSDK(o: any): o is QueryPulseTradablePairsResponseSDKType {
    return o && (o.$typeUrl === QueryPulseTradablePairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || PulseTradablePair.isSDK(o.pairs[0])));
  },
  isAmino(o: any): o is QueryPulseTradablePairsResponseAmino {
    return o && (o.$typeUrl === QueryPulseTradablePairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || PulseTradablePair.isAmino(o.pairs[0])));
  },
  encode(message: QueryPulseTradablePairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      PulseTradablePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPulseTradablePairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPulseTradablePairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(PulseTradablePair.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPulseTradablePairsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => PulseTradablePair.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPulseTradablePairsResponse): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PulseTradablePair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPulseTradablePairsResponse>): QueryPulseTradablePairsResponse {
    const message = createBaseQueryPulseTradablePairsResponse();
    message.pairs = object.pairs?.map(e => PulseTradablePair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPulseTradablePairsResponseAmino): QueryPulseTradablePairsResponse {
    const message = createBaseQueryPulseTradablePairsResponse();
    message.pairs = object.pairs?.map(e => PulseTradablePair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPulseTradablePairsResponse, useInterfaces: boolean = true): QueryPulseTradablePairsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PulseTradablePair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPulseTradablePairsResponseAminoMsg): QueryPulseTradablePairsResponse {
    return QueryPulseTradablePairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPulseTradablePairsResponseProtoMsg, useInterfaces: boolean = true): QueryPulseTradablePairsResponse {
    return QueryPulseTradablePairsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPulseTradablePairsResponse): Uint8Array {
    return QueryPulseTradablePairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPulseTradablePairsResponse): QueryPulseTradablePairsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairsResponse",
      value: QueryPulseTradablePairsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPulseTradablePairsResponse.typeUrl, QueryPulseTradablePairsResponse);
function createBaseQueryPulseTradablePairPriceRequest(): QueryPulseTradablePairPriceRequest {
  return {
    tokenIn: "",
    tokenOut: "",
    poolId: BigInt(0),
    whitelistedRoute: false
  };
}
export const QueryPulseTradablePairPriceRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairPriceRequest",
  is(o: any): o is QueryPulseTradablePairPriceRequest {
    return o && (o.$typeUrl === QueryPulseTradablePairPriceRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.poolId === "bigint" && typeof o.whitelistedRoute === "boolean");
  },
  isSDK(o: any): o is QueryPulseTradablePairPriceRequestSDKType {
    return o && (o.$typeUrl === QueryPulseTradablePairPriceRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean");
  },
  isAmino(o: any): o is QueryPulseTradablePairPriceRequestAmino {
    return o && (o.$typeUrl === QueryPulseTradablePairPriceRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean");
  },
  encode(message: QueryPulseTradablePairPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPulseTradablePairPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPulseTradablePairPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPulseTradablePairPriceRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false
    };
  },
  toJSON(message: QueryPulseTradablePairPriceRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    return obj;
  },
  fromPartial(object: Partial<QueryPulseTradablePairPriceRequest>): QueryPulseTradablePairPriceRequest {
    const message = createBaseQueryPulseTradablePairPriceRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    return message;
  },
  fromAmino(object: QueryPulseTradablePairPriceRequestAmino): QueryPulseTradablePairPriceRequest {
    const message = createBaseQueryPulseTradablePairPriceRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    return message;
  },
  toAmino(message: QueryPulseTradablePairPriceRequest, useInterfaces: boolean = true): QueryPulseTradablePairPriceRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    return obj;
  },
  fromAminoMsg(object: QueryPulseTradablePairPriceRequestAminoMsg): QueryPulseTradablePairPriceRequest {
    return QueryPulseTradablePairPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPulseTradablePairPriceRequestProtoMsg, useInterfaces: boolean = true): QueryPulseTradablePairPriceRequest {
    return QueryPulseTradablePairPriceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPulseTradablePairPriceRequest): Uint8Array {
    return QueryPulseTradablePairPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPulseTradablePairPriceRequest): QueryPulseTradablePairPriceRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairPriceRequest",
      value: QueryPulseTradablePairPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPulseTradablePairPriceRequest.typeUrl, QueryPulseTradablePairPriceRequest);
function createBaseQueryPulseTradablePairPriceResponse(): QueryPulseTradablePairPriceResponse {
  return {
    price: ""
  };
}
export const QueryPulseTradablePairPriceResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairPriceResponse",
  is(o: any): o is QueryPulseTradablePairPriceResponse {
    return o && (o.$typeUrl === QueryPulseTradablePairPriceResponse.typeUrl || typeof o.price === "string");
  },
  isSDK(o: any): o is QueryPulseTradablePairPriceResponseSDKType {
    return o && (o.$typeUrl === QueryPulseTradablePairPriceResponse.typeUrl || typeof o.price === "string");
  },
  isAmino(o: any): o is QueryPulseTradablePairPriceResponseAmino {
    return o && (o.$typeUrl === QueryPulseTradablePairPriceResponse.typeUrl || typeof o.price === "string");
  },
  encode(message: QueryPulseTradablePairPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPulseTradablePairPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPulseTradablePairPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPulseTradablePairPriceResponse {
    return {
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  toJSON(message: QueryPulseTradablePairPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial(object: Partial<QueryPulseTradablePairPriceResponse>): QueryPulseTradablePairPriceResponse {
    const message = createBaseQueryPulseTradablePairPriceResponse();
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: QueryPulseTradablePairPriceResponseAmino): QueryPulseTradablePairPriceResponse {
    const message = createBaseQueryPulseTradablePairPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: QueryPulseTradablePairPriceResponse, useInterfaces: boolean = true): QueryPulseTradablePairPriceResponseAmino {
    const obj: any = {};
    obj.price = padDecimal(message.price) === "" ? undefined : padDecimal(message.price);
    return obj;
  },
  fromAminoMsg(object: QueryPulseTradablePairPriceResponseAminoMsg): QueryPulseTradablePairPriceResponse {
    return QueryPulseTradablePairPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPulseTradablePairPriceResponseProtoMsg, useInterfaces: boolean = true): QueryPulseTradablePairPriceResponse {
    return QueryPulseTradablePairPriceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPulseTradablePairPriceResponse): Uint8Array {
    return QueryPulseTradablePairPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPulseTradablePairPriceResponse): QueryPulseTradablePairPriceResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairPriceResponse",
      value: QueryPulseTradablePairPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPulseTradablePairPriceResponse.typeUrl, QueryPulseTradablePairPriceResponse);