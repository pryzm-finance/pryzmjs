import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUnstake } from "./types/prismcore/icstaking/tx";
import { MsgRedeemInterchainAccount } from "./types/prismcore/icstaking/tx";
import { MsgRebalanceDelegations } from "./types/prismcore/icstaking/tx";
import { MsgStake } from "./types/prismcore/icstaking/tx";
import { MsgRegisterHostChain } from "./types/prismcore/icstaking/tx";
import { MsgUpdateParams } from "./types/prismcore/icstaking/tx";
import { MsgUpdateHostChain } from "./types/prismcore/icstaking/tx";
import { MsgRedeemUnstaked } from "./types/prismcore/icstaking/tx";
import { MsgInstantUnstake } from "./types/prismcore/icstaking/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.icstaking.MsgUnstake", MsgUnstake],
    ["/prismfinance.prismcore.icstaking.MsgRedeemInterchainAccount", MsgRedeemInterchainAccount],
    ["/prismfinance.prismcore.icstaking.MsgRebalanceDelegations", MsgRebalanceDelegations],
    ["/prismfinance.prismcore.icstaking.MsgStake", MsgStake],
    ["/prismfinance.prismcore.icstaking.MsgRegisterHostChain", MsgRegisterHostChain],
    ["/prismfinance.prismcore.icstaking.MsgUpdateParams", MsgUpdateParams],
    ["/prismfinance.prismcore.icstaking.MsgUpdateHostChain", MsgUpdateHostChain],
    ["/prismfinance.prismcore.icstaking.MsgRedeemUnstaked", MsgRedeemUnstaked],
    ["/prismfinance.prismcore.icstaking.MsgInstantUnstake", MsgInstantUnstake],
    
];

export { msgTypes }