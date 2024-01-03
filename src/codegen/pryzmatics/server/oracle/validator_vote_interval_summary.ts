import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ValidatorVoteIntervalSummary, ValidatorVoteIntervalSummaryAmino, ValidatorVoteIntervalSummarySDKType } from "../../oracle/validator_vote_interval_summary";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryValidatorVoteIntervalSummariesRequest {
  operatorAddress: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
}
export interface QueryValidatorVoteIntervalSummariesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorVoteIntervalSummariesRequest";
  value: Uint8Array;
}
export interface QueryValidatorVoteIntervalSummariesRequestAmino {
  operator_address?: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestAmino;
}
export interface QueryValidatorVoteIntervalSummariesRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryValidatorVoteIntervalSummariesRequest";
  value: QueryValidatorVoteIntervalSummariesRequestAmino;
}
export interface QueryValidatorVoteIntervalSummariesRequestSDKType {
  operator_address: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryValidatorVoteIntervalSummariesResponse {
  summaries: ValidatorVoteIntervalSummary[];
  pagination?: PageResponse;
}
export interface QueryValidatorVoteIntervalSummariesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorVoteIntervalSummariesResponse";
  value: Uint8Array;
}
export interface QueryValidatorVoteIntervalSummariesResponseAmino {
  summaries?: ValidatorVoteIntervalSummaryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryValidatorVoteIntervalSummariesResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryValidatorVoteIntervalSummariesResponse";
  value: QueryValidatorVoteIntervalSummariesResponseAmino;
}
export interface QueryValidatorVoteIntervalSummariesResponseSDKType {
  summaries: ValidatorVoteIntervalSummarySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryValidatorVoteIntervalSummariesRequest(): QueryValidatorVoteIntervalSummariesRequest {
  return {
    operatorAddress: "",
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    pagination: undefined
  };
}
export const QueryValidatorVoteIntervalSummariesRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorVoteIntervalSummariesRequest",
  is(o: any): o is QueryValidatorVoteIntervalSummariesRequest {
    return o && (o.$typeUrl === QueryValidatorVoteIntervalSummariesRequest.typeUrl || typeof o.operatorAddress === "string");
  },
  isSDK(o: any): o is QueryValidatorVoteIntervalSummariesRequestSDKType {
    return o && (o.$typeUrl === QueryValidatorVoteIntervalSummariesRequest.typeUrl || typeof o.operator_address === "string");
  },
  isAmino(o: any): o is QueryValidatorVoteIntervalSummariesRequestAmino {
    return o && (o.$typeUrl === QueryValidatorVoteIntervalSummariesRequest.typeUrl || typeof o.operator_address === "string");
  },
  encode(message: QueryValidatorVoteIntervalSummariesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorVoteIntervalSummariesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorVoteIntervalSummariesRequest();
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
  fromJSON(object: any): QueryValidatorVoteIntervalSummariesRequest {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryValidatorVoteIntervalSummariesRequest): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorVoteIntervalSummariesRequest>): QueryValidatorVoteIntervalSummariesRequest {
    const message = createBaseQueryValidatorVoteIntervalSummariesRequest();
    message.operatorAddress = object.operatorAddress ?? "";
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorVoteIntervalSummariesRequestAmino): QueryValidatorVoteIntervalSummariesRequest {
    const message = createBaseQueryValidatorVoteIntervalSummariesRequest();
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
  toAmino(message: QueryValidatorVoteIntervalSummariesRequest, useInterfaces: boolean = true): QueryValidatorVoteIntervalSummariesRequestAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorVoteIntervalSummariesRequestAminoMsg): QueryValidatorVoteIntervalSummariesRequest {
    return QueryValidatorVoteIntervalSummariesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorVoteIntervalSummariesRequestProtoMsg, useInterfaces: boolean = true): QueryValidatorVoteIntervalSummariesRequest {
    return QueryValidatorVoteIntervalSummariesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorVoteIntervalSummariesRequest): Uint8Array {
    return QueryValidatorVoteIntervalSummariesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorVoteIntervalSummariesRequest): QueryValidatorVoteIntervalSummariesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryValidatorVoteIntervalSummariesRequest",
      value: QueryValidatorVoteIntervalSummariesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryValidatorVoteIntervalSummariesRequest.typeUrl, QueryValidatorVoteIntervalSummariesRequest);
