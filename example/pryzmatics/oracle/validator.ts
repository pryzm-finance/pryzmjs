import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const validators = (await pryzmaticsClient.pryzmatics.validators({})).validators
    console.log(validators)

    const validator = (await pryzmaticsClient.pryzmatics.validator({ operatorAddress: validators[0].operator_address })).validator
    console.log(validator)
}

main().catch(console.error)