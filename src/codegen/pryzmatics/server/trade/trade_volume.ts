import { FavoritePair, FavoritePairAmino, FavoritePairSDKType } from "../../trade/trade_volume";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryPoolTradeVolumeRequest {
  poolId: bigint;
  from: string;
  to: string;
}
export interface QueryPoolTradeVolumeRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryPoolTradeVolumeRequest";
  value: Uint8Array;
}
export interface QueryPoolTradeVolumeRequestAmino {
  pool_id?: string;
  from?: string;
  to?: string;
}
export interface QueryPoolTradeVolumeRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryPoolTradeVolumeRequest";
  value: QueryPoolTradeVolumeRequestAmino;
}
export interface QueryPoolTradeVolumeRequestSDKType {
  pool_id: bigint;
  from: string;
  to: string;
}
export interface QueryPoolTradeVolumeResponse {
  volume: string;
  swapFeeVolume: string;
  joinExitSwapFeeVolume: string;
}
export interface QueryPoolTradeVolumeResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryPoolTradeVolumeResponse";
  value: Uint8Array;
}
export interface QueryPoolTradeVolumeResponseAmino {
  volume?: string;
  swap_fee_volume?: string;
  join_exit_swap_fee_volume?: string;
}
export interface QueryPoolTradeVolumeResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryPoolTradeVolumeResponse";
  value: QueryPoolTradeVolumeResponseAmino;
}
export interface QueryPoolTradeVolumeResponseSDKType {
  volume: string;
  swap_fee_volume: string;
  join_exit_swap_fee_volume: string;
}
export interface QueryTokenTradeVolumeRequest {
  denom: string;
  poolId?: string;
  from: string;
  to: string;
}
export interface QueryTokenTradeVolumeRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryTokenTradeVolumeRequest";
  value: Uint8Array;
}
export interface QueryTokenTradeVolumeRequestAmino {
  denom?: string;
  pool_id?: string;
  from?: string;
  to?: string;
}
export interface QueryTokenTradeVolumeRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryTokenTradeVolumeRequest";
  value: QueryTokenTradeVolumeRequestAmino;
}
export interface QueryTokenTradeVolumeRequestSDKType {
  denom: string;
  pool_id?: string;
  from: string;
  to: string;
}
export interface QueryTokenTradeVolumeResponse {
  volume: string;
}
export interface QueryTokenTradeVolumeResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryTokenTradeVolumeResponse";
  value: Uint8Array;
}
export interface QueryTokenTradeVolumeResponseAmino {
  volume?: string;
}
export interface QueryTokenTradeVolumeResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryTokenTradeVolumeResponse";
  value: QueryTokenTradeVolumeResponseAmino;
}
export interface QueryTokenTradeVolumeResponseSDKType {
  volume: string;
}
export interface QueryFavoritePairsRequest {
  from: string;
  to: string;
}
export interface QueryFavoritePairsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryFavoritePairsRequest";
  value: Uint8Array;
}
export interface QueryFavoritePairsRequestAmino {
  from?: string;
  to?: string;
}
export interface QueryFavoritePairsRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryFavoritePairsRequest";
  value: QueryFavoritePairsRequestAmino;
}
export interface QueryFavoritePairsRequestSDKType {
  from: string;
  to: string;
}
export interface QueryFavoritePairsResponse {
  pairs: FavoritePair[];
}
export interface QueryFavoritePairsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryFavoritePairsResponse";
  value: Uint8Array;
}
export interface QueryFavoritePairsResponseAmino {
  pairs?: FavoritePairAmino[];
}
export interface QueryFavoritePairsResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryFavoritePairsResponse";
  value: QueryFavoritePairsResponseAmino;
}
export interface QueryFavoritePairsResponseSDKType {
  pairs: FavoritePairSDKType[];
}
function createBaseQueryPoolTradeVolumeRequest(): QueryPoolTradeVolumeRequest {
  return {
    poolId: BigInt(0),
    from: "",
    to: ""
  };
}
export const QueryPoolTradeVolumeRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryPoolTradeVolumeRequest",
  encode(message: QueryPoolTradeVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTradeVolumeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTradeVolumeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
  fromJSON(object: any): QueryPoolTradeVolumeRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryPoolTradeVolumeRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTradeVolumeRequest>): QueryPoolTradeVolumeRequest {
    const message = createBaseQueryPoolTradeVolumeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryPoolTradeVolumeRequestAmino): QueryPoolTradeVolumeRequest {
    const message = createBaseQueryPoolTradeVolumeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: QueryPoolTradeVolumeRequest): QueryPoolTradeVolumeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.from = message.from;
    obj.to = message.to;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTradeVolumeRequestAminoMsg): QueryPoolTradeVolumeRequest {
    return QueryPoolTradeVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTradeVolumeRequestProtoMsg): QueryPoolTradeVolumeRequest {
    return QueryPoolTradeVolumeRequest.decode(message.value);
  },
  toProto(message: QueryPoolTradeVolumeRequest): Uint8Array {
    return QueryPoolTradeVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTradeVolumeRequest): QueryPoolTradeVolumeRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryPoolTradeVolumeRequest",
      value: QueryPoolTradeVolumeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolTradeVolumeResponse(): QueryPoolTradeVolumeResponse {
  return {
    volume: "",
    swapFeeVolume: "",
    joinExitSwapFeeVolume: ""
  };
}
export const QueryPoolTradeVolumeResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryPoolTradeVolumeResponse",
  encode(message: QueryPoolTradeVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volume !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.volume, 18).atomics);
    }
    if (message.swapFeeVolume !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.swapFeeVolume, 18).atomics);
    }
    if (message.joinExitSwapFeeVolume !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.joinExitSwapFeeVolume, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTradeVolumeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTradeVolumeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.swapFeeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.joinExitSwapFeeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTradeVolumeResponse {
    return {
      volume: isSet(object.volume) ? String(object.volume) : "",
      swapFeeVolume: isSet(object.swapFeeVolume) ? String(object.swapFeeVolume) : "",
      joinExitSwapFeeVolume: isSet(object.joinExitSwapFeeVolume) ? String(object.joinExitSwapFeeVolume) : ""
    };
  },
  toJSON(message: QueryPoolTradeVolumeResponse): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    message.swapFeeVolume !== undefined && (obj.swapFeeVolume = message.swapFeeVolume);
    message.joinExitSwapFeeVolume !== undefined && (obj.joinExitSwapFeeVolume = message.joinExitSwapFeeVolume);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTradeVolumeResponse>): QueryPoolTradeVolumeResponse {
    const message = createBaseQueryPoolTradeVolumeResponse();
    message.volume = object.volume ?? "";
    message.swapFeeVolume = object.swapFeeVolume ?? "";
    message.joinExitSwapFeeVolume = object.joinExitSwapFeeVolume ?? "";
    return message;
  },
  fromAmino(object: QueryPoolTradeVolumeResponseAmino): QueryPoolTradeVolumeResponse {
    const message = createBaseQueryPoolTradeVolumeResponse();
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    }
    if (object.swap_fee_volume !== undefined && object.swap_fee_volume !== null) {
      message.swapFeeVolume = object.swap_fee_volume;
    }
    if (object.join_exit_swap_fee_volume !== undefined && object.join_exit_swap_fee_volume !== null) {
      message.joinExitSwapFeeVolume = object.join_exit_swap_fee_volume;
    }
    return message;
  },
  toAmino(message: QueryPoolTradeVolumeResponse): QueryPoolTradeVolumeResponseAmino {
    const obj: any = {};
    obj.volume = message.volume;
    obj.swap_fee_volume = message.swapFeeVolume;
    obj.join_exit_swap_fee_volume = message.joinExitSwapFeeVolume;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTradeVolumeResponseAminoMsg): QueryPoolTradeVolumeResponse {
    return QueryPoolTradeVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTradeVolumeResponseProtoMsg): QueryPoolTradeVolumeResponse {
    return QueryPoolTradeVolumeResponse.decode(message.value);
  },
  toProto(message: QueryPoolTradeVolumeResponse): Uint8Array {
    return QueryPoolTradeVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTradeVolumeResponse): QueryPoolTradeVolumeResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryPoolTradeVolumeResponse",
      value: QueryPoolTradeVolumeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenTradeVolumeRequest(): QueryTokenTradeVolumeRequest {
  return {
    denom: "",
    poolId: undefined,
    from: "",
    to: ""
  };
}
export const QueryTokenTradeVolumeRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryTokenTradeVolumeRequest",
  encode(message: QueryTokenTradeVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.poolId !== undefined) {
      writer.uint32(18).string(message.poolId);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenTradeVolumeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenTradeVolumeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenTradeVolumeRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : undefined,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryTokenTradeVolumeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenTradeVolumeRequest>): QueryTokenTradeVolumeRequest {
    const message = createBaseQueryTokenTradeVolumeRequest();
    message.denom = object.denom ?? "";
    message.poolId = object.poolId ?? undefined;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryTokenTradeVolumeRequestAmino): QueryTokenTradeVolumeRequest {
    const message = createBaseQueryTokenTradeVolumeRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: QueryTokenTradeVolumeRequest): QueryTokenTradeVolumeRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.pool_id = message.poolId;
    obj.from = message.from;
    obj.to = message.to;
    return obj;
  },
  fromAminoMsg(object: QueryTokenTradeVolumeRequestAminoMsg): QueryTokenTradeVolumeRequest {
    return QueryTokenTradeVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenTradeVolumeRequestProtoMsg): QueryTokenTradeVolumeRequest {
    return QueryTokenTradeVolumeRequest.decode(message.value);
  },
  toProto(message: QueryTokenTradeVolumeRequest): Uint8Array {
    return QueryTokenTradeVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenTradeVolumeRequest): QueryTokenTradeVolumeRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryTokenTradeVolumeRequest",
      value: QueryTokenTradeVolumeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenTradeVolumeResponse(): QueryTokenTradeVolumeResponse {
  return {
    volume: ""
  };
}
export const QueryTokenTradeVolumeResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryTokenTradeVolumeResponse",
  encode(message: QueryTokenTradeVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volume !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.volume, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenTradeVolumeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenTradeVolumeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenTradeVolumeResponse {
    return {
      volume: isSet(object.volume) ? String(object.volume) : ""
    };
  },
  toJSON(message: QueryTokenTradeVolumeResponse): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenTradeVolumeResponse>): QueryTokenTradeVolumeResponse {
    const message = createBaseQueryTokenTradeVolumeResponse();
    message.volume = object.volume ?? "";
    return message;
  },
  fromAmino(object: QueryTokenTradeVolumeResponseAmino): QueryTokenTradeVolumeResponse {
    const message = createBaseQueryTokenTradeVolumeResponse();
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    }
    return message;
  },
  toAmino(message: QueryTokenTradeVolumeResponse): QueryTokenTradeVolumeResponseAmino {
    const obj: any = {};
    obj.volume = message.volume;
    return obj;
  },
  fromAminoMsg(object: QueryTokenTradeVolumeResponseAminoMsg): QueryTokenTradeVolumeResponse {
    return QueryTokenTradeVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenTradeVolumeResponseProtoMsg): QueryTokenTradeVolumeResponse {
    return QueryTokenTradeVolumeResponse.decode(message.value);
  },
  toProto(message: QueryTokenTradeVolumeResponse): Uint8Array {
    return QueryTokenTradeVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenTradeVolumeResponse): QueryTokenTradeVolumeResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryTokenTradeVolumeResponse",
      value: QueryTokenTradeVolumeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFavoritePairsRequest(): QueryFavoritePairsRequest {
  return {
    from: "",
    to: ""
  };
}
export const QueryFavoritePairsRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryFavoritePairsRequest",
  encode(message: QueryFavoritePairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFavoritePairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFavoritePairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFavoritePairsRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryFavoritePairsRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryFavoritePairsRequest>): QueryFavoritePairsRequest {
    const message = createBaseQueryFavoritePairsRequest();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryFavoritePairsRequestAmino): QueryFavoritePairsRequest {
    const message = createBaseQueryFavoritePairsRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: QueryFavoritePairsRequest): QueryFavoritePairsRequestAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.to = message.to;
    return obj;
  },
  fromAminoMsg(object: QueryFavoritePairsRequestAminoMsg): QueryFavoritePairsRequest {
    return QueryFavoritePairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFavoritePairsRequestProtoMsg): QueryFavoritePairsRequest {
    return QueryFavoritePairsRequest.decode(message.value);
  },
  toProto(message: QueryFavoritePairsRequest): Uint8Array {
    return QueryFavoritePairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFavoritePairsRequest): QueryFavoritePairsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryFavoritePairsRequest",
      value: QueryFavoritePairsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFavoritePairsResponse(): QueryFavoritePairsResponse {
  return {
    pairs: []
  };
}
export const QueryFavoritePairsResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryFavoritePairsResponse",
  encode(message: QueryFavoritePairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      FavoritePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFavoritePairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFavoritePairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(FavoritePair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFavoritePairsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => FavoritePair.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryFavoritePairsResponse): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? FavoritePair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryFavoritePairsResponse>): QueryFavoritePairsResponse {
    const message = createBaseQueryFavoritePairsResponse();
    message.pairs = object.pairs?.map(e => FavoritePair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFavoritePairsResponseAmino): QueryFavoritePairsResponse {
    const message = createBaseQueryFavoritePairsResponse();
    message.pairs = object.pairs?.map(e => FavoritePair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFavoritePairsResponse): QueryFavoritePairsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? FavoritePair.toAmino(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFavoritePairsResponseAminoMsg): QueryFavoritePairsResponse {
    return QueryFavoritePairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFavoritePairsResponseProtoMsg): QueryFavoritePairsResponse {
    return QueryFavoritePairsResponse.decode(message.value);
  },
  toProto(message: QueryFavoritePairsResponse): Uint8Array {
    return QueryFavoritePairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFavoritePairsResponse): QueryFavoritePairsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryFavoritePairsResponse",
      value: QueryFavoritePairsResponse.encode(message).finish()
    };
  }
};