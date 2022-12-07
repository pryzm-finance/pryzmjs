/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.ystaking";

export interface AssetPoolState {
  bondedAmount: string;
  globalIndex: string;
}

function createBaseAssetPoolState(): AssetPoolState {
  return { bondedAmount: "", globalIndex: "" };
}

export const AssetPoolState = {
  encode(message: AssetPoolState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondedAmount !== "") {
      writer.uint32(10).string(message.bondedAmount);
    }
    if (message.globalIndex !== "") {
      writer.uint32(18).string(message.globalIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetPoolState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetPoolState();
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
    return {
      bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : "",
      globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : "",
    };
  },

  toJSON(message: AssetPoolState): unknown {
    const obj: any = {};
    message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
    message.globalIndex !== undefined && (obj.globalIndex = message.globalIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetPoolState>, I>>(object: I): AssetPoolState {
    const message = createBaseAssetPoolState();
    message.bondedAmount = object.bondedAmount ?? "";
    message.globalIndex = object.globalIndex ?? "";
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
