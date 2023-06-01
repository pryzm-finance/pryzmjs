//@ts-nocheck
import { actionTypeFromJSON } from "./action";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgUpdateParams, MsgSetAction } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.treasury.MsgUpdateParams";
  value: {
    authority: string;
    params: {};
  };
}
export interface MsgSetActionAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.treasury.MsgSetAction";
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
      stream_swap_settings: {
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
  "/prismfinance.prismcore.treasury.MsgUpdateParams": {
    aminoType: "/prismfinance.prismcore.treasury.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {}
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {}
      };
    }
  },
  "/prismfinance.prismcore.treasury.MsgSetAction": {
    aminoType: "/prismfinance.prismcore.treasury.MsgSetAction",
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
          stream_swap_settings: {
            start_delay: (action.streamSwapSettings.startDelay * 1_000_000_000).toString(),
            duration: (action.streamSwapSettings.duration * 1_000_000_000).toString(),
            dist_interval: (action.streamSwapSettings.distInterval * 1_000_000_000).toString()
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
            seconds: Long.fromNumber(Math.floor(parseInt(action.period) / 1_000_000_000)),
            nanos: parseInt(action.period) % 1_000_000_000
          },
          streamSwapSettings: {
            startDelay: {
              seconds: Long.fromNumber(Math.floor(parseInt(action.stream_swap_settings.start_delay) / 1_000_000_000)),
              nanos: parseInt(action.stream_swap_settings.start_delay) % 1_000_000_000
            },
            duration: {
              seconds: Long.fromNumber(Math.floor(parseInt(action.stream_swap_settings.duration) / 1_000_000_000)),
              nanos: parseInt(action.stream_swap_settings.duration) % 1_000_000_000
            },
            distInterval: {
              seconds: Long.fromNumber(Math.floor(parseInt(action.stream_swap_settings.dist_interval) / 1_000_000_000)),
              nanos: parseInt(action.stream_swap_settings.dist_interval) % 1_000_000_000
            }
          }
        }
      };
    }
  }
};