// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgMigrateContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgInstantiateContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgUpdateAdmin } from "./types/cosmwasm/wasm/v1/tx";
import { MsgStoreCode } from "./types/cosmwasm/wasm/v1/tx";
import { MsgIBCSend } from "./types/cosmwasm/wasm/v1/ibc";
import { MsgExecuteContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgIBCCloseChannel } from "./types/cosmwasm/wasm/v1/ibc";
import { MsgClearAdmin } from "./types/cosmwasm/wasm/v1/tx";
import { MsgInstantiateContract2 } from "./types/cosmwasm/wasm/v1/tx";


export { MsgMigrateContract, MsgInstantiateContract, MsgUpdateAdmin, MsgStoreCode, MsgIBCSend, MsgExecuteContract, MsgIBCCloseChannel, MsgClearAdmin, MsgInstantiateContract2 };

type sendMsgMigrateContractParams = {
  value: MsgMigrateContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgInstantiateContractParams = {
  value: MsgInstantiateContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateAdminParams = {
  value: MsgUpdateAdmin,
  fee?: StdFee,
  memo?: string
};

type sendMsgStoreCodeParams = {
  value: MsgStoreCode,
  fee?: StdFee,
  memo?: string
};

type sendMsgIBCSendParams = {
  value: MsgIBCSend,
  fee?: StdFee,
  memo?: string
};

type sendMsgExecuteContractParams = {
  value: MsgExecuteContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgIBCCloseChannelParams = {
  value: MsgIBCCloseChannel,
  fee?: StdFee,
  memo?: string
};

type sendMsgClearAdminParams = {
  value: MsgClearAdmin,
  fee?: StdFee,
  memo?: string
};

type sendMsgInstantiateContract2Params = {
  value: MsgInstantiateContract2,
  fee?: StdFee,
  memo?: string
};


type msgMigrateContractParams = {
  value: MsgMigrateContract,
};

type msgInstantiateContractParams = {
  value: MsgInstantiateContract,
};

type msgUpdateAdminParams = {
  value: MsgUpdateAdmin,
};

type msgStoreCodeParams = {
  value: MsgStoreCode,
};

type msgIBCSendParams = {
  value: MsgIBCSend,
};

type msgExecuteContractParams = {
  value: MsgExecuteContract,
};

type msgIBCCloseChannelParams = {
  value: MsgIBCCloseChannel,
};

type msgClearAdminParams = {
  value: MsgClearAdmin,
};

type msgInstantiateContract2Params = {
  value: MsgInstantiateContract2,
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
		
		async sendMsgMigrateContract({ value, fee, memo }: sendMsgMigrateContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMigrateContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMigrateContract({ value: MsgMigrateContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMigrateContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgInstantiateContract({ value, fee, memo }: sendMsgInstantiateContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgInstantiateContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgInstantiateContract({ value: MsgInstantiateContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgInstantiateContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateAdmin({ value, fee, memo }: sendMsgUpdateAdminParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateAdmin: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateAdmin({ value: MsgUpdateAdmin.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateAdmin: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgStoreCode({ value, fee, memo }: sendMsgStoreCodeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgStoreCode: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgStoreCode({ value: MsgStoreCode.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgStoreCode: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgIBCSend({ value, fee, memo }: sendMsgIBCSendParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIBCSend: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIBCSend({ value: MsgIBCSend.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIBCSend: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgExecuteContract({ value, fee, memo }: sendMsgExecuteContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgExecuteContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgExecuteContract({ value: MsgExecuteContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgExecuteContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgIBCCloseChannel({ value, fee, memo }: sendMsgIBCCloseChannelParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIBCCloseChannel: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIBCCloseChannel({ value: MsgIBCCloseChannel.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIBCCloseChannel: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgClearAdmin({ value, fee, memo }: sendMsgClearAdminParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgClearAdmin: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgClearAdmin({ value: MsgClearAdmin.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgClearAdmin: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgInstantiateContract2({ value, fee, memo }: sendMsgInstantiateContract2Params): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgInstantiateContract2: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgInstantiateContract2({ value: MsgInstantiateContract2.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgInstantiateContract2: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgMigrateContract({ value }: msgMigrateContractParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract", value: MsgMigrateContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMigrateContract: Could not create message: ' + e.message)
			}
		},
		
		msgInstantiateContract({ value }: msgInstantiateContractParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract", value: MsgInstantiateContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgInstantiateContract: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateAdmin({ value }: msgUpdateAdminParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin", value: MsgUpdateAdmin.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateAdmin: Could not create message: ' + e.message)
			}
		},
		
		msgStoreCode({ value }: msgStoreCodeParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode", value: MsgStoreCode.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgStoreCode: Could not create message: ' + e.message)
			}
		},
		
		msgIBCSend({ value }: msgIBCSendParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend", value: MsgIBCSend.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIBCSend: Could not create message: ' + e.message)
			}
		},
		
		msgExecuteContract({ value }: msgExecuteContractParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract", value: MsgExecuteContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgExecuteContract: Could not create message: ' + e.message)
			}
		},
		
		msgIBCCloseChannel({ value }: msgIBCCloseChannelParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel", value: MsgIBCCloseChannel.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIBCCloseChannel: Could not create message: ' + e.message)
			}
		},
		
		msgClearAdmin({ value }: msgClearAdminParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin", value: MsgClearAdmin.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgClearAdmin: Could not create message: ' + e.message)
			}
		},
		
		msgInstantiateContract2({ value }: msgInstantiateContract2Params): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2", value: MsgInstantiateContract2.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgInstantiateContract2: Could not create message: ' + e.message)
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
			CosmwasmWasmV1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;