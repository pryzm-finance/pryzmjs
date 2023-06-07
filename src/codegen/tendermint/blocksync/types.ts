import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
  height: Long;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestSDKType {
  height: Long;
}
function createBaseBlockRequest(): BlockRequest {
  return {
    height: Long.ZERO
  };
}
export const BlockRequest = {
  encode(message: BlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockRequest {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  toJSON(message: BlockRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<BlockRequest>): BlockRequest {
    const message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};