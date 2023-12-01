import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface PoolRewardToken {
  denom: string;
  amount: string;
  globalIndex: string;
  weight: string;
}
export interface PoolRewardTokenSDKType {
  denom: string;
  amount: string;
  global_index: string;
  weight: string;
}
export interface Pool {
  bondedToken: Coin;
  rewards: PoolRewardToken[];
}
export interface PoolSDKType {
  bonded_token: CoinSDKType;
  rewards: PoolRewardTokenSDKType[];
}
function createBasePoolRewardToken(): PoolRewardToken {
  return {
    denom: "",
    amount: "",
    globalIndex: "",
    weight: ""
  };
}
export const PoolRewardToken = {
  encode(message: PoolRewardToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.globalIndex !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.globalIndex, 18).atomics);
    }
    if (message.weight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRewardToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRewardToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.globalIndex = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRewardToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: PoolRewardToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.globalIndex !== undefined && (obj.globalIndex = message.globalIndex);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<PoolRewardToken>): PoolRewardToken {
    const message = createBasePoolRewardToken();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.globalIndex = object.globalIndex ?? "";
    message.weight = object.weight ?? "";
    return message;
  }
};
function createBasePool(): Pool {
  return {
    bondedToken: Coin.fromPartial({}),
    rewards: []
  };
}
export const Pool = {
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondedToken !== undefined) {
      Coin.encode(message.bondedToken, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewards) {
      PoolRewardToken.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedToken = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.rewards.push(PoolRewardToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      bondedToken: isSet(object.bondedToken) ? Coin.fromJSON(object.bondedToken) : undefined,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => PoolRewardToken.fromJSON(e)) : []
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.bondedToken !== undefined && (obj.bondedToken = message.bondedToken ? Coin.toJSON(message.bondedToken) : undefined);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? PoolRewardToken.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.bondedToken = object.bondedToken !== undefined && object.bondedToken !== null ? Coin.fromPartial(object.bondedToken) : undefined;
    message.rewards = object.rewards?.map(e => PoolRewardToken.fromPartial(e)) || [];
    return message;
  }
};