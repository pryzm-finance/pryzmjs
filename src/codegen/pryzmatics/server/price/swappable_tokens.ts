import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QuerySwappableTokensRequest {}
export interface QuerySwappableTokensRequestProtoMsg {
  typeUrl: "/pryzmatics.server.price.QuerySwappableTokensRequest";
  value: Uint8Array;
}
export interface QuerySwappableTokensRequestAmino {}
export interface QuerySwappableTokensRequestAminoMsg {
  type: "/pryzmatics.server.price.QuerySwappableTokensRequest";
  value: QuerySwappableTokensRequestAmino;
}
export interface QuerySwappableTokensRequestSDKType {}
export interface QuerySwappableTokensResponse {
  tokens: string[];
}
export interface QuerySwappableTokensResponseProtoMsg {
  typeUrl: "/pryzmatics.server.price.QuerySwappableTokensResponse";
  value: Uint8Array;
}
export interface QuerySwappableTokensResponseAmino {
  tokens?: string[];
}
export interface QuerySwappableTokensResponseAminoMsg {
  type: "/pryzmatics.server.price.QuerySwappableTokensResponse";
  value: QuerySwappableTokensResponseAmino;
}
export interface QuerySwappableTokensResponseSDKType {
  tokens: string[];
}
function createBaseQuerySwappableTokensRequest(): QuerySwappableTokensRequest {
  return {};
}
export const QuerySwappableTokensRequest = {
  typeUrl: "/pryzmatics.server.price.QuerySwappableTokensRequest",
  is(o: any): o is QuerySwappableTokensRequest {
    return o && o.$typeUrl === QuerySwappableTokensRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySwappableTokensRequestSDKType {
    return o && o.$typeUrl === QuerySwappableTokensRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySwappableTokensRequestAmino {
    return o && o.$typeUrl === QuerySwappableTokensRequest.typeUrl;
  },
  encode(_: QuerySwappableTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwappableTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwappableTokensRequest();
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
  fromJSON(_: any): QuerySwappableTokensRequest {
    return {};
  },
  toJSON(_: QuerySwappableTokensRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QuerySwappableTokensRequest>): QuerySwappableTokensRequest {
    const message = createBaseQuerySwappableTokensRequest();
    return message;
  },
  fromAmino(_: QuerySwappableTokensRequestAmino): QuerySwappableTokensRequest {
    const message = createBaseQuerySwappableTokensRequest();
    return message;
  },
  toAmino(_: QuerySwappableTokensRequest, useInterfaces: boolean = true): QuerySwappableTokensRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySwappableTokensRequestAminoMsg): QuerySwappableTokensRequest {
    return QuerySwappableTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwappableTokensRequestProtoMsg, useInterfaces: boolean = true): QuerySwappableTokensRequest {
    return QuerySwappableTokensRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwappableTokensRequest): Uint8Array {
    return QuerySwappableTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwappableTokensRequest): QuerySwappableTokensRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QuerySwappableTokensRequest",
      value: QuerySwappableTokensRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwappableTokensRequest.typeUrl, QuerySwappableTokensRequest);
function createBaseQuerySwappableTokensResponse(): QuerySwappableTokensResponse {
  return {
    tokens: []
  };
}
export const QuerySwappableTokensResponse = {
  typeUrl: "/pryzmatics.server.price.QuerySwappableTokensResponse",
  is(o: any): o is QuerySwappableTokensResponse {
    return o && (o.$typeUrl === QuerySwappableTokensResponse.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || typeof o.tokens[0] === "string"));
  },
  isSDK(o: any): o is QuerySwappableTokensResponseSDKType {
    return o && (o.$typeUrl === QuerySwappableTokensResponse.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || typeof o.tokens[0] === "string"));
  },
  isAmino(o: any): o is QuerySwappableTokensResponseAmino {
    return o && (o.$typeUrl === QuerySwappableTokensResponse.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || typeof o.tokens[0] === "string"));
  },
  encode(message: QuerySwappableTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwappableTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwappableTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwappableTokensResponse {
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QuerySwappableTokensResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e);
    } else {
      obj.tokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySwappableTokensResponse>): QuerySwappableTokensResponse {
    const message = createBaseQuerySwappableTokensResponse();
    message.tokens = object.tokens?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QuerySwappableTokensResponseAmino): QuerySwappableTokensResponse {
    const message = createBaseQuerySwappableTokensResponse();
    message.tokens = object.tokens?.map(e => e) || [];
    return message;
  },
  toAmino(message: QuerySwappableTokensResponse, useInterfaces: boolean = true): QuerySwappableTokensResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e);
    } else {
      obj.tokens = message.tokens;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySwappableTokensResponseAminoMsg): QuerySwappableTokensResponse {
    return QuerySwappableTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwappableTokensResponseProtoMsg, useInterfaces: boolean = true): QuerySwappableTokensResponse {
    return QuerySwappableTokensResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwappableTokensResponse): Uint8Array {
    return QuerySwappableTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwappableTokensResponse): QuerySwappableTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QuerySwappableTokensResponse",
      value: QuerySwappableTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwappableTokensResponse.typeUrl, QuerySwappableTokensResponse);