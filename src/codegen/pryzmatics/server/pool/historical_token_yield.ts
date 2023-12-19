import { TimeResolutionType, timeResolutionTypeFromJSON, timeResolutionTypeToJSON } from "../../common/time_resolution";
import { HistoricalTokenYield, HistoricalTokenYieldAmino, HistoricalTokenYieldSDKType } from "../../pool/historical_token_yield";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryHistoricalTokenYieldRequest {
  denom: string;
  timeResolutionType: TimeResolutionType;
  timeResolutionValue: number;
  from: string;
  to: string;
}
export interface QueryHistoricalTokenYieldRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryHistoricalTokenYieldRequest";
  value: Uint8Array;
}
export interface QueryHistoricalTokenYieldRequestAmino {
  denom?: string;
  time_resolution_type?: TimeResolutionType;
  time_resolution_value?: number;
  from?: string;
  to?: string;
}
export interface QueryHistoricalTokenYieldRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryHistoricalTokenYieldRequest";
  value: QueryHistoricalTokenYieldRequestAmino;
}
export interface QueryHistoricalTokenYieldRequestSDKType {
  denom: string;
  time_resolution_type: TimeResolutionType;
  time_resolution_value: number;
  from: string;
  to: string;
}
export interface QueryHistoricalTokenYieldResponse {
  historicalTokenYields: HistoricalTokenYield[];
}
export interface QueryHistoricalTokenYieldResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryHistoricalTokenYieldResponse";
  value: Uint8Array;
}
export interface QueryHistoricalTokenYieldResponseAmino {
  historical_token_yields?: HistoricalTokenYieldAmino[];
}
export interface QueryHistoricalTokenYieldResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryHistoricalTokenYieldResponse";
  value: QueryHistoricalTokenYieldResponseAmino;
}
export interface QueryHistoricalTokenYieldResponseSDKType {
  historical_token_yields: HistoricalTokenYieldSDKType[];
}
function createBaseQueryHistoricalTokenYieldRequest(): QueryHistoricalTokenYieldRequest {
  return {
    denom: "",
    timeResolutionType: 0,
    timeResolutionValue: 0,
    from: "",
    to: ""
  };
}
export const QueryHistoricalTokenYieldRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryHistoricalTokenYieldRequest",
  encode(message: QueryHistoricalTokenYieldRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalTokenYieldRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalTokenYieldRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
  fromJSON(object: any): QueryHistoricalTokenYieldRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      timeResolutionType: isSet(object.timeResolutionType) ? timeResolutionTypeFromJSON(object.timeResolutionType) : -1,
      timeResolutionValue: isSet(object.timeResolutionValue) ? Number(object.timeResolutionValue) : 0,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryHistoricalTokenYieldRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.timeResolutionType !== undefined && (obj.timeResolutionType = timeResolutionTypeToJSON(message.timeResolutionType));
    message.timeResolutionValue !== undefined && (obj.timeResolutionValue = Math.round(message.timeResolutionValue));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalTokenYieldRequest>): QueryHistoricalTokenYieldRequest {
    const message = createBaseQueryHistoricalTokenYieldRequest();
    message.denom = object.denom ?? "";
    message.timeResolutionType = object.timeResolutionType ?? 0;
    message.timeResolutionValue = object.timeResolutionValue ?? 0;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryHistoricalTokenYieldRequestAmino): QueryHistoricalTokenYieldRequest {
    const message = createBaseQueryHistoricalTokenYieldRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
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
  toAmino(message: QueryHistoricalTokenYieldRequest): QueryHistoricalTokenYieldRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.time_resolution_type = timeResolutionTypeToJSON(message.timeResolutionType);
    obj.time_resolution_value = message.timeResolutionValue;
    obj.from = message.from;
    obj.to = message.to;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalTokenYieldRequestAminoMsg): QueryHistoricalTokenYieldRequest {
    return QueryHistoricalTokenYieldRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalTokenYieldRequestProtoMsg): QueryHistoricalTokenYieldRequest {
    return QueryHistoricalTokenYieldRequest.decode(message.value);
  },
  toProto(message: QueryHistoricalTokenYieldRequest): Uint8Array {
    return QueryHistoricalTokenYieldRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalTokenYieldRequest): QueryHistoricalTokenYieldRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryHistoricalTokenYieldRequest",
      value: QueryHistoricalTokenYieldRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalTokenYieldResponse(): QueryHistoricalTokenYieldResponse {
  return {
    historicalTokenYields: []
  };
}
export const QueryHistoricalTokenYieldResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryHistoricalTokenYieldResponse",
  encode(message: QueryHistoricalTokenYieldResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.historicalTokenYields) {
      HistoricalTokenYield.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalTokenYieldResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalTokenYieldResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalTokenYields.push(HistoricalTokenYield.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalTokenYieldResponse {
    return {
      historicalTokenYields: Array.isArray(object?.historicalTokenYields) ? object.historicalTokenYields.map((e: any) => HistoricalTokenYield.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryHistoricalTokenYieldResponse): unknown {
    const obj: any = {};
    if (message.historicalTokenYields) {
      obj.historicalTokenYields = message.historicalTokenYields.map(e => e ? HistoricalTokenYield.toJSON(e) : undefined);
    } else {
      obj.historicalTokenYields = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalTokenYieldResponse>): QueryHistoricalTokenYieldResponse {
    const message = createBaseQueryHistoricalTokenYieldResponse();
    message.historicalTokenYields = object.historicalTokenYields?.map(e => HistoricalTokenYield.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHistoricalTokenYieldResponseAmino): QueryHistoricalTokenYieldResponse {
    const message = createBaseQueryHistoricalTokenYieldResponse();
    message.historicalTokenYields = object.historical_token_yields?.map(e => HistoricalTokenYield.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHistoricalTokenYieldResponse): QueryHistoricalTokenYieldResponseAmino {
    const obj: any = {};
    if (message.historicalTokenYields) {
      obj.historical_token_yields = message.historicalTokenYields.map(e => e ? HistoricalTokenYield.toAmino(e) : undefined);
    } else {
      obj.historical_token_yields = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalTokenYieldResponseAminoMsg): QueryHistoricalTokenYieldResponse {
    return QueryHistoricalTokenYieldResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalTokenYieldResponseProtoMsg): QueryHistoricalTokenYieldResponse {
    return QueryHistoricalTokenYieldResponse.decode(message.value);
  },
  toProto(message: QueryHistoricalTokenYieldResponse): Uint8Array {
    return QueryHistoricalTokenYieldResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalTokenYieldResponse): QueryHistoricalTokenYieldResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryHistoricalTokenYieldResponse",
      value: QueryHistoricalTokenYieldResponse.encode(message).finish()
    };
  }
};