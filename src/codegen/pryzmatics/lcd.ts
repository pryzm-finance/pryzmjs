import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
export const createClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmatics: new (await import("../cosmatics/query.lcd")).LCDQueryClient({
      requestClient
    }),
    pryzmatics: new (await import("./server/query.lcd")).LCDQueryClient({ requestClient })
  };
};