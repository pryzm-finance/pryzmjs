import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSingleSwap, MsgSingleSwapResponse, MsgJoinAllTokensExactLpt, MsgJoinAllTokensExactLptResponse, MsgJoinTokenExactLpt, MsgJoinTokenExactLptResponse, MsgJoinExactTokens, MsgJoinExactTokensResponse, MsgExitExactTokens, MsgExitExactTokensResponse, MsgExitTokenExactLpt, MsgExitTokenExactLptResponse, MsgExitAllTokensExactLpt, MsgExitAllTokensExactLptResponse, MsgCreateWeightedPool, MsgCreateWeightedPoolResponse, MsgUpdateSwapFee, MsgUpdateSwapFeeResponse, MsgInitializePool, MsgInitializePoolResponse, MsgUpdateWeights, MsgUpdateWeightsResponse, MsgBatchSwap, MsgBatchSwapResponse, MsgSetYammConfiguration, MsgSetYammConfigurationResponse, MsgWhitelistRoute, MsgWhitelistRouteResponse, MsgSetWhitelistedRouteEnabled, MsgSetWhitelistedRouteEnabledResponse, MsgSubmitOrder, MsgSubmitOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgProposeMatch, MsgProposeMatchResponse, MsgSetCircuitBreakers, MsgSetCircuitBreakersResponse, MsgSetRecoveryMode, MsgSetRecoveryModeResponse, MsgRecoveryExit, MsgRecoveryExitResponse, MsgSetPauseMode, MsgSetPauseModeResponse, MsgSetVaultPauseMode, MsgSetVaultPauseModeResponse, MsgCreateOraclePricePair, MsgCreateOraclePricePairResponse, MsgUpdateOraclePricePair, MsgUpdateOraclePricePairResponse, MsgDeleteOraclePricePair, MsgDeleteOraclePricePairResponse, MsgSetSwapProtocolFee, MsgSetSwapProtocolFeeResponse, MsgSetJoinExitProtocolFee, MsgSetJoinExitProtocolFeeResponse, MsgIntroduceYammLpToWeightedPool, MsgIntroduceYammLpToWeightedPoolResponse, MsgCancelPendingTokenIntroduction, MsgCancelPendingTokenIntroductionResponse, MsgRemoveTokenFromWeightedPool, MsgRemoveTokenFromWeightedPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgAddMaturityToYamm, MsgAddMaturityToYammResponse, MsgSetInitializationAllowList, MsgSetInitializationAllowListResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  singleSwap(request: MsgSingleSwap): Promise<MsgSingleSwapResponse>;
  joinAllTokensExactLpt(request: MsgJoinAllTokensExactLpt): Promise<MsgJoinAllTokensExactLptResponse>;
  joinTokenExactLpt(request: MsgJoinTokenExactLpt): Promise<MsgJoinTokenExactLptResponse>;
  joinExactTokens(request: MsgJoinExactTokens): Promise<MsgJoinExactTokensResponse>;
  exitExactTokens(request: MsgExitExactTokens): Promise<MsgExitExactTokensResponse>;
  exitTokenExactLpt(request: MsgExitTokenExactLpt): Promise<MsgExitTokenExactLptResponse>;
  exitAllTokensExactLpt(request: MsgExitAllTokensExactLpt): Promise<MsgExitAllTokensExactLptResponse>;
  createWeightedPool(request: MsgCreateWeightedPool): Promise<MsgCreateWeightedPoolResponse>;
  updateSwapFee(request: MsgUpdateSwapFee): Promise<MsgUpdateSwapFeeResponse>;
  initializePool(request: MsgInitializePool): Promise<MsgInitializePoolResponse>;
  updateWeights(request: MsgUpdateWeights): Promise<MsgUpdateWeightsResponse>;
  batchSwap(request: MsgBatchSwap): Promise<MsgBatchSwapResponse>;
  setYammConfiguration(request: MsgSetYammConfiguration): Promise<MsgSetYammConfigurationResponse>;
  whitelistRoute(request: MsgWhitelistRoute): Promise<MsgWhitelistRouteResponse>;
  setWhitelistedRouteEnabled(request: MsgSetWhitelistedRouteEnabled): Promise<MsgSetWhitelistedRouteEnabledResponse>;
  submitOrder(request: MsgSubmitOrder): Promise<MsgSubmitOrderResponse>;
  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  proposeMatch(request: MsgProposeMatch): Promise<MsgProposeMatchResponse>;
  setCircuitBreakers(request: MsgSetCircuitBreakers): Promise<MsgSetCircuitBreakersResponse>;
  setRecoveryMode(request: MsgSetRecoveryMode): Promise<MsgSetRecoveryModeResponse>;
  recoveryExit(request: MsgRecoveryExit): Promise<MsgRecoveryExitResponse>;
  setPauseMode(request: MsgSetPauseMode): Promise<MsgSetPauseModeResponse>;
  setVaultPauseMode(request: MsgSetVaultPauseMode): Promise<MsgSetVaultPauseModeResponse>;
  createOraclePricePair(request: MsgCreateOraclePricePair): Promise<MsgCreateOraclePricePairResponse>;
  updateOraclePricePair(request: MsgUpdateOraclePricePair): Promise<MsgUpdateOraclePricePairResponse>;
  deleteOraclePricePair(request: MsgDeleteOraclePricePair): Promise<MsgDeleteOraclePricePairResponse>;
  setSwapProtocolFee(request: MsgSetSwapProtocolFee): Promise<MsgSetSwapProtocolFeeResponse>;
  setJoinExitProtocolFee(request: MsgSetJoinExitProtocolFee): Promise<MsgSetJoinExitProtocolFeeResponse>;
  introduceYammLpToWeightedPool(request: MsgIntroduceYammLpToWeightedPool): Promise<MsgIntroduceYammLpToWeightedPoolResponse>;
  cancelPendingTokenIntroduction(request: MsgCancelPendingTokenIntroduction): Promise<MsgCancelPendingTokenIntroductionResponse>;
  removeTokenFromWeightedPool(request: MsgRemoveTokenFromWeightedPool): Promise<MsgRemoveTokenFromWeightedPoolResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  addMaturityToYamm(request: MsgAddMaturityToYamm): Promise<MsgAddMaturityToYammResponse>;
  setInitializationAllowList(request: MsgSetInitializationAllowList): Promise<MsgSetInitializationAllowListResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.singleSwap = this.singleSwap.bind(this);
    this.joinAllTokensExactLpt = this.joinAllTokensExactLpt.bind(this);
    this.joinTokenExactLpt = this.joinTokenExactLpt.bind(this);
    this.joinExactTokens = this.joinExactTokens.bind(this);
    this.exitExactTokens = this.exitExactTokens.bind(this);
    this.exitTokenExactLpt = this.exitTokenExactLpt.bind(this);
    this.exitAllTokensExactLpt = this.exitAllTokensExactLpt.bind(this);
    this.createWeightedPool = this.createWeightedPool.bind(this);
    this.updateSwapFee = this.updateSwapFee.bind(this);
    this.initializePool = this.initializePool.bind(this);
    this.updateWeights = this.updateWeights.bind(this);
    this.batchSwap = this.batchSwap.bind(this);
    this.setYammConfiguration = this.setYammConfiguration.bind(this);
    this.whitelistRoute = this.whitelistRoute.bind(this);
    this.setWhitelistedRouteEnabled = this.setWhitelistedRouteEnabled.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.proposeMatch = this.proposeMatch.bind(this);
    this.setCircuitBreakers = this.setCircuitBreakers.bind(this);
    this.setRecoveryMode = this.setRecoveryMode.bind(this);
    this.recoveryExit = this.recoveryExit.bind(this);
    this.setPauseMode = this.setPauseMode.bind(this);
    this.setVaultPauseMode = this.setVaultPauseMode.bind(this);
    this.createOraclePricePair = this.createOraclePricePair.bind(this);
    this.updateOraclePricePair = this.updateOraclePricePair.bind(this);
    this.deleteOraclePricePair = this.deleteOraclePricePair.bind(this);
    this.setSwapProtocolFee = this.setSwapProtocolFee.bind(this);
    this.setJoinExitProtocolFee = this.setJoinExitProtocolFee.bind(this);
    this.introduceYammLpToWeightedPool = this.introduceYammLpToWeightedPool.bind(this);
    this.cancelPendingTokenIntroduction = this.cancelPendingTokenIntroduction.bind(this);
    this.removeTokenFromWeightedPool = this.removeTokenFromWeightedPool.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.addMaturityToYamm = this.addMaturityToYamm.bind(this);
    this.setInitializationAllowList = this.setInitializationAllowList.bind(this);
  }
  singleSwap(request: MsgSingleSwap): Promise<MsgSingleSwapResponse> {
    const data = MsgSingleSwap.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SingleSwap", data);
    return promise.then(data => MsgSingleSwapResponse.decode(new _m0.Reader(data)));
  }
  joinAllTokensExactLpt(request: MsgJoinAllTokensExactLpt): Promise<MsgJoinAllTokensExactLptResponse> {
    const data = MsgJoinAllTokensExactLpt.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "JoinAllTokensExactLpt", data);
    return promise.then(data => MsgJoinAllTokensExactLptResponse.decode(new _m0.Reader(data)));
  }
  joinTokenExactLpt(request: MsgJoinTokenExactLpt): Promise<MsgJoinTokenExactLptResponse> {
    const data = MsgJoinTokenExactLpt.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "JoinTokenExactLpt", data);
    return promise.then(data => MsgJoinTokenExactLptResponse.decode(new _m0.Reader(data)));
  }
  joinExactTokens(request: MsgJoinExactTokens): Promise<MsgJoinExactTokensResponse> {
    const data = MsgJoinExactTokens.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "JoinExactTokens", data);
    return promise.then(data => MsgJoinExactTokensResponse.decode(new _m0.Reader(data)));
  }
  exitExactTokens(request: MsgExitExactTokens): Promise<MsgExitExactTokensResponse> {
    const data = MsgExitExactTokens.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "ExitExactTokens", data);
    return promise.then(data => MsgExitExactTokensResponse.decode(new _m0.Reader(data)));
  }
  exitTokenExactLpt(request: MsgExitTokenExactLpt): Promise<MsgExitTokenExactLptResponse> {
    const data = MsgExitTokenExactLpt.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "ExitTokenExactLpt", data);
    return promise.then(data => MsgExitTokenExactLptResponse.decode(new _m0.Reader(data)));
  }
  exitAllTokensExactLpt(request: MsgExitAllTokensExactLpt): Promise<MsgExitAllTokensExactLptResponse> {
    const data = MsgExitAllTokensExactLpt.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "ExitAllTokensExactLpt", data);
    return promise.then(data => MsgExitAllTokensExactLptResponse.decode(new _m0.Reader(data)));
  }
  createWeightedPool(request: MsgCreateWeightedPool): Promise<MsgCreateWeightedPoolResponse> {
    const data = MsgCreateWeightedPool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "CreateWeightedPool", data);
    return promise.then(data => MsgCreateWeightedPoolResponse.decode(new _m0.Reader(data)));
  }
  updateSwapFee(request: MsgUpdateSwapFee): Promise<MsgUpdateSwapFeeResponse> {
    const data = MsgUpdateSwapFee.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "UpdateSwapFee", data);
    return promise.then(data => MsgUpdateSwapFeeResponse.decode(new _m0.Reader(data)));
  }
  initializePool(request: MsgInitializePool): Promise<MsgInitializePoolResponse> {
    const data = MsgInitializePool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "InitializePool", data);
    return promise.then(data => MsgInitializePoolResponse.decode(new _m0.Reader(data)));
  }
  updateWeights(request: MsgUpdateWeights): Promise<MsgUpdateWeightsResponse> {
    const data = MsgUpdateWeights.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "UpdateWeights", data);
    return promise.then(data => MsgUpdateWeightsResponse.decode(new _m0.Reader(data)));
  }
  batchSwap(request: MsgBatchSwap): Promise<MsgBatchSwapResponse> {
    const data = MsgBatchSwap.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "BatchSwap", data);
    return promise.then(data => MsgBatchSwapResponse.decode(new _m0.Reader(data)));
  }
  setYammConfiguration(request: MsgSetYammConfiguration): Promise<MsgSetYammConfigurationResponse> {
    const data = MsgSetYammConfiguration.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetYammConfiguration", data);
    return promise.then(data => MsgSetYammConfigurationResponse.decode(new _m0.Reader(data)));
  }
  whitelistRoute(request: MsgWhitelistRoute): Promise<MsgWhitelistRouteResponse> {
    const data = MsgWhitelistRoute.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "WhitelistRoute", data);
    return promise.then(data => MsgWhitelistRouteResponse.decode(new _m0.Reader(data)));
  }
  setWhitelistedRouteEnabled(request: MsgSetWhitelistedRouteEnabled): Promise<MsgSetWhitelistedRouteEnabledResponse> {
    const data = MsgSetWhitelistedRouteEnabled.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetWhitelistedRouteEnabled", data);
    return promise.then(data => MsgSetWhitelistedRouteEnabledResponse.decode(new _m0.Reader(data)));
  }
  submitOrder(request: MsgSubmitOrder): Promise<MsgSubmitOrderResponse> {
    const data = MsgSubmitOrder.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SubmitOrder", data);
    return promise.then(data => MsgSubmitOrderResponse.decode(new _m0.Reader(data)));
  }
  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "CancelOrder", data);
    return promise.then(data => MsgCancelOrderResponse.decode(new _m0.Reader(data)));
  }
  proposeMatch(request: MsgProposeMatch): Promise<MsgProposeMatchResponse> {
    const data = MsgProposeMatch.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "ProposeMatch", data);
    return promise.then(data => MsgProposeMatchResponse.decode(new _m0.Reader(data)));
  }
  setCircuitBreakers(request: MsgSetCircuitBreakers): Promise<MsgSetCircuitBreakersResponse> {
    const data = MsgSetCircuitBreakers.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetCircuitBreakers", data);
    return promise.then(data => MsgSetCircuitBreakersResponse.decode(new _m0.Reader(data)));
  }
  setRecoveryMode(request: MsgSetRecoveryMode): Promise<MsgSetRecoveryModeResponse> {
    const data = MsgSetRecoveryMode.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetRecoveryMode", data);
    return promise.then(data => MsgSetRecoveryModeResponse.decode(new _m0.Reader(data)));
  }
  recoveryExit(request: MsgRecoveryExit): Promise<MsgRecoveryExitResponse> {
    const data = MsgRecoveryExit.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "RecoveryExit", data);
    return promise.then(data => MsgRecoveryExitResponse.decode(new _m0.Reader(data)));
  }
  setPauseMode(request: MsgSetPauseMode): Promise<MsgSetPauseModeResponse> {
    const data = MsgSetPauseMode.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetPauseMode", data);
    return promise.then(data => MsgSetPauseModeResponse.decode(new _m0.Reader(data)));
  }
  setVaultPauseMode(request: MsgSetVaultPauseMode): Promise<MsgSetVaultPauseModeResponse> {
    const data = MsgSetVaultPauseMode.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetVaultPauseMode", data);
    return promise.then(data => MsgSetVaultPauseModeResponse.decode(new _m0.Reader(data)));
  }
  createOraclePricePair(request: MsgCreateOraclePricePair): Promise<MsgCreateOraclePricePairResponse> {
    const data = MsgCreateOraclePricePair.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "CreateOraclePricePair", data);
    return promise.then(data => MsgCreateOraclePricePairResponse.decode(new _m0.Reader(data)));
  }
  updateOraclePricePair(request: MsgUpdateOraclePricePair): Promise<MsgUpdateOraclePricePairResponse> {
    const data = MsgUpdateOraclePricePair.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "UpdateOraclePricePair", data);
    return promise.then(data => MsgUpdateOraclePricePairResponse.decode(new _m0.Reader(data)));
  }
  deleteOraclePricePair(request: MsgDeleteOraclePricePair): Promise<MsgDeleteOraclePricePairResponse> {
    const data = MsgDeleteOraclePricePair.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "DeleteOraclePricePair", data);
    return promise.then(data => MsgDeleteOraclePricePairResponse.decode(new _m0.Reader(data)));
  }
  setSwapProtocolFee(request: MsgSetSwapProtocolFee): Promise<MsgSetSwapProtocolFeeResponse> {
    const data = MsgSetSwapProtocolFee.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetSwapProtocolFee", data);
    return promise.then(data => MsgSetSwapProtocolFeeResponse.decode(new _m0.Reader(data)));
  }
  setJoinExitProtocolFee(request: MsgSetJoinExitProtocolFee): Promise<MsgSetJoinExitProtocolFeeResponse> {
    const data = MsgSetJoinExitProtocolFee.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetJoinExitProtocolFee", data);
    return promise.then(data => MsgSetJoinExitProtocolFeeResponse.decode(new _m0.Reader(data)));
  }
  introduceYammLpToWeightedPool(request: MsgIntroduceYammLpToWeightedPool): Promise<MsgIntroduceYammLpToWeightedPoolResponse> {
    const data = MsgIntroduceYammLpToWeightedPool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "IntroduceYammLpToWeightedPool", data);
    return promise.then(data => MsgIntroduceYammLpToWeightedPoolResponse.decode(new _m0.Reader(data)));
  }
  cancelPendingTokenIntroduction(request: MsgCancelPendingTokenIntroduction): Promise<MsgCancelPendingTokenIntroductionResponse> {
    const data = MsgCancelPendingTokenIntroduction.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "CancelPendingTokenIntroduction", data);
    return promise.then(data => MsgCancelPendingTokenIntroductionResponse.decode(new _m0.Reader(data)));
  }
  removeTokenFromWeightedPool(request: MsgRemoveTokenFromWeightedPool): Promise<MsgRemoveTokenFromWeightedPoolResponse> {
    const data = MsgRemoveTokenFromWeightedPool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "RemoveTokenFromWeightedPool", data);
    return promise.then(data => MsgRemoveTokenFromWeightedPoolResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  addMaturityToYamm(request: MsgAddMaturityToYamm): Promise<MsgAddMaturityToYammResponse> {
    const data = MsgAddMaturityToYamm.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "AddMaturityToYamm", data);
    return promise.then(data => MsgAddMaturityToYammResponse.decode(new _m0.Reader(data)));
  }
  setInitializationAllowList(request: MsgSetInitializationAllowList): Promise<MsgSetInitializationAllowListResponse> {
    const data = MsgSetInitializationAllowList.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetInitializationAllowList", data);
    return promise.then(data => MsgSetInitializationAllowListResponse.decode(new _m0.Reader(data)));
  }
}