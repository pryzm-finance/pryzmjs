//@ts-nocheck
import { voteOptionFromJSON } from "../../cosmos/gov/v1/gov";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgUpdateParams, MsgStakePAssets, MsgUnstakePAssets, MsgSubmitVote, MsgSubmitProposal, MsgRetryVoteTransmit } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/prism.pgov.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      min_deposit: {
        denom: string;
        amount: string;
      }[];
      max_deposit_period: {
        seconds: string;
        nanos: number;
      };
      voting_period: {
        seconds: string;
        nanos: number;
      };
      quorum: string;
      threshold: string;
      veto_threshold: string;
      min_initial_deposit_ratio: string;
      burn_vote_quorum: boolean;
      burn_proposal_deposit_prevote: boolean;
      burn_vote_veto: boolean;
    };
  };
}
export interface MsgStakePAssetsAminoType extends AminoMsg {
  type: "/prism.pgov.MsgStakePAssets";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgUnstakePAssetsAminoType extends AminoMsg {
  type: "/prism.pgov.MsgUnstakePAssets";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgSubmitVoteAminoType extends AminoMsg {
  type: "/prism.pgov.MsgSubmitVote";
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
  type: "/prism.pgov.MsgSubmitProposal";
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
  type: "/prism.pgov.MsgRetryVoteTransmit";
  value: {
    creator: string;
    asset: string;
    proposal: string;
  };
}
export const AminoConverter = {
  "/prism.pgov.MsgUpdateParams": {
    aminoType: "/prism.pgov.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          min_deposit: params.minDeposit.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          max_deposit_period: (params.maxDepositPeriod * 1_000_000_000).toString(),
          voting_period: (params.votingPeriod * 1_000_000_000).toString(),
          quorum: params.quorum,
          threshold: params.threshold,
          veto_threshold: params.vetoThreshold,
          min_initial_deposit_ratio: params.minInitialDepositRatio,
          burn_vote_quorum: params.burnVoteQuorum,
          burn_proposal_deposit_prevote: params.burnProposalDepositPrevote,
          burn_vote_veto: params.burnVoteVeto
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
          minDeposit: params.min_deposit.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          maxDepositPeriod: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.max_deposit_period) / 1_000_000_000)),
            nanos: parseInt(params.max_deposit_period) % 1_000_000_000
          },
          votingPeriod: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.voting_period) / 1_000_000_000)),
            nanos: parseInt(params.voting_period) % 1_000_000_000
          },
          quorum: params.quorum,
          threshold: params.threshold,
          vetoThreshold: params.veto_threshold,
          minInitialDepositRatio: params.min_initial_deposit_ratio,
          burnVoteQuorum: params.burn_vote_quorum,
          burnProposalDepositPrevote: params.burn_proposal_deposit_prevote,
          burnVoteVeto: params.burn_vote_veto
        }
      };
    }
  },
  "/prism.pgov.MsgStakePAssets": {
    aminoType: "/prism.pgov.MsgStakePAssets",
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
  "/prism.pgov.MsgUnstakePAssets": {
    aminoType: "/prism.pgov.MsgUnstakePAssets",
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
  "/prism.pgov.MsgSubmitVote": {
    aminoType: "/prism.pgov.MsgSubmitVote",
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
  "/prism.pgov.MsgSubmitProposal": {
    aminoType: "/prism.pgov.MsgSubmitProposal",
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
  "/prism.pgov.MsgRetryVoteTransmit": {
    aminoType: "/prism.pgov.MsgRetryVoteTransmit",
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