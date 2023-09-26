//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgDelegate, MsgRedelegate, MsgUndelegate, MsgClaimDelegationRewards } from "./tx";
export interface MsgDelegateAminoType extends AminoMsg {
  type: "/alliance.MsgDelegate";
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
  type: "/alliance.MsgRedelegate";
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
  type: "/alliance.MsgUndelegate";
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
  type: "/alliance.MsgClaimDelegationRewards";
  value: {
    delegator_address: string;
    validator_address: string;
    denom: string;
  };
}
export const AminoConverter = {
  "/alliance.MsgDelegate": {
    aminoType: "/alliance.MsgDelegate",
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
  "/alliance.MsgRedelegate": {
    aminoType: "/alliance.MsgRedelegate",
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
  "/alliance.MsgUndelegate": {
    aminoType: "/alliance.MsgUndelegate",
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
  "/alliance.MsgClaimDelegationRewards": {
    aminoType: "/alliance.MsgClaimDelegationRewards",
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
  }
};