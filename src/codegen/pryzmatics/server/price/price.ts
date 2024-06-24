import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPrice, TokenPriceAmino, TokenPriceSDKType } from "../../price/token_price";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryPriceRequest {
  tokenOut: string;
  tokenIn: string;
}
export interface QueryPriceRequestProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPriceRequest";
  value: Uint8Array;
}
export interface QueryPriceRequestAmino {
  token_out?: string;
  token_in?: string;
}
export interface QueryPriceRequestAminoMsg {
  type: "/pryzmatics.server.price.QueryPriceRequest";
  value: QueryPriceRequestAmino;
}
export interface QueryPriceRequestSDKType {
  token_out: string;
  token_in: string;
}
export interface QueryPriceResponse {
  price: string;
}
export interface QueryPriceResponseProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPriceResponse";
  value: Uint8Array;
}
export interface QueryPriceResponseAmino {
  price?: string;
}
export interface QueryPriceResponseAminoMsg {
  type: "/pryzmatics.server.price.QueryPriceResponse";
  value: QueryPriceResponseAmino;
}
export interface QueryPriceResponseSDKType {
  price: string;
}
export interface QueryPricesRequest {
  blockHeight: bigint;
  pagination?: PageRequest;
}
export interface QueryPricesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPricesRequest";
  value: Uint8Array;
}
export interface QueryPricesRequestAmino {
  block_height?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPricesRequestAminoMsg {
  type: "/pryzmatics.server.price.QueryPricesRequest";
  value: QueryPricesRequestAmino;
}
export interface QueryPricesRequestSDKType {
  block_height: bigint;
  pagination?: PageRequestSDKType;
}
export interface QueryPricesResponse {
  prices: TokenPrice[];
  pagination?: PageResponse;
}
export interface QueryPricesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPricesResponse";
  value: Uint8Array;
}
export interface QueryPricesResponseAmino {
  prices?: TokenPriceAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPricesResponseAminoMsg {
  type: "/pryzmatics.server.price.QueryPricesResponse";
  value: QueryPricesResponseAmino;
}
export interface QueryPricesResponseSDKType {
  prices: TokenPriceSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryPriceRequest(): QueryPriceRequest {
  return {
    tokenOut: "",
    tokenIn: ""
  };
}
export const QueryPriceRequest = {
  typeUrl: "/pryzmatics.server.price.QueryPriceRequest",
  is(o: any): o is QueryPriceRequest {
    return o && (o.$typeUrl === QueryPriceRequest.typeUrl || typeof o.tokenOut === "string" && typeof o.tokenIn === "string");
  },
  isSDK(o: any): o is QueryPriceRequestSDKType {
    return o && (o.$typeUrl === QueryPriceRequest.typeUrl || typeof o.token_out === "string" && typeof o.token_in === "string");
  },
  isAmino(o: any): o is QueryPriceRequestAmino {
    return o && (o.$typeUrl === QueryPriceRequest.typeUrl || typeof o.token_out === "string" && typeof o.token_in === "string");
  },
  encode(message: QueryPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOut !== "") {
      writer.uint32(10).string(message.tokenOut);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPriceRequest {
    return {
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : ""
    };
  },
  toJSON(message: QueryPriceRequest): unknown {
    const obj: any = {};
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceRequest>): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    message.tokenOut = object.tokenOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    return message;
  },
  fromAmino(object: QueryPriceRequestAmino): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    return message;
  },
  toAmino(message: QueryPriceRequest, useInterfaces: boolean = true): QueryPriceRequestAmino {
    const obj: any = {};
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: QueryPriceRequestAminoMsg): QueryPriceRequest {
    return QueryPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceRequestProtoMsg, useInterfaces: boolean = true): QueryPriceRequest {
    return QueryPriceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPriceRequest): Uint8Array {
    return QueryPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceRequest): QueryPriceRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryPriceRequest",
      value: QueryPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPriceRequest.typeUrl, QueryPriceRequest);
function createBaseQueryPriceResponse(): QueryPriceResponse {
  return {
    price: ""
  };
}
export const QueryPriceResponse = {
  typeUrl: "/pryzmatics.server.price.QueryPriceResponse",
  is(o: any): o is QueryPriceResponse {
    return o && (o.$typeUrl === QueryPriceResponse.typeUrl || typeof o.price === "string");
  },
  isSDK(o: any): o is QueryPriceResponseSDKType {
    return o && (o.$typeUrl === QueryPriceResponse.typeUrl || typeof o.price === "string");
  },
  isAmino(o: any): o is QueryPriceResponseAmino {
    return o && (o.$typeUrl === QueryPriceResponse.typeUrl || typeof o.price === "string");
  },
  encode(message: QueryPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceResponse();
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
  fromJSON(object: any): QueryPriceResponse {
    return {
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  toJSON(message: QueryPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceResponse>): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: QueryPriceResponseAmino): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: QueryPriceResponse, useInterfaces: boolean = true): QueryPriceResponseAmino {
    const obj: any = {};
    obj.price = padDecimal(message.price) === "" ? undefined : padDecimal(message.price);
    return obj;
  },
  fromAminoMsg(object: QueryPriceResponseAminoMsg): QueryPriceResponse {
    return QueryPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceResponseProtoMsg, useInterfaces: boolean = true): QueryPriceResponse {
    return QueryPriceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPriceResponse): Uint8Array {
    return QueryPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceResponse): QueryPriceResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryPriceResponse",
      value: QueryPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPriceResponse.typeUrl, QueryPriceResponse);
function createBaseQueryPricesRequest(): QueryPricesRequest {
  return {
    blockHeight: BigInt(0),
    pagination: undefined
  };
}
export const QueryPricesRequest = {
  typeUrl: "/pryzmatics.server.price.QueryPricesRequest",
  is(o: any): o is QueryPricesRequest {
    return o && (o.$typeUrl === QueryPricesRequest.typeUrl || typeof o.blockHeight === "bigint");
  },
  isSDK(o: any): o is QueryPricesRequestSDKType {
    return o && (o.$typeUrl === QueryPricesRequest.typeUrl || typeof o.block_height === "bigint");
  },
  isAmino(o: any): o is QueryPricesRequestAmino {
    return o && (o.$typeUrl === QueryPricesRequest.typeUrl || typeof o.block_height === "bigint");
  },
  encode(message: QueryPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
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
  fromJSON(object: any): QueryPricesRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPricesRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPricesRequest>): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPricesRequestAmino): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPricesRequest, useInterfaces: boolean = true): QueryPricesRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPricesRequestAminoMsg): QueryPricesRequest {
    return QueryPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPricesRequestProtoMsg, useInterfaces: boolean = true): QueryPricesRequest {
    return QueryPricesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPricesRequest): Uint8Array {
    return QueryPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPricesRequest): QueryPricesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryPricesRequest",
      value: QueryPricesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPricesRequest.typeUrl, QueryPricesRequest);
