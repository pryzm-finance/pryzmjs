import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface PoolApr {
  poolId: bigint;
  time: Timestamp;
  apr?: string;
  swapFeeApr?: string;
  tokenYield?: string;
  incentivesApr?: string;
  allianceApr?: string;
  error: string;
}
export interface PoolAprProtoMsg {
  typeUrl: "/pryzmatics.pool.PoolApr";
  value: Uint8Array;
}
export interface PoolAprAmino {
  pool_id?: string;
  time?: string;
  apr?: string;
  swap_fee_apr?: string;
  token_yield?: string;
  incentives_apr?: string;
  alliance_apr?: string;
  error?: string;
}
export interface PoolAprAminoMsg {
  type: "/pryzmatics.pool.PoolApr";
  value: PoolAprAmino;
}
export interface PoolAprSDKType {
  pool_id: bigint;
  time: TimestampSDKType;
  apr?: string;
  swap_fee_apr?: string;
  token_yield?: string;
  incentives_apr?: string;
  alliance_apr?: string;
  error: string;
}
function createBasePoolApr(): PoolApr {
  return {
    poolId: BigInt(0),
    time: Timestamp.fromPartial({}),
    apr: undefined,
    swapFeeApr: undefined,
    tokenYield: undefined,
    incentivesApr: undefined,
    allianceApr: undefined,
    error: ""
  };
}
export const PoolApr = {
  typeUrl: "/pryzmatics.pool.PoolApr",
  is(o: any): o is PoolApr {
    return o && (o.$typeUrl === PoolApr.typeUrl || typeof o.poolId === "bigint" && Timestamp.is(o.time) && typeof o.error === "string");
  },
  isSDK(o: any): o is PoolAprSDKType {
    return o && (o.$typeUrl === PoolApr.typeUrl || typeof o.pool_id === "bigint" && Timestamp.isSDK(o.time) && typeof o.error === "string");
  },
  isAmino(o: any): o is PoolAprAmino {
    return o && (o.$typeUrl === PoolApr.typeUrl || typeof o.pool_id === "bigint" && Timestamp.isAmino(o.time) && typeof o.error === "string");
  },
  encode(message: PoolApr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (message.apr !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    if (message.swapFeeApr !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.swapFeeApr, 18).atomics);
    }
    if (message.tokenYield !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.tokenYield, 18).atomics);
    }
    if (message.incentivesApr !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.incentivesApr, 18).atomics);
    }
    if (message.allianceApr !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.allianceApr, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(66).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolApr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolApr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.apr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.swapFeeApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.tokenYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.incentivesApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.allianceApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolApr {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      apr: isSet(object.apr) ? String(object.apr) : undefined,
      swapFeeApr: isSet(object.swapFeeApr) ? String(object.swapFeeApr) : undefined,
      tokenYield: isSet(object.tokenYield) ? String(object.tokenYield) : undefined,
      incentivesApr: isSet(object.incentivesApr) ? String(object.incentivesApr) : undefined,
      allianceApr: isSet(object.allianceApr) ? String(object.allianceApr) : undefined,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: PoolApr): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.apr !== undefined && (obj.apr = message.apr);
    message.swapFeeApr !== undefined && (obj.swapFeeApr = message.swapFeeApr);
    message.tokenYield !== undefined && (obj.tokenYield = message.tokenYield);
    message.incentivesApr !== undefined && (obj.incentivesApr = message.incentivesApr);
    message.allianceApr !== undefined && (obj.allianceApr = message.allianceApr);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<PoolApr>): PoolApr {
    const message = createBasePoolApr();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.apr = object.apr ?? undefined;
    message.swapFeeApr = object.swapFeeApr ?? undefined;
    message.tokenYield = object.tokenYield ?? undefined;
    message.incentivesApr = object.incentivesApr ?? undefined;
    message.allianceApr = object.allianceApr ?? undefined;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: PoolAprAmino): PoolApr {
    const message = createBasePoolApr();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.apr !== undefined && object.apr !== null) {
      message.apr = object.apr;
    }
    if (object.swap_fee_apr !== undefined && object.swap_fee_apr !== null) {
      message.swapFeeApr = object.swap_fee_apr;
    }
    if (object.token_yield !== undefined && object.token_yield !== null) {
      message.tokenYield = object.token_yield;
    }
    if (object.incentives_apr !== undefined && object.incentives_apr !== null) {
      message.incentivesApr = object.incentives_apr;
    }
    if (object.alliance_apr !== undefined && object.alliance_apr !== null) {
      message.allianceApr = object.alliance_apr;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: PoolApr, useInterfaces: boolean = true): PoolAprAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.apr = padDecimal(message.apr) === null ? undefined : padDecimal(message.apr);
    obj.swap_fee_apr = padDecimal(message.swapFeeApr) === null ? undefined : padDecimal(message.swapFeeApr);
    obj.token_yield = padDecimal(message.tokenYield) === null ? undefined : padDecimal(message.tokenYield);
    obj.incentives_apr = padDecimal(message.incentivesApr) === null ? undefined : padDecimal(message.incentivesApr);
    obj.alliance_apr = padDecimal(message.allianceApr) === null ? undefined : padDecimal(message.allianceApr);
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: PoolAprAminoMsg): PoolApr {
    return PoolApr.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolAprProtoMsg, useInterfaces: boolean = true): PoolApr {
    return PoolApr.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolApr): Uint8Array {
    return PoolApr.encode(message).finish();
  },
  toProtoMsg(message: PoolApr): PoolAprProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.PoolApr",
      value: PoolApr.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolApr.typeUrl, PoolApr);