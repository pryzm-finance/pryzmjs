import { Height, HeightSDKType } from "../../ibc/core/client/v1/client";
import { ValidatorState, ValidatorStateSDKType } from "./host_chain";
import { Long, isSet, isObject } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface OraclePayload_ValidatorsEntry {
  key: string;
  value?: ValidatorState;
}
export interface OraclePayload_ValidatorsEntrySDKType {
  key: string;
  value?: ValidatorStateSDKType;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  /**
   * Oracle is reporting the data based on the host chain’s time which may have a time difference with Prism.
   * In order to be accurate, we use a reference of host chain’s latest block in which Prism's state has changed to idle,
   * and oracle feeders' reported block height is checked to be after that specific block
   */
  blockHeight?: Height;
  /** map of validator addresses to the amount delegated to that validator */
  validators?: {
    [key: string]: ValidatorState;
  };
  /** balance of delegation interchain account */
  delegationAccountBalance: string;
  /** balance of reward interchain account */
  rewardAccountBalance: string;
  /** balance of sweep interchain account */
  sweepAccountBalance: string;
  /**
   * the largest undelegation epoch number for which the undelegation is completed and is ready to be swept to PRISM
   * reporting this with zero means that none of incomplete undelegations are completed.
   */
  lastCompletedUndelegationEpoch: Long;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  block_height?: HeightSDKType;
  validators?: {
    [key: string]: ValidatorStateSDKType;
  };
  delegation_account_balance: string;
  reward_account_balance: string;
  sweep_account_balance: string;
  last_completed_undelegation_epoch: Long;
}
function createBaseOraclePayload_ValidatorsEntry(): OraclePayload_ValidatorsEntry {
  return {
    key: "",
    value: undefined
  };
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
      value: isSet(object.value) ? ValidatorState.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: OraclePayload_ValidatorsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ValidatorState.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OraclePayload_ValidatorsEntry>): OraclePayload_ValidatorsEntry {
    const message = createBaseOraclePayload_ValidatorsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? ValidatorState.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseOraclePayload(): OraclePayload {
  return {
    blockHeight: undefined,
    validators: {},
    delegationAccountBalance: "",
    rewardAccountBalance: "",
    sweepAccountBalance: "",
    lastCompletedUndelegationEpoch: Long.UZERO
  };
}
export const OraclePayload = {
  encode(message: OraclePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeight !== undefined) {
      Height.encode(message.blockHeight, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.validators).forEach(([key, value]) => {
      OraclePayload_ValidatorsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.delegationAccountBalance !== "") {
      writer.uint32(34).string(message.delegationAccountBalance);
    }
    if (message.rewardAccountBalance !== "") {
      writer.uint32(42).string(message.rewardAccountBalance);
    }
    if (message.sweepAccountBalance !== "") {
      writer.uint32(50).string(message.sweepAccountBalance);
    }
    if (!message.lastCompletedUndelegationEpoch.isZero()) {
      writer.uint32(56).uint64(message.lastCompletedUndelegationEpoch);
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
          message.blockHeight = Height.decode(reader, reader.uint32());
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
          message.sweepAccountBalance = reader.string();
          break;
        case 7:
          message.lastCompletedUndelegationEpoch = (reader.uint64() as Long);
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
      blockHeight: isSet(object.blockHeight) ? Height.fromJSON(object.blockHeight) : undefined,
      validators: isObject(object.validators) ? Object.entries(object.validators).reduce<{
        [key: string]: ValidatorState;
      }>((acc, [key, value]) => {
        acc[key] = ValidatorState.fromJSON(value);
        return acc;
      }, {}) : {},
      delegationAccountBalance: isSet(object.delegationAccountBalance) ? String(object.delegationAccountBalance) : "",
      rewardAccountBalance: isSet(object.rewardAccountBalance) ? String(object.rewardAccountBalance) : "",
      sweepAccountBalance: isSet(object.sweepAccountBalance) ? String(object.sweepAccountBalance) : "",
      lastCompletedUndelegationEpoch: isSet(object.lastCompletedUndelegationEpoch) ? Long.fromValue(object.lastCompletedUndelegationEpoch) : Long.UZERO
    };
  },
  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight ? Height.toJSON(message.blockHeight) : undefined);
    obj.validators = {};
    if (message.validators) {
      Object.entries(message.validators).forEach(([k, v]) => {
        obj.validators[k] = ValidatorState.toJSON(v);
      });
    }
    message.delegationAccountBalance !== undefined && (obj.delegationAccountBalance = message.delegationAccountBalance);
    message.rewardAccountBalance !== undefined && (obj.rewardAccountBalance = message.rewardAccountBalance);
    message.sweepAccountBalance !== undefined && (obj.sweepAccountBalance = message.sweepAccountBalance);
    message.lastCompletedUndelegationEpoch !== undefined && (obj.lastCompletedUndelegationEpoch = (message.lastCompletedUndelegationEpoch || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<OraclePayload>): OraclePayload {
    const message = createBaseOraclePayload();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Height.fromPartial(object.blockHeight) : undefined;
    message.validators = Object.entries(object.validators ?? {}).reduce<{
      [key: string]: ValidatorState;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ValidatorState.fromPartial(value);
      }
      return acc;
    }, {});
    message.delegationAccountBalance = object.delegationAccountBalance ?? "";
    message.rewardAccountBalance = object.rewardAccountBalance ?? "";
    message.sweepAccountBalance = object.sweepAccountBalance ?? "";
    message.lastCompletedUndelegationEpoch = object.lastCompletedUndelegationEpoch !== undefined && object.lastCompletedUndelegationEpoch !== null ? Long.fromValue(object.lastCompletedUndelegationEpoch) : Long.UZERO;
    return message;
  }
};