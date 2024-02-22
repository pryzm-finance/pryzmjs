import { CaptchaRequest, CaptchaRequestAmino, CaptchaRequestSDKType } from "../../../captcha/request";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryClaimRequest {
  address: string;
  captchaRequest?: CaptchaRequest;
}
export interface QueryClaimRequestProtoMsg {
  typeUrl: "/pryzmatics.server.faucet.QueryClaimRequest";
  value: Uint8Array;
}
export interface QueryClaimRequestAmino {
  address?: string;
  captcha_request?: CaptchaRequestAmino;
}
export interface QueryClaimRequestAminoMsg {
  type: "/pryzmatics.server.faucet.QueryClaimRequest";
  value: QueryClaimRequestAmino;
}
export interface QueryClaimRequestSDKType {
  address: string;
  captcha_request?: CaptchaRequestSDKType;
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
    captchaRequest: undefined
  };
}
export const QueryClaimRequest = {
  typeUrl: "/pryzmatics.server.faucet.QueryClaimRequest",
  is(o: any): o is QueryClaimRequest {
    return o && (o.$typeUrl === QueryClaimRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryClaimRequestSDKType {
    return o && (o.$typeUrl === QueryClaimRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryClaimRequestAmino {
    return o && (o.$typeUrl === QueryClaimRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryClaimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.captchaRequest !== undefined) {
      CaptchaRequest.encode(message.captchaRequest, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClaimRequest {
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
          message.captchaRequest = CaptchaRequest.decode(reader, reader.uint32(), useInterfaces);
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
      captchaRequest: isSet(object.captchaRequest) ? CaptchaRequest.fromJSON(object.captchaRequest) : undefined
    };
  },
  toJSON(message: QueryClaimRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.captchaRequest !== undefined && (obj.captchaRequest = message.captchaRequest ? CaptchaRequest.toJSON(message.captchaRequest) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimRequest>): QueryClaimRequest {
    const message = createBaseQueryClaimRequest();
    message.address = object.address ?? "";
    message.captchaRequest = object.captchaRequest !== undefined && object.captchaRequest !== null ? CaptchaRequest.fromPartial(object.captchaRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimRequestAmino): QueryClaimRequest {
    const message = createBaseQueryClaimRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.captcha_request !== undefined && object.captcha_request !== null) {
      message.captchaRequest = CaptchaRequest.fromAmino(object.captcha_request);
    }
    return message;
  },
  toAmino(message: QueryClaimRequest, useInterfaces: boolean = true): QueryClaimRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.captcha_request = message.captchaRequest ? CaptchaRequest.toAmino(message.captchaRequest, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRequestAminoMsg): QueryClaimRequest {
    return QueryClaimRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRequestProtoMsg, useInterfaces: boolean = true): QueryClaimRequest {
    return QueryClaimRequest.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryClaimRequest.typeUrl, QueryClaimRequest);
function createBaseQueryClaimResponse(): QueryClaimResponse {
  return {};
}
export const QueryClaimResponse = {
  typeUrl: "/pryzmatics.server.faucet.QueryClaimResponse",
  is(o: any): o is QueryClaimResponse {
    return o && o.$typeUrl === QueryClaimResponse.typeUrl;
  },
  isSDK(o: any): o is QueryClaimResponseSDKType {
    return o && o.$typeUrl === QueryClaimResponse.typeUrl;
  },
  isAmino(o: any): o is QueryClaimResponseAmino {
    return o && o.$typeUrl === QueryClaimResponse.typeUrl;
  },
  encode(_: QueryClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClaimResponse {
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
  toAmino(_: QueryClaimResponse, useInterfaces: boolean = true): QueryClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryClaimResponseAminoMsg): QueryClaimResponse {
    return QueryClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimResponseProtoMsg, useInterfaces: boolean = true): QueryClaimResponse {
    return QueryClaimResponse.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryClaimResponse.typeUrl, QueryClaimResponse);