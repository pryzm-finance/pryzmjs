import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FeederDelegation, FeederDelegationAmino, FeederDelegationSDKType } from "./feeder_delegation";
import { OraclePreVote, OraclePreVoteAmino, OraclePreVoteSDKType } from "./oracle_pre_vote";
import { OracleVote, OracleVoteAmino, OracleVoteSDKType } from "./oracle_vote";
import { MissCounter, MissCounterAmino, MissCounterSDKType } from "./miss_counter";
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
export interface GenesisStateProtoMsg {
  typeUrl: "/refractedlabs.oracle.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  feeder_delegation_list?: FeederDelegationAmino[];
  oracle_pre_vote_list?: OraclePreVoteAmino[];
  oracle_vote_list?: OracleVoteAmino[];
  miss_counter_list?: MissCounterAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/refractedlabs.oracle.v1.GenesisState";
  value: GenesisStateAmino;
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
  typeUrl: "/refractedlabs.oracle.v1.GenesisState",
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.feederDelegationList = object.feeder_delegation_list?.map(e => FeederDelegation.fromAmino(e)) || [];
    message.oraclePreVoteList = object.oracle_pre_vote_list?.map(e => OraclePreVote.fromAmino(e)) || [];
    message.oracleVoteList = object.oracle_vote_list?.map(e => OracleVote.fromAmino(e)) || [];
    message.missCounterList = object.miss_counter_list?.map(e => MissCounter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.feederDelegationList) {
      obj.feeder_delegation_list = message.feederDelegationList.map(e => e ? FeederDelegation.toAmino(e) : undefined);
    } else {
      obj.feeder_delegation_list = [];
    }
    if (message.oraclePreVoteList) {
      obj.oracle_pre_vote_list = message.oraclePreVoteList.map(e => e ? OraclePreVote.toAmino(e) : undefined);
    } else {
      obj.oracle_pre_vote_list = [];
    }
    if (message.oracleVoteList) {
      obj.oracle_vote_list = message.oracleVoteList.map(e => e ? OracleVote.toAmino(e) : undefined);
    } else {
      obj.oracle_vote_list = [];
    }
    if (message.missCounterList) {
      obj.miss_counter_list = message.missCounterList.map(e => e ? MissCounter.toAmino(e) : undefined);
    } else {
      obj.miss_counter_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/refractedlabs.oracle.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};