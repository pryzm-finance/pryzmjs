import { Params, ParamsAmino, ParamsSDKType, StakingParams, StakingParamsAmino, StakingParamsSDKType } from "./params";
import { HostChain, HostChainAmino, HostChainSDKType, Validator, ValidatorAmino, ValidatorSDKType } from "./host_chain";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum ICARegistrationType {
  /** DELEGATION - register delegation interchain account */
  DELEGATION = 0,
  /** REWARD - register reward interchain account */
  REWARD = 1,
  /** SWEEP - register sweep interchain account */
  SWEEP = 2,
  /** REWARD_CLAIMING - registration of reward account as the withdraw address on the host chain */
  REWARD_CLAIMING = 3,
  UNRECOGNIZED = -1,
}
export const ICARegistrationTypeSDKType = ICARegistrationType;
export const ICARegistrationTypeAmino = ICARegistrationType;
export function iCARegistrationTypeFromJSON(object: any): ICARegistrationType {
  switch (object) {
    case 0:
    case "DELEGATION":
      return ICARegistrationType.DELEGATION;
    case 1:
    case "REWARD":
      return ICARegistrationType.REWARD;
    case 2:
    case "SWEEP":
      return ICARegistrationType.SWEEP;
    case 3:
    case "REWARD_CLAIMING":
      return ICARegistrationType.REWARD_CLAIMING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ICARegistrationType.UNRECOGNIZED;
  }
}
export function iCARegistrationTypeToJSON(object: ICARegistrationType): string {
  switch (object) {
    case ICARegistrationType.DELEGATION:
      return "DELEGATION";
    case ICARegistrationType.REWARD:
      return "REWARD";
    case ICARegistrationType.SWEEP:
      return "SWEEP";
    case ICARegistrationType.REWARD_CLAIMING:
      return "REWARD_CLAIMING";
    case ICARegistrationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/icstaking/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgRegisterHostChain {
  creator: string;
  hostChain: HostChain;
}
export interface MsgRegisterHostChainProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChain";
  value: Uint8Array;
}
export interface MsgRegisterHostChainAmino {
  creator?: string;
  host_chain: HostChainAmino;
}
export interface MsgRegisterHostChainAminoMsg {
  type: "pryzm/icstaking/v1/RegisterHostChain";
  value: MsgRegisterHostChainAmino;
}
export interface MsgRegisterHostChainSDKType {
  creator: string;
  host_chain: HostChainSDKType;
}
export interface MsgRegisterHostChainResponse {}
export interface MsgRegisterHostChainResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChainResponse";
  value: Uint8Array;
}
export interface MsgRegisterHostChainResponseAmino {}
export interface MsgRegisterHostChainResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRegisterHostChainResponse";
  value: MsgRegisterHostChainResponseAmino;
}
export interface MsgRegisterHostChainResponseSDKType {}
export interface MsgUpdateHostChain {
  creator: string;
  hostChainId: string;
  validators: Validator[];
  params?: StakingParams;
}
export interface MsgUpdateHostChainProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChain";
  value: Uint8Array;
}
export interface MsgUpdateHostChainAmino {
  creator?: string;
  host_chain_id?: string;
  validators: ValidatorAmino[];
  params: StakingParamsAmino;
}
export interface MsgUpdateHostChainAminoMsg {
  type: "pryzm/icstaking/v1/UpdateHostChain";
  value: MsgUpdateHostChainAmino;
}
export interface MsgUpdateHostChainSDKType {
  creator: string;
  host_chain_id: string;
  validators: ValidatorSDKType[];
  params?: StakingParamsSDKType;
}
export interface MsgUpdateHostChainResponse {}
export interface MsgUpdateHostChainResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChainResponse";
  value: Uint8Array;
}
export interface MsgUpdateHostChainResponseAmino {}
export interface MsgUpdateHostChainResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgUpdateHostChainResponse";
  value: MsgUpdateHostChainResponseAmino;
}
export interface MsgUpdateHostChainResponseSDKType {}
export interface MsgStake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  amount: string;
}
export interface MsgStakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgStake";
  value: Uint8Array;
}
export interface MsgStakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  amount: string;
}
export interface MsgStakeAminoMsg {
  type: "pryzm/icstaking/v1/Stake";
  value: MsgStakeAmino;
}
export interface MsgStakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  amount: string;
}
export interface MsgStakeResponse {
  cAmount: Coin;
  fee: Coin;
}
export interface MsgStakeResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgStakeResponse";
  value: Uint8Array;
}
export interface MsgStakeResponseAmino {
  c_amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgStakeResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgStakeResponse";
  value: MsgStakeResponseAmino;
}
export interface MsgStakeResponseSDKType {
  c_amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgUnstake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  cAmount: string;
}
export interface MsgUnstakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUnstake";
  value: Uint8Array;
}
export interface MsgUnstakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  c_amount: string;
}
export interface MsgUnstakeAminoMsg {
  type: "pryzm/icstaking/v1/Unstake";
  value: MsgUnstakeAmino;
}
export interface MsgUnstakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  c_amount: string;
}
export interface MsgUnstakeResponse {
  uAmount: Coin;
}
export interface MsgUnstakeResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUnstakeResponse";
  value: Uint8Array;
}
export interface MsgUnstakeResponseAmino {
  u_amount?: CoinAmino;
}
export interface MsgUnstakeResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgUnstakeResponse";
  value: MsgUnstakeResponseAmino;
}
export interface MsgUnstakeResponseSDKType {
  u_amount: CoinSDKType;
}
export interface MsgRedeemUnstaked {
  creator: string;
  hostChain: string;
  transferChannel: string;
  uAmount: string;
  epoch: bigint;
}
export interface MsgRedeemUnstakedProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstaked";
  value: Uint8Array;
}
export interface MsgRedeemUnstakedAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  u_amount: string;
  epoch: string;
}
export interface MsgRedeemUnstakedAminoMsg {
  type: "pryzm/icstaking/v1/RedeemUnstaked";
  value: MsgRedeemUnstakedAmino;
}
export interface MsgRedeemUnstakedSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  u_amount: string;
  epoch: bigint;
}
export interface MsgRedeemUnstakedResponse {
  amount: Coin;
  fee: Coin;
}
export interface MsgRedeemUnstakedResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstakedResponse";
  value: Uint8Array;
}
export interface MsgRedeemUnstakedResponseAmino {
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgRedeemUnstakedResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRedeemUnstakedResponse";
  value: MsgRedeemUnstakedResponseAmino;
}
export interface MsgRedeemUnstakedResponseSDKType {
  amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgInstantUnstake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  minCAmount: string;
  maxCAmount: string;
}
export interface MsgInstantUnstakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstake";
  value: Uint8Array;
}
export interface MsgInstantUnstakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  min_c_amount: string;
  max_c_amount: string;
}
export interface MsgInstantUnstakeAminoMsg {
  type: "pryzm/icstaking/v1/InstantUnstake";
  value: MsgInstantUnstakeAmino;
}
export interface MsgInstantUnstakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  min_c_amount: string;
  max_c_amount: string;
}
export interface MsgInstantUnstakeResponse {
  amount: Coin;
  fee: Coin;
}
export interface MsgInstantUnstakeResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstakeResponse";
  value: Uint8Array;
}
export interface MsgInstantUnstakeResponseAmino {
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgInstantUnstakeResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgInstantUnstakeResponse";
  value: MsgInstantUnstakeResponseAmino;
}
export interface MsgInstantUnstakeResponseSDKType {
  amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgRebalanceDelegations {
  creator: string;
  hostChain: string;
}
export interface MsgRebalanceDelegationsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegations";
  value: Uint8Array;
}
export interface MsgRebalanceDelegationsAmino {
  creator?: string;
  host_chain?: string;
}
export interface MsgRebalanceDelegationsAminoMsg {
  type: "pryzm/icstaking/v1/RebalanceDelegations";
  value: MsgRebalanceDelegationsAmino;
}
export interface MsgRebalanceDelegationsSDKType {
  creator: string;
  host_chain: string;
}
export interface MsgRebalanceDelegationsResponse {}
export interface MsgRebalanceDelegationsResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegationsResponse";
  value: Uint8Array;
}
export interface MsgRebalanceDelegationsResponseAmino {}
export interface MsgRebalanceDelegationsResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRebalanceDelegationsResponse";
  value: MsgRebalanceDelegationsResponseAmino;
}
export interface MsgRebalanceDelegationsResponseSDKType {}
export interface MsgRegisterInterchainAccount {
  creator: string;
  hostChain: string;
  registrationType: ICARegistrationType;
}
export interface MsgRegisterInterchainAccountProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccount";
  value: Uint8Array;
}
export interface MsgRegisterInterchainAccountAmino {
  creator?: string;
  host_chain?: string;
  registration_type: ICARegistrationType;
}
export interface MsgRegisterInterchainAccountAminoMsg {
  type: "pryzm/icstaking/v1/RegInterchainAccount";
  value: MsgRegisterInterchainAccountAmino;
}
export interface MsgRegisterInterchainAccountSDKType {
  creator: string;
  host_chain: string;
  registration_type: ICARegistrationType;
}
export interface MsgRegisterInterchainAccountResponse {}
export interface MsgRegisterInterchainAccountResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccountResponse";
  value: Uint8Array;
}
export interface MsgRegisterInterchainAccountResponseAmino {}
export interface MsgRegisterInterchainAccountResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRegisterInterchainAccountResponse";
  value: MsgRegisterInterchainAccountResponseAmino;
}
export interface MsgRegisterInterchainAccountResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "pryzm/icstaking/v1/UpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterHostChain(): MsgRegisterHostChain {
  return {
    creator: "",
    hostChain: HostChain.fromPartial({})
  };
}
export const MsgRegisterHostChain = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChain",
  encode(message: MsgRegisterHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = HostChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterHostChain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? HostChain.fromJSON(object.hostChain) : undefined
    };
  },
  toJSON(message: MsgRegisterHostChain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterHostChain>): MsgRegisterHostChain {
    const message = createBaseMsgRegisterHostChain();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain !== undefined && object.hostChain !== null ? HostChain.fromPartial(object.hostChain) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterHostChainAmino): MsgRegisterHostChain {
    const message = createBaseMsgRegisterHostChain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = HostChain.fromAmino(object.host_chain);
    }
    return message;
  },
  toAmino(message: MsgRegisterHostChain): MsgRegisterHostChainAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_chain = message.hostChain ? HostChain.toAmino(message.hostChain) : HostChain.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostChainAminoMsg): MsgRegisterHostChain {
    return MsgRegisterHostChain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterHostChain): MsgRegisterHostChainAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RegisterHostChain",
      value: MsgRegisterHostChain.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterHostChainProtoMsg): MsgRegisterHostChain {
    return MsgRegisterHostChain.decode(message.value);
  },
  toProto(message: MsgRegisterHostChain): Uint8Array {
    return MsgRegisterHostChain.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostChain): MsgRegisterHostChainProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChain",
      value: MsgRegisterHostChain.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterHostChainResponse(): MsgRegisterHostChainResponse {
  return {};
}
export const MsgRegisterHostChainResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChainResponse",
  encode(_: MsgRegisterHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostChainResponse();
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
  fromJSON(_: any): MsgRegisterHostChainResponse {
    return {};
  },
  toJSON(_: MsgRegisterHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterHostChainResponse>): MsgRegisterHostChainResponse {
    const message = createBaseMsgRegisterHostChainResponse();
    return message;
  },
  fromAmino(_: MsgRegisterHostChainResponseAmino): MsgRegisterHostChainResponse {
    const message = createBaseMsgRegisterHostChainResponse();
    return message;
  },
  toAmino(_: MsgRegisterHostChainResponse): MsgRegisterHostChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostChainResponseAminoMsg): MsgRegisterHostChainResponse {
    return MsgRegisterHostChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterHostChainResponseProtoMsg): MsgRegisterHostChainResponse {
    return MsgRegisterHostChainResponse.decode(message.value);
  },
  toProto(message: MsgRegisterHostChainResponse): Uint8Array {
    return MsgRegisterHostChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostChainResponse): MsgRegisterHostChainResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChainResponse",
      value: MsgRegisterHostChainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateHostChain(): MsgUpdateHostChain {
  return {
    creator: "",
    hostChainId: "",
    validators: [],
    params: undefined
  };
}
export const MsgUpdateHostChain = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChain",
  encode(message: MsgUpdateHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      StakingParams.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChainId = reader.string();
          break;
        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = StakingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateHostChain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      params: isSet(object.params) ? StakingParams.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateHostChain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.params !== undefined && (obj.params = message.params ? StakingParams.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateHostChain>): MsgUpdateHostChain {
    const message = createBaseMsgUpdateHostChain();
    message.creator = object.creator ?? "";
    message.hostChainId = object.hostChainId ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? StakingParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateHostChainAmino): MsgUpdateHostChain {
    const message = createBaseMsgUpdateHostChain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = StakingParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateHostChain): MsgUpdateHostChainAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_chain_id = message.hostChainId;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.params = message.params ? StakingParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostChainAminoMsg): MsgUpdateHostChain {
    return MsgUpdateHostChain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateHostChain): MsgUpdateHostChainAminoMsg {
    return {
      type: "pryzm/icstaking/v1/UpdateHostChain",
      value: MsgUpdateHostChain.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateHostChainProtoMsg): MsgUpdateHostChain {
    return MsgUpdateHostChain.decode(message.value);
  },
  toProto(message: MsgUpdateHostChain): Uint8Array {
    return MsgUpdateHostChain.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHostChain): MsgUpdateHostChainProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChain",
      value: MsgUpdateHostChain.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateHostChainResponse(): MsgUpdateHostChainResponse {
  return {};
}
export const MsgUpdateHostChainResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChainResponse",
  encode(_: MsgUpdateHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChainResponse();
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
  fromJSON(_: any): MsgUpdateHostChainResponse {
    return {};
  },
  toJSON(_: MsgUpdateHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateHostChainResponse>): MsgUpdateHostChainResponse {
    const message = createBaseMsgUpdateHostChainResponse();
    return message;
  },
  fromAmino(_: MsgUpdateHostChainResponseAmino): MsgUpdateHostChainResponse {
    const message = createBaseMsgUpdateHostChainResponse();
    return message;
  },
  toAmino(_: MsgUpdateHostChainResponse): MsgUpdateHostChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostChainResponseAminoMsg): MsgUpdateHostChainResponse {
    return MsgUpdateHostChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateHostChainResponseProtoMsg): MsgUpdateHostChainResponse {
    return MsgUpdateHostChainResponse.decode(message.value);
  },
  toProto(message: MsgUpdateHostChainResponse): Uint8Array {
    return MsgUpdateHostChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHostChainResponse): MsgUpdateHostChainResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChainResponse",
      value: MsgUpdateHostChainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStake(): MsgStake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    amount: ""
  };
}
export const MsgStake = {
  typeUrl: "/pryzm.icstaking.v1.MsgStake",
  encode(message: MsgStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgStakeAmino): MsgStake {
    const message = createBaseMsgStake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgStake): MsgStakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_chain = message.hostChain;
    obj.transfer_channel = message.transferChannel;
    obj.amount = message.amount ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgStakeAminoMsg): MsgStake {
    return MsgStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStake): MsgStakeAminoMsg {
    return {
      type: "pryzm/icstaking/v1/Stake",
      value: MsgStake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStakeProtoMsg): MsgStake {
    return MsgStake.decode(message.value);
  },
  toProto(message: MsgStake): Uint8Array {
    return MsgStake.encode(message).finish();
  },
  toProtoMsg(message: MsgStake): MsgStakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgStake",
      value: MsgStake.encode(message).finish()
    };
  }
};
function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {
    cAmount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgStakeResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgStakeResponse",
  encode(message: MsgStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeResponse {
    return {
      cAmount: isSet(object.cAmount) ? Coin.fromJSON(object.cAmount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgStakeResponse): unknown {
    const obj: any = {};
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.cAmount = object.cAmount !== undefined && object.cAmount !== null ? Coin.fromPartial(object.cAmount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgStakeResponseAmino): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = Coin.fromAmino(object.c_amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgStakeResponse): MsgStakeResponseAmino {
    const obj: any = {};
    obj.c_amount = message.cAmount ? Coin.toAmino(message.cAmount) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeResponseAminoMsg): MsgStakeResponse {
    return MsgStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeResponseProtoMsg): MsgStakeResponse {
    return MsgStakeResponse.decode(message.value);
  },
  toProto(message: MsgStakeResponse): Uint8Array {
    return MsgStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeResponse): MsgStakeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgStakeResponse",
      value: MsgStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstake(): MsgUnstake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    cAmount: ""
  };
}
export const MsgUnstake = {
  typeUrl: "/pryzm.icstaking.v1.MsgUnstake",
  encode(message: MsgUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.cAmount !== "") {
      writer.uint32(34).string(message.cAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.cAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      cAmount: isSet(object.cAmount) ? String(object.cAmount) : ""
    };
  },
  toJSON(message: MsgUnstake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.cAmount !== undefined && (obj.cAmount = message.cAmount);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstake>): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.cAmount = object.cAmount ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeAmino): MsgUnstake {
    const message = createBaseMsgUnstake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = object.c_amount;
    }
    return message;
  },
  toAmino(message: MsgUnstake): MsgUnstakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_chain = message.hostChain;
    obj.transfer_channel = message.transferChannel;
    obj.c_amount = message.cAmount ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeAminoMsg): MsgUnstake {
    return MsgUnstake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnstake): MsgUnstakeAminoMsg {
    return {
      type: "pryzm/icstaking/v1/Unstake",
      value: MsgUnstake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnstakeProtoMsg): MsgUnstake {
    return MsgUnstake.decode(message.value);
  },
  toProto(message: MsgUnstake): Uint8Array {
    return MsgUnstake.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstake): MsgUnstakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUnstake",
      value: MsgUnstake.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {
    uAmount: Coin.fromPartial({})
  };
}
export const MsgUnstakeResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgUnstakeResponse",
  encode(message: MsgUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uAmount !== undefined) {
      Coin.encode(message.uAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstakeResponse {
    return {
      uAmount: isSet(object.uAmount) ? Coin.fromJSON(object.uAmount) : undefined
    };
  },
  toJSON(message: MsgUnstakeResponse): unknown {
    const obj: any = {};
    message.uAmount !== undefined && (obj.uAmount = message.uAmount ? Coin.toJSON(message.uAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    message.uAmount = object.uAmount !== undefined && object.uAmount !== null ? Coin.fromPartial(object.uAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgUnstakeResponseAmino): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    if (object.u_amount !== undefined && object.u_amount !== null) {
      message.uAmount = Coin.fromAmino(object.u_amount);
    }
    return message;
  },
  toAmino(message: MsgUnstakeResponse): MsgUnstakeResponseAmino {
    const obj: any = {};
    obj.u_amount = message.uAmount ? Coin.toAmino(message.uAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeResponseAminoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeResponseProtoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeResponse): Uint8Array {
    return MsgUnstakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeResponse): MsgUnstakeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUnstakeResponse",
      value: MsgUnstakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemUnstaked(): MsgRedeemUnstaked {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    uAmount: "",
    epoch: BigInt(0)
  };
}
export const MsgRedeemUnstaked = {
  typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstaked",
  encode(message: MsgRedeemUnstaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.uAmount !== "") {
      writer.uint32(34).string(message.uAmount);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(40).uint64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemUnstaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemUnstaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.uAmount = reader.string();
          break;
        case 5:
          message.epoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemUnstaked {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      uAmount: isSet(object.uAmount) ? String(object.uAmount) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgRedeemUnstaked): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.uAmount !== undefined && (obj.uAmount = message.uAmount);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemUnstaked>): MsgRedeemUnstaked {
    const message = createBaseMsgRedeemUnstaked();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.uAmount = object.uAmount ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRedeemUnstakedAmino): MsgRedeemUnstaked {
    const message = createBaseMsgRedeemUnstaked();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.u_amount !== undefined && object.u_amount !== null) {
      message.uAmount = object.u_amount;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    return message;
  },
  toAmino(message: MsgRedeemUnstaked): MsgRedeemUnstakedAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_chain = message.hostChain;
    obj.transfer_channel = message.transferChannel;
    obj.u_amount = message.uAmount ?? "";
    obj.epoch = message.epoch ? message.epoch.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgRedeemUnstakedAminoMsg): MsgRedeemUnstaked {
    return MsgRedeemUnstaked.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemUnstaked): MsgRedeemUnstakedAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RedeemUnstaked",
      value: MsgRedeemUnstaked.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemUnstakedProtoMsg): MsgRedeemUnstaked {
    return MsgRedeemUnstaked.decode(message.value);
  },
  toProto(message: MsgRedeemUnstaked): Uint8Array {
    return MsgRedeemUnstaked.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemUnstaked): MsgRedeemUnstakedProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstaked",
      value: MsgRedeemUnstaked.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemUnstakedResponse(): MsgRedeemUnstakedResponse {
  return {
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgRedeemUnstakedResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstakedResponse",
  encode(message: MsgRedeemUnstakedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemUnstakedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemUnstakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemUnstakedResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgRedeemUnstakedResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemUnstakedResponse>): MsgRedeemUnstakedResponse {
    const message = createBaseMsgRedeemUnstakedResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemUnstakedResponseAmino): MsgRedeemUnstakedResponse {
    const message = createBaseMsgRedeemUnstakedResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgRedeemUnstakedResponse): MsgRedeemUnstakedResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemUnstakedResponseAminoMsg): MsgRedeemUnstakedResponse {
    return MsgRedeemUnstakedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemUnstakedResponseProtoMsg): MsgRedeemUnstakedResponse {
    return MsgRedeemUnstakedResponse.decode(message.value);
  },
  toProto(message: MsgRedeemUnstakedResponse): Uint8Array {
    return MsgRedeemUnstakedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemUnstakedResponse): MsgRedeemUnstakedResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstakedResponse",
      value: MsgRedeemUnstakedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantUnstake(): MsgInstantUnstake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    minCAmount: "",
    maxCAmount: ""
  };
}
export const MsgInstantUnstake = {
  typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstake",
  encode(message: MsgInstantUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.minCAmount !== "") {
      writer.uint32(34).string(message.minCAmount);
    }
    if (message.maxCAmount !== "") {
      writer.uint32(42).string(message.maxCAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.minCAmount = reader.string();
          break;
        case 5:
          message.maxCAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      minCAmount: isSet(object.minCAmount) ? String(object.minCAmount) : "",
      maxCAmount: isSet(object.maxCAmount) ? String(object.maxCAmount) : ""
    };
  },
  toJSON(message: MsgInstantUnstake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.minCAmount !== undefined && (obj.minCAmount = message.minCAmount);
    message.maxCAmount !== undefined && (obj.maxCAmount = message.maxCAmount);
    return obj;
  },
  fromPartial(object: Partial<MsgInstantUnstake>): MsgInstantUnstake {
    const message = createBaseMsgInstantUnstake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.minCAmount = object.minCAmount ?? "";
    message.maxCAmount = object.maxCAmount ?? "";
    return message;
  },
  fromAmino(object: MsgInstantUnstakeAmino): MsgInstantUnstake {
    const message = createBaseMsgInstantUnstake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.min_c_amount !== undefined && object.min_c_amount !== null) {
      message.minCAmount = object.min_c_amount;
    }
    if (object.max_c_amount !== undefined && object.max_c_amount !== null) {
      message.maxCAmount = object.max_c_amount;
    }
    return message;
  },
  toAmino(message: MsgInstantUnstake): MsgInstantUnstakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_chain = message.hostChain;
    obj.transfer_channel = message.transferChannel;
    obj.min_c_amount = message.minCAmount ?? "";
    obj.max_c_amount = message.maxCAmount ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgInstantUnstakeAminoMsg): MsgInstantUnstake {
    return MsgInstantUnstake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantUnstake): MsgInstantUnstakeAminoMsg {
    return {
      type: "pryzm/icstaking/v1/InstantUnstake",
      value: MsgInstantUnstake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantUnstakeProtoMsg): MsgInstantUnstake {
    return MsgInstantUnstake.decode(message.value);
  },
  toProto(message: MsgInstantUnstake): Uint8Array {
    return MsgInstantUnstake.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantUnstake): MsgInstantUnstakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstake",
      value: MsgInstantUnstake.encode(message).finish()
    };
  }
};
function createBaseMsgInstantUnstakeResponse(): MsgInstantUnstakeResponse {
  return {
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgInstantUnstakeResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstakeResponse",
  encode(message: MsgInstantUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantUnstakeResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgInstantUnstakeResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgInstantUnstakeResponse>): MsgInstantUnstakeResponse {
    const message = createBaseMsgInstantUnstakeResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgInstantUnstakeResponseAmino): MsgInstantUnstakeResponse {
    const message = createBaseMsgInstantUnstakeResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgInstantUnstakeResponse): MsgInstantUnstakeResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgInstantUnstakeResponseAminoMsg): MsgInstantUnstakeResponse {
    return MsgInstantUnstakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantUnstakeResponseProtoMsg): MsgInstantUnstakeResponse {
    return MsgInstantUnstakeResponse.decode(message.value);
  },
  toProto(message: MsgInstantUnstakeResponse): Uint8Array {
    return MsgInstantUnstakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantUnstakeResponse): MsgInstantUnstakeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstakeResponse",
      value: MsgInstantUnstakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRebalanceDelegations(): MsgRebalanceDelegations {
  return {
    creator: "",
    hostChain: ""
  };
}
export const MsgRebalanceDelegations = {
  typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegations",
  encode(message: MsgRebalanceDelegations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRebalanceDelegations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceDelegations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRebalanceDelegations {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : ""
    };
  },
  toJSON(message: MsgRebalanceDelegations): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    return obj;
  },
  fromPartial(object: Partial<MsgRebalanceDelegations>): MsgRebalanceDelegations {
    const message = createBaseMsgRebalanceDelegations();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    return message;
  },
  fromAmino(object: MsgRebalanceDelegationsAmino): MsgRebalanceDelegations {
    const message = createBaseMsgRebalanceDelegations();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    return message;
  },
  toAmino(message: MsgRebalanceDelegations): MsgRebalanceDelegationsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_chain = message.hostChain;
    return obj;
  },
  fromAminoMsg(object: MsgRebalanceDelegationsAminoMsg): MsgRebalanceDelegations {
    return MsgRebalanceDelegations.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRebalanceDelegations): MsgRebalanceDelegationsAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RebalanceDelegations",
      value: MsgRebalanceDelegations.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRebalanceDelegationsProtoMsg): MsgRebalanceDelegations {
    return MsgRebalanceDelegations.decode(message.value);
  },
  toProto(message: MsgRebalanceDelegations): Uint8Array {
    return MsgRebalanceDelegations.encode(message).finish();
  },
  toProtoMsg(message: MsgRebalanceDelegations): MsgRebalanceDelegationsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegations",
      value: MsgRebalanceDelegations.encode(message).finish()
    };
  }
};
function createBaseMsgRebalanceDelegationsResponse(): MsgRebalanceDelegationsResponse {
  return {};
}
export const MsgRebalanceDelegationsResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegationsResponse",
  encode(_: MsgRebalanceDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRebalanceDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceDelegationsResponse();
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
  fromJSON(_: any): MsgRebalanceDelegationsResponse {
    return {};
  },
  toJSON(_: MsgRebalanceDelegationsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRebalanceDelegationsResponse>): MsgRebalanceDelegationsResponse {
    const message = createBaseMsgRebalanceDelegationsResponse();
    return message;
  },
  fromAmino(_: MsgRebalanceDelegationsResponseAmino): MsgRebalanceDelegationsResponse {
    const message = createBaseMsgRebalanceDelegationsResponse();
    return message;
  },
  toAmino(_: MsgRebalanceDelegationsResponse): MsgRebalanceDelegationsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRebalanceDelegationsResponseAminoMsg): MsgRebalanceDelegationsResponse {
    return MsgRebalanceDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRebalanceDelegationsResponseProtoMsg): MsgRebalanceDelegationsResponse {
    return MsgRebalanceDelegationsResponse.decode(message.value);
  },
  toProto(message: MsgRebalanceDelegationsResponse): Uint8Array {
    return MsgRebalanceDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRebalanceDelegationsResponse): MsgRebalanceDelegationsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegationsResponse",
      value: MsgRebalanceDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterInterchainAccount(): MsgRegisterInterchainAccount {
  return {
    creator: "",
    hostChain: "",
    registrationType: 0
  };
}
export const MsgRegisterInterchainAccount = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccount",
  encode(message: MsgRegisterInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.registrationType !== 0) {
      writer.uint32(24).int32(message.registrationType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.registrationType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterInterchainAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      registrationType: isSet(object.registrationType) ? iCARegistrationTypeFromJSON(object.registrationType) : -1
    };
  },
  toJSON(message: MsgRegisterInterchainAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.registrationType !== undefined && (obj.registrationType = iCARegistrationTypeToJSON(message.registrationType));
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.registrationType = object.registrationType ?? 0;
    return message;
  },
  fromAmino(object: MsgRegisterInterchainAccountAmino): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.registration_type !== undefined && object.registration_type !== null) {
      message.registrationType = iCARegistrationTypeFromJSON(object.registration_type);
    }
    return message;
  },
  toAmino(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_chain = message.hostChain;
    obj.registration_type = iCARegistrationTypeToJSON(message.registrationType);
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainAccountAminoMsg): MsgRegisterInterchainAccount {
    return MsgRegisterInterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RegInterchainAccount",
      value: MsgRegisterInterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterInterchainAccountProtoMsg): MsgRegisterInterchainAccount {
    return MsgRegisterInterchainAccount.decode(message.value);
  },
  toProto(message: MsgRegisterInterchainAccount): Uint8Array {
    return MsgRegisterInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccount",
      value: MsgRegisterInterchainAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterInterchainAccountResponse(): MsgRegisterInterchainAccountResponse {
  return {};
}
export const MsgRegisterInterchainAccountResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccountResponse",
  encode(_: MsgRegisterInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccountResponse();
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
  fromJSON(_: any): MsgRegisterInterchainAccountResponse {
    return {};
  },
  toJSON(_: MsgRegisterInterchainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
  fromAmino(_: MsgRegisterInterchainAccountResponseAmino): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
  toAmino(_: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainAccountResponseAminoMsg): MsgRegisterInterchainAccountResponse {
    return MsgRegisterInterchainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterInterchainAccountResponseProtoMsg): MsgRegisterInterchainAccountResponse {
    return MsgRegisterInterchainAccountResponse.decode(message.value);
  },
  toProto(message: MsgRegisterInterchainAccountResponse): Uint8Array {
    return MsgRegisterInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccountResponse",
      value: MsgRegisterInterchainAccountResponse.encode(message).finish()
    };
  }
};