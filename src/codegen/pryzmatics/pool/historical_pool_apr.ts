import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface HistoricalPoolApr {
  time: Timestamp;
  apr?: string;
  swapFeeApr?: string;
  tokenYield?: string;
  incentivesApr?: string;
  allianceApr?: string;
}
export interface HistoricalPoolAprProtoMsg {
  typeUrl: "/pryzmatics.pool.HistoricalPoolApr";
  value: Uint8Array;
}
export interface HistoricalPoolAprAmino {
  time?: string;
  apr?: string;
  swap_fee_apr?: string;
  token_yield?: string;
  incentives_apr?: string;
  alliance_apr?: string;
}
export interface HistoricalPoolAprAminoMsg {
  type: "/pryzmatics.pool.HistoricalPoolApr";
  value: HistoricalPoolAprAmino;
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
  typeUrl: "/pryzmatics.pool.HistoricalPoolApr",
  is(o: any): o is HistoricalPoolApr {
    return o && (o.$typeUrl === HistoricalPoolApr.typeUrl || Timestamp.is(o.time));
  },
  isSDK(o: any): o is HistoricalPoolAprSDKType {
    return o && (o.$typeUrl === HistoricalPoolApr.typeUrl || Timestamp.isSDK(o.time));
  },
  isAmino(o: any): o is HistoricalPoolAprAmino {
    return o && (o.$typeUrl === HistoricalPoolApr.typeUrl || Timestamp.isAmino(o.time));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HistoricalPoolApr {
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
  },
  fromAmino(object: HistoricalPoolAprAmino): HistoricalPoolApr {
    const message = createBaseHistoricalPoolApr();
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
    return message;
  },
  toAmino(message: HistoricalPoolApr, useInterfaces: boolean = true): HistoricalPoolAprAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.apr = padDecimal(message.apr) === null ? undefined : padDecimal(message.apr);
    obj.swap_fee_apr = padDecimal(message.swapFeeApr) === null ? undefined : padDecimal(message.swapFeeApr);
    obj.token_yield = padDecimal(message.tokenYield) === null ? undefined : padDecimal(message.tokenYield);
    obj.incentives_apr = padDecimal(message.incentivesApr) === null ? undefined : padDecimal(message.incentivesApr);
    obj.alliance_apr = padDecimal(message.allianceApr) === null ? undefined : padDecimal(message.allianceApr);
    return obj;
  },
  fromAminoMsg(object: HistoricalPoolAprAminoMsg): HistoricalPoolApr {
    return HistoricalPoolApr.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoricalPoolAprProtoMsg, useInterfaces: boolean = true): HistoricalPoolApr {
    return HistoricalPoolApr.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HistoricalPoolApr): Uint8Array {
    return HistoricalPoolApr.encode(message).finish();
  },
  toProtoMsg(message: HistoricalPoolApr): HistoricalPoolAprProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.HistoricalPoolApr",
      value: HistoricalPoolApr.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HistoricalPoolApr.typeUrl, HistoricalPoolApr);