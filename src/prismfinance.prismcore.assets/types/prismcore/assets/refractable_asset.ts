/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface RefractableAsset {
  baseDenom: string;
  transferChannel: string;
  tokenDenom: string;
  icstaked: boolean;
  disabled: boolean;
  maturityParams: MaturityParams | undefined;
  feeRatios: FeeRatios | undefined;
}

export interface MaturityParams {
  levelsPerYear: number;
  years: number;
}

export interface FeeRatios {
  yield: string;
  refractorRefract: string;
  refractorMerge: string;
  refractorRedeem: string;
  yStakingClaimReward: string;
}

function createBaseRefractableAsset(): RefractableAsset {
  return {
    baseDenom: "",
    transferChannel: "",
    tokenDenom: "",
    icstaked: false,
    disabled: false,
    maturityParams: undefined,
    feeRatios: undefined,
  };
}

export const RefractableAsset = {
  encode(message: RefractableAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.transferChannel !== "") {
      writer.uint32(18).string(message.transferChannel);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(26).string(message.tokenDenom);
    }
    if (message.icstaked === true) {
      writer.uint32(32).bool(message.icstaked);
    }
    if (message.disabled === true) {
      writer.uint32(40).bool(message.disabled);
    }
    if (message.maturityParams !== undefined) {
      MaturityParams.encode(message.maturityParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefractableAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefractableAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.transferChannel = reader.string();
          break;
        case 3:
          message.tokenDenom = reader.string();
          break;
        case 4:
          message.icstaked = reader.bool();
          break;
        case 5:
          message.disabled = reader.bool();
          break;
        case 6:
          message.maturityParams = MaturityParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.feeRatios = FeeRatios.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefractableAsset {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      icstaked: isSet(object.icstaked) ? Boolean(object.icstaked) : false,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      maturityParams: isSet(object.maturityParams) ? MaturityParams.fromJSON(object.maturityParams) : undefined,
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined,
    };
  },

  toJSON(message: RefractableAsset): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.icstaked !== undefined && (obj.icstaked = message.icstaked);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.maturityParams !== undefined
      && (obj.maturityParams = message.maturityParams ? MaturityParams.toJSON(message.maturityParams) : undefined);
    message.feeRatios !== undefined
      && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefractableAsset>, I>>(object: I): RefractableAsset {
    const message = createBaseRefractableAsset();
    message.baseDenom = object.baseDenom ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.tokenDenom = object.tokenDenom ?? "";
    message.icstaked = object.icstaked ?? false;
    message.disabled = object.disabled ?? false;
    message.maturityParams = (object.maturityParams !== undefined && object.maturityParams !== null)
      ? MaturityParams.fromPartial(object.maturityParams)
      : undefined;
    message.feeRatios = (object.feeRatios !== undefined && object.feeRatios !== null)
      ? FeeRatios.fromPartial(object.feeRatios)
      : undefined;
    return message;
  },
};

function createBaseMaturityParams(): MaturityParams {
  return { levelsPerYear: 0, years: 0 };
}

export const MaturityParams = {
  encode(message: MaturityParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.levelsPerYear !== 0) {
      writer.uint32(8).int32(message.levelsPerYear);
    }
    if (message.years !== 0) {
      writer.uint32(16).int32(message.years);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaturityParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaturityParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.levelsPerYear = reader.int32();
          break;
        case 2:
          message.years = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MaturityParams {
    return {
      levelsPerYear: isSet(object.levelsPerYear) ? Number(object.levelsPerYear) : 0,
      years: isSet(object.years) ? Number(object.years) : 0,
    };
  },

  toJSON(message: MaturityParams): unknown {
    const obj: any = {};
    message.levelsPerYear !== undefined && (obj.levelsPerYear = Math.round(message.levelsPerYear));
    message.years !== undefined && (obj.years = Math.round(message.years));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MaturityParams>, I>>(object: I): MaturityParams {
    const message = createBaseMaturityParams();
    message.levelsPerYear = object.levelsPerYear ?? 0;
    message.years = object.years ?? 0;
    return message;
  },
};

function createBaseFeeRatios(): FeeRatios {
  return { yield: "", refractorRefract: "", refractorMerge: "", refractorRedeem: "", yStakingClaimReward: "" };
}

export const FeeRatios = {
  encode(message: FeeRatios, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yield !== "") {
      writer.uint32(10).string(message.yield);
    }
    if (message.refractorRefract !== "") {
      writer.uint32(18).string(message.refractorRefract);
    }
    if (message.refractorMerge !== "") {
      writer.uint32(26).string(message.refractorMerge);
    }
    if (message.refractorRedeem !== "") {
      writer.uint32(34).string(message.refractorRedeem);
    }
    if (message.yStakingClaimReward !== "") {
      writer.uint32(42).string(message.yStakingClaimReward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeRatios {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yield = reader.string();
          break;
        case 2:
          message.refractorRefract = reader.string();
          break;
        case 3:
          message.refractorMerge = reader.string();
          break;
        case 4:
          message.refractorRedeem = reader.string();
          break;
        case 5:
          message.yStakingClaimReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeRatios {
    return {
      yield: isSet(object.yield) ? String(object.yield) : "",
      refractorRefract: isSet(object.refractorRefract) ? String(object.refractorRefract) : "",
      refractorMerge: isSet(object.refractorMerge) ? String(object.refractorMerge) : "",
      refractorRedeem: isSet(object.refractorRedeem) ? String(object.refractorRedeem) : "",
      yStakingClaimReward: isSet(object.yStakingClaimReward) ? String(object.yStakingClaimReward) : "",
    };
  },

  toJSON(message: FeeRatios): unknown {
    const obj: any = {};
    message.yield !== undefined && (obj.yield = message.yield);
    message.refractorRefract !== undefined && (obj.refractorRefract = message.refractorRefract);
    message.refractorMerge !== undefined && (obj.refractorMerge = message.refractorMerge);
    message.refractorRedeem !== undefined && (obj.refractorRedeem = message.refractorRedeem);
    message.yStakingClaimReward !== undefined && (obj.yStakingClaimReward = message.yStakingClaimReward);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeRatios>, I>>(object: I): FeeRatios {
    const message = createBaseFeeRatios();
    message.yield = object.yield ?? "";
    message.refractorRefract = object.refractorRefract ?? "";
    message.refractorMerge = object.refractorMerge ?? "";
    message.refractorRedeem = object.refractorRedeem ?? "";
    message.yStakingClaimReward = object.yStakingClaimReward ?? "";
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
