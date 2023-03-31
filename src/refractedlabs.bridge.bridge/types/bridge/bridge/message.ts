/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CrossChainMessageType,
  crossChainMessageTypeFromJSON,
  crossChainMessageTypeToJSON,
} from "./cross_chain_message";

export const protobufPackage = "refractedlabs.bridge.bridge";

export enum MessageState {
  MESSAGE_STATE_EXECUTED = 0,
  MESSAGE_STATE_CANCELED = 1,
  MESSAGE_STATE_EXPIRED = 2,
  UNRECOGNIZED = -1,
}

export function messageStateFromJSON(object: any): MessageState {
  switch (object) {
    case 0:
    case "MESSAGE_STATE_EXECUTED":
      return MessageState.MESSAGE_STATE_EXECUTED;
    case 1:
    case "MESSAGE_STATE_CANCELED":
      return MessageState.MESSAGE_STATE_CANCELED;
    case 2:
    case "MESSAGE_STATE_EXPIRED":
      return MessageState.MESSAGE_STATE_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageState.UNRECOGNIZED;
  }
}

export function messageStateToJSON(object: MessageState): string {
  switch (object) {
    case MessageState.MESSAGE_STATE_EXECUTED:
      return "MESSAGE_STATE_EXECUTED";
    case MessageState.MESSAGE_STATE_CANCELED:
      return "MESSAGE_STATE_CANCELED";
    case MessageState.MESSAGE_STATE_EXPIRED:
      return "MESSAGE_STATE_EXPIRED";
    case MessageState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MessageMetadata {
  hash: string;
  type: CrossChainMessageType;
  /**
   * we rely on feeders for detecting expiry
   * other possible solution: 1) detect expiration in end-blocker 2) inform expiration to send-message caller 3) remove metadata
   * best solution: rely on feeders, since if majority is able to create such a situation, they can do even other bad stuff to Prism
   */
  expirationTime: number;
  connectionId: string;
  contractAddress: string;
  module: string;
  blockHeight: number;
  sequenceId: number;
}

export interface MessageExecutionResult {
  hash: string;
  state: MessageState;
  processor: string;
  executedBlockId: number;
  watcher: string;
  cancelledBlockId: number;
  relayer: string;
  enqueuedBlockId: number;
  result: string;
}

export interface MessageBatchResult {
  lastBlockId: number;
  messages: MessageExecutionResult[];
}

function createBaseMessageMetadata(): MessageMetadata {
  return {
    hash: "",
    type: 0,
    expirationTime: 0,
    connectionId: "",
    contractAddress: "",
    module: "",
    blockHeight: 0,
    sequenceId: 0,
  };
}

export const MessageMetadata = {
  encode(message: MessageMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.expirationTime !== 0) {
      writer.uint32(24).uint64(message.expirationTime);
    }
    if (message.connectionId !== "") {
      writer.uint32(34).string(message.connectionId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    if (message.module !== "") {
      writer.uint32(50).string(message.module);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(56).int64(message.blockHeight);
    }
    if (message.sequenceId !== 0) {
      writer.uint32(64).uint64(message.sequenceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.expirationTime = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.connectionId = reader.string();
          break;
        case 5:
          message.contractAddress = reader.string();
          break;
        case 6:
          message.module = reader.string();
          break;
        case 7:
          message.blockHeight = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.sequenceId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageMetadata {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      type: isSet(object.type) ? crossChainMessageTypeFromJSON(object.type) : 0,
      expirationTime: isSet(object.expirationTime) ? Number(object.expirationTime) : 0,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      module: isSet(object.module) ? String(object.module) : "",
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
    };
  },

  toJSON(message: MessageMetadata): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.type !== undefined && (obj.type = crossChainMessageTypeToJSON(message.type));
    message.expirationTime !== undefined && (obj.expirationTime = Math.round(message.expirationTime));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.module !== undefined && (obj.module = message.module);
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageMetadata>, I>>(object: I): MessageMetadata {
    const message = createBaseMessageMetadata();
    message.hash = object.hash ?? "";
    message.type = object.type ?? 0;
    message.expirationTime = object.expirationTime ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.module = object.module ?? "";
    message.blockHeight = object.blockHeight ?? 0;
    message.sequenceId = object.sequenceId ?? 0;
    return message;
  },
};

function createBaseMessageExecutionResult(): MessageExecutionResult {
  return {
    hash: "",
    state: 0,
    processor: "",
    executedBlockId: 0,
    watcher: "",
    cancelledBlockId: 0,
    relayer: "",
    enqueuedBlockId: 0,
    result: "",
  };
}

export const MessageExecutionResult = {
  encode(message: MessageExecutionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.processor !== "") {
      writer.uint32(26).string(message.processor);
    }
    if (message.executedBlockId !== 0) {
      writer.uint32(32).uint64(message.executedBlockId);
    }
    if (message.watcher !== "") {
      writer.uint32(42).string(message.watcher);
    }
    if (message.cancelledBlockId !== 0) {
      writer.uint32(48).uint64(message.cancelledBlockId);
    }
    if (message.relayer !== "") {
      writer.uint32(58).string(message.relayer);
    }
    if (message.enqueuedBlockId !== 0) {
      writer.uint32(64).uint64(message.enqueuedBlockId);
    }
    if (message.result !== "") {
      writer.uint32(74).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageExecutionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageExecutionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.processor = reader.string();
          break;
        case 4:
          message.executedBlockId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.watcher = reader.string();
          break;
        case 6:
          message.cancelledBlockId = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.relayer = reader.string();
          break;
        case 8:
          message.enqueuedBlockId = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageExecutionResult {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      state: isSet(object.state) ? messageStateFromJSON(object.state) : 0,
      processor: isSet(object.processor) ? String(object.processor) : "",
      executedBlockId: isSet(object.executedBlockId) ? Number(object.executedBlockId) : 0,
      watcher: isSet(object.watcher) ? String(object.watcher) : "",
      cancelledBlockId: isSet(object.cancelledBlockId) ? Number(object.cancelledBlockId) : 0,
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      enqueuedBlockId: isSet(object.enqueuedBlockId) ? Number(object.enqueuedBlockId) : 0,
      result: isSet(object.result) ? String(object.result) : "",
    };
  },

  toJSON(message: MessageExecutionResult): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.state !== undefined && (obj.state = messageStateToJSON(message.state));
    message.processor !== undefined && (obj.processor = message.processor);
    message.executedBlockId !== undefined && (obj.executedBlockId = Math.round(message.executedBlockId));
    message.watcher !== undefined && (obj.watcher = message.watcher);
    message.cancelledBlockId !== undefined && (obj.cancelledBlockId = Math.round(message.cancelledBlockId));
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.enqueuedBlockId !== undefined && (obj.enqueuedBlockId = Math.round(message.enqueuedBlockId));
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageExecutionResult>, I>>(object: I): MessageExecutionResult {
    const message = createBaseMessageExecutionResult();
    message.hash = object.hash ?? "";
    message.state = object.state ?? 0;
    message.processor = object.processor ?? "";
    message.executedBlockId = object.executedBlockId ?? 0;
    message.watcher = object.watcher ?? "";
    message.cancelledBlockId = object.cancelledBlockId ?? 0;
    message.relayer = object.relayer ?? "";
    message.enqueuedBlockId = object.enqueuedBlockId ?? 0;
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseMessageBatchResult(): MessageBatchResult {
  return { lastBlockId: 0, messages: [] };
}

export const MessageBatchResult = {
  encode(message: MessageBatchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastBlockId !== 0) {
      writer.uint32(8).uint64(message.lastBlockId);
    }
    for (const v of message.messages) {
      MessageExecutionResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageBatchResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageBatchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastBlockId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.messages.push(MessageExecutionResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageBatchResult {
    return {
      lastBlockId: isSet(object.lastBlockId) ? Number(object.lastBlockId) : 0,
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => MessageExecutionResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MessageBatchResult): unknown {
    const obj: any = {};
    message.lastBlockId !== undefined && (obj.lastBlockId = Math.round(message.lastBlockId));
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? MessageExecutionResult.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageBatchResult>, I>>(object: I): MessageBatchResult {
    const message = createBaseMessageBatchResult();
    message.lastBlockId = object.lastBlockId ?? 0;
    message.messages = object.messages?.map((e) => MessageExecutionResult.fromPartial(e)) || [];
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
