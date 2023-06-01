import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreatePool, MsgUpdateRewardTokenWeight, MsgAddRewardTokenToPool, MsgBond, MsgUnbond, MsgClaimReward, MsgClaimUnbonding, MsgCancelUnbonding, MsgIncentivizePool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prismfinance.prismcore.incentives.MsgUpdateParams", MsgUpdateParams], ["/prismfinance.prismcore.incentives.MsgCreatePool", MsgCreatePool], ["/prismfinance.prismcore.incentives.MsgUpdateRewardTokenWeight", MsgUpdateRewardTokenWeight], ["/prismfinance.prismcore.incentives.MsgAddRewardTokenToPool", MsgAddRewardTokenToPool], ["/prismfinance.prismcore.incentives.MsgBond", MsgBond], ["/prismfinance.prismcore.incentives.MsgUnbond", MsgUnbond], ["/prismfinance.prismcore.incentives.MsgClaimReward", MsgClaimReward], ["/prismfinance.prismcore.incentives.MsgClaimUnbonding", MsgClaimUnbonding], ["/prismfinance.prismcore.incentives.MsgCancelUnbonding", MsgCancelUnbonding], ["/prismfinance.prismcore.incentives.MsgIncentivizePool", MsgIncentivizePool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    updateRewardTokenWeight(value: MsgUpdateRewardTokenWeight) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateRewardTokenWeight",
        value: MsgUpdateRewardTokenWeight.encode(value).finish()
      };
    },
    addRewardTokenToPool(value: MsgAddRewardTokenToPool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgAddRewardTokenToPool",
        value: MsgAddRewardTokenToPool.encode(value).finish()
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgBond",
        value: MsgBond.encode(value).finish()
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUnbond",
        value: MsgUnbond.encode(value).finish()
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimReward",
        value: MsgClaimReward.encode(value).finish()
      };
    },
    claimUnbonding(value: MsgClaimUnbonding) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimUnbonding",
        value: MsgClaimUnbonding.encode(value).finish()
      };
    },
    cancelUnbonding(value: MsgCancelUnbonding) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCancelUnbonding",
        value: MsgCancelUnbonding.encode(value).finish()
      };
    },
    incentivizePool(value: MsgIncentivizePool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgIncentivizePool",
        value: MsgIncentivizePool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateParams",
        value
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCreatePool",
        value
      };
    },
    updateRewardTokenWeight(value: MsgUpdateRewardTokenWeight) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateRewardTokenWeight",
        value
      };
    },
    addRewardTokenToPool(value: MsgAddRewardTokenToPool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgAddRewardTokenToPool",
        value
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgBond",
        value
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUnbond",
        value
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimReward",
        value
      };
    },
    claimUnbonding(value: MsgClaimUnbonding) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimUnbonding",
        value
      };
    },
    cancelUnbonding(value: MsgCancelUnbonding) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCancelUnbonding",
        value
      };
    },
    incentivizePool(value: MsgIncentivizePool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgIncentivizePool",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCreatePool",
        value: MsgCreatePool.toJSON(value)
      };
    },
    updateRewardTokenWeight(value: MsgUpdateRewardTokenWeight) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateRewardTokenWeight",
        value: MsgUpdateRewardTokenWeight.toJSON(value)
      };
    },
    addRewardTokenToPool(value: MsgAddRewardTokenToPool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgAddRewardTokenToPool",
        value: MsgAddRewardTokenToPool.toJSON(value)
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgBond",
        value: MsgBond.toJSON(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUnbond",
        value: MsgUnbond.toJSON(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimReward",
        value: MsgClaimReward.toJSON(value)
      };
    },
    claimUnbonding(value: MsgClaimUnbonding) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimUnbonding",
        value: MsgClaimUnbonding.toJSON(value)
      };
    },
    cancelUnbonding(value: MsgCancelUnbonding) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCancelUnbonding",
        value: MsgCancelUnbonding.toJSON(value)
      };
    },
    incentivizePool(value: MsgIncentivizePool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgIncentivizePool",
        value: MsgIncentivizePool.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createPool(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCreatePool",
        value: MsgCreatePool.fromJSON(value)
      };
    },
    updateRewardTokenWeight(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateRewardTokenWeight",
        value: MsgUpdateRewardTokenWeight.fromJSON(value)
      };
    },
    addRewardTokenToPool(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgAddRewardTokenToPool",
        value: MsgAddRewardTokenToPool.fromJSON(value)
      };
    },
    bond(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgBond",
        value: MsgBond.fromJSON(value)
      };
    },
    unbond(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUnbond",
        value: MsgUnbond.fromJSON(value)
      };
    },
    claimReward(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimReward",
        value: MsgClaimReward.fromJSON(value)
      };
    },
    claimUnbonding(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimUnbonding",
        value: MsgClaimUnbonding.fromJSON(value)
      };
    },
    cancelUnbonding(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCancelUnbonding",
        value: MsgCancelUnbonding.fromJSON(value)
      };
    },
    incentivizePool(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgIncentivizePool",
        value: MsgIncentivizePool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    updateRewardTokenWeight(value: MsgUpdateRewardTokenWeight) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUpdateRewardTokenWeight",
        value: MsgUpdateRewardTokenWeight.fromPartial(value)
      };
    },
    addRewardTokenToPool(value: MsgAddRewardTokenToPool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgAddRewardTokenToPool",
        value: MsgAddRewardTokenToPool.fromPartial(value)
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgBond",
        value: MsgBond.fromPartial(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgUnbond",
        value: MsgUnbond.fromPartial(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimReward",
        value: MsgClaimReward.fromPartial(value)
      };
    },
    claimUnbonding(value: MsgClaimUnbonding) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgClaimUnbonding",
        value: MsgClaimUnbonding.fromPartial(value)
      };
    },
    cancelUnbonding(value: MsgCancelUnbonding) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgCancelUnbonding",
        value: MsgCancelUnbonding.fromPartial(value)
      };
    },
    incentivizePool(value: MsgIncentivizePool) {
      return {
        typeUrl: "/prismfinance.prismcore.incentives.MsgIncentivizePool",
        value: MsgIncentivizePool.fromPartial(value)
      };
    }
  }
};