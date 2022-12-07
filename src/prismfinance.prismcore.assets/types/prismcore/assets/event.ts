/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { MaturityLevel } from "./maturity_level";
import { WhitelistedAsset } from "./whitelisted_asset";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface EventWhitelistAsset {
  whitelistedAsset: WhitelistedAsset | undefined;
}

export interface EventAddMaturityLevel {
  maturityLevel: MaturityLevel | undefined;
}

export interface EventDeactivateMaturityLevel {
  maturityLevel: MaturityLevel | undefined;
}

export interface EventUpdateMaturityParams {
  baseDenom: string;
  levelsPerYear: number;
  years: number;
}

export interface EventUpdateFeeRatios {
  baseDenom: string;
  cAssetFeeRatio: string;
  yieldFeeRatio: string;
  mergeFeeRatio: string;
  redeemFeeRatio: string;
  refractFeeRatio: string;
  cAssetBondFeeRatio: string;
  cAssetRedeemFeeRatio: string;
  yStakingClaimRewardFeeRatio: string;
}

export interface EventUpdateMessagePassingConnection {
  baseDenom: string;
  port: string;
  channel: string;
}

export interface EventDelistAsset {
  baseDenom: string;
}

function createBaseEventWhitelistAsset(): EventWhitelistAsset {
  return { whitelistedAsset: undefined };
}

