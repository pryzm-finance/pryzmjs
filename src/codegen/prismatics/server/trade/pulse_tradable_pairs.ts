import { PulseTradablePair, PulseTradablePairSDKType } from "../../trade/pulse_tradable_pair";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryPulseTradablePairsRequest {
  denom: string;
  /** determines whether the given denom should be considered as token_in or token_out */
  tokenIn: boolean;
}
export interface QueryPulseTradablePairsRequestSDKType {
  denom: string;
  token_in: boolean;
}
export interface QueryPulseTradablePairsResponse {
  pairs: PulseTradablePair[];
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
  encode(message: QueryPulseTradablePairsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tokenIn === true) {
      writer.uint32(16).bool(message.tokenIn);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPulseTradablePairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseQueryPulseTradablePairsResponse(): QueryPulseTradablePairsResponse {
  return {
    pairs: []
  };
}
export const QueryPulseTradablePairsResponse = {
  encode(message: QueryPulseTradablePairsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      PulseTradablePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPulseTradablePairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};