import { Token, TokenSDKType } from "../../pool/token";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryTokenRequest {
  denom: string;
  timeWindowInDays?: string;
}
export interface QueryTokenRequestSDKType {
  denom: string;
  time_window_in_days?: string;
}
export interface QueryTokenResponse {
  token: Token;
}
export interface QueryTokenResponseSDKType {
  token: TokenSDKType;
}
export interface QueryTokensRequest {
  timeWindowInDays?: string;
  pagination: PageRequest;
}
export interface QueryTokensRequestSDKType {
  time_window_in_days?: string;
  pagination: PageRequestSDKType;
}
export interface QueryTokensResponse {
  tokens: Token[];
  pagination: PageResponse;
}
export interface QueryTokensResponseSDKType {
  tokens: TokenSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryTokenRequest(): QueryTokenRequest {
  return {
    denom: "",
    timeWindowInDays: undefined
  };
}
export const QueryTokenRequest = {
  encode(message: QueryTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.timeWindowInDays !== undefined) {
      writer.uint32(18).string(message.timeWindowInDays);
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
          message.timeWindowInDays = reader.string();
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
      timeWindowInDays: isSet(object.timeWindowInDays) ? String(object.timeWindowInDays) : undefined
    };
  },
  toJSON(message: QueryTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.timeWindowInDays !== undefined && (obj.timeWindowInDays = message.timeWindowInDays);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenRequest>): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.denom = object.denom ?? "";
    message.timeWindowInDays = object.timeWindowInDays ?? undefined;
    return message;
  }
};
function createBaseQueryTokenResponse(): QueryTokenResponse {
  return {
    token: Token.fromPartial({})
  };
}
export const QueryTokenResponse = {
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
  }
};
function createBaseQueryTokensRequest(): QueryTokensRequest {
  return {
    timeWindowInDays: undefined,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryTokensRequest = {
  encode(message: QueryTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeWindowInDays !== undefined) {
      writer.uint32(10).string(message.timeWindowInDays);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.timeWindowInDays = reader.string();
          break;
        case 2:
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
      timeWindowInDays: isSet(object.timeWindowInDays) ? String(object.timeWindowInDays) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryTokensRequest): unknown {
    const obj: any = {};
    message.timeWindowInDays !== undefined && (obj.timeWindowInDays = message.timeWindowInDays);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTokensRequest>): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.timeWindowInDays = object.timeWindowInDays ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryTokensResponse(): QueryTokensResponse {
  return {
    tokens: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryTokensResponse = {
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
  }
};