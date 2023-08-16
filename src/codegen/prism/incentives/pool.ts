import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, isObject } from "../../helpers";
export interface PoolRewardToken {
  amount: string;
  globalIndex: string;
  weight: string;
}
export interface PoolRewardTokenSDKType {
  amount: string;
  global_index: string;
  weight: string;
}
export interface Pool_RewardsEntry {
  key: string;
  value: PoolRewardToken;
}
export interface Pool_RewardsEntrySDKType {
  key: string;
  value: PoolRewardTokenSDKType;
}
export interface Pool {
  bondedToken: Coin;
  rewards: {
    [key: string]: PoolRewardToken;
  };
}
export interface PoolSDKType {
  bonded_token: CoinSDKType;
  rewards: {
    [key: string]: PoolRewardTokenSDKType;
  };
}
function createBasePoolRewardToken(): PoolRewardToken {
  return {
    amount: "",
    globalIndex: "",
    weight: ""
  };
}
export const PoolRewardToken = {
  encode(message: PoolRewardToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.globalIndex !== "") {
      writer.uint32(18).string(message.globalIndex);
    }
    if (message.weight !== "") {
      writer.uint32(26).string(message.weight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolRewardToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRewardToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.globalIndex = reader.string();
          break;
        case 3:
          message.weight = reader.string();
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
      amount: isSet(object.amount) ? String(object.amount) : "",
      globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: PoolRewardToken): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.globalIndex !== undefined && (obj.globalIndex = message.globalIndex);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<PoolRewardToken>): PoolRewardToken {
    const message = createBasePoolRewardToken();
    message.amount = object.amount ?? "";
    message.globalIndex = object.globalIndex ?? "";
    message.weight = object.weight ?? "";
    return message;
  }
};
function createBasePool_RewardsEntry(): Pool_RewardsEntry {
  return {
    key: "",
    value: PoolRewardToken.fromPartial({})
  };
}
export const Pool_RewardsEntry = {
  encode(message: Pool_RewardsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PoolRewardToken.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Pool_RewardsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool_RewardsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PoolRewardToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool_RewardsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? PoolRewardToken.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: Pool_RewardsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? PoolRewardToken.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Pool_RewardsEntry>): Pool_RewardsEntry {
    const message = createBasePool_RewardsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? PoolRewardToken.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBasePool(): Pool {
  return {
    bondedToken: Coin.fromPartial({}),
    rewards: {}
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondedToken !== undefined) {
      Coin.encode(message.bondedToken, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.rewards).forEach(([key, value]) => {
      Pool_RewardsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedToken = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          const entry2 = Pool_RewardsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.rewards[entry2.key] = entry2.value;
          }
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
      rewards: isObject(object.rewards) ? Object.entries(object.rewards).reduce<{
        [key: string]: PoolRewardToken;
      }>((acc, [key, value]) => {
        acc[key] = PoolRewardToken.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.bondedToken !== undefined && (obj.bondedToken = message.bondedToken ? Coin.toJSON(message.bondedToken) : undefined);
    obj.rewards = {};
    if (message.rewards) {
      Object.entries(message.rewards).forEach(([k, v]) => {
        obj.rewards[k] = PoolRewardToken.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.bondedToken = object.bondedToken !== undefined && object.bondedToken !== null ? Coin.fromPartial(object.bondedToken) : undefined;
    message.rewards = Object.entries(object.rewards ?? {}).reduce<{
      [key: string]: PoolRewardToken;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = PoolRewardToken.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};