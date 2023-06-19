import { ActionType, Action, ActionSDKType, actionTypeFromJSON, actionTypeToJSON } from "./action";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { FlowTrade, FlowTradeSDKType } from "./flow_trade";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventTreasuryCollectFee {
  feeType: string;
  amount: string;
  from: string;
}
export interface EventTreasuryCollectFeeSDKType {
  fee_type: string;
  amount: string;
  from: string;
}
export interface EventCreateFlowForAmount {
  flowId: Long;
  actionType: ActionType;
  amount?: Coin;
}
export interface EventCreateFlowForAmountSDKType {
  flow_id: Long;
  action_type: ActionType;
  amount?: CoinSDKType;
}
export interface EventExecuteActionForAmount {
  actionType: ActionType;
  amount?: Coin;
}
export interface EventExecuteActionForAmountSDKType {
  action_type: ActionType;
  amount?: CoinSDKType;
}
export interface EventSetAction {
  action?: Action;
}
export interface EventSetActionSDKType {
  action?: ActionSDKType;
}
export interface EventSetFlowTrade {
  flowTrade?: FlowTrade;
}
export interface EventSetFlowTradeSDKType {
  flow_trade?: FlowTradeSDKType;
}
export interface EventRemoveFlowTrade {
  endTime?: Timestamp;
  flowId: Long;
}
export interface EventRemoveFlowTradeSDKType {
  end_time?: TimestampSDKType;
  flow_id: Long;
}
function createBaseEventTreasuryCollectFee(): EventTreasuryCollectFee {
  return {
    feeType: "",
    amount: "",
    from: ""
  };
}
export const EventTreasuryCollectFee = {
  encode(message: EventTreasuryCollectFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeType !== "") {
      writer.uint32(10).string(message.feeType);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventTreasuryCollectFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTreasuryCollectFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeType = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventTreasuryCollectFee {
    return {
      feeType: isSet(object.feeType) ? String(object.feeType) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  toJSON(message: EventTreasuryCollectFee): unknown {
    const obj: any = {};
    message.feeType !== undefined && (obj.feeType = message.feeType);
    message.amount !== undefined && (obj.amount = message.amount);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },
  fromPartial(object: Partial<EventTreasuryCollectFee>): EventTreasuryCollectFee {
    const message = createBaseEventTreasuryCollectFee();
    message.feeType = object.feeType ?? "";
    message.amount = object.amount ?? "";
    message.from = object.from ?? "";
    return message;
  }
};
function createBaseEventCreateFlowForAmount(): EventCreateFlowForAmount {
  return {
    flowId: Long.UZERO,
    actionType: 0,
    amount: undefined
  };
}
export const EventCreateFlowForAmount = {
  encode(message: EventCreateFlowForAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.flowId.isZero()) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.actionType !== 0) {
      writer.uint32(16).int32(message.actionType);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateFlowForAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateFlowForAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = (reader.uint64() as Long);
          break;
        case 2:
          message.actionType = (reader.int32() as any);
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateFlowForAmount {
    return {
      flowId: isSet(object.flowId) ? Long.fromValue(object.flowId) : Long.UZERO,
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : 0,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventCreateFlowForAmount): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || Long.UZERO).toString());
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventCreateFlowForAmount>): EventCreateFlowForAmount {
    const message = createBaseEventCreateFlowForAmount();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? Long.fromValue(object.flowId) : Long.UZERO;
    message.actionType = object.actionType ?? 0;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventExecuteActionForAmount(): EventExecuteActionForAmount {
  return {
    actionType: 0,
    amount: undefined
  };
}
export const EventExecuteActionForAmount = {
  encode(message: EventExecuteActionForAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventExecuteActionForAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteActionForAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionType = (reader.int32() as any);
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExecuteActionForAmount {
    return {
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : 0,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventExecuteActionForAmount): unknown {
    const obj: any = {};
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventExecuteActionForAmount>): EventExecuteActionForAmount {
    const message = createBaseEventExecuteActionForAmount();
    message.actionType = object.actionType ?? 0;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventSetAction(): EventSetAction {
  return {
    action: undefined
  };
}
export const EventSetAction = {
  encode(message: EventSetAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = Action.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetAction {
    return {
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined
    };
  },
  toJSON(message: EventSetAction): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetAction>): EventSetAction {
    const message = createBaseEventSetAction();
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    return message;
  }
};
function createBaseEventSetFlowTrade(): EventSetFlowTrade {
  return {
    flowTrade: undefined
  };
}
export const EventSetFlowTrade = {
  encode(message: EventSetFlowTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flowTrade !== undefined) {
      FlowTrade.encode(message.flowTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetFlowTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetFlowTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowTrade = FlowTrade.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetFlowTrade {
    return {
      flowTrade: isSet(object.flowTrade) ? FlowTrade.fromJSON(object.flowTrade) : undefined
    };
  },
  toJSON(message: EventSetFlowTrade): unknown {
    const obj: any = {};
    message.flowTrade !== undefined && (obj.flowTrade = message.flowTrade ? FlowTrade.toJSON(message.flowTrade) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetFlowTrade>): EventSetFlowTrade {
    const message = createBaseEventSetFlowTrade();
    message.flowTrade = object.flowTrade !== undefined && object.flowTrade !== null ? FlowTrade.fromPartial(object.flowTrade) : undefined;
    return message;
  }
};
function createBaseEventRemoveFlowTrade(): EventRemoveFlowTrade {
  return {
    endTime: undefined,
    flowId: Long.UZERO
  };
}
export const EventRemoveFlowTrade = {
  encode(message: EventRemoveFlowTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(10).fork()).ldelim();
    }
    if (!message.flowId.isZero()) {
      writer.uint32(16).uint64(message.flowId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveFlowTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveFlowTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.flowId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveFlowTrade {
    return {
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      flowId: isSet(object.flowId) ? Long.fromValue(object.flowId) : Long.UZERO
    };
  },
  toJSON(message: EventRemoveFlowTrade): unknown {
    const obj: any = {};
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.flowId !== undefined && (obj.flowId = (message.flowId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveFlowTrade>): EventRemoveFlowTrade {
    const message = createBaseEventRemoveFlowTrade();
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.flowId = object.flowId !== undefined && object.flowId !== null ? Long.fromValue(object.flowId) : Long.UZERO;
    return message;
  }
};