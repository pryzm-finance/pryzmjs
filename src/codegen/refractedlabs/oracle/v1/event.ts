import { OracleVote, OracleVoteSDKType } from "./oracle_vote";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum VoteType {
  VOTE_TYPE_ABSTAIN_VOTE = 0,
  VOTE_TYPE_NO_VOTE = 1,
  VOTE_TYPE_VALID_VOTE = 2,
  UNRECOGNIZED = -1,
}
export const VoteTypeSDKType = VoteType;
export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "VOTE_TYPE_ABSTAIN_VOTE":
      return VoteType.VOTE_TYPE_ABSTAIN_VOTE;
    case 1:
    case "VOTE_TYPE_NO_VOTE":
      return VoteType.VOTE_TYPE_NO_VOTE;
    case 2:
    case "VOTE_TYPE_VALID_VOTE":
      return VoteType.VOTE_TYPE_VALID_VOTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}
export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.VOTE_TYPE_ABSTAIN_VOTE:
      return "VOTE_TYPE_ABSTAIN_VOTE";
    case VoteType.VOTE_TYPE_NO_VOTE:
      return "VOTE_TYPE_NO_VOTE";
    case VoteType.VOTE_TYPE_VALID_VOTE:
      return "VOTE_TYPE_VALID_VOTE";
    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface EventDelegateFeedConsent {
  validator: string;
  feeder: string;
}
export interface EventDelegateFeedConsentSDKType {
  validator: string;
  feeder: string;
}
export interface EventOraclePreVote {
  validator: string;
  feeder: string;
}
export interface EventOraclePreVoteSDKType {
  validator: string;
  feeder: string;
}
export interface EventOracleVote {
  feeder: string;
  oracleVote: OracleVote;
}
export interface EventOracleVoteSDKType {
  feeder: string;
  oracle_vote: OracleVoteSDKType;
}
export interface BallotVoteResult {
  namespace: string;
  module: string;
  quorumReached: boolean;
  ballotPower: bigint;
  majorityAchieved: boolean;
  majorityVoteType: VoteType;
  majorityVotePayload: string;
  /** error returned by a call to the corresponding module's OnMajorityVote callback method */
  callbackError: string;
}
export interface BallotVoteResultSDKType {
  namespace: string;
  module: string;
  quorum_reached: boolean;
  ballot_power: bigint;
  majority_achieved: boolean;
  majority_vote_type: VoteType;
  majority_vote_payload: string;
  callback_error: string;
}
export interface ValidatorVoteIntervalSummary {
  validator: string;
  validatorPower: bigint;
  voted: boolean;
  voteIntervalMissCounter: bigint;
  slashWindowMissCounter: bigint;
  rewards: Coin[];
}
export interface ValidatorVoteIntervalSummarySDKType {
  validator: string;
  validator_power: bigint;
  voted: boolean;
  vote_interval_miss_counter: bigint;
  slash_window_miss_counter: bigint;
  rewards: CoinSDKType[];
}
export interface EventVoteIntervalEnds {
  timeMillis: bigint;
  blockHeight: bigint;
  votePeriod: bigint;
  validatorSummaries: ValidatorVoteIntervalSummary[];
  previousVoteIntervalEndTimeMillis: bigint;
  ballotVoteResults: BallotVoteResult[];
}
export interface EventVoteIntervalEndsSDKType {
  time_millis: bigint;
  block_height: bigint;
  vote_period: bigint;
  validator_summaries: ValidatorVoteIntervalSummarySDKType[];
  previous_vote_interval_end_time_millis: bigint;
  ballot_vote_results: BallotVoteResultSDKType[];
}
export interface ValidatorSlashWindowSummary {
  validator: string;
  validatorPower: bigint;
  missCounter: bigint;
  jailed: boolean;
  slashAmount: string;
}
export interface ValidatorSlashWindowSummarySDKType {
  validator: string;
  validator_power: bigint;
  miss_counter: bigint;
  jailed: boolean;
  slash_amount: string;
}
export interface EventSlashWindowEnds {
  slashWindow: bigint;
  validatorSummaries: ValidatorSlashWindowSummary[];
}
export interface EventSlashWindowEndsSDKType {
  slash_window: bigint;
  validator_summaries: ValidatorSlashWindowSummarySDKType[];
}
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
function createBaseEventDelegateFeedConsent(): EventDelegateFeedConsent {
  return {
    validator: "",
    feeder: ""
  };
}
export const EventDelegateFeedConsent = {
  encode(message: EventDelegateFeedConsent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDelegateFeedConsent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDelegateFeedConsent {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : ""
    };
  },
  toJSON(message: EventDelegateFeedConsent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },
  fromPartial(object: Partial<EventDelegateFeedConsent>): EventDelegateFeedConsent {
    const message = createBaseEventDelegateFeedConsent();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  }
};
function createBaseEventOraclePreVote(): EventOraclePreVote {
  return {
    validator: "",
    feeder: ""
  };
}
export const EventOraclePreVote = {
  encode(message: EventOraclePreVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOraclePreVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOraclePreVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventOraclePreVote {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : ""
    };
  },
  toJSON(message: EventOraclePreVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },
  fromPartial(object: Partial<EventOraclePreVote>): EventOraclePreVote {
    const message = createBaseEventOraclePreVote();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  }
};
function createBaseEventOracleVote(): EventOracleVote {
  return {
    feeder: "",
    oracleVote: OracleVote.fromPartial({})
  };
}
export const EventOracleVote = {
  encode(message: EventOracleVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    if (message.oracleVote !== undefined) {
      OracleVote.encode(message.oracleVote, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOracleVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOracleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        case 2:
          message.oracleVote = OracleVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventOracleVote {
    return {
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      oracleVote: isSet(object.oracleVote) ? OracleVote.fromJSON(object.oracleVote) : undefined
    };
  },
  toJSON(message: EventOracleVote): unknown {
    const obj: any = {};
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.oracleVote !== undefined && (obj.oracleVote = message.oracleVote ? OracleVote.toJSON(message.oracleVote) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventOracleVote>): EventOracleVote {
    const message = createBaseEventOracleVote();
    message.feeder = object.feeder ?? "";
    message.oracleVote = object.oracleVote !== undefined && object.oracleVote !== null ? OracleVote.fromPartial(object.oracleVote) : undefined;
    return message;
  }
};
function createBaseBallotVoteResult(): BallotVoteResult {
  return {
    namespace: "",
    module: "",
    quorumReached: false,
    ballotPower: BigInt(0),
    majorityAchieved: false,
    majorityVoteType: 0,
    majorityVotePayload: "",
    callbackError: ""
  };
}
export const BallotVoteResult = {
  encode(message: BallotVoteResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.quorumReached === true) {
      writer.uint32(24).bool(message.quorumReached);
    }
    if (message.ballotPower !== BigInt(0)) {
      writer.uint32(32).int64(message.ballotPower);
    }
    if (message.majorityAchieved === true) {
      writer.uint32(40).bool(message.majorityAchieved);
    }
    if (message.majorityVoteType !== 0) {
      writer.uint32(48).int32(message.majorityVoteType);
    }
    if (message.majorityVotePayload !== "") {
      writer.uint32(58).string(message.majorityVotePayload);
    }
    if (message.callbackError !== "") {
      writer.uint32(66).string(message.callbackError);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BallotVoteResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBallotVoteResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.module = reader.string();
          break;
        case 3:
          message.quorumReached = reader.bool();
          break;
        case 4:
          message.ballotPower = reader.int64();
          break;
        case 5:
          message.majorityAchieved = reader.bool();
          break;
        case 6:
          message.majorityVoteType = (reader.int32() as any);
          break;
        case 7:
          message.majorityVotePayload = reader.string();
          break;
        case 8:
          message.callbackError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BallotVoteResult {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      module: isSet(object.module) ? String(object.module) : "",
      quorumReached: isSet(object.quorumReached) ? Boolean(object.quorumReached) : false,
      ballotPower: isSet(object.ballotPower) ? BigInt(object.ballotPower.toString()) : BigInt(0),
      majorityAchieved: isSet(object.majorityAchieved) ? Boolean(object.majorityAchieved) : false,
      majorityVoteType: isSet(object.majorityVoteType) ? voteTypeFromJSON(object.majorityVoteType) : -1,
      majorityVotePayload: isSet(object.majorityVotePayload) ? String(object.majorityVotePayload) : "",
      callbackError: isSet(object.callbackError) ? String(object.callbackError) : ""
    };
  },
  toJSON(message: BallotVoteResult): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.module !== undefined && (obj.module = message.module);
    message.quorumReached !== undefined && (obj.quorumReached = message.quorumReached);
    message.ballotPower !== undefined && (obj.ballotPower = (message.ballotPower || BigInt(0)).toString());
    message.majorityAchieved !== undefined && (obj.majorityAchieved = message.majorityAchieved);
    message.majorityVoteType !== undefined && (obj.majorityVoteType = voteTypeToJSON(message.majorityVoteType));
    message.majorityVotePayload !== undefined && (obj.majorityVotePayload = message.majorityVotePayload);
    message.callbackError !== undefined && (obj.callbackError = message.callbackError);
    return obj;
  },
  fromPartial(object: Partial<BallotVoteResult>): BallotVoteResult {
    const message = createBaseBallotVoteResult();
    message.namespace = object.namespace ?? "";
    message.module = object.module ?? "";
    message.quorumReached = object.quorumReached ?? false;
    message.ballotPower = object.ballotPower !== undefined && object.ballotPower !== null ? BigInt(object.ballotPower.toString()) : BigInt(0);
    message.majorityAchieved = object.majorityAchieved ?? false;
    message.majorityVoteType = object.majorityVoteType ?? 0;
    message.majorityVotePayload = object.majorityVotePayload ?? "";
    message.callbackError = object.callbackError ?? "";
    return message;
  }
};
function createBaseValidatorVoteIntervalSummary(): ValidatorVoteIntervalSummary {
  return {
    validator: "",
    validatorPower: BigInt(0),
    voted: false,
    voteIntervalMissCounter: BigInt(0),
    slashWindowMissCounter: BigInt(0),
    rewards: []
  };
}
export const ValidatorVoteIntervalSummary = {
  encode(message: ValidatorVoteIntervalSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(16).int64(message.validatorPower);
    }
    if (message.voted === true) {
      writer.uint32(24).bool(message.voted);
    }
    if (message.voteIntervalMissCounter !== BigInt(0)) {
      writer.uint32(32).int64(message.voteIntervalMissCounter);
    }
    if (message.slashWindowMissCounter !== BigInt(0)) {
      writer.uint32(40).int64(message.slashWindowMissCounter);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorVoteIntervalSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorVoteIntervalSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.validatorPower = reader.int64();
          break;
        case 3:
          message.voted = reader.bool();
          break;
        case 4:
          message.voteIntervalMissCounter = reader.int64();
          break;
        case 5:
          message.slashWindowMissCounter = reader.int64();
          break;
        case 6:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorVoteIntervalSummary {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      validatorPower: isSet(object.validatorPower) ? BigInt(object.validatorPower.toString()) : BigInt(0),
      voted: isSet(object.voted) ? Boolean(object.voted) : false,
      voteIntervalMissCounter: isSet(object.voteIntervalMissCounter) ? BigInt(object.voteIntervalMissCounter.toString()) : BigInt(0),
      slashWindowMissCounter: isSet(object.slashWindowMissCounter) ? BigInt(object.slashWindowMissCounter.toString()) : BigInt(0),
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorVoteIntervalSummary): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.validatorPower !== undefined && (obj.validatorPower = (message.validatorPower || BigInt(0)).toString());
    message.voted !== undefined && (obj.voted = message.voted);
    message.voteIntervalMissCounter !== undefined && (obj.voteIntervalMissCounter = (message.voteIntervalMissCounter || BigInt(0)).toString());
    message.slashWindowMissCounter !== undefined && (obj.slashWindowMissCounter = (message.slashWindowMissCounter || BigInt(0)).toString());
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorVoteIntervalSummary>): ValidatorVoteIntervalSummary {
    const message = createBaseValidatorVoteIntervalSummary();
    message.validator = object.validator ?? "";
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt(0);
    message.voted = object.voted ?? false;
    message.voteIntervalMissCounter = object.voteIntervalMissCounter !== undefined && object.voteIntervalMissCounter !== null ? BigInt(object.voteIntervalMissCounter.toString()) : BigInt(0);
    message.slashWindowMissCounter = object.slashWindowMissCounter !== undefined && object.slashWindowMissCounter !== null ? BigInt(object.slashWindowMissCounter.toString()) : BigInt(0);
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventVoteIntervalEnds(): EventVoteIntervalEnds {
  return {
    timeMillis: BigInt(0),
    blockHeight: BigInt(0),
    votePeriod: BigInt(0),
    validatorSummaries: [],
    previousVoteIntervalEndTimeMillis: BigInt(0),
    ballotVoteResults: []
  };
}
export const EventVoteIntervalEnds = {
  encode(message: EventVoteIntervalEnds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeMillis !== BigInt(0)) {
      writer.uint32(8).int64(message.timeMillis);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.blockHeight);
    }
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(24).int64(message.votePeriod);
    }
    for (const v of message.validatorSummaries) {
      ValidatorVoteIntervalSummary.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.previousVoteIntervalEndTimeMillis !== BigInt(0)) {
      writer.uint32(40).int64(message.previousVoteIntervalEndTimeMillis);
    }
    for (const v of message.ballotVoteResults) {
      BallotVoteResult.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVoteIntervalEnds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteIntervalEnds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeMillis = reader.int64();
          break;
        case 2:
          message.blockHeight = reader.int64();
          break;
        case 3:
          message.votePeriod = reader.int64();
          break;
        case 4:
          message.validatorSummaries.push(ValidatorVoteIntervalSummary.decode(reader, reader.uint32()));
          break;
        case 5:
          message.previousVoteIntervalEndTimeMillis = reader.int64();
          break;
        case 6:
          message.ballotVoteResults.push(BallotVoteResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteIntervalEnds {
    return {
      timeMillis: isSet(object.timeMillis) ? BigInt(object.timeMillis.toString()) : BigInt(0),
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      votePeriod: isSet(object.votePeriod) ? BigInt(object.votePeriod.toString()) : BigInt(0),
      validatorSummaries: Array.isArray(object?.validatorSummaries) ? object.validatorSummaries.map((e: any) => ValidatorVoteIntervalSummary.fromJSON(e)) : [],
      previousVoteIntervalEndTimeMillis: isSet(object.previousVoteIntervalEndTimeMillis) ? BigInt(object.previousVoteIntervalEndTimeMillis.toString()) : BigInt(0),
      ballotVoteResults: Array.isArray(object?.ballotVoteResults) ? object.ballotVoteResults.map((e: any) => BallotVoteResult.fromJSON(e)) : []
    };
  },
  toJSON(message: EventVoteIntervalEnds): unknown {
    const obj: any = {};
    message.timeMillis !== undefined && (obj.timeMillis = (message.timeMillis || BigInt(0)).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || BigInt(0)).toString());
    if (message.validatorSummaries) {
      obj.validatorSummaries = message.validatorSummaries.map(e => e ? ValidatorVoteIntervalSummary.toJSON(e) : undefined);
    } else {
      obj.validatorSummaries = [];
    }
    message.previousVoteIntervalEndTimeMillis !== undefined && (obj.previousVoteIntervalEndTimeMillis = (message.previousVoteIntervalEndTimeMillis || BigInt(0)).toString());
    if (message.ballotVoteResults) {
      obj.ballotVoteResults = message.ballotVoteResults.map(e => e ? BallotVoteResult.toJSON(e) : undefined);
    } else {
      obj.ballotVoteResults = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EventVoteIntervalEnds>): EventVoteIntervalEnds {
    const message = createBaseEventVoteIntervalEnds();
    message.timeMillis = object.timeMillis !== undefined && object.timeMillis !== null ? BigInt(object.timeMillis.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.validatorSummaries = object.validatorSummaries?.map(e => ValidatorVoteIntervalSummary.fromPartial(e)) || [];
    message.previousVoteIntervalEndTimeMillis = object.previousVoteIntervalEndTimeMillis !== undefined && object.previousVoteIntervalEndTimeMillis !== null ? BigInt(object.previousVoteIntervalEndTimeMillis.toString()) : BigInt(0);
    message.ballotVoteResults = object.ballotVoteResults?.map(e => BallotVoteResult.fromPartial(e)) || [];
    return message;
  }
};
function createBaseValidatorSlashWindowSummary(): ValidatorSlashWindowSummary {
  return {
    validator: "",
    validatorPower: BigInt(0),
    missCounter: BigInt(0),
    jailed: false,
    slashAmount: ""
  };
}
export const ValidatorSlashWindowSummary = {
  encode(message: ValidatorSlashWindowSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(16).int64(message.validatorPower);
    }
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(24).int64(message.missCounter);
    }
    if (message.jailed === true) {
      writer.uint32(32).bool(message.jailed);
    }
    if (message.slashAmount !== "") {
      writer.uint32(42).string(message.slashAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashWindowSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashWindowSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.validatorPower = reader.int64();
          break;
        case 3:
          message.missCounter = reader.int64();
          break;
        case 4:
          message.jailed = reader.bool();
          break;
        case 5:
          message.slashAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashWindowSummary {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      validatorPower: isSet(object.validatorPower) ? BigInt(object.validatorPower.toString()) : BigInt(0),
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0),
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      slashAmount: isSet(object.slashAmount) ? String(object.slashAmount) : ""
    };
  },
  toJSON(message: ValidatorSlashWindowSummary): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.validatorPower !== undefined && (obj.validatorPower = (message.validatorPower || BigInt(0)).toString());
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || BigInt(0)).toString());
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.slashAmount !== undefined && (obj.slashAmount = message.slashAmount);
    return obj;
  },
  fromPartial(object: Partial<ValidatorSlashWindowSummary>): ValidatorSlashWindowSummary {
    const message = createBaseValidatorSlashWindowSummary();
    message.validator = object.validator ?? "";
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt(0);
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    message.jailed = object.jailed ?? false;
    message.slashAmount = object.slashAmount ?? "";
    return message;
  }
};
function createBaseEventSlashWindowEnds(): EventSlashWindowEnds {
  return {
    slashWindow: BigInt(0),
    validatorSummaries: []
  };
}
export const EventSlashWindowEnds = {
  encode(message: EventSlashWindowEnds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.slashWindow !== BigInt(0)) {
      writer.uint32(8).int64(message.slashWindow);
    }
    for (const v of message.validatorSummaries) {
      ValidatorSlashWindowSummary.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSlashWindowEnds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSlashWindowEnds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashWindow = reader.int64();
          break;
        case 2:
          message.validatorSummaries.push(ValidatorSlashWindowSummary.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSlashWindowEnds {
    return {
      slashWindow: isSet(object.slashWindow) ? BigInt(object.slashWindow.toString()) : BigInt(0),
      validatorSummaries: Array.isArray(object?.validatorSummaries) ? object.validatorSummaries.map((e: any) => ValidatorSlashWindowSummary.fromJSON(e)) : []
    };
  },
  toJSON(message: EventSlashWindowEnds): unknown {
    const obj: any = {};
    message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || BigInt(0)).toString());
    if (message.validatorSummaries) {
      obj.validatorSummaries = message.validatorSummaries.map(e => e ? ValidatorSlashWindowSummary.toJSON(e) : undefined);
    } else {
      obj.validatorSummaries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EventSlashWindowEnds>): EventSlashWindowEnds {
    const message = createBaseEventSlashWindowEnds();
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
    message.validatorSummaries = object.validatorSummaries?.map(e => ValidatorSlashWindowSummary.fromPartial(e)) || [];
    return message;
  }
};
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