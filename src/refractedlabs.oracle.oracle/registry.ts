import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgOracleVote } from "./types/oracle/oracle/tx";
import { MsgUpdateParams } from "./types/oracle/oracle/tx";
import { MsgOracleCombinedVote } from "./types/oracle/oracle/tx";
import { MsgOraclePreVote } from "./types/oracle/oracle/tx";
import { MsgDelegateFeedConsent } from "./types/oracle/oracle/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/refractedlabs.oracle.oracle.MsgOracleVote", MsgOracleVote],
    ["/refractedlabs.oracle.oracle.MsgUpdateParams", MsgUpdateParams],
    ["/refractedlabs.oracle.oracle.MsgOracleCombinedVote", MsgOracleCombinedVote],
    ["/refractedlabs.oracle.oracle.MsgOraclePreVote", MsgOraclePreVote],
    ["/refractedlabs.oracle.oracle.MsgDelegateFeedConsent", MsgDelegateFeedConsent],
    
];

export { msgTypes }