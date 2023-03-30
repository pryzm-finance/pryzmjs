import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateConnection } from "./types/bridge/bridge/tx";
import { MsgCloseConnection } from "./types/bridge/bridge/tx";
import { MsgWhitelistProcessors } from "./types/bridge/bridge/tx";
import { MsgRetryMessage } from "./types/bridge/bridge/tx";
import { MsgDelistWatchers } from "./types/bridge/bridge/tx";
import { MsgPing } from "./types/bridge/bridge/tx";
import { MsgDelegateWatchConsent } from "./types/bridge/bridge/tx";
import { MsgDelegateProcessConsent } from "./types/bridge/bridge/tx";
import { MsgDelistProcessors } from "./types/bridge/bridge/tx";
import { MsgUpdateParams } from "./types/bridge/bridge/tx";
import { MsgDelegateRelayConsent } from "./types/bridge/bridge/tx";
import { MsgWhitelistRelayers } from "./types/bridge/bridge/tx";
import { MsgWhitelistWatchers } from "./types/bridge/bridge/tx";
import { MsgDelistRelayers } from "./types/bridge/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/refractedlabs.bridge.bridge.MsgCreateConnection", MsgCreateConnection],
    ["/refractedlabs.bridge.bridge.MsgCloseConnection", MsgCloseConnection],
    ["/refractedlabs.bridge.bridge.MsgWhitelistProcessors", MsgWhitelistProcessors],
    ["/refractedlabs.bridge.bridge.MsgRetryMessage", MsgRetryMessage],
    ["/refractedlabs.bridge.bridge.MsgDelistWatchers", MsgDelistWatchers],
    ["/refractedlabs.bridge.bridge.MsgPing", MsgPing],
    ["/refractedlabs.bridge.bridge.MsgDelegateWatchConsent", MsgDelegateWatchConsent],
    ["/refractedlabs.bridge.bridge.MsgDelegateProcessConsent", MsgDelegateProcessConsent],
    ["/refractedlabs.bridge.bridge.MsgDelistProcessors", MsgDelistProcessors],
    ["/refractedlabs.bridge.bridge.MsgUpdateParams", MsgUpdateParams],
    ["/refractedlabs.bridge.bridge.MsgDelegateRelayConsent", MsgDelegateRelayConsent],
    ["/refractedlabs.bridge.bridge.MsgWhitelistRelayers", MsgWhitelistRelayers],
    ["/refractedlabs.bridge.bridge.MsgWhitelistWatchers", MsgWhitelistWatchers],
    ["/refractedlabs.bridge.bridge.MsgDelistRelayers", MsgDelistRelayers],
    
];

export { msgTypes }