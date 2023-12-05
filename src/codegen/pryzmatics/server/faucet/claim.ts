import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryClaimRequest {
  address: string;
  recaptchaResponse: string;
}
export interface QueryClaimRequestSDKType {
  address: string;
  recaptcha_response: string;
}
export interface QueryClaimResponse {}
export interface QueryClaimResponseSDKType {}
function createBaseQueryClaimRequest(): QueryClaimRequest {
  return {
    address: "",
    recaptchaResponse: ""
  };
}
export const QueryClaimRequest = {
  encode(message: QueryClaimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.recaptchaResponse !== "") {
      writer.uint32(18).string(message.recaptchaResponse);
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
          message.recaptchaResponse = reader.string();
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
      recaptchaResponse: isSet(object.recaptchaResponse) ? String(object.recaptchaResponse) : ""
    };
  },
  toJSON(message: QueryClaimRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.recaptchaResponse !== undefined && (obj.recaptchaResponse = message.recaptchaResponse);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimRequest>): QueryClaimRequest {
    const message = createBaseQueryClaimRequest();
    message.address = object.address ?? "";
    message.recaptchaResponse = object.recaptchaResponse ?? "";
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