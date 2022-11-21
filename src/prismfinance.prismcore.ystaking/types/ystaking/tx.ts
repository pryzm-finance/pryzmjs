/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "prismfinance.prismcore.ystaking";

export interface MsgBond {
  creator: string;
  amount: Coin | undefined;
}

export interface MsgBondResponse {
  totalBondedAmount: Coin | undefined;
}

export interface MsgUnbond {
  creator: string;
  amount: Coin | undefined;
}

export interface MsgUnbondResponse {
  remainderBondedAmount: Coin | undefined;
  accruedReward: Coin | undefined;
}

export interface MsgClaimReward {
  creator: string;
  denom: string;
}

export interface MsgClaimRewardResponse {
  accruedReward: Coin | undefined;
}

export interface MsgExitPool {
  creator: string;
  denom: string;
}

export interface MsgExitPoolResponse {
  accruedReward: Coin | undefined;
}

const baseMsgBond: object = { creator: "" };

export const MsgBond = {
  encode(message: MsgBond, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBond {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBond } as MsgBond;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBond {
    const message = { ...baseMsgBond } as MsgBond;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgBond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBond>): MsgBond {
    const message = { ...baseMsgBond } as MsgBond;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgBondResponse: object = {};

export const MsgBondResponse = {
  encode(message: MsgBondResponse, writer: Writer = Writer.create()): Writer {
    if (message.totalBondedAmount !== undefined) {
      Coin.encode(message.totalBondedAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBondResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBondResponse } as MsgBondResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBondedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBondResponse {
    const message = { ...baseMsgBondResponse } as MsgBondResponse;
    if (
      object.totalBondedAmount !== undefined &&
      object.totalBondedAmount !== null
    ) {
      message.totalBondedAmount = Coin.fromJSON(object.totalBondedAmount);
    } else {
      message.totalBondedAmount = undefined;
    }
    return message;
  },

  toJSON(message: MsgBondResponse): unknown {
    const obj: any = {};
    message.totalBondedAmount !== undefined &&
      (obj.totalBondedAmount = message.totalBondedAmount
        ? Coin.toJSON(message.totalBondedAmount)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBondResponse>): MsgBondResponse {
    const message = { ...baseMsgBondResponse } as MsgBondResponse;
    if (
      object.totalBondedAmount !== undefined &&
      object.totalBondedAmount !== null
    ) {
      message.totalBondedAmount = Coin.fromPartial(object.totalBondedAmount);
    } else {
      message.totalBondedAmount = undefined;
    }
    return message;
  },
};

const baseMsgUnbond: object = { creator: "" };

export const MsgUnbond = {
  encode(message: MsgUnbond, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnbond {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnbond } as MsgUnbond;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnbond {
    const message = { ...baseMsgUnbond } as MsgUnbond;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgUnbond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnbond>): MsgUnbond {
    const message = { ...baseMsgUnbond } as MsgUnbond;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgUnbondResponse: object = {};

export const MsgUnbondResponse = {
  encode(message: MsgUnbondResponse, writer: Writer = Writer.create()): Writer {
    if (message.remainderBondedAmount !== undefined) {
      Coin.encode(
        message.remainderBondedAmount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnbondResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnbondResponse } as MsgUnbondResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainderBondedAmount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.accruedReward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnbondResponse {
    const message = { ...baseMsgUnbondResponse } as MsgUnbondResponse;
    if (
      object.remainderBondedAmount !== undefined &&
      object.remainderBondedAmount !== null
    ) {
      message.remainderBondedAmount = Coin.fromJSON(
        object.remainderBondedAmount
      );
    } else {
      message.remainderBondedAmount = undefined;
    }
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = Coin.fromJSON(object.accruedReward);
    } else {
      message.accruedReward = undefined;
    }
    return message;
  },

  toJSON(message: MsgUnbondResponse): unknown {
    const obj: any = {};
    message.remainderBondedAmount !== undefined &&
      (obj.remainderBondedAmount = message.remainderBondedAmount
        ? Coin.toJSON(message.remainderBondedAmount)
        : undefined);
    message.accruedReward !== undefined &&
      (obj.accruedReward = message.accruedReward
        ? Coin.toJSON(message.accruedReward)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnbondResponse>): MsgUnbondResponse {
    const message = { ...baseMsgUnbondResponse } as MsgUnbondResponse;
    if (
      object.remainderBondedAmount !== undefined &&
      object.remainderBondedAmount !== null
    ) {
      message.remainderBondedAmount = Coin.fromPartial(
        object.remainderBondedAmount
      );
    } else {
      message.remainderBondedAmount = undefined;
    }
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = Coin.fromPartial(object.accruedReward);
    } else {
      message.accruedReward = undefined;
    }
    return message;
  },
};

const baseMsgClaimReward: object = { creator: "", denom: "" };

export const MsgClaimReward = {
  encode(message: MsgClaimReward, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimReward {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimReward {
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgClaimReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimReward>): MsgClaimReward {
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgClaimRewardResponse: object = {};

export const MsgClaimRewardResponse = {
  encode(
    message: MsgClaimRewardResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimRewardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accruedReward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimRewardResponse {
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = Coin.fromJSON(object.accruedReward);
    } else {
      message.accruedReward = undefined;
    }
    return message;
  },

  toJSON(message: MsgClaimRewardResponse): unknown {
    const obj: any = {};
    message.accruedReward !== undefined &&
      (obj.accruedReward = message.accruedReward
        ? Coin.toJSON(message.accruedReward)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgClaimRewardResponse>
  ): MsgClaimRewardResponse {
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = Coin.fromPartial(object.accruedReward);
    } else {
      message.accruedReward = undefined;
    }
    return message;
  },
};

const baseMsgExitPool: object = { creator: "", denom: "" };

export const MsgExitPool = {
  encode(message: MsgExitPool, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExitPool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExitPool } as MsgExitPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExitPool {
    const message = { ...baseMsgExitPool } as MsgExitPool;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgExitPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExitPool>): MsgExitPool {
    const message = { ...baseMsgExitPool } as MsgExitPool;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgExitPoolResponse: object = {};

export const MsgExitPoolResponse = {
  encode(
    message: MsgExitPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExitPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExitPoolResponse } as MsgExitPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accruedReward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExitPoolResponse {
    const message = { ...baseMsgExitPoolResponse } as MsgExitPoolResponse;
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = Coin.fromJSON(object.accruedReward);
    } else {
      message.accruedReward = undefined;
    }
    return message;
  },

  toJSON(message: MsgExitPoolResponse): unknown {
    const obj: any = {};
    message.accruedReward !== undefined &&
      (obj.accruedReward = message.accruedReward
        ? Coin.toJSON(message.accruedReward)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExitPoolResponse>): MsgExitPoolResponse {
    const message = { ...baseMsgExitPoolResponse } as MsgExitPoolResponse;
    if (object.accruedReward !== undefined && object.accruedReward !== null) {
      message.accruedReward = Coin.fromPartial(object.accruedReward);
    } else {
      message.accruedReward = undefined;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Bond(request: MsgBond): Promise<MsgBondResponse>;
  Unbond(request: MsgUnbond): Promise<MsgUnbondResponse>;
  ClaimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Bond(request: MsgBond): Promise<MsgBondResponse> {
    const data = MsgBond.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.ystaking.Msg",
      "Bond",
      data
    );
    return promise.then((data) => MsgBondResponse.decode(new Reader(data)));
  }

  Unbond(request: MsgUnbond): Promise<MsgUnbondResponse> {
    const data = MsgUnbond.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.ystaking.Msg",
      "Unbond",
      data
    );
    return promise.then((data) => MsgUnbondResponse.decode(new Reader(data)));
  }

  ClaimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse> {
    const data = MsgClaimReward.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.ystaking.Msg",
      "ClaimReward",
      data
    );
    return promise.then((data) =>
      MsgClaimRewardResponse.decode(new Reader(data))
    );
  }

  ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse> {
    const data = MsgExitPool.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.ystaking.Msg",
      "ExitPool",
      data
    );
    return promise.then((data) => MsgExitPoolResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
