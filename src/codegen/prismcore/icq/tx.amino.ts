//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgSubmitQueryResponse } from "./tx";
export interface MsgSubmitQueryResponseAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.icq.MsgSubmitQueryResponse";
  value: {
    chain_id: string;
    query_id: string;
    result: Uint8Array;
    proof_ops: {
      ops: {
        type: string;
        key: Uint8Array;
        data: Uint8Array;
      }[];
    };
    height: string;
    from_address: string;
  };
}
export const AminoConverter = {
  "/prismfinance.prismcore.icq.MsgSubmitQueryResponse": {
    aminoType: "/prismfinance.prismcore.icq.MsgSubmitQueryResponse",
    toAmino: ({
      chainId,
      queryId,
      result,
      proofOps,
      height,
      fromAddress
    }: MsgSubmitQueryResponse): MsgSubmitQueryResponseAminoType["value"] => {
      return {
        chain_id: chainId,
        query_id: queryId,
        result,
        proof_ops: {
          ops: proofOps.ops.map(el0 => ({
            type: el0.type,
            key: el0.key,
            data: el0.data
          }))
        },
        height: height.toString(),
        from_address: fromAddress
      };
    },
    fromAmino: ({
      chain_id,
      query_id,
      result,
      proof_ops,
      height,
      from_address
    }: MsgSubmitQueryResponseAminoType["value"]): MsgSubmitQueryResponse => {
      return {
        chainId: chain_id,
        queryId: query_id,
        result,
        proofOps: {
          ops: proof_ops.ops.map(el1 => ({
            type: el1.type,
            key: el1.key,
            data: el1.data
          }))
        },
        height: Long.fromString(height),
        fromAddress: from_address
      };
    }
  }
};