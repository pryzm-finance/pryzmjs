/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ActorType, actorTypeFromJSON, actorTypeToJSON } from "./actor";

export const protobufPackage = "refractedlabs.bridge.bridge";

export interface ActorMissCounter {
  actorType: ActorType;
  connectionId: string;
  actor: string;
  counter: number;
}

function createBaseActorMissCounter(): ActorMissCounter {
  return { actorType: 0, connectionId: "", actor: "", counter: 0 };
}

export const ActorMissCounter = {
  encode(message: ActorMissCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actorType !== 0) {
      writer.uint32(8).int32(message.actorType);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.actor !== "") {
      writer.uint32(26).string(message.actor);
    }
    if (message.counter !== 0) {
      writer.uint32(32).int64(message.counter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActorMissCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActorMissCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.int32() as any;
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.actor = reader.string();
          break;
        case 4:
          message.counter = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActorMissCounter {
    return {
      actorType: isSet(object.actorType) ? actorTypeFromJSON(object.actorType) : 0,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      actor: isSet(object.actor) ? String(object.actor) : "",
      counter: isSet(object.counter) ? Number(object.counter) : 0,
    };
  },

  toJSON(message: ActorMissCounter): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = actorTypeToJSON(message.actorType));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.actor !== undefined && (obj.actor = message.actor);
    message.counter !== undefined && (obj.counter = Math.round(message.counter));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActorMissCounter>, I>>(object: I): ActorMissCounter {
    const message = createBaseActorMissCounter();
    message.actorType = object.actorType ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.actor = object.actor ?? "";
    message.counter = object.counter ?? 0;
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
