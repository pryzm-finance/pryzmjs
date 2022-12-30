/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.icq";

export interface EventInterchainQueryRequested {
  queryId: string;
  chainId: string;
  connectionId: string;
  type: string;
  height: number;
  request: string;
}

export interface EventInterchainQueryResponded {
  queryId: string;
}

function createBaseEventInterchainQueryRequested(): EventInterchainQueryRequested {
  return { queryId: "", chainId: "", connectionId: "", type: "", height: 0, request: "" };
}

export const EventInterchainQueryRequested = {
  encode(message: EventInterchainQueryRequested, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== "") {
      writer.uint32(10).string(message.queryId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.height !== 0) {
      writer.uint32(40).int64(message.height);
    }
    if (message.request !== "") {
      writer.uint32(50).string(message.request);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInterchainQueryRequested {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInterchainQueryRequested();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.request = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventInterchainQueryRequested {
    return {
      queryId: isSet(object.queryId) ? String(object.queryId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      type: isSet(object.type) ? String(object.type) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
      request: isSet(object.request) ? String(object.request) : "",
    };
  },

  toJSON(message: EventInterchainQueryRequested): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = message.queryId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.type !== undefined && (obj.type = message.type);
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.request !== undefined && (obj.request = message.request);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventInterchainQueryRequested>, I>>(
    object: I,
  ): EventInterchainQueryRequested {
    const message = createBaseEventInterchainQueryRequested();
    message.queryId = object.queryId ?? "";
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.type = object.type ?? "";
    message.height = object.height ?? 0;
    message.request = object.request ?? "";
    return message;
  },
};

function createBaseEventInterchainQueryResponded(): EventInterchainQueryResponded {
  return { queryId: "" };
}

export const EventInterchainQueryResponded = {
  encode(message: EventInterchainQueryResponded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== "") {
      writer.uint32(10).string(message.queryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInterchainQueryResponded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInterchainQueryResponded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventInterchainQueryResponded {
    return { queryId: isSet(object.queryId) ? String(object.queryId) : "" };
  },

  toJSON(message: EventInterchainQueryResponded): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = message.queryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventInterchainQueryResponded>, I>>(
    object: I,
  ): EventInterchainQueryResponded {
    const message = createBaseEventInterchainQueryResponded();
    message.queryId = object.queryId ?? "";
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
