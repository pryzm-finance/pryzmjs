/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.bridge.bridge";

export interface ConsensusStatus {
  connectionId: string;
  lastBlockId: number;
  /** milliseconds */
  lastBlockTime: number;
}

function createBaseConsensusStatus(): ConsensusStatus {
  return { connectionId: "", lastBlockId: 0, lastBlockTime: 0 };
}

export const ConsensusStatus = {
  encode(message: ConsensusStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.lastBlockId !== 0) {
      writer.uint32(16).uint64(message.lastBlockId);
    }
    if (message.lastBlockTime !== 0) {
      writer.uint32(24).uint64(message.lastBlockTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.lastBlockId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lastBlockTime = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusStatus {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      lastBlockId: isSet(object.lastBlockId) ? Number(object.lastBlockId) : 0,
      lastBlockTime: isSet(object.lastBlockTime) ? Number(object.lastBlockTime) : 0,
    };
  },

  toJSON(message: ConsensusStatus): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.lastBlockId !== undefined && (obj.lastBlockId = Math.round(message.lastBlockId));
    message.lastBlockTime !== undefined && (obj.lastBlockTime = Math.round(message.lastBlockTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsensusStatus>, I>>(object: I): ConsensusStatus {
    const message = createBaseConsensusStatus();
    message.connectionId = object.connectionId ?? "";
    message.lastBlockId = object.lastBlockId ?? 0;
    message.lastBlockTime = object.lastBlockTime ?? 0;
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
