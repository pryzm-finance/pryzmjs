//@ts-nocheck
import { voteOptionFromJSON } from "../../cosmos/gov/v1/gov";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgUpdateParams, MsgStakePAssets, MsgUnstakePAssets, MsgSubmitVote, MsgSubmitProposal, MsgRetryVoteTransmit } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.pgov.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      voting_result_submission_window: {
        seconds: string;
        nanos: number;
      };
      voting_result_submission_timeout: {
        seconds: string;
        nanos: number;
      };
    };
  };
}
export interface MsgStakePAssetsAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.pgov.MsgStakePAssets";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgUnstakePAssetsAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.pgov.MsgUnstakePAssets";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgSubmitVoteAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.pgov.MsgSubmitVote";
  value: {
    voter: string;
    asset: string;
    proposal: string;
    options: {
      option: number;
      weight: string;
    }[];
  };
}
export interface MsgSubmitProposalAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.pgov.MsgSubmitProposal";
  value: {
    creator: string;
    asset: string;
    proposal: Uint8Array;
    height: string;
    proof: {
      ops: {
        type: string;
        key: Uint8Array;
        data: Uint8Array;
      }[];
    };
  };
}
export interface MsgRetryVoteTransmitAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.pgov.MsgRetryVoteTransmit";
  value: {
    creator: string;
    asset: string;
    proposal: string;
  };
}
export const AminoConverter = {
  "/prismfinance.prismcore.pgov.MsgUpdateParams": {
    aminoType: "/prismfinance.prismcore.pgov.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          voting_result_submission_window: (params.votingResultSubmissionWindow * 1_000_000_000).toString(),
          voting_result_submission_timeout: (params.votingResultSubmissionTimeout * 1_000_000_000).toString()
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
          votingResultSubmissionWindow: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.voting_result_submission_window) / 1_000_000_000)),
            nanos: parseInt(params.voting_result_submission_window) % 1_000_000_000
          },
          votingResultSubmissionTimeout: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.voting_result_submission_timeout) / 1_000_000_000)),
            nanos: parseInt(params.voting_result_submission_timeout) % 1_000_000_000
          }
        }
      };
    }
  },
  "/prismfinance.prismcore.pgov.MsgStakePAssets": {
    aminoType: "/prismfinance.prismcore.pgov.MsgStakePAssets",
    toAmino: ({
      creator,
      amount
    }: MsgStakePAssets): MsgStakePAssetsAminoType["value"] => {
      return {
        creator,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      amount
    }: MsgStakePAssetsAminoType["value"]): MsgStakePAssets => {
      return {
        creator,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prismfinance.prismcore.pgov.MsgUnstakePAssets": {
    aminoType: "/prismfinance.prismcore.pgov.MsgUnstakePAssets",
    toAmino: ({
      creator,
      amount
    }: MsgUnstakePAssets): MsgUnstakePAssetsAminoType["value"] => {
      return {
        creator,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      amount
    }: MsgUnstakePAssetsAminoType["value"]): MsgUnstakePAssets => {
      return {
        creator,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prismfinance.prismcore.pgov.MsgSubmitVote": {
    aminoType: "/prismfinance.prismcore.pgov.MsgSubmitVote",
    toAmino: ({
      voter,
      asset,
      proposal,
      options
    }: MsgSubmitVote): MsgSubmitVoteAminoType["value"] => {
      return {
        voter,
        asset,
        proposal: proposal.toString(),
        options: options.map(el0 => ({
          option: el0.option,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      voter,
      asset,
      proposal,
      options
    }: MsgSubmitVoteAminoType["value"]): MsgSubmitVote => {
      return {
        voter,
        asset,
        proposal: Long.fromString(proposal),
        options: options.map(el0 => ({
          option: voteOptionFromJSON(el0.option),
          weight: el0.weight
        }))
      };
    }
  },
  "/prismfinance.prismcore.pgov.MsgSubmitProposal": {
    aminoType: "/prismfinance.prismcore.pgov.MsgSubmitProposal",
    toAmino: ({
      creator,
      asset,
      proposal,
      height,
      proof
    }: MsgSubmitProposal): MsgSubmitProposalAminoType["value"] => {
      return {
        creator,
        asset,
        proposal,
        height: height.toString(),
        proof: {
          ops: proof.ops.map(el0 => ({
            type: el0.type,
            key: el0.key,
            data: el0.data
          }))
        }
      };
    },
    fromAmino: ({
      creator,
      asset,
      proposal,
      height,
      proof
    }: MsgSubmitProposalAminoType["value"]): MsgSubmitProposal => {
      return {
        creator,
        asset,
        proposal,
        height: Long.fromString(height),
        proof: {
          ops: proof.ops.map(el1 => ({
            type: el1.type,
            key: el1.key,
            data: el1.data
          }))
        }
      };
    }
  },
  "/prismfinance.prismcore.pgov.MsgRetryVoteTransmit": {
    aminoType: "/prismfinance.prismcore.pgov.MsgRetryVoteTransmit",
    toAmino: ({
      creator,
      asset,
      proposal
    }: MsgRetryVoteTransmit): MsgRetryVoteTransmitAminoType["value"] => {
      return {
        creator,
        asset,
        proposal: proposal.toString()
      };
    },
    fromAmino: ({
      creator,
      asset,
      proposal
    }: MsgRetryVoteTransmitAminoType["value"]): MsgRetryVoteTransmit => {
      return {
        creator,
        asset,
        proposal: Long.fromString(proposal)
      };
    }
  }
};