import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { LiquidValidator, LiquidValidatorAmino, LiquidValidatorSDKType, Params, ParamsAmino, ParamsSDKType, TokenizeShareRecord, TokenizeShareRecordAmino, TokenizeShareRecordSDKType, TokenizeShareRecordReward, TokenizeShareRecordRewardAmino, TokenizeShareRecordRewardSDKType } from "./liquid";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator
 * RPC method.
 */
export interface QueryLiquidValidatorRequest {
  /**
   * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator
   * RPC method.
   */
  validatorAddr: string;
}
export interface QueryLiquidValidatorRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorRequest";
  value: Uint8Array;
}
/**
 * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator
 * RPC method.
 */
export interface QueryLiquidValidatorRequestAmino {
  /**
   * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator
   * RPC method.
   */
  validator_addr?: string;
}
export interface QueryLiquidValidatorRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryLiquidValidatorRequest";
  value: QueryLiquidValidatorRequestAmino;
}
/**
 * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator
 * RPC method.
 */
export interface QueryLiquidValidatorRequestSDKType {
  validator_addr: string;
}
/**
 * QueryLiquidValidatorResponse is the response type for the
 * Query/LiquidValidator RPC method.
 */
export interface QueryLiquidValidatorResponse {
  liquidValidator: LiquidValidator;
}
export interface QueryLiquidValidatorResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorResponse";
  value: Uint8Array;
}
/**
 * QueryLiquidValidatorResponse is the response type for the
 * Query/LiquidValidator RPC method.
 */
export interface QueryLiquidValidatorResponseAmino {
  liquid_validator: LiquidValidatorAmino;
}
export interface QueryLiquidValidatorResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryLiquidValidatorResponse";
  value: QueryLiquidValidatorResponseAmino;
}
/**
 * QueryLiquidValidatorResponse is the response type for the
 * Query/LiquidValidator RPC method.
 */
