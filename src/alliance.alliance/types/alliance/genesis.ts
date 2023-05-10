/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import { AllianceAsset, RewardWeightChangeSnapshot } from "./alliance";
import { AllianceValidatorInfo, Delegation, QueuedUndelegation, Redelegation } from "./delegations";
import { Params } from "./params";

export const protobufPackage = "alliance.alliance";

export interface ValidatorInfoState {
  validatorAddress: string;
  validator: AllianceValidatorInfo | undefined;
}

export interface RedelegationState {
  completionTime: Date | undefined;
  redelegation: Redelegation | undefined;
}

export interface UndelegationState {
  completionTime: Date | undefined;
  undelegation: QueuedUndelegation | undefined;
}

export interface RewardWeightChangeSnapshotState {
  height: number;
  validator: string;
  denom: string;
  snapshot: RewardWeightChangeSnapshot | undefined;
}

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  assets: AllianceAsset[];
  validatorInfos: ValidatorInfoState[];
  rewardWeightChangeSnaphots: RewardWeightChangeSnapshotState[];
  delegations: Delegation[];
  redelegations: RedelegationState[];
  undelegations: UndelegationState[];
}

function createBaseValidatorInfoState(): ValidatorInfoState {
  return { validatorAddress: "", validator: undefined };
}

