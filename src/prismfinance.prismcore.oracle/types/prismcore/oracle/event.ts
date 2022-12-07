/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AssetExchangeRate } from "./asset_exchange_rate";

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

function createBaseEventExchangeRatePreVote(): EventExchangeRatePreVote {
  return { validator: "", feeder: "" };
}

export const EventExchangeRatePreVote = {
  encode(message: EventExchangeRatePreVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExchangeRatePreVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExchangeRatePreVote();
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
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
    };
  },

  toJSON(message: EventExchangeRatePreVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExchangeRatePreVote>, I>>(object: I): EventExchangeRatePreVote {
    const message = createBaseEventExchangeRatePreVote();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  },
};

function createBaseEventExchangeRateVote(): EventExchangeRateVote {
  return { validator: "", feeder: "", exchangeRates: "" };
}

export const EventExchangeRateVote = {
  encode(message: EventExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExchangeRateVote();
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
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      exchangeRates: isSet(object.exchangeRates) ? String(object.exchangeRates) : "",
    };
  },

  toJSON(message: EventExchangeRateVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.exchangeRates !== undefined && (obj.exchangeRates = message.exchangeRates);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExchangeRateVote>, I>>(object: I): EventExchangeRateVote {
    const message = createBaseEventExchangeRateVote();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    message.exchangeRates = object.exchangeRates ?? "";
    return message;
  },
};

function createBaseEventDelegateFeedConsent(): EventDelegateFeedConsent {
  return { validator: "", feeder: "" };
}

export const EventDelegateFeedConsent = {
  encode(message: EventDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegateFeedConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateFeedConsent();
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
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
    };
  },

  toJSON(message: EventDelegateFeedConsent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDelegateFeedConsent>, I>>(object: I): EventDelegateFeedConsent {
    const message = createBaseEventDelegateFeedConsent();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  },
};

function createBaseEventVoteIntervalEnds(): EventVoteIntervalEnds {
  return { timeMillis: 0 };
}

export const EventVoteIntervalEnds = {
  encode(message: EventVoteIntervalEnds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeMillis !== 0) {
      writer.uint32(8).int64(message.timeMillis);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVoteIntervalEnds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteIntervalEnds();
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
    return { timeMillis: isSet(object.timeMillis) ? Number(object.timeMillis) : 0 };
  },

  toJSON(message: EventVoteIntervalEnds): unknown {
    const obj: any = {};
    message.timeMillis !== undefined && (obj.timeMillis = Math.round(message.timeMillis));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVoteIntervalEnds>, I>>(object: I): EventVoteIntervalEnds {
    const message = createBaseEventVoteIntervalEnds();
    message.timeMillis = object.timeMillis ?? 0;
    return message;
  },
};

function createBaseEventAssetExchangeRateUpdated(): EventAssetExchangeRateUpdated {
  return { rate: undefined };
}

export const EventAssetExchangeRateUpdated = {
  encode(message: EventAssetExchangeRateUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== undefined) {
      AssetExchangeRate.encode(message.rate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAssetExchangeRateUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAssetExchangeRateUpdated();
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
    return { rate: isSet(object.rate) ? AssetExchangeRate.fromJSON(object.rate) : undefined };
  },

  toJSON(message: EventAssetExchangeRateUpdated): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate ? AssetExchangeRate.toJSON(message.rate) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAssetExchangeRateUpdated>, I>>(
    object: I,
  ): EventAssetExchangeRateUpdated {
    const message = createBaseEventAssetExchangeRateUpdated();
    message.rate = (object.rate !== undefined && object.rate !== null)
      ? AssetExchangeRate.fromPartial(object.rate)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
