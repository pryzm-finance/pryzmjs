import { LCDClient } from "@osmonauts/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    prismatics: new (await import("./query.lcd")).LCDQueryClient({
      requestClient
    })
  };
};