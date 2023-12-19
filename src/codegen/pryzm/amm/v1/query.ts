import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Swap, SwapAmino, SwapSDKType, SwapType, SwapStep, SwapStepAmino, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PoolToken, PoolTokenAmino, PoolTokenSDKType } from "./pool_token";
import { TokenWeight, TokenWeightAmino, TokenWeightSDKType } from "./token_weight";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { WeightedToken, WeightedTokenAmino, WeightedTokenSDKType } from "./weighted_token";
import { WeightUpdateTiming, WeightUpdateTimingAmino, WeightUpdateTimingSDKType } from "./weight_update_timing";
import { VirtualBalancePoolToken, VirtualBalancePoolTokenAmino, VirtualBalancePoolTokenSDKType } from "./virtual_balance_pool_token";
import { YammConfiguration, YammConfigurationAmino, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteAmino, WhitelistedRouteSDKType } from "./whitelisted_route";
import { Order, OrderAmino, OrderSDKType } from "./order";
import { ScheduleOrder, ScheduleOrderAmino, ScheduleOrderSDKType } from "./schedule_order";
import { OraclePricePair, OraclePricePairAmino, OraclePricePairSDKType } from "./oracle_price_pair";
import { PendingTokenIntroduction, PendingTokenIntroductionAmino, PendingTokenIntroductionSDKType } from "./pending_token_introduction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetPoolTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryGetPoolTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolTokenRequest";
  value: QueryGetPoolTokenRequestAmino;
}
export interface QueryGetPoolTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetPoolTokenResponse {
  poolToken: PoolToken;
}
export interface QueryGetPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryGetPoolTokenResponseAmino {
  pool_token?: PoolTokenAmino;
}
export interface QueryGetPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolTokenResponse";
  value: QueryGetPoolTokenResponseAmino;
}
export interface QueryGetPoolTokenResponseSDKType {
  pool_token: PoolTokenSDKType;
}
export interface QueryAllPoolTokenRequest {
  pagination?: PageRequest;
  poolId: string;
}
export interface QueryAllPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryAllPoolTokenRequestAmino {
  pagination?: PageRequestAmino;
  pool_id?: string;
}
export interface QueryAllPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenRequest";
  value: QueryAllPoolTokenRequestAmino;
}
export interface QueryAllPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
  pool_id: string;
}
export interface QueryAllPoolTokenResponse {
  poolToken: PoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryAllPoolTokenResponseAmino {
  pool_token?: PoolTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenResponse";
  value: QueryAllPoolTokenResponseAmino;
}
export interface QueryAllPoolTokenResponseSDKType {
  pool_token: PoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightRequest {
  poolId: bigint;
}
export interface QueryAllPoolTokenWeightRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightRequest";
  value: Uint8Array;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightRequestAmino {
  pool_id?: string;
}
export interface QueryAllPoolTokenWeightRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenWeightRequest";
  value: QueryAllPoolTokenWeightRequestAmino;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightRequestSDKType {
  pool_id: bigint;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightResponse {
  tokenWeight: TokenWeight[];
}
export interface QueryAllPoolTokenWeightResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightResponse";
  value: Uint8Array;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightResponseAmino {
  token_weight?: TokenWeightAmino[];
}
export interface QueryAllPoolTokenWeightResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenWeightResponse";
  value: QueryAllPoolTokenWeightResponseAmino;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightResponseSDKType {
  token_weight: TokenWeightSDKType[];
}
export interface QueryGetPoolTokenWeightRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetPoolTokenWeightRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightRequest";
  value: Uint8Array;
}
export interface QueryGetPoolTokenWeightRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetPoolTokenWeightRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolTokenWeightRequest";
  value: QueryGetPoolTokenWeightRequestAmino;
}
export interface QueryGetPoolTokenWeightRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetPoolTokenWeightResponse {
  tokenWeight: TokenWeight;
}
export interface QueryGetPoolTokenWeightResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightResponse";
  value: Uint8Array;
}
export interface QueryGetPoolTokenWeightResponseAmino {
  token_weight?: TokenWeightAmino;
}
export interface QueryGetPoolTokenWeightResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolTokenWeightResponse";
  value: QueryGetPoolTokenWeightResponseAmino;
}
export interface QueryGetPoolTokenWeightResponseSDKType {
  token_weight: TokenWeightSDKType;
}
export interface QueryGetPoolRequest {
  id: bigint;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  id?: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  id: bigint;
}
export interface QueryGetPoolResponse {
  pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool?: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWeightedTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetWeightedTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenRequest";
  value: Uint8Array;
}
export interface QueryGetWeightedTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetWeightedTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWeightedTokenRequest";
  value: QueryGetWeightedTokenRequestAmino;
}
export interface QueryGetWeightedTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetWeightedTokenResponse {
  weightedToken: WeightedToken;
}
export interface QueryGetWeightedTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenResponse";
  value: Uint8Array;
}
export interface QueryGetWeightedTokenResponseAmino {
  weighted_token?: WeightedTokenAmino;
}
export interface QueryGetWeightedTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWeightedTokenResponse";
  value: QueryGetWeightedTokenResponseAmino;
}
export interface QueryGetWeightedTokenResponseSDKType {
  weighted_token: WeightedTokenSDKType;
}
export interface QueryAllWeightedTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllWeightedTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenRequest";
  value: Uint8Array;
}
export interface QueryAllWeightedTokenRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllWeightedTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWeightedTokenRequest";
  value: QueryAllWeightedTokenRequestAmino;
}
export interface QueryAllWeightedTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWeightedTokenResponse {
  weightedToken: WeightedToken[];
  pagination?: PageResponse;
}
export interface QueryAllWeightedTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenResponse";
  value: Uint8Array;
}
export interface QueryAllWeightedTokenResponseAmino {
  weighted_token?: WeightedTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllWeightedTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWeightedTokenResponse";
  value: QueryAllWeightedTokenResponseAmino;
}
export interface QueryAllWeightedTokenResponseSDKType {
  weighted_token: WeightedTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWeightUpdateTimingRequest {
  poolId: bigint;
}
export interface QueryGetWeightUpdateTimingRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingRequest";
  value: Uint8Array;
}
export interface QueryGetWeightUpdateTimingRequestAmino {
  pool_id?: string;
}
export interface QueryGetWeightUpdateTimingRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWeightUpdateTimingRequest";
  value: QueryGetWeightUpdateTimingRequestAmino;
}
export interface QueryGetWeightUpdateTimingRequestSDKType {
  pool_id: bigint;
}
export interface QueryGetWeightUpdateTimingResponse {
  weightUpdateTiming: WeightUpdateTiming;
}
export interface QueryGetWeightUpdateTimingResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingResponse";
  value: Uint8Array;
}
export interface QueryGetWeightUpdateTimingResponseAmino {
  weight_update_timing?: WeightUpdateTimingAmino;
}
export interface QueryGetWeightUpdateTimingResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWeightUpdateTimingResponse";
  value: QueryGetWeightUpdateTimingResponseAmino;
}
export interface QueryGetWeightUpdateTimingResponseSDKType {
  weight_update_timing: WeightUpdateTimingSDKType;
}
export interface QueryAllWeightUpdateTimingRequest {
  pagination?: PageRequest;
}
export interface QueryAllWeightUpdateTimingRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingRequest";
  value: Uint8Array;
}
export interface QueryAllWeightUpdateTimingRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllWeightUpdateTimingRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWeightUpdateTimingRequest";
  value: QueryAllWeightUpdateTimingRequestAmino;
}
export interface QueryAllWeightUpdateTimingRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWeightUpdateTimingResponse {
  weightUpdateTiming: WeightUpdateTiming[];
  pagination?: PageResponse;
}
export interface QueryAllWeightUpdateTimingResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingResponse";
  value: Uint8Array;
}
export interface QueryAllWeightUpdateTimingResponseAmino {
  weight_update_timing?: WeightUpdateTimingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllWeightUpdateTimingResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWeightUpdateTimingResponse";
  value: QueryAllWeightUpdateTimingResponseAmino;
}
export interface QueryAllWeightUpdateTimingResponseSDKType {
  weight_update_timing: WeightUpdateTimingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySimulateSingleSwapRequest {
  swap: Swap;
}
export interface QuerySimulateSingleSwapRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapRequest";
  value: Uint8Array;
}
export interface QuerySimulateSingleSwapRequestAmino {
  swap?: SwapAmino;
}
export interface QuerySimulateSingleSwapRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateSingleSwapRequest";
  value: QuerySimulateSingleSwapRequestAmino;
}
export interface QuerySimulateSingleSwapRequestSDKType {
  swap: SwapSDKType;
}
export interface QuerySimulateSingleSwapResponse {
  amountOut: Coin;
  amountIn: Coin;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocolFee: Coin;
  swapFee: Coin;
}
export interface QuerySimulateSingleSwapResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapResponse";
  value: Uint8Array;
}
export interface QuerySimulateSingleSwapResponseAmino {
  amount_out?: CoinAmino;
  amount_in?: CoinAmino;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface QuerySimulateSingleSwapResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateSingleSwapResponse";
  value: QuerySimulateSingleSwapResponseAmino;
}
export interface QuerySimulateSingleSwapResponseSDKType {
  amount_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface QuerySimulateInitializePoolRequest {
  poolId: bigint;
  amountsIn: Coin[];
}
export interface QuerySimulateInitializePoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolRequest";
  value: Uint8Array;
}
export interface QuerySimulateInitializePoolRequestAmino {
  pool_id?: string;
  amounts_in?: CoinAmino[];
}
export interface QuerySimulateInitializePoolRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateInitializePoolRequest";
  value: QuerySimulateInitializePoolRequestAmino;
}
export interface QuerySimulateInitializePoolRequestSDKType {
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface QuerySimulateInitializePoolResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface QuerySimulateInitializePoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolResponse";
  value: Uint8Array;
}
export interface QuerySimulateInitializePoolResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
}
export interface QuerySimulateInitializePoolResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateInitializePoolResponse";
  value: QuerySimulateInitializePoolResponseAmino;
}
export interface QuerySimulateInitializePoolResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface QuerySimulateJoinAllTokensExactLptRequest {
  poolId: bigint;
  lptOut: string;
}
export interface QuerySimulateJoinAllTokensExactLptRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptRequest";
  value: Uint8Array;
}
export interface QuerySimulateJoinAllTokensExactLptRequestAmino {
  pool_id?: string;
  lpt_out?: string;
}
export interface QuerySimulateJoinAllTokensExactLptRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptRequest";
  value: QuerySimulateJoinAllTokensExactLptRequestAmino;
}
export interface QuerySimulateJoinAllTokensExactLptRequestSDKType {
  pool_id: bigint;
  lpt_out: string;
}
export interface QuerySimulateJoinAllTokensExactLptResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface QuerySimulateJoinAllTokensExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptResponse";
  value: Uint8Array;
}
export interface QuerySimulateJoinAllTokensExactLptResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
}
export interface QuerySimulateJoinAllTokensExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptResponse";
  value: QuerySimulateJoinAllTokensExactLptResponseAmino;
}
export interface QuerySimulateJoinAllTokensExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface QuerySimulateJoinExactTokensRequest {
  poolId: bigint;
  amountsIn: Coin[];
}
export interface QuerySimulateJoinExactTokensRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensRequest";
  value: Uint8Array;
}
export interface QuerySimulateJoinExactTokensRequestAmino {
  pool_id?: string;
  amounts_in?: CoinAmino[];
}
export interface QuerySimulateJoinExactTokensRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinExactTokensRequest";
  value: QuerySimulateJoinExactTokensRequestAmino;
}
export interface QuerySimulateJoinExactTokensRequestSDKType {
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface QuerySimulateJoinExactTokensResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface QuerySimulateJoinExactTokensResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensResponse";
  value: Uint8Array;
}
export interface QuerySimulateJoinExactTokensResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface QuerySimulateJoinExactTokensResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinExactTokensResponse";
  value: QuerySimulateJoinExactTokensResponseAmino;
}
export interface QuerySimulateJoinExactTokensResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface QuerySimulateZeroImpactJoinYammRequest {
  cAmountIn: Coin;
}
export interface QuerySimulateZeroImpactJoinYammRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammRequest";
  value: Uint8Array;
}
export interface QuerySimulateZeroImpactJoinYammRequestAmino {
  c_amount_in?: CoinAmino;
}
export interface QuerySimulateZeroImpactJoinYammRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammRequest";
  value: QuerySimulateZeroImpactJoinYammRequestAmino;
}
export interface QuerySimulateZeroImpactJoinYammRequestSDKType {
  c_amount_in: CoinSDKType;
}
export interface QuerySimulateZeroImpactJoinYammResponse {
  lptOut: Coin;
  yOut: Coin[];
  refractFee: Coin;
  joinProtocolFee: Coin[];
  swapFee: Coin[];
}
export interface QuerySimulateZeroImpactJoinYammResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammResponse";
  value: Uint8Array;
}
export interface QuerySimulateZeroImpactJoinYammResponseAmino {
  lpt_out?: CoinAmino;
  y_out?: CoinAmino[];
  refract_fee?: CoinAmino;
  join_protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface QuerySimulateZeroImpactJoinYammResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammResponse";
  value: QuerySimulateZeroImpactJoinYammResponseAmino;
}
export interface QuerySimulateZeroImpactJoinYammResponseSDKType {
  lpt_out: CoinSDKType;
  y_out: CoinSDKType[];
  refract_fee: CoinSDKType;
  join_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface QuerySimulateJoinTokenExactLptRequest {
  poolId: bigint;
  lptOut: string;
  tokenIn: string;
}
export interface QuerySimulateJoinTokenExactLptRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptRequest";
  value: Uint8Array;
}
export interface QuerySimulateJoinTokenExactLptRequestAmino {
  pool_id?: string;
  lpt_out?: string;
  token_in?: string;
}
export interface QuerySimulateJoinTokenExactLptRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptRequest";
  value: QuerySimulateJoinTokenExactLptRequestAmino;
}
export interface QuerySimulateJoinTokenExactLptRequestSDKType {
  pool_id: bigint;
  lpt_out: string;
  token_in: string;
}
export interface QuerySimulateJoinTokenExactLptResponse {
  lptOut: Coin;
  amountIn: Coin;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface QuerySimulateJoinTokenExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptResponse";
  value: Uint8Array;
}
export interface QuerySimulateJoinTokenExactLptResponseAmino {
  lpt_out?: CoinAmino;
  amount_in?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface QuerySimulateJoinTokenExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptResponse";
  value: QuerySimulateJoinTokenExactLptResponseAmino;
}
export interface QuerySimulateJoinTokenExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface QuerySimulateExitTokenExactLptRequest {
  poolId: bigint;
  lptIn: string;
  tokenOut: string;
}
export interface QuerySimulateExitTokenExactLptRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptRequest";
  value: Uint8Array;
}
export interface QuerySimulateExitTokenExactLptRequestAmino {
  pool_id?: string;
  lpt_in?: string;
  token_out?: string;
}
export interface QuerySimulateExitTokenExactLptRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptRequest";
  value: QuerySimulateExitTokenExactLptRequestAmino;
}
export interface QuerySimulateExitTokenExactLptRequestSDKType {
  pool_id: bigint;
  lpt_in: string;
  token_out: string;
}
export interface QuerySimulateExitTokenExactLptResponse {
  lptIn: Coin;
  amountOut: Coin;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface QuerySimulateExitTokenExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptResponse";
  value: Uint8Array;
}
export interface QuerySimulateExitTokenExactLptResponseAmino {
  lpt_in?: CoinAmino;
  amount_out?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface QuerySimulateExitTokenExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptResponse";
  value: QuerySimulateExitTokenExactLptResponseAmino;
}
export interface QuerySimulateExitTokenExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface QuerySimulateExitExactTokensRequest {
  poolId: bigint;
  amountsOut: Coin[];
}
export interface QuerySimulateExitExactTokensRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensRequest";
  value: Uint8Array;
}
export interface QuerySimulateExitExactTokensRequestAmino {
  pool_id?: string;
  amounts_out?: CoinAmino[];
}
export interface QuerySimulateExitExactTokensRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitExactTokensRequest";
  value: QuerySimulateExitExactTokensRequestAmino;
}
export interface QuerySimulateExitExactTokensRequestSDKType {
  pool_id: bigint;
  amounts_out: CoinSDKType[];
}
export interface QuerySimulateExitExactTokensResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  swapFee: Coin[];
}
export interface QuerySimulateExitExactTokensResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensResponse";
  value: Uint8Array;
}
export interface QuerySimulateExitExactTokensResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino[];
}
export interface QuerySimulateExitExactTokensResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitExactTokensResponse";
  value: QuerySimulateExitExactTokensResponseAmino;
}
export interface QuerySimulateExitExactTokensResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType[];
}
export interface QuerySimulateExitAllTokensExactLptRequest {
  poolId: bigint;
  lptIn: string;
}
export interface QuerySimulateExitAllTokensExactLptRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptRequest";
  value: Uint8Array;
}
export interface QuerySimulateExitAllTokensExactLptRequestAmino {
  pool_id?: string;
  lpt_in?: string;
}
export interface QuerySimulateExitAllTokensExactLptRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptRequest";
  value: QuerySimulateExitAllTokensExactLptRequestAmino;
}
export interface QuerySimulateExitAllTokensExactLptRequestSDKType {
  pool_id: bigint;
  lpt_in: string;
}
export interface QuerySimulateExitAllTokensExactLptResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
}
export interface QuerySimulateExitAllTokensExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptResponse";
  value: Uint8Array;
}
export interface QuerySimulateExitAllTokensExactLptResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
}
export interface QuerySimulateExitAllTokensExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptResponse";
  value: QuerySimulateExitAllTokensExactLptResponseAmino;
}
export interface QuerySimulateExitAllTokensExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
}
export interface QuerySpotPriceRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  applyFee: boolean;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySpotPriceRequest";
  value: Uint8Array;
}
export interface QuerySpotPriceRequestAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  apply_fee?: boolean;
}
export interface QuerySpotPriceRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySpotPriceRequest";
  value: QuerySpotPriceRequestAmino;
}
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  apply_fee: boolean;
}
export interface QuerySpotPriceResponse {
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySpotPriceResponse";
  value: Uint8Array;
}
export interface QuerySpotPriceResponseAmino {
  spot_price?: string;
}
export interface QuerySpotPriceResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySpotPriceResponse";
  value: QuerySpotPriceResponseAmino;
}
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
export interface QueryGetIntroducingPoolTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetIntroducingPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryGetIntroducingPoolTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetIntroducingPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenRequest";
  value: QueryGetIntroducingPoolTokenRequestAmino;
}
export interface QueryGetIntroducingPoolTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetIntroducingPoolTokenResponse {
  introducingPoolToken: VirtualBalancePoolToken;
}
export interface QueryGetIntroducingPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryGetIntroducingPoolTokenResponseAmino {
  introducing_pool_token?: VirtualBalancePoolTokenAmino;
}
export interface QueryGetIntroducingPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenResponse";
  value: QueryGetIntroducingPoolTokenResponseAmino;
}
export interface QueryGetIntroducingPoolTokenResponseSDKType {
  introducing_pool_token: VirtualBalancePoolTokenSDKType;
}
export interface QueryAllIntroducingPoolTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllIntroducingPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryAllIntroducingPoolTokenRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllIntroducingPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenRequest";
  value: QueryAllIntroducingPoolTokenRequestAmino;
}
export interface QueryAllIntroducingPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllIntroducingPoolTokenResponse {
  introducingPoolToken: VirtualBalancePoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllIntroducingPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryAllIntroducingPoolTokenResponseAmino {
  introducing_pool_token?: VirtualBalancePoolTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllIntroducingPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenResponse";
  value: QueryAllIntroducingPoolTokenResponseAmino;
}
export interface QueryAllIntroducingPoolTokenResponseSDKType {
  introducing_pool_token: VirtualBalancePoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetExpiringPoolTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetExpiringPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryGetExpiringPoolTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetExpiringPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetExpiringPoolTokenRequest";
  value: QueryGetExpiringPoolTokenRequestAmino;
}
export interface QueryGetExpiringPoolTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetExpiringPoolTokenResponse {
  expiringPoolToken: VirtualBalancePoolToken;
}
export interface QueryGetExpiringPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryGetExpiringPoolTokenResponseAmino {
  expiring_pool_token?: VirtualBalancePoolTokenAmino;
}
export interface QueryGetExpiringPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetExpiringPoolTokenResponse";
  value: QueryGetExpiringPoolTokenResponseAmino;
}
export interface QueryGetExpiringPoolTokenResponseSDKType {
  expiring_pool_token: VirtualBalancePoolTokenSDKType;
}
export interface QueryAllExpiringPoolTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllExpiringPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryAllExpiringPoolTokenRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllExpiringPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllExpiringPoolTokenRequest";
  value: QueryAllExpiringPoolTokenRequestAmino;
}
export interface QueryAllExpiringPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllExpiringPoolTokenResponse {
  expiringPoolToken: VirtualBalancePoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllExpiringPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryAllExpiringPoolTokenResponseAmino {
  expiring_pool_token?: VirtualBalancePoolTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllExpiringPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllExpiringPoolTokenResponse";
  value: QueryAllExpiringPoolTokenResponseAmino;
}
export interface QueryAllExpiringPoolTokenResponseSDKType {
  expiring_pool_token: VirtualBalancePoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryLpTokenRequest {
  poolId: bigint;
}
export interface QueryLpTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryLpTokenRequest";
  value: Uint8Array;
}
export interface QueryLpTokenRequestAmino {
  pool_id?: string;
}
export interface QueryLpTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryLpTokenRequest";
  value: QueryLpTokenRequestAmino;
}
export interface QueryLpTokenRequestSDKType {
  pool_id: bigint;
}
export interface QueryLpTokenResponse {
  lpToken: PoolToken;
}
export interface QueryLpTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryLpTokenResponse";
  value: Uint8Array;
}
export interface QueryLpTokenResponseAmino {
  lp_token?: PoolTokenAmino;
}
export interface QueryLpTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryLpTokenResponse";
  value: QueryLpTokenResponseAmino;
}
export interface QueryLpTokenResponseSDKType {
  lp_token: PoolTokenSDKType;
}
export interface QuerySimulateBatchSwapRequest {
  swapType: SwapType;
  steps: SwapStep[];
}
export interface QuerySimulateBatchSwapRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapRequest";
  value: Uint8Array;
}
export interface QuerySimulateBatchSwapRequestAmino {
  swap_type?: SwapType;
  steps?: SwapStepAmino[];
}
export interface QuerySimulateBatchSwapRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateBatchSwapRequest";
  value: QuerySimulateBatchSwapRequestAmino;
}
export interface QuerySimulateBatchSwapRequestSDKType {
  swap_type: SwapType;
  steps: SwapStepSDKType[];
}
export interface QuerySimulateBatchSwapResponse {
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
export interface QuerySimulateBatchSwapResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapResponse";
  value: Uint8Array;
}
export interface QuerySimulateBatchSwapResponseAmino {
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
export interface QuerySimulateBatchSwapResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateBatchSwapResponse";
  value: QuerySimulateBatchSwapResponseAmino;
}
export interface QuerySimulateBatchSwapResponseSDKType {
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  swap_protocol_fee: CoinSDKType[];
  join_exit_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface QueryGetYammConfigurationRequest {
  poolId: bigint;
}
export interface QueryGetYammConfigurationRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationRequest";
  value: Uint8Array;
}
export interface QueryGetYammConfigurationRequestAmino {
  pool_id?: string;
}
export interface QueryGetYammConfigurationRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetYammConfigurationRequest";
  value: QueryGetYammConfigurationRequestAmino;
}
export interface QueryGetYammConfigurationRequestSDKType {
  pool_id: bigint;
}
export interface QueryGetYammConfigurationResponse {
  yammConfiguration: YammConfiguration;
}
export interface QueryGetYammConfigurationResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationResponse";
  value: Uint8Array;
}
export interface QueryGetYammConfigurationResponseAmino {
  yamm_configuration?: YammConfigurationAmino;
}
export interface QueryGetYammConfigurationResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetYammConfigurationResponse";
  value: QueryGetYammConfigurationResponseAmino;
}
export interface QueryGetYammConfigurationResponseSDKType {
  yamm_configuration: YammConfigurationSDKType;
}
export interface QueryAllYammConfigurationRequest {
  pagination?: PageRequest;
}
export interface QueryAllYammConfigurationRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationRequest";
  value: Uint8Array;
}
export interface QueryAllYammConfigurationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllYammConfigurationRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllYammConfigurationRequest";
  value: QueryAllYammConfigurationRequestAmino;
}
export interface QueryAllYammConfigurationRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllYammConfigurationResponse {
  yammConfiguration: YammConfiguration[];
  pagination?: PageResponse;
}
export interface QueryAllYammConfigurationResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationResponse";
  value: Uint8Array;
}
export interface QueryAllYammConfigurationResponseAmino {
  yamm_configuration?: YammConfigurationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllYammConfigurationResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllYammConfigurationResponse";
  value: QueryAllYammConfigurationResponseAmino;
}
export interface QueryAllYammConfigurationResponseSDKType {
  yamm_configuration: YammConfigurationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWhitelistedRouteRequest {
  tokenIn: string;
  tokenOut: string;
}
export interface QueryGetWhitelistedRouteRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteRequest";
  value: Uint8Array;
}
export interface QueryGetWhitelistedRouteRequestAmino {
  token_in?: string;
  token_out?: string;
}
export interface QueryGetWhitelistedRouteRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWhitelistedRouteRequest";
  value: QueryGetWhitelistedRouteRequestAmino;
}
export interface QueryGetWhitelistedRouteRequestSDKType {
  token_in: string;
  token_out: string;
}
export interface QueryGetWhitelistedRouteResponse {
  whitelistedRoute: WhitelistedRoute;
}
export interface QueryGetWhitelistedRouteResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteResponse";
  value: Uint8Array;
}
export interface QueryGetWhitelistedRouteResponseAmino {
  whitelisted_route?: WhitelistedRouteAmino;
}
export interface QueryGetWhitelistedRouteResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWhitelistedRouteResponse";
  value: QueryGetWhitelistedRouteResponseAmino;
}
export interface QueryGetWhitelistedRouteResponseSDKType {
  whitelisted_route: WhitelistedRouteSDKType;
}
export interface QueryAllWhitelistedRouteRequest {
  pagination?: PageRequest;
}
export interface QueryAllWhitelistedRouteRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteRequest";
  value: Uint8Array;
}
export interface QueryAllWhitelistedRouteRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllWhitelistedRouteRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWhitelistedRouteRequest";
  value: QueryAllWhitelistedRouteRequestAmino;
}
export interface QueryAllWhitelistedRouteRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWhitelistedRouteResponse {
  whitelistedRoute: WhitelistedRoute[];
  pagination?: PageResponse;
}
export interface QueryAllWhitelistedRouteResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteResponse";
  value: Uint8Array;
}
export interface QueryAllWhitelistedRouteResponseAmino {
  whitelisted_route?: WhitelistedRouteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllWhitelistedRouteResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWhitelistedRouteResponse";
  value: QueryAllWhitelistedRouteResponseAmino;
}
export interface QueryAllWhitelistedRouteResponseSDKType {
  whitelisted_route: WhitelistedRouteSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOrderRequest {
  id: bigint;
}
export interface QueryGetOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetOrderRequest";
  value: Uint8Array;
}
export interface QueryGetOrderRequestAmino {
  id?: string;
}
export interface QueryGetOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetOrderRequest";
  value: QueryGetOrderRequestAmino;
}
export interface QueryGetOrderRequestSDKType {
  id: bigint;
}
export interface QueryGetOrderResponse {
  order: Order;
}
export interface QueryGetOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetOrderResponse";
  value: Uint8Array;
}
export interface QueryGetOrderResponseAmino {
  order?: OrderAmino;
}
export interface QueryGetOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetOrderResponse";
  value: QueryGetOrderResponseAmino;
}
export interface QueryGetOrderResponseSDKType {
  order: OrderSDKType;
}
export interface QueryAllOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllOrderRequest";
  value: Uint8Array;
}
export interface QueryAllOrderRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllOrderRequest";
  value: QueryAllOrderRequestAmino;
}
export interface QueryAllOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllOrderResponse {
  order: Order[];
  pagination?: PageResponse;
}
export interface QueryAllOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllOrderResponse";
  value: Uint8Array;
}
export interface QueryAllOrderResponseAmino {
  order?: OrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllOrderResponse";
  value: QueryAllOrderResponseAmino;
}
export interface QueryAllOrderResponseSDKType {
  order: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetExecutableOrderRequest {
  orderId: bigint;
}
export interface QueryGetExecutableOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderRequest";
  value: Uint8Array;
}
export interface QueryGetExecutableOrderRequestAmino {
  order_id?: string;
}
export interface QueryGetExecutableOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetExecutableOrderRequest";
  value: QueryGetExecutableOrderRequestAmino;
}
export interface QueryGetExecutableOrderRequestSDKType {
  order_id: bigint;
}
export interface QueryGetExecutableOrderResponse {
  executableOrder: Order;
}
export interface QueryGetExecutableOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderResponse";
  value: Uint8Array;
}
export interface QueryGetExecutableOrderResponseAmino {
  executable_order?: OrderAmino;
}
export interface QueryGetExecutableOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetExecutableOrderResponse";
  value: QueryGetExecutableOrderResponseAmino;
}
export interface QueryGetExecutableOrderResponseSDKType {
  executable_order: OrderSDKType;
}
export interface QueryAllExecutableOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllExecutableOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderRequest";
  value: Uint8Array;
}
export interface QueryAllExecutableOrderRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllExecutableOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllExecutableOrderRequest";
  value: QueryAllExecutableOrderRequestAmino;
}
export interface QueryAllExecutableOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllExecutableOrderResponse {
  executableOrder: Order[];
  pagination?: PageResponse;
}
export interface QueryAllExecutableOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderResponse";
  value: Uint8Array;
}
export interface QueryAllExecutableOrderResponseAmino {
  executable_order?: OrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllExecutableOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllExecutableOrderResponse";
  value: QueryAllExecutableOrderResponseAmino;
}
export interface QueryAllExecutableOrderResponseSDKType {
  executable_order: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetScheduleOrderRequest {
  orderId: bigint;
}
export interface QueryGetScheduleOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderRequest";
  value: Uint8Array;
}
export interface QueryGetScheduleOrderRequestAmino {
  order_id?: string;
}
export interface QueryGetScheduleOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetScheduleOrderRequest";
  value: QueryGetScheduleOrderRequestAmino;
}
export interface QueryGetScheduleOrderRequestSDKType {
  order_id: bigint;
}
export interface QueryGetScheduleOrderResponse {
  scheduleOrder: ScheduleOrder;
}
export interface QueryGetScheduleOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderResponse";
  value: Uint8Array;
}
export interface QueryGetScheduleOrderResponseAmino {
  schedule_order?: ScheduleOrderAmino;
}
export interface QueryGetScheduleOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetScheduleOrderResponse";
  value: QueryGetScheduleOrderResponseAmino;
}
export interface QueryGetScheduleOrderResponseSDKType {
  schedule_order: ScheduleOrderSDKType;
}
export interface QueryAllScheduleOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllScheduleOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderRequest";
  value: Uint8Array;
}
export interface QueryAllScheduleOrderRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllScheduleOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllScheduleOrderRequest";
  value: QueryAllScheduleOrderRequestAmino;
}
export interface QueryAllScheduleOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllScheduleOrderResponse {
  scheduleOrder: ScheduleOrder[];
  pagination?: PageResponse;
}
export interface QueryAllScheduleOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderResponse";
  value: Uint8Array;
}
export interface QueryAllScheduleOrderResponseAmino {
  schedule_order?: ScheduleOrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllScheduleOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllScheduleOrderResponse";
  value: QueryAllScheduleOrderResponseAmino;
}
export interface QueryAllScheduleOrderResponseSDKType {
  schedule_order: ScheduleOrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOraclePricePairRequest {
  assetId: string;
}
export interface QueryGetOraclePricePairRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairRequest";
  value: Uint8Array;
}
export interface QueryGetOraclePricePairRequestAmino {
  asset_id?: string;
}
export interface QueryGetOraclePricePairRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetOraclePricePairRequest";
  value: QueryGetOraclePricePairRequestAmino;
}
export interface QueryGetOraclePricePairRequestSDKType {
  asset_id: string;
}
export interface QueryGetOraclePricePairResponse {
  oraclePricePair: OraclePricePair;
}
export interface QueryGetOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairResponse";
  value: Uint8Array;
}
export interface QueryGetOraclePricePairResponseAmino {
  oracle_price_pair?: OraclePricePairAmino;
}
export interface QueryGetOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetOraclePricePairResponse";
  value: QueryGetOraclePricePairResponseAmino;
}
export interface QueryGetOraclePricePairResponseSDKType {
  oracle_price_pair: OraclePricePairSDKType;
}
export interface QueryAllOraclePricePairRequest {
  pagination?: PageRequest;
}
export interface QueryAllOraclePricePairRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairRequest";
  value: Uint8Array;
}
export interface QueryAllOraclePricePairRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllOraclePricePairRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllOraclePricePairRequest";
  value: QueryAllOraclePricePairRequestAmino;
}
export interface QueryAllOraclePricePairRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllOraclePricePairResponse {
  oraclePricePair: OraclePricePair[];
  pagination?: PageResponse;
}
export interface QueryAllOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairResponse";
  value: Uint8Array;
}
export interface QueryAllOraclePricePairResponseAmino {
  oracle_price_pair?: OraclePricePairAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllOraclePricePairResponse";
  value: QueryAllOraclePricePairResponseAmino;
}
export interface QueryAllOraclePricePairResponseSDKType {
  oracle_price_pair: OraclePricePairSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryVaultPauseModeRequest {}
export interface QueryVaultPauseModeRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeRequest";
  value: Uint8Array;
}
export interface QueryVaultPauseModeRequestAmino {}
export interface QueryVaultPauseModeRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryVaultPauseModeRequest";
  value: QueryVaultPauseModeRequestAmino;
}
export interface QueryVaultPauseModeRequestSDKType {}
export interface QueryVaultPauseModeResponse {
  paused: boolean;
}
export interface QueryVaultPauseModeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeResponse";
  value: Uint8Array;
}
export interface QueryVaultPauseModeResponseAmino {
  paused?: boolean;
}
export interface QueryVaultPauseModeResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryVaultPauseModeResponse";
  value: QueryVaultPauseModeResponseAmino;
}
export interface QueryVaultPauseModeResponseSDKType {
  paused: boolean;
}
export interface QueryGetPendingTokenIntroductionRequest {
  assetId: string;
  targetPoolId: bigint;
}
export interface QueryGetPendingTokenIntroductionRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionRequest";
  value: Uint8Array;
}
export interface QueryGetPendingTokenIntroductionRequestAmino {
  asset_id?: string;
  target_pool_id?: string;
}
export interface QueryGetPendingTokenIntroductionRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionRequest";
  value: QueryGetPendingTokenIntroductionRequestAmino;
}
export interface QueryGetPendingTokenIntroductionRequestSDKType {
  asset_id: string;
  target_pool_id: bigint;
}
export interface QueryGetPendingTokenIntroductionResponse {
  pendingTokenIntroduction: PendingTokenIntroduction;
}
export interface QueryGetPendingTokenIntroductionResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionResponse";
  value: Uint8Array;
}
export interface QueryGetPendingTokenIntroductionResponseAmino {
  pending_token_introduction?: PendingTokenIntroductionAmino;
}
export interface QueryGetPendingTokenIntroductionResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionResponse";
  value: QueryGetPendingTokenIntroductionResponseAmino;
}
export interface QueryGetPendingTokenIntroductionResponseSDKType {
  pending_token_introduction: PendingTokenIntroductionSDKType;
}
export interface QueryAllPendingTokenIntroductionRequest {
  pagination?: PageRequest;
}
export interface QueryAllPendingTokenIntroductionRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionRequest";
  value: Uint8Array;
}
export interface QueryAllPendingTokenIntroductionRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPendingTokenIntroductionRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionRequest";
  value: QueryAllPendingTokenIntroductionRequestAmino;
}
export interface QueryAllPendingTokenIntroductionRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPendingTokenIntroductionResponse {
  pendingTokenIntroduction: PendingTokenIntroduction[];
  pagination?: PageResponse;
}
export interface QueryAllPendingTokenIntroductionResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionResponse";
  value: Uint8Array;
}
export interface QueryAllPendingTokenIntroductionResponseAmino {
  pending_token_introduction?: PendingTokenIntroductionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPendingTokenIntroductionResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionResponse";
  value: QueryAllPendingTokenIntroductionResponseAmino;
}
export interface QueryAllPendingTokenIntroductionResponseSDKType {
  pending_token_introduction: PendingTokenIntroductionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryYammPoolIdRequest {
  assetId: string;
}
export interface QueryYammPoolIdRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryYammPoolIdRequest";
  value: Uint8Array;
}
export interface QueryYammPoolIdRequestAmino {
  asset_id?: string;
}
export interface QueryYammPoolIdRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryYammPoolIdRequest";
  value: QueryYammPoolIdRequestAmino;
}
export interface QueryYammPoolIdRequestSDKType {
  asset_id: string;
}
export interface QueryYammPoolIdResponse {
  poolId: bigint;
}
export interface QueryYammPoolIdResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryYammPoolIdResponse";
  value: Uint8Array;
}
export interface QueryYammPoolIdResponseAmino {
  pool_id?: string;
}
export interface QueryYammPoolIdResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryYammPoolIdResponse";
  value: QueryYammPoolIdResponseAmino;
}
export interface QueryYammPoolIdResponseSDKType {
  pool_id: bigint;
}
export interface QueryOrderStepBoundsRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
}
export interface QueryOrderStepBoundsRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsRequest";
  value: Uint8Array;
}
export interface QueryOrderStepBoundsRequestAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
}
export interface QueryOrderStepBoundsRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryOrderStepBoundsRequest";
  value: QueryOrderStepBoundsRequestAmino;
}
export interface QueryOrderStepBoundsRequestSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
}
export interface QueryOrderStepBoundsResponse {
  minStep: string;
  maxStep: string;
}
export interface QueryOrderStepBoundsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsResponse";
  value: Uint8Array;
}
export interface QueryOrderStepBoundsResponseAmino {
  min_step?: string;
  max_step?: string;
}
export interface QueryOrderStepBoundsResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryOrderStepBoundsResponse";
  value: QueryOrderStepBoundsResponseAmino;
}
export interface QueryOrderStepBoundsResponseSDKType {
  min_step: string;
  max_step: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pryzm.amm.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/pryzm.amm.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolTokenRequest(): QueryGetPoolTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenRequest",
  encode(message: QueryGetPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenRequest>): QueryGetPoolTokenRequest {
    const message = createBaseQueryGetPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetPoolTokenRequestAmino): QueryGetPoolTokenRequest {
    const message = createBaseQueryGetPoolTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetPoolTokenRequest): QueryGetPoolTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolTokenRequestAminoMsg): QueryGetPoolTokenRequest {
    return QueryGetPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolTokenRequestProtoMsg): QueryGetPoolTokenRequest {
    return QueryGetPoolTokenRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolTokenRequest): Uint8Array {
    return QueryGetPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolTokenRequest): QueryGetPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenRequest",
      value: QueryGetPoolTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolTokenResponse(): QueryGetPoolTokenResponse {
  return {
    poolToken: PoolToken.fromPartial({})
  };
}
export const QueryGetPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenResponse",
  encode(message: QueryGetPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolToken !== undefined) {
      PoolToken.encode(message.poolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken = PoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolTokenResponse {
    return {
      poolToken: isSet(object.poolToken) ? PoolToken.fromJSON(object.poolToken) : undefined
    };
  },
  toJSON(message: QueryGetPoolTokenResponse): unknown {
    const obj: any = {};
    message.poolToken !== undefined && (obj.poolToken = message.poolToken ? PoolToken.toJSON(message.poolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenResponse>): QueryGetPoolTokenResponse {
    const message = createBaseQueryGetPoolTokenResponse();
    message.poolToken = object.poolToken !== undefined && object.poolToken !== null ? PoolToken.fromPartial(object.poolToken) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolTokenResponseAmino): QueryGetPoolTokenResponse {
    const message = createBaseQueryGetPoolTokenResponse();
    if (object.pool_token !== undefined && object.pool_token !== null) {
      message.poolToken = PoolToken.fromAmino(object.pool_token);
    }
    return message;
  },
  toAmino(message: QueryGetPoolTokenResponse): QueryGetPoolTokenResponseAmino {
    const obj: any = {};
    obj.pool_token = message.poolToken ? PoolToken.toAmino(message.poolToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolTokenResponseAminoMsg): QueryGetPoolTokenResponse {
    return QueryGetPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolTokenResponseProtoMsg): QueryGetPoolTokenResponse {
    return QueryGetPoolTokenResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolTokenResponse): Uint8Array {
    return QueryGetPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolTokenResponse): QueryGetPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenResponse",
      value: QueryGetPoolTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolTokenRequest(): QueryAllPoolTokenRequest {
  return {
    pagination: undefined,
    poolId: ""
  };
}
export const QueryAllPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenRequest",
  encode(message: QueryAllPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: QueryAllPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenRequest>): QueryAllPoolTokenRequest {
    const message = createBaseQueryAllPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: QueryAllPoolTokenRequestAmino): QueryAllPoolTokenRequest {
    const message = createBaseQueryAllPoolTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: QueryAllPoolTokenRequest): QueryAllPoolTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenRequestAminoMsg): QueryAllPoolTokenRequest {
    return QueryAllPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenRequestProtoMsg): QueryAllPoolTokenRequest {
    return QueryAllPoolTokenRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolTokenRequest): Uint8Array {
    return QueryAllPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenRequest): QueryAllPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenRequest",
      value: QueryAllPoolTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolTokenResponse(): QueryAllPoolTokenResponse {
  return {
    poolToken: [],
    pagination: undefined
  };
}
export const QueryAllPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenResponse",
  encode(message: QueryAllPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolToken) {
      PoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken.push(PoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenResponse {
    return {
      poolToken: Array.isArray(object?.poolToken) ? object.poolToken.map((e: any) => PoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.poolToken) {
      obj.poolToken = message.poolToken.map(e => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenResponse>): QueryAllPoolTokenResponse {
    const message = createBaseQueryAllPoolTokenResponse();
    message.poolToken = object.poolToken?.map(e => PoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolTokenResponseAmino): QueryAllPoolTokenResponse {
    const message = createBaseQueryAllPoolTokenResponse();
    message.poolToken = object.pool_token?.map(e => PoolToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolTokenResponse): QueryAllPoolTokenResponseAmino {
    const obj: any = {};
    if (message.poolToken) {
      obj.pool_token = message.poolToken.map(e => e ? PoolToken.toAmino(e) : undefined);
    } else {
      obj.pool_token = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenResponseAminoMsg): QueryAllPoolTokenResponse {
    return QueryAllPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenResponseProtoMsg): QueryAllPoolTokenResponse {
    return QueryAllPoolTokenResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolTokenResponse): Uint8Array {
    return QueryAllPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenResponse): QueryAllPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenResponse",
      value: QueryAllPoolTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolTokenWeightRequest(): QueryAllPoolTokenWeightRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryAllPoolTokenWeightRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightRequest",
  encode(message: QueryAllPoolTokenWeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolTokenWeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenWeightRequest();
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
  fromJSON(object: any): QueryAllPoolTokenWeightRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryAllPoolTokenWeightRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenWeightRequest>): QueryAllPoolTokenWeightRequest {
    const message = createBaseQueryAllPoolTokenWeightRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAllPoolTokenWeightRequestAmino): QueryAllPoolTokenWeightRequest {
    const message = createBaseQueryAllPoolTokenWeightRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryAllPoolTokenWeightRequest): QueryAllPoolTokenWeightRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenWeightRequestAminoMsg): QueryAllPoolTokenWeightRequest {
    return QueryAllPoolTokenWeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenWeightRequestProtoMsg): QueryAllPoolTokenWeightRequest {
    return QueryAllPoolTokenWeightRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolTokenWeightRequest): Uint8Array {
    return QueryAllPoolTokenWeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenWeightRequest): QueryAllPoolTokenWeightRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightRequest",
      value: QueryAllPoolTokenWeightRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolTokenWeightResponse(): QueryAllPoolTokenWeightResponse {
  return {
    tokenWeight: []
  };
}
export const QueryAllPoolTokenWeightResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightResponse",
  encode(message: QueryAllPoolTokenWeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenWeight) {
      TokenWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolTokenWeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenWeight.push(TokenWeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenWeightResponse {
    return {
      tokenWeight: Array.isArray(object?.tokenWeight) ? object.tokenWeight.map((e: any) => TokenWeight.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAllPoolTokenWeightResponse): unknown {
    const obj: any = {};
    if (message.tokenWeight) {
      obj.tokenWeight = message.tokenWeight.map(e => e ? TokenWeight.toJSON(e) : undefined);
    } else {
      obj.tokenWeight = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenWeightResponse>): QueryAllPoolTokenWeightResponse {
    const message = createBaseQueryAllPoolTokenWeightResponse();
    message.tokenWeight = object.tokenWeight?.map(e => TokenWeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllPoolTokenWeightResponseAmino): QueryAllPoolTokenWeightResponse {
    const message = createBaseQueryAllPoolTokenWeightResponse();
    message.tokenWeight = object.token_weight?.map(e => TokenWeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllPoolTokenWeightResponse): QueryAllPoolTokenWeightResponseAmino {
    const obj: any = {};
    if (message.tokenWeight) {
      obj.token_weight = message.tokenWeight.map(e => e ? TokenWeight.toAmino(e) : undefined);
    } else {
      obj.token_weight = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenWeightResponseAminoMsg): QueryAllPoolTokenWeightResponse {
    return QueryAllPoolTokenWeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenWeightResponseProtoMsg): QueryAllPoolTokenWeightResponse {
    return QueryAllPoolTokenWeightResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolTokenWeightResponse): Uint8Array {
    return QueryAllPoolTokenWeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenWeightResponse): QueryAllPoolTokenWeightResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightResponse",
      value: QueryAllPoolTokenWeightResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolTokenWeightRequest(): QueryGetPoolTokenWeightRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetPoolTokenWeightRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightRequest",
  encode(message: QueryGetPoolTokenWeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolTokenWeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenWeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolTokenWeightRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetPoolTokenWeightRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenWeightRequest>): QueryGetPoolTokenWeightRequest {
    const message = createBaseQueryGetPoolTokenWeightRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetPoolTokenWeightRequestAmino): QueryGetPoolTokenWeightRequest {
    const message = createBaseQueryGetPoolTokenWeightRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetPoolTokenWeightRequest): QueryGetPoolTokenWeightRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolTokenWeightRequestAminoMsg): QueryGetPoolTokenWeightRequest {
    return QueryGetPoolTokenWeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolTokenWeightRequestProtoMsg): QueryGetPoolTokenWeightRequest {
    return QueryGetPoolTokenWeightRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolTokenWeightRequest): Uint8Array {
    return QueryGetPoolTokenWeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolTokenWeightRequest): QueryGetPoolTokenWeightRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightRequest",
      value: QueryGetPoolTokenWeightRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolTokenWeightResponse(): QueryGetPoolTokenWeightResponse {
  return {
    tokenWeight: TokenWeight.fromPartial({})
  };
}
export const QueryGetPoolTokenWeightResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightResponse",
  encode(message: QueryGetPoolTokenWeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenWeight !== undefined) {
      TokenWeight.encode(message.tokenWeight, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolTokenWeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenWeight = TokenWeight.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolTokenWeightResponse {
    return {
      tokenWeight: isSet(object.tokenWeight) ? TokenWeight.fromJSON(object.tokenWeight) : undefined
    };
  },
  toJSON(message: QueryGetPoolTokenWeightResponse): unknown {
    const obj: any = {};
    message.tokenWeight !== undefined && (obj.tokenWeight = message.tokenWeight ? TokenWeight.toJSON(message.tokenWeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenWeightResponse>): QueryGetPoolTokenWeightResponse {
    const message = createBaseQueryGetPoolTokenWeightResponse();
    message.tokenWeight = object.tokenWeight !== undefined && object.tokenWeight !== null ? TokenWeight.fromPartial(object.tokenWeight) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolTokenWeightResponseAmino): QueryGetPoolTokenWeightResponse {
    const message = createBaseQueryGetPoolTokenWeightResponse();
    if (object.token_weight !== undefined && object.token_weight !== null) {
      message.tokenWeight = TokenWeight.fromAmino(object.token_weight);
    }
    return message;
  },
  toAmino(message: QueryGetPoolTokenWeightResponse): QueryGetPoolTokenWeightResponseAmino {
    const obj: any = {};
    obj.token_weight = message.tokenWeight ? TokenWeight.toAmino(message.tokenWeight) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolTokenWeightResponseAminoMsg): QueryGetPoolTokenWeightResponse {
    return QueryGetPoolTokenWeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolTokenWeightResponseProtoMsg): QueryGetPoolTokenWeightResponse {
    return QueryGetPoolTokenWeightResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolTokenWeightResponse): Uint8Array {
    return QueryGetPoolTokenWeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolTokenWeightResponse): QueryGetPoolTokenWeightResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightResponse",
      value: QueryGetPoolTokenWeightResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolRequest",
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolResponse",
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolRequest",
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolResponse",
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetWeightedTokenRequest(): QueryGetWeightedTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetWeightedTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenRequest",
  encode(message: QueryGetWeightedTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetWeightedTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightedTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetWeightedTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetWeightedTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightedTokenRequest>): QueryGetWeightedTokenRequest {
    const message = createBaseQueryGetWeightedTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetWeightedTokenRequestAmino): QueryGetWeightedTokenRequest {
    const message = createBaseQueryGetWeightedTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetWeightedTokenRequest): QueryGetWeightedTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetWeightedTokenRequestAminoMsg): QueryGetWeightedTokenRequest {
    return QueryGetWeightedTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWeightedTokenRequestProtoMsg): QueryGetWeightedTokenRequest {
    return QueryGetWeightedTokenRequest.decode(message.value);
  },
  toProto(message: QueryGetWeightedTokenRequest): Uint8Array {
    return QueryGetWeightedTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWeightedTokenRequest): QueryGetWeightedTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenRequest",
      value: QueryGetWeightedTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetWeightedTokenResponse(): QueryGetWeightedTokenResponse {
  return {
    weightedToken: WeightedToken.fromPartial({})
  };
}
export const QueryGetWeightedTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenResponse",
  encode(message: QueryGetWeightedTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weightedToken !== undefined) {
      WeightedToken.encode(message.weightedToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetWeightedTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightedTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightedToken = WeightedToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetWeightedTokenResponse {
    return {
      weightedToken: isSet(object.weightedToken) ? WeightedToken.fromJSON(object.weightedToken) : undefined
    };
  },
  toJSON(message: QueryGetWeightedTokenResponse): unknown {
    const obj: any = {};
    message.weightedToken !== undefined && (obj.weightedToken = message.weightedToken ? WeightedToken.toJSON(message.weightedToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightedTokenResponse>): QueryGetWeightedTokenResponse {
    const message = createBaseQueryGetWeightedTokenResponse();
    message.weightedToken = object.weightedToken !== undefined && object.weightedToken !== null ? WeightedToken.fromPartial(object.weightedToken) : undefined;
    return message;
  },
  fromAmino(object: QueryGetWeightedTokenResponseAmino): QueryGetWeightedTokenResponse {
    const message = createBaseQueryGetWeightedTokenResponse();
    if (object.weighted_token !== undefined && object.weighted_token !== null) {
      message.weightedToken = WeightedToken.fromAmino(object.weighted_token);
    }
    return message;
  },
  toAmino(message: QueryGetWeightedTokenResponse): QueryGetWeightedTokenResponseAmino {
    const obj: any = {};
    obj.weighted_token = message.weightedToken ? WeightedToken.toAmino(message.weightedToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWeightedTokenResponseAminoMsg): QueryGetWeightedTokenResponse {
    return QueryGetWeightedTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWeightedTokenResponseProtoMsg): QueryGetWeightedTokenResponse {
    return QueryGetWeightedTokenResponse.decode(message.value);
  },
  toProto(message: QueryGetWeightedTokenResponse): Uint8Array {
    return QueryGetWeightedTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWeightedTokenResponse): QueryGetWeightedTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenResponse",
      value: QueryGetWeightedTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllWeightedTokenRequest(): QueryAllWeightedTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWeightedTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenRequest",
  encode(message: QueryAllWeightedTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWeightedTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightedTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightedTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightedTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightedTokenRequest>): QueryAllWeightedTokenRequest {
    const message = createBaseQueryAllWeightedTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWeightedTokenRequestAmino): QueryAllWeightedTokenRequest {
    const message = createBaseQueryAllWeightedTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWeightedTokenRequest): QueryAllWeightedTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWeightedTokenRequestAminoMsg): QueryAllWeightedTokenRequest {
    return QueryAllWeightedTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWeightedTokenRequestProtoMsg): QueryAllWeightedTokenRequest {
    return QueryAllWeightedTokenRequest.decode(message.value);
  },
  toProto(message: QueryAllWeightedTokenRequest): Uint8Array {
    return QueryAllWeightedTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWeightedTokenRequest): QueryAllWeightedTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenRequest",
      value: QueryAllWeightedTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllWeightedTokenResponse(): QueryAllWeightedTokenResponse {
  return {
    weightedToken: [],
    pagination: undefined
  };
}
export const QueryAllWeightedTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenResponse",
  encode(message: QueryAllWeightedTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.weightedToken) {
      WeightedToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWeightedTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightedTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightedToken.push(WeightedToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightedTokenResponse {
    return {
      weightedToken: Array.isArray(object?.weightedToken) ? object.weightedToken.map((e: any) => WeightedToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightedTokenResponse): unknown {
    const obj: any = {};
    if (message.weightedToken) {
      obj.weightedToken = message.weightedToken.map(e => e ? WeightedToken.toJSON(e) : undefined);
    } else {
      obj.weightedToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightedTokenResponse>): QueryAllWeightedTokenResponse {
    const message = createBaseQueryAllWeightedTokenResponse();
    message.weightedToken = object.weightedToken?.map(e => WeightedToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWeightedTokenResponseAmino): QueryAllWeightedTokenResponse {
    const message = createBaseQueryAllWeightedTokenResponse();
    message.weightedToken = object.weighted_token?.map(e => WeightedToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWeightedTokenResponse): QueryAllWeightedTokenResponseAmino {
    const obj: any = {};
    if (message.weightedToken) {
      obj.weighted_token = message.weightedToken.map(e => e ? WeightedToken.toAmino(e) : undefined);
    } else {
      obj.weighted_token = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWeightedTokenResponseAminoMsg): QueryAllWeightedTokenResponse {
    return QueryAllWeightedTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWeightedTokenResponseProtoMsg): QueryAllWeightedTokenResponse {
    return QueryAllWeightedTokenResponse.decode(message.value);
  },
  toProto(message: QueryAllWeightedTokenResponse): Uint8Array {
    return QueryAllWeightedTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWeightedTokenResponse): QueryAllWeightedTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenResponse",
      value: QueryAllWeightedTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetWeightUpdateTimingRequest(): QueryGetWeightUpdateTimingRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryGetWeightUpdateTimingRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingRequest",
  encode(message: QueryGetWeightUpdateTimingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetWeightUpdateTimingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightUpdateTimingRequest();
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
  fromJSON(object: any): QueryGetWeightUpdateTimingRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetWeightUpdateTimingRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightUpdateTimingRequest>): QueryGetWeightUpdateTimingRequest {
    const message = createBaseQueryGetWeightUpdateTimingRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetWeightUpdateTimingRequestAmino): QueryGetWeightUpdateTimingRequest {
    const message = createBaseQueryGetWeightUpdateTimingRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetWeightUpdateTimingRequest): QueryGetWeightUpdateTimingRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWeightUpdateTimingRequestAminoMsg): QueryGetWeightUpdateTimingRequest {
    return QueryGetWeightUpdateTimingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWeightUpdateTimingRequestProtoMsg): QueryGetWeightUpdateTimingRequest {
    return QueryGetWeightUpdateTimingRequest.decode(message.value);
  },
  toProto(message: QueryGetWeightUpdateTimingRequest): Uint8Array {
    return QueryGetWeightUpdateTimingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWeightUpdateTimingRequest): QueryGetWeightUpdateTimingRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingRequest",
      value: QueryGetWeightUpdateTimingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetWeightUpdateTimingResponse(): QueryGetWeightUpdateTimingResponse {
  return {
    weightUpdateTiming: WeightUpdateTiming.fromPartial({})
  };
}
export const QueryGetWeightUpdateTimingResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingResponse",
  encode(message: QueryGetWeightUpdateTimingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetWeightUpdateTimingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightUpdateTimingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightUpdateTiming = WeightUpdateTiming.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetWeightUpdateTimingResponse {
    return {
      weightUpdateTiming: isSet(object.weightUpdateTiming) ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming) : undefined
    };
  },
  toJSON(message: QueryGetWeightUpdateTimingResponse): unknown {
    const obj: any = {};
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming ? WeightUpdateTiming.toJSON(message.weightUpdateTiming) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightUpdateTimingResponse>): QueryGetWeightUpdateTimingResponse {
    const message = createBaseQueryGetWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming) : undefined;
    return message;
  },
  fromAmino(object: QueryGetWeightUpdateTimingResponseAmino): QueryGetWeightUpdateTimingResponse {
    const message = createBaseQueryGetWeightUpdateTimingResponse();
    if (object.weight_update_timing !== undefined && object.weight_update_timing !== null) {
      message.weightUpdateTiming = WeightUpdateTiming.fromAmino(object.weight_update_timing);
    }
    return message;
  },
  toAmino(message: QueryGetWeightUpdateTimingResponse): QueryGetWeightUpdateTimingResponseAmino {
    const obj: any = {};
    obj.weight_update_timing = message.weightUpdateTiming ? WeightUpdateTiming.toAmino(message.weightUpdateTiming) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWeightUpdateTimingResponseAminoMsg): QueryGetWeightUpdateTimingResponse {
    return QueryGetWeightUpdateTimingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWeightUpdateTimingResponseProtoMsg): QueryGetWeightUpdateTimingResponse {
    return QueryGetWeightUpdateTimingResponse.decode(message.value);
  },
  toProto(message: QueryGetWeightUpdateTimingResponse): Uint8Array {
    return QueryGetWeightUpdateTimingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWeightUpdateTimingResponse): QueryGetWeightUpdateTimingResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingResponse",
      value: QueryGetWeightUpdateTimingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllWeightUpdateTimingRequest(): QueryAllWeightUpdateTimingRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWeightUpdateTimingRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingRequest",
  encode(message: QueryAllWeightUpdateTimingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWeightUpdateTimingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightUpdateTimingRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightUpdateTimingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightUpdateTimingRequest>): QueryAllWeightUpdateTimingRequest {
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWeightUpdateTimingRequestAmino): QueryAllWeightUpdateTimingRequest {
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWeightUpdateTimingRequest): QueryAllWeightUpdateTimingRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWeightUpdateTimingRequestAminoMsg): QueryAllWeightUpdateTimingRequest {
    return QueryAllWeightUpdateTimingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWeightUpdateTimingRequestProtoMsg): QueryAllWeightUpdateTimingRequest {
    return QueryAllWeightUpdateTimingRequest.decode(message.value);
  },
  toProto(message: QueryAllWeightUpdateTimingRequest): Uint8Array {
    return QueryAllWeightUpdateTimingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWeightUpdateTimingRequest): QueryAllWeightUpdateTimingRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingRequest",
      value: QueryAllWeightUpdateTimingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllWeightUpdateTimingResponse(): QueryAllWeightUpdateTimingResponse {
  return {
    weightUpdateTiming: [],
    pagination: undefined
  };
}
export const QueryAllWeightUpdateTimingResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingResponse",
  encode(message: QueryAllWeightUpdateTimingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.weightUpdateTiming) {
      WeightUpdateTiming.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWeightUpdateTimingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightUpdateTiming.push(WeightUpdateTiming.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightUpdateTimingResponse {
    return {
      weightUpdateTiming: Array.isArray(object?.weightUpdateTiming) ? object.weightUpdateTiming.map((e: any) => WeightUpdateTiming.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightUpdateTimingResponse): unknown {
    const obj: any = {};
    if (message.weightUpdateTiming) {
      obj.weightUpdateTiming = message.weightUpdateTiming.map(e => e ? WeightUpdateTiming.toJSON(e) : undefined);
    } else {
      obj.weightUpdateTiming = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightUpdateTimingResponse>): QueryAllWeightUpdateTimingResponse {
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weightUpdateTiming?.map(e => WeightUpdateTiming.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWeightUpdateTimingResponseAmino): QueryAllWeightUpdateTimingResponse {
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weight_update_timing?.map(e => WeightUpdateTiming.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWeightUpdateTimingResponse): QueryAllWeightUpdateTimingResponseAmino {
    const obj: any = {};
    if (message.weightUpdateTiming) {
      obj.weight_update_timing = message.weightUpdateTiming.map(e => e ? WeightUpdateTiming.toAmino(e) : undefined);
    } else {
      obj.weight_update_timing = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWeightUpdateTimingResponseAminoMsg): QueryAllWeightUpdateTimingResponse {
    return QueryAllWeightUpdateTimingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWeightUpdateTimingResponseProtoMsg): QueryAllWeightUpdateTimingResponse {
    return QueryAllWeightUpdateTimingResponse.decode(message.value);
  },
  toProto(message: QueryAllWeightUpdateTimingResponse): Uint8Array {
    return QueryAllWeightUpdateTimingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWeightUpdateTimingResponse): QueryAllWeightUpdateTimingResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingResponse",
      value: QueryAllWeightUpdateTimingResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateSingleSwapRequest(): QuerySimulateSingleSwapRequest {
  return {
    swap: Swap.fromPartial({})
  };
}
export const QuerySimulateSingleSwapRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapRequest",
  encode(message: QuerySimulateSingleSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateSingleSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateSingleSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateSingleSwapRequest {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined
    };
  },
  toJSON(message: QuerySimulateSingleSwapRequest): unknown {
    const obj: any = {};
    message.swap !== undefined && (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateSingleSwapRequest>): QuerySimulateSingleSwapRequest {
    const message = createBaseQuerySimulateSingleSwapRequest();
    message.swap = object.swap !== undefined && object.swap !== null ? Swap.fromPartial(object.swap) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateSingleSwapRequestAmino): QuerySimulateSingleSwapRequest {
    const message = createBaseQuerySimulateSingleSwapRequest();
    if (object.swap !== undefined && object.swap !== null) {
      message.swap = Swap.fromAmino(object.swap);
    }
    return message;
  },
  toAmino(message: QuerySimulateSingleSwapRequest): QuerySimulateSingleSwapRequestAmino {
    const obj: any = {};
    obj.swap = message.swap ? Swap.toAmino(message.swap) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateSingleSwapRequestAminoMsg): QuerySimulateSingleSwapRequest {
    return QuerySimulateSingleSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateSingleSwapRequestProtoMsg): QuerySimulateSingleSwapRequest {
    return QuerySimulateSingleSwapRequest.decode(message.value);
  },
  toProto(message: QuerySimulateSingleSwapRequest): Uint8Array {
    return QuerySimulateSingleSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateSingleSwapRequest): QuerySimulateSingleSwapRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapRequest",
      value: QuerySimulateSingleSwapRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateSingleSwapResponse(): QuerySimulateSingleSwapResponse {
  return {
    amountOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const QuerySimulateSingleSwapResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapResponse",
  encode(message: QuerySimulateSingleSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateSingleSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateSingleSwapResponse();
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
  fromJSON(object: any): QuerySimulateSingleSwapResponse {
    return {
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateSingleSwapResponse): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateSingleSwapResponse>): QuerySimulateSingleSwapResponse {
    const message = createBaseQuerySimulateSingleSwapResponse();
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateSingleSwapResponseAmino): QuerySimulateSingleSwapResponse {
    const message = createBaseQuerySimulateSingleSwapResponse();
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
  toAmino(message: QuerySimulateSingleSwapResponse): QuerySimulateSingleSwapResponseAmino {
    const obj: any = {};
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateSingleSwapResponseAminoMsg): QuerySimulateSingleSwapResponse {
    return QuerySimulateSingleSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateSingleSwapResponseProtoMsg): QuerySimulateSingleSwapResponse {
    return QuerySimulateSingleSwapResponse.decode(message.value);
  },
  toProto(message: QuerySimulateSingleSwapResponse): Uint8Array {
    return QuerySimulateSingleSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateSingleSwapResponse): QuerySimulateSingleSwapResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapResponse",
      value: QuerySimulateSingleSwapResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateInitializePoolRequest(): QuerySimulateInitializePoolRequest {
  return {
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const QuerySimulateInitializePoolRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolRequest",
  encode(message: QuerySimulateInitializePoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateInitializePoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateInitializePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateInitializePoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateInitializePoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateInitializePoolRequest>): QuerySimulateInitializePoolRequest {
    const message = createBaseQuerySimulateInitializePoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateInitializePoolRequestAmino): QuerySimulateInitializePoolRequest {
    const message = createBaseQuerySimulateInitializePoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateInitializePoolRequest): QuerySimulateInitializePoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySimulateInitializePoolRequestAminoMsg): QuerySimulateInitializePoolRequest {
    return QuerySimulateInitializePoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateInitializePoolRequestProtoMsg): QuerySimulateInitializePoolRequest {
    return QuerySimulateInitializePoolRequest.decode(message.value);
  },
  toProto(message: QuerySimulateInitializePoolRequest): Uint8Array {
    return QuerySimulateInitializePoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateInitializePoolRequest): QuerySimulateInitializePoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolRequest",
      value: QuerySimulateInitializePoolRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateInitializePoolResponse(): QuerySimulateInitializePoolResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: []
  };
}
export const QuerySimulateInitializePoolResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolResponse",
  encode(message: QuerySimulateInitializePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateInitializePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateInitializePoolResponse();
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
  fromJSON(object: any): QuerySimulateInitializePoolResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateInitializePoolResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateInitializePoolResponse>): QuerySimulateInitializePoolResponse {
    const message = createBaseQuerySimulateInitializePoolResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateInitializePoolResponseAmino): QuerySimulateInitializePoolResponse {
    const message = createBaseQuerySimulateInitializePoolResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateInitializePoolResponse): QuerySimulateInitializePoolResponseAmino {
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
  fromAminoMsg(object: QuerySimulateInitializePoolResponseAminoMsg): QuerySimulateInitializePoolResponse {
    return QuerySimulateInitializePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateInitializePoolResponseProtoMsg): QuerySimulateInitializePoolResponse {
    return QuerySimulateInitializePoolResponse.decode(message.value);
  },
  toProto(message: QuerySimulateInitializePoolResponse): Uint8Array {
    return QuerySimulateInitializePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateInitializePoolResponse): QuerySimulateInitializePoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolResponse",
      value: QuerySimulateInitializePoolResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateJoinAllTokensExactLptRequest(): QuerySimulateJoinAllTokensExactLptRequest {
  return {
    poolId: BigInt(0),
    lptOut: ""
  };
}
export const QuerySimulateJoinAllTokensExactLptRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptRequest",
  encode(message: QuerySimulateJoinAllTokensExactLptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(18).string(message.lptOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateJoinAllTokensExactLptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinAllTokensExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : ""
    };
  },
  toJSON(message: QuerySimulateJoinAllTokensExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinAllTokensExactLptRequest>): QuerySimulateJoinAllTokensExactLptRequest {
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateJoinAllTokensExactLptRequestAmino): QuerySimulateJoinAllTokensExactLptRequest {
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = object.lpt_out;
    }
    return message;
  },
  toAmino(message: QuerySimulateJoinAllTokensExactLptRequest): QuerySimulateJoinAllTokensExactLptRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out = message.lptOut;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateJoinAllTokensExactLptRequestAminoMsg): QuerySimulateJoinAllTokensExactLptRequest {
    return QuerySimulateJoinAllTokensExactLptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinAllTokensExactLptRequestProtoMsg): QuerySimulateJoinAllTokensExactLptRequest {
    return QuerySimulateJoinAllTokensExactLptRequest.decode(message.value);
  },
  toProto(message: QuerySimulateJoinAllTokensExactLptRequest): Uint8Array {
    return QuerySimulateJoinAllTokensExactLptRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinAllTokensExactLptRequest): QuerySimulateJoinAllTokensExactLptRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptRequest",
      value: QuerySimulateJoinAllTokensExactLptRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateJoinAllTokensExactLptResponse(): QuerySimulateJoinAllTokensExactLptResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: []
  };
}
export const QuerySimulateJoinAllTokensExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptResponse",
  encode(message: QuerySimulateJoinAllTokensExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateJoinAllTokensExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
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
  fromJSON(object: any): QuerySimulateJoinAllTokensExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinAllTokensExactLptResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateJoinAllTokensExactLptResponse>): QuerySimulateJoinAllTokensExactLptResponse {
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateJoinAllTokensExactLptResponseAmino): QuerySimulateJoinAllTokensExactLptResponse {
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateJoinAllTokensExactLptResponse): QuerySimulateJoinAllTokensExactLptResponseAmino {
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
  fromAminoMsg(object: QuerySimulateJoinAllTokensExactLptResponseAminoMsg): QuerySimulateJoinAllTokensExactLptResponse {
    return QuerySimulateJoinAllTokensExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinAllTokensExactLptResponseProtoMsg): QuerySimulateJoinAllTokensExactLptResponse {
    return QuerySimulateJoinAllTokensExactLptResponse.decode(message.value);
  },
  toProto(message: QuerySimulateJoinAllTokensExactLptResponse): Uint8Array {
    return QuerySimulateJoinAllTokensExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinAllTokensExactLptResponse): QuerySimulateJoinAllTokensExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptResponse",
      value: QuerySimulateJoinAllTokensExactLptResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateJoinExactTokensRequest(): QuerySimulateJoinExactTokensRequest {
  return {
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const QuerySimulateJoinExactTokensRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensRequest",
  encode(message: QuerySimulateJoinExactTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateJoinExactTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinExactTokensRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinExactTokensRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinExactTokensRequest>): QuerySimulateJoinExactTokensRequest {
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateJoinExactTokensRequestAmino): QuerySimulateJoinExactTokensRequest {
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateJoinExactTokensRequest): QuerySimulateJoinExactTokensRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySimulateJoinExactTokensRequestAminoMsg): QuerySimulateJoinExactTokensRequest {
    return QuerySimulateJoinExactTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinExactTokensRequestProtoMsg): QuerySimulateJoinExactTokensRequest {
    return QuerySimulateJoinExactTokensRequest.decode(message.value);
  },
  toProto(message: QuerySimulateJoinExactTokensRequest): Uint8Array {
    return QuerySimulateJoinExactTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinExactTokensRequest): QuerySimulateJoinExactTokensRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensRequest",
      value: QuerySimulateJoinExactTokensRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateJoinExactTokensResponse(): QuerySimulateJoinExactTokensResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: [],
    swapFee: []
  };
}
export const QuerySimulateJoinExactTokensResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensResponse",
  encode(message: QuerySimulateJoinExactTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateJoinExactTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinExactTokensResponse();
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
  fromJSON(object: any): QuerySimulateJoinExactTokensResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinExactTokensResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateJoinExactTokensResponse>): QuerySimulateJoinExactTokensResponse {
    const message = createBaseQuerySimulateJoinExactTokensResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateJoinExactTokensResponseAmino): QuerySimulateJoinExactTokensResponse {
    const message = createBaseQuerySimulateJoinExactTokensResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateJoinExactTokensResponse): QuerySimulateJoinExactTokensResponseAmino {
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
  fromAminoMsg(object: QuerySimulateJoinExactTokensResponseAminoMsg): QuerySimulateJoinExactTokensResponse {
    return QuerySimulateJoinExactTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinExactTokensResponseProtoMsg): QuerySimulateJoinExactTokensResponse {
    return QuerySimulateJoinExactTokensResponse.decode(message.value);
  },
  toProto(message: QuerySimulateJoinExactTokensResponse): Uint8Array {
    return QuerySimulateJoinExactTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinExactTokensResponse): QuerySimulateJoinExactTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensResponse",
      value: QuerySimulateJoinExactTokensResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateZeroImpactJoinYammRequest(): QuerySimulateZeroImpactJoinYammRequest {
  return {
    cAmountIn: Coin.fromPartial({})
  };
}
export const QuerySimulateZeroImpactJoinYammRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammRequest",
  encode(message: QuerySimulateZeroImpactJoinYammRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmountIn !== undefined) {
      Coin.encode(message.cAmountIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateZeroImpactJoinYammRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateZeroImpactJoinYammRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmountIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateZeroImpactJoinYammRequest {
    return {
      cAmountIn: isSet(object.cAmountIn) ? Coin.fromJSON(object.cAmountIn) : undefined
    };
  },
  toJSON(message: QuerySimulateZeroImpactJoinYammRequest): unknown {
    const obj: any = {};
    message.cAmountIn !== undefined && (obj.cAmountIn = message.cAmountIn ? Coin.toJSON(message.cAmountIn) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateZeroImpactJoinYammRequest>): QuerySimulateZeroImpactJoinYammRequest {
    const message = createBaseQuerySimulateZeroImpactJoinYammRequest();
    message.cAmountIn = object.cAmountIn !== undefined && object.cAmountIn !== null ? Coin.fromPartial(object.cAmountIn) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateZeroImpactJoinYammRequestAmino): QuerySimulateZeroImpactJoinYammRequest {
    const message = createBaseQuerySimulateZeroImpactJoinYammRequest();
    if (object.c_amount_in !== undefined && object.c_amount_in !== null) {
      message.cAmountIn = Coin.fromAmino(object.c_amount_in);
    }
    return message;
  },
  toAmino(message: QuerySimulateZeroImpactJoinYammRequest): QuerySimulateZeroImpactJoinYammRequestAmino {
    const obj: any = {};
    obj.c_amount_in = message.cAmountIn ? Coin.toAmino(message.cAmountIn) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateZeroImpactJoinYammRequestAminoMsg): QuerySimulateZeroImpactJoinYammRequest {
    return QuerySimulateZeroImpactJoinYammRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateZeroImpactJoinYammRequestProtoMsg): QuerySimulateZeroImpactJoinYammRequest {
    return QuerySimulateZeroImpactJoinYammRequest.decode(message.value);
  },
  toProto(message: QuerySimulateZeroImpactJoinYammRequest): Uint8Array {
    return QuerySimulateZeroImpactJoinYammRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateZeroImpactJoinYammRequest): QuerySimulateZeroImpactJoinYammRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammRequest",
      value: QuerySimulateZeroImpactJoinYammRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateZeroImpactJoinYammResponse(): QuerySimulateZeroImpactJoinYammResponse {
  return {
    lptOut: Coin.fromPartial({}),
    yOut: [],
    refractFee: Coin.fromPartial({}),
    joinProtocolFee: [],
    swapFee: []
  };
}
export const QuerySimulateZeroImpactJoinYammResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammResponse",
  encode(message: QuerySimulateZeroImpactJoinYammResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateZeroImpactJoinYammResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateZeroImpactJoinYammResponse();
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
  fromJSON(object: any): QuerySimulateZeroImpactJoinYammResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      yOut: Array.isArray(object?.yOut) ? object.yOut.map((e: any) => Coin.fromJSON(e)) : [],
      refractFee: isSet(object.refractFee) ? Coin.fromJSON(object.refractFee) : undefined,
      joinProtocolFee: Array.isArray(object?.joinProtocolFee) ? object.joinProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateZeroImpactJoinYammResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateZeroImpactJoinYammResponse>): QuerySimulateZeroImpactJoinYammResponse {
    const message = createBaseQuerySimulateZeroImpactJoinYammResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.yOut = object.yOut?.map(e => Coin.fromPartial(e)) || [];
    message.refractFee = object.refractFee !== undefined && object.refractFee !== null ? Coin.fromPartial(object.refractFee) : undefined;
    message.joinProtocolFee = object.joinProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateZeroImpactJoinYammResponseAmino): QuerySimulateZeroImpactJoinYammResponse {
    const message = createBaseQuerySimulateZeroImpactJoinYammResponse();
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
  toAmino(message: QuerySimulateZeroImpactJoinYammResponse): QuerySimulateZeroImpactJoinYammResponseAmino {
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
  fromAminoMsg(object: QuerySimulateZeroImpactJoinYammResponseAminoMsg): QuerySimulateZeroImpactJoinYammResponse {
    return QuerySimulateZeroImpactJoinYammResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateZeroImpactJoinYammResponseProtoMsg): QuerySimulateZeroImpactJoinYammResponse {
    return QuerySimulateZeroImpactJoinYammResponse.decode(message.value);
  },
  toProto(message: QuerySimulateZeroImpactJoinYammResponse): Uint8Array {
    return QuerySimulateZeroImpactJoinYammResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateZeroImpactJoinYammResponse): QuerySimulateZeroImpactJoinYammResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammResponse",
      value: QuerySimulateZeroImpactJoinYammResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateJoinTokenExactLptRequest(): QuerySimulateJoinTokenExactLptRequest {
  return {
    poolId: BigInt(0),
    lptOut: "",
    tokenIn: ""
  };
}
export const QuerySimulateJoinTokenExactLptRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptRequest",
  encode(message: QuerySimulateJoinTokenExactLptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(18).string(message.lptOut);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateJoinTokenExactLptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptOut = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinTokenExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : ""
    };
  },
  toJSON(message: QuerySimulateJoinTokenExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinTokenExactLptRequest>): QuerySimulateJoinTokenExactLptRequest {
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateJoinTokenExactLptRequestAmino): QuerySimulateJoinTokenExactLptRequest {
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = object.lpt_out;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    return message;
  },
  toAmino(message: QuerySimulateJoinTokenExactLptRequest): QuerySimulateJoinTokenExactLptRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out = message.lptOut;
    obj.token_in = message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateJoinTokenExactLptRequestAminoMsg): QuerySimulateJoinTokenExactLptRequest {
    return QuerySimulateJoinTokenExactLptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinTokenExactLptRequestProtoMsg): QuerySimulateJoinTokenExactLptRequest {
    return QuerySimulateJoinTokenExactLptRequest.decode(message.value);
  },
  toProto(message: QuerySimulateJoinTokenExactLptRequest): Uint8Array {
    return QuerySimulateJoinTokenExactLptRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinTokenExactLptRequest): QuerySimulateJoinTokenExactLptRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptRequest",
      value: QuerySimulateJoinTokenExactLptRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateJoinTokenExactLptResponse(): QuerySimulateJoinTokenExactLptResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const QuerySimulateJoinTokenExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptResponse",
  encode(message: QuerySimulateJoinTokenExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateJoinTokenExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
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
  fromJSON(object: any): QuerySimulateJoinTokenExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateJoinTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinTokenExactLptResponse>): QuerySimulateJoinTokenExactLptResponse {
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateJoinTokenExactLptResponseAmino): QuerySimulateJoinTokenExactLptResponse {
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
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
  toAmino(message: QuerySimulateJoinTokenExactLptResponse): QuerySimulateJoinTokenExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateJoinTokenExactLptResponseAminoMsg): QuerySimulateJoinTokenExactLptResponse {
    return QuerySimulateJoinTokenExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinTokenExactLptResponseProtoMsg): QuerySimulateJoinTokenExactLptResponse {
    return QuerySimulateJoinTokenExactLptResponse.decode(message.value);
  },
  toProto(message: QuerySimulateJoinTokenExactLptResponse): Uint8Array {
    return QuerySimulateJoinTokenExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinTokenExactLptResponse): QuerySimulateJoinTokenExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptResponse",
      value: QuerySimulateJoinTokenExactLptResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateExitTokenExactLptRequest(): QuerySimulateExitTokenExactLptRequest {
  return {
    poolId: BigInt(0),
    lptIn: "",
    tokenOut: ""
  };
}
export const QuerySimulateExitTokenExactLptRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptRequest",
  encode(message: QuerySimulateExitTokenExactLptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(18).string(message.lptIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateExitTokenExactLptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitTokenExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QuerySimulateExitTokenExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitTokenExactLptRequest>): QuerySimulateExitTokenExactLptRequest {
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateExitTokenExactLptRequestAmino): QuerySimulateExitTokenExactLptRequest {
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QuerySimulateExitTokenExactLptRequest): QuerySimulateExitTokenExactLptRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in = message.lptIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateExitTokenExactLptRequestAminoMsg): QuerySimulateExitTokenExactLptRequest {
    return QuerySimulateExitTokenExactLptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitTokenExactLptRequestProtoMsg): QuerySimulateExitTokenExactLptRequest {
    return QuerySimulateExitTokenExactLptRequest.decode(message.value);
  },
  toProto(message: QuerySimulateExitTokenExactLptRequest): Uint8Array {
    return QuerySimulateExitTokenExactLptRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitTokenExactLptRequest): QuerySimulateExitTokenExactLptRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptRequest",
      value: QuerySimulateExitTokenExactLptRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateExitTokenExactLptResponse(): QuerySimulateExitTokenExactLptResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const QuerySimulateExitTokenExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptResponse",
  encode(message: QuerySimulateExitTokenExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateExitTokenExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
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
  fromJSON(object: any): QuerySimulateExitTokenExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateExitTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitTokenExactLptResponse>): QuerySimulateExitTokenExactLptResponse {
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateExitTokenExactLptResponseAmino): QuerySimulateExitTokenExactLptResponse {
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
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
  toAmino(message: QuerySimulateExitTokenExactLptResponse): QuerySimulateExitTokenExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateExitTokenExactLptResponseAminoMsg): QuerySimulateExitTokenExactLptResponse {
    return QuerySimulateExitTokenExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitTokenExactLptResponseProtoMsg): QuerySimulateExitTokenExactLptResponse {
    return QuerySimulateExitTokenExactLptResponse.decode(message.value);
  },
  toProto(message: QuerySimulateExitTokenExactLptResponse): Uint8Array {
    return QuerySimulateExitTokenExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitTokenExactLptResponse): QuerySimulateExitTokenExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptResponse",
      value: QuerySimulateExitTokenExactLptResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateExitExactTokensRequest(): QuerySimulateExitExactTokensRequest {
  return {
    poolId: BigInt(0),
    amountsOut: []
  };
}
export const QuerySimulateExitExactTokensRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensRequest",
  encode(message: QuerySimulateExitExactTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateExitExactTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitExactTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
  fromJSON(object: any): QuerySimulateExitExactTokensRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateExitExactTokensRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitExactTokensRequest>): QuerySimulateExitExactTokensRequest {
    const message = createBaseQuerySimulateExitExactTokensRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateExitExactTokensRequestAmino): QuerySimulateExitExactTokensRequest {
    const message = createBaseQuerySimulateExitExactTokensRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateExitExactTokensRequest): QuerySimulateExitExactTokensRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySimulateExitExactTokensRequestAminoMsg): QuerySimulateExitExactTokensRequest {
    return QuerySimulateExitExactTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitExactTokensRequestProtoMsg): QuerySimulateExitExactTokensRequest {
    return QuerySimulateExitExactTokensRequest.decode(message.value);
  },
  toProto(message: QuerySimulateExitExactTokensRequest): Uint8Array {
    return QuerySimulateExitExactTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitExactTokensRequest): QuerySimulateExitExactTokensRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensRequest",
      value: QuerySimulateExitExactTokensRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateExitExactTokensResponse(): QuerySimulateExitExactTokensResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({}),
    swapFee: []
  };
}
export const QuerySimulateExitExactTokensResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensResponse",
  encode(message: QuerySimulateExitExactTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateExitExactTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitExactTokensResponse();
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
  fromJSON(object: any): QuerySimulateExitExactTokensResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateExitExactTokensResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateExitExactTokensResponse>): QuerySimulateExitExactTokensResponse {
    const message = createBaseQuerySimulateExitExactTokensResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateExitExactTokensResponseAmino): QuerySimulateExitExactTokensResponse {
    const message = createBaseQuerySimulateExitExactTokensResponse();
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
  toAmino(message: QuerySimulateExitExactTokensResponse): QuerySimulateExitExactTokensResponseAmino {
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
  fromAminoMsg(object: QuerySimulateExitExactTokensResponseAminoMsg): QuerySimulateExitExactTokensResponse {
    return QuerySimulateExitExactTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitExactTokensResponseProtoMsg): QuerySimulateExitExactTokensResponse {
    return QuerySimulateExitExactTokensResponse.decode(message.value);
  },
  toProto(message: QuerySimulateExitExactTokensResponse): Uint8Array {
    return QuerySimulateExitExactTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitExactTokensResponse): QuerySimulateExitExactTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensResponse",
      value: QuerySimulateExitExactTokensResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateExitAllTokensExactLptRequest(): QuerySimulateExitAllTokensExactLptRequest {
  return {
    poolId: BigInt(0),
    lptIn: ""
  };
}
export const QuerySimulateExitAllTokensExactLptRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptRequest",
  encode(message: QuerySimulateExitAllTokensExactLptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(18).string(message.lptIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateExitAllTokensExactLptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitAllTokensExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : ""
    };
  },
  toJSON(message: QuerySimulateExitAllTokensExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitAllTokensExactLptRequest>): QuerySimulateExitAllTokensExactLptRequest {
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateExitAllTokensExactLptRequestAmino): QuerySimulateExitAllTokensExactLptRequest {
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    return message;
  },
  toAmino(message: QuerySimulateExitAllTokensExactLptRequest): QuerySimulateExitAllTokensExactLptRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in = message.lptIn;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateExitAllTokensExactLptRequestAminoMsg): QuerySimulateExitAllTokensExactLptRequest {
    return QuerySimulateExitAllTokensExactLptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitAllTokensExactLptRequestProtoMsg): QuerySimulateExitAllTokensExactLptRequest {
    return QuerySimulateExitAllTokensExactLptRequest.decode(message.value);
  },
  toProto(message: QuerySimulateExitAllTokensExactLptRequest): Uint8Array {
    return QuerySimulateExitAllTokensExactLptRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitAllTokensExactLptRequest): QuerySimulateExitAllTokensExactLptRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptRequest",
      value: QuerySimulateExitAllTokensExactLptRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateExitAllTokensExactLptResponse(): QuerySimulateExitAllTokensExactLptResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({})
  };
}
export const QuerySimulateExitAllTokensExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptResponse",
  encode(message: QuerySimulateExitAllTokensExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateExitAllTokensExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
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
  fromJSON(object: any): QuerySimulateExitAllTokensExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined
    };
  },
  toJSON(message: QuerySimulateExitAllTokensExactLptResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateExitAllTokensExactLptResponse>): QuerySimulateExitAllTokensExactLptResponse {
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateExitAllTokensExactLptResponseAmino): QuerySimulateExitAllTokensExactLptResponse {
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    return message;
  },
  toAmino(message: QuerySimulateExitAllTokensExactLptResponse): QuerySimulateExitAllTokensExactLptResponseAmino {
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
  fromAminoMsg(object: QuerySimulateExitAllTokensExactLptResponseAminoMsg): QuerySimulateExitAllTokensExactLptResponse {
    return QuerySimulateExitAllTokensExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitAllTokensExactLptResponseProtoMsg): QuerySimulateExitAllTokensExactLptResponse {
    return QuerySimulateExitAllTokensExactLptResponse.decode(message.value);
  },
  toProto(message: QuerySimulateExitAllTokensExactLptResponse): Uint8Array {
    return QuerySimulateExitAllTokensExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitAllTokensExactLptResponse): QuerySimulateExitAllTokensExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptResponse",
      value: QuerySimulateExitAllTokensExactLptResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    applyFee: false
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySpotPriceRequest",
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.applyFee === true) {
      writer.uint32(32).bool(message.applyFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.applyFee = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      applyFee: isSet(object.applyFee) ? Boolean(object.applyFee) : false
    };
  },
  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.applyFee !== undefined && (obj.applyFee = message.applyFee);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.applyFee = object.applyFee ?? false;
    return message;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.apply_fee !== undefined && object.apply_fee !== null) {
      message.applyFee = object.apply_fee;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    obj.apply_fee = message.applyFee;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySpotPriceResponse",
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },
  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetIntroducingPoolTokenRequest(): QueryGetIntroducingPoolTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetIntroducingPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenRequest",
  encode(message: QueryGetIntroducingPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetIntroducingPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetIntroducingPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetIntroducingPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetIntroducingPoolTokenRequest>): QueryGetIntroducingPoolTokenRequest {
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetIntroducingPoolTokenRequestAmino): QueryGetIntroducingPoolTokenRequest {
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetIntroducingPoolTokenRequest): QueryGetIntroducingPoolTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetIntroducingPoolTokenRequestAminoMsg): QueryGetIntroducingPoolTokenRequest {
    return QueryGetIntroducingPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetIntroducingPoolTokenRequestProtoMsg): QueryGetIntroducingPoolTokenRequest {
    return QueryGetIntroducingPoolTokenRequest.decode(message.value);
  },
  toProto(message: QueryGetIntroducingPoolTokenRequest): Uint8Array {
    return QueryGetIntroducingPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetIntroducingPoolTokenRequest): QueryGetIntroducingPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenRequest",
      value: QueryGetIntroducingPoolTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetIntroducingPoolTokenResponse(): QueryGetIntroducingPoolTokenResponse {
  return {
    introducingPoolToken: VirtualBalancePoolToken.fromPartial({})
  };
}
export const QueryGetIntroducingPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenResponse",
  encode(message: QueryGetIntroducingPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.introducingPoolToken !== undefined) {
      VirtualBalancePoolToken.encode(message.introducingPoolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetIntroducingPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.introducingPoolToken = VirtualBalancePoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetIntroducingPoolTokenResponse {
    return {
      introducingPoolToken: isSet(object.introducingPoolToken) ? VirtualBalancePoolToken.fromJSON(object.introducingPoolToken) : undefined
    };
  },
  toJSON(message: QueryGetIntroducingPoolTokenResponse): unknown {
    const obj: any = {};
    message.introducingPoolToken !== undefined && (obj.introducingPoolToken = message.introducingPoolToken ? VirtualBalancePoolToken.toJSON(message.introducingPoolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetIntroducingPoolTokenResponse>): QueryGetIntroducingPoolTokenResponse {
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducingPoolToken !== undefined && object.introducingPoolToken !== null ? VirtualBalancePoolToken.fromPartial(object.introducingPoolToken) : undefined;
    return message;
  },
  fromAmino(object: QueryGetIntroducingPoolTokenResponseAmino): QueryGetIntroducingPoolTokenResponse {
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    if (object.introducing_pool_token !== undefined && object.introducing_pool_token !== null) {
      message.introducingPoolToken = VirtualBalancePoolToken.fromAmino(object.introducing_pool_token);
    }
    return message;
  },
  toAmino(message: QueryGetIntroducingPoolTokenResponse): QueryGetIntroducingPoolTokenResponseAmino {
    const obj: any = {};
    obj.introducing_pool_token = message.introducingPoolToken ? VirtualBalancePoolToken.toAmino(message.introducingPoolToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetIntroducingPoolTokenResponseAminoMsg): QueryGetIntroducingPoolTokenResponse {
    return QueryGetIntroducingPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetIntroducingPoolTokenResponseProtoMsg): QueryGetIntroducingPoolTokenResponse {
    return QueryGetIntroducingPoolTokenResponse.decode(message.value);
  },
  toProto(message: QueryGetIntroducingPoolTokenResponse): Uint8Array {
    return QueryGetIntroducingPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetIntroducingPoolTokenResponse): QueryGetIntroducingPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenResponse",
      value: QueryGetIntroducingPoolTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllIntroducingPoolTokenRequest(): QueryAllIntroducingPoolTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllIntroducingPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenRequest",
  encode(message: QueryAllIntroducingPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllIntroducingPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllIntroducingPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllIntroducingPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllIntroducingPoolTokenRequest>): QueryAllIntroducingPoolTokenRequest {
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllIntroducingPoolTokenRequestAmino): QueryAllIntroducingPoolTokenRequest {
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllIntroducingPoolTokenRequest): QueryAllIntroducingPoolTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllIntroducingPoolTokenRequestAminoMsg): QueryAllIntroducingPoolTokenRequest {
    return QueryAllIntroducingPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIntroducingPoolTokenRequestProtoMsg): QueryAllIntroducingPoolTokenRequest {
    return QueryAllIntroducingPoolTokenRequest.decode(message.value);
  },
  toProto(message: QueryAllIntroducingPoolTokenRequest): Uint8Array {
    return QueryAllIntroducingPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIntroducingPoolTokenRequest): QueryAllIntroducingPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenRequest",
      value: QueryAllIntroducingPoolTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllIntroducingPoolTokenResponse(): QueryAllIntroducingPoolTokenResponse {
  return {
    introducingPoolToken: [],
    pagination: undefined
  };
}
export const QueryAllIntroducingPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenResponse",
  encode(message: QueryAllIntroducingPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.introducingPoolToken) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllIntroducingPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.introducingPoolToken.push(VirtualBalancePoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllIntroducingPoolTokenResponse {
    return {
      introducingPoolToken: Array.isArray(object?.introducingPoolToken) ? object.introducingPoolToken.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllIntroducingPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.introducingPoolToken) {
      obj.introducingPoolToken = message.introducingPoolToken.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.introducingPoolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllIntroducingPoolTokenResponse>): QueryAllIntroducingPoolTokenResponse {
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducingPoolToken?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllIntroducingPoolTokenResponseAmino): QueryAllIntroducingPoolTokenResponse {
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducing_pool_token?.map(e => VirtualBalancePoolToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllIntroducingPoolTokenResponse): QueryAllIntroducingPoolTokenResponseAmino {
    const obj: any = {};
    if (message.introducingPoolToken) {
      obj.introducing_pool_token = message.introducingPoolToken.map(e => e ? VirtualBalancePoolToken.toAmino(e) : undefined);
    } else {
      obj.introducing_pool_token = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllIntroducingPoolTokenResponseAminoMsg): QueryAllIntroducingPoolTokenResponse {
    return QueryAllIntroducingPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIntroducingPoolTokenResponseProtoMsg): QueryAllIntroducingPoolTokenResponse {
    return QueryAllIntroducingPoolTokenResponse.decode(message.value);
  },
  toProto(message: QueryAllIntroducingPoolTokenResponse): Uint8Array {
    return QueryAllIntroducingPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIntroducingPoolTokenResponse): QueryAllIntroducingPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenResponse",
      value: QueryAllIntroducingPoolTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetExpiringPoolTokenRequest(): QueryGetExpiringPoolTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetExpiringPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenRequest",
  encode(message: QueryGetExpiringPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetExpiringPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExpiringPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetExpiringPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExpiringPoolTokenRequest>): QueryGetExpiringPoolTokenRequest {
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetExpiringPoolTokenRequestAmino): QueryGetExpiringPoolTokenRequest {
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetExpiringPoolTokenRequest): QueryGetExpiringPoolTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetExpiringPoolTokenRequestAminoMsg): QueryGetExpiringPoolTokenRequest {
    return QueryGetExpiringPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExpiringPoolTokenRequestProtoMsg): QueryGetExpiringPoolTokenRequest {
    return QueryGetExpiringPoolTokenRequest.decode(message.value);
  },
  toProto(message: QueryGetExpiringPoolTokenRequest): Uint8Array {
    return QueryGetExpiringPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExpiringPoolTokenRequest): QueryGetExpiringPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenRequest",
      value: QueryGetExpiringPoolTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetExpiringPoolTokenResponse(): QueryGetExpiringPoolTokenResponse {
  return {
    expiringPoolToken: VirtualBalancePoolToken.fromPartial({})
  };
}
export const QueryGetExpiringPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenResponse",
  encode(message: QueryGetExpiringPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expiringPoolToken !== undefined) {
      VirtualBalancePoolToken.encode(message.expiringPoolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetExpiringPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiringPoolToken = VirtualBalancePoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExpiringPoolTokenResponse {
    return {
      expiringPoolToken: isSet(object.expiringPoolToken) ? VirtualBalancePoolToken.fromJSON(object.expiringPoolToken) : undefined
    };
  },
  toJSON(message: QueryGetExpiringPoolTokenResponse): unknown {
    const obj: any = {};
    message.expiringPoolToken !== undefined && (obj.expiringPoolToken = message.expiringPoolToken ? VirtualBalancePoolToken.toJSON(message.expiringPoolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExpiringPoolTokenResponse>): QueryGetExpiringPoolTokenResponse {
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiringPoolToken !== undefined && object.expiringPoolToken !== null ? VirtualBalancePoolToken.fromPartial(object.expiringPoolToken) : undefined;
    return message;
  },
  fromAmino(object: QueryGetExpiringPoolTokenResponseAmino): QueryGetExpiringPoolTokenResponse {
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    if (object.expiring_pool_token !== undefined && object.expiring_pool_token !== null) {
      message.expiringPoolToken = VirtualBalancePoolToken.fromAmino(object.expiring_pool_token);
    }
    return message;
  },
  toAmino(message: QueryGetExpiringPoolTokenResponse): QueryGetExpiringPoolTokenResponseAmino {
    const obj: any = {};
    obj.expiring_pool_token = message.expiringPoolToken ? VirtualBalancePoolToken.toAmino(message.expiringPoolToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetExpiringPoolTokenResponseAminoMsg): QueryGetExpiringPoolTokenResponse {
    return QueryGetExpiringPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExpiringPoolTokenResponseProtoMsg): QueryGetExpiringPoolTokenResponse {
    return QueryGetExpiringPoolTokenResponse.decode(message.value);
  },
  toProto(message: QueryGetExpiringPoolTokenResponse): Uint8Array {
    return QueryGetExpiringPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExpiringPoolTokenResponse): QueryGetExpiringPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenResponse",
      value: QueryGetExpiringPoolTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllExpiringPoolTokenRequest(): QueryAllExpiringPoolTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllExpiringPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenRequest",
  encode(message: QueryAllExpiringPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllExpiringPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExpiringPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExpiringPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExpiringPoolTokenRequest>): QueryAllExpiringPoolTokenRequest {
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExpiringPoolTokenRequestAmino): QueryAllExpiringPoolTokenRequest {
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExpiringPoolTokenRequest): QueryAllExpiringPoolTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExpiringPoolTokenRequestAminoMsg): QueryAllExpiringPoolTokenRequest {
    return QueryAllExpiringPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExpiringPoolTokenRequestProtoMsg): QueryAllExpiringPoolTokenRequest {
    return QueryAllExpiringPoolTokenRequest.decode(message.value);
  },
  toProto(message: QueryAllExpiringPoolTokenRequest): Uint8Array {
    return QueryAllExpiringPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExpiringPoolTokenRequest): QueryAllExpiringPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenRequest",
      value: QueryAllExpiringPoolTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllExpiringPoolTokenResponse(): QueryAllExpiringPoolTokenResponse {
  return {
    expiringPoolToken: [],
    pagination: undefined
  };
}
export const QueryAllExpiringPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenResponse",
  encode(message: QueryAllExpiringPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.expiringPoolToken) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllExpiringPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiringPoolToken.push(VirtualBalancePoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExpiringPoolTokenResponse {
    return {
      expiringPoolToken: Array.isArray(object?.expiringPoolToken) ? object.expiringPoolToken.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExpiringPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.expiringPoolToken) {
      obj.expiringPoolToken = message.expiringPoolToken.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.expiringPoolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExpiringPoolTokenResponse>): QueryAllExpiringPoolTokenResponse {
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiringPoolToken?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExpiringPoolTokenResponseAmino): QueryAllExpiringPoolTokenResponse {
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiring_pool_token?.map(e => VirtualBalancePoolToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExpiringPoolTokenResponse): QueryAllExpiringPoolTokenResponseAmino {
    const obj: any = {};
    if (message.expiringPoolToken) {
      obj.expiring_pool_token = message.expiringPoolToken.map(e => e ? VirtualBalancePoolToken.toAmino(e) : undefined);
    } else {
      obj.expiring_pool_token = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExpiringPoolTokenResponseAminoMsg): QueryAllExpiringPoolTokenResponse {
    return QueryAllExpiringPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExpiringPoolTokenResponseProtoMsg): QueryAllExpiringPoolTokenResponse {
    return QueryAllExpiringPoolTokenResponse.decode(message.value);
  },
  toProto(message: QueryAllExpiringPoolTokenResponse): Uint8Array {
    return QueryAllExpiringPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExpiringPoolTokenResponse): QueryAllExpiringPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenResponse",
      value: QueryAllExpiringPoolTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLpTokenRequest(): QueryLpTokenRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryLpTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryLpTokenRequest",
  encode(message: QueryLpTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLpTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLpTokenRequest();
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
  fromJSON(object: any): QueryLpTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryLpTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryLpTokenRequest>): QueryLpTokenRequest {
    const message = createBaseQueryLpTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLpTokenRequestAmino): QueryLpTokenRequest {
    const message = createBaseQueryLpTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryLpTokenRequest): QueryLpTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLpTokenRequestAminoMsg): QueryLpTokenRequest {
    return QueryLpTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLpTokenRequestProtoMsg): QueryLpTokenRequest {
    return QueryLpTokenRequest.decode(message.value);
  },
  toProto(message: QueryLpTokenRequest): Uint8Array {
    return QueryLpTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLpTokenRequest): QueryLpTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryLpTokenRequest",
      value: QueryLpTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLpTokenResponse(): QueryLpTokenResponse {
  return {
    lpToken: PoolToken.fromPartial({})
  };
}
export const QueryLpTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryLpTokenResponse",
  encode(message: QueryLpTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lpToken !== undefined) {
      PoolToken.encode(message.lpToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLpTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLpTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lpToken = PoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLpTokenResponse {
    return {
      lpToken: isSet(object.lpToken) ? PoolToken.fromJSON(object.lpToken) : undefined
    };
  },
  toJSON(message: QueryLpTokenResponse): unknown {
    const obj: any = {};
    message.lpToken !== undefined && (obj.lpToken = message.lpToken ? PoolToken.toJSON(message.lpToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLpTokenResponse>): QueryLpTokenResponse {
    const message = createBaseQueryLpTokenResponse();
    message.lpToken = object.lpToken !== undefined && object.lpToken !== null ? PoolToken.fromPartial(object.lpToken) : undefined;
    return message;
  },
  fromAmino(object: QueryLpTokenResponseAmino): QueryLpTokenResponse {
    const message = createBaseQueryLpTokenResponse();
    if (object.lp_token !== undefined && object.lp_token !== null) {
      message.lpToken = PoolToken.fromAmino(object.lp_token);
    }
    return message;
  },
  toAmino(message: QueryLpTokenResponse): QueryLpTokenResponseAmino {
    const obj: any = {};
    obj.lp_token = message.lpToken ? PoolToken.toAmino(message.lpToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLpTokenResponseAminoMsg): QueryLpTokenResponse {
    return QueryLpTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLpTokenResponseProtoMsg): QueryLpTokenResponse {
    return QueryLpTokenResponse.decode(message.value);
  },
  toProto(message: QueryLpTokenResponse): Uint8Array {
    return QueryLpTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLpTokenResponse): QueryLpTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryLpTokenResponse",
      value: QueryLpTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateBatchSwapRequest(): QuerySimulateBatchSwapRequest {
  return {
    swapType: 0,
    steps: []
  };
}
export const QuerySimulateBatchSwapRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapRequest",
  encode(message: QuerySimulateBatchSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapType !== 0) {
      writer.uint32(8).int32(message.swapType);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateBatchSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateBatchSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapType = (reader.int32() as any);
          break;
        case 2:
          message.steps.push(SwapStep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateBatchSwapRequest {
    return {
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateBatchSwapRequest): unknown {
    const obj: any = {};
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateBatchSwapRequest>): QuerySimulateBatchSwapRequest {
    const message = createBaseQuerySimulateBatchSwapRequest();
    message.swapType = object.swapType ?? 0;
    message.steps = object.steps?.map(e => SwapStep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateBatchSwapRequestAmino): QuerySimulateBatchSwapRequest {
    const message = createBaseQuerySimulateBatchSwapRequest();
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = swapTypeFromJSON(object.swap_type);
    }
    message.steps = object.steps?.map(e => SwapStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateBatchSwapRequest): QuerySimulateBatchSwapRequestAmino {
    const obj: any = {};
    obj.swap_type = swapTypeToJSON(message.swapType);
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toAmino(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySimulateBatchSwapRequestAminoMsg): QuerySimulateBatchSwapRequest {
    return QuerySimulateBatchSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateBatchSwapRequestProtoMsg): QuerySimulateBatchSwapRequest {
    return QuerySimulateBatchSwapRequest.decode(message.value);
  },
  toProto(message: QuerySimulateBatchSwapRequest): Uint8Array {
    return QuerySimulateBatchSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateBatchSwapRequest): QuerySimulateBatchSwapRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapRequest",
      value: QuerySimulateBatchSwapRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySimulateBatchSwapResponse(): QuerySimulateBatchSwapResponse {
  return {
    amountsIn: [],
    amountsOut: [],
    swapProtocolFee: [],
    joinExitProtocolFee: [],
    swapFee: []
  };
}
export const QuerySimulateBatchSwapResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapResponse",
  encode(message: QuerySimulateBatchSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateBatchSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateBatchSwapResponse();
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
  fromJSON(object: any): QuerySimulateBatchSwapResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      swapProtocolFee: Array.isArray(object?.swapProtocolFee) ? object.swapProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinExitProtocolFee: Array.isArray(object?.joinExitProtocolFee) ? object.joinExitProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateBatchSwapResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateBatchSwapResponse>): QuerySimulateBatchSwapResponse {
    const message = createBaseQuerySimulateBatchSwapResponse();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.swapProtocolFee = object.swapProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinExitProtocolFee = object.joinExitProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateBatchSwapResponseAmino): QuerySimulateBatchSwapResponse {
    const message = createBaseQuerySimulateBatchSwapResponse();
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.swapProtocolFee = object.swap_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.joinExitProtocolFee = object.join_exit_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateBatchSwapResponse): QuerySimulateBatchSwapResponseAmino {
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
  fromAminoMsg(object: QuerySimulateBatchSwapResponseAminoMsg): QuerySimulateBatchSwapResponse {
    return QuerySimulateBatchSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateBatchSwapResponseProtoMsg): QuerySimulateBatchSwapResponse {
    return QuerySimulateBatchSwapResponse.decode(message.value);
  },
  toProto(message: QuerySimulateBatchSwapResponse): Uint8Array {
    return QuerySimulateBatchSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateBatchSwapResponse): QuerySimulateBatchSwapResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapResponse",
      value: QuerySimulateBatchSwapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetYammConfigurationRequest(): QueryGetYammConfigurationRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryGetYammConfigurationRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationRequest",
  encode(message: QueryGetYammConfigurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetYammConfigurationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetYammConfigurationRequest();
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
  fromJSON(object: any): QueryGetYammConfigurationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetYammConfigurationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetYammConfigurationRequest>): QueryGetYammConfigurationRequest {
    const message = createBaseQueryGetYammConfigurationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetYammConfigurationRequestAmino): QueryGetYammConfigurationRequest {
    const message = createBaseQueryGetYammConfigurationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetYammConfigurationRequest): QueryGetYammConfigurationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetYammConfigurationRequestAminoMsg): QueryGetYammConfigurationRequest {
    return QueryGetYammConfigurationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetYammConfigurationRequestProtoMsg): QueryGetYammConfigurationRequest {
    return QueryGetYammConfigurationRequest.decode(message.value);
  },
  toProto(message: QueryGetYammConfigurationRequest): Uint8Array {
    return QueryGetYammConfigurationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetYammConfigurationRequest): QueryGetYammConfigurationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationRequest",
      value: QueryGetYammConfigurationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetYammConfigurationResponse(): QueryGetYammConfigurationResponse {
  return {
    yammConfiguration: YammConfiguration.fromPartial({})
  };
}
export const QueryGetYammConfigurationResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationResponse",
  encode(message: QueryGetYammConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yammConfiguration !== undefined) {
      YammConfiguration.encode(message.yammConfiguration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetYammConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yammConfiguration = YammConfiguration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetYammConfigurationResponse {
    return {
      yammConfiguration: isSet(object.yammConfiguration) ? YammConfiguration.fromJSON(object.yammConfiguration) : undefined
    };
  },
  toJSON(message: QueryGetYammConfigurationResponse): unknown {
    const obj: any = {};
    message.yammConfiguration !== undefined && (obj.yammConfiguration = message.yammConfiguration ? YammConfiguration.toJSON(message.yammConfiguration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetYammConfigurationResponse>): QueryGetYammConfigurationResponse {
    const message = createBaseQueryGetYammConfigurationResponse();
    message.yammConfiguration = object.yammConfiguration !== undefined && object.yammConfiguration !== null ? YammConfiguration.fromPartial(object.yammConfiguration) : undefined;
    return message;
  },
  fromAmino(object: QueryGetYammConfigurationResponseAmino): QueryGetYammConfigurationResponse {
    const message = createBaseQueryGetYammConfigurationResponse();
    if (object.yamm_configuration !== undefined && object.yamm_configuration !== null) {
      message.yammConfiguration = YammConfiguration.fromAmino(object.yamm_configuration);
    }
    return message;
  },
  toAmino(message: QueryGetYammConfigurationResponse): QueryGetYammConfigurationResponseAmino {
    const obj: any = {};
    obj.yamm_configuration = message.yammConfiguration ? YammConfiguration.toAmino(message.yammConfiguration) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetYammConfigurationResponseAminoMsg): QueryGetYammConfigurationResponse {
    return QueryGetYammConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetYammConfigurationResponseProtoMsg): QueryGetYammConfigurationResponse {
    return QueryGetYammConfigurationResponse.decode(message.value);
  },
  toProto(message: QueryGetYammConfigurationResponse): Uint8Array {
    return QueryGetYammConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetYammConfigurationResponse): QueryGetYammConfigurationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationResponse",
      value: QueryGetYammConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllYammConfigurationRequest(): QueryAllYammConfigurationRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllYammConfigurationRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationRequest",
  encode(message: QueryAllYammConfigurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllYammConfigurationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllYammConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllYammConfigurationRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllYammConfigurationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllYammConfigurationRequest>): QueryAllYammConfigurationRequest {
    const message = createBaseQueryAllYammConfigurationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllYammConfigurationRequestAmino): QueryAllYammConfigurationRequest {
    const message = createBaseQueryAllYammConfigurationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllYammConfigurationRequest): QueryAllYammConfigurationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllYammConfigurationRequestAminoMsg): QueryAllYammConfigurationRequest {
    return QueryAllYammConfigurationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllYammConfigurationRequestProtoMsg): QueryAllYammConfigurationRequest {
    return QueryAllYammConfigurationRequest.decode(message.value);
  },
  toProto(message: QueryAllYammConfigurationRequest): Uint8Array {
    return QueryAllYammConfigurationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllYammConfigurationRequest): QueryAllYammConfigurationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationRequest",
      value: QueryAllYammConfigurationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllYammConfigurationResponse(): QueryAllYammConfigurationResponse {
  return {
    yammConfiguration: [],
    pagination: undefined
  };
}
export const QueryAllYammConfigurationResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationResponse",
  encode(message: QueryAllYammConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.yammConfiguration) {
      YammConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllYammConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yammConfiguration.push(YammConfiguration.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllYammConfigurationResponse {
    return {
      yammConfiguration: Array.isArray(object?.yammConfiguration) ? object.yammConfiguration.map((e: any) => YammConfiguration.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllYammConfigurationResponse): unknown {
    const obj: any = {};
    if (message.yammConfiguration) {
      obj.yammConfiguration = message.yammConfiguration.map(e => e ? YammConfiguration.toJSON(e) : undefined);
    } else {
      obj.yammConfiguration = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllYammConfigurationResponse>): QueryAllYammConfigurationResponse {
    const message = createBaseQueryAllYammConfigurationResponse();
    message.yammConfiguration = object.yammConfiguration?.map(e => YammConfiguration.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllYammConfigurationResponseAmino): QueryAllYammConfigurationResponse {
    const message = createBaseQueryAllYammConfigurationResponse();
    message.yammConfiguration = object.yamm_configuration?.map(e => YammConfiguration.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllYammConfigurationResponse): QueryAllYammConfigurationResponseAmino {
    const obj: any = {};
    if (message.yammConfiguration) {
      obj.yamm_configuration = message.yammConfiguration.map(e => e ? YammConfiguration.toAmino(e) : undefined);
    } else {
      obj.yamm_configuration = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllYammConfigurationResponseAminoMsg): QueryAllYammConfigurationResponse {
    return QueryAllYammConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllYammConfigurationResponseProtoMsg): QueryAllYammConfigurationResponse {
    return QueryAllYammConfigurationResponse.decode(message.value);
  },
  toProto(message: QueryAllYammConfigurationResponse): Uint8Array {
    return QueryAllYammConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllYammConfigurationResponse): QueryAllYammConfigurationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationResponse",
      value: QueryAllYammConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetWhitelistedRouteRequest(): QueryGetWhitelistedRouteRequest {
  return {
    tokenIn: "",
    tokenOut: ""
  };
}
export const QueryGetWhitelistedRouteRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteRequest",
  encode(message: QueryGetWhitelistedRouteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetWhitelistedRouteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetWhitelistedRouteRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QueryGetWhitelistedRouteRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWhitelistedRouteRequest>): QueryGetWhitelistedRouteRequest {
    const message = createBaseQueryGetWhitelistedRouteRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryGetWhitelistedRouteRequestAmino): QueryGetWhitelistedRouteRequest {
    const message = createBaseQueryGetWhitelistedRouteRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QueryGetWhitelistedRouteRequest): QueryGetWhitelistedRouteRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryGetWhitelistedRouteRequestAminoMsg): QueryGetWhitelistedRouteRequest {
    return QueryGetWhitelistedRouteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWhitelistedRouteRequestProtoMsg): QueryGetWhitelistedRouteRequest {
    return QueryGetWhitelistedRouteRequest.decode(message.value);
  },
  toProto(message: QueryGetWhitelistedRouteRequest): Uint8Array {
    return QueryGetWhitelistedRouteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWhitelistedRouteRequest): QueryGetWhitelistedRouteRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteRequest",
      value: QueryGetWhitelistedRouteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetWhitelistedRouteResponse(): QueryGetWhitelistedRouteResponse {
  return {
    whitelistedRoute: WhitelistedRoute.fromPartial({})
  };
}
export const QueryGetWhitelistedRouteResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteResponse",
  encode(message: QueryGetWhitelistedRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetWhitelistedRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute = WhitelistedRoute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetWhitelistedRouteResponse {
    return {
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined
    };
  },
  toJSON(message: QueryGetWhitelistedRouteResponse): unknown {
    const obj: any = {};
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute ? WhitelistedRoute.toJSON(message.whitelistedRoute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWhitelistedRouteResponse>): QueryGetWhitelistedRouteResponse {
    const message = createBaseQueryGetWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelistedRoute !== undefined && object.whitelistedRoute !== null ? WhitelistedRoute.fromPartial(object.whitelistedRoute) : undefined;
    return message;
  },
  fromAmino(object: QueryGetWhitelistedRouteResponseAmino): QueryGetWhitelistedRouteResponse {
    const message = createBaseQueryGetWhitelistedRouteResponse();
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = WhitelistedRoute.fromAmino(object.whitelisted_route);
    }
    return message;
  },
  toAmino(message: QueryGetWhitelistedRouteResponse): QueryGetWhitelistedRouteResponseAmino {
    const obj: any = {};
    obj.whitelisted_route = message.whitelistedRoute ? WhitelistedRoute.toAmino(message.whitelistedRoute) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWhitelistedRouteResponseAminoMsg): QueryGetWhitelistedRouteResponse {
    return QueryGetWhitelistedRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWhitelistedRouteResponseProtoMsg): QueryGetWhitelistedRouteResponse {
    return QueryGetWhitelistedRouteResponse.decode(message.value);
  },
  toProto(message: QueryGetWhitelistedRouteResponse): Uint8Array {
    return QueryGetWhitelistedRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWhitelistedRouteResponse): QueryGetWhitelistedRouteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteResponse",
      value: QueryGetWhitelistedRouteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhitelistedRouteRequest(): QueryAllWhitelistedRouteRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWhitelistedRouteRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteRequest",
  encode(message: QueryAllWhitelistedRouteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWhitelistedRouteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWhitelistedRouteRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWhitelistedRouteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWhitelistedRouteRequest>): QueryAllWhitelistedRouteRequest {
    const message = createBaseQueryAllWhitelistedRouteRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWhitelistedRouteRequestAmino): QueryAllWhitelistedRouteRequest {
    const message = createBaseQueryAllWhitelistedRouteRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWhitelistedRouteRequest): QueryAllWhitelistedRouteRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedRouteRequestAminoMsg): QueryAllWhitelistedRouteRequest {
    return QueryAllWhitelistedRouteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedRouteRequestProtoMsg): QueryAllWhitelistedRouteRequest {
    return QueryAllWhitelistedRouteRequest.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedRouteRequest): Uint8Array {
    return QueryAllWhitelistedRouteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedRouteRequest): QueryAllWhitelistedRouteRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteRequest",
      value: QueryAllWhitelistedRouteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhitelistedRouteResponse(): QueryAllWhitelistedRouteResponse {
  return {
    whitelistedRoute: [],
    pagination: undefined
  };
}
export const QueryAllWhitelistedRouteResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteResponse",
  encode(message: QueryAllWhitelistedRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.whitelistedRoute) {
      WhitelistedRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWhitelistedRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute.push(WhitelistedRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWhitelistedRouteResponse {
    return {
      whitelistedRoute: Array.isArray(object?.whitelistedRoute) ? object.whitelistedRoute.map((e: any) => WhitelistedRoute.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWhitelistedRouteResponse): unknown {
    const obj: any = {};
    if (message.whitelistedRoute) {
      obj.whitelistedRoute = message.whitelistedRoute.map(e => e ? WhitelistedRoute.toJSON(e) : undefined);
    } else {
      obj.whitelistedRoute = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWhitelistedRouteResponse>): QueryAllWhitelistedRouteResponse {
    const message = createBaseQueryAllWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelistedRoute?.map(e => WhitelistedRoute.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWhitelistedRouteResponseAmino): QueryAllWhitelistedRouteResponse {
    const message = createBaseQueryAllWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelisted_route?.map(e => WhitelistedRoute.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWhitelistedRouteResponse): QueryAllWhitelistedRouteResponseAmino {
    const obj: any = {};
    if (message.whitelistedRoute) {
      obj.whitelisted_route = message.whitelistedRoute.map(e => e ? WhitelistedRoute.toAmino(e) : undefined);
    } else {
      obj.whitelisted_route = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedRouteResponseAminoMsg): QueryAllWhitelistedRouteResponse {
    return QueryAllWhitelistedRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedRouteResponseProtoMsg): QueryAllWhitelistedRouteResponse {
    return QueryAllWhitelistedRouteResponse.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedRouteResponse): Uint8Array {
    return QueryAllWhitelistedRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedRouteResponse): QueryAllWhitelistedRouteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteResponse",
      value: QueryAllWhitelistedRouteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrderRequest(): QueryGetOrderRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetOrderRequest",
  encode(message: QueryGetOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrderRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetOrderRequestAmino): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetOrderRequest): QueryGetOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderRequestAminoMsg): QueryGetOrderRequest {
    return QueryGetOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderRequestProtoMsg): QueryGetOrderRequest {
    return QueryGetOrderRequest.decode(message.value);
  },
  toProto(message: QueryGetOrderRequest): Uint8Array {
    return QueryGetOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderRequest): QueryGetOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetOrderRequest",
      value: QueryGetOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrderResponse(): QueryGetOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryGetOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetOrderResponse",
  encode(message: QueryGetOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderResponse();
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
  fromJSON(object: any): QueryGetOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOrderResponse>): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOrderResponseAmino): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: QueryGetOrderResponse): QueryGetOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderResponseAminoMsg): QueryGetOrderResponse {
    return QueryGetOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderResponseProtoMsg): QueryGetOrderResponse {
    return QueryGetOrderResponse.decode(message.value);
  },
  toProto(message: QueryGetOrderResponse): Uint8Array {
    return QueryGetOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderResponse): QueryGetOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetOrderResponse",
      value: QueryGetOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllOrderRequest(): QueryAllOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllOrderRequest",
  encode(message: QueryAllOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrderRequestAmino): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOrderRequest): QueryAllOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrderRequestAminoMsg): QueryAllOrderRequest {
    return QueryAllOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrderRequestProtoMsg): QueryAllOrderRequest {
    return QueryAllOrderRequest.decode(message.value);
  },
  toProto(message: QueryAllOrderRequest): Uint8Array {
    return QueryAllOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrderRequest): QueryAllOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllOrderRequest",
      value: QueryAllOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllOrderResponse(): QueryAllOrderResponse {
  return {
    order: [],
    pagination: undefined
  };
}
export const QueryAllOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllOrderResponse",
  encode(message: QueryAllOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOrderResponse {
    return {
      order: Array.isArray(object?.order) ? object.order.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.order = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOrderResponse>): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.order = object.order?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrderResponseAmino): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.order = object.order?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOrderResponse): QueryAllOrderResponseAmino {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.order = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrderResponseAminoMsg): QueryAllOrderResponse {
    return QueryAllOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrderResponseProtoMsg): QueryAllOrderResponse {
    return QueryAllOrderResponse.decode(message.value);
  },
  toProto(message: QueryAllOrderResponse): Uint8Array {
    return QueryAllOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrderResponse): QueryAllOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllOrderResponse",
      value: QueryAllOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetExecutableOrderRequest(): QueryGetExecutableOrderRequest {
  return {
    orderId: BigInt(0)
  };
}
export const QueryGetExecutableOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderRequest",
  encode(message: QueryGetExecutableOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetExecutableOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutableOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExecutableOrderRequest {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetExecutableOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetExecutableOrderRequest>): QueryGetExecutableOrderRequest {
    const message = createBaseQueryGetExecutableOrderRequest();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetExecutableOrderRequestAmino): QueryGetExecutableOrderRequest {
    const message = createBaseQueryGetExecutableOrderRequest();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: QueryGetExecutableOrderRequest): QueryGetExecutableOrderRequestAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetExecutableOrderRequestAminoMsg): QueryGetExecutableOrderRequest {
    return QueryGetExecutableOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExecutableOrderRequestProtoMsg): QueryGetExecutableOrderRequest {
    return QueryGetExecutableOrderRequest.decode(message.value);
  },
  toProto(message: QueryGetExecutableOrderRequest): Uint8Array {
    return QueryGetExecutableOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExecutableOrderRequest): QueryGetExecutableOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderRequest",
      value: QueryGetExecutableOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetExecutableOrderResponse(): QueryGetExecutableOrderResponse {
  return {
    executableOrder: Order.fromPartial({})
  };
}
export const QueryGetExecutableOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderResponse",
  encode(message: QueryGetExecutableOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.executableOrder !== undefined) {
      Order.encode(message.executableOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetExecutableOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutableOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableOrder = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExecutableOrderResponse {
    return {
      executableOrder: isSet(object.executableOrder) ? Order.fromJSON(object.executableOrder) : undefined
    };
  },
  toJSON(message: QueryGetExecutableOrderResponse): unknown {
    const obj: any = {};
    message.executableOrder !== undefined && (obj.executableOrder = message.executableOrder ? Order.toJSON(message.executableOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExecutableOrderResponse>): QueryGetExecutableOrderResponse {
    const message = createBaseQueryGetExecutableOrderResponse();
    message.executableOrder = object.executableOrder !== undefined && object.executableOrder !== null ? Order.fromPartial(object.executableOrder) : undefined;
    return message;
  },
  fromAmino(object: QueryGetExecutableOrderResponseAmino): QueryGetExecutableOrderResponse {
    const message = createBaseQueryGetExecutableOrderResponse();
    if (object.executable_order !== undefined && object.executable_order !== null) {
      message.executableOrder = Order.fromAmino(object.executable_order);
    }
    return message;
  },
  toAmino(message: QueryGetExecutableOrderResponse): QueryGetExecutableOrderResponseAmino {
    const obj: any = {};
    obj.executable_order = message.executableOrder ? Order.toAmino(message.executableOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetExecutableOrderResponseAminoMsg): QueryGetExecutableOrderResponse {
    return QueryGetExecutableOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExecutableOrderResponseProtoMsg): QueryGetExecutableOrderResponse {
    return QueryGetExecutableOrderResponse.decode(message.value);
  },
  toProto(message: QueryGetExecutableOrderResponse): Uint8Array {
    return QueryGetExecutableOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExecutableOrderResponse): QueryGetExecutableOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderResponse",
      value: QueryGetExecutableOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllExecutableOrderRequest(): QueryAllExecutableOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllExecutableOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderRequest",
  encode(message: QueryAllExecutableOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllExecutableOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutableOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExecutableOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExecutableOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExecutableOrderRequest>): QueryAllExecutableOrderRequest {
    const message = createBaseQueryAllExecutableOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExecutableOrderRequestAmino): QueryAllExecutableOrderRequest {
    const message = createBaseQueryAllExecutableOrderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExecutableOrderRequest): QueryAllExecutableOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExecutableOrderRequestAminoMsg): QueryAllExecutableOrderRequest {
    return QueryAllExecutableOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExecutableOrderRequestProtoMsg): QueryAllExecutableOrderRequest {
    return QueryAllExecutableOrderRequest.decode(message.value);
  },
  toProto(message: QueryAllExecutableOrderRequest): Uint8Array {
    return QueryAllExecutableOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExecutableOrderRequest): QueryAllExecutableOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderRequest",
      value: QueryAllExecutableOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllExecutableOrderResponse(): QueryAllExecutableOrderResponse {
  return {
    executableOrder: [],
    pagination: undefined
  };
}
export const QueryAllExecutableOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderResponse",
  encode(message: QueryAllExecutableOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.executableOrder) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllExecutableOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutableOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableOrder.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExecutableOrderResponse {
    return {
      executableOrder: Array.isArray(object?.executableOrder) ? object.executableOrder.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExecutableOrderResponse): unknown {
    const obj: any = {};
    if (message.executableOrder) {
      obj.executableOrder = message.executableOrder.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.executableOrder = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExecutableOrderResponse>): QueryAllExecutableOrderResponse {
    const message = createBaseQueryAllExecutableOrderResponse();
    message.executableOrder = object.executableOrder?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExecutableOrderResponseAmino): QueryAllExecutableOrderResponse {
    const message = createBaseQueryAllExecutableOrderResponse();
    message.executableOrder = object.executable_order?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExecutableOrderResponse): QueryAllExecutableOrderResponseAmino {
    const obj: any = {};
    if (message.executableOrder) {
      obj.executable_order = message.executableOrder.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.executable_order = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExecutableOrderResponseAminoMsg): QueryAllExecutableOrderResponse {
    return QueryAllExecutableOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExecutableOrderResponseProtoMsg): QueryAllExecutableOrderResponse {
    return QueryAllExecutableOrderResponse.decode(message.value);
  },
  toProto(message: QueryAllExecutableOrderResponse): Uint8Array {
    return QueryAllExecutableOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExecutableOrderResponse): QueryAllExecutableOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderResponse",
      value: QueryAllExecutableOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetScheduleOrderRequest(): QueryGetScheduleOrderRequest {
  return {
    orderId: BigInt(0)
  };
}
export const QueryGetScheduleOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderRequest",
  encode(message: QueryGetScheduleOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScheduleOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetScheduleOrderRequest {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetScheduleOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetScheduleOrderRequest>): QueryGetScheduleOrderRequest {
    const message = createBaseQueryGetScheduleOrderRequest();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetScheduleOrderRequestAmino): QueryGetScheduleOrderRequest {
    const message = createBaseQueryGetScheduleOrderRequest();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: QueryGetScheduleOrderRequest): QueryGetScheduleOrderRequestAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetScheduleOrderRequestAminoMsg): QueryGetScheduleOrderRequest {
    return QueryGetScheduleOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetScheduleOrderRequestProtoMsg): QueryGetScheduleOrderRequest {
    return QueryGetScheduleOrderRequest.decode(message.value);
  },
  toProto(message: QueryGetScheduleOrderRequest): Uint8Array {
    return QueryGetScheduleOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetScheduleOrderRequest): QueryGetScheduleOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderRequest",
      value: QueryGetScheduleOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetScheduleOrderResponse(): QueryGetScheduleOrderResponse {
  return {
    scheduleOrder: ScheduleOrder.fromPartial({})
  };
}
export const QueryGetScheduleOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderResponse",
  encode(message: QueryGetScheduleOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleOrder !== undefined) {
      ScheduleOrder.encode(message.scheduleOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScheduleOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleOrder = ScheduleOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetScheduleOrderResponse {
    return {
      scheduleOrder: isSet(object.scheduleOrder) ? ScheduleOrder.fromJSON(object.scheduleOrder) : undefined
    };
  },
  toJSON(message: QueryGetScheduleOrderResponse): unknown {
    const obj: any = {};
    message.scheduleOrder !== undefined && (obj.scheduleOrder = message.scheduleOrder ? ScheduleOrder.toJSON(message.scheduleOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetScheduleOrderResponse>): QueryGetScheduleOrderResponse {
    const message = createBaseQueryGetScheduleOrderResponse();
    message.scheduleOrder = object.scheduleOrder !== undefined && object.scheduleOrder !== null ? ScheduleOrder.fromPartial(object.scheduleOrder) : undefined;
    return message;
  },
  fromAmino(object: QueryGetScheduleOrderResponseAmino): QueryGetScheduleOrderResponse {
    const message = createBaseQueryGetScheduleOrderResponse();
    if (object.schedule_order !== undefined && object.schedule_order !== null) {
      message.scheduleOrder = ScheduleOrder.fromAmino(object.schedule_order);
    }
    return message;
  },
  toAmino(message: QueryGetScheduleOrderResponse): QueryGetScheduleOrderResponseAmino {
    const obj: any = {};
    obj.schedule_order = message.scheduleOrder ? ScheduleOrder.toAmino(message.scheduleOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetScheduleOrderResponseAminoMsg): QueryGetScheduleOrderResponse {
    return QueryGetScheduleOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetScheduleOrderResponseProtoMsg): QueryGetScheduleOrderResponse {
    return QueryGetScheduleOrderResponse.decode(message.value);
  },
  toProto(message: QueryGetScheduleOrderResponse): Uint8Array {
    return QueryGetScheduleOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetScheduleOrderResponse): QueryGetScheduleOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderResponse",
      value: QueryGetScheduleOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllScheduleOrderRequest(): QueryAllScheduleOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllScheduleOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderRequest",
  encode(message: QueryAllScheduleOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllScheduleOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScheduleOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllScheduleOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllScheduleOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllScheduleOrderRequest>): QueryAllScheduleOrderRequest {
    const message = createBaseQueryAllScheduleOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllScheduleOrderRequestAmino): QueryAllScheduleOrderRequest {
    const message = createBaseQueryAllScheduleOrderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllScheduleOrderRequest): QueryAllScheduleOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllScheduleOrderRequestAminoMsg): QueryAllScheduleOrderRequest {
    return QueryAllScheduleOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllScheduleOrderRequestProtoMsg): QueryAllScheduleOrderRequest {
    return QueryAllScheduleOrderRequest.decode(message.value);
  },
  toProto(message: QueryAllScheduleOrderRequest): Uint8Array {
    return QueryAllScheduleOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllScheduleOrderRequest): QueryAllScheduleOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderRequest",
      value: QueryAllScheduleOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllScheduleOrderResponse(): QueryAllScheduleOrderResponse {
  return {
    scheduleOrder: [],
    pagination: undefined
  };
}
export const QueryAllScheduleOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderResponse",
  encode(message: QueryAllScheduleOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.scheduleOrder) {
      ScheduleOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllScheduleOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScheduleOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleOrder.push(ScheduleOrder.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllScheduleOrderResponse {
    return {
      scheduleOrder: Array.isArray(object?.scheduleOrder) ? object.scheduleOrder.map((e: any) => ScheduleOrder.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllScheduleOrderResponse): unknown {
    const obj: any = {};
    if (message.scheduleOrder) {
      obj.scheduleOrder = message.scheduleOrder.map(e => e ? ScheduleOrder.toJSON(e) : undefined);
    } else {
      obj.scheduleOrder = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllScheduleOrderResponse>): QueryAllScheduleOrderResponse {
    const message = createBaseQueryAllScheduleOrderResponse();
    message.scheduleOrder = object.scheduleOrder?.map(e => ScheduleOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllScheduleOrderResponseAmino): QueryAllScheduleOrderResponse {
    const message = createBaseQueryAllScheduleOrderResponse();
    message.scheduleOrder = object.schedule_order?.map(e => ScheduleOrder.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllScheduleOrderResponse): QueryAllScheduleOrderResponseAmino {
    const obj: any = {};
    if (message.scheduleOrder) {
      obj.schedule_order = message.scheduleOrder.map(e => e ? ScheduleOrder.toAmino(e) : undefined);
    } else {
      obj.schedule_order = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllScheduleOrderResponseAminoMsg): QueryAllScheduleOrderResponse {
    return QueryAllScheduleOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllScheduleOrderResponseProtoMsg): QueryAllScheduleOrderResponse {
    return QueryAllScheduleOrderResponse.decode(message.value);
  },
  toProto(message: QueryAllScheduleOrderResponse): Uint8Array {
    return QueryAllScheduleOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllScheduleOrderResponse): QueryAllScheduleOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderResponse",
      value: QueryAllScheduleOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOraclePricePairRequest(): QueryGetOraclePricePairRequest {
  return {
    assetId: ""
  };
}
export const QueryGetOraclePricePairRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairRequest",
  encode(message: QueryGetOraclePricePairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOraclePricePairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePricePairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOraclePricePairRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetOraclePricePairRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOraclePricePairRequest>): QueryGetOraclePricePairRequest {
    const message = createBaseQueryGetOraclePricePairRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryGetOraclePricePairRequestAmino): QueryGetOraclePricePairRequest {
    const message = createBaseQueryGetOraclePricePairRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryGetOraclePricePairRequest): QueryGetOraclePricePairRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryGetOraclePricePairRequestAminoMsg): QueryGetOraclePricePairRequest {
    return QueryGetOraclePricePairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOraclePricePairRequestProtoMsg): QueryGetOraclePricePairRequest {
    return QueryGetOraclePricePairRequest.decode(message.value);
  },
  toProto(message: QueryGetOraclePricePairRequest): Uint8Array {
    return QueryGetOraclePricePairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOraclePricePairRequest): QueryGetOraclePricePairRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairRequest",
      value: QueryGetOraclePricePairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOraclePricePairResponse(): QueryGetOraclePricePairResponse {
  return {
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const QueryGetOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairResponse",
  encode(message: QueryGetOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePricePair = OraclePricePair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOraclePricePairResponse {
    return {
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: QueryGetOraclePricePairResponse): unknown {
    const obj: any = {};
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOraclePricePairResponse>): QueryGetOraclePricePairResponse {
    const message = createBaseQueryGetOraclePricePairResponse();
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOraclePricePairResponseAmino): QueryGetOraclePricePairResponse {
    const message = createBaseQueryGetOraclePricePairResponse();
    if (object.oracle_price_pair !== undefined && object.oracle_price_pair !== null) {
      message.oraclePricePair = OraclePricePair.fromAmino(object.oracle_price_pair);
    }
    return message;
  },
  toAmino(message: QueryGetOraclePricePairResponse): QueryGetOraclePricePairResponseAmino {
    const obj: any = {};
    obj.oracle_price_pair = message.oraclePricePair ? OraclePricePair.toAmino(message.oraclePricePair) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOraclePricePairResponseAminoMsg): QueryGetOraclePricePairResponse {
    return QueryGetOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOraclePricePairResponseProtoMsg): QueryGetOraclePricePairResponse {
    return QueryGetOraclePricePairResponse.decode(message.value);
  },
  toProto(message: QueryGetOraclePricePairResponse): Uint8Array {
    return QueryGetOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOraclePricePairResponse): QueryGetOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairResponse",
      value: QueryGetOraclePricePairResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllOraclePricePairRequest(): QueryAllOraclePricePairRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllOraclePricePairRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairRequest",
  encode(message: QueryAllOraclePricePairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOraclePricePairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePricePairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOraclePricePairRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOraclePricePairRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOraclePricePairRequest>): QueryAllOraclePricePairRequest {
    const message = createBaseQueryAllOraclePricePairRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOraclePricePairRequestAmino): QueryAllOraclePricePairRequest {
    const message = createBaseQueryAllOraclePricePairRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOraclePricePairRequest): QueryAllOraclePricePairRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOraclePricePairRequestAminoMsg): QueryAllOraclePricePairRequest {
    return QueryAllOraclePricePairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOraclePricePairRequestProtoMsg): QueryAllOraclePricePairRequest {
    return QueryAllOraclePricePairRequest.decode(message.value);
  },
  toProto(message: QueryAllOraclePricePairRequest): Uint8Array {
    return QueryAllOraclePricePairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOraclePricePairRequest): QueryAllOraclePricePairRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairRequest",
      value: QueryAllOraclePricePairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllOraclePricePairResponse(): QueryAllOraclePricePairResponse {
  return {
    oraclePricePair: [],
    pagination: undefined
  };
}
export const QueryAllOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairResponse",
  encode(message: QueryAllOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.oraclePricePair) {
      OraclePricePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePricePair.push(OraclePricePair.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOraclePricePairResponse {
    return {
      oraclePricePair: Array.isArray(object?.oraclePricePair) ? object.oraclePricePair.map((e: any) => OraclePricePair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOraclePricePairResponse): unknown {
    const obj: any = {};
    if (message.oraclePricePair) {
      obj.oraclePricePair = message.oraclePricePair.map(e => e ? OraclePricePair.toJSON(e) : undefined);
    } else {
      obj.oraclePricePair = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOraclePricePairResponse>): QueryAllOraclePricePairResponse {
    const message = createBaseQueryAllOraclePricePairResponse();
    message.oraclePricePair = object.oraclePricePair?.map(e => OraclePricePair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOraclePricePairResponseAmino): QueryAllOraclePricePairResponse {
    const message = createBaseQueryAllOraclePricePairResponse();
    message.oraclePricePair = object.oracle_price_pair?.map(e => OraclePricePair.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOraclePricePairResponse): QueryAllOraclePricePairResponseAmino {
    const obj: any = {};
    if (message.oraclePricePair) {
      obj.oracle_price_pair = message.oraclePricePair.map(e => e ? OraclePricePair.toAmino(e) : undefined);
    } else {
      obj.oracle_price_pair = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOraclePricePairResponseAminoMsg): QueryAllOraclePricePairResponse {
    return QueryAllOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOraclePricePairResponseProtoMsg): QueryAllOraclePricePairResponse {
    return QueryAllOraclePricePairResponse.decode(message.value);
  },
  toProto(message: QueryAllOraclePricePairResponse): Uint8Array {
    return QueryAllOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOraclePricePairResponse): QueryAllOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairResponse",
      value: QueryAllOraclePricePairResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVaultPauseModeRequest(): QueryVaultPauseModeRequest {
  return {};
}
export const QueryVaultPauseModeRequest = {
  typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeRequest",
  encode(_: QueryVaultPauseModeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultPauseModeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultPauseModeRequest();
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
  fromJSON(_: any): QueryVaultPauseModeRequest {
    return {};
  },
  toJSON(_: QueryVaultPauseModeRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryVaultPauseModeRequest>): QueryVaultPauseModeRequest {
    const message = createBaseQueryVaultPauseModeRequest();
    return message;
  },
  fromAmino(_: QueryVaultPauseModeRequestAmino): QueryVaultPauseModeRequest {
    const message = createBaseQueryVaultPauseModeRequest();
    return message;
  },
  toAmino(_: QueryVaultPauseModeRequest): QueryVaultPauseModeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVaultPauseModeRequestAminoMsg): QueryVaultPauseModeRequest {
    return QueryVaultPauseModeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultPauseModeRequestProtoMsg): QueryVaultPauseModeRequest {
    return QueryVaultPauseModeRequest.decode(message.value);
  },
  toProto(message: QueryVaultPauseModeRequest): Uint8Array {
    return QueryVaultPauseModeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultPauseModeRequest): QueryVaultPauseModeRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeRequest",
      value: QueryVaultPauseModeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultPauseModeResponse(): QueryVaultPauseModeResponse {
  return {
    paused: false
  };
}
export const QueryVaultPauseModeResponse = {
  typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeResponse",
  encode(message: QueryVaultPauseModeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultPauseModeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultPauseModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVaultPauseModeResponse {
    return {
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },
  toJSON(message: QueryVaultPauseModeResponse): unknown {
    const obj: any = {};
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },
  fromPartial(object: Partial<QueryVaultPauseModeResponse>): QueryVaultPauseModeResponse {
    const message = createBaseQueryVaultPauseModeResponse();
    message.paused = object.paused ?? false;
    return message;
  },
  fromAmino(object: QueryVaultPauseModeResponseAmino): QueryVaultPauseModeResponse {
    const message = createBaseQueryVaultPauseModeResponse();
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    }
    return message;
  },
  toAmino(message: QueryVaultPauseModeResponse): QueryVaultPauseModeResponseAmino {
    const obj: any = {};
    obj.paused = message.paused;
    return obj;
  },
  fromAminoMsg(object: QueryVaultPauseModeResponseAminoMsg): QueryVaultPauseModeResponse {
    return QueryVaultPauseModeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultPauseModeResponseProtoMsg): QueryVaultPauseModeResponse {
    return QueryVaultPauseModeResponse.decode(message.value);
  },
  toProto(message: QueryVaultPauseModeResponse): Uint8Array {
    return QueryVaultPauseModeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultPauseModeResponse): QueryVaultPauseModeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeResponse",
      value: QueryVaultPauseModeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPendingTokenIntroductionRequest(): QueryGetPendingTokenIntroductionRequest {
  return {
    assetId: "",
    targetPoolId: BigInt(0)
  };
}
export const QueryGetPendingTokenIntroductionRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionRequest",
  encode(message: QueryGetPendingTokenIntroductionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.targetPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPendingTokenIntroductionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingTokenIntroductionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.targetPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPendingTokenIntroductionRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? BigInt(object.targetPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetPendingTokenIntroductionRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetPendingTokenIntroductionRequest>): QueryGetPendingTokenIntroductionRequest {
    const message = createBaseQueryGetPendingTokenIntroductionRequest();
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? BigInt(object.targetPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPendingTokenIntroductionRequestAmino): QueryGetPendingTokenIntroductionRequest {
    const message = createBaseQueryGetPendingTokenIntroductionRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.target_pool_id !== undefined && object.target_pool_id !== null) {
      message.targetPoolId = BigInt(object.target_pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetPendingTokenIntroductionRequest): QueryGetPendingTokenIntroductionRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId;
    obj.target_pool_id = message.targetPoolId ? message.targetPoolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingTokenIntroductionRequestAminoMsg): QueryGetPendingTokenIntroductionRequest {
    return QueryGetPendingTokenIntroductionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingTokenIntroductionRequestProtoMsg): QueryGetPendingTokenIntroductionRequest {
    return QueryGetPendingTokenIntroductionRequest.decode(message.value);
  },
  toProto(message: QueryGetPendingTokenIntroductionRequest): Uint8Array {
    return QueryGetPendingTokenIntroductionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingTokenIntroductionRequest): QueryGetPendingTokenIntroductionRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionRequest",
      value: QueryGetPendingTokenIntroductionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPendingTokenIntroductionResponse(): QueryGetPendingTokenIntroductionResponse {
  return {
    pendingTokenIntroduction: PendingTokenIntroduction.fromPartial({})
  };
}
export const QueryGetPendingTokenIntroductionResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionResponse",
  encode(message: QueryGetPendingTokenIntroductionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pendingTokenIntroduction !== undefined) {
      PendingTokenIntroduction.encode(message.pendingTokenIntroduction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPendingTokenIntroductionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingTokenIntroductionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingTokenIntroduction = PendingTokenIntroduction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPendingTokenIntroductionResponse {
    return {
      pendingTokenIntroduction: isSet(object.pendingTokenIntroduction) ? PendingTokenIntroduction.fromJSON(object.pendingTokenIntroduction) : undefined
    };
  },
  toJSON(message: QueryGetPendingTokenIntroductionResponse): unknown {
    const obj: any = {};
    message.pendingTokenIntroduction !== undefined && (obj.pendingTokenIntroduction = message.pendingTokenIntroduction ? PendingTokenIntroduction.toJSON(message.pendingTokenIntroduction) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPendingTokenIntroductionResponse>): QueryGetPendingTokenIntroductionResponse {
    const message = createBaseQueryGetPendingTokenIntroductionResponse();
    message.pendingTokenIntroduction = object.pendingTokenIntroduction !== undefined && object.pendingTokenIntroduction !== null ? PendingTokenIntroduction.fromPartial(object.pendingTokenIntroduction) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPendingTokenIntroductionResponseAmino): QueryGetPendingTokenIntroductionResponse {
    const message = createBaseQueryGetPendingTokenIntroductionResponse();
    if (object.pending_token_introduction !== undefined && object.pending_token_introduction !== null) {
      message.pendingTokenIntroduction = PendingTokenIntroduction.fromAmino(object.pending_token_introduction);
    }
    return message;
  },
  toAmino(message: QueryGetPendingTokenIntroductionResponse): QueryGetPendingTokenIntroductionResponseAmino {
    const obj: any = {};
    obj.pending_token_introduction = message.pendingTokenIntroduction ? PendingTokenIntroduction.toAmino(message.pendingTokenIntroduction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingTokenIntroductionResponseAminoMsg): QueryGetPendingTokenIntroductionResponse {
    return QueryGetPendingTokenIntroductionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingTokenIntroductionResponseProtoMsg): QueryGetPendingTokenIntroductionResponse {
    return QueryGetPendingTokenIntroductionResponse.decode(message.value);
  },
  toProto(message: QueryGetPendingTokenIntroductionResponse): Uint8Array {
    return QueryGetPendingTokenIntroductionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingTokenIntroductionResponse): QueryGetPendingTokenIntroductionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionResponse",
      value: QueryGetPendingTokenIntroductionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPendingTokenIntroductionRequest(): QueryAllPendingTokenIntroductionRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPendingTokenIntroductionRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionRequest",
  encode(message: QueryAllPendingTokenIntroductionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPendingTokenIntroductionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingTokenIntroductionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPendingTokenIntroductionRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPendingTokenIntroductionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPendingTokenIntroductionRequest>): QueryAllPendingTokenIntroductionRequest {
    const message = createBaseQueryAllPendingTokenIntroductionRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingTokenIntroductionRequestAmino): QueryAllPendingTokenIntroductionRequest {
    const message = createBaseQueryAllPendingTokenIntroductionRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingTokenIntroductionRequest): QueryAllPendingTokenIntroductionRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingTokenIntroductionRequestAminoMsg): QueryAllPendingTokenIntroductionRequest {
    return QueryAllPendingTokenIntroductionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingTokenIntroductionRequestProtoMsg): QueryAllPendingTokenIntroductionRequest {
    return QueryAllPendingTokenIntroductionRequest.decode(message.value);
  },
  toProto(message: QueryAllPendingTokenIntroductionRequest): Uint8Array {
    return QueryAllPendingTokenIntroductionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingTokenIntroductionRequest): QueryAllPendingTokenIntroductionRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionRequest",
      value: QueryAllPendingTokenIntroductionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPendingTokenIntroductionResponse(): QueryAllPendingTokenIntroductionResponse {
  return {
    pendingTokenIntroduction: [],
    pagination: undefined
  };
}
export const QueryAllPendingTokenIntroductionResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionResponse",
  encode(message: QueryAllPendingTokenIntroductionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingTokenIntroduction) {
      PendingTokenIntroduction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPendingTokenIntroductionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingTokenIntroductionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingTokenIntroduction.push(PendingTokenIntroduction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPendingTokenIntroductionResponse {
    return {
      pendingTokenIntroduction: Array.isArray(object?.pendingTokenIntroduction) ? object.pendingTokenIntroduction.map((e: any) => PendingTokenIntroduction.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPendingTokenIntroductionResponse): unknown {
    const obj: any = {};
    if (message.pendingTokenIntroduction) {
      obj.pendingTokenIntroduction = message.pendingTokenIntroduction.map(e => e ? PendingTokenIntroduction.toJSON(e) : undefined);
    } else {
      obj.pendingTokenIntroduction = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPendingTokenIntroductionResponse>): QueryAllPendingTokenIntroductionResponse {
    const message = createBaseQueryAllPendingTokenIntroductionResponse();
    message.pendingTokenIntroduction = object.pendingTokenIntroduction?.map(e => PendingTokenIntroduction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingTokenIntroductionResponseAmino): QueryAllPendingTokenIntroductionResponse {
    const message = createBaseQueryAllPendingTokenIntroductionResponse();
    message.pendingTokenIntroduction = object.pending_token_introduction?.map(e => PendingTokenIntroduction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingTokenIntroductionResponse): QueryAllPendingTokenIntroductionResponseAmino {
    const obj: any = {};
    if (message.pendingTokenIntroduction) {
      obj.pending_token_introduction = message.pendingTokenIntroduction.map(e => e ? PendingTokenIntroduction.toAmino(e) : undefined);
    } else {
      obj.pending_token_introduction = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingTokenIntroductionResponseAminoMsg): QueryAllPendingTokenIntroductionResponse {
    return QueryAllPendingTokenIntroductionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingTokenIntroductionResponseProtoMsg): QueryAllPendingTokenIntroductionResponse {
    return QueryAllPendingTokenIntroductionResponse.decode(message.value);
  },
  toProto(message: QueryAllPendingTokenIntroductionResponse): Uint8Array {
    return QueryAllPendingTokenIntroductionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingTokenIntroductionResponse): QueryAllPendingTokenIntroductionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionResponse",
      value: QueryAllPendingTokenIntroductionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryYammPoolIdRequest(): QueryYammPoolIdRequest {
  return {
    assetId: ""
  };
}
export const QueryYammPoolIdRequest = {
  typeUrl: "/pryzm.amm.v1.QueryYammPoolIdRequest",
  encode(message: QueryYammPoolIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryYammPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryYammPoolIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryYammPoolIdRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryYammPoolIdRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryYammPoolIdRequest>): QueryYammPoolIdRequest {
    const message = createBaseQueryYammPoolIdRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryYammPoolIdRequestAmino): QueryYammPoolIdRequest {
    const message = createBaseQueryYammPoolIdRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryYammPoolIdRequest): QueryYammPoolIdRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryYammPoolIdRequestAminoMsg): QueryYammPoolIdRequest {
    return QueryYammPoolIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryYammPoolIdRequestProtoMsg): QueryYammPoolIdRequest {
    return QueryYammPoolIdRequest.decode(message.value);
  },
  toProto(message: QueryYammPoolIdRequest): Uint8Array {
    return QueryYammPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryYammPoolIdRequest): QueryYammPoolIdRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryYammPoolIdRequest",
      value: QueryYammPoolIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryYammPoolIdResponse(): QueryYammPoolIdResponse {
  return {
    poolId: BigInt(0)
  };
}
export const QueryYammPoolIdResponse = {
  typeUrl: "/pryzm.amm.v1.QueryYammPoolIdResponse",
  encode(message: QueryYammPoolIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryYammPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryYammPoolIdResponse();
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
  fromJSON(object: any): QueryYammPoolIdResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryYammPoolIdResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryYammPoolIdResponse>): QueryYammPoolIdResponse {
    const message = createBaseQueryYammPoolIdResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryYammPoolIdResponseAmino): QueryYammPoolIdResponse {
    const message = createBaseQueryYammPoolIdResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryYammPoolIdResponse): QueryYammPoolIdResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryYammPoolIdResponseAminoMsg): QueryYammPoolIdResponse {
    return QueryYammPoolIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryYammPoolIdResponseProtoMsg): QueryYammPoolIdResponse {
    return QueryYammPoolIdResponse.decode(message.value);
  },
  toProto(message: QueryYammPoolIdResponse): Uint8Array {
    return QueryYammPoolIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryYammPoolIdResponse): QueryYammPoolIdResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryYammPoolIdResponse",
      value: QueryYammPoolIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrderStepBoundsRequest(): QueryOrderStepBoundsRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false
  };
}
export const QueryOrderStepBoundsRequest = {
  typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsRequest",
  encode(message: QueryOrderStepBoundsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderStepBoundsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderStepBoundsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderStepBoundsRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false
    };
  },
  toJSON(message: QueryOrderStepBoundsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderStepBoundsRequest>): QueryOrderStepBoundsRequest {
    const message = createBaseQueryOrderStepBoundsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    return message;
  },
  fromAmino(object: QueryOrderStepBoundsRequestAmino): QueryOrderStepBoundsRequest {
    const message = createBaseQueryOrderStepBoundsRequest();
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
    return message;
  },
  toAmino(message: QueryOrderStepBoundsRequest): QueryOrderStepBoundsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute;
    return obj;
  },
  fromAminoMsg(object: QueryOrderStepBoundsRequestAminoMsg): QueryOrderStepBoundsRequest {
    return QueryOrderStepBoundsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderStepBoundsRequestProtoMsg): QueryOrderStepBoundsRequest {
    return QueryOrderStepBoundsRequest.decode(message.value);
  },
  toProto(message: QueryOrderStepBoundsRequest): Uint8Array {
    return QueryOrderStepBoundsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderStepBoundsRequest): QueryOrderStepBoundsRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsRequest",
      value: QueryOrderStepBoundsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrderStepBoundsResponse(): QueryOrderStepBoundsResponse {
  return {
    minStep: "",
    maxStep: ""
  };
}
export const QueryOrderStepBoundsResponse = {
  typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsResponse",
  encode(message: QueryOrderStepBoundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minStep !== "") {
      writer.uint32(10).string(message.minStep);
    }
    if (message.maxStep !== "") {
      writer.uint32(18).string(message.maxStep);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderStepBoundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderStepBoundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minStep = reader.string();
          break;
        case 2:
          message.maxStep = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderStepBoundsResponse {
    return {
      minStep: isSet(object.minStep) ? String(object.minStep) : "",
      maxStep: isSet(object.maxStep) ? String(object.maxStep) : ""
    };
  },
  toJSON(message: QueryOrderStepBoundsResponse): unknown {
    const obj: any = {};
    message.minStep !== undefined && (obj.minStep = message.minStep);
    message.maxStep !== undefined && (obj.maxStep = message.maxStep);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderStepBoundsResponse>): QueryOrderStepBoundsResponse {
    const message = createBaseQueryOrderStepBoundsResponse();
    message.minStep = object.minStep ?? "";
    message.maxStep = object.maxStep ?? "";
    return message;
  },
  fromAmino(object: QueryOrderStepBoundsResponseAmino): QueryOrderStepBoundsResponse {
    const message = createBaseQueryOrderStepBoundsResponse();
    if (object.min_step !== undefined && object.min_step !== null) {
      message.minStep = object.min_step;
    }
    if (object.max_step !== undefined && object.max_step !== null) {
      message.maxStep = object.max_step;
    }
    return message;
  },
  toAmino(message: QueryOrderStepBoundsResponse): QueryOrderStepBoundsResponseAmino {
    const obj: any = {};
    obj.min_step = message.minStep;
    obj.max_step = message.maxStep;
    return obj;
  },
  fromAminoMsg(object: QueryOrderStepBoundsResponseAminoMsg): QueryOrderStepBoundsResponse {
    return QueryOrderStepBoundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderStepBoundsResponseProtoMsg): QueryOrderStepBoundsResponse {
    return QueryOrderStepBoundsResponse.decode(message.value);
  },
  toProto(message: QueryOrderStepBoundsResponse): Uint8Array {
    return QueryOrderStepBoundsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderStepBoundsResponse): QueryOrderStepBoundsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsResponse",
      value: QueryOrderStepBoundsResponse.encode(message).finish()
    };
  }
};