import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface HistoricalTokenYield {
  time: Timestamp;
  yield?: string;
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
  encode(message: HistoricalTokenYield, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.yield !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.yield, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalTokenYield {
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
  }
};