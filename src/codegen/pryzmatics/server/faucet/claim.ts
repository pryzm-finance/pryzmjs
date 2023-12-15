import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryClaimRequest {
  address: string;
  recaptchaResponse: string;
}
export interface QueryClaimRequestProtoMsg {
  typeUrl: "/pryzmatics.server.faucet.QueryClaimRequest";
  value: Uint8Array;
}
export interface QueryClaimRequestAmino {
  address?: string;
  recaptcha_response?: string;
}
export interface QueryClaimRequestAminoMsg {
  type: "/pryzmatics.server.faucet.QueryClaimRequest";
  value: QueryClaimRequestAmino;
}
export interface QueryClaimRequestSDKType {
  address: string;
  recaptcha_response: string;
}
export interface QueryClaimResponse {}
export interface QueryClaimResponseProtoMsg {
  typeUrl: "/pryzmatics.server.faucet.QueryClaimResponse";
  value: Uint8Array;
}
export interface QueryClaimResponseAmino {}
export interface QueryClaimResponseAminoMsg {
  type: "/pryzmatics.server.faucet.QueryClaimResponse";
  value: QueryClaimResponseAmino;
}
export interface QueryClaimResponseSDKType {}
function createBaseQueryClaimRequest(): QueryClaimRequest {
  return {
    address: "",
    recaptchaResponse: ""
  };
}
export const QueryClaimRequest = {
  typeUrl: "/pryzmatics.server.faucet.QueryClaimRequest",
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
  },
  fromAmino(object: QueryClaimRequestAmino): QueryClaimRequest {
    const message = createBaseQueryClaimRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.recaptcha_response !== undefined && object.recaptcha_response !== null) {
      message.recaptchaResponse = object.recaptcha_response;
    }
    return message;
  },
  toAmino(message: QueryClaimRequest): QueryClaimRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.recaptcha_response = message.recaptchaResponse;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRequestAminoMsg): QueryClaimRequest {
    return QueryClaimRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRequestProtoMsg): QueryClaimRequest {
    return QueryClaimRequest.decode(message.value);
  },
  toProto(message: QueryClaimRequest): Uint8Array {
    return QueryClaimRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRequest): QueryClaimRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.faucet.QueryClaimRequest",
      value: QueryClaimRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimResponse(): QueryClaimResponse {
  return {};
}
export const QueryClaimResponse = {
  typeUrl: "/pryzmatics.server.faucet.QueryClaimResponse",
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
  },
  fromAmino(_: QueryClaimResponseAmino): QueryClaimResponse {
    const message = createBaseQueryClaimResponse();
    return message;
  },
  toAmino(_: QueryClaimResponse): QueryClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryClaimResponseAminoMsg): QueryClaimResponse {
    return QueryClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimResponseProtoMsg): QueryClaimResponse {
    return QueryClaimResponse.decode(message.value);
  },
  toProto(message: QueryClaimResponse): Uint8Array {
    return QueryClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimResponse): QueryClaimResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.faucet.QueryClaimResponse",
      value: QueryClaimResponse.encode(message).finish()
    };
  }
};