import { PulseTradablePair, PulseTradablePairAmino, PulseTradablePairSDKType } from "../../trade/pulse_tradable_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
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
      obj.pairs = null;
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