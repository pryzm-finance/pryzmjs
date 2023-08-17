import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, isObject } from "../../helpers";
export interface BondRewardToken {
  pendingAmount: string;
  userIndex: string;
}
export interface BondRewardTokenSDKType {
  pending_amount: string;
  user_index: string;
}
export interface Bond_RewardsEntry {
  key: string;
  value: BondRewardToken;
}
export interface Bond_RewardsEntrySDKType {
  key: string;
  value: BondRewardTokenSDKType;
}
export interface Bond {
  address: string;
  token: Coin;
  rewards: {
    [key: string]: BondRewardToken;
  };
}
export interface BondSDKType {
  address: string;
  token: CoinSDKType;
  rewards: {
    [key: string]: BondRewardTokenSDKType;
  };
}
function createBaseBondRewardToken(): BondRewardToken {
  return {
    pendingAmount: "",
    userIndex: ""
  };
}
export const BondRewardToken = {
  encode(message: BondRewardToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pendingAmount !== "") {
      writer.uint32(10).string(message.pendingAmount);
    }
    if (message.userIndex !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.userIndex, 18).atomics);
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
          message.pendingAmount = reader.string();
          break;
        case 2:
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
      pendingAmount: isSet(object.pendingAmount) ? String(object.pendingAmount) : "",
      userIndex: isSet(object.userIndex) ? String(object.userIndex) : ""
    };
  },
  toJSON(message: BondRewardToken): unknown {
    const obj: any = {};
    message.pendingAmount !== undefined && (obj.pendingAmount = message.pendingAmount);
    message.userIndex !== undefined && (obj.userIndex = message.userIndex);
    return obj;
  },
  fromPartial(object: Partial<BondRewardToken>): BondRewardToken {
    const message = createBaseBondRewardToken();
    message.pendingAmount = object.pendingAmount ?? "";
    message.userIndex = object.userIndex ?? "";
    return message;
  }
};
function createBaseBond_RewardsEntry(): Bond_RewardsEntry {
  return {
    key: "",
    value: BondRewardToken.fromPartial({})
  };
}
export const Bond_RewardsEntry = {
  encode(message: Bond_RewardsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      BondRewardToken.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bond_RewardsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBond_RewardsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = BondRewardToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bond_RewardsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BondRewardToken.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: Bond_RewardsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? BondRewardToken.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Bond_RewardsEntry>): Bond_RewardsEntry {
    const message = createBaseBond_RewardsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BondRewardToken.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseBond(): Bond {
  return {
    address: "",
    token: Coin.fromPartial({}),
    rewards: {}
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
    Object.entries(message.rewards).forEach(([key, value]) => {
      Bond_RewardsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
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
          const entry3 = Bond_RewardsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.rewards[entry3.key] = entry3.value;
          }
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
      rewards: isObject(object.rewards) ? Object.entries(object.rewards).reduce<{
        [key: string]: BondRewardToken;
      }>((acc, [key, value]) => {
        acc[key] = BondRewardToken.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: Bond): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    obj.rewards = {};
    if (message.rewards) {
      Object.entries(message.rewards).forEach(([k, v]) => {
        obj.rewards[k] = BondRewardToken.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial(object: Partial<Bond>): Bond {
    const message = createBaseBond();
    message.address = object.address ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.rewards = Object.entries(object.rewards ?? {}).reduce<{
      [key: string]: BondRewardToken;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BondRewardToken.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};