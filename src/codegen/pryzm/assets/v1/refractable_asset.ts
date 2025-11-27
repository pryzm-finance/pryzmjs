import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface DelistedMaturityLevel {
  symbol: string;
  /**
   * decimal number less than or equal to 1, representing how much of an asset's price is attributed to pAsset
   * the rest would be attributed to yASSET.
   */
  pAssetPriceUnderlyingTerms: string;
}
export interface DelistedMaturityLevelProtoMsg {
  typeUrl: "/pryzm.assets.v1.DelistedMaturityLevel";
  value: Uint8Array;
}
export interface DelistedMaturityLevelAmino {
  symbol?: string;
  /**
   * decimal number less than or equal to 1, representing how much of an asset's price is attributed to pAsset
   * the rest would be attributed to yASSET.
   */
  p_asset_price_underlying_terms?: string;
}
export interface DelistedMaturityLevelAminoMsg {
  type: "/pryzm.assets.v1.DelistedMaturityLevel";
  value: DelistedMaturityLevelAmino;
}
export interface DelistedMaturityLevelSDKType {
  symbol: string;
  p_asset_price_underlying_terms: string;
}
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
  delisted: boolean;
  delistedMaturities: DelistedMaturityLevel[];
}
export interface RefractableAssetProtoMsg {
  typeUrl: "/pryzm.assets.v1.RefractableAsset";
  value: Uint8Array;
}
/** The properties of a supported asset */
export interface RefractableAssetAmino {
  /** A unique user-provided identifier. Is used in the p/y token denom */
  id?: string;
  /** The denomination of the token on Pryzm. This may be an icstaking cToken or an IBC transferred token denom for external assets. */
  token_denom?: string;
  /** The id for the host chain on which the asset is staked. This is empty if the asset is external. */
  host_chain_id: string;
  /** Disabled assets cannot be refracted, but can still be redeemed. */
  disabled: boolean;
  maturity_params: MaturityParamsAmino;
  /** The amount of fee for each operation on the asset. */
  fee_ratios: FeeRatiosAmino;
  delisted?: boolean;
  delisted_maturities?: DelistedMaturityLevelAmino[];
}
export interface RefractableAssetAminoMsg {
  type: "/pryzm.assets.v1.RefractableAsset";
  value: RefractableAssetAmino;
}
/** The properties of a supported asset */
export interface RefractableAssetSDKType {
  id: string;
  token_denom: string;
  host_chain_id: string;
  disabled: boolean;
  maturity_params: MaturityParamsSDKType;
  fee_ratios: FeeRatiosSDKType;
  delisted: boolean;
  delisted_maturities: DelistedMaturityLevelSDKType[];
}
/** The parameters based on which new maturities are introduced */
export interface MaturityParams {
  /**
   * The number of maturities per year: can be 0, 1, 2, 4, 12
   * note: levels_per_year should be zero, if and only if years is 0 (which means no automatic maturity creation)
   */
  levelsPerYear: number;
  /**
   * The number of years in advance that maturities are made available for
   * note: years should be zero, if and only if levels_per_year is 0 (which means no automatic maturity creation)
   */
  years: number;
}
export interface MaturityParamsProtoMsg {
  typeUrl: "/pryzm.assets.v1.MaturityParams";
  value: Uint8Array;
}
/** The parameters based on which new maturities are introduced */
export interface MaturityParamsAmino {
  /**
   * The number of maturities per year: can be 0, 1, 2, 4, 12
   * note: levels_per_year should be zero, if and only if years is 0 (which means no automatic maturity creation)
   */
  levels_per_year: number;
  /**
   * The number of years in advance that maturities are made available for
   * note: years should be zero, if and only if levels_per_year is 0 (which means no automatic maturity creation)
   */
  years: number;
}
export interface MaturityParamsAminoMsg {
  type: "/pryzm.assets.v1.MaturityParams";
  value: MaturityParamsAmino;
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
export interface FeeRatiosProtoMsg {
  typeUrl: "/pryzm.assets.v1.FeeRatios";
  value: Uint8Array;
}
/** Fee ratio per each operation */
export interface FeeRatiosAmino {
  yield?: string;
  refractor_refract?: string;
  refractor_merge?: string;
  refractor_redeem?: string;
  y_staking_claim_reward?: string;
}
export interface FeeRatiosAminoMsg {
  type: "/pryzm.assets.v1.FeeRatios";
  value: FeeRatiosAmino;
}
/** Fee ratio per each operation */
export interface FeeRatiosSDKType {
  yield?: string;
  refractor_refract?: string;
  refractor_merge?: string;
  refractor_redeem?: string;
  y_staking_claim_reward?: string;
}
function createBaseDelistedMaturityLevel(): DelistedMaturityLevel {
  return {
    symbol: "",
    pAssetPriceUnderlyingTerms: ""
  };
}
export const DelistedMaturityLevel = {
  typeUrl: "/pryzm.assets.v1.DelistedMaturityLevel",
  is(o: any): o is DelistedMaturityLevel {
    return o && (o.$typeUrl === DelistedMaturityLevel.typeUrl || typeof o.symbol === "string" && typeof o.pAssetPriceUnderlyingTerms === "string");
  },
  isSDK(o: any): o is DelistedMaturityLevelSDKType {
    return o && (o.$typeUrl === DelistedMaturityLevel.typeUrl || typeof o.symbol === "string" && typeof o.p_asset_price_underlying_terms === "string");
  },
  isAmino(o: any): o is DelistedMaturityLevelAmino {
    return o && (o.$typeUrl === DelistedMaturityLevel.typeUrl || typeof o.symbol === "string" && typeof o.p_asset_price_underlying_terms === "string");
  },
  encode(message: DelistedMaturityLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.pAssetPriceUnderlyingTerms !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.pAssetPriceUnderlyingTerms, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DelistedMaturityLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelistedMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.pAssetPriceUnderlyingTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelistedMaturityLevel {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      pAssetPriceUnderlyingTerms: isSet(object.pAssetPriceUnderlyingTerms) ? String(object.pAssetPriceUnderlyingTerms) : ""
    };
  },
  toJSON(message: DelistedMaturityLevel): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.pAssetPriceUnderlyingTerms !== undefined && (obj.pAssetPriceUnderlyingTerms = message.pAssetPriceUnderlyingTerms);
    return obj;
  },
  fromPartial(object: Partial<DelistedMaturityLevel>): DelistedMaturityLevel {
    const message = createBaseDelistedMaturityLevel();
    message.symbol = object.symbol ?? "";
    message.pAssetPriceUnderlyingTerms = object.pAssetPriceUnderlyingTerms ?? "";
    return message;
  },
  fromAmino(object: DelistedMaturityLevelAmino): DelistedMaturityLevel {
    const message = createBaseDelistedMaturityLevel();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.p_asset_price_underlying_terms !== undefined && object.p_asset_price_underlying_terms !== null) {
      message.pAssetPriceUnderlyingTerms = object.p_asset_price_underlying_terms;
    }
    return message;
  },
  toAmino(message: DelistedMaturityLevel, useInterfaces: boolean = true): DelistedMaturityLevelAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.p_asset_price_underlying_terms = padDecimal(message.pAssetPriceUnderlyingTerms) === "" ? undefined : padDecimal(message.pAssetPriceUnderlyingTerms);
    return obj;
  },
  fromAminoMsg(object: DelistedMaturityLevelAminoMsg): DelistedMaturityLevel {
    return DelistedMaturityLevel.fromAmino(object.value);
  },
  fromProtoMsg(message: DelistedMaturityLevelProtoMsg, useInterfaces: boolean = true): DelistedMaturityLevel {
    return DelistedMaturityLevel.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DelistedMaturityLevel): Uint8Array {
    return DelistedMaturityLevel.encode(message).finish();
  },
  toProtoMsg(message: DelistedMaturityLevel): DelistedMaturityLevelProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.DelistedMaturityLevel",
      value: DelistedMaturityLevel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelistedMaturityLevel.typeUrl, DelistedMaturityLevel);
