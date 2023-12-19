import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakedPAsset, StakedPAssetAmino, StakedPAssetSDKType, TotalStakedPAsset, TotalStakedPAssetAmino, TotalStakedPAssetSDKType } from "./staked_p_asset";
import { Vote, VoteAmino, VoteSDKType } from "./vote";
import { Proposal, ProposalAmino, ProposalSDKType } from "./proposal";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetStakedPAssetRequest {
  account: string;
  pAsset: string;
}
export interface QueryGetStakedPAssetRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryGetStakedPAssetRequest";
  value: Uint8Array;
}
export interface QueryGetStakedPAssetRequestAmino {
  account?: string;
  p_asset?: string;
}
export interface QueryGetStakedPAssetRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryGetStakedPAssetRequest";
  value: QueryGetStakedPAssetRequestAmino;
}
export interface QueryGetStakedPAssetRequestSDKType {
  account: string;
  p_asset: string;
}
export interface QueryGetStakedPAssetResponse {
  stakedPAsset: StakedPAsset;
}
export interface QueryGetStakedPAssetResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryGetStakedPAssetResponse";
  value: Uint8Array;
}
export interface QueryGetStakedPAssetResponseAmino {
  staked_p_asset?: StakedPAssetAmino;
}
export interface QueryGetStakedPAssetResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryGetStakedPAssetResponse";
  value: QueryGetStakedPAssetResponseAmino;
}
export interface QueryGetStakedPAssetResponseSDKType {
  staked_p_asset: StakedPAssetSDKType;
}
export interface QueryAllStakedPAssetRequest {
  account: string;
  pagination?: PageRequest;
}
export interface QueryAllStakedPAssetRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryAllStakedPAssetRequest";
  value: Uint8Array;
}
export interface QueryAllStakedPAssetRequestAmino {
  account?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllStakedPAssetRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryAllStakedPAssetRequest";
  value: QueryAllStakedPAssetRequestAmino;
}
export interface QueryAllStakedPAssetRequestSDKType {
  account: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllStakedPAssetResponse {
  stakedPAsset: StakedPAsset[];
  pagination?: PageResponse;
}
export interface QueryAllStakedPAssetResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryAllStakedPAssetResponse";
  value: Uint8Array;
}
export interface QueryAllStakedPAssetResponseAmino {
  staked_p_asset?: StakedPAssetAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStakedPAssetResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryAllStakedPAssetResponse";
  value: QueryAllStakedPAssetResponseAmino;
}
export interface QueryAllStakedPAssetResponseSDKType {
  staked_p_asset: StakedPAssetSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAllTotalStakedPAssetRequest {
  account: string;
  pagination?: PageRequest;
}
export interface QueryAllTotalStakedPAssetRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryAllTotalStakedPAssetRequest";
  value: Uint8Array;
}
export interface QueryAllTotalStakedPAssetRequestAmino {
  account?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllTotalStakedPAssetRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryAllTotalStakedPAssetRequest";
  value: QueryAllTotalStakedPAssetRequestAmino;
}
export interface QueryAllTotalStakedPAssetRequestSDKType {
  account: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllTotalStakedPAssetResponse {
  totalStakedPAsset: TotalStakedPAsset[];
  pagination?: PageResponse;
}
export interface QueryAllTotalStakedPAssetResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryAllTotalStakedPAssetResponse";
  value: Uint8Array;
}
export interface QueryAllTotalStakedPAssetResponseAmino {
  total_staked_p_asset?: TotalStakedPAssetAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTotalStakedPAssetResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryAllTotalStakedPAssetResponse";
  value: QueryAllTotalStakedPAssetResponseAmino;
}
export interface QueryAllTotalStakedPAssetResponseSDKType {
  total_staked_p_asset: TotalStakedPAssetSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetTotalStakedPAssetRequest {
  account: string;
  asset: string;
}
export interface QueryGetTotalStakedPAssetRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryGetTotalStakedPAssetRequest";
  value: Uint8Array;
}
export interface QueryGetTotalStakedPAssetRequestAmino {
  account?: string;
  asset?: string;
}
export interface QueryGetTotalStakedPAssetRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryGetTotalStakedPAssetRequest";
  value: QueryGetTotalStakedPAssetRequestAmino;
}
export interface QueryGetTotalStakedPAssetRequestSDKType {
  account: string;
  asset: string;
}
export interface QueryGetTotalStakedPAssetResponse {
  totalStakedPAsset: TotalStakedPAsset;
}
export interface QueryGetTotalStakedPAssetResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryGetTotalStakedPAssetResponse";
  value: Uint8Array;
}
export interface QueryGetTotalStakedPAssetResponseAmino {
  total_staked_p_asset?: TotalStakedPAssetAmino;
}
export interface QueryGetTotalStakedPAssetResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryGetTotalStakedPAssetResponse";
  value: QueryGetTotalStakedPAssetResponseAmino;
}
export interface QueryGetTotalStakedPAssetResponseSDKType {
  total_staked_p_asset: TotalStakedPAssetSDKType;
}
export interface QueryGetVoteRequest {
  asset: string;
  proposal: bigint;
  voter: string;
}
export interface QueryGetVoteRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryGetVoteRequest";
  value: Uint8Array;
}
export interface QueryGetVoteRequestAmino {
  asset?: string;
  proposal?: string;
  voter?: string;
}
export interface QueryGetVoteRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryGetVoteRequest";
  value: QueryGetVoteRequestAmino;
}
export interface QueryGetVoteRequestSDKType {
  asset: string;
  proposal: bigint;
  voter: string;
}
export interface QueryGetVoteResponse {
  vote: Vote;
}
export interface QueryGetVoteResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryGetVoteResponse";
  value: Uint8Array;
}
export interface QueryGetVoteResponseAmino {
  vote?: VoteAmino;
}
export interface QueryGetVoteResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryGetVoteResponse";
  value: QueryGetVoteResponseAmino;
}
export interface QueryGetVoteResponseSDKType {
  vote: VoteSDKType;
}
export interface QueryAllVoteRequest {
  pagination?: PageRequest;
}
export interface QueryAllVoteRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryAllVoteRequest";
  value: Uint8Array;
}
export interface QueryAllVoteRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllVoteRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryAllVoteRequest";
  value: QueryAllVoteRequestAmino;
}
export interface QueryAllVoteRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllVoteResponse {
  vote: Vote[];
  pagination?: PageResponse;
}
export interface QueryAllVoteResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryAllVoteResponse";
  value: Uint8Array;
}
export interface QueryAllVoteResponseAmino {
  vote?: VoteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllVoteResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryAllVoteResponse";
  value: QueryAllVoteResponseAmino;
}
export interface QueryAllVoteResponseSDKType {
  vote: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetProposalRequest {
  asset: string;
  proposalId: bigint;
}
export interface QueryGetProposalRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryGetProposalRequest";
  value: Uint8Array;
}
export interface QueryGetProposalRequestAmino {
  asset?: string;
  proposal_id?: string;
}
export interface QueryGetProposalRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryGetProposalRequest";
  value: QueryGetProposalRequestAmino;
}
export interface QueryGetProposalRequestSDKType {
  asset: string;
  proposal_id: bigint;
}
export interface QueryGetProposalResponse {
  proposal: Proposal;
}
export interface QueryGetProposalResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryGetProposalResponse";
  value: Uint8Array;
}
export interface QueryGetProposalResponseAmino {
  proposal?: ProposalAmino;
}
export interface QueryGetProposalResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryGetProposalResponse";
  value: QueryGetProposalResponseAmino;
}
export interface QueryGetProposalResponseSDKType {
  proposal: ProposalSDKType;
}
export interface QueryAllProposalRequest {
  asset: string;
  pagination?: PageRequest;
}
export interface QueryAllProposalRequestProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryAllProposalRequest";
  value: Uint8Array;
}
export interface QueryAllProposalRequestAmino {
  asset?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllProposalRequestAminoMsg {
  type: "/pryzm.pgov.v1.QueryAllProposalRequest";
  value: QueryAllProposalRequestAmino;
}
export interface QueryAllProposalRequestSDKType {
  asset: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllProposalResponse {
  proposal: Proposal[];
  pagination?: PageResponse;
}
export interface QueryAllProposalResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.QueryAllProposalResponse";
  value: Uint8Array;
}
export interface QueryAllProposalResponseAmino {
  proposal?: ProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllProposalResponseAminoMsg {
  type: "/pryzm.pgov.v1.QueryAllProposalResponse";
  value: QueryAllProposalResponseAmino;
}
export interface QueryAllProposalResponseSDKType {
  proposal: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakedPAssetRequest(): QueryGetStakedPAssetRequest {
  return {
    account: "",
    pAsset: ""
  };
}
export const QueryGetStakedPAssetRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryGetStakedPAssetRequest",
  encode(message: QueryGetStakedPAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pAsset !== "") {
      writer.uint32(18).string(message.pAsset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakedPAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakedPAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.pAsset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetStakedPAssetRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pAsset: isSet(object.pAsset) ? String(object.pAsset) : ""
    };
  },
  toJSON(message: QueryGetStakedPAssetRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pAsset !== undefined && (obj.pAsset = message.pAsset);
    return obj;
  },
  fromPartial(object: Partial<QueryGetStakedPAssetRequest>): QueryGetStakedPAssetRequest {
    const message = createBaseQueryGetStakedPAssetRequest();
    message.account = object.account ?? "";
    message.pAsset = object.pAsset ?? "";
    return message;
  },
  fromAmino(object: QueryGetStakedPAssetRequestAmino): QueryGetStakedPAssetRequest {
    const message = createBaseQueryGetStakedPAssetRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.p_asset !== undefined && object.p_asset !== null) {
      message.pAsset = object.p_asset;
    }
    return message;
  },
  toAmino(message: QueryGetStakedPAssetRequest): QueryGetStakedPAssetRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.p_asset = message.pAsset;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakedPAssetRequestAminoMsg): QueryGetStakedPAssetRequest {
    return QueryGetStakedPAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakedPAssetRequestProtoMsg): QueryGetStakedPAssetRequest {
    return QueryGetStakedPAssetRequest.decode(message.value);
  },
  toProto(message: QueryGetStakedPAssetRequest): Uint8Array {
    return QueryGetStakedPAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakedPAssetRequest): QueryGetStakedPAssetRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryGetStakedPAssetRequest",
      value: QueryGetStakedPAssetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakedPAssetResponse(): QueryGetStakedPAssetResponse {
  return {
    stakedPAsset: StakedPAsset.fromPartial({})
  };
}
export const QueryGetStakedPAssetResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryGetStakedPAssetResponse",
  encode(message: QueryGetStakedPAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakedPAsset !== undefined) {
      StakedPAsset.encode(message.stakedPAsset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakedPAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakedPAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakedPAsset = StakedPAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetStakedPAssetResponse {
    return {
      stakedPAsset: isSet(object.stakedPAsset) ? StakedPAsset.fromJSON(object.stakedPAsset) : undefined
    };
  },
  toJSON(message: QueryGetStakedPAssetResponse): unknown {
    const obj: any = {};
    message.stakedPAsset !== undefined && (obj.stakedPAsset = message.stakedPAsset ? StakedPAsset.toJSON(message.stakedPAsset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetStakedPAssetResponse>): QueryGetStakedPAssetResponse {
    const message = createBaseQueryGetStakedPAssetResponse();
    message.stakedPAsset = object.stakedPAsset !== undefined && object.stakedPAsset !== null ? StakedPAsset.fromPartial(object.stakedPAsset) : undefined;
    return message;
  },
  fromAmino(object: QueryGetStakedPAssetResponseAmino): QueryGetStakedPAssetResponse {
    const message = createBaseQueryGetStakedPAssetResponse();
    if (object.staked_p_asset !== undefined && object.staked_p_asset !== null) {
      message.stakedPAsset = StakedPAsset.fromAmino(object.staked_p_asset);
    }
    return message;
  },
  toAmino(message: QueryGetStakedPAssetResponse): QueryGetStakedPAssetResponseAmino {
    const obj: any = {};
    obj.staked_p_asset = message.stakedPAsset ? StakedPAsset.toAmino(message.stakedPAsset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakedPAssetResponseAminoMsg): QueryGetStakedPAssetResponse {
    return QueryGetStakedPAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakedPAssetResponseProtoMsg): QueryGetStakedPAssetResponse {
    return QueryGetStakedPAssetResponse.decode(message.value);
  },
  toProto(message: QueryGetStakedPAssetResponse): Uint8Array {
    return QueryGetStakedPAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakedPAssetResponse): QueryGetStakedPAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryGetStakedPAssetResponse",
      value: QueryGetStakedPAssetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakedPAssetRequest(): QueryAllStakedPAssetRequest {
  return {
    account: "",
    pagination: undefined
  };
}
export const QueryAllStakedPAssetRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryAllStakedPAssetRequest",
  encode(message: QueryAllStakedPAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakedPAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakedPAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllStakedPAssetRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStakedPAssetRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStakedPAssetRequest>): QueryAllStakedPAssetRequest {
    const message = createBaseQueryAllStakedPAssetRequest();
    message.account = object.account ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakedPAssetRequestAmino): QueryAllStakedPAssetRequest {
    const message = createBaseQueryAllStakedPAssetRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakedPAssetRequest): QueryAllStakedPAssetRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakedPAssetRequestAminoMsg): QueryAllStakedPAssetRequest {
    return QueryAllStakedPAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakedPAssetRequestProtoMsg): QueryAllStakedPAssetRequest {
    return QueryAllStakedPAssetRequest.decode(message.value);
  },
  toProto(message: QueryAllStakedPAssetRequest): Uint8Array {
    return QueryAllStakedPAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakedPAssetRequest): QueryAllStakedPAssetRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryAllStakedPAssetRequest",
      value: QueryAllStakedPAssetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakedPAssetResponse(): QueryAllStakedPAssetResponse {
  return {
    stakedPAsset: [],
    pagination: undefined
  };
}
export const QueryAllStakedPAssetResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryAllStakedPAssetResponse",
  encode(message: QueryAllStakedPAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakedPAsset) {
      StakedPAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakedPAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakedPAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakedPAsset.push(StakedPAsset.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllStakedPAssetResponse {
    return {
      stakedPAsset: Array.isArray(object?.stakedPAsset) ? object.stakedPAsset.map((e: any) => StakedPAsset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStakedPAssetResponse): unknown {
    const obj: any = {};
    if (message.stakedPAsset) {
      obj.stakedPAsset = message.stakedPAsset.map(e => e ? StakedPAsset.toJSON(e) : undefined);
    } else {
      obj.stakedPAsset = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStakedPAssetResponse>): QueryAllStakedPAssetResponse {
    const message = createBaseQueryAllStakedPAssetResponse();
    message.stakedPAsset = object.stakedPAsset?.map(e => StakedPAsset.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakedPAssetResponseAmino): QueryAllStakedPAssetResponse {
    const message = createBaseQueryAllStakedPAssetResponse();
    message.stakedPAsset = object.staked_p_asset?.map(e => StakedPAsset.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakedPAssetResponse): QueryAllStakedPAssetResponseAmino {
    const obj: any = {};
    if (message.stakedPAsset) {
      obj.staked_p_asset = message.stakedPAsset.map(e => e ? StakedPAsset.toAmino(e) : undefined);
    } else {
      obj.staked_p_asset = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakedPAssetResponseAminoMsg): QueryAllStakedPAssetResponse {
    return QueryAllStakedPAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakedPAssetResponseProtoMsg): QueryAllStakedPAssetResponse {
    return QueryAllStakedPAssetResponse.decode(message.value);
  },
  toProto(message: QueryAllStakedPAssetResponse): Uint8Array {
    return QueryAllStakedPAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakedPAssetResponse): QueryAllStakedPAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryAllStakedPAssetResponse",
      value: QueryAllStakedPAssetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTotalStakedPAssetRequest(): QueryAllTotalStakedPAssetRequest {
  return {
    account: "",
    pagination: undefined
  };
}
export const QueryAllTotalStakedPAssetRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryAllTotalStakedPAssetRequest",
  encode(message: QueryAllTotalStakedPAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTotalStakedPAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTotalStakedPAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllTotalStakedPAssetRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllTotalStakedPAssetRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllTotalStakedPAssetRequest>): QueryAllTotalStakedPAssetRequest {
    const message = createBaseQueryAllTotalStakedPAssetRequest();
    message.account = object.account ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTotalStakedPAssetRequestAmino): QueryAllTotalStakedPAssetRequest {
    const message = createBaseQueryAllTotalStakedPAssetRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTotalStakedPAssetRequest): QueryAllTotalStakedPAssetRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTotalStakedPAssetRequestAminoMsg): QueryAllTotalStakedPAssetRequest {
    return QueryAllTotalStakedPAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTotalStakedPAssetRequestProtoMsg): QueryAllTotalStakedPAssetRequest {
    return QueryAllTotalStakedPAssetRequest.decode(message.value);
  },
  toProto(message: QueryAllTotalStakedPAssetRequest): Uint8Array {
    return QueryAllTotalStakedPAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTotalStakedPAssetRequest): QueryAllTotalStakedPAssetRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryAllTotalStakedPAssetRequest",
      value: QueryAllTotalStakedPAssetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTotalStakedPAssetResponse(): QueryAllTotalStakedPAssetResponse {
  return {
    totalStakedPAsset: [],
    pagination: undefined
  };
}
export const QueryAllTotalStakedPAssetResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryAllTotalStakedPAssetResponse",
  encode(message: QueryAllTotalStakedPAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalStakedPAsset) {
      TotalStakedPAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTotalStakedPAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTotalStakedPAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalStakedPAsset.push(TotalStakedPAsset.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllTotalStakedPAssetResponse {
    return {
      totalStakedPAsset: Array.isArray(object?.totalStakedPAsset) ? object.totalStakedPAsset.map((e: any) => TotalStakedPAsset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllTotalStakedPAssetResponse): unknown {
    const obj: any = {};
    if (message.totalStakedPAsset) {
      obj.totalStakedPAsset = message.totalStakedPAsset.map(e => e ? TotalStakedPAsset.toJSON(e) : undefined);
    } else {
      obj.totalStakedPAsset = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllTotalStakedPAssetResponse>): QueryAllTotalStakedPAssetResponse {
    const message = createBaseQueryAllTotalStakedPAssetResponse();
    message.totalStakedPAsset = object.totalStakedPAsset?.map(e => TotalStakedPAsset.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTotalStakedPAssetResponseAmino): QueryAllTotalStakedPAssetResponse {
    const message = createBaseQueryAllTotalStakedPAssetResponse();
    message.totalStakedPAsset = object.total_staked_p_asset?.map(e => TotalStakedPAsset.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTotalStakedPAssetResponse): QueryAllTotalStakedPAssetResponseAmino {
    const obj: any = {};
    if (message.totalStakedPAsset) {
      obj.total_staked_p_asset = message.totalStakedPAsset.map(e => e ? TotalStakedPAsset.toAmino(e) : undefined);
    } else {
      obj.total_staked_p_asset = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTotalStakedPAssetResponseAminoMsg): QueryAllTotalStakedPAssetResponse {
    return QueryAllTotalStakedPAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTotalStakedPAssetResponseProtoMsg): QueryAllTotalStakedPAssetResponse {
    return QueryAllTotalStakedPAssetResponse.decode(message.value);
  },
  toProto(message: QueryAllTotalStakedPAssetResponse): Uint8Array {
    return QueryAllTotalStakedPAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTotalStakedPAssetResponse): QueryAllTotalStakedPAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryAllTotalStakedPAssetResponse",
      value: QueryAllTotalStakedPAssetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTotalStakedPAssetRequest(): QueryGetTotalStakedPAssetRequest {
  return {
    account: "",
    asset: ""
  };
}
export const QueryGetTotalStakedPAssetRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryGetTotalStakedPAssetRequest",
  encode(message: QueryGetTotalStakedPAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTotalStakedPAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTotalStakedPAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetTotalStakedPAssetRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  toJSON(message: QueryGetTotalStakedPAssetRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial(object: Partial<QueryGetTotalStakedPAssetRequest>): QueryGetTotalStakedPAssetRequest {
    const message = createBaseQueryGetTotalStakedPAssetRequest();
    message.account = object.account ?? "";
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: QueryGetTotalStakedPAssetRequestAmino): QueryGetTotalStakedPAssetRequest {
    const message = createBaseQueryGetTotalStakedPAssetRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: QueryGetTotalStakedPAssetRequest): QueryGetTotalStakedPAssetRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: QueryGetTotalStakedPAssetRequestAminoMsg): QueryGetTotalStakedPAssetRequest {
    return QueryGetTotalStakedPAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTotalStakedPAssetRequestProtoMsg): QueryGetTotalStakedPAssetRequest {
    return QueryGetTotalStakedPAssetRequest.decode(message.value);
  },
  toProto(message: QueryGetTotalStakedPAssetRequest): Uint8Array {
    return QueryGetTotalStakedPAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTotalStakedPAssetRequest): QueryGetTotalStakedPAssetRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryGetTotalStakedPAssetRequest",
      value: QueryGetTotalStakedPAssetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTotalStakedPAssetResponse(): QueryGetTotalStakedPAssetResponse {
  return {
    totalStakedPAsset: TotalStakedPAsset.fromPartial({})
  };
}
export const QueryGetTotalStakedPAssetResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryGetTotalStakedPAssetResponse",
  encode(message: QueryGetTotalStakedPAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalStakedPAsset !== undefined) {
      TotalStakedPAsset.encode(message.totalStakedPAsset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTotalStakedPAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTotalStakedPAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalStakedPAsset = TotalStakedPAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetTotalStakedPAssetResponse {
    return {
      totalStakedPAsset: isSet(object.totalStakedPAsset) ? TotalStakedPAsset.fromJSON(object.totalStakedPAsset) : undefined
    };
  },
  toJSON(message: QueryGetTotalStakedPAssetResponse): unknown {
    const obj: any = {};
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset ? TotalStakedPAsset.toJSON(message.totalStakedPAsset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetTotalStakedPAssetResponse>): QueryGetTotalStakedPAssetResponse {
    const message = createBaseQueryGetTotalStakedPAssetResponse();
    message.totalStakedPAsset = object.totalStakedPAsset !== undefined && object.totalStakedPAsset !== null ? TotalStakedPAsset.fromPartial(object.totalStakedPAsset) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTotalStakedPAssetResponseAmino): QueryGetTotalStakedPAssetResponse {
    const message = createBaseQueryGetTotalStakedPAssetResponse();
    if (object.total_staked_p_asset !== undefined && object.total_staked_p_asset !== null) {
      message.totalStakedPAsset = TotalStakedPAsset.fromAmino(object.total_staked_p_asset);
    }
    return message;
  },
  toAmino(message: QueryGetTotalStakedPAssetResponse): QueryGetTotalStakedPAssetResponseAmino {
    const obj: any = {};
    obj.total_staked_p_asset = message.totalStakedPAsset ? TotalStakedPAsset.toAmino(message.totalStakedPAsset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTotalStakedPAssetResponseAminoMsg): QueryGetTotalStakedPAssetResponse {
    return QueryGetTotalStakedPAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTotalStakedPAssetResponseProtoMsg): QueryGetTotalStakedPAssetResponse {
    return QueryGetTotalStakedPAssetResponse.decode(message.value);
  },
  toProto(message: QueryGetTotalStakedPAssetResponse): Uint8Array {
    return QueryGetTotalStakedPAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTotalStakedPAssetResponse): QueryGetTotalStakedPAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryGetTotalStakedPAssetResponse",
      value: QueryGetTotalStakedPAssetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetVoteRequest(): QueryGetVoteRequest {
  return {
    asset: "",
    proposal: BigInt(0),
    voter: ""
  };
}
export const QueryGetVoteRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryGetVoteRequest",
  encode(message: QueryGetVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.proposal !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposal);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.proposal = reader.uint64();
          break;
        case 3:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetVoteRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposal: isSet(object.proposal) ? BigInt(object.proposal.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON(message: QueryGetVoteRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = (message.proposal || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object: Partial<QueryGetVoteRequest>): QueryGetVoteRequest {
    const message = createBaseQueryGetVoteRequest();
    message.asset = object.asset ?? "";
    message.proposal = object.proposal !== undefined && object.proposal !== null ? BigInt(object.proposal.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryGetVoteRequestAmino): QueryGetVoteRequest {
    const message = createBaseQueryGetVoteRequest();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = BigInt(object.proposal);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryGetVoteRequest): QueryGetVoteRequestAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.proposal = message.proposal ? message.proposal.toString() : undefined;
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryGetVoteRequestAminoMsg): QueryGetVoteRequest {
    return QueryGetVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVoteRequestProtoMsg): QueryGetVoteRequest {
    return QueryGetVoteRequest.decode(message.value);
  },
  toProto(message: QueryGetVoteRequest): Uint8Array {
    return QueryGetVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVoteRequest): QueryGetVoteRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryGetVoteRequest",
      value: QueryGetVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetVoteResponse(): QueryGetVoteResponse {
  return {
    vote: Vote.fromPartial({})
  };
}
export const QueryGetVoteResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryGetVoteResponse",
  encode(message: QueryGetVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON(message: QueryGetVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetVoteResponse>): QueryGetVoteResponse {
    const message = createBaseQueryGetVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object: QueryGetVoteResponseAmino): QueryGetVoteResponse {
    const message = createBaseQueryGetVoteResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: QueryGetVoteResponse): QueryGetVoteResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVoteResponseAminoMsg): QueryGetVoteResponse {
    return QueryGetVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVoteResponseProtoMsg): QueryGetVoteResponse {
    return QueryGetVoteResponse.decode(message.value);
  },
  toProto(message: QueryGetVoteResponse): Uint8Array {
    return QueryGetVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVoteResponse): QueryGetVoteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryGetVoteResponse",
      value: QueryGetVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllVoteRequest(): QueryAllVoteRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllVoteRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryAllVoteRequest",
  encode(message: QueryAllVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllVoteRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllVoteRequest>): QueryAllVoteRequest {
    const message = createBaseQueryAllVoteRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVoteRequestAmino): QueryAllVoteRequest {
    const message = createBaseQueryAllVoteRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVoteRequest): QueryAllVoteRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVoteRequestAminoMsg): QueryAllVoteRequest {
    return QueryAllVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVoteRequestProtoMsg): QueryAllVoteRequest {
    return QueryAllVoteRequest.decode(message.value);
  },
  toProto(message: QueryAllVoteRequest): Uint8Array {
    return QueryAllVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVoteRequest): QueryAllVoteRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryAllVoteRequest",
      value: QueryAllVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllVoteResponse(): QueryAllVoteResponse {
  return {
    vote: [],
    pagination: undefined
  };
}
export const QueryAllVoteResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryAllVoteResponse",
  encode(message: QueryAllVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vote) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote.push(Vote.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllVoteResponse {
    return {
      vote: Array.isArray(object?.vote) ? object.vote.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllVoteResponse): unknown {
    const obj: any = {};
    if (message.vote) {
      obj.vote = message.vote.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.vote = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllVoteResponse>): QueryAllVoteResponse {
    const message = createBaseQueryAllVoteResponse();
    message.vote = object.vote?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVoteResponseAmino): QueryAllVoteResponse {
    const message = createBaseQueryAllVoteResponse();
    message.vote = object.vote?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVoteResponse): QueryAllVoteResponseAmino {
    const obj: any = {};
    if (message.vote) {
      obj.vote = message.vote.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.vote = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVoteResponseAminoMsg): QueryAllVoteResponse {
    return QueryAllVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVoteResponseProtoMsg): QueryAllVoteResponse {
    return QueryAllVoteResponse.decode(message.value);
  },
  toProto(message: QueryAllVoteResponse): Uint8Array {
    return QueryAllVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVoteResponse): QueryAllVoteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryAllVoteResponse",
      value: QueryAllVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProposalRequest(): QueryGetProposalRequest {
  return {
    asset: "",
    proposalId: BigInt(0)
  };
}
export const QueryGetProposalRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryGetProposalRequest",
  encode(message: QueryGetProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProposalRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetProposalRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetProposalRequest>): QueryGetProposalRequest {
    const message = createBaseQueryGetProposalRequest();
    message.asset = object.asset ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetProposalRequestAmino): QueryGetProposalRequest {
    const message = createBaseQueryGetProposalRequest();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryGetProposalRequest): QueryGetProposalRequestAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProposalRequestAminoMsg): QueryGetProposalRequest {
    return QueryGetProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProposalRequestProtoMsg): QueryGetProposalRequest {
    return QueryGetProposalRequest.decode(message.value);
  },
  toProto(message: QueryGetProposalRequest): Uint8Array {
    return QueryGetProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProposalRequest): QueryGetProposalRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryGetProposalRequest",
      value: QueryGetProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProposalResponse(): QueryGetProposalResponse {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const QueryGetProposalResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryGetProposalResponse",
  encode(message: QueryGetProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: QueryGetProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProposalResponse>): QueryGetProposalResponse {
    const message = createBaseQueryGetProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProposalResponseAmino): QueryGetProposalResponse {
    const message = createBaseQueryGetProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryGetProposalResponse): QueryGetProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProposalResponseAminoMsg): QueryGetProposalResponse {
    return QueryGetProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProposalResponseProtoMsg): QueryGetProposalResponse {
    return QueryGetProposalResponse.decode(message.value);
  },
  toProto(message: QueryGetProposalResponse): Uint8Array {
    return QueryGetProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProposalResponse): QueryGetProposalResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryGetProposalResponse",
      value: QueryGetProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllProposalRequest(): QueryAllProposalRequest {
  return {
    asset: "",
    pagination: undefined
  };
}
export const QueryAllProposalRequest = {
  typeUrl: "/pryzm.pgov.v1.QueryAllProposalRequest",
  encode(message: QueryAllProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllProposalRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllProposalRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllProposalRequest>): QueryAllProposalRequest {
    const message = createBaseQueryAllProposalRequest();
    message.asset = object.asset ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllProposalRequestAmino): QueryAllProposalRequest {
    const message = createBaseQueryAllProposalRequest();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllProposalRequest): QueryAllProposalRequestAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProposalRequestAminoMsg): QueryAllProposalRequest {
    return QueryAllProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllProposalRequestProtoMsg): QueryAllProposalRequest {
    return QueryAllProposalRequest.decode(message.value);
  },
  toProto(message: QueryAllProposalRequest): Uint8Array {
    return QueryAllProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProposalRequest): QueryAllProposalRequestProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryAllProposalRequest",
      value: QueryAllProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllProposalResponse(): QueryAllProposalResponse {
  return {
    proposal: [],
    pagination: undefined
  };
}
export const QueryAllProposalResponse = {
  typeUrl: "/pryzm.pgov.v1.QueryAllProposalResponse",
  encode(message: QueryAllProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposal) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal.push(Proposal.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllProposalResponse {
    return {
      proposal: Array.isArray(object?.proposal) ? object.proposal.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllProposalResponse): unknown {
    const obj: any = {};
    if (message.proposal) {
      obj.proposal = message.proposal.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposal = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllProposalResponse>): QueryAllProposalResponse {
    const message = createBaseQueryAllProposalResponse();
    message.proposal = object.proposal?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllProposalResponseAmino): QueryAllProposalResponse {
    const message = createBaseQueryAllProposalResponse();
    message.proposal = object.proposal?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllProposalResponse): QueryAllProposalResponseAmino {
    const obj: any = {};
    if (message.proposal) {
      obj.proposal = message.proposal.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposal = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProposalResponseAminoMsg): QueryAllProposalResponse {
    return QueryAllProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllProposalResponseProtoMsg): QueryAllProposalResponse {
    return QueryAllProposalResponse.decode(message.value);
  },
  toProto(message: QueryAllProposalResponse): Uint8Array {
    return QueryAllProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProposalResponse): QueryAllProposalResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.QueryAllProposalResponse",
      value: QueryAllProposalResponse.encode(message).finish()
    };
  }
};