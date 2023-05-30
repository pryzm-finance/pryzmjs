import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgSetAction } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prismfinance.prismcore.treasury.MsgUpdateParams", MsgUpdateParams], ["/prismfinance.prismcore.treasury.MsgSetAction", MsgSetAction]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    setAction(value: MsgSetAction) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgSetAction",
        value: MsgSetAction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgUpdateParams",
        value
      };
    },
    setAction(value: MsgSetAction) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgSetAction",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    setAction(value: MsgSetAction) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgSetAction",
        value: MsgSetAction.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    setAction(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgSetAction",
        value: MsgSetAction.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    setAction(value: MsgSetAction) {
      return {
        typeUrl: "/prismfinance.prismcore.treasury.MsgSetAction",
        value: MsgSetAction.fromPartial(value)
      };
    }
  }
};