export interface QueryLiquidValidatorResponseSDKType {
  liquid_validator: LiquidValidatorSDKType;
}
/**
 * QueryLiquidValidatorsRequest is request type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryLiquidValidatorsRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryLiquidValidatorsRequest is request type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryLiquidValidatorsRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryLiquidValidatorsRequest";
  value: QueryLiquidValidatorsRequestAmino;
}
/**
 * QueryLiquidValidatorsRequest is request type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryLiquidValidatorsResponse is response type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsResponse {
  liquidValidators: LiquidValidator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryLiquidValidatorsResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryLiquidValidatorsResponse is response type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsResponseAmino {
  liquid_validators: LiquidValidatorAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryLiquidValidatorsResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryLiquidValidatorsResponse";
  value: QueryLiquidValidatorsResponseAmino;
}
/**
 * QueryLiquidValidatorsResponse is response type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsResponseSDKType {
  liquid_validators: LiquidValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
  /**
   * QueryTokenizeShareRecordByIdRequest is request type for the
   * Query/QueryTokenizeShareRecordById RPC method.
   */
  id: bigint;
}
export interface QueryTokenizeShareRecordByIdRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestAmino {
  /**
   * QueryTokenizeShareRecordByIdRequest is request type for the
   * Query/QueryTokenizeShareRecordById RPC method.
   */
  id?: string;
}
export interface QueryTokenizeShareRecordByIdRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest";
  value: QueryTokenizeShareRecordByIdRequestAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestSDKType {
  id: bigint;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
  record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByIdResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseAmino {
  record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByIdResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse";
  value: QueryTokenizeShareRecordByIdResponseAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseSDKType {
  record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
  /**
   * QueryTokenizeShareRecordByDenomRequest is request type for the
   * Query/QueryTokenizeShareRecordByDenom RPC method.
   */
  denom: string;
}
export interface QueryTokenizeShareRecordByDenomRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestAmino {
  /**
   * QueryTokenizeShareRecordByDenomRequest is request type for the
   * Query/QueryTokenizeShareRecordByDenom RPC method.
   */
  denom?: string;
}
export interface QueryTokenizeShareRecordByDenomRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest";
  value: QueryTokenizeShareRecordByDenomRequestAmino;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
  record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByDenomResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseAmino {
  record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByDenomResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse";
  value: QueryTokenizeShareRecordByDenomResponseAmino;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseSDKType {
  record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
  /**
   * QueryTokenizeShareRecordsOwnedRequest is request type for the
   * Query/QueryTokenizeShareRecordsOwned RPC method.
   */
  owner: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestAmino {
  /**
   * QueryTokenizeShareRecordsOwnedRequest is request type for the
   * Query/QueryTokenizeShareRecordsOwned RPC method.
   */
  owner?: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
  value: QueryTokenizeShareRecordsOwnedRequestAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestSDKType {
  owner: string;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
  records: TokenizeShareRecord[];
}
export interface QueryTokenizeShareRecordsOwnedResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseAmino {
  records?: TokenizeShareRecordAmino[];
}
export interface QueryTokenizeShareRecordsOwnedResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
  value: QueryTokenizeShareRecordsOwnedResponseAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseSDKType {
  records: TokenizeShareRecordSDKType[];
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllTokenizeShareRecordsRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllTokenizeShareRecordsRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest";
  value: QueryAllTokenizeShareRecordsRequestAmino;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
  records: TokenizeShareRecord[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllTokenizeShareRecordsResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseAmino {
  records?: TokenizeShareRecordAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllTokenizeShareRecordsResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse";
  value: QueryAllTokenizeShareRecordsResponseAmino;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseSDKType {
  records: TokenizeShareRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {}
export interface QueryLastTokenizeShareRecordIdRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestAmino {}
export interface QueryLastTokenizeShareRecordIdRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest";
  value: QueryLastTokenizeShareRecordIdRequestAmino;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
  /**
   * QueryLastTokenizeShareRecordIdResponse is response type for the
   * Query/QueryLastTokenizeShareRecordId RPC method.
   */
  id: bigint;
}
export interface QueryLastTokenizeShareRecordIdResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseAmino {
  /**
   * QueryLastTokenizeShareRecordIdResponse is response type for the
   * Query/QueryLastTokenizeShareRecordId RPC method.
   */
  id?: string;
}
export interface QueryLastTokenizeShareRecordIdResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse";
  value: QueryLastTokenizeShareRecordIdResponseAmino;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseSDKType {
  id: bigint;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {}
export interface QueryTotalTokenizeSharedAssetsRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestAmino {}
export interface QueryTotalTokenizeSharedAssetsRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
  value: QueryTotalTokenizeSharedAssetsRequestAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
  value: Coin;
}
export interface QueryTotalTokenizeSharedAssetsResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseAmino {
  value?: CoinAmino;
}
export interface QueryTotalTokenizeSharedAssetsResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
  value: QueryTotalTokenizeSharedAssetsResponseAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseSDKType {
  value: CoinSDKType;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {}
export interface QueryTotalLiquidStakedProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedAmino {}
export interface QueryTotalLiquidStakedAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked";
  value: QueryTotalLiquidStakedAmino;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
  /**
   * QueryTotalLiquidStakedResponse is response type for the
   * Query/QueryQueryTotalLiquidStaked RPC method.
   */
  tokens: string;
}
export interface QueryTotalLiquidStakedResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseAmino {
  /**
   * QueryTotalLiquidStakedResponse is response type for the
   * Query/QueryQueryTotalLiquidStaked RPC method.
   */
  tokens?: string;
}
export interface QueryTotalLiquidStakedResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse";
  value: QueryTotalLiquidStakedResponseAmino;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseSDKType {
  tokens: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
  /**
   * QueryTokenizeShareLockInfo queries the tokenize share lock information
   * associated with given account
   */
  address: string;
}
export interface QueryTokenizeShareLockInfoProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoAmino {
  /**
   * QueryTokenizeShareLockInfo queries the tokenize share lock information
   * associated with given account
   */
  address?: string;
}
export interface QueryTokenizeShareLockInfoAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo";
  value: QueryTokenizeShareLockInfoAmino;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoSDKType {
  address: string;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
  status: string;
  expirationTime: string;
}
export interface QueryTokenizeShareLockInfoResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseAmino {
  status?: string;
  expiration_time?: string;
}
export interface QueryTokenizeShareLockInfoResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse";
  value: QueryTokenizeShareLockInfoResponseAmino;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseSDKType {
  status: string;
  expiration_time: string;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequest {
  ownerAddress: string;
}
export interface QueryTokenizeShareRecordRewardRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequestAmino {
  owner_address?: string;
}
export interface QueryTokenizeShareRecordRewardRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest";
  value: QueryTokenizeShareRecordRewardRequestAmino;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequestSDKType {
  owner_address: string;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: TokenizeShareRecordReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
export interface QueryTokenizeShareRecordRewardResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseAmino {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards?: TokenizeShareRecordRewardAmino[];
  /** total defines the sum of all the rewards. */
  total?: DecCoinAmino[];
}
export interface QueryTokenizeShareRecordRewardResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse";
  value: QueryTokenizeShareRecordRewardResponseAmino;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseSDKType {
  rewards: TokenizeShareRecordRewardSDKType[];
  total: DecCoinSDKType[];
}
function createBaseQueryLiquidValidatorRequest(): QueryLiquidValidatorRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryLiquidValidatorRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorRequest",
  is(o: any): o is QueryLiquidValidatorRequest {
    return o && (o.$typeUrl === QueryLiquidValidatorRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryLiquidValidatorRequestSDKType {
    return o && (o.$typeUrl === QueryLiquidValidatorRequest.typeUrl || typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryLiquidValidatorRequestAmino {
    return o && (o.$typeUrl === QueryLiquidValidatorRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryLiquidValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLiquidValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message: QueryLiquidValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorRequest>): QueryLiquidValidatorRequest {
    const message = createBaseQueryLiquidValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryLiquidValidatorRequestAmino): QueryLiquidValidatorRequest {
    const message = createBaseQueryLiquidValidatorRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryLiquidValidatorRequest, useInterfaces: boolean = true): QueryLiquidValidatorRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidValidatorRequestAminoMsg): QueryLiquidValidatorRequest {
    return QueryLiquidValidatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidValidatorRequestProtoMsg, useInterfaces: boolean = true): QueryLiquidValidatorRequest {
    return QueryLiquidValidatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLiquidValidatorRequest): Uint8Array {
    return QueryLiquidValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidValidatorRequest): QueryLiquidValidatorRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorRequest",
      value: QueryLiquidValidatorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLiquidValidatorRequest.typeUrl, QueryLiquidValidatorRequest);
function createBaseQueryLiquidValidatorResponse(): QueryLiquidValidatorResponse {
  return {
    liquidValidator: LiquidValidator.fromPartial({})
  };
}
export const QueryLiquidValidatorResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorResponse",
  is(o: any): o is QueryLiquidValidatorResponse {
    return o && (o.$typeUrl === QueryLiquidValidatorResponse.typeUrl || LiquidValidator.is(o.liquidValidator));
  },
  isSDK(o: any): o is QueryLiquidValidatorResponseSDKType {
    return o && (o.$typeUrl === QueryLiquidValidatorResponse.typeUrl || LiquidValidator.isSDK(o.liquid_validator));
  },
  isAmino(o: any): o is QueryLiquidValidatorResponseAmino {
    return o && (o.$typeUrl === QueryLiquidValidatorResponse.typeUrl || LiquidValidator.isAmino(o.liquid_validator));
  },
  encode(message: QueryLiquidValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidValidator !== undefined) {
      LiquidValidator.encode(message.liquidValidator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLiquidValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidValidator = LiquidValidator.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorResponse {
    return {
      liquidValidator: isSet(object.liquidValidator) ? LiquidValidator.fromJSON(object.liquidValidator) : undefined
    };
  },
  toJSON(message: QueryLiquidValidatorResponse): unknown {
    const obj: any = {};
    message.liquidValidator !== undefined && (obj.liquidValidator = message.liquidValidator ? LiquidValidator.toJSON(message.liquidValidator) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorResponse>): QueryLiquidValidatorResponse {
    const message = createBaseQueryLiquidValidatorResponse();
    message.liquidValidator = object.liquidValidator !== undefined && object.liquidValidator !== null ? LiquidValidator.fromPartial(object.liquidValidator) : undefined;
    return message;
  },
  fromAmino(object: QueryLiquidValidatorResponseAmino): QueryLiquidValidatorResponse {
    const message = createBaseQueryLiquidValidatorResponse();
    if (object.liquid_validator !== undefined && object.liquid_validator !== null) {
      message.liquidValidator = LiquidValidator.fromAmino(object.liquid_validator);
    }
    return message;
  },
  toAmino(message: QueryLiquidValidatorResponse, useInterfaces: boolean = true): QueryLiquidValidatorResponseAmino {
    const obj: any = {};
    obj.liquid_validator = message.liquidValidator ? LiquidValidator.toAmino(message.liquidValidator, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidValidatorResponseAminoMsg): QueryLiquidValidatorResponse {
    return QueryLiquidValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidValidatorResponseProtoMsg, useInterfaces: boolean = true): QueryLiquidValidatorResponse {
    return QueryLiquidValidatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLiquidValidatorResponse): Uint8Array {
    return QueryLiquidValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidValidatorResponse): QueryLiquidValidatorResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorResponse",
      value: QueryLiquidValidatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLiquidValidatorResponse.typeUrl, QueryLiquidValidatorResponse);
function createBaseQueryLiquidValidatorsRequest(): QueryLiquidValidatorsRequest {
  return {
    pagination: undefined
  };
}
export const QueryLiquidValidatorsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorsRequest",
  is(o: any): o is QueryLiquidValidatorsRequest {
    return o && o.$typeUrl === QueryLiquidValidatorsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryLiquidValidatorsRequestSDKType {
    return o && o.$typeUrl === QueryLiquidValidatorsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryLiquidValidatorsRequestAmino {
    return o && o.$typeUrl === QueryLiquidValidatorsRequest.typeUrl;
  },
  encode(message: QueryLiquidValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLiquidValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryLiquidValidatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorsRequest>): QueryLiquidValidatorsRequest {
    const message = createBaseQueryLiquidValidatorsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLiquidValidatorsRequestAmino): QueryLiquidValidatorsRequest {
    const message = createBaseQueryLiquidValidatorsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLiquidValidatorsRequest, useInterfaces: boolean = true): QueryLiquidValidatorsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidValidatorsRequestAminoMsg): QueryLiquidValidatorsRequest {
    return QueryLiquidValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidValidatorsRequestProtoMsg, useInterfaces: boolean = true): QueryLiquidValidatorsRequest {
    return QueryLiquidValidatorsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLiquidValidatorsRequest): Uint8Array {
    return QueryLiquidValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidValidatorsRequest): QueryLiquidValidatorsRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorsRequest",
      value: QueryLiquidValidatorsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLiquidValidatorsRequest.typeUrl, QueryLiquidValidatorsRequest);
function createBaseQueryLiquidValidatorsResponse(): QueryLiquidValidatorsResponse {
  return {
    liquidValidators: [],
    pagination: undefined
  };
}
export const QueryLiquidValidatorsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorsResponse",
  is(o: any): o is QueryLiquidValidatorsResponse {
    return o && (o.$typeUrl === QueryLiquidValidatorsResponse.typeUrl || Array.isArray(o.liquidValidators) && (!o.liquidValidators.length || LiquidValidator.is(o.liquidValidators[0])));
  },
  isSDK(o: any): o is QueryLiquidValidatorsResponseSDKType {
    return o && (o.$typeUrl === QueryLiquidValidatorsResponse.typeUrl || Array.isArray(o.liquid_validators) && (!o.liquid_validators.length || LiquidValidator.isSDK(o.liquid_validators[0])));
  },
  isAmino(o: any): o is QueryLiquidValidatorsResponseAmino {
    return o && (o.$typeUrl === QueryLiquidValidatorsResponse.typeUrl || Array.isArray(o.liquid_validators) && (!o.liquid_validators.length || LiquidValidator.isAmino(o.liquid_validators[0])));
  },
  encode(message: QueryLiquidValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidValidators) {
      LiquidValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLiquidValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidValidators.push(LiquidValidator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorsResponse {
    return {
      liquidValidators: Array.isArray(object?.liquidValidators) ? object.liquidValidators.map((e: any) => LiquidValidator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryLiquidValidatorsResponse): unknown {
    const obj: any = {};
    if (message.liquidValidators) {
      obj.liquidValidators = message.liquidValidators.map(e => e ? LiquidValidator.toJSON(e) : undefined);
    } else {
      obj.liquidValidators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorsResponse>): QueryLiquidValidatorsResponse {
    const message = createBaseQueryLiquidValidatorsResponse();
    message.liquidValidators = object.liquidValidators?.map(e => LiquidValidator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLiquidValidatorsResponseAmino): QueryLiquidValidatorsResponse {
    const message = createBaseQueryLiquidValidatorsResponse();
    message.liquidValidators = object.liquid_validators?.map(e => LiquidValidator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLiquidValidatorsResponse, useInterfaces: boolean = true): QueryLiquidValidatorsResponseAmino {
    const obj: any = {};
    if (message.liquidValidators) {
      obj.liquid_validators = message.liquidValidators.map(e => e ? LiquidValidator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.liquid_validators = message.liquidValidators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidValidatorsResponseAminoMsg): QueryLiquidValidatorsResponse {
    return QueryLiquidValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidValidatorsResponseProtoMsg, useInterfaces: boolean = true): QueryLiquidValidatorsResponse {
    return QueryLiquidValidatorsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLiquidValidatorsResponse): Uint8Array {
    return QueryLiquidValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidValidatorsResponse): QueryLiquidValidatorsResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorsResponse",
      value: QueryLiquidValidatorsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLiquidValidatorsResponse.typeUrl, QueryLiquidValidatorsResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryTokenizeShareRecordByIdRequest(): QueryTokenizeShareRecordByIdRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryTokenizeShareRecordByIdRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest",
  is(o: any): o is QueryTokenizeShareRecordByIdRequest {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryTokenizeShareRecordByIdRequestSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryTokenizeShareRecordByIdRequestAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryTokenizeShareRecordByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareRecordByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByIdRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTokenizeShareRecordByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdRequestAmino): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByIdRequest, useInterfaces: boolean = true): QueryTokenizeShareRecordByIdRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdRequestAminoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdRequestProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareRecordByIdRequest): Uint8Array {
    return QueryTokenizeShareRecordByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordByIdRequest.typeUrl, QueryTokenizeShareRecordByIdRequest);
function createBaseQueryTokenizeShareRecordByIdResponse(): QueryTokenizeShareRecordByIdResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByIdResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse",
  is(o: any): o is QueryTokenizeShareRecordByIdResponse {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdResponse.typeUrl || TokenizeShareRecord.is(o.record));
  },
  isSDK(o: any): o is QueryTokenizeShareRecordByIdResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdResponse.typeUrl || TokenizeShareRecord.isSDK(o.record));
  },
  isAmino(o: any): o is QueryTokenizeShareRecordByIdResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdResponse.typeUrl || TokenizeShareRecord.isAmino(o.record));
  },
  encode(message: QueryTokenizeShareRecordByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareRecordByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByIdResponse {
    return {
      record: isSet(object.record) ? TokenizeShareRecord.fromJSON(object.record) : undefined
    };
  },
  toJSON(message: QueryTokenizeShareRecordByIdResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? TokenizeShareRecord.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdResponseAmino): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByIdResponse, useInterfaces: boolean = true): QueryTokenizeShareRecordByIdResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdResponseAminoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdResponseProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareRecordByIdResponse): Uint8Array {
    return QueryTokenizeShareRecordByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordByIdResponse.typeUrl, QueryTokenizeShareRecordByIdResponse);
function createBaseQueryTokenizeShareRecordByDenomRequest(): QueryTokenizeShareRecordByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryTokenizeShareRecordByDenomRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest",
  is(o: any): o is QueryTokenizeShareRecordByDenomRequest {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareRecordByDenomRequestSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareRecordByDenomRequestAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryTokenizeShareRecordByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareRecordByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryTokenizeShareRecordByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomRequestAmino): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByDenomRequest, useInterfaces: boolean = true): QueryTokenizeShareRecordByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomRequestAminoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomRequestProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareRecordByDenomRequest): Uint8Array {
    return QueryTokenizeShareRecordByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordByDenomRequest.typeUrl, QueryTokenizeShareRecordByDenomRequest);
function createBaseQueryTokenizeShareRecordByDenomResponse(): QueryTokenizeShareRecordByDenomResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByDenomResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse",
  is(o: any): o is QueryTokenizeShareRecordByDenomResponse {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomResponse.typeUrl || TokenizeShareRecord.is(o.record));
  },
  isSDK(o: any): o is QueryTokenizeShareRecordByDenomResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomResponse.typeUrl || TokenizeShareRecord.isSDK(o.record));
  },
  isAmino(o: any): o is QueryTokenizeShareRecordByDenomResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomResponse.typeUrl || TokenizeShareRecord.isAmino(o.record));
  },
  encode(message: QueryTokenizeShareRecordByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareRecordByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByDenomResponse {
    return {
      record: isSet(object.record) ? TokenizeShareRecord.fromJSON(object.record) : undefined
    };
  },
  toJSON(message: QueryTokenizeShareRecordByDenomResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? TokenizeShareRecord.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomResponseAmino): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByDenomResponse, useInterfaces: boolean = true): QueryTokenizeShareRecordByDenomResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomResponseAminoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomResponseProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareRecordByDenomResponse): Uint8Array {
    return QueryTokenizeShareRecordByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordByDenomResponse.typeUrl, QueryTokenizeShareRecordByDenomResponse);
function createBaseQueryTokenizeShareRecordsOwnedRequest(): QueryTokenizeShareRecordsOwnedRequest {
  return {
    owner: ""
  };
}
export const QueryTokenizeShareRecordsOwnedRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
  is(o: any): o is QueryTokenizeShareRecordsOwnedRequest {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareRecordsOwnedRequestSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareRecordsOwnedRequestAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryTokenizeShareRecordsOwnedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareRecordsOwnedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordsOwnedRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryTokenizeShareRecordsOwnedRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedRequestAmino): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedRequest, useInterfaces: boolean = true): QueryTokenizeShareRecordsOwnedRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedRequestAminoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedRequestProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedRequest): Uint8Array {
    return QueryTokenizeShareRecordsOwnedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordsOwnedRequest.typeUrl, QueryTokenizeShareRecordsOwnedRequest);
function createBaseQueryTokenizeShareRecordsOwnedResponse(): QueryTokenizeShareRecordsOwnedResponse {
  return {
    records: []
  };
}
export const QueryTokenizeShareRecordsOwnedResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
  is(o: any): o is QueryTokenizeShareRecordsOwnedResponse {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.is(o.records[0])));
  },
  isSDK(o: any): o is QueryTokenizeShareRecordsOwnedResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.isSDK(o.records[0])));
  },
  isAmino(o: any): o is QueryTokenizeShareRecordsOwnedResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.isAmino(o.records[0])));
  },
  encode(message: QueryTokenizeShareRecordsOwnedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareRecordsOwnedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordsOwnedResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => TokenizeShareRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTokenizeShareRecordsOwnedResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedResponseAmino): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedResponse, useInterfaces: boolean = true): QueryTokenizeShareRecordsOwnedResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.records = message.records;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedResponseAminoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedResponseProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedResponse): Uint8Array {
    return QueryTokenizeShareRecordsOwnedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordsOwnedResponse.typeUrl, QueryTokenizeShareRecordsOwnedResponse);
