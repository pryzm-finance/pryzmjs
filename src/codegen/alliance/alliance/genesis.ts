import { AllianceValidatorInfo, AllianceValidatorInfoAmino, AllianceValidatorInfoSDKType, QueuedUndelegation, QueuedUndelegationAmino, QueuedUndelegationSDKType, Delegation, DelegationAmino, DelegationSDKType } from "./delegations";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Redelegation, RedelegationAmino, RedelegationSDKType } from "./redelegations";
import { RewardWeightChangeSnapshot, RewardWeightChangeSnapshotAmino, RewardWeightChangeSnapshotSDKType, AllianceAsset, AllianceAssetAmino, AllianceAssetSDKType } from "./alliance";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface ValidatorInfoState {
  validatorAddress: string;
  validator: AllianceValidatorInfo;
}
export interface ValidatorInfoStateProtoMsg {
  typeUrl: "/alliance.alliance.ValidatorInfoState";
  value: Uint8Array;
}
export interface ValidatorInfoStateAmino {
  validator_address?: string;
  validator?: AllianceValidatorInfoAmino;
}
export interface ValidatorInfoStateAminoMsg {
  type: "/alliance.alliance.ValidatorInfoState";
  value: ValidatorInfoStateAmino;
}
export interface ValidatorInfoStateSDKType {
  validator_address: string;
  validator: AllianceValidatorInfoSDKType;
}
export interface RedelegationState {
  completionTime: Timestamp;
  redelegation: Redelegation;
}
export interface RedelegationStateProtoMsg {
  typeUrl: "/alliance.alliance.RedelegationState";
  value: Uint8Array;
}
export interface RedelegationStateAmino {
  completion_time?: string;
  redelegation?: RedelegationAmino;
}
export interface RedelegationStateAminoMsg {
  type: "/alliance.alliance.RedelegationState";
  value: RedelegationStateAmino;
}
export interface RedelegationStateSDKType {
  completion_time: TimestampSDKType;
  redelegation: RedelegationSDKType;
}
export interface UndelegationState {
  completionTime: Timestamp;
  undelegation: QueuedUndelegation;
}
export interface UndelegationStateProtoMsg {
  typeUrl: "/alliance.alliance.UndelegationState";
  value: Uint8Array;
}
export interface UndelegationStateAmino {
  completion_time?: string;
  undelegation?: QueuedUndelegationAmino;
}
export interface UndelegationStateAminoMsg {
  type: "/alliance.alliance.UndelegationState";
  value: UndelegationStateAmino;
}
export interface UndelegationStateSDKType {
  completion_time: TimestampSDKType;
  undelegation: QueuedUndelegationSDKType;
}
export interface RewardWeightChangeSnapshotState {
  height: bigint;
  validator: string;
  denom: string;
  snapshot: RewardWeightChangeSnapshot;
}
export interface RewardWeightChangeSnapshotStateProtoMsg {
  typeUrl: "/alliance.alliance.RewardWeightChangeSnapshotState";
  value: Uint8Array;
}
export interface RewardWeightChangeSnapshotStateAmino {
  height?: string;
  validator?: string;
  denom?: string;
  snapshot?: RewardWeightChangeSnapshotAmino;
}
export interface RewardWeightChangeSnapshotStateAminoMsg {
  type: "/alliance.alliance.RewardWeightChangeSnapshotState";
  value: RewardWeightChangeSnapshotStateAmino;
}
export interface RewardWeightChangeSnapshotStateSDKType {
  height: bigint;
  validator: string;
  denom: string;
  snapshot: RewardWeightChangeSnapshotSDKType;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params: Params;
  assets: AllianceAsset[];
  validatorInfos: ValidatorInfoState[];
  rewardWeightChangeSnaphots: RewardWeightChangeSnapshotState[];
  delegations: Delegation[];
  redelegations: RedelegationState[];
  undelegations: UndelegationState[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/alliance.alliance.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  assets?: AllianceAssetAmino[];
  validator_infos?: ValidatorInfoStateAmino[];
  reward_weight_change_snaphots?: RewardWeightChangeSnapshotStateAmino[];
  delegations?: DelegationAmino[];
  redelegations?: RedelegationStateAmino[];
  undelegations?: UndelegationStateAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/alliance.alliance.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  assets: AllianceAssetSDKType[];
  validator_infos: ValidatorInfoStateSDKType[];
  reward_weight_change_snaphots: RewardWeightChangeSnapshotStateSDKType[];
  delegations: DelegationSDKType[];
  redelegations: RedelegationStateSDKType[];
  undelegations: UndelegationStateSDKType[];
}
function createBaseValidatorInfoState(): ValidatorInfoState {
  return {
    validatorAddress: "",
    validator: AllianceValidatorInfo.fromPartial({})
  };
}
export const ValidatorInfoState = {
  typeUrl: "/alliance.alliance.ValidatorInfoState",
  is(o: any): o is ValidatorInfoState {
    return o && (o.$typeUrl === ValidatorInfoState.typeUrl || typeof o.validatorAddress === "string" && AllianceValidatorInfo.is(o.validator));
  },
  isSDK(o: any): o is ValidatorInfoStateSDKType {
    return o && (o.$typeUrl === ValidatorInfoState.typeUrl || typeof o.validator_address === "string" && AllianceValidatorInfo.isSDK(o.validator));
  },
  isAmino(o: any): o is ValidatorInfoStateAmino {
    return o && (o.$typeUrl === ValidatorInfoState.typeUrl || typeof o.validator_address === "string" && AllianceValidatorInfo.isAmino(o.validator));
  },
  encode(message: ValidatorInfoState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.validator !== undefined) {
      AllianceValidatorInfo.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorInfoState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorInfoState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.validator = AllianceValidatorInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorInfoState {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      validator: isSet(object.validator) ? AllianceValidatorInfo.fromJSON(object.validator) : undefined
    };
  },
  toJSON(message: ValidatorInfoState): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.validator !== undefined && (obj.validator = message.validator ? AllianceValidatorInfo.toJSON(message.validator) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ValidatorInfoState>): ValidatorInfoState {
    const message = createBaseValidatorInfoState();
    message.validatorAddress = object.validatorAddress ?? "";
    message.validator = object.validator !== undefined && object.validator !== null ? AllianceValidatorInfo.fromPartial(object.validator) : undefined;
    return message;
  },
  fromAmino(object: ValidatorInfoStateAmino): ValidatorInfoState {
    const message = createBaseValidatorInfoState();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = AllianceValidatorInfo.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message: ValidatorInfoState, useInterfaces: boolean = true): ValidatorInfoStateAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.validator = message.validator ? AllianceValidatorInfo.toAmino(message.validator, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorInfoStateAminoMsg): ValidatorInfoState {
    return ValidatorInfoState.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorInfoStateProtoMsg, useInterfaces: boolean = true): ValidatorInfoState {
    return ValidatorInfoState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorInfoState): Uint8Array {
    return ValidatorInfoState.encode(message).finish();
  },
  toProtoMsg(message: ValidatorInfoState): ValidatorInfoStateProtoMsg {
    return {
      typeUrl: "/alliance.alliance.ValidatorInfoState",
      value: ValidatorInfoState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorInfoState.typeUrl, ValidatorInfoState);
function createBaseRedelegationState(): RedelegationState {
  return {
    completionTime: Timestamp.fromPartial({}),
    redelegation: Redelegation.fromPartial({})
  };
}
export const RedelegationState = {
  typeUrl: "/alliance.alliance.RedelegationState",
  is(o: any): o is RedelegationState {
    return o && (o.$typeUrl === RedelegationState.typeUrl || Timestamp.is(o.completionTime) && Redelegation.is(o.redelegation));
  },
  isSDK(o: any): o is RedelegationStateSDKType {
    return o && (o.$typeUrl === RedelegationState.typeUrl || Timestamp.isSDK(o.completion_time) && Redelegation.isSDK(o.redelegation));
  },
  isAmino(o: any): o is RedelegationStateAmino {
    return o && (o.$typeUrl === RedelegationState.typeUrl || Timestamp.isAmino(o.completion_time) && Redelegation.isAmino(o.redelegation));
  },
  encode(message: RedelegationState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RedelegationState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.redelegation = Redelegation.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationState {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined
    };
  },
  toJSON(message: RedelegationState): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.redelegation !== undefined && (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
    return obj;
  },
  fromPartial(object: Partial<RedelegationState>): RedelegationState {
    const message = createBaseRedelegationState();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
    return message;
  },
  fromAmino(object: RedelegationStateAmino): RedelegationState {
    const message = createBaseRedelegationState();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.redelegation !== undefined && object.redelegation !== null) {
      message.redelegation = Redelegation.fromAmino(object.redelegation);
    }
    return message;
  },
  toAmino(message: RedelegationState, useInterfaces: boolean = true): RedelegationStateAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    obj.redelegation = message.redelegation ? Redelegation.toAmino(message.redelegation, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: RedelegationStateAminoMsg): RedelegationState {
    return RedelegationState.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegationStateProtoMsg, useInterfaces: boolean = true): RedelegationState {
    return RedelegationState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RedelegationState): Uint8Array {
    return RedelegationState.encode(message).finish();
  },
  toProtoMsg(message: RedelegationState): RedelegationStateProtoMsg {
    return {
      typeUrl: "/alliance.alliance.RedelegationState",
      value: RedelegationState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RedelegationState.typeUrl, RedelegationState);
function createBaseUndelegationState(): UndelegationState {
  return {
    completionTime: Timestamp.fromPartial({}),
    undelegation: QueuedUndelegation.fromPartial({})
  };
}
export const UndelegationState = {
  typeUrl: "/alliance.alliance.UndelegationState",
  is(o: any): o is UndelegationState {
    return o && (o.$typeUrl === UndelegationState.typeUrl || Timestamp.is(o.completionTime) && QueuedUndelegation.is(o.undelegation));
  },
  isSDK(o: any): o is UndelegationStateSDKType {
    return o && (o.$typeUrl === UndelegationState.typeUrl || Timestamp.isSDK(o.completion_time) && QueuedUndelegation.isSDK(o.undelegation));
  },
  isAmino(o: any): o is UndelegationStateAmino {
    return o && (o.$typeUrl === UndelegationState.typeUrl || Timestamp.isAmino(o.completion_time) && QueuedUndelegation.isAmino(o.undelegation));
  },
  encode(message: UndelegationState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.undelegation !== undefined) {
      QueuedUndelegation.encode(message.undelegation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UndelegationState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegationState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.undelegation = QueuedUndelegation.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndelegationState {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      undelegation: isSet(object.undelegation) ? QueuedUndelegation.fromJSON(object.undelegation) : undefined
    };
  },
  toJSON(message: UndelegationState): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.undelegation !== undefined && (obj.undelegation = message.undelegation ? QueuedUndelegation.toJSON(message.undelegation) : undefined);
    return obj;
  },
  fromPartial(object: Partial<UndelegationState>): UndelegationState {
    const message = createBaseUndelegationState();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.undelegation = object.undelegation !== undefined && object.undelegation !== null ? QueuedUndelegation.fromPartial(object.undelegation) : undefined;
    return message;
  },
  fromAmino(object: UndelegationStateAmino): UndelegationState {
    const message = createBaseUndelegationState();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.undelegation !== undefined && object.undelegation !== null) {
      message.undelegation = QueuedUndelegation.fromAmino(object.undelegation);
    }
    return message;
  },
  toAmino(message: UndelegationState, useInterfaces: boolean = true): UndelegationStateAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    obj.undelegation = message.undelegation ? QueuedUndelegation.toAmino(message.undelegation, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: UndelegationStateAminoMsg): UndelegationState {
    return UndelegationState.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegationStateProtoMsg, useInterfaces: boolean = true): UndelegationState {
    return UndelegationState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UndelegationState): Uint8Array {
    return UndelegationState.encode(message).finish();
  },
  toProtoMsg(message: UndelegationState): UndelegationStateProtoMsg {
    return {
      typeUrl: "/alliance.alliance.UndelegationState",
      value: UndelegationState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UndelegationState.typeUrl, UndelegationState);
function createBaseRewardWeightChangeSnapshotState(): RewardWeightChangeSnapshotState {
  return {
    height: BigInt(0),
    validator: "",
    denom: "",
    snapshot: RewardWeightChangeSnapshot.fromPartial({})
  };
}
export const RewardWeightChangeSnapshotState = {
  typeUrl: "/alliance.alliance.RewardWeightChangeSnapshotState",
  is(o: any): o is RewardWeightChangeSnapshotState {
    return o && (o.$typeUrl === RewardWeightChangeSnapshotState.typeUrl || typeof o.height === "bigint" && typeof o.validator === "string" && typeof o.denom === "string" && RewardWeightChangeSnapshot.is(o.snapshot));
  },
  isSDK(o: any): o is RewardWeightChangeSnapshotStateSDKType {
    return o && (o.$typeUrl === RewardWeightChangeSnapshotState.typeUrl || typeof o.height === "bigint" && typeof o.validator === "string" && typeof o.denom === "string" && RewardWeightChangeSnapshot.isSDK(o.snapshot));
  },
  isAmino(o: any): o is RewardWeightChangeSnapshotStateAmino {
    return o && (o.$typeUrl === RewardWeightChangeSnapshotState.typeUrl || typeof o.height === "bigint" && typeof o.validator === "string" && typeof o.denom === "string" && RewardWeightChangeSnapshot.isAmino(o.snapshot));
  },
  encode(message: RewardWeightChangeSnapshotState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.snapshot !== undefined) {
      RewardWeightChangeSnapshot.encode(message.snapshot, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RewardWeightChangeSnapshotState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardWeightChangeSnapshotState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.snapshot = RewardWeightChangeSnapshot.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardWeightChangeSnapshotState {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      validator: isSet(object.validator) ? String(object.validator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      snapshot: isSet(object.snapshot) ? RewardWeightChangeSnapshot.fromJSON(object.snapshot) : undefined
    };
  },
  toJSON(message: RewardWeightChangeSnapshotState): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.validator !== undefined && (obj.validator = message.validator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.snapshot !== undefined && (obj.snapshot = message.snapshot ? RewardWeightChangeSnapshot.toJSON(message.snapshot) : undefined);
    return obj;
  },
  fromPartial(object: Partial<RewardWeightChangeSnapshotState>): RewardWeightChangeSnapshotState {
    const message = createBaseRewardWeightChangeSnapshotState();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.validator = object.validator ?? "";
    message.denom = object.denom ?? "";
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? RewardWeightChangeSnapshot.fromPartial(object.snapshot) : undefined;
    return message;
  },
  fromAmino(object: RewardWeightChangeSnapshotStateAmino): RewardWeightChangeSnapshotState {
    const message = createBaseRewardWeightChangeSnapshotState();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = RewardWeightChangeSnapshot.fromAmino(object.snapshot);
    }
    return message;
  },
  toAmino(message: RewardWeightChangeSnapshotState, useInterfaces: boolean = true): RewardWeightChangeSnapshotStateAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.snapshot = message.snapshot ? RewardWeightChangeSnapshot.toAmino(message.snapshot, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardWeightChangeSnapshotStateAminoMsg): RewardWeightChangeSnapshotState {
    return RewardWeightChangeSnapshotState.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardWeightChangeSnapshotStateProtoMsg, useInterfaces: boolean = true): RewardWeightChangeSnapshotState {
    return RewardWeightChangeSnapshotState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RewardWeightChangeSnapshotState): Uint8Array {
    return RewardWeightChangeSnapshotState.encode(message).finish();
  },
  toProtoMsg(message: RewardWeightChangeSnapshotState): RewardWeightChangeSnapshotStateProtoMsg {
    return {
      typeUrl: "/alliance.alliance.RewardWeightChangeSnapshotState",
      value: RewardWeightChangeSnapshotState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardWeightChangeSnapshotState.typeUrl, RewardWeightChangeSnapshotState);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    assets: [],
    validatorInfos: [],
    rewardWeightChangeSnaphots: [],
    delegations: [],
    redelegations: [],
    undelegations: []
  };
}
export const GenesisState = {
  typeUrl: "/alliance.alliance.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.assets) && (!o.assets.length || AllianceAsset.is(o.assets[0])) && Array.isArray(o.validatorInfos) && (!o.validatorInfos.length || ValidatorInfoState.is(o.validatorInfos[0])) && Array.isArray(o.rewardWeightChangeSnaphots) && (!o.rewardWeightChangeSnaphots.length || RewardWeightChangeSnapshotState.is(o.rewardWeightChangeSnaphots[0])) && Array.isArray(o.delegations) && (!o.delegations.length || Delegation.is(o.delegations[0])) && Array.isArray(o.redelegations) && (!o.redelegations.length || RedelegationState.is(o.redelegations[0])) && Array.isArray(o.undelegations) && (!o.undelegations.length || UndelegationState.is(o.undelegations[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.assets) && (!o.assets.length || AllianceAsset.isSDK(o.assets[0])) && Array.isArray(o.validator_infos) && (!o.validator_infos.length || ValidatorInfoState.isSDK(o.validator_infos[0])) && Array.isArray(o.reward_weight_change_snaphots) && (!o.reward_weight_change_snaphots.length || RewardWeightChangeSnapshotState.isSDK(o.reward_weight_change_snaphots[0])) && Array.isArray(o.delegations) && (!o.delegations.length || Delegation.isSDK(o.delegations[0])) && Array.isArray(o.redelegations) && (!o.redelegations.length || RedelegationState.isSDK(o.redelegations[0])) && Array.isArray(o.undelegations) && (!o.undelegations.length || UndelegationState.isSDK(o.undelegations[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.assets) && (!o.assets.length || AllianceAsset.isAmino(o.assets[0])) && Array.isArray(o.validator_infos) && (!o.validator_infos.length || ValidatorInfoState.isAmino(o.validator_infos[0])) && Array.isArray(o.reward_weight_change_snaphots) && (!o.reward_weight_change_snaphots.length || RewardWeightChangeSnapshotState.isAmino(o.reward_weight_change_snaphots[0])) && Array.isArray(o.delegations) && (!o.delegations.length || Delegation.isAmino(o.delegations[0])) && Array.isArray(o.redelegations) && (!o.redelegations.length || RedelegationState.isAmino(o.redelegations[0])) && Array.isArray(o.undelegations) && (!o.undelegations.length || UndelegationState.isAmino(o.undelegations[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.assets) {
      AllianceAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorInfos) {
      ValidatorInfoState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.rewardWeightChangeSnaphots) {
      RewardWeightChangeSnapshotState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      RedelegationState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.undelegations) {
      UndelegationState.encode(v!, writer.uint32(58).fork()).ldelim();
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
        case 2:
          message.assets.push(AllianceAsset.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.validatorInfos.push(ValidatorInfoState.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.rewardWeightChangeSnaphots.push(RewardWeightChangeSnapshotState.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.redelegations.push(RedelegationState.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.undelegations.push(UndelegationState.decode(reader, reader.uint32(), useInterfaces));
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
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => AllianceAsset.fromJSON(e)) : [],
      validatorInfos: Array.isArray(object?.validatorInfos) ? object.validatorInfos.map((e: any) => ValidatorInfoState.fromJSON(e)) : [],
      rewardWeightChangeSnaphots: Array.isArray(object?.rewardWeightChangeSnaphots) ? object.rewardWeightChangeSnaphots.map((e: any) => RewardWeightChangeSnapshotState.fromJSON(e)) : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => RedelegationState.fromJSON(e)) : [],
      undelegations: Array.isArray(object?.undelegations) ? object.undelegations.map((e: any) => UndelegationState.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? AllianceAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    if (message.validatorInfos) {
      obj.validatorInfos = message.validatorInfos.map(e => e ? ValidatorInfoState.toJSON(e) : undefined);
    } else {
      obj.validatorInfos = [];
    }
    if (message.rewardWeightChangeSnaphots) {
      obj.rewardWeightChangeSnaphots = message.rewardWeightChangeSnaphots.map(e => e ? RewardWeightChangeSnapshotState.toJSON(e) : undefined);
    } else {
      obj.rewardWeightChangeSnaphots = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationState.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    if (message.undelegations) {
      obj.undelegations = message.undelegations.map(e => e ? UndelegationState.toJSON(e) : undefined);
    } else {
      obj.undelegations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.assets = object.assets?.map(e => AllianceAsset.fromPartial(e)) || [];
    message.validatorInfos = object.validatorInfos?.map(e => ValidatorInfoState.fromPartial(e)) || [];
    message.rewardWeightChangeSnaphots = object.rewardWeightChangeSnaphots?.map(e => RewardWeightChangeSnapshotState.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map(e => RedelegationState.fromPartial(e)) || [];
    message.undelegations = object.undelegations?.map(e => UndelegationState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.assets = object.assets?.map(e => AllianceAsset.fromAmino(e)) || [];
    message.validatorInfos = object.validator_infos?.map(e => ValidatorInfoState.fromAmino(e)) || [];
    message.rewardWeightChangeSnaphots = object.reward_weight_change_snaphots?.map(e => RewardWeightChangeSnapshotState.fromAmino(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    message.redelegations = object.redelegations?.map(e => RedelegationState.fromAmino(e)) || [];
    message.undelegations = object.undelegations?.map(e => UndelegationState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? AllianceAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.assets = message.assets;
    }
    if (message.validatorInfos) {
      obj.validator_infos = message.validatorInfos.map(e => e ? ValidatorInfoState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_infos = message.validatorInfos;
    }
    if (message.rewardWeightChangeSnaphots) {
      obj.reward_weight_change_snaphots = message.rewardWeightChangeSnaphots.map(e => e ? RewardWeightChangeSnapshotState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.reward_weight_change_snaphots = message.rewardWeightChangeSnaphots;
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.redelegations = message.redelegations;
    }
    if (message.undelegations) {
      obj.undelegations = message.undelegations.map(e => e ? UndelegationState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.undelegations = message.undelegations;
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
      typeUrl: "/alliance.alliance.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);