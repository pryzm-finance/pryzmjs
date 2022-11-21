/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface MaturityLevel {
  active: boolean;
  asset: string;
  symbol: string;
}

const baseMaturityLevel: object = { active: false, asset: "", symbol: "" };

export const MaturityLevel = {
  encode(message: MaturityLevel, writer: Writer = Writer.create()): Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MaturityLevel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMaturityLevel } as MaturityLevel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MaturityLevel {
    const message = { ...baseMaturityLevel } as MaturityLevel;
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    return message;
  },

  toJSON(message: MaturityLevel): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.asset !== undefined && (obj.asset = message.asset);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(object: DeepPartial<MaturityLevel>): MaturityLevel {
    const message = { ...baseMaturityLevel } as MaturityLevel;
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
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
