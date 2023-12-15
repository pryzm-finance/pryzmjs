import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Bond, BondAmino, BondSDKType } from "./bond";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Unbonding, UnbondingAmino, UnbondingSDKType } from "./unbonding";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/pryzm.incentives.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventSetBond {
  bond: Bond;
}
export interface EventSetBondProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventSetBond";
  value: Uint8Array;
}
export interface EventSetBondAmino {
  bond?: BondAmino;
}
export interface EventSetBondAminoMsg {
  type: "/pryzm.incentives.v1.EventSetBond";
  value: EventSetBondAmino;
}
export interface EventSetBondSDKType {
  bond: BondSDKType;
}
export interface EventRemoveBond {
  address: string;
  denom: string;
}
export interface EventRemoveBondProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventRemoveBond";
  value: Uint8Array;
}
export interface EventRemoveBondAmino {
  address?: string;
  denom?: string;
}
export interface EventRemoveBondAminoMsg {
  type: "/pryzm.incentives.v1.EventRemoveBond";
  value: EventRemoveBondAmino;
}
export interface EventRemoveBondSDKType {
  address: string;
  denom: string;
}
export interface EventSetPool {
  pool: Pool;
}
export interface EventSetPoolProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventSetPool";
  value: Uint8Array;
}
export interface EventSetPoolAmino {
  pool?: PoolAmino;
}
export interface EventSetPoolAminoMsg {
  type: "/pryzm.incentives.v1.EventSetPool";
  value: EventSetPoolAmino;
}
export interface EventSetPoolSDKType {
  pool: PoolSDKType;
}
export interface EventSetUnbonding {
  unbonding: Unbonding;
}
export interface EventSetUnbondingProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventSetUnbonding";
  value: Uint8Array;
}
export interface EventSetUnbondingAmino {
  unbonding?: UnbondingAmino;
}
export interface EventSetUnbondingAminoMsg {
  type: "/pryzm.incentives.v1.EventSetUnbonding";
  value: EventSetUnbondingAmino;
}
export interface EventSetUnbondingSDKType {
  unbonding: UnbondingSDKType;
}
export interface EventRemoveUnbonding {
  id: bigint;
}
export interface EventRemoveUnbondingProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventRemoveUnbonding";
  value: Uint8Array;
}
export interface EventRemoveUnbondingAmino {
  id?: string;
}
export interface EventRemoveUnbondingAminoMsg {
  type: "/pryzm.incentives.v1.EventRemoveUnbonding";
  value: EventRemoveUnbondingAmino;
}
export interface EventRemoveUnbondingSDKType {
  id: bigint;
}
export interface EventClaimReward {
  address: string;
  bondDenom: string;
  treasury: string;
  rewards: Coin[];
}
export interface EventClaimRewardProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventClaimReward";
  value: Uint8Array;
}
export interface EventClaimRewardAmino {
  address?: string;
  bond_denom?: string;
  treasury?: string;
  rewards?: CoinAmino[];
}
export interface EventClaimRewardAminoMsg {
  type: "/pryzm.incentives.v1.EventClaimReward";
  value: EventClaimRewardAmino;
}
export interface EventClaimRewardSDKType {
  address: string;
  bond_denom: string;
  treasury: string;
  rewards: CoinSDKType[];
}
export interface EventBond {
  address: string;
  amount: Coin;
}
export interface EventBondProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventBond";
  value: Uint8Array;
}
export interface EventBondAmino {
  address?: string;
  amount?: CoinAmino;
}
export interface EventBondAminoMsg {
  type: "/pryzm.incentives.v1.EventBond";
  value: EventBondAmino;
}
export interface EventBondSDKType {
  address: string;
  amount: CoinSDKType;
}
export interface EventUnbond {
  address: string;
  amount: Coin;
  rewards: Coin[];
  unbonding?: Unbonding;
  rewardTreasury: string;
  unbondTreasury: string;
}
export interface EventUnbondProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventUnbond";
  value: Uint8Array;
}
export interface EventUnbondAmino {
  address?: string;
  amount?: CoinAmino;
  rewards?: CoinAmino[];
  unbonding?: UnbondingAmino;
  reward_treasury?: string;
  unbond_treasury?: string;
}
export interface EventUnbondAminoMsg {
  type: "/pryzm.incentives.v1.EventUnbond";
  value: EventUnbondAmino;
}
export interface EventUnbondSDKType {
  address: string;
  amount: CoinSDKType;
  rewards: CoinSDKType[];
  unbonding?: UnbondingSDKType;
  reward_treasury: string;
  unbond_treasury: string;
}
export interface EventClaimUnbonding {
  id: bigint;
}
export interface EventClaimUnbondingProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventClaimUnbonding";
  value: Uint8Array;
}
export interface EventClaimUnbondingAmino {
  id?: string;
}
export interface EventClaimUnbondingAminoMsg {
  type: "/pryzm.incentives.v1.EventClaimUnbonding";
  value: EventClaimUnbondingAmino;
}
export interface EventClaimUnbondingSDKType {
  id: bigint;
}
export interface EventCancelUnbonding {
  id: bigint;
  amount: Coin;
}
export interface EventCancelUnbondingProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventCancelUnbonding";
  value: Uint8Array;
}
export interface EventCancelUnbondingAmino {
  id?: string;
  amount?: CoinAmino;
}
export interface EventCancelUnbondingAminoMsg {
  type: "/pryzm.incentives.v1.EventCancelUnbonding";
  value: EventCancelUnbondingAmino;
}
export interface EventCancelUnbondingSDKType {
  id: bigint;
  amount: CoinSDKType;
}
export interface EventIncentivizePool {
  bondDenom: string;
  amount: Coin[];
}
export interface EventIncentivizePoolProtoMsg {
  typeUrl: "/pryzm.incentives.v1.EventIncentivizePool";
  value: Uint8Array;
}
export interface EventIncentivizePoolAmino {
  bond_denom?: string;
  amount?: CoinAmino[];
}
export interface EventIncentivizePoolAminoMsg {
  type: "/pryzm.incentives.v1.EventIncentivizePool";
  value: EventIncentivizePoolAmino;
}
export interface EventIncentivizePoolSDKType {
  bond_denom: string;
  amount: CoinSDKType[];
}
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/pryzm.incentives.v1.EventSetParams",
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: EventSetParamsAmino): EventSetParams {
    const message = createBaseEventSetParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: EventSetParams): EventSetParamsAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetParamsAminoMsg): EventSetParams {
    return EventSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetParamsProtoMsg): EventSetParams {
    return EventSetParams.decode(message.value);
  },
  toProto(message: EventSetParams): Uint8Array {
    return EventSetParams.encode(message).finish();
  },
  toProtoMsg(message: EventSetParams): EventSetParamsProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
