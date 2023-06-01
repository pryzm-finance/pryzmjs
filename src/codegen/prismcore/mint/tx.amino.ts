//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgDappAccountSpend } from "./tx";
export interface MsgDappAccountSpendAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.mint.MsgDappAccountSpend";
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
  "/prismfinance.prismcore.mint.MsgDappAccountSpend": {
    aminoType: "/prismfinance.prismcore.mint.MsgDappAccountSpend",
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