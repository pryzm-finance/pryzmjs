import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryPriceChangeRequest {
  denom: string;
  from: string;
  to: string;
}
export interface QueryPriceChangeRequestProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPriceChangeRequest";
  value: Uint8Array;
}
export interface QueryPriceChangeRequestAmino {
  denom?: string;
  from?: string;
  to?: string;
}
export interface QueryPriceChangeRequestAminoMsg {
  type: "/pryzmatics.server.price.QueryPriceChangeRequest";
  value: QueryPriceChangeRequestAmino;
}
export interface QueryPriceChangeRequestSDKType {
  denom: string;
  from: string;
  to: string;
}
export interface QueryPriceChangeResponse {
  changePercentage?: string;
}
export interface QueryPriceChangeResponseProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryPriceChangeResponse";
  value: Uint8Array;
}
export interface QueryPriceChangeResponseAmino {
  change_percentage?: string;
}
export interface QueryPriceChangeResponseAminoMsg {
  type: "/pryzmatics.server.price.QueryPriceChangeResponse";
  value: QueryPriceChangeResponseAmino;
}
export interface QueryPriceChangeResponseSDKType {
  change_percentage?: string;
}
function createBaseQueryPriceChangeRequest(): QueryPriceChangeRequest {
  return {
    denom: "",
    from: "",
    to: ""
  };
}
export const QueryPriceChangeRequest = {
  typeUrl: "/pryzmatics.server.price.QueryPriceChangeRequest",
  is(o: any): o is QueryPriceChangeRequest {
    return o && (o.$typeUrl === QueryPriceChangeRequest.typeUrl || typeof o.denom === "string" && typeof o.from === "string" && typeof o.to === "string");
  },
  isSDK(o: any): o is QueryPriceChangeRequestSDKType {
    return o && (o.$typeUrl === QueryPriceChangeRequest.typeUrl || typeof o.denom === "string" && typeof o.from === "string" && typeof o.to === "string");
  },
  isAmino(o: any): o is QueryPriceChangeRequestAmino {
    return o && (o.$typeUrl === QueryPriceChangeRequest.typeUrl || typeof o.denom === "string" && typeof o.from === "string" && typeof o.to === "string");
  },
  encode(message: QueryPriceChangeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPriceChangeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceChangeRequest();
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
  fromJSON(object: any): QueryPriceChangeRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryPriceChangeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceChangeRequest>): QueryPriceChangeRequest {
    const message = createBaseQueryPriceChangeRequest();
    message.denom = object.denom ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryPriceChangeRequestAmino): QueryPriceChangeRequest {
    const message = createBaseQueryPriceChangeRequest();
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
  toAmino(message: QueryPriceChangeRequest, useInterfaces: boolean = true): QueryPriceChangeRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: QueryPriceChangeRequestAminoMsg): QueryPriceChangeRequest {
    return QueryPriceChangeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceChangeRequestProtoMsg, useInterfaces: boolean = true): QueryPriceChangeRequest {
    return QueryPriceChangeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPriceChangeRequest): Uint8Array {
    return QueryPriceChangeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceChangeRequest): QueryPriceChangeRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryPriceChangeRequest",
      value: QueryPriceChangeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPriceChangeRequest.typeUrl, QueryPriceChangeRequest);
function createBaseQueryPriceChangeResponse(): QueryPriceChangeResponse {
  return {
    changePercentage: undefined
  };
}
export const QueryPriceChangeResponse = {
  typeUrl: "/pryzmatics.server.price.QueryPriceChangeResponse",
  is(o: any): o is QueryPriceChangeResponse {
    return o && o.$typeUrl === QueryPriceChangeResponse.typeUrl;
  },
  isSDK(o: any): o is QueryPriceChangeResponseSDKType {
    return o && o.$typeUrl === QueryPriceChangeResponse.typeUrl;
  },
  isAmino(o: any): o is QueryPriceChangeResponseAmino {
    return o && o.$typeUrl === QueryPriceChangeResponse.typeUrl;
  },
  encode(message: QueryPriceChangeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.changePercentage !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.changePercentage, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPriceChangeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceChangeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPriceChangeResponse {
    return {
      changePercentage: isSet(object.changePercentage) ? String(object.changePercentage) : undefined
    };
  },
  toJSON(message: QueryPriceChangeResponse): unknown {
    const obj: any = {};
    message.changePercentage !== undefined && (obj.changePercentage = message.changePercentage);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceChangeResponse>): QueryPriceChangeResponse {
    const message = createBaseQueryPriceChangeResponse();
    message.changePercentage = object.changePercentage ?? undefined;
    return message;
  },
  fromAmino(object: QueryPriceChangeResponseAmino): QueryPriceChangeResponse {
    const message = createBaseQueryPriceChangeResponse();
    if (object.change_percentage !== undefined && object.change_percentage !== null) {
      message.changePercentage = object.change_percentage;
    }
    return message;
  },
  toAmino(message: QueryPriceChangeResponse, useInterfaces: boolean = true): QueryPriceChangeResponseAmino {
    const obj: any = {};
    obj.change_percentage = padDecimal(message.changePercentage) === null ? undefined : padDecimal(message.changePercentage);
    return obj;
  },
  fromAminoMsg(object: QueryPriceChangeResponseAminoMsg): QueryPriceChangeResponse {
    return QueryPriceChangeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceChangeResponseProtoMsg, useInterfaces: boolean = true): QueryPriceChangeResponse {
    return QueryPriceChangeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPriceChangeResponse): Uint8Array {
    return QueryPriceChangeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceChangeResponse): QueryPriceChangeResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryPriceChangeResponse",
      value: QueryPriceChangeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPriceChangeResponse.typeUrl, QueryPriceChangeResponse);