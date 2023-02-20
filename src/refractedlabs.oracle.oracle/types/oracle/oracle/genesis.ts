/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FeederDelegation } from "./feeder_delegation";
import { MissCounter } from "./miss_counter";
import { OraclePreVote } from "./oracle_pre_vote";
import { OracleVote } from "./oracle_vote";
import { Params } from "./params";

export const protobufPackage = "refractedlabs.oracle.oracle";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  feederDelegationList: FeederDelegation[];
  oraclePreVoteList: OraclePreVote[];
  oracleVoteList: OracleVote[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  missCounterList: MissCounter[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    feederDelegationList: [],
    oraclePreVoteList: [],
    oracleVoteList: [],
    missCounterList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      feederDelegationList: Array.isArray(object?.feederDelegationList)
        ? object.feederDelegationList.map((e: any) => FeederDelegation.fromJSON(e))
        : [],
      oraclePreVoteList: Array.isArray(object?.oraclePreVoteList)
        ? object.oraclePreVoteList.map((e: any) => OraclePreVote.fromJSON(e))
        : [],
      oracleVoteList: Array.isArray(object?.oracleVoteList)
        ? object.oracleVoteList.map((e: any) => OracleVote.fromJSON(e))
        : [],
      missCounterList: Array.isArray(object?.missCounterList)
        ? object.missCounterList.map((e: any) => MissCounter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feederDelegationList) {
      obj.feederDelegationList = message.feederDelegationList.map((e) => e ? FeederDelegation.toJSON(e) : undefined);
    } else {
      obj.feederDelegationList = [];
    }
    if (message.oraclePreVoteList) {
      obj.oraclePreVoteList = message.oraclePreVoteList.map((e) => e ? OraclePreVote.toJSON(e) : undefined);
    } else {
      obj.oraclePreVoteList = [];
    }
    if (message.oracleVoteList) {
      obj.oracleVoteList = message.oracleVoteList.map((e) => e ? OracleVote.toJSON(e) : undefined);
    } else {
      obj.oracleVoteList = [];
    }
    if (message.missCounterList) {
      obj.missCounterList = message.missCounterList.map((e) => e ? MissCounter.toJSON(e) : undefined);
    } else {
      obj.missCounterList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.feederDelegationList = object.feederDelegationList?.map((e) => FeederDelegation.fromPartial(e)) || [];
    message.oraclePreVoteList = object.oraclePreVoteList?.map((e) => OraclePreVote.fromPartial(e)) || [];
    message.oracleVoteList = object.oracleVoteList?.map((e) => OracleVote.fromPartial(e)) || [];
    message.missCounterList = object.missCounterList?.map((e) => MissCounter.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
