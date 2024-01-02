import { VoteIntervalReport, VoteIntervalReportAmino, VoteIntervalReportSDKType } from "../../oracle/vote_interval_report";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
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
  is(o: any): o is QueryVoteIntervalReportRequest {
    return o && (o.$typeUrl === QueryVoteIntervalReportRequest.typeUrl || typeof o.voteIntervalCloseBlockHeight === "bigint");
  },
  isSDK(o: any): o is QueryVoteIntervalReportRequestSDKType {
    return o && (o.$typeUrl === QueryVoteIntervalReportRequest.typeUrl || typeof o.vote_interval_close_block_height === "bigint");
  },
  isAmino(o: any): o is QueryVoteIntervalReportRequestAmino {
    return o && (o.$typeUrl === QueryVoteIntervalReportRequest.typeUrl || typeof o.vote_interval_close_block_height === "bigint");
  },
  encode(message: QueryVoteIntervalReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteIntervalCloseBlockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.voteIntervalCloseBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVoteIntervalReportRequest {
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
  toAmino(message: QueryVoteIntervalReportRequest, useInterfaces: boolean = true): QueryVoteIntervalReportRequestAmino {
    const obj: any = {};
    obj.vote_interval_close_block_height = message.voteIntervalCloseBlockHeight ? message.voteIntervalCloseBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteIntervalReportRequestAminoMsg): QueryVoteIntervalReportRequest {
    return QueryVoteIntervalReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteIntervalReportRequestProtoMsg, useInterfaces: boolean = true): QueryVoteIntervalReportRequest {
    return QueryVoteIntervalReportRequest.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryVoteIntervalReportRequest.typeUrl, QueryVoteIntervalReportRequest);
function createBaseQueryVoteIntervalReportResponse(): QueryVoteIntervalReportResponse {
  return {
    voteIntervalReport: undefined,
    ballotVoteResultCsv: "",
    validatorVoteIntervalReportCsv: ""
  };
}
export const QueryVoteIntervalReportResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalReportResponse",
  is(o: any): o is QueryVoteIntervalReportResponse {
    return o && (o.$typeUrl === QueryVoteIntervalReportResponse.typeUrl || typeof o.ballotVoteResultCsv === "string" && typeof o.validatorVoteIntervalReportCsv === "string");
  },
  isSDK(o: any): o is QueryVoteIntervalReportResponseSDKType {
    return o && (o.$typeUrl === QueryVoteIntervalReportResponse.typeUrl || typeof o.ballot_vote_result_csv === "string" && typeof o.validator_vote_interval_report_csv === "string");
  },
  isAmino(o: any): o is QueryVoteIntervalReportResponseAmino {
    return o && (o.$typeUrl === QueryVoteIntervalReportResponse.typeUrl || typeof o.ballot_vote_result_csv === "string" && typeof o.validator_vote_interval_report_csv === "string");
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVoteIntervalReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteIntervalReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteIntervalReport = VoteIntervalReport.decode(reader, reader.uint32(), useInterfaces);
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
  toAmino(message: QueryVoteIntervalReportResponse, useInterfaces: boolean = true): QueryVoteIntervalReportResponseAmino {
    const obj: any = {};
    obj.vote_interval_report = message.voteIntervalReport ? VoteIntervalReport.toAmino(message.voteIntervalReport, useInterfaces) : undefined;
    obj.ballot_vote_result_csv = message.ballotVoteResultCsv === "" ? undefined : message.ballotVoteResultCsv;
    obj.validator_vote_interval_report_csv = message.validatorVoteIntervalReportCsv === "" ? undefined : message.validatorVoteIntervalReportCsv;
    return obj;
  },
  fromAminoMsg(object: QueryVoteIntervalReportResponseAminoMsg): QueryVoteIntervalReportResponse {
    return QueryVoteIntervalReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteIntervalReportResponseProtoMsg, useInterfaces: boolean = true): QueryVoteIntervalReportResponse {
    return QueryVoteIntervalReportResponse.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryVoteIntervalReportResponse.typeUrl, QueryVoteIntervalReportResponse);