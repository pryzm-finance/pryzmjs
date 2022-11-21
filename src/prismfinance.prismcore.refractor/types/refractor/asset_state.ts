/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.refractor";

export interface AssetState {
  totalPAmount: string;
  lastSeenExchangeRate: string;
}

const baseAssetState: object = { totalPAmount: "", lastSeenExchangeRate: "" };

export const AssetState = {
  encode(message: AssetState, writer: Writer = Writer.create()): Writer {
    if (message.totalPAmount !== "") {
      writer.uint32(10).string(message.totalPAmount);
    }
    if (message.lastSeenExchangeRate !== "") {
      writer.uint32(18).string(message.lastSeenExchangeRate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AssetState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssetState } as AssetState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPAmount = reader.string();
          break;
        case 2:
          message.lastSeenExchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetState {
    const message = { ...baseAssetState } as AssetState;
    if (object.totalPAmount !== undefined && object.totalPAmount !== null) {
      message.totalPAmount = String(object.totalPAmount);
    } else {
      message.totalPAmount = "";
    }
    if (
      object.lastSeenExchangeRate !== undefined &&
      object.lastSeenExchangeRate !== null
    ) {
      message.lastSeenExchangeRate = String(object.lastSeenExchangeRate);
    } else {
      message.lastSeenExchangeRate = "";
    }
    return message;
  },

  toJSON(message: AssetState): unknown {
    const obj: any = {};
    message.totalPAmount !== undefined &&
      (obj.totalPAmount = message.totalPAmount);
    message.lastSeenExchangeRate !== undefined &&
      (obj.lastSeenExchangeRate = message.lastSeenExchangeRate);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetState>): AssetState {
    const message = { ...baseAssetState } as AssetState;
    if (object.totalPAmount !== undefined && object.totalPAmount !== null) {
      message.totalPAmount = object.totalPAmount;
    } else {
      message.totalPAmount = "";
    }
    if (
      object.lastSeenExchangeRate !== undefined &&
      object.lastSeenExchangeRate !== null
    ) {
      message.lastSeenExchangeRate = object.lastSeenExchangeRate;
    } else {
      message.lastSeenExchangeRate = "";
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
