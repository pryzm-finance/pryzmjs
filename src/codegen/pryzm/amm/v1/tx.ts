import { Swap, SwapAmino, SwapSDKType, SwapType, SwapStep, SwapStepAmino, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TokenWeight, TokenWeightAmino, TokenWeightSDKType } from "./token_weight";
import { YammConfiguration, YammConfigurationAmino, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteAmino, WhitelistedRouteSDKType } from "./whitelisted_route";
import { PairMatchProposal, PairMatchProposalAmino, PairMatchProposalSDKType } from "./pair_match_proposal";
import { TokenCircuitBreakerSettings, TokenCircuitBreakerSettingsAmino, TokenCircuitBreakerSettingsSDKType } from "./token_circuit_breaker_settings";
import { OraclePricePair, OraclePricePairAmino, OraclePricePairSDKType } from "./oracle_price_pair";
import { GeneralPoolParameters, GeneralPoolParametersAmino, GeneralPoolParametersSDKType, YammParameters, YammParametersAmino, YammParametersSDKType, OrderParameters, OrderParametersAmino, OrderParametersSDKType, AuthorizationParameters, AuthorizationParametersAmino, AuthorizationParametersSDKType } from "./params";
import { PoolPauseWindow, PoolPauseWindowAmino, PoolPauseWindowSDKType } from "./pool";
import { Order, OrderAmino, OrderSDKType } from "./order";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface MsgSingleSwap {
  creator: string;
  swap: Swap;
  maxAmountIn?: string;
  minAmountOut?: string;
}
export interface MsgSingleSwapProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSingleSwap";
  value: Uint8Array;
}
export interface MsgSingleSwapAmino {
  creator?: string;
  swap: SwapAmino;
  max_amount_in?: string;
  min_amount_out?: string;
}
export interface MsgSingleSwapAminoMsg {
  type: "pryzm/amm/v1/SingleSwap";
  value: MsgSingleSwapAmino;
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
export interface MsgSingleSwapResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSingleSwapResponse";
  value: Uint8Array;
}
export interface MsgSingleSwapResponseAmino {
  amount_out?: CoinAmino;
  amount_in?: CoinAmino;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface MsgSingleSwapResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSingleSwapResponse";
  value: MsgSingleSwapResponseAmino;
}
export interface MsgSingleSwapResponseSDKType {
  amount_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgJoinAllTokensExactLpt {
  creator: string;
  poolId: bigint;
  lptOut: string;
  /** is not casted to coins, to allow for zero limits */
  maxAmountsIn: Coin[];
}
export interface MsgJoinAllTokensExactLptProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLpt";
  value: Uint8Array;
}
export interface MsgJoinAllTokensExactLptAmino {
  creator?: string;
  pool_id: string;
  lpt_out?: string;
  /** is not casted to coins, to allow for zero limits */
  max_amounts_in: CoinAmino[];
}
export interface MsgJoinAllTokensExactLptAminoMsg {
  type: "pryzm/amm/v1/JoinAllTokensExactLpt";
  value: MsgJoinAllTokensExactLptAmino;
}
export interface MsgJoinAllTokensExactLptSDKType {
  creator: string;
  pool_id: bigint;
  lpt_out: string;
  max_amounts_in: CoinSDKType[];
}
export interface MsgJoinAllTokensExactLptResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface MsgJoinAllTokensExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLptResponse";
  value: Uint8Array;
}
export interface MsgJoinAllTokensExactLptResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
}
export interface MsgJoinAllTokensExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgJoinAllTokensExactLptResponse";
  value: MsgJoinAllTokensExactLptResponseAmino;
}
export interface MsgJoinAllTokensExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface MsgJoinTokenExactLpt {
  creator: string;
  poolId: bigint;
  lptOut: string;
  tokenIn: string;
  maxAmountIn?: string;
}
export interface MsgJoinTokenExactLptProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLpt";
  value: Uint8Array;
}
export interface MsgJoinTokenExactLptAmino {
  creator?: string;
  pool_id: string;
  lpt_out?: string;
  token_in?: string;
  max_amount_in?: string;
}
export interface MsgJoinTokenExactLptAminoMsg {
  type: "pryzm/amm/v1/JoinTokenExactLpt";
  value: MsgJoinTokenExactLptAmino;
}
export interface MsgJoinTokenExactLptSDKType {
  creator: string;
  pool_id: bigint;
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
export interface MsgJoinTokenExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLptResponse";
  value: Uint8Array;
}
export interface MsgJoinTokenExactLptResponseAmino {
  lpt_out?: CoinAmino;
  amount_in?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface MsgJoinTokenExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgJoinTokenExactLptResponse";
  value: MsgJoinTokenExactLptResponseAmino;
}
export interface MsgJoinTokenExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgJoinExactTokens {
  creator: string;
  poolId: bigint;
  amountsIn: Coin[];
  minLptOut?: string;
}
export interface MsgJoinExactTokensProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinExactTokens";
  value: Uint8Array;
}
export interface MsgJoinExactTokensAmino {
  creator?: string;
  pool_id: string;
  amounts_in?: CoinAmino[];
  min_lpt_out?: string;
}
export interface MsgJoinExactTokensAminoMsg {
  type: "pryzm/amm/v1/JoinExactTokens";
  value: MsgJoinExactTokensAmino;
}
export interface MsgJoinExactTokensSDKType {
  creator: string;
  pool_id: bigint;
  amounts_in: CoinSDKType[];
  min_lpt_out?: string;
}
export interface MsgJoinExactTokensResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface MsgJoinExactTokensResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinExactTokensResponse";
  value: Uint8Array;
}
export interface MsgJoinExactTokensResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface MsgJoinExactTokensResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgJoinExactTokensResponse";
  value: MsgJoinExactTokensResponseAmino;
}
export interface MsgJoinExactTokensResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface MsgZeroImpactJoinYamm {
  creator: string;
  cAmountIn: Coin;
  minLptOut?: string;
}
export interface MsgZeroImpactJoinYammProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYamm";
  value: Uint8Array;
}
export interface MsgZeroImpactJoinYammAmino {
  creator?: string;
  c_amount_in?: CoinAmino;
  min_lpt_out?: string;
}
export interface MsgZeroImpactJoinYammAminoMsg {
  type: "pryzm/amm/v1/ZeroImpactJoinYamm";
  value: MsgZeroImpactJoinYammAmino;
}
export interface MsgZeroImpactJoinYammSDKType {
  creator: string;
  c_amount_in: CoinSDKType;
  min_lpt_out?: string;
}
export interface MsgZeroImpactJoinYammResponse {
  lptOut: Coin;
  yOut: Coin[];
  refractFee: Coin;
  joinProtocolFee: Coin[];
  swapFee: Coin[];
}
export interface MsgZeroImpactJoinYammResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYammResponse";
  value: Uint8Array;
}
export interface MsgZeroImpactJoinYammResponseAmino {
  lpt_out?: CoinAmino;
  y_out?: CoinAmino[];
  refract_fee?: CoinAmino;
  join_protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface MsgZeroImpactJoinYammResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgZeroImpactJoinYammResponse";
  value: MsgZeroImpactJoinYammResponseAmino;
}
export interface MsgZeroImpactJoinYammResponseSDKType {
  lpt_out: CoinSDKType;
  y_out: CoinSDKType[];
  refract_fee: CoinSDKType;
  join_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface MsgExitExactTokens {
  creator: string;
  poolId: bigint;
  amountsOut: Coin[];
  maxLptIn?: string;
}
export interface MsgExitExactTokensProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitExactTokens";
  value: Uint8Array;
}
export interface MsgExitExactTokensAmino {
  creator?: string;
  pool_id: string;
  amounts_out?: CoinAmino[];
  max_lpt_in?: string;
}
export interface MsgExitExactTokensAminoMsg {
  type: "pryzm/amm/v1/ExitExactTokens";
  value: MsgExitExactTokensAmino;
}
export interface MsgExitExactTokensSDKType {
  creator: string;
  pool_id: bigint;
  amounts_out: CoinSDKType[];
  max_lpt_in?: string;
}
export interface MsgExitExactTokensResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  swapFee: Coin[];
}
export interface MsgExitExactTokensResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitExactTokensResponse";
  value: Uint8Array;
}
export interface MsgExitExactTokensResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino[];
}
export interface MsgExitExactTokensResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgExitExactTokensResponse";
  value: MsgExitExactTokensResponseAmino;
}
export interface MsgExitExactTokensResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType[];
}
export interface MsgExitTokenExactLpt {
  creator: string;
  poolId: bigint;
  lptIn: string;
  tokenOut: string;
  minAmountOut?: string;
}
export interface MsgExitTokenExactLptProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLpt";
  value: Uint8Array;
}
export interface MsgExitTokenExactLptAmino {
  creator?: string;
  pool_id: string;
  lpt_in?: string;
  token_out?: string;
  min_amount_out?: string;
}
export interface MsgExitTokenExactLptAminoMsg {
  type: "pryzm/amm/v1/ExitTokenExactLpt";
  value: MsgExitTokenExactLptAmino;
}
export interface MsgExitTokenExactLptSDKType {
  creator: string;
  pool_id: bigint;
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
export interface MsgExitTokenExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLptResponse";
  value: Uint8Array;
}
export interface MsgExitTokenExactLptResponseAmino {
  lpt_in?: CoinAmino;
  amount_out?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface MsgExitTokenExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgExitTokenExactLptResponse";
  value: MsgExitTokenExactLptResponseAmino;
}
export interface MsgExitTokenExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgExitAllTokensExactLpt {
  creator: string;
  poolId: bigint;
  lptIn: string;
  minAmountsOut: Coin[];
}
export interface MsgExitAllTokensExactLptProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLpt";
  value: Uint8Array;
}
export interface MsgExitAllTokensExactLptAmino {
  creator?: string;
  pool_id: string;
  lpt_in?: string;
  min_amounts_out: CoinAmino[];
}
export interface MsgExitAllTokensExactLptAminoMsg {
  type: "pryzm/amm/v1/ExitAllTokensExactLpt";
  value: MsgExitAllTokensExactLptAmino;
}
export interface MsgExitAllTokensExactLptSDKType {
  creator: string;
  pool_id: bigint;
  lpt_in: string;
  min_amounts_out: CoinSDKType[];
}
export interface MsgExitAllTokensExactLptResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
}
export interface MsgExitAllTokensExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLptResponse";
  value: Uint8Array;
}
export interface MsgExitAllTokensExactLptResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
}
export interface MsgExitAllTokensExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgExitAllTokensExactLptResponse";
  value: MsgExitAllTokensExactLptResponseAmino;
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
export interface CreateWeightedPoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.CreateWeightedPoolToken";
  value: Uint8Array;
}
export interface CreateWeightedPoolTokenAmino {
  denom?: string;
  normalized_weight?: string;
}
export interface CreateWeightedPoolTokenAminoMsg {
  type: "/pryzm.amm.v1.CreateWeightedPoolToken";
  value: CreateWeightedPoolTokenAmino;
}
export interface CreateWeightedPoolTokenSDKType {
  denom: string;
  normalized_weight: string;
}
export interface MsgCreateWeightedPool {
  creator: string;
  name: string;
  swapFeeRatio: string;
  pauseWindowDurationMillis: bigint;
  pauseBufferDurationMillis: bigint;
  tokens: CreateWeightedPoolToken[];
  /** if not empty, only these addresses can initialize the pool */
  initializationAllowList: string[];
}
export interface MsgCreateWeightedPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPool";
  value: Uint8Array;
}
export interface MsgCreateWeightedPoolAmino {
  creator?: string;
  name?: string;
  swap_fee_ratio?: string;
  pause_window_duration_millis: string;
  pause_buffer_duration_millis: string;
  tokens?: CreateWeightedPoolTokenAmino[];
  /** if not empty, only these addresses can initialize the pool */
  initialization_allow_list: string[];
}
export interface MsgCreateWeightedPoolAminoMsg {
  type: "pryzm/amm/v1/CreateWeightedPool";
  value: MsgCreateWeightedPoolAmino;
}
export interface MsgCreateWeightedPoolSDKType {
  creator: string;
  name: string;
  swap_fee_ratio: string;
  pause_window_duration_millis: bigint;
  pause_buffer_duration_millis: bigint;
  tokens: CreateWeightedPoolTokenSDKType[];
  initialization_allow_list: string[];
}
export interface MsgCreateWeightedPoolResponse {
  poolId: bigint;
}
export interface MsgCreateWeightedPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPoolResponse";
  value: Uint8Array;
}
export interface MsgCreateWeightedPoolResponseAmino {
  pool_id?: string;
}
export interface MsgCreateWeightedPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgCreateWeightedPoolResponse";
  value: MsgCreateWeightedPoolResponseAmino;
}
export interface MsgCreateWeightedPoolResponseSDKType {
  pool_id: bigint;
}
export interface MsgUpdateSwapFee {
  creator: string;
  poolId: bigint;
  swapFeeRatio: string;
}
export interface MsgUpdateSwapFeeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFee";
  value: Uint8Array;
}
export interface MsgUpdateSwapFeeAmino {
  creator?: string;
  pool_id: string;
  swap_fee_ratio?: string;
}
export interface MsgUpdateSwapFeeAminoMsg {
  type: "pryzm/amm/v1/UpdateSwapFee";
  value: MsgUpdateSwapFeeAmino;
}
export interface MsgUpdateSwapFeeSDKType {
  creator: string;
  pool_id: bigint;
  swap_fee_ratio: string;
}
export interface MsgUpdateSwapFeeResponse {}
export interface MsgUpdateSwapFeeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFeeResponse";
  value: Uint8Array;
}
export interface MsgUpdateSwapFeeResponseAmino {}
export interface MsgUpdateSwapFeeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgUpdateSwapFeeResponse";
  value: MsgUpdateSwapFeeResponseAmino;
}
export interface MsgUpdateSwapFeeResponseSDKType {}
export interface MsgInitializePool {
  creator: string;
  poolId: bigint;
  amountsIn: Coin[];
}
export interface MsgInitializePoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgInitializePool";
  value: Uint8Array;
}
export interface MsgInitializePoolAmino {
  creator?: string;
  pool_id: string;
  amounts_in?: CoinAmino[];
}
export interface MsgInitializePoolAminoMsg {
  type: "pryzm/amm/v1/InitializePool";
  value: MsgInitializePoolAmino;
}
export interface MsgInitializePoolSDKType {
  creator: string;
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface MsgInitializePoolResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface MsgInitializePoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgInitializePoolResponse";
  value: Uint8Array;
}
export interface MsgInitializePoolResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
}
export interface MsgInitializePoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgInitializePoolResponse";
  value: MsgInitializePoolResponseAmino;
}
export interface MsgInitializePoolResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface MsgUpdateWeights {
  creator: string;
  poolId: bigint;
  tokenWeights: TokenWeight[];
  startTimeUnixMillis: bigint;
  endTimeUnixMillis: bigint;
}
export interface MsgUpdateWeightsProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateWeights";
  value: Uint8Array;
}
export interface MsgUpdateWeightsAmino {
  creator?: string;
  pool_id: string;
  token_weights?: TokenWeightAmino[];
  start_time_unix_millis: string;
  end_time_unix_millis: string;
}
export interface MsgUpdateWeightsAminoMsg {
  type: "pryzm/amm/v1/UpdateWeights";
  value: MsgUpdateWeightsAmino;
}
export interface MsgUpdateWeightsSDKType {
  creator: string;
  pool_id: bigint;
  token_weights: TokenWeightSDKType[];
  start_time_unix_millis: bigint;
  end_time_unix_millis: bigint;
}
export interface MsgUpdateWeightsResponse {}
export interface MsgUpdateWeightsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateWeightsResponse";
  value: Uint8Array;
}
export interface MsgUpdateWeightsResponseAmino {}
export interface MsgUpdateWeightsResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgUpdateWeightsResponse";
  value: MsgUpdateWeightsResponseAmino;
}
export interface MsgUpdateWeightsResponseSDKType {}
export interface MsgBatchSwap {
  creator: string;
  swapType: SwapType;
  steps: SwapStep[];
  minAmountsOut: Coin[];
  /** is not casted to coins, to allow for zero limits */
  maxAmountsIn: Coin[];
}
export interface MsgBatchSwapProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgBatchSwap";
  value: Uint8Array;
}
export interface MsgBatchSwapAmino {
  creator?: string;
  swap_type: SwapType;
  steps?: SwapStepAmino[];
  min_amounts_out: CoinAmino[];
  /** is not casted to coins, to allow for zero limits */
  max_amounts_in: CoinAmino[];
}
export interface MsgBatchSwapAminoMsg {
  type: "pryzm/amm/v1/BatchSwap";
  value: MsgBatchSwapAmino;
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
  swapProtocolFee: Coin[];
  joinExitProtocolFee: Coin[];
  swapFee: Coin[];
}
export interface MsgBatchSwapResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgBatchSwapResponse";
  value: Uint8Array;
}
export interface MsgBatchSwapResponseAmino {
  amounts_in?: CoinAmino[];
  amounts_out?: CoinAmino[];
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  swap_protocol_fee?: CoinAmino[];
  join_exit_protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface MsgBatchSwapResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgBatchSwapResponse";
  value: MsgBatchSwapResponseAmino;
}
export interface MsgBatchSwapResponseSDKType {
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  swap_protocol_fee: CoinSDKType[];
  join_exit_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface MsgSetYammConfiguration {
  creator: string;
  configuration: YammConfiguration;
}
export interface MsgSetYammConfigurationProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetYammConfiguration";
  value: Uint8Array;
}
export interface MsgSetYammConfigurationAmino {
  creator?: string;
  configuration: YammConfigurationAmino;
}
export interface MsgSetYammConfigurationAminoMsg {
  type: "pryzm/amm/v1/SetYammConfiguration";
  value: MsgSetYammConfigurationAmino;
}
export interface MsgSetYammConfigurationSDKType {
  creator: string;
  configuration: YammConfigurationSDKType;
}
export interface MsgSetYammConfigurationResponse {}
export interface MsgSetYammConfigurationResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetYammConfigurationResponse";
  value: Uint8Array;
}
export interface MsgSetYammConfigurationResponseAmino {}
export interface MsgSetYammConfigurationResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetYammConfigurationResponse";
  value: MsgSetYammConfigurationResponseAmino;
}
export interface MsgSetYammConfigurationResponseSDKType {}
export interface MsgWhitelistRoute {
  authority: string;
  whitelistedRoute: WhitelistedRoute;
}
export interface MsgWhitelistRouteProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgWhitelistRoute";
  value: Uint8Array;
}
export interface MsgWhitelistRouteAmino {
  authority?: string;
  whitelisted_route: WhitelistedRouteAmino;
}
export interface MsgWhitelistRouteAminoMsg {
  type: "pryzm/amm/v1/WhitelistRoute";
  value: MsgWhitelistRouteAmino;
}
export interface MsgWhitelistRouteSDKType {
  authority: string;
  whitelisted_route: WhitelistedRouteSDKType;
}
export interface MsgWhitelistRouteResponse {}
export interface MsgWhitelistRouteResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgWhitelistRouteResponse";
  value: Uint8Array;
}
export interface MsgWhitelistRouteResponseAmino {}
export interface MsgWhitelistRouteResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgWhitelistRouteResponse";
  value: MsgWhitelistRouteResponseAmino;
}
export interface MsgWhitelistRouteResponseSDKType {}
export interface MsgSetWhitelistedRouteEnabled {
  authority: string;
  tokenIn: string;
  tokenOut: string;
  enabled: boolean;
}
export interface MsgSetWhitelistedRouteEnabledProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabled";
  value: Uint8Array;
}
export interface MsgSetWhitelistedRouteEnabledAmino {
  authority?: string;
  token_in?: string;
  token_out?: string;
  enabled: boolean;
}
export interface MsgSetWhitelistedRouteEnabledAminoMsg {
  type: "pryzm/amm/v1/SetWhitelistedRouteEnabled";
  value: MsgSetWhitelistedRouteEnabledAmino;
}
export interface MsgSetWhitelistedRouteEnabledSDKType {
  authority: string;
  token_in: string;
  token_out: string;
  enabled: boolean;
}
export interface MsgSetWhitelistedRouteEnabledResponse {}
export interface MsgSetWhitelistedRouteEnabledResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabledResponse";
  value: Uint8Array;
}
export interface MsgSetWhitelistedRouteEnabledResponseAmino {}
export interface MsgSetWhitelistedRouteEnabledResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabledResponse";
  value: MsgSetWhitelistedRouteEnabledResponseAmino;
}
export interface MsgSetWhitelistedRouteEnabledResponseSDKType {}
export interface MsgSubmitOrder {
  creator: string;
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  allowMatching: boolean;
  amountPerStep: string;
  totalAmount: string;
  millisInterval: bigint;
  maxStepSpotPrice: string;
  maxMatchingSpotPrice?: string;
}
export interface MsgSubmitOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSubmitOrder";
  value: Uint8Array;
}
export interface MsgSubmitOrderAmino {
  creator?: string;
  pool_id: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route: boolean;
  allow_matching: boolean;
  amount_per_step?: string;
  total_amount?: string;
  millis_interval: string;
  max_step_spot_price?: string;
  max_matching_spot_price?: string;
}
export interface MsgSubmitOrderAminoMsg {
  type: "pryzm/amm/v1/SubmitOrder";
  value: MsgSubmitOrderAmino;
}
export interface MsgSubmitOrderSDKType {
  creator: string;
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  allow_matching: boolean;
  amount_per_step: string;
  total_amount: string;
  millis_interval: bigint;
  max_step_spot_price: string;
  max_matching_spot_price?: string;
}
export interface MsgSubmitOrderResponse {
  order: Order;
}
export interface MsgSubmitOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSubmitOrderResponse";
  value: Uint8Array;
}
export interface MsgSubmitOrderResponseAmino {
  order?: OrderAmino;
}
export interface MsgSubmitOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSubmitOrderResponse";
  value: MsgSubmitOrderResponseAmino;
}
export interface MsgSubmitOrderResponseSDKType {
  order: OrderSDKType;
}
export interface MsgCancelOrder {
  creator: string;
  id: bigint;
}
export interface MsgCancelOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCancelOrder";
  value: Uint8Array;
}
export interface MsgCancelOrderAmino {
  creator?: string;
  id: string;
}
export interface MsgCancelOrderAminoMsg {
  type: "pryzm/amm/v1/CancelOrder";
  value: MsgCancelOrderAmino;
}
export interface MsgCancelOrderSDKType {
  creator: string;
  id: bigint;
}
export interface MsgCancelOrderResponse {
  withdrawnDeposit: Coin;
}
export interface MsgCancelOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCancelOrderResponse";
  value: Uint8Array;
}
export interface MsgCancelOrderResponseAmino {
  withdrawn_deposit?: CoinAmino;
}
export interface MsgCancelOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgCancelOrderResponse";
  value: MsgCancelOrderResponseAmino;
}
export interface MsgCancelOrderResponseSDKType {
  withdrawn_deposit: CoinSDKType;
}
export interface MsgProposeMatch {
  creator: string;
  pairs: PairMatchProposal[];
}
export interface MsgProposeMatchProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgProposeMatch";
  value: Uint8Array;
}
export interface MsgProposeMatchAmino {
  creator?: string;
  pairs: PairMatchProposalAmino[];
}
export interface MsgProposeMatchAminoMsg {
  type: "pryzm/amm/v1/ProposeMatch";
  value: MsgProposeMatchAmino;
}
export interface MsgProposeMatchSDKType {
  creator: string;
  pairs: PairMatchProposalSDKType[];
}
export interface MsgProposeMatchResponse {
  proposerReward: Coin[];
}
export interface MsgProposeMatchResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgProposeMatchResponse";
  value: Uint8Array;
}
export interface MsgProposeMatchResponseAmino {
  proposer_reward?: CoinAmino[];
}
export interface MsgProposeMatchResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgProposeMatchResponse";
  value: MsgProposeMatchResponseAmino;
}
export interface MsgProposeMatchResponseSDKType {
  proposer_reward: CoinSDKType[];
}
export interface MsgSetCircuitBreakers {
  creator: string;
  poolId: bigint;
  tokenCircuitBreakers: TokenCircuitBreakerSettings[];
}
export interface MsgSetCircuitBreakersProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakers";
  value: Uint8Array;
}
export interface MsgSetCircuitBreakersAmino {
  creator?: string;
  pool_id: string;
  token_circuit_breakers: TokenCircuitBreakerSettingsAmino[];
}
export interface MsgSetCircuitBreakersAminoMsg {
  type: "pryzm/amm/v1/SetCircuitBreakers";
  value: MsgSetCircuitBreakersAmino;
}
export interface MsgSetCircuitBreakersSDKType {
  creator: string;
  pool_id: bigint;
  token_circuit_breakers: TokenCircuitBreakerSettingsSDKType[];
}
export interface MsgSetCircuitBreakersResponse {}
export interface MsgSetCircuitBreakersResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakersResponse";
  value: Uint8Array;
}
export interface MsgSetCircuitBreakersResponseAmino {}
export interface MsgSetCircuitBreakersResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetCircuitBreakersResponse";
  value: MsgSetCircuitBreakersResponseAmino;
}
export interface MsgSetCircuitBreakersResponseSDKType {}
export interface MsgSetRecoveryMode {
  authority: string;
  poolId: bigint;
  recoveryMode: boolean;
}
export interface MsgSetRecoveryModeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetRecoveryMode";
  value: Uint8Array;
}
export interface MsgSetRecoveryModeAmino {
  authority?: string;
  pool_id: string;
  recovery_mode: boolean;
}
export interface MsgSetRecoveryModeAminoMsg {
  type: "pryzm/amm/v1/SetRecoveryMode";
  value: MsgSetRecoveryModeAmino;
}
export interface MsgSetRecoveryModeSDKType {
  authority: string;
  pool_id: bigint;
  recovery_mode: boolean;
}
export interface MsgSetRecoveryModeResponse {}
export interface MsgSetRecoveryModeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetRecoveryModeResponse";
  value: Uint8Array;
}
export interface MsgSetRecoveryModeResponseAmino {}
export interface MsgSetRecoveryModeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetRecoveryModeResponse";
  value: MsgSetRecoveryModeResponseAmino;
}
export interface MsgSetRecoveryModeResponseSDKType {}
export interface MsgRecoveryExit {
  creator: string;
  poolId: bigint;
  lptIn: string;
  minAmountsOut: Coin[];
}
export interface MsgRecoveryExitProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgRecoveryExit";
  value: Uint8Array;
}
export interface MsgRecoveryExitAmino {
  creator?: string;
  pool_id: string;
  lpt_in?: string;
  min_amounts_out: CoinAmino[];
}
export interface MsgRecoveryExitAminoMsg {
  type: "pryzm/amm/v1/RecoveryExit";
  value: MsgRecoveryExitAmino;
}
export interface MsgRecoveryExitSDKType {
  creator: string;
  pool_id: bigint;
  lpt_in: string;
  min_amounts_out: CoinSDKType[];
}
export interface MsgRecoveryExitResponse {
  lptIn: Coin;
  amountsOut: Coin[];
}
export interface MsgRecoveryExitResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgRecoveryExitResponse";
  value: Uint8Array;
}
export interface MsgRecoveryExitResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
}
export interface MsgRecoveryExitResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgRecoveryExitResponse";
  value: MsgRecoveryExitResponseAmino;
}
export interface MsgRecoveryExitResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
}
export interface MsgSetPauseMode {
  creator: string;
  poolId: bigint;
  pauseMode: boolean;
}
export interface MsgSetPauseModeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseMode";
  value: Uint8Array;
}
export interface MsgSetPauseModeAmino {
  creator?: string;
  pool_id: string;
  pause_mode: boolean;
}
export interface MsgSetPauseModeAminoMsg {
  type: "pryzm/amm/v1/SetPauseMode";
  value: MsgSetPauseModeAmino;
}
export interface MsgSetPauseModeSDKType {
  creator: string;
  pool_id: bigint;
  pause_mode: boolean;
}
export interface MsgSetPauseModeResponse {}
export interface MsgSetPauseModeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseModeResponse";
  value: Uint8Array;
}
export interface MsgSetPauseModeResponseAmino {}
export interface MsgSetPauseModeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetPauseModeResponse";
  value: MsgSetPauseModeResponseAmino;
}
export interface MsgSetPauseModeResponseSDKType {}
export interface MsgSetVaultPauseMode {
  authority: string;
  pauseMode: boolean;
}
export interface MsgSetVaultPauseModeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseMode";
  value: Uint8Array;
}
export interface MsgSetVaultPauseModeAmino {
  authority?: string;
  pause_mode: boolean;
}
export interface MsgSetVaultPauseModeAminoMsg {
  type: "pryzm/amm/v1/SetVaultPauseMode";
  value: MsgSetVaultPauseModeAmino;
}
export interface MsgSetVaultPauseModeSDKType {
  authority: string;
  pause_mode: boolean;
}
export interface MsgSetVaultPauseModeResponse {}
export interface MsgSetVaultPauseModeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseModeResponse";
  value: Uint8Array;
}
export interface MsgSetVaultPauseModeResponseAmino {}
export interface MsgSetVaultPauseModeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetVaultPauseModeResponse";
  value: MsgSetVaultPauseModeResponseAmino;
}
export interface MsgSetVaultPauseModeResponseSDKType {}
export interface MsgCreateOraclePricePair {
  authority: string;
  oraclePricePair: OraclePricePair;
}
export interface MsgCreateOraclePricePairProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePair";
  value: Uint8Array;
}
export interface MsgCreateOraclePricePairAmino {
  authority?: string;
  oracle_price_pair: OraclePricePairAmino;
}
export interface MsgCreateOraclePricePairAminoMsg {
  type: "pryzm/amm/v1/CreateOraclePricePair";
  value: MsgCreateOraclePricePairAmino;
}
export interface MsgCreateOraclePricePairSDKType {
  authority: string;
  oracle_price_pair: OraclePricePairSDKType;
}
export interface MsgCreateOraclePricePairResponse {}
export interface MsgCreateOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePairResponse";
  value: Uint8Array;
}
export interface MsgCreateOraclePricePairResponseAmino {}
export interface MsgCreateOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgCreateOraclePricePairResponse";
  value: MsgCreateOraclePricePairResponseAmino;
}
export interface MsgCreateOraclePricePairResponseSDKType {}
export interface MsgUpdateOraclePricePair {
  authority: string;
  oraclePricePair: OraclePricePair;
}
export interface MsgUpdateOraclePricePairProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePair";
  value: Uint8Array;
}
export interface MsgUpdateOraclePricePairAmino {
  authority?: string;
  oracle_price_pair: OraclePricePairAmino;
}
export interface MsgUpdateOraclePricePairAminoMsg {
  type: "pryzm/amm/v1/UpdateOraclePricePair";
  value: MsgUpdateOraclePricePairAmino;
}
export interface MsgUpdateOraclePricePairSDKType {
  authority: string;
  oracle_price_pair: OraclePricePairSDKType;
}
export interface MsgUpdateOraclePricePairResponse {}
export interface MsgUpdateOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePairResponse";
  value: Uint8Array;
}
export interface MsgUpdateOraclePricePairResponseAmino {}
export interface MsgUpdateOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgUpdateOraclePricePairResponse";
  value: MsgUpdateOraclePricePairResponseAmino;
}
export interface MsgUpdateOraclePricePairResponseSDKType {}
export interface MsgDeleteOraclePricePair {
  authority: string;
  assetId: string;
}
export interface MsgDeleteOraclePricePairProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePair";
  value: Uint8Array;
}
export interface MsgDeleteOraclePricePairAmino {
  authority?: string;
  asset_id?: string;
}
export interface MsgDeleteOraclePricePairAminoMsg {
  type: "pryzm/amm/v1/DeleteOraclePricePair";
  value: MsgDeleteOraclePricePairAmino;
}
export interface MsgDeleteOraclePricePairSDKType {
  authority: string;
  asset_id: string;
}
export interface MsgDeleteOraclePricePairResponse {}
export interface MsgDeleteOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePairResponse";
  value: Uint8Array;
}
export interface MsgDeleteOraclePricePairResponseAmino {}
export interface MsgDeleteOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgDeleteOraclePricePairResponse";
  value: MsgDeleteOraclePricePairResponseAmino;
}
export interface MsgDeleteOraclePricePairResponseSDKType {}
export interface MsgSetSwapProtocolFee {
  authority: string;
  poolId: bigint;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  swapProtocolFee?: string;
}
export interface MsgSetSwapProtocolFeeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFee";
  value: Uint8Array;
}
export interface MsgSetSwapProtocolFeeAmino {
  authority?: string;
  pool_id: string;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  swap_protocol_fee?: string;
}
export interface MsgSetSwapProtocolFeeAminoMsg {
  type: "pryzm/amm/v1/SetSwapProtocolFee";
  value: MsgSetSwapProtocolFeeAmino;
}
export interface MsgSetSwapProtocolFeeSDKType {
  authority: string;
  pool_id: bigint;
  swap_protocol_fee?: string;
}
export interface MsgSetSwapProtocolFeeResponse {}
export interface MsgSetSwapProtocolFeeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFeeResponse";
  value: Uint8Array;
}
export interface MsgSetSwapProtocolFeeResponseAmino {}
export interface MsgSetSwapProtocolFeeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetSwapProtocolFeeResponse";
  value: MsgSetSwapProtocolFeeResponseAmino;
}
export interface MsgSetSwapProtocolFeeResponseSDKType {}
export interface MsgSetJoinExitProtocolFee {
  authority: string;
  poolId: bigint;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  joinExitProtocolFee?: string;
}
export interface MsgSetJoinExitProtocolFeeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFee";
  value: Uint8Array;
}
export interface MsgSetJoinExitProtocolFeeAmino {
  authority?: string;
  pool_id: string;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  join_exit_protocol_fee?: string;
}
export interface MsgSetJoinExitProtocolFeeAminoMsg {
  type: "pryzm/amm/v1/SetJoinExitProtocolFee";
  value: MsgSetJoinExitProtocolFeeAmino;
}
export interface MsgSetJoinExitProtocolFeeSDKType {
  authority: string;
  pool_id: bigint;
  join_exit_protocol_fee?: string;
}
export interface MsgSetJoinExitProtocolFeeResponse {}
export interface MsgSetJoinExitProtocolFeeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFeeResponse";
  value: Uint8Array;
}
export interface MsgSetJoinExitProtocolFeeResponseAmino {}
export interface MsgSetJoinExitProtocolFeeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetJoinExitProtocolFeeResponse";
  value: MsgSetJoinExitProtocolFeeResponseAmino;
}
export interface MsgSetJoinExitProtocolFeeResponseSDKType {}
export interface MsgIntroduceYammLpToWeightedPool {
  creator: string;
  weightedPoolId: bigint;
  yammPoolId: bigint;
  tokenNormalizedWeight: string;
  virtualBalanceIntervalMillis: bigint;
}
export interface MsgIntroduceYammLpToWeightedPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPool";
  value: Uint8Array;
}
export interface MsgIntroduceYammLpToWeightedPoolAmino {
  creator?: string;
  weighted_pool_id: string;
  yamm_pool_id: string;
  token_normalized_weight?: string;
  virtual_balance_interval_millis: string;
}
export interface MsgIntroduceYammLpToWeightedPoolAminoMsg {
  type: "pryzm/amm/v1/IntroYammLpToWeighted";
  value: MsgIntroduceYammLpToWeightedPoolAmino;
}
export interface MsgIntroduceYammLpToWeightedPoolSDKType {
  creator: string;
  weighted_pool_id: bigint;
  yamm_pool_id: bigint;
  token_normalized_weight: string;
  virtual_balance_interval_millis: bigint;
}
export interface MsgIntroduceYammLpToWeightedPoolResponse {}
export interface MsgIntroduceYammLpToWeightedPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPoolResponse";
  value: Uint8Array;
}
export interface MsgIntroduceYammLpToWeightedPoolResponseAmino {}
export interface MsgIntroduceYammLpToWeightedPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPoolResponse";
  value: MsgIntroduceYammLpToWeightedPoolResponseAmino;
}
export interface MsgIntroduceYammLpToWeightedPoolResponseSDKType {}
export interface MsgIntroduceAssetBaseTokenToWeightedPool {
  creator: string;
  weightedPoolId: bigint;
  tokenDenom: string;
  assetId: string;
  tokenNormalizedWeight: string;
  virtualBalanceIntervalMillis: bigint;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPool";
  value: Uint8Array;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolAmino {
  creator?: string;
  weighted_pool_id: string;
  token_denom?: string;
  asset_id?: string;
  token_normalized_weight?: string;
  virtual_balance_interval_millis: string;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolAminoMsg {
  type: "pryzm/amm/v1/IntroBaseTokenToWeighted";
  value: MsgIntroduceAssetBaseTokenToWeightedPoolAmino;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolSDKType {
  creator: string;
  weighted_pool_id: bigint;
  token_denom: string;
  asset_id: string;
  token_normalized_weight: string;
  virtual_balance_interval_millis: bigint;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponse {}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPoolResponse";
  value: Uint8Array;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino {}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPoolResponse";
  value: MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseSDKType {}
export interface MsgCancelPendingTokenIntroduction {
  creator: string;
  assetId: string;
  targetPoolId: bigint;
}
export interface MsgCancelPendingTokenIntroductionProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroduction";
  value: Uint8Array;
}
export interface MsgCancelPendingTokenIntroductionAmino {
  creator?: string;
  asset_id?: string;
  target_pool_id: string;
}
export interface MsgCancelPendingTokenIntroductionAminoMsg {
  type: "pryzm/amm/v1/CancelPendingTokenIntro";
  value: MsgCancelPendingTokenIntroductionAmino;
}
export interface MsgCancelPendingTokenIntroductionSDKType {
  creator: string;
  asset_id: string;
  target_pool_id: bigint;
}
export interface MsgCancelPendingTokenIntroductionResponse {}
export interface MsgCancelPendingTokenIntroductionResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroductionResponse";
  value: Uint8Array;
}
export interface MsgCancelPendingTokenIntroductionResponseAmino {}
export interface MsgCancelPendingTokenIntroductionResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgCancelPendingTokenIntroductionResponse";
  value: MsgCancelPendingTokenIntroductionResponseAmino;
}
export interface MsgCancelPendingTokenIntroductionResponseSDKType {}
export interface MsgRemoveTokenFromWeightedPool {
  creator: string;
  poolId: bigint;
  tokenDenom: string;
  virtualBalanceIntervalMillis: bigint;
}
export interface MsgRemoveTokenFromWeightedPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPool";
  value: Uint8Array;
}
export interface MsgRemoveTokenFromWeightedPoolAmino {
  creator?: string;
  pool_id: string;
  token_denom?: string;
  virtual_balance_interval_millis: string;
}
export interface MsgRemoveTokenFromWeightedPoolAminoMsg {
  type: "pryzm/amm/v1/RemoveTokenFromWeighted";
  value: MsgRemoveTokenFromWeightedPoolAmino;
}
export interface MsgRemoveTokenFromWeightedPoolSDKType {
  creator: string;
  pool_id: bigint;
  token_denom: string;
  virtual_balance_interval_millis: bigint;
}
export interface MsgRemoveTokenFromWeightedPoolResponse {}
export interface MsgRemoveTokenFromWeightedPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPoolResponse";
  value: Uint8Array;
}
export interface MsgRemoveTokenFromWeightedPoolResponseAmino {}
export interface MsgRemoveTokenFromWeightedPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPoolResponse";
  value: MsgRemoveTokenFromWeightedPoolResponseAmino;
}
export interface MsgRemoveTokenFromWeightedPoolResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  generalPoolParameters?: GeneralPoolParameters;
  yammParameters?: YammParameters;
  orderParameters?: OrderParameters;
  authorizationParameters?: AuthorizationParameters;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  general_pool_parameters?: GeneralPoolParametersAmino;
  yamm_parameters?: YammParametersAmino;
  order_parameters?: OrderParametersAmino;
  authorization_parameters?: AuthorizationParametersAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/amm/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  general_pool_parameters?: GeneralPoolParametersSDKType;
  yamm_parameters?: YammParametersSDKType;
  order_parameters?: OrderParametersSDKType;
  authorization_parameters?: AuthorizationParametersSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgAddMaturityToYamm {
  authority: string;
  assetId: string;
  maturitySymbol: string;
}
export interface MsgAddMaturityToYammProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYamm";
  value: Uint8Array;
}
export interface MsgAddMaturityToYammAmino {
  authority?: string;
  assetId?: string;
  maturitySymbol?: string;
}
export interface MsgAddMaturityToYammAminoMsg {
  type: "pryzm/amm/v1/AddMaturityToYamm";
  value: MsgAddMaturityToYammAmino;
}
export interface MsgAddMaturityToYammSDKType {
  authority: string;
  assetId: string;
  maturitySymbol: string;
}
export interface MsgAddMaturityToYammResponse {}
export interface MsgAddMaturityToYammResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYammResponse";
  value: Uint8Array;
}
export interface MsgAddMaturityToYammResponseAmino {}
export interface MsgAddMaturityToYammResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgAddMaturityToYammResponse";
  value: MsgAddMaturityToYammResponseAmino;
}
export interface MsgAddMaturityToYammResponseSDKType {}
export interface MsgSetInitializationAllowList {
  creator: string;
  poolId: bigint;
  initializationAllowList: string[];
}
export interface MsgSetInitializationAllowListProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowList";
  value: Uint8Array;
}
export interface MsgSetInitializationAllowListAmino {
  creator?: string;
  pool_id: string;
  initialization_allow_list: string[];
}
export interface MsgSetInitializationAllowListAminoMsg {
  type: "pryzm/amm/v1/SetInitializationAllowList";
  value: MsgSetInitializationAllowListAmino;
}
export interface MsgSetInitializationAllowListSDKType {
  creator: string;
  pool_id: bigint;
  initialization_allow_list: string[];
}
export interface MsgSetInitializationAllowListResponse {}
export interface MsgSetInitializationAllowListResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowListResponse";
  value: Uint8Array;
}
export interface MsgSetInitializationAllowListResponseAmino {}
export interface MsgSetInitializationAllowListResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetInitializationAllowListResponse";
  value: MsgSetInitializationAllowListResponseAmino;
}
export interface MsgSetInitializationAllowListResponseSDKType {}
export interface MsgSetPoolAdmins {
  creator: string;
  poolId: bigint;
  admins: string[];
}
export interface MsgSetPoolAdminsProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPoolAdmins";
  value: Uint8Array;
}
export interface MsgSetPoolAdminsAmino {
  creator?: string;
  pool_id: string;
  admins: string[];
}
export interface MsgSetPoolAdminsAminoMsg {
  type: "pryzm/amm/v1/SetPoolAdmins";
  value: MsgSetPoolAdminsAmino;
}
export interface MsgSetPoolAdminsSDKType {
  creator: string;
  pool_id: bigint;
  admins: string[];
}
export interface MsgSetPoolAdminsResponse {}
export interface MsgSetPoolAdminsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPoolAdminsResponse";
  value: Uint8Array;
}
export interface MsgSetPoolAdminsResponseAmino {}
export interface MsgSetPoolAdminsResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetPoolAdminsResponse";
  value: MsgSetPoolAdminsResponseAmino;
}
export interface MsgSetPoolAdminsResponseSDKType {}
export interface MsgSetPauseAllowList {
  creator: string;
  poolId: bigint;
  pauseAllowList: string[];
}
export interface MsgSetPauseAllowListProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowList";
  value: Uint8Array;
}
export interface MsgSetPauseAllowListAmino {
  creator?: string;
  pool_id: string;
  pause_allow_list: string[];
}
export interface MsgSetPauseAllowListAminoMsg {
  type: "pryzm/amm/v1/SetPauseAllowList";
  value: MsgSetPauseAllowListAmino;
}
export interface MsgSetPauseAllowListSDKType {
  creator: string;
  pool_id: bigint;
  pause_allow_list: string[];
}
export interface MsgSetPauseAllowListResponse {}
export interface MsgSetPauseAllowListResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowListResponse";
  value: Uint8Array;
}
export interface MsgSetPauseAllowListResponseAmino {}
export interface MsgSetPauseAllowListResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetPauseAllowListResponse";
  value: MsgSetPauseAllowListResponseAmino;
}
export interface MsgSetPauseAllowListResponseSDKType {}
export interface MsgSetPauseWindow {
  authority: string;
  poolId: bigint;
  pauseWindow: PoolPauseWindow;
}
export interface MsgSetPauseWindowProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseWindow";
  value: Uint8Array;
}
export interface MsgSetPauseWindowAmino {
  authority?: string;
  pool_id: string;
  pause_window: PoolPauseWindowAmino;
}
export interface MsgSetPauseWindowAminoMsg {
  type: "pryzm/amm/v1/SetPauseWindow";
  value: MsgSetPauseWindowAmino;
}
export interface MsgSetPauseWindowSDKType {
  authority: string;
  pool_id: bigint;
  pause_window: PoolPauseWindowSDKType;
}
export interface MsgSetPauseWindowResponse {}
export interface MsgSetPauseWindowResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseWindowResponse";
  value: Uint8Array;
}
export interface MsgSetPauseWindowResponseAmino {}
export interface MsgSetPauseWindowResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetPauseWindowResponse";
  value: MsgSetPauseWindowResponseAmino;
}
export interface MsgSetPauseWindowResponseSDKType {}
function createBaseMsgSingleSwap(): MsgSingleSwap {
  return {
    creator: "",
    swap: Swap.fromPartial({}),
    maxAmountIn: undefined,
    minAmountOut: undefined
  };
}
export const MsgSingleSwap = {
  typeUrl: "/pryzm.amm.v1.MsgSingleSwap",
  encode(message: MsgSingleSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSingleSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSingleSwapAmino): MsgSingleSwap {
    const message = createBaseMsgSingleSwap();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.swap !== undefined && object.swap !== null) {
      message.swap = Swap.fromAmino(object.swap);
    }
    if (object.max_amount_in !== undefined && object.max_amount_in !== null) {
      message.maxAmountIn = object.max_amount_in;
    }
    if (object.min_amount_out !== undefined && object.min_amount_out !== null) {
      message.minAmountOut = object.min_amount_out;
    }
    return message;
  },
  toAmino(message: MsgSingleSwap): MsgSingleSwapAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.swap = message.swap ? Swap.toAmino(message.swap) : Swap.fromPartial({});
    obj.max_amount_in = message.maxAmountIn;
    obj.min_amount_out = message.minAmountOut;
    return obj;
  },
  fromAminoMsg(object: MsgSingleSwapAminoMsg): MsgSingleSwap {
    return MsgSingleSwap.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSingleSwap): MsgSingleSwapAminoMsg {
    return {
      type: "pryzm/amm/v1/SingleSwap",
      value: MsgSingleSwap.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSingleSwapProtoMsg): MsgSingleSwap {
    return MsgSingleSwap.decode(message.value);
  },
  toProto(message: MsgSingleSwap): Uint8Array {
    return MsgSingleSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgSingleSwap): MsgSingleSwapProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSingleSwap",
      value: MsgSingleSwap.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgSingleSwapResponse",
  encode(message: MsgSingleSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSingleSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSingleSwapResponseAmino): MsgSingleSwapResponse {
    const message = createBaseMsgSingleSwapResponse();
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    return message;
  },
  toAmino(message: MsgSingleSwapResponse): MsgSingleSwapResponseAmino {
    const obj: any = {};
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSingleSwapResponseAminoMsg): MsgSingleSwapResponse {
    return MsgSingleSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSingleSwapResponseProtoMsg): MsgSingleSwapResponse {
    return MsgSingleSwapResponse.decode(message.value);
  },
  toProto(message: MsgSingleSwapResponse): Uint8Array {
    return MsgSingleSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSingleSwapResponse): MsgSingleSwapResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSingleSwapResponse",
      value: MsgSingleSwapResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinAllTokensExactLpt(): MsgJoinAllTokensExactLpt {
  return {
    creator: "",
    poolId: BigInt(0),
    lptOut: "",
    maxAmountsIn: []
  };
}
export const MsgJoinAllTokensExactLpt = {
  typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLpt",
  encode(message: MsgJoinAllTokensExactLpt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinAllTokensExactLpt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinAllTokensExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinAllTokensExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut ?? "";
    message.maxAmountsIn = object.maxAmountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgJoinAllTokensExactLptAmino): MsgJoinAllTokensExactLpt {
    const message = createBaseMsgJoinAllTokensExactLpt();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = object.lpt_out;
    }
    message.maxAmountsIn = object.max_amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgJoinAllTokensExactLpt): MsgJoinAllTokensExactLptAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.lpt_out = message.lptOut;
    if (message.maxAmountsIn) {
      obj.max_amounts_in = message.maxAmountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.max_amounts_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinAllTokensExactLptAminoMsg): MsgJoinAllTokensExactLpt {
    return MsgJoinAllTokensExactLpt.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinAllTokensExactLpt): MsgJoinAllTokensExactLptAminoMsg {
    return {
      type: "pryzm/amm/v1/JoinAllTokensExactLpt",
      value: MsgJoinAllTokensExactLpt.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinAllTokensExactLptProtoMsg): MsgJoinAllTokensExactLpt {
    return MsgJoinAllTokensExactLpt.decode(message.value);
  },
  toProto(message: MsgJoinAllTokensExactLpt): Uint8Array {
    return MsgJoinAllTokensExactLpt.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinAllTokensExactLpt): MsgJoinAllTokensExactLptProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLpt",
      value: MsgJoinAllTokensExactLpt.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLptResponse",
  encode(message: MsgJoinAllTokensExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinAllTokensExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgJoinAllTokensExactLptResponseAmino): MsgJoinAllTokensExactLptResponse {
    const message = createBaseMsgJoinAllTokensExactLptResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgJoinAllTokensExactLptResponse): MsgJoinAllTokensExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut) : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = [];
    }
    if (message.protocolFee) {
      obj.protocol_fee = message.protocolFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.protocol_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinAllTokensExactLptResponseAminoMsg): MsgJoinAllTokensExactLptResponse {
    return MsgJoinAllTokensExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinAllTokensExactLptResponseProtoMsg): MsgJoinAllTokensExactLptResponse {
    return MsgJoinAllTokensExactLptResponse.decode(message.value);
  },
  toProto(message: MsgJoinAllTokensExactLptResponse): Uint8Array {
    return MsgJoinAllTokensExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinAllTokensExactLptResponse): MsgJoinAllTokensExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLptResponse",
      value: MsgJoinAllTokensExactLptResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinTokenExactLpt(): MsgJoinTokenExactLpt {
  return {
    creator: "",
    poolId: BigInt(0),
    lptOut: "",
    tokenIn: "",
    maxAmountIn: undefined
  };
}
export const MsgJoinTokenExactLpt = {
  typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLpt",
  encode(message: MsgJoinTokenExactLpt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinTokenExactLpt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinTokenExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      maxAmountIn: isSet(object.maxAmountIn) ? String(object.maxAmountIn) : undefined
    };
  },
  toJSON(message: MsgJoinTokenExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.maxAmountIn !== undefined && (obj.maxAmountIn = message.maxAmountIn);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinTokenExactLpt>): MsgJoinTokenExactLpt {
    const message = createBaseMsgJoinTokenExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.maxAmountIn = object.maxAmountIn ?? undefined;
    return message;
  },
  fromAmino(object: MsgJoinTokenExactLptAmino): MsgJoinTokenExactLpt {
    const message = createBaseMsgJoinTokenExactLpt();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = object.lpt_out;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.max_amount_in !== undefined && object.max_amount_in !== null) {
      message.maxAmountIn = object.max_amount_in;
    }
    return message;
  },
  toAmino(message: MsgJoinTokenExactLpt): MsgJoinTokenExactLptAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.lpt_out = message.lptOut;
    obj.token_in = message.tokenIn;
    obj.max_amount_in = message.maxAmountIn;
    return obj;
  },
  fromAminoMsg(object: MsgJoinTokenExactLptAminoMsg): MsgJoinTokenExactLpt {
    return MsgJoinTokenExactLpt.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinTokenExactLpt): MsgJoinTokenExactLptAminoMsg {
    return {
      type: "pryzm/amm/v1/JoinTokenExactLpt",
      value: MsgJoinTokenExactLpt.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinTokenExactLptProtoMsg): MsgJoinTokenExactLpt {
    return MsgJoinTokenExactLpt.decode(message.value);
  },
  toProto(message: MsgJoinTokenExactLpt): Uint8Array {
    return MsgJoinTokenExactLpt.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinTokenExactLpt): MsgJoinTokenExactLptProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLpt",
      value: MsgJoinTokenExactLpt.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLptResponse",
  encode(message: MsgJoinTokenExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinTokenExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgJoinTokenExactLptResponseAmino): MsgJoinTokenExactLptResponse {
    const message = createBaseMsgJoinTokenExactLptResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    return message;
  },
  toAmino(message: MsgJoinTokenExactLptResponse): MsgJoinTokenExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgJoinTokenExactLptResponseAminoMsg): MsgJoinTokenExactLptResponse {
    return MsgJoinTokenExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinTokenExactLptResponseProtoMsg): MsgJoinTokenExactLptResponse {
    return MsgJoinTokenExactLptResponse.decode(message.value);
  },
  toProto(message: MsgJoinTokenExactLptResponse): Uint8Array {
    return MsgJoinTokenExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinTokenExactLptResponse): MsgJoinTokenExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLptResponse",
      value: MsgJoinTokenExactLptResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinExactTokens(): MsgJoinExactTokens {
  return {
    creator: "",
    poolId: BigInt(0),
    amountsIn: [],
    minLptOut: undefined
  };
}
export const MsgJoinExactTokens = {
  typeUrl: "/pryzm.amm.v1.MsgJoinExactTokens",
  encode(message: MsgJoinExactTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinExactTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinExactTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      minLptOut: isSet(object.minLptOut) ? String(object.minLptOut) : undefined
    };
  },
  toJSON(message: MsgJoinExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.minLptOut = object.minLptOut ?? undefined;
    return message;
  },
  fromAmino(object: MsgJoinExactTokensAmino): MsgJoinExactTokens {
    const message = createBaseMsgJoinExactTokens();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    if (object.min_lpt_out !== undefined && object.min_lpt_out !== null) {
      message.minLptOut = object.min_lpt_out;
    }
    return message;
  },
  toAmino(message: MsgJoinExactTokens): MsgJoinExactTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = [];
    }
    obj.min_lpt_out = message.minLptOut;
    return obj;
  },
  fromAminoMsg(object: MsgJoinExactTokensAminoMsg): MsgJoinExactTokens {
    return MsgJoinExactTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinExactTokens): MsgJoinExactTokensAminoMsg {
    return {
      type: "pryzm/amm/v1/JoinExactTokens",
      value: MsgJoinExactTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinExactTokensProtoMsg): MsgJoinExactTokens {
    return MsgJoinExactTokens.decode(message.value);
  },
  toProto(message: MsgJoinExactTokens): Uint8Array {
    return MsgJoinExactTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinExactTokens): MsgJoinExactTokensProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinExactTokens",
      value: MsgJoinExactTokens.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgJoinExactTokensResponse",
  encode(message: MsgJoinExactTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinExactTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgJoinExactTokensResponseAmino): MsgJoinExactTokensResponse {
    const message = createBaseMsgJoinExactTokensResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgJoinExactTokensResponse): MsgJoinExactTokensResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut) : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = [];
    }
    if (message.protocolFee) {
      obj.protocol_fee = message.protocolFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.protocol_fee = [];
    }
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.swap_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinExactTokensResponseAminoMsg): MsgJoinExactTokensResponse {
    return MsgJoinExactTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinExactTokensResponseProtoMsg): MsgJoinExactTokensResponse {
    return MsgJoinExactTokensResponse.decode(message.value);
  },
  toProto(message: MsgJoinExactTokensResponse): Uint8Array {
    return MsgJoinExactTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinExactTokensResponse): MsgJoinExactTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinExactTokensResponse",
      value: MsgJoinExactTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgZeroImpactJoinYamm(): MsgZeroImpactJoinYamm {
  return {
    creator: "",
    cAmountIn: Coin.fromPartial({}),
    minLptOut: undefined
  };
}
export const MsgZeroImpactJoinYamm = {
  typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYamm",
  encode(message: MsgZeroImpactJoinYamm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cAmountIn !== undefined) {
      Coin.encode(message.cAmountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.minLptOut !== undefined) {
      writer.uint32(26).string(message.minLptOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgZeroImpactJoinYamm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgZeroImpactJoinYamm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cAmountIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.minLptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgZeroImpactJoinYamm {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cAmountIn: isSet(object.cAmountIn) ? Coin.fromJSON(object.cAmountIn) : undefined,
      minLptOut: isSet(object.minLptOut) ? String(object.minLptOut) : undefined
    };
  },
  toJSON(message: MsgZeroImpactJoinYamm): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cAmountIn !== undefined && (obj.cAmountIn = message.cAmountIn ? Coin.toJSON(message.cAmountIn) : undefined);
    message.minLptOut !== undefined && (obj.minLptOut = message.minLptOut);
    return obj;
  },
  fromPartial(object: Partial<MsgZeroImpactJoinYamm>): MsgZeroImpactJoinYamm {
    const message = createBaseMsgZeroImpactJoinYamm();
    message.creator = object.creator ?? "";
    message.cAmountIn = object.cAmountIn !== undefined && object.cAmountIn !== null ? Coin.fromPartial(object.cAmountIn) : undefined;
    message.minLptOut = object.minLptOut ?? undefined;
    return message;
  },
  fromAmino(object: MsgZeroImpactJoinYammAmino): MsgZeroImpactJoinYamm {
    const message = createBaseMsgZeroImpactJoinYamm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.c_amount_in !== undefined && object.c_amount_in !== null) {
      message.cAmountIn = Coin.fromAmino(object.c_amount_in);
    }
    if (object.min_lpt_out !== undefined && object.min_lpt_out !== null) {
      message.minLptOut = object.min_lpt_out;
    }
    return message;
  },
  toAmino(message: MsgZeroImpactJoinYamm): MsgZeroImpactJoinYammAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.c_amount_in = message.cAmountIn ? Coin.toAmino(message.cAmountIn) : undefined;
    obj.min_lpt_out = message.minLptOut;
    return obj;
  },
  fromAminoMsg(object: MsgZeroImpactJoinYammAminoMsg): MsgZeroImpactJoinYamm {
    return MsgZeroImpactJoinYamm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgZeroImpactJoinYamm): MsgZeroImpactJoinYammAminoMsg {
    return {
      type: "pryzm/amm/v1/ZeroImpactJoinYamm",
      value: MsgZeroImpactJoinYamm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgZeroImpactJoinYammProtoMsg): MsgZeroImpactJoinYamm {
    return MsgZeroImpactJoinYamm.decode(message.value);
  },
  toProto(message: MsgZeroImpactJoinYamm): Uint8Array {
    return MsgZeroImpactJoinYamm.encode(message).finish();
  },
  toProtoMsg(message: MsgZeroImpactJoinYamm): MsgZeroImpactJoinYammProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYamm",
      value: MsgZeroImpactJoinYamm.encode(message).finish()
    };
  }
};
function createBaseMsgZeroImpactJoinYammResponse(): MsgZeroImpactJoinYammResponse {
  return {
    lptOut: Coin.fromPartial({}),
    yOut: [],
    refractFee: Coin.fromPartial({}),
    joinProtocolFee: [],
    swapFee: []
  };
}
export const MsgZeroImpactJoinYammResponse = {
  typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYammResponse",
  encode(message: MsgZeroImpactJoinYammResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.yOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.refractFee !== undefined) {
      Coin.encode(message.refractFee, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.joinProtocolFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgZeroImpactJoinYammResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgZeroImpactJoinYammResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.yOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.refractFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.joinProtocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgZeroImpactJoinYammResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      yOut: Array.isArray(object?.yOut) ? object.yOut.map((e: any) => Coin.fromJSON(e)) : [],
      refractFee: isSet(object.refractFee) ? Coin.fromJSON(object.refractFee) : undefined,
      joinProtocolFee: Array.isArray(object?.joinProtocolFee) ? object.joinProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgZeroImpactJoinYammResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.yOut) {
      obj.yOut = message.yOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yOut = [];
    }
    message.refractFee !== undefined && (obj.refractFee = message.refractFee ? Coin.toJSON(message.refractFee) : undefined);
    if (message.joinProtocolFee) {
      obj.joinProtocolFee = message.joinProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.joinProtocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgZeroImpactJoinYammResponse>): MsgZeroImpactJoinYammResponse {
    const message = createBaseMsgZeroImpactJoinYammResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.yOut = object.yOut?.map(e => Coin.fromPartial(e)) || [];
    message.refractFee = object.refractFee !== undefined && object.refractFee !== null ? Coin.fromPartial(object.refractFee) : undefined;
    message.joinProtocolFee = object.joinProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgZeroImpactJoinYammResponseAmino): MsgZeroImpactJoinYammResponse {
    const message = createBaseMsgZeroImpactJoinYammResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.yOut = object.y_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.refract_fee !== undefined && object.refract_fee !== null) {
      message.refractFee = Coin.fromAmino(object.refract_fee);
    }
    message.joinProtocolFee = object.join_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgZeroImpactJoinYammResponse): MsgZeroImpactJoinYammResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut) : undefined;
    if (message.yOut) {
      obj.y_out = message.yOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.y_out = [];
    }
    obj.refract_fee = message.refractFee ? Coin.toAmino(message.refractFee) : undefined;
    if (message.joinProtocolFee) {
      obj.join_protocol_fee = message.joinProtocolFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.join_protocol_fee = [];
    }
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.swap_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgZeroImpactJoinYammResponseAminoMsg): MsgZeroImpactJoinYammResponse {
    return MsgZeroImpactJoinYammResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgZeroImpactJoinYammResponseProtoMsg): MsgZeroImpactJoinYammResponse {
    return MsgZeroImpactJoinYammResponse.decode(message.value);
  },
  toProto(message: MsgZeroImpactJoinYammResponse): Uint8Array {
    return MsgZeroImpactJoinYammResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgZeroImpactJoinYammResponse): MsgZeroImpactJoinYammResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYammResponse",
      value: MsgZeroImpactJoinYammResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitExactTokens(): MsgExitExactTokens {
  return {
    creator: "",
    poolId: BigInt(0),
    amountsOut: [],
    maxLptIn: undefined
  };
}
export const MsgExitExactTokens = {
  typeUrl: "/pryzm.amm.v1.MsgExitExactTokens",
  encode(message: MsgExitExactTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitExactTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitExactTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      maxLptIn: isSet(object.maxLptIn) ? String(object.maxLptIn) : undefined
    };
  },
  toJSON(message: MsgExitExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.maxLptIn = object.maxLptIn ?? undefined;
    return message;
  },
  fromAmino(object: MsgExitExactTokensAmino): MsgExitExactTokens {
    const message = createBaseMsgExitExactTokens();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_lpt_in !== undefined && object.max_lpt_in !== null) {
      message.maxLptIn = object.max_lpt_in;
    }
    return message;
  },
  toAmino(message: MsgExitExactTokens): MsgExitExactTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    obj.max_lpt_in = message.maxLptIn;
    return obj;
  },
  fromAminoMsg(object: MsgExitExactTokensAminoMsg): MsgExitExactTokens {
    return MsgExitExactTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitExactTokens): MsgExitExactTokensAminoMsg {
    return {
      type: "pryzm/amm/v1/ExitExactTokens",
      value: MsgExitExactTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitExactTokensProtoMsg): MsgExitExactTokens {
    return MsgExitExactTokens.decode(message.value);
  },
  toProto(message: MsgExitExactTokens): Uint8Array {
    return MsgExitExactTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgExitExactTokens): MsgExitExactTokensProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitExactTokens",
      value: MsgExitExactTokens.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgExitExactTokensResponse",
  encode(message: MsgExitExactTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitExactTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgExitExactTokensResponseAmino): MsgExitExactTokensResponse {
    const message = createBaseMsgExitExactTokensResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExitExactTokensResponse): MsgExitExactTokensResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.swap_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExitExactTokensResponseAminoMsg): MsgExitExactTokensResponse {
    return MsgExitExactTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitExactTokensResponseProtoMsg): MsgExitExactTokensResponse {
    return MsgExitExactTokensResponse.decode(message.value);
  },
  toProto(message: MsgExitExactTokensResponse): Uint8Array {
    return MsgExitExactTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitExactTokensResponse): MsgExitExactTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitExactTokensResponse",
      value: MsgExitExactTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitTokenExactLpt(): MsgExitTokenExactLpt {
  return {
    creator: "",
    poolId: BigInt(0),
    lptIn: "",
    tokenOut: "",
    minAmountOut: undefined
  };
}
export const MsgExitTokenExactLpt = {
  typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLpt",
  encode(message: MsgExitTokenExactLpt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitTokenExactLpt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitTokenExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      minAmountOut: isSet(object.minAmountOut) ? String(object.minAmountOut) : undefined
    };
  },
  toJSON(message: MsgExitTokenExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.minAmountOut !== undefined && (obj.minAmountOut = message.minAmountOut);
    return obj;
  },
  fromPartial(object: Partial<MsgExitTokenExactLpt>): MsgExitTokenExactLpt {
    const message = createBaseMsgExitTokenExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.minAmountOut = object.minAmountOut ?? undefined;
    return message;
  },
  fromAmino(object: MsgExitTokenExactLptAmino): MsgExitTokenExactLpt {
    const message = createBaseMsgExitTokenExactLpt();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.min_amount_out !== undefined && object.min_amount_out !== null) {
      message.minAmountOut = object.min_amount_out;
    }
    return message;
  },
  toAmino(message: MsgExitTokenExactLpt): MsgExitTokenExactLptAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.lpt_in = message.lptIn;
    obj.token_out = message.tokenOut;
    obj.min_amount_out = message.minAmountOut;
    return obj;
  },
  fromAminoMsg(object: MsgExitTokenExactLptAminoMsg): MsgExitTokenExactLpt {
    return MsgExitTokenExactLpt.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitTokenExactLpt): MsgExitTokenExactLptAminoMsg {
    return {
      type: "pryzm/amm/v1/ExitTokenExactLpt",
      value: MsgExitTokenExactLpt.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitTokenExactLptProtoMsg): MsgExitTokenExactLpt {
    return MsgExitTokenExactLpt.decode(message.value);
  },
  toProto(message: MsgExitTokenExactLpt): Uint8Array {
    return MsgExitTokenExactLpt.encode(message).finish();
  },
  toProtoMsg(message: MsgExitTokenExactLpt): MsgExitTokenExactLptProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLpt",
      value: MsgExitTokenExactLpt.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLptResponse",
  encode(message: MsgExitTokenExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitTokenExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgExitTokenExactLptResponseAmino): MsgExitTokenExactLptResponse {
    const message = createBaseMsgExitTokenExactLptResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    return message;
  },
  toAmino(message: MsgExitTokenExactLptResponse): MsgExitTokenExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExitTokenExactLptResponseAminoMsg): MsgExitTokenExactLptResponse {
    return MsgExitTokenExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitTokenExactLptResponseProtoMsg): MsgExitTokenExactLptResponse {
    return MsgExitTokenExactLptResponse.decode(message.value);
  },
  toProto(message: MsgExitTokenExactLptResponse): Uint8Array {
    return MsgExitTokenExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitTokenExactLptResponse): MsgExitTokenExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLptResponse",
      value: MsgExitTokenExactLptResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitAllTokensExactLpt(): MsgExitAllTokensExactLpt {
  return {
    creator: "",
    poolId: BigInt(0),
    lptIn: "",
    minAmountsOut: []
  };
}
export const MsgExitAllTokensExactLpt = {
  typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLpt",
  encode(message: MsgExitAllTokensExactLpt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitAllTokensExactLpt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitAllTokensExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExitAllTokensExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExitAllTokensExactLptAmino): MsgExitAllTokensExactLpt {
    const message = createBaseMsgExitAllTokensExactLpt();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExitAllTokensExactLpt): MsgExitAllTokensExactLptAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.lpt_in = message.lptIn;
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_amounts_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExitAllTokensExactLptAminoMsg): MsgExitAllTokensExactLpt {
    return MsgExitAllTokensExactLpt.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitAllTokensExactLpt): MsgExitAllTokensExactLptAminoMsg {
    return {
      type: "pryzm/amm/v1/ExitAllTokensExactLpt",
      value: MsgExitAllTokensExactLpt.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitAllTokensExactLptProtoMsg): MsgExitAllTokensExactLpt {
    return MsgExitAllTokensExactLpt.decode(message.value);
  },
  toProto(message: MsgExitAllTokensExactLpt): Uint8Array {
    return MsgExitAllTokensExactLpt.encode(message).finish();
  },
  toProtoMsg(message: MsgExitAllTokensExactLpt): MsgExitAllTokensExactLptProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLpt",
      value: MsgExitAllTokensExactLpt.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLptResponse",
  encode(message: MsgExitAllTokensExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitAllTokensExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgExitAllTokensExactLptResponseAmino): MsgExitAllTokensExactLptResponse {
    const message = createBaseMsgExitAllTokensExactLptResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    return message;
  },
  toAmino(message: MsgExitAllTokensExactLptResponse): MsgExitAllTokensExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExitAllTokensExactLptResponseAminoMsg): MsgExitAllTokensExactLptResponse {
    return MsgExitAllTokensExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitAllTokensExactLptResponseProtoMsg): MsgExitAllTokensExactLptResponse {
    return MsgExitAllTokensExactLptResponse.decode(message.value);
  },
  toProto(message: MsgExitAllTokensExactLptResponse): Uint8Array {
    return MsgExitAllTokensExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitAllTokensExactLptResponse): MsgExitAllTokensExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLptResponse",
      value: MsgExitAllTokensExactLptResponse.encode(message).finish()
    };
  }
};
function createBaseCreateWeightedPoolToken(): CreateWeightedPoolToken {
  return {
    denom: "",
    normalizedWeight: ""
  };
}
export const CreateWeightedPoolToken = {
  typeUrl: "/pryzm.amm.v1.CreateWeightedPoolToken",
  encode(message: CreateWeightedPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.normalizedWeight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.normalizedWeight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateWeightedPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWeightedPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 3:
          message.normalizedWeight = Decimal.fromAtomics(reader.string(), 18).toString();
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
  },
  fromAmino(object: CreateWeightedPoolTokenAmino): CreateWeightedPoolToken {
    const message = createBaseCreateWeightedPoolToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.normalized_weight !== undefined && object.normalized_weight !== null) {
      message.normalizedWeight = object.normalized_weight;
    }
    return message;
  },
  toAmino(message: CreateWeightedPoolToken): CreateWeightedPoolTokenAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.normalized_weight = message.normalizedWeight;
    return obj;
  },
  fromAminoMsg(object: CreateWeightedPoolTokenAminoMsg): CreateWeightedPoolToken {
    return CreateWeightedPoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateWeightedPoolTokenProtoMsg): CreateWeightedPoolToken {
    return CreateWeightedPoolToken.decode(message.value);
  },
  toProto(message: CreateWeightedPoolToken): Uint8Array {
    return CreateWeightedPoolToken.encode(message).finish();
  },
  toProtoMsg(message: CreateWeightedPoolToken): CreateWeightedPoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.CreateWeightedPoolToken",
      value: CreateWeightedPoolToken.encode(message).finish()
    };
  }
};
function createBaseMsgCreateWeightedPool(): MsgCreateWeightedPool {
  return {
    creator: "",
    name: "",
    swapFeeRatio: "",
    pauseWindowDurationMillis: BigInt(0),
    pauseBufferDurationMillis: BigInt(0),
    tokens: [],
    initializationAllowList: []
  };
}
export const MsgCreateWeightedPool = {
  typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPool",
  encode(message: MsgCreateWeightedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFeeRatio, 18).atomics);
    }
    if (message.pauseWindowDurationMillis !== BigInt(0)) {
      writer.uint32(32).int64(message.pauseWindowDurationMillis);
    }
    if (message.pauseBufferDurationMillis !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateWeightedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.swapFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.pauseWindowDurationMillis = reader.int64();
          break;
        case 5:
          message.pauseBufferDurationMillis = reader.int64();
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
      pauseWindowDurationMillis: isSet(object.pauseWindowDurationMillis) ? BigInt(object.pauseWindowDurationMillis.toString()) : BigInt(0),
      pauseBufferDurationMillis: isSet(object.pauseBufferDurationMillis) ? BigInt(object.pauseBufferDurationMillis.toString()) : BigInt(0),
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => CreateWeightedPoolToken.fromJSON(e)) : [],
      initializationAllowList: Array.isArray(object?.initializationAllowList) ? object.initializationAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgCreateWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    message.pauseWindowDurationMillis !== undefined && (obj.pauseWindowDurationMillis = (message.pauseWindowDurationMillis || BigInt(0)).toString());
    message.pauseBufferDurationMillis !== undefined && (obj.pauseBufferDurationMillis = (message.pauseBufferDurationMillis || BigInt(0)).toString());
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
    message.pauseWindowDurationMillis = object.pauseWindowDurationMillis !== undefined && object.pauseWindowDurationMillis !== null ? BigInt(object.pauseWindowDurationMillis.toString()) : BigInt(0);
    message.pauseBufferDurationMillis = object.pauseBufferDurationMillis !== undefined && object.pauseBufferDurationMillis !== null ? BigInt(object.pauseBufferDurationMillis.toString()) : BigInt(0);
    message.tokens = object.tokens?.map(e => CreateWeightedPoolToken.fromPartial(e)) || [];
    message.initializationAllowList = object.initializationAllowList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgCreateWeightedPoolAmino): MsgCreateWeightedPool {
    const message = createBaseMsgCreateWeightedPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.swap_fee_ratio !== undefined && object.swap_fee_ratio !== null) {
      message.swapFeeRatio = object.swap_fee_ratio;
    }
    if (object.pause_window_duration_millis !== undefined && object.pause_window_duration_millis !== null) {
      message.pauseWindowDurationMillis = BigInt(object.pause_window_duration_millis);
    }
    if (object.pause_buffer_duration_millis !== undefined && object.pause_buffer_duration_millis !== null) {
      message.pauseBufferDurationMillis = BigInt(object.pause_buffer_duration_millis);
    }
    message.tokens = object.tokens?.map(e => CreateWeightedPoolToken.fromAmino(e)) || [];
    message.initializationAllowList = object.initialization_allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCreateWeightedPool): MsgCreateWeightedPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.name = message.name;
    obj.swap_fee_ratio = message.swapFeeRatio;
    obj.pause_window_duration_millis = message.pauseWindowDurationMillis ? message.pauseWindowDurationMillis.toString() : "0";
    obj.pause_buffer_duration_millis = message.pauseBufferDurationMillis ? message.pauseBufferDurationMillis.toString() : "0";
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? CreateWeightedPoolToken.toAmino(e) : undefined);
    } else {
      obj.tokens = [];
    }
    if (message.initializationAllowList) {
      obj.initialization_allow_list = message.initializationAllowList.map(e => e);
    } else {
      obj.initialization_allow_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateWeightedPoolAminoMsg): MsgCreateWeightedPool {
    return MsgCreateWeightedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateWeightedPool): MsgCreateWeightedPoolAminoMsg {
    return {
      type: "pryzm/amm/v1/CreateWeightedPool",
      value: MsgCreateWeightedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateWeightedPoolProtoMsg): MsgCreateWeightedPool {
    return MsgCreateWeightedPool.decode(message.value);
  },
  toProto(message: MsgCreateWeightedPool): Uint8Array {
    return MsgCreateWeightedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateWeightedPool): MsgCreateWeightedPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPool",
      value: MsgCreateWeightedPool.encode(message).finish()
    };
  }
};
function createBaseMsgCreateWeightedPoolResponse(): MsgCreateWeightedPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateWeightedPoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPoolResponse",
  encode(message: MsgCreateWeightedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateWeightedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateWeightedPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateWeightedPoolResponse>): MsgCreateWeightedPoolResponse {
    const message = createBaseMsgCreateWeightedPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateWeightedPoolResponseAmino): MsgCreateWeightedPoolResponse {
    const message = createBaseMsgCreateWeightedPoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgCreateWeightedPoolResponse): MsgCreateWeightedPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateWeightedPoolResponseAminoMsg): MsgCreateWeightedPoolResponse {
    return MsgCreateWeightedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateWeightedPoolResponseProtoMsg): MsgCreateWeightedPoolResponse {
    return MsgCreateWeightedPoolResponse.decode(message.value);
  },
  toProto(message: MsgCreateWeightedPoolResponse): Uint8Array {
    return MsgCreateWeightedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateWeightedPoolResponse): MsgCreateWeightedPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPoolResponse",
      value: MsgCreateWeightedPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSwapFee(): MsgUpdateSwapFee {
  return {
    creator: "",
    poolId: BigInt(0),
    swapFeeRatio: ""
  };
}
export const MsgUpdateSwapFee = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFee",
  encode(message: MsgUpdateSwapFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFeeRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSwapFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.swapFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : ""
    };
  },
  toJSON(message: MsgUpdateSwapFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateSwapFee>): MsgUpdateSwapFee {
    const message = createBaseMsgUpdateSwapFee();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateSwapFeeAmino): MsgUpdateSwapFee {
    const message = createBaseMsgUpdateSwapFee();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.swap_fee_ratio !== undefined && object.swap_fee_ratio !== null) {
      message.swapFeeRatio = object.swap_fee_ratio;
    }
    return message;
  },
  toAmino(message: MsgUpdateSwapFee): MsgUpdateSwapFeeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.swap_fee_ratio = message.swapFeeRatio;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSwapFeeAminoMsg): MsgUpdateSwapFee {
    return MsgUpdateSwapFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateSwapFee): MsgUpdateSwapFeeAminoMsg {
    return {
      type: "pryzm/amm/v1/UpdateSwapFee",
      value: MsgUpdateSwapFee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateSwapFeeProtoMsg): MsgUpdateSwapFee {
    return MsgUpdateSwapFee.decode(message.value);
  },
  toProto(message: MsgUpdateSwapFee): Uint8Array {
    return MsgUpdateSwapFee.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSwapFee): MsgUpdateSwapFeeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFee",
      value: MsgUpdateSwapFee.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSwapFeeResponse(): MsgUpdateSwapFeeResponse {
  return {};
}
export const MsgUpdateSwapFeeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFeeResponse",
  encode(_: MsgUpdateSwapFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSwapFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgUpdateSwapFeeResponseAmino): MsgUpdateSwapFeeResponse {
    const message = createBaseMsgUpdateSwapFeeResponse();
    return message;
  },
  toAmino(_: MsgUpdateSwapFeeResponse): MsgUpdateSwapFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSwapFeeResponseAminoMsg): MsgUpdateSwapFeeResponse {
    return MsgUpdateSwapFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSwapFeeResponseProtoMsg): MsgUpdateSwapFeeResponse {
    return MsgUpdateSwapFeeResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSwapFeeResponse): Uint8Array {
    return MsgUpdateSwapFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSwapFeeResponse): MsgUpdateSwapFeeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFeeResponse",
      value: MsgUpdateSwapFeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInitializePool(): MsgInitializePool {
  return {
    creator: "",
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const MsgInitializePool = {
  typeUrl: "/pryzm.amm.v1.MsgInitializePool",
  encode(message: MsgInitializePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInitializePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgInitializePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgInitializePoolAmino): MsgInitializePool {
    const message = createBaseMsgInitializePool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgInitializePool): MsgInitializePoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgInitializePoolAminoMsg): MsgInitializePool {
    return MsgInitializePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInitializePool): MsgInitializePoolAminoMsg {
    return {
      type: "pryzm/amm/v1/InitializePool",
      value: MsgInitializePool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInitializePoolProtoMsg): MsgInitializePool {
    return MsgInitializePool.decode(message.value);
  },
  toProto(message: MsgInitializePool): Uint8Array {
    return MsgInitializePool.encode(message).finish();
  },
  toProtoMsg(message: MsgInitializePool): MsgInitializePoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgInitializePool",
      value: MsgInitializePool.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgInitializePoolResponse",
  encode(message: MsgInitializePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInitializePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgInitializePoolResponseAmino): MsgInitializePoolResponse {
    const message = createBaseMsgInitializePoolResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgInitializePoolResponse): MsgInitializePoolResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut) : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = [];
    }
    if (message.protocolFee) {
      obj.protocol_fee = message.protocolFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.protocol_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgInitializePoolResponseAminoMsg): MsgInitializePoolResponse {
    return MsgInitializePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInitializePoolResponseProtoMsg): MsgInitializePoolResponse {
    return MsgInitializePoolResponse.decode(message.value);
  },
  toProto(message: MsgInitializePoolResponse): Uint8Array {
    return MsgInitializePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInitializePoolResponse): MsgInitializePoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgInitializePoolResponse",
      value: MsgInitializePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateWeights(): MsgUpdateWeights {
  return {
    creator: "",
    poolId: BigInt(0),
    tokenWeights: [],
    startTimeUnixMillis: BigInt(0),
    endTimeUnixMillis: BigInt(0)
  };
}
export const MsgUpdateWeights = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateWeights",
  encode(message: MsgUpdateWeights, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokenWeights) {
      TokenWeight.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTimeUnixMillis !== BigInt(0)) {
      writer.uint32(32).int64(message.startTimeUnixMillis);
    }
    if (message.endTimeUnixMillis !== BigInt(0)) {
      writer.uint32(40).int64(message.endTimeUnixMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateWeights {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenWeights.push(TokenWeight.decode(reader, reader.uint32()));
          break;
        case 4:
          message.startTimeUnixMillis = reader.int64();
          break;
        case 5:
          message.endTimeUnixMillis = reader.int64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenWeights: Array.isArray(object?.tokenWeights) ? object.tokenWeights.map((e: any) => TokenWeight.fromJSON(e)) : [],
      startTimeUnixMillis: isSet(object.startTimeUnixMillis) ? BigInt(object.startTimeUnixMillis.toString()) : BigInt(0),
      endTimeUnixMillis: isSet(object.endTimeUnixMillis) ? BigInt(object.endTimeUnixMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgUpdateWeights): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.tokenWeights) {
      obj.tokenWeights = message.tokenWeights.map(e => e ? TokenWeight.toJSON(e) : undefined);
    } else {
      obj.tokenWeights = [];
    }
    message.startTimeUnixMillis !== undefined && (obj.startTimeUnixMillis = (message.startTimeUnixMillis || BigInt(0)).toString());
    message.endTimeUnixMillis !== undefined && (obj.endTimeUnixMillis = (message.endTimeUnixMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateWeights>): MsgUpdateWeights {
    const message = createBaseMsgUpdateWeights();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenWeights = object.tokenWeights?.map(e => TokenWeight.fromPartial(e)) || [];
    message.startTimeUnixMillis = object.startTimeUnixMillis !== undefined && object.startTimeUnixMillis !== null ? BigInt(object.startTimeUnixMillis.toString()) : BigInt(0);
    message.endTimeUnixMillis = object.endTimeUnixMillis !== undefined && object.endTimeUnixMillis !== null ? BigInt(object.endTimeUnixMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateWeightsAmino): MsgUpdateWeights {
    const message = createBaseMsgUpdateWeights();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokenWeights = object.token_weights?.map(e => TokenWeight.fromAmino(e)) || [];
    if (object.start_time_unix_millis !== undefined && object.start_time_unix_millis !== null) {
      message.startTimeUnixMillis = BigInt(object.start_time_unix_millis);
    }
    if (object.end_time_unix_millis !== undefined && object.end_time_unix_millis !== null) {
      message.endTimeUnixMillis = BigInt(object.end_time_unix_millis);
    }
    return message;
  },
  toAmino(message: MsgUpdateWeights): MsgUpdateWeightsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    if (message.tokenWeights) {
      obj.token_weights = message.tokenWeights.map(e => e ? TokenWeight.toAmino(e) : undefined);
    } else {
      obj.token_weights = [];
    }
    obj.start_time_unix_millis = message.startTimeUnixMillis ? message.startTimeUnixMillis.toString() : "0";
    obj.end_time_unix_millis = message.endTimeUnixMillis ? message.endTimeUnixMillis.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgUpdateWeightsAminoMsg): MsgUpdateWeights {
    return MsgUpdateWeights.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateWeights): MsgUpdateWeightsAminoMsg {
    return {
      type: "pryzm/amm/v1/UpdateWeights",
      value: MsgUpdateWeights.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateWeightsProtoMsg): MsgUpdateWeights {
    return MsgUpdateWeights.decode(message.value);
  },
  toProto(message: MsgUpdateWeights): Uint8Array {
    return MsgUpdateWeights.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateWeights): MsgUpdateWeightsProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateWeights",
      value: MsgUpdateWeights.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateWeightsResponse(): MsgUpdateWeightsResponse {
  return {};
}
export const MsgUpdateWeightsResponse = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateWeightsResponse",
  encode(_: MsgUpdateWeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateWeightsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgUpdateWeightsResponseAmino): MsgUpdateWeightsResponse {
    const message = createBaseMsgUpdateWeightsResponse();
    return message;
  },
  toAmino(_: MsgUpdateWeightsResponse): MsgUpdateWeightsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateWeightsResponseAminoMsg): MsgUpdateWeightsResponse {
    return MsgUpdateWeightsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateWeightsResponseProtoMsg): MsgUpdateWeightsResponse {
    return MsgUpdateWeightsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateWeightsResponse): Uint8Array {
    return MsgUpdateWeightsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateWeightsResponse): MsgUpdateWeightsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateWeightsResponse",
      value: MsgUpdateWeightsResponse.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgBatchSwap",
  encode(message: MsgBatchSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgBatchSwapAmino): MsgBatchSwap {
    const message = createBaseMsgBatchSwap();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = swapTypeFromJSON(object.swap_type);
    }
    message.steps = object.steps?.map(e => SwapStep.fromAmino(e)) || [];
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.maxAmountsIn = object.max_amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBatchSwap): MsgBatchSwapAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.swap_type = swapTypeToJSON(message.swapType);
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toAmino(e) : undefined);
    } else {
      obj.steps = [];
    }
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_amounts_out = [];
    }
    if (message.maxAmountsIn) {
      obj.max_amounts_in = message.maxAmountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.max_amounts_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchSwapAminoMsg): MsgBatchSwap {
    return MsgBatchSwap.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBatchSwap): MsgBatchSwapAminoMsg {
    return {
      type: "pryzm/amm/v1/BatchSwap",
      value: MsgBatchSwap.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBatchSwapProtoMsg): MsgBatchSwap {
    return MsgBatchSwap.decode(message.value);
  },
  toProto(message: MsgBatchSwap): Uint8Array {
    return MsgBatchSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchSwap): MsgBatchSwapProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgBatchSwap",
      value: MsgBatchSwap.encode(message).finish()
    };
  }
};
function createBaseMsgBatchSwapResponse(): MsgBatchSwapResponse {
  return {
    amountsIn: [],
    amountsOut: [],
    swapProtocolFee: [],
    joinExitProtocolFee: [],
    swapFee: []
  };
}
export const MsgBatchSwapResponse = {
  typeUrl: "/pryzm.amm.v1.MsgBatchSwapResponse",
  encode(message: MsgBatchSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.swapProtocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.joinExitProtocolFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.swapProtocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.joinExitProtocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
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
      swapProtocolFee: Array.isArray(object?.swapProtocolFee) ? object.swapProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinExitProtocolFee: Array.isArray(object?.joinExitProtocolFee) ? object.joinExitProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
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
    if (message.swapProtocolFee) {
      obj.swapProtocolFee = message.swapProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapProtocolFee = [];
    }
    if (message.joinExitProtocolFee) {
      obj.joinExitProtocolFee = message.joinExitProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.joinExitProtocolFee = [];
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
    message.swapProtocolFee = object.swapProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinExitProtocolFee = object.joinExitProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBatchSwapResponseAmino): MsgBatchSwapResponse {
    const message = createBaseMsgBatchSwapResponse();
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.swapProtocolFee = object.swap_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.joinExitProtocolFee = object.join_exit_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBatchSwapResponse): MsgBatchSwapResponseAmino {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = [];
    }
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    if (message.swapProtocolFee) {
      obj.swap_protocol_fee = message.swapProtocolFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.swap_protocol_fee = [];
    }
    if (message.joinExitProtocolFee) {
      obj.join_exit_protocol_fee = message.joinExitProtocolFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.join_exit_protocol_fee = [];
    }
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.swap_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchSwapResponseAminoMsg): MsgBatchSwapResponse {
    return MsgBatchSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchSwapResponseProtoMsg): MsgBatchSwapResponse {
    return MsgBatchSwapResponse.decode(message.value);
  },
  toProto(message: MsgBatchSwapResponse): Uint8Array {
    return MsgBatchSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchSwapResponse): MsgBatchSwapResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgBatchSwapResponse",
      value: MsgBatchSwapResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetYammConfiguration(): MsgSetYammConfiguration {
  return {
    creator: "",
    configuration: YammConfiguration.fromPartial({})
  };
}
export const MsgSetYammConfiguration = {
  typeUrl: "/pryzm.amm.v1.MsgSetYammConfiguration",
  encode(message: MsgSetYammConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.configuration !== undefined) {
      YammConfiguration.encode(message.configuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetYammConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSetYammConfigurationAmino): MsgSetYammConfiguration {
    const message = createBaseMsgSetYammConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = YammConfiguration.fromAmino(object.configuration);
    }
    return message;
  },
  toAmino(message: MsgSetYammConfiguration): MsgSetYammConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.configuration = message.configuration ? YammConfiguration.toAmino(message.configuration) : YammConfiguration.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgSetYammConfigurationAminoMsg): MsgSetYammConfiguration {
    return MsgSetYammConfiguration.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetYammConfiguration): MsgSetYammConfigurationAminoMsg {
    return {
      type: "pryzm/amm/v1/SetYammConfiguration",
      value: MsgSetYammConfiguration.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetYammConfigurationProtoMsg): MsgSetYammConfiguration {
    return MsgSetYammConfiguration.decode(message.value);
  },
  toProto(message: MsgSetYammConfiguration): Uint8Array {
    return MsgSetYammConfiguration.encode(message).finish();
  },
  toProtoMsg(message: MsgSetYammConfiguration): MsgSetYammConfigurationProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetYammConfiguration",
      value: MsgSetYammConfiguration.encode(message).finish()
    };
  }
};
function createBaseMsgSetYammConfigurationResponse(): MsgSetYammConfigurationResponse {
  return {};
}
export const MsgSetYammConfigurationResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetYammConfigurationResponse",
  encode(_: MsgSetYammConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetYammConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetYammConfigurationResponseAmino): MsgSetYammConfigurationResponse {
    const message = createBaseMsgSetYammConfigurationResponse();
    return message;
  },
  toAmino(_: MsgSetYammConfigurationResponse): MsgSetYammConfigurationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetYammConfigurationResponseAminoMsg): MsgSetYammConfigurationResponse {
    return MsgSetYammConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetYammConfigurationResponseProtoMsg): MsgSetYammConfigurationResponse {
    return MsgSetYammConfigurationResponse.decode(message.value);
  },
  toProto(message: MsgSetYammConfigurationResponse): Uint8Array {
    return MsgSetYammConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetYammConfigurationResponse): MsgSetYammConfigurationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetYammConfigurationResponse",
      value: MsgSetYammConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelistRoute(): MsgWhitelistRoute {
  return {
    authority: "",
    whitelistedRoute: WhitelistedRoute.fromPartial({})
  };
}
export const MsgWhitelistRoute = {
  typeUrl: "/pryzm.amm.v1.MsgWhitelistRoute",
  encode(message: MsgWhitelistRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgWhitelistRouteAmino): MsgWhitelistRoute {
    const message = createBaseMsgWhitelistRoute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = WhitelistedRoute.fromAmino(object.whitelisted_route);
    }
    return message;
  },
  toAmino(message: MsgWhitelistRoute): MsgWhitelistRouteAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.whitelisted_route = message.whitelistedRoute ? WhitelistedRoute.toAmino(message.whitelistedRoute) : WhitelistedRoute.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistRouteAminoMsg): MsgWhitelistRoute {
    return MsgWhitelistRoute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWhitelistRoute): MsgWhitelistRouteAminoMsg {
    return {
      type: "pryzm/amm/v1/WhitelistRoute",
      value: MsgWhitelistRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWhitelistRouteProtoMsg): MsgWhitelistRoute {
    return MsgWhitelistRoute.decode(message.value);
  },
  toProto(message: MsgWhitelistRoute): Uint8Array {
    return MsgWhitelistRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistRoute): MsgWhitelistRouteProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgWhitelistRoute",
      value: MsgWhitelistRoute.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelistRouteResponse(): MsgWhitelistRouteResponse {
  return {};
}
export const MsgWhitelistRouteResponse = {
  typeUrl: "/pryzm.amm.v1.MsgWhitelistRouteResponse",
  encode(_: MsgWhitelistRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgWhitelistRouteResponseAmino): MsgWhitelistRouteResponse {
    const message = createBaseMsgWhitelistRouteResponse();
    return message;
  },
  toAmino(_: MsgWhitelistRouteResponse): MsgWhitelistRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistRouteResponseAminoMsg): MsgWhitelistRouteResponse {
    return MsgWhitelistRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistRouteResponseProtoMsg): MsgWhitelistRouteResponse {
    return MsgWhitelistRouteResponse.decode(message.value);
  },
  toProto(message: MsgWhitelistRouteResponse): Uint8Array {
    return MsgWhitelistRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistRouteResponse): MsgWhitelistRouteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgWhitelistRouteResponse",
      value: MsgWhitelistRouteResponse.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabled",
  encode(message: MsgSetWhitelistedRouteEnabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWhitelistedRouteEnabled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSetWhitelistedRouteEnabledAmino): MsgSetWhitelistedRouteEnabled {
    const message = createBaseMsgSetWhitelistedRouteEnabled();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: MsgSetWhitelistedRouteEnabled): MsgSetWhitelistedRouteEnabledAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    obj.enabled = message.enabled ?? false;
    return obj;
  },
  fromAminoMsg(object: MsgSetWhitelistedRouteEnabledAminoMsg): MsgSetWhitelistedRouteEnabled {
    return MsgSetWhitelistedRouteEnabled.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetWhitelistedRouteEnabled): MsgSetWhitelistedRouteEnabledAminoMsg {
    return {
      type: "pryzm/amm/v1/SetWhitelistedRouteEnabled",
      value: MsgSetWhitelistedRouteEnabled.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetWhitelistedRouteEnabledProtoMsg): MsgSetWhitelistedRouteEnabled {
    return MsgSetWhitelistedRouteEnabled.decode(message.value);
  },
  toProto(message: MsgSetWhitelistedRouteEnabled): Uint8Array {
    return MsgSetWhitelistedRouteEnabled.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWhitelistedRouteEnabled): MsgSetWhitelistedRouteEnabledProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabled",
      value: MsgSetWhitelistedRouteEnabled.encode(message).finish()
    };
  }
};
function createBaseMsgSetWhitelistedRouteEnabledResponse(): MsgSetWhitelistedRouteEnabledResponse {
  return {};
}
export const MsgSetWhitelistedRouteEnabledResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabledResponse",
  encode(_: MsgSetWhitelistedRouteEnabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWhitelistedRouteEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetWhitelistedRouteEnabledResponseAmino): MsgSetWhitelistedRouteEnabledResponse {
    const message = createBaseMsgSetWhitelistedRouteEnabledResponse();
    return message;
  },
  toAmino(_: MsgSetWhitelistedRouteEnabledResponse): MsgSetWhitelistedRouteEnabledResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetWhitelistedRouteEnabledResponseAminoMsg): MsgSetWhitelistedRouteEnabledResponse {
    return MsgSetWhitelistedRouteEnabledResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetWhitelistedRouteEnabledResponseProtoMsg): MsgSetWhitelistedRouteEnabledResponse {
    return MsgSetWhitelistedRouteEnabledResponse.decode(message.value);
  },
  toProto(message: MsgSetWhitelistedRouteEnabledResponse): Uint8Array {
    return MsgSetWhitelistedRouteEnabledResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWhitelistedRouteEnabledResponse): MsgSetWhitelistedRouteEnabledResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabledResponse",
      value: MsgSetWhitelistedRouteEnabledResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitOrder(): MsgSubmitOrder {
  return {
    creator: "",
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    allowMatching: false,
    amountPerStep: "",
    totalAmount: "",
    millisInterval: BigInt(0),
    maxStepSpotPrice: "",
    maxMatchingSpotPrice: undefined
  };
}
export const MsgSubmitOrder = {
  typeUrl: "/pryzm.amm.v1.MsgSubmitOrder",
  encode(message: MsgSubmitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
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
    if (message.millisInterval !== BigInt(0)) {
      writer.uint32(72).int64(message.millisInterval);
    }
    if (message.maxStepSpotPrice !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.maxStepSpotPrice, 18).atomics);
    }
    if (message.maxMatchingSpotPrice !== undefined) {
      writer.uint32(90).string(Decimal.fromUserInput(message.maxMatchingSpotPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
          message.millisInterval = reader.int64();
          break;
        case 10:
          message.maxStepSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.maxMatchingSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      allowMatching: isSet(object.allowMatching) ? Boolean(object.allowMatching) : false,
      amountPerStep: isSet(object.amountPerStep) ? String(object.amountPerStep) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      millisInterval: isSet(object.millisInterval) ? BigInt(object.millisInterval.toString()) : BigInt(0),
      maxStepSpotPrice: isSet(object.maxStepSpotPrice) ? String(object.maxStepSpotPrice) : "",
      maxMatchingSpotPrice: isSet(object.maxMatchingSpotPrice) ? String(object.maxMatchingSpotPrice) : undefined
    };
  },
  toJSON(message: MsgSubmitOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.allowMatching !== undefined && (obj.allowMatching = message.allowMatching);
    message.amountPerStep !== undefined && (obj.amountPerStep = message.amountPerStep);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.millisInterval !== undefined && (obj.millisInterval = (message.millisInterval || BigInt(0)).toString());
    message.maxStepSpotPrice !== undefined && (obj.maxStepSpotPrice = message.maxStepSpotPrice);
    message.maxMatchingSpotPrice !== undefined && (obj.maxMatchingSpotPrice = message.maxMatchingSpotPrice);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitOrder>): MsgSubmitOrder {
    const message = createBaseMsgSubmitOrder();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.allowMatching = object.allowMatching ?? false;
    message.amountPerStep = object.amountPerStep ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.millisInterval = object.millisInterval !== undefined && object.millisInterval !== null ? BigInt(object.millisInterval.toString()) : BigInt(0);
    message.maxStepSpotPrice = object.maxStepSpotPrice ?? "";
    message.maxMatchingSpotPrice = object.maxMatchingSpotPrice ?? undefined;
    return message;
  },
  fromAmino(object: MsgSubmitOrderAmino): MsgSubmitOrder {
    const message = createBaseMsgSubmitOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.allow_matching !== undefined && object.allow_matching !== null) {
      message.allowMatching = object.allow_matching;
    }
    if (object.amount_per_step !== undefined && object.amount_per_step !== null) {
      message.amountPerStep = object.amount_per_step;
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.millis_interval !== undefined && object.millis_interval !== null) {
      message.millisInterval = BigInt(object.millis_interval);
    }
    if (object.max_step_spot_price !== undefined && object.max_step_spot_price !== null) {
      message.maxStepSpotPrice = object.max_step_spot_price;
    }
    if (object.max_matching_spot_price !== undefined && object.max_matching_spot_price !== null) {
      message.maxMatchingSpotPrice = object.max_matching_spot_price;
    }
    return message;
  },
  toAmino(message: MsgSubmitOrder): MsgSubmitOrderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute ?? false;
    obj.allow_matching = message.allowMatching ?? false;
    obj.amount_per_step = message.amountPerStep;
    obj.total_amount = message.totalAmount;
    obj.millis_interval = message.millisInterval ? message.millisInterval.toString() : "0";
    obj.max_step_spot_price = message.maxStepSpotPrice;
    obj.max_matching_spot_price = message.maxMatchingSpotPrice;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitOrderAminoMsg): MsgSubmitOrder {
    return MsgSubmitOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitOrder): MsgSubmitOrderAminoMsg {
    return {
      type: "pryzm/amm/v1/SubmitOrder",
      value: MsgSubmitOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitOrderProtoMsg): MsgSubmitOrder {
    return MsgSubmitOrder.decode(message.value);
  },
  toProto(message: MsgSubmitOrder): Uint8Array {
    return MsgSubmitOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitOrder): MsgSubmitOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSubmitOrder",
      value: MsgSubmitOrder.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitOrderResponse(): MsgSubmitOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const MsgSubmitOrderResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSubmitOrderResponse",
  encode(message: MsgSubmitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSubmitOrderResponseAmino): MsgSubmitOrderResponse {
    const message = createBaseMsgSubmitOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: MsgSubmitOrderResponse): MsgSubmitOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitOrderResponseAminoMsg): MsgSubmitOrderResponse {
    return MsgSubmitOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitOrderResponseProtoMsg): MsgSubmitOrderResponse {
    return MsgSubmitOrderResponse.decode(message.value);
  },
  toProto(message: MsgSubmitOrderResponse): Uint8Array {
    return MsgSubmitOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitOrderResponse): MsgSubmitOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSubmitOrderResponse",
      value: MsgSubmitOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgCancelOrder = {
  typeUrl: "/pryzm.amm.v1.MsgCancelOrder",
  encode(message: MsgCancelOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelOrderAmino): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCancelOrder): MsgCancelOrderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.id = message.id ? message.id.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderAminoMsg): MsgCancelOrder {
    return MsgCancelOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelOrder): MsgCancelOrderAminoMsg {
    return {
      type: "pryzm/amm/v1/CancelOrder",
      value: MsgCancelOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelOrderProtoMsg): MsgCancelOrder {
    return MsgCancelOrder.decode(message.value);
  },
  toProto(message: MsgCancelOrder): Uint8Array {
    return MsgCancelOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrder): MsgCancelOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCancelOrder",
      value: MsgCancelOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {
    withdrawnDeposit: Coin.fromPartial({})
  };
}
export const MsgCancelOrderResponse = {
  typeUrl: "/pryzm.amm.v1.MsgCancelOrderResponse",
  encode(message: MsgCancelOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawnDeposit !== undefined) {
      Coin.encode(message.withdrawnDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgCancelOrderResponseAmino): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    if (object.withdrawn_deposit !== undefined && object.withdrawn_deposit !== null) {
      message.withdrawnDeposit = Coin.fromAmino(object.withdrawn_deposit);
    }
    return message;
  },
  toAmino(message: MsgCancelOrderResponse): MsgCancelOrderResponseAmino {
    const obj: any = {};
    obj.withdrawn_deposit = message.withdrawnDeposit ? Coin.toAmino(message.withdrawnDeposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderResponseAminoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOrderResponseProtoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelOrderResponse): Uint8Array {
    return MsgCancelOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrderResponse): MsgCancelOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCancelOrderResponse",
      value: MsgCancelOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProposeMatch(): MsgProposeMatch {
  return {
    creator: "",
    pairs: []
  };
}
export const MsgProposeMatch = {
  typeUrl: "/pryzm.amm.v1.MsgProposeMatch",
  encode(message: MsgProposeMatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.pairs) {
      PairMatchProposal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeMatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgProposeMatchAmino): MsgProposeMatch {
    const message = createBaseMsgProposeMatch();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.pairs = object.pairs?.map(e => PairMatchProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgProposeMatch): MsgProposeMatchAmino {
    const obj: any = {};
    obj.creator = message.creator;
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PairMatchProposal.toAmino(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgProposeMatchAminoMsg): MsgProposeMatch {
    return MsgProposeMatch.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProposeMatch): MsgProposeMatchAminoMsg {
    return {
      type: "pryzm/amm/v1/ProposeMatch",
      value: MsgProposeMatch.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgProposeMatchProtoMsg): MsgProposeMatch {
    return MsgProposeMatch.decode(message.value);
  },
  toProto(message: MsgProposeMatch): Uint8Array {
    return MsgProposeMatch.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeMatch): MsgProposeMatchProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgProposeMatch",
      value: MsgProposeMatch.encode(message).finish()
    };
  }
};
function createBaseMsgProposeMatchResponse(): MsgProposeMatchResponse {
  return {
    proposerReward: []
  };
}
export const MsgProposeMatchResponse = {
  typeUrl: "/pryzm.amm.v1.MsgProposeMatchResponse",
  encode(message: MsgProposeMatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposerReward) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeMatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgProposeMatchResponseAmino): MsgProposeMatchResponse {
    const message = createBaseMsgProposeMatchResponse();
    message.proposerReward = object.proposer_reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgProposeMatchResponse): MsgProposeMatchResponseAmino {
    const obj: any = {};
    if (message.proposerReward) {
      obj.proposer_reward = message.proposerReward.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.proposer_reward = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgProposeMatchResponseAminoMsg): MsgProposeMatchResponse {
    return MsgProposeMatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeMatchResponseProtoMsg): MsgProposeMatchResponse {
    return MsgProposeMatchResponse.decode(message.value);
  },
  toProto(message: MsgProposeMatchResponse): Uint8Array {
    return MsgProposeMatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeMatchResponse): MsgProposeMatchResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgProposeMatchResponse",
      value: MsgProposeMatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetCircuitBreakers(): MsgSetCircuitBreakers {
  return {
    creator: "",
    poolId: BigInt(0),
    tokenCircuitBreakers: []
  };
}
export const MsgSetCircuitBreakers = {
  typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakers",
  encode(message: MsgSetCircuitBreakers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokenCircuitBreakers) {
      TokenCircuitBreakerSettings.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCircuitBreakers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCircuitBreakers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenCircuitBreakers: Array.isArray(object?.tokenCircuitBreakers) ? object.tokenCircuitBreakers.map((e: any) => TokenCircuitBreakerSettings.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetCircuitBreakers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenCircuitBreakers = object.tokenCircuitBreakers?.map(e => TokenCircuitBreakerSettings.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetCircuitBreakersAmino): MsgSetCircuitBreakers {
    const message = createBaseMsgSetCircuitBreakers();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokenCircuitBreakers = object.token_circuit_breakers?.map(e => TokenCircuitBreakerSettings.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetCircuitBreakers): MsgSetCircuitBreakersAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    if (message.tokenCircuitBreakers) {
      obj.token_circuit_breakers = message.tokenCircuitBreakers.map(e => e ? TokenCircuitBreakerSettings.toAmino(e) : undefined);
    } else {
      obj.token_circuit_breakers = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetCircuitBreakersAminoMsg): MsgSetCircuitBreakers {
    return MsgSetCircuitBreakers.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetCircuitBreakers): MsgSetCircuitBreakersAminoMsg {
    return {
      type: "pryzm/amm/v1/SetCircuitBreakers",
      value: MsgSetCircuitBreakers.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetCircuitBreakersProtoMsg): MsgSetCircuitBreakers {
    return MsgSetCircuitBreakers.decode(message.value);
  },
  toProto(message: MsgSetCircuitBreakers): Uint8Array {
    return MsgSetCircuitBreakers.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCircuitBreakers): MsgSetCircuitBreakersProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakers",
      value: MsgSetCircuitBreakers.encode(message).finish()
    };
  }
};
function createBaseMsgSetCircuitBreakersResponse(): MsgSetCircuitBreakersResponse {
  return {};
}
export const MsgSetCircuitBreakersResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakersResponse",
  encode(_: MsgSetCircuitBreakersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCircuitBreakersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetCircuitBreakersResponseAmino): MsgSetCircuitBreakersResponse {
    const message = createBaseMsgSetCircuitBreakersResponse();
    return message;
  },
  toAmino(_: MsgSetCircuitBreakersResponse): MsgSetCircuitBreakersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetCircuitBreakersResponseAminoMsg): MsgSetCircuitBreakersResponse {
    return MsgSetCircuitBreakersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCircuitBreakersResponseProtoMsg): MsgSetCircuitBreakersResponse {
    return MsgSetCircuitBreakersResponse.decode(message.value);
  },
  toProto(message: MsgSetCircuitBreakersResponse): Uint8Array {
    return MsgSetCircuitBreakersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCircuitBreakersResponse): MsgSetCircuitBreakersResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakersResponse",
      value: MsgSetCircuitBreakersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetRecoveryMode(): MsgSetRecoveryMode {
  return {
    authority: "",
    poolId: BigInt(0),
    recoveryMode: false
  };
}
export const MsgSetRecoveryMode = {
  typeUrl: "/pryzm.amm.v1.MsgSetRecoveryMode",
  encode(message: MsgSetRecoveryMode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.recoveryMode === true) {
      writer.uint32(24).bool(message.recoveryMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRecoveryMode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRecoveryMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      recoveryMode: isSet(object.recoveryMode) ? Boolean(object.recoveryMode) : false
    };
  },
  toJSON(message: MsgSetRecoveryMode): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.recoveryMode !== undefined && (obj.recoveryMode = message.recoveryMode);
    return obj;
  },
  fromPartial(object: Partial<MsgSetRecoveryMode>): MsgSetRecoveryMode {
    const message = createBaseMsgSetRecoveryMode();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.recoveryMode = object.recoveryMode ?? false;
    return message;
  },
  fromAmino(object: MsgSetRecoveryModeAmino): MsgSetRecoveryMode {
    const message = createBaseMsgSetRecoveryMode();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.recovery_mode !== undefined && object.recovery_mode !== null) {
      message.recoveryMode = object.recovery_mode;
    }
    return message;
  },
  toAmino(message: MsgSetRecoveryMode): MsgSetRecoveryModeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.recovery_mode = message.recoveryMode ?? false;
    return obj;
  },
  fromAminoMsg(object: MsgSetRecoveryModeAminoMsg): MsgSetRecoveryMode {
    return MsgSetRecoveryMode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetRecoveryMode): MsgSetRecoveryModeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetRecoveryMode",
      value: MsgSetRecoveryMode.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetRecoveryModeProtoMsg): MsgSetRecoveryMode {
    return MsgSetRecoveryMode.decode(message.value);
  },
  toProto(message: MsgSetRecoveryMode): Uint8Array {
    return MsgSetRecoveryMode.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRecoveryMode): MsgSetRecoveryModeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetRecoveryMode",
      value: MsgSetRecoveryMode.encode(message).finish()
    };
  }
};
function createBaseMsgSetRecoveryModeResponse(): MsgSetRecoveryModeResponse {
  return {};
}
export const MsgSetRecoveryModeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetRecoveryModeResponse",
  encode(_: MsgSetRecoveryModeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRecoveryModeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetRecoveryModeResponseAmino): MsgSetRecoveryModeResponse {
    const message = createBaseMsgSetRecoveryModeResponse();
    return message;
  },
  toAmino(_: MsgSetRecoveryModeResponse): MsgSetRecoveryModeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetRecoveryModeResponseAminoMsg): MsgSetRecoveryModeResponse {
    return MsgSetRecoveryModeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRecoveryModeResponseProtoMsg): MsgSetRecoveryModeResponse {
    return MsgSetRecoveryModeResponse.decode(message.value);
  },
  toProto(message: MsgSetRecoveryModeResponse): Uint8Array {
    return MsgSetRecoveryModeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRecoveryModeResponse): MsgSetRecoveryModeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetRecoveryModeResponse",
      value: MsgSetRecoveryModeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRecoveryExit(): MsgRecoveryExit {
  return {
    creator: "",
    poolId: BigInt(0),
    lptIn: "",
    minAmountsOut: []
  };
}
export const MsgRecoveryExit = {
  typeUrl: "/pryzm.amm.v1.MsgRecoveryExit",
  encode(message: MsgRecoveryExit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoveryExit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoveryExit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRecoveryExit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRecoveryExitAmino): MsgRecoveryExit {
    const message = createBaseMsgRecoveryExit();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRecoveryExit): MsgRecoveryExitAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.lpt_in = message.lptIn;
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_amounts_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRecoveryExitAminoMsg): MsgRecoveryExit {
    return MsgRecoveryExit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecoveryExit): MsgRecoveryExitAminoMsg {
    return {
      type: "pryzm/amm/v1/RecoveryExit",
      value: MsgRecoveryExit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecoveryExitProtoMsg): MsgRecoveryExit {
    return MsgRecoveryExit.decode(message.value);
  },
  toProto(message: MsgRecoveryExit): Uint8Array {
    return MsgRecoveryExit.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoveryExit): MsgRecoveryExitProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgRecoveryExit",
      value: MsgRecoveryExit.encode(message).finish()
    };
  }
};
function createBaseMsgRecoveryExitResponse(): MsgRecoveryExitResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: []
  };
}
export const MsgRecoveryExitResponse = {
  typeUrl: "/pryzm.amm.v1.MsgRecoveryExitResponse",
  encode(message: MsgRecoveryExitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoveryExitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgRecoveryExitResponseAmino): MsgRecoveryExitResponse {
    const message = createBaseMsgRecoveryExitResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRecoveryExitResponse): MsgRecoveryExitResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRecoveryExitResponseAminoMsg): MsgRecoveryExitResponse {
    return MsgRecoveryExitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecoveryExitResponseProtoMsg): MsgRecoveryExitResponse {
    return MsgRecoveryExitResponse.decode(message.value);
  },
  toProto(message: MsgRecoveryExitResponse): Uint8Array {
    return MsgRecoveryExitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoveryExitResponse): MsgRecoveryExitResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgRecoveryExitResponse",
      value: MsgRecoveryExitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPauseMode(): MsgSetPauseMode {
  return {
    creator: "",
    poolId: BigInt(0),
    pauseMode: false
  };
}
export const MsgSetPauseMode = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseMode",
  encode(message: MsgSetPauseMode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pauseMode === true) {
      writer.uint32(24).bool(message.pauseMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPauseMode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      pauseMode: isSet(object.pauseMode) ? Boolean(object.pauseMode) : false
    };
  },
  toJSON(message: MsgSetPauseMode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.pauseMode !== undefined && (obj.pauseMode = message.pauseMode);
    return obj;
  },
  fromPartial(object: Partial<MsgSetPauseMode>): MsgSetPauseMode {
    const message = createBaseMsgSetPauseMode();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pauseMode = object.pauseMode ?? false;
    return message;
  },
  fromAmino(object: MsgSetPauseModeAmino): MsgSetPauseMode {
    const message = createBaseMsgSetPauseMode();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pause_mode !== undefined && object.pause_mode !== null) {
      message.pauseMode = object.pause_mode;
    }
    return message;
  },
  toAmino(message: MsgSetPauseMode): MsgSetPauseModeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.pause_mode = message.pauseMode ?? false;
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseModeAminoMsg): MsgSetPauseMode {
    return MsgSetPauseMode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPauseMode): MsgSetPauseModeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetPauseMode",
      value: MsgSetPauseMode.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPauseModeProtoMsg): MsgSetPauseMode {
    return MsgSetPauseMode.decode(message.value);
  },
  toProto(message: MsgSetPauseMode): Uint8Array {
    return MsgSetPauseMode.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseMode): MsgSetPauseModeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseMode",
      value: MsgSetPauseMode.encode(message).finish()
    };
  }
};
function createBaseMsgSetPauseModeResponse(): MsgSetPauseModeResponse {
  return {};
}
export const MsgSetPauseModeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseModeResponse",
  encode(_: MsgSetPauseModeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPauseModeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetPauseModeResponseAmino): MsgSetPauseModeResponse {
    const message = createBaseMsgSetPauseModeResponse();
    return message;
  },
  toAmino(_: MsgSetPauseModeResponse): MsgSetPauseModeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseModeResponseAminoMsg): MsgSetPauseModeResponse {
    return MsgSetPauseModeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPauseModeResponseProtoMsg): MsgSetPauseModeResponse {
    return MsgSetPauseModeResponse.decode(message.value);
  },
  toProto(message: MsgSetPauseModeResponse): Uint8Array {
    return MsgSetPauseModeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseModeResponse): MsgSetPauseModeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseModeResponse",
      value: MsgSetPauseModeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetVaultPauseMode(): MsgSetVaultPauseMode {
  return {
    authority: "",
    pauseMode: false
  };
}
export const MsgSetVaultPauseMode = {
  typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseMode",
  encode(message: MsgSetVaultPauseMode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.pauseMode === true) {
      writer.uint32(16).bool(message.pauseMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetVaultPauseMode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSetVaultPauseModeAmino): MsgSetVaultPauseMode {
    const message = createBaseMsgSetVaultPauseMode();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pause_mode !== undefined && object.pause_mode !== null) {
      message.pauseMode = object.pause_mode;
    }
    return message;
  },
  toAmino(message: MsgSetVaultPauseMode): MsgSetVaultPauseModeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.pause_mode = message.pauseMode ?? false;
    return obj;
  },
  fromAminoMsg(object: MsgSetVaultPauseModeAminoMsg): MsgSetVaultPauseMode {
    return MsgSetVaultPauseMode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetVaultPauseMode): MsgSetVaultPauseModeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetVaultPauseMode",
      value: MsgSetVaultPauseMode.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetVaultPauseModeProtoMsg): MsgSetVaultPauseMode {
    return MsgSetVaultPauseMode.decode(message.value);
  },
  toProto(message: MsgSetVaultPauseMode): Uint8Array {
    return MsgSetVaultPauseMode.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVaultPauseMode): MsgSetVaultPauseModeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseMode",
      value: MsgSetVaultPauseMode.encode(message).finish()
    };
  }
};
function createBaseMsgSetVaultPauseModeResponse(): MsgSetVaultPauseModeResponse {
  return {};
}
export const MsgSetVaultPauseModeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseModeResponse",
  encode(_: MsgSetVaultPauseModeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetVaultPauseModeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetVaultPauseModeResponseAmino): MsgSetVaultPauseModeResponse {
    const message = createBaseMsgSetVaultPauseModeResponse();
    return message;
  },
  toAmino(_: MsgSetVaultPauseModeResponse): MsgSetVaultPauseModeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetVaultPauseModeResponseAminoMsg): MsgSetVaultPauseModeResponse {
    return MsgSetVaultPauseModeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetVaultPauseModeResponseProtoMsg): MsgSetVaultPauseModeResponse {
    return MsgSetVaultPauseModeResponse.decode(message.value);
  },
  toProto(message: MsgSetVaultPauseModeResponse): Uint8Array {
    return MsgSetVaultPauseModeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVaultPauseModeResponse): MsgSetVaultPauseModeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseModeResponse",
      value: MsgSetVaultPauseModeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOraclePricePair(): MsgCreateOraclePricePair {
  return {
    authority: "",
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const MsgCreateOraclePricePair = {
  typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePair",
  encode(message: MsgCreateOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgCreateOraclePricePairAmino): MsgCreateOraclePricePair {
    const message = createBaseMsgCreateOraclePricePair();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.oracle_price_pair !== undefined && object.oracle_price_pair !== null) {
      message.oraclePricePair = OraclePricePair.fromAmino(object.oracle_price_pair);
    }
    return message;
  },
  toAmino(message: MsgCreateOraclePricePair): MsgCreateOraclePricePairAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.oracle_price_pair = message.oraclePricePair ? OraclePricePair.toAmino(message.oraclePricePair) : OraclePricePair.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgCreateOraclePricePairAminoMsg): MsgCreateOraclePricePair {
    return MsgCreateOraclePricePair.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateOraclePricePair): MsgCreateOraclePricePairAminoMsg {
    return {
      type: "pryzm/amm/v1/CreateOraclePricePair",
      value: MsgCreateOraclePricePair.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateOraclePricePairProtoMsg): MsgCreateOraclePricePair {
    return MsgCreateOraclePricePair.decode(message.value);
  },
  toProto(message: MsgCreateOraclePricePair): Uint8Array {
    return MsgCreateOraclePricePair.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOraclePricePair): MsgCreateOraclePricePairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePair",
      value: MsgCreateOraclePricePair.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOraclePricePairResponse(): MsgCreateOraclePricePairResponse {
  return {};
}
export const MsgCreateOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePairResponse",
  encode(_: MsgCreateOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgCreateOraclePricePairResponseAmino): MsgCreateOraclePricePairResponse {
    const message = createBaseMsgCreateOraclePricePairResponse();
    return message;
  },
  toAmino(_: MsgCreateOraclePricePairResponse): MsgCreateOraclePricePairResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateOraclePricePairResponseAminoMsg): MsgCreateOraclePricePairResponse {
    return MsgCreateOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOraclePricePairResponseProtoMsg): MsgCreateOraclePricePairResponse {
    return MsgCreateOraclePricePairResponse.decode(message.value);
  },
  toProto(message: MsgCreateOraclePricePairResponse): Uint8Array {
    return MsgCreateOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOraclePricePairResponse): MsgCreateOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePairResponse",
      value: MsgCreateOraclePricePairResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOraclePricePair(): MsgUpdateOraclePricePair {
  return {
    authority: "",
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const MsgUpdateOraclePricePair = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePair",
  encode(message: MsgUpdateOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgUpdateOraclePricePairAmino): MsgUpdateOraclePricePair {
    const message = createBaseMsgUpdateOraclePricePair();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.oracle_price_pair !== undefined && object.oracle_price_pair !== null) {
      message.oraclePricePair = OraclePricePair.fromAmino(object.oracle_price_pair);
    }
    return message;
  },
  toAmino(message: MsgUpdateOraclePricePair): MsgUpdateOraclePricePairAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.oracle_price_pair = message.oraclePricePair ? OraclePricePair.toAmino(message.oraclePricePair) : OraclePricePair.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOraclePricePairAminoMsg): MsgUpdateOraclePricePair {
    return MsgUpdateOraclePricePair.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOraclePricePair): MsgUpdateOraclePricePairAminoMsg {
    return {
      type: "pryzm/amm/v1/UpdateOraclePricePair",
      value: MsgUpdateOraclePricePair.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOraclePricePairProtoMsg): MsgUpdateOraclePricePair {
    return MsgUpdateOraclePricePair.decode(message.value);
  },
  toProto(message: MsgUpdateOraclePricePair): Uint8Array {
    return MsgUpdateOraclePricePair.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOraclePricePair): MsgUpdateOraclePricePairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePair",
      value: MsgUpdateOraclePricePair.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOraclePricePairResponse(): MsgUpdateOraclePricePairResponse {
  return {};
}
export const MsgUpdateOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePairResponse",
  encode(_: MsgUpdateOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgUpdateOraclePricePairResponseAmino): MsgUpdateOraclePricePairResponse {
    const message = createBaseMsgUpdateOraclePricePairResponse();
    return message;
  },
  toAmino(_: MsgUpdateOraclePricePairResponse): MsgUpdateOraclePricePairResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOraclePricePairResponseAminoMsg): MsgUpdateOraclePricePairResponse {
    return MsgUpdateOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOraclePricePairResponseProtoMsg): MsgUpdateOraclePricePairResponse {
    return MsgUpdateOraclePricePairResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOraclePricePairResponse): Uint8Array {
    return MsgUpdateOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOraclePricePairResponse): MsgUpdateOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePairResponse",
      value: MsgUpdateOraclePricePairResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOraclePricePair(): MsgDeleteOraclePricePair {
  return {
    authority: "",
    assetId: ""
  };
}
export const MsgDeleteOraclePricePair = {
  typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePair",
  encode(message: MsgDeleteOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgDeleteOraclePricePairAmino): MsgDeleteOraclePricePair {
    const message = createBaseMsgDeleteOraclePricePair();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: MsgDeleteOraclePricePair): MsgDeleteOraclePricePairAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.asset_id = message.assetId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOraclePricePairAminoMsg): MsgDeleteOraclePricePair {
    return MsgDeleteOraclePricePair.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteOraclePricePair): MsgDeleteOraclePricePairAminoMsg {
    return {
      type: "pryzm/amm/v1/DeleteOraclePricePair",
      value: MsgDeleteOraclePricePair.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteOraclePricePairProtoMsg): MsgDeleteOraclePricePair {
    return MsgDeleteOraclePricePair.decode(message.value);
  },
  toProto(message: MsgDeleteOraclePricePair): Uint8Array {
    return MsgDeleteOraclePricePair.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOraclePricePair): MsgDeleteOraclePricePairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePair",
      value: MsgDeleteOraclePricePair.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOraclePricePairResponse(): MsgDeleteOraclePricePairResponse {
  return {};
}
export const MsgDeleteOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePairResponse",
  encode(_: MsgDeleteOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgDeleteOraclePricePairResponseAmino): MsgDeleteOraclePricePairResponse {
    const message = createBaseMsgDeleteOraclePricePairResponse();
    return message;
  },
  toAmino(_: MsgDeleteOraclePricePairResponse): MsgDeleteOraclePricePairResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOraclePricePairResponseAminoMsg): MsgDeleteOraclePricePairResponse {
    return MsgDeleteOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteOraclePricePairResponseProtoMsg): MsgDeleteOraclePricePairResponse {
    return MsgDeleteOraclePricePairResponse.decode(message.value);
  },
  toProto(message: MsgDeleteOraclePricePairResponse): Uint8Array {
    return MsgDeleteOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOraclePricePairResponse): MsgDeleteOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePairResponse",
      value: MsgDeleteOraclePricePairResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetSwapProtocolFee(): MsgSetSwapProtocolFee {
  return {
    authority: "",
    poolId: BigInt(0),
    swapProtocolFee: undefined
  };
}
export const MsgSetSwapProtocolFee = {
  typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFee",
  encode(message: MsgSetSwapProtocolFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapProtocolFee !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapProtocolFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSwapProtocolFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSwapProtocolFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.swapProtocolFee = Decimal.fromAtomics(reader.string(), 18).toString();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      swapProtocolFee: isSet(object.swapProtocolFee) ? String(object.swapProtocolFee) : undefined
    };
  },
  toJSON(message: MsgSetSwapProtocolFee): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.swapProtocolFee !== undefined && (obj.swapProtocolFee = message.swapProtocolFee);
    return obj;
  },
  fromPartial(object: Partial<MsgSetSwapProtocolFee>): MsgSetSwapProtocolFee {
    const message = createBaseMsgSetSwapProtocolFee();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.swapProtocolFee = object.swapProtocolFee ?? undefined;
    return message;
  },
  fromAmino(object: MsgSetSwapProtocolFeeAmino): MsgSetSwapProtocolFee {
    const message = createBaseMsgSetSwapProtocolFee();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.swap_protocol_fee !== undefined && object.swap_protocol_fee !== null) {
      message.swapProtocolFee = object.swap_protocol_fee;
    }
    return message;
  },
  toAmino(message: MsgSetSwapProtocolFee): MsgSetSwapProtocolFeeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.swap_protocol_fee = message.swapProtocolFee;
    return obj;
  },
  fromAminoMsg(object: MsgSetSwapProtocolFeeAminoMsg): MsgSetSwapProtocolFee {
    return MsgSetSwapProtocolFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetSwapProtocolFee): MsgSetSwapProtocolFeeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetSwapProtocolFee",
      value: MsgSetSwapProtocolFee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetSwapProtocolFeeProtoMsg): MsgSetSwapProtocolFee {
    return MsgSetSwapProtocolFee.decode(message.value);
  },
  toProto(message: MsgSetSwapProtocolFee): Uint8Array {
    return MsgSetSwapProtocolFee.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSwapProtocolFee): MsgSetSwapProtocolFeeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFee",
      value: MsgSetSwapProtocolFee.encode(message).finish()
    };
  }
};
function createBaseMsgSetSwapProtocolFeeResponse(): MsgSetSwapProtocolFeeResponse {
  return {};
}
export const MsgSetSwapProtocolFeeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFeeResponse",
  encode(_: MsgSetSwapProtocolFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSwapProtocolFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetSwapProtocolFeeResponseAmino): MsgSetSwapProtocolFeeResponse {
    const message = createBaseMsgSetSwapProtocolFeeResponse();
    return message;
  },
  toAmino(_: MsgSetSwapProtocolFeeResponse): MsgSetSwapProtocolFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetSwapProtocolFeeResponseAminoMsg): MsgSetSwapProtocolFeeResponse {
    return MsgSetSwapProtocolFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetSwapProtocolFeeResponseProtoMsg): MsgSetSwapProtocolFeeResponse {
    return MsgSetSwapProtocolFeeResponse.decode(message.value);
  },
  toProto(message: MsgSetSwapProtocolFeeResponse): Uint8Array {
    return MsgSetSwapProtocolFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSwapProtocolFeeResponse): MsgSetSwapProtocolFeeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFeeResponse",
      value: MsgSetSwapProtocolFeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetJoinExitProtocolFee(): MsgSetJoinExitProtocolFee {
  return {
    authority: "",
    poolId: BigInt(0),
    joinExitProtocolFee: undefined
  };
}
export const MsgSetJoinExitProtocolFee = {
  typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFee",
  encode(message: MsgSetJoinExitProtocolFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.joinExitProtocolFee !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.joinExitProtocolFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetJoinExitProtocolFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetJoinExitProtocolFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.joinExitProtocolFee = Decimal.fromAtomics(reader.string(), 18).toString();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      joinExitProtocolFee: isSet(object.joinExitProtocolFee) ? String(object.joinExitProtocolFee) : undefined
    };
  },
  toJSON(message: MsgSetJoinExitProtocolFee): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.joinExitProtocolFee !== undefined && (obj.joinExitProtocolFee = message.joinExitProtocolFee);
    return obj;
  },
  fromPartial(object: Partial<MsgSetJoinExitProtocolFee>): MsgSetJoinExitProtocolFee {
    const message = createBaseMsgSetJoinExitProtocolFee();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.joinExitProtocolFee = object.joinExitProtocolFee ?? undefined;
    return message;
  },
  fromAmino(object: MsgSetJoinExitProtocolFeeAmino): MsgSetJoinExitProtocolFee {
    const message = createBaseMsgSetJoinExitProtocolFee();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.join_exit_protocol_fee !== undefined && object.join_exit_protocol_fee !== null) {
      message.joinExitProtocolFee = object.join_exit_protocol_fee;
    }
    return message;
  },
  toAmino(message: MsgSetJoinExitProtocolFee): MsgSetJoinExitProtocolFeeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.join_exit_protocol_fee = message.joinExitProtocolFee;
    return obj;
  },
  fromAminoMsg(object: MsgSetJoinExitProtocolFeeAminoMsg): MsgSetJoinExitProtocolFee {
    return MsgSetJoinExitProtocolFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetJoinExitProtocolFee): MsgSetJoinExitProtocolFeeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetJoinExitProtocolFee",
      value: MsgSetJoinExitProtocolFee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetJoinExitProtocolFeeProtoMsg): MsgSetJoinExitProtocolFee {
    return MsgSetJoinExitProtocolFee.decode(message.value);
  },
  toProto(message: MsgSetJoinExitProtocolFee): Uint8Array {
    return MsgSetJoinExitProtocolFee.encode(message).finish();
  },
  toProtoMsg(message: MsgSetJoinExitProtocolFee): MsgSetJoinExitProtocolFeeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFee",
      value: MsgSetJoinExitProtocolFee.encode(message).finish()
    };
  }
};
function createBaseMsgSetJoinExitProtocolFeeResponse(): MsgSetJoinExitProtocolFeeResponse {
  return {};
}
export const MsgSetJoinExitProtocolFeeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFeeResponse",
  encode(_: MsgSetJoinExitProtocolFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetJoinExitProtocolFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetJoinExitProtocolFeeResponseAmino): MsgSetJoinExitProtocolFeeResponse {
    const message = createBaseMsgSetJoinExitProtocolFeeResponse();
    return message;
  },
  toAmino(_: MsgSetJoinExitProtocolFeeResponse): MsgSetJoinExitProtocolFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetJoinExitProtocolFeeResponseAminoMsg): MsgSetJoinExitProtocolFeeResponse {
    return MsgSetJoinExitProtocolFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetJoinExitProtocolFeeResponseProtoMsg): MsgSetJoinExitProtocolFeeResponse {
    return MsgSetJoinExitProtocolFeeResponse.decode(message.value);
  },
  toProto(message: MsgSetJoinExitProtocolFeeResponse): Uint8Array {
    return MsgSetJoinExitProtocolFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetJoinExitProtocolFeeResponse): MsgSetJoinExitProtocolFeeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFeeResponse",
      value: MsgSetJoinExitProtocolFeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIntroduceYammLpToWeightedPool(): MsgIntroduceYammLpToWeightedPool {
  return {
    creator: "",
    weightedPoolId: BigInt(0),
    yammPoolId: BigInt(0),
    tokenNormalizedWeight: "",
    virtualBalanceIntervalMillis: BigInt(0)
  };
}
export const MsgIntroduceYammLpToWeightedPool = {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPool",
  encode(message: MsgIntroduceYammLpToWeightedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.weightedPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.weightedPoolId);
    }
    if (message.yammPoolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.yammPoolId);
    }
    if (message.tokenNormalizedWeight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.tokenNormalizedWeight, 18).atomics);
    }
    if (message.virtualBalanceIntervalMillis !== BigInt(0)) {
      writer.uint32(40).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIntroduceYammLpToWeightedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceYammLpToWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.weightedPoolId = reader.uint64();
          break;
        case 3:
          message.yammPoolId = reader.uint64();
          break;
        case 4:
          message.tokenNormalizedWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.virtualBalanceIntervalMillis = reader.int64();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      weightedPoolId: isSet(object.weightedPoolId) ? BigInt(object.weightedPoolId.toString()) : BigInt(0),
      yammPoolId: isSet(object.yammPoolId) ? BigInt(object.yammPoolId.toString()) : BigInt(0),
      tokenNormalizedWeight: isSet(object.tokenNormalizedWeight) ? String(object.tokenNormalizedWeight) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgIntroduceYammLpToWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.weightedPoolId !== undefined && (obj.weightedPoolId = (message.weightedPoolId || BigInt(0)).toString());
    message.yammPoolId !== undefined && (obj.yammPoolId = (message.yammPoolId || BigInt(0)).toString());
    message.tokenNormalizedWeight !== undefined && (obj.tokenNormalizedWeight = message.tokenNormalizedWeight);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgIntroduceYammLpToWeightedPool>): MsgIntroduceYammLpToWeightedPool {
    const message = createBaseMsgIntroduceYammLpToWeightedPool();
    message.creator = object.creator ?? "";
    message.weightedPoolId = object.weightedPoolId !== undefined && object.weightedPoolId !== null ? BigInt(object.weightedPoolId.toString()) : BigInt(0);
    message.yammPoolId = object.yammPoolId !== undefined && object.yammPoolId !== null ? BigInt(object.yammPoolId.toString()) : BigInt(0);
    message.tokenNormalizedWeight = object.tokenNormalizedWeight ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgIntroduceYammLpToWeightedPoolAmino): MsgIntroduceYammLpToWeightedPool {
    const message = createBaseMsgIntroduceYammLpToWeightedPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.weighted_pool_id !== undefined && object.weighted_pool_id !== null) {
      message.weightedPoolId = BigInt(object.weighted_pool_id);
    }
    if (object.yamm_pool_id !== undefined && object.yamm_pool_id !== null) {
      message.yammPoolId = BigInt(object.yamm_pool_id);
    }
    if (object.token_normalized_weight !== undefined && object.token_normalized_weight !== null) {
      message.tokenNormalizedWeight = object.token_normalized_weight;
    }
    if (object.virtual_balance_interval_millis !== undefined && object.virtual_balance_interval_millis !== null) {
      message.virtualBalanceIntervalMillis = BigInt(object.virtual_balance_interval_millis);
    }
    return message;
  },
  toAmino(message: MsgIntroduceYammLpToWeightedPool): MsgIntroduceYammLpToWeightedPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.weighted_pool_id = message.weightedPoolId ? message.weightedPoolId.toString() : "0";
    obj.yamm_pool_id = message.yammPoolId ? message.yammPoolId.toString() : "0";
    obj.token_normalized_weight = message.tokenNormalizedWeight;
    obj.virtual_balance_interval_millis = message.virtualBalanceIntervalMillis ? message.virtualBalanceIntervalMillis.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceYammLpToWeightedPoolAminoMsg): MsgIntroduceYammLpToWeightedPool {
    return MsgIntroduceYammLpToWeightedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIntroduceYammLpToWeightedPool): MsgIntroduceYammLpToWeightedPoolAminoMsg {
    return {
      type: "pryzm/amm/v1/IntroYammLpToWeighted",
      value: MsgIntroduceYammLpToWeightedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIntroduceYammLpToWeightedPoolProtoMsg): MsgIntroduceYammLpToWeightedPool {
    return MsgIntroduceYammLpToWeightedPool.decode(message.value);
  },
  toProto(message: MsgIntroduceYammLpToWeightedPool): Uint8Array {
    return MsgIntroduceYammLpToWeightedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceYammLpToWeightedPool): MsgIntroduceYammLpToWeightedPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPool",
      value: MsgIntroduceYammLpToWeightedPool.encode(message).finish()
    };
  }
};
function createBaseMsgIntroduceYammLpToWeightedPoolResponse(): MsgIntroduceYammLpToWeightedPoolResponse {
  return {};
}
export const MsgIntroduceYammLpToWeightedPoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPoolResponse",
  encode(_: MsgIntroduceYammLpToWeightedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIntroduceYammLpToWeightedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgIntroduceYammLpToWeightedPoolResponseAmino): MsgIntroduceYammLpToWeightedPoolResponse {
    const message = createBaseMsgIntroduceYammLpToWeightedPoolResponse();
    return message;
  },
  toAmino(_: MsgIntroduceYammLpToWeightedPoolResponse): MsgIntroduceYammLpToWeightedPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceYammLpToWeightedPoolResponseAminoMsg): MsgIntroduceYammLpToWeightedPoolResponse {
    return MsgIntroduceYammLpToWeightedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIntroduceYammLpToWeightedPoolResponseProtoMsg): MsgIntroduceYammLpToWeightedPoolResponse {
    return MsgIntroduceYammLpToWeightedPoolResponse.decode(message.value);
  },
  toProto(message: MsgIntroduceYammLpToWeightedPoolResponse): Uint8Array {
    return MsgIntroduceYammLpToWeightedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceYammLpToWeightedPoolResponse): MsgIntroduceYammLpToWeightedPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPoolResponse",
      value: MsgIntroduceYammLpToWeightedPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIntroduceAssetBaseTokenToWeightedPool(): MsgIntroduceAssetBaseTokenToWeightedPool {
  return {
    creator: "",
    weightedPoolId: BigInt(0),
    tokenDenom: "",
    assetId: "",
    tokenNormalizedWeight: "",
    virtualBalanceIntervalMillis: BigInt(0)
  };
}
export const MsgIntroduceAssetBaseTokenToWeightedPool = {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPool",
  encode(message: MsgIntroduceAssetBaseTokenToWeightedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.weightedPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.weightedPoolId);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(26).string(message.tokenDenom);
    }
    if (message.assetId !== "") {
      writer.uint32(34).string(message.assetId);
    }
    if (message.tokenNormalizedWeight !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.tokenNormalizedWeight, 18).atomics);
    }
    if (message.virtualBalanceIntervalMillis !== BigInt(0)) {
      writer.uint32(48).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIntroduceAssetBaseTokenToWeightedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.weightedPoolId = reader.uint64();
          break;
        case 3:
          message.tokenDenom = reader.string();
          break;
        case 4:
          message.assetId = reader.string();
          break;
        case 5:
          message.tokenNormalizedWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.virtualBalanceIntervalMillis = reader.int64();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      weightedPoolId: isSet(object.weightedPoolId) ? BigInt(object.weightedPoolId.toString()) : BigInt(0),
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      tokenNormalizedWeight: isSet(object.tokenNormalizedWeight) ? String(object.tokenNormalizedWeight) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgIntroduceAssetBaseTokenToWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.weightedPoolId !== undefined && (obj.weightedPoolId = (message.weightedPoolId || BigInt(0)).toString());
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.tokenNormalizedWeight !== undefined && (obj.tokenNormalizedWeight = message.tokenNormalizedWeight);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgIntroduceAssetBaseTokenToWeightedPool>): MsgIntroduceAssetBaseTokenToWeightedPool {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPool();
    message.creator = object.creator ?? "";
    message.weightedPoolId = object.weightedPoolId !== undefined && object.weightedPoolId !== null ? BigInt(object.weightedPoolId.toString()) : BigInt(0);
    message.tokenDenom = object.tokenDenom ?? "";
    message.assetId = object.assetId ?? "";
    message.tokenNormalizedWeight = object.tokenNormalizedWeight ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgIntroduceAssetBaseTokenToWeightedPoolAmino): MsgIntroduceAssetBaseTokenToWeightedPool {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.weighted_pool_id !== undefined && object.weighted_pool_id !== null) {
      message.weightedPoolId = BigInt(object.weighted_pool_id);
    }
    if (object.token_denom !== undefined && object.token_denom !== null) {
      message.tokenDenom = object.token_denom;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.token_normalized_weight !== undefined && object.token_normalized_weight !== null) {
      message.tokenNormalizedWeight = object.token_normalized_weight;
    }
    if (object.virtual_balance_interval_millis !== undefined && object.virtual_balance_interval_millis !== null) {
      message.virtualBalanceIntervalMillis = BigInt(object.virtual_balance_interval_millis);
    }
    return message;
  },
  toAmino(message: MsgIntroduceAssetBaseTokenToWeightedPool): MsgIntroduceAssetBaseTokenToWeightedPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.weighted_pool_id = message.weightedPoolId ? message.weightedPoolId.toString() : "0";
    obj.token_denom = message.tokenDenom;
    obj.asset_id = message.assetId;
    obj.token_normalized_weight = message.tokenNormalizedWeight;
    obj.virtual_balance_interval_millis = message.virtualBalanceIntervalMillis ? message.virtualBalanceIntervalMillis.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceAssetBaseTokenToWeightedPoolAminoMsg): MsgIntroduceAssetBaseTokenToWeightedPool {
    return MsgIntroduceAssetBaseTokenToWeightedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPool): MsgIntroduceAssetBaseTokenToWeightedPoolAminoMsg {
    return {
      type: "pryzm/amm/v1/IntroBaseTokenToWeighted",
      value: MsgIntroduceAssetBaseTokenToWeightedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPoolProtoMsg): MsgIntroduceAssetBaseTokenToWeightedPool {
    return MsgIntroduceAssetBaseTokenToWeightedPool.decode(message.value);
  },
  toProto(message: MsgIntroduceAssetBaseTokenToWeightedPool): Uint8Array {
    return MsgIntroduceAssetBaseTokenToWeightedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPool): MsgIntroduceAssetBaseTokenToWeightedPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPool",
      value: MsgIntroduceAssetBaseTokenToWeightedPool.encode(message).finish()
    };
  }
};
function createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse(): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
  return {};
}
export const MsgIntroduceAssetBaseTokenToWeightedPoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPoolResponse",
  encode(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse();
    return message;
  },
  toAmino(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponse): MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceAssetBaseTokenToWeightedPoolResponseAminoMsg): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    return MsgIntroduceAssetBaseTokenToWeightedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPoolResponseProtoMsg): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    return MsgIntroduceAssetBaseTokenToWeightedPoolResponse.decode(message.value);
  },
  toProto(message: MsgIntroduceAssetBaseTokenToWeightedPoolResponse): Uint8Array {
    return MsgIntroduceAssetBaseTokenToWeightedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPoolResponse): MsgIntroduceAssetBaseTokenToWeightedPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPoolResponse",
      value: MsgIntroduceAssetBaseTokenToWeightedPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelPendingTokenIntroduction(): MsgCancelPendingTokenIntroduction {
  return {
    creator: "",
    assetId: "",
    targetPoolId: BigInt(0)
  };
}
export const MsgCancelPendingTokenIntroduction = {
  typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroduction",
  encode(message: MsgCancelPendingTokenIntroduction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.targetPoolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.targetPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelPendingTokenIntroduction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.targetPoolId = reader.uint64();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? BigInt(object.targetPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelPendingTokenIntroduction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelPendingTokenIntroduction>): MsgCancelPendingTokenIntroduction {
    const message = createBaseMsgCancelPendingTokenIntroduction();
    message.creator = object.creator ?? "";
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? BigInt(object.targetPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelPendingTokenIntroductionAmino): MsgCancelPendingTokenIntroduction {
    const message = createBaseMsgCancelPendingTokenIntroduction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.target_pool_id !== undefined && object.target_pool_id !== null) {
      message.targetPoolId = BigInt(object.target_pool_id);
    }
    return message;
  },
  toAmino(message: MsgCancelPendingTokenIntroduction): MsgCancelPendingTokenIntroductionAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.asset_id = message.assetId;
    obj.target_pool_id = message.targetPoolId ? message.targetPoolId.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgCancelPendingTokenIntroductionAminoMsg): MsgCancelPendingTokenIntroduction {
    return MsgCancelPendingTokenIntroduction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelPendingTokenIntroduction): MsgCancelPendingTokenIntroductionAminoMsg {
    return {
      type: "pryzm/amm/v1/CancelPendingTokenIntro",
      value: MsgCancelPendingTokenIntroduction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelPendingTokenIntroductionProtoMsg): MsgCancelPendingTokenIntroduction {
    return MsgCancelPendingTokenIntroduction.decode(message.value);
  },
  toProto(message: MsgCancelPendingTokenIntroduction): Uint8Array {
    return MsgCancelPendingTokenIntroduction.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelPendingTokenIntroduction): MsgCancelPendingTokenIntroductionProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroduction",
      value: MsgCancelPendingTokenIntroduction.encode(message).finish()
    };
  }
};
function createBaseMsgCancelPendingTokenIntroductionResponse(): MsgCancelPendingTokenIntroductionResponse {
  return {};
}
export const MsgCancelPendingTokenIntroductionResponse = {
  typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroductionResponse",
  encode(_: MsgCancelPendingTokenIntroductionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelPendingTokenIntroductionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgCancelPendingTokenIntroductionResponseAmino): MsgCancelPendingTokenIntroductionResponse {
    const message = createBaseMsgCancelPendingTokenIntroductionResponse();
    return message;
  },
  toAmino(_: MsgCancelPendingTokenIntroductionResponse): MsgCancelPendingTokenIntroductionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelPendingTokenIntroductionResponseAminoMsg): MsgCancelPendingTokenIntroductionResponse {
    return MsgCancelPendingTokenIntroductionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelPendingTokenIntroductionResponseProtoMsg): MsgCancelPendingTokenIntroductionResponse {
    return MsgCancelPendingTokenIntroductionResponse.decode(message.value);
  },
  toProto(message: MsgCancelPendingTokenIntroductionResponse): Uint8Array {
    return MsgCancelPendingTokenIntroductionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelPendingTokenIntroductionResponse): MsgCancelPendingTokenIntroductionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroductionResponse",
      value: MsgCancelPendingTokenIntroductionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveTokenFromWeightedPool(): MsgRemoveTokenFromWeightedPool {
  return {
    creator: "",
    poolId: BigInt(0),
    tokenDenom: "",
    virtualBalanceIntervalMillis: BigInt(0)
  };
}
export const MsgRemoveTokenFromWeightedPool = {
  typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPool",
  encode(message: MsgRemoveTokenFromWeightedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(26).string(message.tokenDenom);
    }
    if (message.virtualBalanceIntervalMillis !== BigInt(0)) {
      writer.uint32(32).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveTokenFromWeightedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenFromWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenDenom = reader.string();
          break;
        case 4:
          message.virtualBalanceIntervalMillis = reader.int64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgRemoveTokenFromWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRemoveTokenFromWeightedPool>): MsgRemoveTokenFromWeightedPool {
    const message = createBaseMsgRemoveTokenFromWeightedPool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenDenom = object.tokenDenom ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemoveTokenFromWeightedPoolAmino): MsgRemoveTokenFromWeightedPool {
    const message = createBaseMsgRemoveTokenFromWeightedPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_denom !== undefined && object.token_denom !== null) {
      message.tokenDenom = object.token_denom;
    }
    if (object.virtual_balance_interval_millis !== undefined && object.virtual_balance_interval_millis !== null) {
      message.virtualBalanceIntervalMillis = BigInt(object.virtual_balance_interval_millis);
    }
    return message;
  },
  toAmino(message: MsgRemoveTokenFromWeightedPool): MsgRemoveTokenFromWeightedPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.token_denom = message.tokenDenom;
    obj.virtual_balance_interval_millis = message.virtualBalanceIntervalMillis ? message.virtualBalanceIntervalMillis.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgRemoveTokenFromWeightedPoolAminoMsg): MsgRemoveTokenFromWeightedPool {
    return MsgRemoveTokenFromWeightedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveTokenFromWeightedPool): MsgRemoveTokenFromWeightedPoolAminoMsg {
    return {
      type: "pryzm/amm/v1/RemoveTokenFromWeighted",
      value: MsgRemoveTokenFromWeightedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveTokenFromWeightedPoolProtoMsg): MsgRemoveTokenFromWeightedPool {
    return MsgRemoveTokenFromWeightedPool.decode(message.value);
  },
  toProto(message: MsgRemoveTokenFromWeightedPool): Uint8Array {
    return MsgRemoveTokenFromWeightedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveTokenFromWeightedPool): MsgRemoveTokenFromWeightedPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPool",
      value: MsgRemoveTokenFromWeightedPool.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveTokenFromWeightedPoolResponse(): MsgRemoveTokenFromWeightedPoolResponse {
  return {};
}
export const MsgRemoveTokenFromWeightedPoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPoolResponse",
  encode(_: MsgRemoveTokenFromWeightedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveTokenFromWeightedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgRemoveTokenFromWeightedPoolResponseAmino): MsgRemoveTokenFromWeightedPoolResponse {
    const message = createBaseMsgRemoveTokenFromWeightedPoolResponse();
    return message;
  },
  toAmino(_: MsgRemoveTokenFromWeightedPoolResponse): MsgRemoveTokenFromWeightedPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveTokenFromWeightedPoolResponseAminoMsg): MsgRemoveTokenFromWeightedPoolResponse {
    return MsgRemoveTokenFromWeightedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveTokenFromWeightedPoolResponseProtoMsg): MsgRemoveTokenFromWeightedPoolResponse {
    return MsgRemoveTokenFromWeightedPoolResponse.decode(message.value);
  },
  toProto(message: MsgRemoveTokenFromWeightedPoolResponse): Uint8Array {
    return MsgRemoveTokenFromWeightedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveTokenFromWeightedPoolResponse): MsgRemoveTokenFromWeightedPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPoolResponse",
      value: MsgRemoveTokenFromWeightedPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    generalPoolParameters: undefined,
    yammParameters: undefined,
    orderParameters: undefined,
    authorizationParameters: undefined
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.authorizationParameters !== undefined) {
      AuthorizationParameters.encode(message.authorizationParameters, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        case 5:
          message.authorizationParameters = AuthorizationParameters.decode(reader, reader.uint32());
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
      orderParameters: isSet(object.orderParameters) ? OrderParameters.fromJSON(object.orderParameters) : undefined,
      authorizationParameters: isSet(object.authorizationParameters) ? AuthorizationParameters.fromJSON(object.authorizationParameters) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.generalPoolParameters !== undefined && (obj.generalPoolParameters = message.generalPoolParameters ? GeneralPoolParameters.toJSON(message.generalPoolParameters) : undefined);
    message.yammParameters !== undefined && (obj.yammParameters = message.yammParameters ? YammParameters.toJSON(message.yammParameters) : undefined);
    message.orderParameters !== undefined && (obj.orderParameters = message.orderParameters ? OrderParameters.toJSON(message.orderParameters) : undefined);
    message.authorizationParameters !== undefined && (obj.authorizationParameters = message.authorizationParameters ? AuthorizationParameters.toJSON(message.authorizationParameters) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.generalPoolParameters = object.generalPoolParameters !== undefined && object.generalPoolParameters !== null ? GeneralPoolParameters.fromPartial(object.generalPoolParameters) : undefined;
    message.yammParameters = object.yammParameters !== undefined && object.yammParameters !== null ? YammParameters.fromPartial(object.yammParameters) : undefined;
    message.orderParameters = object.orderParameters !== undefined && object.orderParameters !== null ? OrderParameters.fromPartial(object.orderParameters) : undefined;
    message.authorizationParameters = object.authorizationParameters !== undefined && object.authorizationParameters !== null ? AuthorizationParameters.fromPartial(object.authorizationParameters) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.general_pool_parameters !== undefined && object.general_pool_parameters !== null) {
      message.generalPoolParameters = GeneralPoolParameters.fromAmino(object.general_pool_parameters);
    }
    if (object.yamm_parameters !== undefined && object.yamm_parameters !== null) {
      message.yammParameters = YammParameters.fromAmino(object.yamm_parameters);
    }
    if (object.order_parameters !== undefined && object.order_parameters !== null) {
      message.orderParameters = OrderParameters.fromAmino(object.order_parameters);
    }
    if (object.authorization_parameters !== undefined && object.authorization_parameters !== null) {
      message.authorizationParameters = AuthorizationParameters.fromAmino(object.authorization_parameters);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.general_pool_parameters = message.generalPoolParameters ? GeneralPoolParameters.toAmino(message.generalPoolParameters) : undefined;
    obj.yamm_parameters = message.yammParameters ? YammParameters.toAmino(message.yammParameters) : undefined;
    obj.order_parameters = message.orderParameters ? OrderParameters.toAmino(message.orderParameters) : undefined;
    obj.authorization_parameters = message.authorizationParameters ? AuthorizationParameters.toAmino(message.authorizationParameters) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "pryzm/amm/v1/UpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYamm",
  encode(message: MsgAddMaturityToYamm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddMaturityToYamm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgAddMaturityToYammAmino): MsgAddMaturityToYamm {
    const message = createBaseMsgAddMaturityToYamm();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.assetId !== undefined && object.assetId !== null) {
      message.assetId = object.assetId;
    }
    if (object.maturitySymbol !== undefined && object.maturitySymbol !== null) {
      message.maturitySymbol = object.maturitySymbol;
    }
    return message;
  },
  toAmino(message: MsgAddMaturityToYamm): MsgAddMaturityToYammAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.assetId = message.assetId;
    obj.maturitySymbol = message.maturitySymbol;
    return obj;
  },
  fromAminoMsg(object: MsgAddMaturityToYammAminoMsg): MsgAddMaturityToYamm {
    return MsgAddMaturityToYamm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddMaturityToYamm): MsgAddMaturityToYammAminoMsg {
    return {
      type: "pryzm/amm/v1/AddMaturityToYamm",
      value: MsgAddMaturityToYamm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddMaturityToYammProtoMsg): MsgAddMaturityToYamm {
    return MsgAddMaturityToYamm.decode(message.value);
  },
  toProto(message: MsgAddMaturityToYamm): Uint8Array {
    return MsgAddMaturityToYamm.encode(message).finish();
  },
  toProtoMsg(message: MsgAddMaturityToYamm): MsgAddMaturityToYammProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYamm",
      value: MsgAddMaturityToYamm.encode(message).finish()
    };
  }
};
function createBaseMsgAddMaturityToYammResponse(): MsgAddMaturityToYammResponse {
  return {};
}
export const MsgAddMaturityToYammResponse = {
  typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYammResponse",
  encode(_: MsgAddMaturityToYammResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddMaturityToYammResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgAddMaturityToYammResponseAmino): MsgAddMaturityToYammResponse {
    const message = createBaseMsgAddMaturityToYammResponse();
    return message;
  },
  toAmino(_: MsgAddMaturityToYammResponse): MsgAddMaturityToYammResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddMaturityToYammResponseAminoMsg): MsgAddMaturityToYammResponse {
    return MsgAddMaturityToYammResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddMaturityToYammResponseProtoMsg): MsgAddMaturityToYammResponse {
    return MsgAddMaturityToYammResponse.decode(message.value);
  },
  toProto(message: MsgAddMaturityToYammResponse): Uint8Array {
    return MsgAddMaturityToYammResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddMaturityToYammResponse): MsgAddMaturityToYammResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYammResponse",
      value: MsgAddMaturityToYammResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetInitializationAllowList(): MsgSetInitializationAllowList {
  return {
    creator: "",
    poolId: BigInt(0),
    initializationAllowList: []
  };
}
export const MsgSetInitializationAllowList = {
  typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowList",
  encode(message: MsgSetInitializationAllowList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.initializationAllowList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetInitializationAllowList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInitializationAllowList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      initializationAllowList: Array.isArray(object?.initializationAllowList) ? object.initializationAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgSetInitializationAllowList): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.initializationAllowList = object.initializationAllowList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetInitializationAllowListAmino): MsgSetInitializationAllowList {
    const message = createBaseMsgSetInitializationAllowList();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.initializationAllowList = object.initialization_allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetInitializationAllowList): MsgSetInitializationAllowListAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    if (message.initializationAllowList) {
      obj.initialization_allow_list = message.initializationAllowList.map(e => e);
    } else {
      obj.initialization_allow_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetInitializationAllowListAminoMsg): MsgSetInitializationAllowList {
    return MsgSetInitializationAllowList.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetInitializationAllowList): MsgSetInitializationAllowListAminoMsg {
    return {
      type: "pryzm/amm/v1/SetInitializationAllowList",
      value: MsgSetInitializationAllowList.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetInitializationAllowListProtoMsg): MsgSetInitializationAllowList {
    return MsgSetInitializationAllowList.decode(message.value);
  },
  toProto(message: MsgSetInitializationAllowList): Uint8Array {
    return MsgSetInitializationAllowList.encode(message).finish();
  },
  toProtoMsg(message: MsgSetInitializationAllowList): MsgSetInitializationAllowListProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowList",
      value: MsgSetInitializationAllowList.encode(message).finish()
    };
  }
};
function createBaseMsgSetInitializationAllowListResponse(): MsgSetInitializationAllowListResponse {
  return {};
}
export const MsgSetInitializationAllowListResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowListResponse",
  encode(_: MsgSetInitializationAllowListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetInitializationAllowListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSetInitializationAllowListResponseAmino): MsgSetInitializationAllowListResponse {
    const message = createBaseMsgSetInitializationAllowListResponse();
    return message;
  },
  toAmino(_: MsgSetInitializationAllowListResponse): MsgSetInitializationAllowListResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetInitializationAllowListResponseAminoMsg): MsgSetInitializationAllowListResponse {
    return MsgSetInitializationAllowListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetInitializationAllowListResponseProtoMsg): MsgSetInitializationAllowListResponse {
    return MsgSetInitializationAllowListResponse.decode(message.value);
  },
  toProto(message: MsgSetInitializationAllowListResponse): Uint8Array {
    return MsgSetInitializationAllowListResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetInitializationAllowListResponse): MsgSetInitializationAllowListResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowListResponse",
      value: MsgSetInitializationAllowListResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPoolAdmins(): MsgSetPoolAdmins {
  return {
    creator: "",
    poolId: BigInt(0),
    admins: []
  };
}
export const MsgSetPoolAdmins = {
  typeUrl: "/pryzm.amm.v1.MsgSetPoolAdmins",
  encode(message: MsgSetPoolAdmins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.admins) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPoolAdmins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolAdmins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.admins.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPoolAdmins {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      admins: Array.isArray(object?.admins) ? object.admins.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgSetPoolAdmins): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetPoolAdmins>): MsgSetPoolAdmins {
    const message = createBaseMsgSetPoolAdmins();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.admins = object.admins?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetPoolAdminsAmino): MsgSetPoolAdmins {
    const message = createBaseMsgSetPoolAdmins();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.admins = object.admins?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetPoolAdmins): MsgSetPoolAdminsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetPoolAdminsAminoMsg): MsgSetPoolAdmins {
    return MsgSetPoolAdmins.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPoolAdmins): MsgSetPoolAdminsAminoMsg {
    return {
      type: "pryzm/amm/v1/SetPoolAdmins",
      value: MsgSetPoolAdmins.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPoolAdminsProtoMsg): MsgSetPoolAdmins {
    return MsgSetPoolAdmins.decode(message.value);
  },
  toProto(message: MsgSetPoolAdmins): Uint8Array {
    return MsgSetPoolAdmins.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPoolAdmins): MsgSetPoolAdminsProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPoolAdmins",
      value: MsgSetPoolAdmins.encode(message).finish()
    };
  }
};
function createBaseMsgSetPoolAdminsResponse(): MsgSetPoolAdminsResponse {
  return {};
}
export const MsgSetPoolAdminsResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetPoolAdminsResponse",
  encode(_: MsgSetPoolAdminsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPoolAdminsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolAdminsResponse();
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
  fromJSON(_: any): MsgSetPoolAdminsResponse {
    return {};
  },
  toJSON(_: MsgSetPoolAdminsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPoolAdminsResponse>): MsgSetPoolAdminsResponse {
    const message = createBaseMsgSetPoolAdminsResponse();
    return message;
  },
  fromAmino(_: MsgSetPoolAdminsResponseAmino): MsgSetPoolAdminsResponse {
    const message = createBaseMsgSetPoolAdminsResponse();
    return message;
  },
  toAmino(_: MsgSetPoolAdminsResponse): MsgSetPoolAdminsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPoolAdminsResponseAminoMsg): MsgSetPoolAdminsResponse {
    return MsgSetPoolAdminsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPoolAdminsResponseProtoMsg): MsgSetPoolAdminsResponse {
    return MsgSetPoolAdminsResponse.decode(message.value);
  },
  toProto(message: MsgSetPoolAdminsResponse): Uint8Array {
    return MsgSetPoolAdminsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPoolAdminsResponse): MsgSetPoolAdminsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPoolAdminsResponse",
      value: MsgSetPoolAdminsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPauseAllowList(): MsgSetPauseAllowList {
  return {
    creator: "",
    poolId: BigInt(0),
    pauseAllowList: []
  };
}
export const MsgSetPauseAllowList = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowList",
  encode(message: MsgSetPauseAllowList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.pauseAllowList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPauseAllowList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseAllowList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.pauseAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPauseAllowList {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      pauseAllowList: Array.isArray(object?.pauseAllowList) ? object.pauseAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgSetPauseAllowList): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.pauseAllowList) {
      obj.pauseAllowList = message.pauseAllowList.map(e => e);
    } else {
      obj.pauseAllowList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetPauseAllowList>): MsgSetPauseAllowList {
    const message = createBaseMsgSetPauseAllowList();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pauseAllowList = object.pauseAllowList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetPauseAllowListAmino): MsgSetPauseAllowList {
    const message = createBaseMsgSetPauseAllowList();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.pauseAllowList = object.pause_allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetPauseAllowList): MsgSetPauseAllowListAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    if (message.pauseAllowList) {
      obj.pause_allow_list = message.pauseAllowList.map(e => e);
    } else {
      obj.pause_allow_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseAllowListAminoMsg): MsgSetPauseAllowList {
    return MsgSetPauseAllowList.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPauseAllowList): MsgSetPauseAllowListAminoMsg {
    return {
      type: "pryzm/amm/v1/SetPauseAllowList",
      value: MsgSetPauseAllowList.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPauseAllowListProtoMsg): MsgSetPauseAllowList {
    return MsgSetPauseAllowList.decode(message.value);
  },
  toProto(message: MsgSetPauseAllowList): Uint8Array {
    return MsgSetPauseAllowList.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseAllowList): MsgSetPauseAllowListProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowList",
      value: MsgSetPauseAllowList.encode(message).finish()
    };
  }
};
function createBaseMsgSetPauseAllowListResponse(): MsgSetPauseAllowListResponse {
  return {};
}
export const MsgSetPauseAllowListResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowListResponse",
  encode(_: MsgSetPauseAllowListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPauseAllowListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseAllowListResponse();
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
  fromJSON(_: any): MsgSetPauseAllowListResponse {
    return {};
  },
  toJSON(_: MsgSetPauseAllowListResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPauseAllowListResponse>): MsgSetPauseAllowListResponse {
    const message = createBaseMsgSetPauseAllowListResponse();
    return message;
  },
  fromAmino(_: MsgSetPauseAllowListResponseAmino): MsgSetPauseAllowListResponse {
    const message = createBaseMsgSetPauseAllowListResponse();
    return message;
  },
  toAmino(_: MsgSetPauseAllowListResponse): MsgSetPauseAllowListResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseAllowListResponseAminoMsg): MsgSetPauseAllowListResponse {
    return MsgSetPauseAllowListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPauseAllowListResponseProtoMsg): MsgSetPauseAllowListResponse {
    return MsgSetPauseAllowListResponse.decode(message.value);
  },
  toProto(message: MsgSetPauseAllowListResponse): Uint8Array {
    return MsgSetPauseAllowListResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseAllowListResponse): MsgSetPauseAllowListResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowListResponse",
      value: MsgSetPauseAllowListResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPauseWindow(): MsgSetPauseWindow {
  return {
    authority: "",
    poolId: BigInt(0),
    pauseWindow: PoolPauseWindow.fromPartial({})
  };
}
export const MsgSetPauseWindow = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseWindow",
  encode(message: MsgSetPauseWindow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pauseWindow !== undefined) {
      PoolPauseWindow.encode(message.pauseWindow, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPauseWindow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.pauseWindow = PoolPauseWindow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPauseWindow {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      pauseWindow: isSet(object.pauseWindow) ? PoolPauseWindow.fromJSON(object.pauseWindow) : undefined
    };
  },
  toJSON(message: MsgSetPauseWindow): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.pauseWindow !== undefined && (obj.pauseWindow = message.pauseWindow ? PoolPauseWindow.toJSON(message.pauseWindow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetPauseWindow>): MsgSetPauseWindow {
    const message = createBaseMsgSetPauseWindow();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pauseWindow = object.pauseWindow !== undefined && object.pauseWindow !== null ? PoolPauseWindow.fromPartial(object.pauseWindow) : undefined;
    return message;
  },
  fromAmino(object: MsgSetPauseWindowAmino): MsgSetPauseWindow {
    const message = createBaseMsgSetPauseWindow();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pause_window !== undefined && object.pause_window !== null) {
      message.pauseWindow = PoolPauseWindow.fromAmino(object.pause_window);
    }
    return message;
  },
  toAmino(message: MsgSetPauseWindow): MsgSetPauseWindowAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.pause_window = message.pauseWindow ? PoolPauseWindow.toAmino(message.pauseWindow) : PoolPauseWindow.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseWindowAminoMsg): MsgSetPauseWindow {
    return MsgSetPauseWindow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPauseWindow): MsgSetPauseWindowAminoMsg {
    return {
      type: "pryzm/amm/v1/SetPauseWindow",
      value: MsgSetPauseWindow.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPauseWindowProtoMsg): MsgSetPauseWindow {
    return MsgSetPauseWindow.decode(message.value);
  },
  toProto(message: MsgSetPauseWindow): Uint8Array {
    return MsgSetPauseWindow.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseWindow): MsgSetPauseWindowProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseWindow",
      value: MsgSetPauseWindow.encode(message).finish()
    };
  }
};
function createBaseMsgSetPauseWindowResponse(): MsgSetPauseWindowResponse {
  return {};
}
export const MsgSetPauseWindowResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseWindowResponse",
  encode(_: MsgSetPauseWindowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPauseWindowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseWindowResponse();
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
  fromJSON(_: any): MsgSetPauseWindowResponse {
    return {};
  },
  toJSON(_: MsgSetPauseWindowResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPauseWindowResponse>): MsgSetPauseWindowResponse {
    const message = createBaseMsgSetPauseWindowResponse();
    return message;
  },
  fromAmino(_: MsgSetPauseWindowResponseAmino): MsgSetPauseWindowResponse {
    const message = createBaseMsgSetPauseWindowResponse();
    return message;
  },
  toAmino(_: MsgSetPauseWindowResponse): MsgSetPauseWindowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseWindowResponseAminoMsg): MsgSetPauseWindowResponse {
    return MsgSetPauseWindowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPauseWindowResponseProtoMsg): MsgSetPauseWindowResponse {
    return MsgSetPauseWindowResponse.decode(message.value);
  },
  toProto(message: MsgSetPauseWindowResponse): Uint8Array {
    return MsgSetPauseWindowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseWindowResponse): MsgSetPauseWindowResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseWindowResponse",
      value: MsgSetPauseWindowResponse.encode(message).finish()
    };
  }
};