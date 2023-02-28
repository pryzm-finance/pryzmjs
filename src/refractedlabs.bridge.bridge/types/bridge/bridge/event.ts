/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ActorType, actorTypeFromJSON, actorTypeToJSON } from "./actor";
import { CrossChainMessage } from "./cross_chain_message";
import { MessageExecutionResult, MessageMetadata } from "./message";

export const protobufPackage = "refractedlabs.bridge.bridge";

export interface EventMessageDispatched {
  hash: string;
  expirationTime: number;
  connectionId: string;
  chain: string;
  contractAddress: string;
  message: CrossChainMessage | undefined;
  sequenceId: number;
}

export interface EventDelegateWatchConsent {
  validator: string;
  watcher: string;
}

export interface EventDelegateRelayConsent {
  validator: string;
  relayer: string;
}

export interface EventDelegateProcessConsent {
  validator: string;
  processor: string;
}

export interface EventInvalidMessageExecutionResult {
  namespace: string;
  module: string;
  metadata: MessageMetadata | undefined;
  message: MessageExecutionResult | undefined;
  reason: string;
}

export interface EventMessageFromUnknownActor {
  actor: string;
  type: ActorType;
  connectionId: string;
  message: MessageExecutionResult | undefined;
}

function createBaseEventMessageDispatched(): EventMessageDispatched {
  return {
    hash: "",
    expirationTime: 0,
    connectionId: "",
    chain: "",
    contractAddress: "",
    message: undefined,
    sequenceId: 0,
  };
}

