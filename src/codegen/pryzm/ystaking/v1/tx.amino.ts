//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgBond, MsgUnbond, MsgClaimReward, MsgExitPool } from "./tx";
export interface MsgBondAminoType extends AminoMsg {
  type: "pryzm/ystaking/v1/Bond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUnbondAminoType extends AminoMsg {
  type: "pryzm/ystaking/v1/Unbond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgClaimRewardAminoType extends AminoMsg {
  type: "pryzm/ystaking/v1/ClaimReward";
  value: {
    creator: string;
    denom: string;
  };
}
export interface MsgExitPoolAminoType extends AminoMsg {
  type: "pryzm/ystaking/v1/ExitPool";
  value: {
    creator: string;
    denom: string;
  };
}
export const AminoConverter = {
  "/pryzm.ystaking.v1.MsgBond": {
    aminoType: "pryzm/ystaking/v1/Bond",
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
  "/pryzm.ystaking.v1.MsgUnbond": {
    aminoType: "pryzm/ystaking/v1/Unbond",
    toAmino: ({
      creator,
      amount
    }: MsgUnbond): MsgUnbondAminoType["value"] => {
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
    }: MsgUnbondAminoType["value"]): MsgUnbond => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/pryzm.ystaking.v1.MsgClaimReward": {
    aminoType: "pryzm/ystaking/v1/ClaimReward",
    toAmino: ({
      creator,
      denom
    }: MsgClaimReward): MsgClaimRewardAminoType["value"] => {
      return {
        creator,
        denom
      };
    },
    fromAmino: ({
      creator,
      denom
    }: MsgClaimRewardAminoType["value"]): MsgClaimReward => {
      return {
        creator,
        denom
      };
    }
  },
  "/pryzm.ystaking.v1.MsgExitPool": {
    aminoType: "pryzm/ystaking/v1/ExitPool",
    toAmino: ({
      creator,
      denom
    }: MsgExitPool): MsgExitPoolAminoType["value"] => {
      return {
        creator,
        denom
      };
    },
    fromAmino: ({
      creator,
      denom
    }: MsgExitPoolAminoType["value"]): MsgExitPool => {
      return {
        creator,
        denom
      };
    }
  }
};