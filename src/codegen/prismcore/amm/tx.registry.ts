import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSingleSwap, MsgJoinAllTokensExactLpt, MsgJoinTokenExactLpt, MsgJoinExactTokens, MsgExitExactTokens, MsgExitTokenExactLpt, MsgExitAllTokensExactLpt, MsgCreateWeightedPool, MsgUpdateSwapFee, MsgInitializePool, MsgUpdateWeights, MsgBatchSwap, MsgSetYammConfiguration, MsgWhitelistRoute, MsgSetWhitelistedRouteEnabled, MsgSubmitOrder, MsgCancelOrder, MsgProposeMatch, MsgSetCircuitBreakers, MsgSetRecoveryMode, MsgRecoveryExit, MsgSetPauseMode, MsgSetVaultPauseMode, MsgCreateOraclePricePair, MsgUpdateOraclePricePair, MsgDeleteOraclePricePair, MsgSetSwapProtocolFee, MsgSetJoinExitProtocolFee, MsgIntroduceYammLpToWeightedPool, MsgCancelPendingTokenIntroduction, MsgRemoveTokenFromWeightedPool, MsgUpdateParams, MsgAddMaturityToYamm, MsgSetInitializationAllowList } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prismfinance.prismcore.amm.MsgSingleSwap", MsgSingleSwap], ["/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt", MsgJoinAllTokensExactLpt], ["/prismfinance.prismcore.amm.MsgJoinTokenExactLpt", MsgJoinTokenExactLpt], ["/prismfinance.prismcore.amm.MsgJoinExactTokens", MsgJoinExactTokens], ["/prismfinance.prismcore.amm.MsgExitExactTokens", MsgExitExactTokens], ["/prismfinance.prismcore.amm.MsgExitTokenExactLpt", MsgExitTokenExactLpt], ["/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt", MsgExitAllTokensExactLpt], ["/prismfinance.prismcore.amm.MsgCreateWeightedPool", MsgCreateWeightedPool], ["/prismfinance.prismcore.amm.MsgUpdateSwapFee", MsgUpdateSwapFee], ["/prismfinance.prismcore.amm.MsgInitializePool", MsgInitializePool], ["/prismfinance.prismcore.amm.MsgUpdateWeights", MsgUpdateWeights], ["/prismfinance.prismcore.amm.MsgBatchSwap", MsgBatchSwap], ["/prismfinance.prismcore.amm.MsgSetYammConfiguration", MsgSetYammConfiguration], ["/prismfinance.prismcore.amm.MsgWhitelistRoute", MsgWhitelistRoute], ["/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled", MsgSetWhitelistedRouteEnabled], ["/prismfinance.prismcore.amm.MsgSubmitOrder", MsgSubmitOrder], ["/prismfinance.prismcore.amm.MsgCancelOrder", MsgCancelOrder], ["/prismfinance.prismcore.amm.MsgProposeMatch", MsgProposeMatch], ["/prismfinance.prismcore.amm.MsgSetCircuitBreakers", MsgSetCircuitBreakers], ["/prismfinance.prismcore.amm.MsgSetRecoveryMode", MsgSetRecoveryMode], ["/prismfinance.prismcore.amm.MsgRecoveryExit", MsgRecoveryExit], ["/prismfinance.prismcore.amm.MsgSetPauseMode", MsgSetPauseMode], ["/prismfinance.prismcore.amm.MsgSetVaultPauseMode", MsgSetVaultPauseMode], ["/prismfinance.prismcore.amm.MsgCreateOraclePricePair", MsgCreateOraclePricePair], ["/prismfinance.prismcore.amm.MsgUpdateOraclePricePair", MsgUpdateOraclePricePair], ["/prismfinance.prismcore.amm.MsgDeleteOraclePricePair", MsgDeleteOraclePricePair], ["/prismfinance.prismcore.amm.MsgSetSwapProtocolFee", MsgSetSwapProtocolFee], ["/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee", MsgSetJoinExitProtocolFee], ["/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool", MsgIntroduceYammLpToWeightedPool], ["/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction", MsgCancelPendingTokenIntroduction], ["/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool", MsgRemoveTokenFromWeightedPool], ["/prismfinance.prismcore.amm.MsgUpdateParams", MsgUpdateParams], ["/prismfinance.prismcore.amm.MsgAddMaturityToYamm", MsgAddMaturityToYamm], ["/prismfinance.prismcore.amm.MsgSetInitializationAllowList", MsgSetInitializationAllowList]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    singleSwap(value: MsgSingleSwap) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSingleSwap",
        value: MsgSingleSwap.encode(value).finish()
      };
    },
    joinAllTokensExactLpt(value: MsgJoinAllTokensExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt",
        value: MsgJoinAllTokensExactLpt.encode(value).finish()
      };
    },
    joinTokenExactLpt(value: MsgJoinTokenExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinTokenExactLpt",
        value: MsgJoinTokenExactLpt.encode(value).finish()
      };
    },
    joinExactTokens(value: MsgJoinExactTokens) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinExactTokens",
        value: MsgJoinExactTokens.encode(value).finish()
      };
    },
    exitExactTokens(value: MsgExitExactTokens) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitExactTokens",
        value: MsgExitExactTokens.encode(value).finish()
      };
    },
    exitTokenExactLpt(value: MsgExitTokenExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitTokenExactLpt",
        value: MsgExitTokenExactLpt.encode(value).finish()
      };
    },
    exitAllTokensExactLpt(value: MsgExitAllTokensExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt",
        value: MsgExitAllTokensExactLpt.encode(value).finish()
      };
    },
    createWeightedPool(value: MsgCreateWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateWeightedPool",
        value: MsgCreateWeightedPool.encode(value).finish()
      };
    },
    updateSwapFee(value: MsgUpdateSwapFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateSwapFee",
        value: MsgUpdateSwapFee.encode(value).finish()
      };
    },
    initializePool(value: MsgInitializePool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgInitializePool",
        value: MsgInitializePool.encode(value).finish()
      };
    },
    updateWeights(value: MsgUpdateWeights) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateWeights",
        value: MsgUpdateWeights.encode(value).finish()
      };
    },
    batchSwap(value: MsgBatchSwap) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgBatchSwap",
        value: MsgBatchSwap.encode(value).finish()
      };
    },
    setYammConfiguration(value: MsgSetYammConfiguration) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetYammConfiguration",
        value: MsgSetYammConfiguration.encode(value).finish()
      };
    },
    whitelistRoute(value: MsgWhitelistRoute) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgWhitelistRoute",
        value: MsgWhitelistRoute.encode(value).finish()
      };
    },
    setWhitelistedRouteEnabled(value: MsgSetWhitelistedRouteEnabled) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled",
        value: MsgSetWhitelistedRouteEnabled.encode(value).finish()
      };
    },
    submitOrder(value: MsgSubmitOrder) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSubmitOrder",
        value: MsgSubmitOrder.encode(value).finish()
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },
    proposeMatch(value: MsgProposeMatch) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgProposeMatch",
        value: MsgProposeMatch.encode(value).finish()
      };
    },
    setCircuitBreakers(value: MsgSetCircuitBreakers) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetCircuitBreakers",
        value: MsgSetCircuitBreakers.encode(value).finish()
      };
    },
    setRecoveryMode(value: MsgSetRecoveryMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetRecoveryMode",
        value: MsgSetRecoveryMode.encode(value).finish()
      };
    },
    recoveryExit(value: MsgRecoveryExit) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRecoveryExit",
        value: MsgRecoveryExit.encode(value).finish()
      };
    },
    setPauseMode(value: MsgSetPauseMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetPauseMode",
        value: MsgSetPauseMode.encode(value).finish()
      };
    },
    setVaultPauseMode(value: MsgSetVaultPauseMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetVaultPauseMode",
        value: MsgSetVaultPauseMode.encode(value).finish()
      };
    },
    createOraclePricePair(value: MsgCreateOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateOraclePricePair",
        value: MsgCreateOraclePricePair.encode(value).finish()
      };
    },
    updateOraclePricePair(value: MsgUpdateOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateOraclePricePair",
        value: MsgUpdateOraclePricePair.encode(value).finish()
      };
    },
    deleteOraclePricePair(value: MsgDeleteOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgDeleteOraclePricePair",
        value: MsgDeleteOraclePricePair.encode(value).finish()
      };
    },
    setSwapProtocolFee(value: MsgSetSwapProtocolFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetSwapProtocolFee",
        value: MsgSetSwapProtocolFee.encode(value).finish()
      };
    },
    setJoinExitProtocolFee(value: MsgSetJoinExitProtocolFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee",
        value: MsgSetJoinExitProtocolFee.encode(value).finish()
      };
    },
    introduceYammLpToWeightedPool(value: MsgIntroduceYammLpToWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool",
        value: MsgIntroduceYammLpToWeightedPool.encode(value).finish()
      };
    },
    cancelPendingTokenIntroduction(value: MsgCancelPendingTokenIntroduction) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction",
        value: MsgCancelPendingTokenIntroduction.encode(value).finish()
      };
    },
    removeTokenFromWeightedPool(value: MsgRemoveTokenFromWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool",
        value: MsgRemoveTokenFromWeightedPool.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    addMaturityToYamm(value: MsgAddMaturityToYamm) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgAddMaturityToYamm",
        value: MsgAddMaturityToYamm.encode(value).finish()
      };
    },
    setInitializationAllowList(value: MsgSetInitializationAllowList) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetInitializationAllowList",
        value: MsgSetInitializationAllowList.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    singleSwap(value: MsgSingleSwap) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSingleSwap",
        value
      };
    },
    joinAllTokensExactLpt(value: MsgJoinAllTokensExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt",
        value
      };
    },
    joinTokenExactLpt(value: MsgJoinTokenExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinTokenExactLpt",
        value
      };
    },
    joinExactTokens(value: MsgJoinExactTokens) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinExactTokens",
        value
      };
    },
    exitExactTokens(value: MsgExitExactTokens) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitExactTokens",
        value
      };
    },
    exitTokenExactLpt(value: MsgExitTokenExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitTokenExactLpt",
        value
      };
    },
    exitAllTokensExactLpt(value: MsgExitAllTokensExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt",
        value
      };
    },
    createWeightedPool(value: MsgCreateWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateWeightedPool",
        value
      };
    },
    updateSwapFee(value: MsgUpdateSwapFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateSwapFee",
        value
      };
    },
    initializePool(value: MsgInitializePool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgInitializePool",
        value
      };
    },
    updateWeights(value: MsgUpdateWeights) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateWeights",
        value
      };
    },
    batchSwap(value: MsgBatchSwap) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgBatchSwap",
        value
      };
    },
    setYammConfiguration(value: MsgSetYammConfiguration) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetYammConfiguration",
        value
      };
    },
    whitelistRoute(value: MsgWhitelistRoute) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgWhitelistRoute",
        value
      };
    },
    setWhitelistedRouteEnabled(value: MsgSetWhitelistedRouteEnabled) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled",
        value
      };
    },
    submitOrder(value: MsgSubmitOrder) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSubmitOrder",
        value
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelOrder",
        value
      };
    },
    proposeMatch(value: MsgProposeMatch) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgProposeMatch",
        value
      };
    },
    setCircuitBreakers(value: MsgSetCircuitBreakers) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetCircuitBreakers",
        value
      };
    },
    setRecoveryMode(value: MsgSetRecoveryMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetRecoveryMode",
        value
      };
    },
    recoveryExit(value: MsgRecoveryExit) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRecoveryExit",
        value
      };
    },
    setPauseMode(value: MsgSetPauseMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetPauseMode",
        value
      };
    },
    setVaultPauseMode(value: MsgSetVaultPauseMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetVaultPauseMode",
        value
      };
    },
    createOraclePricePair(value: MsgCreateOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateOraclePricePair",
        value
      };
    },
    updateOraclePricePair(value: MsgUpdateOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateOraclePricePair",
        value
      };
    },
    deleteOraclePricePair(value: MsgDeleteOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgDeleteOraclePricePair",
        value
      };
    },
    setSwapProtocolFee(value: MsgSetSwapProtocolFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetSwapProtocolFee",
        value
      };
    },
    setJoinExitProtocolFee(value: MsgSetJoinExitProtocolFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee",
        value
      };
    },
    introduceYammLpToWeightedPool(value: MsgIntroduceYammLpToWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool",
        value
      };
    },
    cancelPendingTokenIntroduction(value: MsgCancelPendingTokenIntroduction) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction",
        value
      };
    },
    removeTokenFromWeightedPool(value: MsgRemoveTokenFromWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateParams",
        value
      };
    },
    addMaturityToYamm(value: MsgAddMaturityToYamm) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgAddMaturityToYamm",
        value
      };
    },
    setInitializationAllowList(value: MsgSetInitializationAllowList) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetInitializationAllowList",
        value
      };
    }
  },
  toJSON: {
    singleSwap(value: MsgSingleSwap) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSingleSwap",
        value: MsgSingleSwap.toJSON(value)
      };
    },
    joinAllTokensExactLpt(value: MsgJoinAllTokensExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt",
        value: MsgJoinAllTokensExactLpt.toJSON(value)
      };
    },
    joinTokenExactLpt(value: MsgJoinTokenExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinTokenExactLpt",
        value: MsgJoinTokenExactLpt.toJSON(value)
      };
    },
    joinExactTokens(value: MsgJoinExactTokens) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinExactTokens",
        value: MsgJoinExactTokens.toJSON(value)
      };
    },
    exitExactTokens(value: MsgExitExactTokens) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitExactTokens",
        value: MsgExitExactTokens.toJSON(value)
      };
    },
    exitTokenExactLpt(value: MsgExitTokenExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitTokenExactLpt",
        value: MsgExitTokenExactLpt.toJSON(value)
      };
    },
    exitAllTokensExactLpt(value: MsgExitAllTokensExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt",
        value: MsgExitAllTokensExactLpt.toJSON(value)
      };
    },
    createWeightedPool(value: MsgCreateWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateWeightedPool",
        value: MsgCreateWeightedPool.toJSON(value)
      };
    },
    updateSwapFee(value: MsgUpdateSwapFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateSwapFee",
        value: MsgUpdateSwapFee.toJSON(value)
      };
    },
    initializePool(value: MsgInitializePool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgInitializePool",
        value: MsgInitializePool.toJSON(value)
      };
    },
    updateWeights(value: MsgUpdateWeights) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateWeights",
        value: MsgUpdateWeights.toJSON(value)
      };
    },
    batchSwap(value: MsgBatchSwap) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgBatchSwap",
        value: MsgBatchSwap.toJSON(value)
      };
    },
    setYammConfiguration(value: MsgSetYammConfiguration) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetYammConfiguration",
        value: MsgSetYammConfiguration.toJSON(value)
      };
    },
    whitelistRoute(value: MsgWhitelistRoute) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgWhitelistRoute",
        value: MsgWhitelistRoute.toJSON(value)
      };
    },
    setWhitelistedRouteEnabled(value: MsgSetWhitelistedRouteEnabled) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled",
        value: MsgSetWhitelistedRouteEnabled.toJSON(value)
      };
    },
    submitOrder(value: MsgSubmitOrder) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSubmitOrder",
        value: MsgSubmitOrder.toJSON(value)
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelOrder",
        value: MsgCancelOrder.toJSON(value)
      };
    },
    proposeMatch(value: MsgProposeMatch) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgProposeMatch",
        value: MsgProposeMatch.toJSON(value)
      };
    },
    setCircuitBreakers(value: MsgSetCircuitBreakers) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetCircuitBreakers",
        value: MsgSetCircuitBreakers.toJSON(value)
      };
    },
    setRecoveryMode(value: MsgSetRecoveryMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetRecoveryMode",
        value: MsgSetRecoveryMode.toJSON(value)
      };
    },
    recoveryExit(value: MsgRecoveryExit) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRecoveryExit",
        value: MsgRecoveryExit.toJSON(value)
      };
    },
    setPauseMode(value: MsgSetPauseMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetPauseMode",
        value: MsgSetPauseMode.toJSON(value)
      };
    },
    setVaultPauseMode(value: MsgSetVaultPauseMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetVaultPauseMode",
        value: MsgSetVaultPauseMode.toJSON(value)
      };
    },
    createOraclePricePair(value: MsgCreateOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateOraclePricePair",
        value: MsgCreateOraclePricePair.toJSON(value)
      };
    },
    updateOraclePricePair(value: MsgUpdateOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateOraclePricePair",
        value: MsgUpdateOraclePricePair.toJSON(value)
      };
    },
    deleteOraclePricePair(value: MsgDeleteOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgDeleteOraclePricePair",
        value: MsgDeleteOraclePricePair.toJSON(value)
      };
    },
    setSwapProtocolFee(value: MsgSetSwapProtocolFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetSwapProtocolFee",
        value: MsgSetSwapProtocolFee.toJSON(value)
      };
    },
    setJoinExitProtocolFee(value: MsgSetJoinExitProtocolFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee",
        value: MsgSetJoinExitProtocolFee.toJSON(value)
      };
    },
    introduceYammLpToWeightedPool(value: MsgIntroduceYammLpToWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool",
        value: MsgIntroduceYammLpToWeightedPool.toJSON(value)
      };
    },
    cancelPendingTokenIntroduction(value: MsgCancelPendingTokenIntroduction) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction",
        value: MsgCancelPendingTokenIntroduction.toJSON(value)
      };
    },
    removeTokenFromWeightedPool(value: MsgRemoveTokenFromWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool",
        value: MsgRemoveTokenFromWeightedPool.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    addMaturityToYamm(value: MsgAddMaturityToYamm) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgAddMaturityToYamm",
        value: MsgAddMaturityToYamm.toJSON(value)
      };
    },
    setInitializationAllowList(value: MsgSetInitializationAllowList) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetInitializationAllowList",
        value: MsgSetInitializationAllowList.toJSON(value)
      };
    }
  },
  fromJSON: {
    singleSwap(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSingleSwap",
        value: MsgSingleSwap.fromJSON(value)
      };
    },
    joinAllTokensExactLpt(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt",
        value: MsgJoinAllTokensExactLpt.fromJSON(value)
      };
    },
    joinTokenExactLpt(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinTokenExactLpt",
        value: MsgJoinTokenExactLpt.fromJSON(value)
      };
    },
    joinExactTokens(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinExactTokens",
        value: MsgJoinExactTokens.fromJSON(value)
      };
    },
    exitExactTokens(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitExactTokens",
        value: MsgExitExactTokens.fromJSON(value)
      };
    },
    exitTokenExactLpt(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitTokenExactLpt",
        value: MsgExitTokenExactLpt.fromJSON(value)
      };
    },
    exitAllTokensExactLpt(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt",
        value: MsgExitAllTokensExactLpt.fromJSON(value)
      };
    },
    createWeightedPool(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateWeightedPool",
        value: MsgCreateWeightedPool.fromJSON(value)
      };
    },
    updateSwapFee(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateSwapFee",
        value: MsgUpdateSwapFee.fromJSON(value)
      };
    },
    initializePool(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgInitializePool",
        value: MsgInitializePool.fromJSON(value)
      };
    },
    updateWeights(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateWeights",
        value: MsgUpdateWeights.fromJSON(value)
      };
    },
    batchSwap(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgBatchSwap",
        value: MsgBatchSwap.fromJSON(value)
      };
    },
    setYammConfiguration(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetYammConfiguration",
        value: MsgSetYammConfiguration.fromJSON(value)
      };
    },
    whitelistRoute(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgWhitelistRoute",
        value: MsgWhitelistRoute.fromJSON(value)
      };
    },
    setWhitelistedRouteEnabled(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled",
        value: MsgSetWhitelistedRouteEnabled.fromJSON(value)
      };
    },
    submitOrder(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSubmitOrder",
        value: MsgSubmitOrder.fromJSON(value)
      };
    },
    cancelOrder(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelOrder",
        value: MsgCancelOrder.fromJSON(value)
      };
    },
    proposeMatch(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgProposeMatch",
        value: MsgProposeMatch.fromJSON(value)
      };
    },
    setCircuitBreakers(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetCircuitBreakers",
        value: MsgSetCircuitBreakers.fromJSON(value)
      };
    },
    setRecoveryMode(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetRecoveryMode",
        value: MsgSetRecoveryMode.fromJSON(value)
      };
    },
    recoveryExit(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRecoveryExit",
        value: MsgRecoveryExit.fromJSON(value)
      };
    },
    setPauseMode(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetPauseMode",
        value: MsgSetPauseMode.fromJSON(value)
      };
    },
    setVaultPauseMode(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetVaultPauseMode",
        value: MsgSetVaultPauseMode.fromJSON(value)
      };
    },
    createOraclePricePair(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateOraclePricePair",
        value: MsgCreateOraclePricePair.fromJSON(value)
      };
    },
    updateOraclePricePair(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateOraclePricePair",
        value: MsgUpdateOraclePricePair.fromJSON(value)
      };
    },
    deleteOraclePricePair(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgDeleteOraclePricePair",
        value: MsgDeleteOraclePricePair.fromJSON(value)
      };
    },
    setSwapProtocolFee(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetSwapProtocolFee",
        value: MsgSetSwapProtocolFee.fromJSON(value)
      };
    },
    setJoinExitProtocolFee(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee",
        value: MsgSetJoinExitProtocolFee.fromJSON(value)
      };
    },
    introduceYammLpToWeightedPool(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool",
        value: MsgIntroduceYammLpToWeightedPool.fromJSON(value)
      };
    },
    cancelPendingTokenIntroduction(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction",
        value: MsgCancelPendingTokenIntroduction.fromJSON(value)
      };
    },
    removeTokenFromWeightedPool(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool",
        value: MsgRemoveTokenFromWeightedPool.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    addMaturityToYamm(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgAddMaturityToYamm",
        value: MsgAddMaturityToYamm.fromJSON(value)
      };
    },
    setInitializationAllowList(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetInitializationAllowList",
        value: MsgSetInitializationAllowList.fromJSON(value)
      };
    }
  },
  fromPartial: {
    singleSwap(value: MsgSingleSwap) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSingleSwap",
        value: MsgSingleSwap.fromPartial(value)
      };
    },
    joinAllTokensExactLpt(value: MsgJoinAllTokensExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt",
        value: MsgJoinAllTokensExactLpt.fromPartial(value)
      };
    },
    joinTokenExactLpt(value: MsgJoinTokenExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinTokenExactLpt",
        value: MsgJoinTokenExactLpt.fromPartial(value)
      };
    },
    joinExactTokens(value: MsgJoinExactTokens) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgJoinExactTokens",
        value: MsgJoinExactTokens.fromPartial(value)
      };
    },
    exitExactTokens(value: MsgExitExactTokens) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitExactTokens",
        value: MsgExitExactTokens.fromPartial(value)
      };
    },
    exitTokenExactLpt(value: MsgExitTokenExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitTokenExactLpt",
        value: MsgExitTokenExactLpt.fromPartial(value)
      };
    },
    exitAllTokensExactLpt(value: MsgExitAllTokensExactLpt) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt",
        value: MsgExitAllTokensExactLpt.fromPartial(value)
      };
    },
    createWeightedPool(value: MsgCreateWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateWeightedPool",
        value: MsgCreateWeightedPool.fromPartial(value)
      };
    },
    updateSwapFee(value: MsgUpdateSwapFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateSwapFee",
        value: MsgUpdateSwapFee.fromPartial(value)
      };
    },
    initializePool(value: MsgInitializePool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgInitializePool",
        value: MsgInitializePool.fromPartial(value)
      };
    },
    updateWeights(value: MsgUpdateWeights) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateWeights",
        value: MsgUpdateWeights.fromPartial(value)
      };
    },
    batchSwap(value: MsgBatchSwap) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgBatchSwap",
        value: MsgBatchSwap.fromPartial(value)
      };
    },
    setYammConfiguration(value: MsgSetYammConfiguration) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetYammConfiguration",
        value: MsgSetYammConfiguration.fromPartial(value)
      };
    },
    whitelistRoute(value: MsgWhitelistRoute) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgWhitelistRoute",
        value: MsgWhitelistRoute.fromPartial(value)
      };
    },
    setWhitelistedRouteEnabled(value: MsgSetWhitelistedRouteEnabled) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled",
        value: MsgSetWhitelistedRouteEnabled.fromPartial(value)
      };
    },
    submitOrder(value: MsgSubmitOrder) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSubmitOrder",
        value: MsgSubmitOrder.fromPartial(value)
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },
    proposeMatch(value: MsgProposeMatch) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgProposeMatch",
        value: MsgProposeMatch.fromPartial(value)
      };
    },
    setCircuitBreakers(value: MsgSetCircuitBreakers) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetCircuitBreakers",
        value: MsgSetCircuitBreakers.fromPartial(value)
      };
    },
    setRecoveryMode(value: MsgSetRecoveryMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetRecoveryMode",
        value: MsgSetRecoveryMode.fromPartial(value)
      };
    },
    recoveryExit(value: MsgRecoveryExit) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRecoveryExit",
        value: MsgRecoveryExit.fromPartial(value)
      };
    },
    setPauseMode(value: MsgSetPauseMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetPauseMode",
        value: MsgSetPauseMode.fromPartial(value)
      };
    },
    setVaultPauseMode(value: MsgSetVaultPauseMode) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetVaultPauseMode",
        value: MsgSetVaultPauseMode.fromPartial(value)
      };
    },
    createOraclePricePair(value: MsgCreateOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCreateOraclePricePair",
        value: MsgCreateOraclePricePair.fromPartial(value)
      };
    },
    updateOraclePricePair(value: MsgUpdateOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateOraclePricePair",
        value: MsgUpdateOraclePricePair.fromPartial(value)
      };
    },
    deleteOraclePricePair(value: MsgDeleteOraclePricePair) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgDeleteOraclePricePair",
        value: MsgDeleteOraclePricePair.fromPartial(value)
      };
    },
    setSwapProtocolFee(value: MsgSetSwapProtocolFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetSwapProtocolFee",
        value: MsgSetSwapProtocolFee.fromPartial(value)
      };
    },
    setJoinExitProtocolFee(value: MsgSetJoinExitProtocolFee) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee",
        value: MsgSetJoinExitProtocolFee.fromPartial(value)
      };
    },
    introduceYammLpToWeightedPool(value: MsgIntroduceYammLpToWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool",
        value: MsgIntroduceYammLpToWeightedPool.fromPartial(value)
      };
    },
    cancelPendingTokenIntroduction(value: MsgCancelPendingTokenIntroduction) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction",
        value: MsgCancelPendingTokenIntroduction.fromPartial(value)
      };
    },
    removeTokenFromWeightedPool(value: MsgRemoveTokenFromWeightedPool) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool",
        value: MsgRemoveTokenFromWeightedPool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    addMaturityToYamm(value: MsgAddMaturityToYamm) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgAddMaturityToYamm",
        value: MsgAddMaturityToYamm.fromPartial(value)
      };
    },
    setInitializationAllowList(value: MsgSetInitializationAllowList) {
      return {
        typeUrl: "/prismfinance.prismcore.amm.MsgSetInitializationAllowList",
        value: MsgSetInitializationAllowList.fromPartial(value)
      };
    }
  }
};