export const EventMessageDispatched = {
  encode(message: EventMessageDispatched, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.expirationTime !== 0) {
      writer.uint32(16).uint64(message.expirationTime);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.chain !== "") {
      writer.uint32(34).string(message.chain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    if (message.message !== undefined) {
      CrossChainMessage.encode(message.message, writer.uint32(50).fork()).ldelim();
    }
    if (message.sequenceId !== 0) {
      writer.uint32(56).uint64(message.sequenceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMessageDispatched {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMessageDispatched();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.expirationTime = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.chain = reader.string();
          break;
        case 5:
          message.contractAddress = reader.string();
          break;
        case 6:
          message.message = CrossChainMessage.decode(reader, reader.uint32());
          break;
        case 7:
          message.sequenceId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMessageDispatched {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      expirationTime: isSet(object.expirationTime) ? Number(object.expirationTime) : 0,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      message: isSet(object.message) ? CrossChainMessage.fromJSON(object.message) : undefined,
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
    };
  },

  toJSON(message: EventMessageDispatched): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.expirationTime !== undefined && (obj.expirationTime = Math.round(message.expirationTime));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.chain !== undefined && (obj.chain = message.chain);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.message !== undefined
      && (obj.message = message.message ? CrossChainMessage.toJSON(message.message) : undefined);
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMessageDispatched>, I>>(object: I): EventMessageDispatched {
    const message = createBaseEventMessageDispatched();
    message.hash = object.hash ?? "";
    message.expirationTime = object.expirationTime ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.chain = object.chain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.message = (object.message !== undefined && object.message !== null)
      ? CrossChainMessage.fromPartial(object.message)
      : undefined;
    message.sequenceId = object.sequenceId ?? 0;
    return message;
  },
};

function createBaseEventDelegateWatchConsent(): EventDelegateWatchConsent {
  return { validator: "", watcher: "" };
}

export const EventDelegateWatchConsent = {
  encode(message: EventDelegateWatchConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.watcher !== "") {
      writer.uint32(18).string(message.watcher);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegateWatchConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateWatchConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.watcher = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelegateWatchConsent {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      watcher: isSet(object.watcher) ? String(object.watcher) : "",
    };
  },

  toJSON(message: EventDelegateWatchConsent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.watcher !== undefined && (obj.watcher = message.watcher);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDelegateWatchConsent>, I>>(object: I): EventDelegateWatchConsent {
    const message = createBaseEventDelegateWatchConsent();
    message.validator = object.validator ?? "";
    message.watcher = object.watcher ?? "";
    return message;
  },
};

function createBaseEventDelegateRelayConsent(): EventDelegateRelayConsent {
  return { validator: "", relayer: "" };
}

export const EventDelegateRelayConsent = {
  encode(message: EventDelegateRelayConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegateRelayConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateRelayConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelegateRelayConsent {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
    };
  },

  toJSON(message: EventDelegateRelayConsent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDelegateRelayConsent>, I>>(object: I): EventDelegateRelayConsent {
    const message = createBaseEventDelegateRelayConsent();
    message.validator = object.validator ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

function createBaseEventDelegateProcessConsent(): EventDelegateProcessConsent {
  return { validator: "", processor: "" };
}

export const EventDelegateProcessConsent = {
  encode(message: EventDelegateProcessConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.processor !== "") {
      writer.uint32(18).string(message.processor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegateProcessConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateProcessConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.processor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelegateProcessConsent {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      processor: isSet(object.processor) ? String(object.processor) : "",
    };
  },

  toJSON(message: EventDelegateProcessConsent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.processor !== undefined && (obj.processor = message.processor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDelegateProcessConsent>, I>>(object: I): EventDelegateProcessConsent {
    const message = createBaseEventDelegateProcessConsent();
    message.validator = object.validator ?? "";
    message.processor = object.processor ?? "";
    return message;
  },
};

function createBaseEventInvalidMessageExecutionResult(): EventInvalidMessageExecutionResult {
  return { namespace: "", module: "", metadata: undefined, message: undefined, reason: "" };
}

export const EventInvalidMessageExecutionResult = {
  encode(message: EventInvalidMessageExecutionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.metadata !== undefined) {
      MessageMetadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.message !== undefined) {
      MessageExecutionResult.encode(message.message, writer.uint32(34).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInvalidMessageExecutionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInvalidMessageExecutionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.module = reader.string();
          break;
        case 3:
          message.metadata = MessageMetadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.message = MessageExecutionResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventInvalidMessageExecutionResult {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      module: isSet(object.module) ? String(object.module) : "",
      metadata: isSet(object.metadata) ? MessageMetadata.fromJSON(object.metadata) : undefined,
      message: isSet(object.message) ? MessageExecutionResult.fromJSON(object.message) : undefined,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: EventInvalidMessageExecutionResult): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.module !== undefined && (obj.module = message.module);
    message.metadata !== undefined
      && (obj.metadata = message.metadata ? MessageMetadata.toJSON(message.metadata) : undefined);
    message.message !== undefined
      && (obj.message = message.message ? MessageExecutionResult.toJSON(message.message) : undefined);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventInvalidMessageExecutionResult>, I>>(
    object: I,
  ): EventInvalidMessageExecutionResult {
    const message = createBaseEventInvalidMessageExecutionResult();
    message.namespace = object.namespace ?? "";
    message.module = object.module ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? MessageMetadata.fromPartial(object.metadata)
      : undefined;
    message.message = (object.message !== undefined && object.message !== null)
      ? MessageExecutionResult.fromPartial(object.message)
      : undefined;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseEventMessageFromUnknownActor(): EventMessageFromUnknownActor {
  return { actor: "", type: 0, connectionId: "", message: undefined };
}

export const EventMessageFromUnknownActor = {
  encode(message: EventMessageFromUnknownActor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actor !== "") {
      writer.uint32(10).string(message.actor);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.message !== undefined) {
      MessageExecutionResult.encode(message.message, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMessageFromUnknownActor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMessageFromUnknownActor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actor = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.message = MessageExecutionResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMessageFromUnknownActor {
    return {
      actor: isSet(object.actor) ? String(object.actor) : "",
      type: isSet(object.type) ? actorTypeFromJSON(object.type) : 0,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      message: isSet(object.message) ? MessageExecutionResult.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: EventMessageFromUnknownActor): unknown {
    const obj: any = {};
    message.actor !== undefined && (obj.actor = message.actor);
    message.type !== undefined && (obj.type = actorTypeToJSON(message.type));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.message !== undefined
      && (obj.message = message.message ? MessageExecutionResult.toJSON(message.message) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMessageFromUnknownActor>, I>>(object: I): EventMessageFromUnknownActor {
    const message = createBaseEventMessageFromUnknownActor();
    message.actor = object.actor ?? "";
    message.type = object.type ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.message = (object.message !== undefined && object.message !== null)
      ? MessageExecutionResult.fromPartial(object.message)
      : undefined;
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
