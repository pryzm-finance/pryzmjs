/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "prismfinance.prismcore.treasury";

/** FeeType enumerates the valid types for feeType. */
export enum ActionType {
  ACTION_TYPE_HOLD = 0,
  ACTION_TYPE_BUY_BACK = 1,
  ACTION_TYPE_BURN = 2,
  ACTION_TYPE_DISTRIBUTE_TO_STAKERS = 3,
  ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL = 4,
  UNRECOGNIZED = -1,
}

export function actionTypeFromJSON(object: any): ActionType {
  switch (object) {
    case 0:
    case "ACTION_TYPE_HOLD":
      return ActionType.ACTION_TYPE_HOLD;
    case 1:
    case "ACTION_TYPE_BUY_BACK":
      return ActionType.ACTION_TYPE_BUY_BACK;
    case 2:
    case "ACTION_TYPE_BURN":
      return ActionType.ACTION_TYPE_BURN;
    case 3:
    case "ACTION_TYPE_DISTRIBUTE_TO_STAKERS":
      return ActionType.ACTION_TYPE_DISTRIBUTE_TO_STAKERS;
    case 4:
    case "ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL":
      return ActionType.ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionType.UNRECOGNIZED;
  }
}

export function actionTypeToJSON(object: ActionType): string {
  switch (object) {
    case ActionType.ACTION_TYPE_HOLD:
      return "ACTION_TYPE_HOLD";
    case ActionType.ACTION_TYPE_BUY_BACK:
      return "ACTION_TYPE_BUY_BACK";
    case ActionType.ACTION_TYPE_BURN:
      return "ACTION_TYPE_BURN";
    case ActionType.ACTION_TYPE_DISTRIBUTE_TO_STAKERS:
      return "ACTION_TYPE_DISTRIBUTE_TO_STAKERS";
    case ActionType.ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL:
      return "ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL";
    case ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action {
  actionType: ActionType;
  occurrence: Date | undefined;
  duration: Duration | undefined;
  period: Duration | undefined;
}

function createBaseAction(): Action {
  return { actionType: 0, occurrence: undefined, duration: undefined, period: undefined };
}

export const Action = {
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    if (message.occurrence !== undefined) {
      Timestamp.encode(toTimestamp(message.occurrence), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionType = reader.int32() as any;
          break;
        case 2:
          message.occurrence = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Action {
    return {
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : 0,
      occurrence: isSet(object.occurrence) ? fromJsonTimestamp(object.occurrence) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined,
    };
  },

  toJSON(message: Action): unknown {
    const obj: any = {};
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    message.occurrence !== undefined && (obj.occurrence = message.occurrence.toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction();
    message.actionType = object.actionType ?? 0;
    message.occurrence = object.occurrence ?? undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.period = (object.period !== undefined && object.period !== null)
      ? Duration.fromPartial(object.period)
      : undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
