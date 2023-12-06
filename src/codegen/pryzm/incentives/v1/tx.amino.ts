//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgCreatePool, MsgUpdateRewardTokenWeight, MsgAddRewardTokenToPool, MsgBond, MsgUnbond, MsgClaimReward, MsgClaimUnbonding, MsgCancelUnbonding, MsgIncentivizePool } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/UpdateParams";
  value: {
    authority: string;
    params: {
      unbonding_period: {
        seconds: string;
        nanos: number;
      };
    };
  };
}
export interface MsgCreatePoolAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/CreatePool";
  value: {
    authority: string;
    bond_denom: string;
    reward_tokens: {
      denom: string;
      weight: string;
    }[];
  };
}
export interface MsgUpdateRewardTokenWeightAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/UpdateRewardTokenWeight";
  value: {
    authority: string;
    bond_denom: string;
    reward_token: {
      denom: string;
      weight: string;
    };
  };
}
export interface MsgAddRewardTokenToPoolAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/AddRewardTokenToPool";
  value: {
    authority: string;
    bond_denom: string;
    reward_token: {
      denom: string;
      weight: string;
    };
  };
}
export interface MsgBondAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/Bond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUnbondAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/Unbond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
    unbond_treasury: string;
    reward_treasury: string;
    auto_claim: boolean;
  };
}
export interface MsgClaimRewardAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/ClaimReward";
  value: {
    creator: string;
    bond_denom: string;
    treasury: string;
  };
}
export interface MsgClaimUnbondingAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/ClaimUnbonding";
  value: {
    creator: string;
    unbonding_id: string;
  };
}
export interface MsgCancelUnbondingAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/CancelUnbonding";
  value: {
    creator: string;
    unbonding_id: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgIncentivizePoolAminoType extends AminoMsg {
  type: "pryzm/incentives/v1/IncentivizePool";
  value: {
    creator: string;
    bond_denom: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/pryzm.incentives.v1.MsgUpdateParams": {
    aminoType: "pryzm/incentives/v1/UpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          unbonding_period: (params.unbondingPeriod * 1_000_000_000).toString()
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
          unbondingPeriod: {
            seconds: BigInt(Math.floor(parseInt(params.unbonding_period) / 1_000_000_000)),
            nanos: parseInt(params.unbonding_period) % 1_000_000_000
          }
        }
      };
    }
  },
  "/pryzm.incentives.v1.MsgCreatePool": {
    aminoType: "pryzm/incentives/v1/CreatePool",
    toAmino: ({
      authority,
      bondDenom,
      rewardTokens
    }: MsgCreatePool): MsgCreatePoolAminoType["value"] => {
      return {
        authority,
        bond_denom: bondDenom,
        reward_tokens: rewardTokens.map(el0 => ({
          denom: el0.denom,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      authority,
      bond_denom,
      reward_tokens
    }: MsgCreatePoolAminoType["value"]): MsgCreatePool => {
      return {
        authority,
        bondDenom: bond_denom,
        rewardTokens: reward_tokens.map(el0 => ({
          denom: el0.denom,
          weight: el0.weight
        }))
      };
    }
  },
  "/pryzm.incentives.v1.MsgUpdateRewardTokenWeight": {
    aminoType: "pryzm/incentives/v1/UpdateRewardTokenWeight",
    toAmino: ({
      authority,
      bondDenom,
      rewardToken
    }: MsgUpdateRewardTokenWeight): MsgUpdateRewardTokenWeightAminoType["value"] => {
      return {
        authority,
        bond_denom: bondDenom,
        reward_token: {
          denom: rewardToken.denom,
          weight: rewardToken.weight
        }
      };
    },
    fromAmino: ({
      authority,
      bond_denom,
      reward_token
    }: MsgUpdateRewardTokenWeightAminoType["value"]): MsgUpdateRewardTokenWeight => {
      return {
        authority,
        bondDenom: bond_denom,
        rewardToken: {
          denom: reward_token.denom,
          weight: reward_token.weight
        }
      };
    }
  },
  "/pryzm.incentives.v1.MsgAddRewardTokenToPool": {
    aminoType: "pryzm/incentives/v1/AddRewardTokenToPool",
    toAmino: ({
      authority,
      bondDenom,
      rewardToken
    }: MsgAddRewardTokenToPool): MsgAddRewardTokenToPoolAminoType["value"] => {
      return {
        authority,
        bond_denom: bondDenom,
        reward_token: {
          denom: rewardToken.denom,
          weight: rewardToken.weight
        }
      };
    },
    fromAmino: ({
      authority,
      bond_denom,
      reward_token
    }: MsgAddRewardTokenToPoolAminoType["value"]): MsgAddRewardTokenToPool => {
      return {
        authority,
        bondDenom: bond_denom,
        rewardToken: {
          denom: reward_token.denom,
          weight: reward_token.weight
        }
      };
    }
  },
  "/pryzm.incentives.v1.MsgBond": {
    aminoType: "pryzm/incentives/v1/Bond",
    toAmino: ({
      creator,
      amount
    }: MsgBond): MsgBondAminoType["value"] => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: ({
      creator,
      amount
    }: MsgBondAminoType["value"]): MsgBond => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/pryzm.incentives.v1.MsgUnbond": {
    aminoType: "pryzm/incentives/v1/Unbond",
    toAmino: ({
      creator,
      amount,
      unbondTreasury,
      rewardTreasury,
      autoClaim
    }: MsgUnbond): MsgUnbondAminoType["value"] => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        unbond_treasury: unbondTreasury,
        reward_treasury: rewardTreasury,
        auto_claim: autoClaim
      };
    },
    fromAmino: ({
      creator,
      amount,
      unbond_treasury,
      reward_treasury,
      auto_claim
    }: MsgUnbondAminoType["value"]): MsgUnbond => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        unbondTreasury: unbond_treasury,
        rewardTreasury: reward_treasury,
        autoClaim: auto_claim
      };
    }
  },
  "/pryzm.incentives.v1.MsgClaimReward": {
    aminoType: "pryzm/incentives/v1/ClaimReward",
    toAmino: ({
      creator,
      bondDenom,
      treasury
    }: MsgClaimReward): MsgClaimRewardAminoType["value"] => {
      return {
        creator,
        bond_denom: bondDenom,
        treasury
      };
    },
    fromAmino: ({
      creator,
      bond_denom,
      treasury
    }: MsgClaimRewardAminoType["value"]): MsgClaimReward => {
      return {
        creator,
        bondDenom: bond_denom,
        treasury
      };
    }
  },
  "/pryzm.incentives.v1.MsgClaimUnbonding": {
    aminoType: "pryzm/incentives/v1/ClaimUnbonding",
    toAmino: ({
      creator,
      unbondingId
    }: MsgClaimUnbonding): MsgClaimUnbondingAminoType["value"] => {
      return {
        creator,
        unbonding_id: unbondingId.toString()
      };
    },
    fromAmino: ({
      creator,
      unbonding_id
    }: MsgClaimUnbondingAminoType["value"]): MsgClaimUnbonding => {
      return {
        creator,
        unbondingId: BigInt(unbonding_id)
      };
    }
  },
  "/pryzm.incentives.v1.MsgCancelUnbonding": {
    aminoType: "pryzm/incentives/v1/CancelUnbonding",
    toAmino: ({
      creator,
      unbondingId,
      amount
    }: MsgCancelUnbonding): MsgCancelUnbondingAminoType["value"] => {
      return {
        creator,
        unbonding_id: unbondingId.toString(),
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: ({
      creator,
      unbonding_id,
      amount
    }: MsgCancelUnbondingAminoType["value"]): MsgCancelUnbonding => {
      return {
        creator,
        unbondingId: BigInt(unbonding_id),
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/pryzm.incentives.v1.MsgIncentivizePool": {
    aminoType: "pryzm/incentives/v1/IncentivizePool",
    toAmino: ({
      creator,
      bondDenom,
      amount
    }: MsgIncentivizePool): MsgIncentivizePoolAminoType["value"] => {
      return {
        creator,
        bond_denom: bondDenom,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      bond_denom,
      amount
    }: MsgIncentivizePoolAminoType["value"]): MsgIncentivizePool => {
      return {
        creator,
        bondDenom: bond_denom,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};