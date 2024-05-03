import { HostChain, HostChainAmino, HostChainSDKType, HostChainState, HostChainStateAmino, HostChainStateSDKType } from "./host_chain";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Undelegation, UndelegationAmino, UndelegationSDKType, ChannelUndelegation, ChannelUndelegationAmino, ChannelUndelegationSDKType } from "./undelegation";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventSetHostChain {
  hostChain: HostChain;
}
export interface EventSetHostChainProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventSetHostChain";
  value: Uint8Array;
}
export interface EventSetHostChainAmino {
  host_chain?: HostChainAmino;
}
export interface EventSetHostChainAminoMsg {
  type: "/pryzm.icstaking.v1.EventSetHostChain";
  value: EventSetHostChainAmino;
}
export interface EventSetHostChainSDKType {
  host_chain: HostChainSDKType;
}
export interface EventSetHostChainState {
  hostChainState: HostChainState;
}
export interface EventSetHostChainStateProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventSetHostChainState";
  value: Uint8Array;
}
export interface EventSetHostChainStateAmino {
  host_chain_state?: HostChainStateAmino;
}
export interface EventSetHostChainStateAminoMsg {
  type: "/pryzm.icstaking.v1.EventSetHostChainState";
  value: EventSetHostChainStateAmino;
}
export interface EventSetHostChainStateSDKType {
  host_chain_state: HostChainStateSDKType;
}
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/pryzm.icstaking.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventSetUndelegation {
  undelegation: Undelegation;
}
export interface EventSetUndelegationProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventSetUndelegation";
  value: Uint8Array;
}
export interface EventSetUndelegationAmino {
  undelegation?: UndelegationAmino;
}
export interface EventSetUndelegationAminoMsg {
  type: "/pryzm.icstaking.v1.EventSetUndelegation";
  value: EventSetUndelegationAmino;
}
export interface EventSetUndelegationSDKType {
  undelegation: UndelegationSDKType;
}
export interface EventSetChannelUndelegation {
  channelUndelegation: ChannelUndelegation;
}
export interface EventSetChannelUndelegationProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventSetChannelUndelegation";
  value: Uint8Array;
}
export interface EventSetChannelUndelegationAmino {
  channel_undelegation?: ChannelUndelegationAmino;
}
export interface EventSetChannelUndelegationAminoMsg {
  type: "/pryzm.icstaking.v1.EventSetChannelUndelegation";
  value: EventSetChannelUndelegationAmino;
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
export interface EventStakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventStake";
  value: Uint8Array;
}
export interface EventStakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  amount?: string;
  fee?: CoinAmino;
  c_amount?: CoinAmino;
}
export interface EventStakeAminoMsg {
  type: "/pryzm.icstaking.v1.EventStake";
  value: EventStakeAmino;
}
export interface EventStakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  amount: string;
  fee: CoinSDKType;
  c_amount: CoinSDKType;
}
export interface EventStakeLsmShares {
  creator: string;
  hostChain: string;
  transferChannel: string;
  lsmDenom: string;
  amount: string;
  fee: Coin;
  cAmount: Coin;
}
export interface EventStakeLsmSharesProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventStakeLsmShares";
  value: Uint8Array;
}
export interface EventStakeLsmSharesAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  lsm_denom?: string;
  amount?: string;
  fee?: CoinAmino;
  c_amount?: CoinAmino;
}
export interface EventStakeLsmSharesAminoMsg {
  type: "/pryzm.icstaking.v1.EventStakeLsmShares";
  value: EventStakeLsmSharesAmino;
}
export interface EventStakeLsmSharesSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  lsm_denom: string;
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
export interface EventUnstakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventUnstake";
  value: Uint8Array;
}
export interface EventUnstakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  c_amount?: string;
  u_amount?: CoinAmino;
}
export interface EventUnstakeAminoMsg {
  type: "/pryzm.icstaking.v1.EventUnstake";
  value: EventUnstakeAmino;
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
  epoch: bigint;
  uAmount: string;
  amount: Coin;
  fee: Coin;
}
export interface EventRedeemUnstakedProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventRedeemUnstaked";
  value: Uint8Array;
}
export interface EventRedeemUnstakedAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  epoch?: string;
  u_amount?: string;
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface EventRedeemUnstakedAminoMsg {
  type: "/pryzm.icstaking.v1.EventRedeemUnstaked";
  value: EventRedeemUnstakedAmino;
}
export interface EventRedeemUnstakedSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  epoch: bigint;
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
export interface EventInstantUnstakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.EventInstantUnstake";
  value: Uint8Array;
}
export interface EventInstantUnstakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  min_c_amount?: string;
  max_c_amount?: string;
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface EventInstantUnstakeAminoMsg {
  type: "/pryzm.icstaking.v1.EventInstantUnstake";
  value: EventInstantUnstakeAmino;
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
  typeUrl: "/pryzm.icstaking.v1.EventSetHostChain",
  is(o: any): o is EventSetHostChain {
    return o && (o.$typeUrl === EventSetHostChain.typeUrl || HostChain.is(o.hostChain));
  },
  isSDK(o: any): o is EventSetHostChainSDKType {
    return o && (o.$typeUrl === EventSetHostChain.typeUrl || HostChain.isSDK(o.host_chain));
  },
  isAmino(o: any): o is EventSetHostChainAmino {
    return o && (o.$typeUrl === EventSetHostChain.typeUrl || HostChain.isAmino(o.host_chain));
  },
  encode(message: EventSetHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = HostChain.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: EventSetHostChainAmino): EventSetHostChain {
    const message = createBaseEventSetHostChain();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = HostChain.fromAmino(object.host_chain);
    }
    return message;
  },
  toAmino(message: EventSetHostChain, useInterfaces: boolean = true): EventSetHostChainAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain ? HostChain.toAmino(message.hostChain, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetHostChainAminoMsg): EventSetHostChain {
    return EventSetHostChain.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetHostChainProtoMsg, useInterfaces: boolean = true): EventSetHostChain {
    return EventSetHostChain.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetHostChain): Uint8Array {
    return EventSetHostChain.encode(message).finish();
  },
  toProtoMsg(message: EventSetHostChain): EventSetHostChainProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventSetHostChain",
      value: EventSetHostChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetHostChain.typeUrl, EventSetHostChain);
