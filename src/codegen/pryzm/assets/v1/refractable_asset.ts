import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** The properties of a supported asset */
export interface RefractableAsset {
  /** A unique user-provided identifier. Is used in the p/y token denom */
  id: string;
  /** The denomination of the token on Pryzm. This may be an icstaking cToken or an IBC transferred token denom for external assets. */
  tokenDenom: string;
  /** The id for the host chain on which the asset is staked. This is empty if the asset is external. */
  hostChainId: string;
  /** Disabled assets cannot be refracted, but can still be redeemed. */
  disabled: boolean;
  maturityParams: MaturityParams;
  /** The amount of fee for each operation on the asset. */
  feeRatios: FeeRatios;
}
/** The properties of a supported asset */
export interface RefractableAssetSDKType {
  id: string;
  token_denom: string;
  host_chain_id: string;
  disabled: boolean;
  maturity_params: MaturityParamsSDKType;
  fee_ratios: FeeRatiosSDKType;
}
/** The parameters based on which new maturities are introduced */
export interface MaturityParams {
  /** The number of maturities per year: can be 1, 2, 4, 12 */
  levelsPerYear: number;
  /** The number of years in advance that maturities are made available for */
  years: number;
}
/** The parameters based on which new maturities are introduced */
export interface MaturityParamsSDKType {
  levels_per_year: number;
  years: number;
}
/** Fee ratio per each operation */
export interface FeeRatios {
  yield?: string;
  refractorRefract?: string;
  refractorMerge?: string;
  refractorRedeem?: string;
  yStakingClaimReward?: string;
}
/** Fee ratio per each operation */
export interface FeeRatiosSDKType {
  yield?: string;
  refractor_refract?: string;
  refractor_merge?: string;
  refractor_redeem?: string;
  y_staking_claim_reward?: string;
}
function createBaseRefractableAsset(): RefractableAsset {
  return {
    id: "",
    tokenDenom: "",
    hostChainId: "",
    disabled: false,
    maturityParams: MaturityParams.fromPartial({}),
    feeRatios: FeeRatios.fromPartial({})
  };
}
export const RefractableAsset = {
  encode(message: RefractableAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(18).string(message.tokenDenom);
    }
    if (message.hostChainId !== "") {
      writer.uint32(26).string(message.hostChainId);
    }
    if (message.disabled === true) {
      writer.uint32(32).bool(message.disabled);
    }
    if (message.maturityParams !== undefined) {
      MaturityParams.encode(message.maturityParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RefractableAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefractableAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.tokenDenom = reader.string();
          break;
        case 3:
          message.hostChainId = reader.string();
          break;
        case 4:
          message.disabled = reader.bool();
          break;
        case 5:
          message.maturityParams = MaturityParams.decode(reader, reader.uint32());
          break;
        case 6:
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
      id: isSet(object.id) ? String(object.id) : "",
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      maturityParams: isSet(object.maturityParams) ? MaturityParams.fromJSON(object.maturityParams) : undefined,
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined
    };
  },
  toJSON(message: RefractableAsset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.maturityParams !== undefined && (obj.maturityParams = message.maturityParams ? MaturityParams.toJSON(message.maturityParams) : undefined);
    message.feeRatios !== undefined && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    return obj;
  },
  fromPartial(object: Partial<RefractableAsset>): RefractableAsset {
    const message = createBaseRefractableAsset();
    message.id = object.id ?? "";
    message.tokenDenom = object.tokenDenom ?? "";
    message.hostChainId = object.hostChainId ?? "";
    message.disabled = object.disabled ?? false;
    message.maturityParams = object.maturityParams !== undefined && object.maturityParams !== null ? MaturityParams.fromPartial(object.maturityParams) : undefined;
    message.feeRatios = object.feeRatios !== undefined && object.feeRatios !== null ? FeeRatios.fromPartial(object.feeRatios) : undefined;
    return message;
  }
};
function createBaseMaturityParams(): MaturityParams {
  return {
    levelsPerYear: 0,
    years: 0
  };
}
export const MaturityParams = {
  encode(message: MaturityParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.levelsPerYear !== 0) {
      writer.uint32(8).int32(message.levelsPerYear);
    }
    if (message.years !== 0) {
      writer.uint32(16).int32(message.years);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MaturityParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      years: isSet(object.years) ? Number(object.years) : 0
    };
  },
  toJSON(message: MaturityParams): unknown {
    const obj: any = {};
    message.levelsPerYear !== undefined && (obj.levelsPerYear = Math.round(message.levelsPerYear));
    message.years !== undefined && (obj.years = Math.round(message.years));
    return obj;
  },
  fromPartial(object: Partial<MaturityParams>): MaturityParams {
    const message = createBaseMaturityParams();
    message.levelsPerYear = object.levelsPerYear ?? 0;
    message.years = object.years ?? 0;
    return message;
  }
};
function createBaseFeeRatios(): FeeRatios {
  return {
    yield: undefined,
    refractorRefract: undefined,
    refractorMerge: undefined,
    refractorRedeem: undefined,
    yStakingClaimReward: undefined
  };
}
export const FeeRatios = {
  encode(message: FeeRatios, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yield !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.yield, 18).atomics);
    }
    if (message.refractorRefract !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.refractorRefract, 18).atomics);
    }
    if (message.refractorMerge !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.refractorMerge, 18).atomics);
    }
    if (message.refractorRedeem !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.refractorRedeem, 18).atomics);
    }
    if (message.yStakingClaimReward !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.yStakingClaimReward, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeRatios {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.refractorRefract = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.refractorMerge = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.refractorRedeem = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.yStakingClaimReward = Decimal.fromAtomics(reader.string(), 18).toString();
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
      yield: isSet(object.yield) ? String(object.yield) : undefined,
      refractorRefract: isSet(object.refractorRefract) ? String(object.refractorRefract) : undefined,
      refractorMerge: isSet(object.refractorMerge) ? String(object.refractorMerge) : undefined,
      refractorRedeem: isSet(object.refractorRedeem) ? String(object.refractorRedeem) : undefined,
      yStakingClaimReward: isSet(object.yStakingClaimReward) ? String(object.yStakingClaimReward) : undefined
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
  fromPartial(object: Partial<FeeRatios>): FeeRatios {
    const message = createBaseFeeRatios();
    message.yield = object.yield ?? undefined;
    message.refractorRefract = object.refractorRefract ?? undefined;
    message.refractorMerge = object.refractorMerge ?? undefined;
    message.refractorRedeem = object.refractorRedeem ?? undefined;
    message.yStakingClaimReward = object.yStakingClaimReward ?? undefined;
    return message;
  }
};