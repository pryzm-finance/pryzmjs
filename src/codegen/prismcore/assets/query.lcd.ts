//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetRefractableAssetRequest, QueryGetRefractableAssetResponseSDKType, QueryAllRefractableAssetRequest, QueryAllRefractableAssetResponseSDKType, QueryGetMaturityLevelRequest, QueryGetMaturityLevelResponseSDKType, QueryAllMaturityLevelRequest, QueryAllMaturityLevelResponseSDKType, QueryGetExchangeRateRequest, QueryGetExchangeRateResponseSDKType, QueryAllExchangeRateRequest, QueryAllExchangeRateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.refractableAsset = this.refractableAsset.bind(this);
    this.refractableAssetAll = this.refractableAssetAll.bind(this);
    this.maturityLevel = this.maturityLevel.bind(this);
    this.maturityLevelAll = this.maturityLevelAll.bind(this);
    this.exchangeRate = this.exchangeRate.bind(this);
    this.exchangeRateAll = this.exchangeRateAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `prism-finance/prism-core/assets/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a RefractableAsset by index. */
  async refractableAsset(params: QueryGetRefractableAssetRequest): Promise<QueryGetRefractableAssetResponseSDKType> {
    const endpoint = `prism-finance/prism-core/assets/refractable_asset/${params.assetId}`;
    return await this.req.get<QueryGetRefractableAssetResponseSDKType>(endpoint);
  }
  /* Queries a list of RefractableAsset items. */
  async refractableAssetAll(params: QueryAllRefractableAssetRequest, options: any = {params: {}}): Promise<QueryAllRefractableAssetResponseSDKType> {
    if (typeof params?.enabled !== "undefined") {
      options.params.enabled = params.enabled;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/assets/refractable_asset`;
    return await this.req.get<QueryAllRefractableAssetResponseSDKType>(endpoint, options);
  }
  /* Queries a MaturityLevel by index. */
  async maturityLevel(params: QueryGetMaturityLevelRequest): Promise<QueryGetMaturityLevelResponseSDKType> {
    const endpoint = `prism-finance/prism-core/assets/maturity_level/${params.active}/${params.assetId}/${params.symbol}`;
    return await this.req.get<QueryGetMaturityLevelResponseSDKType>(endpoint);
  }
  /* Queries a list of MaturityLevel items. */
  async maturityLevelAll(params: QueryAllMaturityLevelRequest, options: any = {params: {}}): Promise<QueryAllMaturityLevelResponseSDKType> {
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    if (typeof params?.assetEnabled !== "undefined") {
      options.params.asset_enabled = params.assetEnabled;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/assets/maturity_level/${params.active}`;
    return await this.req.get<QueryAllMaturityLevelResponseSDKType>(endpoint, options);
  }
  /* Queries a AssetExchangeRate by index. */
  async exchangeRate(params: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponseSDKType> {
    const endpoint = `prism-finance/prism-core/assets/exchange_rate/${params.assetId}`;
    return await this.req.get<QueryGetExchangeRateResponseSDKType>(endpoint);
  }
  /* Queries a list of ExchangeRate items. */
  async exchangeRateAll(params: QueryAllExchangeRateRequest = {
    pagination: undefined
  }, options: any = {params: {}}): Promise<QueryAllExchangeRateResponseSDKType> {
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/assets/exchange_rate`;
    return await this.req.get<QueryAllExchangeRateResponseSDKType>(endpoint, options);
  }
}