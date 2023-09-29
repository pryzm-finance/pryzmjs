import { VoteSummary, VoteSummarySDKType } from "../../oracle/vote_summary";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryVoteSummaryRequest {}
export interface QueryVoteSummaryRequestSDKType {}
export interface QueryVoteSummaryResponse {
  summary: VoteSummary;
}
export interface QueryVoteSummaryResponseSDKType {
  summary: VoteSummarySDKType;
}
function createBaseQueryVoteSummaryRequest(): QueryVoteSummaryRequest {
  return {};
}
export const QueryVoteSummaryRequest = {
  encode(_: QueryVoteSummaryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteSummaryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteSummaryRequest();
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
  fromJSON(_: any): QueryVoteSummaryRequest {
    return {};
  },
  toJSON(_: QueryVoteSummaryRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryVoteSummaryRequest>): QueryVoteSummaryRequest {
    const message = createBaseQueryVoteSummaryRequest();
    return message;
  }
};
function createBaseQueryVoteSummaryResponse(): QueryVoteSummaryResponse {
  return {
    summary: VoteSummary.fromPartial({})
  };
}
export const QueryVoteSummaryResponse = {
  encode(message: QueryVoteSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.summary !== undefined) {
      VoteSummary.encode(message.summary, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summary = VoteSummary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteSummaryResponse {
    return {
      summary: isSet(object.summary) ? VoteSummary.fromJSON(object.summary) : undefined
    };
  },
  toJSON(message: QueryVoteSummaryResponse): unknown {
    const obj: any = {};
    message.summary !== undefined && (obj.summary = message.summary ? VoteSummary.toJSON(message.summary) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteSummaryResponse>): QueryVoteSummaryResponse {
    const message = createBaseQueryVoteSummaryResponse();
    message.summary = object.summary !== undefined && object.summary !== null ? VoteSummary.fromPartial(object.summary) : undefined;
    return message;
  }
};