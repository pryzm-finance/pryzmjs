/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ValidatorState } from "./host_chain";

export const protobufPackage = "prismfinance.prismcore.icstaking";

/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  /**
   * Oracle is reporting the data based on the host chain’s time which may have a time difference with Prism.
   * In order to be accurate, we use a reference of host chain’s latest block in which Prism's state has changed to idle,
   * and oracle feeders should report if their reported data is after that specific block
   */
  lastIdleStateHostHeight: number;
  isAfterLastIdleState: boolean;
  /** map of validator addresses to the amount delegated to that validator */
  validators: { [key: string]: ValidatorState };
  /** balance of delegation interchain account */
  delegationAccountBalance: string;
  /** balance of reward interchain account */
  rewardAccountBalance: string;
  /** balance of fee interchain account */
  feeAccountBalance: string;
  /** balance of sweep interchain account */
  sweepAccountBalance: string;
  /**
   * the largest undelegation epoch number for which the undelegation is completed and is ready to be swept to PRISM
   * reporting this with zero means that none of incomplete undelegations are completed.
   */
  lastCompletedUndelegationEpoch: number;
}

export interface OraclePayload_ValidatorsEntry {
  key: string;
  value: ValidatorState | undefined;
}

function createBaseOraclePayload(): OraclePayload {
  return {
    lastIdleStateHostHeight: 0,
    isAfterLastIdleState: false,
    validators: {},
    delegationAccountBalance: "",
    rewardAccountBalance: "",
    feeAccountBalance: "",
    sweepAccountBalance: "",
    lastCompletedUndelegationEpoch: 0,
  };
}

export const OraclePayload = {
  encode(message: OraclePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastIdleStateHostHeight !== 0) {
      writer.uint32(8).uint64(message.lastIdleStateHostHeight);
    }
    if (message.isAfterLastIdleState === true) {
      writer.uint32(16).bool(message.isAfterLastIdleState);
    }
    Object.entries(message.validators).forEach(([key, value]) => {
      OraclePayload_ValidatorsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.delegationAccountBalance !== "") {
      writer.uint32(34).string(message.delegationAccountBalance);
    }
    if (message.rewardAccountBalance !== "") {
      writer.uint32(42).string(message.rewardAccountBalance);
    }
    if (message.feeAccountBalance !== "") {
      writer.uint32(50).string(message.feeAccountBalance);
    }
    if (message.sweepAccountBalance !== "") {
      writer.uint32(58).string(message.sweepAccountBalance);
    }
    if (message.lastCompletedUndelegationEpoch !== 0) {
      writer.uint32(64).uint64(message.lastCompletedUndelegationEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastIdleStateHostHeight = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.isAfterLastIdleState = reader.bool();
          break;
        case 3:
          const entry3 = OraclePayload_ValidatorsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.validators[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.delegationAccountBalance = reader.string();
          break;
        case 5:
          message.rewardAccountBalance = reader.string();
          break;
        case 6:
          message.feeAccountBalance = reader.string();
          break;
        case 7:
          message.sweepAccountBalance = reader.string();
          break;
        case 8:
          message.lastCompletedUndelegationEpoch = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OraclePayload {
    return {
      lastIdleStateHostHeight: isSet(object.lastIdleStateHostHeight) ? Number(object.lastIdleStateHostHeight) : 0,
      isAfterLastIdleState: isSet(object.isAfterLastIdleState) ? Boolean(object.isAfterLastIdleState) : false,
      validators: isObject(object.validators)
        ? Object.entries(object.validators).reduce<{ [key: string]: ValidatorState }>((acc, [key, value]) => {
          acc[key] = ValidatorState.fromJSON(value);
          return acc;
        }, {})
        : {},
      delegationAccountBalance: isSet(object.delegationAccountBalance) ? String(object.delegationAccountBalance) : "",
      rewardAccountBalance: isSet(object.rewardAccountBalance) ? String(object.rewardAccountBalance) : "",
      feeAccountBalance: isSet(object.feeAccountBalance) ? String(object.feeAccountBalance) : "",
      sweepAccountBalance: isSet(object.sweepAccountBalance) ? String(object.sweepAccountBalance) : "",
      lastCompletedUndelegationEpoch: isSet(object.lastCompletedUndelegationEpoch)
        ? Number(object.lastCompletedUndelegationEpoch)
        : 0,
    };
  },

  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    message.lastIdleStateHostHeight !== undefined
      && (obj.lastIdleStateHostHeight = Math.round(message.lastIdleStateHostHeight));
    message.isAfterLastIdleState !== undefined && (obj.isAfterLastIdleState = message.isAfterLastIdleState);
    obj.validators = {};
    if (message.validators) {
      Object.entries(message.validators).forEach(([k, v]) => {
        obj.validators[k] = ValidatorState.toJSON(v);
      });
    }
    message.delegationAccountBalance !== undefined && (obj.delegationAccountBalance = message.delegationAccountBalance);
    message.rewardAccountBalance !== undefined && (obj.rewardAccountBalance = message.rewardAccountBalance);
    message.feeAccountBalance !== undefined && (obj.feeAccountBalance = message.feeAccountBalance);
    message.sweepAccountBalance !== undefined && (obj.sweepAccountBalance = message.sweepAccountBalance);
    message.lastCompletedUndelegationEpoch !== undefined
      && (obj.lastCompletedUndelegationEpoch = Math.round(message.lastCompletedUndelegationEpoch));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OraclePayload>, I>>(object: I): OraclePayload {
    const message = createBaseOraclePayload();
    message.lastIdleStateHostHeight = object.lastIdleStateHostHeight ?? 0;
    message.isAfterLastIdleState = object.isAfterLastIdleState ?? false;
    message.validators = Object.entries(object.validators ?? {}).reduce<{ [key: string]: ValidatorState }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ValidatorState.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.delegationAccountBalance = object.delegationAccountBalance ?? "";
    message.rewardAccountBalance = object.rewardAccountBalance ?? "";
    message.feeAccountBalance = object.feeAccountBalance ?? "";
    message.sweepAccountBalance = object.sweepAccountBalance ?? "";
    message.lastCompletedUndelegationEpoch = object.lastCompletedUndelegationEpoch ?? 0;
    return message;
  },
};

function createBaseOraclePayload_ValidatorsEntry(): OraclePayload_ValidatorsEntry {
  return { key: "", value: undefined };
}

export const OraclePayload_ValidatorsEntry = {
  encode(message: OraclePayload_ValidatorsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ValidatorState.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePayload_ValidatorsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload_ValidatorsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ValidatorState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OraclePayload_ValidatorsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ValidatorState.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: OraclePayload_ValidatorsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ValidatorState.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OraclePayload_ValidatorsEntry>, I>>(
    object: I,
  ): OraclePayload_ValidatorsEntry {
    const message = createBaseOraclePayload_ValidatorsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ValidatorState.fromPartial(object.value)
      : undefined;
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