function createBaseEventSetHostChainState(): EventSetHostChainState {
  return {
    hostChainState: HostChainState.fromPartial({})
  };
}
export const EventSetHostChainState = {
  typeUrl: "/pryzm.icstaking.v1.EventSetHostChainState",
  is(o: any): o is EventSetHostChainState {
    return o && (o.$typeUrl === EventSetHostChainState.typeUrl || HostChainState.is(o.hostChainState));
  },
  isSDK(o: any): o is EventSetHostChainStateSDKType {
    return o && (o.$typeUrl === EventSetHostChainState.typeUrl || HostChainState.isSDK(o.host_chain_state));
  },
  isAmino(o: any): o is EventSetHostChainStateAmino {
    return o && (o.$typeUrl === EventSetHostChainState.typeUrl || HostChainState.isAmino(o.host_chain_state));
  },
  encode(message: EventSetHostChainState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainState !== undefined) {
      HostChainState.encode(message.hostChainState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetHostChainState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetHostChainState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainState = HostChainState.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: EventSetHostChainStateAmino): EventSetHostChainState {
    const message = createBaseEventSetHostChainState();
    if (object.host_chain_state !== undefined && object.host_chain_state !== null) {
      message.hostChainState = HostChainState.fromAmino(object.host_chain_state);
    }
    return message;
  },
  toAmino(message: EventSetHostChainState, useInterfaces: boolean = true): EventSetHostChainStateAmino {
    const obj: any = {};
    obj.host_chain_state = message.hostChainState ? HostChainState.toAmino(message.hostChainState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetHostChainStateAminoMsg): EventSetHostChainState {
    return EventSetHostChainState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetHostChainStateProtoMsg, useInterfaces: boolean = true): EventSetHostChainState {
    return EventSetHostChainState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetHostChainState): Uint8Array {
    return EventSetHostChainState.encode(message).finish();
  },
  toProtoMsg(message: EventSetHostChainState): EventSetHostChainStateProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventSetHostChainState",
      value: EventSetHostChainState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetHostChainState.typeUrl, EventSetHostChainState);
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/pryzm.icstaking.v1.EventSetParams",
  is(o: any): o is EventSetParams {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is EventSetParamsSDKType {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is EventSetParamsAmino {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.isAmino(o.params));
  },
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: EventSetParamsAmino): EventSetParams {
    const message = createBaseEventSetParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: EventSetParams, useInterfaces: boolean = true): EventSetParamsAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetParamsAminoMsg): EventSetParams {
    return EventSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetParamsProtoMsg, useInterfaces: boolean = true): EventSetParams {
    return EventSetParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetParams): Uint8Array {
    return EventSetParams.encode(message).finish();
  },
  toProtoMsg(message: EventSetParams): EventSetParamsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetParams.typeUrl, EventSetParams);
