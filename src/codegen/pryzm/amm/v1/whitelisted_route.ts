import { RouteStep, RouteStepSDKType } from "./route_step";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface WhitelistedRoute {
  steps: RouteStep[];
  enabled: boolean;
}
export interface WhitelistedRouteSDKType {
  steps: RouteStepSDKType[];
  enabled: boolean;
}
function createBaseWhitelistedRoute(): WhitelistedRoute {
  return {
    steps: [],
    enabled: false
  };
}
export const WhitelistedRoute = {
  encode(message: WhitelistedRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.steps) {
      RouteStep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistedRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steps.push(RouteStep.decode(reader, reader.uint32()));
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WhitelistedRoute {
    return {
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => RouteStep.fromJSON(e)) : [],
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: WhitelistedRoute): unknown {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? RouteStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<WhitelistedRoute>): WhitelistedRoute {
    const message = createBaseWhitelistedRoute();
    message.steps = object.steps?.map(e => RouteStep.fromPartial(e)) || [];
    message.enabled = object.enabled ?? false;
    return message;
  }
};