import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ValidatorSlashWindowSummary, ValidatorSlashWindowSummaryAmino, ValidatorSlashWindowSummarySDKType } from "../../oracle/validator_slash_window_summary";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryValidatorSlashWindowSummariesRequest {
  operatorAddress: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
}
export interface QueryValidatorSlashWindowSummariesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorSlashWindowSummariesRequest";
  value: Uint8Array;
}
export interface QueryValidatorSlashWindowSummariesRequestAmino {
  operator_address?: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestAmino;
}
export interface QueryValidatorSlashWindowSummariesRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryValidatorSlashWindowSummariesRequest";
  value: QueryValidatorSlashWindowSummariesRequestAmino;
}
export interface QueryValidatorSlashWindowSummariesRequestSDKType {
  operator_address: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryValidatorSlashWindowSummariesResponse {
  summaries: ValidatorSlashWindowSummary[];
  pagination?: PageResponse;
}
export interface QueryValidatorSlashWindowSummariesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorSlashWindowSummariesResponse";
  value: Uint8Array;
}
export interface QueryValidatorSlashWindowSummariesResponseAmino {
  summaries?: ValidatorSlashWindowSummaryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryValidatorSlashWindowSummariesResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryValidatorSlashWindowSummariesResponse";
  value: QueryValidatorSlashWindowSummariesResponseAmino;
}
export interface QueryValidatorSlashWindowSummariesResponseSDKType {
  summaries: ValidatorSlashWindowSummarySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryValidatorSlashWindowSummariesRequest(): QueryValidatorSlashWindowSummariesRequest {
  return {
    operatorAddress: "",
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    pagination: undefined
  };
}
export const QueryValidatorSlashWindowSummariesRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorSlashWindowSummariesRequest",
  is(o: any): o is QueryValidatorSlashWindowSummariesRequest {
    return o && (o.$typeUrl === QueryValidatorSlashWindowSummariesRequest.typeUrl || typeof o.operatorAddress === "string");
  },
  isSDK(o: any): o is QueryValidatorSlashWindowSummariesRequestSDKType {
    return o && (o.$typeUrl === QueryValidatorSlashWindowSummariesRequest.typeUrl || typeof o.operator_address === "string");
  },
  isAmino(o: any): o is QueryValidatorSlashWindowSummariesRequestAmino {
    return o && (o.$typeUrl === QueryValidatorSlashWindowSummariesRequest.typeUrl || typeof o.operator_address === "string");
  },
  encode(message: QueryValidatorSlashWindowSummariesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(18).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(26).string(message.toBlockHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorSlashWindowSummariesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashWindowSummariesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.fromBlockHeight = reader.string();
          break;
        case 3:
          message.toBlockHeight = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorSlashWindowSummariesRequest {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryValidatorSlashWindowSummariesRequest): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorSlashWindowSummariesRequest>): QueryValidatorSlashWindowSummariesRequest {
    const message = createBaseQueryValidatorSlashWindowSummariesRequest();
    message.operatorAddress = object.operatorAddress ?? "";
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorSlashWindowSummariesRequestAmino): QueryValidatorSlashWindowSummariesRequest {
    const message = createBaseQueryValidatorSlashWindowSummariesRequest();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.from_block_height !== undefined && object.from_block_height !== null) {
      message.fromBlockHeight = object.from_block_height;
    }
    if (object.to_block_height !== undefined && object.to_block_height !== null) {
      message.toBlockHeight = object.to_block_height;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorSlashWindowSummariesRequest, useInterfaces: boolean = true): QueryValidatorSlashWindowSummariesRequestAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorSlashWindowSummariesRequestAminoMsg): QueryValidatorSlashWindowSummariesRequest {
    return QueryValidatorSlashWindowSummariesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorSlashWindowSummariesRequestProtoMsg, useInterfaces: boolean = true): QueryValidatorSlashWindowSummariesRequest {
    return QueryValidatorSlashWindowSummariesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorSlashWindowSummariesRequest): Uint8Array {
    return QueryValidatorSlashWindowSummariesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSlashWindowSummariesRequest): QueryValidatorSlashWindowSummariesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryValidatorSlashWindowSummariesRequest",
      value: QueryValidatorSlashWindowSummariesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryValidatorSlashWindowSummariesRequest.typeUrl, QueryValidatorSlashWindowSummariesRequest);
