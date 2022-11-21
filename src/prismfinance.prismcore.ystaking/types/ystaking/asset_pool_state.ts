/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.ystaking";

export interface AssetPoolState {
  bondedAmount: string;
  globalIndex: string;
}

const baseAssetPoolState: object = { bondedAmount: "", globalIndex: "" };

export const AssetPoolState = {
  encode(message: AssetPoolState, writer: Writer = Writer.create()): Writer {
    if (message.bondedAmount !== "") {
      writer.uint32(10).string(message.bondedAmount);
    }
    if (message.globalIndex !== "") {
      writer.uint32(18).string(message.globalIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AssetPoolState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssetPoolState } as AssetPoolState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedAmount = reader.string();
          break;
        case 2:
          message.globalIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetPoolState {
    const message = { ...baseAssetPoolState } as AssetPoolState;
    if (object.bondedAmount !== undefined && object.bondedAmount !== null) {
      message.bondedAmount = String(object.bondedAmount);
    } else {
      message.bondedAmount = "";
    }
    if (object.globalIndex !== undefined && object.globalIndex !== null) {
      message.globalIndex = String(object.globalIndex);
    } else {
      message.globalIndex = "";
    }
    return message;
  },

  toJSON(message: AssetPoolState): unknown {
    const obj: any = {};
    message.bondedAmount !== undefined &&
      (obj.bondedAmount = message.bondedAmount);
    message.globalIndex !== undefined &&
      (obj.globalIndex = message.globalIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetPoolState>): AssetPoolState {
    const message = { ...baseAssetPoolState } as AssetPoolState;
    if (object.bondedAmount !== undefined && object.bondedAmount !== null) {
      message.bondedAmount = object.bondedAmount;
    } else {
      message.bondedAmount = "";
    }
    if (object.globalIndex !== undefined && object.globalIndex !== null) {
      message.globalIndex = object.globalIndex;
    } else {
      message.globalIndex = "";
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
