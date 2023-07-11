import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PendingTokenIntroduction {
  assetId: string;
  targetPoolId: Long;
  tokenDenom: string;
  tokenNormalizedWeight: string;
  virtualBalanceIntervalMillis: Long;
}
export interface PendingTokenIntroductionSDKType {
  asset_id: string;
  target_pool_id: Long;
  token_denom: string;
  token_normalized_weight: string;
  virtual_balance_interval_millis: Long;
}
function createBasePendingTokenIntroduction(): PendingTokenIntroduction {
  return {
    assetId: "",
    targetPoolId: Long.UZERO,
    tokenDenom: "",
    tokenNormalizedWeight: "",
    virtualBalanceIntervalMillis: Long.ZERO
  };
}
export const PendingTokenIntroduction = {
  encode(message: PendingTokenIntroduction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (!message.targetPoolId.isZero()) {
      writer.uint32(16).uint64(message.targetPoolId);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(26).string(message.tokenDenom);
    }
    if (message.tokenNormalizedWeight !== "") {
      writer.uint32(34).string(message.tokenNormalizedWeight);
    }
    if (!message.virtualBalanceIntervalMillis.isZero()) {
      writer.uint32(40).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PendingTokenIntroduction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.targetPoolId = (reader.uint64() as Long);
          break;
        case 3:
          message.tokenDenom = reader.string();
          break;
        case 4:
          message.tokenNormalizedWeight = reader.string();
          break;
        case 5:
          message.virtualBalanceIntervalMillis = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PendingTokenIntroduction {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? Long.fromValue(object.targetPoolId) : Long.UZERO,
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      tokenNormalizedWeight: isSet(object.tokenNormalizedWeight) ? String(object.tokenNormalizedWeight) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? Long.fromValue(object.virtualBalanceIntervalMillis) : Long.ZERO
    };
  },
  toJSON(message: PendingTokenIntroduction): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || Long.UZERO).toString());
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.tokenNormalizedWeight !== undefined && (obj.tokenNormalizedWeight = message.tokenNormalizedWeight);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<PendingTokenIntroduction>): PendingTokenIntroduction {
    const message = createBasePendingTokenIntroduction();
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? Long.fromValue(object.targetPoolId) : Long.UZERO;
    message.tokenDenom = object.tokenDenom ?? "";
    message.tokenNormalizedWeight = object.tokenNormalizedWeight ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? Long.fromValue(object.virtualBalanceIntervalMillis) : Long.ZERO;
    return message;
  }
};