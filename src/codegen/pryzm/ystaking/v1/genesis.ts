import { AssetPoolState, AssetPoolStateAmino, AssetPoolStateSDKType, AssetMaturityPoolState, AssetMaturityPoolStateAmino, AssetMaturityPoolStateSDKType } from "./asset_pool_state";
import { UserStakeState, UserStakeStateAmino, UserStakeStateSDKType } from "./user_stake_state";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the ystaking module's genesis state. */
export interface GenesisState {
  assetPoolStateList: AssetPoolState[];
  maturityPoolStateList: AssetMaturityPoolState[];
  userStakeStateList: UserStakeState[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ystaking module's genesis state. */
export interface GenesisStateAmino {
  asset_pool_state_list?: AssetPoolStateAmino[];
  maturity_pool_state_list?: AssetMaturityPoolStateAmino[];
  user_stake_state_list?: UserStakeStateAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.ystaking.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ystaking module's genesis state. */
export interface GenesisStateSDKType {
  asset_pool_state_list: AssetPoolStateSDKType[];
  maturity_pool_state_list: AssetMaturityPoolStateSDKType[];
  user_stake_state_list: UserStakeStateSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    assetPoolStateList: [],
    maturityPoolStateList: [],
    userStakeStateList: []
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.ystaking.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetPoolStateList) {
      AssetPoolState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.maturityPoolStateList) {
      AssetMaturityPoolState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.userStakeStateList) {
      UserStakeState.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.assetPoolStateList.push(AssetPoolState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maturityPoolStateList.push(AssetMaturityPoolState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.userStakeStateList.push(UserStakeState.decode(reader, reader.uint32()));
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
      assetPoolStateList: Array.isArray(object?.assetPoolStateList) ? object.assetPoolStateList.map((e: any) => AssetPoolState.fromJSON(e)) : [],
      maturityPoolStateList: Array.isArray(object?.maturityPoolStateList) ? object.maturityPoolStateList.map((e: any) => AssetMaturityPoolState.fromJSON(e)) : [],
      userStakeStateList: Array.isArray(object?.userStakeStateList) ? object.userStakeStateList.map((e: any) => UserStakeState.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.assetPoolStateList) {
      obj.assetPoolStateList = message.assetPoolStateList.map(e => e ? AssetPoolState.toJSON(e) : undefined);
    } else {
      obj.assetPoolStateList = [];
    }
    if (message.maturityPoolStateList) {
      obj.maturityPoolStateList = message.maturityPoolStateList.map(e => e ? AssetMaturityPoolState.toJSON(e) : undefined);
    } else {
      obj.maturityPoolStateList = [];
    }
    if (message.userStakeStateList) {
      obj.userStakeStateList = message.userStakeStateList.map(e => e ? UserStakeState.toJSON(e) : undefined);
    } else {
      obj.userStakeStateList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.assetPoolStateList = object.assetPoolStateList?.map(e => AssetPoolState.fromPartial(e)) || [];
    message.maturityPoolStateList = object.maturityPoolStateList?.map(e => AssetMaturityPoolState.fromPartial(e)) || [];
    message.userStakeStateList = object.userStakeStateList?.map(e => UserStakeState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.assetPoolStateList = object.asset_pool_state_list?.map(e => AssetPoolState.fromAmino(e)) || [];
    message.maturityPoolStateList = object.maturity_pool_state_list?.map(e => AssetMaturityPoolState.fromAmino(e)) || [];
    message.userStakeStateList = object.user_stake_state_list?.map(e => UserStakeState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.assetPoolStateList) {
      obj.asset_pool_state_list = message.assetPoolStateList.map(e => e ? AssetPoolState.toAmino(e) : undefined);
    } else {
      obj.asset_pool_state_list = [];
    }
    if (message.maturityPoolStateList) {
      obj.maturity_pool_state_list = message.maturityPoolStateList.map(e => e ? AssetMaturityPoolState.toAmino(e) : undefined);
    } else {
      obj.maturity_pool_state_list = [];
    }
    if (message.userStakeStateList) {
      obj.user_stake_state_list = message.userStakeStateList.map(e => e ? UserStakeState.toAmino(e) : undefined);
    } else {
      obj.user_stake_state_list = [];
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
      typeUrl: "/pryzm.ystaking.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};