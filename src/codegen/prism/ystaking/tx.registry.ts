//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBond, MsgUnbond, MsgClaimReward, MsgExitPool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prism.ystaking.MsgBond", MsgBond], ["/prism.ystaking.MsgUnbond", MsgUnbond], ["/prism.ystaking.MsgClaimReward", MsgClaimReward], ["/prism.ystaking.MsgExitPool", MsgExitPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/prism.ystaking.MsgBond",
        value: MsgBond.encode(value).finish()
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prism.ystaking.MsgUnbond",
        value: MsgUnbond.encode(value).finish()
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prism.ystaking.MsgClaimReward",
        value: MsgClaimReward.encode(value).finish()
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/prism.ystaking.MsgExitPool",
        value: MsgExitPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/prism.ystaking.MsgBond",
        value
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prism.ystaking.MsgUnbond",
        value
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prism.ystaking.MsgClaimReward",
        value
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/prism.ystaking.MsgExitPool",
        value
      };
    }
  },
  toJSON: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/prism.ystaking.MsgBond",
        value: MsgBond.toJSON(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prism.ystaking.MsgUnbond",
        value: MsgUnbond.toJSON(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prism.ystaking.MsgClaimReward",
        value: MsgClaimReward.toJSON(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/prism.ystaking.MsgExitPool",
        value: MsgExitPool.toJSON(value)
      };
    }
  },
  fromJSON: {
    bond(value: any) {
      return {
        typeUrl: "/prism.ystaking.MsgBond",
        value: MsgBond.fromJSON(value)
      };
    },
    unbond(value: any) {
      return {
        typeUrl: "/prism.ystaking.MsgUnbond",
        value: MsgUnbond.fromJSON(value)
      };
    },
    claimReward(value: any) {
      return {
        typeUrl: "/prism.ystaking.MsgClaimReward",
        value: MsgClaimReward.fromJSON(value)
      };
    },
    exitPool(value: any) {
      return {
        typeUrl: "/prism.ystaking.MsgExitPool",
        value: MsgExitPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/prism.ystaking.MsgBond",
        value: MsgBond.fromPartial(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/prism.ystaking.MsgUnbond",
        value: MsgUnbond.fromPartial(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/prism.ystaking.MsgClaimReward",
        value: MsgClaimReward.fromPartial(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/prism.ystaking.MsgExitPool",
        value: MsgExitPool.fromPartial(value)
      };
    }
  }
};