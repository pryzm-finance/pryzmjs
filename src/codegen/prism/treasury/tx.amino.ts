//@ts-nocheck
import { actionTypeFromJSON } from "./action";
import { AminoMsg } from "@cosmjs/amino";
import { MsgSetAction } from "./tx";
export interface MsgSetActionAminoType extends AminoMsg {
  type: "/prism.treasury.MsgSetAction";
  value: {
    authority: string;
    action: {
      action_type: number;
      occurrence: {
        seconds: string;
        nanos: number;
      };
      expiration: {
        seconds: string;
        nanos: number;
      };
      period: {
        seconds: string;
        nanos: number;
      };
      flow_trade_settings: {
        start_delay: {
          seconds: string;
          nanos: number;
        };
        duration: {
          seconds: string;
          nanos: number;
        };
        dist_interval: {
          seconds: string;
          nanos: number;
        };
      };
    };
  };
}
export const AminoConverter = {
  "/prism.treasury.MsgSetAction": {
    aminoType: "/prism.treasury.MsgSetAction",
    toAmino: ({
      authority,
      action
    }: MsgSetAction): MsgSetActionAminoType["value"] => {
      return {
        authority,
        action: {
          action_type: action.actionType,
          occurrence: action.occurrence,
          expiration: action.expiration,
          period: (action.period * 1_000_000_000).toString(),
          flow_trade_settings: {
            start_delay: (action.flowTradeSettings.startDelay * 1_000_000_000).toString(),
            duration: (action.flowTradeSettings.duration * 1_000_000_000).toString(),
            dist_interval: (action.flowTradeSettings.distInterval * 1_000_000_000).toString()
          }
        }
      };
    },
    fromAmino: ({
      authority,
      action
    }: MsgSetActionAminoType["value"]): MsgSetAction => {
      return {
        authority,
        action: {
          actionType: actionTypeFromJSON(action.action_type),
          occurrence: action.occurrence,
          expiration: action.expiration,
          period: {
            seconds: BigInt(Math.floor(parseInt(action.period) / 1_000_000_000)),
            nanos: parseInt(action.period) % 1_000_000_000
          },
          flowTradeSettings: {
            startDelay: {
              seconds: BigInt(Math.floor(parseInt(action.flow_trade_settings.start_delay) / 1_000_000_000)),
              nanos: parseInt(action.flow_trade_settings.start_delay) % 1_000_000_000
            },
            duration: {
              seconds: BigInt(Math.floor(parseInt(action.flow_trade_settings.duration) / 1_000_000_000)),
              nanos: parseInt(action.flow_trade_settings.duration) % 1_000_000_000
            },
            distInterval: {
              seconds: BigInt(Math.floor(parseInt(action.flow_trade_settings.dist_interval) / 1_000_000_000)),
              nanos: parseInt(action.flow_trade_settings.dist_interval) % 1_000_000_000
            }
          }
        }
      };
    }
  }
};