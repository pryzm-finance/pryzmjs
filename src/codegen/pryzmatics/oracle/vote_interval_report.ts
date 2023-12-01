import { VoteType, voteTypeFromJSON, voteTypeToJSON } from "../../refractedlabs/oracle/v1/event";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { VoteInterval, VoteIntervalSDKType } from "./vote_interval";
import { BallotVoteResult, BallotVoteResultSDKType } from "./ballot_vote_result";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface VotePayloadReport {
  module: string;
  namespace: string;
  payload: string;
  type: VoteType;
}
export interface VotePayloadReportSDKType {
  module: string;
  namespace: string;
  payload: string;
  type: VoteType;
}
export interface ValidatorVoteIntervalReport {
  validator: string;
  preVoted: boolean;
  voted: boolean;
  missCounter: bigint;
  rewards: Coin[];
  payloads: VotePayloadReport[];
}
export interface ValidatorVoteIntervalReportSDKType {
  validator: string;
  pre_voted: boolean;
  voted: boolean;
  miss_counter: bigint;
  rewards: CoinSDKType[];
  payloads: VotePayloadReportSDKType[];
}
export interface VoteIntervalReport {
  voteInterval: VoteInterval;
  ballotVoteResults: BallotVoteResult[];
  validatorReports: ValidatorVoteIntervalReport[];
}
export interface VoteIntervalReportSDKType {
  vote_interval: VoteIntervalSDKType;
  ballot_vote_results: BallotVoteResultSDKType[];
  validator_reports: ValidatorVoteIntervalReportSDKType[];
}
function createBaseVotePayloadReport(): VotePayloadReport {
  return {
    module: "",
    namespace: "",
    payload: "",
    type: 0
  };
}
export const VotePayloadReport = {
  encode(message: VotePayloadReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotePayloadReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotePayloadReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.namespace = reader.string();
          break;
        case 3:
          message.payload = reader.string();
          break;
        case 4:
          message.type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VotePayloadReport {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
      type: isSet(object.type) ? voteTypeFromJSON(object.type) : -1
    };
  },
  toJSON(message: VotePayloadReport): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.payload !== undefined && (obj.payload = message.payload);
    message.type !== undefined && (obj.type = voteTypeToJSON(message.type));
    return obj;
  },
  fromPartial(object: Partial<VotePayloadReport>): VotePayloadReport {
    const message = createBaseVotePayloadReport();
    message.module = object.module ?? "";
    message.namespace = object.namespace ?? "";
    message.payload = object.payload ?? "";
    message.type = object.type ?? 0;
    return message;
  }
};
function createBaseValidatorVoteIntervalReport(): ValidatorVoteIntervalReport {
  return {
    validator: "",
    preVoted: false,
    voted: false,
    missCounter: BigInt(0),
    rewards: [],
    payloads: []
  };
}
export const ValidatorVoteIntervalReport = {
  encode(message: ValidatorVoteIntervalReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.preVoted === true) {
      writer.uint32(16).bool(message.preVoted);
    }
    if (message.voted === true) {
      writer.uint32(24).bool(message.voted);
    }
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(32).int64(message.missCounter);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.payloads) {
      VotePayloadReport.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorVoteIntervalReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorVoteIntervalReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.preVoted = reader.bool();
          break;
        case 3:
          message.voted = reader.bool();
          break;
        case 4:
          message.missCounter = reader.int64();
          break;
        case 5:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.payloads.push(VotePayloadReport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorVoteIntervalReport {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      preVoted: isSet(object.preVoted) ? Boolean(object.preVoted) : false,
      voted: isSet(object.voted) ? Boolean(object.voted) : false,
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0),
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : [],
      payloads: Array.isArray(object?.payloads) ? object.payloads.map((e: any) => VotePayloadReport.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorVoteIntervalReport): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.preVoted !== undefined && (obj.preVoted = message.preVoted);
    message.voted !== undefined && (obj.voted = message.voted);
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || BigInt(0)).toString());
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.payloads) {
      obj.payloads = message.payloads.map(e => e ? VotePayloadReport.toJSON(e) : undefined);
    } else {
      obj.payloads = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorVoteIntervalReport>): ValidatorVoteIntervalReport {
    const message = createBaseValidatorVoteIntervalReport();
    message.validator = object.validator ?? "";
    message.preVoted = object.preVoted ?? false;
    message.voted = object.voted ?? false;
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    message.payloads = object.payloads?.map(e => VotePayloadReport.fromPartial(e)) || [];
    return message;
  }
};
function createBaseVoteIntervalReport(): VoteIntervalReport {
  return {
    voteInterval: VoteInterval.fromPartial({}),
    ballotVoteResults: [],
    validatorReports: []
  };
}
export const VoteIntervalReport = {
  encode(message: VoteIntervalReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteInterval !== undefined) {
      VoteInterval.encode(message.voteInterval, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ballotVoteResults) {
      BallotVoteResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorReports) {
      ValidatorVoteIntervalReport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteIntervalReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteIntervalReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteInterval = VoteInterval.decode(reader, reader.uint32());
          break;
        case 2:
          message.ballotVoteResults.push(BallotVoteResult.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validatorReports.push(ValidatorVoteIntervalReport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VoteIntervalReport {
    return {
      voteInterval: isSet(object.voteInterval) ? VoteInterval.fromJSON(object.voteInterval) : undefined,
      ballotVoteResults: Array.isArray(object?.ballotVoteResults) ? object.ballotVoteResults.map((e: any) => BallotVoteResult.fromJSON(e)) : [],
      validatorReports: Array.isArray(object?.validatorReports) ? object.validatorReports.map((e: any) => ValidatorVoteIntervalReport.fromJSON(e)) : []
    };
  },
  toJSON(message: VoteIntervalReport): unknown {
    const obj: any = {};
    message.voteInterval !== undefined && (obj.voteInterval = message.voteInterval ? VoteInterval.toJSON(message.voteInterval) : undefined);
    if (message.ballotVoteResults) {
      obj.ballotVoteResults = message.ballotVoteResults.map(e => e ? BallotVoteResult.toJSON(e) : undefined);
    } else {
      obj.ballotVoteResults = [];
    }
    if (message.validatorReports) {
      obj.validatorReports = message.validatorReports.map(e => e ? ValidatorVoteIntervalReport.toJSON(e) : undefined);
    } else {
      obj.validatorReports = [];
    }
    return obj;
  },
  fromPartial(object: Partial<VoteIntervalReport>): VoteIntervalReport {
    const message = createBaseVoteIntervalReport();
    message.voteInterval = object.voteInterval !== undefined && object.voteInterval !== null ? VoteInterval.fromPartial(object.voteInterval) : undefined;
    message.ballotVoteResults = object.ballotVoteResults?.map(e => BallotVoteResult.fromPartial(e)) || [];
    message.validatorReports = object.validatorReports?.map(e => ValidatorVoteIntervalReport.fromPartial(e)) || [];
    return message;
  }
};