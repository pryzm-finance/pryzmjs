import { Params, ParamsSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, Proposal, ProposalSDKType } from "../../cosmos/gov/v1/gov";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { ProofOps, ProofOpsSDKType } from "../../tendermint/crypto/proof";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgStakePAssets {
  creator: string;
  amount: Coin[];
}
export interface MsgStakePAssetsSDKType {
  creator: string;
  amount: CoinSDKType[];
}
export interface MsgStakePAssetsResponse {
  totalStakedPAssets: string;
}
export interface MsgStakePAssetsResponseSDKType {
  total_staked_p_assets: string;
}
export interface MsgUnstakePAssets {
  creator: string;
  amount: Coin[];
}
export interface MsgUnstakePAssetsSDKType {
  creator: string;
  amount: CoinSDKType[];
}
export interface MsgUnstakePAssetsResponse {
  totalStakedPAssets: string;
}
export interface MsgUnstakePAssetsResponseSDKType {
  total_staked_p_assets: string;
}
export interface MsgSubmitVote {
  voter: string;
  asset: string;
  proposal: bigint;
  options: WeightedVoteOption[];
}
export interface MsgSubmitVoteSDKType {
  voter: string;
  asset: string;
  proposal: bigint;
  options: WeightedVoteOptionSDKType[];
}
export interface MsgSubmitVoteResponse {}
export interface MsgSubmitVoteResponseSDKType {}
export interface MsgSubmitProposal {
  creator: string;
  asset: string;
  proposal: Uint8Array;
  height: bigint;
  proof: ProofOps;
}
export interface MsgSubmitProposalSDKType {
  creator: string;
  asset: string;
  proposal: Uint8Array;
  height: bigint;
  proof: ProofOpsSDKType;
}
export interface MsgSubmitProposalResponse {
  proposal: Proposal;
}
export interface MsgSubmitProposalResponseSDKType {
  proposal: ProposalSDKType;
}
export interface MsgRetryVoteTransmit {
  creator: string;
  asset: string;
  proposal: bigint;
}
export interface MsgRetryVoteTransmitSDKType {
  creator: string;
  asset: string;
  proposal: bigint;
}
export interface MsgRetryVoteTransmitResponse {}
export interface MsgRetryVoteTransmitResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgStakePAssets(): MsgStakePAssets {
  return {
    creator: "",
    amount: []
  };
}
export const MsgStakePAssets = {
  encode(message: MsgStakePAssets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakePAssets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgStakePAssets): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgStakePAssets>): MsgStakePAssets {
    const message = createBaseMsgStakePAssets();
    message.creator = object.creator ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgStakePAssetsResponse(): MsgStakePAssetsResponse {
  return {
    totalStakedPAssets: ""
  };
}
export const MsgStakePAssetsResponse = {
  encode(message: MsgStakePAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalStakedPAssets !== "") {
      writer.uint32(10).string(message.totalStakedPAssets);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakePAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      totalStakedPAssets: isSet(object.totalStakedPAssets) ? String(object.totalStakedPAssets) : ""
    };
  },
  toJSON(message: MsgStakePAssetsResponse): unknown {
    const obj: any = {};
    message.totalStakedPAssets !== undefined && (obj.totalStakedPAssets = message.totalStakedPAssets);
    return obj;
  },
  fromPartial(object: Partial<MsgStakePAssetsResponse>): MsgStakePAssetsResponse {
    const message = createBaseMsgStakePAssetsResponse();
    message.totalStakedPAssets = object.totalStakedPAssets ?? "";
    return message;
  }
};
function createBaseMsgUnstakePAssets(): MsgUnstakePAssets {
  return {
    creator: "",
    amount: []
  };
}
export const MsgUnstakePAssets = {
  encode(message: MsgUnstakePAssets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakePAssets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUnstakePAssets): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakePAssets>): MsgUnstakePAssets {
    const message = createBaseMsgUnstakePAssets();
    message.creator = object.creator ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUnstakePAssetsResponse(): MsgUnstakePAssetsResponse {
  return {
    totalStakedPAssets: ""
  };
}
export const MsgUnstakePAssetsResponse = {
  encode(message: MsgUnstakePAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalStakedPAssets !== "") {
      writer.uint32(10).string(message.totalStakedPAssets);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakePAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      totalStakedPAssets: isSet(object.totalStakedPAssets) ? String(object.totalStakedPAssets) : ""
    };
  },
  toJSON(message: MsgUnstakePAssetsResponse): unknown {
    const obj: any = {};
    message.totalStakedPAssets !== undefined && (obj.totalStakedPAssets = message.totalStakedPAssets);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakePAssetsResponse>): MsgUnstakePAssetsResponse {
    const message = createBaseMsgUnstakePAssetsResponse();
    message.totalStakedPAssets = object.totalStakedPAssets ?? "";
    return message;
  }
};
function createBaseMsgSubmitVote(): MsgSubmitVote {
  return {
    voter: "",
    asset: "",
    proposal: BigInt(0),
    options: []
  };
}
export const MsgSubmitVote = {
  encode(message: MsgSubmitVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal !== BigInt(0)) {
      writer.uint32(24).uint64(message.proposal);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.proposal = reader.uint64();
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
      proposal: isSet(object.proposal) ? BigInt(object.proposal.toString()) : BigInt(0),
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSubmitVote): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = (message.proposal || BigInt(0)).toString());
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitVote>): MsgSubmitVote {
    const message = createBaseMsgSubmitVote();
    message.voter = object.voter ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal !== undefined && object.proposal !== null ? BigInt(object.proposal.toString()) : BigInt(0);
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSubmitVoteResponse(): MsgSubmitVoteResponse {
  return {};
}
export const MsgSubmitVoteResponse = {
  encode(_: MsgSubmitVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgSubmitVoteResponse>): MsgSubmitVoteResponse {
    const message = createBaseMsgSubmitVoteResponse();
    return message;
  }
};
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    creator: "",
    asset: "",
    proposal: new Uint8Array(),
    height: BigInt(0),
    proof: ProofOps.fromPartial({})
  };
}
export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal.length !== 0) {
      writer.uint32(26).bytes(message.proposal);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).uint64(message.height);
    }
    if (message.proof !== undefined) {
      ProofOps.encode(message.proof, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.height = reader.uint64();
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      proof: isSet(object.proof) ? ProofOps.fromJSON(object.proof) : undefined
    };
  },
  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = base64FromBytes(message.proposal !== undefined ? message.proposal : new Uint8Array()));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.proof !== undefined && (obj.proof = message.proof ? ProofOps.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.creator = object.creator ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.proof = object.proof !== undefined && object.proof !== null ? ProofOps.fromPartial(object.proof) : undefined;
    return message;
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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
  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }
};
function createBaseMsgRetryVoteTransmit(): MsgRetryVoteTransmit {
  return {
    creator: "",
    asset: "",
    proposal: BigInt(0)
  };
}
export const MsgRetryVoteTransmit = {
  encode(message: MsgRetryVoteTransmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal !== BigInt(0)) {
      writer.uint32(24).uint64(message.proposal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetryVoteTransmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.proposal = reader.uint64();
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
      proposal: isSet(object.proposal) ? BigInt(object.proposal.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgRetryVoteTransmit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = (message.proposal || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRetryVoteTransmit>): MsgRetryVoteTransmit {
    const message = createBaseMsgRetryVoteTransmit();
    message.creator = object.creator ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal !== undefined && object.proposal !== null ? BigInt(object.proposal.toString()) : BigInt(0);
    return message;
  }
};
function createBaseMsgRetryVoteTransmitResponse(): MsgRetryVoteTransmitResponse {
  return {};
}
export const MsgRetryVoteTransmitResponse = {
  encode(_: MsgRetryVoteTransmitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetryVoteTransmitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgRetryVoteTransmitResponse>): MsgRetryVoteTransmitResponse {
    const message = createBaseMsgRetryVoteTransmitResponse();
    return message;
  }
};