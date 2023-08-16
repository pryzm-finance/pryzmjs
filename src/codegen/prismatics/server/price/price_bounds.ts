import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryPriceBoundsRequest {
  denom: string;
  from: string;
  to: string;
}
export interface QueryPriceBoundsRequestSDKType {
  denom: string;
  from: string;
  to: string;
}
export interface QueryPriceBoundsResponse {
  min?: string;
  max?: string;
}
export interface QueryPriceBoundsResponseSDKType {
  min?: string;
  max?: string;
}
function createBaseQueryPriceBoundsRequest(): QueryPriceBoundsRequest {
  return {
    denom: "",
    from: "",
    to: ""
  };
}
export const QueryPriceBoundsRequest = {
  encode(message: QueryPriceBoundsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceBoundsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceBoundsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPriceBoundsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryPriceBoundsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceBoundsRequest>): QueryPriceBoundsRequest {
    const message = createBaseQueryPriceBoundsRequest();
    message.denom = object.denom ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  }
};
function createBaseQueryPriceBoundsResponse(): QueryPriceBoundsResponse {
  return {
    min: undefined,
    max: undefined
  };
}
export const QueryPriceBoundsResponse = {
  encode(message: QueryPriceBoundsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== undefined) {
      writer.uint32(10).string(message.min);
    }
    if (message.max !== undefined) {
      writer.uint32(18).string(message.max);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceBoundsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceBoundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = reader.string();
          break;
        case 2:
          message.max = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPriceBoundsResponse {
    return {
      min: isSet(object.min) ? String(object.min) : undefined,
      max: isSet(object.max) ? String(object.max) : undefined
    };
  },
  toJSON(message: QueryPriceBoundsResponse): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceBoundsResponse>): QueryPriceBoundsResponse {
    const message = createBaseQueryPriceBoundsResponse();
    message.min = object.min ?? undefined;
    message.max = object.max ?? undefined;
    return message;
  }
};