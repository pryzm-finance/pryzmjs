import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Bond, BondSDKType } from "./bond";
import { Unbonding, UnbondingSDKType } from "./unbonding";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
export interface WeightedRewardToken {
  denom: string;
  /**
   * weight is used for reward portion for each pool, when a reward is
   * accrued from dist module, it will be distributed to each pool according to the weights
   */
  weight: string;
}
export interface WeightedRewardTokenSDKType {
  denom: string;
  weight: string;
}
export interface MsgCreatePool {
  authority: string;
  bondDenom: string;
  rewardTokens: WeightedRewardToken[];
}
export interface MsgCreatePoolSDKType {
  authority: string;
  bond_denom: string;
  reward_tokens: WeightedRewardTokenSDKType[];
}
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseSDKType {}
export interface MsgUpdateRewardTokenWeight {
  authority: string;
  bondDenom: string;
  rewardToken: WeightedRewardToken;
}
export interface MsgUpdateRewardTokenWeightSDKType {
  authority: string;
  bond_denom: string;
  reward_token: WeightedRewardTokenSDKType;
}
export interface MsgUpdateRewardTokenWeightResponse {}
export interface MsgUpdateRewardTokenWeightResponseSDKType {}
export interface MsgAddRewardTokenToPool {
  authority: string;
  bondDenom: string;
  rewardToken: WeightedRewardToken;
}
export interface MsgAddRewardTokenToPoolSDKType {
  authority: string;
  bond_denom: string;
  reward_token: WeightedRewardTokenSDKType;
}
export interface MsgAddRewardTokenToPoolResponse {}
export interface MsgAddRewardTokenToPoolResponseSDKType {}
export interface MsgBond {
  creator: string;
  amount: Coin;
}
export interface MsgBondSDKType {
  creator: string;
  amount: CoinSDKType;
}
export interface MsgBondResponse {
  bond: Bond;
}
export interface MsgBondResponseSDKType {
  bond: BondSDKType;
}
export interface MsgUnbond {
  creator: string;
  amount: Coin;
  unbondTreasury: string;
  rewardTreasury: string;
  autoClaim: boolean;
}
export interface MsgUnbondSDKType {
  creator: string;
  amount: CoinSDKType;
  unbond_treasury: string;
  reward_treasury: string;
  auto_claim: boolean;
}
export interface MsgUnbondResponse {
  unbonding: Unbonding;
  rewards: Coin[];
}
export interface MsgUnbondResponseSDKType {
  unbonding: UnbondingSDKType;
  rewards: CoinSDKType[];
}
export interface MsgClaimReward {
  creator: string;
  bondDenom: string;
  treasury: string;
}
export interface MsgClaimRewardSDKType {
  creator: string;
  bond_denom: string;
  treasury: string;
}
export interface MsgClaimRewardResponse {
  rewards: Coin[];
}
export interface MsgClaimRewardResponseSDKType {
  rewards: CoinSDKType[];
}
export interface MsgClaimUnbonding {
  creator: string;
  unbondingId: bigint;
}
export interface MsgClaimUnbondingSDKType {
  creator: string;
  unbonding_id: bigint;
}
export interface MsgClaimUnbondingResponse {
  amount: Coin;
}
export interface MsgClaimUnbondingResponseSDKType {
  amount: CoinSDKType;
}
export interface MsgCancelUnbonding {
  creator: string;
  unbondingId: bigint;
  amount: Coin;
}
export interface MsgCancelUnbondingSDKType {
  creator: string;
  unbonding_id: bigint;
  amount: CoinSDKType;
}
export interface MsgCancelUnbondingResponse {
  bond: Bond;
}
export interface MsgCancelUnbondingResponseSDKType {
  bond: BondSDKType;
}
export interface MsgIncentivizePool {
  creator: string;
  bondDenom: string;
  amount: Coin[];
}
export interface MsgIncentivizePoolSDKType {
  creator: string;
  bond_denom: string;
  amount: CoinSDKType[];
}
export interface MsgIncentivizePoolResponse {}
export interface MsgIncentivizePoolResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseWeightedRewardToken(): WeightedRewardToken {
  return {
    denom: "",
    weight: ""
  };
}
export const WeightedRewardToken = {
  encode(message: WeightedRewardToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedRewardToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedRewardToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
  fromJSON(object: any): WeightedRewardToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: WeightedRewardToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<WeightedRewardToken>): WeightedRewardToken {
    const message = createBaseWeightedRewardToken();
    message.denom = object.denom ?? "";
    message.weight = object.weight ?? "";
    return message;
  }
};
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    authority: "",
    bondDenom: "",
    rewardTokens: []
  };
}
export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    for (const v of message.rewardTokens) {
      WeightedRewardToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.rewardTokens.push(WeightedRewardToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      rewardTokens: Array.isArray(object?.rewardTokens) ? object.rewardTokens.map((e: any) => WeightedRewardToken.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    if (message.rewardTokens) {
      obj.rewardTokens = message.rewardTokens.map(e => e ? WeightedRewardToken.toJSON(e) : undefined);
    } else {
      obj.rewardTokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.authority = object.authority ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.rewardTokens = object.rewardTokens?.map(e => WeightedRewardToken.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
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
  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },
  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  }
};
function createBaseMsgUpdateRewardTokenWeight(): MsgUpdateRewardTokenWeight {
  return {
    authority: "",
    bondDenom: "",
    rewardToken: WeightedRewardToken.fromPartial({})
  };
}
export const MsgUpdateRewardTokenWeight = {
  encode(message: MsgUpdateRewardTokenWeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    if (message.rewardToken !== undefined) {
      WeightedRewardToken.encode(message.rewardToken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRewardTokenWeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardTokenWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.rewardToken = WeightedRewardToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateRewardTokenWeight {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      rewardToken: isSet(object.rewardToken) ? WeightedRewardToken.fromJSON(object.rewardToken) : undefined
    };
  },
  toJSON(message: MsgUpdateRewardTokenWeight): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken ? WeightedRewardToken.toJSON(message.rewardToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateRewardTokenWeight>): MsgUpdateRewardTokenWeight {
    const message = createBaseMsgUpdateRewardTokenWeight();
    message.authority = object.authority ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.rewardToken = object.rewardToken !== undefined && object.rewardToken !== null ? WeightedRewardToken.fromPartial(object.rewardToken) : undefined;
    return message;
  }
};
function createBaseMsgUpdateRewardTokenWeightResponse(): MsgUpdateRewardTokenWeightResponse {
  return {};
}
export const MsgUpdateRewardTokenWeightResponse = {
  encode(_: MsgUpdateRewardTokenWeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRewardTokenWeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardTokenWeightResponse();
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
  fromJSON(_: any): MsgUpdateRewardTokenWeightResponse {
    return {};
  },
  toJSON(_: MsgUpdateRewardTokenWeightResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateRewardTokenWeightResponse>): MsgUpdateRewardTokenWeightResponse {
    const message = createBaseMsgUpdateRewardTokenWeightResponse();
    return message;
  }
};
function createBaseMsgAddRewardTokenToPool(): MsgAddRewardTokenToPool {
  return {
    authority: "",
    bondDenom: "",
    rewardToken: WeightedRewardToken.fromPartial({})
  };
}
export const MsgAddRewardTokenToPool = {
  encode(message: MsgAddRewardTokenToPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    if (message.rewardToken !== undefined) {
      WeightedRewardToken.encode(message.rewardToken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddRewardTokenToPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardTokenToPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.rewardToken = WeightedRewardToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddRewardTokenToPool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      rewardToken: isSet(object.rewardToken) ? WeightedRewardToken.fromJSON(object.rewardToken) : undefined
    };
  },
  toJSON(message: MsgAddRewardTokenToPool): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken ? WeightedRewardToken.toJSON(message.rewardToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgAddRewardTokenToPool>): MsgAddRewardTokenToPool {
    const message = createBaseMsgAddRewardTokenToPool();
    message.authority = object.authority ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.rewardToken = object.rewardToken !== undefined && object.rewardToken !== null ? WeightedRewardToken.fromPartial(object.rewardToken) : undefined;
    return message;
  }
};
function createBaseMsgAddRewardTokenToPoolResponse(): MsgAddRewardTokenToPoolResponse {
  return {};
}
export const MsgAddRewardTokenToPoolResponse = {
  encode(_: MsgAddRewardTokenToPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddRewardTokenToPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardTokenToPoolResponse();
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
  fromJSON(_: any): MsgAddRewardTokenToPoolResponse {
    return {};
  },
  toJSON(_: MsgAddRewardTokenToPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAddRewardTokenToPoolResponse>): MsgAddRewardTokenToPoolResponse {
    const message = createBaseMsgAddRewardTokenToPoolResponse();
    return message;
  }
};
function createBaseMsgBond(): MsgBond {
  return {
    creator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBond = {
  encode(message: MsgBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgBond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgBond>): MsgBond {
    const message = createBaseMsgBond();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgBondResponse(): MsgBondResponse {
  return {
    bond: Bond.fromPartial({})
  };
}
export const MsgBondResponse = {
  encode(message: MsgBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondResponse();
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
  fromJSON(object: any): MsgBondResponse {
    return {
      bond: isSet(object.bond) ? Bond.fromJSON(object.bond) : undefined
    };
  },
  toJSON(message: MsgBondResponse): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond ? Bond.toJSON(message.bond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgBondResponse>): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  }
};
function createBaseMsgUnbond(): MsgUnbond {
  return {
    creator: "",
    amount: Coin.fromPartial({}),
    unbondTreasury: "",
    rewardTreasury: "",
    autoClaim: false
  };
}
export const MsgUnbond = {
  encode(message: MsgUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.unbondTreasury !== "") {
      writer.uint32(26).string(message.unbondTreasury);
    }
    if (message.rewardTreasury !== "") {
      writer.uint32(34).string(message.rewardTreasury);
    }
    if (message.autoClaim === true) {
      writer.uint32(40).bool(message.autoClaim);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        case 3:
          message.unbondTreasury = reader.string();
          break;
        case 4:
          message.rewardTreasury = reader.string();
          break;
        case 5:
          message.autoClaim = reader.bool();
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
      unbondTreasury: isSet(object.unbondTreasury) ? String(object.unbondTreasury) : "",
      rewardTreasury: isSet(object.rewardTreasury) ? String(object.rewardTreasury) : "",
      autoClaim: isSet(object.autoClaim) ? Boolean(object.autoClaim) : false
    };
  },
  toJSON(message: MsgUnbond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.unbondTreasury !== undefined && (obj.unbondTreasury = message.unbondTreasury);
    message.rewardTreasury !== undefined && (obj.rewardTreasury = message.rewardTreasury);
    message.autoClaim !== undefined && (obj.autoClaim = message.autoClaim);
    return obj;
  },
  fromPartial(object: Partial<MsgUnbond>): MsgUnbond {
    const message = createBaseMsgUnbond();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.unbondTreasury = object.unbondTreasury ?? "";
    message.rewardTreasury = object.rewardTreasury ?? "";
    message.autoClaim = object.autoClaim ?? false;
    return message;
  }
};
function createBaseMsgUnbondResponse(): MsgUnbondResponse {
  return {
    unbonding: Unbonding.fromPartial({}),
    rewards: []
  };
}
export const MsgUnbondResponse = {
  encode(message: MsgUnbondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding = Unbonding.decode(reader, reader.uint32());
          break;
        case 2:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
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
      unbonding: isSet(object.unbonding) ? Unbonding.fromJSON(object.unbonding) : undefined,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUnbondResponse): unknown {
    const obj: any = {};
    message.unbonding !== undefined && (obj.unbonding = message.unbonding ? Unbonding.toJSON(message.unbonding) : undefined);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUnbondResponse>): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    message.unbonding = object.unbonding !== undefined && object.unbonding !== null ? Unbonding.fromPartial(object.unbonding) : undefined;
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgClaimReward(): MsgClaimReward {
  return {
    creator: "",
    bondDenom: "",
    treasury: ""
  };
}
export const MsgClaimReward = {
  encode(message: MsgClaimReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    if (message.treasury !== "") {
      writer.uint32(26).string(message.treasury);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.treasury = reader.string();
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
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : ""
    };
  },
  toJSON(message: MsgClaimReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimReward>): MsgClaimReward {
    const message = createBaseMsgClaimReward();
    message.creator = object.creator ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.treasury = object.treasury ?? "";
    return message;
  }
};
function createBaseMsgClaimRewardResponse(): MsgClaimRewardResponse {
  return {
    rewards: []
  };
}
export const MsgClaimRewardResponse = {
  encode(message: MsgClaimRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
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
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgClaimRewardResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgClaimRewardResponse>): MsgClaimRewardResponse {
    const message = createBaseMsgClaimRewardResponse();
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgClaimUnbonding(): MsgClaimUnbonding {
  return {
    creator: "",
    unbondingId: BigInt(0)
  };
}
export const MsgClaimUnbonding = {
  encode(message: MsgClaimUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.unbondingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimUnbonding {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      unbondingId: isSet(object.unbondingId) ? BigInt(object.unbondingId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgClaimUnbonding): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.unbondingId !== undefined && (obj.unbondingId = (message.unbondingId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgClaimUnbonding>): MsgClaimUnbonding {
    const message = createBaseMsgClaimUnbonding();
    message.creator = object.creator ?? "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseMsgClaimUnbondingResponse(): MsgClaimUnbondingResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgClaimUnbondingResponse = {
  encode(message: MsgClaimUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimUnbondingResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgClaimUnbondingResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimUnbondingResponse>): MsgClaimUnbondingResponse {
    const message = createBaseMsgClaimUnbondingResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgCancelUnbonding(): MsgCancelUnbonding {
  return {
    creator: "",
    unbondingId: BigInt(0),
    amount: Coin.fromPartial({})
  };
}
export const MsgCancelUnbonding = {
  encode(message: MsgCancelUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.unbondingId = reader.uint64();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelUnbonding {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      unbondingId: isSet(object.unbondingId) ? BigInt(object.unbondingId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgCancelUnbonding): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.unbondingId !== undefined && (obj.unbondingId = (message.unbondingId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelUnbonding>): MsgCancelUnbonding {
    const message = createBaseMsgCancelUnbonding();
    message.creator = object.creator ?? "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgCancelUnbondingResponse(): MsgCancelUnbondingResponse {
  return {
    bond: Bond.fromPartial({})
  };
}
export const MsgCancelUnbondingResponse = {
  encode(message: MsgCancelUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingResponse();
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
  fromJSON(object: any): MsgCancelUnbondingResponse {
    return {
      bond: isSet(object.bond) ? Bond.fromJSON(object.bond) : undefined
    };
  },
  toJSON(message: MsgCancelUnbondingResponse): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond ? Bond.toJSON(message.bond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelUnbondingResponse>): MsgCancelUnbondingResponse {
    const message = createBaseMsgCancelUnbondingResponse();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  }
};
function createBaseMsgIncentivizePool(): MsgIncentivizePool {
  return {
    creator: "",
    bondDenom: "",
    amount: []
  };
}
export const MsgIncentivizePool = {
  encode(message: MsgIncentivizePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIncentivizePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncentivizePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
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
  fromJSON(object: any): MsgIncentivizePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgIncentivizePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgIncentivizePool>): MsgIncentivizePool {
    const message = createBaseMsgIncentivizePool();
    message.creator = object.creator ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgIncentivizePoolResponse(): MsgIncentivizePoolResponse {
  return {};
}
export const MsgIncentivizePoolResponse = {
  encode(_: MsgIncentivizePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIncentivizePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncentivizePoolResponse();
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
  fromJSON(_: any): MsgIncentivizePoolResponse {
    return {};
  },
  toJSON(_: MsgIncentivizePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgIncentivizePoolResponse>): MsgIncentivizePoolResponse {
    const message = createBaseMsgIncentivizePoolResponse();
    return message;
  }
};