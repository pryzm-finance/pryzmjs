import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetAction } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prism.treasury.MsgSetAction", MsgSetAction]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setAction(value: MsgSetAction) {
      return {
        typeUrl: "/prism.treasury.MsgSetAction",
        value: MsgSetAction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setAction(value: MsgSetAction) {
      return {
        typeUrl: "/prism.treasury.MsgSetAction",
        value
      };
    }
  },
  toJSON: {
    setAction(value: MsgSetAction) {
      return {
        typeUrl: "/prism.treasury.MsgSetAction",
        value: MsgSetAction.toJSON(value)
      };
    }
  },
  fromJSON: {
    setAction(value: any) {
      return {
        typeUrl: "/prism.treasury.MsgSetAction",
        value: MsgSetAction.fromJSON(value)
      };
    }
  },
  fromPartial: {
    setAction(value: MsgSetAction) {
      return {
        typeUrl: "/prism.treasury.MsgSetAction",
        value: MsgSetAction.fromPartial(value)
      };
    }
  }
};