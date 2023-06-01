import { ActionType, Action, ActionSDKType, actionTypeFromJSON, actionTypeToJSON } from "./action";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { StreamSwap, StreamSwapSDKType } from "./stream_swap";
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
export interface EventCreateStreamForAmount {
  streamId: Long;
  actionType: ActionType;
  amount?: Coin;
}
export interface EventCreateStreamForAmountSDKType {
  stream_id: Long;
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
export interface EventSetStreamSwap {
  streamSwap?: StreamSwap;
}
export interface EventSetStreamSwapSDKType {
  streamSwap?: StreamSwapSDKType;
}
export interface EventRemoveStreamSwap {
  endTime?: Timestamp;
  streamId: Long;
}
export interface EventRemoveStreamSwapSDKType {
  end_time?: TimestampSDKType;
  stream_id: Long;
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
function createBaseEventCreateStreamForAmount(): EventCreateStreamForAmount {
  return {
    streamId: Long.UZERO,
    actionType: 0,
    amount: undefined
  };
}
export const EventCreateStreamForAmount = {
  encode(message: EventCreateStreamForAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.streamId.isZero()) {
      writer.uint32(8).uint64(message.streamId);
    }
    if (message.actionType !== 0) {
      writer.uint32(16).int32(message.actionType);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateStreamForAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateStreamForAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = (reader.uint64() as Long);
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
  fromJSON(object: any): EventCreateStreamForAmount {
    return {
      streamId: isSet(object.streamId) ? Long.fromValue(object.streamId) : Long.UZERO,
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : 0,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventCreateStreamForAmount): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = (message.streamId || Long.UZERO).toString());
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventCreateStreamForAmount>): EventCreateStreamForAmount {
    const message = createBaseEventCreateStreamForAmount();
    message.streamId = object.streamId !== undefined && object.streamId !== null ? Long.fromValue(object.streamId) : Long.UZERO;
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
function createBaseEventSetStreamSwap(): EventSetStreamSwap {
  return {
    streamSwap: undefined
  };
}
export const EventSetStreamSwap = {
  encode(message: EventSetStreamSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamSwap !== undefined) {
      StreamSwap.encode(message.streamSwap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetStreamSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetStreamSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamSwap = StreamSwap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetStreamSwap {
    return {
      streamSwap: isSet(object.streamSwap) ? StreamSwap.fromJSON(object.streamSwap) : undefined
    };
  },
  toJSON(message: EventSetStreamSwap): unknown {
    const obj: any = {};
    message.streamSwap !== undefined && (obj.streamSwap = message.streamSwap ? StreamSwap.toJSON(message.streamSwap) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetStreamSwap>): EventSetStreamSwap {
    const message = createBaseEventSetStreamSwap();
    message.streamSwap = object.streamSwap !== undefined && object.streamSwap !== null ? StreamSwap.fromPartial(object.streamSwap) : undefined;
    return message;
  }
};
function createBaseEventRemoveStreamSwap(): EventRemoveStreamSwap {
  return {
    endTime: undefined,
    streamId: Long.UZERO
  };
}
export const EventRemoveStreamSwap = {
  encode(message: EventRemoveStreamSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(10).fork()).ldelim();
    }
    if (!message.streamId.isZero()) {
      writer.uint32(16).uint64(message.streamId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveStreamSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveStreamSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.streamId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveStreamSwap {
    return {
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      streamId: isSet(object.streamId) ? Long.fromValue(object.streamId) : Long.UZERO
    };
  },
  toJSON(message: EventRemoveStreamSwap): unknown {
    const obj: any = {};
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.streamId !== undefined && (obj.streamId = (message.streamId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveStreamSwap>): EventRemoveStreamSwap {
    const message = createBaseEventRemoveStreamSwap();
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.streamId = object.streamId !== undefined && object.streamId !== null ? Long.fromValue(object.streamId) : Long.UZERO;
    return message;
  }
};