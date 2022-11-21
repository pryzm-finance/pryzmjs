/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.ystaking";

export interface UserStakeState {
  bondedAmount: string;
  userIndex: string;
  pendingReward: string;
}

const baseUserStakeState: object = {
  bondedAmount: "",
  userIndex: "",
  pendingReward: "",
};

export const UserStakeState = {
  encode(message: UserStakeState, writer: Writer = Writer.create()): Writer {
    if (message.bondedAmount !== "") {
      writer.uint32(10).string(message.bondedAmount);
    }
    if (message.userIndex !== "") {
      writer.uint32(18).string(message.userIndex);
    }
    if (message.pendingReward !== "") {
      writer.uint32(26).string(message.pendingReward);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserStakeState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserStakeState } as UserStakeState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedAmount = reader.string();
          break;
        case 2:
          message.userIndex = reader.string();
          break;
        case 3:
          message.pendingReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserStakeState {
    const message = { ...baseUserStakeState } as UserStakeState;
    if (object.bondedAmount !== undefined && object.bondedAmount !== null) {
      message.bondedAmount = String(object.bondedAmount);
    } else {
      message.bondedAmount = "";
    }
    if (object.userIndex !== undefined && object.userIndex !== null) {
      message.userIndex = String(object.userIndex);
    } else {
      message.userIndex = "";
    }
    if (object.pendingReward !== undefined && object.pendingReward !== null) {
      message.pendingReward = String(object.pendingReward);
    } else {
      message.pendingReward = "";
    }
    return message;
  },

  toJSON(message: UserStakeState): unknown {
    const obj: any = {};
    message.bondedAmount !== undefined &&
      (obj.bondedAmount = message.bondedAmount);
    message.userIndex !== undefined && (obj.userIndex = message.userIndex);
    message.pendingReward !== undefined &&
      (obj.pendingReward = message.pendingReward);
    return obj;
  },

  fromPartial(object: DeepPartial<UserStakeState>): UserStakeState {
    const message = { ...baseUserStakeState } as UserStakeState;
    if (object.bondedAmount !== undefined && object.bondedAmount !== null) {
      message.bondedAmount = object.bondedAmount;
    } else {
      message.bondedAmount = "";
    }
    if (object.userIndex !== undefined && object.userIndex !== null) {
      message.userIndex = object.userIndex;
    } else {
      message.userIndex = "";
    }
    if (object.pendingReward !== undefined && object.pendingReward !== null) {
      message.pendingReward = object.pendingReward;
    } else {
      message.pendingReward = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
