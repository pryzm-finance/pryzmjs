import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const resp = (await pryzmaticsClient.pryzmatics.faucetClaim({
        denom: "upryzm",
        address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2eudxks2",
        captchaResponse: ""
    }))
    console.log(resp)
}

main().catch(console.error)