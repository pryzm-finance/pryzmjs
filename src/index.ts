// Generated by Ignite ignite.com/cli
import { Registry } from '@cosmjs/proto-signing'
import { IgniteClient } from "./client";
import { MissingWalletError } from "./helpers";
import { Module as CosmosAuthV1Beta1, msgTypes as CosmosAuthV1Beta1MsgTypes } from './cosmos.auth.v1beta1'
import { Module as CosmosAuthzV1Beta1, msgTypes as CosmosAuthzV1Beta1MsgTypes } from './cosmos.authz.v1beta1'
import { Module as CosmosBankV1Beta1, msgTypes as CosmosBankV1Beta1MsgTypes } from './cosmos.bank.v1beta1'
import { Module as CosmosBaseTendermintV1Beta1, msgTypes as CosmosBaseTendermintV1Beta1MsgTypes } from './cosmos.base.tendermint.v1beta1'
import { Module as CosmosCrisisV1Beta1, msgTypes as CosmosCrisisV1Beta1MsgTypes } from './cosmos.crisis.v1beta1'
import { Module as CosmosDistributionV1Beta1, msgTypes as CosmosDistributionV1Beta1MsgTypes } from './cosmos.distribution.v1beta1'
import { Module as CosmosEvidenceV1Beta1, msgTypes as CosmosEvidenceV1Beta1MsgTypes } from './cosmos.evidence.v1beta1'
import { Module as CosmosFeegrantV1Beta1, msgTypes as CosmosFeegrantV1Beta1MsgTypes } from './cosmos.feegrant.v1beta1'
import { Module as CosmosGovV1, msgTypes as CosmosGovV1MsgTypes } from './cosmos.gov.v1'
import { Module as CosmosGovV1Beta1, msgTypes as CosmosGovV1Beta1MsgTypes } from './cosmos.gov.v1beta1'
import { Module as CosmosGroupV1, msgTypes as CosmosGroupV1MsgTypes } from './cosmos.group.v1'
import { Module as CosmosMintV1Beta1, msgTypes as CosmosMintV1Beta1MsgTypes } from './cosmos.mint.v1beta1'
import { Module as CosmosNftV1Beta1, msgTypes as CosmosNftV1Beta1MsgTypes } from './cosmos.nft.v1beta1'
import { Module as CosmosParamsV1Beta1, msgTypes as CosmosParamsV1Beta1MsgTypes } from './cosmos.params.v1beta1'
import { Module as CosmosSlashingV1Beta1, msgTypes as CosmosSlashingV1Beta1MsgTypes } from './cosmos.slashing.v1beta1'
import { Module as CosmosStakingV1Beta1, msgTypes as CosmosStakingV1Beta1MsgTypes } from './cosmos.staking.v1beta1'
import { Module as CosmosTxV1Beta1, msgTypes as CosmosTxV1Beta1MsgTypes } from './cosmos.tx.v1beta1'
import { Module as CosmosUpgradeV1Beta1, msgTypes as CosmosUpgradeV1Beta1MsgTypes } from './cosmos.upgrade.v1beta1'
import { Module as CosmosVestingV1Beta1, msgTypes as CosmosVestingV1Beta1MsgTypes } from './cosmos.vesting.v1beta1'
import { Module as CosmwasmWasmV1, msgTypes as CosmwasmWasmV1MsgTypes } from './cosmwasm.wasm.v1'
import { Module as IbcApplicationsInterchainAccountsControllerV1, msgTypes as IbcApplicationsInterchainAccountsControllerV1MsgTypes } from './ibc.applications.interchain_accounts.controller.v1'
import { Module as IbcApplicationsInterchainAccountsHostV1, msgTypes as IbcApplicationsInterchainAccountsHostV1MsgTypes } from './ibc.applications.interchain_accounts.host.v1'
import { Module as IbcApplicationsTransferV1, msgTypes as IbcApplicationsTransferV1MsgTypes } from './ibc.applications.transfer.v1'
import { Module as IbcCoreChannelV1, msgTypes as IbcCoreChannelV1MsgTypes } from './ibc.core.channel.v1'
import { Module as IbcCoreClientV1, msgTypes as IbcCoreClientV1MsgTypes } from './ibc.core.client.v1'
import { Module as IbcCoreConnectionV1, msgTypes as IbcCoreConnectionV1MsgTypes } from './ibc.core.connection.v1'
import { Module as PrismfinancePrismcoreAmm, msgTypes as PrismfinancePrismcoreAmmMsgTypes } from './prismfinance.prismcore.amm'
import { Module as PrismfinancePrismcoreAssets, msgTypes as PrismfinancePrismcoreAssetsMsgTypes } from './prismfinance.prismcore.assets'
import { Module as PrismfinancePrismcoreEpochs, msgTypes as PrismfinancePrismcoreEpochsMsgTypes } from './prismfinance.prismcore.epochs'
import { Module as PrismfinancePrismcoreIcq, msgTypes as PrismfinancePrismcoreIcqMsgTypes } from './prismfinance.prismcore.icq'
import { Module as PrismfinancePrismcoreIcstaking, msgTypes as PrismfinancePrismcoreIcstakingMsgTypes } from './prismfinance.prismcore.icstaking'
import { Module as PrismfinancePrismcorePgov, msgTypes as PrismfinancePrismcorePgovMsgTypes } from './prismfinance.prismcore.pgov'
import { Module as PrismfinancePrismcoreRefractor, msgTypes as PrismfinancePrismcoreRefractorMsgTypes } from './prismfinance.prismcore.refractor'
import { Module as PrismfinancePrismcoreTreasury, msgTypes as PrismfinancePrismcoreTreasuryMsgTypes } from './prismfinance.prismcore.treasury'
import { Module as PrismfinancePrismcoreYstaking, msgTypes as PrismfinancePrismcoreYstakingMsgTypes } from './prismfinance.prismcore.ystaking'
import { Module as RefractedlabsOracle, msgTypes as RefractedlabsOracleMsgTypes } from './refractedlabs.oracle.oracle'


