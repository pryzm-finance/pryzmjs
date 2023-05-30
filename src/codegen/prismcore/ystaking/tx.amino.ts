//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgBond, MsgUnbond, MsgClaimReward, MsgExitPool } from "./tx";
export interface MsgBondAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.ystaking.MsgBond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUnbondAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.ystaking.MsgUnbond";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgClaimRewardAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.ystaking.MsgClaimReward";
  value: {
    creator: string;
    denom: string;
  };
}
export interface MsgExitPoolAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.ystaking.MsgExitPool";
  value: {
    creator: string;
    denom: string;
  };
}
export const AminoConverter = {
  "/prismfinance.prismcore.ystaking.MsgBond": {
    aminoType: "/prismfinance.prismcore.ystaking.MsgBond",
    toAmino: ({
      creator,
      amount
    }: MsgBond): MsgBondAminoType["value"] => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
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
  "/prismfinance.prismcore.ystaking.MsgUnbond": {
    aminoType: "/prismfinance.prismcore.ystaking.MsgUnbond",
    toAmino: ({
      creator,
      amount
    }: MsgUnbond): MsgUnbondAminoType["value"] => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
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
  "/prismfinance.prismcore.ystaking.MsgClaimReward": {
    aminoType: "/prismfinance.prismcore.ystaking.MsgClaimReward",
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
  "/prismfinance.prismcore.ystaking.MsgExitPool": {
    aminoType: "/prismfinance.prismcore.ystaking.MsgExitPool",
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