/* eslint-disable */
import { ExchangeRateTuple } from "../oracle/exchange_rate_tuple";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface ExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  validator: string;
}

const baseExchangeRateVote: object = { validator: "" };

export const ExchangeRateVote = {
  encode(message: ExchangeRateVote, writer: Writer = Writer.create()): Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeRateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExchangeRateVote } as ExchangeRateVote;
    message.exchangeRateTuples = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(
            ExchangeRateTuple.decode(reader, reader.uint32())
          );
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
    const message = { ...baseExchangeRateVote } as ExchangeRateVote;
    message.exchangeRateTuples = [];
    if (
      object.exchangeRateTuples !== undefined &&
      object.exchangeRateTuples !== null
    ) {
      for (const e of object.exchangeRateTuples) {
        message.exchangeRateTuples.push(ExchangeRateTuple.fromJSON(e));
      }
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: ExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchangeRateTuples = message.exchangeRateTuples.map((e) =>
        e ? ExchangeRateTuple.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRateTuples = [];
    }
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(object: DeepPartial<ExchangeRateVote>): ExchangeRateVote {
    const message = { ...baseExchangeRateVote } as ExchangeRateVote;
    message.exchangeRateTuples = [];
    if (
      object.exchangeRateTuples !== undefined &&
      object.exchangeRateTuples !== null
    ) {
      for (const e of object.exchangeRateTuples) {
        message.exchangeRateTuples.push(ExchangeRateTuple.fromPartial(e));
      }
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

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
