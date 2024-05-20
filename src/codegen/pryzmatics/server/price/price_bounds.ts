import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryPriceBoundsRequest {
  denom: string;
  from: string;
  to: string;
}
export interface QueryPriceBoundsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPriceBoundsRequest";
  value: Uint8Array;
}
export interface QueryPriceBoundsRequestAmino {
  denom?: string;
  from?: string;
  to?: string;
}
export interface QueryPriceBoundsRequestAminoMsg {
  type: "/pryzmatics.server.price.QueryPriceBoundsRequest";
  value: QueryPriceBoundsRequestAmino;
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
export interface QueryPriceBoundsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPriceBoundsResponse";
  value: Uint8Array;
}
export interface QueryPriceBoundsResponseAmino {
  min?: string;
  max?: string;
}
export interface QueryPriceBoundsResponseAminoMsg {
  type: "/pryzmatics.server.price.QueryPriceBoundsResponse";
  value: QueryPriceBoundsResponseAmino;
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
  typeUrl: "/pryzmatics.server.price.QueryPriceBoundsRequest",
  is(o: any): o is QueryPriceBoundsRequest {
    return o && (o.$typeUrl === QueryPriceBoundsRequest.typeUrl || typeof o.denom === "string" && typeof o.from === "string" && typeof o.to === "string");
  },
  isSDK(o: any): o is QueryPriceBoundsRequestSDKType {
    return o && (o.$typeUrl === QueryPriceBoundsRequest.typeUrl || typeof o.denom === "string" && typeof o.from === "string" && typeof o.to === "string");
  },
  isAmino(o: any): o is QueryPriceBoundsRequestAmino {
    return o && (o.$typeUrl === QueryPriceBoundsRequest.typeUrl || typeof o.denom === "string" && typeof o.from === "string" && typeof o.to === "string");
  },
  encode(message: QueryPriceBoundsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPriceBoundsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPriceBoundsRequestAmino): QueryPriceBoundsRequest {
    const message = createBaseQueryPriceBoundsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: QueryPriceBoundsRequest, useInterfaces: boolean = true): QueryPriceBoundsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: QueryPriceBoundsRequestAminoMsg): QueryPriceBoundsRequest {
    return QueryPriceBoundsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceBoundsRequestProtoMsg, useInterfaces: boolean = true): QueryPriceBoundsRequest {
    return QueryPriceBoundsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPriceBoundsRequest): Uint8Array {
    return QueryPriceBoundsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceBoundsRequest): QueryPriceBoundsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryPriceBoundsRequest",
      value: QueryPriceBoundsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPriceBoundsRequest.typeUrl, QueryPriceBoundsRequest);
function createBaseQueryPriceBoundsResponse(): QueryPriceBoundsResponse {
  return {
    min: undefined,
    max: undefined
  };
}
export const QueryPriceBoundsResponse = {
  typeUrl: "/pryzmatics.server.price.QueryPriceBoundsResponse",
  is(o: any): o is QueryPriceBoundsResponse {
    return o && o.$typeUrl === QueryPriceBoundsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryPriceBoundsResponseSDKType {
    return o && o.$typeUrl === QueryPriceBoundsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryPriceBoundsResponseAmino {
    return o && o.$typeUrl === QueryPriceBoundsResponse.typeUrl;
  },
  encode(message: QueryPriceBoundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.min !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.min, 18).atomics);
    }
    if (message.max !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.max, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPriceBoundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceBoundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.max = Decimal.fromAtomics(reader.string(), 18).toString();
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
  },
  fromAmino(object: QueryPriceBoundsResponseAmino): QueryPriceBoundsResponse {
    const message = createBaseQueryPriceBoundsResponse();
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    }
    return message;
  },
  toAmino(message: QueryPriceBoundsResponse, useInterfaces: boolean = true): QueryPriceBoundsResponseAmino {
    const obj: any = {};
    obj.min = padDecimal(message.min) === null ? undefined : padDecimal(message.min);
    obj.max = padDecimal(message.max) === null ? undefined : padDecimal(message.max);
    return obj;
  },
  fromAminoMsg(object: QueryPriceBoundsResponseAminoMsg): QueryPriceBoundsResponse {
    return QueryPriceBoundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceBoundsResponseProtoMsg, useInterfaces: boolean = true): QueryPriceBoundsResponse {
    return QueryPriceBoundsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPriceBoundsResponse): Uint8Array {
    return QueryPriceBoundsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceBoundsResponse): QueryPriceBoundsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryPriceBoundsResponse",
      value: QueryPriceBoundsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPriceBoundsResponse.typeUrl, QueryPriceBoundsResponse);