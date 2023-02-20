/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { WeightedVoteOption } from "../../cosmos/gov/v1/gov";
import { ProofOps } from "../../tendermint/crypto/proof";
import { Params } from "./params";

export const protobufPackage = "prismfinance.prismcore.pgov";

export interface MsgUpdateParams {
  authority: string;
  params: Params | undefined;
}

export interface MsgUpdateParamsResponse {
}

export interface MsgStakePAssets {
  creator: string;
  amount: Coin[];
}

export interface MsgStakePAssetsResponse {
  totalStakedPAssets: string;
}

export interface MsgUnstakePAssets {
  creator: string;
  amount: Coin[];
}

export interface MsgUnstakePAssetsResponse {
  totalStakedPAssets: string;
}

export interface MsgSubmitVote {
  voter: string;
  asset: string;
  proposal: number;
  options: WeightedVoteOption[];
}

export interface MsgSubmitVoteResponse {
}

export interface MsgSubmitProposal {
  creator: string;
  asset: string;
  proposal: Uint8Array;
  height: number;
  proof: ProofOps | undefined;
}

export interface MsgSubmitProposalResponse {
}

export interface MsgRetryVoteTransmit {
  creator: string;
  asset: string;
  proposal: number;
}

export interface MsgRetryVoteTransmitResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgStakePAssets(): MsgStakePAssets {
  return { creator: "", amount: [] };
}

