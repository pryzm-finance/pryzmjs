/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.refractor";

export interface AssetState {
  totalPAmount: string;
  lastSeenExchangeRate: string;
}

function createBaseAssetState(): AssetState {
  return { totalPAmount: "", lastSeenExchangeRate: "" };
}

export const AssetState = {
  encode(message: AssetState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalPAmount !== "") {
      writer.uint32(10).string(message.totalPAmount);
    }
    if (message.lastSeenExchangeRate !== "") {
      writer.uint32(18).string(message.lastSeenExchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetState();
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
    return {
      totalPAmount: isSet(object.totalPAmount) ? String(object.totalPAmount) : "",
      lastSeenExchangeRate: isSet(object.lastSeenExchangeRate) ? String(object.lastSeenExchangeRate) : "",
    };
  },

  toJSON(message: AssetState): unknown {
    const obj: any = {};
    message.totalPAmount !== undefined && (obj.totalPAmount = message.totalPAmount);
    message.lastSeenExchangeRate !== undefined && (obj.lastSeenExchangeRate = message.lastSeenExchangeRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetState>, I>>(object: I): AssetState {
    const message = createBaseAssetState();
    message.totalPAmount = object.totalPAmount ?? "";
    message.lastSeenExchangeRate = object.lastSeenExchangeRate ?? "";
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
