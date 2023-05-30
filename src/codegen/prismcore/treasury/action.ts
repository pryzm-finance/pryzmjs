import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
/** FeeType enumerates the valid types for feeType. */
export enum ActionType {
  ACTION_TYPE_HOLD = 0,
  ACTION_TYPE_BUY_BACK = 1,
  ACTION_TYPE_BURN = 2,
  ACTION_TYPE_DISTRIBUTE_TO_STAKERS = 3,
  ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL = 4,
  UNRECOGNIZED = -1,
}
export const ActionTypeSDKType = ActionType;
export function actionTypeFromJSON(object: any): ActionType {
  switch (object) {
    case 0:
    case "ACTION_TYPE_HOLD":
      return ActionType.ACTION_TYPE_HOLD;
    case 1:
    case "ACTION_TYPE_BUY_BACK":
      return ActionType.ACTION_TYPE_BUY_BACK;
    case 2:
    case "ACTION_TYPE_BURN":
      return ActionType.ACTION_TYPE_BURN;
    case 3:
    case "ACTION_TYPE_DISTRIBUTE_TO_STAKERS":
      return ActionType.ACTION_TYPE_DISTRIBUTE_TO_STAKERS;
    case 4:
    case "ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL":
      return ActionType.ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionType.UNRECOGNIZED;
  }
}
export function actionTypeToJSON(object: ActionType): string {
  switch (object) {
    case ActionType.ACTION_TYPE_HOLD:
      return "ACTION_TYPE_HOLD";
    case ActionType.ACTION_TYPE_BUY_BACK:
      return "ACTION_TYPE_BUY_BACK";
    case ActionType.ACTION_TYPE_BURN:
      return "ACTION_TYPE_BURN";
    case ActionType.ACTION_TYPE_DISTRIBUTE_TO_STAKERS:
      return "ACTION_TYPE_DISTRIBUTE_TO_STAKERS";
    case ActionType.ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL:
      return "ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL";
    case ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Action {
  actionType: ActionType;
  occurrence?: Timestamp;
  duration?: Duration;
  period?: Duration;
}
export interface ActionSDKType {
  action_type: ActionType;
  occurrence?: TimestampSDKType;
  duration?: DurationSDKType;
  period?: DurationSDKType;
}
function createBaseAction(): Action {
  return {
    actionType: 0,
    occurrence: undefined,
    duration: undefined,
    period: undefined
  };
}
export const Action = {
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    if (message.occurrence !== undefined) {
      Timestamp.encode(message.occurrence, writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionType = (reader.int32() as any);
          break;
        case 2:
          message.occurrence = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Action {
    return {
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : 0,
      occurrence: isSet(object.occurrence) ? fromJsonTimestamp(object.occurrence) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined
    };
  },
  toJSON(message: Action): unknown {
    const obj: any = {};
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    message.occurrence !== undefined && (obj.occurrence = fromTimestamp(message.occurrence).toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Action>): Action {
    const message = createBaseAction();
    message.actionType = object.actionType ?? 0;
    message.occurrence = object.occurrence !== undefined && object.occurrence !== null ? Timestamp.fromPartial(object.occurrence) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
    return message;
  }
};