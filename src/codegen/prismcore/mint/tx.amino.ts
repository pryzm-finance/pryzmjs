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
    amount: string;
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
        amount
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
        amount
      };
    }
  }
};