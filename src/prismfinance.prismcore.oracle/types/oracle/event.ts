/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { AssetExchangeRate } from "../oracle/asset_exchange_rate";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface EventExchangeRatePreVote {
  validator: string;
  feeder: string;
}

export interface EventExchangeRateVote {
  validator: string;
  feeder: string;
  exchangeRates: string;
}

export interface EventDelegateFeedConsent {
  validator: string;
  feeder: string;
}

export interface EventVoteIntervalEnds {
  timeMillis: number;
}

export interface EventAssetExchangeRateUpdated {
  rate: AssetExchangeRate | undefined;
}

const baseEventExchangeRatePreVote: object = { validator: "", feeder: "" };

export const EventExchangeRatePreVote = {
  encode(
    message: EventExchangeRatePreVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventExchangeRatePreVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventExchangeRatePreVote,
    } as EventExchangeRatePreVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExchangeRatePreVote {
    const message = {
      ...baseEventExchangeRatePreVote,
    } as EventExchangeRatePreVote;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    return message;
  },

  toJSON(message: EventExchangeRatePreVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventExchangeRatePreVote>
  ): EventExchangeRatePreVote {
    const message = {
      ...baseEventExchangeRatePreVote,
    } as EventExchangeRatePreVote;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    return message;
  },
};

const baseEventExchangeRateVote: object = {
  validator: "",
  feeder: "",
  exchangeRates: "",
};

export const EventExchangeRateVote = {
  encode(
    message: EventExchangeRateVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    if (message.exchangeRates !== "") {
      writer.uint32(26).string(message.exchangeRates);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventExchangeRateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventExchangeRateVote } as EventExchangeRateVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        case 3:
          message.exchangeRates = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExchangeRateVote {
    const message = { ...baseEventExchangeRateVote } as EventExchangeRateVote;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      message.exchangeRates = String(object.exchangeRates);
    } else {
      message.exchangeRates = "";
    }
    return message;
  },

  toJSON(message: EventExchangeRateVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.exchangeRates !== undefined &&
      (obj.exchangeRates = message.exchangeRates);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventExchangeRateVote>
  ): EventExchangeRateVote {
    const message = { ...baseEventExchangeRateVote } as EventExchangeRateVote;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      message.exchangeRates = object.exchangeRates;
    } else {
      message.exchangeRates = "";
    }
    return message;
  },
};

const baseEventDelegateFeedConsent: object = { validator: "", feeder: "" };

export const EventDelegateFeedConsent = {
  encode(
    message: EventDelegateFeedConsent,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventDelegateFeedConsent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventDelegateFeedConsent,
    } as EventDelegateFeedConsent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelegateFeedConsent {
    const message = {
      ...baseEventDelegateFeedConsent,
    } as EventDelegateFeedConsent;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    return message;
  },

  toJSON(message: EventDelegateFeedConsent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventDelegateFeedConsent>
  ): EventDelegateFeedConsent {
    const message = {
      ...baseEventDelegateFeedConsent,
    } as EventDelegateFeedConsent;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    return message;
  },
};

const baseEventVoteIntervalEnds: object = { timeMillis: 0 };

export const EventVoteIntervalEnds = {
  encode(
    message: EventVoteIntervalEnds,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.timeMillis !== 0) {
      writer.uint32(8).int64(message.timeMillis);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventVoteIntervalEnds {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventVoteIntervalEnds } as EventVoteIntervalEnds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeMillis = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVoteIntervalEnds {
    const message = { ...baseEventVoteIntervalEnds } as EventVoteIntervalEnds;
    if (object.timeMillis !== undefined && object.timeMillis !== null) {
      message.timeMillis = Number(object.timeMillis);
    } else {
      message.timeMillis = 0;
    }
    return message;
  },

  toJSON(message: EventVoteIntervalEnds): unknown {
    const obj: any = {};
    message.timeMillis !== undefined && (obj.timeMillis = message.timeMillis);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventVoteIntervalEnds>
  ): EventVoteIntervalEnds {
    const message = { ...baseEventVoteIntervalEnds } as EventVoteIntervalEnds;
    if (object.timeMillis !== undefined && object.timeMillis !== null) {
      message.timeMillis = object.timeMillis;
    } else {
      message.timeMillis = 0;
    }
    return message;
  },
};

const baseEventAssetExchangeRateUpdated: object = {};

export const EventAssetExchangeRateUpdated = {
  encode(
    message: EventAssetExchangeRateUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.rate !== undefined) {
      AssetExchangeRate.encode(message.rate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventAssetExchangeRateUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventAssetExchangeRateUpdated,
    } as EventAssetExchangeRateUpdated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = AssetExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAssetExchangeRateUpdated {
    const message = {
      ...baseEventAssetExchangeRateUpdated,
    } as EventAssetExchangeRateUpdated;
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = AssetExchangeRate.fromJSON(object.rate);
    } else {
      message.rate = undefined;
    }
    return message;
  },

  toJSON(message: EventAssetExchangeRateUpdated): unknown {
    const obj: any = {};
    message.rate !== undefined &&
      (obj.rate = message.rate
        ? AssetExchangeRate.toJSON(message.rate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventAssetExchangeRateUpdated>
  ): EventAssetExchangeRateUpdated {
    const message = {
      ...baseEventAssetExchangeRateUpdated,
    } as EventAssetExchangeRateUpdated;
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = AssetExchangeRate.fromPartial(object.rate);
    } else {
      message.rate = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
