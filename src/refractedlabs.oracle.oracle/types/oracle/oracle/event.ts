/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NamespaceVote } from "./namespace_vote";

export const protobufPackage = "refractedlabs.oracle.oracle";

export interface EventDelegateFeedConsent {
  validator: string;
  feeder: string;
}

export interface EventOraclePreVote {
  validator: string;
  feeder: string;
}

export interface EventOracleVote {
  validator: string;
  feeder: string;
  namespaceVotes: NamespaceVote[];
}

export interface EventVoteIntervalEnds {
  timeMillis: number;
  blockHeight: number;
  votePeriod: number;
}

export interface EventInvalidMajorityVotePayload {
  namespace: string;
  module: string;
  majorityVotePayload: string;
  error: string;
}

function createBaseEventDelegateFeedConsent(): EventDelegateFeedConsent {
  return { validator: "", feeder: "" };
}

export const EventDelegateFeedConsent = {
  encode(message: EventDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegateFeedConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelegateFeedConsent {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
    };
  },

  toJSON(message: EventDelegateFeedConsent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDelegateFeedConsent>, I>>(object: I): EventDelegateFeedConsent {
    const message = createBaseEventDelegateFeedConsent();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  },
};

function createBaseEventOraclePreVote(): EventOraclePreVote {
  return { validator: "", feeder: "" };
}

export const EventOraclePreVote = {
  encode(message: EventOraclePreVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventOraclePreVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOraclePreVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventOraclePreVote {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
    };
  },

  toJSON(message: EventOraclePreVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventOraclePreVote>, I>>(object: I): EventOraclePreVote {
    const message = createBaseEventOraclePreVote();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  },
};

function createBaseEventOracleVote(): EventOracleVote {
  return { validator: "", feeder: "", namespaceVotes: [] };
}

export const EventOracleVote = {
  encode(message: EventOracleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    for (const v of message.namespaceVotes) {
      NamespaceVote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventOracleVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOracleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        case 3:
          message.namespaceVotes.push(NamespaceVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventOracleVote {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      namespaceVotes: Array.isArray(object?.namespaceVotes)
        ? object.namespaceVotes.map((e: any) => NamespaceVote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventOracleVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    if (message.namespaceVotes) {
      obj.namespaceVotes = message.namespaceVotes.map((e) => e ? NamespaceVote.toJSON(e) : undefined);
    } else {
      obj.namespaceVotes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventOracleVote>, I>>(object: I): EventOracleVote {
    const message = createBaseEventOracleVote();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    message.namespaceVotes = object.namespaceVotes?.map((e) => NamespaceVote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventVoteIntervalEnds(): EventVoteIntervalEnds {
  return { timeMillis: 0, blockHeight: 0, votePeriod: 0 };
}

export const EventVoteIntervalEnds = {
  encode(message: EventVoteIntervalEnds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeMillis !== 0) {
      writer.uint32(8).int64(message.timeMillis);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).int64(message.blockHeight);
    }
    if (message.votePeriod !== 0) {
      writer.uint32(24).int64(message.votePeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVoteIntervalEnds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteIntervalEnds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeMillis = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.votePeriod = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVoteIntervalEnds {
    return {
      timeMillis: isSet(object.timeMillis) ? Number(object.timeMillis) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      votePeriod: isSet(object.votePeriod) ? Number(object.votePeriod) : 0,
    };
  },

  toJSON(message: EventVoteIntervalEnds): unknown {
    const obj: any = {};
    message.timeMillis !== undefined && (obj.timeMillis = Math.round(message.timeMillis));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.votePeriod !== undefined && (obj.votePeriod = Math.round(message.votePeriod));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVoteIntervalEnds>, I>>(object: I): EventVoteIntervalEnds {
    const message = createBaseEventVoteIntervalEnds();
    message.timeMillis = object.timeMillis ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    message.votePeriod = object.votePeriod ?? 0;
    return message;
  },
};

function createBaseEventInvalidMajorityVotePayload(): EventInvalidMajorityVotePayload {
  return { namespace: "", module: "", majorityVotePayload: "", error: "" };
}

export const EventInvalidMajorityVotePayload = {
  encode(message: EventInvalidMajorityVotePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.majorityVotePayload !== "") {
      writer.uint32(26).string(message.majorityVotePayload);
    }
    if (message.error !== "") {
      writer.uint32(34).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInvalidMajorityVotePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInvalidMajorityVotePayload();
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
          message.majorityVotePayload = reader.string();
          break;
        case 4:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventInvalidMajorityVotePayload {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      module: isSet(object.module) ? String(object.module) : "",
      majorityVotePayload: isSet(object.majorityVotePayload) ? String(object.majorityVotePayload) : "",
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: EventInvalidMajorityVotePayload): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.module !== undefined && (obj.module = message.module);
    message.majorityVotePayload !== undefined && (obj.majorityVotePayload = message.majorityVotePayload);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventInvalidMajorityVotePayload>, I>>(
    object: I,
  ): EventInvalidMajorityVotePayload {
    const message = createBaseEventInvalidMajorityVotePayload();
    message.namespace = object.namespace ?? "";
    message.module = object.module ?? "";
    message.majorityVotePayload = object.majorityVotePayload ?? "";
    message.error = object.error ?? "";
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
