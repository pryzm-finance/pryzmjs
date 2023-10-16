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
    cosmatics: new (await import("./query.lcd")).LCDQueryClient({
      requestClient
    })
  };
};