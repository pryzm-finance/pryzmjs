import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgStakePAssets, MsgUnstakePAssets, MsgSubmitVote, MsgSubmitProposal, MsgRetryVoteTransmit } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prism.pgov.MsgUpdateParams", MsgUpdateParams], ["/prism.pgov.MsgStakePAssets", MsgStakePAssets], ["/prism.pgov.MsgUnstakePAssets", MsgUnstakePAssets], ["/prism.pgov.MsgSubmitVote", MsgSubmitVote], ["/prism.pgov.MsgSubmitProposal", MsgSubmitProposal], ["/prism.pgov.MsgRetryVoteTransmit", MsgRetryVoteTransmit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.pgov.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    stakePAssets(value: MsgStakePAssets) {
      return {
        typeUrl: "/prism.pgov.MsgStakePAssets",
        value: MsgStakePAssets.encode(value).finish()
      };
    },
    unstakePAssets(value: MsgUnstakePAssets) {
      return {
        typeUrl: "/prism.pgov.MsgUnstakePAssets",
        value: MsgUnstakePAssets.encode(value).finish()
      };
    },
    submitVote(value: MsgSubmitVote) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitVote",
        value: MsgSubmitVote.encode(value).finish()
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    retryVoteTransmit(value: MsgRetryVoteTransmit) {
      return {
        typeUrl: "/prism.pgov.MsgRetryVoteTransmit",
        value: MsgRetryVoteTransmit.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.pgov.MsgUpdateParams",
        value
      };
    },
    stakePAssets(value: MsgStakePAssets) {
      return {
        typeUrl: "/prism.pgov.MsgStakePAssets",
        value
      };
    },
    unstakePAssets(value: MsgUnstakePAssets) {
      return {
        typeUrl: "/prism.pgov.MsgUnstakePAssets",
        value
      };
    },
    submitVote(value: MsgSubmitVote) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitVote",
        value
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitProposal",
        value
      };
    },
    retryVoteTransmit(value: MsgRetryVoteTransmit) {
      return {
        typeUrl: "/prism.pgov.MsgRetryVoteTransmit",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.pgov.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    stakePAssets(value: MsgStakePAssets) {
      return {
        typeUrl: "/prism.pgov.MsgStakePAssets",
        value: MsgStakePAssets.toJSON(value)
      };
    },
    unstakePAssets(value: MsgUnstakePAssets) {
      return {
        typeUrl: "/prism.pgov.MsgUnstakePAssets",
        value: MsgUnstakePAssets.toJSON(value)
      };
    },
    submitVote(value: MsgSubmitVote) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitVote",
        value: MsgSubmitVote.toJSON(value)
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value)
      };
    },
    retryVoteTransmit(value: MsgRetryVoteTransmit) {
      return {
        typeUrl: "/prism.pgov.MsgRetryVoteTransmit",
        value: MsgRetryVoteTransmit.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/prism.pgov.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    stakePAssets(value: any) {
      return {
        typeUrl: "/prism.pgov.MsgStakePAssets",
        value: MsgStakePAssets.fromJSON(value)
      };
    },
    unstakePAssets(value: any) {
      return {
        typeUrl: "/prism.pgov.MsgUnstakePAssets",
        value: MsgUnstakePAssets.fromJSON(value)
      };
    },
    submitVote(value: any) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitVote",
        value: MsgSubmitVote.fromJSON(value)
      };
    },
    submitProposal(value: any) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value)
      };
    },
    retryVoteTransmit(value: any) {
      return {
        typeUrl: "/prism.pgov.MsgRetryVoteTransmit",
        value: MsgRetryVoteTransmit.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.pgov.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    stakePAssets(value: MsgStakePAssets) {
      return {
        typeUrl: "/prism.pgov.MsgStakePAssets",
        value: MsgStakePAssets.fromPartial(value)
      };
    },
    unstakePAssets(value: MsgUnstakePAssets) {
      return {
        typeUrl: "/prism.pgov.MsgUnstakePAssets",
        value: MsgUnstakePAssets.fromPartial(value)
      };
    },
    submitVote(value: MsgSubmitVote) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitVote",
        value: MsgSubmitVote.fromPartial(value)
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/prism.pgov.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    retryVoteTransmit(value: MsgRetryVoteTransmit) {
      return {
        typeUrl: "/prism.pgov.MsgRetryVoteTransmit",
        value: MsgRetryVoteTransmit.fromPartial(value)
      };
    }
  }
};