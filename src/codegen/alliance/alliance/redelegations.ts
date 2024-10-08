import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
/** Used internally to keep track of redelegations */
export interface QueuedRedelegation {
  entries: Redelegation[];
}
export interface QueuedRedelegationProtoMsg {
  typeUrl: "/alliance.alliance.QueuedRedelegation";
  value: Uint8Array;
}
/** Used internally to keep track of redelegations */
export interface QueuedRedelegationAmino {
  entries?: RedelegationAmino[];
}
export interface QueuedRedelegationAminoMsg {
  type: "/alliance.alliance.QueuedRedelegation";
  value: QueuedRedelegationAmino;
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
export interface RedelegationProtoMsg {
  typeUrl: "/alliance.alliance.Redelegation";
  value: Uint8Array;
}
export interface RedelegationAmino {
  /** internal or external user address */
  delegator_address?: string;
  /** redelegation source validator */
  src_validator_address?: string;
  /** redelegation destination validator */
  dst_validator_address?: string;
  /** amount to redelegate */
  balance?: CoinAmino;
}
export interface RedelegationAminoMsg {
  type: "/alliance.alliance.Redelegation";
  value: RedelegationAmino;
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
export interface RedelegationEntryProtoMsg {
  typeUrl: "/alliance.alliance.RedelegationEntry";
  value: Uint8Array;
}
/** Used on QueryServer */
export interface RedelegationEntryAmino {
  /** internal or external user address */
  delegator_address?: string;
  /** redelegation source validator */
  src_validator_address?: string;
  /** redelegation destination validator */
  dst_validator_address?: string;
  /** amount to redelegate */
  balance?: CoinAmino;
  /** completion_time defines the unix time for redelegation completion. */
  completion_time?: string;
}
export interface RedelegationEntryAminoMsg {
  type: "/alliance.alliance.RedelegationEntry";
  value: RedelegationEntryAmino;
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
  typeUrl: "/alliance.alliance.QueuedRedelegation",
  is(o: any): o is QueuedRedelegation {
    return o && (o.$typeUrl === QueuedRedelegation.typeUrl || Array.isArray(o.entries) && (!o.entries.length || Redelegation.is(o.entries[0])));
  },
  isSDK(o: any): o is QueuedRedelegationSDKType {
    return o && (o.$typeUrl === QueuedRedelegation.typeUrl || Array.isArray(o.entries) && (!o.entries.length || Redelegation.isSDK(o.entries[0])));
  },
  isAmino(o: any): o is QueuedRedelegationAmino {
    return o && (o.$typeUrl === QueuedRedelegation.typeUrl || Array.isArray(o.entries) && (!o.entries.length || Redelegation.isAmino(o.entries[0])));
  },
  encode(message: QueuedRedelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      Redelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueuedRedelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(Redelegation.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: QueuedRedelegationAmino): QueuedRedelegation {
    const message = createBaseQueuedRedelegation();
    message.entries = object.entries?.map(e => Redelegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueuedRedelegation, useInterfaces: boolean = true): QueuedRedelegationAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Redelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: QueuedRedelegationAminoMsg): QueuedRedelegation {
    return QueuedRedelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: QueuedRedelegationProtoMsg, useInterfaces: boolean = true): QueuedRedelegation {
    return QueuedRedelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueuedRedelegation): Uint8Array {
    return QueuedRedelegation.encode(message).finish();
  },
  toProtoMsg(message: QueuedRedelegation): QueuedRedelegationProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueuedRedelegation",
      value: QueuedRedelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueuedRedelegation.typeUrl, QueuedRedelegation);
function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    srcValidatorAddress: "",
    dstValidatorAddress: "",
    balance: Coin.fromPartial({})
  };
}
export const Redelegation = {
  typeUrl: "/alliance.alliance.Redelegation",
  is(o: any): o is Redelegation {
    return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegatorAddress === "string" && typeof o.srcValidatorAddress === "string" && typeof o.dstValidatorAddress === "string" && Coin.is(o.balance));
  },
  isSDK(o: any): o is RedelegationSDKType {
    return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.src_validator_address === "string" && typeof o.dst_validator_address === "string" && Coin.isSDK(o.balance));
  },
  isAmino(o: any): o is RedelegationAmino {
    return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.src_validator_address === "string" && typeof o.dst_validator_address === "string" && Coin.isAmino(o.balance));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Redelegation {
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
          message.balance = Coin.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: RedelegationAmino): Redelegation {
    const message = createBaseRedelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.src_validator_address !== undefined && object.src_validator_address !== null) {
      message.srcValidatorAddress = object.src_validator_address;
    }
    if (object.dst_validator_address !== undefined && object.dst_validator_address !== null) {
      message.dstValidatorAddress = object.dst_validator_address;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: Redelegation, useInterfaces: boolean = true): RedelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.src_validator_address = message.srcValidatorAddress === "" ? undefined : message.srcValidatorAddress;
    obj.dst_validator_address = message.dstValidatorAddress === "" ? undefined : message.dstValidatorAddress;
    obj.balance = message.balance ? Coin.toAmino(message.balance, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: RedelegationAminoMsg): Redelegation {
    return Redelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegationProtoMsg, useInterfaces: boolean = true): Redelegation {
    return Redelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Redelegation): Uint8Array {
    return Redelegation.encode(message).finish();
  },
  toProtoMsg(message: Redelegation): RedelegationProtoMsg {
    return {
      typeUrl: "/alliance.alliance.Redelegation",
      value: Redelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Redelegation.typeUrl, Redelegation);
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
  typeUrl: "/alliance.alliance.RedelegationEntry",
  is(o: any): o is RedelegationEntry {
    return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.delegatorAddress === "string" && typeof o.srcValidatorAddress === "string" && typeof o.dstValidatorAddress === "string" && Coin.is(o.balance) && Timestamp.is(o.completionTime));
  },
  isSDK(o: any): o is RedelegationEntrySDKType {
    return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.delegator_address === "string" && typeof o.src_validator_address === "string" && typeof o.dst_validator_address === "string" && Coin.isSDK(o.balance) && Timestamp.isSDK(o.completion_time));
  },
  isAmino(o: any): o is RedelegationEntryAmino {
    return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.delegator_address === "string" && typeof o.src_validator_address === "string" && typeof o.dst_validator_address === "string" && Coin.isAmino(o.balance) && Timestamp.isAmino(o.completion_time));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RedelegationEntry {
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
          message.balance = Coin.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: RedelegationEntryAmino): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.src_validator_address !== undefined && object.src_validator_address !== null) {
      message.srcValidatorAddress = object.src_validator_address;
    }
    if (object.dst_validator_address !== undefined && object.dst_validator_address !== null) {
      message.dstValidatorAddress = object.dst_validator_address;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: RedelegationEntry, useInterfaces: boolean = true): RedelegationEntryAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.src_validator_address = message.srcValidatorAddress === "" ? undefined : message.srcValidatorAddress;
    obj.dst_validator_address = message.dstValidatorAddress === "" ? undefined : message.dstValidatorAddress;
    obj.balance = message.balance ? Coin.toAmino(message.balance, useInterfaces) : undefined;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: RedelegationEntryAminoMsg): RedelegationEntry {
    return RedelegationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegationEntryProtoMsg, useInterfaces: boolean = true): RedelegationEntry {
    return RedelegationEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RedelegationEntry): Uint8Array {
    return RedelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: RedelegationEntry): RedelegationEntryProtoMsg {
    return {
      typeUrl: "/alliance.alliance.RedelegationEntry",
      value: RedelegationEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RedelegationEntry.typeUrl, RedelegationEntry);