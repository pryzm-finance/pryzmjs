import { Action, ActionSDKType } from "./action";
import { FlowTrade, FlowTradeSDKType } from "./flow_trade";
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisState {
  action: Action;
  flowTradeList: FlowTrade[];
  params: Params;
}
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisStateSDKType {
  action: ActionSDKType;
  flow_trade_list: FlowTradeSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    action: Action.fromPartial({}),
    flowTradeList: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.flowTradeList) {
      FlowTrade.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
          message.action = Action.decode(reader, reader.uint32());
          break;
        case 2:
          message.flowTradeList.push(FlowTrade.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
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
      flowTradeList: Array.isArray(object?.flowTradeList) ? object.flowTradeList.map((e: any) => FlowTrade.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
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
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    message.flowTradeList = object.flowTradeList?.map(e => FlowTrade.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};