import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { HostChain, HostChainAmino, HostChainSDKType, HostChainState, HostChainStateAmino, HostChainStateSDKType } from "./host_chain";
import { Undelegation, UndelegationAmino, UndelegationSDKType, ChannelUndelegation, ChannelUndelegationAmino, ChannelUndelegationSDKType } from "./undelegation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the icstaking module's genesis state. */
export interface GenesisState {
  params: Params;
  portId: string;
  hostChainList: HostChain[];
  hostChainStateList: HostChainState[];
  undelegationList: Undelegation[];
  channelUndelegationList: ChannelUndelegation[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the icstaking module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  port_id?: string;
  host_chain_list?: HostChainAmino[];
  host_chain_state_list?: HostChainStateAmino[];
  undelegation_list?: UndelegationAmino[];
  channel_undelegation_list?: ChannelUndelegationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.icstaking.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the icstaking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  host_chain_list: HostChainSDKType[];
  host_chain_state_list: HostChainStateSDKType[];
  undelegation_list: UndelegationSDKType[];
  channel_undelegation_list: ChannelUndelegationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: "",
    hostChainList: [],
    hostChainStateList: [],
    undelegationList: [],
    channelUndelegationList: []
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.icstaking.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.hostChainList) {
      HostChain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hostChainStateList) {
      HostChainState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.undelegationList) {
      Undelegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.channelUndelegationList) {
      ChannelUndelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.hostChainList.push(HostChain.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hostChainStateList.push(HostChainState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.undelegationList.push(Undelegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.channelUndelegationList.push(ChannelUndelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      hostChainList: Array.isArray(object?.hostChainList) ? object.hostChainList.map((e: any) => HostChain.fromJSON(e)) : [],
      hostChainStateList: Array.isArray(object?.hostChainStateList) ? object.hostChainStateList.map((e: any) => HostChainState.fromJSON(e)) : [],
      undelegationList: Array.isArray(object?.undelegationList) ? object.undelegationList.map((e: any) => Undelegation.fromJSON(e)) : [],
      channelUndelegationList: Array.isArray(object?.channelUndelegationList) ? object.channelUndelegationList.map((e: any) => ChannelUndelegation.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    if (message.hostChainList) {
      obj.hostChainList = message.hostChainList.map(e => e ? HostChain.toJSON(e) : undefined);
    } else {
      obj.hostChainList = [];
    }
    if (message.hostChainStateList) {
      obj.hostChainStateList = message.hostChainStateList.map(e => e ? HostChainState.toJSON(e) : undefined);
    } else {
      obj.hostChainStateList = [];
    }
    if (message.undelegationList) {
      obj.undelegationList = message.undelegationList.map(e => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.undelegationList = [];
    }
    if (message.channelUndelegationList) {
      obj.channelUndelegationList = message.channelUndelegationList.map(e => e ? ChannelUndelegation.toJSON(e) : undefined);
    } else {
      obj.channelUndelegationList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.hostChainList = object.hostChainList?.map(e => HostChain.fromPartial(e)) || [];
    message.hostChainStateList = object.hostChainStateList?.map(e => HostChainState.fromPartial(e)) || [];
    message.undelegationList = object.undelegationList?.map(e => Undelegation.fromPartial(e)) || [];
    message.channelUndelegationList = object.channelUndelegationList?.map(e => ChannelUndelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.hostChainList = object.host_chain_list?.map(e => HostChain.fromAmino(e)) || [];
    message.hostChainStateList = object.host_chain_state_list?.map(e => HostChainState.fromAmino(e)) || [];
    message.undelegationList = object.undelegation_list?.map(e => Undelegation.fromAmino(e)) || [];
    message.channelUndelegationList = object.channel_undelegation_list?.map(e => ChannelUndelegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.port_id = message.portId;
    if (message.hostChainList) {
      obj.host_chain_list = message.hostChainList.map(e => e ? HostChain.toAmino(e) : undefined);
    } else {
      obj.host_chain_list = [];
    }
    if (message.hostChainStateList) {
      obj.host_chain_state_list = message.hostChainStateList.map(e => e ? HostChainState.toAmino(e) : undefined);
    } else {
      obj.host_chain_state_list = [];
    }
    if (message.undelegationList) {
      obj.undelegation_list = message.undelegationList.map(e => e ? Undelegation.toAmino(e) : undefined);
    } else {
      obj.undelegation_list = [];
    }
    if (message.channelUndelegationList) {
      obj.channel_undelegation_list = message.channelUndelegationList.map(e => e ? ChannelUndelegation.toAmino(e) : undefined);
    } else {
      obj.channel_undelegation_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};