import { VoteIntervalReport, VoteIntervalReportAmino, VoteIntervalReportSDKType } from "../../oracle/vote_interval_report";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryVoteIntervalReportRequest {
  voteIntervalCloseBlockHeight: bigint;
}
export interface QueryVoteIntervalReportRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalReportRequest";
  value: Uint8Array;
}
export interface QueryVoteIntervalReportRequestAmino {
  vote_interval_close_block_height?: string;
}
export interface QueryVoteIntervalReportRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVoteIntervalReportRequest";
  value: QueryVoteIntervalReportRequestAmino;
}
export interface QueryVoteIntervalReportRequestSDKType {
  vote_interval_close_block_height: bigint;
}
export interface QueryVoteIntervalReportResponse {
  voteIntervalReport?: VoteIntervalReport;
  ballotVoteResultCsv: string;
  validatorVoteIntervalReportCsv: string;
}
export interface QueryVoteIntervalReportResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalReportResponse";
  value: Uint8Array;
}
export interface QueryVoteIntervalReportResponseAmino {
  vote_interval_report?: VoteIntervalReportAmino;
  ballot_vote_result_csv?: string;
  validator_vote_interval_report_csv?: string;
}
export interface QueryVoteIntervalReportResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVoteIntervalReportResponse";
  value: QueryVoteIntervalReportResponseAmino;
}
export interface QueryVoteIntervalReportResponseSDKType {
  vote_interval_report?: VoteIntervalReportSDKType;
  ballot_vote_result_csv: string;
  validator_vote_interval_report_csv: string;
}
function createBaseQueryVoteIntervalReportRequest(): QueryVoteIntervalReportRequest {
  return {
    voteIntervalCloseBlockHeight: BigInt(0)
  };
}
export const QueryVoteIntervalReportRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalReportRequest",
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
  },
  fromAmino(object: QueryVoteIntervalReportRequestAmino): QueryVoteIntervalReportRequest {
    const message = createBaseQueryVoteIntervalReportRequest();
    if (object.vote_interval_close_block_height !== undefined && object.vote_interval_close_block_height !== null) {
      message.voteIntervalCloseBlockHeight = BigInt(object.vote_interval_close_block_height);
    }
    return message;
  },
  toAmino(message: QueryVoteIntervalReportRequest): QueryVoteIntervalReportRequestAmino {
    const obj: any = {};
    obj.vote_interval_close_block_height = message.voteIntervalCloseBlockHeight ? message.voteIntervalCloseBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteIntervalReportRequestAminoMsg): QueryVoteIntervalReportRequest {
    return QueryVoteIntervalReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteIntervalReportRequestProtoMsg): QueryVoteIntervalReportRequest {
    return QueryVoteIntervalReportRequest.decode(message.value);
  },
  toProto(message: QueryVoteIntervalReportRequest): Uint8Array {
    return QueryVoteIntervalReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteIntervalReportRequest): QueryVoteIntervalReportRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalReportRequest",
      value: QueryVoteIntervalReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteIntervalReportResponse(): QueryVoteIntervalReportResponse {
  return {
    voteIntervalReport: undefined,
    ballotVoteResultCsv: "",
    validatorVoteIntervalReportCsv: ""
  };
}
export const QueryVoteIntervalReportResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalReportResponse",
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
  },
  fromAmino(object: QueryVoteIntervalReportResponseAmino): QueryVoteIntervalReportResponse {
    const message = createBaseQueryVoteIntervalReportResponse();
    if (object.vote_interval_report !== undefined && object.vote_interval_report !== null) {
      message.voteIntervalReport = VoteIntervalReport.fromAmino(object.vote_interval_report);
    }
    if (object.ballot_vote_result_csv !== undefined && object.ballot_vote_result_csv !== null) {
      message.ballotVoteResultCsv = object.ballot_vote_result_csv;
    }
    if (object.validator_vote_interval_report_csv !== undefined && object.validator_vote_interval_report_csv !== null) {
      message.validatorVoteIntervalReportCsv = object.validator_vote_interval_report_csv;
    }
    return message;
  },
  toAmino(message: QueryVoteIntervalReportResponse): QueryVoteIntervalReportResponseAmino {
    const obj: any = {};
    obj.vote_interval_report = message.voteIntervalReport ? VoteIntervalReport.toAmino(message.voteIntervalReport) : undefined;
    obj.ballot_vote_result_csv = message.ballotVoteResultCsv;
    obj.validator_vote_interval_report_csv = message.validatorVoteIntervalReportCsv;
    return obj;
  },
  fromAminoMsg(object: QueryVoteIntervalReportResponseAminoMsg): QueryVoteIntervalReportResponse {
    return QueryVoteIntervalReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteIntervalReportResponseProtoMsg): QueryVoteIntervalReportResponse {
    return QueryVoteIntervalReportResponse.decode(message.value);
  },
  toProto(message: QueryVoteIntervalReportResponse): Uint8Array {
    return QueryVoteIntervalReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteIntervalReportResponse): QueryVoteIntervalReportResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalReportResponse",
      value: QueryVoteIntervalReportResponse.encode(message).finish()
    };
  }
};