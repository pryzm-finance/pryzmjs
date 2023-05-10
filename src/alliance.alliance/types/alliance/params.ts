/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "alliance.alliance";

export interface Params {
  rewardDelayTime:
    | Duration
    | undefined;
  /** Time interval between consecutive applications of `take_rate` */
  takeRateClaimInterval:
    | Duration
    | undefined;
  /** Last application of `take_rate` on assets */
  lastTakeRateClaimTime: Date | undefined;
}

export interface RewardHistory {
  denom: string;
  index: string;
}

function createBaseParams(): Params {
  return { rewardDelayTime: undefined, takeRateClaimInterval: undefined, lastTakeRateClaimTime: undefined };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardDelayTime !== undefined) {
      Duration.encode(message.rewardDelayTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.takeRateClaimInterval !== undefined) {
      Duration.encode(message.takeRateClaimInterval, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastTakeRateClaimTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastTakeRateClaimTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardDelayTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.takeRateClaimInterval = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastTakeRateClaimTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      rewardDelayTime: isSet(object.rewardDelayTime) ? Duration.fromJSON(object.rewardDelayTime) : undefined,
      takeRateClaimInterval: isSet(object.takeRateClaimInterval)
        ? Duration.fromJSON(object.takeRateClaimInterval)
        : undefined,
      lastTakeRateClaimTime: isSet(object.lastTakeRateClaimTime)
        ? fromJsonTimestamp(object.lastTakeRateClaimTime)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rewardDelayTime !== undefined
      && (obj.rewardDelayTime = message.rewardDelayTime ? Duration.toJSON(message.rewardDelayTime) : undefined);
    message.takeRateClaimInterval !== undefined && (obj.takeRateClaimInterval = message.takeRateClaimInterval
      ? Duration.toJSON(message.takeRateClaimInterval)
      : undefined);
    message.lastTakeRateClaimTime !== undefined
      && (obj.lastTakeRateClaimTime = message.lastTakeRateClaimTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.rewardDelayTime = (object.rewardDelayTime !== undefined && object.rewardDelayTime !== null)
      ? Duration.fromPartial(object.rewardDelayTime)
      : undefined;
    message.takeRateClaimInterval =
      (object.takeRateClaimInterval !== undefined && object.takeRateClaimInterval !== null)
        ? Duration.fromPartial(object.takeRateClaimInterval)
        : undefined;
    message.lastTakeRateClaimTime = object.lastTakeRateClaimTime ?? undefined;
    return message;
  },
};

function createBaseRewardHistory(): RewardHistory {
  return { denom: "", index: "" };
}

export const RewardHistory = {
  encode(message: RewardHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardHistory {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: RewardHistory): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardHistory>, I>>(object: I): RewardHistory {
    const message = createBaseRewardHistory();
    message.denom = object.denom ?? "";
    message.index = object.index ?? "";
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
