import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Proposal, ProposalAmino, ProposalSDKType } from "./proposal";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Vote, VoteAmino, VoteSDKType } from "./vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/pryzm.pgov.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventSetProposal {
  proposal: Proposal;
}
export interface EventSetProposalProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventSetProposal";
  value: Uint8Array;
}
export interface EventSetProposalAmino {
  proposal?: ProposalAmino;
}
export interface EventSetProposalAminoMsg {
  type: "/pryzm.pgov.v1.EventSetProposal";
  value: EventSetProposalAmino;
}
export interface EventSetProposalSDKType {
  proposal: ProposalSDKType;
}
export interface EventPAssetStake {
  address: string;
  asset: string;
  amount: Coin[];
  totalStakedPAsset: string;
}
export interface EventPAssetStakeProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventPAssetStake";
  value: Uint8Array;
}
export interface EventPAssetStakeAmino {
  address?: string;
  asset?: string;
  amount?: CoinAmino[];
  total_staked_p_asset?: string;
}
export interface EventPAssetStakeAminoMsg {
  type: "/pryzm.pgov.v1.EventPAssetStake";
  value: EventPAssetStakeAmino;
}
export interface EventPAssetStakeSDKType {
  address: string;
  asset: string;
  amount: CoinSDKType[];
  total_staked_p_asset: string;
}
export interface EventPAssetUnstake {
  address: string;
  asset: string;
  amount: Coin[];
  totalStakedPAsset: string;
}
export interface EventPAssetUnstakeProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventPAssetUnstake";
  value: Uint8Array;
}
export interface EventPAssetUnstakeAmino {
  address?: string;
  asset?: string;
  amount?: CoinAmino[];
  total_staked_p_asset?: string;
}
export interface EventPAssetUnstakeAminoMsg {
  type: "/pryzm.pgov.v1.EventPAssetUnstake";
  value: EventPAssetUnstakeAmino;
}
export interface EventPAssetUnstakeSDKType {
  address: string;
  asset: string;
  amount: CoinSDKType[];
  total_staked_p_asset: string;
}
export interface EventVoteSubmit {
  vote?: Vote;
}
export interface EventVoteSubmitProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteSubmit";
  value: Uint8Array;
}
export interface EventVoteSubmitAmino {
  vote?: VoteAmino;
}
export interface EventVoteSubmitAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteSubmit";
  value: EventVoteSubmitAmino;
}
export interface EventVoteSubmitSDKType {
  vote?: VoteSDKType;
}
export interface EventProposalEnd {
  proposal?: Proposal;
}
export interface EventProposalEndProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventProposalEnd";
  value: Uint8Array;
}
export interface EventProposalEndAmino {
  proposal?: ProposalAmino;
}
export interface EventProposalEndAminoMsg {
  type: "/pryzm.pgov.v1.EventProposalEnd";
  value: EventProposalEndAmino;
}
export interface EventProposalEndSDKType {
  proposal?: ProposalSDKType;
}
export interface EventVoteTransmit {
  proposalId: bigint;
  asset: string;
}
export interface EventVoteTransmitProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteTransmit";
  value: Uint8Array;
}
export interface EventVoteTransmitAmino {
  proposal_id?: string;
  asset?: string;
}
export interface EventVoteTransmitAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteTransmit";
  value: EventVoteTransmitAmino;
}
export interface EventVoteTransmitSDKType {
  proposal_id: bigint;
  asset: string;
}
export interface EventVoteTransmitFailure {
  proposalId: bigint;
  asset: string;
  error: string;
}
export interface EventVoteTransmitFailureProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteTransmitFailure";
  value: Uint8Array;
}
export interface EventVoteTransmitFailureAmino {
  proposal_id?: string;
  asset?: string;
  error?: string;
}
export interface EventVoteTransmitFailureAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteTransmitFailure";
  value: EventVoteTransmitFailureAmino;
}
export interface EventVoteTransmitFailureSDKType {
  proposal_id: bigint;
  asset: string;
  error: string;
}
export interface EventVoteAckSuccess {
  proposalId: bigint;
  asset: string;
}
export interface EventVoteAckSuccessProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteAckSuccess";
  value: Uint8Array;
}
export interface EventVoteAckSuccessAmino {
  proposal_id?: string;
  asset?: string;
}
export interface EventVoteAckSuccessAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteAckSuccess";
  value: EventVoteAckSuccessAmino;
}
export interface EventVoteAckSuccessSDKType {
  proposal_id: bigint;
  asset: string;
}
export interface EventVoteAckFailure {
  proposalId: bigint;
  asset: string;
  error: string;
}
export interface EventVoteAckFailureProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteAckFailure";
  value: Uint8Array;
}
export interface EventVoteAckFailureAmino {
  proposal_id?: string;
  asset?: string;
  error?: string;
}
export interface EventVoteAckFailureAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteAckFailure";
  value: EventVoteAckFailureAmino;
}
export interface EventVoteAckFailureSDKType {
  proposal_id: bigint;
  asset: string;
  error: string;
}
export interface EventVoteTimeout {
  proposalId: bigint;
  asset: string;
}
export interface EventVoteTimeoutProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteTimeout";
  value: Uint8Array;
}
export interface EventVoteTimeoutAmino {
  proposal_id?: string;
  asset?: string;
}
export interface EventVoteTimeoutAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteTimeout";
  value: EventVoteTimeoutAmino;
}
export interface EventVoteTimeoutSDKType {
  proposal_id: bigint;
  asset: string;
}
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/pryzm.pgov.v1.EventSetParams",
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
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
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: EventSetParamsAmino): EventSetParams {
    const message = createBaseEventSetParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: EventSetParams): EventSetParamsAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetParamsAminoMsg): EventSetParams {
    return EventSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetParamsProtoMsg): EventSetParams {
    return EventSetParams.decode(message.value);
  },
  toProto(message: EventSetParams): Uint8Array {
    return EventSetParams.encode(message).finish();
  },
  toProtoMsg(message: EventSetParams): EventSetParamsProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
