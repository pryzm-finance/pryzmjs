import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDappAccountSpend } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prismfinance.prismcore.mint.MsgDappAccountSpend", MsgDappAccountSpend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    dappAccountSpend(value: MsgDappAccountSpend) {
      return {
        typeUrl: "/prismfinance.prismcore.mint.MsgDappAccountSpend",
        value: MsgDappAccountSpend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    dappAccountSpend(value: MsgDappAccountSpend) {
      return {
        typeUrl: "/prismfinance.prismcore.mint.MsgDappAccountSpend",
        value
      };
    }
  },
  toJSON: {
    dappAccountSpend(value: MsgDappAccountSpend) {
      return {
        typeUrl: "/prismfinance.prismcore.mint.MsgDappAccountSpend",
        value: MsgDappAccountSpend.toJSON(value)
      };
    }
  },
  fromJSON: {
    dappAccountSpend(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.mint.MsgDappAccountSpend",
        value: MsgDappAccountSpend.fromJSON(value)
      };
    }
  },
  fromPartial: {
    dappAccountSpend(value: MsgDappAccountSpend) {
      return {
        typeUrl: "/prismfinance.prismcore.mint.MsgDappAccountSpend",
        value: MsgDappAccountSpend.fromPartial(value)
      };
    }
  }
};