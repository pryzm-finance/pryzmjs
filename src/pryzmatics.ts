import { defaultPageRequestProvider } from "./index";
import { PageRequest } from "./codegen/cosmos/base/query/v1beta1/pagination";
import { createClient } from "./codegen/pryzmatics/lcd";

export type PryzmaticsClient = Awaited<ReturnType<typeof createClient>>
export const createPryzmaticsClient = createClient

/**
 * ```ts
 * example:
 *     const allMaturities = await fetchAll(pryzmaticsClient, async (client, pageRequest) => {
 *         const result = (await pryzmaticsClient.pryzmatics.maturityAll({
 *             assetId: "Luna",
 *             active: "true",
 *             pagination: pageRequest
 *         }))
 *         return [result.pagination.next_key, result.maturities]
 *     })
 * ```
 */
export async function fetchAll<Type>(client: PryzmaticsClient, fetch: (client: PryzmaticsClient, request: PageRequest) =>
    Promise<[Uint8Array, Type[]]>, pageRequest = defaultPageRequestProvider()): Promise<Type[]> {
    const result: Type[] = []
    do {
        const [nextKey, r] = await fetch(client, pageRequest);
        if (r) result.push(...r)
        pageRequest.key = nextKey ? new Uint8Array(Buffer.from(nextKey as any, 'base64')) : null
    } while (pageRequest.key)
    return result;
}