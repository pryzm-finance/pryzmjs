import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryPriceChangeRequest {
  denom: string;
  from: string;
  to: string;
}
export interface QueryPriceChangeRequestSDKType {
  denom: string;
  from: string;
  to: string;
}
export interface QueryPriceChangeResponse {
  changePercentage?: string;
}
export interface QueryPriceChangeResponseSDKType {
  change_percentage?: string;
}
function createBaseQueryPriceChangeRequest(): QueryPriceChangeRequest {
  return {
    denom: "",
    from: "",
    to: ""
  };
}
export const QueryPriceChangeRequest = {
  encode(message: QueryPriceChangeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceChangeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceChangeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPriceChangeRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryPriceChangeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceChangeRequest>): QueryPriceChangeRequest {
    const message = createBaseQueryPriceChangeRequest();
    message.denom = object.denom ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  }
};
function createBaseQueryPriceChangeResponse(): QueryPriceChangeResponse {
  return {
    changePercentage: undefined
  };
}
export const QueryPriceChangeResponse = {
  encode(message: QueryPriceChangeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.changePercentage !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.changePercentage, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceChangeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceChangeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPriceChangeResponse {
    return {
      changePercentage: isSet(object.changePercentage) ? String(object.changePercentage) : undefined
    };
  },
  toJSON(message: QueryPriceChangeResponse): unknown {
    const obj: any = {};
    message.changePercentage !== undefined && (obj.changePercentage = message.changePercentage);
    return obj;
  },
  fromPartial(object: Partial<QueryPriceChangeResponse>): QueryPriceChangeResponse {
    const message = createBaseQueryPriceChangeResponse();
    message.changePercentage = object.changePercentage ?? undefined;
    return message;
  }
};