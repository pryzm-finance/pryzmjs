/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.ystaking";

export interface UserStakeState {
  bondedAmount: string;
  userIndex: string;
  pendingReward: string;
}

function createBaseUserStakeState(): UserStakeState {
  return { bondedAmount: "", userIndex: "", pendingReward: "" };
}

export const UserStakeState = {
  encode(message: UserStakeState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UserStakeState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStakeState();
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
    return {
      bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : "",
      userIndex: isSet(object.userIndex) ? String(object.userIndex) : "",
      pendingReward: isSet(object.pendingReward) ? String(object.pendingReward) : "",
    };
  },

  toJSON(message: UserStakeState): unknown {
    const obj: any = {};
    message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
    message.userIndex !== undefined && (obj.userIndex = message.userIndex);
    message.pendingReward !== undefined && (obj.pendingReward = message.pendingReward);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserStakeState>, I>>(object: I): UserStakeState {
    const message = createBaseUserStakeState();
    message.bondedAmount = object.bondedAmount ?? "";
    message.userIndex = object.userIndex ?? "";
    message.pendingReward = object.pendingReward ?? "";
    return message;
  },
};

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
