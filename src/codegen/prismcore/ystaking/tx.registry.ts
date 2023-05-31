import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBond, MsgUnbond, MsgClaimReward, MsgExitPool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prismfinance.prismcore.ystaking.MsgBond", MsgBond], ["/prismfinance.prismcore.ystaking.MsgUnbond", MsgUnbond], ["/prismfinance.prismcore.ystaking.MsgClaimReward", MsgClaimReward], ["/prismfinance.prismcore.ystaking.MsgExitPool", MsgExitPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgBond",
        value: MsgBond.encode(value).finish()
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgUnbond",
        value: MsgUnbond.encode(value).finish()
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgClaimReward",
        value: MsgClaimReward.encode(value).finish()
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgExitPool",
        value: MsgExitPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgBond",
        value
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgUnbond",
        value
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgClaimReward",
        value
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgExitPool",
        value
      };
    }
  },
  toJSON: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgBond",
        value: MsgBond.toJSON(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgUnbond",
        value: MsgUnbond.toJSON(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgClaimReward",
        value: MsgClaimReward.toJSON(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgExitPool",
        value: MsgExitPool.toJSON(value)
      };
    }
  },
  fromJSON: {
    bond(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgBond",
        value: MsgBond.fromJSON(value)
      };
    },
    unbond(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgUnbond",
        value: MsgUnbond.fromJSON(value)
      };
    },
    claimReward(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgClaimReward",
        value: MsgClaimReward.fromJSON(value)
      };
    },
    exitPool(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgExitPool",
        value: MsgExitPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgBond",
        value: MsgBond.fromPartial(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgUnbond",
        value: MsgUnbond.fromPartial(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgClaimReward",
        value: MsgClaimReward.fromPartial(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/prismfinance.prismcore.ystaking.MsgExitPool",
        value: MsgExitPool.fromPartial(value)
      };
    }
  }
};