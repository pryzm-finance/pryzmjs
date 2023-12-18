import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ActionType, Action, ActionAmino, ActionSDKType, actionTypeFromJSON, actionTypeToJSON } from "./action";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { FlowTrade, FlowTradeAmino, FlowTradeSDKType } from "./flow_trade";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/pryzm.treasury.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/pryzm.treasury.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventTreasuryCollectFee {
  feeType: string;
  amount: string;
  from: string;
}
export interface EventTreasuryCollectFeeProtoMsg {
  typeUrl: "/pryzm.treasury.v1.EventTreasuryCollectFee";
  value: Uint8Array;
}
export interface EventTreasuryCollectFeeAmino {
  fee_type?: string;
  amount?: string;
  from?: string;
}
export interface EventTreasuryCollectFeeAminoMsg {
  type: "/pryzm.treasury.v1.EventTreasuryCollectFee";
  value: EventTreasuryCollectFeeAmino;
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
export interface EventCreateFlowForAmountProtoMsg {
  typeUrl: "/pryzm.treasury.v1.EventCreateFlowForAmount";
  value: Uint8Array;
}
export interface EventCreateFlowForAmountAmino {
  flow_id?: string;
  action_type?: ActionType;
  amount?: CoinAmino;
}
export interface EventCreateFlowForAmountAminoMsg {
  type: "/pryzm.treasury.v1.EventCreateFlowForAmount";
  value: EventCreateFlowForAmountAmino;
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
export interface EventExecuteActionForAmountProtoMsg {
  typeUrl: "/pryzm.treasury.v1.EventExecuteActionForAmount";
  value: Uint8Array;
}
export interface EventExecuteActionForAmountAmino {
  action_type?: ActionType;
  amount?: CoinAmino;
}
export interface EventExecuteActionForAmountAminoMsg {
  type: "/pryzm.treasury.v1.EventExecuteActionForAmount";
  value: EventExecuteActionForAmountAmino;
}
export interface EventExecuteActionForAmountSDKType {
  action_type: ActionType;
  amount: CoinSDKType;
}
export interface EventSetAction {
  action: Action;
}
export interface EventSetActionProtoMsg {
  typeUrl: "/pryzm.treasury.v1.EventSetAction";
  value: Uint8Array;
}
export interface EventSetActionAmino {
  action?: ActionAmino;
}
export interface EventSetActionAminoMsg {
  type: "/pryzm.treasury.v1.EventSetAction";
  value: EventSetActionAmino;
}
export interface EventSetActionSDKType {
  action: ActionSDKType;
}
export interface EventSetFlowTrade {
  flowTrade: FlowTrade;
}
export interface EventSetFlowTradeProtoMsg {
  typeUrl: "/pryzm.treasury.v1.EventSetFlowTrade";
  value: Uint8Array;
}
export interface EventSetFlowTradeAmino {
  flow_trade?: FlowTradeAmino;
}
export interface EventSetFlowTradeAminoMsg {
  type: "/pryzm.treasury.v1.EventSetFlowTrade";
  value: EventSetFlowTradeAmino;
}
export interface EventSetFlowTradeSDKType {
  flow_trade: FlowTradeSDKType;
}
export interface EventRemoveFlowTrade {
  endTime: Timestamp;
  flowId: bigint;
}
export interface EventRemoveFlowTradeProtoMsg {
  typeUrl: "/pryzm.treasury.v1.EventRemoveFlowTrade";
  value: Uint8Array;
}
export interface EventRemoveFlowTradeAmino {
  end_time?: string;
  flow_id?: string;
}
export interface EventRemoveFlowTradeAminoMsg {
  type: "/pryzm.treasury.v1.EventRemoveFlowTrade";
  value: EventRemoveFlowTradeAmino;
}
export interface EventRemoveFlowTradeSDKType {
  end_time: TimestampSDKType;
  flow_id: bigint;
}
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/pryzm.treasury.v1.EventSetParams",
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: EventSetParamsAmino): EventSetParams {
    const message = createBaseEventSetParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: EventSetParams): EventSetParamsAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetParamsAminoMsg): EventSetParams {
    return EventSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetParamsProtoMsg): EventSetParams {
    return EventSetParams.decode(message.value);
  },
  toProto(message: EventSetParams): Uint8Array {
    return EventSetParams.encode(message).finish();
  },
  toProtoMsg(message: EventSetParams): EventSetParamsProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