function createBaseQueryPricesResponse(): QueryPricesResponse {
  return {
    prices: [],
    pagination: undefined
  };
}
export const QueryPricesResponse = {
  typeUrl: "/pryzmatics.server.price.QueryPricesResponse",
  is(o: any): o is QueryPricesResponse {
    return o && (o.$typeUrl === QueryPricesResponse.typeUrl || Array.isArray(o.prices) && (!o.prices.length || TokenPrice.is(o.prices[0])));
  },
  isSDK(o: any): o is QueryPricesResponseSDKType {
    return o && (o.$typeUrl === QueryPricesResponse.typeUrl || Array.isArray(o.prices) && (!o.prices.length || TokenPrice.isSDK(o.prices[0])));
  },
  isAmino(o: any): o is QueryPricesResponseAmino {
    return o && (o.$typeUrl === QueryPricesResponse.typeUrl || Array.isArray(o.prices) && (!o.prices.length || TokenPrice.isAmino(o.prices[0])));
  },
  encode(message: QueryPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      TokenPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(TokenPrice.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryPricesResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => TokenPrice.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPricesResponse): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? TokenPrice.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPricesResponse>): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => TokenPrice.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPricesResponseAmino): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => TokenPrice.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPricesResponse, useInterfaces: boolean = true): QueryPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? TokenPrice.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPricesResponseAminoMsg): QueryPricesResponse {
    return QueryPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPricesResponseProtoMsg, useInterfaces: boolean = true): QueryPricesResponse {
    return QueryPricesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPricesResponse): Uint8Array {
    return QueryPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPricesResponse): QueryPricesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryPricesResponse",
      value: QueryPricesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPricesResponse.typeUrl, QueryPricesResponse);