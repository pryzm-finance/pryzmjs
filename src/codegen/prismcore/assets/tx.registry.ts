import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAsset, MsgDisableAsset, MsgUpdateMaturityParams, MsgUpdateFeeRatios } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prismfinance.prismcore.assets.MsgRegisterAsset", MsgRegisterAsset], ["/prismfinance.prismcore.assets.MsgDisableAsset", MsgDisableAsset], ["/prismfinance.prismcore.assets.MsgUpdateMaturityParams", MsgUpdateMaturityParams], ["/prismfinance.prismcore.assets.MsgUpdateFeeRatios", MsgUpdateFeeRatios]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgRegisterAsset",
        value: MsgRegisterAsset.encode(value).finish()
      };
    },
    disableAsset(value: MsgDisableAsset) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgDisableAsset",
        value: MsgDisableAsset.encode(value).finish()
      };
    },
    updateMaturityParams(value: MsgUpdateMaturityParams) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateMaturityParams",
        value: MsgUpdateMaturityParams.encode(value).finish()
      };
    },
    updateFeeRatios(value: MsgUpdateFeeRatios) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateFeeRatios",
        value: MsgUpdateFeeRatios.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgRegisterAsset",
        value
      };
    },
    disableAsset(value: MsgDisableAsset) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgDisableAsset",
        value
      };
    },
    updateMaturityParams(value: MsgUpdateMaturityParams) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateMaturityParams",
        value
      };
    },
    updateFeeRatios(value: MsgUpdateFeeRatios) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateFeeRatios",
        value
      };
    }
  },
  toJSON: {
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgRegisterAsset",
        value: MsgRegisterAsset.toJSON(value)
      };
    },
    disableAsset(value: MsgDisableAsset) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgDisableAsset",
        value: MsgDisableAsset.toJSON(value)
      };
    },
    updateMaturityParams(value: MsgUpdateMaturityParams) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateMaturityParams",
        value: MsgUpdateMaturityParams.toJSON(value)
      };
    },
    updateFeeRatios(value: MsgUpdateFeeRatios) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateFeeRatios",
        value: MsgUpdateFeeRatios.toJSON(value)
      };
    }
  },
  fromJSON: {
    registerAsset(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgRegisterAsset",
        value: MsgRegisterAsset.fromJSON(value)
      };
    },
    disableAsset(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgDisableAsset",
        value: MsgDisableAsset.fromJSON(value)
      };
    },
    updateMaturityParams(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateMaturityParams",
        value: MsgUpdateMaturityParams.fromJSON(value)
      };
    },
    updateFeeRatios(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateFeeRatios",
        value: MsgUpdateFeeRatios.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgRegisterAsset",
        value: MsgRegisterAsset.fromPartial(value)
      };
    },
    disableAsset(value: MsgDisableAsset) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgDisableAsset",
        value: MsgDisableAsset.fromPartial(value)
      };
    },
    updateMaturityParams(value: MsgUpdateMaturityParams) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateMaturityParams",
        value: MsgUpdateMaturityParams.fromPartial(value)
      };
    },
    updateFeeRatios(value: MsgUpdateFeeRatios) {
      return {
        typeUrl: "/prismfinance.prismcore.assets.MsgUpdateFeeRatios",
        value: MsgUpdateFeeRatios.fromPartial(value)
      };
    }
  }
};