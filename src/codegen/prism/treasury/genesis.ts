import { Action, ActionSDKType } from "./action";
import { FlowTrade, FlowTradeSDKType } from "./flow_trade";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisState {
  action?: Action;
  flowTradeList: FlowTrade[];
}
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisStateSDKType {
  action?: ActionSDKType;
  flow_trade_list: FlowTradeSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    action: undefined,
    flowTradeList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.flowTradeList) {
      FlowTrade.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.flowTradeList.push(FlowTrade.decode(reader, reader.uint32()));
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
      flowTradeList: Array.isArray(object?.flowTradeList) ? object.flowTradeList.map((e: any) => FlowTrade.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    if (message.flowTradeList) {
      obj.flowTradeList = message.flowTradeList.map(e => e ? FlowTrade.toJSON(e) : undefined);
    } else {
      obj.flowTradeList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    message.flowTradeList = object.flowTradeList?.map(e => FlowTrade.fromPartial(e)) || [];
    return message;
  }
};