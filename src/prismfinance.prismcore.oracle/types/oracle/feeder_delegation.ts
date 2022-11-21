/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface FeederDelegation {
  validator: string;
  feeder: string;
}

const baseFeederDelegation: object = { validator: "", feeder: "" };

export const FeederDelegation = {
  encode(message: FeederDelegation, writer: Writer = Writer.create()): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FeederDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeederDelegation } as FeederDelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeederDelegation {
    const message = { ...baseFeederDelegation } as FeederDelegation;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    return message;
  },

  toJSON(message: FeederDelegation): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  fromPartial(object: DeepPartial<FeederDelegation>): FeederDelegation {
    const message = { ...baseFeederDelegation } as FeederDelegation;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
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