function createBaseQueryAllTokenizeShareRecordsRequest(): QueryAllTokenizeShareRecordsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest",
  is(o: any): o is QueryAllTokenizeShareRecordsRequest {
    return o && o.$typeUrl === QueryAllTokenizeShareRecordsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllTokenizeShareRecordsRequestSDKType {
    return o && o.$typeUrl === QueryAllTokenizeShareRecordsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllTokenizeShareRecordsRequestAmino {
    return o && o.$typeUrl === QueryAllTokenizeShareRecordsRequest.typeUrl;
  },
  encode(message: QueryAllTokenizeShareRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllTokenizeShareRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllTokenizeShareRecordsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllTokenizeShareRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsRequestAmino): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenizeShareRecordsRequest, useInterfaces: boolean = true): QueryAllTokenizeShareRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsRequestAminoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsRequestProtoMsg, useInterfaces: boolean = true): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllTokenizeShareRecordsRequest): Uint8Array {
    return QueryAllTokenizeShareRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllTokenizeShareRecordsRequest.typeUrl, QueryAllTokenizeShareRecordsRequest);
function createBaseQueryAllTokenizeShareRecordsResponse(): QueryAllTokenizeShareRecordsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse",
  is(o: any): o is QueryAllTokenizeShareRecordsResponse {
    return o && (o.$typeUrl === QueryAllTokenizeShareRecordsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.is(o.records[0])));
  },
  isSDK(o: any): o is QueryAllTokenizeShareRecordsResponseSDKType {
    return o && (o.$typeUrl === QueryAllTokenizeShareRecordsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.isSDK(o.records[0])));
  },
  isAmino(o: any): o is QueryAllTokenizeShareRecordsResponseAmino {
    return o && (o.$typeUrl === QueryAllTokenizeShareRecordsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.isAmino(o.records[0])));
  },
  encode(message: QueryAllTokenizeShareRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllTokenizeShareRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllTokenizeShareRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => TokenizeShareRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllTokenizeShareRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsResponseAmino): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenizeShareRecordsResponse, useInterfaces: boolean = true): QueryAllTokenizeShareRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsResponseAminoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsResponseProtoMsg, useInterfaces: boolean = true): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllTokenizeShareRecordsResponse): Uint8Array {
    return QueryAllTokenizeShareRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllTokenizeShareRecordsResponse.typeUrl, QueryAllTokenizeShareRecordsResponse);
