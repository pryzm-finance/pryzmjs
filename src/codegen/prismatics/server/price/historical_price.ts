import { TimeResolution, TimeResolutionSDKType, HistoricalPrice, HistoricalPriceSDKType } from "../../price/historical_price";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryHistoricalPriceRequest {
  denom: string;
  quote: string;
  timeResolution: TimeResolution;
  from: string;
  to: string;
}
export interface QueryHistoricalPriceRequestSDKType {
  denom: string;
  quote: string;
  time_resolution: TimeResolutionSDKType;
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
    timeResolution: TimeResolution.fromPartial({}),
    from: "",
    to: ""
  };
}
export const QueryHistoricalPriceRequest = {
  encode(message: QueryHistoricalPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    if (message.timeResolution !== undefined) {
      TimeResolution.encode(message.timeResolution, writer.uint32(26).fork()).ldelim();
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.timeResolution = TimeResolution.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryHistoricalPriceRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      timeResolution: isSet(object.timeResolution) ? TimeResolution.fromJSON(object.timeResolution) : undefined,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryHistoricalPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.quote !== undefined && (obj.quote = message.quote);
    message.timeResolution !== undefined && (obj.timeResolution = message.timeResolution ? TimeResolution.toJSON(message.timeResolution) : undefined);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalPriceRequest>): QueryHistoricalPriceRequest {
    const message = createBaseQueryHistoricalPriceRequest();
    message.denom = object.denom ?? "";
    message.quote = object.quote ?? "";
    message.timeResolution = object.timeResolution !== undefined && object.timeResolution !== null ? TimeResolution.fromPartial(object.timeResolution) : undefined;
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
  encode(message: QueryHistoricalPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.historicalPrices) {
      HistoricalPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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