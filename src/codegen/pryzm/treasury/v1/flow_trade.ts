import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { ActionType, actionTypeFromJSON, actionTypeToJSON } from "./action";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export interface FlowTrade {
  endTime: Timestamp;
  flowId: bigint;
  actionType: ActionType;
}
export interface FlowTradeSDKType {
  end_time: TimestampSDKType;
  flow_id: bigint;
  action_type: ActionType;
}
function createBaseFlowTrade(): FlowTrade {
  return {
    endTime: Timestamp.fromPartial({}),
    flowId: BigInt(0),
    actionType: 0
  };
}
export const FlowTrade = {
  encode(message: FlowTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.flowId !== BigInt(0)) {
      writer.uint32(16).uint64(message.flowId);
    }
    if (message.actionType !== 0) {
      writer.uint32(24).int32(message.actionType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FlowTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.flowId = reader.uint64();
          break;
        case 3:
          message.actionType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FlowTrade {
    return {
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : -1
    };
  },
  toJSON(message: FlowTrade): unknown {
    const obj: any = {};
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    return obj;
  },
  fromPartial(object: Partial<FlowTrade>): FlowTrade {
    const message = createBaseFlowTrade();
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.actionType = object.actionType ?? 0;
    return message;
  }
};