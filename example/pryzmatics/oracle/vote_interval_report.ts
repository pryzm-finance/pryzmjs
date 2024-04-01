import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../constants";
import { PRYZMATICS_TESTNET_ENDPOINT } from "../constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_TESTNET_ENDPOINT })

    let report = (await pryzmaticsClient.pryzmatics.voteIntervalReport({voteIntervalCloseBlockHeight: 0n}))
    console.log(report.validator_vote_interval_report_csv)
    console.log(report.ballot_vote_result_csv)
}

main().catch(console.error)