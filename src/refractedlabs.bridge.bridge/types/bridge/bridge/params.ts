/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.bridge.bridge";

/** Params defines the parameters for the module. */
export interface Params {
  /** in milliseconds */
  challengePeriod: number;
  /** in milliseconds */
  expirationDuration: number;
  slashFraction: string;
  slashWindow: number;
  maxMissRatePerSlashWindow: string;
}

function createBaseParams(): Params {
  return {
    challengePeriod: 0,
    expirationDuration: 0,
    slashFraction: "",
    slashWindow: 0,
    maxMissRatePerSlashWindow: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengePeriod !== 0) {
      writer.uint32(8).uint64(message.challengePeriod);
    }
    if (message.expirationDuration !== 0) {
      writer.uint32(16).uint64(message.expirationDuration);
    }
    if (message.slashFraction !== "") {
      writer.uint32(26).string(message.slashFraction);
    }
    if (message.slashWindow !== 0) {
      writer.uint32(32).int64(message.slashWindow);
    }
    if (message.maxMissRatePerSlashWindow !== "") {
      writer.uint32(42).string(message.maxMissRatePerSlashWindow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengePeriod = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.expirationDuration = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.slashFraction = reader.string();
          break;
        case 4:
          message.slashWindow = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.maxMissRatePerSlashWindow = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      challengePeriod: isSet(object.challengePeriod) ? Number(object.challengePeriod) : 0,
      expirationDuration: isSet(object.expirationDuration) ? Number(object.expirationDuration) : 0,
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? Number(object.slashWindow) : 0,
      maxMissRatePerSlashWindow: isSet(object.maxMissRatePerSlashWindow)
        ? String(object.maxMissRatePerSlashWindow)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.challengePeriod !== undefined && (obj.challengePeriod = Math.round(message.challengePeriod));
    message.expirationDuration !== undefined && (obj.expirationDuration = Math.round(message.expirationDuration));
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = Math.round(message.slashWindow));
    message.maxMissRatePerSlashWindow !== undefined
      && (obj.maxMissRatePerSlashWindow = message.maxMissRatePerSlashWindow);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.challengePeriod = object.challengePeriod ?? 0;
    message.expirationDuration = object.expirationDuration ?? 0;
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow ?? 0;
    message.maxMissRatePerSlashWindow = object.maxMissRatePerSlashWindow ?? "";
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
