/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { GetTxRequest, GetTxResponse, GetTxsEventRequest, GetTxsEventResponse } from "../../cosmos/tx/v1beta1/service";
import { BlockRequest } from "../../tendermint/blockchain/types";
import { Block } from "../../tendermint/types/block";
import { QueryAllMaturitiesRequest, QueryAllMaturitiesResponse } from "./maturity";

export const protobufPackage = "prismfinance.prisma.tics";

/** Query defines the gRPC querier service. */
export interface Query {
  MaturityAll(request: QueryAllMaturitiesRequest): Promise<QueryAllMaturitiesResponse>;
  Block(request: BlockRequest): Promise<Block>;
  Transaction(request: GetTxRequest): Promise<GetTxResponse>;
  TransactionByEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MaturityAll = this.MaturityAll.bind(this);
    this.Block = this.Block.bind(this);
    this.Transaction = this.Transaction.bind(this);
    this.TransactionByEvent = this.TransactionByEvent.bind(this);
  }
  MaturityAll(request: QueryAllMaturitiesRequest): Promise<QueryAllMaturitiesResponse> {
    const data = QueryAllMaturitiesRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prisma.tics.Query", "MaturityAll", data);
    return promise.then((data) => QueryAllMaturitiesResponse.decode(new _m0.Reader(data)));
  }

  Block(request: BlockRequest): Promise<Block> {
    const data = BlockRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prisma.tics.Query", "Block", data);
    return promise.then((data) => Block.decode(new _m0.Reader(data)));
  }

  Transaction(request: GetTxRequest): Promise<GetTxResponse> {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prisma.tics.Query", "Transaction", data);
    return promise.then((data) => GetTxResponse.decode(new _m0.Reader(data)));
  }

  TransactionByEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prisma.tics.Query", "TransactionByEvent", data);
    return promise.then((data) => GetTxsEventResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
