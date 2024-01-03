import { Asset, AssetAmino, AssetSDKType } from "../../asset/asset";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryAssetRequest {
  assetId: string;
}
export interface QueryAssetRequestProtoMsg {
  typeUrl: "/pryzmatics.server.asset.QueryAssetRequest";
  value: Uint8Array;
}
export interface QueryAssetRequestAmino {
  asset_id?: string;
}
export interface QueryAssetRequestAminoMsg {
  type: "/pryzmatics.server.asset.QueryAssetRequest";
  value: QueryAssetRequestAmino;
}
export interface QueryAssetRequestSDKType {
  asset_id: string;
}
export interface QueryAssetResponse {
  asset: Asset;
}
export interface QueryAssetResponseProtoMsg {
  typeUrl: "/pryzmatics.server.asset.QueryAssetResponse";
  value: Uint8Array;
}
export interface QueryAssetResponseAmino {
  asset?: AssetAmino;
}
export interface QueryAssetResponseAminoMsg {
  type: "/pryzmatics.server.asset.QueryAssetResponse";
  value: QueryAssetResponseAmino;
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
  typeUrl: "/pryzmatics.server.asset.QueryAssetRequest",
  is(o: any): o is QueryAssetRequest {
    return o && (o.$typeUrl === QueryAssetRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryAssetRequestSDKType {
    return o && (o.$typeUrl === QueryAssetRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryAssetRequestAmino {
    return o && (o.$typeUrl === QueryAssetRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryAssetRequestAmino): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryAssetRequest, useInterfaces: boolean = true): QueryAssetRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryAssetRequestAminoMsg): QueryAssetRequest {
    return QueryAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetRequestProtoMsg, useInterfaces: boolean = true): QueryAssetRequest {
    return QueryAssetRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetRequest): Uint8Array {
    return QueryAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetRequest): QueryAssetRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.QueryAssetRequest",
      value: QueryAssetRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetRequest.typeUrl, QueryAssetRequest);
function createBaseQueryAssetResponse(): QueryAssetResponse {
  return {
    asset: Asset.fromPartial({})
  };
}
export const QueryAssetResponse = {
  typeUrl: "/pryzmatics.server.asset.QueryAssetResponse",
  is(o: any): o is QueryAssetResponse {
    return o && (o.$typeUrl === QueryAssetResponse.typeUrl || Asset.is(o.asset));
  },
  isSDK(o: any): o is QueryAssetResponseSDKType {
    return o && (o.$typeUrl === QueryAssetResponse.typeUrl || Asset.isSDK(o.asset));
  },
  isAmino(o: any): o is QueryAssetResponseAmino {
    return o && (o.$typeUrl === QueryAssetResponse.typeUrl || Asset.isAmino(o.asset));
  },
  encode(message: QueryAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryAssetResponseAmino): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: QueryAssetResponse, useInterfaces: boolean = true): QueryAssetResponseAmino {
    const obj: any = {};
    obj.asset = message.asset ? Asset.toAmino(message.asset, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetResponseAminoMsg): QueryAssetResponse {
    return QueryAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetResponseProtoMsg, useInterfaces: boolean = true): QueryAssetResponse {
    return QueryAssetResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetResponse): Uint8Array {
    return QueryAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetResponse): QueryAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.QueryAssetResponse",
      value: QueryAssetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetResponse.typeUrl, QueryAssetResponse);