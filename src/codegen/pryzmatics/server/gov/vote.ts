import { ProposalVoteOrderBy, ProposalVoteOrderByAmino, ProposalVoteOrderBySDKType } from "../../database/gov/vote";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ProposalVote, ProposalVoteAmino, ProposalVoteSDKType } from "../../gov/vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryProposalVotesRequest {
  proposalId: bigint;
  voter: string;
  orderBy?: ProposalVoteOrderBy;
  pagination?: PageRequest;
}
export interface QueryProposalVotesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.gov.QueryProposalVotesRequest";
  value: Uint8Array;
}
export interface QueryProposalVotesRequestAmino {
  proposal_id?: string;
  voter?: string;
  order_by?: ProposalVoteOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryProposalVotesRequestAminoMsg {
  type: "/pryzmatics.server.gov.QueryProposalVotesRequest";
  value: QueryProposalVotesRequestAmino;
}
export interface QueryProposalVotesRequestSDKType {
  proposal_id: bigint;
  voter: string;
  order_by?: ProposalVoteOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryProposalVotesResponse {
  votes: ProposalVote[];
  pagination?: PageResponse;
}
export interface QueryProposalVotesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.gov.QueryProposalVotesResponse";
  value: Uint8Array;
}
export interface QueryProposalVotesResponseAmino {
  votes?: ProposalVoteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryProposalVotesResponseAminoMsg {
  type: "/pryzmatics.server.gov.QueryProposalVotesResponse";
  value: QueryProposalVotesResponseAmino;
}
export interface QueryProposalVotesResponseSDKType {
  votes: ProposalVoteSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryProposalVotesRequest(): QueryProposalVotesRequest {
  return {
    proposalId: BigInt(0),
    voter: "",
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryProposalVotesRequest = {
  typeUrl: "/pryzmatics.server.gov.QueryProposalVotesRequest",
  is(o: any): o is QueryProposalVotesRequest {
    return o && (o.$typeUrl === QueryProposalVotesRequest.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string");
  },
  isSDK(o: any): o is QueryProposalVotesRequestSDKType {
    return o && (o.$typeUrl === QueryProposalVotesRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  isAmino(o: any): o is QueryProposalVotesRequestAmino {
    return o && (o.$typeUrl === QueryProposalVotesRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  encode(message: QueryProposalVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.orderBy !== undefined) {
      ProposalVoteOrderBy.encode(message.orderBy, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.orderBy = ProposalVoteOrderBy.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): QueryProposalVotesRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      orderBy: isSet(object.orderBy) ? ProposalVoteOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalVotesRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? ProposalVoteOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalVotesRequest>): QueryProposalVotesRequest {
    const message = createBaseQueryProposalVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? ProposalVoteOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalVotesRequestAmino): QueryProposalVotesRequest {
    const message = createBaseQueryProposalVotesRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = ProposalVoteOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalVotesRequest, useInterfaces: boolean = true): QueryProposalVotesRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.order_by = message.orderBy ? ProposalVoteOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalVotesRequestAminoMsg): QueryProposalVotesRequest {
    return QueryProposalVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalVotesRequestProtoMsg, useInterfaces: boolean = true): QueryProposalVotesRequest {
    return QueryProposalVotesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalVotesRequest): Uint8Array {
    return QueryProposalVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalVotesRequest): QueryProposalVotesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.gov.QueryProposalVotesRequest",
      value: QueryProposalVotesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalVotesRequest.typeUrl, QueryProposalVotesRequest);
function createBaseQueryProposalVotesResponse(): QueryProposalVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryProposalVotesResponse = {
  typeUrl: "/pryzmatics.server.gov.QueryProposalVotesResponse",
  is(o: any): o is QueryProposalVotesResponse {
    return o && (o.$typeUrl === QueryProposalVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || ProposalVote.is(o.votes[0])));
  },
  isSDK(o: any): o is QueryProposalVotesResponseSDKType {
    return o && (o.$typeUrl === QueryProposalVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || ProposalVote.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is QueryProposalVotesResponseAmino {
    return o && (o.$typeUrl === QueryProposalVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || ProposalVote.isAmino(o.votes[0])));
  },
  encode(message: QueryProposalVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      ProposalVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(ProposalVote.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryProposalVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => ProposalVote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalVotesResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? ProposalVote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalVotesResponse>): QueryProposalVotesResponse {
    const message = createBaseQueryProposalVotesResponse();
    message.votes = object.votes?.map(e => ProposalVote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalVotesResponseAmino): QueryProposalVotesResponse {
    const message = createBaseQueryProposalVotesResponse();
    message.votes = object.votes?.map(e => ProposalVote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalVotesResponse, useInterfaces: boolean = true): QueryProposalVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? ProposalVote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalVotesResponseAminoMsg): QueryProposalVotesResponse {
    return QueryProposalVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalVotesResponseProtoMsg, useInterfaces: boolean = true): QueryProposalVotesResponse {
    return QueryProposalVotesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalVotesResponse): Uint8Array {
    return QueryProposalVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalVotesResponse): QueryProposalVotesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.gov.QueryProposalVotesResponse",
      value: QueryProposalVotesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalVotesResponse.typeUrl, QueryProposalVotesResponse);