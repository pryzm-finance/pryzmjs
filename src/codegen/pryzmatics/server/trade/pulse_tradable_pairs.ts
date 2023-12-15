import { PulseTradablePair, PulseTradablePairAmino, PulseTradablePairSDKType } from "../../trade/pulse_tradable_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  encode(message: QueryPulseTradablePairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tokenIn === true) {
      writer.uint32(16).bool(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPulseTradablePairsRequest {
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
  toAmino(message: QueryPulseTradablePairsRequest): QueryPulseTradablePairsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.token_in = message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: QueryPulseTradablePairsRequestAminoMsg): QueryPulseTradablePairsRequest {
    return QueryPulseTradablePairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPulseTradablePairsRequestProtoMsg): QueryPulseTradablePairsRequest {
    return QueryPulseTradablePairsRequest.decode(message.value);
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
function createBaseQueryPulseTradablePairsResponse(): QueryPulseTradablePairsResponse {
  return {
    pairs: []
  };
}
export const QueryPulseTradablePairsResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryPulseTradablePairsResponse",
  encode(message: QueryPulseTradablePairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      PulseTradablePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPulseTradablePairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPulseTradablePairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(PulseTradablePair.decode(reader, reader.uint32()));
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
  toAmino(message: QueryPulseTradablePairsResponse): QueryPulseTradablePairsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PulseTradablePair.toAmino(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPulseTradablePairsResponseAminoMsg): QueryPulseTradablePairsResponse {
    return QueryPulseTradablePairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPulseTradablePairsResponseProtoMsg): QueryPulseTradablePairsResponse {
    return QueryPulseTradablePairsResponse.decode(message.value);
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