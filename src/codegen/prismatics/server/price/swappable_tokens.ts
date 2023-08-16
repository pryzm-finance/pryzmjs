import * as _m0 from "protobufjs/minimal";
export interface QuerySwappableTokensRequest {}
export interface QuerySwappableTokensRequestSDKType {}
export interface QuerySwappableTokensResponse {
  tokens: string[];
}
export interface QuerySwappableTokensResponseSDKType {
  tokens: string[];
}
function createBaseQuerySwappableTokensRequest(): QuerySwappableTokensRequest {
  return {};
}
export const QuerySwappableTokensRequest = {
  encode(_: QuerySwappableTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwappableTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseQuerySwappableTokensResponse(): QuerySwappableTokensResponse {
  return {
    tokens: []
  };
}
export const QuerySwappableTokensResponse = {
  encode(message: QuerySwappableTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokens) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwappableTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};