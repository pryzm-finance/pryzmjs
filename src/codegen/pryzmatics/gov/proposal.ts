import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { TallyResult, TallyResultAmino, TallyResultSDKType } from "./tally_result";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export enum ProposalStatus {
  PROPOSAL_STATUS_ANY = 0,
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 1,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 3,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 4,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 5,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 6,
  /**
   * PROPOSAL_STATUS_DROPPED - PROPOSAL_STATUS_DROPPED defines a proposal status of a proposal that has
   * been dropped from the chain state.
   */
  PROPOSAL_STATUS_DROPPED = 7,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_ANY":
      return ProposalStatus.PROPOSAL_STATUS_ANY;
    case 1:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 2:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 4:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 5:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 6:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case 7:
    case "PROPOSAL_STATUS_DROPPED":
      return ProposalStatus.PROPOSAL_STATUS_DROPPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_ANY:
      return "PROPOSAL_STATUS_ANY";
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.PROPOSAL_STATUS_DROPPED:
      return "PROPOSAL_STATUS_DROPPED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Proposal {
  id: bigint;
  submitTime?: Timestamp;
  depositEndTime?: Timestamp;
  totalDeposit: Coin[];
  votingStartTime?: Timestamp;
  votingEndTime?: Timestamp;
  metadata: string;
  title: string;
  summary: string;
  proposer: string;
  proposalMsgs: string[];
  tallyResult: TallyResult;
  updatedTime: Timestamp;
  status: ProposalStatus;
}
export interface ProposalProtoMsg {
  typeUrl: "/pryzmatics.gov.Proposal";
  value: Uint8Array;
}
export interface ProposalAmino {
  id?: string;
  submit_time?: string;
  deposit_end_time?: string;
  total_deposit?: CoinAmino[];
  voting_start_time?: string;
  voting_end_time?: string;
  metadata?: string;
  title?: string;
  summary?: string;
  proposer?: string;
  proposal_msgs?: string[];
  tally_result?: TallyResultAmino;
  updated_time?: string;
  status?: ProposalStatus;
}
export interface ProposalAminoMsg {
  type: "/pryzmatics.gov.Proposal";
  value: ProposalAmino;
}
export interface ProposalSDKType {
  id: bigint;
  submit_time?: TimestampSDKType;
  deposit_end_time?: TimestampSDKType;
  total_deposit: CoinSDKType[];
  voting_start_time?: TimestampSDKType;
  voting_end_time?: TimestampSDKType;
  metadata: string;
  title: string;
  summary: string;
  proposer: string;
  proposal_msgs: string[];
  tally_result: TallyResultSDKType;
  updated_time: TimestampSDKType;
  status: ProposalStatus;
}
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    submitTime: undefined,
    depositEndTime: undefined,
    totalDeposit: [],
    votingStartTime: undefined,
    votingEndTime: undefined,
    metadata: "",
    title: "",
    summary: "",
    proposer: "",
    proposalMsgs: [],
    tallyResult: TallyResult.fromPartial({}),
    updatedTime: Timestamp.fromPartial({}),
    status: 0
  };
}
export const Proposal = {
  typeUrl: "/pryzmatics.gov.Proposal",
  is(o: any): o is Proposal {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.totalDeposit) && (!o.totalDeposit.length || Coin.is(o.totalDeposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string" && Array.isArray(o.proposalMsgs) && (!o.proposalMsgs.length || typeof o.proposalMsgs[0] === "string") && TallyResult.is(o.tallyResult) && Timestamp.is(o.updatedTime) && isSet(o.status));
  },
  isSDK(o: any): o is ProposalSDKType {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.total_deposit) && (!o.total_deposit.length || Coin.isSDK(o.total_deposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string" && Array.isArray(o.proposal_msgs) && (!o.proposal_msgs.length || typeof o.proposal_msgs[0] === "string") && TallyResult.isSDK(o.tally_result) && Timestamp.isSDK(o.updated_time) && isSet(o.status));
  },
  isAmino(o: any): o is ProposalAmino {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.total_deposit) && (!o.total_deposit.length || Coin.isAmino(o.total_deposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string" && Array.isArray(o.proposal_msgs) && (!o.proposal_msgs.length || typeof o.proposal_msgs[0] === "string") && TallyResult.isAmino(o.tally_result) && Timestamp.isAmino(o.updated_time) && isSet(o.status));
  },
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(message.submitTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(message.depositEndTime, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(message.votingStartTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(message.votingEndTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(58).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(66).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(74).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(82).string(message.proposer);
    }
    for (const v of message.proposalMsgs) {
      writer.uint32(90).string(v!);
    }
    if (message.tallyResult !== undefined) {
      TallyResult.encode(message.tallyResult, writer.uint32(98).fork()).ldelim();
    }
    if (message.updatedTime !== undefined) {
      Timestamp.encode(message.updatedTime, writer.uint32(106).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.submitTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.depositEndTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.votingStartTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.votingEndTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.metadata = reader.string();
          break;
        case 8:
          message.title = reader.string();
          break;
        case 9:
          message.summary = reader.string();
          break;
        case 10:
          message.proposer = reader.string();
          break;
        case 11:
          message.proposalMsgs.push(reader.string());
          break;
        case 12:
          message.tallyResult = TallyResult.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 13:
          message.updatedTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 14:
          message.status = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : undefined,
      depositEndTime: isSet(object.depositEndTime) ? fromJsonTimestamp(object.depositEndTime) : undefined,
      totalDeposit: Array.isArray(object?.totalDeposit) ? object.totalDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      votingStartTime: isSet(object.votingStartTime) ? fromJsonTimestamp(object.votingStartTime) : undefined,
      votingEndTime: isSet(object.votingEndTime) ? fromJsonTimestamp(object.votingEndTime) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      proposalMsgs: Array.isArray(object?.proposalMsgs) ? object.proposalMsgs.map((e: any) => String(e)) : [],
      tallyResult: isSet(object.tallyResult) ? TallyResult.fromJSON(object.tallyResult) : undefined,
      updatedTime: isSet(object.updatedTime) ? fromJsonTimestamp(object.updatedTime) : undefined,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1
    };
  },
  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.submitTime !== undefined && (obj.submitTime = fromTimestamp(message.submitTime).toISOString());
    message.depositEndTime !== undefined && (obj.depositEndTime = fromTimestamp(message.depositEndTime).toISOString());
    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDeposit = [];
    }
    message.votingStartTime !== undefined && (obj.votingStartTime = fromTimestamp(message.votingStartTime).toISOString());
    message.votingEndTime !== undefined && (obj.votingEndTime = fromTimestamp(message.votingEndTime).toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    if (message.proposalMsgs) {
      obj.proposalMsgs = message.proposalMsgs.map(e => e);
    } else {
      obj.proposalMsgs = [];
    }
    message.tallyResult !== undefined && (obj.tallyResult = message.tallyResult ? TallyResult.toJSON(message.tallyResult) : undefined);
    message.updatedTime !== undefined && (obj.updatedTime = fromTimestamp(message.updatedTime).toISOString());
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    return obj;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? Timestamp.fromPartial(object.submitTime) : undefined;
    message.depositEndTime = object.depositEndTime !== undefined && object.depositEndTime !== null ? Timestamp.fromPartial(object.depositEndTime) : undefined;
    message.totalDeposit = object.totalDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime !== undefined && object.votingStartTime !== null ? Timestamp.fromPartial(object.votingStartTime) : undefined;
    message.votingEndTime = object.votingEndTime !== undefined && object.votingEndTime !== null ? Timestamp.fromPartial(object.votingEndTime) : undefined;
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    message.proposalMsgs = object.proposalMsgs?.map(e => e) || [];
    message.tallyResult = object.tallyResult !== undefined && object.tallyResult !== null ? TallyResult.fromPartial(object.tallyResult) : undefined;
    message.updatedTime = object.updatedTime !== undefined && object.updatedTime !== null ? Timestamp.fromPartial(object.updatedTime) : undefined;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = Timestamp.fromAmino(object.submit_time);
    }
    if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
      message.depositEndTime = Timestamp.fromAmino(object.deposit_end_time);
    }
    message.totalDeposit = object.total_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
      message.votingStartTime = Timestamp.fromAmino(object.voting_start_time);
    }
    if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
      message.votingEndTime = Timestamp.fromAmino(object.voting_end_time);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    message.proposalMsgs = object.proposal_msgs?.map(e => e) || [];
    if (object.tally_result !== undefined && object.tally_result !== null) {
      message.tallyResult = TallyResult.fromAmino(object.tally_result);
    }
    if (object.updated_time !== undefined && object.updated_time !== null) {
      message.updatedTime = Timestamp.fromAmino(object.updated_time);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: Proposal, useInterfaces: boolean = true): ProposalAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.submit_time = message.submitTime ? Timestamp.toAmino(message.submitTime, useInterfaces) : undefined;
    obj.deposit_end_time = message.depositEndTime ? Timestamp.toAmino(message.depositEndTime, useInterfaces) : undefined;
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total_deposit = message.totalDeposit;
    }
    obj.voting_start_time = message.votingStartTime ? Timestamp.toAmino(message.votingStartTime, useInterfaces) : undefined;
    obj.voting_end_time = message.votingEndTime ? Timestamp.toAmino(message.votingEndTime, useInterfaces) : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.title = message.title === "" ? undefined : message.title;
    obj.summary = message.summary === "" ? undefined : message.summary;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    if (message.proposalMsgs) {
      obj.proposal_msgs = message.proposalMsgs.map(e => e);
    } else {
      obj.proposal_msgs = message.proposalMsgs;
    }
    obj.tally_result = message.tallyResult ? TallyResult.toAmino(message.tallyResult, useInterfaces) : undefined;
    obj.updated_time = message.updatedTime ? Timestamp.toAmino(message.updatedTime, useInterfaces) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg, useInterfaces: boolean = true): Proposal {
    return Proposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/pryzmatics.gov.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Proposal.typeUrl, Proposal);