function createBaseEventSetUndelegation(): EventSetUndelegation {
  return {
    undelegation: Undelegation.fromPartial({})
  };
}
export const EventSetUndelegation = {
  typeUrl: "/pryzm.icstaking.v1.EventSetUndelegation",
  is(o: any): o is EventSetUndelegation {
    return o && (o.$typeUrl === EventSetUndelegation.typeUrl || Undelegation.is(o.undelegation));
  },
  isSDK(o: any): o is EventSetUndelegationSDKType {
    return o && (o.$typeUrl === EventSetUndelegation.typeUrl || Undelegation.isSDK(o.undelegation));
  },
  isAmino(o: any): o is EventSetUndelegationAmino {
    return o && (o.$typeUrl === EventSetUndelegation.typeUrl || Undelegation.isAmino(o.undelegation));
  },
  encode(message: EventSetUndelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.undelegation !== undefined) {
      Undelegation.encode(message.undelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetUndelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation = Undelegation.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: EventSetUndelegationAmino): EventSetUndelegation {
    const message = createBaseEventSetUndelegation();
    if (object.undelegation !== undefined && object.undelegation !== null) {
      message.undelegation = Undelegation.fromAmino(object.undelegation);
    }
    return message;
  },
  toAmino(message: EventSetUndelegation, useInterfaces: boolean = true): EventSetUndelegationAmino {
    const obj: any = {};
    obj.undelegation = message.undelegation ? Undelegation.toAmino(message.undelegation, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetUndelegationAminoMsg): EventSetUndelegation {
    return EventSetUndelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetUndelegationProtoMsg, useInterfaces: boolean = true): EventSetUndelegation {
    return EventSetUndelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetUndelegation): Uint8Array {
    return EventSetUndelegation.encode(message).finish();
  },
  toProtoMsg(message: EventSetUndelegation): EventSetUndelegationProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventSetUndelegation",
      value: EventSetUndelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetUndelegation.typeUrl, EventSetUndelegation);
function createBaseEventSetChannelUndelegation(): EventSetChannelUndelegation {
  return {
    channelUndelegation: ChannelUndelegation.fromPartial({})
  };
}
export const EventSetChannelUndelegation = {
  typeUrl: "/pryzm.icstaking.v1.EventSetChannelUndelegation",
  is(o: any): o is EventSetChannelUndelegation {
    return o && (o.$typeUrl === EventSetChannelUndelegation.typeUrl || ChannelUndelegation.is(o.channelUndelegation));
  },
  isSDK(o: any): o is EventSetChannelUndelegationSDKType {
    return o && (o.$typeUrl === EventSetChannelUndelegation.typeUrl || ChannelUndelegation.isSDK(o.channel_undelegation));
  },
  isAmino(o: any): o is EventSetChannelUndelegationAmino {
    return o && (o.$typeUrl === EventSetChannelUndelegation.typeUrl || ChannelUndelegation.isAmino(o.channel_undelegation));
  },
  encode(message: EventSetChannelUndelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelUndelegation !== undefined) {
      ChannelUndelegation.encode(message.channelUndelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetChannelUndelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetChannelUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelUndelegation = ChannelUndelegation.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: EventSetChannelUndelegationAmino): EventSetChannelUndelegation {
    const message = createBaseEventSetChannelUndelegation();
    if (object.channel_undelegation !== undefined && object.channel_undelegation !== null) {
      message.channelUndelegation = ChannelUndelegation.fromAmino(object.channel_undelegation);
    }
    return message;
  },
  toAmino(message: EventSetChannelUndelegation, useInterfaces: boolean = true): EventSetChannelUndelegationAmino {
    const obj: any = {};
    obj.channel_undelegation = message.channelUndelegation ? ChannelUndelegation.toAmino(message.channelUndelegation, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetChannelUndelegationAminoMsg): EventSetChannelUndelegation {
    return EventSetChannelUndelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetChannelUndelegationProtoMsg, useInterfaces: boolean = true): EventSetChannelUndelegation {
    return EventSetChannelUndelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetChannelUndelegation): Uint8Array {
    return EventSetChannelUndelegation.encode(message).finish();
  },
  toProtoMsg(message: EventSetChannelUndelegation): EventSetChannelUndelegationProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventSetChannelUndelegation",
      value: EventSetChannelUndelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetChannelUndelegation.typeUrl, EventSetChannelUndelegation);
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
  typeUrl: "/pryzm.icstaking.v1.EventStake",
  is(o: any): o is EventStake {
    return o && (o.$typeUrl === EventStake.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.amount === "string" && Coin.is(o.fee) && Coin.is(o.cAmount));
  },
  isSDK(o: any): o is EventStakeSDKType {
    return o && (o.$typeUrl === EventStake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.amount === "string" && Coin.isSDK(o.fee) && Coin.isSDK(o.c_amount));
  },
  isAmino(o: any): o is EventStakeAmino {
    return o && (o.$typeUrl === EventStake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.amount === "string" && Coin.isAmino(o.fee) && Coin.isAmino(o.c_amount));
  },
  encode(message: EventStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.cAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: EventStakeAmino): EventStake {
    const message = createBaseEventStake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = Coin.fromAmino(object.c_amount);
    }
    return message;
  },
  toAmino(message: EventStake, useInterfaces: boolean = true): EventStakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    obj.c_amount = message.cAmount ? Coin.toAmino(message.cAmount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventStakeAminoMsg): EventStake {
    return EventStake.fromAmino(object.value);
  },
  fromProtoMsg(message: EventStakeProtoMsg, useInterfaces: boolean = true): EventStake {
    return EventStake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventStake): Uint8Array {
    return EventStake.encode(message).finish();
  },
  toProtoMsg(message: EventStake): EventStakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventStake",
      value: EventStake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventStake.typeUrl, EventStake);
function createBaseEventStakeLsmShares(): EventStakeLsmShares {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    lsmDenom: "",
    amount: "",
    fee: Coin.fromPartial({}),
    cAmount: Coin.fromPartial({})
  };
}
export const EventStakeLsmShares = {
  typeUrl: "/pryzm.icstaking.v1.EventStakeLsmShares",
  is(o: any): o is EventStakeLsmShares {
    return o && (o.$typeUrl === EventStakeLsmShares.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.lsmDenom === "string" && typeof o.amount === "string" && Coin.is(o.fee) && Coin.is(o.cAmount));
  },
  isSDK(o: any): o is EventStakeLsmSharesSDKType {
    return o && (o.$typeUrl === EventStakeLsmShares.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.lsm_denom === "string" && typeof o.amount === "string" && Coin.isSDK(o.fee) && Coin.isSDK(o.c_amount));
  },
  isAmino(o: any): o is EventStakeLsmSharesAmino {
    return o && (o.$typeUrl === EventStakeLsmShares.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.lsm_denom === "string" && typeof o.amount === "string" && Coin.isAmino(o.fee) && Coin.isAmino(o.c_amount));
  },
  encode(message: EventStakeLsmShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.lsmDenom !== "") {
      writer.uint32(34).string(message.lsmDenom);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(50).fork()).ldelim();
    }
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventStakeLsmShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStakeLsmShares();
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
          message.lsmDenom = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.cAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventStakeLsmShares {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      lsmDenom: isSet(object.lsmDenom) ? String(object.lsmDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      cAmount: isSet(object.cAmount) ? Coin.fromJSON(object.cAmount) : undefined
    };
  },
  toJSON(message: EventStakeLsmShares): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.lsmDenom !== undefined && (obj.lsmDenom = message.lsmDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventStakeLsmShares>): EventStakeLsmShares {
    const message = createBaseEventStakeLsmShares();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.lsmDenom = object.lsmDenom ?? "";
    message.amount = object.amount ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.cAmount = object.cAmount !== undefined && object.cAmount !== null ? Coin.fromPartial(object.cAmount) : undefined;
    return message;
  },
  fromAmino(object: EventStakeLsmSharesAmino): EventStakeLsmShares {
    const message = createBaseEventStakeLsmShares();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.lsm_denom !== undefined && object.lsm_denom !== null) {
      message.lsmDenom = object.lsm_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = Coin.fromAmino(object.c_amount);
    }
    return message;
  },
  toAmino(message: EventStakeLsmShares, useInterfaces: boolean = true): EventStakeLsmSharesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.lsm_denom = message.lsmDenom === "" ? undefined : message.lsmDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    obj.c_amount = message.cAmount ? Coin.toAmino(message.cAmount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventStakeLsmSharesAminoMsg): EventStakeLsmShares {
    return EventStakeLsmShares.fromAmino(object.value);
  },
  fromProtoMsg(message: EventStakeLsmSharesProtoMsg, useInterfaces: boolean = true): EventStakeLsmShares {
    return EventStakeLsmShares.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventStakeLsmShares): Uint8Array {
    return EventStakeLsmShares.encode(message).finish();
  },
  toProtoMsg(message: EventStakeLsmShares): EventStakeLsmSharesProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventStakeLsmShares",
      value: EventStakeLsmShares.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventStakeLsmShares.typeUrl, EventStakeLsmShares);
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
  typeUrl: "/pryzm.icstaking.v1.EventUnstake",
  is(o: any): o is EventUnstake {
    return o && (o.$typeUrl === EventUnstake.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.cAmount === "string" && Coin.is(o.uAmount));
  },
  isSDK(o: any): o is EventUnstakeSDKType {
    return o && (o.$typeUrl === EventUnstake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.c_amount === "string" && Coin.isSDK(o.u_amount));
  },
  isAmino(o: any): o is EventUnstakeAmino {
    return o && (o.$typeUrl === EventUnstake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.c_amount === "string" && Coin.isAmino(o.u_amount));
  },
  encode(message: EventUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.uAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: EventUnstakeAmino): EventUnstake {
    const message = createBaseEventUnstake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = object.c_amount;
    }
    if (object.u_amount !== undefined && object.u_amount !== null) {
      message.uAmount = Coin.fromAmino(object.u_amount);
    }
    return message;
  },
  toAmino(message: EventUnstake, useInterfaces: boolean = true): EventUnstakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.c_amount = message.cAmount === "" ? undefined : message.cAmount;
    obj.u_amount = message.uAmount ? Coin.toAmino(message.uAmount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUnstakeAminoMsg): EventUnstake {
    return EventUnstake.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnstakeProtoMsg, useInterfaces: boolean = true): EventUnstake {
    return EventUnstake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventUnstake): Uint8Array {
    return EventUnstake.encode(message).finish();
  },
  toProtoMsg(message: EventUnstake): EventUnstakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventUnstake",
      value: EventUnstake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventUnstake.typeUrl, EventUnstake);
