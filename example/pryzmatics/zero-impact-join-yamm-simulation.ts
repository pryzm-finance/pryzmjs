import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const simulation = await pryzmaticsClient.pryzmatics.zeroImpactJoinYammSimulation({
        cAmountIn: {
            amount: "10000",
            denom: "cudummy"
        }
    })
    console.log(simulation)
    /* Sample Output:
    {
      c_amount_in: { denom: 'cudummy', amount: '10000' },
      lpt_out: { denom: 'LP:0:udummy', amount: '459' },
      y_out: [
        { denom: 'y:udummy:28Feb2025', amount: '571' },
        { denom: 'y:udummy:29Feb2024', amount: '456' },
        { denom: 'y:udummy:30Apr2024', amount: '420' },
        { denom: 'y:udummy:30Apr2025', amount: '527' },
        { denom: 'y:udummy:30Jun2024', amount: '517' },
        { denom: 'y:udummy:30Jun2025', amount: '456' },
        { denom: 'y:udummy:30Nov2023', amount: '740' },
        { denom: 'y:udummy:30Nov2024', amount: '584' },
        { denom: 'y:udummy:30Nov2025', amount: '482' },
        { denom: 'y:udummy:30Sep2024', amount: '693' },
        { denom: 'y:udummy:30Sep2025', amount: '627' },
        { denom: 'y:udummy:31Aug2024', amount: '526' },
        { denom: 'y:udummy:31Aug2025', amount: '524' },
        { denom: 'y:udummy:31Dec2023', amount: '574' },
        { denom: 'y:udummy:31Dec2024', amount: '491' },
        { denom: 'y:udummy:31Jan2024', amount: '468' },
        { denom: 'y:udummy:31Jan2025', amount: '677' },
        { denom: 'y:udummy:31Jul2024', amount: '492' },
        { denom: 'y:udummy:31Jul2025', amount: '682' },
        { denom: 'y:udummy:31Mar2024', amount: '694' },
        { denom: 'y:udummy:31Mar2025', amount: '675' },
        { denom: 'y:udummy:31May2024', amount: '552' },
        { denom: 'y:udummy:31May2025', amount: '504' },
        { denom: 'y:udummy:31Oct2024', amount: '672' },
        { denom: 'y:udummy:31Oct2025', amount: '878' }
      ],
      fee_amount: { denom: 'uusdc', amount: '0' },
      fee_percentage: '0.000000000000000000'
     }
     */
}

main().catch(console.error)