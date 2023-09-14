import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes, isObject } from "../../helpers";
/** the stored data for handling the reply of a sent ibc packet */
export interface ReplyData {
  /** the identifier of the bridge */
  bridgeId: string;
  /** the identifier of the sent packet */
  packetId: PacketId;
  hostChainId: string;
  /** serialized data shared when handling the packet result */
  data: Uint8Array;
}
/** the stored data for handling the reply of a sent ibc packet */
export interface ReplyDataSDKType {
  bridge_id: string;
  packet_id: PacketIdSDKType;
  host_chain_id: string;
  data: Uint8Array;
}
/** the id for a sent ibc packet */
export interface PacketId {
  portId: string;
  channelId: string;
  sequence: bigint;
}
/** the id for a sent ibc packet */
export interface PacketIdSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
/** The reply data for DelegateTransferBridge */
export interface DelegateTransferReplyData {
  /** the identifier of the transfer session */
  transferSession: string;
  /** the amount being transferred */
  amount: Coin;
}
/** The reply data for DelegateTransferBridge */
export interface DelegateTransferReplyDataSDKType {
  transfer_session: string;
  amount: CoinSDKType;
}
export interface DelegateTransferSession_PacketFinalizedEntry {
  key: string;
  value: boolean;
}
export interface DelegateTransferSession_PacketFinalizedEntrySDKType {
  key: string;
  value: boolean;
}
/** A session of token transfer to a host chain from multiple channels, used in DelegateTransferBridge */
export interface DelegateTransferSession {
  /** a generated id for the session */
  id: string;
  /** a map of packet id to a boolean, determining whether the packet is finalized (either succeeded or failed) */
  packetFinalized: {
    [key: string]: boolean;
  };
}
/** A session of token transfer to a host chain from multiple channels, used in DelegateTransferBridge */
export interface DelegateTransferSessionSDKType {
  id: string;
  packet_finalized: {
    [key: string]: boolean;
  };
}
/** The reply data for DelegateBridge */
export interface DelegateReplyData {
  /** a list of delegations to different validators */
  delegations: DelegationEntry[];
}
/** The reply data for DelegateBridge */
export interface DelegateReplyDataSDKType {
  delegations: DelegationEntrySDKType[];
}
/** Contains info about delegating an amount of assets to a validator */
export interface DelegationEntry {
  validator: string;
  amount: string;
}
/** Contains info about delegating an amount of assets to a validator */
export interface DelegationEntrySDKType {
  validator: string;
  amount: string;
}
/** The reply data for UndelegateBridge */
export interface UndelegateReplyData {
  totalCAmount: string;
  undelegations: UndelegationEntry[];
  epochs: bigint[];
}
/** The reply data for UndelegateBridge */
export interface UndelegateReplyDataSDKType {
  total_c_amount: string;
  undelegations: UndelegationEntrySDKType[];
  epochs: bigint[];
}
/** Contains info about undelegating an amount of assets from a validator */
export interface UndelegationEntry {
  validator: string;
  amount: string;
}
/** Contains info about undelegating an amount of assets from a validator */
export interface UndelegationEntrySDKType {
  validator: string;
  amount: string;
}
/** The reply data for RedelegateBridge */
export interface RedelegateReplyData {
  redelegations: RedelegationEntry[];
}
/** The reply data for RedelegateBridge */
export interface RedelegateReplyDataSDKType {
  redelegations: RedelegationEntrySDKType[];
}
/** Contains info about redelegating an amount of assets from a validator to another validator */
export interface RedelegationEntry {
  srcValidator: string;
  dstValidator: string;
  amount: string;
}
/** Contains info about redelegating an amount of assets from a validator to another validator */
export interface RedelegationEntrySDKType {
  src_validator: string;
  dst_validator: string;
  amount: string;
}
/** The reply data used in CompoundBridge */
export interface CompoundData {
  feeAmount: string;
  compoundAmount: string;
}
/** The reply data used in CompoundBridge */
export interface CompoundDataSDKType {
  fee_amount: string;
  compound_amount: string;
}
export interface CollectUndelegatedReplyData {
  undelegatedAmount: string;
}
export interface CollectUndelegatedReplyDataSDKType {
  undelegated_amount: string;
}
export interface SweepData_ChannelSweepsEntry {
  key: string;
  value: ChannelSweep;
}
export interface SweepData_ChannelSweepsEntrySDKType {
  key: string;
  value: ChannelSweepSDKType;
}
/** The reply data used in SweepBridge */
export interface SweepData {
  /** a map of channel id to info about the sweep operation through that channel */
  channelSweeps: {
    [key: string]: ChannelSweep;
  };
}
/** The reply data used in SweepBridge */
export interface SweepDataSDKType {
  channel_sweeps: {
    [key: string]: ChannelSweepSDKType;
  };
}
/** Contains info about the sweep operation through a channel */
export interface ChannelSweep {
  channel: string;
  /** a list of epochs that the sweep is related to */
  epochs: bigint[];
  /** the amount being swept from the host chain */
  amount: string;
}
/** Contains info about the sweep operation through a channel */
export interface ChannelSweepSDKType {
  channel: string;
  epochs: bigint[];
  amount: string;
}
function createBaseReplyData(): ReplyData {
  return {
    bridgeId: "",
    packetId: PacketId.fromPartial({}),
    hostChainId: "",
    data: new Uint8Array()
  };
}
export const ReplyData = {
  encode(message: ReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeId !== "") {
      writer.uint32(10).string(message.bridgeId);
    }
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostChainId !== "") {
      writer.uint32(26).string(message.hostChainId);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReplyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.string();
          break;
        case 2:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostChainId = reader.string();
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReplyData {
    return {
      bridgeId: isSet(object.bridgeId) ? String(object.bridgeId) : "",
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: ReplyData): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = message.bridgeId);
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<ReplyData>): ReplyData {
    const message = createBaseReplyData();
    message.bridgeId = object.bridgeId ?? "";
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    message.hostChainId = object.hostChainId ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBasePacketId(): PacketId {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
export const PacketId = {
  encode(message: PacketId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketId {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: PacketId): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<PacketId>): PacketId {
    const message = createBasePacketId();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  }
};
function createBaseDelegateTransferReplyData(): DelegateTransferReplyData {
  return {
    transferSession: "",
    amount: Coin.fromPartial({})
  };
}
export const DelegateTransferReplyData = {
  encode(message: DelegateTransferReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transferSession !== "") {
      writer.uint32(10).string(message.transferSession);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegateTransferReplyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateTransferReplyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferSession = reader.string();
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
  fromJSON(object: any): DelegateTransferReplyData {
    return {
      transferSession: isSet(object.transferSession) ? String(object.transferSession) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: DelegateTransferReplyData): unknown {
    const obj: any = {};
    message.transferSession !== undefined && (obj.transferSession = message.transferSession);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DelegateTransferReplyData>): DelegateTransferReplyData {
    const message = createBaseDelegateTransferReplyData();
    message.transferSession = object.transferSession ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseDelegateTransferSession_PacketFinalizedEntry(): DelegateTransferSession_PacketFinalizedEntry {
  return {
    key: "",
    value: false
  };
}
export const DelegateTransferSession_PacketFinalizedEntry = {
  encode(message: DelegateTransferSession_PacketFinalizedEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegateTransferSession_PacketFinalizedEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateTransferSession_PacketFinalizedEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegateTransferSession_PacketFinalizedEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  toJSON(message: DelegateTransferSession_PacketFinalizedEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<DelegateTransferSession_PacketFinalizedEntry>): DelegateTransferSession_PacketFinalizedEntry {
    const message = createBaseDelegateTransferSession_PacketFinalizedEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  }
};
function createBaseDelegateTransferSession(): DelegateTransferSession {
  return {
    id: "",
    packetFinalized: {}
  };
}
export const DelegateTransferSession = {
  encode(message: DelegateTransferSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    Object.entries(message.packetFinalized).forEach(([key, value]) => {
      DelegateTransferSession_PacketFinalizedEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(16).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegateTransferSession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateTransferSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          const entry2 = DelegateTransferSession_PacketFinalizedEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.packetFinalized[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegateTransferSession {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      packetFinalized: isObject(object.packetFinalized) ? Object.entries(object.packetFinalized).reduce<{
        [key: string]: boolean;
      }>((acc, [key, value]) => {
        acc[key] = Boolean(value).valueOf();
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: DelegateTransferSession): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    obj.packetFinalized = {};
    if (message.packetFinalized) {
      Object.entries(message.packetFinalized).forEach(([k, v]) => {
        obj.packetFinalized[k] = v ? "true" : "false";
      });
    }
    return obj;
  },
  fromPartial(object: Partial<DelegateTransferSession>): DelegateTransferSession {
    const message = createBaseDelegateTransferSession();
    message.id = object.id ?? "";
    message.packetFinalized = Object.entries(object.packetFinalized ?? {}).reduce<{
      [key: string]: boolean;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseDelegateReplyData(): DelegateReplyData {
  return {
    delegations: []
  };
}
export const DelegateReplyData = {
  encode(message: DelegateReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegateReplyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateReplyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegateReplyData {
    return {
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => DelegationEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegateReplyData): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationEntry.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<DelegateReplyData>): DelegateReplyData {
    const message = createBaseDelegateReplyData();
    message.delegations = object.delegations?.map(e => DelegationEntry.fromPartial(e)) || [];
    return message;
  }
};
function createBaseDelegationEntry(): DelegationEntry {
  return {
    validator: "",
    amount: ""
  };
}
export const DelegationEntry = {
  encode(message: DelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationEntry {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: DelegationEntry): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<DelegationEntry>): DelegationEntry {
    const message = createBaseDelegationEntry();
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseUndelegateReplyData(): UndelegateReplyData {
  return {
    totalCAmount: "",
    undelegations: [],
    epochs: []
  };
}
export const UndelegateReplyData = {
  encode(message: UndelegateReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCAmount !== "") {
      writer.uint32(10).string(message.totalCAmount);
    }
    for (const v of message.undelegations) {
      UndelegationEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.epochs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndelegateReplyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateReplyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCAmount = reader.string();
          break;
        case 2:
          message.undelegations.push(UndelegationEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.epochs.push(reader.uint64());
            }
          } else {
            message.epochs.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndelegateReplyData {
    return {
      totalCAmount: isSet(object.totalCAmount) ? String(object.totalCAmount) : "",
      undelegations: Array.isArray(object?.undelegations) ? object.undelegations.map((e: any) => UndelegationEntry.fromJSON(e)) : [],
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: UndelegateReplyData): unknown {
    const obj: any = {};
    message.totalCAmount !== undefined && (obj.totalCAmount = message.totalCAmount);
    if (message.undelegations) {
      obj.undelegations = message.undelegations.map(e => e ? UndelegationEntry.toJSON(e) : undefined);
    } else {
      obj.undelegations = [];
    }
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => (e || BigInt(0)).toString());
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<UndelegateReplyData>): UndelegateReplyData {
    const message = createBaseUndelegateReplyData();
    message.totalCAmount = object.totalCAmount ?? "";
    message.undelegations = object.undelegations?.map(e => UndelegationEntry.fromPartial(e)) || [];
    message.epochs = object.epochs?.map(e => BigInt(e.toString())) || [];
    return message;
  }
};
function createBaseUndelegationEntry(): UndelegationEntry {
  return {
    validator: "",
    amount: ""
  };
}
export const UndelegationEntry = {
  encode(message: UndelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndelegationEntry {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: UndelegationEntry): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<UndelegationEntry>): UndelegationEntry {
    const message = createBaseUndelegationEntry();
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseRedelegateReplyData(): RedelegateReplyData {
  return {
    redelegations: []
  };
}
export const RedelegateReplyData = {
  encode(message: RedelegateReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegations) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegateReplyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegateReplyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegations.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegateReplyData {
    return {
      redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => RedelegationEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: RedelegateReplyData): unknown {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationEntry.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<RedelegateReplyData>): RedelegateReplyData {
    const message = createBaseRedelegateReplyData();
    message.redelegations = object.redelegations?.map(e => RedelegationEntry.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    srcValidator: "",
    dstValidator: "",
    amount: ""
  };
}
export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.srcValidator !== "") {
      writer.uint32(10).string(message.srcValidator);
    }
    if (message.dstValidator !== "") {
      writer.uint32(18).string(message.dstValidator);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
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
          message.srcValidator = reader.string();
          break;
        case 2:
          message.dstValidator = reader.string();
          break;
        case 3:
          message.amount = reader.string();
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
      srcValidator: isSet(object.srcValidator) ? String(object.srcValidator) : "",
      dstValidator: isSet(object.dstValidator) ? String(object.dstValidator) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.srcValidator !== undefined && (obj.srcValidator = message.srcValidator);
    message.dstValidator !== undefined && (obj.dstValidator = message.dstValidator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.srcValidator = object.srcValidator ?? "";
    message.dstValidator = object.dstValidator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseCompoundData(): CompoundData {
  return {
    feeAmount: "",
    compoundAmount: ""
  };
}
export const CompoundData = {
  encode(message: CompoundData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeAmount !== "") {
      writer.uint32(10).string(message.feeAmount);
    }
    if (message.compoundAmount !== "") {
      writer.uint32(18).string(message.compoundAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CompoundData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompoundData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeAmount = reader.string();
          break;
        case 2:
          message.compoundAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompoundData {
    return {
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
      compoundAmount: isSet(object.compoundAmount) ? String(object.compoundAmount) : ""
    };
  },
  toJSON(message: CompoundData): unknown {
    const obj: any = {};
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.compoundAmount !== undefined && (obj.compoundAmount = message.compoundAmount);
    return obj;
  },
  fromPartial(object: Partial<CompoundData>): CompoundData {
    const message = createBaseCompoundData();
    message.feeAmount = object.feeAmount ?? "";
    message.compoundAmount = object.compoundAmount ?? "";
    return message;
  }
};
function createBaseCollectUndelegatedReplyData(): CollectUndelegatedReplyData {
  return {
    undelegatedAmount: ""
  };
}
export const CollectUndelegatedReplyData = {
  encode(message: CollectUndelegatedReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.undelegatedAmount !== "") {
      writer.uint32(10).string(message.undelegatedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CollectUndelegatedReplyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectUndelegatedReplyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegatedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CollectUndelegatedReplyData {
    return {
      undelegatedAmount: isSet(object.undelegatedAmount) ? String(object.undelegatedAmount) : ""
    };
  },
  toJSON(message: CollectUndelegatedReplyData): unknown {
    const obj: any = {};
    message.undelegatedAmount !== undefined && (obj.undelegatedAmount = message.undelegatedAmount);
    return obj;
  },
  fromPartial(object: Partial<CollectUndelegatedReplyData>): CollectUndelegatedReplyData {
    const message = createBaseCollectUndelegatedReplyData();
    message.undelegatedAmount = object.undelegatedAmount ?? "";
    return message;
  }
};
function createBaseSweepData_ChannelSweepsEntry(): SweepData_ChannelSweepsEntry {
  return {
    key: "",
    value: ChannelSweep.fromPartial({})
  };
}
export const SweepData_ChannelSweepsEntry = {
  encode(message: SweepData_ChannelSweepsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ChannelSweep.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SweepData_ChannelSweepsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSweepData_ChannelSweepsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ChannelSweep.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SweepData_ChannelSweepsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ChannelSweep.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: SweepData_ChannelSweepsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ChannelSweep.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SweepData_ChannelSweepsEntry>): SweepData_ChannelSweepsEntry {
    const message = createBaseSweepData_ChannelSweepsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? ChannelSweep.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseSweepData(): SweepData {
  return {
    channelSweeps: {}
  };
}
export const SweepData = {
  encode(message: SweepData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.channelSweeps).forEach(([key, value]) => {
      SweepData_ChannelSweepsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SweepData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSweepData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SweepData_ChannelSweepsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.channelSweeps[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SweepData {
    return {
      channelSweeps: isObject(object.channelSweeps) ? Object.entries(object.channelSweeps).reduce<{
        [key: string]: ChannelSweep;
      }>((acc, [key, value]) => {
        acc[key] = ChannelSweep.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: SweepData): unknown {
    const obj: any = {};
    obj.channelSweeps = {};
    if (message.channelSweeps) {
      Object.entries(message.channelSweeps).forEach(([k, v]) => {
        obj.channelSweeps[k] = ChannelSweep.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial(object: Partial<SweepData>): SweepData {
    const message = createBaseSweepData();
    message.channelSweeps = Object.entries(object.channelSweeps ?? {}).reduce<{
      [key: string]: ChannelSweep;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ChannelSweep.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseChannelSweep(): ChannelSweep {
  return {
    channel: "",
    epochs: [],
    amount: ""
  };
}
export const ChannelSweep = {
  encode(message: ChannelSweep, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(10).string(message.channel);
    }
    writer.uint32(18).fork();
    for (const v of message.epochs) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChannelSweep {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.epochs.push(reader.uint64());
            }
          } else {
            message.epochs.push(reader.uint64());
          }
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChannelSweep {
    return {
      channel: isSet(object.channel) ? String(object.channel) : "",
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => BigInt(e.toString())) : [],
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: ChannelSweep): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => (e || BigInt(0)).toString());
    } else {
      obj.epochs = [];
    }
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<ChannelSweep>): ChannelSweep {
    const message = createBaseChannelSweep();
    message.channel = object.channel ?? "";
    message.epochs = object.epochs?.map(e => BigInt(e.toString())) || [];
    message.amount = object.amount ?? "";
    return message;
  }
};