function createBaseEventRedeemUnstaked(): EventRedeemUnstaked {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    epoch: BigInt(0),
    uAmount: "",
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventRedeemUnstaked = {
  typeUrl: "/pryzm.icstaking.v1.EventRedeemUnstaked",
  is(o: any): o is EventRedeemUnstaked {
    return o && (o.$typeUrl === EventRedeemUnstaked.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.epoch === "bigint" && typeof o.uAmount === "string" && Coin.is(o.amount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is EventRedeemUnstakedSDKType {
    return o && (o.$typeUrl === EventRedeemUnstaked.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.epoch === "bigint" && typeof o.u_amount === "string" && Coin.isSDK(o.amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is EventRedeemUnstakedAmino {
    return o && (o.$typeUrl === EventRedeemUnstaked.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.epoch === "bigint" && typeof o.u_amount === "string" && Coin.isAmino(o.amount) && Coin.isAmino(o.fee));
  },
  encode(message: EventRedeemUnstaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.epoch !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRedeemUnstaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.epoch = reader.uint64();
          break;
        case 5:
          message.uAmount = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
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
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
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
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
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
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.uAmount = object.uAmount ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: EventRedeemUnstakedAmino): EventRedeemUnstaked {
    const message = createBaseEventRedeemUnstaked();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.u_amount !== undefined && object.u_amount !== null) {
      message.uAmount = object.u_amount;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventRedeemUnstaked, useInterfaces: boolean = true): EventRedeemUnstakedAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch.toString() : undefined;
    obj.u_amount = message.uAmount === "" ? undefined : message.uAmount;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRedeemUnstakedAminoMsg): EventRedeemUnstaked {
    return EventRedeemUnstaked.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRedeemUnstakedProtoMsg, useInterfaces: boolean = true): EventRedeemUnstaked {
    return EventRedeemUnstaked.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRedeemUnstaked): Uint8Array {
    return EventRedeemUnstaked.encode(message).finish();
  },
  toProtoMsg(message: EventRedeemUnstaked): EventRedeemUnstakedProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventRedeemUnstaked",
      value: EventRedeemUnstaked.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRedeemUnstaked.typeUrl, EventRedeemUnstaked);
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
  typeUrl: "/pryzm.icstaking.v1.EventInstantUnstake",
  is(o: any): o is EventInstantUnstake {
    return o && (o.$typeUrl === EventInstantUnstake.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.minCAmount === "string" && typeof o.maxCAmount === "string" && Coin.is(o.amount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is EventInstantUnstakeSDKType {
    return o && (o.$typeUrl === EventInstantUnstake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.min_c_amount === "string" && typeof o.max_c_amount === "string" && Coin.isSDK(o.amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is EventInstantUnstakeAmino {
    return o && (o.$typeUrl === EventInstantUnstake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.min_c_amount === "string" && typeof o.max_c_amount === "string" && Coin.isAmino(o.amount) && Coin.isAmino(o.fee));
  },
  encode(message: EventInstantUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventInstantUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: EventInstantUnstakeAmino): EventInstantUnstake {
    const message = createBaseEventInstantUnstake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.min_c_amount !== undefined && object.min_c_amount !== null) {
      message.minCAmount = object.min_c_amount;
    }
    if (object.max_c_amount !== undefined && object.max_c_amount !== null) {
      message.maxCAmount = object.max_c_amount;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventInstantUnstake, useInterfaces: boolean = true): EventInstantUnstakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.min_c_amount = message.minCAmount === "" ? undefined : message.minCAmount;
    obj.max_c_amount = message.maxCAmount === "" ? undefined : message.maxCAmount;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventInstantUnstakeAminoMsg): EventInstantUnstake {
    return EventInstantUnstake.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInstantUnstakeProtoMsg, useInterfaces: boolean = true): EventInstantUnstake {
    return EventInstantUnstake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventInstantUnstake): Uint8Array {
    return EventInstantUnstake.encode(message).finish();
  },
  toProtoMsg(message: EventInstantUnstake): EventInstantUnstakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.EventInstantUnstake",
      value: EventInstantUnstake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventInstantUnstake.typeUrl, EventInstantUnstake);