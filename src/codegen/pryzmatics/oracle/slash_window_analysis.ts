import { VoteType, voteTypeFromJSON, voteTypeToJSON } from "../../refractedlabs/oracle/v1/event";
import { VoteInterval, VoteIntervalAmino, VoteIntervalSDKType } from "./vote_interval";
import { isSet, padDecimal } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
export interface VotePayloadAnalysis {
  module: string;
  namespace: string;
  type: VoteType;
  majority: boolean;
}
export interface VotePayloadAnalysisProtoMsg {
  typeUrl: "/pryzmatics.oracle.VotePayloadAnalysis";
  value: Uint8Array;
}
export interface VotePayloadAnalysisAmino {
  module?: string;
  namespace?: string;
  type?: VoteType;
  majority?: boolean;
}
export interface VotePayloadAnalysisAminoMsg {
  type: "/pryzmatics.oracle.VotePayloadAnalysis";
  value: VotePayloadAnalysisAmino;
}
export interface VotePayloadAnalysisSDKType {
  module: string;
  namespace: string;
  type: VoteType;
  majority: boolean;
}
export interface ValidatorVoteIntervalAnalysis {
  power: bigint;
  preVoted: boolean;
  voted: boolean;
  missCounter: bigint;
  payloads: VotePayloadAnalysis[];
}
export interface ValidatorVoteIntervalAnalysisProtoMsg {
  typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalAnalysis";
  value: Uint8Array;
}
export interface ValidatorVoteIntervalAnalysisAmino {
  power?: string;
  pre_voted?: boolean;
  voted?: boolean;
  miss_counter?: string;
  payloads?: VotePayloadAnalysisAmino[];
}
export interface ValidatorVoteIntervalAnalysisAminoMsg {
  type: "/pryzmatics.oracle.ValidatorVoteIntervalAnalysis";
  value: ValidatorVoteIntervalAnalysisAmino;
}
export interface ValidatorVoteIntervalAnalysisSDKType {
  power: bigint;
  pre_voted: boolean;
  voted: boolean;
  miss_counter: bigint;
  payloads: VotePayloadAnalysisSDKType[];
}
export interface ValidatorSlashWindowAnalysis {
  validator: string;
  moniker: string;
  /** number of vote intervals the validator has been in the active set (validator was expected to vote) */
  voteIntervals: bigint;
  voteIntervalsWithMissCounter: bigint;
  missCounterNoPreVoteNorVote: bigint;
  missCounterNoVote: bigint;
  missCounterEmptyVote: bigint;
  missCounterNonEmptyVote: bigint;
  voteIntervalsWithMissCounterPercentage: string;
  missCounterPercentageNoPreVoteNorVote: string;
  missCounterPercentageNoVote: string;
  missCounterPercentageEmptyVote: string;
  missCounterPercentageNonEmptyVote: string;
  latestVoteInterval: ValidatorVoteIntervalAnalysis;
}
export interface ValidatorSlashWindowAnalysisProtoMsg {
  typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowAnalysis";
  value: Uint8Array;
}
export interface ValidatorSlashWindowAnalysisAmino {
  validator?: string;
  moniker?: string;
  /** number of vote intervals the validator has been in the active set (validator was expected to vote) */
  vote_intervals?: string;
  vote_intervals_with_miss_counter?: string;
  miss_counter_no_pre_vote_nor_vote?: string;
  miss_counter_no_vote?: string;
  miss_counter_empty_vote?: string;
  miss_counter_non_empty_vote?: string;
  vote_intervals_with_miss_counter_percentage?: string;
  miss_counter_percentage_no_pre_vote_nor_vote?: string;
  miss_counter_percentage_no_vote?: string;
  miss_counter_percentage_empty_vote?: string;
  miss_counter_percentage_non_empty_vote?: string;
  latest_vote_interval?: ValidatorVoteIntervalAnalysisAmino;
}
export interface ValidatorSlashWindowAnalysisAminoMsg {
  type: "/pryzmatics.oracle.ValidatorSlashWindowAnalysis";
  value: ValidatorSlashWindowAnalysisAmino;
}
export interface ValidatorSlashWindowAnalysisSDKType {
  validator: string;
  moniker: string;
  vote_intervals: bigint;
  vote_intervals_with_miss_counter: bigint;
  miss_counter_no_pre_vote_nor_vote: bigint;
  miss_counter_no_vote: bigint;
  miss_counter_empty_vote: bigint;
  miss_counter_non_empty_vote: bigint;
  vote_intervals_with_miss_counter_percentage: string;
  miss_counter_percentage_no_pre_vote_nor_vote: string;
  miss_counter_percentage_no_vote: string;
  miss_counter_percentage_empty_vote: string;
  miss_counter_percentage_non_empty_vote: string;
  latest_vote_interval: ValidatorVoteIntervalAnalysisSDKType;
}
export interface BallotVoteResultAnalysis {
  namespace: string;
  module: string;
  quorumReached: boolean;
  ballotPower: bigint;
  majorityAchieved: boolean;
  majorityVoteType: VoteType;
  /** error returned by a call to the corresponding module's OnMajorityVote callback method */
  callbackError: string;
}
export interface BallotVoteResultAnalysisProtoMsg {
  typeUrl: "/pryzmatics.oracle.BallotVoteResultAnalysis";
  value: Uint8Array;
}
export interface BallotVoteResultAnalysisAmino {
  namespace?: string;
  module?: string;
  quorum_reached?: boolean;
  ballot_power?: string;
  majority_achieved?: boolean;
  majority_vote_type?: VoteType;
  /** error returned by a call to the corresponding module's OnMajorityVote callback method */
  callback_error?: string;
}
export interface BallotVoteResultAnalysisAminoMsg {
  type: "/pryzmatics.oracle.BallotVoteResultAnalysis";
  value: BallotVoteResultAnalysisAmino;
}
export interface BallotVoteResultAnalysisSDKType {
  namespace: string;
  module: string;
  quorum_reached: boolean;
  ballot_power: bigint;
  majority_achieved: boolean;
  majority_vote_type: VoteType;
  callback_error: string;
}
export interface VoteIntervalAnalysis {
  voteInterval: VoteInterval;
  ballotVoteResults: BallotVoteResultAnalysis[];
}
export interface VoteIntervalAnalysisProtoMsg {
  typeUrl: "/pryzmatics.oracle.VoteIntervalAnalysis";
  value: Uint8Array;
}
export interface VoteIntervalAnalysisAmino {
  vote_interval?: VoteIntervalAmino;
  ballot_vote_results?: BallotVoteResultAnalysisAmino[];
}
export interface VoteIntervalAnalysisAminoMsg {
  type: "/pryzmatics.oracle.VoteIntervalAnalysis";
  value: VoteIntervalAnalysisAmino;
}
export interface VoteIntervalAnalysisSDKType {
  vote_interval: VoteIntervalSDKType;
  ballot_vote_results: BallotVoteResultAnalysisSDKType[];
}
export interface SlashWindowAnalysis {
  startBlockHeight: bigint;
  endBlockHeight: bigint;
  voteIntervals: bigint;
  validators: ValidatorSlashWindowAnalysis[];
  latestVoteInterval?: VoteIntervalAnalysis;
}
export interface SlashWindowAnalysisProtoMsg {
  typeUrl: "/pryzmatics.oracle.SlashWindowAnalysis";
  value: Uint8Array;
}
export interface SlashWindowAnalysisAmino {
  start_block_height?: string;
  end_block_height?: string;
  vote_intervals?: string;
  validators?: ValidatorSlashWindowAnalysisAmino[];
  latest_vote_interval?: VoteIntervalAnalysisAmino;
}
export interface SlashWindowAnalysisAminoMsg {
  type: "/pryzmatics.oracle.SlashWindowAnalysis";
  value: SlashWindowAnalysisAmino;
}
export interface SlashWindowAnalysisSDKType {
  start_block_height: bigint;
  end_block_height: bigint;
  vote_intervals: bigint;
  validators: ValidatorSlashWindowAnalysisSDKType[];
  latest_vote_interval?: VoteIntervalAnalysisSDKType;
}
function createBaseVotePayloadAnalysis(): VotePayloadAnalysis {
  return {
    module: "",
    namespace: "",
    type: 0,
    majority: false
  };
}
export const VotePayloadAnalysis = {
  typeUrl: "/pryzmatics.oracle.VotePayloadAnalysis",
  is(o: any): o is VotePayloadAnalysis {
    return o && (o.$typeUrl === VotePayloadAnalysis.typeUrl || typeof o.module === "string" && typeof o.namespace === "string" && isSet(o.type) && typeof o.majority === "boolean");
  },
  isSDK(o: any): o is VotePayloadAnalysisSDKType {
    return o && (o.$typeUrl === VotePayloadAnalysis.typeUrl || typeof o.module === "string" && typeof o.namespace === "string" && isSet(o.type) && typeof o.majority === "boolean");
  },
  isAmino(o: any): o is VotePayloadAnalysisAmino {
    return o && (o.$typeUrl === VotePayloadAnalysis.typeUrl || typeof o.module === "string" && typeof o.namespace === "string" && isSet(o.type) && typeof o.majority === "boolean");
  },
  encode(message: VotePayloadAnalysis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.majority === true) {
      writer.uint32(32).bool(message.majority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VotePayloadAnalysis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotePayloadAnalysis();
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
          message.type = (reader.int32() as any);
          break;
        case 4:
          message.majority = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VotePayloadAnalysis {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      type: isSet(object.type) ? voteTypeFromJSON(object.type) : -1,
      majority: isSet(object.majority) ? Boolean(object.majority) : false
    };
  },
  toJSON(message: VotePayloadAnalysis): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.type !== undefined && (obj.type = voteTypeToJSON(message.type));
    message.majority !== undefined && (obj.majority = message.majority);
    return obj;
  },
  fromPartial(object: Partial<VotePayloadAnalysis>): VotePayloadAnalysis {
    const message = createBaseVotePayloadAnalysis();
    message.module = object.module ?? "";
    message.namespace = object.namespace ?? "";
    message.type = object.type ?? 0;
    message.majority = object.majority ?? false;
    return message;
  },
  fromAmino(object: VotePayloadAnalysisAmino): VotePayloadAnalysis {
    const message = createBaseVotePayloadAnalysis();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.majority !== undefined && object.majority !== null) {
      message.majority = object.majority;
    }
    return message;
  },
  toAmino(message: VotePayloadAnalysis, useInterfaces: boolean = true): VotePayloadAnalysisAmino {
    const obj: any = {};
    obj.module = message.module === "" ? undefined : message.module;
    obj.namespace = message.namespace === "" ? undefined : message.namespace;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.majority = message.majority === false ? undefined : message.majority;
    return obj;
  },
  fromAminoMsg(object: VotePayloadAnalysisAminoMsg): VotePayloadAnalysis {
    return VotePayloadAnalysis.fromAmino(object.value);
  },
  fromProtoMsg(message: VotePayloadAnalysisProtoMsg, useInterfaces: boolean = true): VotePayloadAnalysis {
    return VotePayloadAnalysis.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VotePayloadAnalysis): Uint8Array {
    return VotePayloadAnalysis.encode(message).finish();
  },
  toProtoMsg(message: VotePayloadAnalysis): VotePayloadAnalysisProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.VotePayloadAnalysis",
      value: VotePayloadAnalysis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VotePayloadAnalysis.typeUrl, VotePayloadAnalysis);
