import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ExecutableOrderCount {
  poolId: Long;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  count: Long;
}
export interface ExecutableOrderCountSDKType {
  pool_id: Long;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  count: Long;
}
function createBaseExecutableOrderCount(): ExecutableOrderCount {
  return {
    poolId: Long.UZERO,
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    count: Long.UZERO
  };
}
export const ExecutableOrderCount = {
  encode(message: ExecutableOrderCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (!message.count.isZero()) {
      writer.uint32(40).uint64(message.count);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutableOrderCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutableOrderCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.count = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecutableOrderCount {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO
    };
  },
  toJSON(message: ExecutableOrderCount): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ExecutableOrderCount>): ExecutableOrderCount {
    const message = createBaseExecutableOrderCount();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    return message;
  }
};