export const MsgStakePAssets = {
  encode(message: MsgStakePAssets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakePAssets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStakePAssets {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgStakePAssets): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakePAssets>, I>>(object: I): MsgStakePAssets {
    const message = createBaseMsgStakePAssets();
    message.creator = object.creator ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgStakePAssetsResponse(): MsgStakePAssetsResponse {
  return { totalStakedPAssets: "" };
}

export const MsgStakePAssetsResponse = {
  encode(message: MsgStakePAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalStakedPAssets !== "") {
      writer.uint32(10).string(message.totalStakedPAssets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakePAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalStakedPAssets = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStakePAssetsResponse {
    return { totalStakedPAssets: isSet(object.totalStakedPAssets) ? String(object.totalStakedPAssets) : "" };
  },

  toJSON(message: MsgStakePAssetsResponse): unknown {
    const obj: any = {};
    message.totalStakedPAssets !== undefined && (obj.totalStakedPAssets = message.totalStakedPAssets);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakePAssetsResponse>, I>>(object: I): MsgStakePAssetsResponse {
    const message = createBaseMsgStakePAssetsResponse();
    message.totalStakedPAssets = object.totalStakedPAssets ?? "";
    return message;
  },
};

function createBaseMsgUnstakePAssets(): MsgUnstakePAssets {
  return { creator: "", amount: [] };
}

export const MsgUnstakePAssets = {
  encode(message: MsgUnstakePAssets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakePAssets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakePAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstakePAssets {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgUnstakePAssets): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakePAssets>, I>>(object: I): MsgUnstakePAssets {
    const message = createBaseMsgUnstakePAssets();
    message.creator = object.creator ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUnstakePAssetsResponse(): MsgUnstakePAssetsResponse {
  return { totalStakedPAssets: "" };
}

export const MsgUnstakePAssetsResponse = {
  encode(message: MsgUnstakePAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalStakedPAssets !== "") {
      writer.uint32(10).string(message.totalStakedPAssets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakePAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakePAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalStakedPAssets = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstakePAssetsResponse {
    return { totalStakedPAssets: isSet(object.totalStakedPAssets) ? String(object.totalStakedPAssets) : "" };
  },

  toJSON(message: MsgUnstakePAssetsResponse): unknown {
    const obj: any = {};
    message.totalStakedPAssets !== undefined && (obj.totalStakedPAssets = message.totalStakedPAssets);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakePAssetsResponse>, I>>(object: I): MsgUnstakePAssetsResponse {
    const message = createBaseMsgUnstakePAssetsResponse();
    message.totalStakedPAssets = object.totalStakedPAssets ?? "";
    return message;
  },
};

function createBaseMsgSubmitVote(): MsgSubmitVote {
  return { voter: "", asset: "", proposal: 0, options: [] };
}

export const MsgSubmitVote = {
  encode(message: MsgSubmitVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal !== 0) {
      writer.uint32(24).uint64(message.proposal);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.proposal = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitVote {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposal: isSet(object.proposal) ? Number(object.proposal) : 0,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgSubmitVote): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = Math.round(message.proposal));
    if (message.options) {
      obj.options = message.options.map((e) => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitVote>, I>>(object: I): MsgSubmitVote {
    const message = createBaseMsgSubmitVote();
    message.voter = object.voter ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal ?? 0;
    message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSubmitVoteResponse(): MsgSubmitVoteResponse {
  return {};
}

export const MsgSubmitVoteResponse = {
  encode(_: MsgSubmitVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitVoteResponse();
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

  fromJSON(_: any): MsgSubmitVoteResponse {
    return {};
  },

  toJSON(_: MsgSubmitVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitVoteResponse>, I>>(_: I): MsgSubmitVoteResponse {
    const message = createBaseMsgSubmitVoteResponse();
    return message;
  },
};

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return { creator: "", asset: "", proposal: new Uint8Array(), height: 0, proof: undefined };
}

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal.length !== 0) {
      writer.uint32(26).bytes(message.proposal);
    }
    if (message.height !== 0) {
      writer.uint32(32).uint64(message.height);
    }
    if (message.proof !== undefined) {
      ProofOps.encode(message.proof, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.proposal = reader.bytes();
          break;
        case 4:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.proof = ProofOps.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposal: isSet(object.proposal) ? bytesFromBase64(object.proposal) : new Uint8Array(),
      height: isSet(object.height) ? Number(object.height) : 0,
      proof: isSet(object.proof) ? ProofOps.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined
      && (obj.proposal = base64FromBytes(message.proposal !== undefined ? message.proposal : new Uint8Array()));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.proof !== undefined && (obj.proof = message.proof ? ProofOps.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(object: I): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.creator = object.creator ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal ?? new Uint8Array();
    message.height = object.height ?? 0;
    message.proof = (object.proof !== undefined && object.proof !== null)
      ? ProofOps.fromPartial(object.proof)
      : undefined;
    return message;
  },
};

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {};
}

export const MsgSubmitProposalResponse = {
  encode(_: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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

  fromJSON(_: any): MsgSubmitProposalResponse {
    return {};
  },

  toJSON(_: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(_: I): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    return message;
  },
};

function createBaseMsgRetryVoteTransmit(): MsgRetryVoteTransmit {
  return { creator: "", asset: "", proposal: 0 };
}

export const MsgRetryVoteTransmit = {
  encode(message: MsgRetryVoteTransmit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal !== 0) {
      writer.uint32(24).uint64(message.proposal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetryVoteTransmit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryVoteTransmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.proposal = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetryVoteTransmit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposal: isSet(object.proposal) ? Number(object.proposal) : 0,
    };
  },

  toJSON(message: MsgRetryVoteTransmit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = Math.round(message.proposal));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetryVoteTransmit>, I>>(object: I): MsgRetryVoteTransmit {
    const message = createBaseMsgRetryVoteTransmit();
    message.creator = object.creator ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal ?? 0;
    return message;
  },
};

function createBaseMsgRetryVoteTransmitResponse(): MsgRetryVoteTransmitResponse {
  return {};
}

export const MsgRetryVoteTransmitResponse = {
  encode(_: MsgRetryVoteTransmitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetryVoteTransmitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryVoteTransmitResponse();
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

  fromJSON(_: any): MsgRetryVoteTransmitResponse {
    return {};
  },

  toJSON(_: MsgRetryVoteTransmitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetryVoteTransmitResponse>, I>>(_: I): MsgRetryVoteTransmitResponse {
    const message = createBaseMsgRetryVoteTransmitResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  StakePAssets(request: MsgStakePAssets): Promise<MsgStakePAssetsResponse>;
  UnstakePAssets(request: MsgUnstakePAssets): Promise<MsgUnstakePAssetsResponse>;
  SubmitVote(request: MsgSubmitVote): Promise<MsgSubmitVoteResponse>;
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RetryVoteTransmit(request: MsgRetryVoteTransmit): Promise<MsgRetryVoteTransmitResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.StakePAssets = this.StakePAssets.bind(this);
    this.UnstakePAssets = this.UnstakePAssets.bind(this);
    this.SubmitVote = this.SubmitVote.bind(this);
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.RetryVoteTransmit = this.RetryVoteTransmit.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }

  StakePAssets(request: MsgStakePAssets): Promise<MsgStakePAssetsResponse> {
    const data = MsgStakePAssets.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Msg", "StakePAssets", data);
    return promise.then((data) => MsgStakePAssetsResponse.decode(new _m0.Reader(data)));
  }

  UnstakePAssets(request: MsgUnstakePAssets): Promise<MsgUnstakePAssetsResponse> {
    const data = MsgUnstakePAssets.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Msg", "UnstakePAssets", data);
    return promise.then((data) => MsgUnstakePAssetsResponse.decode(new _m0.Reader(data)));
  }

  SubmitVote(request: MsgSubmitVote): Promise<MsgSubmitVoteResponse> {
    const data = MsgSubmitVote.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Msg", "SubmitVote", data);
    return promise.then((data) => MsgSubmitVoteResponse.decode(new _m0.Reader(data)));
  }

  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Msg", "SubmitProposal", data);
    return promise.then((data) => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  }

  RetryVoteTransmit(request: MsgRetryVoteTransmit): Promise<MsgRetryVoteTransmitResponse> {
    const data = MsgRetryVoteTransmit.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.pgov.Msg", "RetryVoteTransmit", data);
    return promise.then((data) => MsgRetryVoteTransmitResponse.decode(new _m0.Reader(data)));
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
