import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryAllianceAprRequest {
  denom: string;
  timeWindowInDays?: string;
}
export interface QueryAllianceAprRequestSDKType {
  denom: string;
  time_window_in_days?: string;
}
export interface QueryAllianceAprResponse {
  apr: string;
}
export interface QueryAllianceAprResponseSDKType {
  apr: string;
}
function createBaseQueryAllianceAprRequest(): QueryAllianceAprRequest {
  return {
    denom: "",
    timeWindowInDays: undefined
  };
}
export const QueryAllianceAprRequest = {
  encode(message: QueryAllianceAprRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.timeWindowInDays !== undefined) {
      writer.uint32(18).string(message.timeWindowInDays);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceAprRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceAprRequest();
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
  fromJSON(object: any): QueryAllianceAprRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      timeWindowInDays: isSet(object.timeWindowInDays) ? String(object.timeWindowInDays) : undefined
    };
  },
  toJSON(message: QueryAllianceAprRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.timeWindowInDays !== undefined && (obj.timeWindowInDays = message.timeWindowInDays);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceAprRequest>): QueryAllianceAprRequest {
    const message = createBaseQueryAllianceAprRequest();
    message.denom = object.denom ?? "";
    message.timeWindowInDays = object.timeWindowInDays ?? undefined;
    return message;
  }
};
function createBaseQueryAllianceAprResponse(): QueryAllianceAprResponse {
  return {
    apr: ""
  };
}
export const QueryAllianceAprResponse = {
  encode(message: QueryAllianceAprResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apr !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllianceAprResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceAprResponse();
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
  fromJSON(object: any): QueryAllianceAprResponse {
    return {
      apr: isSet(object.apr) ? String(object.apr) : ""
    };
  },
  toJSON(message: QueryAllianceAprResponse): unknown {
    const obj: any = {};
    message.apr !== undefined && (obj.apr = message.apr);
    return obj;
  },
  fromPartial(object: Partial<QueryAllianceAprResponse>): QueryAllianceAprResponse {
    const message = createBaseQueryAllianceAprResponse();
    message.apr = object.apr ?? "";
    return message;
  }
};