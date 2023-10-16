//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetPoolRequest, QueryGetPoolResponseSDKType, QueryAllPoolRequest, QueryAllPoolResponseSDKType, QueryGetBondRequest, QueryGetBondResponseSDKType, QueryAllBondRequest, QueryAllBondResponseSDKType, QueryGetUnbondingRequest, QueryGetUnbondingResponseSDKType, QueryAllUnbondingRequest, QueryAllUnbondingResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.pool = this.pool.bind(this);
    this.poolAll = this.poolAll.bind(this);
    this.bond = this.bond.bind(this);
    this.bondAll = this.bondAll.bind(this);
    this.unbonding = this.unbonding.bind(this);
    this.unbondingAll = this.unbondingAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/incentives/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Pool by index. */
  async pool(params: QueryGetPoolRequest): Promise<QueryGetPoolResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/incentives/pool/${params.bondDenom}`;
    return await this.req.get<QueryGetPoolResponseSDKType>(endpoint);
  }
  /* Queries a list of Pool items. */
  async poolAll(params: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm-finance/pryzm-core/incentives/pool`;
    return await this.req.get<QueryAllPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a Bond by index. */
  async bond(params: QueryGetBondRequest): Promise<QueryGetBondResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/incentives/bond/${params.address}/${params.bondDenom}`;
    return await this.req.get<QueryGetBondResponseSDKType>(endpoint);
  }
  /* Queries a list of Bond items. */
  async bondAll(params: QueryAllBondRequest = {
    pagination: undefined
  }): Promise<QueryAllBondResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm-finance/pryzm-core/incentives/bond`;
    return await this.req.get<QueryAllBondResponseSDKType>(endpoint, options);
  }
  /* Queries a Unbonding by id. */
  async unbonding(params: QueryGetUnbondingRequest): Promise<QueryGetUnbondingResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/incentives/unbonding/${params.id}`;
    return await this.req.get<QueryGetUnbondingResponseSDKType>(endpoint);
  }
  /* Queries a list of Unbonding items. */
  async unbondingAll(params: QueryAllUnbondingRequest = {
    pagination: undefined
  }): Promise<QueryAllUnbondingResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm-finance/pryzm-core/incentives/unbonding`;
    return await this.req.get<QueryAllUnbondingResponseSDKType>(endpoint, options);
  }
}