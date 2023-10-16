//@ts-nocheck
import { GetTxRequest, GetTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType } from "../cosmos/tx/v1beta1/service";
import { setPaginationParams } from "../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QuerySyncStateRequest, QuerySyncStateResponseSDKType } from "./sync_state";
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
    this.syncState = this.syncState.bind(this);
    this.block = this.block.bind(this);
    this.transaction = this.transaction.bind(this);
    this.transactionByEvent = this.transactionByEvent.bind(this);
  }
  /* SyncState */
  async syncState(_params: QuerySyncStateRequest = {}): Promise<QuerySyncStateResponseSDKType> {
    const endpoint = `cosmatics/sync_state`;
    return await this.req.get<QuerySyncStateResponseSDKType>(endpoint);
  }
  /* Block */
  async block(params: BlockRequest): Promise<BlockSDKType> {
    const endpoint = `cosmatics/block/${params.height}`;
    return await this.req.get<BlockSDKType>(endpoint);
  }
  /* Transaction */
  async transaction(params: GetTxRequest): Promise<GetTxResponseSDKType> {
    const endpoint = `cosmatics/transaction/${params.hash}`;
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
    const endpoint = `cosmatics/transaction`;
    return await this.req.get<GetTxsEventResponseSDKType>(endpoint, options);
  }
}