function createBaseQueryValidatorVoteIntervalSummariesResponse(): QueryValidatorVoteIntervalSummariesResponse {
  return {
    summaries: [],
    pagination: undefined
  };
}
export const QueryValidatorVoteIntervalSummariesResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryValidatorVoteIntervalSummariesResponse",
  is(o: any): o is QueryValidatorVoteIntervalSummariesResponse {
    return o && (o.$typeUrl === QueryValidatorVoteIntervalSummariesResponse.typeUrl || Array.isArray(o.summaries) && (!o.summaries.length || ValidatorVoteIntervalSummary.is(o.summaries[0])));
  },
  isSDK(o: any): o is QueryValidatorVoteIntervalSummariesResponseSDKType {
    return o && (o.$typeUrl === QueryValidatorVoteIntervalSummariesResponse.typeUrl || Array.isArray(o.summaries) && (!o.summaries.length || ValidatorVoteIntervalSummary.isSDK(o.summaries[0])));
  },
  isAmino(o: any): o is QueryValidatorVoteIntervalSummariesResponseAmino {
    return o && (o.$typeUrl === QueryValidatorVoteIntervalSummariesResponse.typeUrl || Array.isArray(o.summaries) && (!o.summaries.length || ValidatorVoteIntervalSummary.isAmino(o.summaries[0])));
  },
  encode(message: QueryValidatorVoteIntervalSummariesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.summaries) {
      ValidatorVoteIntervalSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorVoteIntervalSummariesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorVoteIntervalSummariesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summaries.push(ValidatorVoteIntervalSummary.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryValidatorVoteIntervalSummariesResponse {
    return {
      summaries: Array.isArray(object?.summaries) ? object.summaries.map((e: any) => ValidatorVoteIntervalSummary.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryValidatorVoteIntervalSummariesResponse): unknown {
    const obj: any = {};
    if (message.summaries) {
      obj.summaries = message.summaries.map(e => e ? ValidatorVoteIntervalSummary.toJSON(e) : undefined);
    } else {
      obj.summaries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorVoteIntervalSummariesResponse>): QueryValidatorVoteIntervalSummariesResponse {
    const message = createBaseQueryValidatorVoteIntervalSummariesResponse();
    message.summaries = object.summaries?.map(e => ValidatorVoteIntervalSummary.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorVoteIntervalSummariesResponseAmino): QueryValidatorVoteIntervalSummariesResponse {
    const message = createBaseQueryValidatorVoteIntervalSummariesResponse();
    message.summaries = object.summaries?.map(e => ValidatorVoteIntervalSummary.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorVoteIntervalSummariesResponse, useInterfaces: boolean = true): QueryValidatorVoteIntervalSummariesResponseAmino {
    const obj: any = {};
    if (message.summaries) {
      obj.summaries = message.summaries.map(e => e ? ValidatorVoteIntervalSummary.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.summaries = message.summaries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorVoteIntervalSummariesResponseAminoMsg): QueryValidatorVoteIntervalSummariesResponse {
    return QueryValidatorVoteIntervalSummariesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorVoteIntervalSummariesResponseProtoMsg, useInterfaces: boolean = true): QueryValidatorVoteIntervalSummariesResponse {
    return QueryValidatorVoteIntervalSummariesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorVoteIntervalSummariesResponse): Uint8Array {
    return QueryValidatorVoteIntervalSummariesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorVoteIntervalSummariesResponse): QueryValidatorVoteIntervalSummariesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryValidatorVoteIntervalSummariesResponse",
      value: QueryValidatorVoteIntervalSummariesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryValidatorVoteIntervalSummariesResponse.typeUrl, QueryValidatorVoteIntervalSummariesResponse);