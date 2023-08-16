import { Swap, SwapSDKType, SwapType, SwapStep, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { TokenWeight, TokenWeightSDKType } from "./token_weight";
import { YammConfiguration, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteSDKType } from "./whitelisted_route";
import { PairMatchProposal, PairMatchProposalSDKType } from "./pair_match_proposal";
import { TokenCircuitBreakerSettings, TokenCircuitBreakerSettingsSDKType } from "./token_circuit_breaker_settings";
import { OraclePricePair, OraclePricePairSDKType } from "./oracle_price_pair";
import { GeneralPoolParameters, GeneralPoolParametersSDKType, YammParameters, YammParametersSDKType, OrderParameters, OrderParametersSDKType } from "./params";
import { Order, OrderSDKType } from "./order";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSingleSwap {
  creator: string;
  swap: Swap;
  maxAmountIn?: string;
  minAmountOut?: string;
}
export interface MsgSingleSwapSDKType {
  creator: string;
  swap: SwapSDKType;
  max_amount_in?: string;
  min_amount_out?: string;
}
export interface MsgSingleSwapResponse {
  amountOut: Coin;
  amountIn: Coin;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocolFee: Coin;
  swapFee: Coin;
}
export interface MsgSingleSwapResponseSDKType {
  amount_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgJoinAllTokensExactLpt {
  creator: string;
  poolId: Long;
  lptOut: string;
  maxAmountsIn: Coin[];
}
export interface MsgJoinAllTokensExactLptSDKType {
  creator: string;
  pool_id: Long;
  lpt_out: string;
  max_amounts_in: CoinSDKType[];
}
export interface MsgJoinAllTokensExactLptResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface MsgJoinAllTokensExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface MsgJoinTokenExactLpt {
  creator: string;
  poolId: Long;
  lptOut: string;
  tokenIn: string;
  maxAmountIn?: string;
}
export interface MsgJoinTokenExactLptSDKType {
  creator: string;
  pool_id: Long;
  lpt_out: string;
  token_in: string;
  max_amount_in?: string;
}
export interface MsgJoinTokenExactLptResponse {
  lptOut: Coin;
  amountIn: Coin;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface MsgJoinTokenExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgJoinExactTokens {
  creator: string;
  poolId: Long;
  amountsIn: Coin[];
  minLptOut?: string;
}
export interface MsgJoinExactTokensSDKType {
  creator: string;
  pool_id: Long;
  amounts_in: CoinSDKType[];
  min_lpt_out?: string;
}
export interface MsgJoinExactTokensResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface MsgJoinExactTokensResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface MsgExitExactTokens {
  creator: string;
  poolId: Long;
  amountsOut: Coin[];
  maxLptIn?: string;
}
export interface MsgExitExactTokensSDKType {
  creator: string;
  pool_id: Long;
  amounts_out: CoinSDKType[];
  max_lpt_in?: string;
}
export interface MsgExitExactTokensResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  swapFee: Coin[];
}
export interface MsgExitExactTokensResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType[];
}
export interface MsgExitTokenExactLpt {
  creator: string;
  poolId: Long;
  lptIn: string;
  tokenOut: string;
  minAmountOut?: string;
}
export interface MsgExitTokenExactLptSDKType {
  creator: string;
  pool_id: Long;
  lpt_in: string;
  token_out: string;
  min_amount_out?: string;
}
export interface MsgExitTokenExactLptResponse {
  lptIn: Coin;
  amountOut: Coin;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface MsgExitTokenExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgExitAllTokensExactLpt {
  creator: string;
  poolId: Long;
  lptIn: string;
  minAmountsOut: Coin[];
}
export interface MsgExitAllTokensExactLptSDKType {
  creator: string;
  pool_id: Long;
  lpt_in: string;
  min_amounts_out: CoinSDKType[];
}
export interface MsgExitAllTokensExactLptResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
}
export interface MsgExitAllTokensExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
}
export interface CreateWeightedPoolToken {
  denom: string;
  normalizedWeight: string;
}
export interface CreateWeightedPoolTokenSDKType {
  denom: string;
  normalized_weight: string;
}
export interface MsgCreateWeightedPool {
  creator: string;
  name: string;
  swapFeeRatio: string;
  pauseWindowDurationMillis: Long;
  pauseBufferDurationMillis: Long;
  tokens: CreateWeightedPoolToken[];
  /** if not empty, only these addresses can initialize the pool */
  initializationAllowList: string[];
}
export interface MsgCreateWeightedPoolSDKType {
  creator: string;
  name: string;
  swap_fee_ratio: string;
  pause_window_duration_millis: Long;
  pause_buffer_duration_millis: Long;
  tokens: CreateWeightedPoolTokenSDKType[];
  initialization_allow_list: string[];
}
export interface MsgCreateWeightedPoolResponse {
  poolId: Long;
}
export interface MsgCreateWeightedPoolResponseSDKType {
  pool_id: Long;
}
export interface MsgUpdateSwapFee {
  creator: string;
  poolId: Long;
  swapFeeRatio: string;
}
export interface MsgUpdateSwapFeeSDKType {
  creator: string;
  pool_id: Long;
  swap_fee_ratio: string;
}
export interface MsgUpdateSwapFeeResponse {}
export interface MsgUpdateSwapFeeResponseSDKType {}
export interface MsgInitializePool {
  creator: string;
  poolId: Long;
  amountsIn: Coin[];
}
export interface MsgInitializePoolSDKType {
  creator: string;
  pool_id: Long;
  amounts_in: CoinSDKType[];
}
export interface MsgInitializePoolResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface MsgInitializePoolResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface MsgUpdateWeights {
  creator: string;
  poolId: Long;
  tokenWeights: TokenWeight[];
  startTimeUnixMillis: Long;
  endTimeUnixMillis: Long;
}
export interface MsgUpdateWeightsSDKType {
  creator: string;
  pool_id: Long;
  token_weights: TokenWeightSDKType[];
  start_time_unix_millis: Long;
  end_time_unix_millis: Long;
}
export interface MsgUpdateWeightsResponse {}
export interface MsgUpdateWeightsResponseSDKType {}
export interface MsgBatchSwap {
  creator: string;
  swapType: SwapType;
  steps: SwapStep[];
  minAmountsOut: Coin[];
  maxAmountsIn: Coin[];
}
export interface MsgBatchSwapSDKType {
  creator: string;
  swap_type: SwapType;
  steps: SwapStepSDKType[];
  min_amounts_out: CoinSDKType[];
  max_amounts_in: CoinSDKType[];
}
export interface MsgBatchSwapResponse {
  amountsIn: Coin[];
  amountsOut: Coin[];
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface MsgBatchSwapResponseSDKType {
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface MsgSetYammConfiguration {
  creator: string;
  configuration: YammConfiguration;
}
export interface MsgSetYammConfigurationSDKType {
  creator: string;
  configuration: YammConfigurationSDKType;
}
export interface MsgSetYammConfigurationResponse {}
export interface MsgSetYammConfigurationResponseSDKType {}
export interface MsgWhitelistRoute {
  authority: string;
  whitelistedRoute: WhitelistedRoute;
}
export interface MsgWhitelistRouteSDKType {
  authority: string;
  whitelisted_route: WhitelistedRouteSDKType;
}
export interface MsgWhitelistRouteResponse {}
export interface MsgWhitelistRouteResponseSDKType {}
export interface MsgSetWhitelistedRouteEnabled {
  authority: string;
  tokenIn: string;
  tokenOut: string;
  enabled: boolean;
}
export interface MsgSetWhitelistedRouteEnabledSDKType {
  authority: string;
  token_in: string;
  token_out: string;
  enabled: boolean;
}
export interface MsgSetWhitelistedRouteEnabledResponse {}
export interface MsgSetWhitelistedRouteEnabledResponseSDKType {}
export interface MsgSubmitOrder {
  creator: string;
  poolId: Long;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  allowMatching: boolean;
  amountPerStep: string;
  totalAmount: string;
  millisInterval: Long;
  maxStepSpotPrice: string;
  maxMatchingSpotPrice?: string;
}
export interface MsgSubmitOrderSDKType {
  creator: string;
  pool_id: Long;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  allow_matching: boolean;
  amount_per_step: string;
  total_amount: string;
  millis_interval: Long;
  max_step_spot_price: string;
  max_matching_spot_price?: string;
}
export interface MsgSubmitOrderResponse {
  order: Order;
}
export interface MsgSubmitOrderResponseSDKType {
  order: OrderSDKType;
}
export interface MsgCancelOrder {
  creator: string;
  id: Long;
}
export interface MsgCancelOrderSDKType {
  creator: string;
  id: Long;
}
export interface MsgCancelOrderResponse {
  withdrawnDeposit: Coin;
}
export interface MsgCancelOrderResponseSDKType {
  withdrawn_deposit: CoinSDKType;
}
export interface MsgProposeMatch {
  creator: string;
  pairs: PairMatchProposal[];
}
export interface MsgProposeMatchSDKType {
  creator: string;
  pairs: PairMatchProposalSDKType[];
}
export interface MsgProposeMatchResponse {
  proposerReward: Coin[];
}
export interface MsgProposeMatchResponseSDKType {
  proposer_reward: CoinSDKType[];
}
export interface MsgSetCircuitBreakers {
  creator: string;
  poolId: Long;
  tokenCircuitBreakers: TokenCircuitBreakerSettings[];
}
export interface MsgSetCircuitBreakersSDKType {
  creator: string;
  pool_id: Long;
  token_circuit_breakers: TokenCircuitBreakerSettingsSDKType[];
}
export interface MsgSetCircuitBreakersResponse {}
export interface MsgSetCircuitBreakersResponseSDKType {}
export interface MsgSetRecoveryMode {
  authority: string;
  poolId: Long;
  recoveryMode: boolean;
}
export interface MsgSetRecoveryModeSDKType {
  authority: string;
  pool_id: Long;
  recovery_mode: boolean;
}
export interface MsgSetRecoveryModeResponse {}
export interface MsgSetRecoveryModeResponseSDKType {}
export interface MsgRecoveryExit {
  creator: string;
  poolId: Long;
  lptIn: string;
  minAmountsOut: Coin[];
}
export interface MsgRecoveryExitSDKType {
  creator: string;
  pool_id: Long;
  lpt_in: string;
  min_amounts_out: CoinSDKType[];
}
export interface MsgRecoveryExitResponse {
  lptIn: Coin;
  amountsOut: Coin[];
}
export interface MsgRecoveryExitResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
}
export interface MsgSetPauseMode {
  creator: string;
  poolId: Long;
  pauseMode: boolean;
}
export interface MsgSetPauseModeSDKType {
  creator: string;
  pool_id: Long;
  pause_mode: boolean;
}
export interface MsgSetPauseModeResponse {}
export interface MsgSetPauseModeResponseSDKType {}
export interface MsgSetVaultPauseMode {
  authority: string;
  pauseMode: boolean;
}
export interface MsgSetVaultPauseModeSDKType {
  authority: string;
  pause_mode: boolean;
}
export interface MsgSetVaultPauseModeResponse {}
export interface MsgSetVaultPauseModeResponseSDKType {}
export interface MsgCreateOraclePricePair {
  authority: string;
  oraclePricePair: OraclePricePair;
}
export interface MsgCreateOraclePricePairSDKType {
  authority: string;
  oracle_price_pair: OraclePricePairSDKType;
}
export interface MsgCreateOraclePricePairResponse {}
export interface MsgCreateOraclePricePairResponseSDKType {}
export interface MsgUpdateOraclePricePair {
  authority: string;
  oraclePricePair: OraclePricePair;
}
export interface MsgUpdateOraclePricePairSDKType {
  authority: string;
  oracle_price_pair: OraclePricePairSDKType;
}
export interface MsgUpdateOraclePricePairResponse {}
export interface MsgUpdateOraclePricePairResponseSDKType {}
export interface MsgDeleteOraclePricePair {
  authority: string;
  assetId: string;
}
export interface MsgDeleteOraclePricePairSDKType {
  authority: string;
  asset_id: string;
}
export interface MsgDeleteOraclePricePairResponse {}
export interface MsgDeleteOraclePricePairResponseSDKType {}
export interface MsgSetSwapProtocolFee {
  authority: string;
  poolId: Long;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  swapProtocolFee?: string;
}
export interface MsgSetSwapProtocolFeeSDKType {
  authority: string;
  pool_id: Long;
  swap_protocol_fee?: string;
}
export interface MsgSetSwapProtocolFeeResponse {}
export interface MsgSetSwapProtocolFeeResponseSDKType {}
export interface MsgSetJoinExitProtocolFee {
  authority: string;
  poolId: Long;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  joinExitProtocolFee?: string;
}
export interface MsgSetJoinExitProtocolFeeSDKType {
  authority: string;
  pool_id: Long;
  join_exit_protocol_fee?: string;
}
export interface MsgSetJoinExitProtocolFeeResponse {}
export interface MsgSetJoinExitProtocolFeeResponseSDKType {}
export interface MsgIntroduceYammLpToWeightedPool {
  authority: string;
  weightedPoolId: Long;
  yammPoolId: Long;
  tokenNormalizedWeight: string;
  virtualBalanceIntervalMillis: Long;
}
export interface MsgIntroduceYammLpToWeightedPoolSDKType {
  authority: string;
  weighted_pool_id: Long;
  yamm_pool_id: Long;
  token_normalized_weight: string;
  virtual_balance_interval_millis: Long;
}
export interface MsgIntroduceYammLpToWeightedPoolResponse {}
export interface MsgIntroduceYammLpToWeightedPoolResponseSDKType {}
export interface MsgIntroduceAssetBaseTokenToWeightedPool {
  authority: string;
  weightedPoolId: Long;
  tokenDenom: string;
  assetId: string;
  tokenNormalizedWeight: string;
  virtualBalanceIntervalMillis: Long;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolSDKType {
  authority: string;
  weighted_pool_id: Long;
  token_denom: string;
  asset_id: string;
  token_normalized_weight: string;
  virtual_balance_interval_millis: Long;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponse {}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseSDKType {}
export interface MsgCancelPendingTokenIntroduction {
  authority: string;
  assetId: string;
  targetPoolId: Long;
}
export interface MsgCancelPendingTokenIntroductionSDKType {
  authority: string;
  asset_id: string;
  target_pool_id: Long;
}
export interface MsgCancelPendingTokenIntroductionResponse {}
export interface MsgCancelPendingTokenIntroductionResponseSDKType {}
export interface MsgRemoveTokenFromWeightedPool {
  creator: string;
  poolId: Long;
  tokenDenom: string;
  virtualBalanceIntervalMillis: Long;
}
export interface MsgRemoveTokenFromWeightedPoolSDKType {
  creator: string;
  pool_id: Long;
  token_denom: string;
  virtual_balance_interval_millis: Long;
}
export interface MsgRemoveTokenFromWeightedPoolResponse {}
export interface MsgRemoveTokenFromWeightedPoolResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  generalPoolParameters?: GeneralPoolParameters;
  yammParameters?: YammParameters;
  orderParameters?: OrderParameters;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  general_pool_parameters?: GeneralPoolParametersSDKType;
  yamm_parameters?: YammParametersSDKType;
  order_parameters?: OrderParametersSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgAddMaturityToYamm {
  authority: string;
  assetId: string;
  maturitySymbol: string;
}
export interface MsgAddMaturityToYammSDKType {
  authority: string;
  assetId: string;
  maturitySymbol: string;
}
export interface MsgAddMaturityToYammResponse {}
export interface MsgAddMaturityToYammResponseSDKType {}
export interface MsgSetInitializationAllowList {
  creator: string;
  poolId: Long;
  initializationAllowList: string[];
}
export interface MsgSetInitializationAllowListSDKType {
  creator: string;
  pool_id: Long;
  initialization_allow_list: string[];
}
export interface MsgSetInitializationAllowListResponse {}
export interface MsgSetInitializationAllowListResponseSDKType {}
function createBaseMsgSingleSwap(): MsgSingleSwap {
  return {
    creator: "",
    swap: Swap.fromPartial({}),
    maxAmountIn: undefined,
    minAmountOut: undefined
  };
}
export const MsgSingleSwap = {
  encode(message: MsgSingleSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxAmountIn !== undefined) {
      writer.uint32(26).string(message.maxAmountIn);
    }
    if (message.minAmountOut !== undefined) {
      writer.uint32(34).string(message.minAmountOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSingleSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSingleSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxAmountIn = reader.string();
          break;
        case 4:
          message.minAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSingleSwap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
      maxAmountIn: isSet(object.maxAmountIn) ? String(object.maxAmountIn) : undefined,
      minAmountOut: isSet(object.minAmountOut) ? String(object.minAmountOut) : undefined
    };
  },
  toJSON(message: MsgSingleSwap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swap !== undefined && (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    message.maxAmountIn !== undefined && (obj.maxAmountIn = message.maxAmountIn);
    message.minAmountOut !== undefined && (obj.minAmountOut = message.minAmountOut);
    return obj;
  },
  fromPartial(object: Partial<MsgSingleSwap>): MsgSingleSwap {
    const message = createBaseMsgSingleSwap();
    message.creator = object.creator ?? "";
    message.swap = object.swap !== undefined && object.swap !== null ? Swap.fromPartial(object.swap) : undefined;
    message.maxAmountIn = object.maxAmountIn ?? undefined;
    message.minAmountOut = object.minAmountOut ?? undefined;
    return message;
  }
};
function createBaseMsgSingleSwapResponse(): MsgSingleSwapResponse {
  return {
    amountOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const MsgSingleSwapResponse = {
  encode(message: MsgSingleSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSingleSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSingleSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSingleSwapResponse {
    return {
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: MsgSingleSwapResponse): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSingleSwapResponse>): MsgSingleSwapResponse {
    const message = createBaseMsgSingleSwapResponse();
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  }
};
function createBaseMsgJoinAllTokensExactLpt(): MsgJoinAllTokensExactLpt {
  return {
    creator: "",
    poolId: Long.UZERO,
    lptOut: "",
    maxAmountsIn: []
  };
}
export const MsgJoinAllTokensExactLpt = {
  encode(message: MsgJoinAllTokensExactLpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(26).string(message.lptOut);
    }
    for (const v of message.maxAmountsIn) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinAllTokensExactLpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinAllTokensExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.lptOut = reader.string();
          break;
        case 4:
          message.maxAmountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinAllTokensExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinAllTokensExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    if (message.maxAmountsIn) {
      obj.maxAmountsIn = message.maxAmountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxAmountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgJoinAllTokensExactLpt>): MsgJoinAllTokensExactLpt {
    const message = createBaseMsgJoinAllTokensExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptOut = object.lptOut ?? "";
    message.maxAmountsIn = object.maxAmountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgJoinAllTokensExactLptResponse(): MsgJoinAllTokensExactLptResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: []
  };
}
export const MsgJoinAllTokensExactLptResponse = {
  encode(message: MsgJoinAllTokensExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinAllTokensExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinAllTokensExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinAllTokensExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgJoinAllTokensExactLptResponse>): MsgJoinAllTokensExactLptResponse {
    const message = createBaseMsgJoinAllTokensExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgJoinTokenExactLpt(): MsgJoinTokenExactLpt {
  return {
    creator: "",
    poolId: Long.UZERO,
    lptOut: "",
    tokenIn: "",
    maxAmountIn: undefined
  };
}
export const MsgJoinTokenExactLpt = {
  encode(message: MsgJoinTokenExactLpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(26).string(message.lptOut);
    }
    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }
    if (message.maxAmountIn !== undefined) {
      writer.uint32(42).string(message.maxAmountIn);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinTokenExactLpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinTokenExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.lptOut = reader.string();
          break;
        case 4:
          message.tokenIn = reader.string();
          break;
        case 5:
          message.maxAmountIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinTokenExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      maxAmountIn: isSet(object.maxAmountIn) ? String(object.maxAmountIn) : undefined
    };
  },
  toJSON(message: MsgJoinTokenExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.maxAmountIn !== undefined && (obj.maxAmountIn = message.maxAmountIn);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinTokenExactLpt>): MsgJoinTokenExactLpt {
    const message = createBaseMsgJoinTokenExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptOut = object.lptOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.maxAmountIn = object.maxAmountIn ?? undefined;
    return message;
  }
};
function createBaseMsgJoinTokenExactLptResponse(): MsgJoinTokenExactLptResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const MsgJoinTokenExactLptResponse = {
  encode(message: MsgJoinTokenExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinTokenExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinTokenExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: MsgJoinTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinTokenExactLptResponse>): MsgJoinTokenExactLptResponse {
    const message = createBaseMsgJoinTokenExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  }
};
function createBaseMsgJoinExactTokens(): MsgJoinExactTokens {
  return {
    creator: "",
    poolId: Long.UZERO,
    amountsIn: [],
    minLptOut: undefined
  };
}
export const MsgJoinExactTokens = {
  encode(message: MsgJoinExactTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.minLptOut !== undefined) {
      writer.uint32(34).string(message.minLptOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinExactTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinExactTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.minLptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinExactTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      minLptOut: isSet(object.minLptOut) ? String(object.minLptOut) : undefined
    };
  },
  toJSON(message: MsgJoinExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    message.minLptOut !== undefined && (obj.minLptOut = message.minLptOut);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinExactTokens>): MsgJoinExactTokens {
    const message = createBaseMsgJoinExactTokens();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.minLptOut = object.minLptOut ?? undefined;
    return message;
  }
};
function createBaseMsgJoinExactTokensResponse(): MsgJoinExactTokensResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: [],
    swapFee: []
  };
}
export const MsgJoinExactTokensResponse = {
  encode(message: MsgJoinExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinExactTokensResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinExactTokensResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgJoinExactTokensResponse>): MsgJoinExactTokensResponse {
    const message = createBaseMsgJoinExactTokensResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgExitExactTokens(): MsgExitExactTokens {
  return {
    creator: "",
    poolId: Long.UZERO,
    amountsOut: [],
    maxLptIn: undefined
  };
}
export const MsgExitExactTokens = {
  encode(message: MsgExitExactTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxLptIn !== undefined) {
      writer.uint32(34).string(message.maxLptIn);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitExactTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitExactTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.maxLptIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitExactTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      maxLptIn: isSet(object.maxLptIn) ? String(object.maxLptIn) : undefined
    };
  },
  toJSON(message: MsgExitExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.maxLptIn !== undefined && (obj.maxLptIn = message.maxLptIn);
    return obj;
  },
  fromPartial(object: Partial<MsgExitExactTokens>): MsgExitExactTokens {
    const message = createBaseMsgExitExactTokens();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.maxLptIn = object.maxLptIn ?? undefined;
    return message;
  }
};
function createBaseMsgExitExactTokensResponse(): MsgExitExactTokensResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({}),
    swapFee: []
  };
}
export const MsgExitExactTokensResponse = {
  encode(message: MsgExitExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitExactTokensResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExitExactTokensResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExitExactTokensResponse>): MsgExitExactTokensResponse {
    const message = createBaseMsgExitExactTokensResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgExitTokenExactLpt(): MsgExitTokenExactLpt {
  return {
    creator: "",
    poolId: Long.UZERO,
    lptIn: "",
    tokenOut: "",
    minAmountOut: undefined
  };
}
export const MsgExitTokenExactLpt = {
  encode(message: MsgExitTokenExactLpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(26).string(message.lptIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.minAmountOut !== undefined) {
      writer.uint32(42).string(message.minAmountOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitTokenExactLpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitTokenExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.lptIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.minAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitTokenExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      minAmountOut: isSet(object.minAmountOut) ? String(object.minAmountOut) : undefined
    };
  },
  toJSON(message: MsgExitTokenExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.minAmountOut !== undefined && (obj.minAmountOut = message.minAmountOut);
    return obj;
  },
  fromPartial(object: Partial<MsgExitTokenExactLpt>): MsgExitTokenExactLpt {
    const message = createBaseMsgExitTokenExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptIn = object.lptIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.minAmountOut = object.minAmountOut ?? undefined;
    return message;
  }
};
function createBaseMsgExitTokenExactLptResponse(): MsgExitTokenExactLptResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const MsgExitTokenExactLptResponse = {
  encode(message: MsgExitTokenExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitTokenExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitTokenExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: MsgExitTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgExitTokenExactLptResponse>): MsgExitTokenExactLptResponse {
    const message = createBaseMsgExitTokenExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  }
};
function createBaseMsgExitAllTokensExactLpt(): MsgExitAllTokensExactLpt {
  return {
    creator: "",
    poolId: Long.UZERO,
    lptIn: "",
    minAmountsOut: []
  };
}
export const MsgExitAllTokensExactLpt = {
  encode(message: MsgExitAllTokensExactLpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(26).string(message.lptIn);
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitAllTokensExactLpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitAllTokensExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.lptIn = reader.string();
          break;
        case 4:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitAllTokensExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExitAllTokensExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExitAllTokensExactLpt>): MsgExitAllTokensExactLpt {
    const message = createBaseMsgExitAllTokensExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptIn = object.lptIn ?? "";
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgExitAllTokensExactLptResponse(): MsgExitAllTokensExactLptResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({})
  };
}
export const MsgExitAllTokensExactLptResponse = {
  encode(message: MsgExitAllTokensExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitAllTokensExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitAllTokensExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined
    };
  },
  toJSON(message: MsgExitAllTokensExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgExitAllTokensExactLptResponse>): MsgExitAllTokensExactLptResponse {
    const message = createBaseMsgExitAllTokensExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    return message;
  }
};
function createBaseCreateWeightedPoolToken(): CreateWeightedPoolToken {
  return {
    denom: "",
    normalizedWeight: ""
  };
}
export const CreateWeightedPoolToken = {
  encode(message: CreateWeightedPoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.normalizedWeight !== "") {
      writer.uint32(26).string(message.normalizedWeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CreateWeightedPoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWeightedPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 3:
          message.normalizedWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateWeightedPoolToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      normalizedWeight: isSet(object.normalizedWeight) ? String(object.normalizedWeight) : ""
    };
  },
  toJSON(message: CreateWeightedPoolToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.normalizedWeight !== undefined && (obj.normalizedWeight = message.normalizedWeight);
    return obj;
  },
  fromPartial(object: Partial<CreateWeightedPoolToken>): CreateWeightedPoolToken {
    const message = createBaseCreateWeightedPoolToken();
    message.denom = object.denom ?? "";
    message.normalizedWeight = object.normalizedWeight ?? "";
    return message;
  }
};
function createBaseMsgCreateWeightedPool(): MsgCreateWeightedPool {
  return {
    creator: "",
    name: "",
    swapFeeRatio: "",
    pauseWindowDurationMillis: Long.ZERO,
    pauseBufferDurationMillis: Long.ZERO,
    tokens: [],
    initializationAllowList: []
  };
}
export const MsgCreateWeightedPool = {
  encode(message: MsgCreateWeightedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(message.swapFeeRatio);
    }
    if (!message.pauseWindowDurationMillis.isZero()) {
      writer.uint32(32).int64(message.pauseWindowDurationMillis);
    }
    if (!message.pauseBufferDurationMillis.isZero()) {
      writer.uint32(40).int64(message.pauseBufferDurationMillis);
    }
    for (const v of message.tokens) {
      CreateWeightedPoolToken.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.initializationAllowList) {
      writer.uint32(98).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWeightedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.swapFeeRatio = reader.string();
          break;
        case 4:
          message.pauseWindowDurationMillis = (reader.int64() as Long);
          break;
        case 5:
          message.pauseBufferDurationMillis = (reader.int64() as Long);
          break;
        case 6:
          message.tokens.push(CreateWeightedPoolToken.decode(reader, reader.uint32()));
          break;
        case 12:
          message.initializationAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateWeightedPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : "",
      pauseWindowDurationMillis: isSet(object.pauseWindowDurationMillis) ? Long.fromValue(object.pauseWindowDurationMillis) : Long.ZERO,
      pauseBufferDurationMillis: isSet(object.pauseBufferDurationMillis) ? Long.fromValue(object.pauseBufferDurationMillis) : Long.ZERO,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => CreateWeightedPoolToken.fromJSON(e)) : [],
      initializationAllowList: Array.isArray(object?.initializationAllowList) ? object.initializationAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgCreateWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    message.pauseWindowDurationMillis !== undefined && (obj.pauseWindowDurationMillis = (message.pauseWindowDurationMillis || Long.ZERO).toString());
    message.pauseBufferDurationMillis !== undefined && (obj.pauseBufferDurationMillis = (message.pauseBufferDurationMillis || Long.ZERO).toString());
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? CreateWeightedPoolToken.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    if (message.initializationAllowList) {
      obj.initializationAllowList = message.initializationAllowList.map(e => e);
    } else {
      obj.initializationAllowList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreateWeightedPool>): MsgCreateWeightedPool {
    const message = createBaseMsgCreateWeightedPool();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    message.pauseWindowDurationMillis = object.pauseWindowDurationMillis !== undefined && object.pauseWindowDurationMillis !== null ? Long.fromValue(object.pauseWindowDurationMillis) : Long.ZERO;
    message.pauseBufferDurationMillis = object.pauseBufferDurationMillis !== undefined && object.pauseBufferDurationMillis !== null ? Long.fromValue(object.pauseBufferDurationMillis) : Long.ZERO;
    message.tokens = object.tokens?.map(e => CreateWeightedPoolToken.fromPartial(e)) || [];
    message.initializationAllowList = object.initializationAllowList?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgCreateWeightedPoolResponse(): MsgCreateWeightedPoolResponse {
  return {
    poolId: Long.UZERO
  };
}
export const MsgCreateWeightedPoolResponse = {
  encode(message: MsgCreateWeightedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWeightedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateWeightedPoolResponse {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: MsgCreateWeightedPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateWeightedPoolResponse>): MsgCreateWeightedPoolResponse {
    const message = createBaseMsgCreateWeightedPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUpdateSwapFee(): MsgUpdateSwapFee {
  return {
    creator: "",
    poolId: Long.UZERO,
    swapFeeRatio: ""
  };
}
export const MsgUpdateSwapFee = {
  encode(message: MsgUpdateSwapFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(message.swapFeeRatio);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.swapFeeRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateSwapFee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : ""
    };
  },
  toJSON(message: MsgUpdateSwapFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateSwapFee>): MsgUpdateSwapFee {
    const message = createBaseMsgUpdateSwapFee();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    return message;
  }
};
function createBaseMsgUpdateSwapFeeResponse(): MsgUpdateSwapFeeResponse {
  return {};
}
export const MsgUpdateSwapFeeResponse = {
  encode(_: MsgUpdateSwapFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateSwapFeeResponse {
    return {};
  },
  toJSON(_: MsgUpdateSwapFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateSwapFeeResponse>): MsgUpdateSwapFeeResponse {
    const message = createBaseMsgUpdateSwapFeeResponse();
    return message;
  }
};
function createBaseMsgInitializePool(): MsgInitializePool {
  return {
    creator: "",
    poolId: Long.UZERO,
    amountsIn: []
  };
}
export const MsgInitializePool = {
  encode(message: MsgInitializePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitializePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitializePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgInitializePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgInitializePool>): MsgInitializePool {
    const message = createBaseMsgInitializePool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgInitializePoolResponse(): MsgInitializePoolResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: []
  };
}
export const MsgInitializePoolResponse = {
  encode(message: MsgInitializePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitializePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitializePoolResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgInitializePoolResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgInitializePoolResponse>): MsgInitializePoolResponse {
    const message = createBaseMsgInitializePoolResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUpdateWeights(): MsgUpdateWeights {
  return {
    creator: "",
    poolId: Long.UZERO,
    tokenWeights: [],
    startTimeUnixMillis: Long.ZERO,
    endTimeUnixMillis: Long.ZERO
  };
}
export const MsgUpdateWeights = {
  encode(message: MsgUpdateWeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokenWeights) {
      TokenWeight.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.startTimeUnixMillis.isZero()) {
      writer.uint32(32).int64(message.startTimeUnixMillis);
    }
    if (!message.endTimeUnixMillis.isZero()) {
      writer.uint32(40).int64(message.endTimeUnixMillis);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.tokenWeights.push(TokenWeight.decode(reader, reader.uint32()));
          break;
        case 4:
          message.startTimeUnixMillis = (reader.int64() as Long);
          break;
        case 5:
          message.endTimeUnixMillis = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateWeights {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenWeights: Array.isArray(object?.tokenWeights) ? object.tokenWeights.map((e: any) => TokenWeight.fromJSON(e)) : [],
      startTimeUnixMillis: isSet(object.startTimeUnixMillis) ? Long.fromValue(object.startTimeUnixMillis) : Long.ZERO,
      endTimeUnixMillis: isSet(object.endTimeUnixMillis) ? Long.fromValue(object.endTimeUnixMillis) : Long.ZERO
    };
  },
  toJSON(message: MsgUpdateWeights): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.tokenWeights) {
      obj.tokenWeights = message.tokenWeights.map(e => e ? TokenWeight.toJSON(e) : undefined);
    } else {
      obj.tokenWeights = [];
    }
    message.startTimeUnixMillis !== undefined && (obj.startTimeUnixMillis = (message.startTimeUnixMillis || Long.ZERO).toString());
    message.endTimeUnixMillis !== undefined && (obj.endTimeUnixMillis = (message.endTimeUnixMillis || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateWeights>): MsgUpdateWeights {
    const message = createBaseMsgUpdateWeights();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenWeights = object.tokenWeights?.map(e => TokenWeight.fromPartial(e)) || [];
    message.startTimeUnixMillis = object.startTimeUnixMillis !== undefined && object.startTimeUnixMillis !== null ? Long.fromValue(object.startTimeUnixMillis) : Long.ZERO;
    message.endTimeUnixMillis = object.endTimeUnixMillis !== undefined && object.endTimeUnixMillis !== null ? Long.fromValue(object.endTimeUnixMillis) : Long.ZERO;
    return message;
  }
};
function createBaseMsgUpdateWeightsResponse(): MsgUpdateWeightsResponse {
  return {};
}
export const MsgUpdateWeightsResponse = {
  encode(_: MsgUpdateWeightsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateWeightsResponse {
    return {};
  },
  toJSON(_: MsgUpdateWeightsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateWeightsResponse>): MsgUpdateWeightsResponse {
    const message = createBaseMsgUpdateWeightsResponse();
    return message;
  }
};
function createBaseMsgBatchSwap(): MsgBatchSwap {
  return {
    creator: "",
    swapType: 0,
    steps: [],
    minAmountsOut: [],
    maxAmountsIn: []
  };
}
export const MsgBatchSwap = {
  encode(message: MsgBatchSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swapType !== 0) {
      writer.uint32(16).int32(message.swapType);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.maxAmountsIn) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swapType = (reader.int32() as any);
          break;
        case 3:
          message.steps.push(SwapStep.decode(reader, reader.uint32()));
          break;
        case 4:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.maxAmountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBatchSwap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : [],
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBatchSwap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    if (message.maxAmountsIn) {
      obj.maxAmountsIn = message.maxAmountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxAmountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgBatchSwap>): MsgBatchSwap {
    const message = createBaseMsgBatchSwap();
    message.creator = object.creator ?? "";
    message.swapType = object.swapType ?? 0;
    message.steps = object.steps?.map(e => SwapStep.fromPartial(e)) || [];
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.maxAmountsIn = object.maxAmountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBatchSwapResponse(): MsgBatchSwapResponse {
  return {
    amountsIn: [],
    amountsOut: [],
    protocolFee: [],
    swapFee: []
  };
}
export const MsgBatchSwapResponse = {
  encode(message: MsgBatchSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBatchSwapResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBatchSwapResponse): unknown {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgBatchSwapResponse>): MsgBatchSwapResponse {
    const message = createBaseMsgBatchSwapResponse();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSetYammConfiguration(): MsgSetYammConfiguration {
  return {
    creator: "",
    configuration: YammConfiguration.fromPartial({})
  };
}
export const MsgSetYammConfiguration = {
  encode(message: MsgSetYammConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.configuration !== undefined) {
      YammConfiguration.encode(message.configuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetYammConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetYammConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.configuration = YammConfiguration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetYammConfiguration {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      configuration: isSet(object.configuration) ? YammConfiguration.fromJSON(object.configuration) : undefined
    };
  },
  toJSON(message: MsgSetYammConfiguration): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configuration !== undefined && (obj.configuration = message.configuration ? YammConfiguration.toJSON(message.configuration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetYammConfiguration>): MsgSetYammConfiguration {
    const message = createBaseMsgSetYammConfiguration();
    message.creator = object.creator ?? "";
    message.configuration = object.configuration !== undefined && object.configuration !== null ? YammConfiguration.fromPartial(object.configuration) : undefined;
    return message;
  }
};
function createBaseMsgSetYammConfigurationResponse(): MsgSetYammConfigurationResponse {
  return {};
}
export const MsgSetYammConfigurationResponse = {
  encode(_: MsgSetYammConfigurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetYammConfigurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetYammConfigurationResponse {
    return {};
  },
  toJSON(_: MsgSetYammConfigurationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetYammConfigurationResponse>): MsgSetYammConfigurationResponse {
    const message = createBaseMsgSetYammConfigurationResponse();
    return message;
  }
};
function createBaseMsgWhitelistRoute(): MsgWhitelistRoute {
  return {
    authority: "",
    whitelistedRoute: WhitelistedRoute.fromPartial({})
  };
}
export const MsgWhitelistRoute = {
  encode(message: MsgWhitelistRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelistedRoute = WhitelistedRoute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWhitelistRoute {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined
    };
  },
  toJSON(message: MsgWhitelistRoute): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute ? WhitelistedRoute.toJSON(message.whitelistedRoute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgWhitelistRoute>): MsgWhitelistRoute {
    const message = createBaseMsgWhitelistRoute();
    message.authority = object.authority ?? "";
    message.whitelistedRoute = object.whitelistedRoute !== undefined && object.whitelistedRoute !== null ? WhitelistedRoute.fromPartial(object.whitelistedRoute) : undefined;
    return message;
  }
};
function createBaseMsgWhitelistRouteResponse(): MsgWhitelistRouteResponse {
  return {};
}
export const MsgWhitelistRouteResponse = {
  encode(_: MsgWhitelistRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWhitelistRouteResponse {
    return {};
  },
  toJSON(_: MsgWhitelistRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWhitelistRouteResponse>): MsgWhitelistRouteResponse {
    const message = createBaseMsgWhitelistRouteResponse();
    return message;
  }
};
function createBaseMsgSetWhitelistedRouteEnabled(): MsgSetWhitelistedRouteEnabled {
  return {
    authority: "",
    tokenIn: "",
    tokenOut: "",
    enabled: false
  };
}
export const MsgSetWhitelistedRouteEnabled = {
  encode(message: MsgSetWhitelistedRouteEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWhitelistedRouteEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedRouteEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetWhitelistedRouteEnabled {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: MsgSetWhitelistedRouteEnabled): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<MsgSetWhitelistedRouteEnabled>): MsgSetWhitelistedRouteEnabled {
    const message = createBaseMsgSetWhitelistedRouteEnabled();
    message.authority = object.authority ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  }
};
function createBaseMsgSetWhitelistedRouteEnabledResponse(): MsgSetWhitelistedRouteEnabledResponse {
  return {};
}
export const MsgSetWhitelistedRouteEnabledResponse = {
  encode(_: MsgSetWhitelistedRouteEnabledResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWhitelistedRouteEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedRouteEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetWhitelistedRouteEnabledResponse {
    return {};
  },
  toJSON(_: MsgSetWhitelistedRouteEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetWhitelistedRouteEnabledResponse>): MsgSetWhitelistedRouteEnabledResponse {
    const message = createBaseMsgSetWhitelistedRouteEnabledResponse();
    return message;
  }
};
function createBaseMsgSubmitOrder(): MsgSubmitOrder {
  return {
    creator: "",
    poolId: Long.UZERO,
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    allowMatching: false,
    amountPerStep: "",
    totalAmount: "",
    millisInterval: Long.ZERO,
    maxStepSpotPrice: "",
    maxMatchingSpotPrice: undefined
  };
}
export const MsgSubmitOrder = {
  encode(message: MsgSubmitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(40).bool(message.whitelistedRoute);
    }
    if (message.allowMatching === true) {
      writer.uint32(48).bool(message.allowMatching);
    }
    if (message.amountPerStep !== "") {
      writer.uint32(58).string(message.amountPerStep);
    }
    if (message.totalAmount !== "") {
      writer.uint32(66).string(message.totalAmount);
    }
    if (!message.millisInterval.isZero()) {
      writer.uint32(72).int64(message.millisInterval);
    }
    if (message.maxStepSpotPrice !== "") {
      writer.uint32(82).string(message.maxStepSpotPrice);
    }
    if (message.maxMatchingSpotPrice !== undefined) {
      writer.uint32(90).string(message.maxMatchingSpotPrice);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.whitelistedRoute = reader.bool();
          break;
        case 6:
          message.allowMatching = reader.bool();
          break;
        case 7:
          message.amountPerStep = reader.string();
          break;
        case 8:
          message.totalAmount = reader.string();
          break;
        case 9:
          message.millisInterval = (reader.int64() as Long);
          break;
        case 10:
          message.maxStepSpotPrice = reader.string();
          break;
        case 11:
          message.maxMatchingSpotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      allowMatching: isSet(object.allowMatching) ? Boolean(object.allowMatching) : false,
      amountPerStep: isSet(object.amountPerStep) ? String(object.amountPerStep) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      millisInterval: isSet(object.millisInterval) ? Long.fromValue(object.millisInterval) : Long.ZERO,
      maxStepSpotPrice: isSet(object.maxStepSpotPrice) ? String(object.maxStepSpotPrice) : "",
      maxMatchingSpotPrice: isSet(object.maxMatchingSpotPrice) ? String(object.maxMatchingSpotPrice) : undefined
    };
  },
  toJSON(message: MsgSubmitOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.allowMatching !== undefined && (obj.allowMatching = message.allowMatching);
    message.amountPerStep !== undefined && (obj.amountPerStep = message.amountPerStep);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.millisInterval !== undefined && (obj.millisInterval = (message.millisInterval || Long.ZERO).toString());
    message.maxStepSpotPrice !== undefined && (obj.maxStepSpotPrice = message.maxStepSpotPrice);
    message.maxMatchingSpotPrice !== undefined && (obj.maxMatchingSpotPrice = message.maxMatchingSpotPrice);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitOrder>): MsgSubmitOrder {
    const message = createBaseMsgSubmitOrder();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.allowMatching = object.allowMatching ?? false;
    message.amountPerStep = object.amountPerStep ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.millisInterval = object.millisInterval !== undefined && object.millisInterval !== null ? Long.fromValue(object.millisInterval) : Long.ZERO;
    message.maxStepSpotPrice = object.maxStepSpotPrice ?? "";
    message.maxMatchingSpotPrice = object.maxMatchingSpotPrice ?? undefined;
    return message;
  }
};
function createBaseMsgSubmitOrderResponse(): MsgSubmitOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const MsgSubmitOrderResponse = {
  encode(message: MsgSubmitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: MsgSubmitOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitOrderResponse>): MsgSubmitOrderResponse {
    const message = createBaseMsgSubmitOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    creator: "",
    id: Long.UZERO
  };
}
export const MsgCancelOrder = {
  encode(message: MsgCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {
    withdrawnDeposit: Coin.fromPartial({})
  };
}
export const MsgCancelOrderResponse = {
  encode(message: MsgCancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawnDeposit !== undefined) {
      Coin.encode(message.withdrawnDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawnDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelOrderResponse {
    return {
      withdrawnDeposit: isSet(object.withdrawnDeposit) ? Coin.fromJSON(object.withdrawnDeposit) : undefined
    };
  },
  toJSON(message: MsgCancelOrderResponse): unknown {
    const obj: any = {};
    message.withdrawnDeposit !== undefined && (obj.withdrawnDeposit = message.withdrawnDeposit ? Coin.toJSON(message.withdrawnDeposit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    message.withdrawnDeposit = object.withdrawnDeposit !== undefined && object.withdrawnDeposit !== null ? Coin.fromPartial(object.withdrawnDeposit) : undefined;
    return message;
  }
};
function createBaseMsgProposeMatch(): MsgProposeMatch {
  return {
    creator: "",
    pairs: []
  };
}
export const MsgProposeMatch = {
  encode(message: MsgProposeMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.pairs) {
      PairMatchProposal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pairs.push(PairMatchProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProposeMatch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => PairMatchProposal.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgProposeMatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PairMatchProposal.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgProposeMatch>): MsgProposeMatch {
    const message = createBaseMsgProposeMatch();
    message.creator = object.creator ?? "";
    message.pairs = object.pairs?.map(e => PairMatchProposal.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgProposeMatchResponse(): MsgProposeMatchResponse {
  return {
    proposerReward: []
  };
}
export const MsgProposeMatchResponse = {
  encode(message: MsgProposeMatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposerReward) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeMatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposerReward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProposeMatchResponse {
    return {
      proposerReward: Array.isArray(object?.proposerReward) ? object.proposerReward.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgProposeMatchResponse): unknown {
    const obj: any = {};
    if (message.proposerReward) {
      obj.proposerReward = message.proposerReward.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.proposerReward = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgProposeMatchResponse>): MsgProposeMatchResponse {
    const message = createBaseMsgProposeMatchResponse();
    message.proposerReward = object.proposerReward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSetCircuitBreakers(): MsgSetCircuitBreakers {
  return {
    creator: "",
    poolId: Long.UZERO,
    tokenCircuitBreakers: []
  };
}
export const MsgSetCircuitBreakers = {
  encode(message: MsgSetCircuitBreakers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokenCircuitBreakers) {
      TokenCircuitBreakerSettings.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCircuitBreakers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCircuitBreakers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.tokenCircuitBreakers.push(TokenCircuitBreakerSettings.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetCircuitBreakers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenCircuitBreakers: Array.isArray(object?.tokenCircuitBreakers) ? object.tokenCircuitBreakers.map((e: any) => TokenCircuitBreakerSettings.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetCircuitBreakers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.tokenCircuitBreakers) {
      obj.tokenCircuitBreakers = message.tokenCircuitBreakers.map(e => e ? TokenCircuitBreakerSettings.toJSON(e) : undefined);
    } else {
      obj.tokenCircuitBreakers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetCircuitBreakers>): MsgSetCircuitBreakers {
    const message = createBaseMsgSetCircuitBreakers();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenCircuitBreakers = object.tokenCircuitBreakers?.map(e => TokenCircuitBreakerSettings.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSetCircuitBreakersResponse(): MsgSetCircuitBreakersResponse {
  return {};
}
export const MsgSetCircuitBreakersResponse = {
  encode(_: MsgSetCircuitBreakersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCircuitBreakersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCircuitBreakersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetCircuitBreakersResponse {
    return {};
  },
  toJSON(_: MsgSetCircuitBreakersResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetCircuitBreakersResponse>): MsgSetCircuitBreakersResponse {
    const message = createBaseMsgSetCircuitBreakersResponse();
    return message;
  }
};
function createBaseMsgSetRecoveryMode(): MsgSetRecoveryMode {
  return {
    authority: "",
    poolId: Long.UZERO,
    recoveryMode: false
  };
}
export const MsgSetRecoveryMode = {
  encode(message: MsgSetRecoveryMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.recoveryMode === true) {
      writer.uint32(24).bool(message.recoveryMode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRecoveryMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRecoveryMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.recoveryMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetRecoveryMode {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      recoveryMode: isSet(object.recoveryMode) ? Boolean(object.recoveryMode) : false
    };
  },
  toJSON(message: MsgSetRecoveryMode): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.recoveryMode !== undefined && (obj.recoveryMode = message.recoveryMode);
    return obj;
  },
  fromPartial(object: Partial<MsgSetRecoveryMode>): MsgSetRecoveryMode {
    const message = createBaseMsgSetRecoveryMode();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.recoveryMode = object.recoveryMode ?? false;
    return message;
  }
};
function createBaseMsgSetRecoveryModeResponse(): MsgSetRecoveryModeResponse {
  return {};
}
export const MsgSetRecoveryModeResponse = {
  encode(_: MsgSetRecoveryModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRecoveryModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRecoveryModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetRecoveryModeResponse {
    return {};
  },
  toJSON(_: MsgSetRecoveryModeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetRecoveryModeResponse>): MsgSetRecoveryModeResponse {
    const message = createBaseMsgSetRecoveryModeResponse();
    return message;
  }
};
function createBaseMsgRecoveryExit(): MsgRecoveryExit {
  return {
    creator: "",
    poolId: Long.UZERO,
    lptIn: "",
    minAmountsOut: []
  };
}
export const MsgRecoveryExit = {
  encode(message: MsgRecoveryExit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(26).string(message.lptIn);
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecoveryExit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoveryExit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.lptIn = reader.string();
          break;
        case 4:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecoveryExit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRecoveryExit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgRecoveryExit>): MsgRecoveryExit {
    const message = createBaseMsgRecoveryExit();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptIn = object.lptIn ?? "";
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgRecoveryExitResponse(): MsgRecoveryExitResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: []
  };
}
export const MsgRecoveryExitResponse = {
  encode(message: MsgRecoveryExitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecoveryExitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoveryExitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecoveryExitResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRecoveryExitResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgRecoveryExitResponse>): MsgRecoveryExitResponse {
    const message = createBaseMsgRecoveryExitResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSetPauseMode(): MsgSetPauseMode {
  return {
    creator: "",
    poolId: Long.UZERO,
    pauseMode: false
  };
}
export const MsgSetPauseMode = {
  encode(message: MsgSetPauseMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pauseMode === true) {
      writer.uint32(24).bool(message.pauseMode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPauseMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.pauseMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPauseMode {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      pauseMode: isSet(object.pauseMode) ? Boolean(object.pauseMode) : false
    };
  },
  toJSON(message: MsgSetPauseMode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pauseMode !== undefined && (obj.pauseMode = message.pauseMode);
    return obj;
  },
  fromPartial(object: Partial<MsgSetPauseMode>): MsgSetPauseMode {
    const message = createBaseMsgSetPauseMode();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pauseMode = object.pauseMode ?? false;
    return message;
  }
};
function createBaseMsgSetPauseModeResponse(): MsgSetPauseModeResponse {
  return {};
}
export const MsgSetPauseModeResponse = {
  encode(_: MsgSetPauseModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPauseModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetPauseModeResponse {
    return {};
  },
  toJSON(_: MsgSetPauseModeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPauseModeResponse>): MsgSetPauseModeResponse {
    const message = createBaseMsgSetPauseModeResponse();
    return message;
  }
};
function createBaseMsgSetVaultPauseMode(): MsgSetVaultPauseMode {
  return {
    authority: "",
    pauseMode: false
  };
}
export const MsgSetVaultPauseMode = {
  encode(message: MsgSetVaultPauseMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.pauseMode === true) {
      writer.uint32(16).bool(message.pauseMode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVaultPauseMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVaultPauseMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.pauseMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetVaultPauseMode {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      pauseMode: isSet(object.pauseMode) ? Boolean(object.pauseMode) : false
    };
  },
  toJSON(message: MsgSetVaultPauseMode): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.pauseMode !== undefined && (obj.pauseMode = message.pauseMode);
    return obj;
  },
  fromPartial(object: Partial<MsgSetVaultPauseMode>): MsgSetVaultPauseMode {
    const message = createBaseMsgSetVaultPauseMode();
    message.authority = object.authority ?? "";
    message.pauseMode = object.pauseMode ?? false;
    return message;
  }
};
function createBaseMsgSetVaultPauseModeResponse(): MsgSetVaultPauseModeResponse {
  return {};
}
export const MsgSetVaultPauseModeResponse = {
  encode(_: MsgSetVaultPauseModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVaultPauseModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVaultPauseModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetVaultPauseModeResponse {
    return {};
  },
  toJSON(_: MsgSetVaultPauseModeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetVaultPauseModeResponse>): MsgSetVaultPauseModeResponse {
    const message = createBaseMsgSetVaultPauseModeResponse();
    return message;
  }
};
function createBaseMsgCreateOraclePricePair(): MsgCreateOraclePricePair {
  return {
    authority: "",
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const MsgCreateOraclePricePair = {
  encode(message: MsgCreateOraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.oraclePricePair = OraclePricePair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: MsgCreateOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateOraclePricePair>): MsgCreateOraclePricePair {
    const message = createBaseMsgCreateOraclePricePair();
    message.authority = object.authority ?? "";
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  }
};
function createBaseMsgCreateOraclePricePairResponse(): MsgCreateOraclePricePairResponse {
  return {};
}
export const MsgCreateOraclePricePairResponse = {
  encode(_: MsgCreateOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateOraclePricePairResponse {
    return {};
  },
  toJSON(_: MsgCreateOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateOraclePricePairResponse>): MsgCreateOraclePricePairResponse {
    const message = createBaseMsgCreateOraclePricePairResponse();
    return message;
  }
};
function createBaseMsgUpdateOraclePricePair(): MsgUpdateOraclePricePair {
  return {
    authority: "",
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const MsgUpdateOraclePricePair = {
  encode(message: MsgUpdateOraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.oraclePricePair = OraclePricePair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: MsgUpdateOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateOraclePricePair>): MsgUpdateOraclePricePair {
    const message = createBaseMsgUpdateOraclePricePair();
    message.authority = object.authority ?? "";
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  }
};
function createBaseMsgUpdateOraclePricePairResponse(): MsgUpdateOraclePricePairResponse {
  return {};
}
export const MsgUpdateOraclePricePairResponse = {
  encode(_: MsgUpdateOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateOraclePricePairResponse {
    return {};
  },
  toJSON(_: MsgUpdateOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateOraclePricePairResponse>): MsgUpdateOraclePricePairResponse {
    const message = createBaseMsgUpdateOraclePricePairResponse();
    return message;
  }
};
function createBaseMsgDeleteOraclePricePair(): MsgDeleteOraclePricePair {
  return {
    authority: "",
    assetId: ""
  };
}
export const MsgDeleteOraclePricePair = {
  encode(message: MsgDeleteOraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: MsgDeleteOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<MsgDeleteOraclePricePair>): MsgDeleteOraclePricePair {
    const message = createBaseMsgDeleteOraclePricePair();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseMsgDeleteOraclePricePairResponse(): MsgDeleteOraclePricePairResponse {
  return {};
}
export const MsgDeleteOraclePricePairResponse = {
  encode(_: MsgDeleteOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteOraclePricePairResponse {
    return {};
  },
  toJSON(_: MsgDeleteOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDeleteOraclePricePairResponse>): MsgDeleteOraclePricePairResponse {
    const message = createBaseMsgDeleteOraclePricePairResponse();
    return message;
  }
};
function createBaseMsgSetSwapProtocolFee(): MsgSetSwapProtocolFee {
  return {
    authority: "",
    poolId: Long.UZERO,
    swapProtocolFee: undefined
  };
}
export const MsgSetSwapProtocolFee = {
  encode(message: MsgSetSwapProtocolFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapProtocolFee !== undefined) {
      writer.uint32(26).string(message.swapProtocolFee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSwapProtocolFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSwapProtocolFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.swapProtocolFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetSwapProtocolFee {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      swapProtocolFee: isSet(object.swapProtocolFee) ? String(object.swapProtocolFee) : undefined
    };
  },
  toJSON(message: MsgSetSwapProtocolFee): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.swapProtocolFee !== undefined && (obj.swapProtocolFee = message.swapProtocolFee);
    return obj;
  },
  fromPartial(object: Partial<MsgSetSwapProtocolFee>): MsgSetSwapProtocolFee {
    const message = createBaseMsgSetSwapProtocolFee();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.swapProtocolFee = object.swapProtocolFee ?? undefined;
    return message;
  }
};
function createBaseMsgSetSwapProtocolFeeResponse(): MsgSetSwapProtocolFeeResponse {
  return {};
}
export const MsgSetSwapProtocolFeeResponse = {
  encode(_: MsgSetSwapProtocolFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSwapProtocolFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSwapProtocolFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetSwapProtocolFeeResponse {
    return {};
  },
  toJSON(_: MsgSetSwapProtocolFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetSwapProtocolFeeResponse>): MsgSetSwapProtocolFeeResponse {
    const message = createBaseMsgSetSwapProtocolFeeResponse();
    return message;
  }
};
function createBaseMsgSetJoinExitProtocolFee(): MsgSetJoinExitProtocolFee {
  return {
    authority: "",
    poolId: Long.UZERO,
    joinExitProtocolFee: undefined
  };
}
export const MsgSetJoinExitProtocolFee = {
  encode(message: MsgSetJoinExitProtocolFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.joinExitProtocolFee !== undefined) {
      writer.uint32(26).string(message.joinExitProtocolFee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetJoinExitProtocolFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetJoinExitProtocolFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.joinExitProtocolFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetJoinExitProtocolFee {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      joinExitProtocolFee: isSet(object.joinExitProtocolFee) ? String(object.joinExitProtocolFee) : undefined
    };
  },
  toJSON(message: MsgSetJoinExitProtocolFee): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.joinExitProtocolFee !== undefined && (obj.joinExitProtocolFee = message.joinExitProtocolFee);
    return obj;
  },
  fromPartial(object: Partial<MsgSetJoinExitProtocolFee>): MsgSetJoinExitProtocolFee {
    const message = createBaseMsgSetJoinExitProtocolFee();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.joinExitProtocolFee = object.joinExitProtocolFee ?? undefined;
    return message;
  }
};
function createBaseMsgSetJoinExitProtocolFeeResponse(): MsgSetJoinExitProtocolFeeResponse {
  return {};
}
export const MsgSetJoinExitProtocolFeeResponse = {
  encode(_: MsgSetJoinExitProtocolFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetJoinExitProtocolFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetJoinExitProtocolFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetJoinExitProtocolFeeResponse {
    return {};
  },
  toJSON(_: MsgSetJoinExitProtocolFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetJoinExitProtocolFeeResponse>): MsgSetJoinExitProtocolFeeResponse {
    const message = createBaseMsgSetJoinExitProtocolFeeResponse();
    return message;
  }
};
function createBaseMsgIntroduceYammLpToWeightedPool(): MsgIntroduceYammLpToWeightedPool {
  return {
    authority: "",
    weightedPoolId: Long.UZERO,
    yammPoolId: Long.UZERO,
    tokenNormalizedWeight: "",
    virtualBalanceIntervalMillis: Long.ZERO
  };
}
export const MsgIntroduceYammLpToWeightedPool = {
  encode(message: MsgIntroduceYammLpToWeightedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.weightedPoolId.isZero()) {
      writer.uint32(16).uint64(message.weightedPoolId);
    }
    if (!message.yammPoolId.isZero()) {
      writer.uint32(24).uint64(message.yammPoolId);
    }
    if (message.tokenNormalizedWeight !== "") {
      writer.uint32(34).string(message.tokenNormalizedWeight);
    }
    if (!message.virtualBalanceIntervalMillis.isZero()) {
      writer.uint32(40).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIntroduceYammLpToWeightedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceYammLpToWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.weightedPoolId = (reader.uint64() as Long);
          break;
        case 3:
          message.yammPoolId = (reader.uint64() as Long);
          break;
        case 4:
          message.tokenNormalizedWeight = reader.string();
          break;
        case 5:
          message.virtualBalanceIntervalMillis = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIntroduceYammLpToWeightedPool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      weightedPoolId: isSet(object.weightedPoolId) ? Long.fromValue(object.weightedPoolId) : Long.UZERO,
      yammPoolId: isSet(object.yammPoolId) ? Long.fromValue(object.yammPoolId) : Long.UZERO,
      tokenNormalizedWeight: isSet(object.tokenNormalizedWeight) ? String(object.tokenNormalizedWeight) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? Long.fromValue(object.virtualBalanceIntervalMillis) : Long.ZERO
    };
  },
  toJSON(message: MsgIntroduceYammLpToWeightedPool): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.weightedPoolId !== undefined && (obj.weightedPoolId = (message.weightedPoolId || Long.UZERO).toString());
    message.yammPoolId !== undefined && (obj.yammPoolId = (message.yammPoolId || Long.UZERO).toString());
    message.tokenNormalizedWeight !== undefined && (obj.tokenNormalizedWeight = message.tokenNormalizedWeight);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgIntroduceYammLpToWeightedPool>): MsgIntroduceYammLpToWeightedPool {
    const message = createBaseMsgIntroduceYammLpToWeightedPool();
    message.authority = object.authority ?? "";
    message.weightedPoolId = object.weightedPoolId !== undefined && object.weightedPoolId !== null ? Long.fromValue(object.weightedPoolId) : Long.UZERO;
    message.yammPoolId = object.yammPoolId !== undefined && object.yammPoolId !== null ? Long.fromValue(object.yammPoolId) : Long.UZERO;
    message.tokenNormalizedWeight = object.tokenNormalizedWeight ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? Long.fromValue(object.virtualBalanceIntervalMillis) : Long.ZERO;
    return message;
  }
};
function createBaseMsgIntroduceYammLpToWeightedPoolResponse(): MsgIntroduceYammLpToWeightedPoolResponse {
  return {};
}
export const MsgIntroduceYammLpToWeightedPoolResponse = {
  encode(_: MsgIntroduceYammLpToWeightedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIntroduceYammLpToWeightedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceYammLpToWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgIntroduceYammLpToWeightedPoolResponse {
    return {};
  },
  toJSON(_: MsgIntroduceYammLpToWeightedPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgIntroduceYammLpToWeightedPoolResponse>): MsgIntroduceYammLpToWeightedPoolResponse {
    const message = createBaseMsgIntroduceYammLpToWeightedPoolResponse();
    return message;
  }
};
function createBaseMsgIntroduceAssetBaseTokenToWeightedPool(): MsgIntroduceAssetBaseTokenToWeightedPool {
  return {
    authority: "",
    weightedPoolId: Long.UZERO,
    tokenDenom: "",
    assetId: "",
    tokenNormalizedWeight: "",
    virtualBalanceIntervalMillis: Long.ZERO
  };
}
export const MsgIntroduceAssetBaseTokenToWeightedPool = {
  encode(message: MsgIntroduceAssetBaseTokenToWeightedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.weightedPoolId.isZero()) {
      writer.uint32(16).uint64(message.weightedPoolId);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(26).string(message.tokenDenom);
    }
    if (message.assetId !== "") {
      writer.uint32(34).string(message.assetId);
    }
    if (message.tokenNormalizedWeight !== "") {
      writer.uint32(42).string(message.tokenNormalizedWeight);
    }
    if (!message.virtualBalanceIntervalMillis.isZero()) {
      writer.uint32(48).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIntroduceAssetBaseTokenToWeightedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.weightedPoolId = (reader.uint64() as Long);
          break;
        case 3:
          message.tokenDenom = reader.string();
          break;
        case 4:
          message.assetId = reader.string();
          break;
        case 5:
          message.tokenNormalizedWeight = reader.string();
          break;
        case 6:
          message.virtualBalanceIntervalMillis = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIntroduceAssetBaseTokenToWeightedPool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      weightedPoolId: isSet(object.weightedPoolId) ? Long.fromValue(object.weightedPoolId) : Long.UZERO,
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      tokenNormalizedWeight: isSet(object.tokenNormalizedWeight) ? String(object.tokenNormalizedWeight) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? Long.fromValue(object.virtualBalanceIntervalMillis) : Long.ZERO
    };
  },
  toJSON(message: MsgIntroduceAssetBaseTokenToWeightedPool): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.weightedPoolId !== undefined && (obj.weightedPoolId = (message.weightedPoolId || Long.UZERO).toString());
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.tokenNormalizedWeight !== undefined && (obj.tokenNormalizedWeight = message.tokenNormalizedWeight);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgIntroduceAssetBaseTokenToWeightedPool>): MsgIntroduceAssetBaseTokenToWeightedPool {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPool();
    message.authority = object.authority ?? "";
    message.weightedPoolId = object.weightedPoolId !== undefined && object.weightedPoolId !== null ? Long.fromValue(object.weightedPoolId) : Long.UZERO;
    message.tokenDenom = object.tokenDenom ?? "";
    message.assetId = object.assetId ?? "";
    message.tokenNormalizedWeight = object.tokenNormalizedWeight ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? Long.fromValue(object.virtualBalanceIntervalMillis) : Long.ZERO;
    return message;
  }
};
function createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse(): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
  return {};
}
export const MsgIntroduceAssetBaseTokenToWeightedPoolResponse = {
  encode(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    return {};
  },
  toJSON(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgIntroduceAssetBaseTokenToWeightedPoolResponse>): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse();
    return message;
  }
};
function createBaseMsgCancelPendingTokenIntroduction(): MsgCancelPendingTokenIntroduction {
  return {
    authority: "",
    assetId: "",
    targetPoolId: Long.UZERO
  };
}
export const MsgCancelPendingTokenIntroduction = {
  encode(message: MsgCancelPendingTokenIntroduction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (!message.targetPoolId.isZero()) {
      writer.uint32(24).uint64(message.targetPoolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelPendingTokenIntroduction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.targetPoolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelPendingTokenIntroduction {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? Long.fromValue(object.targetPoolId) : Long.UZERO
    };
  },
  toJSON(message: MsgCancelPendingTokenIntroduction): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelPendingTokenIntroduction>): MsgCancelPendingTokenIntroduction {
    const message = createBaseMsgCancelPendingTokenIntroduction();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? Long.fromValue(object.targetPoolId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCancelPendingTokenIntroductionResponse(): MsgCancelPendingTokenIntroductionResponse {
  return {};
}
export const MsgCancelPendingTokenIntroductionResponse = {
  encode(_: MsgCancelPendingTokenIntroductionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelPendingTokenIntroductionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPendingTokenIntroductionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCancelPendingTokenIntroductionResponse {
    return {};
  },
  toJSON(_: MsgCancelPendingTokenIntroductionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCancelPendingTokenIntroductionResponse>): MsgCancelPendingTokenIntroductionResponse {
    const message = createBaseMsgCancelPendingTokenIntroductionResponse();
    return message;
  }
};
function createBaseMsgRemoveTokenFromWeightedPool(): MsgRemoveTokenFromWeightedPool {
  return {
    creator: "",
    poolId: Long.UZERO,
    tokenDenom: "",
    virtualBalanceIntervalMillis: Long.ZERO
  };
}
export const MsgRemoveTokenFromWeightedPool = {
  encode(message: MsgRemoveTokenFromWeightedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(26).string(message.tokenDenom);
    }
    if (!message.virtualBalanceIntervalMillis.isZero()) {
      writer.uint32(32).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveTokenFromWeightedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenFromWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.tokenDenom = reader.string();
          break;
        case 4:
          message.virtualBalanceIntervalMillis = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveTokenFromWeightedPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? Long.fromValue(object.virtualBalanceIntervalMillis) : Long.ZERO
    };
  },
  toJSON(message: MsgRemoveTokenFromWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRemoveTokenFromWeightedPool>): MsgRemoveTokenFromWeightedPool {
    const message = createBaseMsgRemoveTokenFromWeightedPool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenDenom = object.tokenDenom ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? Long.fromValue(object.virtualBalanceIntervalMillis) : Long.ZERO;
    return message;
  }
};
function createBaseMsgRemoveTokenFromWeightedPoolResponse(): MsgRemoveTokenFromWeightedPoolResponse {
  return {};
}
export const MsgRemoveTokenFromWeightedPoolResponse = {
  encode(_: MsgRemoveTokenFromWeightedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveTokenFromWeightedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenFromWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRemoveTokenFromWeightedPoolResponse {
    return {};
  },
  toJSON(_: MsgRemoveTokenFromWeightedPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRemoveTokenFromWeightedPoolResponse>): MsgRemoveTokenFromWeightedPoolResponse {
    const message = createBaseMsgRemoveTokenFromWeightedPoolResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    generalPoolParameters: undefined,
    yammParameters: undefined,
    orderParameters: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.generalPoolParameters !== undefined) {
      GeneralPoolParameters.encode(message.generalPoolParameters, writer.uint32(18).fork()).ldelim();
    }
    if (message.yammParameters !== undefined) {
      YammParameters.encode(message.yammParameters, writer.uint32(26).fork()).ldelim();
    }
    if (message.orderParameters !== undefined) {
      OrderParameters.encode(message.orderParameters, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.generalPoolParameters = GeneralPoolParameters.decode(reader, reader.uint32());
          break;
        case 3:
          message.yammParameters = YammParameters.decode(reader, reader.uint32());
          break;
        case 4:
          message.orderParameters = OrderParameters.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      generalPoolParameters: isSet(object.generalPoolParameters) ? GeneralPoolParameters.fromJSON(object.generalPoolParameters) : undefined,
      yammParameters: isSet(object.yammParameters) ? YammParameters.fromJSON(object.yammParameters) : undefined,
      orderParameters: isSet(object.orderParameters) ? OrderParameters.fromJSON(object.orderParameters) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.generalPoolParameters !== undefined && (obj.generalPoolParameters = message.generalPoolParameters ? GeneralPoolParameters.toJSON(message.generalPoolParameters) : undefined);
    message.yammParameters !== undefined && (obj.yammParameters = message.yammParameters ? YammParameters.toJSON(message.yammParameters) : undefined);
    message.orderParameters !== undefined && (obj.orderParameters = message.orderParameters ? OrderParameters.toJSON(message.orderParameters) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.generalPoolParameters = object.generalPoolParameters !== undefined && object.generalPoolParameters !== null ? GeneralPoolParameters.fromPartial(object.generalPoolParameters) : undefined;
    message.yammParameters = object.yammParameters !== undefined && object.yammParameters !== null ? YammParameters.fromPartial(object.yammParameters) : undefined;
    message.orderParameters = object.orderParameters !== undefined && object.orderParameters !== null ? OrderParameters.fromPartial(object.orderParameters) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgAddMaturityToYamm(): MsgAddMaturityToYamm {
  return {
    authority: "",
    assetId: "",
    maturitySymbol: ""
  };
}
export const MsgAddMaturityToYamm = {
  encode(message: MsgAddMaturityToYamm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMaturityToYamm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMaturityToYamm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.maturitySymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddMaturityToYamm {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: MsgAddMaturityToYamm): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<MsgAddMaturityToYamm>): MsgAddMaturityToYamm {
    const message = createBaseMsgAddMaturityToYamm();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  }
};
function createBaseMsgAddMaturityToYammResponse(): MsgAddMaturityToYammResponse {
  return {};
}
export const MsgAddMaturityToYammResponse = {
  encode(_: MsgAddMaturityToYammResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMaturityToYammResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMaturityToYammResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddMaturityToYammResponse {
    return {};
  },
  toJSON(_: MsgAddMaturityToYammResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAddMaturityToYammResponse>): MsgAddMaturityToYammResponse {
    const message = createBaseMsgAddMaturityToYammResponse();
    return message;
  }
};
function createBaseMsgSetInitializationAllowList(): MsgSetInitializationAllowList {
  return {
    creator: "",
    poolId: Long.UZERO,
    initializationAllowList: []
  };
}
export const MsgSetInitializationAllowList = {
  encode(message: MsgSetInitializationAllowList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.initializationAllowList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetInitializationAllowList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInitializationAllowList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.initializationAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetInitializationAllowList {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      initializationAllowList: Array.isArray(object?.initializationAllowList) ? object.initializationAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgSetInitializationAllowList): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.initializationAllowList) {
      obj.initializationAllowList = message.initializationAllowList.map(e => e);
    } else {
      obj.initializationAllowList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetInitializationAllowList>): MsgSetInitializationAllowList {
    const message = createBaseMsgSetInitializationAllowList();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.initializationAllowList = object.initializationAllowList?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgSetInitializationAllowListResponse(): MsgSetInitializationAllowListResponse {
  return {};
}
export const MsgSetInitializationAllowListResponse = {
  encode(_: MsgSetInitializationAllowListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetInitializationAllowListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInitializationAllowListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetInitializationAllowListResponse {
    return {};
  },
  toJSON(_: MsgSetInitializationAllowListResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetInitializationAllowListResponse>): MsgSetInitializationAllowListResponse {
    const message = createBaseMsgSetInitializationAllowListResponse();
    return message;
  }
};