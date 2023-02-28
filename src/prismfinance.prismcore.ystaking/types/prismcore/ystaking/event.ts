/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.ystaking";

export interface EventYStakingBond {
  accountAddress: string;
  amount: string;
}

export interface EventYStakingUnbond {
  accountAddress: string;
  amount: string;
  accruedReward: string;
  fee: string;
}

export interface EventYStakingExitPool {
  accountAddress: string;
  accruedReward: string;
  fee: string;
}

export interface EventYStakingClaimReward {
  accountAddress: string;
  accruedReward: string;
  fee: string;
}

export interface EventDeactivateYStakingMaturityPool {
  burntBondedAmount: string;
  assetId: string;
  maturitySymbol: string;
}

function createBaseEventYStakingBond(): EventYStakingBond {
  return { accountAddress: "", amount: "" };
}

export const EventYStakingBond = {
  encode(message: EventYStakingBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventYStakingBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYStakingBond {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventYStakingBond): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventYStakingBond>, I>>(object: I): EventYStakingBond {
    const message = createBaseEventYStakingBond();
    message.accountAddress = object.accountAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventYStakingUnbond(): EventYStakingUnbond {
  return { accountAddress: "", amount: "", accruedReward: "", fee: "" };
}

export const EventYStakingUnbond = {
  encode(message: EventYStakingUnbond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.accruedReward !== "") {
      writer.uint32(26).string(message.accruedReward);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventYStakingUnbond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingUnbond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.accruedReward = reader.string();
          break;
        case 4:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYStakingUnbond {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      accruedReward: isSet(object.accruedReward) ? String(object.accruedReward) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
    };
  },

  toJSON(message: EventYStakingUnbond): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventYStakingUnbond>, I>>(object: I): EventYStakingUnbond {
    const message = createBaseEventYStakingUnbond();
    message.accountAddress = object.accountAddress ?? "";
    message.amount = object.amount ?? "";
    message.accruedReward = object.accruedReward ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

function createBaseEventYStakingExitPool(): EventYStakingExitPool {
  return { accountAddress: "", accruedReward: "", fee: "" };
}

export const EventYStakingExitPool = {
  encode(message: EventYStakingExitPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accruedReward !== "") {
      writer.uint32(18).string(message.accruedReward);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventYStakingExitPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.accruedReward = reader.string();
          break;
        case 4:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYStakingExitPool {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      accruedReward: isSet(object.accruedReward) ? String(object.accruedReward) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
    };
  },

  toJSON(message: EventYStakingExitPool): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventYStakingExitPool>, I>>(object: I): EventYStakingExitPool {
    const message = createBaseEventYStakingExitPool();
    message.accountAddress = object.accountAddress ?? "";
    message.accruedReward = object.accruedReward ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

function createBaseEventYStakingClaimReward(): EventYStakingClaimReward {
  return { accountAddress: "", accruedReward: "", fee: "" };
}

export const EventYStakingClaimReward = {
  encode(message: EventYStakingClaimReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accruedReward !== "") {
      writer.uint32(18).string(message.accruedReward);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventYStakingClaimReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingClaimReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.accruedReward = reader.string();
          break;
        case 4:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYStakingClaimReward {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      accruedReward: isSet(object.accruedReward) ? String(object.accruedReward) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
    };
  },

  toJSON(message: EventYStakingClaimReward): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventYStakingClaimReward>, I>>(object: I): EventYStakingClaimReward {
    const message = createBaseEventYStakingClaimReward();
    message.accountAddress = object.accountAddress ?? "";
    message.accruedReward = object.accruedReward ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

function createBaseEventDeactivateYStakingMaturityPool(): EventDeactivateYStakingMaturityPool {
  return { burntBondedAmount: "", assetId: "", maturitySymbol: "" };
}

export const EventDeactivateYStakingMaturityPool = {
  encode(message: EventDeactivateYStakingMaturityPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burntBondedAmount !== "") {
      writer.uint32(10).string(message.burntBondedAmount);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeactivateYStakingMaturityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeactivateYStakingMaturityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burntBondedAmount = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.maturitySymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeactivateYStakingMaturityPool {
    return {
      burntBondedAmount: isSet(object.burntBondedAmount) ? String(object.burntBondedAmount) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : "",
    };
  },

  toJSON(message: EventDeactivateYStakingMaturityPool): unknown {
    const obj: any = {};
    message.burntBondedAmount !== undefined && (obj.burntBondedAmount = message.burntBondedAmount);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeactivateYStakingMaturityPool>, I>>(
    object: I,
  ): EventDeactivateYStakingMaturityPool {
    const message = createBaseEventDeactivateYStakingMaturityPool();
    message.burntBondedAmount = object.burntBondedAmount ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
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
