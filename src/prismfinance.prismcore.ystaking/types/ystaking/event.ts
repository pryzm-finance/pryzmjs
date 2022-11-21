/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.ystaking";

export interface EventYStakingBond {
  accountAddress: string;
  amount: string;
}

export interface EventYStakingUnbond {
  accountAddress: string;
  amount: string;
  accruedReward: string;
}

export interface EventYStakingExitPool {
  accountAddress: string;
  accruedReward: string;
}

export interface EventYStakingClaimReward {
  accountAddress: string;
  accruedReward: string;
}

export interface EventYStakingMaturityPoolDeactivated {
  burntBondedAmount: string;
  assetBaseDenom: string;
  maturitySymbol: string;
}

const baseEventYStakingBond: object = { accountAddress: "", amount: "" };

export const EventYStakingBond = {
  encode(message: EventYStakingBond, writer: Writer = Writer.create()): Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventYStakingBond {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventYStakingBond } as EventYStakingBond;
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
    const message = { ...baseEventYStakingBond } as EventYStakingBond;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = String(object.accountAddress);
    } else {
      message.accountAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: EventYStakingBond): unknown {
    const obj: any = {};
    message.accountAddress !== undefined &&
      (obj.accountAddress = message.accountAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventYStakingBond>): EventYStakingBond {
    const message = { ...baseEventYStakingBond } as EventYStakingBond;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = object.accountAddress;
    } else {
      message.accountAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseEventYStakingUnbond: object = {
  accountAddress: "",
  amount: "",
  accruedReward: "",
};

export const EventYStakingUnbond = {
  encode(
    message: EventYStakingUnbond,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.accruedReward !== "") {
      writer.uint32(26).string(message.accruedReward);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventYStakingUnbond {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventYStakingUnbond } as EventYStakingUnbond;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYStakingUnbond {
    const message = { ...baseEventYStakingUnbond } as EventYStakingUnbond;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = String(object.accountAddress);
    } else {
      message.accountAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = String(object.accruedReward);
    } else {
      message.accruedReward = "";
    }
    return message;
  },

  toJSON(message: EventYStakingUnbond): unknown {
    const obj: any = {};
    message.accountAddress !== undefined &&
      (obj.accountAddress = message.accountAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.accruedReward !== undefined &&
      (obj.accruedReward = message.accruedReward);
    return obj;
  },

  fromPartial(object: DeepPartial<EventYStakingUnbond>): EventYStakingUnbond {
    const message = { ...baseEventYStakingUnbond } as EventYStakingUnbond;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = object.accountAddress;
    } else {
      message.accountAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = object.accruedReward;
    } else {
      message.accruedReward = "";
    }
    return message;
  },
};

const baseEventYStakingExitPool: object = {
  accountAddress: "",
  accruedReward: "",
};

export const EventYStakingExitPool = {
  encode(
    message: EventYStakingExitPool,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accruedReward !== "") {
      writer.uint32(18).string(message.accruedReward);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventYStakingExitPool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventYStakingExitPool } as EventYStakingExitPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.accruedReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYStakingExitPool {
    const message = { ...baseEventYStakingExitPool } as EventYStakingExitPool;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = String(object.accountAddress);
    } else {
      message.accountAddress = "";
    }
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = String(object.accruedReward);
    } else {
      message.accruedReward = "";
    }
    return message;
  },

  toJSON(message: EventYStakingExitPool): unknown {
    const obj: any = {};
    message.accountAddress !== undefined &&
      (obj.accountAddress = message.accountAddress);
    message.accruedReward !== undefined &&
      (obj.accruedReward = message.accruedReward);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventYStakingExitPool>
  ): EventYStakingExitPool {
    const message = { ...baseEventYStakingExitPool } as EventYStakingExitPool;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = object.accountAddress;
    } else {
      message.accountAddress = "";
    }
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = object.accruedReward;
    } else {
      message.accruedReward = "";
    }
    return message;
  },
};

const baseEventYStakingClaimReward: object = {
  accountAddress: "",
  accruedReward: "",
};

