import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AssetState {
  assetId: string;
  totalPAmount: string;
  lastSeenExchangeRate: string;
}
export interface AssetStateSDKType {
  asset_id: string;
  total_p_amount: string;
  last_seen_exchange_rate: string;
}
function createBaseAssetState(): AssetState {
  return {
    assetId: "",
    totalPAmount: "",
    lastSeenExchangeRate: ""
  };
}
export const AssetState = {
  encode(message: AssetState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.totalPAmount !== "") {
      writer.uint32(18).string(message.totalPAmount);
    }
    if (message.lastSeenExchangeRate !== "") {
      writer.uint32(26).string(message.lastSeenExchangeRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AssetState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.totalPAmount = reader.string();
          break;
        case 3:
          message.lastSeenExchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetState {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      totalPAmount: isSet(object.totalPAmount) ? String(object.totalPAmount) : "",
      lastSeenExchangeRate: isSet(object.lastSeenExchangeRate) ? String(object.lastSeenExchangeRate) : ""
    };
  },
  toJSON(message: AssetState): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.totalPAmount !== undefined && (obj.totalPAmount = message.totalPAmount);
    message.lastSeenExchangeRate !== undefined && (obj.lastSeenExchangeRate = message.lastSeenExchangeRate);
    return obj;
  },
  fromPartial(object: Partial<AssetState>): AssetState {
    const message = createBaseAssetState();
    message.assetId = object.assetId ?? "";
    message.totalPAmount = object.totalPAmount ?? "";
    message.lastSeenExchangeRate = object.lastSeenExchangeRate ?? "";
    return message;
  }
};