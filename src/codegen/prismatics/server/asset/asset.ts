import { Asset, AssetSDKType } from "../../asset/asset";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryAssetRequest {
  assetId: string;
}
export interface QueryAssetRequestSDKType {
  asset_id: string;
}
export interface QueryAssetResponse {
  asset: Asset;
}
export interface QueryAssetResponseSDKType {
  asset: AssetSDKType;
}
function createBaseQueryAssetRequest(): QueryAssetRequest {
  return {
    assetId: ""
  };
}
export const QueryAssetRequest = {
  encode(message: QueryAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryAssetRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryAssetRequest>): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseQueryAssetResponse(): QueryAssetResponse {
  return {
    asset: Asset.fromPartial({})
  };
}
export const QueryAssetResponse = {
  encode(message: QueryAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetResponse {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAssetResponse>): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  }
};