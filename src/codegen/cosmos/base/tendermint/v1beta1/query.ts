import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { BlockAmino as Block1Amino } from "../../../../tendermint/types/block";
import { BlockSDKType as Block1SDKType } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { BlockAmino as Block2Amino } from "./types";
import { BlockSDKType as Block2SDKType } from "./types";
import { DefaultNodeInfo, DefaultNodeInfoAmino, DefaultNodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
  height: bigint;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface GetValidatorSetByHeightRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest";
  value: Uint8Array;
}
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequestAmino {
  height?: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface GetValidatorSetByHeightRequestAminoMsg {
  type: "cosmos-sdk/GetValidatorSetByHeightRequest";
  value: GetValidatorSetByHeightRequestAmino;
}
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequestSDKType {
  height: bigint;
  pagination?: PageRequestSDKType;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface GetValidatorSetByHeightResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse";
  value: Uint8Array;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponseAmino {
  block_height?: string;
  validators?: ValidatorAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface GetValidatorSetByHeightResponseAminoMsg {
  type: "cosmos-sdk/GetValidatorSetByHeightResponse";
  value: GetValidatorSetByHeightResponseAmino;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponseSDKType {
  block_height: bigint;
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface GetLatestValidatorSetRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest";
  value: Uint8Array;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequestAmino {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface GetLatestValidatorSetRequestAminoMsg {
  type: "cosmos-sdk/GetLatestValidatorSetRequest";
  value: GetLatestValidatorSetRequestAmino;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface GetLatestValidatorSetResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse";
  value: Uint8Array;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponseAmino {
  block_height?: string;
  validators?: ValidatorAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface GetLatestValidatorSetResponseAminoMsg {
  type: "cosmos-sdk/GetLatestValidatorSetResponse";
  value: GetLatestValidatorSetResponseAmino;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponseSDKType {
  block_height: bigint;
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** Validator is the type for the validator-set. */
export interface Validator {
  address: string;
  pubKey?: Any;
  votingPower: bigint;
  proposerPriority: bigint;
}
export interface ValidatorProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator";
  value: Uint8Array;
}
/** Validator is the type for the validator-set. */
export interface ValidatorAmino {
  address?: string;
  pub_key?: AnyAmino;
  voting_power?: string;
  proposer_priority?: string;
}
export interface ValidatorAminoMsg {
  type: "cosmos-sdk/Validator";
  value: ValidatorAmino;
}
/** Validator is the type for the validator-set. */
export interface ValidatorSDKType {
  address: string;
  pub_key?: AnySDKType;
  voting_power: bigint;
  proposer_priority: bigint;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
  height: bigint;
}
export interface GetBlockByHeightRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest";
  value: Uint8Array;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequestAmino {
  height?: string;
}
export interface GetBlockByHeightRequestAminoMsg {
  type: "cosmos-sdk/GetBlockByHeightRequest";
  value: GetBlockByHeightRequestAmino;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequestSDKType {
  height: bigint;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
  blockId?: BlockID;
  /** Deprecated: please use `sdk_block` instead */
  block?: Block1;
  /** Since: cosmos-sdk 0.47 */
  sdkBlock?: Block2;
}
export interface GetBlockByHeightResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse";
  value: Uint8Array;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponseAmino {
  block_id?: BlockIDAmino;
  /** Deprecated: please use `sdk_block` instead */
  block?: Block1Amino;
  /** Since: cosmos-sdk 0.47 */
  sdk_block?: Block2Amino;
}
export interface GetBlockByHeightResponseAminoMsg {
  type: "cosmos-sdk/GetBlockByHeightResponse";
  value: GetBlockByHeightResponseAmino;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponseSDKType {
  block_id?: BlockIDSDKType;
  block?: Block1SDKType;
  sdk_block?: Block2SDKType;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {}
export interface GetLatestBlockRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest";
  value: Uint8Array;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestAmino {}
export interface GetLatestBlockRequestAminoMsg {
  type: "cosmos-sdk/GetLatestBlockRequest";
  value: GetLatestBlockRequestAmino;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestSDKType {}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
  blockId?: BlockID;
  /** Deprecated: please use `sdk_block` instead */
  block?: Block1;
  /** Since: cosmos-sdk 0.47 */
  sdkBlock?: Block2;
}
export interface GetLatestBlockResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse";
  value: Uint8Array;
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponseAmino {
  block_id?: BlockIDAmino;
  /** Deprecated: please use `sdk_block` instead */
  block?: Block1Amino;
  /** Since: cosmos-sdk 0.47 */
  sdk_block?: Block2Amino;
}
export interface GetLatestBlockResponseAminoMsg {
  type: "cosmos-sdk/GetLatestBlockResponse";
  value: GetLatestBlockResponseAmino;
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponseSDKType {
  block_id?: BlockIDSDKType;
  block?: Block1SDKType;
  sdk_block?: Block2SDKType;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {}
export interface GetSyncingRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest";
  value: Uint8Array;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestAmino {}
export interface GetSyncingRequestAminoMsg {
  type: "cosmos-sdk/GetSyncingRequest";
  value: GetSyncingRequestAmino;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestSDKType {}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
  syncing: boolean;
}
export interface GetSyncingResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse";
  value: Uint8Array;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseAmino {
  syncing?: boolean;
}
export interface GetSyncingResponseAminoMsg {
  type: "cosmos-sdk/GetSyncingResponse";
  value: GetSyncingResponseAmino;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseSDKType {
  syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {}
export interface GetNodeInfoRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest";
  value: Uint8Array;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestAmino {}
export interface GetNodeInfoRequestAminoMsg {
  type: "cosmos-sdk/GetNodeInfoRequest";
  value: GetNodeInfoRequestAmino;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestSDKType {}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
  defaultNodeInfo?: DefaultNodeInfo;
  applicationVersion?: VersionInfo;
}
export interface GetNodeInfoResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse";
  value: Uint8Array;
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponseAmino {
  default_node_info?: DefaultNodeInfoAmino;
  application_version?: VersionInfoAmino;
}
export interface GetNodeInfoResponseAminoMsg {
  type: "cosmos-sdk/GetNodeInfoResponse";
  value: GetNodeInfoResponseAmino;
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponseSDKType {
  default_node_info?: DefaultNodeInfoSDKType;
  application_version?: VersionInfoSDKType;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
  name: string;
  appName: string;
  version: string;
  gitCommit: string;
  buildTags: string;
  goVersion: string;
  buildDeps: Module[];
  /** Since: cosmos-sdk 0.43 */
  cosmosSdkVersion: string;
}
export interface VersionInfoProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo";
  value: Uint8Array;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoAmino {
  name?: string;
  app_name?: string;
  version?: string;
  git_commit?: string;
  build_tags?: string;
  go_version?: string;
  build_deps?: ModuleAmino[];
  /** Since: cosmos-sdk 0.43 */
  cosmos_sdk_version?: string;
}
export interface VersionInfoAminoMsg {
  type: "cosmos-sdk/VersionInfo";
  value: VersionInfoAmino;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoSDKType {
  name: string;
  app_name: string;
  version: string;
  git_commit: string;
  build_tags: string;
  go_version: string;
  build_deps: ModuleSDKType[];
  cosmos_sdk_version: string;
}
/** Module is the type for VersionInfo */
export interface Module {
  /** module path */
  path: string;
  /** module version */
  version: string;
  /** checksum */
  sum: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module";
  value: Uint8Array;
}
/** Module is the type for VersionInfo */
export interface ModuleAmino {
  /** module path */
  path?: string;
  /** module version */
  version?: string;
  /** checksum */
  sum?: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the type for VersionInfo */
export interface ModuleSDKType {
  path: string;
  version: string;
  sum: string;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequest {
  data: Uint8Array;
  path: string;
  height: bigint;
  prove: boolean;
}
export interface ABCIQueryRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest";
  value: Uint8Array;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequestAmino {
  data?: string;
  path?: string;
  height?: string;
  prove?: boolean;
}
export interface ABCIQueryRequestAminoMsg {
  type: "cosmos-sdk/ABCIQueryRequest";
  value: ABCIQueryRequestAmino;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequestSDKType {
  data: Uint8Array;
  path: string;
  height: bigint;
  prove: boolean;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 * 
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponse {
  code: number;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  index: bigint;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: bigint;
  codespace: string;
}
export interface ABCIQueryResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse";
  value: Uint8Array;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 * 
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponseAmino {
  code?: number;
  /** nondeterministic */
  log?: string;
  /** nondeterministic */
  info?: string;
  index?: string;
  key?: string;
  value?: string;
  proof_ops?: ProofOpsAmino;
  height?: string;
  codespace?: string;
}
export interface ABCIQueryResponseAminoMsg {
  type: "cosmos-sdk/ABCIQueryResponse";
  value: ABCIQueryResponseAmino;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 * 
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponseSDKType {
  code: number;
  log: string;
  info: string;
  index: bigint;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops?: ProofOpsSDKType;
  height: bigint;
  codespace: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 * 
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */
export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
export interface ProofOpProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp";
  value: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 * 
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */
export interface ProofOpAmino {
  type?: string;
  key?: string;
  data?: string;
}
export interface ProofOpAminoMsg {
  type: "cosmos-sdk/ProofOp";
  value: ProofOpAmino;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 * 
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */
export interface ProofOpSDKType {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 * 
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */
export interface ProofOps {
  ops: ProofOp[];
}
export interface ProofOpsProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps";
  value: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 * 
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */
export interface ProofOpsAmino {
  ops: ProofOpAmino[];
}
export interface ProofOpsAminoMsg {
  type: "cosmos-sdk/ProofOps";
  value: ProofOpsAmino;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 * 
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */
export interface ProofOpsSDKType {
  ops: ProofOpSDKType[];
}
function createBaseGetValidatorSetByHeightRequest(): GetValidatorSetByHeightRequest {
  return {
    height: BigInt(0),
    pagination: undefined
  };
}
export const GetValidatorSetByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
  aminoType: "cosmos-sdk/GetValidatorSetByHeightRequest",
  is(o: any): o is GetValidatorSetByHeightRequest {
    return o && (o.$typeUrl === GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is GetValidatorSetByHeightRequestSDKType {
    return o && (o.$typeUrl === GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is GetValidatorSetByHeightRequestAmino {
    return o && (o.$typeUrl === GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
  },
  encode(message: GetValidatorSetByHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetValidatorSetByHeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightRequest {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GetValidatorSetByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetValidatorSetByHeightRequestAmino): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetValidatorSetByHeightRequest, useInterfaces: boolean = true): GetValidatorSetByHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetValidatorSetByHeightRequestAminoMsg): GetValidatorSetByHeightRequest {
    return GetValidatorSetByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetValidatorSetByHeightRequest, useInterfaces: boolean = true): GetValidatorSetByHeightRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetValidatorSetByHeightRequestProtoMsg, useInterfaces: boolean = true): GetValidatorSetByHeightRequest {
    return GetValidatorSetByHeightRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetValidatorSetByHeightRequest): Uint8Array {
    return GetValidatorSetByHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetValidatorSetByHeightRequest.typeUrl, GetValidatorSetByHeightRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetValidatorSetByHeightRequest.aminoType, GetValidatorSetByHeightRequest.typeUrl);
function createBaseGetValidatorSetByHeightResponse(): GetValidatorSetByHeightResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: undefined
  };
}
export const GetValidatorSetByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
  aminoType: "cosmos-sdk/GetValidatorSetByHeightResponse",
  is(o: any): o is GetValidatorSetByHeightResponse {
    return o && (o.$typeUrl === GetValidatorSetByHeightResponse.typeUrl || typeof o.blockHeight === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isSDK(o: any): o is GetValidatorSetByHeightResponseSDKType {
    return o && (o.$typeUrl === GetValidatorSetByHeightResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is GetValidatorSetByHeightResponseAmino {
    return o && (o.$typeUrl === GetValidatorSetByHeightResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: GetValidatorSetByHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetValidatorSetByHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightResponse {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GetValidatorSetByHeightResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetValidatorSetByHeightResponseAmino): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetValidatorSetByHeightResponse, useInterfaces: boolean = true): GetValidatorSetByHeightResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = null;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetValidatorSetByHeightResponseAminoMsg): GetValidatorSetByHeightResponse {
    return GetValidatorSetByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetValidatorSetByHeightResponse, useInterfaces: boolean = true): GetValidatorSetByHeightResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetValidatorSetByHeightResponseProtoMsg, useInterfaces: boolean = true): GetValidatorSetByHeightResponse {
    return GetValidatorSetByHeightResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetValidatorSetByHeightResponse): Uint8Array {
    return GetValidatorSetByHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetValidatorSetByHeightResponse.typeUrl, GetValidatorSetByHeightResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetValidatorSetByHeightResponse.aminoType, GetValidatorSetByHeightResponse.typeUrl);
function createBaseGetLatestValidatorSetRequest(): GetLatestValidatorSetRequest {
  return {
    pagination: undefined
  };
}
export const GetLatestValidatorSetRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
  aminoType: "cosmos-sdk/GetLatestValidatorSetRequest",
  is(o: any): o is GetLatestValidatorSetRequest {
    return o && o.$typeUrl === GetLatestValidatorSetRequest.typeUrl;
  },
  isSDK(o: any): o is GetLatestValidatorSetRequestSDKType {
    return o && o.$typeUrl === GetLatestValidatorSetRequest.typeUrl;
  },
  isAmino(o: any): o is GetLatestValidatorSetRequestAmino {
    return o && o.$typeUrl === GetLatestValidatorSetRequest.typeUrl;
  },
  encode(message: GetLatestValidatorSetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetLatestValidatorSetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
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
  fromJSON(object: any): GetLatestValidatorSetRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GetLatestValidatorSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetLatestValidatorSetRequestAmino): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetLatestValidatorSetRequest, useInterfaces: boolean = true): GetLatestValidatorSetRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestValidatorSetRequestAminoMsg): GetLatestValidatorSetRequest {
    return GetLatestValidatorSetRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestValidatorSetRequest, useInterfaces: boolean = true): GetLatestValidatorSetRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetLatestValidatorSetRequestProtoMsg, useInterfaces: boolean = true): GetLatestValidatorSetRequest {
    return GetLatestValidatorSetRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetLatestValidatorSetRequest): Uint8Array {
    return GetLatestValidatorSetRequest.encode(message).finish();
  },
  toProtoMsg(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetLatestValidatorSetRequest.typeUrl, GetLatestValidatorSetRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetLatestValidatorSetRequest.aminoType, GetLatestValidatorSetRequest.typeUrl);
function createBaseGetLatestValidatorSetResponse(): GetLatestValidatorSetResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: undefined
  };
}
export const GetLatestValidatorSetResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
  aminoType: "cosmos-sdk/GetLatestValidatorSetResponse",
  is(o: any): o is GetLatestValidatorSetResponse {
    return o && (o.$typeUrl === GetLatestValidatorSetResponse.typeUrl || typeof o.blockHeight === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isSDK(o: any): o is GetLatestValidatorSetResponseSDKType {
    return o && (o.$typeUrl === GetLatestValidatorSetResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is GetLatestValidatorSetResponseAmino {
    return o && (o.$typeUrl === GetLatestValidatorSetResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: GetLatestValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetLatestValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestValidatorSetResponse {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GetLatestValidatorSetResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetLatestValidatorSetResponseAmino): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetLatestValidatorSetResponse, useInterfaces: boolean = true): GetLatestValidatorSetResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = null;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestValidatorSetResponseAminoMsg): GetLatestValidatorSetResponse {
    return GetLatestValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestValidatorSetResponse, useInterfaces: boolean = true): GetLatestValidatorSetResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetLatestValidatorSetResponseProtoMsg, useInterfaces: boolean = true): GetLatestValidatorSetResponse {
    return GetLatestValidatorSetResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetLatestValidatorSetResponse): Uint8Array {
    return GetLatestValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetLatestValidatorSetResponse.typeUrl, GetLatestValidatorSetResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetLatestValidatorSetResponse.aminoType, GetLatestValidatorSetResponse.typeUrl);
function createBaseValidator(): Validator {
  return {
    address: "",
    pubKey: undefined,
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
  aminoType: "cosmos-sdk/Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.votingPower === "bigint" && typeof o.proposerPriority === "bigint");
  },
  isSDK(o: any): o is ValidatorSDKType {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSONAsAny(object.pubKey) : undefined,
      votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt(0),
      proposerPriority: isSet(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt(0)
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartialAsAny(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = Any.fromAmino(object.pub_key);
    }
    if (object.voting_power !== undefined && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
      message.proposerPriority = BigInt(object.proposer_priority);
    }
    return message;
  },
  toAmino(message: Validator, useInterfaces: boolean = true): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey, useInterfaces) : undefined;
    obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
    obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message: Validator, useInterfaces: boolean = true): ValidatorAminoMsg {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorProtoMsg, useInterfaces: boolean = true): Validator {
    return Validator.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
GlobalDecoderRegistry.registerAminoProtoMapping(Validator.aminoType, Validator.typeUrl);
function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
  return {
    height: BigInt(0)
  };
}
export const GetBlockByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
  aminoType: "cosmos-sdk/GetBlockByHeightRequest",
  is(o: any): o is GetBlockByHeightRequest {
    return o && (o.$typeUrl === GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is GetBlockByHeightRequestSDKType {
    return o && (o.$typeUrl === GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is GetBlockByHeightRequestAmino {
    return o && (o.$typeUrl === GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
  },
  encode(message: GetBlockByHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetBlockByHeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightRequest {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toJSON(message: GetBlockByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GetBlockByHeightRequest>): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GetBlockByHeightRequestAmino): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: GetBlockByHeightRequest, useInterfaces: boolean = true): GetBlockByHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockByHeightRequestAminoMsg): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockByHeightRequest, useInterfaces: boolean = true): GetBlockByHeightRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetBlockByHeightRequestProtoMsg, useInterfaces: boolean = true): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetBlockByHeightRequest): Uint8Array {
    return GetBlockByHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBlockByHeightRequest): GetBlockByHeightRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetBlockByHeightRequest.typeUrl, GetBlockByHeightRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetBlockByHeightRequest.aminoType, GetBlockByHeightRequest.typeUrl);
function createBaseGetBlockByHeightResponse(): GetBlockByHeightResponse {
  return {
    blockId: undefined,
    block: undefined,
    sdkBlock: undefined
  };
}
export const GetBlockByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
  aminoType: "cosmos-sdk/GetBlockByHeightResponse",
  is(o: any): o is GetBlockByHeightResponse {
    return o && o.$typeUrl === GetBlockByHeightResponse.typeUrl;
  },
  isSDK(o: any): o is GetBlockByHeightResponseSDKType {
    return o && o.$typeUrl === GetBlockByHeightResponse.typeUrl;
  },
  isAmino(o: any): o is GetBlockByHeightResponseAmino {
    return o && o.$typeUrl === GetBlockByHeightResponse.typeUrl;
  },
  encode(message: GetBlockByHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetBlockByHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.block = Block1.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.sdkBlock = Block2.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightResponse {
    return {
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      block: isSet(object.block) ? Block1.fromJSON(object.block) : undefined,
      sdkBlock: isSet(object.sdkBlock) ? Block2.fromJSON(object.sdkBlock) : undefined
    };
  },
  toJSON(message: GetBlockByHeightResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block1.toJSON(message.block) : undefined);
    message.sdkBlock !== undefined && (obj.sdkBlock = message.sdkBlock ? Block2.toJSON(message.sdkBlock) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetBlockByHeightResponse>): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block1.fromPartial(object.block) : undefined;
    message.sdkBlock = object.sdkBlock !== undefined && object.sdkBlock !== null ? Block2.fromPartial(object.sdkBlock) : undefined;
    return message;
  },
  fromAmino(object: GetBlockByHeightResponseAmino): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block1.fromAmino(object.block);
    }
    if (object.sdk_block !== undefined && object.sdk_block !== null) {
      message.sdkBlock = Block2.fromAmino(object.sdk_block);
    }
    return message;
  },
  toAmino(message: GetBlockByHeightResponse, useInterfaces: boolean = true): GetBlockByHeightResponseAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId, useInterfaces) : undefined;
    obj.block = message.block ? Block1.toAmino(message.block, useInterfaces) : undefined;
    obj.sdk_block = message.sdkBlock ? Block2.toAmino(message.sdkBlock, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockByHeightResponseAminoMsg): GetBlockByHeightResponse {
    return GetBlockByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockByHeightResponse, useInterfaces: boolean = true): GetBlockByHeightResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetBlockByHeightResponseProtoMsg, useInterfaces: boolean = true): GetBlockByHeightResponse {
    return GetBlockByHeightResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetBlockByHeightResponse): Uint8Array {
    return GetBlockByHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: GetBlockByHeightResponse): GetBlockByHeightResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetBlockByHeightResponse.typeUrl, GetBlockByHeightResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetBlockByHeightResponse.aminoType, GetBlockByHeightResponse.typeUrl);
function createBaseGetLatestBlockRequest(): GetLatestBlockRequest {
  return {};
}
export const GetLatestBlockRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
  aminoType: "cosmos-sdk/GetLatestBlockRequest",
  is(o: any): o is GetLatestBlockRequest {
    return o && o.$typeUrl === GetLatestBlockRequest.typeUrl;
  },
  isSDK(o: any): o is GetLatestBlockRequestSDKType {
    return o && o.$typeUrl === GetLatestBlockRequest.typeUrl;
  },
  isAmino(o: any): o is GetLatestBlockRequestAmino {
    return o && o.$typeUrl === GetLatestBlockRequest.typeUrl;
  },
  encode(_: GetLatestBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetLatestBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
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
  fromJSON(_: any): GetLatestBlockRequest {
    return {};
  },
  toJSON(_: GetLatestBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<GetLatestBlockRequest>): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  fromAmino(_: GetLatestBlockRequestAmino): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  toAmino(_: GetLatestBlockRequest, useInterfaces: boolean = true): GetLatestBlockRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetLatestBlockRequestAminoMsg): GetLatestBlockRequest {
    return GetLatestBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestBlockRequest, useInterfaces: boolean = true): GetLatestBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestBlockRequest",
      value: GetLatestBlockRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetLatestBlockRequestProtoMsg, useInterfaces: boolean = true): GetLatestBlockRequest {
    return GetLatestBlockRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetLatestBlockRequest): Uint8Array {
    return GetLatestBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: GetLatestBlockRequest): GetLatestBlockRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
      value: GetLatestBlockRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetLatestBlockRequest.typeUrl, GetLatestBlockRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetLatestBlockRequest.aminoType, GetLatestBlockRequest.typeUrl);
function createBaseGetLatestBlockResponse(): GetLatestBlockResponse {
  return {
    blockId: undefined,
    block: undefined,
    sdkBlock: undefined
  };
}
export const GetLatestBlockResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
  aminoType: "cosmos-sdk/GetLatestBlockResponse",
  is(o: any): o is GetLatestBlockResponse {
    return o && o.$typeUrl === GetLatestBlockResponse.typeUrl;
  },
  isSDK(o: any): o is GetLatestBlockResponseSDKType {
    return o && o.$typeUrl === GetLatestBlockResponse.typeUrl;
  },
  isAmino(o: any): o is GetLatestBlockResponseAmino {
    return o && o.$typeUrl === GetLatestBlockResponse.typeUrl;
  },
  encode(message: GetLatestBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetLatestBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.block = Block1.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.sdkBlock = Block2.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestBlockResponse {
    return {
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      block: isSet(object.block) ? Block1.fromJSON(object.block) : undefined,
      sdkBlock: isSet(object.sdkBlock) ? Block2.fromJSON(object.sdkBlock) : undefined
    };
  },
  toJSON(message: GetLatestBlockResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block1.toJSON(message.block) : undefined);
    message.sdkBlock !== undefined && (obj.sdkBlock = message.sdkBlock ? Block2.toJSON(message.sdkBlock) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetLatestBlockResponse>): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block1.fromPartial(object.block) : undefined;
    message.sdkBlock = object.sdkBlock !== undefined && object.sdkBlock !== null ? Block2.fromPartial(object.sdkBlock) : undefined;
    return message;
  },
  fromAmino(object: GetLatestBlockResponseAmino): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block1.fromAmino(object.block);
    }
    if (object.sdk_block !== undefined && object.sdk_block !== null) {
      message.sdkBlock = Block2.fromAmino(object.sdk_block);
    }
    return message;
  },
  toAmino(message: GetLatestBlockResponse, useInterfaces: boolean = true): GetLatestBlockResponseAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId, useInterfaces) : undefined;
    obj.block = message.block ? Block1.toAmino(message.block, useInterfaces) : undefined;
    obj.sdk_block = message.sdkBlock ? Block2.toAmino(message.sdkBlock, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestBlockResponseAminoMsg): GetLatestBlockResponse {
    return GetLatestBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestBlockResponse, useInterfaces: boolean = true): GetLatestBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestBlockResponse",
      value: GetLatestBlockResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetLatestBlockResponseProtoMsg, useInterfaces: boolean = true): GetLatestBlockResponse {
    return GetLatestBlockResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetLatestBlockResponse): Uint8Array {
    return GetLatestBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: GetLatestBlockResponse): GetLatestBlockResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
      value: GetLatestBlockResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetLatestBlockResponse.typeUrl, GetLatestBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetLatestBlockResponse.aminoType, GetLatestBlockResponse.typeUrl);
function createBaseGetSyncingRequest(): GetSyncingRequest {
  return {};
}
export const GetSyncingRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
  aminoType: "cosmos-sdk/GetSyncingRequest",
  is(o: any): o is GetSyncingRequest {
    return o && o.$typeUrl === GetSyncingRequest.typeUrl;
  },
  isSDK(o: any): o is GetSyncingRequestSDKType {
    return o && o.$typeUrl === GetSyncingRequest.typeUrl;
  },
  isAmino(o: any): o is GetSyncingRequestAmino {
    return o && o.$typeUrl === GetSyncingRequest.typeUrl;
  },
  encode(_: GetSyncingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetSyncingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
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
  fromJSON(_: any): GetSyncingRequest {
    return {};
  },
  toJSON(_: GetSyncingRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<GetSyncingRequest>): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  fromAmino(_: GetSyncingRequestAmino): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  toAmino(_: GetSyncingRequest, useInterfaces: boolean = true): GetSyncingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetSyncingRequestAminoMsg): GetSyncingRequest {
    return GetSyncingRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetSyncingRequest, useInterfaces: boolean = true): GetSyncingRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetSyncingRequest",
      value: GetSyncingRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetSyncingRequestProtoMsg, useInterfaces: boolean = true): GetSyncingRequest {
    return GetSyncingRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetSyncingRequest): Uint8Array {
    return GetSyncingRequest.encode(message).finish();
  },
  toProtoMsg(message: GetSyncingRequest): GetSyncingRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
      value: GetSyncingRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetSyncingRequest.typeUrl, GetSyncingRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetSyncingRequest.aminoType, GetSyncingRequest.typeUrl);
function createBaseGetSyncingResponse(): GetSyncingResponse {
  return {
    syncing: false
  };
}
export const GetSyncingResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
  aminoType: "cosmos-sdk/GetSyncingResponse",
  is(o: any): o is GetSyncingResponse {
    return o && (o.$typeUrl === GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
  },
  isSDK(o: any): o is GetSyncingResponseSDKType {
    return o && (o.$typeUrl === GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
  },
  isAmino(o: any): o is GetSyncingResponseAmino {
    return o && (o.$typeUrl === GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
  },
  encode(message: GetSyncingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetSyncingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetSyncingResponse {
    return {
      syncing: isSet(object.syncing) ? Boolean(object.syncing) : false
    };
  },
  toJSON(message: GetSyncingResponse): unknown {
    const obj: any = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },
  fromPartial(object: Partial<GetSyncingResponse>): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  },
  fromAmino(object: GetSyncingResponseAmino): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    if (object.syncing !== undefined && object.syncing !== null) {
      message.syncing = object.syncing;
    }
    return message;
  },
  toAmino(message: GetSyncingResponse, useInterfaces: boolean = true): GetSyncingResponseAmino {
    const obj: any = {};
    obj.syncing = message.syncing === false ? undefined : message.syncing;
    return obj;
  },
  fromAminoMsg(object: GetSyncingResponseAminoMsg): GetSyncingResponse {
    return GetSyncingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetSyncingResponse, useInterfaces: boolean = true): GetSyncingResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetSyncingResponse",
      value: GetSyncingResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetSyncingResponseProtoMsg, useInterfaces: boolean = true): GetSyncingResponse {
    return GetSyncingResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetSyncingResponse): Uint8Array {
    return GetSyncingResponse.encode(message).finish();
  },
  toProtoMsg(message: GetSyncingResponse): GetSyncingResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
      value: GetSyncingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetSyncingResponse.typeUrl, GetSyncingResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetSyncingResponse.aminoType, GetSyncingResponse.typeUrl);
function createBaseGetNodeInfoRequest(): GetNodeInfoRequest {
  return {};
}
export const GetNodeInfoRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
  aminoType: "cosmos-sdk/GetNodeInfoRequest",
  is(o: any): o is GetNodeInfoRequest {
    return o && o.$typeUrl === GetNodeInfoRequest.typeUrl;
  },
  isSDK(o: any): o is GetNodeInfoRequestSDKType {
    return o && o.$typeUrl === GetNodeInfoRequest.typeUrl;
  },
  isAmino(o: any): o is GetNodeInfoRequestAmino {
    return o && o.$typeUrl === GetNodeInfoRequest.typeUrl;
  },
  encode(_: GetNodeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetNodeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
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
  fromJSON(_: any): GetNodeInfoRequest {
    return {};
  },
  toJSON(_: GetNodeInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<GetNodeInfoRequest>): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  fromAmino(_: GetNodeInfoRequestAmino): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  toAmino(_: GetNodeInfoRequest, useInterfaces: boolean = true): GetNodeInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetNodeInfoRequestAminoMsg): GetNodeInfoRequest {
    return GetNodeInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetNodeInfoRequest, useInterfaces: boolean = true): GetNodeInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetNodeInfoRequest",
      value: GetNodeInfoRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetNodeInfoRequestProtoMsg, useInterfaces: boolean = true): GetNodeInfoRequest {
    return GetNodeInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetNodeInfoRequest): Uint8Array {
    return GetNodeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: GetNodeInfoRequest): GetNodeInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
      value: GetNodeInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetNodeInfoRequest.typeUrl, GetNodeInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetNodeInfoRequest.aminoType, GetNodeInfoRequest.typeUrl);
function createBaseGetNodeInfoResponse(): GetNodeInfoResponse {
  return {
    defaultNodeInfo: undefined,
    applicationVersion: undefined
  };
}
export const GetNodeInfoResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
  aminoType: "cosmos-sdk/GetNodeInfoResponse",
  is(o: any): o is GetNodeInfoResponse {
    return o && o.$typeUrl === GetNodeInfoResponse.typeUrl;
  },
  isSDK(o: any): o is GetNodeInfoResponseSDKType {
    return o && o.$typeUrl === GetNodeInfoResponse.typeUrl;
  },
  isAmino(o: any): o is GetNodeInfoResponseAmino {
    return o && o.$typeUrl === GetNodeInfoResponse.typeUrl;
  },
  encode(message: GetNodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultNodeInfo !== undefined) {
      DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetNodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = DefaultNodeInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetNodeInfoResponse {
    return {
      defaultNodeInfo: isSet(object.defaultNodeInfo) ? DefaultNodeInfo.fromJSON(object.defaultNodeInfo) : undefined,
      applicationVersion: isSet(object.applicationVersion) ? VersionInfo.fromJSON(object.applicationVersion) : undefined
    };
  },
  toJSON(message: GetNodeInfoResponse): unknown {
    const obj: any = {};
    message.defaultNodeInfo !== undefined && (obj.defaultNodeInfo = message.defaultNodeInfo ? DefaultNodeInfo.toJSON(message.defaultNodeInfo) : undefined);
    message.applicationVersion !== undefined && (obj.applicationVersion = message.applicationVersion ? VersionInfo.toJSON(message.applicationVersion) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetNodeInfoResponse>): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    message.defaultNodeInfo = object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null ? DefaultNodeInfo.fromPartial(object.defaultNodeInfo) : undefined;
    message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
    return message;
  },
  fromAmino(object: GetNodeInfoResponseAmino): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    if (object.default_node_info !== undefined && object.default_node_info !== null) {
      message.defaultNodeInfo = DefaultNodeInfo.fromAmino(object.default_node_info);
    }
    if (object.application_version !== undefined && object.application_version !== null) {
      message.applicationVersion = VersionInfo.fromAmino(object.application_version);
    }
    return message;
  },
  toAmino(message: GetNodeInfoResponse, useInterfaces: boolean = true): GetNodeInfoResponseAmino {
    const obj: any = {};
    obj.default_node_info = message.defaultNodeInfo ? DefaultNodeInfo.toAmino(message.defaultNodeInfo, useInterfaces) : undefined;
    obj.application_version = message.applicationVersion ? VersionInfo.toAmino(message.applicationVersion, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetNodeInfoResponseAminoMsg): GetNodeInfoResponse {
    return GetNodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetNodeInfoResponse, useInterfaces: boolean = true): GetNodeInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetNodeInfoResponse",
      value: GetNodeInfoResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GetNodeInfoResponseProtoMsg, useInterfaces: boolean = true): GetNodeInfoResponse {
    return GetNodeInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetNodeInfoResponse): Uint8Array {
    return GetNodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: GetNodeInfoResponse): GetNodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
      value: GetNodeInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetNodeInfoResponse.typeUrl, GetNodeInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetNodeInfoResponse.aminoType, GetNodeInfoResponse.typeUrl);
function createBaseVersionInfo(): VersionInfo {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: ""
  };
}
export const VersionInfo = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
  aminoType: "cosmos-sdk/VersionInfo",
  is(o: any): o is VersionInfo {
    return o && (o.$typeUrl === VersionInfo.typeUrl || typeof o.name === "string" && typeof o.appName === "string" && typeof o.version === "string" && typeof o.gitCommit === "string" && typeof o.buildTags === "string" && typeof o.goVersion === "string" && Array.isArray(o.buildDeps) && (!o.buildDeps.length || Module.is(o.buildDeps[0])) && typeof o.cosmosSdkVersion === "string");
  },
  isSDK(o: any): o is VersionInfoSDKType {
    return o && (o.$typeUrl === VersionInfo.typeUrl || typeof o.name === "string" && typeof o.app_name === "string" && typeof o.version === "string" && typeof o.git_commit === "string" && typeof o.build_tags === "string" && typeof o.go_version === "string" && Array.isArray(o.build_deps) && (!o.build_deps.length || Module.isSDK(o.build_deps[0])) && typeof o.cosmos_sdk_version === "string");
  },
  isAmino(o: any): o is VersionInfoAmino {
    return o && (o.$typeUrl === VersionInfo.typeUrl || typeof o.name === "string" && typeof o.app_name === "string" && typeof o.version === "string" && typeof o.git_commit === "string" && typeof o.build_tags === "string" && typeof o.go_version === "string" && Array.isArray(o.build_deps) && (!o.build_deps.length || Module.isAmino(o.build_deps[0])) && typeof o.cosmos_sdk_version === "string");
  },
  encode(message: VersionInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VersionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      appName: isSet(object.appName) ? String(object.appName) : "",
      version: isSet(object.version) ? String(object.version) : "",
      gitCommit: isSet(object.gitCommit) ? String(object.gitCommit) : "",
      buildTags: isSet(object.buildTags) ? String(object.buildTags) : "",
      goVersion: isSet(object.goVersion) ? String(object.goVersion) : "",
      buildDeps: Array.isArray(object?.buildDeps) ? object.buildDeps.map((e: any) => Module.fromJSON(e)) : [],
      cosmosSdkVersion: isSet(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : ""
    };
  },
  toJSON(message: VersionInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.appName !== undefined && (obj.appName = message.appName);
    message.version !== undefined && (obj.version = message.version);
    message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
    message.buildTags !== undefined && (obj.buildTags = message.buildTags);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);
    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map(e => e ? Module.toJSON(e) : undefined);
    } else {
      obj.buildDeps = [];
    }
    message.cosmosSdkVersion !== undefined && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },
  fromPartial(object: Partial<VersionInfo>): VersionInfo {
    const message = createBaseVersionInfo();
    message.name = object.name ?? "";
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.gitCommit = object.gitCommit ?? "";
    message.buildTags = object.buildTags ?? "";
    message.goVersion = object.goVersion ?? "";
    message.buildDeps = object.buildDeps?.map(e => Module.fromPartial(e)) || [];
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
    return message;
  },
  fromAmino(object: VersionInfoAmino): VersionInfo {
    const message = createBaseVersionInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.app_name !== undefined && object.app_name !== null) {
      message.appName = object.app_name;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.git_commit !== undefined && object.git_commit !== null) {
      message.gitCommit = object.git_commit;
    }
    if (object.build_tags !== undefined && object.build_tags !== null) {
      message.buildTags = object.build_tags;
    }
    if (object.go_version !== undefined && object.go_version !== null) {
      message.goVersion = object.go_version;
    }
    message.buildDeps = object.build_deps?.map(e => Module.fromAmino(e)) || [];
    if (object.cosmos_sdk_version !== undefined && object.cosmos_sdk_version !== null) {
      message.cosmosSdkVersion = object.cosmos_sdk_version;
    }
    return message;
  },
  toAmino(message: VersionInfo, useInterfaces: boolean = true): VersionInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.app_name = message.appName === "" ? undefined : message.appName;
    obj.version = message.version === "" ? undefined : message.version;
    obj.git_commit = message.gitCommit === "" ? undefined : message.gitCommit;
    obj.build_tags = message.buildTags === "" ? undefined : message.buildTags;
    obj.go_version = message.goVersion === "" ? undefined : message.goVersion;
    if (message.buildDeps) {
      obj.build_deps = message.buildDeps.map(e => e ? Module.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.build_deps = null;
    }
    obj.cosmos_sdk_version = message.cosmosSdkVersion === "" ? undefined : message.cosmosSdkVersion;
    return obj;
  },
  fromAminoMsg(object: VersionInfoAminoMsg): VersionInfo {
    return VersionInfo.fromAmino(object.value);
  },
  toAminoMsg(message: VersionInfo, useInterfaces: boolean = true): VersionInfoAminoMsg {
    return {
      type: "cosmos-sdk/VersionInfo",
      value: VersionInfo.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: VersionInfoProtoMsg, useInterfaces: boolean = true): VersionInfo {
    return VersionInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VersionInfo): Uint8Array {
    return VersionInfo.encode(message).finish();
  },
  toProtoMsg(message: VersionInfo): VersionInfoProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
      value: VersionInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VersionInfo.typeUrl, VersionInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(VersionInfo.aminoType, VersionInfo.typeUrl);
function createBaseModule(): Module {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
  },
  isSDK(o: any): o is ModuleSDKType {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      version: isSet(object.version) ? String(object.version) : "",
      sum: isSet(object.sum) ? String(object.sum) : ""
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.sum !== undefined && object.sum !== null) {
      message.sum = object.sum;
    }
    return message;
  },
  toAmino(message: Module, useInterfaces: boolean = true): ModuleAmino {
    const obj: any = {};
    obj.path = message.path === "" ? undefined : message.path;
    obj.version = message.version === "" ? undefined : message.version;
    obj.sum = message.sum === "" ? undefined : message.sum;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module, useInterfaces: boolean = true): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg, useInterfaces: boolean = true): Module {
    return Module.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
      value: Module.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);
function createBaseABCIQueryRequest(): ABCIQueryRequest {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false
  };
}
export const ABCIQueryRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
  aminoType: "cosmos-sdk/ABCIQueryRequest",
  is(o: any): o is ABCIQueryRequest {
    return o && (o.$typeUrl === ABCIQueryRequest.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  isSDK(o: any): o is ABCIQueryRequestSDKType {
    return o && (o.$typeUrl === ABCIQueryRequest.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  isAmino(o: any): o is ABCIQueryRequestAmino {
    return o && (o.$typeUrl === ABCIQueryRequest.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  encode(message: ABCIQueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ABCIQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIQueryRequest {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      path: isSet(object.path) ? String(object.path) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      prove: isSet(object.prove) ? Boolean(object.prove) : false
    };
  },
  toJSON(message: ABCIQueryRequest): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },
  fromPartial(object: Partial<ABCIQueryRequest>): ABCIQueryRequest {
    const message = createBaseABCIQueryRequest();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.prove = object.prove ?? false;
    return message;
  },
  fromAmino(object: ABCIQueryRequestAmino): ABCIQueryRequest {
    const message = createBaseABCIQueryRequest();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.prove !== undefined && object.prove !== null) {
      message.prove = object.prove;
    }
    return message;
  },
  toAmino(message: ABCIQueryRequest, useInterfaces: boolean = true): ABCIQueryRequestAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.path = message.path === "" ? undefined : message.path;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.prove = message.prove === false ? undefined : message.prove;
    return obj;
  },
  fromAminoMsg(object: ABCIQueryRequestAminoMsg): ABCIQueryRequest {
    return ABCIQueryRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ABCIQueryRequest, useInterfaces: boolean = true): ABCIQueryRequestAminoMsg {
    return {
      type: "cosmos-sdk/ABCIQueryRequest",
      value: ABCIQueryRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ABCIQueryRequestProtoMsg, useInterfaces: boolean = true): ABCIQueryRequest {
    return ABCIQueryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ABCIQueryRequest): Uint8Array {
    return ABCIQueryRequest.encode(message).finish();
  },
  toProtoMsg(message: ABCIQueryRequest): ABCIQueryRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
      value: ABCIQueryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ABCIQueryRequest.typeUrl, ABCIQueryRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ABCIQueryRequest.aminoType, ABCIQueryRequest.typeUrl);
function createBaseABCIQueryResponse(): ABCIQueryResponse {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: BigInt(0),
    codespace: ""
  };
}
export const ABCIQueryResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
  aminoType: "cosmos-sdk/ABCIQueryResponse",
  is(o: any): o is ABCIQueryResponse {
    return o && (o.$typeUrl === ABCIQueryResponse.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  isSDK(o: any): o is ABCIQueryResponseSDKType {
    return o && (o.$typeUrl === ABCIQueryResponse.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  isAmino(o: any): o is ABCIQueryResponseAmino {
    return o && (o.$typeUrl === ABCIQueryResponse.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  encode(message: ABCIQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ABCIQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIQueryResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      proofOps: isSet(object.proofOps) ? ProofOps.fromJSON(object.proofOps) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },
  toJSON(message: ABCIQueryResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.proofOps !== undefined && (obj.proofOps = message.proofOps ? ProofOps.toJSON(message.proofOps) : undefined);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial(object: Partial<ABCIQueryResponse>): ABCIQueryResponse {
    const message = createBaseABCIQueryResponse();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ABCIQueryResponseAmino): ABCIQueryResponse {
    const message = createBaseABCIQueryResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.proof_ops !== undefined && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ABCIQueryResponse, useInterfaces: boolean = true): ABCIQueryResponseAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.index = message.index ? message.index.toString() : undefined;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps, useInterfaces) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ABCIQueryResponseAminoMsg): ABCIQueryResponse {
    return ABCIQueryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ABCIQueryResponse, useInterfaces: boolean = true): ABCIQueryResponseAminoMsg {
    return {
      type: "cosmos-sdk/ABCIQueryResponse",
      value: ABCIQueryResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ABCIQueryResponseProtoMsg, useInterfaces: boolean = true): ABCIQueryResponse {
    return ABCIQueryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ABCIQueryResponse): Uint8Array {
    return ABCIQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: ABCIQueryResponse): ABCIQueryResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
      value: ABCIQueryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ABCIQueryResponse.typeUrl, ABCIQueryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ABCIQueryResponse.aminoType, ABCIQueryResponse.typeUrl);
function createBaseProofOp(): ProofOp {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const ProofOp = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp",
  aminoType: "cosmos-sdk/ProofOp",
  is(o: any): o is ProofOp {
    return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is ProofOpSDKType {
    return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is ProofOpAmino {
    return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: ProofOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProofOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofOp {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: ProofOp): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<ProofOp>): ProofOp {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ProofOpAmino): ProofOp {
    const message = createBaseProofOp();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: ProofOp, useInterfaces: boolean = true): ProofOpAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProofOpAminoMsg): ProofOp {
    return ProofOp.fromAmino(object.value);
  },
  toAminoMsg(message: ProofOp, useInterfaces: boolean = true): ProofOpAminoMsg {
    return {
      type: "cosmos-sdk/ProofOp",
      value: ProofOp.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ProofOpProtoMsg, useInterfaces: boolean = true): ProofOp {
    return ProofOp.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProofOp): Uint8Array {
    return ProofOp.encode(message).finish();
  },
  toProtoMsg(message: ProofOp): ProofOpProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp",
      value: ProofOp.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProofOp.typeUrl, ProofOp);
GlobalDecoderRegistry.registerAminoProtoMapping(ProofOp.aminoType, ProofOp.typeUrl);
function createBaseProofOps(): ProofOps {
  return {
    ops: []
  };
}
export const ProofOps = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps",
  aminoType: "cosmos-sdk/ProofOps",
  is(o: any): o is ProofOps {
    return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.is(o.ops[0])));
  },
  isSDK(o: any): o is ProofOpsSDKType {
    return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.isSDK(o.ops[0])));
  },
  isAmino(o: any): o is ProofOpsAmino {
    return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.isAmino(o.ops[0])));
  },
  encode(message: ProofOps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProofOps {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofOps {
    return {
      ops: Array.isArray(object?.ops) ? object.ops.map((e: any) => ProofOp.fromJSON(e)) : []
    };
  },
  toJSON(message: ProofOps): unknown {
    const obj: any = {};
    if (message.ops) {
      obj.ops = message.ops.map(e => e ? ProofOp.toJSON(e) : undefined);
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ProofOps>): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map(e => ProofOp.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProofOpsAmino): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map(e => ProofOp.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProofOps, useInterfaces: boolean = true): ProofOpsAmino {
    const obj: any = {};
    if (message.ops) {
      obj.ops = message.ops.map(e => e ? ProofOp.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.ops = null;
    }
    return obj;
  },
  fromAminoMsg(object: ProofOpsAminoMsg): ProofOps {
    return ProofOps.fromAmino(object.value);
  },
  toAminoMsg(message: ProofOps, useInterfaces: boolean = true): ProofOpsAminoMsg {
    return {
      type: "cosmos-sdk/ProofOps",
      value: ProofOps.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ProofOpsProtoMsg, useInterfaces: boolean = true): ProofOps {
    return ProofOps.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProofOps): Uint8Array {
    return ProofOps.encode(message).finish();
  },
  toProtoMsg(message: ProofOps): ProofOpsProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps",
      value: ProofOps.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProofOps.typeUrl, ProofOps);
GlobalDecoderRegistry.registerAminoProtoMapping(ProofOps.aminoType, ProofOps.typeUrl);