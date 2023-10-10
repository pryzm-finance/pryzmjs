//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAssetRequest, QueryAssetResponseSDKType } from "./asset/asset";
import { QueryAllMaturitiesRequest, QueryAllMaturitiesResponseSDKType } from "./maturity/maturity";
import { QuerySubmitProposalMsgsRequest, QuerySubmitProposalMsgsResponseSDKType, QueryAssetProposalRequest, QueryAssetProposalResponseSDKType } from "./pgov/pgov";
import { QueryPoolTokenRequest, QueryPoolTokenResponseSDKType, QueryAllPoolTokenRequest, QueryAllPoolTokenResponseSDKType } from "./pool/pool_token";
import { QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType } from "./pool/pool";
import { QueryTokenRequest, QueryTokenResponseSDKType, QueryTokensRequest, QueryTokensResponseSDKType } from "./pool/token";
import { QueryHistoricalTokenYieldRequest, QueryHistoricalTokenYieldResponseSDKType } from "./pool/historical_token_yield";
import { QueryHistoricalPoolAprRequest, QueryHistoricalPoolAprResponseSDKType } from "./pool/historical_pool_apr";
import { QueryPriceRequest, QueryPriceResponseSDKType } from "./price/price";
import { QueryHistoricalPriceRequest, QueryHistoricalPriceResponseSDKType } from "./price/historical_price";
import { QuerySwappableTokensRequest, QuerySwappableTokensResponseSDKType } from "./price/swappable_tokens";
import { QueryPriceBoundsRequest, QueryPriceBoundsResponseSDKType } from "./price/price_bounds";
import { QueryPriceChangeRequest, QueryPriceChangeResponseSDKType } from "./price/price_change";
import { QueryTradeSimulationRequest, QueryTradeSimulationResponseSDKType } from "./trade/trade_simulation";
import { QueryJoinAllTokensExactLptSimulationRequest, QueryJoinAllTokensExactLptSimulationResponseSDKType } from "./trade/join_all_tokens_exact_lpt_simulation";
import { QueryJoinExactTokensSimulationRequest, QueryJoinExactTokensSimulationResponseSDKType } from "./trade/join_exact_tokens_simulation";
import { QueryJoinTokenExactLptSimulationRequest, QueryJoinTokenExactLptSimulationResponseSDKType } from "./trade/join_token_exact_lpt_simulation";
import { QueryExitTokenExactLptSimulationRequest, QueryExitTokenExactLptSimulationResponseSDKType } from "./trade/exit_token_exact_lpt_simulation";
import { QueryExitExactTokensSimulationRequest, QueryExitExactTokensSimulationResponseSDKType } from "./trade/exit_exact_tokens_simulation";
import { QueryExitAllTokensExactLptSimulationRequest, QueryExitAllTokensExactLptSimulationResponseSDKType } from "./trade/exit_all_tokens_exact_lpt_simulation";
import { QueryUserTradeHistoryRequest, QueryUserTradeHistoryResponseSDKType } from "./trade/user_trade_history";
import { QueryPoolTradeHistoryRequest, QueryPoolTradeHistoryResponseSDKType } from "./trade/pool_trade_history";
import { QueryTokenTradeVolumeRequest, QueryTokenTradeVolumeResponseSDKType, QueryPoolTradeVolumeRequest, QueryPoolTradeVolumeResponseSDKType, QueryFavoritePairsRequest, QueryFavoritePairsResponseSDKType } from "./trade/trade_volume";
import { QueryPulseTradablePairsRequest, QueryPulseTradablePairsResponseSDKType } from "./trade/pulse_tradable_pairs";
import { QueryOrderRequest, QueryOrderResponseSDKType, QueryOrdersRequest, QueryOrdersResponseSDKType } from "./trade/order";
import { QueryHostChainRequest, QueryHostChainResponseSDKType, QueryHostChainsRequest, QueryHostChainsResponseSDKType } from "./icstaking/host_chain";
import { QueryValidatorRequest, QueryValidatorResponseSDKType, QueryValidatorsRequest, QueryValidatorsResponseSDKType } from "./oracle/validator";
import { QueryVoteIntervalsRequest, QueryVoteIntervalsResponseSDKType } from "./oracle/vote_interval";
import { QuerySlashWindowsRequest, QuerySlashWindowsResponseSDKType } from "./oracle/slash_window";
import { QueryVoteSummaryRequest, QueryVoteSummaryResponseSDKType } from "./oracle/vote_summary";
import { QueryValidatorVoteIntervalSummariesRequest, QueryValidatorVoteIntervalSummariesResponseSDKType } from "./oracle/validator_vote_interval_summary";
import { QueryValidatorSlashWindowSummariesRequest, QueryValidatorSlashWindowSummariesResponseSDKType } from "./oracle/validator_slash_window_summary";
import { QueryPreVotesRequest, QueryPreVotesResponseSDKType } from "./oracle/pre_vote";
import { QueryVotesRequest, QueryVotesResponseSDKType } from "./oracle/vote";
import { QueryVotePayloadsRequest, QueryVotePayloadsResponseSDKType } from "./oracle/vote_payload";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.asset = this.asset.bind(this);
    this.maturityAll = this.maturityAll.bind(this);
    this.submitProposalMsgs = this.submitProposalMsgs.bind(this);
    this.assetProposals = this.assetProposals.bind(this);
    this.poolToken = this.poolToken.bind(this);
    this.poolTokens = this.poolTokens.bind(this);
    this.pool = this.pool.bind(this);
    this.pools = this.pools.bind(this);
    this.token = this.token.bind(this);
    this.tokens = this.tokens.bind(this);
    this.historicalTokenYield = this.historicalTokenYield.bind(this);
    this.historicalPoolApr = this.historicalPoolApr.bind(this);
    this.tokenPrice = this.tokenPrice.bind(this);
    this.historicalPrice = this.historicalPrice.bind(this);
    this.swappableTokens = this.swappableTokens.bind(this);
    this.priceBounds = this.priceBounds.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.tradeSimulation = this.tradeSimulation.bind(this);
    this.joinAllTokensExactLptSimulation = this.joinAllTokensExactLptSimulation.bind(this);
    this.joinExactTokensSimulation = this.joinExactTokensSimulation.bind(this);
    this.joinTokenExactLptSimulation = this.joinTokenExactLptSimulation.bind(this);
    this.exitTokenExactLptSimulation = this.exitTokenExactLptSimulation.bind(this);
    this.exitExactTokensSimulation = this.exitExactTokensSimulation.bind(this);
    this.exitAllTokensExactLptSimulation = this.exitAllTokensExactLptSimulation.bind(this);
    this.userTradeHistory = this.userTradeHistory.bind(this);
    this.poolTradeHistory = this.poolTradeHistory.bind(this);
    this.tokenTradeVolume = this.tokenTradeVolume.bind(this);
    this.poolTradeVolume = this.poolTradeVolume.bind(this);
    this.favoritePairs = this.favoritePairs.bind(this);
    this.pulseTradablePairs = this.pulseTradablePairs.bind(this);
    this.order = this.order.bind(this);
    this.orders = this.orders.bind(this);
    this.hostChain = this.hostChain.bind(this);
    this.hostChains = this.hostChains.bind(this);
    this.validator = this.validator.bind(this);
    this.validators = this.validators.bind(this);
    this.voteIntervals = this.voteIntervals.bind(this);
    this.slashWindows = this.slashWindows.bind(this);
    this.voteSummary = this.voteSummary.bind(this);
    this.validatorVoteIntervalSummaries = this.validatorVoteIntervalSummaries.bind(this);
    this.validatorSlashWindowSummaries = this.validatorSlashWindowSummaries.bind(this);
    this.preVotes = this.preVotes.bind(this);
    this.votes = this.votes.bind(this);
    this.votePayloads = this.votePayloads.bind(this);
  }
  /* Asset */
  async asset(params: QueryAssetRequest): Promise<QueryAssetResponseSDKType> {
    const endpoint = `pryzmatics/asset/${params.assetId}`;
    return await this.req.get<QueryAssetResponseSDKType>(endpoint);
  }
  /* MaturityAll */
  async maturityAll(params: QueryAllMaturitiesRequest): Promise<QueryAllMaturitiesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    if (typeof params?.active !== "undefined") {
      options.params.active = params.active;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/maturity`;
    return await this.req.get<QueryAllMaturitiesResponseSDKType>(endpoint, options);
  }
  /* SubmitProposalMsgs */
  async submitProposalMsgs(params: QuerySubmitProposalMsgsRequest): Promise<QuerySubmitProposalMsgsResponseSDKType> {
    const endpoint = `pryzmatics/pgov/submit_proposal_msgs/${params.assetId}/${params.proposalId}`;
    return await this.req.get<QuerySubmitProposalMsgsResponseSDKType>(endpoint);
  }
  /* AssetProposals */
  async assetProposals(params: QueryAssetProposalRequest): Promise<QueryAssetProposalResponseSDKType> {
    const endpoint = `pryzmatics/pgov/asset_proposal/${params.assetId}`;
    return await this.req.get<QueryAssetProposalResponseSDKType>(endpoint);
  }
  /* PoolToken */
  async poolToken(params: QueryPoolTokenRequest): Promise<QueryPoolTokenResponseSDKType> {
    const endpoint = `pryzmatics/pool/token/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryPoolTokenResponseSDKType>(endpoint);
  }
  /* PoolTokens */
  async poolTokens(params: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponseSDKType> {
    const endpoint = `pryzmatics/pool/token/${params.poolId}`;
    return await this.req.get<QueryAllPoolTokenResponseSDKType>(endpoint);
  }
  /* Pool */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `pryzmatics/pool/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* Pools */
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/pool`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* Token */
  async token(params: QueryTokenRequest): Promise<QueryTokenResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `pryzmatics/token/${params.denom}`;
    return await this.req.get<QueryTokenResponseSDKType>(endpoint, options);
  }
  /* Tokens */
  async tokens(params: QueryTokensRequest): Promise<QueryTokensResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenType !== "undefined") {
      options.params.token_type = params.tokenType;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/token`;
    return await this.req.get<QueryTokensResponseSDKType>(endpoint, options);
  }
  /* HistoricalTokenYield */
  async historicalTokenYield(params: QueryHistoricalTokenYieldRequest): Promise<QueryHistoricalTokenYieldResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/token/historical_yield/${params.denom}`;
    return await this.req.get<QueryHistoricalTokenYieldResponseSDKType>(endpoint, options);
  }
  /* HistoricalPoolApr */
  async historicalPoolApr(params: QueryHistoricalPoolAprRequest): Promise<QueryHistoricalPoolAprResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/pool/historical_apr/${params.poolId}`;
    return await this.req.get<QueryHistoricalPoolAprResponseSDKType>(endpoint, options);
  }
  /* TokenPrice */
  async tokenPrice(params: QueryPriceRequest): Promise<QueryPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `pryzmatics/price/${params.tokenIn}`;
    return await this.req.get<QueryPriceResponseSDKType>(endpoint, options);
  }
  /* HistoricalPrice */
  async historicalPrice(params: QueryHistoricalPriceRequest): Promise<QueryHistoricalPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.quote !== "undefined") {
      options.params.quote = params.quote;
    }
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/price/historical/${params.denom}`;
    return await this.req.get<QueryHistoricalPriceResponseSDKType>(endpoint, options);
  }
  /* SwappableTokens */
  async swappableTokens(_params: QuerySwappableTokensRequest = {}): Promise<QuerySwappableTokensResponseSDKType> {
    const endpoint = `pryzmatics/price/swappable_tokens`;
    return await this.req.get<QuerySwappableTokensResponseSDKType>(endpoint);
  }
  /* PriceBounds */
  async priceBounds(params: QueryPriceBoundsRequest): Promise<QueryPriceBoundsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/price/bounds/${params.denom}`;
    return await this.req.get<QueryPriceBoundsResponseSDKType>(endpoint, options);
  }
  /* PriceChange */
  async priceChange(params: QueryPriceChangeRequest): Promise<QueryPriceChangeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/price/change/${params.denom}`;
    return await this.req.get<QueryPriceChangeResponseSDKType>(endpoint, options);
  }
  /* TradeSimulation */
  async tradeSimulation(params: QueryTradeSimulationRequest): Promise<QueryTradeSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.swapType !== "undefined") {
      options.params.swap_type = params.swapType;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.amount !== "undefined") {
      options.params.amount = params.amount;
    }
    if (typeof params?.steps !== "undefined") {
      options.params.steps = params.steps;
    }
    const endpoint = `pryzmatics/trade/simulation`;
    return await this.req.get<QueryTradeSimulationResponseSDKType>(endpoint, options);
  }
  /* JoinAllTokensExactLptSimulation */
  async joinAllTokensExactLptSimulation(params: QueryJoinAllTokensExactLptSimulationRequest): Promise<QueryJoinAllTokensExactLptSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptOutAmount !== "undefined") {
      options.params.lpt_out_amount = params.lptOutAmount;
    }
    const endpoint = `pryzmatics/trade/join_all_tokens_exact_lpt_simulation/${params.poolId}`;
    return await this.req.get<QueryJoinAllTokensExactLptSimulationResponseSDKType>(endpoint, options);
  }
  /* JoinExactTokensSimulation */
  async joinExactTokensSimulation(params: QueryJoinExactTokensSimulationRequest): Promise<QueryJoinExactTokensSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountsIn !== "undefined") {
      options.params.amounts_in = params.amountsIn;
    }
    const endpoint = `pryzmatics/trade/join_exact_tokens_simulation/${params.poolId}`;
    return await this.req.get<QueryJoinExactTokensSimulationResponseSDKType>(endpoint, options);
  }
  /* JoinTokenExactLptSimulation */
  async joinTokenExactLptSimulation(params: QueryJoinTokenExactLptSimulationRequest): Promise<QueryJoinTokenExactLptSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptOutAmount !== "undefined") {
      options.params.lpt_out_amount = params.lptOutAmount;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `pryzmatics/trade/join_token_exact_lpt_simulation/${params.poolId}`;
    return await this.req.get<QueryJoinTokenExactLptSimulationResponseSDKType>(endpoint, options);
  }
  /* ExitTokenExactLptSimulation */
  async exitTokenExactLptSimulation(params: QueryExitTokenExactLptSimulationRequest): Promise<QueryExitTokenExactLptSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptInAmount !== "undefined") {
      options.params.lpt_in_amount = params.lptInAmount;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `pryzmatics/trade/exit_token_exact_lpt_simulation/${params.poolId}`;
    return await this.req.get<QueryExitTokenExactLptSimulationResponseSDKType>(endpoint, options);
  }
  /* ExitExactTokensSimulation */
  async exitExactTokensSimulation(params: QueryExitExactTokensSimulationRequest): Promise<QueryExitExactTokensSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountsOut !== "undefined") {
      options.params.amounts_out = params.amountsOut;
    }
    const endpoint = `pryzmatics/trade/exit_exact_tokens_simulation/${params.poolId}`;
    return await this.req.get<QueryExitExactTokensSimulationResponseSDKType>(endpoint, options);
  }
  /* ExitAllTokensExactLptSimulation */
  async exitAllTokensExactLptSimulation(params: QueryExitAllTokensExactLptSimulationRequest): Promise<QueryExitAllTokensExactLptSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptInAmount !== "undefined") {
      options.params.lpt_in_amount = params.lptInAmount;
    }
    const endpoint = `pryzmatics/trade/exit_all_tokens_exact_lpt_simulation/${params.poolId}`;
    return await this.req.get<QueryExitAllTokensExactLptSimulationResponseSDKType>(endpoint, options);
  }
  /* UserTradeHistory */
  async userTradeHistory(params: QueryUserTradeHistoryRequest): Promise<QueryUserTradeHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.firstToken !== "undefined") {
      options.params.first_token = params.firstToken;
    }
    if (typeof params?.secondToken !== "undefined") {
      options.params.second_token = params.secondToken;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.operationType !== "undefined") {
      options.params.operation_type = params.operationType;
    }
    const endpoint = `pryzmatics/trade/user_trade_history`;
    return await this.req.get<QueryUserTradeHistoryResponseSDKType>(endpoint, options);
  }
  /* PoolTradeHistory */
  async poolTradeHistory(params: QueryPoolTradeHistoryRequest): Promise<QueryPoolTradeHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.firstToken !== "undefined") {
      options.params.first_token = params.firstToken;
    }
    if (typeof params?.secondToken !== "undefined") {
      options.params.second_token = params.secondToken;
    }
    if (typeof params?.operationType !== "undefined") {
      options.params.operation_type = params.operationType;
    }
    const endpoint = `pryzmatics/trade/pool_trade_history`;
    return await this.req.get<QueryPoolTradeHistoryResponseSDKType>(endpoint, options);
  }
  /* TokenTradeVolume */
  async tokenTradeVolume(params: QueryTokenTradeVolumeRequest): Promise<QueryTokenTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/trade/volume/token/${params.denom}`;
    return await this.req.get<QueryTokenTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* PoolTradeVolume */
  async poolTradeVolume(params: QueryPoolTradeVolumeRequest): Promise<QueryPoolTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/trade/volume/pool/${params.poolId}`;
    return await this.req.get<QueryPoolTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* FavoritePairs */
  async favoritePairs(params: QueryFavoritePairsRequest): Promise<QueryFavoritePairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/trade/volume/favorite_pairs`;
    return await this.req.get<QueryFavoritePairsResponseSDKType>(endpoint, options);
  }
  /* PulseTradablePairs */
  async pulseTradablePairs(params: QueryPulseTradablePairsRequest): Promise<QueryPulseTradablePairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `pryzmatics/trade/pulse_tradable_pairs/${params.denom}`;
    return await this.req.get<QueryPulseTradablePairsResponseSDKType>(endpoint, options);
  }
  /* Order */
  async order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType> {
    const endpoint = `pryzmatics/trade/order/${params.id}`;
    return await this.req.get<QueryOrderResponseSDKType>(endpoint);
  }
  /* Orders */
  async orders(params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/order`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }
  /* HostChain */
  async hostChain(params: QueryHostChainRequest): Promise<QueryHostChainResponseSDKType> {
    const endpoint = `pryzmatics/icstaking/host_chain/${params.hostChainId}`;
    return await this.req.get<QueryHostChainResponseSDKType>(endpoint);
  }
  /* HostChains */
  async hostChains(params: QueryHostChainsRequest = {
    pagination: undefined
  }): Promise<QueryHostChainsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/icstaking/host_chain`;
    return await this.req.get<QueryHostChainsResponseSDKType>(endpoint, options);
  }
  /* Validator */
  async validator(params: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType> {
    const endpoint = `pryzmatics/oracle/validator/${params.operatorAddress}`;
    return await this.req.get<QueryValidatorResponseSDKType>(endpoint);
  }
  /* Validators */
  async validators(params: QueryValidatorsRequest = {
    pagination: undefined
  }): Promise<QueryValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/validator`;
    return await this.req.get<QueryValidatorsResponseSDKType>(endpoint, options);
  }
  /* VoteIntervals */
  async voteIntervals(params: QueryVoteIntervalsRequest): Promise<QueryVoteIntervalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/vote_interval`;
    return await this.req.get<QueryVoteIntervalsResponseSDKType>(endpoint, options);
  }
  /* SlashWindows */
  async slashWindows(params: QuerySlashWindowsRequest): Promise<QuerySlashWindowsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/slash_window`;
    return await this.req.get<QuerySlashWindowsResponseSDKType>(endpoint, options);
  }
  /* VoteSummary */
  async voteSummary(_params: QueryVoteSummaryRequest = {}): Promise<QueryVoteSummaryResponseSDKType> {
    const endpoint = `pryzmatics/oracle/vote_summary`;
    return await this.req.get<QueryVoteSummaryResponseSDKType>(endpoint);
  }
  /* ValidatorVoteIntervalSummaries */
  async validatorVoteIntervalSummaries(params: QueryValidatorVoteIntervalSummariesRequest): Promise<QueryValidatorVoteIntervalSummariesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/validator/vote_interval_summary/${params.operatorAddress}`;
    return await this.req.get<QueryValidatorVoteIntervalSummariesResponseSDKType>(endpoint, options);
  }
  /* ValidatorSlashWindowSummaries */
  async validatorSlashWindowSummaries(params: QueryValidatorSlashWindowSummariesRequest): Promise<QueryValidatorSlashWindowSummariesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/validator/slash_window_summary/${params.operatorAddress}`;
    return await this.req.get<QueryValidatorSlashWindowSummariesResponseSDKType>(endpoint, options);
  }
  /* PreVotes */
  async preVotes(params: QueryPreVotesRequest): Promise<QueryPreVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.feeder !== "undefined") {
      options.params.feeder = params.feeder;
    }
    if (typeof params?.validator !== "undefined") {
      options.params.validator = params.validator;
    }
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/pre_vote`;
    return await this.req.get<QueryPreVotesResponseSDKType>(endpoint, options);
  }
  /* Votes */
  async votes(params: QueryVotesRequest): Promise<QueryVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.feeder !== "undefined") {
      options.params.feeder = params.feeder;
    }
    if (typeof params?.validator !== "undefined") {
      options.params.validator = params.validator;
    }
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/vote`;
    return await this.req.get<QueryVotesResponseSDKType>(endpoint, options);
  }
  /* VotePayloads */
  async votePayloads(params: QueryVotePayloadsRequest): Promise<QueryVotePayloadsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.voteId !== "undefined") {
      options.params.vote_id = params.voteId;
    }
    if (typeof params?.module !== "undefined") {
      options.params.module = params.module;
    }
    if (typeof params?.namespace !== "undefined") {
      options.params.namespace = params.namespace;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/vote_payload`;
    return await this.req.get<QueryVotePayloadsResponseSDKType>(endpoint, options);
  }
}