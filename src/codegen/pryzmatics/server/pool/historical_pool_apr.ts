import { TimeResolutionType, timeResolutionTypeFromJSON, timeResolutionTypeToJSON } from "../../common/time_resolution";
import { HistoricalPoolApr, HistoricalPoolAprSDKType } from "../../pool/historical_pool_apr";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryHistoricalPoolAprRequest {
  poolId: bigint;
  timeResolutionType: TimeResolutionType;
  timeResolutionValue: number;
  from: string;
  to: string;
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalPoolAprRequest {
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
  }
};
function createBaseQueryHistoricalPoolAprResponse(): QueryHistoricalPoolAprResponse {
  return {
    historicalPoolAprs: []
  };
}
export const QueryHistoricalPoolAprResponse = {
  encode(message: QueryHistoricalPoolAprResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.historicalPoolAprs) {
      HistoricalPoolApr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalPoolAprResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPoolAprResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalPoolAprs.push(HistoricalPoolApr.decode(reader, reader.uint32()));
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
  }
};