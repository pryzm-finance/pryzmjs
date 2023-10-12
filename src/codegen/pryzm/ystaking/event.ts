import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { UserStakeState, UserStakeStateSDKType } from "./user_stake_state";
import { AssetPoolState, AssetPoolStateSDKType, AssetMaturityPoolState, AssetMaturityPoolStateSDKType } from "./asset_pool_state";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface EventYStakingBond {
  accountAddress: string;
  amount: Coin;
}
export interface EventYStakingBondSDKType {
  account_address: string;
  amount: CoinSDKType;
}
export interface EventYStakingUnbond {
  accountAddress: string;
  amount: Coin;
  accruedReward: Coin;
  fee: Coin;
}
export interface EventYStakingUnbondSDKType {
  account_address: string;
  amount: CoinSDKType;
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
export interface EventYStakingExitPool {
  accountAddress: string;
  accruedReward: Coin;
  fee: Coin;
}
export interface EventYStakingExitPoolSDKType {
  account_address: string;
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
export interface EventYStakingClaimReward {
  accountAddress: string;
  accruedReward: Coin;
  fee: Coin;
}
export interface EventYStakingClaimRewardSDKType {
  account_address: string;
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
export interface EventDeactivateYStakingMaturityPool {
  burntBondedAmount: Coin;
  assetId: string;
  maturitySymbol: string;
}
export interface EventDeactivateYStakingMaturityPoolSDKType {
  burnt_bonded_amount: CoinSDKType;
  asset_id: string;
  maturity_symbol: string;
}
export interface EventSetUserStakeState {
  userStakeState: UserStakeState;
}
export interface EventSetUserStakeStateSDKType {
  user_stake_state: UserStakeStateSDKType;
}
export interface EventSetAssetPoolState {
  assetPoolState: AssetPoolState;
}
export interface EventSetAssetPoolStateSDKType {
  asset_pool_state: AssetPoolStateSDKType;
}
export interface EventSetAssetMaturityPoolState {
  assetMaturityPoolState: AssetMaturityPoolState;
}
export interface EventSetAssetMaturityPoolStateSDKType {
  asset_maturity_pool_state: AssetMaturityPoolStateSDKType;
}
export interface EventDeleteUserStakeState {
  address: string;
  assetId: string;
  maturitySymbol: string;
}
export interface EventDeleteUserStakeStateSDKType {
  address: string;
  asset_id: string;
  maturity_symbol: string;
}
export interface EventDeleteAssetPoolState {
  assetId: string;
}
export interface EventDeleteAssetPoolStateSDKType {
  asset_id: string;
}
export interface EventDeleteAssetMaturityPoolState {
  assetId: string;
  maturitySymbol: string;
}
export interface EventDeleteAssetMaturityPoolStateSDKType {
  asset_id: string;
  maturity_symbol: string;
}
function createBaseEventYStakingBond(): EventYStakingBond {
  return {
    accountAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventYStakingBond = {
  encode(message: EventYStakingBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventYStakingBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
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
  fromJSON(object: any): EventYStakingBond {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventYStakingBond): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYStakingBond>): EventYStakingBond {
    const message = createBaseEventYStakingBond();
    message.accountAddress = object.accountAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventYStakingUnbond(): EventYStakingUnbond {
  return {
    accountAddress: "",
    amount: Coin.fromPartial({}),
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventYStakingUnbond = {
  encode(message: EventYStakingUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(26).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventYStakingUnbond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingUnbond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.accruedReward = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.fee = Coin.decode(reader, reader.uint32());
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
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventYStakingUnbond): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYStakingUnbond>): EventYStakingUnbond {
    const message = createBaseEventYStakingUnbond();
    message.accountAddress = object.accountAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseEventYStakingExitPool(): EventYStakingExitPool {
  return {
    accountAddress: "",
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventYStakingExitPool = {
  encode(message: EventYStakingExitPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventYStakingExitPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
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
  fromJSON(object: any): EventYStakingExitPool {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventYStakingExitPool): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYStakingExitPool>): EventYStakingExitPool {
    const message = createBaseEventYStakingExitPool();
    message.accountAddress = object.accountAddress ?? "";
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseEventYStakingClaimReward(): EventYStakingClaimReward {
  return {
    accountAddress: "",
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventYStakingClaimReward = {
  encode(message: EventYStakingClaimReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventYStakingClaimReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingClaimReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
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
  fromJSON(object: any): EventYStakingClaimReward {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventYStakingClaimReward): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYStakingClaimReward>): EventYStakingClaimReward {
    const message = createBaseEventYStakingClaimReward();
    message.accountAddress = object.accountAddress ?? "";
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseEventDeactivateYStakingMaturityPool(): EventDeactivateYStakingMaturityPool {
  return {
    burntBondedAmount: Coin.fromPartial({}),
    assetId: "",
    maturitySymbol: ""
  };
}
export const EventDeactivateYStakingMaturityPool = {
  encode(message: EventDeactivateYStakingMaturityPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burntBondedAmount !== undefined) {
      Coin.encode(message.burntBondedAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeactivateYStakingMaturityPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeactivateYStakingMaturityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burntBondedAmount = Coin.decode(reader, reader.uint32());
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
      burntBondedAmount: isSet(object.burntBondedAmount) ? Coin.fromJSON(object.burntBondedAmount) : undefined,
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: EventDeactivateYStakingMaturityPool): unknown {
    const obj: any = {};
    message.burntBondedAmount !== undefined && (obj.burntBondedAmount = message.burntBondedAmount ? Coin.toJSON(message.burntBondedAmount) : undefined);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<EventDeactivateYStakingMaturityPool>): EventDeactivateYStakingMaturityPool {
    const message = createBaseEventDeactivateYStakingMaturityPool();
    message.burntBondedAmount = object.burntBondedAmount !== undefined && object.burntBondedAmount !== null ? Coin.fromPartial(object.burntBondedAmount) : undefined;
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  }
};
function createBaseEventSetUserStakeState(): EventSetUserStakeState {
  return {
    userStakeState: UserStakeState.fromPartial({})
  };
}
export const EventSetUserStakeState = {
  encode(message: EventSetUserStakeState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userStakeState !== undefined) {
      UserStakeState.encode(message.userStakeState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetUserStakeState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetUserStakeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userStakeState = UserStakeState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetUserStakeState {
    return {
      userStakeState: isSet(object.userStakeState) ? UserStakeState.fromJSON(object.userStakeState) : undefined
    };
  },
  toJSON(message: EventSetUserStakeState): unknown {
    const obj: any = {};
    message.userStakeState !== undefined && (obj.userStakeState = message.userStakeState ? UserStakeState.toJSON(message.userStakeState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetUserStakeState>): EventSetUserStakeState {
    const message = createBaseEventSetUserStakeState();
    message.userStakeState = object.userStakeState !== undefined && object.userStakeState !== null ? UserStakeState.fromPartial(object.userStakeState) : undefined;
    return message;
  }
};
function createBaseEventSetAssetPoolState(): EventSetAssetPoolState {
  return {
    assetPoolState: AssetPoolState.fromPartial({})
  };
}
export const EventSetAssetPoolState = {
  encode(message: EventSetAssetPoolState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetPoolState !== undefined) {
      AssetPoolState.encode(message.assetPoolState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetAssetPoolState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAssetPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetPoolState = AssetPoolState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetAssetPoolState {
    return {
      assetPoolState: isSet(object.assetPoolState) ? AssetPoolState.fromJSON(object.assetPoolState) : undefined
    };
  },
  toJSON(message: EventSetAssetPoolState): unknown {
    const obj: any = {};
    message.assetPoolState !== undefined && (obj.assetPoolState = message.assetPoolState ? AssetPoolState.toJSON(message.assetPoolState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetAssetPoolState>): EventSetAssetPoolState {
    const message = createBaseEventSetAssetPoolState();
    message.assetPoolState = object.assetPoolState !== undefined && object.assetPoolState !== null ? AssetPoolState.fromPartial(object.assetPoolState) : undefined;
    return message;
  }
};
function createBaseEventSetAssetMaturityPoolState(): EventSetAssetMaturityPoolState {
  return {
    assetMaturityPoolState: AssetMaturityPoolState.fromPartial({})
  };
}
export const EventSetAssetMaturityPoolState = {
  encode(message: EventSetAssetMaturityPoolState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetMaturityPoolState !== undefined) {
      AssetMaturityPoolState.encode(message.assetMaturityPoolState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetAssetMaturityPoolState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAssetMaturityPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetMaturityPoolState = AssetMaturityPoolState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetAssetMaturityPoolState {
    return {
      assetMaturityPoolState: isSet(object.assetMaturityPoolState) ? AssetMaturityPoolState.fromJSON(object.assetMaturityPoolState) : undefined
    };
  },
  toJSON(message: EventSetAssetMaturityPoolState): unknown {
    const obj: any = {};
    message.assetMaturityPoolState !== undefined && (obj.assetMaturityPoolState = message.assetMaturityPoolState ? AssetMaturityPoolState.toJSON(message.assetMaturityPoolState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetAssetMaturityPoolState>): EventSetAssetMaturityPoolState {
    const message = createBaseEventSetAssetMaturityPoolState();
    message.assetMaturityPoolState = object.assetMaturityPoolState !== undefined && object.assetMaturityPoolState !== null ? AssetMaturityPoolState.fromPartial(object.assetMaturityPoolState) : undefined;
    return message;
  }
};
function createBaseEventDeleteUserStakeState(): EventDeleteUserStakeState {
  return {
    address: "",
    assetId: "",
    maturitySymbol: ""
  };
}
export const EventDeleteUserStakeState = {
  encode(message: EventDeleteUserStakeState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeleteUserStakeState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteUserStakeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromJSON(object: any): EventDeleteUserStakeState {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: EventDeleteUserStakeState): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<EventDeleteUserStakeState>): EventDeleteUserStakeState {
    const message = createBaseEventDeleteUserStakeState();
    message.address = object.address ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  }
};
function createBaseEventDeleteAssetPoolState(): EventDeleteAssetPoolState {
  return {
    assetId: ""
  };
}
export const EventDeleteAssetPoolState = {
  encode(message: EventDeleteAssetPoolState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeleteAssetPoolState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteAssetPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeleteAssetPoolState {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: EventDeleteAssetPoolState): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<EventDeleteAssetPoolState>): EventDeleteAssetPoolState {
    const message = createBaseEventDeleteAssetPoolState();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseEventDeleteAssetMaturityPoolState(): EventDeleteAssetMaturityPoolState {
  return {
    assetId: "",
    maturitySymbol: ""
  };
}
export const EventDeleteAssetMaturityPoolState = {
  encode(message: EventDeleteAssetMaturityPoolState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(18).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeleteAssetMaturityPoolState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteAssetMaturityPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.maturitySymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeleteAssetMaturityPoolState {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: EventDeleteAssetMaturityPoolState): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<EventDeleteAssetMaturityPoolState>): EventDeleteAssetMaturityPoolState {
    const message = createBaseEventDeleteAssetMaturityPoolState();
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  }
};