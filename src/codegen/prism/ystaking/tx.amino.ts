//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgBond, MsgUnbond, MsgClaimReward, MsgExitPool } from "./tx";
export interface MsgBondAminoType extends AminoMsg {
  type: "/prism.ystaking.MsgBond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUnbondAminoType extends AminoMsg {
  type: "/prism.ystaking.MsgUnbond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgClaimRewardAminoType extends AminoMsg {
  type: "/prism.ystaking.MsgClaimReward";
  value: {
    creator: string;
    denom: string;
  };
}
export interface MsgExitPoolAminoType extends AminoMsg {
  type: "/prism.ystaking.MsgExitPool";
  value: {
    creator: string;
    denom: string;
  };
}
export const AminoConverter = {
  "/prism.ystaking.MsgBond": {
    aminoType: "/prism.ystaking.MsgBond",
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
  "/prism.ystaking.MsgUnbond": {
    aminoType: "/prism.ystaking.MsgUnbond",
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
  "/prism.ystaking.MsgClaimReward": {
    aminoType: "/prism.ystaking.MsgClaimReward",
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
  "/prism.ystaking.MsgExitPool": {
    aminoType: "/prism.ystaking.MsgExitPool",
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