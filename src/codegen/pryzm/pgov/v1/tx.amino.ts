//@ts-nocheck
import { voteOptionFromJSON } from "../../../cosmos/gov/v1/gov";
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgStakePAssets, MsgUnstakePAssets, MsgSubmitVote, MsgSubmitProposal, MsgRetryVoteTransmit } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "pryzm/pgov/v1/UpdateParams";
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
  type: "pryzm/pgov/v1/StakePAssets";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgUnstakePAssetsAminoType extends AminoMsg {
  type: "pryzm/pgov/v1/UnstakePAssets";
  value: {
    creator: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgSubmitVoteAminoType extends AminoMsg {
  type: "pryzm/pgov/v1/SubmitVote";
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
  type: "pryzm/pgov/v1/SubmitProposal";
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
  type: "pryzm/pgov/v1/RetryVoteTransmit";
  value: {
    creator: string;
    asset: string;
    proposal: string;
  };
}
export const AminoConverter = {
  "/pryzm.pgov.v1.MsgUpdateParams": {
    aminoType: "pryzm/pgov/v1/UpdateParams",
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
            seconds: BigInt(Math.floor(parseInt(params.max_deposit_period) / 1_000_000_000)),
            nanos: parseInt(params.max_deposit_period) % 1_000_000_000
          },
          votingPeriod: {
            seconds: BigInt(Math.floor(parseInt(params.voting_period) / 1_000_000_000)),
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
  "/pryzm.pgov.v1.MsgStakePAssets": {
    aminoType: "pryzm/pgov/v1/StakePAssets",
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
  "/pryzm.pgov.v1.MsgUnstakePAssets": {
    aminoType: "pryzm/pgov/v1/UnstakePAssets",
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
  "/pryzm.pgov.v1.MsgSubmitVote": {
    aminoType: "pryzm/pgov/v1/SubmitVote",
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
        proposal: BigInt(proposal),
        options: options.map(el0 => ({
          option: voteOptionFromJSON(el0.option),
          weight: el0.weight
        }))
      };
    }
  },
  "/pryzm.pgov.v1.MsgSubmitProposal": {
    aminoType: "pryzm/pgov/v1/SubmitProposal",
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
        height: BigInt(height),
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
  "/pryzm.pgov.v1.MsgRetryVoteTransmit": {
    aminoType: "pryzm/pgov/v1/RetryVoteTransmit",
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
        proposal: BigInt(proposal)
      };
    }
  }
};