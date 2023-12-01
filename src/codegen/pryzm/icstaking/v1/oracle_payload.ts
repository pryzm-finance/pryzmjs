import { Height, HeightSDKType } from "../../../ibc/core/client/v1/client";
import { ValidatorState, ValidatorStateSDKType } from "./host_chain";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  /**
   * Oracle is reporting the data based on the host chain’s time which may have a time difference with Pryzm.
   * In order to be accurate, we use a reference of host chain’s latest block in which Pryzm's state has changed to idle,
   * and oracle feeders' reported block height is checked to be after that specific block
   */
  blockHeight: Height;
  /** list of validators and their state containing the delegation amount */
  validatorStates: ValidatorState[];
  /** balance of delegation interchain account */
  delegationAccountBalance: string;
  /** balance of reward interchain account */
  rewardAccountBalance: string;
  /** balance of sweep interchain account */
  sweepAccountBalance: string;
  /**
   * the largest undelegation epoch number for which the undelegation is completed and is ready to be swept to PRYZM
   * reporting this with zero means that none of incomplete undelegations are completed.
   */
  lastCompletedUndelegationEpoch: bigint;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  block_height: HeightSDKType;
  validator_states: ValidatorStateSDKType[];
  delegation_account_balance: string;
  reward_account_balance: string;
  sweep_account_balance: string;
  last_completed_undelegation_epoch: bigint;
}
function createBaseOraclePayload(): OraclePayload {
  return {
    blockHeight: Height.fromPartial({}),
    validatorStates: [],
    delegationAccountBalance: "",
    rewardAccountBalance: "",
    sweepAccountBalance: "",
    lastCompletedUndelegationEpoch: BigInt(0)
  };
}
export const OraclePayload = {
  encode(message: OraclePayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== undefined) {
      Height.encode(message.blockHeight, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validatorStates) {
      ValidatorState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.delegationAccountBalance !== "") {
      writer.uint32(34).string(message.delegationAccountBalance);
    }
    if (message.rewardAccountBalance !== "") {
      writer.uint32(42).string(message.rewardAccountBalance);
    }
    if (message.sweepAccountBalance !== "") {
      writer.uint32(50).string(message.sweepAccountBalance);
    }
    if (message.lastCompletedUndelegationEpoch !== BigInt(0)) {
      writer.uint32(56).uint64(message.lastCompletedUndelegationEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = Height.decode(reader, reader.uint32());
          break;
        case 3:
          message.validatorStates.push(ValidatorState.decode(reader, reader.uint32()));
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
          message.lastCompletedUndelegationEpoch = reader.uint64();
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
      validatorStates: Array.isArray(object?.validatorStates) ? object.validatorStates.map((e: any) => ValidatorState.fromJSON(e)) : [],
      delegationAccountBalance: isSet(object.delegationAccountBalance) ? String(object.delegationAccountBalance) : "",
      rewardAccountBalance: isSet(object.rewardAccountBalance) ? String(object.rewardAccountBalance) : "",
      sweepAccountBalance: isSet(object.sweepAccountBalance) ? String(object.sweepAccountBalance) : "",
      lastCompletedUndelegationEpoch: isSet(object.lastCompletedUndelegationEpoch) ? BigInt(object.lastCompletedUndelegationEpoch.toString()) : BigInt(0)
    };
  },
  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight ? Height.toJSON(message.blockHeight) : undefined);
    if (message.validatorStates) {
      obj.validatorStates = message.validatorStates.map(e => e ? ValidatorState.toJSON(e) : undefined);
    } else {
      obj.validatorStates = [];
    }
    message.delegationAccountBalance !== undefined && (obj.delegationAccountBalance = message.delegationAccountBalance);
    message.rewardAccountBalance !== undefined && (obj.rewardAccountBalance = message.rewardAccountBalance);
    message.sweepAccountBalance !== undefined && (obj.sweepAccountBalance = message.sweepAccountBalance);
    message.lastCompletedUndelegationEpoch !== undefined && (obj.lastCompletedUndelegationEpoch = (message.lastCompletedUndelegationEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OraclePayload>): OraclePayload {
    const message = createBaseOraclePayload();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Height.fromPartial(object.blockHeight) : undefined;
    message.validatorStates = object.validatorStates?.map(e => ValidatorState.fromPartial(e)) || [];
    message.delegationAccountBalance = object.delegationAccountBalance ?? "";
    message.rewardAccountBalance = object.rewardAccountBalance ?? "";
    message.sweepAccountBalance = object.sweepAccountBalance ?? "";
    message.lastCompletedUndelegationEpoch = object.lastCompletedUndelegationEpoch !== undefined && object.lastCompletedUndelegationEpoch !== null ? BigInt(object.lastCompletedUndelegationEpoch.toString()) : BigInt(0);
    return message;
  }
};