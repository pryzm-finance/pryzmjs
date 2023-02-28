/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StakingParams } from "./params";

export const protobufPackage = "prismfinance.prismcore.icstaking";

export interface HostChain {
  connectionId: string;
  baseDenom: string;
  transferChannel: string;
  params: StakingParams | undefined;
  validators: Validator[];
}

export interface Validator {
  address: string;
  weight: string;
}

export interface HostChainState {
  connectionId: string;
  ica: ICAInfo | undefined;
  validators: { [key: string]: ValidatorInfo };
  exchangeRate: string;
}

export interface HostChainState_ValidatorsEntry {
  key: string;
  value: ValidatorInfo | undefined;
}

export interface ICAInfo {
  delegationAccount: string;
  withdrawAccount: string;
  feeAccount: string;
  withdrawAddressSet: boolean;
  delegationAccountBalance: string;
  withdrawAccountBalance: string;
  feeAccountBalance: string;
}

export interface ValidatorInfo {
  delegationAmount: string;
  commissionRate: number;
}

function createBaseHostChain(): HostChain {
  return { connectionId: "", baseDenom: "", transferChannel: "", params: undefined, validators: [] };
}

export const HostChain = {
  encode(message: HostChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.params !== undefined) {
      StakingParams.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.params = StakingParams.decode(reader, reader.uint32());
          break;
        case 5:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostChain {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      params: isSet(object.params) ? StakingParams.fromJSON(object.params) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
    };
  },

  toJSON(message: HostChain): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.params !== undefined && (obj.params = message.params ? StakingParams.toJSON(message.params) : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostChain>, I>>(object: I): HostChain {
    const message = createBaseHostChain();
    message.connectionId = object.connectionId ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? StakingParams.fromPartial(object.params)
      : undefined;
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValidator(): Validator {
  return { address: "", weight: "" };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
};

function createBaseHostChainState(): HostChainState {
  return { connectionId: "", ica: undefined, validators: {}, exchangeRate: "" };
}

export const HostChainState = {
  encode(message: HostChainState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.ica !== undefined) {
      ICAInfo.encode(message.ica, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.validators).forEach(([key, value]) => {
      HostChainState_ValidatorsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.exchangeRate !== "") {
      writer.uint32(34).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostChainState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.ica = ICAInfo.decode(reader, reader.uint32());
          break;
        case 3:
          const entry3 = HostChainState_ValidatorsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.validators[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostChainState {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      ica: isSet(object.ica) ? ICAInfo.fromJSON(object.ica) : undefined,
      validators: isObject(object.validators)
        ? Object.entries(object.validators).reduce<{ [key: string]: ValidatorInfo }>((acc, [key, value]) => {
          acc[key] = ValidatorInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
    };
  },

  toJSON(message: HostChainState): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.ica !== undefined && (obj.ica = message.ica ? ICAInfo.toJSON(message.ica) : undefined);
    obj.validators = {};
    if (message.validators) {
      Object.entries(message.validators).forEach(([k, v]) => {
        obj.validators[k] = ValidatorInfo.toJSON(v);
      });
    }
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostChainState>, I>>(object: I): HostChainState {
    const message = createBaseHostChainState();
    message.connectionId = object.connectionId ?? "";
    message.ica = (object.ica !== undefined && object.ica !== null) ? ICAInfo.fromPartial(object.ica) : undefined;
    message.validators = Object.entries(object.validators ?? {}).reduce<{ [key: string]: ValidatorInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ValidatorInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
};

function createBaseHostChainState_ValidatorsEntry(): HostChainState_ValidatorsEntry {
  return { key: "", value: undefined };
}

export const HostChainState_ValidatorsEntry = {
  encode(message: HostChainState_ValidatorsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ValidatorInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostChainState_ValidatorsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainState_ValidatorsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ValidatorInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostChainState_ValidatorsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ValidatorInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: HostChainState_ValidatorsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ValidatorInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostChainState_ValidatorsEntry>, I>>(
    object: I,
  ): HostChainState_ValidatorsEntry {
    const message = createBaseHostChainState_ValidatorsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ValidatorInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseICAInfo(): ICAInfo {
  return {
    delegationAccount: "",
    withdrawAccount: "",
    feeAccount: "",
    withdrawAddressSet: false,
    delegationAccountBalance: "",
    withdrawAccountBalance: "",
    feeAccountBalance: "",
  };
}

export const ICAInfo = {
  encode(message: ICAInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationAccount !== "") {
      writer.uint32(10).string(message.delegationAccount);
    }
    if (message.withdrawAccount !== "") {
      writer.uint32(18).string(message.withdrawAccount);
    }
    if (message.feeAccount !== "") {
      writer.uint32(26).string(message.feeAccount);
    }
    if (message.withdrawAddressSet === true) {
      writer.uint32(32).bool(message.withdrawAddressSet);
    }
    if (message.delegationAccountBalance !== "") {
      writer.uint32(42).string(message.delegationAccountBalance);
    }
    if (message.withdrawAccountBalance !== "") {
      writer.uint32(50).string(message.withdrawAccountBalance);
    }
    if (message.feeAccountBalance !== "") {
      writer.uint32(58).string(message.feeAccountBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ICAInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationAccount = reader.string();
          break;
        case 2:
          message.withdrawAccount = reader.string();
          break;
        case 3:
          message.feeAccount = reader.string();
          break;
        case 4:
          message.withdrawAddressSet = reader.bool();
          break;
        case 5:
          message.delegationAccountBalance = reader.string();
          break;
        case 6:
          message.withdrawAccountBalance = reader.string();
          break;
        case 7:
          message.feeAccountBalance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ICAInfo {
    return {
      delegationAccount: isSet(object.delegationAccount) ? String(object.delegationAccount) : "",
      withdrawAccount: isSet(object.withdrawAccount) ? String(object.withdrawAccount) : "",
      feeAccount: isSet(object.feeAccount) ? String(object.feeAccount) : "",
      withdrawAddressSet: isSet(object.withdrawAddressSet) ? Boolean(object.withdrawAddressSet) : false,
      delegationAccountBalance: isSet(object.delegationAccountBalance) ? String(object.delegationAccountBalance) : "",
      withdrawAccountBalance: isSet(object.withdrawAccountBalance) ? String(object.withdrawAccountBalance) : "",
      feeAccountBalance: isSet(object.feeAccountBalance) ? String(object.feeAccountBalance) : "",
    };
  },

  toJSON(message: ICAInfo): unknown {
    const obj: any = {};
    message.delegationAccount !== undefined && (obj.delegationAccount = message.delegationAccount);
    message.withdrawAccount !== undefined && (obj.withdrawAccount = message.withdrawAccount);
    message.feeAccount !== undefined && (obj.feeAccount = message.feeAccount);
    message.withdrawAddressSet !== undefined && (obj.withdrawAddressSet = message.withdrawAddressSet);
    message.delegationAccountBalance !== undefined && (obj.delegationAccountBalance = message.delegationAccountBalance);
    message.withdrawAccountBalance !== undefined && (obj.withdrawAccountBalance = message.withdrawAccountBalance);
    message.feeAccountBalance !== undefined && (obj.feeAccountBalance = message.feeAccountBalance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ICAInfo>, I>>(object: I): ICAInfo {
    const message = createBaseICAInfo();
    message.delegationAccount = object.delegationAccount ?? "";
    message.withdrawAccount = object.withdrawAccount ?? "";
    message.feeAccount = object.feeAccount ?? "";
    message.withdrawAddressSet = object.withdrawAddressSet ?? false;
    message.delegationAccountBalance = object.delegationAccountBalance ?? "";
    message.withdrawAccountBalance = object.withdrawAccountBalance ?? "";
    message.feeAccountBalance = object.feeAccountBalance ?? "";
    return message;
  },
};

function createBaseValidatorInfo(): ValidatorInfo {
  return { delegationAmount: "", commissionRate: 0 };
}

export const ValidatorInfo = {
  encode(message: ValidatorInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationAmount !== "") {
      writer.uint32(10).string(message.delegationAmount);
    }
    if (message.commissionRate !== 0) {
      writer.uint32(16).uint64(message.commissionRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationAmount = reader.string();
          break;
        case 2:
          message.commissionRate = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorInfo {
    return {
      delegationAmount: isSet(object.delegationAmount) ? String(object.delegationAmount) : "",
      commissionRate: isSet(object.commissionRate) ? Number(object.commissionRate) : 0,
    };
  },

  toJSON(message: ValidatorInfo): unknown {
    const obj: any = {};
    message.delegationAmount !== undefined && (obj.delegationAmount = message.delegationAmount);
    message.commissionRate !== undefined && (obj.commissionRate = Math.round(message.commissionRate));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorInfo>, I>>(object: I): ValidatorInfo {
    const message = createBaseValidatorInfo();
    message.delegationAmount = object.delegationAmount ?? "";
    message.commissionRate = object.commissionRate ?? 0;
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
