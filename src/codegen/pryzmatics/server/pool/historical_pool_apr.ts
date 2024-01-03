import { TimeResolutionType, timeResolutionTypeFromJSON, timeResolutionTypeToJSON } from "../../common/time_resolution";
import { HistoricalPoolApr, HistoricalPoolAprAmino, HistoricalPoolAprSDKType } from "../../pool/historical_pool_apr";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryHistoricalPoolAprRequest {
  poolId: bigint;
  timeResolutionType: TimeResolutionType;
  timeResolutionValue: number;
  from: string;
  to: string;
}
export interface QueryHistoricalPoolAprRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryHistoricalPoolAprRequest";
  value: Uint8Array;
}
export interface QueryHistoricalPoolAprRequestAmino {
  pool_id?: string;
  time_resolution_type?: TimeResolutionType;
  time_resolution_value?: number;
  from?: string;
  to?: string;
}
export interface QueryHistoricalPoolAprRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryHistoricalPoolAprRequest";
  value: QueryHistoricalPoolAprRequestAmino;
}
export interface QueryHistoricalPoolAprRequestSDKType {
  pool_id: bigint;
  time_resolution_type: TimeResolutionType;
  time_resolution_value: number;
  from: string;
  to: string;
}
export interface QueryHistoricalPoolAprResponse {
  historicalPoolAprs: HistoricalPoolApr[];
}
export interface QueryHistoricalPoolAprResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryHistoricalPoolAprResponse";
  value: Uint8Array;
}
export interface QueryHistoricalPoolAprResponseAmino {
  historical_pool_aprs?: HistoricalPoolAprAmino[];
}
export interface QueryHistoricalPoolAprResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryHistoricalPoolAprResponse";
  value: QueryHistoricalPoolAprResponseAmino;
}
export interface QueryHistoricalPoolAprResponseSDKType {
  historical_pool_aprs: HistoricalPoolAprSDKType[];
}
function createBaseQueryHistoricalPoolAprRequest(): QueryHistoricalPoolAprRequest {
  return {
    poolId: BigInt(0),
    timeResolutionType: 0,
    timeResolutionValue: 0,
    from: "",
    to: ""
  };
}
export const QueryHistoricalPoolAprRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryHistoricalPoolAprRequest",
  is(o: any): o is QueryHistoricalPoolAprRequest {
    return o && (o.$typeUrl === QueryHistoricalPoolAprRequest.typeUrl || typeof o.poolId === "bigint" && isSet(o.timeResolutionType) && typeof o.timeResolutionValue === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  isSDK(o: any): o is QueryHistoricalPoolAprRequestSDKType {
    return o && (o.$typeUrl === QueryHistoricalPoolAprRequest.typeUrl || typeof o.pool_id === "bigint" && isSet(o.time_resolution_type) && typeof o.time_resolution_value === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  isAmino(o: any): o is QueryHistoricalPoolAprRequestAmino {
    return o && (o.$typeUrl === QueryHistoricalPoolAprRequest.typeUrl || typeof o.pool_id === "bigint" && isSet(o.time_resolution_type) && typeof o.time_resolution_value === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  encode(message: QueryHistoricalPoolAprRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.timeResolutionType !== 0) {
      writer.uint32(16).int32(message.timeResolutionType);
    }
    if (message.timeResolutionValue !== 0) {
      writer.uint32(24).uint32(message.timeResolutionValue);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHistoricalPoolAprRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPoolAprRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.timeResolutionType = (reader.int32() as any);
          break;
        case 3:
          message.timeResolutionValue = reader.uint32();
          break;
        case 4:
          message.from = reader.string();
          break;
        case 5:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalPoolAprRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      timeResolutionType: isSet(object.timeResolutionType) ? timeResolutionTypeFromJSON(object.timeResolutionType) : -1,
      timeResolutionValue: isSet(object.timeResolutionValue) ? Number(object.timeResolutionValue) : 0,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryHistoricalPoolAprRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.timeResolutionType !== undefined && (obj.timeResolutionType = timeResolutionTypeToJSON(message.timeResolutionType));
    message.timeResolutionValue !== undefined && (obj.timeResolutionValue = Math.round(message.timeResolutionValue));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalPoolAprRequest>): QueryHistoricalPoolAprRequest {
    const message = createBaseQueryHistoricalPoolAprRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.timeResolutionType = object.timeResolutionType ?? 0;
    message.timeResolutionValue = object.timeResolutionValue ?? 0;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryHistoricalPoolAprRequestAmino): QueryHistoricalPoolAprRequest {
    const message = createBaseQueryHistoricalPoolAprRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.time_resolution_type !== undefined && object.time_resolution_type !== null) {
      message.timeResolutionType = object.time_resolution_type;
    }
    if (object.time_resolution_value !== undefined && object.time_resolution_value !== null) {
      message.timeResolutionValue = object.time_resolution_value;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: QueryHistoricalPoolAprRequest, useInterfaces: boolean = true): QueryHistoricalPoolAprRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.time_resolution_type = message.timeResolutionType === 0 ? undefined : message.timeResolutionType;
    obj.time_resolution_value = message.timeResolutionValue === 0 ? undefined : message.timeResolutionValue;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalPoolAprRequestAminoMsg): QueryHistoricalPoolAprRequest {
    return QueryHistoricalPoolAprRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalPoolAprRequestProtoMsg, useInterfaces: boolean = true): QueryHistoricalPoolAprRequest {
    return QueryHistoricalPoolAprRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalPoolAprRequest): Uint8Array {
    return QueryHistoricalPoolAprRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalPoolAprRequest): QueryHistoricalPoolAprRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryHistoricalPoolAprRequest",
      value: QueryHistoricalPoolAprRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalPoolAprRequest.typeUrl, QueryHistoricalPoolAprRequest);
function createBaseQueryHistoricalPoolAprResponse(): QueryHistoricalPoolAprResponse {
  return {
    historicalPoolAprs: []
  };
}
export const QueryHistoricalPoolAprResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryHistoricalPoolAprResponse",
  is(o: any): o is QueryHistoricalPoolAprResponse {
    return o && (o.$typeUrl === QueryHistoricalPoolAprResponse.typeUrl || Array.isArray(o.historicalPoolAprs) && (!o.historicalPoolAprs.length || HistoricalPoolApr.is(o.historicalPoolAprs[0])));
  },
  isSDK(o: any): o is QueryHistoricalPoolAprResponseSDKType {
    return o && (o.$typeUrl === QueryHistoricalPoolAprResponse.typeUrl || Array.isArray(o.historical_pool_aprs) && (!o.historical_pool_aprs.length || HistoricalPoolApr.isSDK(o.historical_pool_aprs[0])));
  },
  isAmino(o: any): o is QueryHistoricalPoolAprResponseAmino {
    return o && (o.$typeUrl === QueryHistoricalPoolAprResponse.typeUrl || Array.isArray(o.historical_pool_aprs) && (!o.historical_pool_aprs.length || HistoricalPoolApr.isAmino(o.historical_pool_aprs[0])));
  },
  encode(message: QueryHistoricalPoolAprResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.historicalPoolAprs) {
      HistoricalPoolApr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHistoricalPoolAprResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPoolAprResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalPoolAprs.push(HistoricalPoolApr.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalPoolAprResponse {
    return {
      historicalPoolAprs: Array.isArray(object?.historicalPoolAprs) ? object.historicalPoolAprs.map((e: any) => HistoricalPoolApr.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryHistoricalPoolAprResponse): unknown {
    const obj: any = {};
    if (message.historicalPoolAprs) {
      obj.historicalPoolAprs = message.historicalPoolAprs.map(e => e ? HistoricalPoolApr.toJSON(e) : undefined);
    } else {
      obj.historicalPoolAprs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalPoolAprResponse>): QueryHistoricalPoolAprResponse {
    const message = createBaseQueryHistoricalPoolAprResponse();
    message.historicalPoolAprs = object.historicalPoolAprs?.map(e => HistoricalPoolApr.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHistoricalPoolAprResponseAmino): QueryHistoricalPoolAprResponse {
    const message = createBaseQueryHistoricalPoolAprResponse();
    message.historicalPoolAprs = object.historical_pool_aprs?.map(e => HistoricalPoolApr.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHistoricalPoolAprResponse, useInterfaces: boolean = true): QueryHistoricalPoolAprResponseAmino {
    const obj: any = {};
    if (message.historicalPoolAprs) {
      obj.historical_pool_aprs = message.historicalPoolAprs.map(e => e ? HistoricalPoolApr.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.historical_pool_aprs = message.historicalPoolAprs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalPoolAprResponseAminoMsg): QueryHistoricalPoolAprResponse {
    return QueryHistoricalPoolAprResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalPoolAprResponseProtoMsg, useInterfaces: boolean = true): QueryHistoricalPoolAprResponse {
    return QueryHistoricalPoolAprResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalPoolAprResponse): Uint8Array {
    return QueryHistoricalPoolAprResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalPoolAprResponse): QueryHistoricalPoolAprResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryHistoricalPoolAprResponse",
      value: QueryHistoricalPoolAprResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalPoolAprResponse.typeUrl, QueryHistoricalPoolAprResponse);