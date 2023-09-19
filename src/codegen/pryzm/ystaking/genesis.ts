import { AssetPoolState, AssetPoolStateSDKType, AssetMaturityPoolState, AssetMaturityPoolStateSDKType } from "./asset_pool_state";
import { UserStakeState, UserStakeStateSDKType } from "./user_stake_state";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the ystaking module's genesis state. */
export interface GenesisState {
  assetPoolStateList: AssetPoolState[];
  maturityPoolStateList: AssetMaturityPoolState[];
  userStakeStateList: UserStakeState[];
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
  }
};