/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface ExchangeRatePreVote {
  hash: string;
  validator: string;
  submitBlock: number;
}

const baseExchangeRatePreVote: object = {
  hash: "",
  validator: "",
  submitBlock: 0,
};

export const ExchangeRatePreVote = {
  encode(
    message: ExchangeRatePreVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.submitBlock !== 0) {
      writer.uint32(24).int64(message.submitBlock);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeRatePreVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExchangeRatePreVote } as ExchangeRatePreVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.submitBlock = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRatePreVote {
    const message = { ...baseExchangeRatePreVote } as ExchangeRatePreVote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.submitBlock !== undefined && object.submitBlock !== null) {
      message.submitBlock = Number(object.submitBlock);
    } else {
      message.submitBlock = 0;
    }
    return message;
  },

  toJSON(message: ExchangeRatePreVote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.validator !== undefined && (obj.validator = message.validator);
    message.submitBlock !== undefined &&
      (obj.submitBlock = message.submitBlock);
    return obj;
  },

  fromPartial(object: DeepPartial<ExchangeRatePreVote>): ExchangeRatePreVote {
    const message = { ...baseExchangeRatePreVote } as ExchangeRatePreVote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.submitBlock !== undefined && object.submitBlock !== null) {
      message.submitBlock = object.submitBlock;
    } else {
      message.submitBlock = 0;
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
