/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Proposal } from "./proposal";
import { Vote } from "./vote";

export const protobufPackage = "prismfinance.prismcore.pgov";

export interface EventPAssetStake {
  address: string;
  asset: string;
  amount: Coin[];
  totalStakedPAsset: string;
}

export interface EventPAssetUnstake {
  address: string;
  asset: string;
  amount: Coin[];
  totalStakedPAsset: string;
}

export interface EventVoteSubmit {
  vote: Vote | undefined;
}

export interface EventProposalEnd {
  proposal: Proposal | undefined;
}

export interface EventVoteTransmit {
  proposalId: number;
  asset: string;
}

export interface EventVoteTransmitFailure {
  proposalId: number;
  asset: string;
  error: string;
}

export interface EventVoteAckSuccess {
  proposalId: number;
  asset: string;
}

export interface EventVoteAckFailure {
  proposalId: number;
  asset: string;
  error: string;
}

export interface EventVoteTimeout {
  proposalId: number;
  asset: string;
}

function createBaseEventPAssetStake(): EventPAssetStake {
  return { address: "", asset: "", amount: [], totalStakedPAsset: "" };
}

export const EventPAssetStake = {
  encode(message: EventPAssetStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalStakedPAsset !== "") {
      writer.uint32(34).string(message.totalStakedPAsset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPAssetStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPAssetStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalStakedPAsset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPAssetStake {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      totalStakedPAsset: isSet(object.totalStakedPAsset) ? String(object.totalStakedPAsset) : "",
    };
  },

  toJSON(message: EventPAssetStake): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPAssetStake>, I>>(object: I): EventPAssetStake {
    const message = createBaseEventPAssetStake();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.totalStakedPAsset = object.totalStakedPAsset ?? "";
    return message;
  },
};

function createBaseEventPAssetUnstake(): EventPAssetUnstake {
  return { address: "", asset: "", amount: [], totalStakedPAsset: "" };
}

export const EventPAssetUnstake = {
  encode(message: EventPAssetUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalStakedPAsset !== "") {
      writer.uint32(34).string(message.totalStakedPAsset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPAssetUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPAssetUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalStakedPAsset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPAssetUnstake {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      totalStakedPAsset: isSet(object.totalStakedPAsset) ? String(object.totalStakedPAsset) : "",
    };
  },

  toJSON(message: EventPAssetUnstake): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPAssetUnstake>, I>>(object: I): EventPAssetUnstake {
    const message = createBaseEventPAssetUnstake();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.totalStakedPAsset = object.totalStakedPAsset ?? "";
    return message;
  },
};

function createBaseEventVoteSubmit(): EventVoteSubmit {
  return { vote: undefined };
}

export const EventVoteSubmit = {
  encode(message: EventVoteSubmit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVoteSubmit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteSubmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVoteSubmit {
    return { vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined };
  },

  toJSON(message: EventVoteSubmit): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVoteSubmit>, I>>(object: I): EventVoteSubmit {
    const message = createBaseEventVoteSubmit();
    message.vote = (object.vote !== undefined && object.vote !== null) ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
};

function createBaseEventProposalEnd(): EventProposalEnd {
  return { proposal: undefined };
}

export const EventProposalEnd = {
  encode(message: EventProposalEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProposalEnd {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventProposalEnd {
    return { proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined };
  },

  toJSON(message: EventProposalEnd): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventProposalEnd>, I>>(object: I): EventProposalEnd {
    const message = createBaseEventProposalEnd();
    message.proposal = (object.proposal !== undefined && object.proposal !== null)
      ? Proposal.fromPartial(object.proposal)
      : undefined;
    return message;
  },
};

function createBaseEventVoteTransmit(): EventVoteTransmit {
  return { proposalId: 0, asset: "" };
}

export const EventVoteTransmit = {
  encode(message: EventVoteTransmit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVoteTransmit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTransmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVoteTransmit {
    return {
      proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: EventVoteTransmit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVoteTransmit>, I>>(object: I): EventVoteTransmit {
    const message = createBaseEventVoteTransmit();
    message.proposalId = object.proposalId ?? 0;
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseEventVoteTransmitFailure(): EventVoteTransmitFailure {
  return { proposalId: 0, asset: "", error: "" };
}

export const EventVoteTransmitFailure = {
  encode(message: EventVoteTransmitFailure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVoteTransmitFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTransmitFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVoteTransmitFailure {
    return {
      proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: EventVoteTransmitFailure): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
    message.asset !== undefined && (obj.asset = message.asset);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVoteTransmitFailure>, I>>(object: I): EventVoteTransmitFailure {
    const message = createBaseEventVoteTransmitFailure();
    message.proposalId = object.proposalId ?? 0;
    message.asset = object.asset ?? "";
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseEventVoteAckSuccess(): EventVoteAckSuccess {
  return { proposalId: 0, asset: "" };
}

export const EventVoteAckSuccess = {
  encode(message: EventVoteAckSuccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVoteAckSuccess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteAckSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVoteAckSuccess {
    return {
      proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: EventVoteAckSuccess): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVoteAckSuccess>, I>>(object: I): EventVoteAckSuccess {
    const message = createBaseEventVoteAckSuccess();
    message.proposalId = object.proposalId ?? 0;
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseEventVoteAckFailure(): EventVoteAckFailure {
  return { proposalId: 0, asset: "", error: "" };
}

export const EventVoteAckFailure = {
  encode(message: EventVoteAckFailure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVoteAckFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteAckFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVoteAckFailure {
    return {
      proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: EventVoteAckFailure): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
    message.asset !== undefined && (obj.asset = message.asset);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVoteAckFailure>, I>>(object: I): EventVoteAckFailure {
    const message = createBaseEventVoteAckFailure();
    message.proposalId = object.proposalId ?? 0;
    message.asset = object.asset ?? "";
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseEventVoteTimeout(): EventVoteTimeout {
  return { proposalId: 0, asset: "" };
}

export const EventVoteTimeout = {
  encode(message: EventVoteTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVoteTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVoteTimeout {
    return {
      proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: EventVoteTimeout): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVoteTimeout>, I>>(object: I): EventVoteTimeout {
    const message = createBaseEventVoteTimeout();
    message.proposalId = object.proposalId ?? 0;
    message.asset = object.asset ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
