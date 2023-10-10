import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface HistoricalPoolApr {
  time: Timestamp;
  apr?: string;
  swapFeeApr?: string;
  tokenYield?: string;
  incentivesApr?: string;
  allianceApr?: string;
}
export interface HistoricalPoolAprSDKType {
  time: TimestampSDKType;
  apr?: string;
  swap_fee_apr?: string;
  token_yield?: string;
  incentives_apr?: string;
  alliance_apr?: string;
}
function createBaseHistoricalPoolApr(): HistoricalPoolApr {
  return {
    time: Timestamp.fromPartial({}),
    apr: undefined,
    swapFeeApr: undefined,
    tokenYield: undefined,
    incentivesApr: undefined,
    allianceApr: undefined
  };
}
export const HistoricalPoolApr = {
  encode(message: HistoricalPoolApr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.apr !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    if (message.swapFeeApr !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFeeApr, 18).atomics);
    }
    if (message.tokenYield !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.tokenYield, 18).atomics);
    }
    if (message.incentivesApr !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.incentivesApr, 18).atomics);
    }
    if (message.allianceApr !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.allianceApr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalPoolApr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalPoolApr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.apr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.swapFeeApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.tokenYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.incentivesApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.allianceApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalPoolApr {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      apr: isSet(object.apr) ? String(object.apr) : undefined,
      swapFeeApr: isSet(object.swapFeeApr) ? String(object.swapFeeApr) : undefined,
      tokenYield: isSet(object.tokenYield) ? String(object.tokenYield) : undefined,
      incentivesApr: isSet(object.incentivesApr) ? String(object.incentivesApr) : undefined,
      allianceApr: isSet(object.allianceApr) ? String(object.allianceApr) : undefined
    };
  },
  toJSON(message: HistoricalPoolApr): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.apr !== undefined && (obj.apr = message.apr);
    message.swapFeeApr !== undefined && (obj.swapFeeApr = message.swapFeeApr);
    message.tokenYield !== undefined && (obj.tokenYield = message.tokenYield);
    message.incentivesApr !== undefined && (obj.incentivesApr = message.incentivesApr);
    message.allianceApr !== undefined && (obj.allianceApr = message.allianceApr);
    return obj;
  },
  fromPartial(object: Partial<HistoricalPoolApr>): HistoricalPoolApr {
    const message = createBaseHistoricalPoolApr();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.apr = object.apr ?? undefined;
    message.swapFeeApr = object.swapFeeApr ?? undefined;
    message.tokenYield = object.tokenYield ?? undefined;
    message.incentivesApr = object.incentivesApr ?? undefined;
    message.allianceApr = object.allianceApr ?? undefined;
    return message;
  }
};