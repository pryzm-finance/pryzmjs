import { ActionType, Action, ActionSDKType, actionTypeFromJSON, actionTypeToJSON } from "./action";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { FlowTrade, FlowTradeSDKType } from "./flow_trade";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
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
  flowId: bigint;
  actionType: ActionType;
  amount: Coin;
}
export interface EventCreateFlowForAmountSDKType {
  flow_id: bigint;
  action_type: ActionType;
  amount: CoinSDKType;
}
export interface EventExecuteActionForAmount {
  actionType: ActionType;
  amount: Coin;
}
export interface EventExecuteActionForAmountSDKType {
  action_type: ActionType;
  amount: CoinSDKType;
}
export interface EventSetAction {
  action: Action;
}
export interface EventSetActionSDKType {
  action: ActionSDKType;
}
export interface EventSetFlowTrade {
  flowTrade: FlowTrade;
}
export interface EventSetFlowTradeSDKType {
  flow_trade: FlowTradeSDKType;
}
export interface EventRemoveFlowTrade {
  endTime: Timestamp;
  flowId: bigint;
}
export interface EventRemoveFlowTradeSDKType {
  end_time: TimestampSDKType;
  flow_id: bigint;
}
function createBaseEventTreasuryCollectFee(): EventTreasuryCollectFee {
  return {
    feeType: "",
    amount: "",
    from: ""
  };
}
export const EventTreasuryCollectFee = {
  encode(message: EventTreasuryCollectFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventTreasuryCollectFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    flowId: BigInt(0),
    actionType: 0,
    amount: Coin.fromPartial({})
  };
}
export const EventCreateFlowForAmount = {
  encode(message: EventCreateFlowForAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateFlowForAmount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateFlowForAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
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
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : -1,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventCreateFlowForAmount): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventCreateFlowForAmount>): EventCreateFlowForAmount {
    const message = createBaseEventCreateFlowForAmount();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.actionType = object.actionType ?? 0;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventExecuteActionForAmount(): EventExecuteActionForAmount {
  return {
    actionType: 0,
    amount: Coin.fromPartial({})
  };
}
export const EventExecuteActionForAmount = {
  encode(message: EventExecuteActionForAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExecuteActionForAmount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : -1,
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
    action: Action.fromPartial({})
  };
}
export const EventSetAction = {
  encode(message: EventSetAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    flowTrade: FlowTrade.fromPartial({})
  };
}
export const EventSetFlowTrade = {
  encode(message: EventSetFlowTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowTrade !== undefined) {
      FlowTrade.encode(message.flowTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetFlowTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    endTime: Timestamp.fromPartial({}),
    flowId: BigInt(0)
  };
}
export const EventRemoveFlowTrade = {
  encode(message: EventRemoveFlowTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.flowId !== BigInt(0)) {
      writer.uint32(16).uint64(message.flowId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveFlowTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveFlowTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.flowId = reader.uint64();
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
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemoveFlowTrade): unknown {
    const obj: any = {};
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveFlowTrade>): EventRemoveFlowTrade {
    const message = createBaseEventRemoveFlowTrade();
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    return message;
  }
};