import { TimeResolutionType, HistoricalPrice, HistoricalPriceSDKType, timeResolutionTypeFromJSON, timeResolutionTypeToJSON } from "../../price/historical_price";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryHistoricalPriceRequest {
  denom: string;
  quote: string;
  timeResolutionType: TimeResolutionType;
  timeResolutionValue: number;
  from: string;
  to: string;
}
export interface QueryHistoricalPriceRequestSDKType {
  denom: string;
  quote: string;
  time_resolution_type: TimeResolutionType;
  time_resolution_value: number;
  from: string;
  to: string;
}
export interface QueryHistoricalPriceResponse {
  historicalPrices: HistoricalPrice[];
}
export interface QueryHistoricalPriceResponseSDKType {
  historical_prices: HistoricalPriceSDKType[];
}
function createBaseQueryHistoricalPriceRequest(): QueryHistoricalPriceRequest {
  return {
    denom: "",
    quote: "",
    timeResolutionType: 0,
    timeResolutionValue: 0,
    from: "",
    to: ""
  };
}
export const QueryHistoricalPriceRequest = {
  encode(message: QueryHistoricalPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    if (message.timeResolutionType !== 0) {
      writer.uint32(24).int32(message.timeResolutionType);
    }
    if (message.timeResolutionValue !== 0) {
      writer.uint32(32).uint32(message.timeResolutionValue);
    }
    if (message.from !== "") {
      writer.uint32(42).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        case 3:
          message.timeResolutionType = (reader.int32() as any);
          break;
        case 4:
          message.timeResolutionValue = reader.uint32();
          break;
        case 5:
          message.from = reader.string();
          break;
        case 6:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalPriceRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      timeResolutionType: isSet(object.timeResolutionType) ? timeResolutionTypeFromJSON(object.timeResolutionType) : -1,
      timeResolutionValue: isSet(object.timeResolutionValue) ? Number(object.timeResolutionValue) : 0,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryHistoricalPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.quote !== undefined && (obj.quote = message.quote);
    message.timeResolutionType !== undefined && (obj.timeResolutionType = timeResolutionTypeToJSON(message.timeResolutionType));
    message.timeResolutionValue !== undefined && (obj.timeResolutionValue = Math.round(message.timeResolutionValue));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalPriceRequest>): QueryHistoricalPriceRequest {
    const message = createBaseQueryHistoricalPriceRequest();
    message.denom = object.denom ?? "";
    message.quote = object.quote ?? "";
    message.timeResolutionType = object.timeResolutionType ?? 0;
    message.timeResolutionValue = object.timeResolutionValue ?? 0;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  }
};
function createBaseQueryHistoricalPriceResponse(): QueryHistoricalPriceResponse {
  return {
    historicalPrices: []
  };
}
export const QueryHistoricalPriceResponse = {
  encode(message: QueryHistoricalPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.historicalPrices) {
      HistoricalPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPriceResponse();
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
  fromJSON(object: any): QueryHistoricalPriceResponse {
    return {
      historicalPrices: Array.isArray(object?.historicalPrices) ? object.historicalPrices.map((e: any) => HistoricalPrice.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryHistoricalPriceResponse): unknown {
    const obj: any = {};
    if (message.historicalPrices) {
      obj.historicalPrices = message.historicalPrices.map(e => e ? HistoricalPrice.toJSON(e) : undefined);
    } else {
      obj.historicalPrices = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalPriceResponse>): QueryHistoricalPriceResponse {
    const message = createBaseQueryHistoricalPriceResponse();
    message.historicalPrices = object.historicalPrices?.map(e => HistoricalPrice.fromPartial(e)) || [];
    return message;
  }
};