const Client = IgniteClient.plugin([
    CosmosAuthV1Beta1, CosmosAuthzV1Beta1, CosmosBankV1Beta1, CosmosBaseTendermintV1Beta1, CosmosCrisisV1Beta1, CosmosDistributionV1Beta1, CosmosEvidenceV1Beta1, CosmosFeegrantV1Beta1, CosmosGovV1, CosmosGovV1Beta1, CosmosGroupV1, CosmosMintV1Beta1, CosmosNftV1Beta1, CosmosParamsV1Beta1, CosmosSlashingV1Beta1, CosmosStakingV1Beta1, CosmosTxV1Beta1, CosmosUpgradeV1Beta1, CosmosVestingV1Beta1, CosmwasmWasmV1, IbcApplicationsInterchainAccountsControllerV1, IbcApplicationsInterchainAccountsHostV1, IbcApplicationsTransferV1, IbcCoreChannelV1, IbcCoreClientV1, IbcCoreConnectionV1, PrismfinancePrismcoreAmm, PrismfinancePrismcoreAssets, PrismfinancePrismcoreEpochs, PrismfinancePrismcoreIcq, PrismfinancePrismcoreIcstaking, PrismfinancePrismcorePgov, PrismfinancePrismcoreRefractor, PrismfinancePrismcoreTreasury, PrismfinancePrismcoreYstaking, RefractedlabsOracle
]);

