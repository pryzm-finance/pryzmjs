import { FavoritePair, FavoritePairSDKType } from "../../trade/trade_volume";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryPoolTradeVolumeRequest {
  poolId: bigint;
  from: string;
  to: string;
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
export interface QueryTokenTradeVolumeRequestSDKType {
  denom: string;
  pool_id?: string;
  from: string;
  to: string;
}
export interface QueryTokenTradeVolumeResponse {
  volume: string;
}
export interface QueryTokenTradeVolumeResponseSDKType {
  volume: string;
}
export interface QueryFavoritePairsRequest {
  from: string;
  to: string;
}
export interface QueryFavoritePairsRequestSDKType {
  from: string;
  to: string;
}
export interface QueryFavoritePairsResponse {
  pairs: FavoritePair[];
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
  }
};
function createBaseQueryTokenTradeVolumeResponse(): QueryTokenTradeVolumeResponse {
  return {
    volume: ""
  };
}
export const QueryTokenTradeVolumeResponse = {
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
  }
};
function createBaseQueryFavoritePairsRequest(): QueryFavoritePairsRequest {
  return {
    from: "",
    to: ""
  };
}
export const QueryFavoritePairsRequest = {
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
  }
};
function createBaseQueryFavoritePairsResponse(): QueryFavoritePairsResponse {
  return {
    pairs: []
  };
}
export const QueryFavoritePairsResponse = {
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
  }
};