export const ValidatorInfoState = {
  encode(message: ValidatorInfoState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.validator !== undefined) {
      AllianceValidatorInfo.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorInfoState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorInfoState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.validator = AllianceValidatorInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorInfoState {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      validator: isSet(object.validator) ? AllianceValidatorInfo.fromJSON(object.validator) : undefined,
    };
  },

  toJSON(message: ValidatorInfoState): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.validator !== undefined
      && (obj.validator = message.validator ? AllianceValidatorInfo.toJSON(message.validator) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorInfoState>, I>>(object: I): ValidatorInfoState {
    const message = createBaseValidatorInfoState();
    message.validatorAddress = object.validatorAddress ?? "";
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? AllianceValidatorInfo.fromPartial(object.validator)
      : undefined;
    return message;
  },
};

function createBaseRedelegationState(): RedelegationState {
  return { completionTime: undefined, redelegation: undefined };
}

export const RedelegationState = {
  encode(message: RedelegationState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationState {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
    };
  },

  toJSON(message: RedelegationState): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.redelegation !== undefined
      && (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationState>, I>>(object: I): RedelegationState {
    const message = createBaseRedelegationState();
    message.completionTime = object.completionTime ?? undefined;
    message.redelegation = (object.redelegation !== undefined && object.redelegation !== null)
      ? Redelegation.fromPartial(object.redelegation)
      : undefined;
    return message;
  },
};

function createBaseUndelegationState(): UndelegationState {
  return { completionTime: undefined, undelegation: undefined };
}

export const UndelegationState = {
  encode(message: UndelegationState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.undelegation !== undefined) {
      QueuedUndelegation.encode(message.undelegation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegationState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegationState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.undelegation = QueuedUndelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UndelegationState {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      undelegation: isSet(object.undelegation) ? QueuedUndelegation.fromJSON(object.undelegation) : undefined,
    };
  },

  toJSON(message: UndelegationState): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.undelegation !== undefined
      && (obj.undelegation = message.undelegation ? QueuedUndelegation.toJSON(message.undelegation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndelegationState>, I>>(object: I): UndelegationState {
    const message = createBaseUndelegationState();
    message.completionTime = object.completionTime ?? undefined;
    message.undelegation = (object.undelegation !== undefined && object.undelegation !== null)
      ? QueuedUndelegation.fromPartial(object.undelegation)
      : undefined;
    return message;
  },
};

function createBaseRewardWeightChangeSnapshotState(): RewardWeightChangeSnapshotState {
  return { height: 0, validator: "", denom: "", snapshot: undefined };
}

export const RewardWeightChangeSnapshotState = {
  encode(message: RewardWeightChangeSnapshotState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.snapshot !== undefined) {
      RewardWeightChangeSnapshot.encode(message.snapshot, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeightChangeSnapshotState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardWeightChangeSnapshotState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.snapshot = RewardWeightChangeSnapshot.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardWeightChangeSnapshotState {
    return {
      height: isSet(object.height) ? Number(object.height) : 0,
      validator: isSet(object.validator) ? String(object.validator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      snapshot: isSet(object.snapshot) ? RewardWeightChangeSnapshot.fromJSON(object.snapshot) : undefined,
    };
  },

  toJSON(message: RewardWeightChangeSnapshotState): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.validator !== undefined && (obj.validator = message.validator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.snapshot !== undefined
      && (obj.snapshot = message.snapshot ? RewardWeightChangeSnapshot.toJSON(message.snapshot) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardWeightChangeSnapshotState>, I>>(
    object: I,
  ): RewardWeightChangeSnapshotState {
    const message = createBaseRewardWeightChangeSnapshotState();
    message.height = object.height ?? 0;
    message.validator = object.validator ?? "";
    message.denom = object.denom ?? "";
    message.snapshot = (object.snapshot !== undefined && object.snapshot !== null)
      ? RewardWeightChangeSnapshot.fromPartial(object.snapshot)
      : undefined;
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    assets: [],
    validatorInfos: [],
    rewardWeightChangeSnaphots: [],
    delegations: [],
    redelegations: [],
    undelegations: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.assets) {
      AllianceAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorInfos) {
      ValidatorInfoState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.rewardWeightChangeSnaphots) {
      RewardWeightChangeSnapshotState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      RedelegationState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.undelegations) {
      UndelegationState.encode(v!, writer.uint32(58).fork()).ldelim();
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
          message.assets.push(AllianceAsset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validatorInfos.push(ValidatorInfoState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.rewardWeightChangeSnaphots.push(RewardWeightChangeSnapshotState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.redelegations.push(RedelegationState.decode(reader, reader.uint32()));
          break;
        case 7:
          message.undelegations.push(UndelegationState.decode(reader, reader.uint32()));
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
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => AllianceAsset.fromJSON(e)) : [],
      validatorInfos: Array.isArray(object?.validatorInfos)
        ? object.validatorInfos.map((e: any) => ValidatorInfoState.fromJSON(e))
        : [],
      rewardWeightChangeSnaphots: Array.isArray(object?.rewardWeightChangeSnaphots)
        ? object.rewardWeightChangeSnaphots.map((e: any) => RewardWeightChangeSnapshotState.fromJSON(e))
        : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      redelegations: Array.isArray(object?.redelegations)
        ? object.redelegations.map((e: any) => RedelegationState.fromJSON(e))
        : [],
      undelegations: Array.isArray(object?.undelegations)
        ? object.undelegations.map((e: any) => UndelegationState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.assets) {
      obj.assets = message.assets.map((e) => e ? AllianceAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    if (message.validatorInfos) {
      obj.validatorInfos = message.validatorInfos.map((e) => e ? ValidatorInfoState.toJSON(e) : undefined);
    } else {
      obj.validatorInfos = [];
    }
    if (message.rewardWeightChangeSnaphots) {
      obj.rewardWeightChangeSnaphots = message.rewardWeightChangeSnaphots.map((e) =>
        e ? RewardWeightChangeSnapshotState.toJSON(e) : undefined
      );
    } else {
      obj.rewardWeightChangeSnaphots = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => e ? RedelegationState.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    if (message.undelegations) {
      obj.undelegations = message.undelegations.map((e) => e ? UndelegationState.toJSON(e) : undefined);
    } else {
      obj.undelegations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.assets = object.assets?.map((e) => AllianceAsset.fromPartial(e)) || [];
    message.validatorInfos = object.validatorInfos?.map((e) => ValidatorInfoState.fromPartial(e)) || [];
    message.rewardWeightChangeSnaphots =
      object.rewardWeightChangeSnaphots?.map((e) => RewardWeightChangeSnapshotState.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map((e) => RedelegationState.fromPartial(e)) || [];
    message.undelegations = object.undelegations?.map((e) => UndelegationState.fromPartial(e)) || [];
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
