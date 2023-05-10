/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "refractedlabs.oracle.oracle";

export interface MsgUpdateParams {
  authority: string;
  params: Params | undefined;
}

export interface MsgUpdateParamsResponse {
}

export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}

export interface MsgDelegateFeedConsentResponse {
}

export interface MsgOraclePreVote {
  feeder: string;
  hash: string;
  validator: string;
}

export interface MsgOraclePreVoteResponse {
}

export interface MsgOracleVote {
  feeder: string;
  validator: string;
  salt: string;
  moduleVotes: string;
}

export interface MsgOracleVoteResponse {
}

export interface MsgOracleCombinedVote {
  feeder: string;
  validator: string;
  preVoteHash: string;
  voteSalt: string;
  voteModuleVotes: string;
}

export interface MsgOracleCombinedVoteResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return { operator: "", delegate: "" };
}

export const MsgDelegateFeedConsent = {
  encode(message: MsgDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateFeedConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : "",
    };
  },

  toJSON(message: MsgDelegateFeedConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsent>, I>>(object: I): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  },
};

function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {};
}

export const MsgDelegateFeedConsentResponse = {
  encode(_: MsgDelegateFeedConsentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsentResponse();
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

  fromJSON(_: any): MsgDelegateFeedConsentResponse {
    return {};
  },

  toJSON(_: MsgDelegateFeedConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsentResponse>, I>>(_: I): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
};

function createBaseMsgOraclePreVote(): MsgOraclePreVote {
  return { feeder: "", hash: "", validator: "" };
}

export const MsgOraclePreVote = {
  encode(message: MsgOraclePreVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOraclePreVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOraclePreVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOraclePreVote {
    return {
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: MsgOraclePreVote): unknown {
    const obj: any = {};
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.hash !== undefined && (obj.hash = message.hash);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOraclePreVote>, I>>(object: I): MsgOraclePreVote {
    const message = createBaseMsgOraclePreVote();
    message.feeder = object.feeder ?? "";
    message.hash = object.hash ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgOraclePreVoteResponse(): MsgOraclePreVoteResponse {
  return {};
}

export const MsgOraclePreVoteResponse = {
  encode(_: MsgOraclePreVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOraclePreVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOraclePreVoteResponse();
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

  fromJSON(_: any): MsgOraclePreVoteResponse {
    return {};
  },

  toJSON(_: MsgOraclePreVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOraclePreVoteResponse>, I>>(_: I): MsgOraclePreVoteResponse {
    const message = createBaseMsgOraclePreVoteResponse();
    return message;
  },
};

function createBaseMsgOracleVote(): MsgOracleVote {
  return { feeder: "", validator: "", salt: "", moduleVotes: "" };
}

export const MsgOracleVote = {
  encode(message: MsgOracleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.salt !== "") {
      writer.uint32(26).string(message.salt);
    }
    if (message.moduleVotes !== "") {
      writer.uint32(34).string(message.moduleVotes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.salt = reader.string();
          break;
        case 4:
          message.moduleVotes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOracleVote {
    return {
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      salt: isSet(object.salt) ? String(object.salt) : "",
      moduleVotes: isSet(object.moduleVotes) ? String(object.moduleVotes) : "",
    };
  },

  toJSON(message: MsgOracleVote): unknown {
    const obj: any = {};
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    message.salt !== undefined && (obj.salt = message.salt);
    message.moduleVotes !== undefined && (obj.moduleVotes = message.moduleVotes);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleVote>, I>>(object: I): MsgOracleVote {
    const message = createBaseMsgOracleVote();
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    message.salt = object.salt ?? "";
    message.moduleVotes = object.moduleVotes ?? "";
    return message;
  },
};

function createBaseMsgOracleVoteResponse(): MsgOracleVoteResponse {
  return {};
}

export const MsgOracleVoteResponse = {
  encode(_: MsgOracleVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleVoteResponse();
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

  fromJSON(_: any): MsgOracleVoteResponse {
    return {};
  },

  toJSON(_: MsgOracleVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleVoteResponse>, I>>(_: I): MsgOracleVoteResponse {
    const message = createBaseMsgOracleVoteResponse();
    return message;
  },
};

function createBaseMsgOracleCombinedVote(): MsgOracleCombinedVote {
  return { feeder: "", validator: "", preVoteHash: "", voteSalt: "", voteModuleVotes: "" };
}

export const MsgOracleCombinedVote = {
  encode(message: MsgOracleCombinedVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.preVoteHash !== "") {
      writer.uint32(26).string(message.preVoteHash);
    }
    if (message.voteSalt !== "") {
      writer.uint32(34).string(message.voteSalt);
    }
    if (message.voteModuleVotes !== "") {
      writer.uint32(42).string(message.voteModuleVotes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleCombinedVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleCombinedVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.preVoteHash = reader.string();
          break;
        case 4:
          message.voteSalt = reader.string();
          break;
        case 5:
          message.voteModuleVotes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOracleCombinedVote {
    return {
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      preVoteHash: isSet(object.preVoteHash) ? String(object.preVoteHash) : "",
      voteSalt: isSet(object.voteSalt) ? String(object.voteSalt) : "",
      voteModuleVotes: isSet(object.voteModuleVotes) ? String(object.voteModuleVotes) : "",
    };
  },

  toJSON(message: MsgOracleCombinedVote): unknown {
    const obj: any = {};
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    message.preVoteHash !== undefined && (obj.preVoteHash = message.preVoteHash);
    message.voteSalt !== undefined && (obj.voteSalt = message.voteSalt);
    message.voteModuleVotes !== undefined && (obj.voteModuleVotes = message.voteModuleVotes);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleCombinedVote>, I>>(object: I): MsgOracleCombinedVote {
    const message = createBaseMsgOracleCombinedVote();
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    message.preVoteHash = object.preVoteHash ?? "";
    message.voteSalt = object.voteSalt ?? "";
    message.voteModuleVotes = object.voteModuleVotes ?? "";
    return message;
  },
};

function createBaseMsgOracleCombinedVoteResponse(): MsgOracleCombinedVoteResponse {
  return {};
}

export const MsgOracleCombinedVoteResponse = {
  encode(_: MsgOracleCombinedVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleCombinedVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleCombinedVoteResponse();
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

  fromJSON(_: any): MsgOracleCombinedVoteResponse {
    return {};
  },

  toJSON(_: MsgOracleCombinedVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleCombinedVoteResponse>, I>>(_: I): MsgOracleCombinedVoteResponse {
    const message = createBaseMsgOracleCombinedVoteResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  DelegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
  OraclePreVote(request: MsgOraclePreVote): Promise<MsgOraclePreVoteResponse>;
  OracleVote(request: MsgOracleVote): Promise<MsgOracleVoteResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  OracleCombinedVote(request: MsgOracleCombinedVote): Promise<MsgOracleCombinedVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.DelegateFeedConsent = this.DelegateFeedConsent.bind(this);
    this.OraclePreVote = this.OraclePreVote.bind(this);
    this.OracleVote = this.OracleVote.bind(this);
    this.OracleCombinedVote = this.OracleCombinedVote.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }

  DelegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Msg", "DelegateFeedConsent", data);
    return promise.then((data) => MsgDelegateFeedConsentResponse.decode(new _m0.Reader(data)));
  }

  OraclePreVote(request: MsgOraclePreVote): Promise<MsgOraclePreVoteResponse> {
    const data = MsgOraclePreVote.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Msg", "OraclePreVote", data);
    return promise.then((data) => MsgOraclePreVoteResponse.decode(new _m0.Reader(data)));
  }

  OracleVote(request: MsgOracleVote): Promise<MsgOracleVoteResponse> {
    const data = MsgOracleVote.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Msg", "OracleVote", data);
    return promise.then((data) => MsgOracleVoteResponse.decode(new _m0.Reader(data)));
  }

  OracleCombinedVote(request: MsgOracleCombinedVote): Promise<MsgOracleCombinedVoteResponse> {
    const data = MsgOracleCombinedVote.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Msg", "OracleCombinedVote", data);
    return promise.then((data) => MsgOracleCombinedVoteResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