function createBaseEventTreasuryCollectFee(): EventTreasuryCollectFee {
  return {
    feeType: "",
    amount: "",
    from: ""
  };
}
export const EventTreasuryCollectFee = {
  typeUrl: "/pryzm.treasury.v1.EventTreasuryCollectFee",
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
  },
  fromAmino(object: EventTreasuryCollectFeeAmino): EventTreasuryCollectFee {
    const message = createBaseEventTreasuryCollectFee();
    if (object.fee_type !== undefined && object.fee_type !== null) {
      message.feeType = object.fee_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: EventTreasuryCollectFee): EventTreasuryCollectFeeAmino {
    const obj: any = {};
    obj.fee_type = message.feeType;
    obj.amount = message.amount;
    obj.from = message.from;
    return obj;
  },
  fromAminoMsg(object: EventTreasuryCollectFeeAminoMsg): EventTreasuryCollectFee {
    return EventTreasuryCollectFee.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTreasuryCollectFeeProtoMsg): EventTreasuryCollectFee {
    return EventTreasuryCollectFee.decode(message.value);
  },
  toProto(message: EventTreasuryCollectFee): Uint8Array {
    return EventTreasuryCollectFee.encode(message).finish();
  },
  toProtoMsg(message: EventTreasuryCollectFee): EventTreasuryCollectFeeProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.EventTreasuryCollectFee",
      value: EventTreasuryCollectFee.encode(message).finish()
    };
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
  typeUrl: "/pryzm.treasury.v1.EventCreateFlowForAmount",
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
  },
  fromAmino(object: EventCreateFlowForAmountAmino): EventCreateFlowForAmount {
    const message = createBaseEventCreateFlowForAmount();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.action_type !== undefined && object.action_type !== null) {
      message.actionType = actionTypeFromJSON(object.action_type);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventCreateFlowForAmount): EventCreateFlowForAmountAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    obj.action_type = actionTypeToJSON(message.actionType);
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateFlowForAmountAminoMsg): EventCreateFlowForAmount {
    return EventCreateFlowForAmount.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateFlowForAmountProtoMsg): EventCreateFlowForAmount {
    return EventCreateFlowForAmount.decode(message.value);
  },
  toProto(message: EventCreateFlowForAmount): Uint8Array {
    return EventCreateFlowForAmount.encode(message).finish();
  },
  toProtoMsg(message: EventCreateFlowForAmount): EventCreateFlowForAmountProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.EventCreateFlowForAmount",
      value: EventCreateFlowForAmount.encode(message).finish()
    };
  }
};
function createBaseEventExecuteActionForAmount(): EventExecuteActionForAmount {
  return {
    actionType: 0,
    amount: Coin.fromPartial({})
  };
}
export const EventExecuteActionForAmount = {
  typeUrl: "/pryzm.treasury.v1.EventExecuteActionForAmount",
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
  },
  fromAmino(object: EventExecuteActionForAmountAmino): EventExecuteActionForAmount {
    const message = createBaseEventExecuteActionForAmount();
    if (object.action_type !== undefined && object.action_type !== null) {
      message.actionType = actionTypeFromJSON(object.action_type);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventExecuteActionForAmount): EventExecuteActionForAmountAmino {
    const obj: any = {};
    obj.action_type = actionTypeToJSON(message.actionType);
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventExecuteActionForAmountAminoMsg): EventExecuteActionForAmount {
    return EventExecuteActionForAmount.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExecuteActionForAmountProtoMsg): EventExecuteActionForAmount {
    return EventExecuteActionForAmount.decode(message.value);
  },
  toProto(message: EventExecuteActionForAmount): Uint8Array {
    return EventExecuteActionForAmount.encode(message).finish();
  },
  toProtoMsg(message: EventExecuteActionForAmount): EventExecuteActionForAmountProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.EventExecuteActionForAmount",
      value: EventExecuteActionForAmount.encode(message).finish()
    };
  }
};
function createBaseEventSetAction(): EventSetAction {
  return {
    action: Action.fromPartial({})
  };
}
export const EventSetAction = {
  typeUrl: "/pryzm.treasury.v1.EventSetAction",
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
  },
  fromAmino(object: EventSetActionAmino): EventSetAction {
    const message = createBaseEventSetAction();
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromAmino(object.action);
    }
    return message;
  },
  toAmino(message: EventSetAction): EventSetActionAmino {
    const obj: any = {};
    obj.action = message.action ? Action.toAmino(message.action) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetActionAminoMsg): EventSetAction {
    return EventSetAction.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetActionProtoMsg): EventSetAction {
    return EventSetAction.decode(message.value);
  },
  toProto(message: EventSetAction): Uint8Array {
    return EventSetAction.encode(message).finish();
  },
  toProtoMsg(message: EventSetAction): EventSetActionProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.EventSetAction",
      value: EventSetAction.encode(message).finish()
    };
  }
};
function createBaseEventSetFlowTrade(): EventSetFlowTrade {
  return {
    flowTrade: FlowTrade.fromPartial({})
  };
}
export const EventSetFlowTrade = {
  typeUrl: "/pryzm.treasury.v1.EventSetFlowTrade",
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
  },
  fromAmino(object: EventSetFlowTradeAmino): EventSetFlowTrade {
    const message = createBaseEventSetFlowTrade();
    if (object.flow_trade !== undefined && object.flow_trade !== null) {
      message.flowTrade = FlowTrade.fromAmino(object.flow_trade);
    }
    return message;
  },
  toAmino(message: EventSetFlowTrade): EventSetFlowTradeAmino {
    const obj: any = {};
    obj.flow_trade = message.flowTrade ? FlowTrade.toAmino(message.flowTrade) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetFlowTradeAminoMsg): EventSetFlowTrade {
    return EventSetFlowTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetFlowTradeProtoMsg): EventSetFlowTrade {
    return EventSetFlowTrade.decode(message.value);
  },
  toProto(message: EventSetFlowTrade): Uint8Array {
    return EventSetFlowTrade.encode(message).finish();
  },
  toProtoMsg(message: EventSetFlowTrade): EventSetFlowTradeProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.EventSetFlowTrade",
      value: EventSetFlowTrade.encode(message).finish()
    };
  }
};
function createBaseEventRemoveFlowTrade(): EventRemoveFlowTrade {
  return {
    endTime: Timestamp.fromPartial({}),
    flowId: BigInt(0)
  };
}
export const EventRemoveFlowTrade = {
  typeUrl: "/pryzm.treasury.v1.EventRemoveFlowTrade",
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
  },
  fromAmino(object: EventRemoveFlowTradeAmino): EventRemoveFlowTrade {
    const message = createBaseEventRemoveFlowTrade();
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    return message;
  },
  toAmino(message: EventRemoveFlowTrade): EventRemoveFlowTradeAmino {
    const obj: any = {};
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRemoveFlowTradeAminoMsg): EventRemoveFlowTrade {
    return EventRemoveFlowTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveFlowTradeProtoMsg): EventRemoveFlowTrade {
    return EventRemoveFlowTrade.decode(message.value);
  },
  toProto(message: EventRemoveFlowTrade): Uint8Array {
    return EventRemoveFlowTrade.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveFlowTrade): EventRemoveFlowTradeProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.EventRemoveFlowTrade",
      value: EventRemoveFlowTrade.encode(message).finish()
    };
  }
};