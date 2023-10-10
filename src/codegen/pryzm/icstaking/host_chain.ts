import { StakingParams, StakingParamsSDKType } from "./params";
import { Height, HeightSDKType } from "../../ibc/core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/** The types of available connection protocols */
export enum ConnectionType {
  /** ICA - interchain account connection using ibc-go ICS-27 */
  ICA = 0,
  UNRECOGNIZED = -1,
}
export const ConnectionTypeSDKType = ConnectionType;
export function connectionTypeFromJSON(object: any): ConnectionType {
  switch (object) {
    case 0:
    case "ICA":
      return ConnectionType.ICA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionType.UNRECOGNIZED;
  }
}
export function connectionTypeToJSON(object: ConnectionType): string {
  switch (object) {
    case ConnectionType.ICA:
      return "ICA";
    case ConnectionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Types of transfer channels
 * For now it only supports ibc transfer, but transfer bridges support (Axelar, Wormhole, ...) can be added.
 */
export enum TransferChannelType {
  IBC = 0,
  UNRECOGNIZED = -1,
}
export const TransferChannelTypeSDKType = TransferChannelType;
export function transferChannelTypeFromJSON(object: any): TransferChannelType {
  switch (object) {
    case 0:
    case "IBC":
      return TransferChannelType.IBC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferChannelType.UNRECOGNIZED;
  }
}
export function transferChannelTypeToJSON(object: TransferChannelType): string {
  switch (object) {
    case TransferChannelType.IBC:
      return "IBC";
    case TransferChannelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum AccountState {
  NOT_REGISTERED = 0,
  REGISTERING = 1,
  REGISTERED = 2,
  UNRECOGNIZED = -1,
}
export const AccountStateSDKType = AccountState;
export function accountStateFromJSON(object: any): AccountState {
  switch (object) {
    case 0:
    case "NOT_REGISTERED":
      return AccountState.NOT_REGISTERED;
    case 1:
    case "REGISTERING":
      return AccountState.REGISTERING;
    case 2:
    case "REGISTERED":
      return AccountState.REGISTERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountState.UNRECOGNIZED;
  }
}
export function accountStateToJSON(object: AccountState): string {
  switch (object) {
    case AccountState.NOT_REGISTERED:
      return "NOT_REGISTERED";
    case AccountState.REGISTERING:
      return "REGISTERING";
    case AccountState.REGISTERED:
      return "REGISTERED";
    case AccountState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum State {
  INITIALIZING = 0,
  IDLE = 1,
  TRANSFERRING = 2,
  DELEGATING = 3,
  UNDELEGATING = 4,
  REDELEGATING = 5,
  COMPOUNDING = 6,
  COLLECTING = 7,
  SWEEPING = 8,
  UNRECOGNIZED = -1,
}
export const StateSDKType = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "INITIALIZING":
      return State.INITIALIZING;
    case 1:
    case "IDLE":
      return State.IDLE;
    case 2:
    case "TRANSFERRING":
      return State.TRANSFERRING;
    case 3:
    case "DELEGATING":
      return State.DELEGATING;
    case 4:
    case "UNDELEGATING":
      return State.UNDELEGATING;
    case 5:
    case "REDELEGATING":
      return State.REDELEGATING;
    case 6:
    case "COMPOUNDING":
      return State.COMPOUNDING;
    case 7:
    case "COLLECTING":
      return State.COLLECTING;
    case 8:
    case "SWEEPING":
      return State.SWEEPING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.INITIALIZING:
      return "INITIALIZING";
    case State.IDLE:
      return "IDLE";
    case State.TRANSFERRING:
      return "TRANSFERRING";
    case State.DELEGATING:
      return "DELEGATING";
    case State.UNDELEGATING:
      return "UNDELEGATING";
    case State.REDELEGATING:
      return "REDELEGATING";
    case State.COMPOUNDING:
      return "COMPOUNDING";
    case State.COLLECTING:
      return "COLLECTING";
    case State.SWEEPING:
      return "SWEEPING";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The properties of the target chain for staking */
export interface HostChain {
  /** A unique user-provided identifier. Is used in the cToken denom */
  id: string;
  /** connection type. connection type and connection id are unique together */
  connectionType: ConnectionType;
  /** the identifier for connection. connection id and connection type are unique together */
  connectionId: string;
  /** the base denom of the token to be staked on the target chain */
  baseDenom: string;
  /** list of supported transfer channels for transferring the base_denom tokens between the host chain and Pryzm */
  transferChannels: TransferChannel[];
  /** Parameters for staking/unstaking on the host chain */
  params: StakingParams;
  /** list of whitelisted validators to which Pryzm sends the staked funds. */
  validators: Validator[];
}
/** The properties of the target chain for staking */
export interface HostChainSDKType {
  id: string;
  connection_type: ConnectionType;
  connection_id: string;
  base_denom: string;
  transfer_channels: TransferChannelSDKType[];
  params: StakingParamsSDKType;
  validators: ValidatorSDKType[];
}
/** Properties of a transfer channel */
export interface TransferChannel {
  /** the type of the channel */
  type: TransferChannelType;
  /** the id of the channel. in the case of IBC channel type, this is the channel name. */
  id: string;
  /**
   * Optional. This is the name of the token on the receiving chain.
   * This is useful when a bridge is being used and the underlying asset is wrapped on the bridge, like axlWETH.
   */
  wrappedDenom: string;
  /**
   * Optional. This is the name of the target chain.
   * This is useful when a bridge is being used and the host chain is different with the receiving chain.
   */
  destinationChain: string;
}
/** Properties of a transfer channel */
export interface TransferChannelSDKType {
  type: TransferChannelType;
  id: string;
  wrapped_denom: string;
  destination_chain: string;
}
export interface Validator {
  /** validator's address on the host chain */
  address: string;
  /** The weight of delegation to the validator. Total weight of all validators per host chain must be equal to 1. */
  weight: string;
}
export interface ValidatorSDKType {
  address: string;
  weight: string;
}
/** A subset of state on the host chain needed by Pryzm */
export interface HostChainState {
  /** The id of the chain */
  hostChainId: string;
  /** Information about the interchain accounts */
  hostAccounts: HostAccounts;
  /** list of validators and their state containing the delegation amount */
  validatorStates: ValidatorState[];
  /** The amount of assets that are in the delegation account and ready to be delegated */
  amountToBeDelegated: string;
  /** The amount of undelegated assets that are currently in the delegation account waiting to be collected */
  undelegatedAmountToCollect: string;
  /** The current exchange rate of cToken to the host chain staking token */
  exchangeRate: string;
  /** The current state of interchain operations state machine */
  state: State;
  /**
   * The last host chain's block height in which PRYZM's state is changed to IDLE
   * setting state to IDLE happens when an ack/timeout received for an interchain operation,
   * so this is the height of the last received ack from host chain
   */
  lastIdleStateHostHeight: Height;
}
/** A subset of state on the host chain needed by Pryzm */
export interface HostChainStateSDKType {
  host_chain_id: string;
  host_accounts: HostAccountsSDKType;
  validator_states: ValidatorStateSDKType[];
  amount_to_be_delegated: string;
  undelegated_amount_to_collect: string;
  exchange_rate: string;
  state: State;
  last_idle_state_host_height: HeightSDKType;
}
/** The interchain accounts */
export interface HostAccounts {
  delegation: HostAccount;
  reward: HostAccount;
  sweep: HostAccount;
  /**
   * This is the state of setting the reward account as the account which receives the staking rewards on host chain.
   * On cosmos based chains, the reward account is registered using MsgSetWithdrawAddress in distribution module.
   */
  rewardAccountClaimingState: AccountState;
}
/** The interchain accounts */
export interface HostAccountsSDKType {
  delegation: HostAccountSDKType;
  reward: HostAccountSDKType;
  sweep: HostAccountSDKType;
  reward_account_claiming_state: AccountState;
}
export interface HostAccount {
  address: string;
  balance: string;
  state: AccountState;
}
export interface HostAccountSDKType {
  address: string;
  balance: string;
  state: AccountState;
}
export interface ValidatorState {
  validatorAddress: string;
  delegatedAmount: string;
}
export interface ValidatorStateSDKType {
  validator_address: string;
  delegated_amount: string;
}
function createBaseHostChain(): HostChain {
  return {
    id: "",
    connectionType: 0,
    connectionId: "",
    baseDenom: "",
    transferChannels: [],
    params: StakingParams.fromPartial({}),
    validators: []
  };
}
export const HostChain = {
  encode(message: HostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.connectionType !== 0) {
      writer.uint32(16).int32(message.connectionType);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    for (const v of message.transferChannels) {
      TransferChannel.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.params !== undefined) {
      StakingParams.encode(message.params, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.connectionType = (reader.int32() as any);
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.baseDenom = reader.string();
          break;
        case 5:
          message.transferChannels.push(TransferChannel.decode(reader, reader.uint32()));
          break;
        case 6:
          message.params = StakingParams.decode(reader, reader.uint32());
          break;
        case 7:
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
      id: isSet(object.id) ? String(object.id) : "",
      connectionType: isSet(object.connectionType) ? connectionTypeFromJSON(object.connectionType) : -1,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      transferChannels: Array.isArray(object?.transferChannels) ? object.transferChannels.map((e: any) => TransferChannel.fromJSON(e)) : [],
      params: isSet(object.params) ? StakingParams.fromJSON(object.params) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : []
    };
  },
  toJSON(message: HostChain): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.connectionType !== undefined && (obj.connectionType = connectionTypeToJSON(message.connectionType));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    if (message.transferChannels) {
      obj.transferChannels = message.transferChannels.map(e => e ? TransferChannel.toJSON(e) : undefined);
    } else {
      obj.transferChannels = [];
    }
    message.params !== undefined && (obj.params = message.params ? StakingParams.toJSON(message.params) : undefined);
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<HostChain>): HostChain {
    const message = createBaseHostChain();
    message.id = object.id ?? "";
    message.connectionType = object.connectionType ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.transferChannels = object.transferChannels?.map(e => TransferChannel.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? StakingParams.fromPartial(object.params) : undefined;
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTransferChannel(): TransferChannel {
  return {
    type: 0,
    id: "",
    wrappedDenom: "",
    destinationChain: ""
  };
}
export const TransferChannel = {
  encode(message: TransferChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.wrappedDenom !== "") {
      writer.uint32(26).string(message.wrappedDenom);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.wrappedDenom = reader.string();
          break;
        case 4:
          message.destinationChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransferChannel {
    return {
      type: isSet(object.type) ? transferChannelTypeFromJSON(object.type) : -1,
      id: isSet(object.id) ? String(object.id) : "",
      wrappedDenom: isSet(object.wrappedDenom) ? String(object.wrappedDenom) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : ""
    };
  },
  toJSON(message: TransferChannel): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = transferChannelTypeToJSON(message.type));
    message.id !== undefined && (obj.id = message.id);
    message.wrappedDenom !== undefined && (obj.wrappedDenom = message.wrappedDenom);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    return obj;
  },
  fromPartial(object: Partial<TransferChannel>): TransferChannel {
    const message = createBaseTransferChannel();
    message.type = object.type ?? 0;
    message.id = object.id ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
    message.destinationChain = object.destinationChain ?? "";
    return message;
  }
};
function createBaseValidator(): Validator {
  return {
    address: "",
    weight: ""
  };
}
export const Validator = {
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
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
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  }
};
function createBaseHostChainState(): HostChainState {
  return {
    hostChainId: "",
    hostAccounts: HostAccounts.fromPartial({}),
    validatorStates: [],
    amountToBeDelegated: "",
    undelegatedAmountToCollect: "",
    exchangeRate: "",
    state: 0,
    lastIdleStateHostHeight: Height.fromPartial({})
  };
}
export const HostChainState = {
  encode(message: HostChainState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    if (message.hostAccounts !== undefined) {
      HostAccounts.encode(message.hostAccounts, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorStates) {
      ValidatorState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountToBeDelegated !== "") {
      writer.uint32(34).string(message.amountToBeDelegated);
    }
    if (message.undelegatedAmountToCollect !== "") {
      writer.uint32(42).string(message.undelegatedAmountToCollect);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    if (message.state !== 0) {
      writer.uint32(56).int32(message.state);
    }
    if (message.lastIdleStateHostHeight !== undefined) {
      Height.encode(message.lastIdleStateHostHeight, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChainState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        case 2:
          message.hostAccounts = HostAccounts.decode(reader, reader.uint32());
          break;
        case 3:
          message.validatorStates.push(ValidatorState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amountToBeDelegated = reader.string();
          break;
        case 5:
          message.undelegatedAmountToCollect = reader.string();
          break;
        case 6:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.state = (reader.int32() as any);
          break;
        case 8:
          message.lastIdleStateHostHeight = Height.decode(reader, reader.uint32());
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
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      hostAccounts: isSet(object.hostAccounts) ? HostAccounts.fromJSON(object.hostAccounts) : undefined,
      validatorStates: Array.isArray(object?.validatorStates) ? object.validatorStates.map((e: any) => ValidatorState.fromJSON(e)) : [],
      amountToBeDelegated: isSet(object.amountToBeDelegated) ? String(object.amountToBeDelegated) : "",
      undelegatedAmountToCollect: isSet(object.undelegatedAmountToCollect) ? String(object.undelegatedAmountToCollect) : "",
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      lastIdleStateHostHeight: isSet(object.lastIdleStateHostHeight) ? Height.fromJSON(object.lastIdleStateHostHeight) : undefined
    };
  },
  toJSON(message: HostChainState): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.hostAccounts !== undefined && (obj.hostAccounts = message.hostAccounts ? HostAccounts.toJSON(message.hostAccounts) : undefined);
    if (message.validatorStates) {
      obj.validatorStates = message.validatorStates.map(e => e ? ValidatorState.toJSON(e) : undefined);
    } else {
      obj.validatorStates = [];
    }
    message.amountToBeDelegated !== undefined && (obj.amountToBeDelegated = message.amountToBeDelegated);
    message.undelegatedAmountToCollect !== undefined && (obj.undelegatedAmountToCollect = message.undelegatedAmountToCollect);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.lastIdleStateHostHeight !== undefined && (obj.lastIdleStateHostHeight = message.lastIdleStateHostHeight ? Height.toJSON(message.lastIdleStateHostHeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<HostChainState>): HostChainState {
    const message = createBaseHostChainState();
    message.hostChainId = object.hostChainId ?? "";
    message.hostAccounts = object.hostAccounts !== undefined && object.hostAccounts !== null ? HostAccounts.fromPartial(object.hostAccounts) : undefined;
    message.validatorStates = object.validatorStates?.map(e => ValidatorState.fromPartial(e)) || [];
    message.amountToBeDelegated = object.amountToBeDelegated ?? "";
    message.undelegatedAmountToCollect = object.undelegatedAmountToCollect ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    message.state = object.state ?? 0;
    message.lastIdleStateHostHeight = object.lastIdleStateHostHeight !== undefined && object.lastIdleStateHostHeight !== null ? Height.fromPartial(object.lastIdleStateHostHeight) : undefined;
    return message;
  }
};
function createBaseHostAccounts(): HostAccounts {
  return {
    delegation: HostAccount.fromPartial({}),
    reward: HostAccount.fromPartial({}),
    sweep: HostAccount.fromPartial({}),
    rewardAccountClaimingState: 0
  };
}
export const HostAccounts = {
  encode(message: HostAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      HostAccount.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.reward !== undefined) {
      HostAccount.encode(message.reward, writer.uint32(18).fork()).ldelim();
    }
    if (message.sweep !== undefined) {
      HostAccount.encode(message.sweep, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardAccountClaimingState !== 0) {
      writer.uint32(32).int32(message.rewardAccountClaimingState);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = HostAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.reward = HostAccount.decode(reader, reader.uint32());
          break;
        case 3:
          message.sweep = HostAccount.decode(reader, reader.uint32());
          break;
        case 4:
          message.rewardAccountClaimingState = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostAccounts {
    return {
      delegation: isSet(object.delegation) ? HostAccount.fromJSON(object.delegation) : undefined,
      reward: isSet(object.reward) ? HostAccount.fromJSON(object.reward) : undefined,
      sweep: isSet(object.sweep) ? HostAccount.fromJSON(object.sweep) : undefined,
      rewardAccountClaimingState: isSet(object.rewardAccountClaimingState) ? accountStateFromJSON(object.rewardAccountClaimingState) : -1
    };
  },
  toJSON(message: HostAccounts): unknown {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? HostAccount.toJSON(message.delegation) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? HostAccount.toJSON(message.reward) : undefined);
    message.sweep !== undefined && (obj.sweep = message.sweep ? HostAccount.toJSON(message.sweep) : undefined);
    message.rewardAccountClaimingState !== undefined && (obj.rewardAccountClaimingState = accountStateToJSON(message.rewardAccountClaimingState));
    return obj;
  },
  fromPartial(object: Partial<HostAccounts>): HostAccounts {
    const message = createBaseHostAccounts();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? HostAccount.fromPartial(object.delegation) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? HostAccount.fromPartial(object.reward) : undefined;
    message.sweep = object.sweep !== undefined && object.sweep !== null ? HostAccount.fromPartial(object.sweep) : undefined;
    message.rewardAccountClaimingState = object.rewardAccountClaimingState ?? 0;
    return message;
  }
};
function createBaseHostAccount(): HostAccount {
  return {
    address: "",
    balance: "",
    state: 0
  };
}
export const HostAccount = {
  encode(message: HostAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = reader.string();
          break;
        case 3:
          message.state = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      state: isSet(object.state) ? accountStateFromJSON(object.state) : -1
    };
  },
  toJSON(message: HostAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.balance !== undefined && (obj.balance = message.balance);
    message.state !== undefined && (obj.state = accountStateToJSON(message.state));
    return obj;
  },
  fromPartial(object: Partial<HostAccount>): HostAccount {
    const message = createBaseHostAccount();
    message.address = object.address ?? "";
    message.balance = object.balance ?? "";
    message.state = object.state ?? 0;
    return message;
  }
};
function createBaseValidatorState(): ValidatorState {
  return {
    validatorAddress: "",
    delegatedAmount: ""
  };
}
export const ValidatorState = {
  encode(message: ValidatorState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.delegatedAmount !== "") {
      writer.uint32(18).string(message.delegatedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.delegatedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorState {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      delegatedAmount: isSet(object.delegatedAmount) ? String(object.delegatedAmount) : ""
    };
  },
  toJSON(message: ValidatorState): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.delegatedAmount !== undefined && (obj.delegatedAmount = message.delegatedAmount);
    return obj;
  },
  fromPartial(object: Partial<ValidatorState>): ValidatorState {
    const message = createBaseValidatorState();
    message.validatorAddress = object.validatorAddress ?? "";
    message.delegatedAmount = object.delegatedAmount ?? "";
    return message;
  }
};