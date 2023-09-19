//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRegisterHostChain, MsgUpdateHostChain, MsgStake, MsgUnstake, MsgRedeemUnstaked, MsgInstantUnstake, MsgRebalanceDelegations, MsgRegisterInterchainAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pryzm.icstaking.MsgUpdateParams", MsgUpdateParams], ["/pryzm.icstaking.MsgRegisterHostChain", MsgRegisterHostChain], ["/pryzm.icstaking.MsgUpdateHostChain", MsgUpdateHostChain], ["/pryzm.icstaking.MsgStake", MsgStake], ["/pryzm.icstaking.MsgUnstake", MsgUnstake], ["/pryzm.icstaking.MsgRedeemUnstaked", MsgRedeemUnstaked], ["/pryzm.icstaking.MsgInstantUnstake", MsgInstantUnstake], ["/pryzm.icstaking.MsgRebalanceDelegations", MsgRebalanceDelegations], ["/pryzm.icstaking.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.encode(value).finish()
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.encode(value).finish()
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUnstake",
        value: MsgUnstake.encode(value).finish()
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.encode(value).finish()
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.encode(value).finish()
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.encode(value).finish()
      };
    },
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateParams",
        value
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterHostChain",
        value
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateHostChain",
        value
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgStake",
        value
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUnstake",
        value
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRedeemUnstaked",
        value
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgInstantUnstake",
        value
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRebalanceDelegations",
        value
      };
    },
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterInterchainAccount",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.toJSON(value)
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.toJSON(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgStake",
        value: MsgStake.toJSON(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUnstake",
        value: MsgUnstake.toJSON(value)
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.toJSON(value)
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.toJSON(value)
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.toJSON(value)
      };
    },
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    registerHostChain(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.fromJSON(value)
      };
    },
    updateHostChain(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromJSON(value)
      };
    },
    stake(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgStake",
        value: MsgStake.fromJSON(value)
      };
    },
    unstake(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUnstake",
        value: MsgUnstake.fromJSON(value)
      };
    },
    redeemUnstaked(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.fromJSON(value)
      };
    },
    instantUnstake(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.fromJSON(value)
      };
    },
    rebalanceDelegations(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.fromJSON(value)
      };
    },
    registerInterchainAccount(value: any) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterHostChain",
        value: MsgRegisterHostChain.fromPartial(value)
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromPartial(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgUnstake",
        value: MsgUnstake.fromPartial(value)
      };
    },
    redeemUnstaked(value: MsgRedeemUnstaked) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRedeemUnstaked",
        value: MsgRedeemUnstaked.fromPartial(value)
      };
    },
    instantUnstake(value: MsgInstantUnstake) {
      return {
        typeUrl: "/pryzm.icstaking.MsgInstantUnstake",
        value: MsgInstantUnstake.fromPartial(value)
      };
    },
    rebalanceDelegations(value: MsgRebalanceDelegations) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRebalanceDelegations",
        value: MsgRebalanceDelegations.fromPartial(value)
      };
    },
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/pryzm.icstaking.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromPartial(value)
      };
    }
  }
};