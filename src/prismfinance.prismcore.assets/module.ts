// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUpdateMaturityParams } from "./types/assets/tx";
import { MsgDelistAsset } from "./types/assets/tx";
import { MsgWhitelistAsset } from "./types/assets/tx";


export { MsgUpdateMaturityParams, MsgDelistAsset, MsgWhitelistAsset };

type sendMsgUpdateMaturityParamsParams = {
  value: MsgUpdateMaturityParams,
  fee?: StdFee,
  memo?: string
};

type sendMsgDelistAssetParams = {
  value: MsgDelistAsset,
  fee?: StdFee,
  memo?: string
};

type sendMsgWhitelistAssetParams = {
  value: MsgWhitelistAsset,
  fee?: StdFee,
  memo?: string
};


type msgUpdateMaturityParamsParams = {
  value: MsgUpdateMaturityParams,
};

type msgDelistAssetParams = {
  value: MsgDelistAsset,
};

type msgWhitelistAssetParams = {
  value: MsgWhitelistAsset,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgUpdateMaturityParams({ value, fee, memo }: sendMsgUpdateMaturityParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateMaturityParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateMaturityParams({ value: MsgUpdateMaturityParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateMaturityParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDelistAsset({ value, fee, memo }: sendMsgDelistAssetParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDelistAsset: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDelistAsset({ value: MsgDelistAsset.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDelistAsset: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWhitelistAsset({ value, fee, memo }: sendMsgWhitelistAssetParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWhitelistAsset: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWhitelistAsset({ value: MsgWhitelistAsset.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWhitelistAsset: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUpdateMaturityParams({ value }: msgUpdateMaturityParamsParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.assets.MsgUpdateMaturityParams", value: MsgUpdateMaturityParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateMaturityParams: Could not create message: ' + e.message)
			}
		},
		
		msgDelistAsset({ value }: msgDelistAssetParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.assets.MsgDelistAsset", value: MsgDelistAsset.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDelistAsset: Could not create message: ' + e.message)
			}
		},
		
		msgWhitelistAsset({ value }: msgWhitelistAssetParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.assets.MsgWhitelistAsset", value: MsgWhitelistAsset.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWhitelistAsset: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			PrismfinancePrismcoreAssets: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;