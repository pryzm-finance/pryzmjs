import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface UserStake {
  address: string;
  denom: string;
  bondedAmount: string;
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
  decode(input: BinaryReader | Uint8Array, length?: number): UserStake {
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
  }
};