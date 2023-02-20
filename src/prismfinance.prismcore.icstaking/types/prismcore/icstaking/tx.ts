/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { HostChain, Validator } from "./host_chain";
import { Params, StakingParams } from "./params";

export const protobufPackage = "prismfinance.prismcore.icstaking";

export enum ICAType {
  DELEGATION = 0,
  WITHDRAW = 1,
  FEE = 2,
  UNRECOGNIZED = -1,
}

export function iCATypeFromJSON(object: any): ICAType {
  switch (object) {
    case 0:
    case "DELEGATION":
      return ICAType.DELEGATION;
    case 1:
    case "WITHDRAW":
      return ICAType.WITHDRAW;
    case 2:
    case "FEE":
      return ICAType.FEE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ICAType.UNRECOGNIZED;
  }
}

export function iCATypeToJSON(object: ICAType): string {
  switch (object) {
    case ICAType.DELEGATION:
      return "DELEGATION";
    case ICAType.WITHDRAW:
      return "WITHDRAW";
    case ICAType.FEE:
      return "FEE";
    case ICAType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MsgUpdateParams {
  authority: string;
  params: Params | undefined;
}

export interface MsgUpdateParamsResponse {
}

export interface MsgRegisterHostChain {
  authority: string;
  hostChain: HostChain | undefined;
}

export interface MsgRegisterHostChainResponse {
}

export interface MsgUpdateHostChain {
  authority: string;
  connectionId: string;
  validators: Validator[];
  params: StakingParams | undefined;
}

export interface MsgUpdateHostChainResponse {
}

export interface MsgStake {
  creator: string;
  /** the index key for the HostChain which is the connection id */
  hostChain: string;
  amount: string;
}

export interface MsgStakeResponse {
  cAmount: Coin | undefined;
  fee: Coin | undefined;
}

export interface MsgUnstake {
  creator: string;
  /** the index key for the HostChain which is the connection id */
  hostChain: string;
  cAmount: string;
}

export interface MsgUnstakeResponse {
  uAmount: Coin | undefined;
}

export interface MsgRedeemUnstaked {
  creator: string;
  hostChain: string;
  uAmount: string;
  epoch: number;
}

export interface MsgRedeemUnstakedResponse {
  amount: Coin | undefined;
  fee: Coin | undefined;
}

export interface MsgInstantUnstake {
  creator: string;
  hostChain: string;
  minCAmount: string;
  maxCAmount: string;
}

export interface MsgInstantUnstakeResponse {
  amount: Coin | undefined;
  fee: Coin | undefined;
}

export interface MsgRebalanceDelegations {
  creator: string;
  hostChain: string;
}

export interface MsgRebalanceDelegationsResponse {
}

export interface MsgRedeemInterchainAccount {
  creator: string;
  hostChain: string;
  accountType: ICAType;
}

export interface MsgRedeemInterchainAccountResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgRegisterHostChain(): MsgRegisterHostChain {
  return { authority: "", hostChain: undefined };
}

export const MsgRegisterHostChain = {
  encode(message: MsgRegisterHostChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hostChain = HostChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterHostChain {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      hostChain: isSet(object.hostChain) ? HostChain.fromJSON(object.hostChain) : undefined,
    };
  },

  toJSON(message: MsgRegisterHostChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.hostChain !== undefined
      && (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterHostChain>, I>>(object: I): MsgRegisterHostChain {
    const message = createBaseMsgRegisterHostChain();
    message.authority = object.authority ?? "";
    message.hostChain = (object.hostChain !== undefined && object.hostChain !== null)
      ? HostChain.fromPartial(object.hostChain)
      : undefined;
    return message;
  },
};

function createBaseMsgRegisterHostChainResponse(): MsgRegisterHostChainResponse {
  return {};
}

export const MsgRegisterHostChainResponse = {
  encode(_: MsgRegisterHostChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterHostChainResponse {
    return {};
  },

  toJSON(_: MsgRegisterHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterHostChainResponse>, I>>(_: I): MsgRegisterHostChainResponse {
    const message = createBaseMsgRegisterHostChainResponse();
    return message;
  },
};

function createBaseMsgUpdateHostChain(): MsgUpdateHostChain {
  return { authority: "", connectionId: "", validators: [], params: undefined };
}

export const MsgUpdateHostChain = {
  encode(message: MsgUpdateHostChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      StakingParams.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHostChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = StakingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateHostChain {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      params: isSet(object.params) ? StakingParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateHostChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.params !== undefined && (obj.params = message.params ? StakingParams.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateHostChain>, I>>(object: I): MsgUpdateHostChain {
    const message = createBaseMsgUpdateHostChain();
    message.authority = object.authority ?? "";
    message.connectionId = object.connectionId ?? "";
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? StakingParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateHostChainResponse(): MsgUpdateHostChainResponse {
  return {};
}

export const MsgUpdateHostChainResponse = {
  encode(_: MsgUpdateHostChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHostChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateHostChainResponse {
    return {};
  },

  toJSON(_: MsgUpdateHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateHostChainResponse>, I>>(_: I): MsgUpdateHostChainResponse {
    const message = createBaseMsgUpdateHostChainResponse();
    return message;
  },
};

function createBaseMsgStake(): MsgStake {
  return { creator: "", hostChain: "", amount: "" };
}

export const MsgStake = {
  encode(message: MsgStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStake>, I>>(object: I): MsgStake {
    const message = createBaseMsgStake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgStakeResponse(): MsgStakeResponse {
  return { cAmount: undefined, fee: undefined };
}

export const MsgStakeResponse = {
  encode(message: MsgStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmount = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgStakeResponse {
    return {
      cAmount: isSet(object.cAmount) ? Coin.fromJSON(object.cAmount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgStakeResponse): unknown {
    const obj: any = {};
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakeResponse>, I>>(object: I): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.cAmount = (object.cAmount !== undefined && object.cAmount !== null)
      ? Coin.fromPartial(object.cAmount)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseMsgUnstake(): MsgUnstake {
  return { creator: "", hostChain: "", cAmount: "" };
}

export const MsgUnstake = {
  encode(message: MsgUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.cAmount !== "") {
      writer.uint32(26).string(message.cAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.cAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      cAmount: isSet(object.cAmount) ? String(object.cAmount) : "",
    };
  },

  toJSON(message: MsgUnstake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.cAmount !== undefined && (obj.cAmount = message.cAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstake>, I>>(object: I): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.cAmount = object.cAmount ?? "";
    return message;
  },
};

function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return { uAmount: undefined };
}

export const MsgUnstakeResponse = {
  encode(message: MsgUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uAmount !== undefined) {
      Coin.encode(message.uAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstakeResponse {
    return { uAmount: isSet(object.uAmount) ? Coin.fromJSON(object.uAmount) : undefined };
  },

  toJSON(message: MsgUnstakeResponse): unknown {
    const obj: any = {};
    message.uAmount !== undefined && (obj.uAmount = message.uAmount ? Coin.toJSON(message.uAmount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakeResponse>, I>>(object: I): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    message.uAmount = (object.uAmount !== undefined && object.uAmount !== null)
      ? Coin.fromPartial(object.uAmount)
      : undefined;
    return message;
  },
};

function createBaseMsgRedeemUnstaked(): MsgRedeemUnstaked {
  return { creator: "", hostChain: "", uAmount: "", epoch: 0 };
}

export const MsgRedeemUnstaked = {
  encode(message: MsgRedeemUnstaked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.uAmount !== "") {
      writer.uint32(26).string(message.uAmount);
    }
    if (message.epoch !== 0) {
      writer.uint32(32).uint64(message.epoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemUnstaked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemUnstaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.uAmount = reader.string();
          break;
        case 4:
          message.epoch = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemUnstaked {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      uAmount: isSet(object.uAmount) ? String(object.uAmount) : "",
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
    };
  },

  toJSON(message: MsgRedeemUnstaked): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.uAmount !== undefined && (obj.uAmount = message.uAmount);
    message.epoch !== undefined && (obj.epoch = Math.round(message.epoch));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemUnstaked>, I>>(object: I): MsgRedeemUnstaked {
    const message = createBaseMsgRedeemUnstaked();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.uAmount = object.uAmount ?? "";
    message.epoch = object.epoch ?? 0;
    return message;
  },
};

function createBaseMsgRedeemUnstakedResponse(): MsgRedeemUnstakedResponse {
  return { amount: undefined, fee: undefined };
}

export const MsgRedeemUnstakedResponse = {
  encode(message: MsgRedeemUnstakedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemUnstakedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemUnstakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgRedeemUnstakedResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgRedeemUnstakedResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemUnstakedResponse>, I>>(object: I): MsgRedeemUnstakedResponse {
    const message = createBaseMsgRedeemUnstakedResponse();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseMsgInstantUnstake(): MsgInstantUnstake {
  return { creator: "", hostChain: "", minCAmount: "", maxCAmount: "" };
}

export const MsgInstantUnstake = {
  encode(message: MsgInstantUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.minCAmount !== "") {
      writer.uint32(26).string(message.minCAmount);
    }
    if (message.maxCAmount !== "") {
      writer.uint32(34).string(message.maxCAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.minCAmount = reader.string();
          break;
        case 4:
          message.maxCAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInstantUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      minCAmount: isSet(object.minCAmount) ? String(object.minCAmount) : "",
      maxCAmount: isSet(object.maxCAmount) ? String(object.maxCAmount) : "",
    };
  },

  toJSON(message: MsgInstantUnstake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.minCAmount !== undefined && (obj.minCAmount = message.minCAmount);
    message.maxCAmount !== undefined && (obj.maxCAmount = message.maxCAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInstantUnstake>, I>>(object: I): MsgInstantUnstake {
    const message = createBaseMsgInstantUnstake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.minCAmount = object.minCAmount ?? "";
    message.maxCAmount = object.maxCAmount ?? "";
    return message;
  },
};

function createBaseMsgInstantUnstakeResponse(): MsgInstantUnstakeResponse {
  return { amount: undefined, fee: undefined };
}

export const MsgInstantUnstakeResponse = {
  encode(message: MsgInstantUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgInstantUnstakeResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgInstantUnstakeResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInstantUnstakeResponse>, I>>(object: I): MsgInstantUnstakeResponse {
    const message = createBaseMsgInstantUnstakeResponse();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseMsgRebalanceDelegations(): MsgRebalanceDelegations {
  return { creator: "", hostChain: "" };
}

export const MsgRebalanceDelegations = {
  encode(message: MsgRebalanceDelegations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceDelegations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceDelegations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRebalanceDelegations {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
    };
  },

  toJSON(message: MsgRebalanceDelegations): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRebalanceDelegations>, I>>(object: I): MsgRebalanceDelegations {
    const message = createBaseMsgRebalanceDelegations();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    return message;
  },
};

function createBaseMsgRebalanceDelegationsResponse(): MsgRebalanceDelegationsResponse {
  return {};
}

export const MsgRebalanceDelegationsResponse = {
  encode(_: MsgRebalanceDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRebalanceDelegationsResponse {
    return {};
  },

  toJSON(_: MsgRebalanceDelegationsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRebalanceDelegationsResponse>, I>>(_: I): MsgRebalanceDelegationsResponse {
    const message = createBaseMsgRebalanceDelegationsResponse();
    return message;
  },
};

function createBaseMsgRedeemInterchainAccount(): MsgRedeemInterchainAccount {
  return { creator: "", hostChain: "", accountType: 0 };
}

export const MsgRedeemInterchainAccount = {
  encode(message: MsgRedeemInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.accountType !== 0) {
      writer.uint32(24).int32(message.accountType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemInterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.accountType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemInterchainAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      accountType: isSet(object.accountType) ? iCATypeFromJSON(object.accountType) : 0,
    };
  },

  toJSON(message: MsgRedeemInterchainAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.accountType !== undefined && (obj.accountType = iCATypeToJSON(message.accountType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemInterchainAccount>, I>>(object: I): MsgRedeemInterchainAccount {
    const message = createBaseMsgRedeemInterchainAccount();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.accountType = object.accountType ?? 0;
    return message;
  },
};

function createBaseMsgRedeemInterchainAccountResponse(): MsgRedeemInterchainAccountResponse {
  return {};
}

export const MsgRedeemInterchainAccountResponse = {
  encode(_: MsgRedeemInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRedeemInterchainAccountResponse {
    return {};
  },

  toJSON(_: MsgRedeemInterchainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemInterchainAccountResponse>, I>>(
    _: I,
  ): MsgRedeemInterchainAccountResponse {
    const message = createBaseMsgRedeemInterchainAccountResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  RegisterHostChain(request: MsgRegisterHostChain): Promise<MsgRegisterHostChainResponse>;
  UpdateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse>;
  Stake(request: MsgStake): Promise<MsgStakeResponse>;
  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  RedeemUnstaked(request: MsgRedeemUnstaked): Promise<MsgRedeemUnstakedResponse>;
  InstantUnstake(request: MsgInstantUnstake): Promise<MsgInstantUnstakeResponse>;
  RebalanceDelegations(request: MsgRebalanceDelegations): Promise<MsgRebalanceDelegationsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RedeemInterchainAccount(request: MsgRedeemInterchainAccount): Promise<MsgRedeemInterchainAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.RegisterHostChain = this.RegisterHostChain.bind(this);
    this.UpdateHostChain = this.UpdateHostChain.bind(this);
    this.Stake = this.Stake.bind(this);
    this.Unstake = this.Unstake.bind(this);
    this.RedeemUnstaked = this.RedeemUnstaked.bind(this);
    this.InstantUnstake = this.InstantUnstake.bind(this);
    this.RebalanceDelegations = this.RebalanceDelegations.bind(this);
    this.RedeemInterchainAccount = this.RedeemInterchainAccount.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }

  RegisterHostChain(request: MsgRegisterHostChain): Promise<MsgRegisterHostChainResponse> {
    const data = MsgRegisterHostChain.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "RegisterHostChain", data);
    return promise.then((data) => MsgRegisterHostChainResponse.decode(new _m0.Reader(data)));
  }

  UpdateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse> {
    const data = MsgUpdateHostChain.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "UpdateHostChain", data);
    return promise.then((data) => MsgUpdateHostChainResponse.decode(new _m0.Reader(data)));
  }

  Stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "Stake", data);
    return promise.then((data) => MsgStakeResponse.decode(new _m0.Reader(data)));
  }

  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "Unstake", data);
    return promise.then((data) => MsgUnstakeResponse.decode(new _m0.Reader(data)));
  }

  RedeemUnstaked(request: MsgRedeemUnstaked): Promise<MsgRedeemUnstakedResponse> {
    const data = MsgRedeemUnstaked.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "RedeemUnstaked", data);
    return promise.then((data) => MsgRedeemUnstakedResponse.decode(new _m0.Reader(data)));
  }

  InstantUnstake(request: MsgInstantUnstake): Promise<MsgInstantUnstakeResponse> {
    const data = MsgInstantUnstake.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "InstantUnstake", data);
    return promise.then((data) => MsgInstantUnstakeResponse.decode(new _m0.Reader(data)));
  }

  RebalanceDelegations(request: MsgRebalanceDelegations): Promise<MsgRebalanceDelegationsResponse> {
    const data = MsgRebalanceDelegations.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "RebalanceDelegations", data);
    return promise.then((data) => MsgRebalanceDelegationsResponse.decode(new _m0.Reader(data)));
  }

  RedeemInterchainAccount(request: MsgRedeemInterchainAccount): Promise<MsgRedeemInterchainAccountResponse> {
    const data = MsgRedeemInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Msg", "RedeemInterchainAccount", data);
    return promise.then((data) => MsgRedeemInterchainAccountResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
