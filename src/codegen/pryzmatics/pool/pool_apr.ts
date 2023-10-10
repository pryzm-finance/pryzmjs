import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
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
  decode(input: BinaryReader | Uint8Array, length?: number): PoolApr {
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
  }
};