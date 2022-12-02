import {ReconnectingSocket} from "@cosmjs/socket"
import {Stream} from "xstream";
import {JsonRpcErrorResponse, JsonRpcSuccessResponse, parseJsonRpcResponse} from "@cosmjs/json-rpc";

export class PrismWebsocketClient {
    private reconnectingSocket: ReconnectingSocket;
    private jsonRpcResponseStream: Stream<JsonRpcSuccessResponse | JsonRpcErrorResponse>;
    private requests = new Map<number, string>()
    private static nextId: number = 1;

    constructor(private wsEndpoint: string, timeoutMillis: number = 1000) {
        const path = wsEndpoint.endsWith("/") ? "websocket" : "/websocket";
        this.reconnectingSocket = new ReconnectingSocket(wsEndpoint + path, timeoutMillis, () => {
            this.requests.forEach((request, _) => {
                this.reconnectingSocket.queueRequest(request)
            })
        });
        this.jsonRpcResponseStream = this.reconnectingSocket.events.map(message => {
            // this should never happen, but I want an alert if it does
            if (message.type !== "message") {
                throw new Error(`Unexpected message type on websocket: ${message.type}`);
            }
            return parseJsonRpcResponse(JSON.parse(message.data));
        });
        this.reconnectingSocket.connect()
    }

    getEventStream(eventType: TendermintEventType, query: TendermintQuery): Stream<any> {
        const queryParams = makeQueryParams({
            'tm.event': eventType,
            ...query,
        });
        const id = PrismWebsocketClient.nextId++;
        const request = JSON.stringify({
            jsonrpc: "2.0",
            method: "subscribe",
            id,
            params: [queryParams]
        });
        this.requests.set(id, request)
        this.reconnectingSocket.queueRequest(request);
        const stream = this.jsonRpcResponseStream.filter(t => t.id == id);
        stream.addListener({
            complete: () => {
                this.requests.delete(id)
            }
        })
        return stream.map(result => (result as any)?.result?.events)
            .filter(events => events != undefined)//filter out the very first result events since it is undefined
    }
}

export interface TendermintSubscriptionResponse {
    type: string;
    value: Record<string, any>;
}

export type TendermintEventType =
    | 'NewBlock'
    | 'NewBlockHeader'
    | 'Evidence'
    | 'Tx'
    | 'ValidatorSetUpdates'
    | 'CompleteProposal'
    | 'Lock'
    | 'NewRound'
    | 'NewRoundStep'
    | 'Polka'
    | 'Relock'
    | 'TimeoutPropose'
    | 'TimeoutWait'
    | 'Unlock'
    | 'ValidBlock'
    | 'Vote';

type TendermintQueryOperand = string | number | Date;

export interface TendermintQuery {
    [k: string]:
        | TendermintQueryOperand
        | ['>', number | Date]
        | ['<', number | Date]
        | ['<=', number | Date]
        | ['>=', number | Date]
        | ['CONTAINS', string]
        | ['EXISTS'];
}

const escapeSingleQuotes = (str: string) => str.replace(/'/g, "\\'");

function makeQueryParams(query: TendermintQuery): string {
    const queryBuilder: string[] = [];
    for (const key of Object.keys(query)) {
        let queryItem: string;
        const value = query[key];
        // if value is scalar
        if (!Array.isArray(value)) {
            switch (typeof value) {
                case 'number':
                    queryItem = `${key}=${value}`;
                    break;
                case 'string':
                    queryItem = `${key}='${escapeSingleQuotes(value)}'`;
                    break;
                default:
                    // Date
                    queryItem = `${key}=${value.toISOString()}`;
            }
        } else {
            switch (value[0]) {
                case '>':
                case '<':
                case '<=':
                case '>=':
                    if (typeof value[1] !== 'number') {
                        queryItem = `${key}${value[0]}${value[1].toISOString()}`;
                    } else {
                        queryItem = `${key}${value[0]}${value[1]}`;
                    }
                    break;
                case 'CONTAINS':
                    queryItem = `${key} CONTAINS '${escapeSingleQuotes(value[1])}'`;
                    break;
                case 'EXISTS':
                    queryItem = `${key} EXISTS`;
                    break;
            }
        }
        queryBuilder.push(queryItem);
    }
    return queryBuilder.join(' AND ');
}
