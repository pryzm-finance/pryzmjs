import { Token, TokenAmino, TokenSDKType, TokenType, tokenTypeFromJSON, tokenTypeToJSON } from "../../pool/token";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryTokenRequest {
  denom: string;
  tokenOut: string;
}
export interface QueryTokenRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryTokenRequest";
  value: Uint8Array;
}
export interface QueryTokenRequestAmino {
  denom?: string;
  token_out?: string;
}
export interface QueryTokenRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryTokenRequest";
  value: QueryTokenRequestAmino;
}
export interface QueryTokenRequestSDKType {
  denom: string;
  token_out: string;
}
export interface QueryTokenResponse {
  token: Token;
}
export interface QueryTokenResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryTokenResponse";
  value: Uint8Array;
}
export interface QueryTokenResponseAmino {
  token?: TokenAmino;
}
export interface QueryTokenResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryTokenResponse";
  value: QueryTokenResponseAmino;
}
export interface QueryTokenResponseSDKType {
  token: TokenSDKType;
}
export interface QueryTokensRequest {
  tokenType: TokenType;
  tokenOut: string;
  pagination?: PageRequest;
}
export interface QueryTokensRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryTokensRequest";
  value: Uint8Array;
}
export interface QueryTokensRequestAmino {
  token_type?: TokenType;
  token_out?: string;
  pagination?: PageRequestAmino;
}
export interface QueryTokensRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryTokensRequest";
  value: QueryTokensRequestAmino;
}
export interface QueryTokensRequestSDKType {
  token_type: TokenType;
  token_out: string;
  pagination?: PageRequestSDKType;
}
export interface QueryTokensResponse {
  tokens: Token[];
  pagination?: PageResponse;
}
export interface QueryTokensResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryTokensResponse";
  value: Uint8Array;
}
export interface QueryTokensResponseAmino {
  tokens?: TokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryTokensResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryTokensResponse";
  value: QueryTokensResponseAmino;
}
export interface QueryTokensResponseSDKType {
  tokens: TokenSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryTokenRequest(): QueryTokenRequest {
  return {
    denom: "",
    tokenOut: ""
  };
}
export const QueryTokenRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryTokenRequest",
  encode(message: QueryTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
  fromJSON(object: any): QueryTokenRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QueryTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenRequest>): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.denom = object.denom ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryTokenRequestAmino): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QueryTokenRequest): QueryTokenRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryTokenRequestAminoMsg): QueryTokenRequest {
    return QueryTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenRequestProtoMsg): QueryTokenRequest {
    return QueryTokenRequest.decode(message.value);
  },
  toProto(message: QueryTokenRequest): Uint8Array {
    return QueryTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenRequest): QueryTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryTokenRequest",
      value: QueryTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenResponse(): QueryTokenResponse {
  return {
    token: Token.fromPartial({})
  };
}
export const QueryTokenResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryTokenResponse",
  encode(message: QueryTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenResponse {
    return {
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined
    };
  },
  toJSON(message: QueryTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenResponse>): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.token = object.token !== undefined && object.token !== null ? Token.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenResponseAmino): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    if (object.token !== undefined && object.token !== null) {
      message.token = Token.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: QueryTokenResponse): QueryTokenResponseAmino {
    const obj: any = {};
    obj.token = message.token ? Token.toAmino(message.token) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenResponseAminoMsg): QueryTokenResponse {
    return QueryTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenResponseProtoMsg): QueryTokenResponse {
    return QueryTokenResponse.decode(message.value);
  },
  toProto(message: QueryTokenResponse): Uint8Array {
    return QueryTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenResponse): QueryTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryTokenResponse",
      value: QueryTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokensRequest(): QueryTokensRequest {
  return {
    tokenType: 0,
    tokenOut: "",
    pagination: undefined
  };
}
export const QueryTokensRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryTokensRequest",
  encode(message: QueryTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenType !== 0) {
      writer.uint32(8).int32(message.tokenType);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenType = (reader.int32() as any);
          break;
        case 2:
          message.tokenOut = reader.string();
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
  fromJSON(object: any): QueryTokensRequest {
    return {
      tokenType: isSet(object.tokenType) ? tokenTypeFromJSON(object.tokenType) : -1,
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryTokensRequest): unknown {
    const obj: any = {};
    message.tokenType !== undefined && (obj.tokenType = tokenTypeToJSON(message.tokenType));
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTokensRequest>): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.tokenType = object.tokenType ?? 0;
    message.tokenOut = object.tokenOut ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokensRequestAmino): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    if (object.token_type !== undefined && object.token_type !== null) {
      message.tokenType = tokenTypeFromJSON(object.token_type);
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokensRequest): QueryTokensRequestAmino {
    const obj: any = {};
    obj.token_type = tokenTypeToJSON(message.tokenType);
    obj.token_out = message.tokenOut;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokensRequestAminoMsg): QueryTokensRequest {
    return QueryTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensRequestProtoMsg): QueryTokensRequest {
    return QueryTokensRequest.decode(message.value);
  },
  toProto(message: QueryTokensRequest): Uint8Array {
    return QueryTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensRequest): QueryTokensRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryTokensRequest",
      value: QueryTokensRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokensResponse(): QueryTokensResponse {
  return {
    tokens: [],
    pagination: undefined
  };
}
export const QueryTokensResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryTokensResponse",
  encode(message: QueryTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Token.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryTokensResponse {
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryTokensResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Token.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTokensResponse>): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.tokens = object.tokens?.map(e => Token.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokensResponseAmino): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.tokens = object.tokens?.map(e => Token.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokensResponse): QueryTokensResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.tokens = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokensResponseAminoMsg): QueryTokensResponse {
    return QueryTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensResponseProtoMsg): QueryTokensResponse {
    return QueryTokensResponse.decode(message.value);
  },
  toProto(message: QueryTokensResponse): Uint8Array {
    return QueryTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensResponse): QueryTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryTokensResponse",
      value: QueryTokensResponse.encode(message).finish()
    };
  }
};