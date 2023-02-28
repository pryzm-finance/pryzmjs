/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "refractedlabs.oracle.oracle";

/** Params defines the parameters for the module. */
export interface Params {
  votePeriod: number;
  quorum: string;
  voteThreshold: string;
  rewardDistributionWindow: number;
  slashFraction: string;
  slashWindow: number;
  maxMissRatePerSlashWindow: string;
  /** TODO? move to assets, TODO? why this is not used */
  exchangeRateValidDuration: Duration | undefined;
}

function createBaseParams(): Params {
  return {
    votePeriod: 0,
    quorum: "",
    voteThreshold: "",
    rewardDistributionWindow: 0,
    slashFraction: "",
    slashWindow: 0,
    maxMissRatePerSlashWindow: "",
    exchangeRateValidDuration: undefined,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votePeriod !== 0) {
      writer.uint32(8).int64(message.votePeriod);
    }
    if (message.quorum !== "") {
      writer.uint32(18).string(message.quorum);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(26).string(message.voteThreshold);
    }
    if (message.rewardDistributionWindow !== 0) {
      writer.uint32(32).int64(message.rewardDistributionWindow);
    }
    if (message.slashFraction !== "") {
      writer.uint32(42).string(message.slashFraction);
    }
    if (message.slashWindow !== 0) {
      writer.uint32(48).int64(message.slashWindow);
    }
    if (message.maxMissRatePerSlashWindow !== "") {
      writer.uint32(58).string(message.maxMissRatePerSlashWindow);
    }
    if (message.exchangeRateValidDuration !== undefined) {
      Duration.encode(message.exchangeRateValidDuration, writer.uint32(66).fork()).ldelim();
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
          message.votePeriod = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.quorum = reader.string();
          break;
        case 3:
          message.voteThreshold = reader.string();
          break;
        case 4:
          message.rewardDistributionWindow = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.slashFraction = reader.string();
          break;
        case 6:
          message.slashWindow = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.maxMissRatePerSlashWindow = reader.string();
          break;
        case 8:
          message.exchangeRateValidDuration = Duration.decode(reader, reader.uint32());
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
      votePeriod: isSet(object.votePeriod) ? Number(object.votePeriod) : 0,
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardDistributionWindow: isSet(object.rewardDistributionWindow) ? Number(object.rewardDistributionWindow) : 0,
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? Number(object.slashWindow) : 0,
      maxMissRatePerSlashWindow: isSet(object.maxMissRatePerSlashWindow)
        ? String(object.maxMissRatePerSlashWindow)
        : "",
      exchangeRateValidDuration: isSet(object.exchangeRateValidDuration)
        ? Duration.fromJSON(object.exchangeRateValidDuration)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = Math.round(message.votePeriod));
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.rewardDistributionWindow !== undefined
      && (obj.rewardDistributionWindow = Math.round(message.rewardDistributionWindow));
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = Math.round(message.slashWindow));
    message.maxMissRatePerSlashWindow !== undefined
      && (obj.maxMissRatePerSlashWindow = message.maxMissRatePerSlashWindow);
    message.exchangeRateValidDuration !== undefined
      && (obj.exchangeRateValidDuration = message.exchangeRateValidDuration
        ? Duration.toJSON(message.exchangeRateValidDuration)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod ?? 0;
    message.quorum = object.quorum ?? "";
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardDistributionWindow = object.rewardDistributionWindow ?? 0;
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow ?? 0;
    message.maxMissRatePerSlashWindow = object.maxMissRatePerSlashWindow ?? "";
    message.exchangeRateValidDuration =
      (object.exchangeRateValidDuration !== undefined && object.exchangeRateValidDuration !== null)
        ? Duration.fromPartial(object.exchangeRateValidDuration)
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
