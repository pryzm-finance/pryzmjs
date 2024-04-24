import { RouteStep, RouteStepAmino, RouteStepSDKType } from "../../pryzm/amm/v1/route_step";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface RouteSteps {
  steps: RouteStep[];
}
export interface RouteStepsProtoMsg {
  typeUrl: "/pryzmatics.trade.RouteSteps";
  value: Uint8Array;
}
export interface RouteStepsAmino {
  steps?: RouteStepAmino[];
}
export interface RouteStepsAminoMsg {
  type: "/pryzmatics.trade.RouteSteps";
  value: RouteStepsAmino;
}
export interface RouteStepsSDKType {
  steps: RouteStepSDKType[];
}
function createBaseRouteSteps(): RouteSteps {
  return {
    steps: []
  };
}
export const RouteSteps = {
  typeUrl: "/pryzmatics.trade.RouteSteps",
  is(o: any): o is RouteSteps {
    return o && (o.$typeUrl === RouteSteps.typeUrl || Array.isArray(o.steps) && (!o.steps.length || RouteStep.is(o.steps[0])));
  },
  isSDK(o: any): o is RouteStepsSDKType {
    return o && (o.$typeUrl === RouteSteps.typeUrl || Array.isArray(o.steps) && (!o.steps.length || RouteStep.isSDK(o.steps[0])));
  },
  isAmino(o: any): o is RouteStepsAmino {
    return o && (o.$typeUrl === RouteSteps.typeUrl || Array.isArray(o.steps) && (!o.steps.length || RouteStep.isAmino(o.steps[0])));
  },
  encode(message: RouteSteps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.steps) {
      RouteStep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RouteSteps {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteSteps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steps.push(RouteStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RouteSteps {
    return {
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => RouteStep.fromJSON(e)) : []
    };
  },
  toJSON(message: RouteSteps): unknown {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? RouteStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<RouteSteps>): RouteSteps {
    const message = createBaseRouteSteps();
    message.steps = object.steps?.map(e => RouteStep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RouteStepsAmino): RouteSteps {
    const message = createBaseRouteSteps();
    message.steps = object.steps?.map(e => RouteStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RouteSteps, useInterfaces: boolean = true): RouteStepsAmino {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? RouteStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    return obj;
  },
  fromAminoMsg(object: RouteStepsAminoMsg): RouteSteps {
    return RouteSteps.fromAmino(object.value);
  },
  fromProtoMsg(message: RouteStepsProtoMsg, useInterfaces: boolean = true): RouteSteps {
    return RouteSteps.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RouteSteps): Uint8Array {
    return RouteSteps.encode(message).finish();
  },
  toProtoMsg(message: RouteSteps): RouteStepsProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.RouteSteps",
      value: RouteSteps.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RouteSteps.typeUrl, RouteSteps);