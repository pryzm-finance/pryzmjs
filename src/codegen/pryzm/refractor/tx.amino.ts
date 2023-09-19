//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgRefract, MsgRedeem } from "./tx";
export interface MsgRefractAminoType extends AminoMsg {
  type: "/pryzm.refractor.MsgRefract";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    };
    maturity: string;
  };
}
export interface MsgRedeemAminoType extends AminoMsg {
  type: "/pryzm.refractor.MsgRedeem";
  value: {
    creator: string;
    p_amount: {
      denom: string;
      amount: string;
    };
    y_amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/pryzm.refractor.MsgRefract": {
    aminoType: "/pryzm.refractor.MsgRefract",
    toAmino: ({
      creator,
      amount,
      maturity
    }: MsgRefract): MsgRefractAminoType["value"] => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        maturity
      };
    },
    fromAmino: ({
      creator,
      amount,
      maturity
    }: MsgRefractAminoType["value"]): MsgRefract => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        maturity
      };
    }
  },
  "/pryzm.refractor.MsgRedeem": {
    aminoType: "/pryzm.refractor.MsgRedeem",
    toAmino: ({
      creator,
      pAmount,
      yAmount
    }: MsgRedeem): MsgRedeemAminoType["value"] => {
      return {
        creator,
        p_amount: {
          denom: pAmount.denom,
          amount: pAmount.amount
        },
        y_amount: {
          denom: yAmount.denom,
          amount: yAmount.amount
        }
      };
    },
    fromAmino: ({
      creator,
      p_amount,
      y_amount
    }: MsgRedeemAminoType["value"]): MsgRedeem => {
      return {
        creator,
        pAmount: {
          denom: p_amount.denom,
          amount: p_amount.amount
        },
        yAmount: {
          denom: y_amount.denom,
          amount: y_amount.amount
        }
      };
    }
  }
};