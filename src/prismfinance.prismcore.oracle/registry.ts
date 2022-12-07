import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgExchangeRateCombinedVote } from "./types/prismcore/oracle/tx";
import { MsgExchangeRatePreVote } from "./types/prismcore/oracle/tx";
import { MsgUpdateParams } from "./types/prismcore/oracle/tx";
import { MsgExchangeRateVote } from "./types/prismcore/oracle/tx";
import { MsgDelegateFeedConsent } from "./types/prismcore/oracle/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.oracle.MsgExchangeRateCombinedVote", MsgExchangeRateCombinedVote],
    ["/prismfinance.prismcore.oracle.MsgExchangeRatePreVote", MsgExchangeRatePreVote],
    ["/prismfinance.prismcore.oracle.MsgUpdateParams", MsgUpdateParams],
    ["/prismfinance.prismcore.oracle.MsgExchangeRateVote", MsgExchangeRateVote],
    ["/prismfinance.prismcore.oracle.MsgDelegateFeedConsent", MsgDelegateFeedConsent],
    
];

export { msgTypes }