const registry = new Registry([
  ...CosmosAuthV1Beta1MsgTypes,
  ...CosmosAuthzV1Beta1MsgTypes,
  ...CosmosBankV1Beta1MsgTypes,
  ...CosmosBaseTendermintV1Beta1MsgTypes,
  ...CosmosCrisisV1Beta1MsgTypes,
  ...CosmosDistributionV1Beta1MsgTypes,
  ...CosmosEvidenceV1Beta1MsgTypes,
  ...CosmosFeegrantV1Beta1MsgTypes,
  ...CosmosGovV1MsgTypes,
  ...CosmosGovV1Beta1MsgTypes,
  ...CosmosGroupV1MsgTypes,
  ...CosmosMintV1Beta1MsgTypes,
  ...CosmosNftV1Beta1MsgTypes,
  ...CosmosParamsV1Beta1MsgTypes,
  ...CosmosSlashingV1Beta1MsgTypes,
  ...CosmosStakingV1Beta1MsgTypes,
  ...CosmosTxV1Beta1MsgTypes,
  ...CosmosUpgradeV1Beta1MsgTypes,
  ...CosmosVestingV1Beta1MsgTypes,
  ...CosmwasmWasmV1MsgTypes,
  ...IbcApplicationsInterchainAccountsControllerV1MsgTypes,
  ...IbcApplicationsInterchainAccountsHostV1MsgTypes,
  ...IbcApplicationsTransferV1MsgTypes,
  ...IbcCoreChannelV1MsgTypes,
  ...IbcCoreClientV1MsgTypes,
  ...IbcCoreConnectionV1MsgTypes,
  ...PrismfinancePrismcoreAmmMsgTypes,
  ...PrismfinancePrismcoreAssetsMsgTypes,
  ...PrismfinancePrismcoreEpochsMsgTypes,
  ...PrismfinancePrismcoreIcqMsgTypes,
  ...PrismfinancePrismcoreIcstakingMsgTypes,
  ...PrismfinancePrismcorePgovMsgTypes,
  ...PrismfinancePrismcoreRefractorMsgTypes,
  ...PrismfinancePrismcoreTreasuryMsgTypes,
  ...PrismfinancePrismcoreYstakingMsgTypes,
  ...RefractedlabsOracleMsgTypes,
  
])

export {
    Client,
    registry,
    MissingWalletError
}

// Modified
import protobufjs from "protobufjs";
import Long from "long";
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {PrismWebsocketClient, TendermintEventType, TendermintQuery, TendermintSubscriptionResponse} from "./wsclient";
import { Module as PrismfinancePrismatics, msgTypes as PrismfinancePrismaticsMsgTypes } from './prismfinance.prisma.tics' // TODO: PrismfinancePrismaticsMsgTypes

PrismfinancePrismaticsMsgTypes.forEach(value => {
    registry.register(value[0], value[1])
})

protobufjs.util.Long = Long;
protobufjs.configure();

type NewReturnType<T extends {
    new(...args: any[]): any
}> = T extends {
    new(...args: any[]): infer R
} ? R : never;
export type PrismClient = NewReturnType<typeof Client>
export const PrismClient = Client

export const PrismaticsClient = IgniteClient.plugin([
    PrismfinancePrismatics
]);
export type PrismaticsClient = NewReturnType<typeof PrismaticsClient>

export {
    PrismWebsocketClient,
    TendermintEventType,
    TendermintQuery,
    TendermintSubscriptionResponse
}

/** Use this method if you want to use the returned prism client only as query client. this does not work as signing client */
export function newPrismQueryClient(apiURL: string): PrismClient {
    return new PrismClient({
        apiURL, rpcURL: null!
    }, null!)
}

/** Use this method if you want to use the returned prism client only as signing client. this does not work for querying prism */
export function newPrismSigningClient(rpcURL: string, signer: DirectSecp256k1HdWallet): PrismClient {
    return new PrismClient({
        apiURL: null!, rpcURL, prefix: "prism"
    }, signer)
}

/** Use this method if you want to use the prismatics client */
export function newPrismaticsClient(apiURL: string): PrismaticsClient {
    return new PrismaticsClient({
        apiURL, rpcURL: null!
    }, null!)
}

/**
 * example:
 * ```ts
 * async function fetchAllConnection(client: PrismClient): Promise<BridgeConnection[]> {
 *    const result = await PrismHelper.fetchAll(client, async (client, query) => {
 *        const response = await client.RefractedlabsBridge.query.queryConnectionAll(query);
 *        return [response.data.pagination.next_key, response.data.connection]
 *    });
 *    commonLogger.debug(`${result.length} connection fetched`)
 *    return result;
 * }
 * ```
 */
export async function fetchAll<Type>(client: PrismClient, fetch: (client: PrismClient, query: any) => Promise<[string | null, Type[]]>, pageSize = 50): Promise<Type[]> {
    const result: Type[] = []
    const query: any = {"pagination.limit": `${pageSize}`}
    do {
        const [nextKey, r] = await fetch(client, query);
        result.push(...r)
        query["pagination.key"] = nextKey
    } while (query["pagination.key"] != null)
    return result;
}