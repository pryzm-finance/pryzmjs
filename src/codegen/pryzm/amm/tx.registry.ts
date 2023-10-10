//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSingleSwap, MsgJoinAllTokensExactLpt, MsgJoinTokenExactLpt, MsgJoinExactTokens, MsgZeroImpactJoinYamm, MsgExitExactTokens, MsgExitTokenExactLpt, MsgExitAllTokensExactLpt, MsgCreateWeightedPool, MsgUpdateSwapFee, MsgInitializePool, MsgUpdateWeights, MsgBatchSwap, MsgSetYammConfiguration, MsgWhitelistRoute, MsgSetWhitelistedRouteEnabled, MsgSubmitOrder, MsgCancelOrder, MsgProposeMatch, MsgSetCircuitBreakers, MsgSetRecoveryMode, MsgRecoveryExit, MsgSetPauseMode, MsgSetVaultPauseMode, MsgCreateOraclePricePair, MsgUpdateOraclePricePair, MsgDeleteOraclePricePair, MsgSetSwapProtocolFee, MsgSetJoinExitProtocolFee, MsgIntroduceYammLpToWeightedPool, MsgIntroduceAssetBaseTokenToWeightedPool, MsgCancelPendingTokenIntroduction, MsgRemoveTokenFromWeightedPool, MsgUpdateParams, MsgAddMaturityToYamm, MsgSetInitializationAllowList } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pryzm.amm.MsgSingleSwap", MsgSingleSwap], ["/pryzm.amm.MsgJoinAllTokensExactLpt", MsgJoinAllTokensExactLpt], ["/pryzm.amm.MsgJoinTokenExactLpt", MsgJoinTokenExactLpt], ["/pryzm.amm.MsgJoinExactTokens", MsgJoinExactTokens], ["/pryzm.amm.MsgZeroImpactJoinYamm", MsgZeroImpactJoinYamm], ["/pryzm.amm.MsgExitExactTokens", MsgExitExactTokens], ["/pryzm.amm.MsgExitTokenExactLpt", MsgExitTokenExactLpt], ["/pryzm.amm.MsgExitAllTokensExactLpt", MsgExitAllTokensExactLpt], ["/pryzm.amm.MsgCreateWeightedPool", MsgCreateWeightedPool], ["/pryzm.amm.MsgUpdateSwapFee", MsgUpdateSwapFee], ["/pryzm.amm.MsgInitializePool", MsgInitializePool], ["/pryzm.amm.MsgUpdateWeights", MsgUpdateWeights], ["/pryzm.amm.MsgBatchSwap", MsgBatchSwap], ["/pryzm.amm.MsgSetYammConfiguration", MsgSetYammConfiguration], ["/pryzm.amm.MsgWhitelistRoute", MsgWhitelistRoute], ["/pryzm.amm.MsgSetWhitelistedRouteEnabled", MsgSetWhitelistedRouteEnabled], ["/pryzm.amm.MsgSubmitOrder", MsgSubmitOrder], ["/pryzm.amm.MsgCancelOrder", MsgCancelOrder], ["/pryzm.amm.MsgProposeMatch", MsgProposeMatch], ["/pryzm.amm.MsgSetCircuitBreakers", MsgSetCircuitBreakers], ["/pryzm.amm.MsgSetRecoveryMode", MsgSetRecoveryMode], ["/pryzm.amm.MsgRecoveryExit", MsgRecoveryExit], ["/pryzm.amm.MsgSetPauseMode", MsgSetPauseMode], ["/pryzm.amm.MsgSetVaultPauseMode", MsgSetVaultPauseMode], ["/pryzm.amm.MsgCreateOraclePricePair", MsgCreateOraclePricePair], ["/pryzm.amm.MsgUpdateOraclePricePair", MsgUpdateOraclePricePair], ["/pryzm.amm.MsgDeleteOraclePricePair", MsgDeleteOraclePricePair], ["/pryzm.amm.MsgSetSwapProtocolFee", MsgSetSwapProtocolFee], ["/pryzm.amm.MsgSetJoinExitProtocolFee", MsgSetJoinExitProtocolFee], ["/pryzm.amm.MsgIntroduceYammLpToWeightedPool", MsgIntroduceYammLpToWeightedPool], ["/pryzm.amm.MsgIntroduceAssetBaseTokenToWeightedPool", MsgIntroduceAssetBaseTokenToWeightedPool], ["/pryzm.amm.MsgCancelPendingTokenIntroduction", MsgCancelPendingTokenIntroduction], ["/pryzm.amm.MsgRemoveTokenFromWeightedPool", MsgRemoveTokenFromWeightedPool], ["/pryzm.amm.MsgUpdateParams", MsgUpdateParams], ["/pryzm.amm.MsgAddMaturityToYamm", MsgAddMaturityToYamm], ["/pryzm.amm.MsgSetInitializationAllowList", MsgSetInitializationAllowList]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    singleSwap(value: MsgSingleSwap) {
      return {
        typeUrl: "/pryzm.amm.MsgSingleSwap",
        value: MsgSingleSwap.encode(value).finish()
      };
    },
    joinAllTokensExactLpt(value: MsgJoinAllTokensExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinAllTokensExactLpt",
        value: MsgJoinAllTokensExactLpt.encode(value).finish()
      };
    },
    joinTokenExactLpt(value: MsgJoinTokenExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinTokenExactLpt",
        value: MsgJoinTokenExactLpt.encode(value).finish()
      };
    },
    joinExactTokens(value: MsgJoinExactTokens) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinExactTokens",
        value: MsgJoinExactTokens.encode(value).finish()
      };
    },
    zeroImpactJoinYamm(value: MsgZeroImpactJoinYamm) {
      return {
        typeUrl: "/pryzm.amm.MsgZeroImpactJoinYamm",
        value: MsgZeroImpactJoinYamm.encode(value).finish()
      };
    },
    exitExactTokens(value: MsgExitExactTokens) {
      return {
        typeUrl: "/pryzm.amm.MsgExitExactTokens",
        value: MsgExitExactTokens.encode(value).finish()
      };
    },
    exitTokenExactLpt(value: MsgExitTokenExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgExitTokenExactLpt",
        value: MsgExitTokenExactLpt.encode(value).finish()
      };
    },
    exitAllTokensExactLpt(value: MsgExitAllTokensExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgExitAllTokensExactLpt",
        value: MsgExitAllTokensExactLpt.encode(value).finish()
      };
    },
    createWeightedPool(value: MsgCreateWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateWeightedPool",
        value: MsgCreateWeightedPool.encode(value).finish()
      };
    },
    updateSwapFee(value: MsgUpdateSwapFee) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateSwapFee",
        value: MsgUpdateSwapFee.encode(value).finish()
      };
    },
    initializePool(value: MsgInitializePool) {
      return {
        typeUrl: "/pryzm.amm.MsgInitializePool",
        value: MsgInitializePool.encode(value).finish()
      };
    },
    updateWeights(value: MsgUpdateWeights) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateWeights",
        value: MsgUpdateWeights.encode(value).finish()
      };
    },
    batchSwap(value: MsgBatchSwap) {
      return {
        typeUrl: "/pryzm.amm.MsgBatchSwap",
        value: MsgBatchSwap.encode(value).finish()
      };
    },
    setYammConfiguration(value: MsgSetYammConfiguration) {
      return {
        typeUrl: "/pryzm.amm.MsgSetYammConfiguration",
        value: MsgSetYammConfiguration.encode(value).finish()
      };
    },
    whitelistRoute(value: MsgWhitelistRoute) {
      return {
        typeUrl: "/pryzm.amm.MsgWhitelistRoute",
        value: MsgWhitelistRoute.encode(value).finish()
      };
    },
    setWhitelistedRouteEnabled(value: MsgSetWhitelistedRouteEnabled) {
      return {
        typeUrl: "/pryzm.amm.MsgSetWhitelistedRouteEnabled",
        value: MsgSetWhitelistedRouteEnabled.encode(value).finish()
      };
    },
    submitOrder(value: MsgSubmitOrder) {
      return {
        typeUrl: "/pryzm.amm.MsgSubmitOrder",
        value: MsgSubmitOrder.encode(value).finish()
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },
    proposeMatch(value: MsgProposeMatch) {
      return {
        typeUrl: "/pryzm.amm.MsgProposeMatch",
        value: MsgProposeMatch.encode(value).finish()
      };
    },
    setCircuitBreakers(value: MsgSetCircuitBreakers) {
      return {
        typeUrl: "/pryzm.amm.MsgSetCircuitBreakers",
        value: MsgSetCircuitBreakers.encode(value).finish()
      };
    },
    setRecoveryMode(value: MsgSetRecoveryMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetRecoveryMode",
        value: MsgSetRecoveryMode.encode(value).finish()
      };
    },
    recoveryExit(value: MsgRecoveryExit) {
      return {
        typeUrl: "/pryzm.amm.MsgRecoveryExit",
        value: MsgRecoveryExit.encode(value).finish()
      };
    },
    setPauseMode(value: MsgSetPauseMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetPauseMode",
        value: MsgSetPauseMode.encode(value).finish()
      };
    },
    setVaultPauseMode(value: MsgSetVaultPauseMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetVaultPauseMode",
        value: MsgSetVaultPauseMode.encode(value).finish()
      };
    },
    createOraclePricePair(value: MsgCreateOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateOraclePricePair",
        value: MsgCreateOraclePricePair.encode(value).finish()
      };
    },
    updateOraclePricePair(value: MsgUpdateOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateOraclePricePair",
        value: MsgUpdateOraclePricePair.encode(value).finish()
      };
    },
    deleteOraclePricePair(value: MsgDeleteOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgDeleteOraclePricePair",
        value: MsgDeleteOraclePricePair.encode(value).finish()
      };
    },
    setSwapProtocolFee(value: MsgSetSwapProtocolFee) {
      return {
        typeUrl: "/pryzm.amm.MsgSetSwapProtocolFee",
        value: MsgSetSwapProtocolFee.encode(value).finish()
      };
    },
    setJoinExitProtocolFee(value: MsgSetJoinExitProtocolFee) {
      return {
        typeUrl: "/pryzm.amm.MsgSetJoinExitProtocolFee",
        value: MsgSetJoinExitProtocolFee.encode(value).finish()
      };
    },
    introduceYammLpToWeightedPool(value: MsgIntroduceYammLpToWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceYammLpToWeightedPool",
        value: MsgIntroduceYammLpToWeightedPool.encode(value).finish()
      };
    },
    introduceAssetBaseTokenToWeightedPool(value: MsgIntroduceAssetBaseTokenToWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceAssetBaseTokenToWeightedPool",
        value: MsgIntroduceAssetBaseTokenToWeightedPool.encode(value).finish()
      };
    },
    cancelPendingTokenIntroduction(value: MsgCancelPendingTokenIntroduction) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelPendingTokenIntroduction",
        value: MsgCancelPendingTokenIntroduction.encode(value).finish()
      };
    },
    removeTokenFromWeightedPool(value: MsgRemoveTokenFromWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgRemoveTokenFromWeightedPool",
        value: MsgRemoveTokenFromWeightedPool.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    addMaturityToYamm(value: MsgAddMaturityToYamm) {
      return {
        typeUrl: "/pryzm.amm.MsgAddMaturityToYamm",
        value: MsgAddMaturityToYamm.encode(value).finish()
      };
    },
    setInitializationAllowList(value: MsgSetInitializationAllowList) {
      return {
        typeUrl: "/pryzm.amm.MsgSetInitializationAllowList",
        value: MsgSetInitializationAllowList.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    singleSwap(value: MsgSingleSwap) {
      return {
        typeUrl: "/pryzm.amm.MsgSingleSwap",
        value
      };
    },
    joinAllTokensExactLpt(value: MsgJoinAllTokensExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinAllTokensExactLpt",
        value
      };
    },
    joinTokenExactLpt(value: MsgJoinTokenExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinTokenExactLpt",
        value
      };
    },
    joinExactTokens(value: MsgJoinExactTokens) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinExactTokens",
        value
      };
    },
    zeroImpactJoinYamm(value: MsgZeroImpactJoinYamm) {
      return {
        typeUrl: "/pryzm.amm.MsgZeroImpactJoinYamm",
        value
      };
    },
    exitExactTokens(value: MsgExitExactTokens) {
      return {
        typeUrl: "/pryzm.amm.MsgExitExactTokens",
        value
      };
    },
    exitTokenExactLpt(value: MsgExitTokenExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgExitTokenExactLpt",
        value
      };
    },
    exitAllTokensExactLpt(value: MsgExitAllTokensExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgExitAllTokensExactLpt",
        value
      };
    },
    createWeightedPool(value: MsgCreateWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateWeightedPool",
        value
      };
    },
    updateSwapFee(value: MsgUpdateSwapFee) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateSwapFee",
        value
      };
    },
    initializePool(value: MsgInitializePool) {
      return {
        typeUrl: "/pryzm.amm.MsgInitializePool",
        value
      };
    },
    updateWeights(value: MsgUpdateWeights) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateWeights",
        value
      };
    },
    batchSwap(value: MsgBatchSwap) {
      return {
        typeUrl: "/pryzm.amm.MsgBatchSwap",
        value
      };
    },
    setYammConfiguration(value: MsgSetYammConfiguration) {
      return {
        typeUrl: "/pryzm.amm.MsgSetYammConfiguration",
        value
      };
    },
    whitelistRoute(value: MsgWhitelistRoute) {
      return {
        typeUrl: "/pryzm.amm.MsgWhitelistRoute",
        value
      };
    },
    setWhitelistedRouteEnabled(value: MsgSetWhitelistedRouteEnabled) {
      return {
        typeUrl: "/pryzm.amm.MsgSetWhitelistedRouteEnabled",
        value
      };
    },
    submitOrder(value: MsgSubmitOrder) {
      return {
        typeUrl: "/pryzm.amm.MsgSubmitOrder",
        value
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelOrder",
        value
      };
    },
    proposeMatch(value: MsgProposeMatch) {
      return {
        typeUrl: "/pryzm.amm.MsgProposeMatch",
        value
      };
    },
    setCircuitBreakers(value: MsgSetCircuitBreakers) {
      return {
        typeUrl: "/pryzm.amm.MsgSetCircuitBreakers",
        value
      };
    },
    setRecoveryMode(value: MsgSetRecoveryMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetRecoveryMode",
        value
      };
    },
    recoveryExit(value: MsgRecoveryExit) {
      return {
        typeUrl: "/pryzm.amm.MsgRecoveryExit",
        value
      };
    },
    setPauseMode(value: MsgSetPauseMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetPauseMode",
        value
      };
    },
    setVaultPauseMode(value: MsgSetVaultPauseMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetVaultPauseMode",
        value
      };
    },
    createOraclePricePair(value: MsgCreateOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateOraclePricePair",
        value
      };
    },
    updateOraclePricePair(value: MsgUpdateOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateOraclePricePair",
        value
      };
    },
    deleteOraclePricePair(value: MsgDeleteOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgDeleteOraclePricePair",
        value
      };
    },
    setSwapProtocolFee(value: MsgSetSwapProtocolFee) {
      return {
        typeUrl: "/pryzm.amm.MsgSetSwapProtocolFee",
        value
      };
    },
    setJoinExitProtocolFee(value: MsgSetJoinExitProtocolFee) {
      return {
        typeUrl: "/pryzm.amm.MsgSetJoinExitProtocolFee",
        value
      };
    },
    introduceYammLpToWeightedPool(value: MsgIntroduceYammLpToWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceYammLpToWeightedPool",
        value
      };
    },
    introduceAssetBaseTokenToWeightedPool(value: MsgIntroduceAssetBaseTokenToWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceAssetBaseTokenToWeightedPool",
        value
      };
    },
    cancelPendingTokenIntroduction(value: MsgCancelPendingTokenIntroduction) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelPendingTokenIntroduction",
        value
      };
    },
    removeTokenFromWeightedPool(value: MsgRemoveTokenFromWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgRemoveTokenFromWeightedPool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateParams",
        value
      };
    },
    addMaturityToYamm(value: MsgAddMaturityToYamm) {
      return {
        typeUrl: "/pryzm.amm.MsgAddMaturityToYamm",
        value
      };
    },
    setInitializationAllowList(value: MsgSetInitializationAllowList) {
      return {
        typeUrl: "/pryzm.amm.MsgSetInitializationAllowList",
        value
      };
    }
  },
  toJSON: {
    singleSwap(value: MsgSingleSwap) {
      return {
        typeUrl: "/pryzm.amm.MsgSingleSwap",
        value: MsgSingleSwap.toJSON(value)
      };
    },
    joinAllTokensExactLpt(value: MsgJoinAllTokensExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinAllTokensExactLpt",
        value: MsgJoinAllTokensExactLpt.toJSON(value)
      };
    },
    joinTokenExactLpt(value: MsgJoinTokenExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinTokenExactLpt",
        value: MsgJoinTokenExactLpt.toJSON(value)
      };
    },
    joinExactTokens(value: MsgJoinExactTokens) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinExactTokens",
        value: MsgJoinExactTokens.toJSON(value)
      };
    },
    zeroImpactJoinYamm(value: MsgZeroImpactJoinYamm) {
      return {
        typeUrl: "/pryzm.amm.MsgZeroImpactJoinYamm",
        value: MsgZeroImpactJoinYamm.toJSON(value)
      };
    },
    exitExactTokens(value: MsgExitExactTokens) {
      return {
        typeUrl: "/pryzm.amm.MsgExitExactTokens",
        value: MsgExitExactTokens.toJSON(value)
      };
    },
    exitTokenExactLpt(value: MsgExitTokenExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgExitTokenExactLpt",
        value: MsgExitTokenExactLpt.toJSON(value)
      };
    },
    exitAllTokensExactLpt(value: MsgExitAllTokensExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgExitAllTokensExactLpt",
        value: MsgExitAllTokensExactLpt.toJSON(value)
      };
    },
    createWeightedPool(value: MsgCreateWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateWeightedPool",
        value: MsgCreateWeightedPool.toJSON(value)
      };
    },
    updateSwapFee(value: MsgUpdateSwapFee) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateSwapFee",
        value: MsgUpdateSwapFee.toJSON(value)
      };
    },
    initializePool(value: MsgInitializePool) {
      return {
        typeUrl: "/pryzm.amm.MsgInitializePool",
        value: MsgInitializePool.toJSON(value)
      };
    },
    updateWeights(value: MsgUpdateWeights) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateWeights",
        value: MsgUpdateWeights.toJSON(value)
      };
    },
    batchSwap(value: MsgBatchSwap) {
      return {
        typeUrl: "/pryzm.amm.MsgBatchSwap",
        value: MsgBatchSwap.toJSON(value)
      };
    },
    setYammConfiguration(value: MsgSetYammConfiguration) {
      return {
        typeUrl: "/pryzm.amm.MsgSetYammConfiguration",
        value: MsgSetYammConfiguration.toJSON(value)
      };
    },
    whitelistRoute(value: MsgWhitelistRoute) {
      return {
        typeUrl: "/pryzm.amm.MsgWhitelistRoute",
        value: MsgWhitelistRoute.toJSON(value)
      };
    },
    setWhitelistedRouteEnabled(value: MsgSetWhitelistedRouteEnabled) {
      return {
        typeUrl: "/pryzm.amm.MsgSetWhitelistedRouteEnabled",
        value: MsgSetWhitelistedRouteEnabled.toJSON(value)
      };
    },
    submitOrder(value: MsgSubmitOrder) {
      return {
        typeUrl: "/pryzm.amm.MsgSubmitOrder",
        value: MsgSubmitOrder.toJSON(value)
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelOrder",
        value: MsgCancelOrder.toJSON(value)
      };
    },
    proposeMatch(value: MsgProposeMatch) {
      return {
        typeUrl: "/pryzm.amm.MsgProposeMatch",
        value: MsgProposeMatch.toJSON(value)
      };
    },
    setCircuitBreakers(value: MsgSetCircuitBreakers) {
      return {
        typeUrl: "/pryzm.amm.MsgSetCircuitBreakers",
        value: MsgSetCircuitBreakers.toJSON(value)
      };
    },
    setRecoveryMode(value: MsgSetRecoveryMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetRecoveryMode",
        value: MsgSetRecoveryMode.toJSON(value)
      };
    },
    recoveryExit(value: MsgRecoveryExit) {
      return {
        typeUrl: "/pryzm.amm.MsgRecoveryExit",
        value: MsgRecoveryExit.toJSON(value)
      };
    },
    setPauseMode(value: MsgSetPauseMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetPauseMode",
        value: MsgSetPauseMode.toJSON(value)
      };
    },
    setVaultPauseMode(value: MsgSetVaultPauseMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetVaultPauseMode",
        value: MsgSetVaultPauseMode.toJSON(value)
      };
    },
    createOraclePricePair(value: MsgCreateOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateOraclePricePair",
        value: MsgCreateOraclePricePair.toJSON(value)
      };
    },
    updateOraclePricePair(value: MsgUpdateOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateOraclePricePair",
        value: MsgUpdateOraclePricePair.toJSON(value)
      };
    },
    deleteOraclePricePair(value: MsgDeleteOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgDeleteOraclePricePair",
        value: MsgDeleteOraclePricePair.toJSON(value)
      };
    },
    setSwapProtocolFee(value: MsgSetSwapProtocolFee) {
      return {
        typeUrl: "/pryzm.amm.MsgSetSwapProtocolFee",
        value: MsgSetSwapProtocolFee.toJSON(value)
      };
    },
    setJoinExitProtocolFee(value: MsgSetJoinExitProtocolFee) {
      return {
        typeUrl: "/pryzm.amm.MsgSetJoinExitProtocolFee",
        value: MsgSetJoinExitProtocolFee.toJSON(value)
      };
    },
    introduceYammLpToWeightedPool(value: MsgIntroduceYammLpToWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceYammLpToWeightedPool",
        value: MsgIntroduceYammLpToWeightedPool.toJSON(value)
      };
    },
    introduceAssetBaseTokenToWeightedPool(value: MsgIntroduceAssetBaseTokenToWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceAssetBaseTokenToWeightedPool",
        value: MsgIntroduceAssetBaseTokenToWeightedPool.toJSON(value)
      };
    },
    cancelPendingTokenIntroduction(value: MsgCancelPendingTokenIntroduction) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelPendingTokenIntroduction",
        value: MsgCancelPendingTokenIntroduction.toJSON(value)
      };
    },
    removeTokenFromWeightedPool(value: MsgRemoveTokenFromWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgRemoveTokenFromWeightedPool",
        value: MsgRemoveTokenFromWeightedPool.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    addMaturityToYamm(value: MsgAddMaturityToYamm) {
      return {
        typeUrl: "/pryzm.amm.MsgAddMaturityToYamm",
        value: MsgAddMaturityToYamm.toJSON(value)
      };
    },
    setInitializationAllowList(value: MsgSetInitializationAllowList) {
      return {
        typeUrl: "/pryzm.amm.MsgSetInitializationAllowList",
        value: MsgSetInitializationAllowList.toJSON(value)
      };
    }
  },
  fromJSON: {
    singleSwap(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSingleSwap",
        value: MsgSingleSwap.fromJSON(value)
      };
    },
    joinAllTokensExactLpt(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinAllTokensExactLpt",
        value: MsgJoinAllTokensExactLpt.fromJSON(value)
      };
    },
    joinTokenExactLpt(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinTokenExactLpt",
        value: MsgJoinTokenExactLpt.fromJSON(value)
      };
    },
    joinExactTokens(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinExactTokens",
        value: MsgJoinExactTokens.fromJSON(value)
      };
    },
    zeroImpactJoinYamm(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgZeroImpactJoinYamm",
        value: MsgZeroImpactJoinYamm.fromJSON(value)
      };
    },
    exitExactTokens(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgExitExactTokens",
        value: MsgExitExactTokens.fromJSON(value)
      };
    },
    exitTokenExactLpt(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgExitTokenExactLpt",
        value: MsgExitTokenExactLpt.fromJSON(value)
      };
    },
    exitAllTokensExactLpt(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgExitAllTokensExactLpt",
        value: MsgExitAllTokensExactLpt.fromJSON(value)
      };
    },
    createWeightedPool(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateWeightedPool",
        value: MsgCreateWeightedPool.fromJSON(value)
      };
    },
    updateSwapFee(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateSwapFee",
        value: MsgUpdateSwapFee.fromJSON(value)
      };
    },
    initializePool(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgInitializePool",
        value: MsgInitializePool.fromJSON(value)
      };
    },
    updateWeights(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateWeights",
        value: MsgUpdateWeights.fromJSON(value)
      };
    },
    batchSwap(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgBatchSwap",
        value: MsgBatchSwap.fromJSON(value)
      };
    },
    setYammConfiguration(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetYammConfiguration",
        value: MsgSetYammConfiguration.fromJSON(value)
      };
    },
    whitelistRoute(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgWhitelistRoute",
        value: MsgWhitelistRoute.fromJSON(value)
      };
    },
    setWhitelistedRouteEnabled(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetWhitelistedRouteEnabled",
        value: MsgSetWhitelistedRouteEnabled.fromJSON(value)
      };
    },
    submitOrder(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSubmitOrder",
        value: MsgSubmitOrder.fromJSON(value)
      };
    },
    cancelOrder(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelOrder",
        value: MsgCancelOrder.fromJSON(value)
      };
    },
    proposeMatch(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgProposeMatch",
        value: MsgProposeMatch.fromJSON(value)
      };
    },
    setCircuitBreakers(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetCircuitBreakers",
        value: MsgSetCircuitBreakers.fromJSON(value)
      };
    },
    setRecoveryMode(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetRecoveryMode",
        value: MsgSetRecoveryMode.fromJSON(value)
      };
    },
    recoveryExit(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgRecoveryExit",
        value: MsgRecoveryExit.fromJSON(value)
      };
    },
    setPauseMode(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetPauseMode",
        value: MsgSetPauseMode.fromJSON(value)
      };
    },
    setVaultPauseMode(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetVaultPauseMode",
        value: MsgSetVaultPauseMode.fromJSON(value)
      };
    },
    createOraclePricePair(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateOraclePricePair",
        value: MsgCreateOraclePricePair.fromJSON(value)
      };
    },
    updateOraclePricePair(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateOraclePricePair",
        value: MsgUpdateOraclePricePair.fromJSON(value)
      };
    },
    deleteOraclePricePair(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgDeleteOraclePricePair",
        value: MsgDeleteOraclePricePair.fromJSON(value)
      };
    },
    setSwapProtocolFee(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetSwapProtocolFee",
        value: MsgSetSwapProtocolFee.fromJSON(value)
      };
    },
    setJoinExitProtocolFee(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetJoinExitProtocolFee",
        value: MsgSetJoinExitProtocolFee.fromJSON(value)
      };
    },
    introduceYammLpToWeightedPool(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceYammLpToWeightedPool",
        value: MsgIntroduceYammLpToWeightedPool.fromJSON(value)
      };
    },
    introduceAssetBaseTokenToWeightedPool(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceAssetBaseTokenToWeightedPool",
        value: MsgIntroduceAssetBaseTokenToWeightedPool.fromJSON(value)
      };
    },
    cancelPendingTokenIntroduction(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelPendingTokenIntroduction",
        value: MsgCancelPendingTokenIntroduction.fromJSON(value)
      };
    },
    removeTokenFromWeightedPool(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgRemoveTokenFromWeightedPool",
        value: MsgRemoveTokenFromWeightedPool.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    addMaturityToYamm(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgAddMaturityToYamm",
        value: MsgAddMaturityToYamm.fromJSON(value)
      };
    },
    setInitializationAllowList(value: any) {
      return {
        typeUrl: "/pryzm.amm.MsgSetInitializationAllowList",
        value: MsgSetInitializationAllowList.fromJSON(value)
      };
    }
  },
  fromPartial: {
    singleSwap(value: MsgSingleSwap) {
      return {
        typeUrl: "/pryzm.amm.MsgSingleSwap",
        value: MsgSingleSwap.fromPartial(value)
      };
    },
    joinAllTokensExactLpt(value: MsgJoinAllTokensExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinAllTokensExactLpt",
        value: MsgJoinAllTokensExactLpt.fromPartial(value)
      };
    },
    joinTokenExactLpt(value: MsgJoinTokenExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinTokenExactLpt",
        value: MsgJoinTokenExactLpt.fromPartial(value)
      };
    },
    joinExactTokens(value: MsgJoinExactTokens) {
      return {
        typeUrl: "/pryzm.amm.MsgJoinExactTokens",
        value: MsgJoinExactTokens.fromPartial(value)
      };
    },
    zeroImpactJoinYamm(value: MsgZeroImpactJoinYamm) {
      return {
        typeUrl: "/pryzm.amm.MsgZeroImpactJoinYamm",
        value: MsgZeroImpactJoinYamm.fromPartial(value)
      };
    },
    exitExactTokens(value: MsgExitExactTokens) {
      return {
        typeUrl: "/pryzm.amm.MsgExitExactTokens",
        value: MsgExitExactTokens.fromPartial(value)
      };
    },
    exitTokenExactLpt(value: MsgExitTokenExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgExitTokenExactLpt",
        value: MsgExitTokenExactLpt.fromPartial(value)
      };
    },
    exitAllTokensExactLpt(value: MsgExitAllTokensExactLpt) {
      return {
        typeUrl: "/pryzm.amm.MsgExitAllTokensExactLpt",
        value: MsgExitAllTokensExactLpt.fromPartial(value)
      };
    },
    createWeightedPool(value: MsgCreateWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateWeightedPool",
        value: MsgCreateWeightedPool.fromPartial(value)
      };
    },
    updateSwapFee(value: MsgUpdateSwapFee) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateSwapFee",
        value: MsgUpdateSwapFee.fromPartial(value)
      };
    },
    initializePool(value: MsgInitializePool) {
      return {
        typeUrl: "/pryzm.amm.MsgInitializePool",
        value: MsgInitializePool.fromPartial(value)
      };
    },
    updateWeights(value: MsgUpdateWeights) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateWeights",
        value: MsgUpdateWeights.fromPartial(value)
      };
    },
    batchSwap(value: MsgBatchSwap) {
      return {
        typeUrl: "/pryzm.amm.MsgBatchSwap",
        value: MsgBatchSwap.fromPartial(value)
      };
    },
    setYammConfiguration(value: MsgSetYammConfiguration) {
      return {
        typeUrl: "/pryzm.amm.MsgSetYammConfiguration",
        value: MsgSetYammConfiguration.fromPartial(value)
      };
    },
    whitelistRoute(value: MsgWhitelistRoute) {
      return {
        typeUrl: "/pryzm.amm.MsgWhitelistRoute",
        value: MsgWhitelistRoute.fromPartial(value)
      };
    },
    setWhitelistedRouteEnabled(value: MsgSetWhitelistedRouteEnabled) {
      return {
        typeUrl: "/pryzm.amm.MsgSetWhitelistedRouteEnabled",
        value: MsgSetWhitelistedRouteEnabled.fromPartial(value)
      };
    },
    submitOrder(value: MsgSubmitOrder) {
      return {
        typeUrl: "/pryzm.amm.MsgSubmitOrder",
        value: MsgSubmitOrder.fromPartial(value)
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },
    proposeMatch(value: MsgProposeMatch) {
      return {
        typeUrl: "/pryzm.amm.MsgProposeMatch",
        value: MsgProposeMatch.fromPartial(value)
      };
    },
    setCircuitBreakers(value: MsgSetCircuitBreakers) {
      return {
        typeUrl: "/pryzm.amm.MsgSetCircuitBreakers",
        value: MsgSetCircuitBreakers.fromPartial(value)
      };
    },
    setRecoveryMode(value: MsgSetRecoveryMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetRecoveryMode",
        value: MsgSetRecoveryMode.fromPartial(value)
      };
    },
    recoveryExit(value: MsgRecoveryExit) {
      return {
        typeUrl: "/pryzm.amm.MsgRecoveryExit",
        value: MsgRecoveryExit.fromPartial(value)
      };
    },
    setPauseMode(value: MsgSetPauseMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetPauseMode",
        value: MsgSetPauseMode.fromPartial(value)
      };
    },
    setVaultPauseMode(value: MsgSetVaultPauseMode) {
      return {
        typeUrl: "/pryzm.amm.MsgSetVaultPauseMode",
        value: MsgSetVaultPauseMode.fromPartial(value)
      };
    },
    createOraclePricePair(value: MsgCreateOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgCreateOraclePricePair",
        value: MsgCreateOraclePricePair.fromPartial(value)
      };
    },
    updateOraclePricePair(value: MsgUpdateOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateOraclePricePair",
        value: MsgUpdateOraclePricePair.fromPartial(value)
      };
    },
    deleteOraclePricePair(value: MsgDeleteOraclePricePair) {
      return {
        typeUrl: "/pryzm.amm.MsgDeleteOraclePricePair",
        value: MsgDeleteOraclePricePair.fromPartial(value)
      };
    },
    setSwapProtocolFee(value: MsgSetSwapProtocolFee) {
      return {
        typeUrl: "/pryzm.amm.MsgSetSwapProtocolFee",
        value: MsgSetSwapProtocolFee.fromPartial(value)
      };
    },
    setJoinExitProtocolFee(value: MsgSetJoinExitProtocolFee) {
      return {
        typeUrl: "/pryzm.amm.MsgSetJoinExitProtocolFee",
        value: MsgSetJoinExitProtocolFee.fromPartial(value)
      };
    },
    introduceYammLpToWeightedPool(value: MsgIntroduceYammLpToWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceYammLpToWeightedPool",
        value: MsgIntroduceYammLpToWeightedPool.fromPartial(value)
      };
    },
    introduceAssetBaseTokenToWeightedPool(value: MsgIntroduceAssetBaseTokenToWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgIntroduceAssetBaseTokenToWeightedPool",
        value: MsgIntroduceAssetBaseTokenToWeightedPool.fromPartial(value)
      };
    },
    cancelPendingTokenIntroduction(value: MsgCancelPendingTokenIntroduction) {
      return {
        typeUrl: "/pryzm.amm.MsgCancelPendingTokenIntroduction",
        value: MsgCancelPendingTokenIntroduction.fromPartial(value)
      };
    },
    removeTokenFromWeightedPool(value: MsgRemoveTokenFromWeightedPool) {
      return {
        typeUrl: "/pryzm.amm.MsgRemoveTokenFromWeightedPool",
        value: MsgRemoveTokenFromWeightedPool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pryzm.amm.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    addMaturityToYamm(value: MsgAddMaturityToYamm) {
      return {
        typeUrl: "/pryzm.amm.MsgAddMaturityToYamm",
        value: MsgAddMaturityToYamm.fromPartial(value)
      };
    },
    setInitializationAllowList(value: MsgSetInitializationAllowList) {
      return {
        typeUrl: "/pryzm.amm.MsgSetInitializationAllowList",
        value: MsgSetInitializationAllowList.fromPartial(value)
      };
    }
  }
};