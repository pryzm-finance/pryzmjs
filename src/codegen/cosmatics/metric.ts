import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { PageRequest, PageRequestSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
export enum MetricType {
  ANY = 0,
  LST = 1,
  FTC = 2,
  PRC = 3,
  PPR = 4,
  UNRECOGNIZED = -1,
}
export const MetricTypeSDKType = MetricType;
export function metricTypeFromJSON(object: any): MetricType {
  switch (object) {
    case 0:
    case "ANY":
      return MetricType.ANY;
    case 1:
    case "LST":
      return MetricType.LST;
    case 2:
    case "FTC":
      return MetricType.FTC;
    case 3:
    case "PRC":
      return MetricType.PRC;
    case 4:
    case "PPR":
      return MetricType.PPR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MetricType.UNRECOGNIZED;
  }
}
export function metricTypeToJSON(object: MetricType): string {
  switch (object) {
    case MetricType.ANY:
      return "ANY";
    case MetricType.LST:
      return "LST";
    case MetricType.FTC:
      return "FTC";
    case MetricType.PRC:
      return "PRC";
    case MetricType.PPR:
      return "PPR";
    case MetricType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Metric {
  id: string;
  type: MetricType;
  blockTime: Timestamp;
  blockHeight: bigint;
  time: Timestamp;
  value: number;
}
export interface MetricSDKType {
  id: string;
  type: MetricType;
  block_time: TimestampSDKType;
  block_height: bigint;
  time: TimestampSDKType;
  value: number;
}
export interface QueryMetricsRequest {
  metricId: string;
  metricType: MetricType;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  fromTime?: string;
  toTime?: string;
  pagination?: PageRequest;
}
export interface QueryMetricsRequestSDKType {
  metric_id: string;
  metric_type: MetricType;
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryMetricsResponse {
  metrics: Metric[];
}
export interface QueryMetricsResponseSDKType {
  metrics: MetricSDKType[];
}
function createBaseMetric(): Metric {
  return {
    id: "",
    type: 0,
    blockTime: Timestamp.fromPartial({}),
    blockHeight: BigInt(0),
    time: Timestamp.fromPartial({}),
    value: 0
  };
}
export const Metric = {
  encode(message: Metric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.blockHeight);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(42).fork()).ldelim();
    }
    if (message.value !== 0) {
      writer.uint32(49).double(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metric {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        case 3:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.blockHeight = reader.int64();
          break;
        case 5:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metric {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? metricTypeFromJSON(object.type) : -1,
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toJSON(message: Metric): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = metricTypeToJSON(message.type));
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<Metric>): Metric {
    const message = createBaseMetric();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.value = object.value ?? 0;
    return message;
  }
};
function createBaseQueryMetricsRequest(): QueryMetricsRequest {
  return {
    metricId: "",
    metricType: 0,
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    fromTime: undefined,
    toTime: undefined,
    pagination: undefined
  };
}
export const QueryMetricsRequest = {
  encode(message: QueryMetricsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metricId !== "") {
      writer.uint32(10).string(message.metricId);
    }
    if (message.metricType !== 0) {
      writer.uint32(16).int32(message.metricType);
    }
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(26).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(34).string(message.toBlockHeight);
    }
    if (message.fromTime !== undefined) {
      writer.uint32(42).string(message.fromTime);
    }
    if (message.toTime !== undefined) {
      writer.uint32(50).string(message.toTime);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetricsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricId = reader.string();
          break;
        case 2:
          message.metricType = (reader.int32() as any);
          break;
        case 3:
          message.fromBlockHeight = reader.string();
          break;
        case 4:
          message.toBlockHeight = reader.string();
          break;
        case 5:
          message.fromTime = reader.string();
          break;
        case 6:
          message.toTime = reader.string();
          break;
        case 7:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetricsRequest {
    return {
      metricId: isSet(object.metricId) ? String(object.metricId) : "",
      metricType: isSet(object.metricType) ? metricTypeFromJSON(object.metricType) : -1,
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? String(object.toTime) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMetricsRequest): unknown {
    const obj: any = {};
    message.metricId !== undefined && (obj.metricId = message.metricId);
    message.metricType !== undefined && (obj.metricType = metricTypeToJSON(message.metricType));
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMetricsRequest>): QueryMetricsRequest {
    const message = createBaseQueryMetricsRequest();
    message.metricId = object.metricId ?? "";
    message.metricType = object.metricType ?? 0;
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryMetricsResponse(): QueryMetricsResponse {
  return {
    metrics: []
  };
}
export const QueryMetricsResponse = {
  encode(message: QueryMetricsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metrics) {
      Metric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetricsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metrics.push(Metric.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetricsResponse {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => Metric.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryMetricsResponse): unknown {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? Metric.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryMetricsResponse>): QueryMetricsResponse {
    const message = createBaseQueryMetricsResponse();
    message.metrics = object.metrics?.map(e => Metric.fromPartial(e)) || [];
    return message;
  }
};