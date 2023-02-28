import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgWhitelistProcessors } from "./types/bridge/bridge/tx";
import { MsgDelistWatchers } from "./types/bridge/bridge/tx";
import { MsgCreateConnection } from "./types/bridge/bridge/tx";
import { MsgWhitelistWatchers } from "./types/bridge/bridge/tx";
import { MsgWhitelistRelayers } from "./types/bridge/bridge/tx";
import { MsgDelistRelayers } from "./types/bridge/bridge/tx";
import { MsgDelegateRelayConsent } from "./types/bridge/bridge/tx";
import { MsgDelegateProcessConsent } from "./types/bridge/bridge/tx";
import { MsgRetryMessage } from "./types/bridge/bridge/tx";
import { MsgCloseConnection } from "./types/bridge/bridge/tx";
import { MsgDelistProcessors } from "./types/bridge/bridge/tx";
import { MsgDelegateWatchConsent } from "./types/bridge/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/refractedlabs.bridge.bridge.MsgWhitelistProcessors", MsgWhitelistProcessors],
    ["/refractedlabs.bridge.bridge.MsgDelistWatchers", MsgDelistWatchers],
    ["/refractedlabs.bridge.bridge.MsgCreateConnection", MsgCreateConnection],
    ["/refractedlabs.bridge.bridge.MsgWhitelistWatchers", MsgWhitelistWatchers],
    ["/refractedlabs.bridge.bridge.MsgWhitelistRelayers", MsgWhitelistRelayers],
    ["/refractedlabs.bridge.bridge.MsgDelistRelayers", MsgDelistRelayers],
    ["/refractedlabs.bridge.bridge.MsgDelegateRelayConsent", MsgDelegateRelayConsent],
    ["/refractedlabs.bridge.bridge.MsgDelegateProcessConsent", MsgDelegateProcessConsent],
    ["/refractedlabs.bridge.bridge.MsgRetryMessage", MsgRetryMessage],
    ["/refractedlabs.bridge.bridge.MsgCloseConnection", MsgCloseConnection],
    ["/refractedlabs.bridge.bridge.MsgDelistProcessors", MsgDelistProcessors],
    ["/refractedlabs.bridge.bridge.MsgDelegateWatchConsent", MsgDelegateWatchConsent],
    
];

export { msgTypes }