import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryIncentivesAprRequest {
  denom: string;
  timeWindowInDays?: string;
}
export interface QueryIncentivesAprRequestSDKType {
  denom: string;
  time_window_in_days?: string;
}
export interface QueryIncentivesAprResponse {
  apr: string;
}
export interface QueryIncentivesAprResponseSDKType {
  apr: string;
}
function createBaseQueryIncentivesAprRequest(): QueryIncentivesAprRequest {
  return {
    denom: "",
    timeWindowInDays: undefined
  };
}
export const QueryIncentivesAprRequest = {
  encode(message: QueryIncentivesAprRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.timeWindowInDays !== undefined) {
      writer.uint32(18).string(message.timeWindowInDays);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivesAprRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivesAprRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.timeWindowInDays = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivesAprRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      timeWindowInDays: isSet(object.timeWindowInDays) ? String(object.timeWindowInDays) : undefined
    };
  },
  toJSON(message: QueryIncentivesAprRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.timeWindowInDays !== undefined && (obj.timeWindowInDays = message.timeWindowInDays);
    return obj;
  },
  fromPartial(object: Partial<QueryIncentivesAprRequest>): QueryIncentivesAprRequest {
    const message = createBaseQueryIncentivesAprRequest();
    message.denom = object.denom ?? "";
    message.timeWindowInDays = object.timeWindowInDays ?? undefined;
    return message;
  }
};
function createBaseQueryIncentivesAprResponse(): QueryIncentivesAprResponse {
  return {
    apr: ""
  };
}
export const QueryIncentivesAprResponse = {
  encode(message: QueryIncentivesAprResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apr !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivesAprResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivesAprResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivesAprResponse {
    return {
      apr: isSet(object.apr) ? String(object.apr) : ""
    };
  },
  toJSON(message: QueryIncentivesAprResponse): unknown {
    const obj: any = {};
    message.apr !== undefined && (obj.apr = message.apr);
    return obj;
  },
  fromPartial(object: Partial<QueryIncentivesAprResponse>): QueryIncentivesAprResponse {
    const message = createBaseQueryIncentivesAprResponse();
    message.apr = object.apr ?? "";
    return message;
  }
};