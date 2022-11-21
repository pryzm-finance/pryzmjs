import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgExchangeRatePreVote } from "./types/oracle/tx";
import { MsgUpdateParams } from "./types/oracle/tx";
import { MsgDelegateFeedConsent } from "./types/oracle/tx";
import { MsgExchangeRateVote } from "./types/oracle/tx";
import { MsgExchangeRateCombinedVote } from "./types/oracle/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.oracle.MsgExchangeRatePreVote", MsgExchangeRatePreVote],
    ["/prismfinance.prismcore.oracle.MsgUpdateParams", MsgUpdateParams],
    ["/prismfinance.prismcore.oracle.MsgDelegateFeedConsent", MsgDelegateFeedConsent],
    ["/prismfinance.prismcore.oracle.MsgExchangeRateVote", MsgExchangeRateVote],
    ["/prismfinance.prismcore.oracle.MsgExchangeRateCombinedVote", MsgExchangeRateCombinedVote],
    
];

export { msgTypes }