import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface VirtualBalancePoolToken {
  poolId: Long;
  denom: string;
  targetVirtualBalance: string;
  startUnixMillis: Long;
  endUnixMillis: Long;
}
export interface VirtualBalancePoolTokenSDKType {
  pool_id: Long;
  denom: string;
  target_virtual_balance: string;
  start_unix_millis: Long;
  end_unix_millis: Long;
}
function createBaseVirtualBalancePoolToken(): VirtualBalancePoolToken {
  return {
    poolId: Long.UZERO,
    denom: "",
    targetVirtualBalance: "",
    startUnixMillis: Long.ZERO,
    endUnixMillis: Long.ZERO
  };
}
export const VirtualBalancePoolToken = {
  encode(message: VirtualBalancePoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.targetVirtualBalance !== "") {
      writer.uint32(26).string(message.targetVirtualBalance);
    }
    if (!message.startUnixMillis.isZero()) {
      writer.uint32(32).int64(message.startUnixMillis);
    }
    if (!message.endUnixMillis.isZero()) {
      writer.uint32(40).int64(message.endUnixMillis);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualBalancePoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualBalancePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.targetVirtualBalance = reader.string();
          break;
        case 4:
          message.startUnixMillis = (reader.int64() as Long);
          break;
        case 5:
          message.endUnixMillis = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VirtualBalancePoolToken {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      targetVirtualBalance: isSet(object.targetVirtualBalance) ? String(object.targetVirtualBalance) : "",
      startUnixMillis: isSet(object.startUnixMillis) ? Long.fromValue(object.startUnixMillis) : Long.ZERO,
      endUnixMillis: isSet(object.endUnixMillis) ? Long.fromValue(object.endUnixMillis) : Long.ZERO
    };
  },
  toJSON(message: VirtualBalancePoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.targetVirtualBalance !== undefined && (obj.targetVirtualBalance = message.targetVirtualBalance);
    message.startUnixMillis !== undefined && (obj.startUnixMillis = (message.startUnixMillis || Long.ZERO).toString());
    message.endUnixMillis !== undefined && (obj.endUnixMillis = (message.endUnixMillis || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<VirtualBalancePoolToken>): VirtualBalancePoolToken {
    const message = createBaseVirtualBalancePoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.targetVirtualBalance = object.targetVirtualBalance ?? "";
    message.startUnixMillis = object.startUnixMillis !== undefined && object.startUnixMillis !== null ? Long.fromValue(object.startUnixMillis) : Long.ZERO;
    message.endUnixMillis = object.endUnixMillis !== undefined && object.endUnixMillis !== null ? Long.fromValue(object.endUnixMillis) : Long.ZERO;
    return message;
  }
};