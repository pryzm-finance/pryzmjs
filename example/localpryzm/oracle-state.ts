import * as console from "console";
import {refractedlabs} from "@refractedlabs/oraclejs";


async function main() {
    const oracleClient = await refractedlabs.ClientFactory.createGrpcWebClient({endpoint: "https://lgrpc.pryzmprotocol.app"})
    console.log("\nfetching oracle params:")
    const params = (await oracleClient.refractedlabs.oracle.params()).params
    console.log(params)

    console.log("\nfetching missCounterAll:")
    const missCounters = (await oracleClient.refractedlabs.oracle.missCounterAll()).missCounter;
    console.log(missCounters)
}

main().catch(console.error)