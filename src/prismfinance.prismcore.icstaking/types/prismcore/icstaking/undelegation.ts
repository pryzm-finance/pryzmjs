/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "prismfinance.prismcore.icstaking";

/** Information about an undelegation in a specific epoch */
export interface Undelegation {
  hostChain: string;
  /** the number of epoch in which the delegation is requested */
  epoch: number;
  /**
   * the amount of cTokens requested to be undelegated.
   * This is the summation of c_amount for every channel FIXME remove if not used
   */
  cAmount: string;
  /** the exchange rate of cToken:Token in the undelegation epoch */
  exchangeRate: string;
  /** Whether the undelegation request is sent and has started on host chain */
  started: boolean;
  /** Whether the undelegation un-bonding period is passed and undelegated assets are available */
  completed: boolean;
  /** The time in which the undelegation will be completed and the assets are transferred to delegation account */
  completionTime:
    | Date
    | undefined;
  /** Whether the ibc transfer messages for sweeping assets to PRISM are sent successfully */
  swept: boolean;
  /** map of transfer channels to the state and amount of received undelegated assets */
  channelUndelegations: { [key: string]: ChannelUndelegation };
}

export interface Undelegation_ChannelUndelegationsEntry {
  key: string;
  value: ChannelUndelegation | undefined;
}

/** Information about the reception status and the redeemed undelegation amount */
export interface ChannelUndelegation {
  cAmount: string;
  /** Whether the undelegated amount is un-bonded and swept back to PRISM */
  received: boolean;
  /** the amount of assets received after the undelegation is completed */
  receivedAmount: string;
  /** received_amount / c_amount. This is used as the exchange rate of uToken:Token when users redeem their assets */
  redemptionRate: string;
  /**
   * the amount of assets that are received but not redeemed by users.
   * a received undelegation record is deleted when this amount is set to zero
   */
  unclaimedAmount: string;
}

function createBaseUndelegation(): Undelegation {
  return {
    hostChain: "",
    epoch: 0,
    cAmount: "",
    exchangeRate: "",
    started: false,
    completed: false,
    completionTime: undefined,
    swept: false,
    channelUndelegations: {},
  };
}

export const Undelegation = {
  encode(message: Undelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.epoch !== 0) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.cAmount !== "") {
      writer.uint32(26).string(message.cAmount);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(34).string(message.exchangeRate);
    }
    if (message.started === true) {
      writer.uint32(40).bool(message.started);
    }
    if (message.completed === true) {
      writer.uint32(48).bool(message.completed);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.swept === true) {
      writer.uint32(64).bool(message.swept);
    }
    Object.entries(message.channelUndelegations).forEach(([key, value]) => {
      Undelegation_ChannelUndelegationsEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Undelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.cAmount = reader.string();
          break;
        case 4:
          message.exchangeRate = reader.string();
          break;
        case 5:
          message.started = reader.bool();
          break;
        case 6:
          message.completed = reader.bool();
          break;
        case 7:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.swept = reader.bool();
          break;
        case 9:
          const entry9 = Undelegation_ChannelUndelegationsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.channelUndelegations[entry9.key] = entry9.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Undelegation {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      cAmount: isSet(object.cAmount) ? String(object.cAmount) : "",
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      started: isSet(object.started) ? Boolean(object.started) : false,
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      swept: isSet(object.swept) ? Boolean(object.swept) : false,
      channelUndelegations: isObject(object.channelUndelegations)
        ? Object.entries(object.channelUndelegations).reduce<{ [key: string]: ChannelUndelegation }>(
          (acc, [key, value]) => {
            acc[key] = ChannelUndelegation.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: Undelegation): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = Math.round(message.epoch));
    message.cAmount !== undefined && (obj.cAmount = message.cAmount);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.started !== undefined && (obj.started = message.started);
    message.completed !== undefined && (obj.completed = message.completed);
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.swept !== undefined && (obj.swept = message.swept);
    obj.channelUndelegations = {};
    if (message.channelUndelegations) {
      Object.entries(message.channelUndelegations).forEach(([k, v]) => {
        obj.channelUndelegations[k] = ChannelUndelegation.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Undelegation>, I>>(object: I): Undelegation {
    const message = createBaseUndelegation();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch ?? 0;
    message.cAmount = object.cAmount ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    message.started = object.started ?? false;
    message.completed = object.completed ?? false;
    message.completionTime = object.completionTime ?? undefined;
    message.swept = object.swept ?? false;
    message.channelUndelegations = Object.entries(object.channelUndelegations ?? {}).reduce<
      { [key: string]: ChannelUndelegation }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ChannelUndelegation.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseUndelegation_ChannelUndelegationsEntry(): Undelegation_ChannelUndelegationsEntry {
  return { key: "", value: undefined };
}

export const Undelegation_ChannelUndelegationsEntry = {
  encode(message: Undelegation_ChannelUndelegationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ChannelUndelegation.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Undelegation_ChannelUndelegationsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegation_ChannelUndelegationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ChannelUndelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Undelegation_ChannelUndelegationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ChannelUndelegation.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Undelegation_ChannelUndelegationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ChannelUndelegation.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Undelegation_ChannelUndelegationsEntry>, I>>(
    object: I,
  ): Undelegation_ChannelUndelegationsEntry {
    const message = createBaseUndelegation_ChannelUndelegationsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ChannelUndelegation.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseChannelUndelegation(): ChannelUndelegation {
  return { cAmount: "", received: false, receivedAmount: "", redemptionRate: "", unclaimedAmount: "" };
}

export const ChannelUndelegation = {
  encode(message: ChannelUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cAmount !== "") {
      writer.uint32(10).string(message.cAmount);
    }
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.receivedAmount !== "") {
      writer.uint32(26).string(message.receivedAmount);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(34).string(message.redemptionRate);
    }
    if (message.unclaimedAmount !== "") {
      writer.uint32(42).string(message.unclaimedAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmount = reader.string();
          break;
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.receivedAmount = reader.string();
          break;
        case 4:
          message.redemptionRate = reader.string();
          break;
        case 5:
          message.unclaimedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChannelUndelegation {
    return {
      cAmount: isSet(object.cAmount) ? String(object.cAmount) : "",
      received: isSet(object.received) ? Boolean(object.received) : false,
      receivedAmount: isSet(object.receivedAmount) ? String(object.receivedAmount) : "",
      redemptionRate: isSet(object.redemptionRate) ? String(object.redemptionRate) : "",
      unclaimedAmount: isSet(object.unclaimedAmount) ? String(object.unclaimedAmount) : "",
    };
  },

  toJSON(message: ChannelUndelegation): unknown {
    const obj: any = {};
    message.cAmount !== undefined && (obj.cAmount = message.cAmount);
    message.received !== undefined && (obj.received = message.received);
    message.receivedAmount !== undefined && (obj.receivedAmount = message.receivedAmount);
    message.redemptionRate !== undefined && (obj.redemptionRate = message.redemptionRate);
    message.unclaimedAmount !== undefined && (obj.unclaimedAmount = message.unclaimedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChannelUndelegation>, I>>(object: I): ChannelUndelegation {
    const message = createBaseChannelUndelegation();
    message.cAmount = object.cAmount ?? "";
    message.received = object.received ?? false;
    message.receivedAmount = object.receivedAmount ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.unclaimedAmount = object.unclaimedAmount ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
