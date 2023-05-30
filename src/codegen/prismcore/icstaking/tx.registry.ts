import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRegisterHostChain, MsgUpdateHostChain, MsgStake, MsgUnstake, MsgRedeemUnstaked, MsgInstantUnstake, MsgRebalanceDelegations, MsgRedeemInterchainAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prismfinance.prismcore.icstaking.MsgUpdateParams", MsgUpdateParams], ["/prismfinance.prismcore.icstaking.MsgRegisterHostChain", MsgRegisterHostChain], ["/prismfinance.prismcore.icstaking.MsgUpdateHostChain", MsgUpdateHostChain], ["/prismfinance.prismcore.icstaking.MsgStake", MsgStake], ["/prismfinance.prismcore.icstaking.MsgUnstake", MsgUnstake], ["/prismfinance.prismcore.icstaking.MsgRedeemUnstaked", MsgRedeemUnstaked], ["/prismfinance.prismcore.icstaking.MsgInstantUnstake", MsgInstantUnstake], ["/prismfinance.prismcore.icstaking.MsgRebalanceDelegations", MsgRebalanceDelegations], ["/prismfinance.prismcore.icstaking.MsgRedeemInterchainAccount", MsgRedeemInterchainAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.encode(value).finish()
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.encode(value).finish()
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUnstake",
        value: MsgUnstake.encode(value).finish()
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.encode(value).finish()
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.encode(value).finish()
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.encode(value).finish()
      };
    },
    redeemInterchainAccount(value: MsgRedeemInterchainAccount) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemInterchainAccount",
        value: MsgRedeemInterchainAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateParams",
        value
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRegisterHostChain",
        value
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateHostChain",
        value
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgStake",
        value
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUnstake",
        value
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemUnstaked",
        value
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgInstantUnstake",
        value
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRebalanceDelegations",
        value
      };
    },
    redeemInterchainAccount(value: MsgRedeemInterchainAccount) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemInterchainAccount",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.toJSON(value)
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.toJSON(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgStake",
        value: MsgStake.toJSON(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUnstake",
        value: MsgUnstake.toJSON(value)
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.toJSON(value)
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.toJSON(value)
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.toJSON(value)
      };
    },
    redeemInterchainAccount(value: MsgRedeemInterchainAccount) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemInterchainAccount",
        value: MsgRedeemInterchainAccount.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    registerHostChain(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.fromJSON(value)
      };
    },
    updateHostChain(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromJSON(value)
      };
    },
    stake(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgStake",
        value: MsgStake.fromJSON(value)
      };
    },
    unstake(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUnstake",
        value: MsgUnstake.fromJSON(value)
      };
    },
    redeemUnstaked(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.fromJSON(value)
      };
    },
    instantUnstake(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.fromJSON(value)
      };
    },
    rebalanceDelegations(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.fromJSON(value)
      };
    },
    redeemInterchainAccount(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemInterchainAccount",
        value: MsgRedeemInterchainAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.fromPartial(value)
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromPartial(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgUnstake",
        value: MsgUnstake.fromPartial(value)
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.fromPartial(value)
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.fromPartial(value)
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.fromPartial(value)
      };
    },
    redeemInterchainAccount(value: MsgRedeemInterchainAccount) {
      return {
        typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemInterchainAccount",
        value: MsgRedeemInterchainAccount.fromPartial(value)
      };
    }
  }
};