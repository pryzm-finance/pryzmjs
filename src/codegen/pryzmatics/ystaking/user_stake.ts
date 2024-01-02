import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface UserStake {
  address: string;
  denom: string;
  bondedAmount: string;
}
export interface UserStakeProtoMsg {
  typeUrl: "/pryzmatics.ystaking.UserStake";
  value: Uint8Array;
}
export interface UserStakeAmino {
  address?: string;
  denom?: string;
  bonded_amount?: string;
}
export interface UserStakeAminoMsg {
  type: "/pryzmatics.ystaking.UserStake";
  value: UserStakeAmino;
}
export interface UserStakeSDKType {
  address: string;
  denom: string;
  bonded_amount: string;
}
function createBaseUserStake(): UserStake {
  return {
    address: "",
    denom: "",
    bondedAmount: ""
  };
}
export const UserStake = {
  typeUrl: "/pryzmatics.ystaking.UserStake",
  is(o: any): o is UserStake {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.address === "string" && typeof o.denom === "string" && typeof o.bondedAmount === "string");
  },
  isSDK(o: any): o is UserStakeSDKType {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.address === "string" && typeof o.denom === "string" && typeof o.bonded_amount === "string");
  },
  isAmino(o: any): o is UserStakeAmino {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.address === "string" && typeof o.denom === "string" && typeof o.bonded_amount === "string");
  },
  encode(message: UserStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.bondedAmount !== "") {
      writer.uint32(26).string(message.bondedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.bondedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserStake {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : ""
    };
  },
  toJSON(message: UserStake): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
    return obj;
  },
  fromPartial(object: Partial<UserStake>): UserStake {
    const message = createBaseUserStake();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.bondedAmount = object.bondedAmount ?? "";
    return message;
  },
  fromAmino(object: UserStakeAmino): UserStake {
    const message = createBaseUserStake();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.bonded_amount !== undefined && object.bonded_amount !== null) {
      message.bondedAmount = object.bonded_amount;
    }
    return message;
  },
  toAmino(message: UserStake, useInterfaces: boolean = true): UserStakeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.bonded_amount = message.bondedAmount === "" ? undefined : message.bondedAmount;
    return obj;
  },
  fromAminoMsg(object: UserStakeAminoMsg): UserStake {
    return UserStake.fromAmino(object.value);
  },
  fromProtoMsg(message: UserStakeProtoMsg, useInterfaces: boolean = true): UserStake {
    return UserStake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserStake): Uint8Array {
    return UserStake.encode(message).finish();
  },
  toProtoMsg(message: UserStake): UserStakeProtoMsg {
    return {
      typeUrl: "/pryzmatics.ystaking.UserStake",
      value: UserStake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserStake.typeUrl, UserStake);