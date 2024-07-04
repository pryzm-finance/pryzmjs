import { QueryVoteIntervalReportRequest, QueryVoteIntervalReportResponseSDKType } from "./oracle/vote_interval_report";
import { QueryAllFlowRequest, QueryAllFlowResponseSDKType, QueryFlowRequest, QueryFlowResponseSDKType } from "./flowtrade/flowtrade";
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryAssetRequest, QueryAssetResponseSDKType } from "./asset/asset";
import { QueryAllMaturitiesRequest, QueryAllMaturitiesResponseSDKType } from "./maturity/maturity";
import { QueryProposalSubmissionMsgsRequest, QueryProposalSubmissionMsgsResponseSDKType, QueryAssetProposalRequest, QueryAssetProposalResponseSDKType } from "./pgov/pgov";
import { QueryPoolTokenRequest, QueryPoolTokenResponseSDKType, QueryAllPoolTokenRequest, QueryAllPoolTokenResponseSDKType } from "./pool/pool_token";
import { QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType } from "./pool/pool";
import { QueryTokenRequest, QueryTokenResponseSDKType, QueryTokensRequest, QueryTokensResponseSDKType } from "./pool/token";
import { QueryHistoricalTokenYieldRequest, QueryHistoricalTokenYieldResponseSDKType } from "./pool/historical_token_yield";
import { QueryHistoricalPoolAprRequest, QueryHistoricalPoolAprResponseSDKType } from "./pool/historical_pool_apr";
import { QueryPriceRequest, QueryPriceResponseSDKType, QueryPricesRequest, QueryPricesResponseSDKType } from "./price/price";
import { QueryHistoricalPriceRequest, QueryHistoricalPriceResponseSDKType } from "./price/historical_price";
import { QuerySwappableTokensRequest, QuerySwappableTokensResponseSDKType } from "./price/swappable_tokens";
import { QueryPriceBoundsRequest, QueryPriceBoundsResponseSDKType } from "./price/price_bounds";
import { QueryTradeSimulationRequest, QueryTradeSimulationResponseSDKType } from "./trade/trade_simulation";
import { QuerySwapStepsRequest, QuerySwapStepsResponseSDKType } from "./trade/swap_steps";
import { QueryJoinAllTokensExactLptSimulationRequest, QueryJoinAllTokensExactLptSimulationResponseSDKType } from "./trade/join_all_tokens_exact_lpt_simulation";
import { QueryJoinExactTokensSimulationRequest, QueryJoinExactTokensSimulationResponseSDKType } from "./trade/join_exact_tokens_simulation";
import { QueryJoinTokenExactLptSimulationRequest, QueryJoinTokenExactLptSimulationResponseSDKType } from "./trade/join_token_exact_lpt_simulation";
import { QueryZeroImpactJoinYammSimulationRequest, QueryZeroImpactJoinYammSimulationResponseSDKType } from "./trade/zero_impact_join_yamm_simulation";
import { QueryExitTokenExactLptSimulationRequest, QueryExitTokenExactLptSimulationResponseSDKType } from "./trade/exit_token_exact_lpt_simulation";
import { QueryExitExactTokensSimulationRequest, QueryExitExactTokensSimulationResponseSDKType } from "./trade/exit_exact_tokens_simulation";
import { QueryExitAllTokensExactLptSimulationRequest, QueryExitAllTokensExactLptSimulationResponseSDKType } from "./trade/exit_all_tokens_exact_lpt_simulation";
import { QueryUserTradeHistoryRequest, QueryUserTradeHistoryResponseSDKType } from "./trade/user_trade_history";
import { QueryTokenTradeVolumeRequest, QueryTokenTradeVolumeResponseSDKType, QueryPoolTradeVolumeRequest, QueryPoolTradeVolumeResponseSDKType, QueryFavoritePairsRequest, QueryFavoritePairsResponseSDKType } from "./trade/trade_volume";
import { QueryPulseTradablePairsRequest, QueryPulseTradablePairsResponseSDKType, QueryPulseTradablePairPriceRequest, QueryPulseTradablePairPriceResponseSDKType } from "./trade/pulse_tradable_pairs";
import { QueryOrderRequest, QueryOrderResponseSDKType, QueryOrdersRequest, QueryOrdersResponseSDKType, QueryMatchableOrderCountsRequest, QueryMatchableOrderCountsResponseSDKType, QueryMatchableOrdersForPairRequest, QueryMatchableOrdersForPairResponseSDKType } from "./trade/order";
import { QueryDirectlyConnectedTokenPairsRequest, QueryDirectlyConnectedTokenPairsResponseSDKType } from "./trade/directly_connected_token_pairs";
import { QueryHostChainUnbondingTimeRequest, QueryHostChainUnbondingTimeResponseSDKType, QueryHostChainRequest, QueryHostChainResponseSDKType, QueryHostChainsRequest, QueryHostChainsResponseSDKType } from "./icstaking/host_chain";
import { QueryValidatorRequest, QueryValidatorResponseSDKType, QueryValidatorsRequest, QueryValidatorsResponseSDKType } from "./oracle/validator";
import { QueryVoteIntervalsRequest, QueryVoteIntervalsResponseSDKType } from "./oracle/vote_interval";
import { QuerySlashWindowsRequest, QuerySlashWindowsResponseSDKType } from "./oracle/slash_window";
import { QueryVoteSummaryRequest, QueryVoteSummaryResponseSDKType } from "./oracle/vote_summary";
import { QueryValidatorVoteIntervalSummariesRequest, QueryValidatorVoteIntervalSummariesResponseSDKType } from "./oracle/validator_vote_interval_summary";
import { QueryValidatorSlashWindowSummariesRequest, QueryValidatorSlashWindowSummariesResponseSDKType } from "./oracle/validator_slash_window_summary";
import { QueryPreVotesRequest, QueryPreVotesResponseSDKType } from "./oracle/pre_vote";
import { QueryVotesRequest, QueryVotesResponseSDKType } from "./oracle/vote";
import { QueryVotePayloadsRequest, QueryVotePayloadsResponseSDKType } from "./oracle/vote_payload";
import { QueryBallotVoteResultsRequest, QueryBallotVoteResultsResponseSDKType } from "./oracle/ballot_vote_result";
import { QuerySlashWindowAnalysisRequest, QuerySlashWindowAnalysisResponseSDKType } from "./oracle/slash_window_analysis";
import { QueryUserStakesRequest, QueryUserStakesResponseSDKType } from "./ystaking/user_stake";
import { QueryClaimRequest, QueryClaimResponseSDKType } from "./faucet/claim";
import { QueryFlowHistoricalPriceRequest, QueryFlowHistoricalPriceResponseSDKType } from "./flowtrade/flow_historical_price";
import { QueryConfigRequest, QueryConfigResponseSDKType } from "./common/config";
import { QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType } from "./gov/proposal";
import { QueryProposalVotesRequest, QueryProposalVotesResponseSDKType } from "./gov/vote";
import { QueryStatisticsRequest, QueryStatisticsResponseSDKType } from "./statistics/statistics";
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
    this.proposalSubmissionMsgs = this.proposalSubmissionMsgs.bind(this);
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
    this.tokenPrices = this.tokenPrices.bind(this);
    this.historicalPrice = this.historicalPrice.bind(this);
    this.swappableTokens = this.swappableTokens.bind(this);
    this.priceBounds = this.priceBounds.bind(this);
    this.tradeSimulation = this.tradeSimulation.bind(this);
    this.swapSteps = this.swapSteps.bind(this);
    this.joinAllTokensExactLptSimulation = this.joinAllTokensExactLptSimulation.bind(this);
    this.joinExactTokensSimulation = this.joinExactTokensSimulation.bind(this);
    this.joinTokenExactLptSimulation = this.joinTokenExactLptSimulation.bind(this);
    this.zeroImpactJoinYammSimulation = this.zeroImpactJoinYammSimulation.bind(this);
    this.exitTokenExactLptSimulation = this.exitTokenExactLptSimulation.bind(this);
    this.exitExactTokensSimulation = this.exitExactTokensSimulation.bind(this);
    this.exitAllTokensExactLptSimulation = this.exitAllTokensExactLptSimulation.bind(this);
    this.userTradeHistory = this.userTradeHistory.bind(this);
    this.tokenTradeVolume = this.tokenTradeVolume.bind(this);
    this.poolTradeVolume = this.poolTradeVolume.bind(this);
    this.favoritePairs = this.favoritePairs.bind(this);
    this.pulseTradablePairs = this.pulseTradablePairs.bind(this);
    this.pulseTradablePairPrice = this.pulseTradablePairPrice.bind(this);
    this.order = this.order.bind(this);
    this.orders = this.orders.bind(this);
    this.matchableOrderCounts = this.matchableOrderCounts.bind(this);
    this.matchableOrdersForPair = this.matchableOrdersForPair.bind(this);
    this.directlyConnectedTokenPairs = this.directlyConnectedTokenPairs.bind(this);
    this.hostChainUnbondingTime = this.hostChainUnbondingTime.bind(this);
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
    this.ballotVoteResults = this.ballotVoteResults.bind(this);
    this.voteIntervalReport = this.voteIntervalReport.bind(this);
    this.oracleAnalysis = this.oracleAnalysis.bind(this);
    this.userStakes = this.userStakes.bind(this);
    this.faucetClaim = this.faucetClaim.bind(this);
    this.allFlow = this.allFlow.bind(this);
    this.flow = this.flow.bind(this);
    this.flowHistoricalPrice = this.flowHistoricalPrice.bind(this);
    this.config = this.config.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.proposalVotes = this.proposalVotes.bind(this);
    this.statistics = this.statistics.bind(this);
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
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/maturity`;
    return await this.req.get<QueryAllMaturitiesResponseSDKType>(endpoint, options);
  }
  /* ProposalSubmissionMsgs */
  async proposalSubmissionMsgs(params: QueryProposalSubmissionMsgsRequest): Promise<QueryProposalSubmissionMsgsResponseSDKType> {
    const endpoint = `pryzmatics/pgov/proposal_submission_msgs/${params.assetId}/${params.proposalId}/${params.creator}`;
    return await this.req.get<QueryProposalSubmissionMsgsResponseSDKType>(endpoint);
  }
  /* AssetProposals */
  async assetProposals(params: QueryAssetProposalRequest): Promise<QueryAssetProposalResponseSDKType> {
    const endpoint = `pryzmatics/pgov/asset_proposals/${params.assetId}`;
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
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
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
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
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
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `pryzmatics/price/${params.tokenOut}`;
    return await this.req.get<QueryPriceResponseSDKType>(endpoint, options);
  }
  /* TokenPrices */
  async tokenPrices(params: QueryPricesRequest): Promise<QueryPricesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/prices/${params.blockHeight}`;
    return await this.req.get<QueryPricesResponseSDKType>(endpoint, options);
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
  /* SwapSteps */
  async swapSteps(params: QuerySwapStepsRequest): Promise<QuerySwapStepsResponseSDKType> {
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
    const endpoint = `pryzmatics/trade/swap_steps`;
    return await this.req.get<QuerySwapStepsResponseSDKType>(endpoint, options);
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
  /* ZeroImpactJoinYammSimulation */
  async zeroImpactJoinYammSimulation(params: QueryZeroImpactJoinYammSimulationRequest): Promise<QueryZeroImpactJoinYammSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.cAmountIn !== "undefined") {
      options.params.c_amount_in = params.cAmountIn;
    }
    const endpoint = `pryzmatics/trade/zero_impact_join_yamm_simulation`;
    return await this.req.get<QueryZeroImpactJoinYammSimulationResponseSDKType>(endpoint, options);
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
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/user_trade_history`;
    return await this.req.get<QueryUserTradeHistoryResponseSDKType>(endpoint, options);
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
  /* PulseTradablePairPrice */
  async pulseTradablePairPrice(params: QueryPulseTradablePairPriceRequest): Promise<QueryPulseTradablePairPriceResponseSDKType> {
    const endpoint = `pryzmatics/trade/pulse_tradable_pair_price/${params.tokenIn}/${params.tokenOut}/${params.poolId}/${params.whitelistedRoute}`;
    return await this.req.get<QueryPulseTradablePairPriceResponseSDKType>(endpoint);
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
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/order`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }
  /* MatchableOrderCounts */
  async matchableOrderCounts(params: QueryMatchableOrderCountsRequest): Promise<QueryMatchableOrderCountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.minBuy !== "undefined") {
      options.params.min_buy = params.minBuy;
    }
    if (typeof params?.minSell !== "undefined") {
      options.params.min_sell = params.minSell;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/matchable_order_counts`;
    return await this.req.get<QueryMatchableOrderCountsResponseSDKType>(endpoint, options);
  }
  /* MatchableOrdersForPair */
  async matchableOrdersForPair(params: QueryMatchableOrdersForPairRequest): Promise<QueryMatchableOrdersForPairResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.minBuyPrice !== "undefined") {
      options.params.min_buy_price = params.minBuyPrice;
    }
    if (typeof params?.minSellPrice !== "undefined") {
      options.params.min_sell_price = params.minSellPrice;
    }
    const endpoint = `pryzmatics/trade/matchable_orders_for_pair/${params.tokenIn}/${params.tokenOut}/${params.poolId}/${params.whitelistedRoute}`;
    return await this.req.get<QueryMatchableOrdersForPairResponseSDKType>(endpoint, options);
  }
  /* DirectlyConnectedTokenPairs */
  async directlyConnectedTokenPairs(params: QueryDirectlyConnectedTokenPairsRequest = {
    pagination: undefined
  }): Promise<QueryDirectlyConnectedTokenPairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/directly_connected_token_pair`;
    return await this.req.get<QueryDirectlyConnectedTokenPairsResponseSDKType>(endpoint, options);
  }
  /* HostChainUnbondingTime */
  async hostChainUnbondingTime(params: QueryHostChainUnbondingTimeRequest): Promise<QueryHostChainUnbondingTimeResponseSDKType> {
    const endpoint = `pryzmatics/icstaking/host_chain_unbonding_time/${params.hostChainId}`;
    return await this.req.get<QueryHostChainUnbondingTimeResponseSDKType>(endpoint);
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
  /* BallotVoteResults */
  async ballotVoteResults(params: QueryBallotVoteResultsRequest): Promise<QueryBallotVoteResultsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.module !== "undefined") {
      options.params.module = params.module;
    }
    if (typeof params?.namespace !== "undefined") {
      options.params.namespace = params.namespace;
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
    const endpoint = `pryzmatics/oracle/ballot_vote_result`;
    return await this.req.get<QueryBallotVoteResultsResponseSDKType>(endpoint, options);
  }
  /* VoteIntervalReport */
  async voteIntervalReport(params: QueryVoteIntervalReportRequest): Promise<QueryVoteIntervalReportResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.validators !== "undefined") {
      options.params.validators = params.validators;
    }
    if (typeof params?.namespace !== "undefined") {
      options.params.namespace = params.namespace;
    }
    if (typeof params?.module !== "undefined") {
      options.params.module = params.module;
    }
    if (typeof params?.csv !== "undefined") {
      options.params.csv = params.csv;
    }
    const endpoint = `pryzmatics/oracle/vote_interval_report/${params.voteIntervalCloseBlockHeight}`;
    return await this.req.get<QueryVoteIntervalReportResponseSDKType>(endpoint, options);
  }
  /* OracleAnalysis */
  async oracleAnalysis(_params: QuerySlashWindowAnalysisRequest = {}): Promise<QuerySlashWindowAnalysisResponseSDKType> {
    const endpoint = `pryzmatics/oracle/slash_window_analysis`;
    return await this.req.get<QuerySlashWindowAnalysisResponseSDKType>(endpoint);
  }
  /* UserStakes */
  async userStakes(params: QueryUserStakesRequest): Promise<QueryUserStakesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `pryzmatics/ystaking/user_stake`;
    return await this.req.get<QueryUserStakesResponseSDKType>(endpoint, options);
  }
  /* FaucetClaim */
  async faucetClaim(params: QueryClaimRequest): Promise<QueryClaimResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.captchaRequest !== "undefined") {
      options.params.captcha_request = params.captchaRequest;
    }
    const endpoint = `pryzmatics/faucet/claim`;
    return await this.req.get<QueryClaimResponseSDKType>(endpoint, options);
  }
  /* AllFlow */
  async allFlow(params: QueryAllFlowRequest): Promise<QueryAllFlowResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof params?.tokenInDenom !== "undefined") {
      options.params.token_in_denom = params.tokenInDenom;
    }
    if (typeof params?.tokenOutDenom !== "undefined") {
      options.params.token_out_denom = params.tokenOutDenom;
    }
    if (typeof params?.tokenInClaimability !== "undefined") {
      options.params.token_in_claimability = params.tokenInClaimability;
    }
    if (typeof params?.participant !== "undefined") {
      options.params.participant = params.participant;
    }
    if (typeof params?.participationType !== "undefined") {
      options.params.participation_type = params.participationType;
    }
    if (typeof params?.tokenOutClaimability !== "undefined") {
      options.params.token_out_claimability = params.tokenOutClaimability;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/flowtrade/flow`;
    return await this.req.get<QueryAllFlowResponseSDKType>(endpoint, options);
  }
  /* Flow */
  async flow(params: QueryFlowRequest): Promise<QueryFlowResponseSDKType> {
    const endpoint = `pryzmatics/flowtrade/flow/${params.id}`;
    return await this.req.get<QueryFlowResponseSDKType>(endpoint);
  }
  /* FlowHistoricalPrice */
  async flowHistoricalPrice(params: QueryFlowHistoricalPriceRequest): Promise<QueryFlowHistoricalPriceResponseSDKType> {
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
    const endpoint = `pryzmatics/flowtrade/flow/historical_price/${params.flowId}`;
    return await this.req.get<QueryFlowHistoricalPriceResponseSDKType>(endpoint, options);
  }
  /* Config */
  async config(_params: QueryConfigRequest = {}): Promise<QueryConfigResponseSDKType> {
    const endpoint = `pryzmatics/config`;
    return await this.req.get<QueryConfigResponseSDKType>(endpoint);
  }
  /* Proposal */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const endpoint = `pryzmatics/gov/proposal/${params.id}`;
    return await this.req.get<QueryProposalResponseSDKType>(endpoint);
  }
  /* Proposals */
  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof params?.proposer !== "undefined") {
      options.params.proposer = params.proposer;
    }
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/gov/proposal`;
    return await this.req.get<QueryProposalsResponseSDKType>(endpoint, options);
  }
  /* ProposalVotes */
  async proposalVotes(params: QueryProposalVotesRequest): Promise<QueryProposalVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/gov/vote/${params.proposalId}`;
    return await this.req.get<QueryProposalVotesResponseSDKType>(endpoint, options);
  }
  /* Statistics */
  async statistics(_params: QueryStatisticsRequest = {}): Promise<QueryStatisticsResponseSDKType> {
    const endpoint = `pryzmatics/statistics`;
    return await this.req.get<QueryStatisticsResponseSDKType>(endpoint);
  }
}