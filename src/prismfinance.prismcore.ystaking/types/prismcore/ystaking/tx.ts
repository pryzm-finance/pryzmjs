/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

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
  fee: Coin | undefined;
}

export interface MsgClaimReward {
  creator: string;
  denom: string;
}

export interface MsgClaimRewardResponse {
  accruedReward: Coin | undefined;
  fee: Coin | undefined;
}

export interface MsgExitPool {
  creator: string;
  denom: string;
}

export interface MsgExitPoolResponse {
  accruedReward: Coin | undefined;
  fee: Coin | undefined;
}

function createBaseMsgBond(): MsgBond {
  return { creator: "", amount: undefined };
}

export const MsgBond = {
  encode(message: MsgBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBond();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgBond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBond>, I>>(object: I): MsgBond {
    const message = createBaseMsgBond();
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgBondResponse(): MsgBondResponse {
  return { totalBondedAmount: undefined };
}

export const MsgBondResponse = {
  encode(message: MsgBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalBondedAmount !== undefined) {
      Coin.encode(message.totalBondedAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondResponse();
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
    return { totalBondedAmount: isSet(object.totalBondedAmount) ? Coin.fromJSON(object.totalBondedAmount) : undefined };
  },

  toJSON(message: MsgBondResponse): unknown {
    const obj: any = {};
    message.totalBondedAmount !== undefined
      && (obj.totalBondedAmount = message.totalBondedAmount ? Coin.toJSON(message.totalBondedAmount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBondResponse>, I>>(object: I): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    message.totalBondedAmount = (object.totalBondedAmount !== undefined && object.totalBondedAmount !== null)
      ? Coin.fromPartial(object.totalBondedAmount)
      : undefined;
    return message;
  },
};

function createBaseMsgUnbond(): MsgUnbond {
  return { creator: "", amount: undefined };
}

export const MsgUnbond = {
  encode(message: MsgUnbond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbond();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgUnbond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnbond>, I>>(object: I): MsgUnbond {
    const message = createBaseMsgUnbond();
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgUnbondResponse(): MsgUnbondResponse {
  return { remainderBondedAmount: undefined, accruedReward: undefined, fee: undefined };
}

export const MsgUnbondResponse = {
  encode(message: MsgUnbondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remainderBondedAmount !== undefined) {
      Coin.encode(message.remainderBondedAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainderBondedAmount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.accruedReward = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnbondResponse {
    return {
      remainderBondedAmount: isSet(object.remainderBondedAmount)
        ? Coin.fromJSON(object.remainderBondedAmount)
        : undefined,
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgUnbondResponse): unknown {
    const obj: any = {};
    message.remainderBondedAmount !== undefined && (obj.remainderBondedAmount = message.remainderBondedAmount
      ? Coin.toJSON(message.remainderBondedAmount)
      : undefined);
    message.accruedReward !== undefined
      && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnbondResponse>, I>>(object: I): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    message.remainderBondedAmount =
      (object.remainderBondedAmount !== undefined && object.remainderBondedAmount !== null)
        ? Coin.fromPartial(object.remainderBondedAmount)
        : undefined;
    message.accruedReward = (object.accruedReward !== undefined && object.accruedReward !== null)
      ? Coin.fromPartial(object.accruedReward)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseMsgClaimReward(): MsgClaimReward {
  return { creator: "", denom: "" };
}

export const MsgClaimReward = {
  encode(message: MsgClaimReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimReward();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgClaimReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimReward>, I>>(object: I): MsgClaimReward {
    const message = createBaseMsgClaimReward();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgClaimRewardResponse(): MsgClaimRewardResponse {
  return { accruedReward: undefined, fee: undefined };
}

export const MsgClaimRewardResponse = {
  encode(message: MsgClaimRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accruedReward = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimRewardResponse {
    return {
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgClaimRewardResponse): unknown {
    const obj: any = {};
    message.accruedReward !== undefined
      && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimRewardResponse>, I>>(object: I): MsgClaimRewardResponse {
    const message = createBaseMsgClaimRewardResponse();
    message.accruedReward = (object.accruedReward !== undefined && object.accruedReward !== null)
      ? Coin.fromPartial(object.accruedReward)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseMsgExitPool(): MsgExitPool {
  return { creator: "", denom: "" };
}

export const MsgExitPool = {
  encode(message: MsgExitPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPool();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgExitPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitPool>, I>>(object: I): MsgExitPool {
    const message = createBaseMsgExitPool();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgExitPoolResponse(): MsgExitPoolResponse {
  return { accruedReward: undefined, fee: undefined };
}

export const MsgExitPoolResponse = {
  encode(message: MsgExitPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accruedReward = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExitPoolResponse {
    return {
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgExitPoolResponse): unknown {
    const obj: any = {};
    message.accruedReward !== undefined
      && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitPoolResponse>, I>>(object: I): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    message.accruedReward = (object.accruedReward !== undefined && object.accruedReward !== null)
      ? Coin.fromPartial(object.accruedReward)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
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
    this.Bond = this.Bond.bind(this);
    this.Unbond = this.Unbond.bind(this);
    this.ClaimReward = this.ClaimReward.bind(this);
    this.ExitPool = this.ExitPool.bind(this);
  }
  Bond(request: MsgBond): Promise<MsgBondResponse> {
    const data = MsgBond.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Msg", "Bond", data);
    return promise.then((data) => MsgBondResponse.decode(new _m0.Reader(data)));
  }

  Unbond(request: MsgUnbond): Promise<MsgUnbondResponse> {
    const data = MsgUnbond.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Msg", "Unbond", data);
    return promise.then((data) => MsgUnbondResponse.decode(new _m0.Reader(data)));
  }

  ClaimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse> {
    const data = MsgClaimReward.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Msg", "ClaimReward", data);
    return promise.then((data) => MsgClaimRewardResponse.decode(new _m0.Reader(data)));
  }

  ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse> {
    const data = MsgExitPool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Msg", "ExitPool", data);
    return promise.then((data) => MsgExitPoolResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
