/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  ActorState,
  actorStateFromJSON,
  actorStateToJSON,
  ActorType,
  actorTypeFromJSON,
  actorTypeToJSON,
} from "./actor";

export const protobufPackage = "refractedlabs.bridge.bridge";

export interface ActorDelegation {
  actorType: ActorType;
  connectionId: string;
  actor: string;
  validator: string;
  state: ActorState;
}

function createBaseActorDelegation(): ActorDelegation {
  return { actorType: 0, connectionId: "", actor: "", validator: "", state: 0 };
}

export const ActorDelegation = {
  encode(message: ActorDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actorType !== 0) {
      writer.uint32(8).int32(message.actorType);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.actor !== "") {
      writer.uint32(26).string(message.actor);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActorDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActorDelegation();
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
          message.validator = reader.string();
          break;
        case 5:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActorDelegation {
    return {
      actorType: isSet(object.actorType) ? actorTypeFromJSON(object.actorType) : 0,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      actor: isSet(object.actor) ? String(object.actor) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      state: isSet(object.state) ? actorStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: ActorDelegation): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = actorTypeToJSON(message.actorType));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.actor !== undefined && (obj.actor = message.actor);
    message.validator !== undefined && (obj.validator = message.validator);
    message.state !== undefined && (obj.state = actorStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActorDelegation>, I>>(object: I): ActorDelegation {
    const message = createBaseActorDelegation();
    message.actorType = object.actorType ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.actor = object.actor ?? "";
    message.validator = object.validator ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
