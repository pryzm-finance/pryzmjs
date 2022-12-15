// import {newPrismaticsClient} from "@prism-finance/prismjs";
import {newPrismaticsClient} from "../lib";

async function main() {
    const prismaticsClient = newPrismaticsClient("http://localhost:4444")
    let res = await prismaticsClient.PrismfinancePrismatics.query.queryTransactionByEvent({
        events: [
            "transfer.sender=prism17xpfvakm2amg962yls6f84z3kell8c5l7ymlfc",
            "tx.signature=lcNbG8/d+rFj1nLKUP6ipcJ93WMHq0S+QSYjJu6lcu1/CFMjpYSdMgBrtl0qtDbUvIsA9V0hPyajpJtq+mL6Lw==",
        ]
    })
    console.log(JSON.stringify(res.data))
}

main().catch(console.error)