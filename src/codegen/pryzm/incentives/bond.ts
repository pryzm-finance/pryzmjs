import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface BondRewardToken {
  denom: string;
  pendingAmount: string;
  userIndex: string;
}
export interface BondRewardTokenSDKType {
  denom: string;
  pending_amount: string;
  user_index: string;
}
export interface Bond {
  address: string;
  token: Coin;
  rewards: BondRewardToken[];
}
export interface BondSDKType {
  address: string;
  token: CoinSDKType;
  rewards: BondRewardTokenSDKType[];
}
function createBaseBondRewardToken(): BondRewardToken {
  return {
    denom: "",
    pendingAmount: "",
    userIndex: ""
  };
}
export const BondRewardToken = {
  encode(message: BondRewardToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pendingAmount !== "") {
      writer.uint32(18).string(message.pendingAmount);
    }
    if (message.userIndex !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.userIndex, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BondRewardToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondRewardToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pendingAmount = reader.string();
          break;
        case 3:
          message.userIndex = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondRewardToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      pendingAmount: isSet(object.pendingAmount) ? String(object.pendingAmount) : "",
      userIndex: isSet(object.userIndex) ? String(object.userIndex) : ""
    };
  },
  toJSON(message: BondRewardToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pendingAmount !== undefined && (obj.pendingAmount = message.pendingAmount);
    message.userIndex !== undefined && (obj.userIndex = message.userIndex);
    return obj;
  },
  fromPartial(object: Partial<BondRewardToken>): BondRewardToken {
    const message = createBaseBondRewardToken();
    message.denom = object.denom ?? "";
    message.pendingAmount = object.pendingAmount ?? "";
    message.userIndex = object.userIndex ?? "";
    return message;
  }
};
function createBaseBond(): Bond {
  return {
    address: "",
    token: Coin.fromPartial({}),
    rewards: []
  };
}
export const Bond = {
  encode(message: Bond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rewards) {
      BondRewardToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.rewards.push(BondRewardToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bond {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => BondRewardToken.fromJSON(e)) : []
    };
  },
  toJSON(message: Bond): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? BondRewardToken.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Bond>): Bond {
    const message = createBaseBond();
    message.address = object.address ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.rewards = object.rewards?.map(e => BondRewardToken.fromPartial(e)) || [];
    return message;
  }
};