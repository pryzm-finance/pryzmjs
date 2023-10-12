import { UserStake, UserStakeSDKType } from "../../ystaking/user_stake";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryUserStakesRequest {
  address: string;
  denom: string;
}
export interface QueryUserStakesRequestSDKType {
  address: string;
  denom: string;
}
export interface QueryUserStakesResponse {
  userStakes: UserStake[];
}
export interface QueryUserStakesResponseSDKType {
  user_stakes: UserStakeSDKType[];
}
function createBaseQueryUserStakesRequest(): QueryUserStakesRequest {
  return {
    address: "",
    denom: ""
  };
}
export const QueryUserStakesRequest = {
  encode(message: QueryUserStakesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserStakesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserStakesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserStakesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryUserStakesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryUserStakesRequest>): QueryUserStakesRequest {
    const message = createBaseQueryUserStakesRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryUserStakesResponse(): QueryUserStakesResponse {
  return {
    userStakes: []
  };
}
export const QueryUserStakesResponse = {
  encode(message: QueryUserStakesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userStakes) {
      UserStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserStakesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserStakesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userStakes.push(UserStake.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserStakesResponse {
    return {
      userStakes: Array.isArray(object?.userStakes) ? object.userStakes.map((e: any) => UserStake.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryUserStakesResponse): unknown {
    const obj: any = {};
    if (message.userStakes) {
      obj.userStakes = message.userStakes.map(e => e ? UserStake.toJSON(e) : undefined);
    } else {
      obj.userStakes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryUserStakesResponse>): QueryUserStakesResponse {
    const message = createBaseQueryUserStakesResponse();
    message.userStakes = object.userStakes?.map(e => UserStake.fromPartial(e)) || [];
    return message;
  }
};