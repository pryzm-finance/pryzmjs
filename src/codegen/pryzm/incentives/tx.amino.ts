//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgCreatePool, MsgUpdateRewardTokenWeight, MsgAddRewardTokenToPool, MsgBond, MsgUnbond, MsgClaimReward, MsgClaimUnbonding, MsgCancelUnbonding, MsgIncentivizePool } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/pryzm.incentives.MsgUpdateParams";
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
  type: "/pryzm.incentives.MsgCreatePool";
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
  type: "/pryzm.incentives.MsgUpdateRewardTokenWeight";
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
  type: "/pryzm.incentives.MsgAddRewardTokenToPool";
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
  type: "/pryzm.incentives.MsgBond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUnbondAminoType extends AminoMsg {
  type: "/pryzm.incentives.MsgUnbond";
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
  type: "/pryzm.incentives.MsgClaimReward";
  value: {
    creator: string;
    bond_denom: string;
    treasury: string;
  };
}
export interface MsgClaimUnbondingAminoType extends AminoMsg {
  type: "/pryzm.incentives.MsgClaimUnbonding";
  value: {
    creator: string;
    unbonding_id: string;
  };
}
export interface MsgCancelUnbondingAminoType extends AminoMsg {
  type: "/pryzm.incentives.MsgCancelUnbonding";
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
  type: "/pryzm.incentives.MsgIncentivizePool";
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
  "/pryzm.incentives.MsgUpdateParams": {
    aminoType: "/pryzm.incentives.MsgUpdateParams",
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
  "/pryzm.incentives.MsgCreatePool": {
    aminoType: "/pryzm.incentives.MsgCreatePool",
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
  "/pryzm.incentives.MsgUpdateRewardTokenWeight": {
    aminoType: "/pryzm.incentives.MsgUpdateRewardTokenWeight",
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
  "/pryzm.incentives.MsgAddRewardTokenToPool": {
    aminoType: "/pryzm.incentives.MsgAddRewardTokenToPool",
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
  "/pryzm.incentives.MsgBond": {
    aminoType: "/pryzm.incentives.MsgBond",
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
  "/pryzm.incentives.MsgUnbond": {
    aminoType: "/pryzm.incentives.MsgUnbond",
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
  "/pryzm.incentives.MsgClaimReward": {
    aminoType: "/pryzm.incentives.MsgClaimReward",
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
  "/pryzm.incentives.MsgClaimUnbonding": {
    aminoType: "/pryzm.incentives.MsgClaimUnbonding",
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
  "/pryzm.incentives.MsgCancelUnbonding": {
    aminoType: "/pryzm.incentives.MsgCancelUnbonding",
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
  "/pryzm.incentives.MsgIncentivizePool": {
    aminoType: "/pryzm.incentives.MsgIncentivizePool",
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