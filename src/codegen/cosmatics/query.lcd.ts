import { GetTxRequest, GetTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType } from "../cosmos/tx/v1beta1/service";
import { QueryMetricsRequest, QueryMetricsResponseSDKType } from "./metric";
import { setPaginationParams } from "../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QuerySyncStateRequest, QuerySyncStateResponseSDKType } from "./sync_state";
import { BlockRequest } from "../tendermint/blocksync/types";
import { BlockSDKType } from "../tendermint/types/block";
import { QueryHealthCheckRequest, QueryHealthCheckResponseSDKType } from "./health_check";
import { QueryBlockSyncFailuresRequest, QueryBlockSyncFailuresResponseSDKType } from "./block_sync_failure";
import { QueryPostProcessFailuresRequest, QueryPostProcessFailuresResponseSDKType } from "./post_process_failure";
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
    this.metrics = this.metrics.bind(this);
    this.healthCheck = this.healthCheck.bind(this);
    this.blockSyncFailures = this.blockSyncFailures.bind(this);
    this.postProcessFailures = this.postProcessFailures.bind(this);
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
  /* Metrics */
  async metrics(params: QueryMetricsRequest): Promise<QueryMetricsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.metricId !== "undefined") {
      options.params.metric_id = params.metricId;
    }
    if (typeof params?.metricType !== "undefined") {
      options.params.metric_type = params.metricType;
    }
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.fromTime !== "undefined") {
      options.params.from_time = params.fromTime;
    }
    if (typeof params?.toTime !== "undefined") {
      options.params.to_time = params.toTime;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmatics/metric`;
    return await this.req.get<QueryMetricsResponseSDKType>(endpoint, options);
  }
  /* HealthCheck */
  async healthCheck(_params: QueryHealthCheckRequest = {}): Promise<QueryHealthCheckResponseSDKType> {
    const endpoint = `cosmatics/health`;
    return await this.req.get<QueryHealthCheckResponseSDKType>(endpoint);
  }
  /* BlockSyncFailures */
  async blockSyncFailures(params: QueryBlockSyncFailuresRequest): Promise<QueryBlockSyncFailuresResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.fromTime !== "undefined") {
      options.params.from_time = params.fromTime;
    }
    if (typeof params?.toTime !== "undefined") {
      options.params.to_time = params.toTime;
    }
    const endpoint = `cosmatics/block_sync_failure`;
    return await this.req.get<QueryBlockSyncFailuresResponseSDKType>(endpoint, options);
  }
  /* PostProcessFailures */
  async postProcessFailures(params: QueryPostProcessFailuresRequest): Promise<QueryPostProcessFailuresResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.postProcessorId !== "undefined") {
      options.params.post_processor_id = params.postProcessorId;
    }
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.fromTime !== "undefined") {
      options.params.from_time = params.fromTime;
    }
    if (typeof params?.toTime !== "undefined") {
      options.params.to_time = params.toTime;
    }
    const endpoint = `cosmatics/post_process_failure`;
    return await this.req.get<QueryPostProcessFailuresResponseSDKType>(endpoint, options);
  }
}