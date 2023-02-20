/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { WeightedVoteOption } from "../../cosmos/gov/v1/gov";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "prismfinance.prismcore.pgov";

export interface Proposal {
  proposalId: number;
  asset: string;
  startTime: Date | undefined;
  endTime: Date | undefined;
  finalVote: WeightedVoteOption[];
  resultSubmitFailure: boolean;
}

function createBaseProposal(): Proposal {
  return {
    proposalId: 0,
    asset: "",
    startTime: undefined,
    endTime: undefined,
    finalVote: [],
    resultSubmitFailure: false,
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.finalVote) {
      WeightedVoteOption.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.resultSubmitFailure === true) {
      writer.uint32(48).bool(message.resultSubmitFailure);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
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
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.finalVote.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 6:
          message.resultSubmitFailure = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      finalVote: Array.isArray(object?.finalVote)
        ? object.finalVote.map((e: any) => WeightedVoteOption.fromJSON(e))
        : [],
      resultSubmitFailure: isSet(object.resultSubmitFailure) ? Boolean(object.resultSubmitFailure) : false,
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
    message.asset !== undefined && (obj.asset = message.asset);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    if (message.finalVote) {
      obj.finalVote = message.finalVote.map((e) => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.finalVote = [];
    }
    message.resultSubmitFailure !== undefined && (obj.resultSubmitFailure = message.resultSubmitFailure);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.proposalId = object.proposalId ?? 0;
    message.asset = object.asset ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.finalVote = object.finalVote?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
    message.resultSubmitFailure = object.resultSubmitFailure ?? false;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
