import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakedPAsset, StakedPAssetSDKType } from "./staked_p_asset";
import { Vote, VoteSDKType } from "./vote";
import { Proposal, ProposalSDKType } from "./proposal";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetStakedPAssetRequest {
  account: string;
  pAsset: string;
}
export interface QueryGetStakedPAssetRequestSDKType {
  account: string;
  p_asset: string;
}
export interface QueryGetStakedPAssetResponse {
  stakedPAsset: StakedPAsset;
}
export interface QueryGetStakedPAssetResponseSDKType {
  staked_p_asset: StakedPAssetSDKType;
}
export interface QueryAllStakedPAssetRequest {
  pagination?: PageRequest;
}
export interface QueryAllStakedPAssetRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStakedPAssetResponse {
  stakedPAsset: StakedPAsset[];
  pagination?: PageResponse;
}
export interface QueryAllStakedPAssetResponseSDKType {
  staked_p_asset: StakedPAssetSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetTotalStakedPAssetRequest {
  account: string;
  asset: string;
}
export interface QueryGetTotalStakedPAssetRequestSDKType {
  account: string;
  asset: string;
}
export interface QueryGetTotalStakedPAssetResponse {
  totalStakedPAsset: string;
}
export interface QueryGetTotalStakedPAssetResponseSDKType {
  total_staked_p_asset: string;
}
export interface QueryGetVoteRequest {
  asset: string;
  proposal: bigint;
  voter: string;
}
export interface QueryGetVoteRequestSDKType {
  asset: string;
  proposal: bigint;
  voter: string;
}
export interface QueryGetVoteResponse {
  vote: Vote;
}
export interface QueryGetVoteResponseSDKType {
  vote: VoteSDKType;
}
export interface QueryAllVoteRequest {
  pagination?: PageRequest;
}
export interface QueryAllVoteRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllVoteResponse {
  vote: Vote[];
  pagination?: PageResponse;
}
export interface QueryAllVoteResponseSDKType {
  vote: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetProposalRequest {
  asset: string;
  proposalId: bigint;
}
export interface QueryGetProposalRequestSDKType {
  asset: string;
  proposal_id: bigint;
}
export interface QueryGetProposalResponse {
  proposal: Proposal;
}
export interface QueryGetProposalResponseSDKType {
  proposal: ProposalSDKType;
}
export interface QueryAllProposalRequest {
  asset: string;
  pagination?: PageRequest;
}
export interface QueryAllProposalRequestSDKType {
  asset: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllProposalResponse {
  proposal: Proposal[];
  pagination?: PageResponse;
}
export interface QueryAllProposalResponseSDKType {
  proposal: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
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
  }
};
function createBaseQueryGetStakedPAssetRequest(): QueryGetStakedPAssetRequest {
  return {
    account: "",
    pAsset: ""
  };
}
export const QueryGetStakedPAssetRequest = {
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
  }
};
function createBaseQueryGetStakedPAssetResponse(): QueryGetStakedPAssetResponse {
  return {
    stakedPAsset: StakedPAsset.fromPartial({})
  };
}
export const QueryGetStakedPAssetResponse = {
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
  }
};
function createBaseQueryAllStakedPAssetRequest(): QueryAllStakedPAssetRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllStakedPAssetRequest = {
  encode(message: QueryAllStakedPAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStakedPAssetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStakedPAssetRequest>): QueryAllStakedPAssetRequest {
    const message = createBaseQueryAllStakedPAssetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllStakedPAssetResponse(): QueryAllStakedPAssetResponse {
  return {
    stakedPAsset: [],
    pagination: undefined
  };
}
export const QueryAllStakedPAssetResponse = {
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
  }
};
function createBaseQueryGetTotalStakedPAssetRequest(): QueryGetTotalStakedPAssetRequest {
  return {
    account: "",
    asset: ""
  };
}
export const QueryGetTotalStakedPAssetRequest = {
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
  }
};
function createBaseQueryGetTotalStakedPAssetResponse(): QueryGetTotalStakedPAssetResponse {
  return {
    totalStakedPAsset: ""
  };
}
export const QueryGetTotalStakedPAssetResponse = {
  encode(message: QueryGetTotalStakedPAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalStakedPAsset !== "") {
      writer.uint32(10).string(message.totalStakedPAsset);
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
          message.totalStakedPAsset = reader.string();
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
      totalStakedPAsset: isSet(object.totalStakedPAsset) ? String(object.totalStakedPAsset) : ""
    };
  },
  toJSON(message: QueryGetTotalStakedPAssetResponse): unknown {
    const obj: any = {};
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset);
    return obj;
  },
  fromPartial(object: Partial<QueryGetTotalStakedPAssetResponse>): QueryGetTotalStakedPAssetResponse {
    const message = createBaseQueryGetTotalStakedPAssetResponse();
    message.totalStakedPAsset = object.totalStakedPAsset ?? "";
    return message;
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
  }
};
function createBaseQueryGetVoteResponse(): QueryGetVoteResponse {
  return {
    vote: Vote.fromPartial({})
  };
}
export const QueryGetVoteResponse = {
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
  }
};
function createBaseQueryAllVoteRequest(): QueryAllVoteRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllVoteRequest = {
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
  }
};
function createBaseQueryAllVoteResponse(): QueryAllVoteResponse {
  return {
    vote: [],
    pagination: undefined
  };
}
export const QueryAllVoteResponse = {
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
  }
};
function createBaseQueryGetProposalRequest(): QueryGetProposalRequest {
  return {
    asset: "",
    proposalId: BigInt(0)
  };
}
export const QueryGetProposalRequest = {
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
  }
};
function createBaseQueryGetProposalResponse(): QueryGetProposalResponse {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const QueryGetProposalResponse = {
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
  }
};
function createBaseQueryAllProposalRequest(): QueryAllProposalRequest {
  return {
    asset: "",
    pagination: undefined
  };
}
export const QueryAllProposalRequest = {
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
  }
};
function createBaseQueryAllProposalResponse(): QueryAllProposalResponse {
  return {
    proposal: [],
    pagination: undefined
  };
}
export const QueryAllProposalResponse = {
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
  }
};