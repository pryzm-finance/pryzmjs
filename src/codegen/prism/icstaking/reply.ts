import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes, isObject } from "../../helpers";
/** the stored data for handling the reply of a sent ibc packet */
export interface ReplyData {
  bridgeId: string;
  packetId: PacketId;
  hostChainId: string;
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
export interface DelegateTransferReplyData {
  transferSession: string;
  amount: Coin;
}
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
export interface DelegateTransferSession {
  id: string;
  packetFinalized: {
    [key: string]: boolean;
  };
}
export interface DelegateTransferSessionSDKType {
  id: string;
  packet_finalized: {
    [key: string]: boolean;
  };
}
export interface DelegateReplyData_DelegationsEntry {
  key: string;
  value: string;
}
export interface DelegateReplyData_DelegationsEntrySDKType {
  key: string;
  value: string;
}
export interface DelegateReplyData {
  delegations: {
    [key: string]: string;
  };
}
export interface DelegateReplyDataSDKType {
  delegations: {
    [key: string]: string;
  };
}
export interface UndelegateReplyData_UndelegationsEntry {
  key: string;
  value: string;
}
export interface UndelegateReplyData_UndelegationsEntrySDKType {
  key: string;
  value: string;
}
export interface UndelegateReplyData {
  totalCAmount: string;
  undelegations: {
    [key: string]: string;
  };
  epochs: bigint[];
}
export interface UndelegateReplyDataSDKType {
  total_c_amount: string;
  undelegations: {
    [key: string]: string;
  };
  epochs: bigint[];
}
export interface CompoundData {
  feeAmount: string;
  compoundAmount: string;
}
export interface CompoundDataSDKType {
  fee_amount: string;
  compound_amount: string;
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
function createBaseDelegateReplyData_DelegationsEntry(): DelegateReplyData_DelegationsEntry {
  return {
    key: "",
    value: ""
  };
}
export const DelegateReplyData_DelegationsEntry = {
  encode(message: DelegateReplyData_DelegationsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegateReplyData_DelegationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateReplyData_DelegationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegateReplyData_DelegationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: DelegateReplyData_DelegationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<DelegateReplyData_DelegationsEntry>): DelegateReplyData_DelegationsEntry {
    const message = createBaseDelegateReplyData_DelegationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseDelegateReplyData(): DelegateReplyData {
  return {
    delegations: {}
  };
}
export const DelegateReplyData = {
  encode(message: DelegateReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.delegations).forEach(([key, value]) => {
      DelegateReplyData_DelegationsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
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
          const entry1 = DelegateReplyData_DelegationsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.delegations[entry1.key] = entry1.value;
          }
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
      delegations: isObject(object.delegations) ? Object.entries(object.delegations).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: DelegateReplyData): unknown {
    const obj: any = {};
    obj.delegations = {};
    if (message.delegations) {
      Object.entries(message.delegations).forEach(([k, v]) => {
        obj.delegations[k] = v;
      });
    }
    return obj;
  },
  fromPartial(object: Partial<DelegateReplyData>): DelegateReplyData {
    const message = createBaseDelegateReplyData();
    message.delegations = Object.entries(object.delegations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseUndelegateReplyData_UndelegationsEntry(): UndelegateReplyData_UndelegationsEntry {
  return {
    key: "",
    value: ""
  };
}
export const UndelegateReplyData_UndelegationsEntry = {
  encode(message: UndelegateReplyData_UndelegationsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndelegateReplyData_UndelegationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateReplyData_UndelegationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndelegateReplyData_UndelegationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: UndelegateReplyData_UndelegationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<UndelegateReplyData_UndelegationsEntry>): UndelegateReplyData_UndelegationsEntry {
    const message = createBaseUndelegateReplyData_UndelegationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseUndelegateReplyData(): UndelegateReplyData {
  return {
    totalCAmount: "",
    undelegations: {},
    epochs: []
  };
}
export const UndelegateReplyData = {
  encode(message: UndelegateReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCAmount !== "") {
      writer.uint32(10).string(message.totalCAmount);
    }
    Object.entries(message.undelegations).forEach(([key, value]) => {
      UndelegateReplyData_UndelegationsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
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
          const entry2 = UndelegateReplyData_UndelegationsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.undelegations[entry2.key] = entry2.value;
          }
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
      undelegations: isObject(object.undelegations) ? Object.entries(object.undelegations).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: UndelegateReplyData): unknown {
    const obj: any = {};
    message.totalCAmount !== undefined && (obj.totalCAmount = message.totalCAmount);
    obj.undelegations = {};
    if (message.undelegations) {
      Object.entries(message.undelegations).forEach(([k, v]) => {
        obj.undelegations[k] = v;
      });
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
    message.undelegations = Object.entries(object.undelegations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.epochs = object.epochs?.map(e => BigInt(e.toString())) || [];
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