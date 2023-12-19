import { TimeResolutionType, timeResolutionTypeFromJSON, timeResolutionTypeToJSON } from "../../common/time_resolution";
import { HistoricalPrice, HistoricalPriceAmino, HistoricalPriceSDKType } from "../../price/historical_price";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryFlowHistoricalPriceRequest {
  flowId: bigint;
  timeResolutionType: TimeResolutionType;
  timeResolutionValue: number;
  from: string;
  to: string;
}
export interface QueryFlowHistoricalPriceRequestProtoMsg {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowHistoricalPriceRequest";
  value: Uint8Array;
}
export interface QueryFlowHistoricalPriceRequestAmino {
  flow_id?: string;
  time_resolution_type?: TimeResolutionType;
  time_resolution_value?: number;
  from?: string;
  to?: string;
}
export interface QueryFlowHistoricalPriceRequestAminoMsg {
  type: "/pryzmatics.server.flowtrade.QueryFlowHistoricalPriceRequest";
  value: QueryFlowHistoricalPriceRequestAmino;
}
export interface QueryFlowHistoricalPriceRequestSDKType {
  flow_id: bigint;
  time_resolution_type: TimeResolutionType;
  time_resolution_value: number;
  from: string;
  to: string;
}
export interface QueryFlowHistoricalPriceResponse {
  historicalPrices: HistoricalPrice[];
}
export interface QueryFlowHistoricalPriceResponseProtoMsg {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowHistoricalPriceResponse";
  value: Uint8Array;
}
export interface QueryFlowHistoricalPriceResponseAmino {
  historical_prices?: HistoricalPriceAmino[];
}
export interface QueryFlowHistoricalPriceResponseAminoMsg {
  type: "/pryzmatics.server.flowtrade.QueryFlowHistoricalPriceResponse";
  value: QueryFlowHistoricalPriceResponseAmino;
}
export interface QueryFlowHistoricalPriceResponseSDKType {
  historical_prices: HistoricalPriceSDKType[];
}
function createBaseQueryFlowHistoricalPriceRequest(): QueryFlowHistoricalPriceRequest {
  return {
    flowId: BigInt(0),
    timeResolutionType: 0,
    timeResolutionValue: 0,
    from: "",
    to: ""
  };
}
export const QueryFlowHistoricalPriceRequest = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowHistoricalPriceRequest",
  encode(message: QueryFlowHistoricalPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowHistoricalPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowHistoricalPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
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
  fromJSON(object: any): QueryFlowHistoricalPriceRequest {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      timeResolutionType: isSet(object.timeResolutionType) ? timeResolutionTypeFromJSON(object.timeResolutionType) : -1,
      timeResolutionValue: isSet(object.timeResolutionValue) ? Number(object.timeResolutionValue) : 0,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryFlowHistoricalPriceRequest): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.timeResolutionType !== undefined && (obj.timeResolutionType = timeResolutionTypeToJSON(message.timeResolutionType));
    message.timeResolutionValue !== undefined && (obj.timeResolutionValue = Math.round(message.timeResolutionValue));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowHistoricalPriceRequest>): QueryFlowHistoricalPriceRequest {
    const message = createBaseQueryFlowHistoricalPriceRequest();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.timeResolutionType = object.timeResolutionType ?? 0;
    message.timeResolutionValue = object.timeResolutionValue ?? 0;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryFlowHistoricalPriceRequestAmino): QueryFlowHistoricalPriceRequest {
    const message = createBaseQueryFlowHistoricalPriceRequest();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.time_resolution_type !== undefined && object.time_resolution_type !== null) {
      message.timeResolutionType = timeResolutionTypeFromJSON(object.time_resolution_type);
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
  toAmino(message: QueryFlowHistoricalPriceRequest): QueryFlowHistoricalPriceRequestAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    obj.time_resolution_type = timeResolutionTypeToJSON(message.timeResolutionType);
    obj.time_resolution_value = message.timeResolutionValue;
    obj.from = message.from;
    obj.to = message.to;
    return obj;
  },
  fromAminoMsg(object: QueryFlowHistoricalPriceRequestAminoMsg): QueryFlowHistoricalPriceRequest {
    return QueryFlowHistoricalPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowHistoricalPriceRequestProtoMsg): QueryFlowHistoricalPriceRequest {
    return QueryFlowHistoricalPriceRequest.decode(message.value);
  },
  toProto(message: QueryFlowHistoricalPriceRequest): Uint8Array {
    return QueryFlowHistoricalPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowHistoricalPriceRequest): QueryFlowHistoricalPriceRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.flowtrade.QueryFlowHistoricalPriceRequest",
      value: QueryFlowHistoricalPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFlowHistoricalPriceResponse(): QueryFlowHistoricalPriceResponse {
  return {
    historicalPrices: []
  };
}
export const QueryFlowHistoricalPriceResponse = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowHistoricalPriceResponse",
  encode(message: QueryFlowHistoricalPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.historicalPrices) {
      HistoricalPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowHistoricalPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowHistoricalPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalPrices.push(HistoricalPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFlowHistoricalPriceResponse {
    return {
      historicalPrices: Array.isArray(object?.historicalPrices) ? object.historicalPrices.map((e: any) => HistoricalPrice.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryFlowHistoricalPriceResponse): unknown {
    const obj: any = {};
    if (message.historicalPrices) {
      obj.historicalPrices = message.historicalPrices.map(e => e ? HistoricalPrice.toJSON(e) : undefined);
    } else {
      obj.historicalPrices = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryFlowHistoricalPriceResponse>): QueryFlowHistoricalPriceResponse {
    const message = createBaseQueryFlowHistoricalPriceResponse();
    message.historicalPrices = object.historicalPrices?.map(e => HistoricalPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFlowHistoricalPriceResponseAmino): QueryFlowHistoricalPriceResponse {
    const message = createBaseQueryFlowHistoricalPriceResponse();
    message.historicalPrices = object.historical_prices?.map(e => HistoricalPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFlowHistoricalPriceResponse): QueryFlowHistoricalPriceResponseAmino {
    const obj: any = {};
    if (message.historicalPrices) {
      obj.historical_prices = message.historicalPrices.map(e => e ? HistoricalPrice.toAmino(e) : undefined);
    } else {
      obj.historical_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFlowHistoricalPriceResponseAminoMsg): QueryFlowHistoricalPriceResponse {
    return QueryFlowHistoricalPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowHistoricalPriceResponseProtoMsg): QueryFlowHistoricalPriceResponse {
    return QueryFlowHistoricalPriceResponse.decode(message.value);
  },
  toProto(message: QueryFlowHistoricalPriceResponse): Uint8Array {
    return QueryFlowHistoricalPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowHistoricalPriceResponse): QueryFlowHistoricalPriceResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.flowtrade.QueryFlowHistoricalPriceResponse",
      value: QueryFlowHistoricalPriceResponse.encode(message).finish()
    };
  }
};