function createBaseQueryLastTokenizeShareRecordIdRequest(): QueryLastTokenizeShareRecordIdRequest {
  return {};
}
export const QueryLastTokenizeShareRecordIdRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest",
  is(o: any): o is QueryLastTokenizeShareRecordIdRequest {
    return o && o.$typeUrl === QueryLastTokenizeShareRecordIdRequest.typeUrl;
  },
  isSDK(o: any): o is QueryLastTokenizeShareRecordIdRequestSDKType {
    return o && o.$typeUrl === QueryLastTokenizeShareRecordIdRequest.typeUrl;
  },
  isAmino(o: any): o is QueryLastTokenizeShareRecordIdRequestAmino {
    return o && o.$typeUrl === QueryLastTokenizeShareRecordIdRequest.typeUrl;
  },
  encode(_: QueryLastTokenizeShareRecordIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLastTokenizeShareRecordIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
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
  fromJSON(_: any): QueryLastTokenizeShareRecordIdRequest {
    return {};
  },
  toJSON(_: QueryLastTokenizeShareRecordIdRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  fromAmino(_: QueryLastTokenizeShareRecordIdRequestAmino): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  toAmino(_: QueryLastTokenizeShareRecordIdRequest, useInterfaces: boolean = true): QueryLastTokenizeShareRecordIdRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdRequestAminoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdRequestProtoMsg, useInterfaces: boolean = true): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLastTokenizeShareRecordIdRequest): Uint8Array {
    return QueryLastTokenizeShareRecordIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLastTokenizeShareRecordIdRequest.typeUrl, QueryLastTokenizeShareRecordIdRequest);
