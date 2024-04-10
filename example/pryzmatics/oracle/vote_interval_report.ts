import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_DEVNET_ENDPOINT, PRYZMATICS_ENDPOINT } from "../constants";
import { PRYZMATICS_TESTNET_ENDPOINT } from "../constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_DEVNET_ENDPOINT })

    let report = (await pryzmaticsClient.pryzmatics.voteIntervalReport({voteIntervalCloseBlockHeight: 0n}))
    console.log(report.vote_interval_report.vote_interval.close_block_height)
    console.log(report.vote_interval_report.vote_interval.close_block_time)
    console.log(report.validator_vote_interval_report_csv)
    console.log(report.ballot_vote_result_csv)
}

main().catch(console.error)