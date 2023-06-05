import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgDappAccountSpend } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prism.mint.MsgUpdateParams", MsgUpdateParams], ["/prism.mint.MsgDappAccountSpend", MsgDappAccountSpend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.mint.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    dappAccountSpend(value: MsgDappAccountSpend) {
      return {
        typeUrl: "/prism.mint.MsgDappAccountSpend",
        value: MsgDappAccountSpend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.mint.MsgUpdateParams",
        value
      };
    },
    dappAccountSpend(value: MsgDappAccountSpend) {
      return {
        typeUrl: "/prism.mint.MsgDappAccountSpend",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.mint.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    dappAccountSpend(value: MsgDappAccountSpend) {
      return {
        typeUrl: "/prism.mint.MsgDappAccountSpend",
        value: MsgDappAccountSpend.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/prism.mint.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    dappAccountSpend(value: any) {
      return {
        typeUrl: "/prism.mint.MsgDappAccountSpend",
        value: MsgDappAccountSpend.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.mint.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    dappAccountSpend(value: MsgDappAccountSpend) {
      return {
        typeUrl: "/prism.mint.MsgDappAccountSpend",
        value: MsgDappAccountSpend.fromPartial(value)
      };
    }
  }
};