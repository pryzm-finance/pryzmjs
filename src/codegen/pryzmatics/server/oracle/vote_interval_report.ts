import { VoteIntervalReport, VoteIntervalReportSDKType } from "../../oracle/vote_interval_report";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryVoteIntervalReportRequest {
  voteIntervalCloseBlockHeight: bigint;
}
export interface QueryVoteIntervalReportRequestSDKType {
  vote_interval_close_block_height: bigint;
}
export interface QueryVoteIntervalReportResponse {
  voteIntervalReport: VoteIntervalReport;
  ballotVoteResultCsv: string;
  validatorVoteIntervalReportCsv: string;
}
export interface QueryVoteIntervalReportResponseSDKType {
  vote_interval_report: VoteIntervalReportSDKType;
  ballot_vote_result_csv: string;
  validator_vote_interval_report_csv: string;
}
function createBaseQueryVoteIntervalReportRequest(): QueryVoteIntervalReportRequest {
  return {
    voteIntervalCloseBlockHeight: BigInt(0)
  };
}
export const QueryVoteIntervalReportRequest = {
  encode(message: QueryVoteIntervalReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteIntervalCloseBlockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.voteIntervalCloseBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteIntervalReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteIntervalReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteIntervalCloseBlockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteIntervalReportRequest {
    return {
      voteIntervalCloseBlockHeight: isSet(object.voteIntervalCloseBlockHeight) ? BigInt(object.voteIntervalCloseBlockHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryVoteIntervalReportRequest): unknown {
    const obj: any = {};
    message.voteIntervalCloseBlockHeight !== undefined && (obj.voteIntervalCloseBlockHeight = (message.voteIntervalCloseBlockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryVoteIntervalReportRequest>): QueryVoteIntervalReportRequest {
    const message = createBaseQueryVoteIntervalReportRequest();
    message.voteIntervalCloseBlockHeight = object.voteIntervalCloseBlockHeight !== undefined && object.voteIntervalCloseBlockHeight !== null ? BigInt(object.voteIntervalCloseBlockHeight.toString()) : BigInt(0);
    return message;
  }
};
function createBaseQueryVoteIntervalReportResponse(): QueryVoteIntervalReportResponse {
  return {
    voteIntervalReport: VoteIntervalReport.fromPartial({}),
    ballotVoteResultCsv: "",
    validatorVoteIntervalReportCsv: ""
  };
}
export const QueryVoteIntervalReportResponse = {
  encode(message: QueryVoteIntervalReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteIntervalReport !== undefined) {
      VoteIntervalReport.encode(message.voteIntervalReport, writer.uint32(10).fork()).ldelim();
    }
    if (message.ballotVoteResultCsv !== "") {
      writer.uint32(18).string(message.ballotVoteResultCsv);
    }
    if (message.validatorVoteIntervalReportCsv !== "") {
      writer.uint32(26).string(message.validatorVoteIntervalReportCsv);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteIntervalReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteIntervalReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteIntervalReport = VoteIntervalReport.decode(reader, reader.uint32());
          break;
        case 2:
          message.ballotVoteResultCsv = reader.string();
          break;
        case 3:
          message.validatorVoteIntervalReportCsv = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteIntervalReportResponse {
    return {
      voteIntervalReport: isSet(object.voteIntervalReport) ? VoteIntervalReport.fromJSON(object.voteIntervalReport) : undefined,
      ballotVoteResultCsv: isSet(object.ballotVoteResultCsv) ? String(object.ballotVoteResultCsv) : "",
      validatorVoteIntervalReportCsv: isSet(object.validatorVoteIntervalReportCsv) ? String(object.validatorVoteIntervalReportCsv) : ""
    };
  },
  toJSON(message: QueryVoteIntervalReportResponse): unknown {
    const obj: any = {};
    message.voteIntervalReport !== undefined && (obj.voteIntervalReport = message.voteIntervalReport ? VoteIntervalReport.toJSON(message.voteIntervalReport) : undefined);
    message.ballotVoteResultCsv !== undefined && (obj.ballotVoteResultCsv = message.ballotVoteResultCsv);
    message.validatorVoteIntervalReportCsv !== undefined && (obj.validatorVoteIntervalReportCsv = message.validatorVoteIntervalReportCsv);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteIntervalReportResponse>): QueryVoteIntervalReportResponse {
    const message = createBaseQueryVoteIntervalReportResponse();
    message.voteIntervalReport = object.voteIntervalReport !== undefined && object.voteIntervalReport !== null ? VoteIntervalReport.fromPartial(object.voteIntervalReport) : undefined;
    message.ballotVoteResultCsv = object.ballotVoteResultCsv ?? "";
    message.validatorVoteIntervalReportCsv = object.validatorVoteIntervalReportCsv ?? "";
    return message;
  }
};