export const EventYStakingClaimReward = {
  encode(
    message: EventYStakingClaimReward,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accruedReward !== "") {
      writer.uint32(18).string(message.accruedReward);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventYStakingClaimReward {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventYStakingClaimReward,
    } as EventYStakingClaimReward;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.accruedReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYStakingClaimReward {
    const message = {
      ...baseEventYStakingClaimReward,
    } as EventYStakingClaimReward;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = String(object.accountAddress);
    } else {
      message.accountAddress = "";
    }
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = String(object.accruedReward);
    } else {
      message.accruedReward = "";
    }
    return message;
  },

  toJSON(message: EventYStakingClaimReward): unknown {
    const obj: any = {};
    message.accountAddress !== undefined &&
      (obj.accountAddress = message.accountAddress);
    message.accruedReward !== undefined &&
      (obj.accruedReward = message.accruedReward);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventYStakingClaimReward>
  ): EventYStakingClaimReward {
    const message = {
      ...baseEventYStakingClaimReward,
    } as EventYStakingClaimReward;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = object.accountAddress;
    } else {
      message.accountAddress = "";
    }
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = object.accruedReward;
    } else {
      message.accruedReward = "";
    }
    return message;
  },
};

const baseEventYStakingMaturityPoolDeactivated: object = {
  burntBondedAmount: "",
  assetBaseDenom: "",
  maturitySymbol: "",
};

export const EventYStakingMaturityPoolDeactivated = {
  encode(
    message: EventYStakingMaturityPoolDeactivated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.burntBondedAmount !== "") {
      writer.uint32(10).string(message.burntBondedAmount);
    }
    if (message.assetBaseDenom !== "") {
      writer.uint32(18).string(message.assetBaseDenom);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventYStakingMaturityPoolDeactivated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventYStakingMaturityPoolDeactivated,
    } as EventYStakingMaturityPoolDeactivated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burntBondedAmount = reader.string();
          break;
        case 2:
          message.assetBaseDenom = reader.string();
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

  fromJSON(object: any): EventYStakingMaturityPoolDeactivated {
    const message = {
      ...baseEventYStakingMaturityPoolDeactivated,
    } as EventYStakingMaturityPoolDeactivated;
    if (
      object.burntBondedAmount !== undefined &&
      object.burntBondedAmount !== null
    ) {
      message.burntBondedAmount = String(object.burntBondedAmount);
    } else {
      message.burntBondedAmount = "";
    }
    if (object.assetBaseDenom !== undefined && object.assetBaseDenom !== null) {
      message.assetBaseDenom = String(object.assetBaseDenom);
    } else {
      message.assetBaseDenom = "";
    }
    if (object.maturitySymbol !== undefined && object.maturitySymbol !== null) {
      message.maturitySymbol = String(object.maturitySymbol);
    } else {
      message.maturitySymbol = "";
    }
    return message;
  },

  toJSON(message: EventYStakingMaturityPoolDeactivated): unknown {
    const obj: any = {};
    message.burntBondedAmount !== undefined &&
      (obj.burntBondedAmount = message.burntBondedAmount);
    message.assetBaseDenom !== undefined &&
      (obj.assetBaseDenom = message.assetBaseDenom);
    message.maturitySymbol !== undefined &&
      (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventYStakingMaturityPoolDeactivated>
  ): EventYStakingMaturityPoolDeactivated {
    const message = {
      ...baseEventYStakingMaturityPoolDeactivated,
    } as EventYStakingMaturityPoolDeactivated;
    if (
      object.burntBondedAmount !== undefined &&
      object.burntBondedAmount !== null
    ) {
      message.burntBondedAmount = object.burntBondedAmount;
    } else {
      message.burntBondedAmount = "";
    }
    if (object.assetBaseDenom !== undefined && object.assetBaseDenom !== null) {
      message.assetBaseDenom = object.assetBaseDenom;
    } else {
      message.assetBaseDenom = "";
    }
    if (object.maturitySymbol !== undefined && object.maturitySymbol !== null) {
      message.maturitySymbol = object.maturitySymbol;
    } else {
      message.maturitySymbol = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
