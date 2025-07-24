import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryLiquidValidatorsRequest, QueryLiquidValidatorsResponseSDKType, QueryLiquidValidatorRequest, QueryLiquidValidatorResponseSDKType, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponseSDKType, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponseSDKType, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponseSDKType, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponseSDKType, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponseSDKType, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponseSDKType, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponseSDKType, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryTokenizeShareRecordRewardRequest, QueryTokenizeShareRecordRewardResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.liquidValidators = this.liquidValidators.bind(this);
    this.liquidValidator = this.liquidValidator.bind(this);
    this.tokenizeShareRecordById = this.tokenizeShareRecordById.bind(this);
    this.tokenizeShareRecordByDenom = this.tokenizeShareRecordByDenom.bind(this);
    this.tokenizeShareRecordsOwned = this.tokenizeShareRecordsOwned.bind(this);
    this.allTokenizeShareRecords = this.allTokenizeShareRecords.bind(this);
    this.lastTokenizeShareRecordId = this.lastTokenizeShareRecordId.bind(this);
    this.totalTokenizeSharedAssets = this.totalTokenizeSharedAssets.bind(this);
    this.totalLiquidStaked = this.totalLiquidStaked.bind(this);
    this.tokenizeShareLockInfo = this.tokenizeShareLockInfo.bind(this);
    this.params = this.params.bind(this);
    this.tokenizeShareRecordReward = this.tokenizeShareRecordReward.bind(this);
  }
  /* LiquidValidators queries all liquid validators.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async liquidValidators(params: QueryLiquidValidatorsRequest = {
    pagination: undefined
  }): Promise<QueryLiquidValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gaia/liquid/v1beta1/liquid_validators`;
    return await this.req.get<QueryLiquidValidatorsResponseSDKType>(endpoint, options);
  }
  /* Query for an individual liquid validator by validator address */
  async liquidValidator(params: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/liquid_validator/${params.validatorAddr}`;
    return await this.req.get<QueryLiquidValidatorResponseSDKType>(endpoint);
  }
  /* Query for individual tokenize share record information by share by id */
  async tokenizeShareRecordById(params: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/tokenize_share_record_by_id/${params.id}`;
    return await this.req.get<QueryTokenizeShareRecordByIdResponseSDKType>(endpoint);
  }
  /* Query for individual tokenize share record information by share denom */
  async tokenizeShareRecordByDenom(params: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/tokenize_share_record_by_denom/${params.denom}`;
    return await this.req.get<QueryTokenizeShareRecordByDenomResponseSDKType>(endpoint);
  }
  /* Query tokenize share records by address */
  async tokenizeShareRecordsOwned(params: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/tokenize_share_record_owned/${params.owner}`;
    return await this.req.get<QueryTokenizeShareRecordsOwnedResponseSDKType>(endpoint);
  }
  /* Query for all tokenize share records */
  async allTokenizeShareRecords(params: QueryAllTokenizeShareRecordsRequest = {
    pagination: undefined
  }): Promise<QueryAllTokenizeShareRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gaia/liquid/v1beta1/tokenize_share_records`;
    return await this.req.get<QueryAllTokenizeShareRecordsResponseSDKType>(endpoint, options);
  }
  /* Query for last tokenize share record id */
  async lastTokenizeShareRecordId(_params: QueryLastTokenizeShareRecordIdRequest = {}): Promise<QueryLastTokenizeShareRecordIdResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/last_tokenize_share_record_id`;
    return await this.req.get<QueryLastTokenizeShareRecordIdResponseSDKType>(endpoint);
  }
  /* Query for total tokenized staked assets */
  async totalTokenizeSharedAssets(_params: QueryTotalTokenizeSharedAssetsRequest = {}): Promise<QueryTotalTokenizeSharedAssetsResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/total_tokenize_shared_assets`;
    return await this.req.get<QueryTotalTokenizeSharedAssetsResponseSDKType>(endpoint);
  }
  /* Query for total liquid staked (including tokenized shares or owned by an
   liquid staking provider) */
  async totalLiquidStaked(_params: QueryTotalLiquidStaked = {}): Promise<QueryTotalLiquidStakedResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/total_liquid_staked`;
    return await this.req.get<QueryTotalLiquidStakedResponseSDKType>(endpoint);
  }
  /* Query tokenize share locks */
  async tokenizeShareLockInfo(params: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/tokenize_share_lock_info/${params.address}`;
    return await this.req.get<QueryTokenizeShareLockInfoResponseSDKType>(endpoint);
  }
  /* Parameters queries the liquid parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* TokenizeShareRecordReward queries the tokenize share record rewards */
  async tokenizeShareRecordReward(params: QueryTokenizeShareRecordRewardRequest): Promise<QueryTokenizeShareRecordRewardResponseSDKType> {
    const endpoint = `gaia/liquid/v1beta1/${params.ownerAddress}/tokenize_share_record_rewards`;
    return await this.req.get<QueryTokenizeShareRecordRewardResponseSDKType>(endpoint);
  }
}