export const EventWhitelistAsset = {
  encode(message: EventWhitelistAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelistedAsset !== undefined) {
      WhitelistedAsset.encode(message.whitelistedAsset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWhitelistAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWhitelistAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedAsset = WhitelistedAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWhitelistAsset {
    return {
      whitelistedAsset: isSet(object.whitelistedAsset) ? WhitelistedAsset.fromJSON(object.whitelistedAsset) : undefined,
    };
  },

  toJSON(message: EventWhitelistAsset): unknown {
    const obj: any = {};
    message.whitelistedAsset !== undefined && (obj.whitelistedAsset = message.whitelistedAsset
      ? WhitelistedAsset.toJSON(message.whitelistedAsset)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWhitelistAsset>, I>>(object: I): EventWhitelistAsset {
    const message = createBaseEventWhitelistAsset();
    message.whitelistedAsset = (object.whitelistedAsset !== undefined && object.whitelistedAsset !== null)
      ? WhitelistedAsset.fromPartial(object.whitelistedAsset)
      : undefined;
    return message;
  },
};

function createBaseEventAddMaturityLevel(): EventAddMaturityLevel {
  return { maturityLevel: undefined };
}

export const EventAddMaturityLevel = {
  encode(message: EventAddMaturityLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddMaturityLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAddMaturityLevel {
    return { maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined };
  },

  toJSON(message: EventAddMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined
      && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAddMaturityLevel>, I>>(object: I): EventAddMaturityLevel {
    const message = createBaseEventAddMaturityLevel();
    message.maturityLevel = (object.maturityLevel !== undefined && object.maturityLevel !== null)
      ? MaturityLevel.fromPartial(object.maturityLevel)
      : undefined;
    return message;
  },
};

function createBaseEventDeactivateMaturityLevel(): EventDeactivateMaturityLevel {
  return { maturityLevel: undefined };
}

export const EventDeactivateMaturityLevel = {
  encode(message: EventDeactivateMaturityLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeactivateMaturityLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeactivateMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeactivateMaturityLevel {
    return { maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined };
  },

  toJSON(message: EventDeactivateMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined
      && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeactivateMaturityLevel>, I>>(object: I): EventDeactivateMaturityLevel {
    const message = createBaseEventDeactivateMaturityLevel();
    message.maturityLevel = (object.maturityLevel !== undefined && object.maturityLevel !== null)
      ? MaturityLevel.fromPartial(object.maturityLevel)
      : undefined;
    return message;
  },
};

function createBaseEventUpdateMaturityParams(): EventUpdateMaturityParams {
  return { baseDenom: "", levelsPerYear: 0, years: 0 };
}

export const EventUpdateMaturityParams = {
  encode(message: EventUpdateMaturityParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.levelsPerYear !== 0) {
      writer.uint32(16).int32(message.levelsPerYear);
    }
    if (message.years !== 0) {
      writer.uint32(24).int32(message.years);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateMaturityParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateMaturityParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.levelsPerYear = reader.int32();
          break;
        case 3:
          message.years = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateMaturityParams {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      levelsPerYear: isSet(object.levelsPerYear) ? Number(object.levelsPerYear) : 0,
      years: isSet(object.years) ? Number(object.years) : 0,
    };
  },

  toJSON(message: EventUpdateMaturityParams): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.levelsPerYear !== undefined && (obj.levelsPerYear = Math.round(message.levelsPerYear));
    message.years !== undefined && (obj.years = Math.round(message.years));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateMaturityParams>, I>>(object: I): EventUpdateMaturityParams {
    const message = createBaseEventUpdateMaturityParams();
    message.baseDenom = object.baseDenom ?? "";
    message.levelsPerYear = object.levelsPerYear ?? 0;
    message.years = object.years ?? 0;
    return message;
  },
};

function createBaseEventUpdateFeeRatios(): EventUpdateFeeRatios {
  return {
    baseDenom: "",
    cAssetFeeRatio: "",
    yieldFeeRatio: "",
    mergeFeeRatio: "",
    redeemFeeRatio: "",
    refractFeeRatio: "",
    cAssetBondFeeRatio: "",
    cAssetRedeemFeeRatio: "",
    yStakingClaimRewardFeeRatio: "",
  };
}

export const EventUpdateFeeRatios = {
  encode(message: EventUpdateFeeRatios, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.cAssetFeeRatio !== "") {
      writer.uint32(18).string(message.cAssetFeeRatio);
    }
    if (message.yieldFeeRatio !== "") {
      writer.uint32(26).string(message.yieldFeeRatio);
    }
    if (message.mergeFeeRatio !== "") {
      writer.uint32(34).string(message.mergeFeeRatio);
    }
    if (message.redeemFeeRatio !== "") {
      writer.uint32(42).string(message.redeemFeeRatio);
    }
    if (message.refractFeeRatio !== "") {
      writer.uint32(50).string(message.refractFeeRatio);
    }
    if (message.cAssetBondFeeRatio !== "") {
      writer.uint32(58).string(message.cAssetBondFeeRatio);
    }
    if (message.cAssetRedeemFeeRatio !== "") {
      writer.uint32(66).string(message.cAssetRedeemFeeRatio);
    }
    if (message.yStakingClaimRewardFeeRatio !== "") {
      writer.uint32(74).string(message.yStakingClaimRewardFeeRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateFeeRatios {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.cAssetFeeRatio = reader.string();
          break;
        case 3:
          message.yieldFeeRatio = reader.string();
          break;
        case 4:
          message.mergeFeeRatio = reader.string();
          break;
        case 5:
          message.redeemFeeRatio = reader.string();
          break;
        case 6:
          message.refractFeeRatio = reader.string();
          break;
        case 7:
          message.cAssetBondFeeRatio = reader.string();
          break;
        case 8:
          message.cAssetRedeemFeeRatio = reader.string();
          break;
        case 9:
          message.yStakingClaimRewardFeeRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateFeeRatios {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      cAssetFeeRatio: isSet(object.cAssetFeeRatio) ? String(object.cAssetFeeRatio) : "",
      yieldFeeRatio: isSet(object.yieldFeeRatio) ? String(object.yieldFeeRatio) : "",
      mergeFeeRatio: isSet(object.mergeFeeRatio) ? String(object.mergeFeeRatio) : "",
      redeemFeeRatio: isSet(object.redeemFeeRatio) ? String(object.redeemFeeRatio) : "",
      refractFeeRatio: isSet(object.refractFeeRatio) ? String(object.refractFeeRatio) : "",
      cAssetBondFeeRatio: isSet(object.cAssetBondFeeRatio) ? String(object.cAssetBondFeeRatio) : "",
      cAssetRedeemFeeRatio: isSet(object.cAssetRedeemFeeRatio) ? String(object.cAssetRedeemFeeRatio) : "",
      yStakingClaimRewardFeeRatio: isSet(object.yStakingClaimRewardFeeRatio)
        ? String(object.yStakingClaimRewardFeeRatio)
        : "",
    };
  },

  toJSON(message: EventUpdateFeeRatios): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.cAssetFeeRatio !== undefined && (obj.cAssetFeeRatio = message.cAssetFeeRatio);
    message.yieldFeeRatio !== undefined && (obj.yieldFeeRatio = message.yieldFeeRatio);
    message.mergeFeeRatio !== undefined && (obj.mergeFeeRatio = message.mergeFeeRatio);
    message.redeemFeeRatio !== undefined && (obj.redeemFeeRatio = message.redeemFeeRatio);
    message.refractFeeRatio !== undefined && (obj.refractFeeRatio = message.refractFeeRatio);
    message.cAssetBondFeeRatio !== undefined && (obj.cAssetBondFeeRatio = message.cAssetBondFeeRatio);
    message.cAssetRedeemFeeRatio !== undefined && (obj.cAssetRedeemFeeRatio = message.cAssetRedeemFeeRatio);
    message.yStakingClaimRewardFeeRatio !== undefined
      && (obj.yStakingClaimRewardFeeRatio = message.yStakingClaimRewardFeeRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateFeeRatios>, I>>(object: I): EventUpdateFeeRatios {
    const message = createBaseEventUpdateFeeRatios();
    message.baseDenom = object.baseDenom ?? "";
    message.cAssetFeeRatio = object.cAssetFeeRatio ?? "";
    message.yieldFeeRatio = object.yieldFeeRatio ?? "";
    message.mergeFeeRatio = object.mergeFeeRatio ?? "";
    message.redeemFeeRatio = object.redeemFeeRatio ?? "";
    message.refractFeeRatio = object.refractFeeRatio ?? "";
    message.cAssetBondFeeRatio = object.cAssetBondFeeRatio ?? "";
    message.cAssetRedeemFeeRatio = object.cAssetRedeemFeeRatio ?? "";
    message.yStakingClaimRewardFeeRatio = object.yStakingClaimRewardFeeRatio ?? "";
    return message;
  },
};

function createBaseEventUpdateMessagePassingConnection(): EventUpdateMessagePassingConnection {
  return { baseDenom: "", port: "", channel: "" };
}

export const EventUpdateMessagePassingConnection = {
  encode(message: EventUpdateMessagePassingConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateMessagePassingConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateMessagePassingConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateMessagePassingConnection {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
    };
  },

  toJSON(message: EventUpdateMessagePassingConnection): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.port !== undefined && (obj.port = message.port);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateMessagePassingConnection>, I>>(
    object: I,
  ): EventUpdateMessagePassingConnection {
    const message = createBaseEventUpdateMessagePassingConnection();
    message.baseDenom = object.baseDenom ?? "";
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
};

function createBaseEventDelistAsset(): EventDelistAsset {
  return { baseDenom: "" };
}

export const EventDelistAsset = {
  encode(message: EventDelistAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelistAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelistAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelistAsset {
    return { baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "" };
  },

  toJSON(message: EventDelistAsset): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDelistAsset>, I>>(object: I): EventDelistAsset {
    const message = createBaseEventDelistAsset();
    message.baseDenom = object.baseDenom ?? "";
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
