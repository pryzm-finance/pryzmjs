import { Validator, ValidatorAmino, ValidatorSDKType } from "../../oracle/validator";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryValidatorRequest {
  operatorAddress: string;
}
export interface QueryValidatorRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorRequest";
  value: Uint8Array;
}
export interface QueryValidatorRequestAmino {
  operator_address?: string;
}
export interface QueryValidatorRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryValidatorRequest";
  value: QueryValidatorRequestAmino;
}
export interface QueryValidatorRequestSDKType {
  operator_address: string;
}
export interface QueryValidatorResponse {
  validator: Validator;
}
export interface QueryValidatorResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorResponse";
  value: Uint8Array;
}
export interface QueryValidatorResponseAmino {
  validator?: ValidatorAmino;
}
export interface QueryValidatorResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryValidatorResponse";
  value: QueryValidatorResponseAmino;
}
export interface QueryValidatorResponseSDKType {
  validator: ValidatorSDKType;
}
export interface QueryValidatorsRequest {
  pagination?: PageRequest;
}
export interface QueryValidatorsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorsRequest";
  value: Uint8Array;
}
export interface QueryValidatorsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryValidatorsRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryValidatorsRequest";
  value: QueryValidatorsRequestAmino;
}
export interface QueryValidatorsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryValidatorsResponse {
  validators: Validator[];
  pagination?: PageResponse;
}
export interface QueryValidatorsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorsResponse";
  value: Uint8Array;
}
export interface QueryValidatorsResponseAmino {
  validators?: ValidatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryValidatorsResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryValidatorsResponse";
  value: QueryValidatorsResponseAmino;
}
export interface QueryValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    operatorAddress: ""
  };
}
export const QueryValidatorRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorRequest",
  is(o: any): o is QueryValidatorRequest {
    return o && (o.$typeUrl === QueryValidatorRequest.typeUrl || typeof o.operatorAddress === "string");
  },
  isSDK(o: any): o is QueryValidatorRequestSDKType {
    return o && (o.$typeUrl === QueryValidatorRequest.typeUrl || typeof o.operator_address === "string");
  },
  isAmino(o: any): o is QueryValidatorRequestAmino {
    return o && (o.$typeUrl === QueryValidatorRequest.typeUrl || typeof o.operator_address === "string");
  },
  encode(message: QueryValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorRequest {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorRequestAmino): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorRequest, useInterfaces: boolean = true): QueryValidatorRequestAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorRequestAminoMsg): QueryValidatorRequest {
    return QueryValidatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorRequestProtoMsg, useInterfaces: boolean = true): QueryValidatorRequest {
    return QueryValidatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorRequest): Uint8Array {
    return QueryValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorRequest): QueryValidatorRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryValidatorRequest",
      value: QueryValidatorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryValidatorRequest.typeUrl, QueryValidatorRequest);
function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryValidatorResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorResponse",
  is(o: any): o is QueryValidatorResponse {
    return o && (o.$typeUrl === QueryValidatorResponse.typeUrl || Validator.is(o.validator));
  },
  isSDK(o: any): o is QueryValidatorResponseSDKType {
    return o && (o.$typeUrl === QueryValidatorResponse.typeUrl || Validator.isSDK(o.validator));
  },
  isAmino(o: any): o is QueryValidatorResponseAmino {
    return o && (o.$typeUrl === QueryValidatorResponse.typeUrl || Validator.isAmino(o.validator));
  },
  encode(message: QueryValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorResponse {
    return {
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined
    };
  },
  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorResponseAmino): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message: QueryValidatorResponse, useInterfaces: boolean = true): QueryValidatorResponseAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorResponseAminoMsg): QueryValidatorResponse {
    return QueryValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorResponseProtoMsg, useInterfaces: boolean = true): QueryValidatorResponse {
    return QueryValidatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorResponse): Uint8Array {
    return QueryValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorResponse): QueryValidatorResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryValidatorResponse",
      value: QueryValidatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryValidatorResponse.typeUrl, QueryValidatorResponse);
function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    pagination: undefined
  };
}
export const QueryValidatorsRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorsRequest",
  is(o: any): o is QueryValidatorsRequest {
    return o && o.$typeUrl === QueryValidatorsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryValidatorsRequestSDKType {
    return o && o.$typeUrl === QueryValidatorsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryValidatorsRequestAmino {
    return o && o.$typeUrl === QueryValidatorsRequest.typeUrl;
  },
  encode(message: QueryValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsRequestAmino): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorsRequest, useInterfaces: boolean = true): QueryValidatorsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsRequestAminoMsg): QueryValidatorsRequest {
    return QueryValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorsRequestProtoMsg, useInterfaces: boolean = true): QueryValidatorsRequest {
    return QueryValidatorsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorsRequest): Uint8Array {
    return QueryValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryValidatorsRequest",
      value: QueryValidatorsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryValidatorsRequest.typeUrl, QueryValidatorsRequest);
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryValidatorsResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorsResponse",
  is(o: any): o is QueryValidatorsResponse {
    return o && (o.$typeUrl === QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isSDK(o: any): o is QueryValidatorsResponseSDKType {
    return o && (o.$typeUrl === QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is QueryValidatorsResponseAmino {
    return o && (o.$typeUrl === QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: QueryValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorsResponse, useInterfaces: boolean = true): QueryValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorsResponseProtoMsg, useInterfaces: boolean = true): QueryValidatorsResponse {
    return QueryValidatorsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorsResponse): Uint8Array {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryValidatorsResponse.typeUrl, QueryValidatorsResponse);