function createBaseQueryValidatorSlashWindowSummariesResponse(): QueryValidatorSlashWindowSummariesResponse {
  return {
    summaries: [],
    pagination: undefined
  };
}
export const QueryValidatorSlashWindowSummariesResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorSlashWindowSummariesResponse",
  is(o: any): o is QueryValidatorSlashWindowSummariesResponse {
    return o && (o.$typeUrl === QueryValidatorSlashWindowSummariesResponse.typeUrl || Array.isArray(o.summaries) && (!o.summaries.length || ValidatorSlashWindowSummary.is(o.summaries[0])));
  },
  isSDK(o: any): o is QueryValidatorSlashWindowSummariesResponseSDKType {
    return o && (o.$typeUrl === QueryValidatorSlashWindowSummariesResponse.typeUrl || Array.isArray(o.summaries) && (!o.summaries.length || ValidatorSlashWindowSummary.isSDK(o.summaries[0])));
  },
  isAmino(o: any): o is QueryValidatorSlashWindowSummariesResponseAmino {
    return o && (o.$typeUrl === QueryValidatorSlashWindowSummariesResponse.typeUrl || Array.isArray(o.summaries) && (!o.summaries.length || ValidatorSlashWindowSummary.isAmino(o.summaries[0])));
  },
  encode(message: QueryValidatorSlashWindowSummariesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.summaries) {
      ValidatorSlashWindowSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorSlashWindowSummariesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashWindowSummariesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summaries.push(ValidatorSlashWindowSummary.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryValidatorSlashWindowSummariesResponse {
    return {
      summaries: Array.isArray(object?.summaries) ? object.summaries.map((e: any) => ValidatorSlashWindowSummary.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryValidatorSlashWindowSummariesResponse): unknown {
    const obj: any = {};
    if (message.summaries) {
      obj.summaries = message.summaries.map(e => e ? ValidatorSlashWindowSummary.toJSON(e) : undefined);
    } else {
      obj.summaries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorSlashWindowSummariesResponse>): QueryValidatorSlashWindowSummariesResponse {
    const message = createBaseQueryValidatorSlashWindowSummariesResponse();
    message.summaries = object.summaries?.map(e => ValidatorSlashWindowSummary.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorSlashWindowSummariesResponseAmino): QueryValidatorSlashWindowSummariesResponse {
    const message = createBaseQueryValidatorSlashWindowSummariesResponse();
    message.summaries = object.summaries?.map(e => ValidatorSlashWindowSummary.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorSlashWindowSummariesResponse, useInterfaces: boolean = true): QueryValidatorSlashWindowSummariesResponseAmino {
    const obj: any = {};
    if (message.summaries) {
      obj.summaries = message.summaries.map(e => e ? ValidatorSlashWindowSummary.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.summaries = message.summaries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorSlashWindowSummariesResponseAminoMsg): QueryValidatorSlashWindowSummariesResponse {
    return QueryValidatorSlashWindowSummariesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorSlashWindowSummariesResponseProtoMsg, useInterfaces: boolean = true): QueryValidatorSlashWindowSummariesResponse {
    return QueryValidatorSlashWindowSummariesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorSlashWindowSummariesResponse): Uint8Array {
    return QueryValidatorSlashWindowSummariesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSlashWindowSummariesResponse): QueryValidatorSlashWindowSummariesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryValidatorSlashWindowSummariesResponse",
      value: QueryValidatorSlashWindowSummariesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryValidatorSlashWindowSummariesResponse.typeUrl, QueryValidatorSlashWindowSummariesResponse);