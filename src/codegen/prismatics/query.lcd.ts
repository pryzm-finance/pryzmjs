//@ts-nocheck
import { GetTxRequest, GetTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType } from "../cosmos/tx/v1beta1/service";
import { setPaginationParams } from "../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAllMaturitiesRequest, QueryAllMaturitiesResponseSDKType } from "./maturity";
import { BlockRequest } from "../tendermint/blocksync/types";
import { BlockSDKType } from "../tendermint/types/block";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.maturityAll = this.maturityAll.bind(this);
    this.block = this.block.bind(this);
    this.transaction = this.transaction.bind(this);
    this.transactionByEvent = this.transactionByEvent.bind(this);
  }
  /* MaturityAll */
  async maturityAll(params: QueryAllMaturitiesRequest, options: any = {params: {}}): Promise<QueryAllMaturitiesResponseSDKType> {
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    if (typeof params?.active !== "undefined") {
      options.params.active = params.active;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prismatics/maturity`;
    return await this.req.get<QueryAllMaturitiesResponseSDKType>(endpoint, options);
  }
  /* Block */
  async block(params: BlockRequest): Promise<BlockSDKType> {
    const endpoint = `prismatics/block/${params.height}`;
    return await this.req.get<BlockSDKType>(endpoint);
  }
  /* Transaction */
  async transaction(params: GetTxRequest): Promise<GetTxResponseSDKType> {
    const endpoint = `prismatics/transaction/${params.hash}`;
    return await this.req.get<GetTxResponseSDKType>(endpoint);
  }
  /* TransactionByEvent */
  async transactionByEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.events !== "undefined") {
      options.params.events = params.events;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.page !== "undefined") {
      options.params.page = params.page;
    }
    if (typeof params?.limit !== "undefined") {
      options.params.limit = params.limit;
    }
    const endpoint = `prismatics/transaction`;
    return await this.req.get<GetTxsEventResponseSDKType>(endpoint, options);
  }
}