/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.bridge.bridge";

export enum PingState {
  PING_STATE_EXECUTING = 0,
  PING_STATE_EXECUTED = 1,
  PING_STATE_CANCELED = 2,
  PING_STATE_EXPIRED = 3,
  UNRECOGNIZED = -1,
}

export function pingStateFromJSON(object: any): PingState {
  switch (object) {
    case 0:
    case "PING_STATE_EXECUTING":
      return PingState.PING_STATE_EXECUTING;
    case 1:
    case "PING_STATE_EXECUTED":
      return PingState.PING_STATE_EXECUTED;
    case 2:
    case "PING_STATE_CANCELED":
      return PingState.PING_STATE_CANCELED;
    case 3:
    case "PING_STATE_EXPIRED":
      return PingState.PING_STATE_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PingState.UNRECOGNIZED;
  }
}

export function pingStateToJSON(object: PingState): string {
  switch (object) {
    case PingState.PING_STATE_EXECUTING:
      return "PING_STATE_EXECUTING";
    case PingState.PING_STATE_EXECUTED:
      return "PING_STATE_EXECUTED";
    case PingState.PING_STATE_CANCELED:
      return "PING_STATE_CANCELED";
    case PingState.PING_STATE_EXPIRED:
      return "PING_STATE_EXPIRED";
    case PingState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Ping {
  msgHash: string;
  from: string;
  timestamp: number;
  state: PingState;
  processor: string;
  executedBlockId: number;
  /** milliseconds */
  executedBlockTime: number;
  watcher: string;
  cancelledBlockId: number;
  /** milliseconds */
  cancelledBlockTime: number;
  relayer: string;
  enqueuedBlockId: number;
  /** milliseconds */
  enqueuedBlockTime: number;
  /** milliseconds */
  expiredTime: number;
}

function createBasePing(): Ping {
  return {
    msgHash: "",
    from: "",
    timestamp: 0,
    state: 0,
    processor: "",
    executedBlockId: 0,
    executedBlockTime: 0,
    watcher: "",
    cancelledBlockId: 0,
    cancelledBlockTime: 0,
    relayer: "",
    enqueuedBlockId: 0,
    enqueuedBlockTime: 0,
    expiredTime: 0,
  };
}

export const Ping = {
  encode(message: Ping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgHash !== "") {
      writer.uint32(10).string(message.msgHash);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint64(message.timestamp);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.processor !== "") {
      writer.uint32(42).string(message.processor);
    }
    if (message.executedBlockId !== 0) {
      writer.uint32(48).uint64(message.executedBlockId);
    }
    if (message.executedBlockTime !== 0) {
      writer.uint32(56).uint64(message.executedBlockTime);
    }
    if (message.watcher !== "") {
      writer.uint32(66).string(message.watcher);
    }
    if (message.cancelledBlockId !== 0) {
      writer.uint32(72).uint64(message.cancelledBlockId);
    }
    if (message.cancelledBlockTime !== 0) {
      writer.uint32(80).uint64(message.cancelledBlockTime);
    }
    if (message.relayer !== "") {
      writer.uint32(90).string(message.relayer);
    }
    if (message.enqueuedBlockId !== 0) {
      writer.uint32(96).uint64(message.enqueuedBlockId);
    }
    if (message.enqueuedBlockTime !== 0) {
      writer.uint32(104).uint64(message.enqueuedBlockTime);
    }
    if (message.expiredTime !== 0) {
      writer.uint32(112).uint64(message.expiredTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHash = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.processor = reader.string();
          break;
        case 6:
          message.executedBlockId = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.executedBlockTime = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.watcher = reader.string();
          break;
        case 9:
          message.cancelledBlockId = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.cancelledBlockTime = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.relayer = reader.string();
          break;
        case 12:
          message.enqueuedBlockId = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.enqueuedBlockTime = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.expiredTime = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ping {
    return {
      msgHash: isSet(object.msgHash) ? String(object.msgHash) : "",
      from: isSet(object.from) ? String(object.from) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      state: isSet(object.state) ? pingStateFromJSON(object.state) : 0,
      processor: isSet(object.processor) ? String(object.processor) : "",
      executedBlockId: isSet(object.executedBlockId) ? Number(object.executedBlockId) : 0,
      executedBlockTime: isSet(object.executedBlockTime) ? Number(object.executedBlockTime) : 0,
      watcher: isSet(object.watcher) ? String(object.watcher) : "",
      cancelledBlockId: isSet(object.cancelledBlockId) ? Number(object.cancelledBlockId) : 0,
      cancelledBlockTime: isSet(object.cancelledBlockTime) ? Number(object.cancelledBlockTime) : 0,
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      enqueuedBlockId: isSet(object.enqueuedBlockId) ? Number(object.enqueuedBlockId) : 0,
      enqueuedBlockTime: isSet(object.enqueuedBlockTime) ? Number(object.enqueuedBlockTime) : 0,
      expiredTime: isSet(object.expiredTime) ? Number(object.expiredTime) : 0,
    };
  },

  toJSON(message: Ping): unknown {
    const obj: any = {};
    message.msgHash !== undefined && (obj.msgHash = message.msgHash);
    message.from !== undefined && (obj.from = message.from);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.state !== undefined && (obj.state = pingStateToJSON(message.state));
    message.processor !== undefined && (obj.processor = message.processor);
    message.executedBlockId !== undefined && (obj.executedBlockId = Math.round(message.executedBlockId));
    message.executedBlockTime !== undefined && (obj.executedBlockTime = Math.round(message.executedBlockTime));
    message.watcher !== undefined && (obj.watcher = message.watcher);
    message.cancelledBlockId !== undefined && (obj.cancelledBlockId = Math.round(message.cancelledBlockId));
    message.cancelledBlockTime !== undefined && (obj.cancelledBlockTime = Math.round(message.cancelledBlockTime));
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.enqueuedBlockId !== undefined && (obj.enqueuedBlockId = Math.round(message.enqueuedBlockId));
    message.enqueuedBlockTime !== undefined && (obj.enqueuedBlockTime = Math.round(message.enqueuedBlockTime));
    message.expiredTime !== undefined && (obj.expiredTime = Math.round(message.expiredTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ping>, I>>(object: I): Ping {
    const message = createBasePing();
    message.msgHash = object.msgHash ?? "";
    message.from = object.from ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.state = object.state ?? 0;
    message.processor = object.processor ?? "";
    message.executedBlockId = object.executedBlockId ?? 0;
    message.executedBlockTime = object.executedBlockTime ?? 0;
    message.watcher = object.watcher ?? "";
    message.cancelledBlockId = object.cancelledBlockId ?? 0;
    message.cancelledBlockTime = object.cancelledBlockTime ?? 0;
    message.relayer = object.relayer ?? "";
    message.enqueuedBlockId = object.enqueuedBlockId ?? 0;
    message.enqueuedBlockTime = object.enqueuedBlockTime ?? 0;
    message.expiredTime = object.expiredTime ?? 0;
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
