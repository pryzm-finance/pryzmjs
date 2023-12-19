import { UserStake, UserStakeAmino, UserStakeSDKType } from "../../ystaking/user_stake";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryUserStakesRequest {
  address: string;
  denom: string;
}
export interface QueryUserStakesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesRequest";
  value: Uint8Array;
}
export interface QueryUserStakesRequestAmino {
  address?: string;
  denom?: string;
}
export interface QueryUserStakesRequestAminoMsg {
  type: "/pryzmatics.server.ystaking.QueryUserStakesRequest";
  value: QueryUserStakesRequestAmino;
}
export interface QueryUserStakesRequestSDKType {
  address: string;
  denom: string;
}
export interface QueryUserStakesResponse {
  userStakes: UserStake[];
}
export interface QueryUserStakesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesResponse";
  value: Uint8Array;
}
export interface QueryUserStakesResponseAmino {
  user_stakes?: UserStakeAmino[];
}
export interface QueryUserStakesResponseAminoMsg {
  type: "/pryzmatics.server.ystaking.QueryUserStakesResponse";
  value: QueryUserStakesResponseAmino;
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
  typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesRequest",
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
  },
  fromAmino(object: QueryUserStakesRequestAmino): QueryUserStakesRequest {
    const message = createBaseQueryUserStakesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryUserStakesRequest): QueryUserStakesRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryUserStakesRequestAminoMsg): QueryUserStakesRequest {
    return QueryUserStakesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserStakesRequestProtoMsg): QueryUserStakesRequest {
    return QueryUserStakesRequest.decode(message.value);
  },
  toProto(message: QueryUserStakesRequest): Uint8Array {
    return QueryUserStakesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserStakesRequest): QueryUserStakesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesRequest",
      value: QueryUserStakesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserStakesResponse(): QueryUserStakesResponse {
  return {
    userStakes: []
  };
}
export const QueryUserStakesResponse = {
  typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesResponse",
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
  },
  fromAmino(object: QueryUserStakesResponseAmino): QueryUserStakesResponse {
    const message = createBaseQueryUserStakesResponse();
    message.userStakes = object.user_stakes?.map(e => UserStake.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUserStakesResponse): QueryUserStakesResponseAmino {
    const obj: any = {};
    if (message.userStakes) {
      obj.user_stakes = message.userStakes.map(e => e ? UserStake.toAmino(e) : undefined);
    } else {
      obj.user_stakes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryUserStakesResponseAminoMsg): QueryUserStakesResponse {
    return QueryUserStakesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserStakesResponseProtoMsg): QueryUserStakesResponse {
    return QueryUserStakesResponse.decode(message.value);
  },
  toProto(message: QueryUserStakesResponse): Uint8Array {
    return QueryUserStakesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserStakesResponse): QueryUserStakesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesResponse",
      value: QueryUserStakesResponse.encode(message).finish()
    };
  }
};