import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface UserStakeState {
  address: string;
  assetId: string;
  maturitySymbol: string;
  bondedAmount: string;
  userIndex: string;
  pendingReward: string;
}
export interface UserStakeStateSDKType {
  address: string;
  asset_id: string;
  maturity_symbol: string;
  bonded_amount: string;
  user_index: string;
  pending_reward: string;
}
function createBaseUserStakeState(): UserStakeState {
  return {
    address: "",
    assetId: "",
    maturitySymbol: "",
    bondedAmount: "",
    userIndex: "",
    pendingReward: ""
  };
}
export const UserStakeState = {
  encode(message: UserStakeState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    if (message.bondedAmount !== "") {
      writer.uint32(34).string(message.bondedAmount);
    }
    if (message.userIndex !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.userIndex, 18).atomics);
    }
    if (message.pendingReward !== "") {
      writer.uint32(50).string(message.pendingReward);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserStakeState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStakeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.maturitySymbol = reader.string();
          break;
        case 4:
          message.bondedAmount = reader.string();
          break;
        case 5:
          message.userIndex = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
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
      address: isSet(object.address) ? String(object.address) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : "",
      bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : "",
      userIndex: isSet(object.userIndex) ? String(object.userIndex) : "",
      pendingReward: isSet(object.pendingReward) ? String(object.pendingReward) : ""
    };
  },
  toJSON(message: UserStakeState): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
    message.userIndex !== undefined && (obj.userIndex = message.userIndex);
    message.pendingReward !== undefined && (obj.pendingReward = message.pendingReward);
    return obj;
  },
  fromPartial(object: Partial<UserStakeState>): UserStakeState {
    const message = createBaseUserStakeState();
    message.address = object.address ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    message.bondedAmount = object.bondedAmount ?? "";
    message.userIndex = object.userIndex ?? "";
    message.pendingReward = object.pendingReward ?? "";
    return message;
  }
};