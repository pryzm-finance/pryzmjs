import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_TESTNET_ENDPOINT } from "../constants";
import { PayloadModule } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/server/oracle/vote_interval_report";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_TESTNET_ENDPOINT })

    let report = (await pryzmaticsClient.pryzmatics.voteIntervalReport({
        voteIntervalCloseBlockHeight: 0n,
        validators: "PRYZM,Chainscope",
        module: PayloadModule.PAYLOAD_MODULE_ICSTAKING,
        namespace: "",
        csv: false,
    }))

    console.log(report.vote_interval_report.vote_interval.close_block_height)
    console.log(report.vote_interval_report.vote_interval.close_block_time)
}

main().catch(console.error)