import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface WeightUpdateTiming {
  poolId: bigint;
  startUnixMillis: bigint;
  endUnixMillis: bigint;
}
export interface WeightUpdateTimingSDKType {
  pool_id: bigint;
  start_unix_millis: bigint;
  end_unix_millis: bigint;
}
function createBaseWeightUpdateTiming(): WeightUpdateTiming {
  return {
    poolId: BigInt(0),
    startUnixMillis: BigInt(0),
    endUnixMillis: BigInt(0)
  };
}
export const WeightUpdateTiming = {
  encode(message: WeightUpdateTiming, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.startUnixMillis !== BigInt(0)) {
      writer.uint32(16).int64(message.startUnixMillis);
    }
    if (message.endUnixMillis !== BigInt(0)) {
      writer.uint32(24).int64(message.endUnixMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightUpdateTiming {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightUpdateTiming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.startUnixMillis = reader.int64();
          break;
        case 3:
          message.endUnixMillis = reader.int64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      startUnixMillis: isSet(object.startUnixMillis) ? BigInt(object.startUnixMillis.toString()) : BigInt(0),
      endUnixMillis: isSet(object.endUnixMillis) ? BigInt(object.endUnixMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: WeightUpdateTiming): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.startUnixMillis !== undefined && (obj.startUnixMillis = (message.startUnixMillis || BigInt(0)).toString());
    message.endUnixMillis !== undefined && (obj.endUnixMillis = (message.endUnixMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<WeightUpdateTiming>): WeightUpdateTiming {
    const message = createBaseWeightUpdateTiming();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.startUnixMillis = object.startUnixMillis !== undefined && object.startUnixMillis !== null ? BigInt(object.startUnixMillis.toString()) : BigInt(0);
    message.endUnixMillis = object.endUnixMillis !== undefined && object.endUnixMillis !== null ? BigInt(object.endUnixMillis.toString()) : BigInt(0);
    return message;
  }
};