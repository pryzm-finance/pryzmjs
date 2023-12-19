import { AssetState, AssetStateAmino, AssetStateSDKType } from "./asset_state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryGetAssetStateRequest {
  assetId: string;
}
export interface QueryGetAssetStateRequestProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateRequest";
  value: Uint8Array;
}
export interface QueryGetAssetStateRequestAmino {
  asset_id?: string;
}
export interface QueryGetAssetStateRequestAminoMsg {
  type: "/pryzm.refractor.v1.QueryGetAssetStateRequest";
  value: QueryGetAssetStateRequestAmino;
}
export interface QueryGetAssetStateRequestSDKType {
  asset_id: string;
}
export interface QueryGetAssetStateResponse {
  assetState: AssetState;
}
export interface QueryGetAssetStateResponseProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateResponse";
  value: Uint8Array;
}
export interface QueryGetAssetStateResponseAmino {
  asset_state?: AssetStateAmino;
}
export interface QueryGetAssetStateResponseAminoMsg {
  type: "/pryzm.refractor.v1.QueryGetAssetStateResponse";
  value: QueryGetAssetStateResponseAmino;
}
export interface QueryGetAssetStateResponseSDKType {
  asset_state: AssetStateSDKType;
}
export interface QueryGetCPExchangeRateRequest {
  assetId: string;
}
export interface QueryGetCPExchangeRateRequestProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateRequest";
  value: Uint8Array;
}
export interface QueryGetCPExchangeRateRequestAmino {
  asset_id?: string;
}
export interface QueryGetCPExchangeRateRequestAminoMsg {
  type: "/pryzm.refractor.v1.QueryGetCPExchangeRateRequest";
  value: QueryGetCPExchangeRateRequestAmino;
}
export interface QueryGetCPExchangeRateRequestSDKType {
  asset_id: string;
}
export interface QueryGetCPExchangeRateResponse {
  exchangeRate: string;
}
export interface QueryGetCPExchangeRateResponseProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateResponse";
  value: Uint8Array;
}
export interface QueryGetCPExchangeRateResponseAmino {
  exchange_rate?: string;
}
export interface QueryGetCPExchangeRateResponseAminoMsg {
  type: "/pryzm.refractor.v1.QueryGetCPExchangeRateResponse";
  value: QueryGetCPExchangeRateResponseAmino;
}
export interface QueryGetCPExchangeRateResponseSDKType {
  exchange_rate: string;
}
function createBaseQueryGetAssetStateRequest(): QueryGetAssetStateRequest {
  return {
    assetId: ""
  };
}
export const QueryGetAssetStateRequest = {
  typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateRequest",
  encode(message: QueryGetAssetStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAssetStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetStateRequest();
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
  fromJSON(object: any): QueryGetAssetStateRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetAssetStateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetStateRequest>): QueryGetAssetStateRequest {
    const message = createBaseQueryGetAssetStateRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryGetAssetStateRequestAmino): QueryGetAssetStateRequest {
    const message = createBaseQueryGetAssetStateRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryGetAssetStateRequest): QueryGetAssetStateRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetStateRequestAminoMsg): QueryGetAssetStateRequest {
    return QueryGetAssetStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetStateRequestProtoMsg): QueryGetAssetStateRequest {
    return QueryGetAssetStateRequest.decode(message.value);
  },
  toProto(message: QueryGetAssetStateRequest): Uint8Array {
    return QueryGetAssetStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetStateRequest): QueryGetAssetStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateRequest",
      value: QueryGetAssetStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAssetStateResponse(): QueryGetAssetStateResponse {
  return {
    assetState: AssetState.fromPartial({})
  };
}
export const QueryGetAssetStateResponse = {
  typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateResponse",
  encode(message: QueryGetAssetStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetState !== undefined) {
      AssetState.encode(message.assetState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAssetStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetState = AssetState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAssetStateResponse {
    return {
      assetState: isSet(object.assetState) ? AssetState.fromJSON(object.assetState) : undefined
    };
  },
  toJSON(message: QueryGetAssetStateResponse): unknown {
    const obj: any = {};
    message.assetState !== undefined && (obj.assetState = message.assetState ? AssetState.toJSON(message.assetState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetStateResponse>): QueryGetAssetStateResponse {
    const message = createBaseQueryGetAssetStateResponse();
    message.assetState = object.assetState !== undefined && object.assetState !== null ? AssetState.fromPartial(object.assetState) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAssetStateResponseAmino): QueryGetAssetStateResponse {
    const message = createBaseQueryGetAssetStateResponse();
    if (object.asset_state !== undefined && object.asset_state !== null) {
      message.assetState = AssetState.fromAmino(object.asset_state);
    }
    return message;
  },
  toAmino(message: QueryGetAssetStateResponse): QueryGetAssetStateResponseAmino {
    const obj: any = {};
    obj.asset_state = message.assetState ? AssetState.toAmino(message.assetState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetStateResponseAminoMsg): QueryGetAssetStateResponse {
    return QueryGetAssetStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetStateResponseProtoMsg): QueryGetAssetStateResponse {
    return QueryGetAssetStateResponse.decode(message.value);
  },
  toProto(message: QueryGetAssetStateResponse): Uint8Array {
    return QueryGetAssetStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetStateResponse): QueryGetAssetStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateResponse",
      value: QueryGetAssetStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCPExchangeRateRequest(): QueryGetCPExchangeRateRequest {
  return {
    assetId: ""
  };
}
export const QueryGetCPExchangeRateRequest = {
  typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateRequest",
  encode(message: QueryGetCPExchangeRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCPExchangeRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCPExchangeRateRequest();
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
  fromJSON(object: any): QueryGetCPExchangeRateRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetCPExchangeRateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetCPExchangeRateRequest>): QueryGetCPExchangeRateRequest {
    const message = createBaseQueryGetCPExchangeRateRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryGetCPExchangeRateRequestAmino): QueryGetCPExchangeRateRequest {
    const message = createBaseQueryGetCPExchangeRateRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryGetCPExchangeRateRequest): QueryGetCPExchangeRateRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryGetCPExchangeRateRequestAminoMsg): QueryGetCPExchangeRateRequest {
    return QueryGetCPExchangeRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCPExchangeRateRequestProtoMsg): QueryGetCPExchangeRateRequest {
    return QueryGetCPExchangeRateRequest.decode(message.value);
  },
  toProto(message: QueryGetCPExchangeRateRequest): Uint8Array {
    return QueryGetCPExchangeRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCPExchangeRateRequest): QueryGetCPExchangeRateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateRequest",
      value: QueryGetCPExchangeRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCPExchangeRateResponse(): QueryGetCPExchangeRateResponse {
  return {
    exchangeRate: ""
  };
}
export const QueryGetCPExchangeRateResponse = {
  typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateResponse",
  encode(message: QueryGetCPExchangeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCPExchangeRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCPExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetCPExchangeRateResponse {
    return {
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : ""
    };
  },
  toJSON(message: QueryGetCPExchangeRateResponse): unknown {
    const obj: any = {};
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },
  fromPartial(object: Partial<QueryGetCPExchangeRateResponse>): QueryGetCPExchangeRateResponse {
    const message = createBaseQueryGetCPExchangeRateResponse();
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
  fromAmino(object: QueryGetCPExchangeRateResponseAmino): QueryGetCPExchangeRateResponse {
    const message = createBaseQueryGetCPExchangeRateResponse();
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: QueryGetCPExchangeRateResponse): QueryGetCPExchangeRateResponseAmino {
    const obj: any = {};
    obj.exchange_rate = message.exchangeRate;
    return obj;
  },
  fromAminoMsg(object: QueryGetCPExchangeRateResponseAminoMsg): QueryGetCPExchangeRateResponse {
    return QueryGetCPExchangeRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCPExchangeRateResponseProtoMsg): QueryGetCPExchangeRateResponse {
    return QueryGetCPExchangeRateResponse.decode(message.value);
  },
  toProto(message: QueryGetCPExchangeRateResponse): Uint8Array {
    return QueryGetCPExchangeRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCPExchangeRateResponse): QueryGetCPExchangeRateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateResponse",
      value: QueryGetCPExchangeRateResponse.encode(message).finish()
    };
  }
};