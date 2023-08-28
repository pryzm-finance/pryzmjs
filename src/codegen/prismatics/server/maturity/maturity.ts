import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Maturity, MaturitySDKType } from "../../maturity/maturity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryAllMaturitiesRequest {
  assetId: string;
  active: string;
  timeWindowInDays?: string;
  pagination: PageRequest;
}
export interface QueryAllMaturitiesRequestSDKType {
  asset_id: string;
  active: string;
  time_window_in_days?: string;
  pagination: PageRequestSDKType;
}
export interface QueryAllMaturitiesResponse {
  maturities: Maturity[];
  pagination: PageResponse;
}
export interface QueryAllMaturitiesResponseSDKType {
  maturities: MaturitySDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryAllMaturitiesRequest(): QueryAllMaturitiesRequest {
  return {
    assetId: "",
    active: "",
    timeWindowInDays: undefined,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllMaturitiesRequest = {
  encode(message: QueryAllMaturitiesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.active !== "") {
      writer.uint32(18).string(message.active);
    }
    if (message.timeWindowInDays !== undefined) {
      writer.uint32(26).string(message.timeWindowInDays);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMaturitiesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturitiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.active = reader.string();
          break;
        case 3:
          message.timeWindowInDays = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllMaturitiesRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      active: isSet(object.active) ? String(object.active) : "",
      timeWindowInDays: isSet(object.timeWindowInDays) ? String(object.timeWindowInDays) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturitiesRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.active !== undefined && (obj.active = message.active);
    message.timeWindowInDays !== undefined && (obj.timeWindowInDays = message.timeWindowInDays);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturitiesRequest>): QueryAllMaturitiesRequest {
    const message = createBaseQueryAllMaturitiesRequest();
    message.assetId = object.assetId ?? "";
    message.active = object.active ?? "";
    message.timeWindowInDays = object.timeWindowInDays ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllMaturitiesResponse(): QueryAllMaturitiesResponse {
  return {
    maturities: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllMaturitiesResponse = {
  encode(message: QueryAllMaturitiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.maturities) {
      Maturity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMaturitiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturities.push(Maturity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllMaturitiesResponse {
    return {
      maturities: Array.isArray(object?.maturities) ? object.maturities.map((e: any) => Maturity.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturitiesResponse): unknown {
    const obj: any = {};
    if (message.maturities) {
      obj.maturities = message.maturities.map(e => e ? Maturity.toJSON(e) : undefined);
    } else {
      obj.maturities = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturitiesResponse>): QueryAllMaturitiesResponse {
    const message = createBaseQueryAllMaturitiesResponse();
    message.maturities = object.maturities?.map(e => Maturity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};