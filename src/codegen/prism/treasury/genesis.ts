import { Action, ActionSDKType } from "./action";
import { StreamSwap, StreamSwapSDKType } from "./stream_swap";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisState {
  action?: Action;
  streamSwapList: StreamSwap[];
}
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisStateSDKType {
  action?: ActionSDKType;
  stream_swap_list: StreamSwapSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    action: undefined,
    streamSwapList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.streamSwapList) {
      StreamSwap.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.action = Action.decode(reader, reader.uint32());
          break;
        case 2:
          message.streamSwapList.push(StreamSwap.decode(reader, reader.uint32()));
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
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
      streamSwapList: Array.isArray(object?.streamSwapList) ? object.streamSwapList.map((e: any) => StreamSwap.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    if (message.streamSwapList) {
      obj.streamSwapList = message.streamSwapList.map(e => e ? StreamSwap.toJSON(e) : undefined);
    } else {
      obj.streamSwapList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    message.streamSwapList = object.streamSwapList?.map(e => StreamSwap.fromPartial(e)) || [];
    return message;
  }
};