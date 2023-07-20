import { PoolType, poolTypeFromJSON, poolTypeToJSON } from "../prism/amm/pool";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PoolToken {
  denom: string;
  poolId: Long;
  poolType: PoolType;
  poolLpDenom: string;
  balance: string;
  weight: string;
  priceLpTerms: string;
}
export interface PoolTokenSDKType {
  denom: string;
  pool_id: Long;
  pool_type: PoolType;
  pool_lp_denom: string;
  balance: string;
  weight: string;
  price_lp_terms: string;
}
function createBasePoolToken(): PoolToken {
  return {
    denom: "",
    poolId: Long.UZERO,
    poolType: 0,
    poolLpDenom: "",
    balance: "",
    weight: "",
    priceLpTerms: ""
  };
}
export const PoolToken = {
  encode(message: PoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.poolType !== 0) {
      writer.uint32(24).int32(message.poolType);
    }
    if (message.poolLpDenom !== "") {
      writer.uint32(34).string(message.poolLpDenom);
    }
    if (message.balance !== "") {
      writer.uint32(42).string(message.balance);
    }
    if (message.weight !== "") {
      writer.uint32(50).string(message.weight);
    }
    if (message.priceLpTerms !== "") {
      writer.uint32(58).string(message.priceLpTerms);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.poolType = (reader.int32() as any);
          break;
        case 4:
          message.poolLpDenom = reader.string();
          break;
        case 5:
          message.balance = reader.string();
          break;
        case 6:
          message.weight = reader.string();
          break;
        case 7:
          message.priceLpTerms = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : 0,
      poolLpDenom: isSet(object.poolLpDenom) ? String(object.poolLpDenom) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      priceLpTerms: isSet(object.priceLpTerms) ? String(object.priceLpTerms) : ""
    };
  },
  toJSON(message: PoolToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.poolLpDenom !== undefined && (obj.poolLpDenom = message.poolLpDenom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.weight !== undefined && (obj.weight = message.weight);
    message.priceLpTerms !== undefined && (obj.priceLpTerms = message.priceLpTerms);
    return obj;
  },
  fromPartial(object: Partial<PoolToken>): PoolToken {
    const message = createBasePoolToken();
    message.denom = object.denom ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.poolType = object.poolType ?? 0;
    message.poolLpDenom = object.poolLpDenom ?? "";
    message.balance = object.balance ?? "";
    message.weight = object.weight ?? "";
    message.priceLpTerms = object.priceLpTerms ?? "";
    return message;
  }
};