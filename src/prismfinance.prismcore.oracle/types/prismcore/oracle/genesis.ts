/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AssetExchangeRate } from "./asset_exchange_rate";
import { ExchangeRatePreVote } from "./exchange_rate_pre_vote";
import { ExchangeRateVote } from "./exchange_rate_vote";
import { FeederDelegation } from "./feeder_delegation";
import { MissCounter } from "./miss_counter";
import { Params } from "./params";

export const protobufPackage = "prismfinance.prismcore.oracle";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  exchangeRatePreVoteList: ExchangeRatePreVote[];
  exchangeRateVoteList: ExchangeRateVote[];
  feederDelegationList: FeederDelegation[];
  missCounterList: MissCounter[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  assetExchangeRateList: AssetExchangeRate[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    exchangeRatePreVoteList: [],
    exchangeRateVoteList: [],
    feederDelegationList: [],
    missCounterList: [],
    assetExchangeRateList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.exchangeRatePreVoteList) {
      ExchangeRatePreVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.exchangeRateVoteList) {
      ExchangeRateVote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.feederDelegationList) {
      FeederDelegation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.missCounterList) {
      MissCounter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.assetExchangeRateList) {
      AssetExchangeRate.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.exchangeRatePreVoteList.push(ExchangeRatePreVote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.exchangeRateVoteList.push(ExchangeRateVote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.feederDelegationList.push(FeederDelegation.decode(reader, reader.uint32()));
          break;
        case 5:
          message.missCounterList.push(MissCounter.decode(reader, reader.uint32()));
          break;
        case 6:
          message.assetExchangeRateList.push(AssetExchangeRate.decode(reader, reader.uint32()));
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
      exchangeRatePreVoteList: Array.isArray(object?.exchangeRatePreVoteList)
        ? object.exchangeRatePreVoteList.map((e: any) => ExchangeRatePreVote.fromJSON(e))
        : [],
      exchangeRateVoteList: Array.isArray(object?.exchangeRateVoteList)
        ? object.exchangeRateVoteList.map((e: any) => ExchangeRateVote.fromJSON(e))
        : [],
      feederDelegationList: Array.isArray(object?.feederDelegationList)
        ? object.feederDelegationList.map((e: any) => FeederDelegation.fromJSON(e))
        : [],
      missCounterList: Array.isArray(object?.missCounterList)
        ? object.missCounterList.map((e: any) => MissCounter.fromJSON(e))
        : [],
      assetExchangeRateList: Array.isArray(object?.assetExchangeRateList)
        ? object.assetExchangeRateList.map((e: any) => AssetExchangeRate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.exchangeRatePreVoteList) {
      obj.exchangeRatePreVoteList = message.exchangeRatePreVoteList.map((e) =>
        e ? ExchangeRatePreVote.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRatePreVoteList = [];
    }
    if (message.exchangeRateVoteList) {
      obj.exchangeRateVoteList = message.exchangeRateVoteList.map((e) => e ? ExchangeRateVote.toJSON(e) : undefined);
    } else {
      obj.exchangeRateVoteList = [];
    }
    if (message.feederDelegationList) {
      obj.feederDelegationList = message.feederDelegationList.map((e) => e ? FeederDelegation.toJSON(e) : undefined);
    } else {
      obj.feederDelegationList = [];
    }
    if (message.missCounterList) {
      obj.missCounterList = message.missCounterList.map((e) => e ? MissCounter.toJSON(e) : undefined);
    } else {
      obj.missCounterList = [];
    }
    if (message.assetExchangeRateList) {
      obj.assetExchangeRateList = message.assetExchangeRateList.map((e) => e ? AssetExchangeRate.toJSON(e) : undefined);
    } else {
      obj.assetExchangeRateList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.exchangeRatePreVoteList = object.exchangeRatePreVoteList?.map((e) => ExchangeRatePreVote.fromPartial(e))
      || [];
    message.exchangeRateVoteList = object.exchangeRateVoteList?.map((e) => ExchangeRateVote.fromPartial(e)) || [];
    message.feederDelegationList = object.feederDelegationList?.map((e) => FeederDelegation.fromPartial(e)) || [];
    message.missCounterList = object.missCounterList?.map((e) => MissCounter.fromPartial(e)) || [];
    message.assetExchangeRateList = object.assetExchangeRateList?.map((e) => AssetExchangeRate.fromPartial(e)) || [];
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
