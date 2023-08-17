//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreatePool, MsgUpdateRewardTokenWeight, MsgAddRewardTokenToPool, MsgBond, MsgUnbond, MsgClaimReward, MsgClaimUnbonding, MsgCancelUnbonding, MsgIncentivizePool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prism.incentives.MsgUpdateParams", MsgUpdateParams], ["/prism.incentives.MsgCreatePool", MsgCreatePool], ["/prism.incentives.MsgUpdateRewardTokenWeight", MsgUpdateRewardTokenWeight], ["/prism.incentives.MsgAddRewardTokenToPool", MsgAddRewardTokenToPool], ["/prism.incentives.MsgBond", MsgBond], ["/prism.incentives.MsgUnbond", MsgUnbond], ["/prism.incentives.MsgClaimReward", MsgClaimReward], ["/prism.incentives.MsgClaimUnbonding", MsgClaimUnbonding], ["/prism.incentives.MsgCancelUnbonding", MsgCancelUnbonding], ["/prism.incentives.MsgIncentivizePool", MsgIncentivizePool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/prism.incentives.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    updateRewardTokenWeight(value: MsgUpdateRewardTokenWeight) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateRewardTokenWeight",
        value: MsgUpdateRewardTokenWeight.encode(value).finish()
      };
    },
    addRewardTokenToPool(value: MsgAddRewardTokenToPool) {
      return {
        typeUrl: "/prism.incentives.MsgAddRewardTokenToPool",
        value: MsgAddRewardTokenToPool.encode(value).finish()
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/prism.incentives.MsgBond",
        value: MsgBond.encode(value).finish()
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prism.incentives.MsgUnbond",
        value: MsgUnbond.encode(value).finish()
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prism.incentives.MsgClaimReward",
        value: MsgClaimReward.encode(value).finish()
      };
    },
    claimUnbonding(value: MsgClaimUnbonding) {
      return {
        typeUrl: "/prism.incentives.MsgClaimUnbonding",
        value: MsgClaimUnbonding.encode(value).finish()
      };
    },
    cancelUnbonding(value: MsgCancelUnbonding) {
      return {
        typeUrl: "/prism.incentives.MsgCancelUnbonding",
        value: MsgCancelUnbonding.encode(value).finish()
      };
    },
    incentivizePool(value: MsgIncentivizePool) {
      return {
        typeUrl: "/prism.incentives.MsgIncentivizePool",
        value: MsgIncentivizePool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateParams",
        value
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/prism.incentives.MsgCreatePool",
        value
      };
    },
    updateRewardTokenWeight(value: MsgUpdateRewardTokenWeight) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateRewardTokenWeight",
        value
      };
    },
    addRewardTokenToPool(value: MsgAddRewardTokenToPool) {
      return {
        typeUrl: "/prism.incentives.MsgAddRewardTokenToPool",
        value
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/prism.incentives.MsgBond",
        value
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prism.incentives.MsgUnbond",
        value
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prism.incentives.MsgClaimReward",
        value
      };
    },
    claimUnbonding(value: MsgClaimUnbonding) {
      return {
        typeUrl: "/prism.incentives.MsgClaimUnbonding",
        value
      };
    },
    cancelUnbonding(value: MsgCancelUnbonding) {
      return {
        typeUrl: "/prism.incentives.MsgCancelUnbonding",
        value
      };
    },
    incentivizePool(value: MsgIncentivizePool) {
      return {
        typeUrl: "/prism.incentives.MsgIncentivizePool",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/prism.incentives.MsgCreatePool",
        value: MsgCreatePool.toJSON(value)
      };
    },
    updateRewardTokenWeight(value: MsgUpdateRewardTokenWeight) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateRewardTokenWeight",
        value: MsgUpdateRewardTokenWeight.toJSON(value)
      };
    },
    addRewardTokenToPool(value: MsgAddRewardTokenToPool) {
      return {
        typeUrl: "/prism.incentives.MsgAddRewardTokenToPool",
        value: MsgAddRewardTokenToPool.toJSON(value)
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/prism.incentives.MsgBond",
        value: MsgBond.toJSON(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prism.incentives.MsgUnbond",
        value: MsgUnbond.toJSON(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prism.incentives.MsgClaimReward",
        value: MsgClaimReward.toJSON(value)
      };
    },
    claimUnbonding(value: MsgClaimUnbonding) {
      return {
        typeUrl: "/prism.incentives.MsgClaimUnbonding",
        value: MsgClaimUnbonding.toJSON(value)
      };
    },
    cancelUnbonding(value: MsgCancelUnbonding) {
      return {
        typeUrl: "/prism.incentives.MsgCancelUnbonding",
        value: MsgCancelUnbonding.toJSON(value)
      };
    },
    incentivizePool(value: MsgIncentivizePool) {
      return {
        typeUrl: "/prism.incentives.MsgIncentivizePool",
        value: MsgIncentivizePool.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createPool(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgCreatePool",
        value: MsgCreatePool.fromJSON(value)
      };
    },
    updateRewardTokenWeight(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateRewardTokenWeight",
        value: MsgUpdateRewardTokenWeight.fromJSON(value)
      };
    },
    addRewardTokenToPool(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgAddRewardTokenToPool",
        value: MsgAddRewardTokenToPool.fromJSON(value)
      };
    },
    bond(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgBond",
        value: MsgBond.fromJSON(value)
      };
    },
    unbond(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgUnbond",
        value: MsgUnbond.fromJSON(value)
      };
    },
    claimReward(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgClaimReward",
        value: MsgClaimReward.fromJSON(value)
      };
    },
    claimUnbonding(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgClaimUnbonding",
        value: MsgClaimUnbonding.fromJSON(value)
      };
    },
    cancelUnbonding(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgCancelUnbonding",
        value: MsgCancelUnbonding.fromJSON(value)
      };
    },
    incentivizePool(value: any) {
      return {
        typeUrl: "/prism.incentives.MsgIncentivizePool",
        value: MsgIncentivizePool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/prism.incentives.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    updateRewardTokenWeight(value: MsgUpdateRewardTokenWeight) {
      return {
        typeUrl: "/prism.incentives.MsgUpdateRewardTokenWeight",
        value: MsgUpdateRewardTokenWeight.fromPartial(value)
      };
    },
    addRewardTokenToPool(value: MsgAddRewardTokenToPool) {
      return {
        typeUrl: "/prism.incentives.MsgAddRewardTokenToPool",
        value: MsgAddRewardTokenToPool.fromPartial(value)
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/prism.incentives.MsgBond",
        value: MsgBond.fromPartial(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prism.incentives.MsgUnbond",
        value: MsgUnbond.fromPartial(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prism.incentives.MsgClaimReward",
        value: MsgClaimReward.fromPartial(value)
      };
    },
    claimUnbonding(value: MsgClaimUnbonding) {
      return {
        typeUrl: "/prism.incentives.MsgClaimUnbonding",
        value: MsgClaimUnbonding.fromPartial(value)
      };
    },
    cancelUnbonding(value: MsgCancelUnbonding) {
      return {
        typeUrl: "/prism.incentives.MsgCancelUnbonding",
        value: MsgCancelUnbonding.fromPartial(value)
      };
    },
    incentivizePool(value: MsgIncentivizePool) {
      return {
        typeUrl: "/prism.incentives.MsgIncentivizePool",
        value: MsgIncentivizePool.fromPartial(value)
      };
    }
  }
};