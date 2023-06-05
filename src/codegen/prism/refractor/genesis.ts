import { AssetState, AssetStateSDKType } from "./asset_state";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the refractor module's genesis state. */
export interface GenesisState {
  assetStateList: AssetState[];
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetStateList) {
      AssetState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};