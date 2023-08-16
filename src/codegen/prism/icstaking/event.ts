import { HostChain, HostChainSDKType, HostChainState, HostChainStateSDKType } from "./host_chain";
import { Params, ParamsSDKType } from "./params";
import { Undelegation, UndelegationSDKType, ChannelUndelegation, ChannelUndelegationSDKType } from "./undelegation";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventSetHostChain {
  hostChain: HostChain;
}
export interface EventSetHostChainSDKType {
  host_chain: HostChainSDKType;
}
export interface EventSetHostChainState {
  hostChainState: HostChainState;
}
export interface EventSetHostChainStateSDKType {
  host_chain_state: HostChainStateSDKType;
}
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventSetUndelegation {
  undelegation: Undelegation;
}
export interface EventSetUndelegationSDKType {
  undelegation: UndelegationSDKType;
}
export interface EventSetChannelUndelegation {
  channelUndelegation: ChannelUndelegation;
}
export interface EventSetChannelUndelegationSDKType {
  channel_undelegation: ChannelUndelegationSDKType;
}
export interface EventStake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  amount: string;
  fee: Coin;
  cAmount: Coin;
}
export interface EventStakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  amount: string;
  fee: CoinSDKType;
  c_amount: CoinSDKType;
}
export interface EventUnstake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  cAmount: string;
  uAmount: Coin;
}
export interface EventUnstakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  c_amount: string;
  u_amount: CoinSDKType;
}
export interface EventRedeemUnstaked {
  creator: string;
  hostChain: string;
  transferChannel: string;
  epoch: Long;
  uAmount: string;
  amount: Coin;
  fee: Coin;
}
export interface EventRedeemUnstakedSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  epoch: Long;
  u_amount: string;
  amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface EventInstantUnstake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  minCAmount: string;
  maxCAmount: string;
  amount: Coin;
  fee: Coin;
}
export interface EventInstantUnstakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  min_c_amount: string;
  max_c_amount: string;
  amount: CoinSDKType;
  fee: CoinSDKType;
}
function createBaseEventSetHostChain(): EventSetHostChain {
  return {
    hostChain: HostChain.fromPartial({})
  };
}
export const EventSetHostChain = {
  encode(message: EventSetHostChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetHostChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = HostChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetHostChain {
    return {
      hostChain: isSet(object.hostChain) ? HostChain.fromJSON(object.hostChain) : undefined
    };
  },
  toJSON(message: EventSetHostChain): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetHostChain>): EventSetHostChain {
    const message = createBaseEventSetHostChain();
    message.hostChain = object.hostChain !== undefined && object.hostChain !== null ? HostChain.fromPartial(object.hostChain) : undefined;
    return message;
  }
};
function createBaseEventSetHostChainState(): EventSetHostChainState {
  return {
    hostChainState: HostChainState.fromPartial({})
  };
}
export const EventSetHostChainState = {
  encode(message: EventSetHostChainState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChainState !== undefined) {
      HostChainState.encode(message.hostChainState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetHostChainState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetHostChainState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainState = HostChainState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetHostChainState {
    return {
      hostChainState: isSet(object.hostChainState) ? HostChainState.fromJSON(object.hostChainState) : undefined
    };
  },
  toJSON(message: EventSetHostChainState): unknown {
    const obj: any = {};
    message.hostChainState !== undefined && (obj.hostChainState = message.hostChainState ? HostChainState.toJSON(message.hostChainState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetHostChainState>): EventSetHostChainState {
    const message = createBaseEventSetHostChainState();
    message.hostChainState = object.hostChainState !== undefined && object.hostChainState !== null ? HostChainState.fromPartial(object.hostChainState) : undefined;
    return message;
  }
};
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  encode(message: EventSetParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseEventSetUndelegation(): EventSetUndelegation {
  return {
    undelegation: Undelegation.fromPartial({})
  };
}
export const EventSetUndelegation = {
  encode(message: EventSetUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.undelegation !== undefined) {
      Undelegation.encode(message.undelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation = Undelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetUndelegation {
    return {
      undelegation: isSet(object.undelegation) ? Undelegation.fromJSON(object.undelegation) : undefined
    };
  },
  toJSON(message: EventSetUndelegation): unknown {
    const obj: any = {};
    message.undelegation !== undefined && (obj.undelegation = message.undelegation ? Undelegation.toJSON(message.undelegation) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetUndelegation>): EventSetUndelegation {
    const message = createBaseEventSetUndelegation();
    message.undelegation = object.undelegation !== undefined && object.undelegation !== null ? Undelegation.fromPartial(object.undelegation) : undefined;
    return message;
  }
};
function createBaseEventSetChannelUndelegation(): EventSetChannelUndelegation {
  return {
    channelUndelegation: ChannelUndelegation.fromPartial({})
  };
}
export const EventSetChannelUndelegation = {
  encode(message: EventSetChannelUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelUndelegation !== undefined) {
      ChannelUndelegation.encode(message.channelUndelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetChannelUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetChannelUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelUndelegation = ChannelUndelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetChannelUndelegation {
    return {
      channelUndelegation: isSet(object.channelUndelegation) ? ChannelUndelegation.fromJSON(object.channelUndelegation) : undefined
    };
  },
  toJSON(message: EventSetChannelUndelegation): unknown {
    const obj: any = {};
    message.channelUndelegation !== undefined && (obj.channelUndelegation = message.channelUndelegation ? ChannelUndelegation.toJSON(message.channelUndelegation) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetChannelUndelegation>): EventSetChannelUndelegation {
    const message = createBaseEventSetChannelUndelegation();
    message.channelUndelegation = object.channelUndelegation !== undefined && object.channelUndelegation !== null ? ChannelUndelegation.fromPartial(object.channelUndelegation) : undefined;
    return message;
  }
};
function createBaseEventStake(): EventStake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    amount: "",
    fee: Coin.fromPartial({}),
    cAmount: Coin.fromPartial({})
  };
}
export const EventStake = {
  encode(message: EventStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.cAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      cAmount: isSet(object.cAmount) ? Coin.fromJSON(object.cAmount) : undefined
    };
  },
  toJSON(message: EventStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventStake>): EventStake {
    const message = createBaseEventStake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.amount = object.amount ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.cAmount = object.cAmount !== undefined && object.cAmount !== null ? Coin.fromPartial(object.cAmount) : undefined;
    return message;
  }
};
function createBaseEventUnstake(): EventUnstake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    cAmount: "",
    uAmount: Coin.fromPartial({})
  };
}
export const EventUnstake = {
  encode(message: EventUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.cAmount !== "") {
      writer.uint32(34).string(message.cAmount);
    }
    if (message.uAmount !== undefined) {
      Coin.encode(message.uAmount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.cAmount = reader.string();
          break;
        case 5:
          message.uAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      cAmount: isSet(object.cAmount) ? String(object.cAmount) : "",
      uAmount: isSet(object.uAmount) ? Coin.fromJSON(object.uAmount) : undefined
    };
  },
  toJSON(message: EventUnstake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.cAmount !== undefined && (obj.cAmount = message.cAmount);
    message.uAmount !== undefined && (obj.uAmount = message.uAmount ? Coin.toJSON(message.uAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventUnstake>): EventUnstake {
    const message = createBaseEventUnstake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.cAmount = object.cAmount ?? "";
    message.uAmount = object.uAmount !== undefined && object.uAmount !== null ? Coin.fromPartial(object.uAmount) : undefined;
    return message;
  }
};
function createBaseEventRedeemUnstaked(): EventRedeemUnstaked {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    epoch: Long.UZERO,
    uAmount: "",
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventRedeemUnstaked = {
  encode(message: EventRedeemUnstaked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(32).uint64(message.epoch);
    }
    if (message.uAmount !== "") {
      writer.uint32(42).string(message.uAmount);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedeemUnstaked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedeemUnstaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.epoch = (reader.uint64() as Long);
          break;
        case 5:
          message.uAmount = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRedeemUnstaked {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      uAmount: isSet(object.uAmount) ? String(object.uAmount) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventRedeemUnstaked): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.uAmount !== undefined && (obj.uAmount = message.uAmount);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventRedeemUnstaked>): EventRedeemUnstaked {
    const message = createBaseEventRedeemUnstaked();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.uAmount = object.uAmount ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseEventInstantUnstake(): EventInstantUnstake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    minCAmount: "",
    maxCAmount: "",
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventInstantUnstake = {
  encode(message: EventInstantUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.minCAmount !== "") {
      writer.uint32(34).string(message.minCAmount);
    }
    if (message.maxCAmount !== "") {
      writer.uint32(42).string(message.maxCAmount);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventInstantUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInstantUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.minCAmount = reader.string();
          break;
        case 5:
          message.maxCAmount = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventInstantUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      minCAmount: isSet(object.minCAmount) ? String(object.minCAmount) : "",
      maxCAmount: isSet(object.maxCAmount) ? String(object.maxCAmount) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventInstantUnstake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.minCAmount !== undefined && (obj.minCAmount = message.minCAmount);
    message.maxCAmount !== undefined && (obj.maxCAmount = message.maxCAmount);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventInstantUnstake>): EventInstantUnstake {
    const message = createBaseEventInstantUnstake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.minCAmount = object.minCAmount ?? "";
    message.maxCAmount = object.maxCAmount ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};