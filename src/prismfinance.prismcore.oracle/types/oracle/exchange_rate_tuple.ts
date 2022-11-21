/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.oracle";

/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
  baseDenom: string;
  exchangeRate: string;
}

const baseExchangeRateTuple: object = { baseDenom: "", exchangeRate: "" };

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: Writer = Writer.create()): Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = String(object.exchangeRate);
    } else {
      message.exchangeRate = "";
    }
    return message;
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.exchangeRate !== undefined &&
      (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = object.exchangeRate;
    } else {
      message.exchangeRate = "";
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
