import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface WeightUpdateTiming {
  poolId: Long;
  startUnixMillis: Long;
  endUnixMillis: Long;
}
export interface WeightUpdateTimingSDKType {
  pool_id: Long;
  start_unix_millis: Long;
  end_unix_millis: Long;
}
function createBaseWeightUpdateTiming(): WeightUpdateTiming {
  return {
    poolId: Long.UZERO,
    startUnixMillis: Long.ZERO,
    endUnixMillis: Long.ZERO
  };
}
export const WeightUpdateTiming = {
  encode(message: WeightUpdateTiming, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.startUnixMillis.isZero()) {
      writer.uint32(16).int64(message.startUnixMillis);
    }
    if (!message.endUnixMillis.isZero()) {
      writer.uint32(24).int64(message.endUnixMillis);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WeightUpdateTiming {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightUpdateTiming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.startUnixMillis = (reader.int64() as Long);
          break;
        case 3:
          message.endUnixMillis = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightUpdateTiming {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      startUnixMillis: isSet(object.startUnixMillis) ? Long.fromValue(object.startUnixMillis) : Long.ZERO,
      endUnixMillis: isSet(object.endUnixMillis) ? Long.fromValue(object.endUnixMillis) : Long.ZERO
    };
  },
  toJSON(message: WeightUpdateTiming): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.startUnixMillis !== undefined && (obj.startUnixMillis = (message.startUnixMillis || Long.ZERO).toString());
    message.endUnixMillis !== undefined && (obj.endUnixMillis = (message.endUnixMillis || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<WeightUpdateTiming>): WeightUpdateTiming {
    const message = createBaseWeightUpdateTiming();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.startUnixMillis = object.startUnixMillis !== undefined && object.startUnixMillis !== null ? Long.fromValue(object.startUnixMillis) : Long.ZERO;
    message.endUnixMillis = object.endUnixMillis !== undefined && object.endUnixMillis !== null ? Long.fromValue(object.endUnixMillis) : Long.ZERO;
    return message;
  }
};