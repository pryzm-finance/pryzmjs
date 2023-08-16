import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  /** goal of percent bonded uprisms */
  goalBonded: string;
  /** mint epoch identifier e.g. (day, week). */
  epochIdentifier: string;
  /** start epoch to distribute minting rewards */
  mintingRewardsDistributionStartEpoch: Long;
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
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  mint_denom: string;
  inflation_rate_change: string;
  inflation_max: string;
  inflation_min: string;
  goal_bonded: string;
  epoch_identifier: string;
  minting_rewards_distribution_start_epoch: Long;
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
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.poolIncentives !== "") {
      writer.uint32(18).string(message.poolIncentives);
    }
    if (message.development !== "") {
      writer.uint32(26).string(message.development);
    }
    if (message.dapp !== "") {
      writer.uint32(34).string(message.dapp);
    }
    if (message.oracle !== "") {
      writer.uint32(42).string(message.oracle);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;
        case 2:
          message.poolIncentives = reader.string();
          break;
        case 3:
          message.development = reader.string();
          break;
        case 4:
          message.dapp = reader.string();
          break;
        case 5:
          message.oracle = reader.string();
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
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    epochIdentifier: "",
    mintingRewardsDistributionStartEpoch: Long.ZERO,
    distributionProportions: DistributionProportions.fromPartial({}),
    genesisEpochProvisions: "",
    developmentAccountAddress: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(message.inflationRateChange);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(message.inflationMax);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(message.inflationMin);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(message.goalBonded);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(50).string(message.epochIdentifier);
    }
    if (!message.mintingRewardsDistributionStartEpoch.isZero()) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(66).fork()).ldelim();
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(74).string(message.genesisEpochProvisions);
    }
    if (message.developmentAccountAddress !== "") {
      writer.uint32(82).string(message.developmentAccountAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = reader.string();
          break;
        case 3:
          message.inflationMax = reader.string();
          break;
        case 4:
          message.inflationMin = reader.string();
          break;
        case 5:
          message.goalBonded = reader.string();
          break;
        case 6:
          message.epochIdentifier = reader.string();
          break;
        case 7:
          message.mintingRewardsDistributionStartEpoch = (reader.int64() as Long);
          break;
        case 8:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 9:
          message.genesisEpochProvisions = reader.string();
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
      mintingRewardsDistributionStartEpoch: isSet(object.mintingRewardsDistributionStartEpoch) ? Long.fromValue(object.mintingRewardsDistributionStartEpoch) : Long.ZERO,
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
    message.mintingRewardsDistributionStartEpoch !== undefined && (obj.mintingRewardsDistributionStartEpoch = (message.mintingRewardsDistributionStartEpoch || Long.ZERO).toString());
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
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? Long.fromValue(object.mintingRewardsDistributionStartEpoch) : Long.ZERO;
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.developmentAccountAddress = object.developmentAccountAddress ?? "";
    return message;
  }
};