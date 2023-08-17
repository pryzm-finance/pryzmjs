import { WeightUpdateTiming, WeightUpdateTimingSDKType } from "./weight_update_timing";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export interface WeightedPoolProperties {
  poolId: bigint;
  weightUpdateTiming: WeightUpdateTiming;
  tokenList: WeightedToken[];
}
export interface WeightedPoolPropertiesSDKType {
  pool_id: bigint;
  weight_update_timing: WeightUpdateTimingSDKType;
  token_list: WeightedTokenSDKType[];
}
export interface WeightedToken {
  poolId: bigint;
  denom: string;
  normalizedStartWeight: string;
  normalizedEndWeight: string;
}
export interface WeightedTokenSDKType {
  pool_id: bigint;
  denom: string;
  normalized_start_weight: string;
  normalized_end_weight: string;
}
function createBaseWeightedPoolProperties(): WeightedPoolProperties {
  return {
    poolId: BigInt(0),
    weightUpdateTiming: WeightUpdateTiming.fromPartial({}),
    tokenList: []
  };
}
export const WeightedPoolProperties = {
  encode(message: WeightedPoolProperties, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tokenList) {
      WeightedToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedPoolProperties {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedPoolProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.weightUpdateTiming = WeightUpdateTiming.decode(reader, reader.uint32());
          break;
        case 3:
          message.tokenList.push(WeightedToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedPoolProperties {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      weightUpdateTiming: isSet(object.weightUpdateTiming) ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming) : undefined,
      tokenList: Array.isArray(object?.tokenList) ? object.tokenList.map((e: any) => WeightedToken.fromJSON(e)) : []
    };
  },
  toJSON(message: WeightedPoolProperties): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming ? WeightUpdateTiming.toJSON(message.weightUpdateTiming) : undefined);
    if (message.tokenList) {
      obj.tokenList = message.tokenList.map(e => e ? WeightedToken.toJSON(e) : undefined);
    } else {
      obj.tokenList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<WeightedPoolProperties>): WeightedPoolProperties {
    const message = createBaseWeightedPoolProperties();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.weightUpdateTiming = object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming) : undefined;
    message.tokenList = object.tokenList?.map(e => WeightedToken.fromPartial(e)) || [];
    return message;
  }
};
function createBaseWeightedToken(): WeightedToken {
  return {
    poolId: BigInt(0),
    denom: "",
    normalizedStartWeight: "",
    normalizedEndWeight: ""
  };
}
export const WeightedToken = {
  encode(message: WeightedToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.normalizedStartWeight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.normalizedStartWeight, 18).atomics);
    }
    if (message.normalizedEndWeight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.normalizedEndWeight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.normalizedStartWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.normalizedEndWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedToken {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      normalizedStartWeight: isSet(object.normalizedStartWeight) ? String(object.normalizedStartWeight) : "",
      normalizedEndWeight: isSet(object.normalizedEndWeight) ? String(object.normalizedEndWeight) : ""
    };
  },
  toJSON(message: WeightedToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.normalizedStartWeight !== undefined && (obj.normalizedStartWeight = message.normalizedStartWeight);
    message.normalizedEndWeight !== undefined && (obj.normalizedEndWeight = message.normalizedEndWeight);
    return obj;
  },
  fromPartial(object: Partial<WeightedToken>): WeightedToken {
    const message = createBaseWeightedToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.normalizedStartWeight = object.normalizedStartWeight ?? "";
    message.normalizedEndWeight = object.normalizedEndWeight ?? "";
    return message;
  }
};