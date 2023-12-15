import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
export interface ReplyDataProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.ReplyData";
  value: Uint8Array;
}
/** the stored data for handling the reply of a sent ibc packet */
export interface ReplyDataAmino {
  /** the identifier of the bridge */
  bridge_id?: string;
  /** the identifier of the sent packet */
  packet_id?: PacketIdAmino;
  host_chain_id?: string;
  /** serialized data shared when handling the packet result */
  data?: string;
}
export interface ReplyDataAminoMsg {
  type: "/pryzm.icstaking.v1.ReplyData";
  value: ReplyDataAmino;
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
export interface PacketIdProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.PacketId";
  value: Uint8Array;
}
/** the id for a sent ibc packet */
export interface PacketIdAmino {
  port_id?: string;
  channel_id?: string;
  sequence?: string;
}
export interface PacketIdAminoMsg {
  type: "/pryzm.icstaking.v1.PacketId";
  value: PacketIdAmino;
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
export interface DelegateTransferReplyDataProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.DelegateTransferReplyData";
  value: Uint8Array;
}
/** The reply data for DelegateTransferBridge */
export interface DelegateTransferReplyDataAmino {
  /** the identifier of the transfer session */
  transfer_session?: string;
  /** the amount being transferred */
  amount?: CoinAmino;
}
export interface DelegateTransferReplyDataAminoMsg {
  type: "/pryzm.icstaking.v1.DelegateTransferReplyData";
  value: DelegateTransferReplyDataAmino;
}
/** The reply data for DelegateTransferBridge */
export interface DelegateTransferReplyDataSDKType {
  transfer_session: string;
  amount: CoinSDKType;
}
/** A session of token transfer to a host chain from multiple channels, used in DelegateTransferBridge */
export interface DelegateTransferSession {
  /** a generated id for the session */
  id: string;
  /** a list of packet states, determining whether the packet is finalized (either succeeded or failed) */
  packetStates: TransferPacketState[];
}
export interface DelegateTransferSessionProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.DelegateTransferSession";
  value: Uint8Array;
}
/** A session of token transfer to a host chain from multiple channels, used in DelegateTransferBridge */
export interface DelegateTransferSessionAmino {
  /** a generated id for the session */
  id?: string;
  /** a list of packet states, determining whether the packet is finalized (either succeeded or failed) */
  packet_states?: TransferPacketStateAmino[];
}
export interface DelegateTransferSessionAminoMsg {
  type: "/pryzm.icstaking.v1.DelegateTransferSession";
  value: DelegateTransferSessionAmino;
}
/** A session of token transfer to a host chain from multiple channels, used in DelegateTransferBridge */
export interface DelegateTransferSessionSDKType {
  id: string;
  packet_states: TransferPacketStateSDKType[];
}
/** The state of a delegation transfer */
export interface TransferPacketState {
  /** packet identifier */
  packetId: string;
  /** whether the transfer is finalized (either succeeded or failed) */
  finalized: boolean;
}
export interface TransferPacketStateProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.TransferPacketState";
  value: Uint8Array;
}
/** The state of a delegation transfer */
export interface TransferPacketStateAmino {
  /** packet identifier */
  packet_id?: string;
  /** whether the transfer is finalized (either succeeded or failed) */
  finalized?: boolean;
}
export interface TransferPacketStateAminoMsg {
  type: "/pryzm.icstaking.v1.TransferPacketState";
  value: TransferPacketStateAmino;
}
/** The state of a delegation transfer */
export interface TransferPacketStateSDKType {
  packet_id: string;
  finalized: boolean;
}
/** The reply data for DelegateBridge */
export interface DelegateReplyData {
  /** a list of delegations to different validators */
  delegations: DelegationEntry[];
}
export interface DelegateReplyDataProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.DelegateReplyData";
  value: Uint8Array;
}
/** The reply data for DelegateBridge */
export interface DelegateReplyDataAmino {
  /** a list of delegations to different validators */
  delegations?: DelegationEntryAmino[];
}
export interface DelegateReplyDataAminoMsg {
  type: "/pryzm.icstaking.v1.DelegateReplyData";
  value: DelegateReplyDataAmino;
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
export interface DelegationEntryProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.DelegationEntry";
  value: Uint8Array;
}
/** Contains info about delegating an amount of assets to a validator */
export interface DelegationEntryAmino {
  validator?: string;
  amount?: string;
}
export interface DelegationEntryAminoMsg {
  type: "/pryzm.icstaking.v1.DelegationEntry";
  value: DelegationEntryAmino;
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
export interface UndelegateReplyDataProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.UndelegateReplyData";
  value: Uint8Array;
}
/** The reply data for UndelegateBridge */
export interface UndelegateReplyDataAmino {
  total_c_amount?: string;
  undelegations?: UndelegationEntryAmino[];
  epochs?: string[];
}
export interface UndelegateReplyDataAminoMsg {
  type: "/pryzm.icstaking.v1.UndelegateReplyData";
  value: UndelegateReplyDataAmino;
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
export interface UndelegationEntryProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.UndelegationEntry";
  value: Uint8Array;
}
/** Contains info about undelegating an amount of assets from a validator */
export interface UndelegationEntryAmino {
  validator?: string;
  amount?: string;
}
export interface UndelegationEntryAminoMsg {
  type: "/pryzm.icstaking.v1.UndelegationEntry";
  value: UndelegationEntryAmino;
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
export interface RedelegateReplyDataProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.RedelegateReplyData";
  value: Uint8Array;
}
/** The reply data for RedelegateBridge */
export interface RedelegateReplyDataAmino {
  redelegations?: RedelegationEntryAmino[];
}
export interface RedelegateReplyDataAminoMsg {
  type: "/pryzm.icstaking.v1.RedelegateReplyData";
  value: RedelegateReplyDataAmino;
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
export interface RedelegationEntryProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.RedelegationEntry";
  value: Uint8Array;
}
/** Contains info about redelegating an amount of assets from a validator to another validator */
export interface RedelegationEntryAmino {
  src_validator?: string;
  dst_validator?: string;
  amount?: string;
}
export interface RedelegationEntryAminoMsg {
  type: "/pryzm.icstaking.v1.RedelegationEntry";
  value: RedelegationEntryAmino;
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
export interface CompoundDataProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.CompoundData";
  value: Uint8Array;
}
/** The reply data used in CompoundBridge */
export interface CompoundDataAmino {
  fee_amount?: string;
  compound_amount?: string;
}
export interface CompoundDataAminoMsg {
  type: "/pryzm.icstaking.v1.CompoundData";
  value: CompoundDataAmino;
}
/** The reply data used in CompoundBridge */
export interface CompoundDataSDKType {
  fee_amount: string;
  compound_amount: string;
}
export interface CollectUndelegatedReplyData {
  undelegatedAmount: string;
}
export interface CollectUndelegatedReplyDataProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.CollectUndelegatedReplyData";
  value: Uint8Array;
}
export interface CollectUndelegatedReplyDataAmino {
  undelegated_amount?: string;
}
export interface CollectUndelegatedReplyDataAminoMsg {
  type: "/pryzm.icstaking.v1.CollectUndelegatedReplyData";
  value: CollectUndelegatedReplyDataAmino;
}
export interface CollectUndelegatedReplyDataSDKType {
  undelegated_amount: string;
}
/** The reply data used in SweepBridge */
export interface SweepData {
  /** a list containing info about the sweep operation through different channel channel */
  channelSweeps: ChannelSweep[];
}
export interface SweepDataProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.SweepData";
  value: Uint8Array;
}
/** The reply data used in SweepBridge */
export interface SweepDataAmino {
  /** a list containing info about the sweep operation through different channel channel */
  channel_sweeps?: ChannelSweepAmino[];
}
export interface SweepDataAminoMsg {
  type: "/pryzm.icstaking.v1.SweepData";
  value: SweepDataAmino;
}
/** The reply data used in SweepBridge */
export interface SweepDataSDKType {
  channel_sweeps: ChannelSweepSDKType[];
}
/** Contains info about the sweep operation through a channel */
export interface ChannelSweep {
  channel: string;
  /** a list of epochs that the sweep is related to */
  epochs: bigint[];
  /** the amount being swept from the host chain */
  amount: string;
}
export interface ChannelSweepProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.ChannelSweep";
  value: Uint8Array;
}
/** Contains info about the sweep operation through a channel */
export interface ChannelSweepAmino {
  channel?: string;
  /** a list of epochs that the sweep is related to */
  epochs?: string[];
  /** the amount being swept from the host chain */
  amount?: string;
}
export interface ChannelSweepAminoMsg {
  type: "/pryzm.icstaking.v1.ChannelSweep";
  value: ChannelSweepAmino;
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
  typeUrl: "/pryzm.icstaking.v1.ReplyData",
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
  },
  fromAmino(object: ReplyDataAmino): ReplyData {
    const message = createBaseReplyData();
    if (object.bridge_id !== undefined && object.bridge_id !== null) {
      message.bridgeId = object.bridge_id;
    }
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: ReplyData): ReplyDataAmino {
    const obj: any = {};
    obj.bridge_id = message.bridgeId;
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    obj.host_chain_id = message.hostChainId;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: ReplyDataAminoMsg): ReplyData {
    return ReplyData.fromAmino(object.value);
  },
  fromProtoMsg(message: ReplyDataProtoMsg): ReplyData {
    return ReplyData.decode(message.value);
  },
  toProto(message: ReplyData): Uint8Array {
    return ReplyData.encode(message).finish();
  },
  toProtoMsg(message: ReplyData): ReplyDataProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.ReplyData",
      value: ReplyData.encode(message).finish()
    };
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
  typeUrl: "/pryzm.icstaking.v1.PacketId",
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
  },
  fromAmino(object: PacketIdAmino): PacketId {
    const message = createBasePacketId();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: PacketId): PacketIdAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketIdAminoMsg): PacketId {
    return PacketId.fromAmino(object.value);
  },
  fromProtoMsg(message: PacketIdProtoMsg): PacketId {
    return PacketId.decode(message.value);
  },
  toProto(message: PacketId): Uint8Array {
    return PacketId.encode(message).finish();
  },
  toProtoMsg(message: PacketId): PacketIdProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.PacketId",
      value: PacketId.encode(message).finish()
    };
  }
};
function createBaseDelegateTransferReplyData(): DelegateTransferReplyData {
  return {
    transferSession: "",
    amount: Coin.fromPartial({})
  };
}
export const DelegateTransferReplyData = {
  typeUrl: "/pryzm.icstaking.v1.DelegateTransferReplyData",
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
  },
  fromAmino(object: DelegateTransferReplyDataAmino): DelegateTransferReplyData {
    const message = createBaseDelegateTransferReplyData();
    if (object.transfer_session !== undefined && object.transfer_session !== null) {
      message.transferSession = object.transfer_session;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: DelegateTransferReplyData): DelegateTransferReplyDataAmino {
    const obj: any = {};
    obj.transfer_session = message.transferSession;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegateTransferReplyDataAminoMsg): DelegateTransferReplyData {
    return DelegateTransferReplyData.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegateTransferReplyDataProtoMsg): DelegateTransferReplyData {
    return DelegateTransferReplyData.decode(message.value);
  },
  toProto(message: DelegateTransferReplyData): Uint8Array {
    return DelegateTransferReplyData.encode(message).finish();
  },
  toProtoMsg(message: DelegateTransferReplyData): DelegateTransferReplyDataProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.DelegateTransferReplyData",
      value: DelegateTransferReplyData.encode(message).finish()
    };
  }
};
function createBaseDelegateTransferSession(): DelegateTransferSession {
  return {
    id: "",
    packetStates: []
  };
}
export const DelegateTransferSession = {
  typeUrl: "/pryzm.icstaking.v1.DelegateTransferSession",
  encode(message: DelegateTransferSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.packetStates) {
      TransferPacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
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
          message.packetStates.push(TransferPacketState.decode(reader, reader.uint32()));
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
      packetStates: Array.isArray(object?.packetStates) ? object.packetStates.map((e: any) => TransferPacketState.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegateTransferSession): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.packetStates) {
      obj.packetStates = message.packetStates.map(e => e ? TransferPacketState.toJSON(e) : undefined);
    } else {
      obj.packetStates = [];
    }
    return obj;
  },
  fromPartial(object: Partial<DelegateTransferSession>): DelegateTransferSession {
    const message = createBaseDelegateTransferSession();
    message.id = object.id ?? "";
    message.packetStates = object.packetStates?.map(e => TransferPacketState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegateTransferSessionAmino): DelegateTransferSession {
    const message = createBaseDelegateTransferSession();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    message.packetStates = object.packet_states?.map(e => TransferPacketState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegateTransferSession): DelegateTransferSessionAmino {
    const obj: any = {};
    obj.id = message.id;
    if (message.packetStates) {
      obj.packet_states = message.packetStates.map(e => e ? TransferPacketState.toAmino(e) : undefined);
    } else {
      obj.packet_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegateTransferSessionAminoMsg): DelegateTransferSession {
    return DelegateTransferSession.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegateTransferSessionProtoMsg): DelegateTransferSession {
    return DelegateTransferSession.decode(message.value);
  },
  toProto(message: DelegateTransferSession): Uint8Array {
    return DelegateTransferSession.encode(message).finish();
  },
  toProtoMsg(message: DelegateTransferSession): DelegateTransferSessionProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.DelegateTransferSession",
      value: DelegateTransferSession.encode(message).finish()
    };
  }
};
function createBaseTransferPacketState(): TransferPacketState {
  return {
    packetId: "",
    finalized: false
  };
}
export const TransferPacketState = {
  typeUrl: "/pryzm.icstaking.v1.TransferPacketState",
  encode(message: TransferPacketState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== "") {
      writer.uint32(10).string(message.packetId);
    }
    if (message.finalized === true) {
      writer.uint32(16).bool(message.finalized);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferPacketState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferPacketState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = reader.string();
          break;
        case 2:
          message.finalized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransferPacketState {
    return {
      packetId: isSet(object.packetId) ? String(object.packetId) : "",
      finalized: isSet(object.finalized) ? Boolean(object.finalized) : false
    };
  },
  toJSON(message: TransferPacketState): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId);
    message.finalized !== undefined && (obj.finalized = message.finalized);
    return obj;
  },
  fromPartial(object: Partial<TransferPacketState>): TransferPacketState {
    const message = createBaseTransferPacketState();
    message.packetId = object.packetId ?? "";
    message.finalized = object.finalized ?? false;
    return message;
  },
  fromAmino(object: TransferPacketStateAmino): TransferPacketState {
    const message = createBaseTransferPacketState();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = object.packet_id;
    }
    if (object.finalized !== undefined && object.finalized !== null) {
      message.finalized = object.finalized;
    }
    return message;
  },
  toAmino(message: TransferPacketState): TransferPacketStateAmino {
    const obj: any = {};
    obj.packet_id = message.packetId;
    obj.finalized = message.finalized;
    return obj;
  },
  fromAminoMsg(object: TransferPacketStateAminoMsg): TransferPacketState {
    return TransferPacketState.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferPacketStateProtoMsg): TransferPacketState {
    return TransferPacketState.decode(message.value);
  },
  toProto(message: TransferPacketState): Uint8Array {
    return TransferPacketState.encode(message).finish();
  },
  toProtoMsg(message: TransferPacketState): TransferPacketStateProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.TransferPacketState",
      value: TransferPacketState.encode(message).finish()
    };
  }
};
function createBaseDelegateReplyData(): DelegateReplyData {
  return {
    delegations: []
  };
}
export const DelegateReplyData = {
  typeUrl: "/pryzm.icstaking.v1.DelegateReplyData",
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
  },
  fromAmino(object: DelegateReplyDataAmino): DelegateReplyData {
    const message = createBaseDelegateReplyData();
    message.delegations = object.delegations?.map(e => DelegationEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegateReplyData): DelegateReplyDataAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationEntry.toAmino(e) : undefined);
    } else {
      obj.delegations = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegateReplyDataAminoMsg): DelegateReplyData {
    return DelegateReplyData.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegateReplyDataProtoMsg): DelegateReplyData {
    return DelegateReplyData.decode(message.value);
  },
  toProto(message: DelegateReplyData): Uint8Array {
    return DelegateReplyData.encode(message).finish();
  },
  toProtoMsg(message: DelegateReplyData): DelegateReplyDataProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.DelegateReplyData",
      value: DelegateReplyData.encode(message).finish()
    };
  }
};
function createBaseDelegationEntry(): DelegationEntry {
  return {
    validator: "",
    amount: ""
  };
}
export const DelegationEntry = {
  typeUrl: "/pryzm.icstaking.v1.DelegationEntry",
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
  },
  fromAmino(object: DelegationEntryAmino): DelegationEntry {
    const message = createBaseDelegationEntry();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DelegationEntry): DelegationEntryAmino {
    const obj: any = {};
    obj.validator = message.validator;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: DelegationEntryAminoMsg): DelegationEntry {
    return DelegationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationEntryProtoMsg): DelegationEntry {
    return DelegationEntry.decode(message.value);
  },
  toProto(message: DelegationEntry): Uint8Array {
    return DelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: DelegationEntry): DelegationEntryProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.DelegationEntry",
      value: DelegationEntry.encode(message).finish()
    };
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
  typeUrl: "/pryzm.icstaking.v1.UndelegateReplyData",
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
  },
  fromAmino(object: UndelegateReplyDataAmino): UndelegateReplyData {
    const message = createBaseUndelegateReplyData();
    if (object.total_c_amount !== undefined && object.total_c_amount !== null) {
      message.totalCAmount = object.total_c_amount;
    }
    message.undelegations = object.undelegations?.map(e => UndelegationEntry.fromAmino(e)) || [];
    message.epochs = object.epochs?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: UndelegateReplyData): UndelegateReplyDataAmino {
    const obj: any = {};
    obj.total_c_amount = message.totalCAmount;
    if (message.undelegations) {
      obj.undelegations = message.undelegations.map(e => e ? UndelegationEntry.toAmino(e) : undefined);
    } else {
      obj.undelegations = [];
    }
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e.toString());
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromAminoMsg(object: UndelegateReplyDataAminoMsg): UndelegateReplyData {
    return UndelegateReplyData.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegateReplyDataProtoMsg): UndelegateReplyData {
    return UndelegateReplyData.decode(message.value);
  },
  toProto(message: UndelegateReplyData): Uint8Array {
    return UndelegateReplyData.encode(message).finish();
  },
  toProtoMsg(message: UndelegateReplyData): UndelegateReplyDataProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.UndelegateReplyData",
      value: UndelegateReplyData.encode(message).finish()
    };
  }
};
function createBaseUndelegationEntry(): UndelegationEntry {
  return {
    validator: "",
    amount: ""
  };
}
export const UndelegationEntry = {
  typeUrl: "/pryzm.icstaking.v1.UndelegationEntry",
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
  },
  fromAmino(object: UndelegationEntryAmino): UndelegationEntry {
    const message = createBaseUndelegationEntry();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: UndelegationEntry): UndelegationEntryAmino {
    const obj: any = {};
    obj.validator = message.validator;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: UndelegationEntryAminoMsg): UndelegationEntry {
    return UndelegationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegationEntryProtoMsg): UndelegationEntry {
    return UndelegationEntry.decode(message.value);
  },
  toProto(message: UndelegationEntry): Uint8Array {
    return UndelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: UndelegationEntry): UndelegationEntryProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.UndelegationEntry",
      value: UndelegationEntry.encode(message).finish()
    };
  }
};
function createBaseRedelegateReplyData(): RedelegateReplyData {
  return {
    redelegations: []
  };
}
export const RedelegateReplyData = {
  typeUrl: "/pryzm.icstaking.v1.RedelegateReplyData",
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
  },
  fromAmino(object: RedelegateReplyDataAmino): RedelegateReplyData {
    const message = createBaseRedelegateReplyData();
    message.redelegations = object.redelegations?.map(e => RedelegationEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RedelegateReplyData): RedelegateReplyDataAmino {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationEntry.toAmino(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    return obj;
  },
  fromAminoMsg(object: RedelegateReplyDataAminoMsg): RedelegateReplyData {
    return RedelegateReplyData.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegateReplyDataProtoMsg): RedelegateReplyData {
    return RedelegateReplyData.decode(message.value);
  },
  toProto(message: RedelegateReplyData): Uint8Array {
    return RedelegateReplyData.encode(message).finish();
  },
  toProtoMsg(message: RedelegateReplyData): RedelegateReplyDataProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.RedelegateReplyData",
      value: RedelegateReplyData.encode(message).finish()
    };
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
  typeUrl: "/pryzm.icstaking.v1.RedelegationEntry",
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
  },
  fromAmino(object: RedelegationEntryAmino): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    if (object.src_validator !== undefined && object.src_validator !== null) {
      message.srcValidator = object.src_validator;
    }
    if (object.dst_validator !== undefined && object.dst_validator !== null) {
      message.dstValidator = object.dst_validator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: RedelegationEntry): RedelegationEntryAmino {
    const obj: any = {};
    obj.src_validator = message.srcValidator;
    obj.dst_validator = message.dstValidator;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: RedelegationEntryAminoMsg): RedelegationEntry {
    return RedelegationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegationEntryProtoMsg): RedelegationEntry {
    return RedelegationEntry.decode(message.value);
  },
  toProto(message: RedelegationEntry): Uint8Array {
    return RedelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: RedelegationEntry): RedelegationEntryProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.RedelegationEntry",
      value: RedelegationEntry.encode(message).finish()
    };
  }
};
function createBaseCompoundData(): CompoundData {
  return {
    feeAmount: "",
    compoundAmount: ""
  };
}
export const CompoundData = {
  typeUrl: "/pryzm.icstaking.v1.CompoundData",
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
  },
  fromAmino(object: CompoundDataAmino): CompoundData {
    const message = createBaseCompoundData();
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.feeAmount = object.fee_amount;
    }
    if (object.compound_amount !== undefined && object.compound_amount !== null) {
      message.compoundAmount = object.compound_amount;
    }
    return message;
  },
  toAmino(message: CompoundData): CompoundDataAmino {
    const obj: any = {};
    obj.fee_amount = message.feeAmount;
    obj.compound_amount = message.compoundAmount;
    return obj;
  },
  fromAminoMsg(object: CompoundDataAminoMsg): CompoundData {
    return CompoundData.fromAmino(object.value);
  },
  fromProtoMsg(message: CompoundDataProtoMsg): CompoundData {
    return CompoundData.decode(message.value);
  },
  toProto(message: CompoundData): Uint8Array {
    return CompoundData.encode(message).finish();
  },
  toProtoMsg(message: CompoundData): CompoundDataProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.CompoundData",
      value: CompoundData.encode(message).finish()
    };
  }
};
function createBaseCollectUndelegatedReplyData(): CollectUndelegatedReplyData {
  return {
    undelegatedAmount: ""
  };
}
export const CollectUndelegatedReplyData = {
  typeUrl: "/pryzm.icstaking.v1.CollectUndelegatedReplyData",
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
  },
  fromAmino(object: CollectUndelegatedReplyDataAmino): CollectUndelegatedReplyData {
    const message = createBaseCollectUndelegatedReplyData();
    if (object.undelegated_amount !== undefined && object.undelegated_amount !== null) {
      message.undelegatedAmount = object.undelegated_amount;
    }
    return message;
  },
  toAmino(message: CollectUndelegatedReplyData): CollectUndelegatedReplyDataAmino {
    const obj: any = {};
    obj.undelegated_amount = message.undelegatedAmount;
    return obj;
  },
  fromAminoMsg(object: CollectUndelegatedReplyDataAminoMsg): CollectUndelegatedReplyData {
    return CollectUndelegatedReplyData.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectUndelegatedReplyDataProtoMsg): CollectUndelegatedReplyData {
    return CollectUndelegatedReplyData.decode(message.value);
  },
  toProto(message: CollectUndelegatedReplyData): Uint8Array {
    return CollectUndelegatedReplyData.encode(message).finish();
  },
  toProtoMsg(message: CollectUndelegatedReplyData): CollectUndelegatedReplyDataProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.CollectUndelegatedReplyData",
      value: CollectUndelegatedReplyData.encode(message).finish()
    };
  }
};
function createBaseSweepData(): SweepData {
  return {
    channelSweeps: []
  };
}
export const SweepData = {
  typeUrl: "/pryzm.icstaking.v1.SweepData",
  encode(message: SweepData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channelSweeps) {
      ChannelSweep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
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
          message.channelSweeps.push(ChannelSweep.decode(reader, reader.uint32()));
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
      channelSweeps: Array.isArray(object?.channelSweeps) ? object.channelSweeps.map((e: any) => ChannelSweep.fromJSON(e)) : []
    };
  },
  toJSON(message: SweepData): unknown {
    const obj: any = {};
    if (message.channelSweeps) {
      obj.channelSweeps = message.channelSweeps.map(e => e ? ChannelSweep.toJSON(e) : undefined);
    } else {
      obj.channelSweeps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<SweepData>): SweepData {
    const message = createBaseSweepData();
    message.channelSweeps = object.channelSweeps?.map(e => ChannelSweep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SweepDataAmino): SweepData {
    const message = createBaseSweepData();
    message.channelSweeps = object.channel_sweeps?.map(e => ChannelSweep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SweepData): SweepDataAmino {
    const obj: any = {};
    if (message.channelSweeps) {
      obj.channel_sweeps = message.channelSweeps.map(e => e ? ChannelSweep.toAmino(e) : undefined);
    } else {
      obj.channel_sweeps = [];
    }
    return obj;
  },
  fromAminoMsg(object: SweepDataAminoMsg): SweepData {
    return SweepData.fromAmino(object.value);
  },
  fromProtoMsg(message: SweepDataProtoMsg): SweepData {
    return SweepData.decode(message.value);
  },
  toProto(message: SweepData): Uint8Array {
    return SweepData.encode(message).finish();
  },
  toProtoMsg(message: SweepData): SweepDataProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.SweepData",
      value: SweepData.encode(message).finish()
    };
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
  typeUrl: "/pryzm.icstaking.v1.ChannelSweep",
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
  },
  fromAmino(object: ChannelSweepAmino): ChannelSweep {
    const message = createBaseChannelSweep();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    message.epochs = object.epochs?.map(e => BigInt(e)) || [];
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: ChannelSweep): ChannelSweepAmino {
    const obj: any = {};
    obj.channel = message.channel;
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e.toString());
    } else {
      obj.epochs = [];
    }
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: ChannelSweepAminoMsg): ChannelSweep {
    return ChannelSweep.fromAmino(object.value);
  },
  fromProtoMsg(message: ChannelSweepProtoMsg): ChannelSweep {
    return ChannelSweep.decode(message.value);
  },
  toProto(message: ChannelSweep): Uint8Array {
    return ChannelSweep.encode(message).finish();
  },
  toProtoMsg(message: ChannelSweep): ChannelSweepProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.ChannelSweep",
      value: ChannelSweep.encode(message).finish()
    };
  }
};