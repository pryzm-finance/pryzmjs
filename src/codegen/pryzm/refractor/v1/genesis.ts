import { AssetState, AssetStateAmino, AssetStateSDKType } from "./asset_state";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the refractor module's genesis state. */
export interface GenesisState {
  assetStateList: AssetState[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.refractor.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the refractor module's genesis state. */
export interface GenesisStateAmino {
  asset_state_list?: AssetStateAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.refractor.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the refractor module's genesis state. */
export interface GenesisStateSDKType {
  asset_state_list: AssetStateSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    assetStateList: []
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.refractor.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetStateList) {
      AssetState.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.assetStateList.push(AssetState.decode(reader, reader.uint32()));
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
      assetStateList: Array.isArray(object?.assetStateList) ? object.assetStateList.map((e: any) => AssetState.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.assetStateList) {
      obj.assetStateList = message.assetStateList.map(e => e ? AssetState.toJSON(e) : undefined);
    } else {
      obj.assetStateList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.assetStateList = object.assetStateList?.map(e => AssetState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.assetStateList = object.asset_state_list?.map(e => AssetState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.assetStateList) {
      obj.asset_state_list = message.assetStateList.map(e => e ? AssetState.toAmino(e) : undefined);
    } else {
      obj.asset_state_list = [];
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
      typeUrl: "/pryzm.refractor.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};