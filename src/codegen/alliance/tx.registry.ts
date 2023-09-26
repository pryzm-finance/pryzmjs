//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDelegate, MsgRedelegate, MsgUndelegate, MsgClaimDelegationRewards } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/alliance.MsgDelegate", MsgDelegate], ["/alliance.MsgRedelegate", MsgRedelegate], ["/alliance.MsgUndelegate", MsgUndelegate], ["/alliance.MsgClaimDelegationRewards", MsgClaimDelegationRewards]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/alliance.MsgDelegate",
        value: MsgDelegate.encode(value).finish()
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/alliance.MsgRedelegate",
        value: MsgRedelegate.encode(value).finish()
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/alliance.MsgUndelegate",
        value: MsgUndelegate.encode(value).finish()
      };
    },
    claimDelegationRewards(value: MsgClaimDelegationRewards) {
      return {
        typeUrl: "/alliance.MsgClaimDelegationRewards",
        value: MsgClaimDelegationRewards.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/alliance.MsgDelegate",
        value
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/alliance.MsgRedelegate",
        value
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/alliance.MsgUndelegate",
        value
      };
    },
    claimDelegationRewards(value: MsgClaimDelegationRewards) {
      return {
        typeUrl: "/alliance.MsgClaimDelegationRewards",
        value
      };
    }
  },
  toJSON: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/alliance.MsgDelegate",
        value: MsgDelegate.toJSON(value)
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/alliance.MsgRedelegate",
        value: MsgRedelegate.toJSON(value)
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/alliance.MsgUndelegate",
        value: MsgUndelegate.toJSON(value)
      };
    },
    claimDelegationRewards(value: MsgClaimDelegationRewards) {
      return {
        typeUrl: "/alliance.MsgClaimDelegationRewards",
        value: MsgClaimDelegationRewards.toJSON(value)
      };
    }
  },
  fromJSON: {
    delegate(value: any) {
      return {
        typeUrl: "/alliance.MsgDelegate",
        value: MsgDelegate.fromJSON(value)
      };
    },
    redelegate(value: any) {
      return {
        typeUrl: "/alliance.MsgRedelegate",
        value: MsgRedelegate.fromJSON(value)
      };
    },
    undelegate(value: any) {
      return {
        typeUrl: "/alliance.MsgUndelegate",
        value: MsgUndelegate.fromJSON(value)
      };
    },
    claimDelegationRewards(value: any) {
      return {
        typeUrl: "/alliance.MsgClaimDelegationRewards",
        value: MsgClaimDelegationRewards.fromJSON(value)
      };
    }
  },
  fromPartial: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/alliance.MsgDelegate",
        value: MsgDelegate.fromPartial(value)
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/alliance.MsgRedelegate",
        value: MsgRedelegate.fromPartial(value)
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/alliance.MsgUndelegate",
        value: MsgUndelegate.fromPartial(value)
      };
    },
    claimDelegationRewards(value: MsgClaimDelegationRewards) {
      return {
        typeUrl: "/alliance.MsgClaimDelegationRewards",
        value: MsgClaimDelegationRewards.fromPartial(value)
      };
    }
  }
};