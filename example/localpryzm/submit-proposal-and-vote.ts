import { connectWithSigner, cosmos } from "@pryzm-finance/pryzmjs"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { localPryzm } from './config'
import { VoteOption } from "@pryzm-finance/pryzmjs/lib/codegen/cosmos/gov/v1/gov";


async function main() {
    const mnemonic = "senior bulb liberty shrimp beyond drip art steak brave tragic tonight fragile pitch other alter avoid three swarm tag diary upper genuine federal credit"; // test2 account
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "pryzm" });
    const signingClient = await connectWithSigner(localPryzm.rpcUrl, signer, 10000, GasPrice.fromString('0.03upryzm'))
    const address = (await signer.getAccounts())[0].address

    const m = {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: {
            content: Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                value: Uint8Array.from(TextProposal.encode({
                    title: "dummy-proposal-title",
                    description: "dummy-proposal-summary"
                }).finish()),
            }),
            proposer: address,
            initialDeposit: [{
                denom: "upryzm",
                amount: "1",
            }],
        },
    };
    let resp = await signingClient.signAndBroadcast(address, [m], 1.5)
    const events = JSON.parse(resp.rawLog)[0].events;
    const event = findEvent("submit_proposal", events);
    const proposalId = BigInt(findEventAttribute("proposal_id", event).value);
    console.log(`proposal submitted with id ${proposalId}`);

    // deposit
    resp = await signingClient.signAndBroadcast(address, [cosmos.gov.v1.MessageComposer.withTypeUrl.deposit({
        amount: [{
            denom: "upryzm",
            amount: "10000000",
        }], depositor: address, proposalId
    })], 2)
    console.log(`deposited for proposal with id ${proposalId}: ${JSON.stringify(resp)}`);

    for (let a of ['validator', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9']) {
        const account = (localPryzm.accounts as any)[a]
        const w = await DirectSecp256k1HdWallet.fromMnemonic(account.mnemonic, { prefix: "pryzm" });
        const c = await connectWithSigner(localPryzm.rpcUrl, w, 10000, GasPrice.fromString('0.03upryzm'))
        const addr = (await w.getAccounts())[0].address
        try {
            const resp = await c.signAndBroadcast(addr, [cosmos.gov.v1.MessageComposer.withTypeUrl.vote({
                metadata: `voter:${addr}`, option: VoteOption.VOTE_OPTION_YES, proposalId, voter: addr
            })], 2)
            console.log(`voted with address ${addr}: ${JSON.stringify(resp)}`)
        } catch (e) {
            console.log(`failed to vote with address ${addr}: ${e}`)
        }
    }
}

main().catch(console.error)

function findEvent(eventType: string, events: any[]): any {
    for (let event of events) {
        if (event.type == eventType) {
            return event
        }
    }
}

function findEventAttribute(key: string, event: any): any {
    for (let attr of event.attributes) {
        if (attr.key == key) {
            return attr
        }
    }
}