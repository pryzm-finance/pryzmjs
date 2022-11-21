/* eslint-disable */
import { Params } from "../oracle/params";
import { ExchangeRatePreVote } from "../oracle/exchange_rate_pre_vote";
import { ExchangeRateVote } from "../oracle/exchange_rate_vote";
import { FeederDelegation } from "../oracle/feeder_delegation";
import { MissCounter } from "../oracle/miss_counter";
import { AssetExchangeRate } from "../oracle/asset_exchange_rate";
import { Writer, Reader } from "protobufjs/minimal";

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

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.exchangeRatePreVoteList = [];
    message.exchangeRateVoteList = [];
    message.feederDelegationList = [];
    message.missCounterList = [];
    message.assetExchangeRateList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.exchangeRatePreVoteList.push(
            ExchangeRatePreVote.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.exchangeRateVoteList.push(
            ExchangeRateVote.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.feederDelegationList.push(
            FeederDelegation.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.missCounterList.push(
            MissCounter.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.assetExchangeRateList.push(
            AssetExchangeRate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.exchangeRatePreVoteList = [];
    message.exchangeRateVoteList = [];
    message.feederDelegationList = [];
    message.missCounterList = [];
    message.assetExchangeRateList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.exchangeRatePreVoteList !== undefined &&
      object.exchangeRatePreVoteList !== null
    ) {
      for (const e of object.exchangeRatePreVoteList) {
        message.exchangeRatePreVoteList.push(ExchangeRatePreVote.fromJSON(e));
      }
    }
    if (
      object.exchangeRateVoteList !== undefined &&
      object.exchangeRateVoteList !== null
    ) {
      for (const e of object.exchangeRateVoteList) {
        message.exchangeRateVoteList.push(ExchangeRateVote.fromJSON(e));
      }
    }
    if (
      object.feederDelegationList !== undefined &&
      object.feederDelegationList !== null
    ) {
      for (const e of object.feederDelegationList) {
        message.feederDelegationList.push(FeederDelegation.fromJSON(e));
      }
    }
    if (
      object.missCounterList !== undefined &&
      object.missCounterList !== null
    ) {
      for (const e of object.missCounterList) {
        message.missCounterList.push(MissCounter.fromJSON(e));
      }
    }
    if (
      object.assetExchangeRateList !== undefined &&
      object.assetExchangeRateList !== null
    ) {
      for (const e of object.assetExchangeRateList) {
        message.assetExchangeRateList.push(AssetExchangeRate.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.exchangeRatePreVoteList) {
      obj.exchangeRatePreVoteList = message.exchangeRatePreVoteList.map((e) =>
        e ? ExchangeRatePreVote.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRatePreVoteList = [];
    }
    if (message.exchangeRateVoteList) {
      obj.exchangeRateVoteList = message.exchangeRateVoteList.map((e) =>
        e ? ExchangeRateVote.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRateVoteList = [];
    }
    if (message.feederDelegationList) {
      obj.feederDelegationList = message.feederDelegationList.map((e) =>
        e ? FeederDelegation.toJSON(e) : undefined
      );
    } else {
      obj.feederDelegationList = [];
    }
    if (message.missCounterList) {
      obj.missCounterList = message.missCounterList.map((e) =>
        e ? MissCounter.toJSON(e) : undefined
      );
    } else {
      obj.missCounterList = [];
    }
    if (message.assetExchangeRateList) {
      obj.assetExchangeRateList = message.assetExchangeRateList.map((e) =>
        e ? AssetExchangeRate.toJSON(e) : undefined
      );
    } else {
      obj.assetExchangeRateList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.exchangeRatePreVoteList = [];
    message.exchangeRateVoteList = [];
    message.feederDelegationList = [];
    message.missCounterList = [];
    message.assetExchangeRateList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.exchangeRatePreVoteList !== undefined &&
      object.exchangeRatePreVoteList !== null
    ) {
      for (const e of object.exchangeRatePreVoteList) {
        message.exchangeRatePreVoteList.push(
          ExchangeRatePreVote.fromPartial(e)
        );
      }
    }
    if (
      object.exchangeRateVoteList !== undefined &&
      object.exchangeRateVoteList !== null
    ) {
      for (const e of object.exchangeRateVoteList) {
        message.exchangeRateVoteList.push(ExchangeRateVote.fromPartial(e));
      }
    }
    if (
      object.feederDelegationList !== undefined &&
      object.feederDelegationList !== null
    ) {
      for (const e of object.feederDelegationList) {
        message.feederDelegationList.push(FeederDelegation.fromPartial(e));
      }
    }
    if (
      object.missCounterList !== undefined &&
      object.missCounterList !== null
    ) {
      for (const e of object.missCounterList) {
        message.missCounterList.push(MissCounter.fromPartial(e));
      }
    }
    if (
      object.assetExchangeRateList !== undefined &&
      object.assetExchangeRateList !== null
    ) {
      for (const e of object.assetExchangeRateList) {
        message.assetExchangeRateList.push(AssetExchangeRate.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
