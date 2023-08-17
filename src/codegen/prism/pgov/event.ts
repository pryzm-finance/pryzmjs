import { Params, ParamsSDKType } from "./params";
import { Proposal, ProposalSDKType } from "./proposal";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Vote, VoteSDKType } from "./vote";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventSetProposal {
  proposal: Proposal;
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
export interface EventPAssetUnstakeSDKType {
  address: string;
  asset: string;
  amount: CoinSDKType[];
  total_staked_p_asset: string;
}
export interface EventVoteSubmit {
  vote: Vote;
}
export interface EventVoteSubmitSDKType {
  vote: VoteSDKType;
}
export interface EventProposalEnd {
  proposal: Proposal;
}
export interface EventProposalEndSDKType {
  proposal: ProposalSDKType;
}
export interface EventVoteTransmit {
  proposalId: bigint;
  asset: string;
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
export interface EventVoteTransmitFailureSDKType {
  proposal_id: bigint;
  asset: string;
  error: string;
}
export interface EventVoteAckSuccess {
  proposalId: bigint;
  asset: string;
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
export interface EventVoteAckFailureSDKType {
  proposal_id: bigint;
  asset: string;
  error: string;
}
export interface EventVoteTimeout {
  proposalId: bigint;
  asset: string;
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
  }
};
function createBaseEventSetProposal(): EventSetProposal {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const EventSetProposal = {
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
  }
};
function createBaseEventVoteSubmit(): EventVoteSubmit {
  return {
    vote: Vote.fromPartial({})
  };
}
export const EventVoteSubmit = {
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
  }
};
function createBaseEventProposalEnd(): EventProposalEnd {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const EventProposalEnd = {
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
  }
};
function createBaseEventVoteTransmit(): EventVoteTransmit {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteTransmit = {
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
  }
};
function createBaseEventVoteAckSuccess(): EventVoteAckSuccess {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteAckSuccess = {
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
  }
};
function createBaseEventVoteTimeout(): EventVoteTimeout {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteTimeout = {
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
  }
};