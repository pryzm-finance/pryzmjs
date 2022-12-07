// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUnbond } from "./types/prismcore/ystaking/tx";
import { MsgBond } from "./types/prismcore/ystaking/tx";
import { MsgClaimReward } from "./types/prismcore/ystaking/tx";
import { MsgExitPool } from "./types/prismcore/ystaking/tx";


export { MsgUnbond, MsgBond, MsgClaimReward, MsgExitPool };

type sendMsgUnbondParams = {
  value: MsgUnbond,
  fee?: StdFee,
  memo?: string
};

type sendMsgBondParams = {
  value: MsgBond,
  fee?: StdFee,
  memo?: string
};

type sendMsgClaimRewardParams = {
  value: MsgClaimReward,
  fee?: StdFee,
  memo?: string
};

type sendMsgExitPoolParams = {
  value: MsgExitPool,
  fee?: StdFee,
  memo?: string
};


type msgUnbondParams = {
  value: MsgUnbond,
};

type msgBondParams = {
  value: MsgBond,
};

type msgClaimRewardParams = {
  value: MsgClaimReward,
};

type msgExitPoolParams = {
  value: MsgExitPool,
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
		
		async sendMsgUnbond({ value, fee, memo }: sendMsgUnbondParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUnbond: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUnbond({ value: MsgUnbond.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUnbond: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBond({ value, fee, memo }: sendMsgBondParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBond: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBond({ value: MsgBond.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBond: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgClaimReward({ value, fee, memo }: sendMsgClaimRewardParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgClaimReward: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgClaimReward({ value: MsgClaimReward.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgClaimReward: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgExitPool({ value, fee, memo }: sendMsgExitPoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgExitPool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgExitPool({ value: MsgExitPool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgExitPool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUnbond({ value }: msgUnbondParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.ystaking.MsgUnbond", value: MsgUnbond.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUnbond: Could not create message: ' + e.message)
			}
		},
		
		msgBond({ value }: msgBondParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.ystaking.MsgBond", value: MsgBond.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBond: Could not create message: ' + e.message)
			}
		},
		
		msgClaimReward({ value }: msgClaimRewardParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.ystaking.MsgClaimReward", value: MsgClaimReward.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgClaimReward: Could not create message: ' + e.message)
			}
		},
		
		msgExitPool({ value }: msgExitPoolParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.ystaking.MsgExitPool", value: MsgExitPool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgExitPool: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			PrismfinancePrismcoreYstaking: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;