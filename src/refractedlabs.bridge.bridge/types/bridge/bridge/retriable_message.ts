/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CrossChainMessage } from "./cross_chain_message";

export const protobufPackage = "refractedlabs.bridge.bridge";

export interface RetriableMessage {
  msgHash: string;
  module: string;
  connectionId: string;
  expirationTime: number;
  message: CrossChainMessage | undefined;
  executing: boolean;
}

function createBaseRetriableMessage(): RetriableMessage {
  return { msgHash: "", module: "", connectionId: "", expirationTime: 0, message: undefined, executing: false };
}

export const RetriableMessage = {
  encode(message: RetriableMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgHash !== "") {
      writer.uint32(10).string(message.msgHash);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.expirationTime !== 0) {
      writer.uint32(32).uint64(message.expirationTime);
    }
    if (message.message !== undefined) {
      CrossChainMessage.encode(message.message, writer.uint32(42).fork()).ldelim();
    }
    if (message.executing === true) {
      writer.uint32(48).bool(message.executing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetriableMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetriableMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHash = reader.string();
          break;
        case 2:
          message.module = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.expirationTime = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.message = CrossChainMessage.decode(reader, reader.uint32());
          break;
        case 6:
          message.executing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetriableMessage {
    return {
      msgHash: isSet(object.msgHash) ? String(object.msgHash) : "",
      module: isSet(object.module) ? String(object.module) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      expirationTime: isSet(object.expirationTime) ? Number(object.expirationTime) : 0,
      message: isSet(object.message) ? CrossChainMessage.fromJSON(object.message) : undefined,
      executing: isSet(object.executing) ? Boolean(object.executing) : false,
    };
  },

  toJSON(message: RetriableMessage): unknown {
    const obj: any = {};
    message.msgHash !== undefined && (obj.msgHash = message.msgHash);
    message.module !== undefined && (obj.module = message.module);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.expirationTime !== undefined && (obj.expirationTime = Math.round(message.expirationTime));
    message.message !== undefined
      && (obj.message = message.message ? CrossChainMessage.toJSON(message.message) : undefined);
    message.executing !== undefined && (obj.executing = message.executing);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RetriableMessage>, I>>(object: I): RetriableMessage {
    const message = createBaseRetriableMessage();
    message.msgHash = object.msgHash ?? "";
    message.module = object.module ?? "";
    message.connectionId = object.connectionId ?? "";
    message.expirationTime = object.expirationTime ?? 0;
    message.message = (object.message !== undefined && object.message !== null)
      ? CrossChainMessage.fromPartial(object.message)
      : undefined;
    message.executing = object.executing ?? false;
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
