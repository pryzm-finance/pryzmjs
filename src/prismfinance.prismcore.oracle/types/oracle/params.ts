/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";

export const protobufPackage = "prismfinance.prismcore.oracle";

/** Params defines the parameters for the module. */
export interface Params {
  votePeriod: number;
  quorum: string;
  voteThreshold: string;
  rewardDistributionWindow: number;
  slashFraction: string;
  slashWindow: number;
  maxMissRatePerSlashWindow: string;
  exchangeRateValidDuration: Duration | undefined;
}

const baseParams: object = {
  votePeriod: 0,
  quorum: "",
  voteThreshold: "",
  rewardDistributionWindow: 0,
  slashFraction: "",
  slashWindow: 0,
  maxMissRatePerSlashWindow: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
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
      Duration.encode(
        message.exchangeRateValidDuration,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
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
          message.rewardDistributionWindow = longToNumber(
            reader.int64() as Long
          );
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
          message.exchangeRateValidDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.votePeriod !== undefined && object.votePeriod !== null) {
      message.votePeriod = Number(object.votePeriod);
    } else {
      message.votePeriod = 0;
    }
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = String(object.quorum);
    } else {
      message.quorum = "";
    }
    if (object.voteThreshold !== undefined && object.voteThreshold !== null) {
      message.voteThreshold = String(object.voteThreshold);
    } else {
      message.voteThreshold = "";
    }
    if (
      object.rewardDistributionWindow !== undefined &&
      object.rewardDistributionWindow !== null
    ) {
      message.rewardDistributionWindow = Number(
        object.rewardDistributionWindow
      );
    } else {
      message.rewardDistributionWindow = 0;
    }
    if (object.slashFraction !== undefined && object.slashFraction !== null) {
      message.slashFraction = String(object.slashFraction);
    } else {
      message.slashFraction = "";
    }
    if (object.slashWindow !== undefined && object.slashWindow !== null) {
      message.slashWindow = Number(object.slashWindow);
    } else {
      message.slashWindow = 0;
    }
    if (
      object.maxMissRatePerSlashWindow !== undefined &&
      object.maxMissRatePerSlashWindow !== null
    ) {
      message.maxMissRatePerSlashWindow = String(
        object.maxMissRatePerSlashWindow
      );
    } else {
      message.maxMissRatePerSlashWindow = "";
    }
    if (
      object.exchangeRateValidDuration !== undefined &&
      object.exchangeRateValidDuration !== null
    ) {
      message.exchangeRateValidDuration = Duration.fromJSON(
        object.exchangeRateValidDuration
      );
    } else {
      message.exchangeRateValidDuration = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = message.votePeriod);
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.voteThreshold !== undefined &&
      (obj.voteThreshold = message.voteThreshold);
    message.rewardDistributionWindow !== undefined &&
      (obj.rewardDistributionWindow = message.rewardDistributionWindow);
    message.slashFraction !== undefined &&
      (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined &&
      (obj.slashWindow = message.slashWindow);
    message.maxMissRatePerSlashWindow !== undefined &&
      (obj.maxMissRatePerSlashWindow = message.maxMissRatePerSlashWindow);
    message.exchangeRateValidDuration !== undefined &&
      (obj.exchangeRateValidDuration = message.exchangeRateValidDuration
        ? Duration.toJSON(message.exchangeRateValidDuration)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.votePeriod !== undefined && object.votePeriod !== null) {
      message.votePeriod = object.votePeriod;
    } else {
      message.votePeriod = 0;
    }
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    } else {
      message.quorum = "";
    }
    if (object.voteThreshold !== undefined && object.voteThreshold !== null) {
      message.voteThreshold = object.voteThreshold;
    } else {
      message.voteThreshold = "";
    }
    if (
      object.rewardDistributionWindow !== undefined &&
      object.rewardDistributionWindow !== null
    ) {
      message.rewardDistributionWindow = object.rewardDistributionWindow;
    } else {
      message.rewardDistributionWindow = 0;
    }
    if (object.slashFraction !== undefined && object.slashFraction !== null) {
      message.slashFraction = object.slashFraction;
    } else {
      message.slashFraction = "";
    }
    if (object.slashWindow !== undefined && object.slashWindow !== null) {
      message.slashWindow = object.slashWindow;
    } else {
      message.slashWindow = 0;
    }
    if (
      object.maxMissRatePerSlashWindow !== undefined &&
      object.maxMissRatePerSlashWindow !== null
    ) {
      message.maxMissRatePerSlashWindow = object.maxMissRatePerSlashWindow;
    } else {
      message.maxMissRatePerSlashWindow = "";
    }
    if (
      object.exchangeRateValidDuration !== undefined &&
      object.exchangeRateValidDuration !== null
    ) {
      message.exchangeRateValidDuration = Duration.fromPartial(
        object.exchangeRateValidDuration
      );
    } else {
      message.exchangeRateValidDuration = undefined;
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
