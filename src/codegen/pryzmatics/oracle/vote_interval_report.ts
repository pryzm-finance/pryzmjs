import { VoteType, voteTypeFromJSON, voteTypeToJSON } from "../../refractedlabs/oracle/v1/event";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { VoteInterval, VoteIntervalAmino, VoteIntervalSDKType } from "./vote_interval";
import { BallotVoteResult, BallotVoteResultAmino, BallotVoteResultSDKType } from "./ballot_vote_result";
import { isSet } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface VotePayloadReport {
  module: string;
  namespace: string;
  payload: string;
  type: VoteType;
}
export interface VotePayloadReportProtoMsg {
  typeUrl: "/pryzmatics.oracle.VotePayloadReport";
  value: Uint8Array;
}
export interface VotePayloadReportAmino {
  module?: string;
  namespace?: string;
  payload?: string;
  type?: VoteType;
}
export interface VotePayloadReportAminoMsg {
  type: "/pryzmatics.oracle.VotePayloadReport";
  value: VotePayloadReportAmino;
}
export interface VotePayloadReportSDKType {
  module: string;
  namespace: string;
  payload: string;
  type: VoteType;
}
export interface ValidatorVoteIntervalReport {
  validator: string;
  moniker: string;
  power: bigint;
  preVoted: boolean;
  voted: boolean;
  missCounter: bigint;
  rewards: Coin[];
  payloads: VotePayloadReport[];
}
export interface ValidatorVoteIntervalReportProtoMsg {
  typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalReport";
  value: Uint8Array;
}
export interface ValidatorVoteIntervalReportAmino {
  validator?: string;
  moniker?: string;
  power?: string;
  pre_voted?: boolean;
  voted?: boolean;
  miss_counter?: string;
  rewards?: CoinAmino[];
  payloads?: VotePayloadReportAmino[];
}
export interface ValidatorVoteIntervalReportAminoMsg {
  type: "/pryzmatics.oracle.ValidatorVoteIntervalReport";
  value: ValidatorVoteIntervalReportAmino;
}
export interface ValidatorVoteIntervalReportSDKType {
  validator: string;
  moniker: string;
  power: bigint;
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
export interface VoteIntervalReportProtoMsg {
  typeUrl: "/pryzmatics.oracle.VoteIntervalReport";
  value: Uint8Array;
}
export interface VoteIntervalReportAmino {
  vote_interval?: VoteIntervalAmino;
  ballot_vote_results?: BallotVoteResultAmino[];
  validator_reports?: ValidatorVoteIntervalReportAmino[];
}
export interface VoteIntervalReportAminoMsg {
  type: "/pryzmatics.oracle.VoteIntervalReport";
  value: VoteIntervalReportAmino;
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
  typeUrl: "/pryzmatics.oracle.VotePayloadReport",
  is(o: any): o is VotePayloadReport {
    return o && (o.$typeUrl === VotePayloadReport.typeUrl || typeof o.module === "string" && typeof o.namespace === "string" && typeof o.payload === "string" && isSet(o.type));
  },
  isSDK(o: any): o is VotePayloadReportSDKType {
    return o && (o.$typeUrl === VotePayloadReport.typeUrl || typeof o.module === "string" && typeof o.namespace === "string" && typeof o.payload === "string" && isSet(o.type));
  },
  isAmino(o: any): o is VotePayloadReportAmino {
    return o && (o.$typeUrl === VotePayloadReport.typeUrl || typeof o.module === "string" && typeof o.namespace === "string" && typeof o.payload === "string" && isSet(o.type));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VotePayloadReport {
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
  },
  fromAmino(object: VotePayloadReportAmino): VotePayloadReport {
    const message = createBaseVotePayloadReport();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: VotePayloadReport, useInterfaces: boolean = true): VotePayloadReportAmino {
    const obj: any = {};
    obj.module = message.module === "" ? undefined : message.module;
    obj.namespace = message.namespace === "" ? undefined : message.namespace;
    obj.payload = message.payload === "" ? undefined : message.payload;
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: VotePayloadReportAminoMsg): VotePayloadReport {
    return VotePayloadReport.fromAmino(object.value);
  },
  fromProtoMsg(message: VotePayloadReportProtoMsg, useInterfaces: boolean = true): VotePayloadReport {
    return VotePayloadReport.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VotePayloadReport): Uint8Array {
    return VotePayloadReport.encode(message).finish();
  },
  toProtoMsg(message: VotePayloadReport): VotePayloadReportProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.VotePayloadReport",
      value: VotePayloadReport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VotePayloadReport.typeUrl, VotePayloadReport);
function createBaseValidatorVoteIntervalReport(): ValidatorVoteIntervalReport {
  return {
    validator: "",
    moniker: "",
    power: BigInt(0),
    preVoted: false,
    voted: false,
    missCounter: BigInt(0),
    rewards: [],
    payloads: []
  };
}
export const ValidatorVoteIntervalReport = {
  typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalReport",
  is(o: any): o is ValidatorVoteIntervalReport {
    return o && (o.$typeUrl === ValidatorVoteIntervalReport.typeUrl || typeof o.validator === "string" && typeof o.moniker === "string" && typeof o.power === "bigint" && typeof o.preVoted === "boolean" && typeof o.voted === "boolean" && typeof o.missCounter === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])) && Array.isArray(o.payloads) && (!o.payloads.length || VotePayloadReport.is(o.payloads[0])));
  },
  isSDK(o: any): o is ValidatorVoteIntervalReportSDKType {
    return o && (o.$typeUrl === ValidatorVoteIntervalReport.typeUrl || typeof o.validator === "string" && typeof o.moniker === "string" && typeof o.power === "bigint" && typeof o.pre_voted === "boolean" && typeof o.voted === "boolean" && typeof o.miss_counter === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.isSDK(o.rewards[0])) && Array.isArray(o.payloads) && (!o.payloads.length || VotePayloadReport.isSDK(o.payloads[0])));
  },
  isAmino(o: any): o is ValidatorVoteIntervalReportAmino {
    return o && (o.$typeUrl === ValidatorVoteIntervalReport.typeUrl || typeof o.validator === "string" && typeof o.moniker === "string" && typeof o.power === "bigint" && typeof o.pre_voted === "boolean" && typeof o.voted === "boolean" && typeof o.miss_counter === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])) && Array.isArray(o.payloads) && (!o.payloads.length || VotePayloadReport.isAmino(o.payloads[0])));
  },
  encode(message: ValidatorVoteIntervalReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    if (message.preVoted === true) {
      writer.uint32(32).bool(message.preVoted);
    }
    if (message.voted === true) {
      writer.uint32(40).bool(message.voted);
    }
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(48).int64(message.missCounter);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.payloads) {
      VotePayloadReport.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorVoteIntervalReport {
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
          message.moniker = reader.string();
          break;
        case 3:
          message.power = reader.int64();
          break;
        case 4:
          message.preVoted = reader.bool();
          break;
        case 5:
          message.voted = reader.bool();
          break;
        case 6:
          message.missCounter = reader.int64();
          break;
        case 7:
          message.rewards.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.payloads.push(VotePayloadReport.decode(reader, reader.uint32(), useInterfaces));
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
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
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
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
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
    message.moniker = object.moniker ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.preVoted = object.preVoted ?? false;
    message.voted = object.voted ?? false;
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    message.payloads = object.payloads?.map(e => VotePayloadReport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorVoteIntervalReportAmino): ValidatorVoteIntervalReport {
    const message = createBaseValidatorVoteIntervalReport();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
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
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    message.payloads = object.payloads?.map(e => VotePayloadReport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorVoteIntervalReport, useInterfaces: boolean = true): ValidatorVoteIntervalReportAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.power = message.power ? message.power.toString() : undefined;
    obj.pre_voted = message.preVoted === false ? undefined : message.preVoted;
    obj.voted = message.voted === false ? undefined : message.voted;
    obj.miss_counter = message.missCounter ? message.missCounter.toString() : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.payloads) {
      obj.payloads = message.payloads.map(e => e ? VotePayloadReport.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.payloads = message.payloads;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorVoteIntervalReportAminoMsg): ValidatorVoteIntervalReport {
    return ValidatorVoteIntervalReport.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorVoteIntervalReportProtoMsg, useInterfaces: boolean = true): ValidatorVoteIntervalReport {
    return ValidatorVoteIntervalReport.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorVoteIntervalReport): Uint8Array {
    return ValidatorVoteIntervalReport.encode(message).finish();
  },
  toProtoMsg(message: ValidatorVoteIntervalReport): ValidatorVoteIntervalReportProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalReport",
      value: ValidatorVoteIntervalReport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorVoteIntervalReport.typeUrl, ValidatorVoteIntervalReport);
function createBaseVoteIntervalReport(): VoteIntervalReport {
  return {
    voteInterval: VoteInterval.fromPartial({}),
    ballotVoteResults: [],
    validatorReports: []
  };
}
export const VoteIntervalReport = {
  typeUrl: "/pryzmatics.oracle.VoteIntervalReport",
  is(o: any): o is VoteIntervalReport {
    return o && (o.$typeUrl === VoteIntervalReport.typeUrl || VoteInterval.is(o.voteInterval) && Array.isArray(o.ballotVoteResults) && (!o.ballotVoteResults.length || BallotVoteResult.is(o.ballotVoteResults[0])) && Array.isArray(o.validatorReports) && (!o.validatorReports.length || ValidatorVoteIntervalReport.is(o.validatorReports[0])));
  },
  isSDK(o: any): o is VoteIntervalReportSDKType {
    return o && (o.$typeUrl === VoteIntervalReport.typeUrl || VoteInterval.isSDK(o.vote_interval) && Array.isArray(o.ballot_vote_results) && (!o.ballot_vote_results.length || BallotVoteResult.isSDK(o.ballot_vote_results[0])) && Array.isArray(o.validator_reports) && (!o.validator_reports.length || ValidatorVoteIntervalReport.isSDK(o.validator_reports[0])));
  },
  isAmino(o: any): o is VoteIntervalReportAmino {
    return o && (o.$typeUrl === VoteIntervalReport.typeUrl || VoteInterval.isAmino(o.vote_interval) && Array.isArray(o.ballot_vote_results) && (!o.ballot_vote_results.length || BallotVoteResult.isAmino(o.ballot_vote_results[0])) && Array.isArray(o.validator_reports) && (!o.validator_reports.length || ValidatorVoteIntervalReport.isAmino(o.validator_reports[0])));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VoteIntervalReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteIntervalReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteInterval = VoteInterval.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.ballotVoteResults.push(BallotVoteResult.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.validatorReports.push(ValidatorVoteIntervalReport.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: VoteIntervalReportAmino): VoteIntervalReport {
    const message = createBaseVoteIntervalReport();
    if (object.vote_interval !== undefined && object.vote_interval !== null) {
      message.voteInterval = VoteInterval.fromAmino(object.vote_interval);
    }
    message.ballotVoteResults = object.ballot_vote_results?.map(e => BallotVoteResult.fromAmino(e)) || [];
    message.validatorReports = object.validator_reports?.map(e => ValidatorVoteIntervalReport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: VoteIntervalReport, useInterfaces: boolean = true): VoteIntervalReportAmino {
    const obj: any = {};
    obj.vote_interval = message.voteInterval ? VoteInterval.toAmino(message.voteInterval, useInterfaces) : undefined;
    if (message.ballotVoteResults) {
      obj.ballot_vote_results = message.ballotVoteResults.map(e => e ? BallotVoteResult.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.ballot_vote_results = message.ballotVoteResults;
    }
    if (message.validatorReports) {
      obj.validator_reports = message.validatorReports.map(e => e ? ValidatorVoteIntervalReport.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_reports = message.validatorReports;
    }
    return obj;
  },
  fromAminoMsg(object: VoteIntervalReportAminoMsg): VoteIntervalReport {
    return VoteIntervalReport.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteIntervalReportProtoMsg, useInterfaces: boolean = true): VoteIntervalReport {
    return VoteIntervalReport.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VoteIntervalReport): Uint8Array {
    return VoteIntervalReport.encode(message).finish();
  },
  toProtoMsg(message: VoteIntervalReport): VoteIntervalReportProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.VoteIntervalReport",
      value: VoteIntervalReport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VoteIntervalReport.typeUrl, VoteIntervalReport);