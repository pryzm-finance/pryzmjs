import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
/** FeeType enumerates the valid types for feeType. */
export enum ActionType {
  ACTION_TYPE_HOLD = 0,
  ACTION_TYPE_BURN = 1,
  ACTION_TYPE_DISTRIBUTE_TO_STAKERS = 2,
  ACTION_TYPE_DISTRIBUTE_TO_COMMUNITY_POOL = 3,
  UNRECOGNIZED = -1,
}
export const ActionTypeSDKType = ActionType;
export function actionTypeFromJSON(object: any): ActionType {
  switch (object) {
    case 0:
    case "ACTION_TYPE_HOLD":
      return ActionType.ACTION_TYPE_HOLD;
    case 1:
    case "ACTION_TYPE_BURN":
      return ActionType.ACTION_TYPE_BURN;
    case 2:
    case "ACTION_TYPE_DISTRIBUTE_TO_STAKERS":
      return ActionType.ACTION_TYPE_DISTRIBUTE_TO_STAKERS;
    case 3:
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
export interface ActionStreamSwapSettings {
  /**
   * given the occurrence of an action, this is used to compute the start of the stream
   * NOTE: the stream-swap library has a parameter for minimum start delay
   */
  startDelay?: Duration;
  /** given the start of the stream, this is used to compute the end of the stream */
  duration?: Duration;
  /**
   * the interval in which the distribution index is updated and hence tokens are swapped
   * if dist_interval is 0, the stream is updated every time in or out tokens are increased or decreased
   * if dist_interval is equal to the duration of stream, it means that all of the tokens are swapped once after the stream ends
   */
  distInterval?: Duration;
}
export interface ActionStreamSwapSettingsSDKType {
  start_delay?: DurationSDKType;
  duration?: DurationSDKType;
  dist_interval?: DurationSDKType;
}
export interface Action {
  actionType: ActionType;
  occurrence?: Timestamp;
  /** if expiration is not set, then the action will never expire and is executed forever unless gov decides to set another action. */
  expiration?: Timestamp;
  /** if period is nil, then the action is only executed at the first occurrence and then replaced with a HOLD/NOOP action. */
  period?: Duration;
  /** this is nil if the action is of type HOLD */
  streamSwapSettings?: ActionStreamSwapSettings;
}
export interface ActionSDKType {
  action_type: ActionType;
  occurrence?: TimestampSDKType;
  expiration?: TimestampSDKType;
  period?: DurationSDKType;
  stream_swap_settings?: ActionStreamSwapSettingsSDKType;
}
function createBaseActionStreamSwapSettings(): ActionStreamSwapSettings {
  return {
    startDelay: undefined,
    duration: undefined,
    distInterval: undefined
  };
}
export const ActionStreamSwapSettings = {
  encode(message: ActionStreamSwapSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startDelay !== undefined) {
      Duration.encode(message.startDelay, writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.distInterval !== undefined) {
      Duration.encode(message.distInterval, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionStreamSwapSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionStreamSwapSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startDelay = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.distInterval = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActionStreamSwapSettings {
    return {
      startDelay: isSet(object.startDelay) ? Duration.fromJSON(object.startDelay) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      distInterval: isSet(object.distInterval) ? Duration.fromJSON(object.distInterval) : undefined
    };
  },
  toJSON(message: ActionStreamSwapSettings): unknown {
    const obj: any = {};
    message.startDelay !== undefined && (obj.startDelay = message.startDelay ? Duration.toJSON(message.startDelay) : undefined);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.distInterval !== undefined && (obj.distInterval = message.distInterval ? Duration.toJSON(message.distInterval) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ActionStreamSwapSettings>): ActionStreamSwapSettings {
    const message = createBaseActionStreamSwapSettings();
    message.startDelay = object.startDelay !== undefined && object.startDelay !== null ? Duration.fromPartial(object.startDelay) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.distInterval = object.distInterval !== undefined && object.distInterval !== null ? Duration.fromPartial(object.distInterval) : undefined;
    return message;
  }
};
function createBaseAction(): Action {
  return {
    actionType: 0,
    occurrence: undefined,
    expiration: undefined,
    period: undefined,
    streamSwapSettings: undefined
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
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(26).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(34).fork()).ldelim();
    }
    if (message.streamSwapSettings !== undefined) {
      ActionStreamSwapSettings.encode(message.streamSwapSettings, writer.uint32(42).fork()).ldelim();
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
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.streamSwapSettings = ActionStreamSwapSettings.decode(reader, reader.uint32());
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
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined,
      streamSwapSettings: isSet(object.streamSwapSettings) ? ActionStreamSwapSettings.fromJSON(object.streamSwapSettings) : undefined
    };
  },
  toJSON(message: Action): unknown {
    const obj: any = {};
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    message.occurrence !== undefined && (obj.occurrence = fromTimestamp(message.occurrence).toISOString());
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
    message.streamSwapSettings !== undefined && (obj.streamSwapSettings = message.streamSwapSettings ? ActionStreamSwapSettings.toJSON(message.streamSwapSettings) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Action>): Action {
    const message = createBaseAction();
    message.actionType = object.actionType ?? 0;
    message.occurrence = object.occurrence !== undefined && object.occurrence !== null ? Timestamp.fromPartial(object.occurrence) : undefined;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
    message.streamSwapSettings = object.streamSwapSettings !== undefined && object.streamSwapSettings !== null ? ActionStreamSwapSettings.fromPartial(object.streamSwapSettings) : undefined;
    return message;
  }
};