function createBaseQueryLastTokenizeShareRecordIdResponse(): QueryLastTokenizeShareRecordIdResponse {
  return {
    id: BigInt(0)
  };
}
export const QueryLastTokenizeShareRecordIdResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse",
  is(o: any): o is QueryLastTokenizeShareRecordIdResponse {
    return o && (o.$typeUrl === QueryLastTokenizeShareRecordIdResponse.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryLastTokenizeShareRecordIdResponseSDKType {
    return o && (o.$typeUrl === QueryLastTokenizeShareRecordIdResponse.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryLastTokenizeShareRecordIdResponseAmino {
    return o && (o.$typeUrl === QueryLastTokenizeShareRecordIdResponse.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryLastTokenizeShareRecordIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLastTokenizeShareRecordIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastTokenizeShareRecordIdResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryLastTokenizeShareRecordIdResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLastTokenizeShareRecordIdResponseAmino): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryLastTokenizeShareRecordIdResponse, useInterfaces: boolean = true): QueryLastTokenizeShareRecordIdResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdResponseAminoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdResponseProtoMsg, useInterfaces: boolean = true): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLastTokenizeShareRecordIdResponse): Uint8Array {
    return QueryLastTokenizeShareRecordIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLastTokenizeShareRecordIdResponse.typeUrl, QueryLastTokenizeShareRecordIdResponse);
function createBaseQueryTotalTokenizeSharedAssetsRequest(): QueryTotalTokenizeSharedAssetsRequest {
  return {};
}
export const QueryTotalTokenizeSharedAssetsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
  is(o: any): o is QueryTotalTokenizeSharedAssetsRequest {
    return o && o.$typeUrl === QueryTotalTokenizeSharedAssetsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalTokenizeSharedAssetsRequestSDKType {
    return o && o.$typeUrl === QueryTotalTokenizeSharedAssetsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalTokenizeSharedAssetsRequestAmino {
    return o && o.$typeUrl === QueryTotalTokenizeSharedAssetsRequest.typeUrl;
  },
  encode(_: QueryTotalTokenizeSharedAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalTokenizeSharedAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
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
  fromJSON(_: any): QueryTotalTokenizeSharedAssetsRequest {
    return {};
  },
  toJSON(_: QueryTotalTokenizeSharedAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  fromAmino(_: QueryTotalTokenizeSharedAssetsRequestAmino): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  toAmino(_: QueryTotalTokenizeSharedAssetsRequest, useInterfaces: boolean = true): QueryTotalTokenizeSharedAssetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsRequestAminoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsRequestProtoMsg, useInterfaces: boolean = true): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsRequest): Uint8Array {
    return QueryTotalTokenizeSharedAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalTokenizeSharedAssetsRequest.typeUrl, QueryTotalTokenizeSharedAssetsRequest);
function createBaseQueryTotalTokenizeSharedAssetsResponse(): QueryTotalTokenizeSharedAssetsResponse {
  return {
    value: Coin.fromPartial({})
  };
}
export const QueryTotalTokenizeSharedAssetsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
  is(o: any): o is QueryTotalTokenizeSharedAssetsResponse {
    return o && (o.$typeUrl === QueryTotalTokenizeSharedAssetsResponse.typeUrl || Coin.is(o.value));
  },
  isSDK(o: any): o is QueryTotalTokenizeSharedAssetsResponseSDKType {
    return o && (o.$typeUrl === QueryTotalTokenizeSharedAssetsResponse.typeUrl || Coin.isSDK(o.value));
  },
  isAmino(o: any): o is QueryTotalTokenizeSharedAssetsResponseAmino {
    return o && (o.$typeUrl === QueryTotalTokenizeSharedAssetsResponse.typeUrl || Coin.isAmino(o.value));
  },
  encode(message: QueryTotalTokenizeSharedAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalTokenizeSharedAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTokenizeSharedAssetsResponse {
    return {
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: QueryTotalTokenizeSharedAssetsResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalTokenizeSharedAssetsResponseAmino): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: QueryTotalTokenizeSharedAssetsResponse, useInterfaces: boolean = true): QueryTotalTokenizeSharedAssetsResponseAmino {
    const obj: any = {};
    obj.value = message.value ? Coin.toAmino(message.value, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsResponseAminoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsResponseProtoMsg, useInterfaces: boolean = true): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsResponse): Uint8Array {
    return QueryTotalTokenizeSharedAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalTokenizeSharedAssetsResponse.typeUrl, QueryTotalTokenizeSharedAssetsResponse);
function createBaseQueryTotalLiquidStaked(): QueryTotalLiquidStaked {
  return {};
}
export const QueryTotalLiquidStaked = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked",
  is(o: any): o is QueryTotalLiquidStaked {
    return o && o.$typeUrl === QueryTotalLiquidStaked.typeUrl;
  },
  isSDK(o: any): o is QueryTotalLiquidStakedSDKType {
    return o && o.$typeUrl === QueryTotalLiquidStaked.typeUrl;
  },
  isAmino(o: any): o is QueryTotalLiquidStakedAmino {
    return o && o.$typeUrl === QueryTotalLiquidStaked.typeUrl;
  },
  encode(_: QueryTotalLiquidStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalLiquidStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStaked();
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
  fromJSON(_: any): QueryTotalLiquidStaked {
    return {};
  },
  toJSON(_: QueryTotalLiquidStaked): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  fromAmino(_: QueryTotalLiquidStakedAmino): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  toAmino(_: QueryTotalLiquidStaked, useInterfaces: boolean = true): QueryTotalLiquidStakedAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedAminoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLiquidStakedProtoMsg, useInterfaces: boolean = true): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalLiquidStaked): Uint8Array {
    return QueryTotalLiquidStaked.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalLiquidStaked.typeUrl, QueryTotalLiquidStaked);
function createBaseQueryTotalLiquidStakedResponse(): QueryTotalLiquidStakedResponse {
  return {
    tokens: ""
  };
}
export const QueryTotalLiquidStakedResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse",
  is(o: any): o is QueryTotalLiquidStakedResponse {
    return o && (o.$typeUrl === QueryTotalLiquidStakedResponse.typeUrl || typeof o.tokens === "string");
  },
  isSDK(o: any): o is QueryTotalLiquidStakedResponseSDKType {
    return o && (o.$typeUrl === QueryTotalLiquidStakedResponse.typeUrl || typeof o.tokens === "string");
  },
  isAmino(o: any): o is QueryTotalLiquidStakedResponseAmino {
    return o && (o.$typeUrl === QueryTotalLiquidStakedResponse.typeUrl || typeof o.tokens === "string");
  },
  encode(message: QueryTotalLiquidStakedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalLiquidStakedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalLiquidStakedResponse {
    return {
      tokens: isSet(object.tokens) ? String(object.tokens) : ""
    };
  },
  toJSON(message: QueryTotalLiquidStakedResponse): unknown {
    const obj: any = {};
    message.tokens !== undefined && (obj.tokens = message.tokens);
    return obj;
  },
  fromPartial(object: Partial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    message.tokens = object.tokens ?? "";
    return message;
  },
  fromAmino(object: QueryTotalLiquidStakedResponseAmino): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    return message;
  },
  toAmino(message: QueryTotalLiquidStakedResponse, useInterfaces: boolean = true): QueryTotalLiquidStakedResponseAmino {
    const obj: any = {};
    obj.tokens = message.tokens === "" ? undefined : message.tokens;
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedResponseAminoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLiquidStakedResponseProtoMsg, useInterfaces: boolean = true): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalLiquidStakedResponse): Uint8Array {
    return QueryTotalLiquidStakedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalLiquidStakedResponse.typeUrl, QueryTotalLiquidStakedResponse);
function createBaseQueryTokenizeShareLockInfo(): QueryTokenizeShareLockInfo {
  return {
    address: ""
  };
}
export const QueryTokenizeShareLockInfo = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo",
  is(o: any): o is QueryTokenizeShareLockInfo {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfo.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareLockInfoSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfo.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareLockInfoAmino {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfo.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryTokenizeShareLockInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareLockInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareLockInfo {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryTokenizeShareLockInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoAmino): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareLockInfo, useInterfaces: boolean = true): QueryTokenizeShareLockInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoAminoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareLockInfo): Uint8Array {
    return QueryTokenizeShareLockInfo.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareLockInfo.typeUrl, QueryTokenizeShareLockInfo);
function createBaseQueryTokenizeShareLockInfoResponse(): QueryTokenizeShareLockInfoResponse {
  return {
    status: "",
    expirationTime: ""
  };
}
export const QueryTokenizeShareLockInfoResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse",
  is(o: any): o is QueryTokenizeShareLockInfoResponse {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfoResponse.typeUrl || typeof o.status === "string" && typeof o.expirationTime === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareLockInfoResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfoResponse.typeUrl || typeof o.status === "string" && typeof o.expiration_time === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareLockInfoResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfoResponse.typeUrl || typeof o.status === "string" && typeof o.expiration_time === "string");
  },
  encode(message: QueryTokenizeShareLockInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareLockInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expirationTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareLockInfoResponse {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      expirationTime: isSet(object.expirationTime) ? String(object.expirationTime) : ""
    };
  },
  toJSON(message: QueryTokenizeShareLockInfoResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    message.status = object.status ?? "";
    message.expirationTime = object.expirationTime ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoResponseAmino): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = object.expiration_time;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareLockInfoResponse, useInterfaces: boolean = true): QueryTokenizeShareLockInfoResponseAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    obj.expiration_time = message.expirationTime === "" ? undefined : message.expirationTime;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoResponseAminoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoResponseProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareLockInfoResponse): Uint8Array {
    return QueryTokenizeShareLockInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareLockInfoResponse.typeUrl, QueryTokenizeShareLockInfoResponse);
