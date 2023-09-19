//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgRegisterAsset, MsgDisableAsset, MsgUpdateMaturityParams, MsgUpdateFeeRatios } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/pryzm.assets.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      default_fee_ratios: {
        yield: string;
        refractor_refract: string;
        refractor_merge: string;
        refractor_redeem: string;
        y_staking_claim_reward: string;
      };
    };
  };
}
export interface MsgRegisterAssetAminoType extends AminoMsg {
  type: "/pryzm.assets.MsgRegisterAsset";
  value: {
    authority: string;
    asset: {
      id: string;
      token_denom: string;
      host_chain_id: string;
      disabled: boolean;
      maturity_params: {
        levels_per_year: number;
        years: number;
      };
      fee_ratios: {
        yield: string;
        refractor_refract: string;
        refractor_merge: string;
        refractor_redeem: string;
        y_staking_claim_reward: string;
      };
    };
  };
}
export interface MsgDisableAssetAminoType extends AminoMsg {
  type: "/pryzm.assets.MsgDisableAsset";
  value: {
    authority: string;
    asset_id: string;
  };
}
export interface MsgUpdateMaturityParamsAminoType extends AminoMsg {
  type: "/pryzm.assets.MsgUpdateMaturityParams";
  value: {
    authority: string;
    asset_id: string;
    params: {
      levels_per_year: number;
      years: number;
    };
  };
}
export interface MsgUpdateFeeRatiosAminoType extends AminoMsg {
  type: "/pryzm.assets.MsgUpdateFeeRatios";
  value: {
    authority: string;
    asset_id: string;
    fee_ratios: {
      yield: string;
      refractor_refract: string;
      refractor_merge: string;
      refractor_redeem: string;
      y_staking_claim_reward: string;
    };
  };
}
export const AminoConverter = {
  "/pryzm.assets.MsgUpdateParams": {
    aminoType: "/pryzm.assets.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          default_fee_ratios: {
            yield: params.defaultFeeRatios.yield,
            refractor_refract: params.defaultFeeRatios.refractorRefract,
            refractor_merge: params.defaultFeeRatios.refractorMerge,
            refractor_redeem: params.defaultFeeRatios.refractorRedeem,
            y_staking_claim_reward: params.defaultFeeRatios.yStakingClaimReward
          }
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          defaultFeeRatios: {
            yield: params.default_fee_ratios.yield,
            refractorRefract: params.default_fee_ratios.refractor_refract,
            refractorMerge: params.default_fee_ratios.refractor_merge,
            refractorRedeem: params.default_fee_ratios.refractor_redeem,
            yStakingClaimReward: params.default_fee_ratios.y_staking_claim_reward
          }
        }
      };
    }
  },
  "/pryzm.assets.MsgRegisterAsset": {
    aminoType: "/pryzm.assets.MsgRegisterAsset",
    toAmino: ({
      authority,
      asset
    }: MsgRegisterAsset): MsgRegisterAssetAminoType["value"] => {
      return {
        authority,
        asset: {
          id: asset.id,
          token_denom: asset.tokenDenom,
          host_chain_id: asset.hostChainId,
          disabled: asset.disabled,
          maturity_params: {
            levels_per_year: asset.maturityParams.levelsPerYear,
            years: asset.maturityParams.years
          },
          fee_ratios: {
            yield: asset.feeRatios.yield,
            refractor_refract: asset.feeRatios.refractorRefract,
            refractor_merge: asset.feeRatios.refractorMerge,
            refractor_redeem: asset.feeRatios.refractorRedeem,
            y_staking_claim_reward: asset.feeRatios.yStakingClaimReward
          }
        }
      };
    },
    fromAmino: ({
      authority,
      asset
    }: MsgRegisterAssetAminoType["value"]): MsgRegisterAsset => {
      return {
        authority,
        asset: {
          id: asset.id,
          tokenDenom: asset.token_denom,
          hostChainId: asset.host_chain_id,
          disabled: asset.disabled,
          maturityParams: {
            levelsPerYear: asset.maturity_params.levels_per_year,
            years: asset.maturity_params.years
          },
          feeRatios: {
            yield: asset.fee_ratios.yield,
            refractorRefract: asset.fee_ratios.refractor_refract,
            refractorMerge: asset.fee_ratios.refractor_merge,
            refractorRedeem: asset.fee_ratios.refractor_redeem,
            yStakingClaimReward: asset.fee_ratios.y_staking_claim_reward
          }
        }
      };
    }
  },
  "/pryzm.assets.MsgDisableAsset": {
    aminoType: "/pryzm.assets.MsgDisableAsset",
    toAmino: ({
      authority,
      assetId
    }: MsgDisableAsset): MsgDisableAssetAminoType["value"] => {
      return {
        authority,
        asset_id: assetId
      };
    },
    fromAmino: ({
      authority,
      asset_id
    }: MsgDisableAssetAminoType["value"]): MsgDisableAsset => {
      return {
        authority,
        assetId: asset_id
      };
    }
  },
  "/pryzm.assets.MsgUpdateMaturityParams": {
    aminoType: "/pryzm.assets.MsgUpdateMaturityParams",
    toAmino: ({
      authority,
      assetId,
      params
    }: MsgUpdateMaturityParams): MsgUpdateMaturityParamsAminoType["value"] => {
      return {
        authority,
        asset_id: assetId,
        params: {
          levels_per_year: params.levelsPerYear,
          years: params.years
        }
      };
    },
    fromAmino: ({
      authority,
      asset_id,
      params
    }: MsgUpdateMaturityParamsAminoType["value"]): MsgUpdateMaturityParams => {
      return {
        authority,
        assetId: asset_id,
        params: {
          levelsPerYear: params.levels_per_year,
          years: params.years
        }
      };
    }
  },
  "/pryzm.assets.MsgUpdateFeeRatios": {
    aminoType: "/pryzm.assets.MsgUpdateFeeRatios",
    toAmino: ({
      authority,
      assetId,
      feeRatios
    }: MsgUpdateFeeRatios): MsgUpdateFeeRatiosAminoType["value"] => {
      return {
        authority,
        asset_id: assetId,
        fee_ratios: {
          yield: feeRatios.yield,
          refractor_refract: feeRatios.refractorRefract,
          refractor_merge: feeRatios.refractorMerge,
          refractor_redeem: feeRatios.refractorRedeem,
          y_staking_claim_reward: feeRatios.yStakingClaimReward
        }
      };
    },
    fromAmino: ({
      authority,
      asset_id,
      fee_ratios
    }: MsgUpdateFeeRatiosAminoType["value"]): MsgUpdateFeeRatios => {
      return {
        authority,
        assetId: asset_id,
        feeRatios: {
          yield: fee_ratios.yield,
          refractorRefract: fee_ratios.refractor_refract,
          refractorMerge: fee_ratios.refractor_merge,
          refractorRedeem: fee_ratios.refractor_redeem,
          yStakingClaimReward: fee_ratios.y_staking_claim_reward
        }
      };
    }
  }
};