function createBaseRefractableAsset(): RefractableAsset {
  return {
    id: "",
    tokenDenom: "",
    hostChainId: "",
    disabled: false,
    maturityParams: MaturityParams.fromPartial({}),
    feeRatios: FeeRatios.fromPartial({}),
    delisted: false,
    delistedMaturities: []
  };
}
export const RefractableAsset = {
  typeUrl: "/pryzm.assets.v1.RefractableAsset",
  is(o: any): o is RefractableAsset {
    return o && (o.$typeUrl === RefractableAsset.typeUrl || typeof o.id === "string" && typeof o.tokenDenom === "string" && typeof o.hostChainId === "string" && typeof o.disabled === "boolean" && MaturityParams.is(o.maturityParams) && FeeRatios.is(o.feeRatios) && typeof o.delisted === "boolean" && Array.isArray(o.delistedMaturities) && (!o.delistedMaturities.length || DelistedMaturityLevel.is(o.delistedMaturities[0])));
  },
  isSDK(o: any): o is RefractableAssetSDKType {
    return o && (o.$typeUrl === RefractableAsset.typeUrl || typeof o.id === "string" && typeof o.token_denom === "string" && typeof o.host_chain_id === "string" && typeof o.disabled === "boolean" && MaturityParams.isSDK(o.maturity_params) && FeeRatios.isSDK(o.fee_ratios) && typeof o.delisted === "boolean" && Array.isArray(o.delisted_maturities) && (!o.delisted_maturities.length || DelistedMaturityLevel.isSDK(o.delisted_maturities[0])));
  },
  isAmino(o: any): o is RefractableAssetAmino {
    return o && (o.$typeUrl === RefractableAsset.typeUrl || typeof o.id === "string" && typeof o.token_denom === "string" && typeof o.host_chain_id === "string" && typeof o.disabled === "boolean" && MaturityParams.isAmino(o.maturity_params) && FeeRatios.isAmino(o.fee_ratios) && typeof o.delisted === "boolean" && Array.isArray(o.delisted_maturities) && (!o.delisted_maturities.length || DelistedMaturityLevel.isAmino(o.delisted_maturities[0])));
  },
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
    if (message.delisted === true) {
      writer.uint32(56).bool(message.delisted);
    }
    for (const v of message.delistedMaturities) {
      DelistedMaturityLevel.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RefractableAsset {
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
          message.maturityParams = MaturityParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.feeRatios = FeeRatios.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.delisted = reader.bool();
          break;
        case 8:
          message.delistedMaturities.push(DelistedMaturityLevel.decode(reader, reader.uint32(), useInterfaces));
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
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined,
      delisted: isSet(object.delisted) ? Boolean(object.delisted) : false,
      delistedMaturities: Array.isArray(object?.delistedMaturities) ? object.delistedMaturities.map((e: any) => DelistedMaturityLevel.fromJSON(e)) : []
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
    message.delisted !== undefined && (obj.delisted = message.delisted);
    if (message.delistedMaturities) {
      obj.delistedMaturities = message.delistedMaturities.map(e => e ? DelistedMaturityLevel.toJSON(e) : undefined);
    } else {
      obj.delistedMaturities = [];
    }
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
    message.delisted = object.delisted ?? false;
    message.delistedMaturities = object.delistedMaturities?.map(e => DelistedMaturityLevel.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RefractableAssetAmino): RefractableAsset {
    const message = createBaseRefractableAsset();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.token_denom !== undefined && object.token_denom !== null) {
      message.tokenDenom = object.token_denom;
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    }
    if (object.maturity_params !== undefined && object.maturity_params !== null) {
      message.maturityParams = MaturityParams.fromAmino(object.maturity_params);
    }
    if (object.fee_ratios !== undefined && object.fee_ratios !== null) {
      message.feeRatios = FeeRatios.fromAmino(object.fee_ratios);
    }
    if (object.delisted !== undefined && object.delisted !== null) {
      message.delisted = object.delisted;
    }
    message.delistedMaturities = object.delisted_maturities?.map(e => DelistedMaturityLevel.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RefractableAsset, useInterfaces: boolean = true): RefractableAssetAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.token_denom = message.tokenDenom === "" ? undefined : message.tokenDenom;
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.disabled = message.disabled === false ? undefined : message.disabled;
    obj.maturity_params = message.maturityParams ? MaturityParams.toAmino(message.maturityParams, useInterfaces) : undefined;
    obj.fee_ratios = message.feeRatios ? FeeRatios.toAmino(message.feeRatios, useInterfaces) : undefined;
    obj.delisted = message.delisted === false ? undefined : message.delisted;
    if (message.delistedMaturities) {
      obj.delisted_maturities = message.delistedMaturities.map(e => e ? DelistedMaturityLevel.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delisted_maturities = message.delistedMaturities;
    }
    return obj;
  },
  fromAminoMsg(object: RefractableAssetAminoMsg): RefractableAsset {
    return RefractableAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: RefractableAssetProtoMsg, useInterfaces: boolean = true): RefractableAsset {
    return RefractableAsset.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RefractableAsset): Uint8Array {
    return RefractableAsset.encode(message).finish();
  },
  toProtoMsg(message: RefractableAsset): RefractableAssetProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.RefractableAsset",
      value: RefractableAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RefractableAsset.typeUrl, RefractableAsset);
function createBaseMaturityParams(): MaturityParams {
  return {
    levelsPerYear: 0,
    years: 0
  };
}
export const MaturityParams = {
  typeUrl: "/pryzm.assets.v1.MaturityParams",
  is(o: any): o is MaturityParams {
    return o && (o.$typeUrl === MaturityParams.typeUrl || typeof o.levelsPerYear === "number" && typeof o.years === "number");
  },
  isSDK(o: any): o is MaturityParamsSDKType {
    return o && (o.$typeUrl === MaturityParams.typeUrl || typeof o.levels_per_year === "number" && typeof o.years === "number");
  },
  isAmino(o: any): o is MaturityParamsAmino {
    return o && (o.$typeUrl === MaturityParams.typeUrl || typeof o.levels_per_year === "number" && typeof o.years === "number");
  },
  encode(message: MaturityParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.levelsPerYear !== 0) {
      writer.uint32(8).int32(message.levelsPerYear);
    }
    if (message.years !== 0) {
      writer.uint32(16).int32(message.years);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MaturityParams {
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
  },
  fromAmino(object: MaturityParamsAmino): MaturityParams {
    const message = createBaseMaturityParams();
    if (object.levels_per_year !== undefined && object.levels_per_year !== null) {
      message.levelsPerYear = object.levels_per_year;
    }
    if (object.years !== undefined && object.years !== null) {
      message.years = object.years;
    }
    return message;
  },
  toAmino(message: MaturityParams, useInterfaces: boolean = true): MaturityParamsAmino {
    const obj: any = {};
    obj.levels_per_year = message.levelsPerYear === 0 ? undefined : message.levelsPerYear;
    obj.years = message.years === 0 ? undefined : message.years;
    return obj;
  },
  fromAminoMsg(object: MaturityParamsAminoMsg): MaturityParams {
    return MaturityParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MaturityParamsProtoMsg, useInterfaces: boolean = true): MaturityParams {
    return MaturityParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MaturityParams): Uint8Array {
    return MaturityParams.encode(message).finish();
  },
  toProtoMsg(message: MaturityParams): MaturityParamsProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MaturityParams",
      value: MaturityParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MaturityParams.typeUrl, MaturityParams);
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
  typeUrl: "/pryzm.assets.v1.FeeRatios",
  is(o: any): o is FeeRatios {
    return o && o.$typeUrl === FeeRatios.typeUrl;
  },
  isSDK(o: any): o is FeeRatiosSDKType {
    return o && o.$typeUrl === FeeRatios.typeUrl;
  },
  isAmino(o: any): o is FeeRatiosAmino {
    return o && o.$typeUrl === FeeRatios.typeUrl;
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FeeRatios {
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
  },
  fromAmino(object: FeeRatiosAmino): FeeRatios {
    const message = createBaseFeeRatios();
    if (object.yield !== undefined && object.yield !== null) {
      message.yield = object.yield;
    }
    if (object.refractor_refract !== undefined && object.refractor_refract !== null) {
      message.refractorRefract = object.refractor_refract;
    }
    if (object.refractor_merge !== undefined && object.refractor_merge !== null) {
      message.refractorMerge = object.refractor_merge;
    }
    if (object.refractor_redeem !== undefined && object.refractor_redeem !== null) {
      message.refractorRedeem = object.refractor_redeem;
    }
    if (object.y_staking_claim_reward !== undefined && object.y_staking_claim_reward !== null) {
      message.yStakingClaimReward = object.y_staking_claim_reward;
    }
    return message;
  },
  toAmino(message: FeeRatios, useInterfaces: boolean = true): FeeRatiosAmino {
    const obj: any = {};
    obj.yield = padDecimal(message.yield) === null ? undefined : padDecimal(message.yield);
    obj.refractor_refract = padDecimal(message.refractorRefract) === null ? undefined : padDecimal(message.refractorRefract);
    obj.refractor_merge = padDecimal(message.refractorMerge) === null ? undefined : padDecimal(message.refractorMerge);
    obj.refractor_redeem = padDecimal(message.refractorRedeem) === null ? undefined : padDecimal(message.refractorRedeem);
    obj.y_staking_claim_reward = padDecimal(message.yStakingClaimReward) === null ? undefined : padDecimal(message.yStakingClaimReward);
    return obj;
  },
  fromAminoMsg(object: FeeRatiosAminoMsg): FeeRatios {
    return FeeRatios.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeRatiosProtoMsg, useInterfaces: boolean = true): FeeRatios {
    return FeeRatios.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FeeRatios): Uint8Array {
    return FeeRatios.encode(message).finish();
  },
  toProtoMsg(message: FeeRatios): FeeRatiosProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.FeeRatios",
      value: FeeRatios.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeeRatios.typeUrl, FeeRatios);