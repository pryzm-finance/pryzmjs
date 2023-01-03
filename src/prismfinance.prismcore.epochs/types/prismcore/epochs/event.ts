/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.epochs";

export interface EventEpochStart {
  identifier: string;
  epochNumber: number;
  startTime: number;
}

export interface EventEpochEnd {
  identifier: string;
  epochNumber: number;
}

function createBaseEventEpochStart(): EventEpochStart {
  return { identifier: "", epochNumber: 0, startTime: 0 };
}

export const EventEpochStart = {
  encode(message: EventEpochStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.epochNumber !== 0) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.startTime !== 0) {
      writer.uint32(24).int64(message.startTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochStart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.epochNumber = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.startTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEpochStart {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      epochNumber: isSet(object.epochNumber) ? Number(object.epochNumber) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
    };
  },

  toJSON(message: EventEpochStart): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.epochNumber !== undefined && (obj.epochNumber = Math.round(message.epochNumber));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEpochStart>, I>>(object: I): EventEpochStart {
    const message = createBaseEventEpochStart();
    message.identifier = object.identifier ?? "";
    message.epochNumber = object.epochNumber ?? 0;
    message.startTime = object.startTime ?? 0;
    return message;
  },
};

function createBaseEventEpochEnd(): EventEpochEnd {
  return { identifier: "", epochNumber: 0 };
}

export const EventEpochEnd = {
  encode(message: EventEpochEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.epochNumber !== 0) {
      writer.uint32(16).int64(message.epochNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochEnd {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.epochNumber = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEpochEnd {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      epochNumber: isSet(object.epochNumber) ? Number(object.epochNumber) : 0,
    };
  },

  toJSON(message: EventEpochEnd): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.epochNumber !== undefined && (obj.epochNumber = Math.round(message.epochNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEpochEnd>, I>>(object: I): EventEpochEnd {
    const message = createBaseEventEpochEnd();
    message.identifier = object.identifier ?? "";
    message.epochNumber = object.epochNumber ?? 0;
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
