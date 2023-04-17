/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Swap, SwapType, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { OraclePricePair } from "./oracle_price_pair";
import { Order } from "./order";
import { Params } from "./params";
import { Pool } from "./pool";
import { PoolToken } from "./pool_token";
import { ScheduleOrder } from "./schedule_order";
import { SwapStep } from "./tx";
import { VirtualBalancePoolToken } from "./virtual_balance_pool_token";
import { WeightUpdateTiming } from "./weight_update_timing";
import { WeightedToken } from "./weighted_token";
import { WhitelistedRoute } from "./whitelisted_route";
import { YammConfiguration } from "./yamm_configuration";

export const protobufPackage = "prismfinance.prismcore.amm";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPoolTokenRequest {
  poolId: number;
  denom: string;
}

export interface QueryGetPoolTokenResponse {
  poolToken: PoolToken | undefined;
}

export interface QueryAllPoolTokenRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPoolTokenResponse {
  poolToken: PoolToken[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPoolRequest {
  id: number;
}

export interface QueryGetPoolResponse {
  pool: Pool | undefined;
}

export interface QueryAllPoolRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWeightedTokenRequest {
  poolId: number;
  denom: string;
}

export interface QueryGetWeightedTokenResponse {
  weightedToken: WeightedToken | undefined;
}

export interface QueryAllWeightedTokenRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWeightedTokenResponse {
  weightedToken: WeightedToken[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWeightUpdateTimingRequest {
  poolId: number;
}

export interface QueryGetWeightUpdateTimingResponse {
  weightUpdateTiming: WeightUpdateTiming | undefined;
}

export interface QueryAllWeightUpdateTimingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWeightUpdateTimingResponse {
  weightUpdateTiming: WeightUpdateTiming[];
  pagination: PageResponse | undefined;
}

export interface QuerySimulateSingleSwapRequest {
  swap: Swap | undefined;
}

export interface QuerySimulateSingleSwapResponse {
  amountOut: Coin | undefined;
  amountIn: Coin | undefined;
}

export interface QuerySimulateInitializePoolRequest {
  poolId: number;
  amountsIn: Coin[];
}

export interface QuerySimulateInitializePoolResponse {
  lptOut: Coin | undefined;
  amountsIn: Coin[];
}

export interface QuerySimulateJoinAllTokensExactLptRequest {
  poolId: number;
  lptOut: string;
}

export interface QuerySimulateJoinAllTokensExactLptResponse {
  lptOut: Coin | undefined;
  amountsIn: Coin[];
}

export interface QuerySimulateJoinExactTokensRequest {
  poolId: number;
  amountsIn: Coin[];
}

export interface QuerySimulateJoinExactTokensResponse {
  lptOut: Coin | undefined;
  amountsIn: Coin[];
}

export interface QuerySimulateJoinTokenExactLptRequest {
  poolId: number;
  lptOut: string;
  tokenIn: string;
}

export interface QuerySimulateJoinTokenExactLptResponse {
  lptOut: Coin | undefined;
  amountIn: Coin | undefined;
}

export interface QuerySimulateExitTokenExactLptRequest {
  poolId: number;
  lptIn: string;
  tokenOut: string;
}

export interface QuerySimulateExitTokenExactLptResponse {
  lptIn: Coin | undefined;
  amountOut: Coin | undefined;
}

export interface QuerySimulateExitExactTokensRequest {
  poolId: number;
  amountsOut: Coin[];
}

export interface QuerySimulateExitExactTokensResponse {
  lptIn: Coin | undefined;
  amountsOut: Coin[];
}

export interface QuerySimulateExitAllTokensExactLptRequest {
  poolId: number;
  lptIn: string;
}

export interface QuerySimulateExitAllTokensExactLptResponse {
  lptIn: Coin | undefined;
  amountsOut: Coin[];
}

export interface QuerySpotPriceRequest {
  poolId: number;
  tokenIn: string;
  tokenOut: string;
  applyFee: boolean;
}

export interface QuerySpotPriceResponse {
  spotPrice: string;
}

export interface QueryGetIntroducingPoolTokenRequest {
  poolId: number;
  denom: string;
}

export interface QueryGetIntroducingPoolTokenResponse {
  introducingPoolToken: VirtualBalancePoolToken | undefined;
}

export interface QueryAllIntroducingPoolTokenRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllIntroducingPoolTokenResponse {
  introducingPoolToken: VirtualBalancePoolToken[];
  pagination: PageResponse | undefined;
}

export interface QueryGetExpiringPoolTokenRequest {
  poolId: number;
  denom: string;
}

export interface QueryGetExpiringPoolTokenResponse {
  expiringPoolToken: VirtualBalancePoolToken | undefined;
}

export interface QueryAllExpiringPoolTokenRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExpiringPoolTokenResponse {
  expiringPoolToken: VirtualBalancePoolToken[];
  pagination: PageResponse | undefined;
}

export interface QueryLpTokenRequest {
  poolId: number;
}

export interface QueryLpTokenResponse {
  lpToken: PoolToken | undefined;
}

export interface QuerySimulateBatchSwapRequest {
  swapType: SwapType;
  steps: SwapStep[];
}

export interface QuerySimulateBatchSwapResponse {
  amountsIn: Coin[];
  amountsOut: Coin[];
}

export interface QueryGetYammConfigurationRequest {
  poolId: number;
}

export interface QueryGetYammConfigurationResponse {
  yammConfiguration: YammConfiguration | undefined;
}

export interface QueryAllYammConfigurationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllYammConfigurationResponse {
  yammConfiguration: YammConfiguration[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWhitelistedRouteRequest {
  tokenIn: string;
  tokenOut: string;
}

export interface QueryGetWhitelistedRouteResponse {
  whitelistedRoute: WhitelistedRoute | undefined;
}

export interface QueryAllWhitelistedRouteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhitelistedRouteResponse {
  whitelistedRoute: WhitelistedRoute[];
  pagination: PageResponse | undefined;
}

export interface QueryGetOrderRequest {
  id: number;
}

export interface QueryGetOrderResponse {
  order: Order | undefined;
}

export interface QueryAllOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOrderResponse {
  order: Order[];
  pagination: PageResponse | undefined;
}

export interface QueryGetExecutableOrderRequest {
  orderId: number;
}

export interface QueryGetExecutableOrderResponse {
  executableOrder: Order | undefined;
}

export interface QueryAllExecutableOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExecutableOrderResponse {
  executableOrder: Order[];
  pagination: PageResponse | undefined;
}

export interface QueryGetScheduleOrderRequest {
  blockHeight: number;
  orderId: number;
}

export interface QueryGetScheduleOrderResponse {
  scheduleOrder: ScheduleOrder | undefined;
}

export interface QueryAllScheduleOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllScheduleOrderResponse {
  scheduleOrder: ScheduleOrder[];
  pagination: PageResponse | undefined;
}

export interface QueryGetOraclePricePairRequest {
  assetId: string;
}

export interface QueryGetOraclePricePairResponse {
  oraclePricePair: OraclePricePair | undefined;
}

export interface QueryAllOraclePricePairRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOraclePricePairResponse {
  oraclePricePair: OraclePricePair[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPoolTokenRequest(): QueryGetPoolTokenRequest {
  return { poolId: 0, denom: "" };
}

export const QueryGetPoolTokenRequest = {
  encode(message: QueryGetPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryGetPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolTokenRequest>, I>>(object: I): QueryGetPoolTokenRequest {
    const message = createBaseQueryGetPoolTokenRequest();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetPoolTokenResponse(): QueryGetPoolTokenResponse {
  return { poolToken: undefined };
}

export const QueryGetPoolTokenResponse = {
  encode(message: QueryGetPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolToken !== undefined) {
      PoolToken.encode(message.poolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken = PoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolTokenResponse {
    return { poolToken: isSet(object.poolToken) ? PoolToken.fromJSON(object.poolToken) : undefined };
  },

  toJSON(message: QueryGetPoolTokenResponse): unknown {
    const obj: any = {};
    message.poolToken !== undefined
      && (obj.poolToken = message.poolToken ? PoolToken.toJSON(message.poolToken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolTokenResponse>, I>>(object: I): QueryGetPoolTokenResponse {
    const message = createBaseQueryGetPoolTokenResponse();
    message.poolToken = (object.poolToken !== undefined && object.poolToken !== null)
      ? PoolToken.fromPartial(object.poolToken)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolTokenRequest(): QueryAllPoolTokenRequest {
  return { pagination: undefined };
}

export const QueryAllPoolTokenRequest = {
  encode(message: QueryAllPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolTokenRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolTokenRequest>, I>>(object: I): QueryAllPoolTokenRequest {
    const message = createBaseQueryAllPoolTokenRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolTokenResponse(): QueryAllPoolTokenResponse {
  return { poolToken: [], pagination: undefined };
}

export const QueryAllPoolTokenResponse = {
  encode(message: QueryAllPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolToken) {
      PoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken.push(PoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolTokenResponse {
    return {
      poolToken: Array.isArray(object?.poolToken) ? object.poolToken.map((e: any) => PoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.poolToken) {
      obj.poolToken = message.poolToken.map((e) => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolToken = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolTokenResponse>, I>>(object: I): QueryAllPoolTokenResponse {
    const message = createBaseQueryAllPoolTokenResponse();
    message.poolToken = object.poolToken?.map((e) => PoolToken.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return { id: 0 };
}

export const QueryGetPoolRequest = {
  encode(message: QueryGetPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolRequest>, I>>(object: I): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return { pool: undefined };
}

export const QueryGetPoolResponse = {
  encode(message: QueryGetPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolResponse {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolResponse>, I>>(object: I): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return { pagination: undefined };
}

export const QueryAllPoolRequest = {
  encode(message: QueryAllPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolRequest>, I>>(object: I): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return { pool: [], pagination: undefined };
}

export const QueryAllPoolResponse = {
  encode(message: QueryAllPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolResponse>, I>>(object: I): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map((e) => Pool.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWeightedTokenRequest(): QueryGetWeightedTokenRequest {
  return { poolId: 0, denom: "" };
}

export const QueryGetWeightedTokenRequest = {
  encode(message: QueryGetWeightedTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWeightedTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightedTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWeightedTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryGetWeightedTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWeightedTokenRequest>, I>>(object: I): QueryGetWeightedTokenRequest {
    const message = createBaseQueryGetWeightedTokenRequest();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetWeightedTokenResponse(): QueryGetWeightedTokenResponse {
  return { weightedToken: undefined };
}

export const QueryGetWeightedTokenResponse = {
  encode(message: QueryGetWeightedTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.weightedToken !== undefined) {
      WeightedToken.encode(message.weightedToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWeightedTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightedTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightedToken = WeightedToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWeightedTokenResponse {
    return { weightedToken: isSet(object.weightedToken) ? WeightedToken.fromJSON(object.weightedToken) : undefined };
  },

  toJSON(message: QueryGetWeightedTokenResponse): unknown {
    const obj: any = {};
    message.weightedToken !== undefined
      && (obj.weightedToken = message.weightedToken ? WeightedToken.toJSON(message.weightedToken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWeightedTokenResponse>, I>>(
    object: I,
  ): QueryGetWeightedTokenResponse {
    const message = createBaseQueryGetWeightedTokenResponse();
    message.weightedToken = (object.weightedToken !== undefined && object.weightedToken !== null)
      ? WeightedToken.fromPartial(object.weightedToken)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWeightedTokenRequest(): QueryAllWeightedTokenRequest {
  return { pagination: undefined };
}

export const QueryAllWeightedTokenRequest = {
  encode(message: QueryAllWeightedTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWeightedTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightedTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWeightedTokenRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWeightedTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWeightedTokenRequest>, I>>(object: I): QueryAllWeightedTokenRequest {
    const message = createBaseQueryAllWeightedTokenRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWeightedTokenResponse(): QueryAllWeightedTokenResponse {
  return { weightedToken: [], pagination: undefined };
}

export const QueryAllWeightedTokenResponse = {
  encode(message: QueryAllWeightedTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.weightedToken) {
      WeightedToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWeightedTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightedTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightedToken.push(WeightedToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWeightedTokenResponse {
    return {
      weightedToken: Array.isArray(object?.weightedToken)
        ? object.weightedToken.map((e: any) => WeightedToken.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWeightedTokenResponse): unknown {
    const obj: any = {};
    if (message.weightedToken) {
      obj.weightedToken = message.weightedToken.map((e) => e ? WeightedToken.toJSON(e) : undefined);
    } else {
      obj.weightedToken = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWeightedTokenResponse>, I>>(
    object: I,
  ): QueryAllWeightedTokenResponse {
    const message = createBaseQueryAllWeightedTokenResponse();
    message.weightedToken = object.weightedToken?.map((e) => WeightedToken.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWeightUpdateTimingRequest(): QueryGetWeightUpdateTimingRequest {
  return { poolId: 0 };
}

export const QueryGetWeightUpdateTimingRequest = {
  encode(message: QueryGetWeightUpdateTimingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWeightUpdateTimingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightUpdateTimingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWeightUpdateTimingRequest {
    return { poolId: isSet(object.poolId) ? Number(object.poolId) : 0 };
  },

  toJSON(message: QueryGetWeightUpdateTimingRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWeightUpdateTimingRequest>, I>>(
    object: I,
  ): QueryGetWeightUpdateTimingRequest {
    const message = createBaseQueryGetWeightUpdateTimingRequest();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseQueryGetWeightUpdateTimingResponse(): QueryGetWeightUpdateTimingResponse {
  return { weightUpdateTiming: undefined };
}

export const QueryGetWeightUpdateTimingResponse = {
  encode(message: QueryGetWeightUpdateTimingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWeightUpdateTimingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightUpdateTimingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightUpdateTiming = WeightUpdateTiming.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWeightUpdateTimingResponse {
    return {
      weightUpdateTiming: isSet(object.weightUpdateTiming)
        ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming)
        : undefined,
    };
  },

  toJSON(message: QueryGetWeightUpdateTimingResponse): unknown {
    const obj: any = {};
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming
      ? WeightUpdateTiming.toJSON(message.weightUpdateTiming)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWeightUpdateTimingResponse>, I>>(
    object: I,
  ): QueryGetWeightUpdateTimingResponse {
    const message = createBaseQueryGetWeightUpdateTimingResponse();
    message.weightUpdateTiming = (object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null)
      ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWeightUpdateTimingRequest(): QueryAllWeightUpdateTimingRequest {
  return { pagination: undefined };
}

export const QueryAllWeightUpdateTimingRequest = {
  encode(message: QueryAllWeightUpdateTimingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWeightUpdateTimingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWeightUpdateTimingRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWeightUpdateTimingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWeightUpdateTimingRequest>, I>>(
    object: I,
  ): QueryAllWeightUpdateTimingRequest {
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWeightUpdateTimingResponse(): QueryAllWeightUpdateTimingResponse {
  return { weightUpdateTiming: [], pagination: undefined };
}

export const QueryAllWeightUpdateTimingResponse = {
  encode(message: QueryAllWeightUpdateTimingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.weightUpdateTiming) {
      WeightUpdateTiming.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWeightUpdateTimingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightUpdateTiming.push(WeightUpdateTiming.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWeightUpdateTimingResponse {
    return {
      weightUpdateTiming: Array.isArray(object?.weightUpdateTiming)
        ? object.weightUpdateTiming.map((e: any) => WeightUpdateTiming.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWeightUpdateTimingResponse): unknown {
    const obj: any = {};
    if (message.weightUpdateTiming) {
      obj.weightUpdateTiming = message.weightUpdateTiming.map((e) => e ? WeightUpdateTiming.toJSON(e) : undefined);
    } else {
      obj.weightUpdateTiming = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWeightUpdateTimingResponse>, I>>(
    object: I,
  ): QueryAllWeightUpdateTimingResponse {
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weightUpdateTiming?.map((e) => WeightUpdateTiming.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySimulateSingleSwapRequest(): QuerySimulateSingleSwapRequest {
  return { swap: undefined };
}

export const QuerySimulateSingleSwapRequest = {
  encode(message: QuerySimulateSingleSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateSingleSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateSingleSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateSingleSwapRequest {
    return { swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined };
  },

  toJSON(message: QuerySimulateSingleSwapRequest): unknown {
    const obj: any = {};
    message.swap !== undefined && (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateSingleSwapRequest>, I>>(
    object: I,
  ): QuerySimulateSingleSwapRequest {
    const message = createBaseQuerySimulateSingleSwapRequest();
    message.swap = (object.swap !== undefined && object.swap !== null) ? Swap.fromPartial(object.swap) : undefined;
    return message;
  },
};

function createBaseQuerySimulateSingleSwapResponse(): QuerySimulateSingleSwapResponse {
  return { amountOut: undefined, amountIn: undefined };
}

export const QuerySimulateSingleSwapResponse = {
  encode(message: QuerySimulateSingleSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateSingleSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateSingleSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateSingleSwapResponse {
    return {
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
    };
  },

  toJSON(message: QuerySimulateSingleSwapResponse): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateSingleSwapResponse>, I>>(
    object: I,
  ): QuerySimulateSingleSwapResponse {
    const message = createBaseQuerySimulateSingleSwapResponse();
    message.amountOut = (object.amountOut !== undefined && object.amountOut !== null)
      ? Coin.fromPartial(object.amountOut)
      : undefined;
    message.amountIn = (object.amountIn !== undefined && object.amountIn !== null)
      ? Coin.fromPartial(object.amountIn)
      : undefined;
    return message;
  },
};

function createBaseQuerySimulateInitializePoolRequest(): QuerySimulateInitializePoolRequest {
  return { poolId: 0, amountsIn: [] };
}

export const QuerySimulateInitializePoolRequest = {
  encode(message: QuerySimulateInitializePoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateInitializePoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateInitializePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateInitializePoolRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateInitializePoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateInitializePoolRequest>, I>>(
    object: I,
  ): QuerySimulateInitializePoolRequest {
    const message = createBaseQuerySimulateInitializePoolRequest();
    message.poolId = object.poolId ?? 0;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySimulateInitializePoolResponse(): QuerySimulateInitializePoolResponse {
  return { lptOut: undefined, amountsIn: [] };
}

export const QuerySimulateInitializePoolResponse = {
  encode(message: QuerySimulateInitializePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateInitializePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateInitializePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateInitializePoolResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateInitializePoolResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateInitializePoolResponse>, I>>(
    object: I,
  ): QuerySimulateInitializePoolResponse {
    const message = createBaseQuerySimulateInitializePoolResponse();
    message.lptOut = (object.lptOut !== undefined && object.lptOut !== null)
      ? Coin.fromPartial(object.lptOut)
      : undefined;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySimulateJoinAllTokensExactLptRequest(): QuerySimulateJoinAllTokensExactLptRequest {
  return { poolId: 0, lptOut: "" };
}

export const QuerySimulateJoinAllTokensExactLptRequest = {
  encode(message: QuerySimulateJoinAllTokensExactLptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(18).string(message.lptOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinAllTokensExactLptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.lptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateJoinAllTokensExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
    };
  },

  toJSON(message: QuerySimulateJoinAllTokensExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateJoinAllTokensExactLptRequest>, I>>(
    object: I,
  ): QuerySimulateJoinAllTokensExactLptRequest {
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    message.poolId = object.poolId ?? 0;
    message.lptOut = object.lptOut ?? "";
    return message;
  },
};

function createBaseQuerySimulateJoinAllTokensExactLptResponse(): QuerySimulateJoinAllTokensExactLptResponse {
  return { lptOut: undefined, amountsIn: [] };
}

export const QuerySimulateJoinAllTokensExactLptResponse = {
  encode(message: QuerySimulateJoinAllTokensExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinAllTokensExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateJoinAllTokensExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateJoinAllTokensExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateJoinAllTokensExactLptResponse>, I>>(
    object: I,
  ): QuerySimulateJoinAllTokensExactLptResponse {
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
    message.lptOut = (object.lptOut !== undefined && object.lptOut !== null)
      ? Coin.fromPartial(object.lptOut)
      : undefined;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySimulateJoinExactTokensRequest(): QuerySimulateJoinExactTokensRequest {
  return { poolId: 0, amountsIn: [] };
}

export const QuerySimulateJoinExactTokensRequest = {
  encode(message: QuerySimulateJoinExactTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinExactTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateJoinExactTokensRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateJoinExactTokensRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateJoinExactTokensRequest>, I>>(
    object: I,
  ): QuerySimulateJoinExactTokensRequest {
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    message.poolId = object.poolId ?? 0;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySimulateJoinExactTokensResponse(): QuerySimulateJoinExactTokensResponse {
  return { lptOut: undefined, amountsIn: [] };
}

export const QuerySimulateJoinExactTokensResponse = {
  encode(message: QuerySimulateJoinExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateJoinExactTokensResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateJoinExactTokensResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateJoinExactTokensResponse>, I>>(
    object: I,
  ): QuerySimulateJoinExactTokensResponse {
    const message = createBaseQuerySimulateJoinExactTokensResponse();
    message.lptOut = (object.lptOut !== undefined && object.lptOut !== null)
      ? Coin.fromPartial(object.lptOut)
      : undefined;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySimulateJoinTokenExactLptRequest(): QuerySimulateJoinTokenExactLptRequest {
  return { poolId: 0, lptOut: "", tokenIn: "" };
}

export const QuerySimulateJoinTokenExactLptRequest = {
  encode(message: QuerySimulateJoinTokenExactLptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(18).string(message.lptOut);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinTokenExactLptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.lptOut = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateJoinTokenExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
    };
  },

  toJSON(message: QuerySimulateJoinTokenExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateJoinTokenExactLptRequest>, I>>(
    object: I,
  ): QuerySimulateJoinTokenExactLptRequest {
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    message.poolId = object.poolId ?? 0;
    message.lptOut = object.lptOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    return message;
  },
};

function createBaseQuerySimulateJoinTokenExactLptResponse(): QuerySimulateJoinTokenExactLptResponse {
  return { lptOut: undefined, amountIn: undefined };
}

export const QuerySimulateJoinTokenExactLptResponse = {
  encode(message: QuerySimulateJoinTokenExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinTokenExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateJoinTokenExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
    };
  },

  toJSON(message: QuerySimulateJoinTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateJoinTokenExactLptResponse>, I>>(
    object: I,
  ): QuerySimulateJoinTokenExactLptResponse {
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
    message.lptOut = (object.lptOut !== undefined && object.lptOut !== null)
      ? Coin.fromPartial(object.lptOut)
      : undefined;
    message.amountIn = (object.amountIn !== undefined && object.amountIn !== null)
      ? Coin.fromPartial(object.amountIn)
      : undefined;
    return message;
  },
};

function createBaseQuerySimulateExitTokenExactLptRequest(): QuerySimulateExitTokenExactLptRequest {
  return { poolId: 0, lptIn: "", tokenOut: "" };
}

export const QuerySimulateExitTokenExactLptRequest = {
  encode(message: QuerySimulateExitTokenExactLptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(18).string(message.lptIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitTokenExactLptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.lptIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateExitTokenExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
    };
  },

  toJSON(message: QuerySimulateExitTokenExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateExitTokenExactLptRequest>, I>>(
    object: I,
  ): QuerySimulateExitTokenExactLptRequest {
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    message.poolId = object.poolId ?? 0;
    message.lptIn = object.lptIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};

function createBaseQuerySimulateExitTokenExactLptResponse(): QuerySimulateExitTokenExactLptResponse {
  return { lptIn: undefined, amountOut: undefined };
}

export const QuerySimulateExitTokenExactLptResponse = {
  encode(message: QuerySimulateExitTokenExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitTokenExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateExitTokenExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
    };
  },

  toJSON(message: QuerySimulateExitTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateExitTokenExactLptResponse>, I>>(
    object: I,
  ): QuerySimulateExitTokenExactLptResponse {
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
    message.lptIn = (object.lptIn !== undefined && object.lptIn !== null) ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountOut = (object.amountOut !== undefined && object.amountOut !== null)
      ? Coin.fromPartial(object.amountOut)
      : undefined;
    return message;
  },
};

function createBaseQuerySimulateExitExactTokensRequest(): QuerySimulateExitExactTokensRequest {
  return { poolId: 0, amountsOut: [] };
}

export const QuerySimulateExitExactTokensRequest = {
  encode(message: QuerySimulateExitExactTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitExactTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitExactTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateExitExactTokensRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateExitExactTokensRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateExitExactTokensRequest>, I>>(
    object: I,
  ): QuerySimulateExitExactTokensRequest {
    const message = createBaseQuerySimulateExitExactTokensRequest();
    message.poolId = object.poolId ?? 0;
    message.amountsOut = object.amountsOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySimulateExitExactTokensResponse(): QuerySimulateExitExactTokensResponse {
  return { lptIn: undefined, amountsOut: [] };
}

export const QuerySimulateExitExactTokensResponse = {
  encode(message: QuerySimulateExitExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateExitExactTokensResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateExitExactTokensResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateExitExactTokensResponse>, I>>(
    object: I,
  ): QuerySimulateExitExactTokensResponse {
    const message = createBaseQuerySimulateExitExactTokensResponse();
    message.lptIn = (object.lptIn !== undefined && object.lptIn !== null) ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySimulateExitAllTokensExactLptRequest(): QuerySimulateExitAllTokensExactLptRequest {
  return { poolId: 0, lptIn: "" };
}

export const QuerySimulateExitAllTokensExactLptRequest = {
  encode(message: QuerySimulateExitAllTokensExactLptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(18).string(message.lptIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitAllTokensExactLptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.lptIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateExitAllTokensExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
    };
  },

  toJSON(message: QuerySimulateExitAllTokensExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateExitAllTokensExactLptRequest>, I>>(
    object: I,
  ): QuerySimulateExitAllTokensExactLptRequest {
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    message.poolId = object.poolId ?? 0;
    message.lptIn = object.lptIn ?? "";
    return message;
  },
};

function createBaseQuerySimulateExitAllTokensExactLptResponse(): QuerySimulateExitAllTokensExactLptResponse {
  return { lptIn: undefined, amountsOut: [] };
}

export const QuerySimulateExitAllTokensExactLptResponse = {
  encode(message: QuerySimulateExitAllTokensExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitAllTokensExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateExitAllTokensExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateExitAllTokensExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateExitAllTokensExactLptResponse>, I>>(
    object: I,
  ): QuerySimulateExitAllTokensExactLptResponse {
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
    message.lptIn = (object.lptIn !== undefined && object.lptIn !== null) ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return { poolId: 0, tokenIn: "", tokenOut: "", applyFee: false };
}

export const QuerySpotPriceRequest = {
  encode(message: QuerySpotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.applyFee === true) {
      writer.uint32(32).bool(message.applyFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.applyFee = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      applyFee: isSet(object.applyFee) ? Boolean(object.applyFee) : false,
    };
  },

  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.applyFee !== undefined && (obj.applyFee = message.applyFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySpotPriceRequest>, I>>(object: I): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.applyFee = object.applyFee ?? false;
    return message;
  },
};

function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return { spotPrice: "" };
}

export const QuerySpotPriceResponse = {
  encode(message: QuerySpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpotPriceResponse {
    return { spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : "" };
  },

  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySpotPriceResponse>, I>>(object: I): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
};

function createBaseQueryGetIntroducingPoolTokenRequest(): QueryGetIntroducingPoolTokenRequest {
  return { poolId: 0, denom: "" };
}

export const QueryGetIntroducingPoolTokenRequest = {
  encode(message: QueryGetIntroducingPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetIntroducingPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetIntroducingPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryGetIntroducingPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetIntroducingPoolTokenRequest>, I>>(
    object: I,
  ): QueryGetIntroducingPoolTokenRequest {
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetIntroducingPoolTokenResponse(): QueryGetIntroducingPoolTokenResponse {
  return { introducingPoolToken: undefined };
}

export const QueryGetIntroducingPoolTokenResponse = {
  encode(message: QueryGetIntroducingPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.introducingPoolToken !== undefined) {
      VirtualBalancePoolToken.encode(message.introducingPoolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetIntroducingPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.introducingPoolToken = VirtualBalancePoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetIntroducingPoolTokenResponse {
    return {
      introducingPoolToken: isSet(object.introducingPoolToken)
        ? VirtualBalancePoolToken.fromJSON(object.introducingPoolToken)
        : undefined,
    };
  },

  toJSON(message: QueryGetIntroducingPoolTokenResponse): unknown {
    const obj: any = {};
    message.introducingPoolToken !== undefined && (obj.introducingPoolToken = message.introducingPoolToken
      ? VirtualBalancePoolToken.toJSON(message.introducingPoolToken)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetIntroducingPoolTokenResponse>, I>>(
    object: I,
  ): QueryGetIntroducingPoolTokenResponse {
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    message.introducingPoolToken = (object.introducingPoolToken !== undefined && object.introducingPoolToken !== null)
      ? VirtualBalancePoolToken.fromPartial(object.introducingPoolToken)
      : undefined;
    return message;
  },
};

function createBaseQueryAllIntroducingPoolTokenRequest(): QueryAllIntroducingPoolTokenRequest {
  return { pagination: undefined };
}

export const QueryAllIntroducingPoolTokenRequest = {
  encode(message: QueryAllIntroducingPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllIntroducingPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIntroducingPoolTokenRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllIntroducingPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllIntroducingPoolTokenRequest>, I>>(
    object: I,
  ): QueryAllIntroducingPoolTokenRequest {
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllIntroducingPoolTokenResponse(): QueryAllIntroducingPoolTokenResponse {
  return { introducingPoolToken: [], pagination: undefined };
}

export const QueryAllIntroducingPoolTokenResponse = {
  encode(message: QueryAllIntroducingPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.introducingPoolToken) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllIntroducingPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.introducingPoolToken.push(VirtualBalancePoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIntroducingPoolTokenResponse {
    return {
      introducingPoolToken: Array.isArray(object?.introducingPoolToken)
        ? object.introducingPoolToken.map((e: any) => VirtualBalancePoolToken.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllIntroducingPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.introducingPoolToken) {
      obj.introducingPoolToken = message.introducingPoolToken.map((e) =>
        e ? VirtualBalancePoolToken.toJSON(e) : undefined
      );
    } else {
      obj.introducingPoolToken = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllIntroducingPoolTokenResponse>, I>>(
    object: I,
  ): QueryAllIntroducingPoolTokenResponse {
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducingPoolToken?.map((e) => VirtualBalancePoolToken.fromPartial(e))
      || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetExpiringPoolTokenRequest(): QueryGetExpiringPoolTokenRequest {
  return { poolId: 0, denom: "" };
}

export const QueryGetExpiringPoolTokenRequest = {
  encode(message: QueryGetExpiringPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExpiringPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExpiringPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryGetExpiringPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExpiringPoolTokenRequest>, I>>(
    object: I,
  ): QueryGetExpiringPoolTokenRequest {
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetExpiringPoolTokenResponse(): QueryGetExpiringPoolTokenResponse {
  return { expiringPoolToken: undefined };
}

export const QueryGetExpiringPoolTokenResponse = {
  encode(message: QueryGetExpiringPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expiringPoolToken !== undefined) {
      VirtualBalancePoolToken.encode(message.expiringPoolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExpiringPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiringPoolToken = VirtualBalancePoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExpiringPoolTokenResponse {
    return {
      expiringPoolToken: isSet(object.expiringPoolToken)
        ? VirtualBalancePoolToken.fromJSON(object.expiringPoolToken)
        : undefined,
    };
  },

  toJSON(message: QueryGetExpiringPoolTokenResponse): unknown {
    const obj: any = {};
    message.expiringPoolToken !== undefined && (obj.expiringPoolToken = message.expiringPoolToken
      ? VirtualBalancePoolToken.toJSON(message.expiringPoolToken)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExpiringPoolTokenResponse>, I>>(
    object: I,
  ): QueryGetExpiringPoolTokenResponse {
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    message.expiringPoolToken = (object.expiringPoolToken !== undefined && object.expiringPoolToken !== null)
      ? VirtualBalancePoolToken.fromPartial(object.expiringPoolToken)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExpiringPoolTokenRequest(): QueryAllExpiringPoolTokenRequest {
  return { pagination: undefined };
}

export const QueryAllExpiringPoolTokenRequest = {
  encode(message: QueryAllExpiringPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExpiringPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExpiringPoolTokenRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllExpiringPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExpiringPoolTokenRequest>, I>>(
    object: I,
  ): QueryAllExpiringPoolTokenRequest {
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExpiringPoolTokenResponse(): QueryAllExpiringPoolTokenResponse {
  return { expiringPoolToken: [], pagination: undefined };
}

export const QueryAllExpiringPoolTokenResponse = {
  encode(message: QueryAllExpiringPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.expiringPoolToken) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExpiringPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiringPoolToken.push(VirtualBalancePoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExpiringPoolTokenResponse {
    return {
      expiringPoolToken: Array.isArray(object?.expiringPoolToken)
        ? object.expiringPoolToken.map((e: any) => VirtualBalancePoolToken.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllExpiringPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.expiringPoolToken) {
      obj.expiringPoolToken = message.expiringPoolToken.map((e) => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.expiringPoolToken = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExpiringPoolTokenResponse>, I>>(
    object: I,
  ): QueryAllExpiringPoolTokenResponse {
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiringPoolToken?.map((e) => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLpTokenRequest(): QueryLpTokenRequest {
  return { poolId: 0 };
}

export const QueryLpTokenRequest = {
  encode(message: QueryLpTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLpTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLpTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLpTokenRequest {
    return { poolId: isSet(object.poolId) ? Number(object.poolId) : 0 };
  },

  toJSON(message: QueryLpTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLpTokenRequest>, I>>(object: I): QueryLpTokenRequest {
    const message = createBaseQueryLpTokenRequest();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseQueryLpTokenResponse(): QueryLpTokenResponse {
  return { lpToken: undefined };
}

export const QueryLpTokenResponse = {
  encode(message: QueryLpTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpToken !== undefined) {
      PoolToken.encode(message.lpToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLpTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLpTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lpToken = PoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLpTokenResponse {
    return { lpToken: isSet(object.lpToken) ? PoolToken.fromJSON(object.lpToken) : undefined };
  },

  toJSON(message: QueryLpTokenResponse): unknown {
    const obj: any = {};
    message.lpToken !== undefined && (obj.lpToken = message.lpToken ? PoolToken.toJSON(message.lpToken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLpTokenResponse>, I>>(object: I): QueryLpTokenResponse {
    const message = createBaseQueryLpTokenResponse();
    message.lpToken = (object.lpToken !== undefined && object.lpToken !== null)
      ? PoolToken.fromPartial(object.lpToken)
      : undefined;
    return message;
  },
};

function createBaseQuerySimulateBatchSwapRequest(): QuerySimulateBatchSwapRequest {
  return { swapType: 0, steps: [] };
}

export const QuerySimulateBatchSwapRequest = {
  encode(message: QuerySimulateBatchSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapType !== 0) {
      writer.uint32(8).int32(message.swapType);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateBatchSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateBatchSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapType = reader.int32() as any;
          break;
        case 2:
          message.steps.push(SwapStep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateBatchSwapRequest {
    return {
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : 0,
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateBatchSwapRequest): unknown {
    const obj: any = {};
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    if (message.steps) {
      obj.steps = message.steps.map((e) => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateBatchSwapRequest>, I>>(
    object: I,
  ): QuerySimulateBatchSwapRequest {
    const message = createBaseQuerySimulateBatchSwapRequest();
    message.swapType = object.swapType ?? 0;
    message.steps = object.steps?.map((e) => SwapStep.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySimulateBatchSwapResponse(): QuerySimulateBatchSwapResponse {
  return { amountsIn: [], amountsOut: [] };
}

export const QuerySimulateBatchSwapResponse = {
  encode(message: QuerySimulateBatchSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateBatchSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateBatchSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySimulateBatchSwapResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySimulateBatchSwapResponse): unknown {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySimulateBatchSwapResponse>, I>>(
    object: I,
  ): QuerySimulateBatchSwapResponse {
    const message = createBaseQuerySimulateBatchSwapResponse();
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryGetYammConfigurationRequest(): QueryGetYammConfigurationRequest {
  return { poolId: 0 };
}

export const QueryGetYammConfigurationRequest = {
  encode(message: QueryGetYammConfigurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetYammConfigurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetYammConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetYammConfigurationRequest {
    return { poolId: isSet(object.poolId) ? Number(object.poolId) : 0 };
  },

  toJSON(message: QueryGetYammConfigurationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetYammConfigurationRequest>, I>>(
    object: I,
  ): QueryGetYammConfigurationRequest {
    const message = createBaseQueryGetYammConfigurationRequest();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseQueryGetYammConfigurationResponse(): QueryGetYammConfigurationResponse {
  return { yammConfiguration: undefined };
}

export const QueryGetYammConfigurationResponse = {
  encode(message: QueryGetYammConfigurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yammConfiguration !== undefined) {
      YammConfiguration.encode(message.yammConfiguration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetYammConfigurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yammConfiguration = YammConfiguration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetYammConfigurationResponse {
    return {
      yammConfiguration: isSet(object.yammConfiguration)
        ? YammConfiguration.fromJSON(object.yammConfiguration)
        : undefined,
    };
  },

  toJSON(message: QueryGetYammConfigurationResponse): unknown {
    const obj: any = {};
    message.yammConfiguration !== undefined && (obj.yammConfiguration = message.yammConfiguration
      ? YammConfiguration.toJSON(message.yammConfiguration)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetYammConfigurationResponse>, I>>(
    object: I,
  ): QueryGetYammConfigurationResponse {
    const message = createBaseQueryGetYammConfigurationResponse();
    message.yammConfiguration = (object.yammConfiguration !== undefined && object.yammConfiguration !== null)
      ? YammConfiguration.fromPartial(object.yammConfiguration)
      : undefined;
    return message;
  },
};

function createBaseQueryAllYammConfigurationRequest(): QueryAllYammConfigurationRequest {
  return { pagination: undefined };
}

export const QueryAllYammConfigurationRequest = {
  encode(message: QueryAllYammConfigurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllYammConfigurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllYammConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllYammConfigurationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllYammConfigurationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllYammConfigurationRequest>, I>>(
    object: I,
  ): QueryAllYammConfigurationRequest {
    const message = createBaseQueryAllYammConfigurationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllYammConfigurationResponse(): QueryAllYammConfigurationResponse {
  return { yammConfiguration: [], pagination: undefined };
}

export const QueryAllYammConfigurationResponse = {
  encode(message: QueryAllYammConfigurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.yammConfiguration) {
      YammConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllYammConfigurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yammConfiguration.push(YammConfiguration.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllYammConfigurationResponse {
    return {
      yammConfiguration: Array.isArray(object?.yammConfiguration)
        ? object.yammConfiguration.map((e: any) => YammConfiguration.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllYammConfigurationResponse): unknown {
    const obj: any = {};
    if (message.yammConfiguration) {
      obj.yammConfiguration = message.yammConfiguration.map((e) => e ? YammConfiguration.toJSON(e) : undefined);
    } else {
      obj.yammConfiguration = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllYammConfigurationResponse>, I>>(
    object: I,
  ): QueryAllYammConfigurationResponse {
    const message = createBaseQueryAllYammConfigurationResponse();
    message.yammConfiguration = object.yammConfiguration?.map((e) => YammConfiguration.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWhitelistedRouteRequest(): QueryGetWhitelistedRouteRequest {
  return { tokenIn: "", tokenOut: "" };
}

export const QueryGetWhitelistedRouteRequest = {
  encode(message: QueryGetWhitelistedRouteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhitelistedRouteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistedRouteRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
    };
  },

  toJSON(message: QueryGetWhitelistedRouteRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhitelistedRouteRequest>, I>>(
    object: I,
  ): QueryGetWhitelistedRouteRequest {
    const message = createBaseQueryGetWhitelistedRouteRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};

function createBaseQueryGetWhitelistedRouteResponse(): QueryGetWhitelistedRouteResponse {
  return { whitelistedRoute: undefined };
}

export const QueryGetWhitelistedRouteResponse = {
  encode(message: QueryGetWhitelistedRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhitelistedRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute = WhitelistedRoute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistedRouteResponse {
    return {
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined,
    };
  },

  toJSON(message: QueryGetWhitelistedRouteResponse): unknown {
    const obj: any = {};
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute
      ? WhitelistedRoute.toJSON(message.whitelistedRoute)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhitelistedRouteResponse>, I>>(
    object: I,
  ): QueryGetWhitelistedRouteResponse {
    const message = createBaseQueryGetWhitelistedRouteResponse();
    message.whitelistedRoute = (object.whitelistedRoute !== undefined && object.whitelistedRoute !== null)
      ? WhitelistedRoute.fromPartial(object.whitelistedRoute)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWhitelistedRouteRequest(): QueryAllWhitelistedRouteRequest {
  return { pagination: undefined };
}

export const QueryAllWhitelistedRouteRequest = {
  encode(message: QueryAllWhitelistedRouteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhitelistedRouteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistedRouteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWhitelistedRouteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhitelistedRouteRequest>, I>>(
    object: I,
  ): QueryAllWhitelistedRouteRequest {
    const message = createBaseQueryAllWhitelistedRouteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWhitelistedRouteResponse(): QueryAllWhitelistedRouteResponse {
  return { whitelistedRoute: [], pagination: undefined };
}

export const QueryAllWhitelistedRouteResponse = {
  encode(message: QueryAllWhitelistedRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whitelistedRoute) {
      WhitelistedRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhitelistedRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute.push(WhitelistedRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistedRouteResponse {
    return {
      whitelistedRoute: Array.isArray(object?.whitelistedRoute)
        ? object.whitelistedRoute.map((e: any) => WhitelistedRoute.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWhitelistedRouteResponse): unknown {
    const obj: any = {};
    if (message.whitelistedRoute) {
      obj.whitelistedRoute = message.whitelistedRoute.map((e) => e ? WhitelistedRoute.toJSON(e) : undefined);
    } else {
      obj.whitelistedRoute = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhitelistedRouteResponse>, I>>(
    object: I,
  ): QueryAllWhitelistedRouteResponse {
    const message = createBaseQueryAllWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelistedRoute?.map((e) => WhitelistedRoute.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetOrderRequest(): QueryGetOrderRequest {
  return { id: 0 };
}

export const QueryGetOrderRequest = {
  encode(message: QueryGetOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOrderRequest>, I>>(object: I): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetOrderResponse(): QueryGetOrderResponse {
  return { order: undefined };
}

export const QueryGetOrderResponse = {
  encode(message: QueryGetOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderResponse {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOrderResponse>, I>>(object: I): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseQueryAllOrderRequest(): QueryAllOrderRequest {
  return { pagination: undefined };
}

export const QueryAllOrderRequest = {
  encode(message: QueryAllOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOrderRequest>, I>>(object: I): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOrderResponse(): QueryAllOrderResponse {
  return { order: [], pagination: undefined };
}

export const QueryAllOrderResponse = {
  encode(message: QueryAllOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderResponse {
    return {
      order: Array.isArray(object?.order) ? object.order.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.order = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOrderResponse>, I>>(object: I): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.order = object.order?.map((e) => Order.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetExecutableOrderRequest(): QueryGetExecutableOrderRequest {
  return { orderId: 0 };
}

export const QueryGetExecutableOrderRequest = {
  encode(message: QueryGetExecutableOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutableOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutableOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExecutableOrderRequest {
    return { orderId: isSet(object.orderId) ? Number(object.orderId) : 0 };
  },

  toJSON(message: QueryGetExecutableOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExecutableOrderRequest>, I>>(
    object: I,
  ): QueryGetExecutableOrderRequest {
    const message = createBaseQueryGetExecutableOrderRequest();
    message.orderId = object.orderId ?? 0;
    return message;
  },
};

function createBaseQueryGetExecutableOrderResponse(): QueryGetExecutableOrderResponse {
  return { executableOrder: undefined };
}

export const QueryGetExecutableOrderResponse = {
  encode(message: QueryGetExecutableOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.executableOrder !== undefined) {
      Order.encode(message.executableOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutableOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutableOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableOrder = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExecutableOrderResponse {
    return { executableOrder: isSet(object.executableOrder) ? Order.fromJSON(object.executableOrder) : undefined };
  },

  toJSON(message: QueryGetExecutableOrderResponse): unknown {
    const obj: any = {};
    message.executableOrder !== undefined
      && (obj.executableOrder = message.executableOrder ? Order.toJSON(message.executableOrder) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExecutableOrderResponse>, I>>(
    object: I,
  ): QueryGetExecutableOrderResponse {
    const message = createBaseQueryGetExecutableOrderResponse();
    message.executableOrder = (object.executableOrder !== undefined && object.executableOrder !== null)
      ? Order.fromPartial(object.executableOrder)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExecutableOrderRequest(): QueryAllExecutableOrderRequest {
  return { pagination: undefined };
}

export const QueryAllExecutableOrderRequest = {
  encode(message: QueryAllExecutableOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExecutableOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutableOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExecutableOrderRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllExecutableOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExecutableOrderRequest>, I>>(
    object: I,
  ): QueryAllExecutableOrderRequest {
    const message = createBaseQueryAllExecutableOrderRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExecutableOrderResponse(): QueryAllExecutableOrderResponse {
  return { executableOrder: [], pagination: undefined };
}

export const QueryAllExecutableOrderResponse = {
  encode(message: QueryAllExecutableOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.executableOrder) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExecutableOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutableOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableOrder.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExecutableOrderResponse {
    return {
      executableOrder: Array.isArray(object?.executableOrder)
        ? object.executableOrder.map((e: any) => Order.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllExecutableOrderResponse): unknown {
    const obj: any = {};
    if (message.executableOrder) {
      obj.executableOrder = message.executableOrder.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.executableOrder = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExecutableOrderResponse>, I>>(
    object: I,
  ): QueryAllExecutableOrderResponse {
    const message = createBaseQueryAllExecutableOrderResponse();
    message.executableOrder = object.executableOrder?.map((e) => Order.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetScheduleOrderRequest(): QueryGetScheduleOrderRequest {
  return { blockHeight: 0, orderId: 0 };
}

export const QueryGetScheduleOrderRequest = {
  encode(message: QueryGetScheduleOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeight !== 0) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.orderId !== 0) {
      writer.uint32(16).uint64(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetScheduleOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetScheduleOrderRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
    };
  },

  toJSON(message: QueryGetScheduleOrderRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetScheduleOrderRequest>, I>>(object: I): QueryGetScheduleOrderRequest {
    const message = createBaseQueryGetScheduleOrderRequest();
    message.blockHeight = object.blockHeight ?? 0;
    message.orderId = object.orderId ?? 0;
    return message;
  },
};

function createBaseQueryGetScheduleOrderResponse(): QueryGetScheduleOrderResponse {
  return { scheduleOrder: undefined };
}

export const QueryGetScheduleOrderResponse = {
  encode(message: QueryGetScheduleOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scheduleOrder !== undefined) {
      ScheduleOrder.encode(message.scheduleOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetScheduleOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleOrder = ScheduleOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetScheduleOrderResponse {
    return { scheduleOrder: isSet(object.scheduleOrder) ? ScheduleOrder.fromJSON(object.scheduleOrder) : undefined };
  },

  toJSON(message: QueryGetScheduleOrderResponse): unknown {
    const obj: any = {};
    message.scheduleOrder !== undefined
      && (obj.scheduleOrder = message.scheduleOrder ? ScheduleOrder.toJSON(message.scheduleOrder) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetScheduleOrderResponse>, I>>(
    object: I,
  ): QueryGetScheduleOrderResponse {
    const message = createBaseQueryGetScheduleOrderResponse();
    message.scheduleOrder = (object.scheduleOrder !== undefined && object.scheduleOrder !== null)
      ? ScheduleOrder.fromPartial(object.scheduleOrder)
      : undefined;
    return message;
  },
};

function createBaseQueryAllScheduleOrderRequest(): QueryAllScheduleOrderRequest {
  return { pagination: undefined };
}

export const QueryAllScheduleOrderRequest = {
  encode(message: QueryAllScheduleOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllScheduleOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScheduleOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllScheduleOrderRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllScheduleOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllScheduleOrderRequest>, I>>(object: I): QueryAllScheduleOrderRequest {
    const message = createBaseQueryAllScheduleOrderRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllScheduleOrderResponse(): QueryAllScheduleOrderResponse {
  return { scheduleOrder: [], pagination: undefined };
}

export const QueryAllScheduleOrderResponse = {
  encode(message: QueryAllScheduleOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.scheduleOrder) {
      ScheduleOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllScheduleOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScheduleOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleOrder.push(ScheduleOrder.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllScheduleOrderResponse {
    return {
      scheduleOrder: Array.isArray(object?.scheduleOrder)
        ? object.scheduleOrder.map((e: any) => ScheduleOrder.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllScheduleOrderResponse): unknown {
    const obj: any = {};
    if (message.scheduleOrder) {
      obj.scheduleOrder = message.scheduleOrder.map((e) => e ? ScheduleOrder.toJSON(e) : undefined);
    } else {
      obj.scheduleOrder = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllScheduleOrderResponse>, I>>(
    object: I,
  ): QueryAllScheduleOrderResponse {
    const message = createBaseQueryAllScheduleOrderResponse();
    message.scheduleOrder = object.scheduleOrder?.map((e) => ScheduleOrder.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetOraclePricePairRequest(): QueryGetOraclePricePairRequest {
  return { assetId: "" };
}

export const QueryGetOraclePricePairRequest = {
  encode(message: QueryGetOraclePricePairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOraclePricePairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePricePairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOraclePricePairRequest {
    return { assetId: isSet(object.assetId) ? String(object.assetId) : "" };
  },

  toJSON(message: QueryGetOraclePricePairRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOraclePricePairRequest>, I>>(
    object: I,
  ): QueryGetOraclePricePairRequest {
    const message = createBaseQueryGetOraclePricePairRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
};

function createBaseQueryGetOraclePricePairResponse(): QueryGetOraclePricePairResponse {
  return { oraclePricePair: undefined };
}

export const QueryGetOraclePricePairResponse = {
  encode(message: QueryGetOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePricePair = OraclePricePair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOraclePricePairResponse {
    return {
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined,
    };
  },

  toJSON(message: QueryGetOraclePricePairResponse): unknown {
    const obj: any = {};
    message.oraclePricePair !== undefined
      && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOraclePricePairResponse>, I>>(
    object: I,
  ): QueryGetOraclePricePairResponse {
    const message = createBaseQueryGetOraclePricePairResponse();
    message.oraclePricePair = (object.oraclePricePair !== undefined && object.oraclePricePair !== null)
      ? OraclePricePair.fromPartial(object.oraclePricePair)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOraclePricePairRequest(): QueryAllOraclePricePairRequest {
  return { pagination: undefined };
}

export const QueryAllOraclePricePairRequest = {
  encode(message: QueryAllOraclePricePairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclePricePairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePricePairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOraclePricePairRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOraclePricePairRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOraclePricePairRequest>, I>>(
    object: I,
  ): QueryAllOraclePricePairRequest {
    const message = createBaseQueryAllOraclePricePairRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOraclePricePairResponse(): QueryAllOraclePricePairResponse {
  return { oraclePricePair: [], pagination: undefined };
}

export const QueryAllOraclePricePairResponse = {
  encode(message: QueryAllOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oraclePricePair) {
      OraclePricePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePricePair.push(OraclePricePair.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOraclePricePairResponse {
    return {
      oraclePricePair: Array.isArray(object?.oraclePricePair)
        ? object.oraclePricePair.map((e: any) => OraclePricePair.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOraclePricePairResponse): unknown {
    const obj: any = {};
    if (message.oraclePricePair) {
      obj.oraclePricePair = message.oraclePricePair.map((e) => e ? OraclePricePair.toJSON(e) : undefined);
    } else {
      obj.oraclePricePair = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOraclePricePairResponse>, I>>(
    object: I,
  ): QueryAllOraclePricePairResponse {
    const message = createBaseQueryAllOraclePricePairResponse();
    message.oraclePricePair = object.oraclePricePair?.map((e) => OraclePricePair.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a PoolToken by index. */
  PoolToken(request: QueryGetPoolTokenRequest): Promise<QueryGetPoolTokenResponse>;
  /** Queries a list of PoolToken items. */
  PoolTokenAll(request: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponse>;
  /** Queries a Pool by id. */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Queries a list of Pool items. */
  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Queries a WeightedToken by index. */
  WeightedToken(request: QueryGetWeightedTokenRequest): Promise<QueryGetWeightedTokenResponse>;
  /** Queries a list of WeightedToken items. */
  WeightedTokenAll(request: QueryAllWeightedTokenRequest): Promise<QueryAllWeightedTokenResponse>;
  /** Queries a WeightUpdateTiming by index. */
  WeightUpdateTiming(request: QueryGetWeightUpdateTimingRequest): Promise<QueryGetWeightUpdateTimingResponse>;
  /** Queries a list of WeightUpdateTiming items. */
  WeightUpdateTimingAll(request: QueryAllWeightUpdateTimingRequest): Promise<QueryAllWeightUpdateTimingResponse>;
  /** Simulates a single swap action and returns the result */
  SimulateSingleSwap(request: QuerySimulateSingleSwapRequest): Promise<QuerySimulateSingleSwapResponse>;
  /** Queries a list of SimulateInitializePool items. */
  SimulateInitializePool(request: QuerySimulateInitializePoolRequest): Promise<QuerySimulateInitializePoolResponse>;
  /** Queries a list of SimulateJoinAllTokensExactLpt items. */
  SimulateJoinAllTokensExactLpt(
    request: QuerySimulateJoinAllTokensExactLptRequest,
  ): Promise<QuerySimulateJoinAllTokensExactLptResponse>;
  /** Queries a list of SimulateJoinExactTokens items. */
  SimulateJoinExactTokens(request: QuerySimulateJoinExactTokensRequest): Promise<QuerySimulateJoinExactTokensResponse>;
  /** Queries a list of SimulateJoinTokenExactLpt items. */
  SimulateJoinTokenExactLpt(
    request: QuerySimulateJoinTokenExactLptRequest,
  ): Promise<QuerySimulateJoinTokenExactLptResponse>;
  /** Queries a list of SimulateExitTokenExactLpt items. */
  SimulateExitTokenExactLpt(
    request: QuerySimulateExitTokenExactLptRequest,
  ): Promise<QuerySimulateExitTokenExactLptResponse>;
  /** Queries a list of SimulateExitExactTokens items. */
  SimulateExitExactTokens(request: QuerySimulateExitExactTokensRequest): Promise<QuerySimulateExitExactTokensResponse>;
  /** Queries a list of SimulateExitAllTokensExactLpt items. */
  SimulateExitAllTokensExactLpt(
    request: QuerySimulateExitAllTokensExactLptRequest,
  ): Promise<QuerySimulateExitAllTokensExactLptResponse>;
  /** Queries a list of SpotPrice items. */
  SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
  /** Queries a IntroducingPoolToken by index. */
  IntroducingPoolToken(request: QueryGetIntroducingPoolTokenRequest): Promise<QueryGetIntroducingPoolTokenResponse>;
  /** Queries a list of IntroducingPoolToken items. */
  IntroducingPoolTokenAll(request: QueryAllIntroducingPoolTokenRequest): Promise<QueryAllIntroducingPoolTokenResponse>;
  /** Queries a ExpiringPoolToken by index. */
  ExpiringPoolToken(request: QueryGetExpiringPoolTokenRequest): Promise<QueryGetExpiringPoolTokenResponse>;
  /** Queries a list of ExpiringPoolToken items. */
  ExpiringPoolTokenAll(request: QueryAllExpiringPoolTokenRequest): Promise<QueryAllExpiringPoolTokenResponse>;
  /** Queries a list of LpToken items. */
  LpToken(request: QueryLpTokenRequest): Promise<QueryLpTokenResponse>;
  /** Queries a list of SimulateBatchSwap items. */
  SimulateBatchSwap(request: QuerySimulateBatchSwapRequest): Promise<QuerySimulateBatchSwapResponse>;
  /** Queries a YammConfiguration by index. */
  YammConfiguration(request: QueryGetYammConfigurationRequest): Promise<QueryGetYammConfigurationResponse>;
  /** Queries a list of YammConfiguration items. */
  YammConfigurationAll(request: QueryAllYammConfigurationRequest): Promise<QueryAllYammConfigurationResponse>;
  /** Queries a WhitelistedRoute by index. */
  WhitelistedRoute(request: QueryGetWhitelistedRouteRequest): Promise<QueryGetWhitelistedRouteResponse>;
  /** Queries a list of WhitelistedRoute items. */
  WhitelistedRouteAll(request: QueryAllWhitelistedRouteRequest): Promise<QueryAllWhitelistedRouteResponse>;
  /** Queries a Order by id. */
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  /** Queries a list of Order items. */
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
  /** Queries a ExecutableOrder by index. */
  ExecutableOrder(request: QueryGetExecutableOrderRequest): Promise<QueryGetExecutableOrderResponse>;
  /** Queries a list of ExecutableOrder items. */
  ExecutableOrderAll(request: QueryAllExecutableOrderRequest): Promise<QueryAllExecutableOrderResponse>;
  /** Queries a ScheduleOrder by index. */
  ScheduleOrder(request: QueryGetScheduleOrderRequest): Promise<QueryGetScheduleOrderResponse>;
  /** Queries a list of ScheduleOrder items. */
  ScheduleOrderAll(request: QueryAllScheduleOrderRequest): Promise<QueryAllScheduleOrderResponse>;
  /** Queries a OraclePricePair by index. */
  OraclePricePair(request: QueryGetOraclePricePairRequest): Promise<QueryGetOraclePricePairResponse>;
  /** Queries a list of OraclePricePair items. */
  OraclePricePairAll(request: QueryAllOraclePricePairRequest): Promise<QueryAllOraclePricePairResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.PoolToken = this.PoolToken.bind(this);
    this.PoolTokenAll = this.PoolTokenAll.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolAll = this.PoolAll.bind(this);
    this.WeightedToken = this.WeightedToken.bind(this);
    this.WeightedTokenAll = this.WeightedTokenAll.bind(this);
    this.WeightUpdateTiming = this.WeightUpdateTiming.bind(this);
    this.WeightUpdateTimingAll = this.WeightUpdateTimingAll.bind(this);
    this.SimulateSingleSwap = this.SimulateSingleSwap.bind(this);
    this.SimulateInitializePool = this.SimulateInitializePool.bind(this);
    this.SimulateJoinAllTokensExactLpt = this.SimulateJoinAllTokensExactLpt.bind(this);
    this.SimulateJoinExactTokens = this.SimulateJoinExactTokens.bind(this);
    this.SimulateJoinTokenExactLpt = this.SimulateJoinTokenExactLpt.bind(this);
    this.SimulateExitTokenExactLpt = this.SimulateExitTokenExactLpt.bind(this);
    this.SimulateExitExactTokens = this.SimulateExitExactTokens.bind(this);
    this.SimulateExitAllTokensExactLpt = this.SimulateExitAllTokensExactLpt.bind(this);
    this.SpotPrice = this.SpotPrice.bind(this);
    this.IntroducingPoolToken = this.IntroducingPoolToken.bind(this);
    this.IntroducingPoolTokenAll = this.IntroducingPoolTokenAll.bind(this);
    this.ExpiringPoolToken = this.ExpiringPoolToken.bind(this);
    this.ExpiringPoolTokenAll = this.ExpiringPoolTokenAll.bind(this);
    this.LpToken = this.LpToken.bind(this);
    this.SimulateBatchSwap = this.SimulateBatchSwap.bind(this);
    this.YammConfiguration = this.YammConfiguration.bind(this);
    this.YammConfigurationAll = this.YammConfigurationAll.bind(this);
    this.WhitelistedRoute = this.WhitelistedRoute.bind(this);
    this.WhitelistedRouteAll = this.WhitelistedRouteAll.bind(this);
    this.Order = this.Order.bind(this);
    this.OrderAll = this.OrderAll.bind(this);
    this.ExecutableOrder = this.ExecutableOrder.bind(this);
    this.ExecutableOrderAll = this.ExecutableOrderAll.bind(this);
    this.ScheduleOrder = this.ScheduleOrder.bind(this);
    this.ScheduleOrderAll = this.ScheduleOrderAll.bind(this);
    this.OraclePricePair = this.OraclePricePair.bind(this);
    this.OraclePricePairAll = this.OraclePricePairAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  PoolToken(request: QueryGetPoolTokenRequest): Promise<QueryGetPoolTokenResponse> {
    const data = QueryGetPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "PoolToken", data);
    return promise.then((data) => QueryGetPoolTokenResponse.decode(new _m0.Reader(data)));
  }

  PoolTokenAll(request: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponse> {
    const data = QueryAllPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "PoolTokenAll", data);
    return promise.then((data) => QueryAllPoolTokenResponse.decode(new _m0.Reader(data)));
  }

  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "Pool", data);
    return promise.then((data) => QueryGetPoolResponse.decode(new _m0.Reader(data)));
  }

  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "PoolAll", data);
    return promise.then((data) => QueryAllPoolResponse.decode(new _m0.Reader(data)));
  }

  WeightedToken(request: QueryGetWeightedTokenRequest): Promise<QueryGetWeightedTokenResponse> {
    const data = QueryGetWeightedTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WeightedToken", data);
    return promise.then((data) => QueryGetWeightedTokenResponse.decode(new _m0.Reader(data)));
  }

  WeightedTokenAll(request: QueryAllWeightedTokenRequest): Promise<QueryAllWeightedTokenResponse> {
    const data = QueryAllWeightedTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WeightedTokenAll", data);
    return promise.then((data) => QueryAllWeightedTokenResponse.decode(new _m0.Reader(data)));
  }

  WeightUpdateTiming(request: QueryGetWeightUpdateTimingRequest): Promise<QueryGetWeightUpdateTimingResponse> {
    const data = QueryGetWeightUpdateTimingRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WeightUpdateTiming", data);
    return promise.then((data) => QueryGetWeightUpdateTimingResponse.decode(new _m0.Reader(data)));
  }

  WeightUpdateTimingAll(request: QueryAllWeightUpdateTimingRequest): Promise<QueryAllWeightUpdateTimingResponse> {
    const data = QueryAllWeightUpdateTimingRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WeightUpdateTimingAll", data);
    return promise.then((data) => QueryAllWeightUpdateTimingResponse.decode(new _m0.Reader(data)));
  }

  SimulateSingleSwap(request: QuerySimulateSingleSwapRequest): Promise<QuerySimulateSingleSwapResponse> {
    const data = QuerySimulateSingleSwapRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateSingleSwap", data);
    return promise.then((data) => QuerySimulateSingleSwapResponse.decode(new _m0.Reader(data)));
  }

  SimulateInitializePool(request: QuerySimulateInitializePoolRequest): Promise<QuerySimulateInitializePoolResponse> {
    const data = QuerySimulateInitializePoolRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateInitializePool", data);
    return promise.then((data) => QuerySimulateInitializePoolResponse.decode(new _m0.Reader(data)));
  }

  SimulateJoinAllTokensExactLpt(
    request: QuerySimulateJoinAllTokensExactLptRequest,
  ): Promise<QuerySimulateJoinAllTokensExactLptResponse> {
    const data = QuerySimulateJoinAllTokensExactLptRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateJoinAllTokensExactLpt", data);
    return promise.then((data) => QuerySimulateJoinAllTokensExactLptResponse.decode(new _m0.Reader(data)));
  }

  SimulateJoinExactTokens(request: QuerySimulateJoinExactTokensRequest): Promise<QuerySimulateJoinExactTokensResponse> {
    const data = QuerySimulateJoinExactTokensRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateJoinExactTokens", data);
    return promise.then((data) => QuerySimulateJoinExactTokensResponse.decode(new _m0.Reader(data)));
  }

  SimulateJoinTokenExactLpt(
    request: QuerySimulateJoinTokenExactLptRequest,
  ): Promise<QuerySimulateJoinTokenExactLptResponse> {
    const data = QuerySimulateJoinTokenExactLptRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateJoinTokenExactLpt", data);
    return promise.then((data) => QuerySimulateJoinTokenExactLptResponse.decode(new _m0.Reader(data)));
  }

  SimulateExitTokenExactLpt(
    request: QuerySimulateExitTokenExactLptRequest,
  ): Promise<QuerySimulateExitTokenExactLptResponse> {
    const data = QuerySimulateExitTokenExactLptRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateExitTokenExactLpt", data);
    return promise.then((data) => QuerySimulateExitTokenExactLptResponse.decode(new _m0.Reader(data)));
  }

  SimulateExitExactTokens(request: QuerySimulateExitExactTokensRequest): Promise<QuerySimulateExitExactTokensResponse> {
    const data = QuerySimulateExitExactTokensRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateExitExactTokens", data);
    return promise.then((data) => QuerySimulateExitExactTokensResponse.decode(new _m0.Reader(data)));
  }

  SimulateExitAllTokensExactLpt(
    request: QuerySimulateExitAllTokensExactLptRequest,
  ): Promise<QuerySimulateExitAllTokensExactLptResponse> {
    const data = QuerySimulateExitAllTokensExactLptRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateExitAllTokensExactLpt", data);
    return promise.then((data) => QuerySimulateExitAllTokensExactLptResponse.decode(new _m0.Reader(data)));
  }

  SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SpotPrice", data);
    return promise.then((data) => QuerySpotPriceResponse.decode(new _m0.Reader(data)));
  }

  IntroducingPoolToken(request: QueryGetIntroducingPoolTokenRequest): Promise<QueryGetIntroducingPoolTokenResponse> {
    const data = QueryGetIntroducingPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "IntroducingPoolToken", data);
    return promise.then((data) => QueryGetIntroducingPoolTokenResponse.decode(new _m0.Reader(data)));
  }

  IntroducingPoolTokenAll(request: QueryAllIntroducingPoolTokenRequest): Promise<QueryAllIntroducingPoolTokenResponse> {
    const data = QueryAllIntroducingPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "IntroducingPoolTokenAll", data);
    return promise.then((data) => QueryAllIntroducingPoolTokenResponse.decode(new _m0.Reader(data)));
  }

  ExpiringPoolToken(request: QueryGetExpiringPoolTokenRequest): Promise<QueryGetExpiringPoolTokenResponse> {
    const data = QueryGetExpiringPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ExpiringPoolToken", data);
    return promise.then((data) => QueryGetExpiringPoolTokenResponse.decode(new _m0.Reader(data)));
  }

  ExpiringPoolTokenAll(request: QueryAllExpiringPoolTokenRequest): Promise<QueryAllExpiringPoolTokenResponse> {
    const data = QueryAllExpiringPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ExpiringPoolTokenAll", data);
    return promise.then((data) => QueryAllExpiringPoolTokenResponse.decode(new _m0.Reader(data)));
  }

  LpToken(request: QueryLpTokenRequest): Promise<QueryLpTokenResponse> {
    const data = QueryLpTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "LpToken", data);
    return promise.then((data) => QueryLpTokenResponse.decode(new _m0.Reader(data)));
  }

  SimulateBatchSwap(request: QuerySimulateBatchSwapRequest): Promise<QuerySimulateBatchSwapResponse> {
    const data = QuerySimulateBatchSwapRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateBatchSwap", data);
    return promise.then((data) => QuerySimulateBatchSwapResponse.decode(new _m0.Reader(data)));
  }

  YammConfiguration(request: QueryGetYammConfigurationRequest): Promise<QueryGetYammConfigurationResponse> {
    const data = QueryGetYammConfigurationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "YammConfiguration", data);
    return promise.then((data) => QueryGetYammConfigurationResponse.decode(new _m0.Reader(data)));
  }

  YammConfigurationAll(request: QueryAllYammConfigurationRequest): Promise<QueryAllYammConfigurationResponse> {
    const data = QueryAllYammConfigurationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "YammConfigurationAll", data);
    return promise.then((data) => QueryAllYammConfigurationResponse.decode(new _m0.Reader(data)));
  }

  WhitelistedRoute(request: QueryGetWhitelistedRouteRequest): Promise<QueryGetWhitelistedRouteResponse> {
    const data = QueryGetWhitelistedRouteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WhitelistedRoute", data);
    return promise.then((data) => QueryGetWhitelistedRouteResponse.decode(new _m0.Reader(data)));
  }

  WhitelistedRouteAll(request: QueryAllWhitelistedRouteRequest): Promise<QueryAllWhitelistedRouteResponse> {
    const data = QueryAllWhitelistedRouteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WhitelistedRouteAll", data);
    return promise.then((data) => QueryAllWhitelistedRouteResponse.decode(new _m0.Reader(data)));
  }

  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "Order", data);
    return promise.then((data) => QueryGetOrderResponse.decode(new _m0.Reader(data)));
  }

  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "OrderAll", data);
    return promise.then((data) => QueryAllOrderResponse.decode(new _m0.Reader(data)));
  }

  ExecutableOrder(request: QueryGetExecutableOrderRequest): Promise<QueryGetExecutableOrderResponse> {
    const data = QueryGetExecutableOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ExecutableOrder", data);
    return promise.then((data) => QueryGetExecutableOrderResponse.decode(new _m0.Reader(data)));
  }

  ExecutableOrderAll(request: QueryAllExecutableOrderRequest): Promise<QueryAllExecutableOrderResponse> {
    const data = QueryAllExecutableOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ExecutableOrderAll", data);
    return promise.then((data) => QueryAllExecutableOrderResponse.decode(new _m0.Reader(data)));
  }

  ScheduleOrder(request: QueryGetScheduleOrderRequest): Promise<QueryGetScheduleOrderResponse> {
    const data = QueryGetScheduleOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ScheduleOrder", data);
    return promise.then((data) => QueryGetScheduleOrderResponse.decode(new _m0.Reader(data)));
  }

  ScheduleOrderAll(request: QueryAllScheduleOrderRequest): Promise<QueryAllScheduleOrderResponse> {
    const data = QueryAllScheduleOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ScheduleOrderAll", data);
    return promise.then((data) => QueryAllScheduleOrderResponse.decode(new _m0.Reader(data)));
  }

  OraclePricePair(request: QueryGetOraclePricePairRequest): Promise<QueryGetOraclePricePairResponse> {
    const data = QueryGetOraclePricePairRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "OraclePricePair", data);
    return promise.then((data) => QueryGetOraclePricePairResponse.decode(new _m0.Reader(data)));
  }

  OraclePricePairAll(request: QueryAllOraclePricePairRequest): Promise<QueryAllOraclePricePairResponse> {
    const data = QueryAllOraclePricePairRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "OraclePricePairAll", data);
    return promise.then((data) => QueryAllOraclePricePairResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
