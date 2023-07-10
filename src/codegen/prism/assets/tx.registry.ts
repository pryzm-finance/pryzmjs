import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRegisterAsset, MsgDisableAsset, MsgUpdateMaturityParams, MsgUpdateFeeRatios } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prism.assets.MsgUpdateParams", MsgUpdateParams], ["/prism.assets.MsgRegisterAsset", MsgRegisterAsset], ["/prism.assets.MsgDisableAsset", MsgDisableAsset], ["/prism.assets.MsgUpdateMaturityParams", MsgUpdateMaturityParams], ["/prism.assets.MsgUpdateFeeRatios", MsgUpdateFeeRatios]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.assets.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/prism.assets.MsgRegisterAsset",
        value: MsgRegisterAsset.encode(value).finish()
      };
    },
    disableAsset(value: MsgDisableAsset) {
      return {
        typeUrl: "/prism.assets.MsgDisableAsset",
        value: MsgDisableAsset.encode(value).finish()
      };
    },
    updateMaturityParams(value: MsgUpdateMaturityParams) {
      return {
        typeUrl: "/prism.assets.MsgUpdateMaturityParams",
        value: MsgUpdateMaturityParams.encode(value).finish()
      };
    },
    updateFeeRatios(value: MsgUpdateFeeRatios) {
      return {
        typeUrl: "/prism.assets.MsgUpdateFeeRatios",
        value: MsgUpdateFeeRatios.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.assets.MsgUpdateParams",
        value
      };
    },
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/prism.assets.MsgRegisterAsset",
        value
      };
    },
    disableAsset(value: MsgDisableAsset) {
      return {
        typeUrl: "/prism.assets.MsgDisableAsset",
        value
      };
    },
    updateMaturityParams(value: MsgUpdateMaturityParams) {
      return {
        typeUrl: "/prism.assets.MsgUpdateMaturityParams",
        value
      };
    },
    updateFeeRatios(value: MsgUpdateFeeRatios) {
      return {
        typeUrl: "/prism.assets.MsgUpdateFeeRatios",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.assets.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/prism.assets.MsgRegisterAsset",
        value: MsgRegisterAsset.toJSON(value)
      };
    },
    disableAsset(value: MsgDisableAsset) {
      return {
        typeUrl: "/prism.assets.MsgDisableAsset",
        value: MsgDisableAsset.toJSON(value)
      };
    },
    updateMaturityParams(value: MsgUpdateMaturityParams) {
      return {
        typeUrl: "/prism.assets.MsgUpdateMaturityParams",
        value: MsgUpdateMaturityParams.toJSON(value)
      };
    },
    updateFeeRatios(value: MsgUpdateFeeRatios) {
      return {
        typeUrl: "/prism.assets.MsgUpdateFeeRatios",
        value: MsgUpdateFeeRatios.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/prism.assets.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    registerAsset(value: any) {
      return {
        typeUrl: "/prism.assets.MsgRegisterAsset",
        value: MsgRegisterAsset.fromJSON(value)
      };
    },
    disableAsset(value: any) {
      return {
        typeUrl: "/prism.assets.MsgDisableAsset",
        value: MsgDisableAsset.fromJSON(value)
      };
    },
    updateMaturityParams(value: any) {
      return {
        typeUrl: "/prism.assets.MsgUpdateMaturityParams",
        value: MsgUpdateMaturityParams.fromJSON(value)
      };
    },
    updateFeeRatios(value: any) {
      return {
        typeUrl: "/prism.assets.MsgUpdateFeeRatios",
        value: MsgUpdateFeeRatios.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prism.assets.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/prism.assets.MsgRegisterAsset",
        value: MsgRegisterAsset.fromPartial(value)
      };
    },
    disableAsset(value: MsgDisableAsset) {
      return {
        typeUrl: "/prism.assets.MsgDisableAsset",
        value: MsgDisableAsset.fromPartial(value)
      };
    },
    updateMaturityParams(value: MsgUpdateMaturityParams) {
      return {
        typeUrl: "/prism.assets.MsgUpdateMaturityParams",
        value: MsgUpdateMaturityParams.fromPartial(value)
      };
    },
    updateFeeRatios(value: MsgUpdateFeeRatios) {
      return {
        typeUrl: "/prism.assets.MsgUpdateFeeRatios",
        value: MsgUpdateFeeRatios.fromPartial(value)
      };
    }
  }
};