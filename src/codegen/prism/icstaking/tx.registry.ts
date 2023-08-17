//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRegisterHostChain, MsgUpdateHostChain, MsgStake, MsgUnstake, MsgRedeemUnstaked, MsgInstantUnstake, MsgRebalanceDelegations, MsgRedeemInterchainAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prism.icstaking.MsgUpdateParams", MsgUpdateParams], ["/prism.icstaking.MsgRegisterHostChain", MsgRegisterHostChain], ["/prism.icstaking.MsgUpdateHostChain", MsgUpdateHostChain], ["/prism.icstaking.MsgStake", MsgStake], ["/prism.icstaking.MsgUnstake", MsgUnstake], ["/prism.icstaking.MsgRedeemUnstaked", MsgRedeemUnstaked], ["/prism.icstaking.MsgInstantUnstake", MsgInstantUnstake], ["/prism.icstaking.MsgRebalanceDelegations", MsgRebalanceDelegations], ["/prism.icstaking.MsgRedeemInterchainAccount", MsgRedeemInterchainAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/prism.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.encode(value).finish()
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.encode(value).finish()
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/prism.icstaking.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/prism.icstaking.MsgUnstake",
        value: MsgUnstake.encode(value).finish()
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.encode(value).finish()
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/prism.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.encode(value).finish()
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/prism.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.encode(value).finish()
      };
    },
    redeemInterchainAccount(value: MsgRedeemInterchainAccount) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemInterchainAccount",
        value: MsgRedeemInterchainAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateParams",
        value
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/prism.icstaking.MsgRegisterHostChain",
        value
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateHostChain",
        value
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/prism.icstaking.MsgStake",
        value
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/prism.icstaking.MsgUnstake",
        value
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemUnstaked",
        value
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/prism.icstaking.MsgInstantUnstake",
        value
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/prism.icstaking.MsgRebalanceDelegations",
        value
      };
    },
    redeemInterchainAccount(value: MsgRedeemInterchainAccount) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemInterchainAccount",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/prism.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.toJSON(value)
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.toJSON(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/prism.icstaking.MsgStake",
        value: MsgStake.toJSON(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/prism.icstaking.MsgUnstake",
        value: MsgUnstake.toJSON(value)
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.toJSON(value)
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/prism.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.toJSON(value)
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/prism.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.toJSON(value)
      };
    },
    redeemInterchainAccount(value: MsgRedeemInterchainAccount) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemInterchainAccount",
        value: MsgRedeemInterchainAccount.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    registerHostChain(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.fromJSON(value)
      };
    },
    updateHostChain(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromJSON(value)
      };
    },
    stake(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgStake",
        value: MsgStake.fromJSON(value)
      };
    },
    unstake(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgUnstake",
        value: MsgUnstake.fromJSON(value)
      };
    },
    redeemUnstaked(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.fromJSON(value)
      };
    },
    instantUnstake(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.fromJSON(value)
      };
    },
    rebalanceDelegations(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.fromJSON(value)
      };
    },
    redeemInterchainAccount(value: any) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemInterchainAccount",
        value: MsgRedeemInterchainAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/prism.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.fromPartial(value)
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/prism.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromPartial(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/prism.icstaking.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/prism.icstaking.MsgUnstake",
        value: MsgUnstake.fromPartial(value)
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.fromPartial(value)
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/prism.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.fromPartial(value)
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/prism.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.fromPartial(value)
      };
    },
    redeemInterchainAccount(value: MsgRedeemInterchainAccount) {
      return {
        typeUrl: "/prism.icstaking.MsgRedeemInterchainAccount",
        value: MsgRedeemInterchainAccount.fromPartial(value)
      };
    }
  }
};