function createBaseValidatorVoteIntervalAnalysis(): ValidatorVoteIntervalAnalysis {
  return {
    power: BigInt(0),
    preVoted: false,
    voted: false,
    missCounter: BigInt(0),
    payloads: []
  };
}
export const ValidatorVoteIntervalAnalysis = {
  typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalAnalysis",
  is(o: any): o is ValidatorVoteIntervalAnalysis {
    return o && (o.$typeUrl === ValidatorVoteIntervalAnalysis.typeUrl || typeof o.power === "bigint" && typeof o.preVoted === "boolean" && typeof o.voted === "boolean" && typeof o.missCounter === "bigint" && Array.isArray(o.payloads) && (!o.payloads.length || VotePayloadAnalysis.is(o.payloads[0])));
  },
  isSDK(o: any): o is ValidatorVoteIntervalAnalysisSDKType {
    return o && (o.$typeUrl === ValidatorVoteIntervalAnalysis.typeUrl || typeof o.power === "bigint" && typeof o.pre_voted === "boolean" && typeof o.voted === "boolean" && typeof o.miss_counter === "bigint" && Array.isArray(o.payloads) && (!o.payloads.length || VotePayloadAnalysis.isSDK(o.payloads[0])));
  },
  isAmino(o: any): o is ValidatorVoteIntervalAnalysisAmino {
    return o && (o.$typeUrl === ValidatorVoteIntervalAnalysis.typeUrl || typeof o.power === "bigint" && typeof o.pre_voted === "boolean" && typeof o.voted === "boolean" && typeof o.miss_counter === "bigint" && Array.isArray(o.payloads) && (!o.payloads.length || VotePayloadAnalysis.isAmino(o.payloads[0])));
  },
  encode(message: ValidatorVoteIntervalAnalysis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.power !== BigInt(0)) {
      writer.uint32(8).int64(message.power);
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
    for (const v of message.payloads) {
      VotePayloadAnalysis.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorVoteIntervalAnalysis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorVoteIntervalAnalysis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.int64();
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
          message.payloads.push(VotePayloadAnalysis.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorVoteIntervalAnalysis {
    return {
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
      preVoted: isSet(object.preVoted) ? Boolean(object.preVoted) : false,
      voted: isSet(object.voted) ? Boolean(object.voted) : false,
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0),
      payloads: Array.isArray(object?.payloads) ? object.payloads.map((e: any) => VotePayloadAnalysis.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorVoteIntervalAnalysis): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    message.preVoted !== undefined && (obj.preVoted = message.preVoted);
    message.voted !== undefined && (obj.voted = message.voted);
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || BigInt(0)).toString());
    if (message.payloads) {
      obj.payloads = message.payloads.map(e => e ? VotePayloadAnalysis.toJSON(e) : undefined);
    } else {
      obj.payloads = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorVoteIntervalAnalysis>): ValidatorVoteIntervalAnalysis {
    const message = createBaseValidatorVoteIntervalAnalysis();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.preVoted = object.preVoted ?? false;
    message.voted = object.voted ?? false;
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    message.payloads = object.payloads?.map(e => VotePayloadAnalysis.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorVoteIntervalAnalysisAmino): ValidatorVoteIntervalAnalysis {
    const message = createBaseValidatorVoteIntervalAnalysis();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.pre_voted !== undefined && object.pre_voted !== null) {
      message.preVoted = object.pre_voted;
    }
    if (object.voted !== undefined && object.voted !== null) {
      message.voted = object.voted;
    }
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.missCounter = BigInt(object.miss_counter);
    }
    message.payloads = object.payloads?.map(e => VotePayloadAnalysis.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorVoteIntervalAnalysis, useInterfaces: boolean = true): ValidatorVoteIntervalAnalysisAmino {
    const obj: any = {};
    obj.power = message.power ? message.power.toString() : undefined;
    obj.pre_voted = message.preVoted === false ? undefined : message.preVoted;
    obj.voted = message.voted === false ? undefined : message.voted;
    obj.miss_counter = message.missCounter ? message.missCounter.toString() : undefined;
    if (message.payloads) {
      obj.payloads = message.payloads.map(e => e ? VotePayloadAnalysis.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.payloads = message.payloads;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorVoteIntervalAnalysisAminoMsg): ValidatorVoteIntervalAnalysis {
    return ValidatorVoteIntervalAnalysis.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorVoteIntervalAnalysisProtoMsg, useInterfaces: boolean = true): ValidatorVoteIntervalAnalysis {
    return ValidatorVoteIntervalAnalysis.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorVoteIntervalAnalysis): Uint8Array {
    return ValidatorVoteIntervalAnalysis.encode(message).finish();
  },
  toProtoMsg(message: ValidatorVoteIntervalAnalysis): ValidatorVoteIntervalAnalysisProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalAnalysis",
      value: ValidatorVoteIntervalAnalysis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorVoteIntervalAnalysis.typeUrl, ValidatorVoteIntervalAnalysis);
function createBaseValidatorSlashWindowAnalysis(): ValidatorSlashWindowAnalysis {
  return {
    validator: "",
    moniker: "",
    voteIntervals: BigInt(0),
    voteIntervalsWithMissCounter: BigInt(0),
    missCounterNoPreVoteNorVote: BigInt(0),
    missCounterNoVote: BigInt(0),
    missCounterEmptyVote: BigInt(0),
    missCounterNonEmptyVote: BigInt(0),
    voteIntervalsWithMissCounterPercentage: "",
    missCounterPercentageNoPreVoteNorVote: "",
    missCounterPercentageNoVote: "",
    missCounterPercentageEmptyVote: "",
    missCounterPercentageNonEmptyVote: "",
    latestVoteInterval: ValidatorVoteIntervalAnalysis.fromPartial({})
  };
}
export const ValidatorSlashWindowAnalysis = {
  typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowAnalysis",
  is(o: any): o is ValidatorSlashWindowAnalysis {
    return o && (o.$typeUrl === ValidatorSlashWindowAnalysis.typeUrl || typeof o.validator === "string" && typeof o.moniker === "string" && typeof o.voteIntervals === "bigint" && typeof o.voteIntervalsWithMissCounter === "bigint" && typeof o.missCounterNoPreVoteNorVote === "bigint" && typeof o.missCounterNoVote === "bigint" && typeof o.missCounterEmptyVote === "bigint" && typeof o.missCounterNonEmptyVote === "bigint" && typeof o.voteIntervalsWithMissCounterPercentage === "string" && typeof o.missCounterPercentageNoPreVoteNorVote === "string" && typeof o.missCounterPercentageNoVote === "string" && typeof o.missCounterPercentageEmptyVote === "string" && typeof o.missCounterPercentageNonEmptyVote === "string" && ValidatorVoteIntervalAnalysis.is(o.latestVoteInterval));
  },
  isSDK(o: any): o is ValidatorSlashWindowAnalysisSDKType {
    return o && (o.$typeUrl === ValidatorSlashWindowAnalysis.typeUrl || typeof o.validator === "string" && typeof o.moniker === "string" && typeof o.vote_intervals === "bigint" && typeof o.vote_intervals_with_miss_counter === "bigint" && typeof o.miss_counter_no_pre_vote_nor_vote === "bigint" && typeof o.miss_counter_no_vote === "bigint" && typeof o.miss_counter_empty_vote === "bigint" && typeof o.miss_counter_non_empty_vote === "bigint" && typeof o.vote_intervals_with_miss_counter_percentage === "string" && typeof o.miss_counter_percentage_no_pre_vote_nor_vote === "string" && typeof o.miss_counter_percentage_no_vote === "string" && typeof o.miss_counter_percentage_empty_vote === "string" && typeof o.miss_counter_percentage_non_empty_vote === "string" && ValidatorVoteIntervalAnalysis.isSDK(o.latest_vote_interval));
  },
  isAmino(o: any): o is ValidatorSlashWindowAnalysisAmino {
    return o && (o.$typeUrl === ValidatorSlashWindowAnalysis.typeUrl || typeof o.validator === "string" && typeof o.moniker === "string" && typeof o.vote_intervals === "bigint" && typeof o.vote_intervals_with_miss_counter === "bigint" && typeof o.miss_counter_no_pre_vote_nor_vote === "bigint" && typeof o.miss_counter_no_vote === "bigint" && typeof o.miss_counter_empty_vote === "bigint" && typeof o.miss_counter_non_empty_vote === "bigint" && typeof o.vote_intervals_with_miss_counter_percentage === "string" && typeof o.miss_counter_percentage_no_pre_vote_nor_vote === "string" && typeof o.miss_counter_percentage_no_vote === "string" && typeof o.miss_counter_percentage_empty_vote === "string" && typeof o.miss_counter_percentage_non_empty_vote === "string" && ValidatorVoteIntervalAnalysis.isAmino(o.latest_vote_interval));
  },
  encode(message: ValidatorSlashWindowAnalysis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.voteIntervals !== BigInt(0)) {
      writer.uint32(24).int64(message.voteIntervals);
    }
    if (message.voteIntervalsWithMissCounter !== BigInt(0)) {
      writer.uint32(32).int64(message.voteIntervalsWithMissCounter);
    }
    if (message.missCounterNoPreVoteNorVote !== BigInt(0)) {
      writer.uint32(40).int64(message.missCounterNoPreVoteNorVote);
    }
    if (message.missCounterNoVote !== BigInt(0)) {
      writer.uint32(48).int64(message.missCounterNoVote);
    }
    if (message.missCounterEmptyVote !== BigInt(0)) {
      writer.uint32(56).int64(message.missCounterEmptyVote);
    }
    if (message.missCounterNonEmptyVote !== BigInt(0)) {
      writer.uint32(64).int64(message.missCounterNonEmptyVote);
    }
    if (message.voteIntervalsWithMissCounterPercentage !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.voteIntervalsWithMissCounterPercentage, 18).atomics);
    }
    if (message.missCounterPercentageNoPreVoteNorVote !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.missCounterPercentageNoPreVoteNorVote, 18).atomics);
    }
    if (message.missCounterPercentageNoVote !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.missCounterPercentageNoVote, 18).atomics);
    }
    if (message.missCounterPercentageEmptyVote !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.missCounterPercentageEmptyVote, 18).atomics);
    }
    if (message.missCounterPercentageNonEmptyVote !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.missCounterPercentageNonEmptyVote, 18).atomics);
    }
    if (message.latestVoteInterval !== undefined) {
      ValidatorVoteIntervalAnalysis.encode(message.latestVoteInterval, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorSlashWindowAnalysis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashWindowAnalysis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.voteIntervals = reader.int64();
          break;
        case 4:
          message.voteIntervalsWithMissCounter = reader.int64();
          break;
        case 5:
          message.missCounterNoPreVoteNorVote = reader.int64();
          break;
        case 6:
          message.missCounterNoVote = reader.int64();
          break;
        case 7:
          message.missCounterEmptyVote = reader.int64();
          break;
        case 8:
          message.missCounterNonEmptyVote = reader.int64();
          break;
        case 9:
          message.voteIntervalsWithMissCounterPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.missCounterPercentageNoPreVoteNorVote = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.missCounterPercentageNoVote = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.missCounterPercentageEmptyVote = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.missCounterPercentageNonEmptyVote = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.latestVoteInterval = ValidatorVoteIntervalAnalysis.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashWindowAnalysis {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      voteIntervals: isSet(object.voteIntervals) ? BigInt(object.voteIntervals.toString()) : BigInt(0),
      voteIntervalsWithMissCounter: isSet(object.voteIntervalsWithMissCounter) ? BigInt(object.voteIntervalsWithMissCounter.toString()) : BigInt(0),
      missCounterNoPreVoteNorVote: isSet(object.missCounterNoPreVoteNorVote) ? BigInt(object.missCounterNoPreVoteNorVote.toString()) : BigInt(0),
      missCounterNoVote: isSet(object.missCounterNoVote) ? BigInt(object.missCounterNoVote.toString()) : BigInt(0),
      missCounterEmptyVote: isSet(object.missCounterEmptyVote) ? BigInt(object.missCounterEmptyVote.toString()) : BigInt(0),
      missCounterNonEmptyVote: isSet(object.missCounterNonEmptyVote) ? BigInt(object.missCounterNonEmptyVote.toString()) : BigInt(0),
      voteIntervalsWithMissCounterPercentage: isSet(object.voteIntervalsWithMissCounterPercentage) ? String(object.voteIntervalsWithMissCounterPercentage) : "",
      missCounterPercentageNoPreVoteNorVote: isSet(object.missCounterPercentageNoPreVoteNorVote) ? String(object.missCounterPercentageNoPreVoteNorVote) : "",
      missCounterPercentageNoVote: isSet(object.missCounterPercentageNoVote) ? String(object.missCounterPercentageNoVote) : "",
      missCounterPercentageEmptyVote: isSet(object.missCounterPercentageEmptyVote) ? String(object.missCounterPercentageEmptyVote) : "",
      missCounterPercentageNonEmptyVote: isSet(object.missCounterPercentageNonEmptyVote) ? String(object.missCounterPercentageNonEmptyVote) : "",
      latestVoteInterval: isSet(object.latestVoteInterval) ? ValidatorVoteIntervalAnalysis.fromJSON(object.latestVoteInterval) : undefined
    };
  },
  toJSON(message: ValidatorSlashWindowAnalysis): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.voteIntervals !== undefined && (obj.voteIntervals = (message.voteIntervals || BigInt(0)).toString());
    message.voteIntervalsWithMissCounter !== undefined && (obj.voteIntervalsWithMissCounter = (message.voteIntervalsWithMissCounter || BigInt(0)).toString());
    message.missCounterNoPreVoteNorVote !== undefined && (obj.missCounterNoPreVoteNorVote = (message.missCounterNoPreVoteNorVote || BigInt(0)).toString());
    message.missCounterNoVote !== undefined && (obj.missCounterNoVote = (message.missCounterNoVote || BigInt(0)).toString());
    message.missCounterEmptyVote !== undefined && (obj.missCounterEmptyVote = (message.missCounterEmptyVote || BigInt(0)).toString());
    message.missCounterNonEmptyVote !== undefined && (obj.missCounterNonEmptyVote = (message.missCounterNonEmptyVote || BigInt(0)).toString());
    message.voteIntervalsWithMissCounterPercentage !== undefined && (obj.voteIntervalsWithMissCounterPercentage = message.voteIntervalsWithMissCounterPercentage);
    message.missCounterPercentageNoPreVoteNorVote !== undefined && (obj.missCounterPercentageNoPreVoteNorVote = message.missCounterPercentageNoPreVoteNorVote);
    message.missCounterPercentageNoVote !== undefined && (obj.missCounterPercentageNoVote = message.missCounterPercentageNoVote);
    message.missCounterPercentageEmptyVote !== undefined && (obj.missCounterPercentageEmptyVote = message.missCounterPercentageEmptyVote);
    message.missCounterPercentageNonEmptyVote !== undefined && (obj.missCounterPercentageNonEmptyVote = message.missCounterPercentageNonEmptyVote);
    message.latestVoteInterval !== undefined && (obj.latestVoteInterval = message.latestVoteInterval ? ValidatorVoteIntervalAnalysis.toJSON(message.latestVoteInterval) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ValidatorSlashWindowAnalysis>): ValidatorSlashWindowAnalysis {
    const message = createBaseValidatorSlashWindowAnalysis();
    message.validator = object.validator ?? "";
    message.moniker = object.moniker ?? "";
    message.voteIntervals = object.voteIntervals !== undefined && object.voteIntervals !== null ? BigInt(object.voteIntervals.toString()) : BigInt(0);
    message.voteIntervalsWithMissCounter = object.voteIntervalsWithMissCounter !== undefined && object.voteIntervalsWithMissCounter !== null ? BigInt(object.voteIntervalsWithMissCounter.toString()) : BigInt(0);
    message.missCounterNoPreVoteNorVote = object.missCounterNoPreVoteNorVote !== undefined && object.missCounterNoPreVoteNorVote !== null ? BigInt(object.missCounterNoPreVoteNorVote.toString()) : BigInt(0);
    message.missCounterNoVote = object.missCounterNoVote !== undefined && object.missCounterNoVote !== null ? BigInt(object.missCounterNoVote.toString()) : BigInt(0);
    message.missCounterEmptyVote = object.missCounterEmptyVote !== undefined && object.missCounterEmptyVote !== null ? BigInt(object.missCounterEmptyVote.toString()) : BigInt(0);
    message.missCounterNonEmptyVote = object.missCounterNonEmptyVote !== undefined && object.missCounterNonEmptyVote !== null ? BigInt(object.missCounterNonEmptyVote.toString()) : BigInt(0);
    message.voteIntervalsWithMissCounterPercentage = object.voteIntervalsWithMissCounterPercentage ?? "";
    message.missCounterPercentageNoPreVoteNorVote = object.missCounterPercentageNoPreVoteNorVote ?? "";
    message.missCounterPercentageNoVote = object.missCounterPercentageNoVote ?? "";
    message.missCounterPercentageEmptyVote = object.missCounterPercentageEmptyVote ?? "";
    message.missCounterPercentageNonEmptyVote = object.missCounterPercentageNonEmptyVote ?? "";
    message.latestVoteInterval = object.latestVoteInterval !== undefined && object.latestVoteInterval !== null ? ValidatorVoteIntervalAnalysis.fromPartial(object.latestVoteInterval) : undefined;
    return message;
  },
  fromAmino(object: ValidatorSlashWindowAnalysisAmino): ValidatorSlashWindowAnalysis {
    const message = createBaseValidatorSlashWindowAnalysis();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.vote_intervals !== undefined && object.vote_intervals !== null) {
      message.voteIntervals = BigInt(object.vote_intervals);
    }
    if (object.vote_intervals_with_miss_counter !== undefined && object.vote_intervals_with_miss_counter !== null) {
      message.voteIntervalsWithMissCounter = BigInt(object.vote_intervals_with_miss_counter);
    }
    if (object.miss_counter_no_pre_vote_nor_vote !== undefined && object.miss_counter_no_pre_vote_nor_vote !== null) {
      message.missCounterNoPreVoteNorVote = BigInt(object.miss_counter_no_pre_vote_nor_vote);
    }
    if (object.miss_counter_no_vote !== undefined && object.miss_counter_no_vote !== null) {
      message.missCounterNoVote = BigInt(object.miss_counter_no_vote);
    }
    if (object.miss_counter_empty_vote !== undefined && object.miss_counter_empty_vote !== null) {
      message.missCounterEmptyVote = BigInt(object.miss_counter_empty_vote);
    }
    if (object.miss_counter_non_empty_vote !== undefined && object.miss_counter_non_empty_vote !== null) {
      message.missCounterNonEmptyVote = BigInt(object.miss_counter_non_empty_vote);
    }
    if (object.vote_intervals_with_miss_counter_percentage !== undefined && object.vote_intervals_with_miss_counter_percentage !== null) {
      message.voteIntervalsWithMissCounterPercentage = object.vote_intervals_with_miss_counter_percentage;
    }
    if (object.miss_counter_percentage_no_pre_vote_nor_vote !== undefined && object.miss_counter_percentage_no_pre_vote_nor_vote !== null) {
      message.missCounterPercentageNoPreVoteNorVote = object.miss_counter_percentage_no_pre_vote_nor_vote;
    }
    if (object.miss_counter_percentage_no_vote !== undefined && object.miss_counter_percentage_no_vote !== null) {
      message.missCounterPercentageNoVote = object.miss_counter_percentage_no_vote;
    }
    if (object.miss_counter_percentage_empty_vote !== undefined && object.miss_counter_percentage_empty_vote !== null) {
      message.missCounterPercentageEmptyVote = object.miss_counter_percentage_empty_vote;
    }
    if (object.miss_counter_percentage_non_empty_vote !== undefined && object.miss_counter_percentage_non_empty_vote !== null) {
      message.missCounterPercentageNonEmptyVote = object.miss_counter_percentage_non_empty_vote;
    }
    if (object.latest_vote_interval !== undefined && object.latest_vote_interval !== null) {
      message.latestVoteInterval = ValidatorVoteIntervalAnalysis.fromAmino(object.latest_vote_interval);
    }
    return message;
  },
  toAmino(message: ValidatorSlashWindowAnalysis, useInterfaces: boolean = true): ValidatorSlashWindowAnalysisAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.vote_intervals = message.voteIntervals ? message.voteIntervals.toString() : undefined;
    obj.vote_intervals_with_miss_counter = message.voteIntervalsWithMissCounter ? message.voteIntervalsWithMissCounter.toString() : undefined;
    obj.miss_counter_no_pre_vote_nor_vote = message.missCounterNoPreVoteNorVote ? message.missCounterNoPreVoteNorVote.toString() : undefined;
    obj.miss_counter_no_vote = message.missCounterNoVote ? message.missCounterNoVote.toString() : undefined;
    obj.miss_counter_empty_vote = message.missCounterEmptyVote ? message.missCounterEmptyVote.toString() : undefined;
    obj.miss_counter_non_empty_vote = message.missCounterNonEmptyVote ? message.missCounterNonEmptyVote.toString() : undefined;
    obj.vote_intervals_with_miss_counter_percentage = padDecimal(message.voteIntervalsWithMissCounterPercentage) === "" ? undefined : padDecimal(message.voteIntervalsWithMissCounterPercentage);
    obj.miss_counter_percentage_no_pre_vote_nor_vote = padDecimal(message.missCounterPercentageNoPreVoteNorVote) === "" ? undefined : padDecimal(message.missCounterPercentageNoPreVoteNorVote);
    obj.miss_counter_percentage_no_vote = padDecimal(message.missCounterPercentageNoVote) === "" ? undefined : padDecimal(message.missCounterPercentageNoVote);
    obj.miss_counter_percentage_empty_vote = padDecimal(message.missCounterPercentageEmptyVote) === "" ? undefined : padDecimal(message.missCounterPercentageEmptyVote);
    obj.miss_counter_percentage_non_empty_vote = padDecimal(message.missCounterPercentageNonEmptyVote) === "" ? undefined : padDecimal(message.missCounterPercentageNonEmptyVote);
    obj.latest_vote_interval = message.latestVoteInterval ? ValidatorVoteIntervalAnalysis.toAmino(message.latestVoteInterval, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashWindowAnalysisAminoMsg): ValidatorSlashWindowAnalysis {
    return ValidatorSlashWindowAnalysis.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorSlashWindowAnalysisProtoMsg, useInterfaces: boolean = true): ValidatorSlashWindowAnalysis {
    return ValidatorSlashWindowAnalysis.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorSlashWindowAnalysis): Uint8Array {
    return ValidatorSlashWindowAnalysis.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashWindowAnalysis): ValidatorSlashWindowAnalysisProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowAnalysis",
      value: ValidatorSlashWindowAnalysis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSlashWindowAnalysis.typeUrl, ValidatorSlashWindowAnalysis);
