import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export enum TimeResolutionType {
  TIME_RESOLUTION_TYPE_MINUTE = 0,
  TIME_RESOLUTION_TYPE_HOUR = 1,
  TIME_RESOLUTION_TYPE_DAY = 2,
  TIME_RESOLUTION_TYPE_WEEK = 3,
  TIME_RESOLUTION_TYPE_MONTH = 4,
  TIME_RESOLUTION_TYPE_YEAR = 5,
  UNRECOGNIZED = -1,
}
export const TimeResolutionTypeSDKType = TimeResolutionType;
export function timeResolutionTypeFromJSON(object: any): TimeResolutionType {
  switch (object) {
    case 0:
    case "TIME_RESOLUTION_TYPE_MINUTE":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE;
    case 1:
    case "TIME_RESOLUTION_TYPE_HOUR":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_HOUR;
    case 2:
    case "TIME_RESOLUTION_TYPE_DAY":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_DAY;
    case 3:
    case "TIME_RESOLUTION_TYPE_WEEK":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_WEEK;
    case 4:
    case "TIME_RESOLUTION_TYPE_MONTH":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_MONTH;
    case 5:
    case "TIME_RESOLUTION_TYPE_YEAR":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_YEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TimeResolutionType.UNRECOGNIZED;
  }
}
export function timeResolutionTypeToJSON(object: TimeResolutionType): string {
  switch (object) {
    case TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE:
      return "TIME_RESOLUTION_TYPE_MINUTE";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_HOUR:
      return "TIME_RESOLUTION_TYPE_HOUR";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_DAY:
      return "TIME_RESOLUTION_TYPE_DAY";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_WEEK:
      return "TIME_RESOLUTION_TYPE_WEEK";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_MONTH:
      return "TIME_RESOLUTION_TYPE_MONTH";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_YEAR:
      return "TIME_RESOLUTION_TYPE_YEAR";
    case TimeResolutionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface HistoricalPrice {
  time: Timestamp;
  low?: string;
  high?: string;
  avg?: string;
  open?: string;
  close?: string;
}
export interface HistoricalPriceSDKType {
  time: TimestampSDKType;
  low?: string;
  high?: string;
  avg?: string;
  open?: string;
  close?: string;
}
export interface TimeResolution {
  type: TimeResolutionType;
  value: number;
}
export interface TimeResolutionSDKType {
  type: TimeResolutionType;
  value: number;
}
function createBaseHistoricalPrice(): HistoricalPrice {
  return {
    time: Timestamp.fromPartial({}),
    low: undefined,
    high: undefined,
    avg: undefined,
    open: undefined,
    close: undefined
  };
}
export const HistoricalPrice = {
  encode(message: HistoricalPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.low !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.low, 18).atomics);
    }
    if (message.high !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.high, 18).atomics);
    }
    if (message.avg !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.avg, 18).atomics);
    }
    if (message.open !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.open, 18).atomics);
    }
    if (message.close !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.close, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.low = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.high = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.avg = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.open = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.close = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalPrice {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      low: isSet(object.low) ? String(object.low) : undefined,
      high: isSet(object.high) ? String(object.high) : undefined,
      avg: isSet(object.avg) ? String(object.avg) : undefined,
      open: isSet(object.open) ? String(object.open) : undefined,
      close: isSet(object.close) ? String(object.close) : undefined
    };
  },
  toJSON(message: HistoricalPrice): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.low !== undefined && (obj.low = message.low);
    message.high !== undefined && (obj.high = message.high);
    message.avg !== undefined && (obj.avg = message.avg);
    message.open !== undefined && (obj.open = message.open);
    message.close !== undefined && (obj.close = message.close);
    return obj;
  },
  fromPartial(object: Partial<HistoricalPrice>): HistoricalPrice {
    const message = createBaseHistoricalPrice();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.low = object.low ?? undefined;
    message.high = object.high ?? undefined;
    message.avg = object.avg ?? undefined;
    message.open = object.open ?? undefined;
    message.close = object.close ?? undefined;
    return message;
  }
};
function createBaseTimeResolution(): TimeResolution {
  return {
    type: 0,
    value: 0
  };
}
export const TimeResolution = {
  encode(message: TimeResolution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimeResolution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeResolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimeResolution {
    return {
      type: isSet(object.type) ? timeResolutionTypeFromJSON(object.type) : -1,
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toJSON(message: TimeResolution): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = timeResolutionTypeToJSON(message.type));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
  fromPartial(object: Partial<TimeResolution>): TimeResolution {
    const message = createBaseTimeResolution();
    message.type = object.type ?? 0;
    message.value = object.value ?? 0;
    return message;
  }
};