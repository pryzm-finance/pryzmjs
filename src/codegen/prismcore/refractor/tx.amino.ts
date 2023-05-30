//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgRefract, MsgRedeem } from "./tx";
export interface MsgRefractAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.refractor.MsgRefract";
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
  type: "/prismfinance.prismcore.refractor.MsgRedeem";
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
  "/prismfinance.prismcore.refractor.MsgRefract": {
    aminoType: "/prismfinance.prismcore.refractor.MsgRefract",
    toAmino: ({
      creator,
      amount,
      maturity
    }: MsgRefract): MsgRefractAminoType["value"] => {
      return {
        creator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
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
  "/prismfinance.prismcore.refractor.MsgRedeem": {
    aminoType: "/prismfinance.prismcore.refractor.MsgRedeem",
    toAmino: ({
      creator,
      pAmount,
      yAmount
    }: MsgRedeem): MsgRedeemAminoType["value"] => {
      return {
        creator,
        p_amount: {
          denom: pAmount.denom,
          amount: Long.fromValue(pAmount.amount).toString()
        },
        y_amount: {
          denom: yAmount.denom,
          amount: Long.fromValue(yAmount.amount).toString()
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