function createBaseBallotVoteResultAnalysis(): BallotVoteResultAnalysis {
  return {
    namespace: "",
    module: "",
    quorumReached: false,
    ballotPower: BigInt(0),
    majorityAchieved: false,
    majorityVoteType: 0,
    callbackError: ""
  };
}
export const BallotVoteResultAnalysis = {
  typeUrl: "/pryzmatics.oracle.BallotVoteResultAnalysis",
  is(o: any): o is BallotVoteResultAnalysis {
    return o && (o.$typeUrl === BallotVoteResultAnalysis.typeUrl || typeof o.namespace === "string" && typeof o.module === "string" && typeof o.quorumReached === "boolean" && typeof o.ballotPower === "bigint" && typeof o.majorityAchieved === "boolean" && isSet(o.majorityVoteType) && typeof o.callbackError === "string");
  },
  isSDK(o: any): o is BallotVoteResultAnalysisSDKType {
    return o && (o.$typeUrl === BallotVoteResultAnalysis.typeUrl || typeof o.namespace === "string" && typeof o.module === "string" && typeof o.quorum_reached === "boolean" && typeof o.ballot_power === "bigint" && typeof o.majority_achieved === "boolean" && isSet(o.majority_vote_type) && typeof o.callback_error === "string");
  },
  isAmino(o: any): o is BallotVoteResultAnalysisAmino {
    return o && (o.$typeUrl === BallotVoteResultAnalysis.typeUrl || typeof o.namespace === "string" && typeof o.module === "string" && typeof o.quorum_reached === "boolean" && typeof o.ballot_power === "bigint" && typeof o.majority_achieved === "boolean" && isSet(o.majority_vote_type) && typeof o.callback_error === "string");
  },
  encode(message: BallotVoteResultAnalysis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.callbackError !== "") {
      writer.uint32(58).string(message.callbackError);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BallotVoteResultAnalysis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBallotVoteResultAnalysis();
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
          message.callbackError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BallotVoteResultAnalysis {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      module: isSet(object.module) ? String(object.module) : "",
      quorumReached: isSet(object.quorumReached) ? Boolean(object.quorumReached) : false,
      ballotPower: isSet(object.ballotPower) ? BigInt(object.ballotPower.toString()) : BigInt(0),
      majorityAchieved: isSet(object.majorityAchieved) ? Boolean(object.majorityAchieved) : false,
      majorityVoteType: isSet(object.majorityVoteType) ? voteTypeFromJSON(object.majorityVoteType) : -1,
      callbackError: isSet(object.callbackError) ? String(object.callbackError) : ""
    };
  },
  toJSON(message: BallotVoteResultAnalysis): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.module !== undefined && (obj.module = message.module);
    message.quorumReached !== undefined && (obj.quorumReached = message.quorumReached);
    message.ballotPower !== undefined && (obj.ballotPower = (message.ballotPower || BigInt(0)).toString());
    message.majorityAchieved !== undefined && (obj.majorityAchieved = message.majorityAchieved);
    message.majorityVoteType !== undefined && (obj.majorityVoteType = voteTypeToJSON(message.majorityVoteType));
    message.callbackError !== undefined && (obj.callbackError = message.callbackError);
    return obj;
  },
  fromPartial(object: Partial<BallotVoteResultAnalysis>): BallotVoteResultAnalysis {
    const message = createBaseBallotVoteResultAnalysis();
    message.namespace = object.namespace ?? "";
    message.module = object.module ?? "";
    message.quorumReached = object.quorumReached ?? false;
    message.ballotPower = object.ballotPower !== undefined && object.ballotPower !== null ? BigInt(object.ballotPower.toString()) : BigInt(0);
    message.majorityAchieved = object.majorityAchieved ?? false;
    message.majorityVoteType = object.majorityVoteType ?? 0;
    message.callbackError = object.callbackError ?? "";
    return message;
  },
  fromAmino(object: BallotVoteResultAnalysisAmino): BallotVoteResultAnalysis {
    const message = createBaseBallotVoteResultAnalysis();
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.quorum_reached !== undefined && object.quorum_reached !== null) {
      message.quorumReached = object.quorum_reached;
    }
    if (object.ballot_power !== undefined && object.ballot_power !== null) {
      message.ballotPower = BigInt(object.ballot_power);
    }
    if (object.majority_achieved !== undefined && object.majority_achieved !== null) {
      message.majorityAchieved = object.majority_achieved;
    }
    if (object.majority_vote_type !== undefined && object.majority_vote_type !== null) {
      message.majorityVoteType = object.majority_vote_type;
    }
    if (object.callback_error !== undefined && object.callback_error !== null) {
      message.callbackError = object.callback_error;
    }
    return message;
  },
  toAmino(message: BallotVoteResultAnalysis, useInterfaces: boolean = true): BallotVoteResultAnalysisAmino {
    const obj: any = {};
    obj.namespace = message.namespace === "" ? undefined : message.namespace;
    obj.module = message.module === "" ? undefined : message.module;
    obj.quorum_reached = message.quorumReached === false ? undefined : message.quorumReached;
    obj.ballot_power = message.ballotPower ? message.ballotPower.toString() : undefined;
    obj.majority_achieved = message.majorityAchieved === false ? undefined : message.majorityAchieved;
    obj.majority_vote_type = message.majorityVoteType === 0 ? undefined : message.majorityVoteType;
    obj.callback_error = message.callbackError === "" ? undefined : message.callbackError;
    return obj;
  },
  fromAminoMsg(object: BallotVoteResultAnalysisAminoMsg): BallotVoteResultAnalysis {
    return BallotVoteResultAnalysis.fromAmino(object.value);
  },
  fromProtoMsg(message: BallotVoteResultAnalysisProtoMsg, useInterfaces: boolean = true): BallotVoteResultAnalysis {
    return BallotVoteResultAnalysis.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BallotVoteResultAnalysis): Uint8Array {
    return BallotVoteResultAnalysis.encode(message).finish();
  },
  toProtoMsg(message: BallotVoteResultAnalysis): BallotVoteResultAnalysisProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.BallotVoteResultAnalysis",
      value: BallotVoteResultAnalysis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BallotVoteResultAnalysis.typeUrl, BallotVoteResultAnalysis);
