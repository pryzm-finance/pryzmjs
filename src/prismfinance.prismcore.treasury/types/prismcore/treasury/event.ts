/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.treasury";

export interface EventTreasuryCollectFee {
  feeType: string;
  amount: string;
  from: string;
}

export interface EventDistributeFeeToCommunity {
  feeCoins: string;
}

export interface EventSetAction {
  actionType: string;
  occurrence: string;
  duration: string;
  period: string;
}

export interface EventUpdateActionOccurrence {
  occurrence: string;
}

function createBaseEventTreasuryCollectFee(): EventTreasuryCollectFee {
  return { feeType: "", amount: "", from: "" };
}

export const EventTreasuryCollectFee = {
  encode(message: EventTreasuryCollectFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeType !== "") {
      writer.uint32(10).string(message.feeType);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTreasuryCollectFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTreasuryCollectFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeType = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventTreasuryCollectFee {
    return {
      feeType: isSet(object.feeType) ? String(object.feeType) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: EventTreasuryCollectFee): unknown {
    const obj: any = {};
    message.feeType !== undefined && (obj.feeType = message.feeType);
    message.amount !== undefined && (obj.amount = message.amount);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTreasuryCollectFee>, I>>(object: I): EventTreasuryCollectFee {
    const message = createBaseEventTreasuryCollectFee();
    message.feeType = object.feeType ?? "";
    message.amount = object.amount ?? "";
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseEventDistributeFeeToCommunity(): EventDistributeFeeToCommunity {
  return { feeCoins: "" };
}

export const EventDistributeFeeToCommunity = {
  encode(message: EventDistributeFeeToCommunity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeCoins !== "") {
      writer.uint32(10).string(message.feeCoins);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDistributeFeeToCommunity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDistributeFeeToCommunity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeCoins = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDistributeFeeToCommunity {
    return { feeCoins: isSet(object.feeCoins) ? String(object.feeCoins) : "" };
  },

  toJSON(message: EventDistributeFeeToCommunity): unknown {
    const obj: any = {};
    message.feeCoins !== undefined && (obj.feeCoins = message.feeCoins);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDistributeFeeToCommunity>, I>>(
    object: I,
  ): EventDistributeFeeToCommunity {
    const message = createBaseEventDistributeFeeToCommunity();
    message.feeCoins = object.feeCoins ?? "";
    return message;
  },
};

function createBaseEventSetAction(): EventSetAction {
  return { actionType: "", occurrence: "", duration: "", period: "" };
}

export const EventSetAction = {
  encode(message: EventSetAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionType !== "") {
      writer.uint32(10).string(message.actionType);
    }
    if (message.occurrence !== "") {
      writer.uint32(18).string(message.occurrence);
    }
    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }
    if (message.period !== "") {
      writer.uint32(34).string(message.period);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionType = reader.string();
          break;
        case 2:
          message.occurrence = reader.string();
          break;
        case 3:
          message.duration = reader.string();
          break;
        case 4:
          message.period = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetAction {
    return {
      actionType: isSet(object.actionType) ? String(object.actionType) : "",
      occurrence: isSet(object.occurrence) ? String(object.occurrence) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      period: isSet(object.period) ? String(object.period) : "",
    };
  },

  toJSON(message: EventSetAction): unknown {
    const obj: any = {};
    message.actionType !== undefined && (obj.actionType = message.actionType);
    message.occurrence !== undefined && (obj.occurrence = message.occurrence);
    message.duration !== undefined && (obj.duration = message.duration);
    message.period !== undefined && (obj.period = message.period);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetAction>, I>>(object: I): EventSetAction {
    const message = createBaseEventSetAction();
    message.actionType = object.actionType ?? "";
    message.occurrence = object.occurrence ?? "";
    message.duration = object.duration ?? "";
    message.period = object.period ?? "";
    return message;
  },
};

function createBaseEventUpdateActionOccurrence(): EventUpdateActionOccurrence {
  return { occurrence: "" };
}

export const EventUpdateActionOccurrence = {
  encode(message: EventUpdateActionOccurrence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.occurrence !== "") {
      writer.uint32(42).string(message.occurrence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateActionOccurrence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateActionOccurrence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.occurrence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateActionOccurrence {
    return { occurrence: isSet(object.occurrence) ? String(object.occurrence) : "" };
  },

  toJSON(message: EventUpdateActionOccurrence): unknown {
    const obj: any = {};
    message.occurrence !== undefined && (obj.occurrence = message.occurrence);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateActionOccurrence>, I>>(object: I): EventUpdateActionOccurrence {
    const message = createBaseEventUpdateActionOccurrence();
    message.occurrence = object.occurrence ?? "";
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
