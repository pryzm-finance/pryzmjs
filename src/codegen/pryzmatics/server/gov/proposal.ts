import { Proposal, ProposalAmino, ProposalSDKType, ProposalStatus, proposalStatusFromJSON, proposalStatusToJSON } from "../../gov/proposal";
import { ProposalOrderBy, ProposalOrderByAmino, ProposalOrderBySDKType } from "../../database/gov/proposal";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryProposalRequest {
  id: bigint;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/pryzmatics.server.gov.QueryProposalRequest";
  value: Uint8Array;
}
export interface QueryProposalRequestAmino {
  id?: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "/pryzmatics.server.gov.QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
export interface QueryProposalRequestSDKType {
  id: bigint;
}
export interface QueryProposalResponse {
  proposal: Proposal;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/pryzmatics.server.gov.QueryProposalResponse";
  value: Uint8Array;
}
export interface QueryProposalResponseAmino {
  proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
  type: "/pryzmatics.server.gov.QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
export interface QueryProposalResponseSDKType {
  proposal: ProposalSDKType;
}
export interface QueryProposalsRequest {
  voter: string;
  proposer: string;
  status: ProposalStatus;
  orderBy?: ProposalOrderBy;
  pagination?: PageRequest;
}
export interface QueryProposalsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.gov.QueryProposalsRequest";
  value: Uint8Array;
}
export interface QueryProposalsRequestAmino {
  voter?: string;
  proposer?: string;
  status?: ProposalStatus;
  order_by?: ProposalOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryProposalsRequestAminoMsg {
  type: "/pryzmatics.server.gov.QueryProposalsRequest";
  value: QueryProposalsRequestAmino;
}
export interface QueryProposalsRequestSDKType {
  voter: string;
  proposer: string;
  status: ProposalStatus;
  order_by?: ProposalOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryProposalsResponse {
  proposals: Proposal[];
  pagination?: PageResponse;
}
export interface QueryProposalsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.gov.QueryProposalsResponse";
  value: Uint8Array;
}
export interface QueryProposalsResponseAmino {
  proposals?: ProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryProposalsResponseAminoMsg {
  type: "/pryzmatics.server.gov.QueryProposalsResponse";
  value: QueryProposalsResponseAmino;
}
export interface QueryProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/pryzmatics.server.gov.QueryProposalRequest",
  is(o: any): o is QueryProposalRequest {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryProposalRequestSDKType {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryProposalRequestAmino {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryProposalRequest, useInterfaces: boolean = true): QueryProposalRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg, useInterfaces: boolean = true): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.gov.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalRequest.typeUrl, QueryProposalRequest);
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const QueryProposalResponse = {
  typeUrl: "/pryzmatics.server.gov.QueryProposalResponse",
  is(o: any): o is QueryProposalResponse {
    return o && (o.$typeUrl === QueryProposalResponse.typeUrl || Proposal.is(o.proposal));
  },
  isSDK(o: any): o is QueryProposalResponseSDKType {
    return o && (o.$typeUrl === QueryProposalResponse.typeUrl || Proposal.isSDK(o.proposal));
  },
  isAmino(o: any): o is QueryProposalResponseAmino {
    return o && (o.$typeUrl === QueryProposalResponse.typeUrl || Proposal.isAmino(o.proposal));
  },
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryProposalResponse, useInterfaces: boolean = true): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg, useInterfaces: boolean = true): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.gov.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalResponse.typeUrl, QueryProposalResponse);
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    voter: "",
    proposer: "",
    status: 0,
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryProposalsRequest = {
  typeUrl: "/pryzmatics.server.gov.QueryProposalsRequest",
  is(o: any): o is QueryProposalsRequest {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || typeof o.voter === "string" && typeof o.proposer === "string" && isSet(o.status));
  },
  isSDK(o: any): o is QueryProposalsRequestSDKType {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || typeof o.voter === "string" && typeof o.proposer === "string" && isSet(o.status));
  },
  isAmino(o: any): o is QueryProposalsRequestAmino {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || typeof o.voter === "string" && typeof o.proposer === "string" && isSet(o.status));
  },
  encode(message: QueryProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.orderBy !== undefined) {
      ProposalOrderBy.encode(message.orderBy, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.proposer = reader.string();
          break;
        case 3:
          message.status = (reader.int32() as any);
          break;
        case 4:
          message.orderBy = ProposalOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsRequest {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      orderBy: isSet(object.orderBy) ? ProposalOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsRequest): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? ProposalOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.voter = object.voter ?? "";
    message.proposer = object.proposer ?? "";
    message.status = object.status ?? 0;
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? ProposalOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = ProposalOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsRequest, useInterfaces: boolean = true): QueryProposalsRequestAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.order_by = message.orderBy ? ProposalOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsRequestProtoMsg, useInterfaces: boolean = true): QueryProposalsRequest {
    return QueryProposalsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalsRequest): Uint8Array {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.gov.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalsRequest.typeUrl, QueryProposalsRequest);
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsResponse = {
  typeUrl: "/pryzmatics.server.gov.QueryProposalsResponse",
  is(o: any): o is QueryProposalsResponse {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])));
  },
  isSDK(o: any): o is QueryProposalsResponseSDKType {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])));
  },
  isAmino(o: any): o is QueryProposalsResponseAmino {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsResponse, useInterfaces: boolean = true): QueryProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsResponseProtoMsg, useInterfaces: boolean = true): QueryProposalsResponse {
    return QueryProposalsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalsResponse): Uint8Array {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.gov.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalsResponse.typeUrl, QueryProposalsResponse);