import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryPriceRequest {
  tokenIn: string;
  tokenOut: string;
}
export interface QueryPriceRequestProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPriceRequest";
  value: Uint8Array;
}
export interface QueryPriceRequestAmino {
  token_in?: string;
  token_out?: string;
}
export interface QueryPriceRequestAminoMsg {
  type: "/pryzmatics.server.price.QueryPriceRequest";
  value: QueryPriceRequestAmino;
}
export interface QueryPriceRequestSDKType {
  token_in: string;
  token_out: string;
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
function createBaseQueryPriceRequest(): QueryPriceRequest {
  return {
    tokenIn: "",
    tokenOut: ""
  };
}
export const QueryPriceRequest = {
  typeUrl: "/pryzmatics.server.price.QueryPriceRequest",
  is(o: any): o is QueryPriceRequest {
    return o && (o.$typeUrl === QueryPriceRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QueryPriceRequestSDKType {
    return o && (o.$typeUrl === QueryPriceRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QueryPriceRequestAmino {
    return o && (o.$typeUrl === QueryPriceRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: QueryPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
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
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
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
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QueryPriceRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceRequest>): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryPriceRequestAmino): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QueryPriceRequest, useInterfaces: boolean = true): QueryPriceRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
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
    obj.price = message.price === "" ? undefined : message.price;
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