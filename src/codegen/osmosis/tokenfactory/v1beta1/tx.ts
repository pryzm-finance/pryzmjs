import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
  sender: string;
  /** subdenom can be up to 44 "alphanumeric" characters long. */
  subdenom: string;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomSDKType {
  sender: string;
  subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
  newTokenDenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
  new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
  sender: string;
  amount: Coin;
  mintToAddress: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
  sender: string;
  amount: CoinSDKType;
  mintToAddress: string;
}
export interface MsgMintResponse {}
export interface MsgMintResponseSDKType {}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
  sender: string;
  amount: Coin;
  burnFromAddress: string;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
  sender: string;
  amount: CoinSDKType;
  burnFromAddress: string;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseSDKType {}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
  sender: string;
  denom: string;
  newAdmin: string;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
  sender: string;
  denom: string;
  new_admin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseSDKType {}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadata {
  sender: string;
  metadata: Metadata;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadataSDKType {
  sender: string;
  metadata: MetadataSDKType;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponse {}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponseSDKType {}
export interface MsgForceTransfer {
  sender: string;
  amount: Coin;
  transferFromAddress: string;
  transferToAddress: string;
}
export interface MsgForceTransferSDKType {
  sender: string;
  amount: CoinSDKType;
  transferFromAddress: string;
  transferToAddress: string;
}
export interface MsgForceTransferResponse {}
export interface MsgForceTransferResponseSDKType {}
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    sender: "",
    subdenom: ""
  };
}
export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.subdenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDenom {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      subdenom: isSet(object.subdenom) ? String(object.subdenom) : ""
    };
  },
  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.subdenom !== undefined && (obj.subdenom = message.subdenom);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.sender = object.sender ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  }
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    newTokenDenom: ""
  };
}
export const MsgCreateDenomResponse = {
  encode(message: MsgCreateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newTokenDenom !== "") {
      writer.uint32(10).string(message.newTokenDenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newTokenDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDenomResponse {
    return {
      newTokenDenom: isSet(object.newTokenDenom) ? String(object.newTokenDenom) : ""
    };
  },
  toJSON(message: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    message.newTokenDenom !== undefined && (obj.newTokenDenom = message.newTokenDenom);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newTokenDenom = object.newTokenDenom ?? "";
    return message;
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    amount: Coin.fromPartial({}),
    mintToAddress: ""
  };
}
export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintToAddress !== "") {
      writer.uint32(26).string(message.mintToAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintToAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMint {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      mintToAddress: isSet(object.mintToAddress) ? String(object.mintToAddress) : ""
    };
  },
  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.mintToAddress !== undefined && (obj.mintToAddress = message.mintToAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.mintToAddress = object.mintToAddress ?? "";
    return message;
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
export const MsgMintResponse = {
  encode(_: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
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
  fromJSON(_: any): MsgMintResponse {
    return {};
  },
  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    amount: Coin.fromPartial({}),
    burnFromAddress: ""
  };
}
export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.burnFromAddress !== "") {
      writer.uint32(26).string(message.burnFromAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.burnFromAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBurn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      burnFromAddress: isSet(object.burnFromAddress) ? String(object.burnFromAddress) : ""
    };
  },
  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.burnFromAddress !== undefined && (obj.burnFromAddress = message.burnFromAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.burnFromAddress = object.burnFromAddress ?? "";
    return message;
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  encode(_: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
  fromJSON(_: any): MsgBurnResponse {
    return {};
  },
  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  }
};
function createBaseMsgChangeAdmin(): MsgChangeAdmin {
  return {
    sender: "",
    denom: "",
    newAdmin: ""
  };
}
export const MsgChangeAdmin = {
  encode(message: MsgChangeAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChangeAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  toJSON(message: MsgChangeAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object: Partial<MsgChangeAdmin>): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  }
};
function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
  return {};
}
export const MsgChangeAdminResponse = {
  encode(_: MsgChangeAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdminResponse();
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
  fromJSON(_: any): MsgChangeAdminResponse {
    return {};
  },
  toJSON(_: MsgChangeAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgChangeAdminResponse>): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  }
};
function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return {
    sender: "",
    metadata: Metadata.fromPartial({})
  };
}
export const MsgSetDenomMetadata = {
  encode(message: MsgSetDenomMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDenomMetadata {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON(message: MsgSetDenomMetadata): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetDenomMetadata>): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.sender = object.sender ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {};
}
export const MsgSetDenomMetadataResponse = {
  encode(_: MsgSetDenomMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();
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
  fromJSON(_: any): MsgSetDenomMetadataResponse {
    return {};
  },
  toJSON(_: MsgSetDenomMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  }
};
function createBaseMsgForceTransfer(): MsgForceTransfer {
  return {
    sender: "",
    amount: Coin.fromPartial({}),
    transferFromAddress: "",
    transferToAddress: ""
  };
}
export const MsgForceTransfer = {
  encode(message: MsgForceTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.transferFromAddress !== "") {
      writer.uint32(26).string(message.transferFromAddress);
    }
    if (message.transferToAddress !== "") {
      writer.uint32(34).string(message.transferToAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.transferFromAddress = reader.string();
          break;
        case 4:
          message.transferToAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceTransfer {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      transferFromAddress: isSet(object.transferFromAddress) ? String(object.transferFromAddress) : "",
      transferToAddress: isSet(object.transferToAddress) ? String(object.transferToAddress) : ""
    };
  },
  toJSON(message: MsgForceTransfer): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.transferFromAddress !== undefined && (obj.transferFromAddress = message.transferFromAddress);
    message.transferToAddress !== undefined && (obj.transferToAddress = message.transferToAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgForceTransfer>): MsgForceTransfer {
    const message = createBaseMsgForceTransfer();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.transferFromAddress = object.transferFromAddress ?? "";
    message.transferToAddress = object.transferToAddress ?? "";
    return message;
  }
};
function createBaseMsgForceTransferResponse(): MsgForceTransferResponse {
  return {};
}
export const MsgForceTransferResponse = {
  encode(_: MsgForceTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceTransferResponse();
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
  fromJSON(_: any): MsgForceTransferResponse {
    return {};
  },
  toJSON(_: MsgForceTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgForceTransferResponse>): MsgForceTransferResponse {
    const message = createBaseMsgForceTransferResponse();
    return message;
  }
};