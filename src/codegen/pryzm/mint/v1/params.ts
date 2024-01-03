import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface DistributionProportions {
  /**
   * defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */
  poolIncentives: string;
  /**
   * defines the proportion of the minted mint_denom that is
   * to be allocated to developer rewards address.
   */
  development: string;
  /**
   * defines the proportion of the minted mint_denom that is
   * to be allocated to the dapp developers.
   */
  dapp: string;
  /**
   * defines the proportion of the minted mint_denom that is
   * to be allocated to the oracle feeders.
   */
  oracle: string;
}
export interface DistributionProportionsProtoMsg {
  typeUrl: "/pryzm.mint.v1.DistributionProportions";
  value: Uint8Array;
}
export interface DistributionProportionsAmino {
  /**
   * defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking?: string;
  /**
   * defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */
  pool_incentives?: string;
  /**
   * defines the proportion of the minted mint_denom that is
   * to be allocated to developer rewards address.
   */
  development?: string;
  /**
   * defines the proportion of the minted mint_denom that is
   * to be allocated to the dapp developers.
   */
  dapp?: string;
  /**
   * defines the proportion of the minted mint_denom that is
   * to be allocated to the oracle feeders.
   */
  oracle?: string;
}
export interface DistributionProportionsAminoMsg {
  type: "/pryzm.mint.v1.DistributionProportions";
  value: DistributionProportionsAmino;
}
export interface DistributionProportionsSDKType {
  staking: string;
  pool_incentives: string;
  development: string;
  dapp: string;
  oracle: string;
}
/** Params defines the parameters for the module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** maximum annual change in inflation rate */
  inflationRateChange: string;
  /** maximum inflation rate */
  inflationMax: string;
  /** minimum inflation rate */
  inflationMin: string;
  /** goal of percent bonded upryzms */
  goalBonded: string;
  /** mint epoch identifier e.g. (day, week). */
  epochIdentifier: string;
  /** start epoch to distribute minting rewards */
  mintingRewardsDistributionStartEpoch: bigint;
  /**
   * defines the distribution proportions of the minted
   * denom, i.e, which stakeholders will receive the minted
   * denoms and how much.
   */
  distributionProportions: DistributionProportions;
  /** epoch provisions from the first epoch. */
  genesisEpochProvisions: string;
  developmentAccountAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/pryzm.mint.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom?: string;
  /** maximum annual change in inflation rate */
  inflation_rate_change?: string;
  /** maximum inflation rate */
  inflation_max?: string;
  /** minimum inflation rate */
  inflation_min?: string;
  /** goal of percent bonded upryzms */
  goal_bonded?: string;
  /** mint epoch identifier e.g. (day, week). */
  epoch_identifier?: string;
  /** start epoch to distribute minting rewards */
  minting_rewards_distribution_start_epoch: string;
  /**
   * defines the distribution proportions of the minted
   * denom, i.e, which stakeholders will receive the minted
   * denoms and how much.
   */
  distribution_proportions?: DistributionProportionsAmino;
  /** epoch provisions from the first epoch. */
  genesis_epoch_provisions?: string;
  development_account_address?: string;
}
export interface ParamsAminoMsg {
  type: "/pryzm.mint.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  mint_denom: string;
  inflation_rate_change: string;
  inflation_max: string;
  inflation_min: string;
  goal_bonded: string;
  epoch_identifier: string;
  minting_rewards_distribution_start_epoch: bigint;
  distribution_proportions: DistributionProportionsSDKType;
  genesis_epoch_provisions: string;
  development_account_address: string;
}
function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    poolIncentives: "",
    development: "",
    dapp: "",
    oracle: ""
  };
}
export const DistributionProportions = {
  typeUrl: "/pryzm.mint.v1.DistributionProportions",
  is(o: any): o is DistributionProportions {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.poolIncentives === "string" && typeof o.development === "string" && typeof o.dapp === "string" && typeof o.oracle === "string");
  },
  isSDK(o: any): o is DistributionProportionsSDKType {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.pool_incentives === "string" && typeof o.development === "string" && typeof o.dapp === "string" && typeof o.oracle === "string");
  },
  isAmino(o: any): o is DistributionProportionsAmino {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.pool_incentives === "string" && typeof o.development === "string" && typeof o.dapp === "string" && typeof o.oracle === "string");
  },
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.poolIncentives !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.poolIncentives, 18).atomics);
    }
    if (message.development !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.development, 18).atomics);
    }
    if (message.dapp !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.dapp, 18).atomics);
    }
    if (message.oracle !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.oracle, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DistributionProportions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.poolIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.development = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.dapp = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.oracle = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistributionProportions {
    return {
      staking: isSet(object.staking) ? String(object.staking) : "",
      poolIncentives: isSet(object.poolIncentives) ? String(object.poolIncentives) : "",
      development: isSet(object.development) ? String(object.development) : "",
      dapp: isSet(object.dapp) ? String(object.dapp) : "",
      oracle: isSet(object.oracle) ? String(object.oracle) : ""
    };
  },
  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.staking !== undefined && (obj.staking = message.staking);
    message.poolIncentives !== undefined && (obj.poolIncentives = message.poolIncentives);
    message.development !== undefined && (obj.development = message.development);
    message.dapp !== undefined && (obj.dapp = message.dapp);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    return obj;
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.poolIncentives = object.poolIncentives ?? "";
    message.development = object.development ?? "";
    message.dapp = object.dapp ?? "";
    message.oracle = object.oracle ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    const message = createBaseDistributionProportions();
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.pool_incentives !== undefined && object.pool_incentives !== null) {
      message.poolIncentives = object.pool_incentives;
    }
    if (object.development !== undefined && object.development !== null) {
      message.development = object.development;
    }
    if (object.dapp !== undefined && object.dapp !== null) {
      message.dapp = object.dapp;
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = object.oracle;
    }
    return message;
  },
  toAmino(message: DistributionProportions, useInterfaces: boolean = true): DistributionProportionsAmino {
    const obj: any = {};
    obj.staking = padDecimal(message.staking) === "" ? undefined : padDecimal(message.staking);
    obj.pool_incentives = padDecimal(message.poolIncentives) === "" ? undefined : padDecimal(message.poolIncentives);
    obj.development = padDecimal(message.development) === "" ? undefined : padDecimal(message.development);
    obj.dapp = padDecimal(message.dapp) === "" ? undefined : padDecimal(message.dapp);
    obj.oracle = padDecimal(message.oracle) === "" ? undefined : padDecimal(message.oracle);
    return obj;
  },
  fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions {
    return DistributionProportions.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProportionsProtoMsg, useInterfaces: boolean = true): DistributionProportions {
    return DistributionProportions.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DistributionProportions): Uint8Array {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg {
    return {
      typeUrl: "/pryzm.mint.v1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DistributionProportions.typeUrl, DistributionProportions);
function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    epochIdentifier: "",
    mintingRewardsDistributionStartEpoch: BigInt(0),
    distributionProportions: DistributionProportions.fromPartial({}),
    genesisEpochProvisions: "",
    developmentAccountAddress: ""
  };
}
export const Params = {
  typeUrl: "/pryzm.mint.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mintDenom === "string" && typeof o.inflationRateChange === "string" && typeof o.inflationMax === "string" && typeof o.inflationMin === "string" && typeof o.goalBonded === "string" && typeof o.epochIdentifier === "string" && typeof o.mintingRewardsDistributionStartEpoch === "bigint" && DistributionProportions.is(o.distributionProportions) && typeof o.genesisEpochProvisions === "string" && typeof o.developmentAccountAddress === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_denom === "string" && typeof o.inflation_rate_change === "string" && typeof o.inflation_max === "string" && typeof o.inflation_min === "string" && typeof o.goal_bonded === "string" && typeof o.epoch_identifier === "string" && typeof o.minting_rewards_distribution_start_epoch === "bigint" && DistributionProportions.isSDK(o.distribution_proportions) && typeof o.genesis_epoch_provisions === "string" && typeof o.development_account_address === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_denom === "string" && typeof o.inflation_rate_change === "string" && typeof o.inflation_max === "string" && typeof o.inflation_min === "string" && typeof o.goal_bonded === "string" && typeof o.epoch_identifier === "string" && typeof o.minting_rewards_distribution_start_epoch === "bigint" && DistributionProportions.isAmino(o.distribution_proportions) && typeof o.genesis_epoch_provisions === "string" && typeof o.development_account_address === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflationRateChange, 18).atomics);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.inflationMax, 18).atomics);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.inflationMin, 18).atomics);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.goalBonded, 18).atomics);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(50).string(message.epochIdentifier);
    }
    if (message.mintingRewardsDistributionStartEpoch !== BigInt(0)) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(66).fork()).ldelim();
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.genesisEpochProvisions, 18).atomics);
    }
    if (message.developmentAccountAddress !== "") {
      writer.uint32(82).string(message.developmentAccountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflationMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflationMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goalBonded = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.epochIdentifier = reader.string();
          break;
        case 7:
          message.mintingRewardsDistributionStartEpoch = reader.int64();
          break;
        case 8:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.genesisEpochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.developmentAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      inflationRateChange: isSet(object.inflationRateChange) ? String(object.inflationRateChange) : "",
      inflationMax: isSet(object.inflationMax) ? String(object.inflationMax) : "",
      inflationMin: isSet(object.inflationMin) ? String(object.inflationMin) : "",
      goalBonded: isSet(object.goalBonded) ? String(object.goalBonded) : "",
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      mintingRewardsDistributionStartEpoch: isSet(object.mintingRewardsDistributionStartEpoch) ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0),
      distributionProportions: isSet(object.distributionProportions) ? DistributionProportions.fromJSON(object.distributionProportions) : undefined,
      genesisEpochProvisions: isSet(object.genesisEpochProvisions) ? String(object.genesisEpochProvisions) : "",
      developmentAccountAddress: isSet(object.developmentAccountAddress) ? String(object.developmentAccountAddress) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.inflationRateChange !== undefined && (obj.inflationRateChange = message.inflationRateChange);
    message.inflationMax !== undefined && (obj.inflationMax = message.inflationMax);
    message.inflationMin !== undefined && (obj.inflationMin = message.inflationMin);
    message.goalBonded !== undefined && (obj.goalBonded = message.goalBonded);
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    message.mintingRewardsDistributionStartEpoch !== undefined && (obj.mintingRewardsDistributionStartEpoch = (message.mintingRewardsDistributionStartEpoch || BigInt(0)).toString());
    message.distributionProportions !== undefined && (obj.distributionProportions = message.distributionProportions ? DistributionProportions.toJSON(message.distributionProportions) : undefined);
    message.genesisEpochProvisions !== undefined && (obj.genesisEpochProvisions = message.genesisEpochProvisions);
    message.developmentAccountAddress !== undefined && (obj.developmentAccountAddress = message.developmentAccountAddress);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.inflationRateChange = object.inflationRateChange ?? "";
    message.inflationMax = object.inflationMax ?? "";
    message.inflationMin = object.inflationMin ?? "";
    message.goalBonded = object.goalBonded ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0);
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.developmentAccountAddress = object.developmentAccountAddress ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.inflation_rate_change !== undefined && object.inflation_rate_change !== null) {
      message.inflationRateChange = object.inflation_rate_change;
    }
    if (object.inflation_max !== undefined && object.inflation_max !== null) {
      message.inflationMax = object.inflation_max;
    }
    if (object.inflation_min !== undefined && object.inflation_min !== null) {
      message.inflationMin = object.inflation_min;
    }
    if (object.goal_bonded !== undefined && object.goal_bonded !== null) {
      message.goalBonded = object.goal_bonded;
    }
    if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.minting_rewards_distribution_start_epoch !== undefined && object.minting_rewards_distribution_start_epoch !== null) {
      message.mintingRewardsDistributionStartEpoch = BigInt(object.minting_rewards_distribution_start_epoch);
    }
    if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
      message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
    }
    if (object.genesis_epoch_provisions !== undefined && object.genesis_epoch_provisions !== null) {
      message.genesisEpochProvisions = object.genesis_epoch_provisions;
    }
    if (object.development_account_address !== undefined && object.development_account_address !== null) {
      message.developmentAccountAddress = object.development_account_address;
    }
    return message;
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    obj.inflation_rate_change = padDecimal(message.inflationRateChange) === "" ? undefined : padDecimal(message.inflationRateChange);
    obj.inflation_max = padDecimal(message.inflationMax) === "" ? undefined : padDecimal(message.inflationMax);
    obj.inflation_min = padDecimal(message.inflationMin) === "" ? undefined : padDecimal(message.inflationMin);
    obj.goal_bonded = padDecimal(message.goalBonded) === "" ? undefined : padDecimal(message.goalBonded);
    obj.epoch_identifier = message.epochIdentifier === "" ? undefined : message.epochIdentifier;
    obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch ? message.mintingRewardsDistributionStartEpoch.toString() : undefined;
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions, useInterfaces) : undefined;
    obj.genesis_epoch_provisions = padDecimal(message.genesisEpochProvisions) === "" ? undefined : padDecimal(message.genesisEpochProvisions);
    obj.development_account_address = message.developmentAccountAddress === "" ? undefined : message.developmentAccountAddress;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pryzm.mint.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);