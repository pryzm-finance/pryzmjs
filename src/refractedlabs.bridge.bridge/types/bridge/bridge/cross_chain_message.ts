/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.bridge.bridge";

export enum CrossChainMessageType {
  CROSS_CHAIN_MESSAGE_TYPE_DELIST = 0,
  CROSS_CHAIN_MESSAGE_TYPE_WHITELIST = 1,
  CROSS_CHAIN_MESSAGE_TYPE_PING = 2,
  UNRECOGNIZED = -1,
}

export function crossChainMessageTypeFromJSON(object: any): CrossChainMessageType {
  switch (object) {
    case 0:
    case "CROSS_CHAIN_MESSAGE_TYPE_DELIST":
      return CrossChainMessageType.CROSS_CHAIN_MESSAGE_TYPE_DELIST;
    case 1:
    case "CROSS_CHAIN_MESSAGE_TYPE_WHITELIST":
      return CrossChainMessageType.CROSS_CHAIN_MESSAGE_TYPE_WHITELIST;
    case 2:
    case "CROSS_CHAIN_MESSAGE_TYPE_PING":
      return CrossChainMessageType.CROSS_CHAIN_MESSAGE_TYPE_PING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CrossChainMessageType.UNRECOGNIZED;
  }
}

export function crossChainMessageTypeToJSON(object: CrossChainMessageType): string {
  switch (object) {
    case CrossChainMessageType.CROSS_CHAIN_MESSAGE_TYPE_DELIST:
      return "CROSS_CHAIN_MESSAGE_TYPE_DELIST";
    case CrossChainMessageType.CROSS_CHAIN_MESSAGE_TYPE_WHITELIST:
      return "CROSS_CHAIN_MESSAGE_TYPE_WHITELIST";
    case CrossChainMessageType.CROSS_CHAIN_MESSAGE_TYPE_PING:
      return "CROSS_CHAIN_MESSAGE_TYPE_PING";
    case CrossChainMessageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CrossChainMessage {
  type: CrossChainMessageType;
  body: string;
}

export interface PingCrossChainMessage {
  from: string;
  timestamp: number;
}

export interface PingCrossChainMessageResult {
}

export interface WhitelistActorsCrossChainMessage {
  relayers: string[];
  watchers: string[];
  processors: string[];
}

export interface WhitelistActorsCrossChainMessageResult {
  relayers: string[];
  watchers: string[];
  processors: string[];
}

export interface DelistActorsCrossChainMessage {
  relayers: string[];
  watchers: string[];
  processors: string[];
}

export interface DelistActorsCrossChainMessageResult {
  relayers: string[];
  watchers: string[];
  processors: string[];
}

function createBaseCrossChainMessage(): CrossChainMessage {
  return { type: 0, body: "" };
}

export const CrossChainMessage = {
  encode(message: CrossChainMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrossChainMessage {
    return {
      type: isSet(object.type) ? crossChainMessageTypeFromJSON(object.type) : 0,
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: CrossChainMessage): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = crossChainMessageTypeToJSON(message.type));
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainMessage>, I>>(object: I): CrossChainMessage {
    const message = createBaseCrossChainMessage();
    message.type = object.type ?? 0;
    message.body = object.body ?? "";
    return message;
  },
};

function createBasePingCrossChainMessage(): PingCrossChainMessage {
  return { from: "", timestamp: 0 };
}

export const PingCrossChainMessage = {
  encode(message: PingCrossChainMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingCrossChainMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingCrossChainMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PingCrossChainMessage {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: PingCrossChainMessage): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PingCrossChainMessage>, I>>(object: I): PingCrossChainMessage {
    const message = createBasePingCrossChainMessage();
    message.from = object.from ?? "";
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBasePingCrossChainMessageResult(): PingCrossChainMessageResult {
  return {};
}

export const PingCrossChainMessageResult = {
  encode(_: PingCrossChainMessageResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingCrossChainMessageResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingCrossChainMessageResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PingCrossChainMessageResult {
    return {};
  },

  toJSON(_: PingCrossChainMessageResult): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PingCrossChainMessageResult>, I>>(_: I): PingCrossChainMessageResult {
    const message = createBasePingCrossChainMessageResult();
    return message;
  },
};

function createBaseWhitelistActorsCrossChainMessage(): WhitelistActorsCrossChainMessage {
  return { relayers: [], watchers: [], processors: [] };
}

export const WhitelistActorsCrossChainMessage = {
  encode(message: WhitelistActorsCrossChainMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.watchers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.processors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistActorsCrossChainMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistActorsCrossChainMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayers.push(reader.string());
          break;
        case 2:
          message.watchers.push(reader.string());
          break;
        case 3:
          message.processors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistActorsCrossChainMessage {
    return {
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: WhitelistActorsCrossChainMessage): unknown {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistActorsCrossChainMessage>, I>>(
    object: I,
  ): WhitelistActorsCrossChainMessage {
    const message = createBaseWhitelistActorsCrossChainMessage();
    message.relayers = object.relayers?.map((e) => e) || [];
    message.watchers = object.watchers?.map((e) => e) || [];
    message.processors = object.processors?.map((e) => e) || [];
    return message;
  },
};

function createBaseWhitelistActorsCrossChainMessageResult(): WhitelistActorsCrossChainMessageResult {
  return { relayers: [], watchers: [], processors: [] };
}

export const WhitelistActorsCrossChainMessageResult = {
  encode(message: WhitelistActorsCrossChainMessageResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.watchers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.processors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistActorsCrossChainMessageResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistActorsCrossChainMessageResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayers.push(reader.string());
          break;
        case 2:
          message.watchers.push(reader.string());
          break;
        case 3:
          message.processors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistActorsCrossChainMessageResult {
    return {
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: WhitelistActorsCrossChainMessageResult): unknown {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistActorsCrossChainMessageResult>, I>>(
    object: I,
  ): WhitelistActorsCrossChainMessageResult {
    const message = createBaseWhitelistActorsCrossChainMessageResult();
    message.relayers = object.relayers?.map((e) => e) || [];
    message.watchers = object.watchers?.map((e) => e) || [];
    message.processors = object.processors?.map((e) => e) || [];
    return message;
  },
};

function createBaseDelistActorsCrossChainMessage(): DelistActorsCrossChainMessage {
  return { relayers: [], watchers: [], processors: [] };
}

export const DelistActorsCrossChainMessage = {
  encode(message: DelistActorsCrossChainMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.watchers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.processors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelistActorsCrossChainMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelistActorsCrossChainMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayers.push(reader.string());
          break;
        case 2:
          message.watchers.push(reader.string());
          break;
        case 3:
          message.processors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelistActorsCrossChainMessage {
    return {
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DelistActorsCrossChainMessage): unknown {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelistActorsCrossChainMessage>, I>>(
    object: I,
  ): DelistActorsCrossChainMessage {
    const message = createBaseDelistActorsCrossChainMessage();
    message.relayers = object.relayers?.map((e) => e) || [];
    message.watchers = object.watchers?.map((e) => e) || [];
    message.processors = object.processors?.map((e) => e) || [];
    return message;
  },
};

function createBaseDelistActorsCrossChainMessageResult(): DelistActorsCrossChainMessageResult {
  return { relayers: [], watchers: [], processors: [] };
}

export const DelistActorsCrossChainMessageResult = {
  encode(message: DelistActorsCrossChainMessageResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.watchers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.processors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelistActorsCrossChainMessageResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelistActorsCrossChainMessageResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayers.push(reader.string());
          break;
        case 2:
          message.watchers.push(reader.string());
          break;
        case 3:
          message.processors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelistActorsCrossChainMessageResult {
    return {
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DelistActorsCrossChainMessageResult): unknown {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelistActorsCrossChainMessageResult>, I>>(
    object: I,
  ): DelistActorsCrossChainMessageResult {
    const message = createBaseDelistActorsCrossChainMessageResult();
    message.relayers = object.relayers?.map((e) => e) || [];
    message.watchers = object.watchers?.map((e) => e) || [];
    message.processors = object.processors?.map((e) => e) || [];
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
