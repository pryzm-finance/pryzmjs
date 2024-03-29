import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAlliancesRequest, QueryAlliancesResponseSDKType, QueryAllAlliancesDelegationsRequest, QueryAlliancesDelegationsResponseSDKType, QueryAllianceValidatorRequest, QueryAllianceValidatorResponseSDKType, QueryAllAllianceValidatorsRequest, QueryAllianceValidatorsResponseSDKType, QueryAlliancesDelegationsRequest, QueryAlliancesDelegationByValidatorRequest, QueryAllianceDelegationRequest, QueryAllianceDelegationResponseSDKType, QueryAllianceDelegationRewardsRequest, QueryAllianceDelegationRewardsResponseSDKType, QueryIBCAllianceDelegationRewardsRequest, QueryAllianceUnbondingsByDelegatorRequest, QueryAllianceUnbondingsByDelegatorResponseSDKType, QueryAllianceUnbondingsByDenomAndDelegatorRequest, QueryAllianceUnbondingsByDenomAndDelegatorResponseSDKType, QueryAllianceUnbondingsRequest, QueryAllianceUnbondingsResponseSDKType, QueryAllianceRedelegationsByDelegatorRequest, QueryAllianceRedelegationsByDelegatorResponseSDKType, QueryAllianceRedelegationsRequest, QueryAllianceRedelegationsResponseSDKType, QueryAllianceRequest, QueryAllianceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.alliances = this.alliances.bind(this);
    this.allAlliancesDelegations = this.allAlliancesDelegations.bind(this);
    this.allianceValidator = this.allianceValidator.bind(this);
    this.allAllianceValidators = this.allAllianceValidators.bind(this);
    this.alliancesDelegation = this.alliancesDelegation.bind(this);
    this.alliancesDelegationByValidator = this.alliancesDelegationByValidator.bind(this);
    this.allianceDelegation = this.allianceDelegation.bind(this);
    this.allianceDelegationRewards = this.allianceDelegationRewards.bind(this);
    this.iBCAllianceDelegationRewards = this.iBCAllianceDelegationRewards.bind(this);
    this.allianceUnbondingsByDelegator = this.allianceUnbondingsByDelegator.bind(this);
    this.allianceUnbondingsByDenomAndDelegator = this.allianceUnbondingsByDenomAndDelegator.bind(this);
    this.allianceUnbondings = this.allianceUnbondings.bind(this);
    this.allianceRedelegationsByDelegator = this.allianceRedelegationsByDelegator.bind(this);
    this.allianceRedelegations = this.allianceRedelegations.bind(this);
    this.alliance = this.alliance.bind(this);
  }
  /* Query Alliance module parameters more info about the params
   https://docs.alliance.money/tech/parameters */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `terra/alliances/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Query all alliances with pagination */
  async alliances(params: QueryAlliancesRequest = {
    pagination: undefined
  }): Promise<QueryAlliancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances`;
    return await this.req.get<QueryAlliancesResponseSDKType>(endpoint, options);
  }
  /* Query all alliances delegations with pagination */
  async allAlliancesDelegations(params: QueryAllAlliancesDelegationsRequest = {
    pagination: undefined
  }): Promise<QueryAlliancesDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/delegations`;
    return await this.req.get<QueryAlliancesDelegationsResponseSDKType>(endpoint, options);
  }
  /* Query alliance validator */
  async allianceValidator(params: QueryAllianceValidatorRequest): Promise<QueryAllianceValidatorResponseSDKType> {
    const endpoint = `terra/alliances/validators/${params.validatorAddr}`;
    return await this.req.get<QueryAllianceValidatorResponseSDKType>(endpoint);
  }
  /* Query all paginated alliance validators */
  async allAllianceValidators(params: QueryAllAllianceValidatorsRequest = {
    pagination: undefined
  }): Promise<QueryAllianceValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/validators`;
    return await this.req.get<QueryAllianceValidatorsResponseSDKType>(endpoint, options);
  }
  /* Query all paginated alliance delegations for a delegator addr */
  async alliancesDelegation(params: QueryAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/delegations/${params.delegatorAddr}`;
    return await this.req.get<QueryAlliancesDelegationsResponseSDKType>(endpoint, options);
  }
  /* Query all paginated alliance delegations for a delegator addr and validator_addr */
  async alliancesDelegationByValidator(params: QueryAlliancesDelegationByValidatorRequest): Promise<QueryAlliancesDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/delegations/${params.delegatorAddr}/${params.validatorAddr}`;
    return await this.req.get<QueryAlliancesDelegationsResponseSDKType>(endpoint, options);
  }
  /* Query a specific delegation by delegator addr, validator addr and denom */
  async allianceDelegation(params: QueryAllianceDelegationRequest): Promise<QueryAllianceDelegationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/delegations/${params.delegatorAddr}/${params.validatorAddr}/${params.denom}`;
    return await this.req.get<QueryAllianceDelegationResponseSDKType>(endpoint, options);
  }
  /* Query a specific delegation rewards by delegator addr, validator addr and denom */
  async allianceDelegationRewards(params: QueryAllianceDelegationRewardsRequest): Promise<QueryAllianceDelegationRewardsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/rewards/${params.delegatorAddr}/${params.validatorAddr}/${params.denom}`;
    return await this.req.get<QueryAllianceDelegationRewardsResponseSDKType>(endpoint, options);
  }
  /* Query for rewards by delegator addr, validator_addr and denom
   @deprecated: this endpoint will be replaced for by the encoded version
   of the denom e.g.: GET:/terra/alliances/terradr1231/terravaloper41234/ibc%2Falliance */
  async iBCAllianceDelegationRewards(params: QueryIBCAllianceDelegationRewardsRequest): Promise<QueryAllianceDelegationRewardsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/rewards/${params.delegatorAddr}/${params.validatorAddr}/ibc/${params.hash}`;
    return await this.req.get<QueryAllianceDelegationRewardsResponseSDKType>(endpoint, options);
  }
  /* Query unbondings by delegator address */
  async allianceUnbondingsByDelegator(params: QueryAllianceUnbondingsByDelegatorRequest): Promise<QueryAllianceUnbondingsByDelegatorResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/unbondings/${params.delegatorAddr}`;
    return await this.req.get<QueryAllianceUnbondingsByDelegatorResponseSDKType>(endpoint, options);
  }
  /* Query unbondings by denom, delegator addr */
  async allianceUnbondingsByDenomAndDelegator(params: QueryAllianceUnbondingsByDenomAndDelegatorRequest): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/unbondings/${params.denom}/${params.delegatorAddr}`;
    return await this.req.get<QueryAllianceUnbondingsByDenomAndDelegatorResponseSDKType>(endpoint, options);
  }
  /* Query unbondings by denom, delegator addr, validator addr */
  async allianceUnbondings(params: QueryAllianceUnbondingsRequest): Promise<QueryAllianceUnbondingsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/unbondings/${params.denom}/${params.delegatorAddr}/${params.validatorAddr}`;
    return await this.req.get<QueryAllianceUnbondingsResponseSDKType>(endpoint, options);
  }
  /* Query paginated redelegations delegator addr */
  async allianceRedelegationsByDelegator(params: QueryAllianceRedelegationsByDelegatorRequest): Promise<QueryAllianceRedelegationsByDelegatorResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/redelegations/${params.delegatorAddr}`;
    return await this.req.get<QueryAllianceRedelegationsByDelegatorResponseSDKType>(endpoint, options);
  }
  /* Query paginated redelegations by denom and delegator addr */
  async allianceRedelegations(params: QueryAllianceRedelegationsRequest): Promise<QueryAllianceRedelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/alliances/redelegations/${params.denom}/${params.delegatorAddr}`;
    return await this.req.get<QueryAllianceRedelegationsResponseSDKType>(endpoint, options);
  }
  /* Query a specific alliance by denom */
  async alliance(params: QueryAllianceRequest): Promise<QueryAllianceResponseSDKType> {
    const endpoint = `terra/alliances/${params.denom}`;
    return await this.req.get<QueryAllianceResponseSDKType>(endpoint);
  }
}