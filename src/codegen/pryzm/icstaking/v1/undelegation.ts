import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** Information about an undelegation in a specific epoch */
export interface Undelegation {
  /** host chain id */
  hostChain: string;
  /** the undelegation epoch id */
  epoch: bigint;
  /** the exchange rate of cToken:Token at the end of undelegation epoch */
  exchangeRate: string;
  /** whether the undelegation request is sent and has started on host chain */
  started: boolean;
  /** whether the undelegation un-bonding period is passed and undelegated assets are available */
  completed: boolean;
  /** the time in which the undelegation will be completed and the assets are transferred to delegation account */
  completionTime: Timestamp;
}
export interface UndelegationProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.Undelegation";
  value: Uint8Array;
}
/** Information about an undelegation in a specific epoch */
export interface UndelegationAmino {
  /** host chain id */
  host_chain?: string;
  /** the undelegation epoch id */
  epoch?: string;
  /** the exchange rate of cToken:Token at the end of undelegation epoch */
  exchange_rate?: string;
  /** whether the undelegation request is sent and has started on host chain */
  started?: boolean;
  /** whether the undelegation un-bonding period is passed and undelegated assets are available */
  completed?: boolean;
  /** the time in which the undelegation will be completed and the assets are transferred to delegation account */
  completion_time?: string;
}
export interface UndelegationAminoMsg {
  type: "/pryzm.icstaking.v1.Undelegation";
  value: UndelegationAmino;
}
/** Information about an undelegation in a specific epoch */
export interface UndelegationSDKType {
  host_chain: string;
  epoch: bigint;
  exchange_rate: string;
  started: boolean;
  completed: boolean;
  completion_time: TimestampSDKType;
}
/** ChannelUndelegation contains information about an undelegation epoch for a specific transfer channel */
export interface ChannelUndelegation {
  /** host chain id */
  hostChain: string;
  /** the undelegation epoch id */
  epoch: bigint;
  /** the transfer channel on which the undelegated assets must be received */
  transferChannel: string;
  /** the total amount of cTokens requested to be undelegated */
  totalCAmount: string;
  /** the total amount of cTokens for which the undelegation message has been sent */
  undelegatedCAmount: string;
  /** the amount of assets already undelegated */
  receivedAmount: string;
  /** the amount of assets waiting to be received */
  pendingAmount: string;
  /** the cAsset equivalent of assets waiting to be received */
  pendingCAmount: string;
  /** whether the ibc transfer messages for sweeping assets to PRYZM are sent successfully */
  swept: boolean;
  /**
   * whether all the undelegation are completely received
   * if received is true, pending_amount must be zero
   */
  received: boolean;
  /**
   * the amount of uAssets redeemed by users.
   * a channel undelegation record is deleted when this amount is equal the total_c_amount
   */
  claimedUAmount: string;
}
export interface ChannelUndelegationProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.ChannelUndelegation";
  value: Uint8Array;
}
/** ChannelUndelegation contains information about an undelegation epoch for a specific transfer channel */
export interface ChannelUndelegationAmino {
  /** host chain id */
  host_chain?: string;
  /** the undelegation epoch id */
  epoch?: string;
  /** the transfer channel on which the undelegated assets must be received */
  transfer_channel?: string;
  /** the total amount of cTokens requested to be undelegated */
  total_c_amount?: string;
  /** the total amount of cTokens for which the undelegation message has been sent */
  undelegated_c_amount?: string;
  /** the amount of assets already undelegated */
  received_amount?: string;
  /** the amount of assets waiting to be received */
  pending_amount?: string;
  /** the cAsset equivalent of assets waiting to be received */
  pending_c_amount?: string;
  /** whether the ibc transfer messages for sweeping assets to PRYZM are sent successfully */
  swept?: boolean;
  /**
   * whether all the undelegation are completely received
   * if received is true, pending_amount must be zero
   */
  received?: boolean;
  /**
   * the amount of uAssets redeemed by users.
   * a channel undelegation record is deleted when this amount is equal the total_c_amount
   */
  claimed_u_amount?: string;
}
export interface ChannelUndelegationAminoMsg {
  type: "/pryzm.icstaking.v1.ChannelUndelegation";
  value: ChannelUndelegationAmino;
}
/** ChannelUndelegation contains information about an undelegation epoch for a specific transfer channel */
export interface ChannelUndelegationSDKType {
  host_chain: string;
  epoch: bigint;
  transfer_channel: string;
  total_c_amount: string;
  undelegated_c_amount: string;
  received_amount: string;
  pending_amount: string;
  pending_c_amount: string;
  swept: boolean;
  received: boolean;
  claimed_u_amount: string;
}
function createBaseUndelegation(): Undelegation {
  return {
    hostChain: "",
    epoch: BigInt(0),
    exchangeRate: "",
    started: false,
    completed: false,
    completionTime: Timestamp.fromPartial({})
  };
}
export const Undelegation = {
  typeUrl: "/pryzm.icstaking.v1.Undelegation",
  is(o: any): o is Undelegation {
    return o && (o.$typeUrl === Undelegation.typeUrl || typeof o.hostChain === "string" && typeof o.epoch === "bigint" && typeof o.exchangeRate === "string" && typeof o.started === "boolean" && typeof o.completed === "boolean" && Timestamp.is(o.completionTime));
  },
  isSDK(o: any): o is UndelegationSDKType {
    return o && (o.$typeUrl === Undelegation.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint" && typeof o.exchange_rate === "string" && typeof o.started === "boolean" && typeof o.completed === "boolean" && Timestamp.isSDK(o.completion_time));
  },
  isAmino(o: any): o is UndelegationAmino {
    return o && (o.$typeUrl === Undelegation.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint" && typeof o.exchange_rate === "string" && typeof o.started === "boolean" && typeof o.completed === "boolean" && Timestamp.isAmino(o.completion_time));
  },
  encode(message: Undelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    if (message.started === true) {
      writer.uint32(32).bool(message.started);
    }
    if (message.completed === true) {
      writer.uint32(40).bool(message.completed);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Undelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        case 3:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.started = reader.bool();
          break;
        case 5:
          message.completed = reader.bool();
          break;
        case 6:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Undelegation {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      started: isSet(object.started) ? Boolean(object.started) : false,
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: Undelegation): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.started !== undefined && (obj.started = message.started);
    message.completed !== undefined && (obj.completed = message.completed);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Undelegation>): Undelegation {
    const message = createBaseUndelegation();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.exchangeRate = object.exchangeRate ?? "";
    message.started = object.started ?? false;
    message.completed = object.completed ?? false;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },
  fromAmino(object: UndelegationAmino): Undelegation {
    const message = createBaseUndelegation();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    if (object.started !== undefined && object.started !== null) {
      message.started = object.started;
    }
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = object.completed;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: Undelegation, useInterfaces: boolean = true): UndelegationAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.exchange_rate = padDecimal(message.exchangeRate) === "" ? undefined : padDecimal(message.exchangeRate);
    obj.started = message.started === false ? undefined : message.started;
    obj.completed = message.completed === false ? undefined : message.completed;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: UndelegationAminoMsg): Undelegation {
    return Undelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegationProtoMsg, useInterfaces: boolean = true): Undelegation {
    return Undelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Undelegation): Uint8Array {
    return Undelegation.encode(message).finish();
  },
  toProtoMsg(message: Undelegation): UndelegationProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.Undelegation",
      value: Undelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Undelegation.typeUrl, Undelegation);
function createBaseChannelUndelegation(): ChannelUndelegation {
  return {
    hostChain: "",
    epoch: BigInt(0),
    transferChannel: "",
    totalCAmount: "",
    undelegatedCAmount: "",
    receivedAmount: "",
    pendingAmount: "",
    pendingCAmount: "",
    swept: false,
    received: false,
    claimedUAmount: ""
  };
}
export const ChannelUndelegation = {
  typeUrl: "/pryzm.icstaking.v1.ChannelUndelegation",
  is(o: any): o is ChannelUndelegation {
    return o && (o.$typeUrl === ChannelUndelegation.typeUrl || typeof o.hostChain === "string" && typeof o.epoch === "bigint" && typeof o.transferChannel === "string" && typeof o.totalCAmount === "string" && typeof o.undelegatedCAmount === "string" && typeof o.receivedAmount === "string" && typeof o.pendingAmount === "string" && typeof o.pendingCAmount === "string" && typeof o.swept === "boolean" && typeof o.received === "boolean" && typeof o.claimedUAmount === "string");
  },
  isSDK(o: any): o is ChannelUndelegationSDKType {
    return o && (o.$typeUrl === ChannelUndelegation.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint" && typeof o.transfer_channel === "string" && typeof o.total_c_amount === "string" && typeof o.undelegated_c_amount === "string" && typeof o.received_amount === "string" && typeof o.pending_amount === "string" && typeof o.pending_c_amount === "string" && typeof o.swept === "boolean" && typeof o.received === "boolean" && typeof o.claimed_u_amount === "string");
  },
  isAmino(o: any): o is ChannelUndelegationAmino {
    return o && (o.$typeUrl === ChannelUndelegation.typeUrl || typeof o.host_chain === "string" && typeof o.epoch === "bigint" && typeof o.transfer_channel === "string" && typeof o.total_c_amount === "string" && typeof o.undelegated_c_amount === "string" && typeof o.received_amount === "string" && typeof o.pending_amount === "string" && typeof o.pending_c_amount === "string" && typeof o.swept === "boolean" && typeof o.received === "boolean" && typeof o.claimed_u_amount === "string");
  },
  encode(message: ChannelUndelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.totalCAmount !== "") {
      writer.uint32(34).string(message.totalCAmount);
    }
    if (message.undelegatedCAmount !== "") {
      writer.uint32(42).string(message.undelegatedCAmount);
    }
    if (message.receivedAmount !== "") {
      writer.uint32(50).string(message.receivedAmount);
    }
    if (message.pendingAmount !== "") {
      writer.uint32(58).string(message.pendingAmount);
    }
    if (message.pendingCAmount !== "") {
      writer.uint32(66).string(message.pendingCAmount);
    }
    if (message.swept === true) {
      writer.uint32(72).bool(message.swept);
    }
    if (message.received === true) {
      writer.uint32(80).bool(message.received);
    }
    if (message.claimedUAmount !== "") {
      writer.uint32(90).string(message.claimedUAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ChannelUndelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.totalCAmount = reader.string();
          break;
        case 5:
          message.undelegatedCAmount = reader.string();
          break;
        case 6:
          message.receivedAmount = reader.string();
          break;
        case 7:
          message.pendingAmount = reader.string();
          break;
        case 8:
          message.pendingCAmount = reader.string();
          break;
        case 9:
          message.swept = reader.bool();
          break;
        case 10:
          message.received = reader.bool();
          break;
        case 11:
          message.claimedUAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChannelUndelegation {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      totalCAmount: isSet(object.totalCAmount) ? String(object.totalCAmount) : "",
      undelegatedCAmount: isSet(object.undelegatedCAmount) ? String(object.undelegatedCAmount) : "",
      receivedAmount: isSet(object.receivedAmount) ? String(object.receivedAmount) : "",
      pendingAmount: isSet(object.pendingAmount) ? String(object.pendingAmount) : "",
      pendingCAmount: isSet(object.pendingCAmount) ? String(object.pendingCAmount) : "",
      swept: isSet(object.swept) ? Boolean(object.swept) : false,
      received: isSet(object.received) ? Boolean(object.received) : false,
      claimedUAmount: isSet(object.claimedUAmount) ? String(object.claimedUAmount) : ""
    };
  },
  toJSON(message: ChannelUndelegation): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.totalCAmount !== undefined && (obj.totalCAmount = message.totalCAmount);
    message.undelegatedCAmount !== undefined && (obj.undelegatedCAmount = message.undelegatedCAmount);
    message.receivedAmount !== undefined && (obj.receivedAmount = message.receivedAmount);
    message.pendingAmount !== undefined && (obj.pendingAmount = message.pendingAmount);
    message.pendingCAmount !== undefined && (obj.pendingCAmount = message.pendingCAmount);
    message.swept !== undefined && (obj.swept = message.swept);
    message.received !== undefined && (obj.received = message.received);
    message.claimedUAmount !== undefined && (obj.claimedUAmount = message.claimedUAmount);
    return obj;
  },
  fromPartial(object: Partial<ChannelUndelegation>): ChannelUndelegation {
    const message = createBaseChannelUndelegation();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.transferChannel = object.transferChannel ?? "";
    message.totalCAmount = object.totalCAmount ?? "";
    message.undelegatedCAmount = object.undelegatedCAmount ?? "";
    message.receivedAmount = object.receivedAmount ?? "";
    message.pendingAmount = object.pendingAmount ?? "";
    message.pendingCAmount = object.pendingCAmount ?? "";
    message.swept = object.swept ?? false;
    message.received = object.received ?? false;
    message.claimedUAmount = object.claimedUAmount ?? "";
    return message;
  },
  fromAmino(object: ChannelUndelegationAmino): ChannelUndelegation {
    const message = createBaseChannelUndelegation();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.total_c_amount !== undefined && object.total_c_amount !== null) {
      message.totalCAmount = object.total_c_amount;
    }
    if (object.undelegated_c_amount !== undefined && object.undelegated_c_amount !== null) {
      message.undelegatedCAmount = object.undelegated_c_amount;
    }
    if (object.received_amount !== undefined && object.received_amount !== null) {
      message.receivedAmount = object.received_amount;
    }
    if (object.pending_amount !== undefined && object.pending_amount !== null) {
      message.pendingAmount = object.pending_amount;
    }
    if (object.pending_c_amount !== undefined && object.pending_c_amount !== null) {
      message.pendingCAmount = object.pending_c_amount;
    }
    if (object.swept !== undefined && object.swept !== null) {
      message.swept = object.swept;
    }
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    }
    if (object.claimed_u_amount !== undefined && object.claimed_u_amount !== null) {
      message.claimedUAmount = object.claimed_u_amount;
    }
    return message;
  },
  toAmino(message: ChannelUndelegation, useInterfaces: boolean = true): ChannelUndelegationAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.total_c_amount = message.totalCAmount === "" ? undefined : message.totalCAmount;
    obj.undelegated_c_amount = message.undelegatedCAmount === "" ? undefined : message.undelegatedCAmount;
    obj.received_amount = message.receivedAmount === "" ? undefined : message.receivedAmount;
    obj.pending_amount = message.pendingAmount === "" ? undefined : message.pendingAmount;
    obj.pending_c_amount = message.pendingCAmount === "" ? undefined : message.pendingCAmount;
    obj.swept = message.swept === false ? undefined : message.swept;
    obj.received = message.received === false ? undefined : message.received;
    obj.claimed_u_amount = message.claimedUAmount === "" ? undefined : message.claimedUAmount;
    return obj;
  },
  fromAminoMsg(object: ChannelUndelegationAminoMsg): ChannelUndelegation {
    return ChannelUndelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: ChannelUndelegationProtoMsg, useInterfaces: boolean = true): ChannelUndelegation {
    return ChannelUndelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ChannelUndelegation): Uint8Array {
    return ChannelUndelegation.encode(message).finish();
  },
  toProtoMsg(message: ChannelUndelegation): ChannelUndelegationProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.ChannelUndelegation",
      value: ChannelUndelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ChannelUndelegation.typeUrl, ChannelUndelegation);