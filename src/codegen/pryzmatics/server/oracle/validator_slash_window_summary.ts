import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ValidatorSlashWindowSummary, ValidatorSlashWindowSummarySDKType } from "../../oracle/validator_slash_window_summary";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryValidatorSlashWindowSummariesRequest {
  operatorAddress: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashWindowSummariesRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryValidatorSlashWindowSummariesResponse(): QueryValidatorSlashWindowSummariesResponse {
  return {
    summaries: [],
    pagination: undefined
  };
}
export const QueryValidatorSlashWindowSummariesResponse = {
  encode(message: QueryValidatorSlashWindowSummariesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.summaries) {
      ValidatorSlashWindowSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashWindowSummariesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashWindowSummariesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summaries.push(ValidatorSlashWindowSummary.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
  }
};