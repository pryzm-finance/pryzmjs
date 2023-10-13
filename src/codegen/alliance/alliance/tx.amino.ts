//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgDelegate, MsgRedelegate, MsgUndelegate, MsgClaimDelegationRewards, MsgUpdateParams, MsgCreateAlliance, MsgUpdateAlliance, MsgDeleteAlliance } from "./tx";
export interface MsgDelegateAminoType extends AminoMsg {
  type: "/alliance.alliance.MsgDelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRedelegateAminoType extends AminoMsg {
  type: "/alliance.alliance.MsgRedelegate";
  value: {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUndelegateAminoType extends AminoMsg {
  type: "/alliance.alliance.MsgUndelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgClaimDelegationRewardsAminoType extends AminoMsg {
  type: "/alliance.alliance.MsgClaimDelegationRewards";
  value: {
    delegator_address: string;
    validator_address: string;
    denom: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/alliance.alliance.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      reward_delay_time: {
        seconds: string;
        nanos: number;
      };
      take_rate_claim_interval: {
        seconds: string;
        nanos: number;
      };
      last_take_rate_claim_time: {
        seconds: string;
        nanos: number;
      };
    };
  };
}
export interface MsgCreateAllianceAminoType extends AminoMsg {
  type: "/alliance.alliance.MsgCreateAlliance";
  value: {
    authority: string;
    denom: string;
    reward_weight: string;
    take_rate: string;
    reward_change_rate: string;
    reward_change_interval: {
      seconds: string;
      nanos: number;
    };
    reward_weight_range: {
      min: string;
      max: string;
    };
  };
}
export interface MsgUpdateAllianceAminoType extends AminoMsg {
  type: "/alliance.alliance.MsgUpdateAlliance";
  value: {
    authority: string;
    denom: string;
    reward_weight: string;
    take_rate: string;
    reward_change_rate: string;
    reward_change_interval: {
      seconds: string;
      nanos: number;
    };
  };
}
export interface MsgDeleteAllianceAminoType extends AminoMsg {
  type: "/alliance.alliance.MsgDeleteAlliance";
  value: {
    authority: string;
    denom: string;
  };
}
export const AminoConverter = {
  "/alliance.alliance.MsgDelegate": {
    aminoType: "/alliance.alliance.MsgDelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount
    }: MsgDelegate): MsgDelegateAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgDelegateAminoType["value"]): MsgDelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/alliance.alliance.MsgRedelegate": {
    aminoType: "/alliance.alliance.MsgRedelegate",
    toAmino: ({
      delegatorAddress,
      validatorSrcAddress,
      validatorDstAddress,
      amount
    }: MsgRedelegate): MsgRedelegateAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_src_address: validatorSrcAddress,
        validator_dst_address: validatorDstAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount
    }: MsgRedelegateAminoType["value"]): MsgRedelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorSrcAddress: validator_src_address,
        validatorDstAddress: validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/alliance.alliance.MsgUndelegate": {
    aminoType: "/alliance.alliance.MsgUndelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount
    }: MsgUndelegate): MsgUndelegateAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgUndelegateAminoType["value"]): MsgUndelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/alliance.alliance.MsgClaimDelegationRewards": {
    aminoType: "/alliance.alliance.MsgClaimDelegationRewards",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      denom
    }: MsgClaimDelegationRewards): MsgClaimDelegationRewardsAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        denom
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      denom
    }: MsgClaimDelegationRewardsAminoType["value"]): MsgClaimDelegationRewards => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        denom
      };
    }
  },
  "/alliance.alliance.MsgUpdateParams": {
    aminoType: "/alliance.alliance.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          reward_delay_time: (params.rewardDelayTime * 1_000_000_000).toString(),
          take_rate_claim_interval: (params.takeRateClaimInterval * 1_000_000_000).toString(),
          last_take_rate_claim_time: params.lastTakeRateClaimTime
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
          rewardDelayTime: {
            seconds: BigInt(Math.floor(parseInt(params.reward_delay_time) / 1_000_000_000)),
            nanos: parseInt(params.reward_delay_time) % 1_000_000_000
          },
          takeRateClaimInterval: {
            seconds: BigInt(Math.floor(parseInt(params.take_rate_claim_interval) / 1_000_000_000)),
            nanos: parseInt(params.take_rate_claim_interval) % 1_000_000_000
          },
          lastTakeRateClaimTime: params.last_take_rate_claim_time
        }
      };
    }
  },
  "/alliance.alliance.MsgCreateAlliance": {
    aminoType: "/alliance.alliance.MsgCreateAlliance",
    toAmino: ({
      authority,
      denom,
      rewardWeight,
      takeRate,
      rewardChangeRate,
      rewardChangeInterval,
      rewardWeightRange
    }: MsgCreateAlliance): MsgCreateAllianceAminoType["value"] => {
      return {
        authority,
        denom,
        reward_weight: rewardWeight,
        take_rate: takeRate,
        reward_change_rate: rewardChangeRate,
        reward_change_interval: (rewardChangeInterval * 1_000_000_000).toString(),
        reward_weight_range: {
          min: rewardWeightRange.min,
          max: rewardWeightRange.max
        }
      };
    },
    fromAmino: ({
      authority,
      denom,
      reward_weight,
      take_rate,
      reward_change_rate,
      reward_change_interval,
      reward_weight_range
    }: MsgCreateAllianceAminoType["value"]): MsgCreateAlliance => {
      return {
        authority,
        denom,
        rewardWeight: reward_weight,
        takeRate: take_rate,
        rewardChangeRate: reward_change_rate,
        rewardChangeInterval: {
          seconds: BigInt(Math.floor(parseInt(reward_change_interval) / 1_000_000_000)),
          nanos: parseInt(reward_change_interval) % 1_000_000_000
        },
        rewardWeightRange: {
          min: reward_weight_range.min,
          max: reward_weight_range.max
        }
      };
    }
  },
  "/alliance.alliance.MsgUpdateAlliance": {
    aminoType: "/alliance.alliance.MsgUpdateAlliance",
    toAmino: ({
      authority,
      denom,
      rewardWeight,
      takeRate,
      rewardChangeRate,
      rewardChangeInterval
    }: MsgUpdateAlliance): MsgUpdateAllianceAminoType["value"] => {
      return {
        authority,
        denom,
        reward_weight: rewardWeight,
        take_rate: takeRate,
        reward_change_rate: rewardChangeRate,
        reward_change_interval: (rewardChangeInterval * 1_000_000_000).toString()
      };
    },
    fromAmino: ({
      authority,
      denom,
      reward_weight,
      take_rate,
      reward_change_rate,
      reward_change_interval
    }: MsgUpdateAllianceAminoType["value"]): MsgUpdateAlliance => {
      return {
        authority,
        denom,
        rewardWeight: reward_weight,
        takeRate: take_rate,
        rewardChangeRate: reward_change_rate,
        rewardChangeInterval: {
          seconds: BigInt(Math.floor(parseInt(reward_change_interval) / 1_000_000_000)),
          nanos: parseInt(reward_change_interval) % 1_000_000_000
        }
      };
    }
  },
  "/alliance.alliance.MsgDeleteAlliance": {
    aminoType: "/alliance.alliance.MsgDeleteAlliance",
    toAmino: ({
      authority,
      denom
    }: MsgDeleteAlliance): MsgDeleteAllianceAminoType["value"] => {
      return {
        authority,
        denom
      };
    },
    fromAmino: ({
      authority,
      denom
    }: MsgDeleteAllianceAminoType["value"]): MsgDeleteAlliance => {
      return {
        authority,
        denom
      };
    }
  }
};