function createBaseQueryTokenizeShareRecordRewardRequest(): QueryTokenizeShareRecordRewardRequest {
  return {
    ownerAddress: ""
  };
}
export const QueryTokenizeShareRecordRewardRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest",
  is(o: any): o is QueryTokenizeShareRecordRewardRequest {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardRequest.typeUrl || typeof o.ownerAddress === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareRecordRewardRequestSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardRequest.typeUrl || typeof o.owner_address === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareRecordRewardRequestAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardRequest.typeUrl || typeof o.owner_address === "string");
  },
  encode(message: QueryTokenizeShareRecordRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareRecordRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordRewardRequest {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : ""
    };
  },
  toJSON(message: QueryTokenizeShareRecordRewardRequest): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordRewardRequestAmino): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordRewardRequest, useInterfaces: boolean = true): QueryTokenizeShareRecordRewardRequestAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordRewardRequestAminoMsg): QueryTokenizeShareRecordRewardRequest {
    return QueryTokenizeShareRecordRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordRewardRequestProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareRecordRewardRequest {
    return QueryTokenizeShareRecordRewardRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareRecordRewardRequest): Uint8Array {
    return QueryTokenizeShareRecordRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordRewardRequest.typeUrl, QueryTokenizeShareRecordRewardRequest);
function createBaseQueryTokenizeShareRecordRewardResponse(): QueryTokenizeShareRecordRewardResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryTokenizeShareRecordRewardResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse",
  is(o: any): o is QueryTokenizeShareRecordRewardResponse {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || TokenizeShareRecordReward.is(o.rewards[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.is(o.total[0])));
  },
  isSDK(o: any): o is QueryTokenizeShareRecordRewardResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || TokenizeShareRecordReward.isSDK(o.rewards[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.isSDK(o.total[0])));
  },
  isAmino(o: any): o is QueryTokenizeShareRecordRewardResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || TokenizeShareRecordReward.isAmino(o.rewards[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.isAmino(o.total[0])));
  },
  encode(message: QueryTokenizeShareRecordRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      TokenizeShareRecordReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenizeShareRecordRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(TokenizeShareRecordReward.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordRewardResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => TokenizeShareRecordReward.fromJSON(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? TokenizeShareRecordReward.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordRewardResponse>): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordRewardResponseAmino): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromAmino(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordRewardResponse, useInterfaces: boolean = true): QueryTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? TokenizeShareRecordReward.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordRewardResponseAminoMsg): QueryTokenizeShareRecordRewardResponse {
    return QueryTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordRewardResponseProtoMsg, useInterfaces: boolean = true): QueryTokenizeShareRecordRewardResponse {
    return QueryTokenizeShareRecordRewardResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenizeShareRecordRewardResponse): Uint8Array {
    return QueryTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordRewardResponse.typeUrl, QueryTokenizeShareRecordRewardResponse);