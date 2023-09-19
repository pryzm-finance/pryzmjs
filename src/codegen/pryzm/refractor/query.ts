import { AssetState, AssetStateSDKType } from "./asset_state";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryGetAssetStateRequest {
  assetId: string;
}
export interface QueryGetAssetStateRequestSDKType {
  asset_id: string;
}
export interface QueryGetAssetStateResponse {
  assetState: AssetState;
}
export interface QueryGetAssetStateResponseSDKType {
  asset_state: AssetStateSDKType;
}
export interface QueryGetCPExchangeRateRequest {
  assetId: string;
}
export interface QueryGetCPExchangeRateRequestSDKType {
  asset_id: string;
}
export interface QueryGetCPExchangeRateResponse {
  exchangeRate: string;
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
  }
};
function createBaseQueryGetAssetStateResponse(): QueryGetAssetStateResponse {
  return {
    assetState: AssetState.fromPartial({})
  };
}
export const QueryGetAssetStateResponse = {
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
  }
};
function createBaseQueryGetCPExchangeRateRequest(): QueryGetCPExchangeRateRequest {
  return {
    assetId: ""
  };
}
export const QueryGetCPExchangeRateRequest = {
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
  }
};
function createBaseQueryGetCPExchangeRateResponse(): QueryGetCPExchangeRateResponse {
  return {
    exchangeRate: ""
  };
}
export const QueryGetCPExchangeRateResponse = {
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
  }
};