import { Params, ParamsAmino, ParamsSDKType, TokenizeShareRecord, TokenizeShareRecordAmino, TokenizeShareRecordSDKType } from "./liquid";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the liquid module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to deposit. */
  params: Params;
  /** store tokenize share records to provide reward to record owners */
  tokenizeShareRecords: TokenizeShareRecord[];
  /** last tokenize share record id, used for next share record id calculation */
  lastTokenizeShareRecordId: bigint;
  /** total number of liquid staked tokens at genesis */
  totalLiquidStakedTokens: Uint8Array;
  /** tokenize shares locks at genesis */
  tokenizeShareLocks: TokenizeShareLock[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the liquid module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to deposit. */
  params: ParamsAmino;
  /** store tokenize share records to provide reward to record owners */
  tokenize_share_records?: TokenizeShareRecordAmino[];
  /** last tokenize share record id, used for next share record id calculation */
  last_tokenize_share_record_id?: string;
  /** total number of liquid staked tokens at genesis */
  total_liquid_staked_tokens?: string;
  /** tokenize shares locks at genesis */
  tokenize_share_locks?: TokenizeShareLockAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/gaia.liquid.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the liquid module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  tokenize_share_records: TokenizeShareRecordSDKType[];
  last_tokenize_share_record_id: bigint;
  total_liquid_staked_tokens: Uint8Array;
  tokenize_share_locks: TokenizeShareLockSDKType[];
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLock {
  /** Address of the account that is locked */
  address: string;
  /** Status of the lock (LOCKED or LOCK_EXPIRING) */
  status: string;
  /** Completion time if the lock is expiring */
  completionTime: Timestamp;
}
export interface TokenizeShareLockProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareLock";
  value: Uint8Array;
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLockAmino {
  /** Address of the account that is locked */
  address?: string;
  /** Status of the lock (LOCKED or LOCK_EXPIRING) */
  status?: string;
  /** Completion time if the lock is expiring */
  completion_time?: string;
}
export interface TokenizeShareLockAminoMsg {
  type: "/gaia.liquid.v1beta1.TokenizeShareLock";
  value: TokenizeShareLockAmino;
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLockSDKType {
  address: string;
  status: string;
  completion_time: TimestampSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenizeShareRecords: [],
    lastTokenizeShareRecordId: BigInt(0),
    totalLiquidStakedTokens: new Uint8Array(),
    tokenizeShareLocks: []
  };
}
export const GenesisState = {
  typeUrl: "/gaia.liquid.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.tokenizeShareRecords) && (!o.tokenizeShareRecords.length || TokenizeShareRecord.is(o.tokenizeShareRecords[0])) && typeof o.lastTokenizeShareRecordId === "bigint" && (o.totalLiquidStakedTokens instanceof Uint8Array || typeof o.totalLiquidStakedTokens === "string") && Array.isArray(o.tokenizeShareLocks) && (!o.tokenizeShareLocks.length || TokenizeShareLock.is(o.tokenizeShareLocks[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.tokenize_share_records) && (!o.tokenize_share_records.length || TokenizeShareRecord.isSDK(o.tokenize_share_records[0])) && typeof o.last_tokenize_share_record_id === "bigint" && (o.total_liquid_staked_tokens instanceof Uint8Array || typeof o.total_liquid_staked_tokens === "string") && Array.isArray(o.tokenize_share_locks) && (!o.tokenize_share_locks.length || TokenizeShareLock.isSDK(o.tokenize_share_locks[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.tokenize_share_records) && (!o.tokenize_share_records.length || TokenizeShareRecord.isAmino(o.tokenize_share_records[0])) && typeof o.last_tokenize_share_record_id === "bigint" && (o.total_liquid_staked_tokens instanceof Uint8Array || typeof o.total_liquid_staked_tokens === "string") && Array.isArray(o.tokenize_share_locks) && (!o.tokenize_share_locks.length || TokenizeShareLock.isAmino(o.tokenize_share_locks[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenizeShareRecords) {
      TokenizeShareRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.lastTokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(80).uint64(message.lastTokenizeShareRecordId);
    }
    if (message.totalLiquidStakedTokens.length !== 0) {
      writer.uint32(90).bytes(message.totalLiquidStakedTokens);
    }
    for (const v of message.tokenizeShareLocks) {
      TokenizeShareLock.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.tokenizeShareRecords.push(TokenizeShareRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 10:
          message.lastTokenizeShareRecordId = reader.uint64();
          break;
        case 11:
          message.totalLiquidStakedTokens = reader.bytes();
          break;
        case 12:
          message.tokenizeShareLocks.push(TokenizeShareLock.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tokenizeShareRecords: Array.isArray(object?.tokenizeShareRecords) ? object.tokenizeShareRecords.map((e: any) => TokenizeShareRecord.fromJSON(e)) : [],
      lastTokenizeShareRecordId: isSet(object.lastTokenizeShareRecordId) ? BigInt(object.lastTokenizeShareRecordId.toString()) : BigInt(0),
      totalLiquidStakedTokens: isSet(object.totalLiquidStakedTokens) ? bytesFromBase64(object.totalLiquidStakedTokens) : new Uint8Array(),
      tokenizeShareLocks: Array.isArray(object?.tokenizeShareLocks) ? object.tokenizeShareLocks.map((e: any) => TokenizeShareLock.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenizeShareRecords) {
      obj.tokenizeShareRecords = message.tokenizeShareRecords.map(e => e ? TokenizeShareRecord.toJSON(e) : undefined);
    } else {
      obj.tokenizeShareRecords = [];
    }
    message.lastTokenizeShareRecordId !== undefined && (obj.lastTokenizeShareRecordId = (message.lastTokenizeShareRecordId || BigInt(0)).toString());
    message.totalLiquidStakedTokens !== undefined && (obj.totalLiquidStakedTokens = base64FromBytes(message.totalLiquidStakedTokens !== undefined ? message.totalLiquidStakedTokens : new Uint8Array()));
    if (message.tokenizeShareLocks) {
      obj.tokenizeShareLocks = message.tokenizeShareLocks.map(e => e ? TokenizeShareLock.toJSON(e) : undefined);
    } else {
      obj.tokenizeShareLocks = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenizeShareRecords = object.tokenizeShareRecords?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.lastTokenizeShareRecordId = object.lastTokenizeShareRecordId !== undefined && object.lastTokenizeShareRecordId !== null ? BigInt(object.lastTokenizeShareRecordId.toString()) : BigInt(0);
    message.totalLiquidStakedTokens = object.totalLiquidStakedTokens ?? new Uint8Array();
    message.tokenizeShareLocks = object.tokenizeShareLocks?.map(e => TokenizeShareLock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenizeShareRecords = object.tokenize_share_records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    if (object.last_tokenize_share_record_id !== undefined && object.last_tokenize_share_record_id !== null) {
      message.lastTokenizeShareRecordId = BigInt(object.last_tokenize_share_record_id);
    }
    if (object.total_liquid_staked_tokens !== undefined && object.total_liquid_staked_tokens !== null) {
      message.totalLiquidStakedTokens = bytesFromBase64(object.total_liquid_staked_tokens);
    }
    message.tokenizeShareLocks = object.tokenize_share_locks?.map(e => TokenizeShareLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    if (message.tokenizeShareRecords) {
      obj.tokenize_share_records = message.tokenizeShareRecords.map(e => e ? TokenizeShareRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokenize_share_records = message.tokenizeShareRecords;
    }
    obj.last_tokenize_share_record_id = message.lastTokenizeShareRecordId ? message.lastTokenizeShareRecordId.toString() : undefined;
    obj.total_liquid_staked_tokens = message.totalLiquidStakedTokens ? base64FromBytes(message.totalLiquidStakedTokens) : undefined;
    if (message.tokenizeShareLocks) {
      obj.tokenize_share_locks = message.tokenizeShareLocks.map(e => e ? TokenizeShareLock.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokenize_share_locks = message.tokenizeShareLocks;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseTokenizeShareLock(): TokenizeShareLock {
  return {
    address: "",
    status: "",
    completionTime: Timestamp.fromPartial({})
  };
}
export const TokenizeShareLock = {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareLock",
  is(o: any): o is TokenizeShareLock {
    return o && (o.$typeUrl === TokenizeShareLock.typeUrl || typeof o.address === "string" && typeof o.status === "string" && Timestamp.is(o.completionTime));
  },
  isSDK(o: any): o is TokenizeShareLockSDKType {
    return o && (o.$typeUrl === TokenizeShareLock.typeUrl || typeof o.address === "string" && typeof o.status === "string" && Timestamp.isSDK(o.completion_time));
  },
  isAmino(o: any): o is TokenizeShareLockAmino {
    return o && (o.$typeUrl === TokenizeShareLock.typeUrl || typeof o.address === "string" && typeof o.status === "string" && Timestamp.isAmino(o.completion_time));
  },
  encode(message: TokenizeShareLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TokenizeShareLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenizeShareLock {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      status: isSet(object.status) ? String(object.status) : "",
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: TokenizeShareLock): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = message.status);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<TokenizeShareLock>): TokenizeShareLock {
    const message = createBaseTokenizeShareLock();
    message.address = object.address ?? "";
    message.status = object.status ?? "";
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },
  fromAmino(object: TokenizeShareLockAmino): TokenizeShareLock {
    const message = createBaseTokenizeShareLock();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: TokenizeShareLock, useInterfaces: boolean = true): TokenizeShareLockAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.status = message.status === "" ? undefined : message.status;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenizeShareLockAminoMsg): TokenizeShareLock {
    return TokenizeShareLock.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenizeShareLockProtoMsg, useInterfaces: boolean = true): TokenizeShareLock {
    return TokenizeShareLock.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TokenizeShareLock): Uint8Array {
    return TokenizeShareLock.encode(message).finish();
  },
  toProtoMsg(message: TokenizeShareLock): TokenizeShareLockProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.TokenizeShareLock",
      value: TokenizeShareLock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenizeShareLock.typeUrl, TokenizeShareLock);