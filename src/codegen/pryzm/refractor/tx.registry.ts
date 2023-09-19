//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRefract, MsgRedeem } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pryzm.refractor.MsgRefract", MsgRefract], ["/pryzm.refractor.MsgRedeem", MsgRedeem]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/pryzm.refractor.MsgRefract",
        value: MsgRefract.encode(value).finish()
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pryzm.refractor.MsgRedeem",
        value: MsgRedeem.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/pryzm.refractor.MsgRefract",
        value
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pryzm.refractor.MsgRedeem",
        value
      };
    }
  },
  toJSON: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/pryzm.refractor.MsgRefract",
        value: MsgRefract.toJSON(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pryzm.refractor.MsgRedeem",
        value: MsgRedeem.toJSON(value)
      };
    }
  },
  fromJSON: {
    refract(value: any) {
      return {
        typeUrl: "/pryzm.refractor.MsgRefract",
        value: MsgRefract.fromJSON(value)
      };
    },
    redeem(value: any) {
      return {
        typeUrl: "/pryzm.refractor.MsgRedeem",
        value: MsgRedeem.fromJSON(value)
      };
    }
  },
  fromPartial: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/pryzm.refractor.MsgRefract",
        value: MsgRefract.fromPartial(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pryzm.refractor.MsgRedeem",
        value: MsgRedeem.fromPartial(value)
      };
    }
  }
};