function createBaseEventSetProposal(): EventSetProposal {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const EventSetProposal = {
  typeUrl: "/pryzm.pgov.v1.EventSetProposal",
  encode(message: EventSetProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetProposal();
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
  fromJSON(object: any): EventSetProposal {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: EventSetProposal): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetProposal>): EventSetProposal {
    const message = createBaseEventSetProposal();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: EventSetProposalAmino): EventSetProposal {
    const message = createBaseEventSetProposal();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: EventSetProposal): EventSetProposalAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetProposalAminoMsg): EventSetProposal {
    return EventSetProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetProposalProtoMsg): EventSetProposal {
    return EventSetProposal.decode(message.value);
  },
  toProto(message: EventSetProposal): Uint8Array {
    return EventSetProposal.encode(message).finish();
  },
  toProtoMsg(message: EventSetProposal): EventSetProposalProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventSetProposal",
      value: EventSetProposal.encode(message).finish()
    };
  }
};
function createBaseEventPAssetStake(): EventPAssetStake {
  return {
    address: "",
    asset: "",
    amount: [],
    totalStakedPAsset: ""
  };
}
export const EventPAssetStake = {
  typeUrl: "/pryzm.pgov.v1.EventPAssetStake",
  encode(message: EventPAssetStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalStakedPAsset !== "") {
      writer.uint32(34).string(message.totalStakedPAsset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPAssetStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPAssetStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalStakedPAsset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPAssetStake {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      totalStakedPAsset: isSet(object.totalStakedPAsset) ? String(object.totalStakedPAsset) : ""
    };
  },
  toJSON(message: EventPAssetStake): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset);
    return obj;
  },
  fromPartial(object: Partial<EventPAssetStake>): EventPAssetStake {
    const message = createBaseEventPAssetStake();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.totalStakedPAsset = object.totalStakedPAsset ?? "";
    return message;
  },
  fromAmino(object: EventPAssetStakeAmino): EventPAssetStake {
    const message = createBaseEventPAssetStake();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.total_staked_p_asset !== undefined && object.total_staked_p_asset !== null) {
      message.totalStakedPAsset = object.total_staked_p_asset;
    }
    return message;
  },
  toAmino(message: EventPAssetStake): EventPAssetStakeAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.asset = message.asset;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.total_staked_p_asset = message.totalStakedPAsset;
    return obj;
  },
  fromAminoMsg(object: EventPAssetStakeAminoMsg): EventPAssetStake {
    return EventPAssetStake.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPAssetStakeProtoMsg): EventPAssetStake {
    return EventPAssetStake.decode(message.value);
  },
  toProto(message: EventPAssetStake): Uint8Array {
    return EventPAssetStake.encode(message).finish();
  },
  toProtoMsg(message: EventPAssetStake): EventPAssetStakeProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventPAssetStake",
      value: EventPAssetStake.encode(message).finish()
    };
  }
};
function createBaseEventPAssetUnstake(): EventPAssetUnstake {
  return {
    address: "",
    asset: "",
    amount: [],
    totalStakedPAsset: ""
  };
}
export const EventPAssetUnstake = {
  typeUrl: "/pryzm.pgov.v1.EventPAssetUnstake",
  encode(message: EventPAssetUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalStakedPAsset !== "") {
      writer.uint32(34).string(message.totalStakedPAsset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPAssetUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPAssetUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalStakedPAsset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPAssetUnstake {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      totalStakedPAsset: isSet(object.totalStakedPAsset) ? String(object.totalStakedPAsset) : ""
    };
  },
  toJSON(message: EventPAssetUnstake): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset);
    return obj;
  },
  fromPartial(object: Partial<EventPAssetUnstake>): EventPAssetUnstake {
    const message = createBaseEventPAssetUnstake();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.totalStakedPAsset = object.totalStakedPAsset ?? "";
    return message;
  },
  fromAmino(object: EventPAssetUnstakeAmino): EventPAssetUnstake {
    const message = createBaseEventPAssetUnstake();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.total_staked_p_asset !== undefined && object.total_staked_p_asset !== null) {
      message.totalStakedPAsset = object.total_staked_p_asset;
    }
    return message;
  },
  toAmino(message: EventPAssetUnstake): EventPAssetUnstakeAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.asset = message.asset;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.total_staked_p_asset = message.totalStakedPAsset;
    return obj;
  },
  fromAminoMsg(object: EventPAssetUnstakeAminoMsg): EventPAssetUnstake {
    return EventPAssetUnstake.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPAssetUnstakeProtoMsg): EventPAssetUnstake {
    return EventPAssetUnstake.decode(message.value);
  },
  toProto(message: EventPAssetUnstake): Uint8Array {
    return EventPAssetUnstake.encode(message).finish();
  },
  toProtoMsg(message: EventPAssetUnstake): EventPAssetUnstakeProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventPAssetUnstake",
      value: EventPAssetUnstake.encode(message).finish()
    };
  }
};
function createBaseEventVoteSubmit(): EventVoteSubmit {
  return {
    vote: undefined
  };
}
export const EventVoteSubmit = {
  typeUrl: "/pryzm.pgov.v1.EventVoteSubmit",
  encode(message: EventVoteSubmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVoteSubmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteSubmit();
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
  fromJSON(object: any): EventVoteSubmit {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON(message: EventVoteSubmit): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventVoteSubmit>): EventVoteSubmit {
    const message = createBaseEventVoteSubmit();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object: EventVoteSubmitAmino): EventVoteSubmit {
    const message = createBaseEventVoteSubmit();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: EventVoteSubmit): EventVoteSubmitAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventVoteSubmitAminoMsg): EventVoteSubmit {
    return EventVoteSubmit.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteSubmitProtoMsg): EventVoteSubmit {
    return EventVoteSubmit.decode(message.value);
  },
  toProto(message: EventVoteSubmit): Uint8Array {
    return EventVoteSubmit.encode(message).finish();
  },
  toProtoMsg(message: EventVoteSubmit): EventVoteSubmitProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteSubmit",
      value: EventVoteSubmit.encode(message).finish()
    };
  }
};
function createBaseEventProposalEnd(): EventProposalEnd {
  return {
    proposal: undefined
  };
}
export const EventProposalEnd = {
  typeUrl: "/pryzm.pgov.v1.EventProposalEnd",
  encode(message: EventProposalEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProposalEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalEnd();
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
  fromJSON(object: any): EventProposalEnd {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: EventProposalEnd): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventProposalEnd>): EventProposalEnd {
    const message = createBaseEventProposalEnd();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: EventProposalEndAmino): EventProposalEnd {
    const message = createBaseEventProposalEnd();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: EventProposalEnd): EventProposalEndAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventProposalEndAminoMsg): EventProposalEnd {
    return EventProposalEnd.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProposalEndProtoMsg): EventProposalEnd {
    return EventProposalEnd.decode(message.value);
  },
  toProto(message: EventProposalEnd): Uint8Array {
    return EventProposalEnd.encode(message).finish();
  },
  toProtoMsg(message: EventProposalEnd): EventProposalEndProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventProposalEnd",
      value: EventProposalEnd.encode(message).finish()
    };
  }
};
function createBaseEventVoteTransmit(): EventVoteTransmit {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteTransmit = {
  typeUrl: "/pryzm.pgov.v1.EventVoteTransmit",
  encode(message: EventVoteTransmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVoteTransmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTransmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromJSON(object: any): EventVoteTransmit {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  toJSON(message: EventVoteTransmit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial(object: Partial<EventVoteTransmit>): EventVoteTransmit {
    const message = createBaseEventVoteTransmit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: EventVoteTransmitAmino): EventVoteTransmit {
    const message = createBaseEventVoteTransmit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: EventVoteTransmit): EventVoteTransmitAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: EventVoteTransmitAminoMsg): EventVoteTransmit {
    return EventVoteTransmit.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteTransmitProtoMsg): EventVoteTransmit {
    return EventVoteTransmit.decode(message.value);
  },
  toProto(message: EventVoteTransmit): Uint8Array {
    return EventVoteTransmit.encode(message).finish();
  },
  toProtoMsg(message: EventVoteTransmit): EventVoteTransmitProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteTransmit",
      value: EventVoteTransmit.encode(message).finish()
    };
  }
};
function createBaseEventVoteTransmitFailure(): EventVoteTransmitFailure {
  return {
    proposalId: BigInt(0),
    asset: "",
    error: ""
  };
}
export const EventVoteTransmitFailure = {
  typeUrl: "/pryzm.pgov.v1.EventVoteTransmitFailure",
  encode(message: EventVoteTransmitFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVoteTransmitFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTransmitFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteTransmitFailure {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : "",
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: EventVoteTransmitFailure): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<EventVoteTransmitFailure>): EventVoteTransmitFailure {
    const message = createBaseEventVoteTransmitFailure();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventVoteTransmitFailureAmino): EventVoteTransmitFailure {
    const message = createBaseEventVoteTransmitFailure();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: EventVoteTransmitFailure): EventVoteTransmitFailureAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: EventVoteTransmitFailureAminoMsg): EventVoteTransmitFailure {
    return EventVoteTransmitFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteTransmitFailureProtoMsg): EventVoteTransmitFailure {
    return EventVoteTransmitFailure.decode(message.value);
  },
  toProto(message: EventVoteTransmitFailure): Uint8Array {
    return EventVoteTransmitFailure.encode(message).finish();
  },
  toProtoMsg(message: EventVoteTransmitFailure): EventVoteTransmitFailureProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteTransmitFailure",
      value: EventVoteTransmitFailure.encode(message).finish()
    };
  }
};
function createBaseEventVoteAckSuccess(): EventVoteAckSuccess {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteAckSuccess = {
  typeUrl: "/pryzm.pgov.v1.EventVoteAckSuccess",
  encode(message: EventVoteAckSuccess, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVoteAckSuccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteAckSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromJSON(object: any): EventVoteAckSuccess {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  toJSON(message: EventVoteAckSuccess): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial(object: Partial<EventVoteAckSuccess>): EventVoteAckSuccess {
    const message = createBaseEventVoteAckSuccess();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: EventVoteAckSuccessAmino): EventVoteAckSuccess {
    const message = createBaseEventVoteAckSuccess();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: EventVoteAckSuccess): EventVoteAckSuccessAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: EventVoteAckSuccessAminoMsg): EventVoteAckSuccess {
    return EventVoteAckSuccess.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteAckSuccessProtoMsg): EventVoteAckSuccess {
    return EventVoteAckSuccess.decode(message.value);
  },
  toProto(message: EventVoteAckSuccess): Uint8Array {
    return EventVoteAckSuccess.encode(message).finish();
  },
  toProtoMsg(message: EventVoteAckSuccess): EventVoteAckSuccessProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteAckSuccess",
      value: EventVoteAckSuccess.encode(message).finish()
    };
  }
};
function createBaseEventVoteAckFailure(): EventVoteAckFailure {
  return {
    proposalId: BigInt(0),
    asset: "",
    error: ""
  };
}
export const EventVoteAckFailure = {
  typeUrl: "/pryzm.pgov.v1.EventVoteAckFailure",
  encode(message: EventVoteAckFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVoteAckFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteAckFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteAckFailure {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : "",
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: EventVoteAckFailure): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<EventVoteAckFailure>): EventVoteAckFailure {
    const message = createBaseEventVoteAckFailure();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventVoteAckFailureAmino): EventVoteAckFailure {
    const message = createBaseEventVoteAckFailure();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: EventVoteAckFailure): EventVoteAckFailureAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: EventVoteAckFailureAminoMsg): EventVoteAckFailure {
    return EventVoteAckFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteAckFailureProtoMsg): EventVoteAckFailure {
    return EventVoteAckFailure.decode(message.value);
  },
  toProto(message: EventVoteAckFailure): Uint8Array {
    return EventVoteAckFailure.encode(message).finish();
  },
  toProtoMsg(message: EventVoteAckFailure): EventVoteAckFailureProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteAckFailure",
      value: EventVoteAckFailure.encode(message).finish()
    };
  }
};
function createBaseEventVoteTimeout(): EventVoteTimeout {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteTimeout = {
  typeUrl: "/pryzm.pgov.v1.EventVoteTimeout",
  encode(message: EventVoteTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVoteTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromJSON(object: any): EventVoteTimeout {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  toJSON(message: EventVoteTimeout): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial(object: Partial<EventVoteTimeout>): EventVoteTimeout {
    const message = createBaseEventVoteTimeout();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: EventVoteTimeoutAmino): EventVoteTimeout {
    const message = createBaseEventVoteTimeout();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: EventVoteTimeout): EventVoteTimeoutAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: EventVoteTimeoutAminoMsg): EventVoteTimeout {
    return EventVoteTimeout.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteTimeoutProtoMsg): EventVoteTimeout {
    return EventVoteTimeout.decode(message.value);
  },
  toProto(message: EventVoteTimeout): Uint8Array {
    return EventVoteTimeout.encode(message).finish();
  },
  toProtoMsg(message: EventVoteTimeout): EventVoteTimeoutProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteTimeout",
      value: EventVoteTimeout.encode(message).finish()
    };
  }
};