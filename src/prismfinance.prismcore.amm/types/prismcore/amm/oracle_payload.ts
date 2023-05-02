/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface HostChainHeight {
  /** the revision that the client is currently on */
  revisionNumber: number;
  /** the height within the given revision */
  revisionHeight: number;
}

/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  blockHeight: HostChainHeight | undefined;
  price: string;
}

function createBaseHostChainHeight(): HostChainHeight {
  return { revisionNumber: 0, revisionHeight: 0 };
}

export const HostChainHeight = {
  encode(message: HostChainHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revisionNumber !== 0) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== 0) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostChainHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.revisionHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostChainHeight {
    return {
      revisionNumber: isSet(object.revisionNumber) ? Number(object.revisionNumber) : 0,
      revisionHeight: isSet(object.revisionHeight) ? Number(object.revisionHeight) : 0,
    };
  },

  toJSON(message: HostChainHeight): unknown {
    const obj: any = {};
    message.revisionNumber !== undefined && (obj.revisionNumber = Math.round(message.revisionNumber));
    message.revisionHeight !== undefined && (obj.revisionHeight = Math.round(message.revisionHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostChainHeight>, I>>(object: I): HostChainHeight {
    const message = createBaseHostChainHeight();
    message.revisionNumber = object.revisionNumber ?? 0;
    message.revisionHeight = object.revisionHeight ?? 0;
    return message;
  },
};

function createBaseOraclePayload(): OraclePayload {
  return { blockHeight: undefined, price: "" };
}

export const OraclePayload = {
  encode(message: OraclePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeight !== undefined) {
      HostChainHeight.encode(message.blockHeight, writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = HostChainHeight.decode(reader, reader.uint32());
          break;
        case 2:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OraclePayload {
    return {
      blockHeight: isSet(object.blockHeight) ? HostChainHeight.fromJSON(object.blockHeight) : undefined,
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    message.blockHeight !== undefined
      && (obj.blockHeight = message.blockHeight ? HostChainHeight.toJSON(message.blockHeight) : undefined);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OraclePayload>, I>>(object: I): OraclePayload {
    const message = createBaseOraclePayload();
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? HostChainHeight.fromPartial(object.blockHeight)
      : undefined;
    message.price = object.price ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
