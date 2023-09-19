//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgStakePAssets, MsgUnstakePAssets, MsgSubmitVote, MsgSubmitProposal, MsgRetryVoteTransmit } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pryzm.pgov.MsgUpdateParams", MsgUpdateParams], ["/pryzm.pgov.MsgStakePAssets", MsgStakePAssets], ["/pryzm.pgov.MsgUnstakePAssets", MsgUnstakePAssets], ["/pryzm.pgov.MsgSubmitVote", MsgSubmitVote], ["/pryzm.pgov.MsgSubmitProposal", MsgSubmitProposal], ["/pryzm.pgov.MsgRetryVoteTransmit", MsgRetryVoteTransmit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.pgov.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    stakePAssets(value: MsgStakePAssets) {
      return {
        typeUrl: "/pryzm.pgov.MsgStakePAssets",
        value: MsgStakePAssets.encode(value).finish()
      };
    },
    unstakePAssets(value: MsgUnstakePAssets) {
      return {
        typeUrl: "/pryzm.pgov.MsgUnstakePAssets",
        value: MsgUnstakePAssets.encode(value).finish()
      };
    },
    submitVote(value: MsgSubmitVote) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitVote",
        value: MsgSubmitVote.encode(value).finish()
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    retryVoteTransmit(value: MsgRetryVoteTransmit) {
      return {
        typeUrl: "/pryzm.pgov.MsgRetryVoteTransmit",
        value: MsgRetryVoteTransmit.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.pgov.MsgUpdateParams",
        value
      };
    },
    stakePAssets(value: MsgStakePAssets) {
      return {
        typeUrl: "/pryzm.pgov.MsgStakePAssets",
        value
      };
    },
    unstakePAssets(value: MsgUnstakePAssets) {
      return {
        typeUrl: "/pryzm.pgov.MsgUnstakePAssets",
        value
      };
    },
    submitVote(value: MsgSubmitVote) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitVote",
        value
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitProposal",
        value
      };
    },
    retryVoteTransmit(value: MsgRetryVoteTransmit) {
      return {
        typeUrl: "/pryzm.pgov.MsgRetryVoteTransmit",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.pgov.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    stakePAssets(value: MsgStakePAssets) {
      return {
        typeUrl: "/pryzm.pgov.MsgStakePAssets",
        value: MsgStakePAssets.toJSON(value)
      };
    },
    unstakePAssets(value: MsgUnstakePAssets) {
      return {
        typeUrl: "/pryzm.pgov.MsgUnstakePAssets",
        value: MsgUnstakePAssets.toJSON(value)
      };
    },
    submitVote(value: MsgSubmitVote) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitVote",
        value: MsgSubmitVote.toJSON(value)
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value)
      };
    },
    retryVoteTransmit(value: MsgRetryVoteTransmit) {
      return {
        typeUrl: "/pryzm.pgov.MsgRetryVoteTransmit",
        value: MsgRetryVoteTransmit.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/pryzm.pgov.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    stakePAssets(value: any) {
      return {
        typeUrl: "/pryzm.pgov.MsgStakePAssets",
        value: MsgStakePAssets.fromJSON(value)
      };
    },
    unstakePAssets(value: any) {
      return {
        typeUrl: "/pryzm.pgov.MsgUnstakePAssets",
        value: MsgUnstakePAssets.fromJSON(value)
      };
    },
    submitVote(value: any) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitVote",
        value: MsgSubmitVote.fromJSON(value)
      };
    },
    submitProposal(value: any) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value)
      };
    },
    retryVoteTransmit(value: any) {
      return {
        typeUrl: "/pryzm.pgov.MsgRetryVoteTransmit",
        value: MsgRetryVoteTransmit.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.pgov.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    stakePAssets(value: MsgStakePAssets) {
      return {
        typeUrl: "/pryzm.pgov.MsgStakePAssets",
        value: MsgStakePAssets.fromPartial(value)
      };
    },
    unstakePAssets(value: MsgUnstakePAssets) {
      return {
        typeUrl: "/pryzm.pgov.MsgUnstakePAssets",
        value: MsgUnstakePAssets.fromPartial(value)
      };
    },
    submitVote(value: MsgSubmitVote) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitVote",
        value: MsgSubmitVote.fromPartial(value)
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/pryzm.pgov.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    retryVoteTransmit(value: MsgRetryVoteTransmit) {
      return {
        typeUrl: "/pryzm.pgov.MsgRetryVoteTransmit",
        value: MsgRetryVoteTransmit.fromPartial(value)
      };
    }
  }
};