import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRefract, MsgRedeem } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prism.refractor.MsgRefract", MsgRefract], ["/prism.refractor.MsgRedeem", MsgRedeem]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/prism.refractor.MsgRefract",
        value: MsgRefract.encode(value).finish()
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/prism.refractor.MsgRedeem",
        value: MsgRedeem.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/prism.refractor.MsgRefract",
        value
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/prism.refractor.MsgRedeem",
        value
      };
    }
  },
  toJSON: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/prism.refractor.MsgRefract",
        value: MsgRefract.toJSON(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/prism.refractor.MsgRedeem",
        value: MsgRedeem.toJSON(value)
      };
    }
  },
  fromJSON: {
    refract(value: any) {
      return {
        typeUrl: "/prism.refractor.MsgRefract",
        value: MsgRefract.fromJSON(value)
      };
    },
    redeem(value: any) {
      return {
        typeUrl: "/prism.refractor.MsgRedeem",
        value: MsgRedeem.fromJSON(value)
      };
    }
  },
  fromPartial: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/prism.refractor.MsgRefract",
        value: MsgRefract.fromPartial(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/prism.refractor.MsgRedeem",
        value: MsgRedeem.fromPartial(value)
      };
    }
  }
};