function createBaseVoteIntervalAnalysis(): VoteIntervalAnalysis {
  return {
    voteInterval: VoteInterval.fromPartial({}),
    ballotVoteResults: []
  };
}
export const VoteIntervalAnalysis = {
  typeUrl: "/pryzmatics.oracle.VoteIntervalAnalysis",
  is(o: any): o is VoteIntervalAnalysis {
    return o && (o.$typeUrl === VoteIntervalAnalysis.typeUrl || VoteInterval.is(o.voteInterval) && Array.isArray(o.ballotVoteResults) && (!o.ballotVoteResults.length || BallotVoteResultAnalysis.is(o.ballotVoteResults[0])));
  },
  isSDK(o: any): o is VoteIntervalAnalysisSDKType {
    return o && (o.$typeUrl === VoteIntervalAnalysis.typeUrl || VoteInterval.isSDK(o.vote_interval) && Array.isArray(o.ballot_vote_results) && (!o.ballot_vote_results.length || BallotVoteResultAnalysis.isSDK(o.ballot_vote_results[0])));
  },
  isAmino(o: any): o is VoteIntervalAnalysisAmino {
    return o && (o.$typeUrl === VoteIntervalAnalysis.typeUrl || VoteInterval.isAmino(o.vote_interval) && Array.isArray(o.ballot_vote_results) && (!o.ballot_vote_results.length || BallotVoteResultAnalysis.isAmino(o.ballot_vote_results[0])));
  },
  encode(message: VoteIntervalAnalysis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteInterval !== undefined) {
      VoteInterval.encode(message.voteInterval, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ballotVoteResults) {
      BallotVoteResultAnalysis.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VoteIntervalAnalysis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteIntervalAnalysis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteInterval = VoteInterval.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.ballotVoteResults.push(BallotVoteResultAnalysis.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VoteIntervalAnalysis {
    return {
      voteInterval: isSet(object.voteInterval) ? VoteInterval.fromJSON(object.voteInterval) : undefined,
      ballotVoteResults: Array.isArray(object?.ballotVoteResults) ? object.ballotVoteResults.map((e: any) => BallotVoteResultAnalysis.fromJSON(e)) : []
    };
  },
  toJSON(message: VoteIntervalAnalysis): unknown {
    const obj: any = {};
    message.voteInterval !== undefined && (obj.voteInterval = message.voteInterval ? VoteInterval.toJSON(message.voteInterval) : undefined);
    if (message.ballotVoteResults) {
      obj.ballotVoteResults = message.ballotVoteResults.map(e => e ? BallotVoteResultAnalysis.toJSON(e) : undefined);
    } else {
      obj.ballotVoteResults = [];
    }
    return obj;
  },
  fromPartial(object: Partial<VoteIntervalAnalysis>): VoteIntervalAnalysis {
    const message = createBaseVoteIntervalAnalysis();
    message.voteInterval = object.voteInterval !== undefined && object.voteInterval !== null ? VoteInterval.fromPartial(object.voteInterval) : undefined;
    message.ballotVoteResults = object.ballotVoteResults?.map(e => BallotVoteResultAnalysis.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VoteIntervalAnalysisAmino): VoteIntervalAnalysis {
    const message = createBaseVoteIntervalAnalysis();
    if (object.vote_interval !== undefined && object.vote_interval !== null) {
      message.voteInterval = VoteInterval.fromAmino(object.vote_interval);
    }
    message.ballotVoteResults = object.ballot_vote_results?.map(e => BallotVoteResultAnalysis.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: VoteIntervalAnalysis, useInterfaces: boolean = true): VoteIntervalAnalysisAmino {
    const obj: any = {};
    obj.vote_interval = message.voteInterval ? VoteInterval.toAmino(message.voteInterval, useInterfaces) : undefined;
    if (message.ballotVoteResults) {
      obj.ballot_vote_results = message.ballotVoteResults.map(e => e ? BallotVoteResultAnalysis.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.ballot_vote_results = message.ballotVoteResults;
    }
    return obj;
  },
  fromAminoMsg(object: VoteIntervalAnalysisAminoMsg): VoteIntervalAnalysis {
    return VoteIntervalAnalysis.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteIntervalAnalysisProtoMsg, useInterfaces: boolean = true): VoteIntervalAnalysis {
    return VoteIntervalAnalysis.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VoteIntervalAnalysis): Uint8Array {
    return VoteIntervalAnalysis.encode(message).finish();
  },
  toProtoMsg(message: VoteIntervalAnalysis): VoteIntervalAnalysisProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.VoteIntervalAnalysis",
      value: VoteIntervalAnalysis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VoteIntervalAnalysis.typeUrl, VoteIntervalAnalysis);
function createBaseSlashWindowAnalysis(): SlashWindowAnalysis {
  return {
    startBlockHeight: BigInt(0),
    endBlockHeight: BigInt(0),
    voteIntervals: BigInt(0),
    validators: [],
    latestVoteInterval: undefined
  };
}
export const SlashWindowAnalysis = {
  typeUrl: "/pryzmatics.oracle.SlashWindowAnalysis",
  is(o: any): o is SlashWindowAnalysis {
    return o && (o.$typeUrl === SlashWindowAnalysis.typeUrl || typeof o.startBlockHeight === "bigint" && typeof o.endBlockHeight === "bigint" && typeof o.voteIntervals === "bigint" && Array.isArray(o.validators) && (!o.validators.length || ValidatorSlashWindowAnalysis.is(o.validators[0])));
  },
  isSDK(o: any): o is SlashWindowAnalysisSDKType {
    return o && (o.$typeUrl === SlashWindowAnalysis.typeUrl || typeof o.start_block_height === "bigint" && typeof o.end_block_height === "bigint" && typeof o.vote_intervals === "bigint" && Array.isArray(o.validators) && (!o.validators.length || ValidatorSlashWindowAnalysis.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is SlashWindowAnalysisAmino {
    return o && (o.$typeUrl === SlashWindowAnalysis.typeUrl || typeof o.start_block_height === "bigint" && typeof o.end_block_height === "bigint" && typeof o.vote_intervals === "bigint" && Array.isArray(o.validators) && (!o.validators.length || ValidatorSlashWindowAnalysis.isAmino(o.validators[0])));
  },
  encode(message: SlashWindowAnalysis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startBlockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.startBlockHeight);
    }
    if (message.endBlockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.endBlockHeight);
    }
    if (message.voteIntervals !== BigInt(0)) {
      writer.uint32(24).int64(message.voteIntervals);
    }
    for (const v of message.validators) {
      ValidatorSlashWindowAnalysis.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.latestVoteInterval !== undefined) {
      VoteIntervalAnalysis.encode(message.latestVoteInterval, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SlashWindowAnalysis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashWindowAnalysis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlockHeight = reader.int64();
          break;
        case 2:
          message.endBlockHeight = reader.int64();
          break;
        case 3:
          message.voteIntervals = reader.int64();
          break;
        case 4:
          message.validators.push(ValidatorSlashWindowAnalysis.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.latestVoteInterval = VoteIntervalAnalysis.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SlashWindowAnalysis {
    return {
      startBlockHeight: isSet(object.startBlockHeight) ? BigInt(object.startBlockHeight.toString()) : BigInt(0),
      endBlockHeight: isSet(object.endBlockHeight) ? BigInt(object.endBlockHeight.toString()) : BigInt(0),
      voteIntervals: isSet(object.voteIntervals) ? BigInt(object.voteIntervals.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorSlashWindowAnalysis.fromJSON(e)) : [],
      latestVoteInterval: isSet(object.latestVoteInterval) ? VoteIntervalAnalysis.fromJSON(object.latestVoteInterval) : undefined
    };
  },
  toJSON(message: SlashWindowAnalysis): unknown {
    const obj: any = {};
    message.startBlockHeight !== undefined && (obj.startBlockHeight = (message.startBlockHeight || BigInt(0)).toString());
    message.endBlockHeight !== undefined && (obj.endBlockHeight = (message.endBlockHeight || BigInt(0)).toString());
    message.voteIntervals !== undefined && (obj.voteIntervals = (message.voteIntervals || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorSlashWindowAnalysis.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.latestVoteInterval !== undefined && (obj.latestVoteInterval = message.latestVoteInterval ? VoteIntervalAnalysis.toJSON(message.latestVoteInterval) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SlashWindowAnalysis>): SlashWindowAnalysis {
    const message = createBaseSlashWindowAnalysis();
    message.startBlockHeight = object.startBlockHeight !== undefined && object.startBlockHeight !== null ? BigInt(object.startBlockHeight.toString()) : BigInt(0);
    message.endBlockHeight = object.endBlockHeight !== undefined && object.endBlockHeight !== null ? BigInt(object.endBlockHeight.toString()) : BigInt(0);
    message.voteIntervals = object.voteIntervals !== undefined && object.voteIntervals !== null ? BigInt(object.voteIntervals.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => ValidatorSlashWindowAnalysis.fromPartial(e)) || [];
    message.latestVoteInterval = object.latestVoteInterval !== undefined && object.latestVoteInterval !== null ? VoteIntervalAnalysis.fromPartial(object.latestVoteInterval) : undefined;
    return message;
  },
  fromAmino(object: SlashWindowAnalysisAmino): SlashWindowAnalysis {
    const message = createBaseSlashWindowAnalysis();
    if (object.start_block_height !== undefined && object.start_block_height !== null) {
      message.startBlockHeight = BigInt(object.start_block_height);
    }
    if (object.end_block_height !== undefined && object.end_block_height !== null) {
      message.endBlockHeight = BigInt(object.end_block_height);
    }
    if (object.vote_intervals !== undefined && object.vote_intervals !== null) {
      message.voteIntervals = BigInt(object.vote_intervals);
    }
    message.validators = object.validators?.map(e => ValidatorSlashWindowAnalysis.fromAmino(e)) || [];
    if (object.latest_vote_interval !== undefined && object.latest_vote_interval !== null) {
      message.latestVoteInterval = VoteIntervalAnalysis.fromAmino(object.latest_vote_interval);
    }
    return message;
  },
  toAmino(message: SlashWindowAnalysis, useInterfaces: boolean = true): SlashWindowAnalysisAmino {
    const obj: any = {};
    obj.start_block_height = message.startBlockHeight ? message.startBlockHeight.toString() : undefined;
    obj.end_block_height = message.endBlockHeight ? message.endBlockHeight.toString() : undefined;
    obj.vote_intervals = message.voteIntervals ? message.voteIntervals.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorSlashWindowAnalysis.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.latest_vote_interval = message.latestVoteInterval ? VoteIntervalAnalysis.toAmino(message.latestVoteInterval, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: SlashWindowAnalysisAminoMsg): SlashWindowAnalysis {
    return SlashWindowAnalysis.fromAmino(object.value);
  },
  fromProtoMsg(message: SlashWindowAnalysisProtoMsg, useInterfaces: boolean = true): SlashWindowAnalysis {
    return SlashWindowAnalysis.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SlashWindowAnalysis): Uint8Array {
    return SlashWindowAnalysis.encode(message).finish();
  },
  toProtoMsg(message: SlashWindowAnalysis): SlashWindowAnalysisProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.SlashWindowAnalysis",
      value: SlashWindowAnalysis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SlashWindowAnalysis.typeUrl, SlashWindowAnalysis);