function createBaseEventSetBond(): EventSetBond {
  return {
    bond: Bond.fromPartial({})
  };
}
export const EventSetBond = {
  typeUrl: "/pryzm.incentives.v1.EventSetBond",
  encode(message: EventSetBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bond = Bond.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetBond {
    return {
      bond: isSet(object.bond) ? Bond.fromJSON(object.bond) : undefined
    };
  },
  toJSON(message: EventSetBond): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond ? Bond.toJSON(message.bond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetBond>): EventSetBond {
    const message = createBaseEventSetBond();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  },
  fromAmino(object: EventSetBondAmino): EventSetBond {
    const message = createBaseEventSetBond();
    if (object.bond !== undefined && object.bond !== null) {
      message.bond = Bond.fromAmino(object.bond);
    }
    return message;
  },
  toAmino(message: EventSetBond): EventSetBondAmino {
    const obj: any = {};
    obj.bond = message.bond ? Bond.toAmino(message.bond) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetBondAminoMsg): EventSetBond {
    return EventSetBond.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetBondProtoMsg): EventSetBond {
    return EventSetBond.decode(message.value);
  },
  toProto(message: EventSetBond): Uint8Array {
    return EventSetBond.encode(message).finish();
  },
  toProtoMsg(message: EventSetBond): EventSetBondProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventSetBond",
      value: EventSetBond.encode(message).finish()
    };
  }
};
function createBaseEventRemoveBond(): EventRemoveBond {
  return {
    address: "",
    denom: ""
  };
}
export const EventRemoveBond = {
  typeUrl: "/pryzm.incentives.v1.EventRemoveBond",
  encode(message: EventRemoveBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromJSON(object: any): EventRemoveBond {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemoveBond): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveBond>): EventRemoveBond {
    const message = createBaseEventRemoveBond();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventRemoveBondAmino): EventRemoveBond {
    const message = createBaseEventRemoveBond();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventRemoveBond): EventRemoveBondAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: EventRemoveBondAminoMsg): EventRemoveBond {
    return EventRemoveBond.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveBondProtoMsg): EventRemoveBond {
    return EventRemoveBond.decode(message.value);
  },
  toProto(message: EventRemoveBond): Uint8Array {
    return EventRemoveBond.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveBond): EventRemoveBondProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventRemoveBond",
      value: EventRemoveBond.encode(message).finish()
    };
  }
};
function createBaseEventSetPool(): EventSetPool {
  return {
    pool: Pool.fromPartial({})
  };
}
export const EventSetPool = {
  typeUrl: "/pryzm.incentives.v1.EventSetPool",
  encode(message: EventSetPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetPool {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: EventSetPool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetPool>): EventSetPool {
    const message = createBaseEventSetPool();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: EventSetPoolAmino): EventSetPool {
    const message = createBaseEventSetPool();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: EventSetPool): EventSetPoolAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetPoolAminoMsg): EventSetPool {
    return EventSetPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetPoolProtoMsg): EventSetPool {
    return EventSetPool.decode(message.value);
  },
  toProto(message: EventSetPool): Uint8Array {
    return EventSetPool.encode(message).finish();
  },
  toProtoMsg(message: EventSetPool): EventSetPoolProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventSetPool",
      value: EventSetPool.encode(message).finish()
    };
  }
};
function createBaseEventSetUnbonding(): EventSetUnbonding {
  return {
    unbonding: Unbonding.fromPartial({})
  };
}
export const EventSetUnbonding = {
  typeUrl: "/pryzm.incentives.v1.EventSetUnbonding",
  encode(message: EventSetUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding = Unbonding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetUnbonding {
    return {
      unbonding: isSet(object.unbonding) ? Unbonding.fromJSON(object.unbonding) : undefined
    };
  },
  toJSON(message: EventSetUnbonding): unknown {
    const obj: any = {};
    message.unbonding !== undefined && (obj.unbonding = message.unbonding ? Unbonding.toJSON(message.unbonding) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetUnbonding>): EventSetUnbonding {
    const message = createBaseEventSetUnbonding();
    message.unbonding = object.unbonding !== undefined && object.unbonding !== null ? Unbonding.fromPartial(object.unbonding) : undefined;
    return message;
  },
  fromAmino(object: EventSetUnbondingAmino): EventSetUnbonding {
    const message = createBaseEventSetUnbonding();
    if (object.unbonding !== undefined && object.unbonding !== null) {
      message.unbonding = Unbonding.fromAmino(object.unbonding);
    }
    return message;
  },
  toAmino(message: EventSetUnbonding): EventSetUnbondingAmino {
    const obj: any = {};
    obj.unbonding = message.unbonding ? Unbonding.toAmino(message.unbonding) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetUnbondingAminoMsg): EventSetUnbonding {
    return EventSetUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetUnbondingProtoMsg): EventSetUnbonding {
    return EventSetUnbonding.decode(message.value);
  },
  toProto(message: EventSetUnbonding): Uint8Array {
    return EventSetUnbonding.encode(message).finish();
  },
  toProtoMsg(message: EventSetUnbonding): EventSetUnbondingProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventSetUnbonding",
      value: EventSetUnbonding.encode(message).finish()
    };
  }
};
function createBaseEventRemoveUnbonding(): EventRemoveUnbonding {
  return {
    id: BigInt(0)
  };
}
export const EventRemoveUnbonding = {
  typeUrl: "/pryzm.incentives.v1.EventRemoveUnbonding",
  encode(message: EventRemoveUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveUnbonding {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemoveUnbonding): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveUnbonding>): EventRemoveUnbonding {
    const message = createBaseEventRemoveUnbonding();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventRemoveUnbondingAmino): EventRemoveUnbonding {
    const message = createBaseEventRemoveUnbonding();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventRemoveUnbonding): EventRemoveUnbondingAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRemoveUnbondingAminoMsg): EventRemoveUnbonding {
    return EventRemoveUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveUnbondingProtoMsg): EventRemoveUnbonding {
    return EventRemoveUnbonding.decode(message.value);
  },
  toProto(message: EventRemoveUnbonding): Uint8Array {
    return EventRemoveUnbonding.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveUnbonding): EventRemoveUnbondingProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventRemoveUnbonding",
      value: EventRemoveUnbonding.encode(message).finish()
    };
  }
};
function createBaseEventClaimReward(): EventClaimReward {
  return {
    address: "",
    bondDenom: "",
    treasury: "",
    rewards: []
  };
}
export const EventClaimReward = {
  typeUrl: "/pryzm.incentives.v1.EventClaimReward",
  encode(message: EventClaimReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    if (message.treasury !== "") {
      writer.uint32(26).string(message.treasury);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaimReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.treasury = reader.string();
          break;
        case 4:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventClaimReward {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: EventClaimReward): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EventClaimReward>): EventClaimReward {
    const message = createBaseEventClaimReward();
    message.address = object.address ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.treasury = object.treasury ?? "";
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventClaimRewardAmino): EventClaimReward {
    const message = createBaseEventClaimReward();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = object.treasury;
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventClaimReward): EventClaimRewardAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.bond_denom = message.bondDenom;
    obj.treasury = message.treasury;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventClaimRewardAminoMsg): EventClaimReward {
    return EventClaimReward.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimRewardProtoMsg): EventClaimReward {
    return EventClaimReward.decode(message.value);
  },
  toProto(message: EventClaimReward): Uint8Array {
    return EventClaimReward.encode(message).finish();
  },
  toProtoMsg(message: EventClaimReward): EventClaimRewardProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventClaimReward",
      value: EventClaimReward.encode(message).finish()
    };
  }
};
function createBaseEventBond(): EventBond {
  return {
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const EventBond = {
  typeUrl: "/pryzm.incentives.v1.EventBond",
  encode(message: EventBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromJSON(object: any): EventBond {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventBond): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventBond>): EventBond {
    const message = createBaseEventBond();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventBondAmino): EventBond {
    const message = createBaseEventBond();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventBond): EventBondAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBondAminoMsg): EventBond {
    return EventBond.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBondProtoMsg): EventBond {
    return EventBond.decode(message.value);
  },
  toProto(message: EventBond): Uint8Array {
    return EventBond.encode(message).finish();
  },
  toProtoMsg(message: EventBond): EventBondProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventBond",
      value: EventBond.encode(message).finish()
    };
  }
};
function createBaseEventUnbond(): EventUnbond {
  return {
    address: "",
    amount: Coin.fromPartial({}),
    rewards: [],
    unbonding: undefined,
    rewardTreasury: "",
    unbondTreasury: ""
  };
}
export const EventUnbond = {
  typeUrl: "/pryzm.incentives.v1.EventUnbond",
  encode(message: EventUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardTreasury !== "") {
      writer.uint32(42).string(message.rewardTreasury);
    }
    if (message.unbondTreasury !== "") {
      writer.uint32(50).string(message.unbondTreasury);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUnbond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnbond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unbonding = Unbonding.decode(reader, reader.uint32());
          break;
        case 5:
          message.rewardTreasury = reader.string();
          break;
        case 6:
          message.unbondTreasury = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUnbond {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : [],
      unbonding: isSet(object.unbonding) ? Unbonding.fromJSON(object.unbonding) : undefined,
      rewardTreasury: isSet(object.rewardTreasury) ? String(object.rewardTreasury) : "",
      unbondTreasury: isSet(object.unbondTreasury) ? String(object.unbondTreasury) : ""
    };
  },
  toJSON(message: EventUnbond): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.unbonding !== undefined && (obj.unbonding = message.unbonding ? Unbonding.toJSON(message.unbonding) : undefined);
    message.rewardTreasury !== undefined && (obj.rewardTreasury = message.rewardTreasury);
    message.unbondTreasury !== undefined && (obj.unbondTreasury = message.unbondTreasury);
    return obj;
  },
  fromPartial(object: Partial<EventUnbond>): EventUnbond {
    const message = createBaseEventUnbond();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    message.unbonding = object.unbonding !== undefined && object.unbonding !== null ? Unbonding.fromPartial(object.unbonding) : undefined;
    message.rewardTreasury = object.rewardTreasury ?? "";
    message.unbondTreasury = object.unbondTreasury ?? "";
    return message;
  },
  fromAmino(object: EventUnbondAmino): EventUnbond {
    const message = createBaseEventUnbond();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.unbonding !== undefined && object.unbonding !== null) {
      message.unbonding = Unbonding.fromAmino(object.unbonding);
    }
    if (object.reward_treasury !== undefined && object.reward_treasury !== null) {
      message.rewardTreasury = object.reward_treasury;
    }
    if (object.unbond_treasury !== undefined && object.unbond_treasury !== null) {
      message.unbondTreasury = object.unbond_treasury;
    }
    return message;
  },
  toAmino(message: EventUnbond): EventUnbondAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    obj.unbonding = message.unbonding ? Unbonding.toAmino(message.unbonding) : undefined;
    obj.reward_treasury = message.rewardTreasury;
    obj.unbond_treasury = message.unbondTreasury;
    return obj;
  },
  fromAminoMsg(object: EventUnbondAminoMsg): EventUnbond {
    return EventUnbond.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnbondProtoMsg): EventUnbond {
    return EventUnbond.decode(message.value);
  },
  toProto(message: EventUnbond): Uint8Array {
    return EventUnbond.encode(message).finish();
  },
  toProtoMsg(message: EventUnbond): EventUnbondProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventUnbond",
      value: EventUnbond.encode(message).finish()
    };
  }
};
function createBaseEventClaimUnbonding(): EventClaimUnbonding {
  return {
    id: BigInt(0)
  };
}
export const EventClaimUnbonding = {
  typeUrl: "/pryzm.incentives.v1.EventClaimUnbonding",
  encode(message: EventClaimUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaimUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventClaimUnbonding {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventClaimUnbonding): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventClaimUnbonding>): EventClaimUnbonding {
    const message = createBaseEventClaimUnbonding();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventClaimUnbondingAmino): EventClaimUnbonding {
    const message = createBaseEventClaimUnbonding();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventClaimUnbonding): EventClaimUnbondingAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventClaimUnbondingAminoMsg): EventClaimUnbonding {
    return EventClaimUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimUnbondingProtoMsg): EventClaimUnbonding {
    return EventClaimUnbonding.decode(message.value);
  },
  toProto(message: EventClaimUnbonding): Uint8Array {
    return EventClaimUnbonding.encode(message).finish();
  },
  toProtoMsg(message: EventClaimUnbonding): EventClaimUnbondingProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventClaimUnbonding",
      value: EventClaimUnbonding.encode(message).finish()
    };
  }
};
function createBaseEventCancelUnbonding(): EventCancelUnbonding {
  return {
    id: BigInt(0),
    amount: Coin.fromPartial({})
  };
}
export const EventCancelUnbonding = {
  typeUrl: "/pryzm.incentives.v1.EventCancelUnbonding",
  encode(message: EventCancelUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
  fromJSON(object: any): EventCancelUnbonding {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventCancelUnbonding): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventCancelUnbonding>): EventCancelUnbonding {
    const message = createBaseEventCancelUnbonding();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventCancelUnbondingAmino): EventCancelUnbonding {
    const message = createBaseEventCancelUnbonding();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventCancelUnbonding): EventCancelUnbondingAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelUnbondingAminoMsg): EventCancelUnbonding {
    return EventCancelUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelUnbondingProtoMsg): EventCancelUnbonding {
    return EventCancelUnbonding.decode(message.value);
  },
  toProto(message: EventCancelUnbonding): Uint8Array {
    return EventCancelUnbonding.encode(message).finish();
  },
  toProtoMsg(message: EventCancelUnbonding): EventCancelUnbondingProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventCancelUnbonding",
      value: EventCancelUnbonding.encode(message).finish()
    };
  }
};
function createBaseEventIncentivizePool(): EventIncentivizePool {
  return {
    bondDenom: "",
    amount: []
  };
}
export const EventIncentivizePool = {
  typeUrl: "/pryzm.incentives.v1.EventIncentivizePool",
  encode(message: EventIncentivizePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventIncentivizePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIncentivizePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventIncentivizePool {
    return {
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: EventIncentivizePool): unknown {
    const obj: any = {};
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EventIncentivizePool>): EventIncentivizePool {
    const message = createBaseEventIncentivizePool();
    message.bondDenom = object.bondDenom ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventIncentivizePoolAmino): EventIncentivizePool {
    const message = createBaseEventIncentivizePool();
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventIncentivizePool): EventIncentivizePoolAmino {
    const obj: any = {};
    obj.bond_denom = message.bondDenom;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventIncentivizePoolAminoMsg): EventIncentivizePool {
    return EventIncentivizePool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventIncentivizePoolProtoMsg): EventIncentivizePool {
    return EventIncentivizePool.decode(message.value);
  },
  toProto(message: EventIncentivizePool): Uint8Array {
    return EventIncentivizePool.encode(message).finish();
  },
  toProtoMsg(message: EventIncentivizePool): EventIncentivizePoolProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.EventIncentivizePool",
      value: EventIncentivizePool.encode(message).finish()
    };
  }
};