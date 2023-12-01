import { Params, ParamsSDKType } from "./params";
import { FeederDelegation, FeederDelegationSDKType } from "./feeder_delegation";
import { OraclePreVote, OraclePreVoteSDKType } from "./oracle_pre_vote";
import { OracleVote, OracleVoteSDKType } from "./oracle_vote";
import { MissCounter, MissCounterSDKType } from "./miss_counter";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params: Params;
  feederDelegationList: FeederDelegation[];
  oraclePreVoteList: OraclePreVote[];
  oracleVoteList: OracleVote[];
  missCounterList: MissCounter[];
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  feeder_delegation_list: FeederDelegationSDKType[];
  oracle_pre_vote_list: OraclePreVoteSDKType[];
  oracle_vote_list: OracleVoteSDKType[];
  miss_counter_list: MissCounterSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feederDelegationList: [],
    oraclePreVoteList: [],
    oracleVoteList: [],
    missCounterList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feederDelegationList) {
      FeederDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.oraclePreVoteList) {
      OraclePreVote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.oracleVoteList) {
      OracleVote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.missCounterList) {
      MissCounter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feederDelegationList.push(FeederDelegation.decode(reader, reader.uint32()));
          break;
        case 3:
          message.oraclePreVoteList.push(OraclePreVote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.oracleVoteList.push(OracleVote.decode(reader, reader.uint32()));
          break;
        case 5:
          message.missCounterList.push(MissCounter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feederDelegationList: Array.isArray(object?.feederDelegationList) ? object.feederDelegationList.map((e: any) => FeederDelegation.fromJSON(e)) : [],
      oraclePreVoteList: Array.isArray(object?.oraclePreVoteList) ? object.oraclePreVoteList.map((e: any) => OraclePreVote.fromJSON(e)) : [],
      oracleVoteList: Array.isArray(object?.oracleVoteList) ? object.oracleVoteList.map((e: any) => OracleVote.fromJSON(e)) : [],
      missCounterList: Array.isArray(object?.missCounterList) ? object.missCounterList.map((e: any) => MissCounter.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feederDelegationList) {
      obj.feederDelegationList = message.feederDelegationList.map(e => e ? FeederDelegation.toJSON(e) : undefined);
    } else {
      obj.feederDelegationList = [];
    }
    if (message.oraclePreVoteList) {
      obj.oraclePreVoteList = message.oraclePreVoteList.map(e => e ? OraclePreVote.toJSON(e) : undefined);
    } else {
      obj.oraclePreVoteList = [];
    }
    if (message.oracleVoteList) {
      obj.oracleVoteList = message.oracleVoteList.map(e => e ? OracleVote.toJSON(e) : undefined);
    } else {
      obj.oracleVoteList = [];
    }
    if (message.missCounterList) {
      obj.missCounterList = message.missCounterList.map(e => e ? MissCounter.toJSON(e) : undefined);
    } else {
      obj.missCounterList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feederDelegationList = object.feederDelegationList?.map(e => FeederDelegation.fromPartial(e)) || [];
    message.oraclePreVoteList = object.oraclePreVoteList?.map(e => OraclePreVote.fromPartial(e)) || [];
    message.oracleVoteList = object.oracleVoteList?.map(e => OracleVote.fromPartial(e)) || [];
    message.missCounterList = object.missCounterList?.map(e => MissCounter.fromPartial(e)) || [];
    return message;
  }
};