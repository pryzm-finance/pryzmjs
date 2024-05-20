import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface HistoricalTokenYield {
  time: Timestamp;
  yield?: string;
}
export interface HistoricalTokenYieldProtoMsg {
  typeUrl: "/pryzmatics.pool.HistoricalTokenYield";
  value: Uint8Array;
}
export interface HistoricalTokenYieldAmino {
  time?: string;
  yield?: string;
}
export interface HistoricalTokenYieldAminoMsg {
  type: "/pryzmatics.pool.HistoricalTokenYield";
  value: HistoricalTokenYieldAmino;
}
export interface HistoricalTokenYieldSDKType {
  time: TimestampSDKType;
  yield?: string;
}
function createBaseHistoricalTokenYield(): HistoricalTokenYield {
  return {
    time: Timestamp.fromPartial({}),
    yield: undefined
  };
}
export const HistoricalTokenYield = {
  typeUrl: "/pryzmatics.pool.HistoricalTokenYield",
  is(o: any): o is HistoricalTokenYield {
    return o && (o.$typeUrl === HistoricalTokenYield.typeUrl || Timestamp.is(o.time));
  },
  isSDK(o: any): o is HistoricalTokenYieldSDKType {
    return o && (o.$typeUrl === HistoricalTokenYield.typeUrl || Timestamp.isSDK(o.time));
  },
  isAmino(o: any): o is HistoricalTokenYieldAmino {
    return o && (o.$typeUrl === HistoricalTokenYield.typeUrl || Timestamp.isAmino(o.time));
  },
  encode(message: HistoricalTokenYield, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.yield !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.yield, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HistoricalTokenYield {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalTokenYield();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.yield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalTokenYield {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      yield: isSet(object.yield) ? String(object.yield) : undefined
    };
  },
  toJSON(message: HistoricalTokenYield): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.yield !== undefined && (obj.yield = message.yield);
    return obj;
  },
  fromPartial(object: Partial<HistoricalTokenYield>): HistoricalTokenYield {
    const message = createBaseHistoricalTokenYield();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.yield = object.yield ?? undefined;
    return message;
  },
  fromAmino(object: HistoricalTokenYieldAmino): HistoricalTokenYield {
    const message = createBaseHistoricalTokenYield();
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.yield !== undefined && object.yield !== null) {
      message.yield = object.yield;
    }
    return message;
  },
  toAmino(message: HistoricalTokenYield, useInterfaces: boolean = true): HistoricalTokenYieldAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.yield = padDecimal(message.yield) === null ? undefined : padDecimal(message.yield);
    return obj;
  },
  fromAminoMsg(object: HistoricalTokenYieldAminoMsg): HistoricalTokenYield {
    return HistoricalTokenYield.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoricalTokenYieldProtoMsg, useInterfaces: boolean = true): HistoricalTokenYield {
    return HistoricalTokenYield.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HistoricalTokenYield): Uint8Array {
    return HistoricalTokenYield.encode(message).finish();
  },
  toProtoMsg(message: HistoricalTokenYield): HistoricalTokenYieldProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.HistoricalTokenYield",
      value: HistoricalTokenYield.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HistoricalTokenYield.typeUrl, HistoricalTokenYield);