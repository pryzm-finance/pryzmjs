/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ExchangeRateTuple } from "./exchange_rate_tuple";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface ExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  validator: string;
}

function createBaseExchangeRateVote(): ExchangeRateVote {
  return { exchangeRateTuples: [], validator: "" };
}

export const ExchangeRateVote = {
  encode(message: ExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          break;
        case 2:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateVote {
    return {
      exchangeRateTuples: Array.isArray(object?.exchangeRateTuples)
        ? object.exchangeRateTuples.map((e: any) => ExchangeRateTuple.fromJSON(e))
        : [],
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: ExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchangeRateTuples = message.exchangeRateTuples.map((e) => e ? ExchangeRateTuple.toJSON(e) : undefined);
    } else {
      obj.exchangeRateTuples = [];
    }
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRateVote>, I>>(object: I): ExchangeRateVote {
    const message = createBaseExchangeRateVote();
    message.exchangeRateTuples = object.exchangeRateTuples?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
    message.validator = object.validator ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
