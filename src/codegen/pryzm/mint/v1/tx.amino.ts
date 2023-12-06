//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgDappAccountSpend } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "pryzm/mint/v1/UpdateParams";
  value: {
    authority: string;
    params: {
      mint_denom: string;
      inflation_rate_change: string;
      inflation_max: string;
      inflation_min: string;
      goal_bonded: string;
      epoch_identifier: string;
      minting_rewards_distribution_start_epoch: string;
      distribution_proportions: {
        staking: string;
        pool_incentives: string;
        development: string;
        dapp: string;
        oracle: string;
      };
      genesis_epoch_provisions: string;
      development_account_address: string;
    };
  };
}
export interface MsgDappAccountSpendAminoType extends AminoMsg {
  type: "pryzm/mint/v1/DappAccountSpend";
  value: {
    authority: string;
    title: string;
    description: string;
    recipient: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/pryzm.mint.v1.MsgUpdateParams": {
    aminoType: "pryzm/mint/v1/UpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          mint_denom: params.mintDenom,
          inflation_rate_change: params.inflationRateChange,
          inflation_max: params.inflationMax,
          inflation_min: params.inflationMin,
          goal_bonded: params.goalBonded,
          epoch_identifier: params.epochIdentifier,
          minting_rewards_distribution_start_epoch: params.mintingRewardsDistributionStartEpoch.toString(),
          distribution_proportions: {
            staking: params.distributionProportions.staking,
            pool_incentives: params.distributionProportions.poolIncentives,
            development: params.distributionProportions.development,
            dapp: params.distributionProportions.dapp,
            oracle: params.distributionProportions.oracle
          },
          genesis_epoch_provisions: params.genesisEpochProvisions,
          development_account_address: params.developmentAccountAddress
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          mintDenom: params.mint_denom,
          inflationRateChange: params.inflation_rate_change,
          inflationMax: params.inflation_max,
          inflationMin: params.inflation_min,
          goalBonded: params.goal_bonded,
          epochIdentifier: params.epoch_identifier,
          mintingRewardsDistributionStartEpoch: BigInt(params.minting_rewards_distribution_start_epoch),
          distributionProportions: {
            staking: params.distribution_proportions.staking,
            poolIncentives: params.distribution_proportions.pool_incentives,
            development: params.distribution_proportions.development,
            dapp: params.distribution_proportions.dapp,
            oracle: params.distribution_proportions.oracle
          },
          genesisEpochProvisions: params.genesis_epoch_provisions,
          developmentAccountAddress: params.development_account_address
        }
      };
    }
  },
  "/pryzm.mint.v1.MsgDappAccountSpend": {
    aminoType: "pryzm/mint/v1/DappAccountSpend",
    toAmino: ({
      authority,
      title,
      description,
      recipient,
      amount
    }: MsgDappAccountSpend): MsgDappAccountSpendAminoType["value"] => {
      return {
        authority,
        title,
        description,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      authority,
      title,
      description,
      recipient,
      amount
    }: MsgDappAccountSpendAminoType["value"]): MsgDappAccountSpend => {
      return {
        authority,
        title,
        description,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};