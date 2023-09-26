import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
/** Used internally to keep track of redelegations */
export interface QueuedRedelegation {
  entries: Redelegation[];
}
/** Used internally to keep track of redelegations */
export interface QueuedRedelegationSDKType {
  entries: RedelegationSDKType[];
}
export interface Redelegation {
  /** internal or external user address */
  delegatorAddress: string;
  /** redelegation source validator */
  srcValidatorAddress: string;
  /** redelegation destination validator */
  dstValidatorAddress: string;
  /** amount to redelegate */
  balance: Coin;
}
export interface RedelegationSDKType {
  delegator_address: string;
  src_validator_address: string;
  dst_validator_address: string;
  balance: CoinSDKType;
}
/** Used on QueryServer */
export interface RedelegationEntry {
  /** internal or external user address */
  delegatorAddress: string;
  /** redelegation source validator */
  srcValidatorAddress: string;
  /** redelegation destination validator */
  dstValidatorAddress: string;
  /** amount to redelegate */
  balance: Coin;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime: Timestamp;
}
/** Used on QueryServer */
export interface RedelegationEntrySDKType {
  delegator_address: string;
  src_validator_address: string;
  dst_validator_address: string;
  balance: CoinSDKType;
  completion_time: TimestampSDKType;
}
function createBaseQueuedRedelegation(): QueuedRedelegation {
  return {
    entries: []
  };
}
export const QueuedRedelegation = {
  encode(message: QueuedRedelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      Redelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueuedRedelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(Redelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueuedRedelegation {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Redelegation.fromJSON(e)) : []
    };
  },
  toJSON(message: QueuedRedelegation): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Redelegation.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueuedRedelegation>): QueuedRedelegation {
    const message = createBaseQueuedRedelegation();
    message.entries = object.entries?.map(e => Redelegation.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    srcValidatorAddress: "",
    dstValidatorAddress: "",
    balance: Coin.fromPartial({})
  };
}
export const Redelegation = {
  encode(message: Redelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.srcValidatorAddress !== "") {
      writer.uint32(18).string(message.srcValidatorAddress);
    }
    if (message.dstValidatorAddress !== "") {
      writer.uint32(26).string(message.dstValidatorAddress);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.srcValidatorAddress = reader.string();
          break;
        case 3:
          message.dstValidatorAddress = reader.string();
          break;
        case 4:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Redelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      srcValidatorAddress: isSet(object.srcValidatorAddress) ? String(object.srcValidatorAddress) : "",
      dstValidatorAddress: isSet(object.dstValidatorAddress) ? String(object.dstValidatorAddress) : "",
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.srcValidatorAddress !== undefined && (obj.srcValidatorAddress = message.srcValidatorAddress);
    message.dstValidatorAddress !== undefined && (obj.dstValidatorAddress = message.dstValidatorAddress);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.srcValidatorAddress = object.srcValidatorAddress ?? "";
    message.dstValidatorAddress = object.dstValidatorAddress ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    delegatorAddress: "",
    srcValidatorAddress: "",
    dstValidatorAddress: "",
    balance: Coin.fromPartial({}),
    completionTime: Timestamp.fromPartial({})
  };
}
export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.srcValidatorAddress !== "") {
      writer.uint32(18).string(message.srcValidatorAddress);
    }
    if (message.dstValidatorAddress !== "") {
      writer.uint32(26).string(message.dstValidatorAddress);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.srcValidatorAddress = reader.string();
          break;
        case 3:
          message.dstValidatorAddress = reader.string();
          break;
        case 4:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntry {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      srcValidatorAddress: isSet(object.srcValidatorAddress) ? String(object.srcValidatorAddress) : "",
      dstValidatorAddress: isSet(object.dstValidatorAddress) ? String(object.dstValidatorAddress) : "",
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.srcValidatorAddress !== undefined && (obj.srcValidatorAddress = message.srcValidatorAddress);
    message.dstValidatorAddress !== undefined && (obj.dstValidatorAddress = message.dstValidatorAddress);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.srcValidatorAddress = object.srcValidatorAddress ?? "";
    message.dstValidatorAddress = object.dstValidatorAddress ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  }
};