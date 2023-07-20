import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
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
  time?: Timestamp;
  min: string;
  max: string;
  avg: string;
}
export interface HistoricalPriceSDKType {
  time?: TimestampSDKType;
  min: string;
  max: string;
  avg: string;
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
    time: undefined,
    min: "",
    max: "",
    avg: ""
  };
}
export const HistoricalPrice = {
  encode(message: HistoricalPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.min !== "") {
      writer.uint32(18).string(message.min);
    }
    if (message.max !== "") {
      writer.uint32(26).string(message.max);
    }
    if (message.avg !== "") {
      writer.uint32(34).string(message.avg);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.min = reader.string();
          break;
        case 3:
          message.max = reader.string();
          break;
        case 4:
          message.avg = reader.string();
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
      min: isSet(object.min) ? String(object.min) : "",
      max: isSet(object.max) ? String(object.max) : "",
      avg: isSet(object.avg) ? String(object.avg) : ""
    };
  },
  toJSON(message: HistoricalPrice): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    message.avg !== undefined && (obj.avg = message.avg);
    return obj;
  },
  fromPartial(object: Partial<HistoricalPrice>): HistoricalPrice {
    const message = createBaseHistoricalPrice();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.min = object.min ?? "";
    message.max = object.max ?? "";
    message.avg = object.avg ?? "";
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
  encode(message: TimeResolution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TimeResolution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      type: isSet(object.type) ? timeResolutionTypeFromJSON(object.type) : 0,
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