import { MaturityOrderBy, MaturityOrderByAmino, MaturityOrderBySDKType } from "../../database/maturity/maturity";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Maturity, MaturityAmino, MaturitySDKType } from "../../maturity/maturity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryAllMaturitiesRequest {
  assetId: string;
  active: string;
  orderBy?: MaturityOrderBy;
  pagination?: PageRequest;
}
export interface QueryAllMaturitiesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.maturity.QueryAllMaturitiesRequest";
  value: Uint8Array;
}
export interface QueryAllMaturitiesRequestAmino {
  asset_id?: string;
  active?: string;
  order_by?: MaturityOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryAllMaturitiesRequestAminoMsg {
  type: "/pryzmatics.server.maturity.QueryAllMaturitiesRequest";
  value: QueryAllMaturitiesRequestAmino;
}
export interface QueryAllMaturitiesRequestSDKType {
  asset_id: string;
  active: string;
  order_by?: MaturityOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryAllMaturitiesResponse {
  maturities: Maturity[];
  pagination?: PageResponse;
}
export interface QueryAllMaturitiesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.maturity.QueryAllMaturitiesResponse";
  value: Uint8Array;
}
export interface QueryAllMaturitiesResponseAmino {
  maturities?: MaturityAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMaturitiesResponseAminoMsg {
  type: "/pryzmatics.server.maturity.QueryAllMaturitiesResponse";
  value: QueryAllMaturitiesResponseAmino;
}
export interface QueryAllMaturitiesResponseSDKType {
  maturities: MaturitySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryAllMaturitiesRequest(): QueryAllMaturitiesRequest {
  return {
    assetId: "",
    active: "",
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryAllMaturitiesRequest = {
  typeUrl: "/pryzmatics.server.maturity.QueryAllMaturitiesRequest",
  is(o: any): o is QueryAllMaturitiesRequest {
    return o && (o.$typeUrl === QueryAllMaturitiesRequest.typeUrl || typeof o.assetId === "string" && typeof o.active === "string");
  },
  isSDK(o: any): o is QueryAllMaturitiesRequestSDKType {
    return o && (o.$typeUrl === QueryAllMaturitiesRequest.typeUrl || typeof o.asset_id === "string" && typeof o.active === "string");
  },
  isAmino(o: any): o is QueryAllMaturitiesRequestAmino {
    return o && (o.$typeUrl === QueryAllMaturitiesRequest.typeUrl || typeof o.asset_id === "string" && typeof o.active === "string");
  },
  encode(message: QueryAllMaturitiesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.active !== "") {
      writer.uint32(18).string(message.active);
    }
    if (message.orderBy !== undefined) {
      MaturityOrderBy.encode(message.orderBy, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllMaturitiesRequest {
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
          message.orderBy = MaturityOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
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
      orderBy: isSet(object.orderBy) ? MaturityOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturitiesRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.active !== undefined && (obj.active = message.active);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? MaturityOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturitiesRequest>): QueryAllMaturitiesRequest {
    const message = createBaseQueryAllMaturitiesRequest();
    message.assetId = object.assetId ?? "";
    message.active = object.active ?? "";
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? MaturityOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMaturitiesRequestAmino): QueryAllMaturitiesRequest {
    const message = createBaseQueryAllMaturitiesRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = MaturityOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMaturitiesRequest, useInterfaces: boolean = true): QueryAllMaturitiesRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.active = message.active === "" ? undefined : message.active;
    obj.order_by = message.orderBy ? MaturityOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMaturitiesRequestAminoMsg): QueryAllMaturitiesRequest {
    return QueryAllMaturitiesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMaturitiesRequestProtoMsg, useInterfaces: boolean = true): QueryAllMaturitiesRequest {
    return QueryAllMaturitiesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllMaturitiesRequest): Uint8Array {
    return QueryAllMaturitiesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMaturitiesRequest): QueryAllMaturitiesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.maturity.QueryAllMaturitiesRequest",
      value: QueryAllMaturitiesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllMaturitiesRequest.typeUrl, QueryAllMaturitiesRequest);
function createBaseQueryAllMaturitiesResponse(): QueryAllMaturitiesResponse {
  return {
    maturities: [],
    pagination: undefined
  };
}
export const QueryAllMaturitiesResponse = {
  typeUrl: "/pryzmatics.server.maturity.QueryAllMaturitiesResponse",
  is(o: any): o is QueryAllMaturitiesResponse {
    return o && (o.$typeUrl === QueryAllMaturitiesResponse.typeUrl || Array.isArray(o.maturities) && (!o.maturities.length || Maturity.is(o.maturities[0])));
  },
  isSDK(o: any): o is QueryAllMaturitiesResponseSDKType {
    return o && (o.$typeUrl === QueryAllMaturitiesResponse.typeUrl || Array.isArray(o.maturities) && (!o.maturities.length || Maturity.isSDK(o.maturities[0])));
  },
  isAmino(o: any): o is QueryAllMaturitiesResponseAmino {
    return o && (o.$typeUrl === QueryAllMaturitiesResponse.typeUrl || Array.isArray(o.maturities) && (!o.maturities.length || Maturity.isAmino(o.maturities[0])));
  },
  encode(message: QueryAllMaturitiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.maturities) {
      Maturity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllMaturitiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturities.push(Maturity.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryAllMaturitiesResponseAmino): QueryAllMaturitiesResponse {
    const message = createBaseQueryAllMaturitiesResponse();
    message.maturities = object.maturities?.map(e => Maturity.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMaturitiesResponse, useInterfaces: boolean = true): QueryAllMaturitiesResponseAmino {
    const obj: any = {};
    if (message.maturities) {
      obj.maturities = message.maturities.map(e => e ? Maturity.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.maturities = message.maturities;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMaturitiesResponseAminoMsg): QueryAllMaturitiesResponse {
    return QueryAllMaturitiesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMaturitiesResponseProtoMsg, useInterfaces: boolean = true): QueryAllMaturitiesResponse {
    return QueryAllMaturitiesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllMaturitiesResponse): Uint8Array {
    return QueryAllMaturitiesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMaturitiesResponse): QueryAllMaturitiesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.maturity.QueryAllMaturitiesResponse",
      value: QueryAllMaturitiesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllMaturitiesResponse.typeUrl, QueryAllMaturitiesResponse);