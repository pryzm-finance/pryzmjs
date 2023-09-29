import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ValidatorVoteIntervalSummary, ValidatorVoteIntervalSummarySDKType } from "../../oracle/validator_vote_interval_summary";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryValidatorVoteIntervalSummariesRequest {
  operatorAddress: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorVoteIntervalSummariesRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryValidatorVoteIntervalSummariesResponse(): QueryValidatorVoteIntervalSummariesResponse {
  return {
    summaries: [],
    pagination: undefined
  };
}
export const QueryValidatorVoteIntervalSummariesResponse = {
  encode(message: QueryValidatorVoteIntervalSummariesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.summaries) {
      ValidatorVoteIntervalSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorVoteIntervalSummariesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorVoteIntervalSummariesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summaries.push(ValidatorVoteIntervalSummary.decode(reader, reader.uint32()));
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
  }
};