/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.oracle.oracle";

/** Params defines the parameters for the module. */
export interface Params {
  votePeriod: number;
  quorum: string;
  voteThreshold: string;
  slashFraction: string;
  slashWindow: number;
  maxMissRatePerSlashWindow: string;
  maxMissRatePerVotePeriod: string;
  /** ratio in range [0, 1] which determines the amount of collected fees that is supposed to be distributed among validators as oracle reward */
  feeCollectorRewardRatio: string;
}

function createBaseParams(): Params {
  return {
    votePeriod: 0,
    quorum: "",
    voteThreshold: "",
    slashFraction: "",
    slashWindow: 0,
    maxMissRatePerSlashWindow: "",
    maxMissRatePerVotePeriod: "",
    feeCollectorRewardRatio: "",
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
    if (message.slashFraction !== "") {
      writer.uint32(34).string(message.slashFraction);
    }
    if (message.slashWindow !== 0) {
      writer.uint32(40).int64(message.slashWindow);
    }
    if (message.maxMissRatePerSlashWindow !== "") {
      writer.uint32(50).string(message.maxMissRatePerSlashWindow);
    }
    if (message.maxMissRatePerVotePeriod !== "") {
      writer.uint32(58).string(message.maxMissRatePerVotePeriod);
    }
    if (message.feeCollectorRewardRatio !== "") {
      writer.uint32(66).string(message.feeCollectorRewardRatio);
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
          message.slashFraction = reader.string();
          break;
        case 5:
          message.slashWindow = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.maxMissRatePerSlashWindow = reader.string();
          break;
        case 7:
          message.maxMissRatePerVotePeriod = reader.string();
          break;
        case 8:
          message.feeCollectorRewardRatio = reader.string();
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
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? Number(object.slashWindow) : 0,
      maxMissRatePerSlashWindow: isSet(object.maxMissRatePerSlashWindow)
        ? String(object.maxMissRatePerSlashWindow)
        : "",
      maxMissRatePerVotePeriod: isSet(object.maxMissRatePerVotePeriod) ? String(object.maxMissRatePerVotePeriod) : "",
      feeCollectorRewardRatio: isSet(object.feeCollectorRewardRatio) ? String(object.feeCollectorRewardRatio) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = Math.round(message.votePeriod));
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = Math.round(message.slashWindow));
    message.maxMissRatePerSlashWindow !== undefined
      && (obj.maxMissRatePerSlashWindow = message.maxMissRatePerSlashWindow);
    message.maxMissRatePerVotePeriod !== undefined && (obj.maxMissRatePerVotePeriod = message.maxMissRatePerVotePeriod);
    message.feeCollectorRewardRatio !== undefined && (obj.feeCollectorRewardRatio = message.feeCollectorRewardRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod ?? 0;
    message.quorum = object.quorum ?? "";
    message.voteThreshold = object.voteThreshold ?? "";
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow ?? 0;
    message.maxMissRatePerSlashWindow = object.maxMissRatePerSlashWindow ?? "";
    message.maxMissRatePerVotePeriod = object.maxMissRatePerVotePeriod ?? "";
    message.feeCollectorRewardRatio = object.feeCollectorRewardRatio ?? "";
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
