import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryClaimRequest {
  address: string;
  denom: string;
  captchaResponse: string;
}
export interface QueryClaimRequestSDKType {
  address: string;
  denom: string;
  captcha_response: string;
}
export interface QueryClaimResponse {}
export interface QueryClaimResponseSDKType {}
function createBaseQueryClaimRequest(): QueryClaimRequest {
  return {
    address: "",
    denom: "",
    captchaResponse: ""
  };
}
export const QueryClaimRequest = {
  encode(message: QueryClaimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.captchaResponse !== "") {
      writer.uint32(26).string(message.captchaResponse);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.captchaResponse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      captchaResponse: isSet(object.captchaResponse) ? String(object.captchaResponse) : ""
    };
  },
  toJSON(message: QueryClaimRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.captchaResponse !== undefined && (obj.captchaResponse = message.captchaResponse);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimRequest>): QueryClaimRequest {
    const message = createBaseQueryClaimRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.captchaResponse = object.captchaResponse ?? "";
    return message;
  }
};
function createBaseQueryClaimResponse(): QueryClaimResponse {
  return {};
}
export const QueryClaimResponse = {
  encode(_: QueryClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryClaimResponse {
    return {};
  },
  toJSON(_: QueryClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryClaimResponse>): QueryClaimResponse {
    const message = createBaseQueryClaimResponse();
    return message;
  }
};