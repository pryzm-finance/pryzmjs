import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Information about an undelegation in a specific epoch */
export interface Undelegation {
  /** host chain id */
  hostChain: string;
  /** the undelegation epoch id */
  epoch: Long;
  /** the exchange rate of cToken:Token at the end of undelegation epoch */
  exchangeRate: string;
  /** whether the undelegation request is sent and has started on host chain */
  started: boolean;
  /** whether the undelegation un-bonding period is passed and undelegated assets are available */
  completed: boolean;
  /** the time in which the undelegation will be completed and the assets are transferred to delegation account */
  completionTime?: Timestamp;
}
/** Information about an undelegation in a specific epoch */
export interface UndelegationSDKType {
  host_chain: string;
  epoch: Long;
  exchange_rate: string;
  started: boolean;
  completed: boolean;
  completion_time?: TimestampSDKType;
}
/** ChannelUndelegation contains information about an undelegation epoch for a specific transfer channel */
export interface ChannelUndelegation {
  /** host chain id */
  hostChain: string;
  /** the undelegation epoch id */
  epoch: Long;
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
  /** whether the ibc transfer messages for sweeping assets to PRISM are sent successfully */
  swept: boolean;
  /**
   * whether all the undelegation are completely received
   * if received is true, transferring_amount must be zero
   */
  received: boolean;
  /**
   * the amount of assets that are redeemed by users.
   * a channel undelegation record is deleted when received is true and this amount is equal the received_amount
   */
  claimedAmount: string;
}
/** ChannelUndelegation contains information about an undelegation epoch for a specific transfer channel */
export interface ChannelUndelegationSDKType {
  host_chain: string;
  epoch: Long;
  transfer_channel: string;
  total_c_amount: string;
  undelegated_c_amount: string;
  received_amount: string;
  pending_amount: string;
  pending_c_amount: string;
  swept: boolean;
  received: boolean;
  claimed_amount: string;
}
function createBaseUndelegation(): Undelegation {
  return {
    hostChain: "",
    epoch: Long.UZERO,
    exchangeRate: "",
    started: false,
    completed: false,
    completionTime: undefined
  };
}
export const Undelegation = {
  encode(message: Undelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(26).string(message.exchangeRate);
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Undelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = (reader.uint64() as Long);
          break;
        case 3:
          message.exchangeRate = reader.string();
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
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      started: isSet(object.started) ? Boolean(object.started) : false,
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: Undelegation): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.started !== undefined && (obj.started = message.started);
    message.completed !== undefined && (obj.completed = message.completed);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Undelegation>): Undelegation {
    const message = createBaseUndelegation();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.exchangeRate = object.exchangeRate ?? "";
    message.started = object.started ?? false;
    message.completed = object.completed ?? false;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  }
};
function createBaseChannelUndelegation(): ChannelUndelegation {
  return {
    hostChain: "",
    epoch: Long.UZERO,
    transferChannel: "",
    totalCAmount: "",
    undelegatedCAmount: "",
    receivedAmount: "",
    pendingAmount: "",
    pendingCAmount: "",
    swept: false,
    received: false,
    claimedAmount: ""
  };
}
export const ChannelUndelegation = {
  encode(message: ChannelUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (!message.epoch.isZero()) {
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
    if (message.claimedAmount !== "") {
      writer.uint32(90).string(message.claimedAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = (reader.uint64() as Long);
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
          message.claimedAmount = reader.string();
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
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      totalCAmount: isSet(object.totalCAmount) ? String(object.totalCAmount) : "",
      undelegatedCAmount: isSet(object.undelegatedCAmount) ? String(object.undelegatedCAmount) : "",
      receivedAmount: isSet(object.receivedAmount) ? String(object.receivedAmount) : "",
      pendingAmount: isSet(object.pendingAmount) ? String(object.pendingAmount) : "",
      pendingCAmount: isSet(object.pendingCAmount) ? String(object.pendingCAmount) : "",
      swept: isSet(object.swept) ? Boolean(object.swept) : false,
      received: isSet(object.received) ? Boolean(object.received) : false,
      claimedAmount: isSet(object.claimedAmount) ? String(object.claimedAmount) : ""
    };
  },
  toJSON(message: ChannelUndelegation): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.totalCAmount !== undefined && (obj.totalCAmount = message.totalCAmount);
    message.undelegatedCAmount !== undefined && (obj.undelegatedCAmount = message.undelegatedCAmount);
    message.receivedAmount !== undefined && (obj.receivedAmount = message.receivedAmount);
    message.pendingAmount !== undefined && (obj.pendingAmount = message.pendingAmount);
    message.pendingCAmount !== undefined && (obj.pendingCAmount = message.pendingCAmount);
    message.swept !== undefined && (obj.swept = message.swept);
    message.received !== undefined && (obj.received = message.received);
    message.claimedAmount !== undefined && (obj.claimedAmount = message.claimedAmount);
    return obj;
  },
  fromPartial(object: Partial<ChannelUndelegation>): ChannelUndelegation {
    const message = createBaseChannelUndelegation();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.transferChannel = object.transferChannel ?? "";
    message.totalCAmount = object.totalCAmount ?? "";
    message.undelegatedCAmount = object.undelegatedCAmount ?? "";
    message.receivedAmount = object.receivedAmount ?? "";
    message.pendingAmount = object.pendingAmount ?? "";
    message.pendingCAmount = object.pendingCAmount ?? "";
    message.swept = object.swept ?? false;
    message.received = object.received ?? false;
    message.claimedAmount = object.claimedAmount ?? "";
    return message;
  }
};