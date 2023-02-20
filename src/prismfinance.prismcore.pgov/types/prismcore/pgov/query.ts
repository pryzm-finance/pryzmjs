/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Proposal } from "./proposal";
import { StakedPAsset } from "./staked_p_asset";
import { Vote } from "./vote";

export const protobufPackage = "prismfinance.prismcore.pgov";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetStakedPAssetRequest {
  account: string;
  pAsset: string;
}

export interface QueryGetStakedPAssetResponse {
  stakedPAsset: StakedPAsset | undefined;
}

export interface QueryAllStakedPAssetRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStakedPAssetResponse {
  stakedPAsset: StakedPAsset[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTotalStakedPAssetRequest {
  account: string;
  asset: string;
}

export interface QueryGetTotalStakedPAssetResponse {
  totalStakedPAsset: string;
}

export interface QueryGetVoteRequest {
  asset: string;
  proposal: number;
  voter: string;
}

export interface QueryGetVoteResponse {
  vote: Vote | undefined;
}

export interface QueryAllVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVoteResponse {
  vote: Vote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProposalRequest {
  asset: string;
  proposalId: number;
}

export interface QueryGetProposalResponse {
  proposal: Proposal | undefined;
}

export interface QueryAllProposalRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProposalResponse {
  proposal: Proposal[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStakedPAssetRequest(): QueryGetStakedPAssetRequest {
  return { account: "", pAsset: "" };
}

export const QueryGetStakedPAssetRequest = {
  encode(message: QueryGetStakedPAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pAsset !== "") {
      writer.uint32(18).string(message.pAsset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakedPAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      pAsset: isSet(object.pAsset) ? String(object.pAsset) : "",
    };
  },

  toJSON(message: QueryGetStakedPAssetRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pAsset !== undefined && (obj.pAsset = message.pAsset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStakedPAssetRequest>, I>>(object: I): QueryGetStakedPAssetRequest {
    const message = createBaseQueryGetStakedPAssetRequest();
    message.account = object.account ?? "";
    message.pAsset = object.pAsset ?? "";
    return message;
  },
};

function createBaseQueryGetStakedPAssetResponse(): QueryGetStakedPAssetResponse {
  return { stakedPAsset: undefined };
}

export const QueryGetStakedPAssetResponse = {
  encode(message: QueryGetStakedPAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakedPAsset !== undefined) {
      StakedPAsset.encode(message.stakedPAsset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakedPAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { stakedPAsset: isSet(object.stakedPAsset) ? StakedPAsset.fromJSON(object.stakedPAsset) : undefined };
  },

  toJSON(message: QueryGetStakedPAssetResponse): unknown {
    const obj: any = {};
    message.stakedPAsset !== undefined
      && (obj.stakedPAsset = message.stakedPAsset ? StakedPAsset.toJSON(message.stakedPAsset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStakedPAssetResponse>, I>>(object: I): QueryGetStakedPAssetResponse {
    const message = createBaseQueryGetStakedPAssetResponse();
    message.stakedPAsset = (object.stakedPAsset !== undefined && object.stakedPAsset !== null)
      ? StakedPAsset.fromPartial(object.stakedPAsset)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStakedPAssetRequest(): QueryAllStakedPAssetRequest {
  return { pagination: undefined };
}

export const QueryAllStakedPAssetRequest = {
  encode(message: QueryAllStakedPAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakedPAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStakedPAssetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStakedPAssetRequest>, I>>(object: I): QueryAllStakedPAssetRequest {
    const message = createBaseQueryAllStakedPAssetRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStakedPAssetResponse(): QueryAllStakedPAssetResponse {
  return { stakedPAsset: [], pagination: undefined };
}

export const QueryAllStakedPAssetResponse = {
  encode(message: QueryAllStakedPAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakedPAsset) {
      StakedPAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakedPAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      stakedPAsset: Array.isArray(object?.stakedPAsset)
        ? object.stakedPAsset.map((e: any) => StakedPAsset.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStakedPAssetResponse): unknown {
    const obj: any = {};
    if (message.stakedPAsset) {
      obj.stakedPAsset = message.stakedPAsset.map((e) => e ? StakedPAsset.toJSON(e) : undefined);
    } else {
      obj.stakedPAsset = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStakedPAssetResponse>, I>>(object: I): QueryAllStakedPAssetResponse {
    const message = createBaseQueryAllStakedPAssetResponse();
    message.stakedPAsset = object.stakedPAsset?.map((e) => StakedPAsset.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTotalStakedPAssetRequest(): QueryGetTotalStakedPAssetRequest {
  return { account: "", asset: "" };
}

export const QueryGetTotalStakedPAssetRequest = {
  encode(message: QueryGetTotalStakedPAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTotalStakedPAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: QueryGetTotalStakedPAssetRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTotalStakedPAssetRequest>, I>>(
    object: I,
  ): QueryGetTotalStakedPAssetRequest {
    const message = createBaseQueryGetTotalStakedPAssetRequest();
    message.account = object.account ?? "";
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseQueryGetTotalStakedPAssetResponse(): QueryGetTotalStakedPAssetResponse {
  return { totalStakedPAsset: "" };
}

export const QueryGetTotalStakedPAssetResponse = {
  encode(message: QueryGetTotalStakedPAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalStakedPAsset !== "") {
      writer.uint32(10).string(message.totalStakedPAsset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTotalStakedPAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { totalStakedPAsset: isSet(object.totalStakedPAsset) ? String(object.totalStakedPAsset) : "" };
  },

  toJSON(message: QueryGetTotalStakedPAssetResponse): unknown {
    const obj: any = {};
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTotalStakedPAssetResponse>, I>>(
    object: I,
  ): QueryGetTotalStakedPAssetResponse {
    const message = createBaseQueryGetTotalStakedPAssetResponse();
    message.totalStakedPAsset = object.totalStakedPAsset ?? "";
    return message;
  },
};

function createBaseQueryGetVoteRequest(): QueryGetVoteRequest {
  return { asset: "", proposal: 0, voter: "" };
}

export const QueryGetVoteRequest = {
  encode(message: QueryGetVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.proposal !== 0) {
      writer.uint32(16).uint64(message.proposal);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.proposal = longToNumber(reader.uint64() as Long);
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
      proposal: isSet(object.proposal) ? Number(object.proposal) : 0,
      voter: isSet(object.voter) ? String(object.voter) : "",
    };
  },

  toJSON(message: QueryGetVoteRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = Math.round(message.proposal));
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetVoteRequest>, I>>(object: I): QueryGetVoteRequest {
    const message = createBaseQueryGetVoteRequest();
    message.asset = object.asset ?? "";
    message.proposal = object.proposal ?? 0;
    message.voter = object.voter ?? "";
    return message;
  },
};

function createBaseQueryGetVoteResponse(): QueryGetVoteResponse {
  return { vote: undefined };
}

export const QueryGetVoteResponse = {
  encode(message: QueryGetVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined };
  },

  toJSON(message: QueryGetVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetVoteResponse>, I>>(object: I): QueryGetVoteResponse {
    const message = createBaseQueryGetVoteResponse();
    message.vote = (object.vote !== undefined && object.vote !== null) ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
};

function createBaseQueryAllVoteRequest(): QueryAllVoteRequest {
  return { pagination: undefined };
}

export const QueryAllVoteRequest = {
  encode(message: QueryAllVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVoteRequest>, I>>(object: I): QueryAllVoteRequest {
    const message = createBaseQueryAllVoteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllVoteResponse(): QueryAllVoteResponse {
  return { vote: [], pagination: undefined };
}

export const QueryAllVoteResponse = {
  encode(message: QueryAllVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vote) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllVoteResponse): unknown {
    const obj: any = {};
    if (message.vote) {
      obj.vote = message.vote.map((e) => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.vote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVoteResponse>, I>>(object: I): QueryAllVoteResponse {
    const message = createBaseQueryAllVoteResponse();
    message.vote = object.vote?.map((e) => Vote.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetProposalRequest(): QueryGetProposalRequest {
  return { asset: "", proposalId: 0 };
}

export const QueryGetProposalRequest = {
  encode(message: QueryGetProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.proposalId !== 0) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.proposalId = longToNumber(reader.uint64() as Long);
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
      proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
    };
  },

  toJSON(message: QueryGetProposalRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProposalRequest>, I>>(object: I): QueryGetProposalRequest {
    const message = createBaseQueryGetProposalRequest();
    message.asset = object.asset ?? "";
    message.proposalId = object.proposalId ?? 0;
    return message;
  },
};

function createBaseQueryGetProposalResponse(): QueryGetProposalResponse {
  return { proposal: undefined };
}

export const QueryGetProposalResponse = {
  encode(message: QueryGetProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined };
  },

  toJSON(message: QueryGetProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProposalResponse>, I>>(object: I): QueryGetProposalResponse {
    const message = createBaseQueryGetProposalResponse();
    message.proposal = (object.proposal !== undefined && object.proposal !== null)
      ? Proposal.fromPartial(object.proposal)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProposalRequest(): QueryAllProposalRequest {
  return { pagination: undefined };
}

export const QueryAllProposalRequest = {
  encode(message: QueryAllProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProposalRequest();
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

  fromJSON(object: any): QueryAllProposalRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProposalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProposalRequest>, I>>(object: I): QueryAllProposalRequest {
    const message = createBaseQueryAllProposalRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProposalResponse(): QueryAllProposalResponse {
  return { proposal: [], pagination: undefined };
}

export const QueryAllProposalResponse = {
  encode(message: QueryAllProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposal) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProposalResponse): unknown {
    const obj: any = {};
    if (message.proposal) {
      obj.proposal = message.proposal.map((e) => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposal = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProposalResponse>, I>>(object: I): QueryAllProposalResponse {
    const message = createBaseQueryAllProposalResponse();
    message.proposal = object.proposal?.map((e) => Proposal.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a StakedPAsset by index. */
  StakedPAsset(request: QueryGetStakedPAssetRequest): Promise<QueryGetStakedPAssetResponse>;
  /** Queries a list of StakedPAsset items. */
  StakedPAssetAll(request: QueryAllStakedPAssetRequest): Promise<QueryAllStakedPAssetResponse>;
  TotalStakedPAsset(request: QueryGetTotalStakedPAssetRequest): Promise<QueryGetTotalStakedPAssetResponse>;
  /** Queries a Vote by index. */
  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
  /** Queries a list of Vote items. */
  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
  /** Queries a Proposal by index. */
  Proposal(request: QueryGetProposalRequest): Promise<QueryGetProposalResponse>;
  /** Queries a list of Proposal items. */
  ProposalAll(request: QueryAllProposalRequest): Promise<QueryAllProposalResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.StakedPAsset = this.StakedPAsset.bind(this);
    this.StakedPAssetAll = this.StakedPAssetAll.bind(this);
    this.TotalStakedPAsset = this.TotalStakedPAsset.bind(this);
    this.Vote = this.Vote.bind(this);
    this.VoteAll = this.VoteAll.bind(this);
    this.Proposal = this.Proposal.bind(this);
    this.ProposalAll = this.ProposalAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  StakedPAsset(request: QueryGetStakedPAssetRequest): Promise<QueryGetStakedPAssetResponse> {
    const data = QueryGetStakedPAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Query", "StakedPAsset", data);
    return promise.then((data) => QueryGetStakedPAssetResponse.decode(new _m0.Reader(data)));
  }

  StakedPAssetAll(request: QueryAllStakedPAssetRequest): Promise<QueryAllStakedPAssetResponse> {
    const data = QueryAllStakedPAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Query", "StakedPAssetAll", data);
    return promise.then((data) => QueryAllStakedPAssetResponse.decode(new _m0.Reader(data)));
  }

  TotalStakedPAsset(request: QueryGetTotalStakedPAssetRequest): Promise<QueryGetTotalStakedPAssetResponse> {
    const data = QueryGetTotalStakedPAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Query", "TotalStakedPAsset", data);
    return promise.then((data) => QueryGetTotalStakedPAssetResponse.decode(new _m0.Reader(data)));
  }

  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse> {
    const data = QueryGetVoteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Query", "Vote", data);
    return promise.then((data) => QueryGetVoteResponse.decode(new _m0.Reader(data)));
  }

  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse> {
    const data = QueryAllVoteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Query", "VoteAll", data);
    return promise.then((data) => QueryAllVoteResponse.decode(new _m0.Reader(data)));
  }

  Proposal(request: QueryGetProposalRequest): Promise<QueryGetProposalResponse> {
    const data = QueryGetProposalRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Query", "Proposal", data);
    return promise.then((data) => QueryGetProposalResponse.decode(new _m0.Reader(data)));
  }

  ProposalAll(request: QueryAllProposalRequest): Promise<QueryAllProposalResponse> {
    const data = QueryAllProposalRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Query", "ProposalAll", data);
    return promise.then((data) => QueryAllProposalResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
