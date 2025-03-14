import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../../registry";
export enum FlowStatus {
  /** WAITING - the flow is waiting to be started */
  WAITING = 0,
  /** ACTIVE - the flow is active */
  ACTIVE = 1,
  /** ENDED - the flow has been ended. this is a final state */
  ENDED = 2,
  /** STOPPED - the flow has been stopped. this is a final state */
  STOPPED = 3,
  UNRECOGNIZED = -1,
}
export const FlowStatusSDKType = FlowStatus;
export const FlowStatusAmino = FlowStatus;
export function flowStatusFromJSON(object: any): FlowStatus {
  switch (object) {
    case 0:
    case "WAITING":
      return FlowStatus.WAITING;
    case 1:
    case "ACTIVE":
      return FlowStatus.ACTIVE;
    case 2:
    case "ENDED":
      return FlowStatus.ENDED;
    case 3:
    case "STOPPED":
      return FlowStatus.STOPPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FlowStatus.UNRECOGNIZED;
  }
}
export function flowStatusToJSON(object: FlowStatus): string {
  switch (object) {
    case FlowStatus.WAITING:
      return "WAITING";
    case FlowStatus.ACTIVE:
      return "ACTIVE";
    case FlowStatus.ENDED:
      return "ENDED";
    case FlowStatus.STOPPED:
      return "STOPPED";
    case FlowStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Flow holds information and price calculations for a flow trade */
export interface Flow {
  /** auto-generated identifier for a flow */
  id: bigint;
  /** the address of flow creator and owner */
  creator: string;
  /** informational data about the flow */
  flowInfo: FlowInfo;
  /** the time that swap distribution starts */
  startTime: Timestamp;
  /** the time that flow is ended */
  endTime: Timestamp;
  /**
   * the interval in which the distribution index is updated and hence tokens are swapped
   * if dist_interval is 0, the flow is updated every time in or out tokens are increased or decreased
   * if dist_interval is equal to the duration of flow, it means that all of the tokens are swapped once after the flow ends
   */
  distInterval: Duration;
  /** the address that the swapped tokens are sent to after the flow ends */
  treasuryAddress: string;
  /** total amount creator provided to be swapped */
  totalTokenOut: Coin;
  /** the accepted token to buy the out tokens */
  tokenInDenom: string;
  /** the time from then the buyers can claim their purchased tokens */
  tokenOutClaimableAfter: Timestamp;
  /** the time from then the flow creator can claim the swapped tokens */
  tokenInClaimableAfter: Timestamp;
  /** whether the flow can be stopped by the flow's creator */
  stoppable: boolean;
  /** whether to allow buyers to claim their tokens immediately after the flow is stopped */
  allowImmediateTokenOutClaimIfStopped: boolean;
  /** whether to allow flow's creator to claim tokens immediately after the flow is stopped */
  allowImmediateTokenInClaimIfStopped: boolean;
  /** a global index for the amount of purchase that has already been applied */
  distIndex: string;
  /** the last time the dist index is updated */
  lastDistUpdate: Timestamp;
  /** the amount of remaining out tokens to sell */
  tokenOutBalance: string;
  /** the current amount of token-in provided to buy token-out */
  tokenInBalance: string;
  /** the amount of already spent in tokens */
  spentTokenIn: string;
  /** the total number of users shares */
  totalShares: string;
  /** the latest price of token-out in terms of token-in */
  livePrice: string;
  /** the current status of flow */
  status: FlowStatus;
  /** the amount of creation deposit that should be revenue to the flow creator */
  creationDeposit?: Coin;
  /** the fee ratio taken from token-out, this is copied from module params at the time of flow creation */
  tokenOutFeeRatio: string;
  /** the fee ratio taken from token-in, this is copied from module params at the time of flow creation */
  tokenInFeeRatio: string;
  /**
   * if true, the swapped tokens are automatically sent to the treasury address when the flow ends
   * this option is only available when another module creates a flow using keeper api
   */
  automaticTreasuryCollection: boolean;
  /** the amount of spent in tokens that have been claimed by the flow's creator */
  claimedTokenIn: string;
  /** whether the flow is checked out, meaning the creation deposit and any remaining out tokens are transferred back to the creator */
  checkedOut: boolean;
  /**
   * the minimum price for the token-out in terms of token-in.
   * in each swap interval, if the calculated price is less than this limit, the swap doesn't happen in that turn
   * Since: v0.4
   */
  limitPrice: string;
  /**
   * the duration of the exit window before swap interval, in which users can only exit the flow and joining is not permitted
   * this duration is used to protect joiners from buying the token-out with a higher price when someone joins with a huge amount of token-in
   * Since: v0.4
   */
  exitWindowDuration: Duration;
}
export interface FlowProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.Flow";
  value: Uint8Array;
}
/** Flow holds information and price calculations for a flow trade */
export interface FlowAmino {
  /** auto-generated identifier for a flow */
  id?: string;
  /** the address of flow creator and owner */
  creator?: string;
  /** informational data about the flow */
  flow_info?: FlowInfoAmino;
  /** the time that swap distribution starts */
  start_time?: string;
  /** the time that flow is ended */
  end_time?: string;
  /**
   * the interval in which the distribution index is updated and hence tokens are swapped
   * if dist_interval is 0, the flow is updated every time in or out tokens are increased or decreased
   * if dist_interval is equal to the duration of flow, it means that all of the tokens are swapped once after the flow ends
   */
  dist_interval?: DurationAmino;
  /** the address that the swapped tokens are sent to after the flow ends */
  treasury_address?: string;
  /** total amount creator provided to be swapped */
  total_token_out?: CoinAmino;
  /** the accepted token to buy the out tokens */
  token_in_denom?: string;
  /** the time from then the buyers can claim their purchased tokens */
  token_out_claimable_after?: string;
  /** the time from then the flow creator can claim the swapped tokens */
  token_in_claimable_after?: string;
  /** whether the flow can be stopped by the flow's creator */
  stoppable?: boolean;
  /** whether to allow buyers to claim their tokens immediately after the flow is stopped */
  allow_immediate_token_out_claim_if_stopped?: boolean;
  /** whether to allow flow's creator to claim tokens immediately after the flow is stopped */
  allow_immediate_token_in_claim_if_stopped?: boolean;
  /** a global index for the amount of purchase that has already been applied */
  dist_index?: string;
  /** the last time the dist index is updated */
  last_dist_update?: string;
  /** the amount of remaining out tokens to sell */
  token_out_balance?: string;
  /** the current amount of token-in provided to buy token-out */
  token_in_balance?: string;
  /** the amount of already spent in tokens */
  spent_token_in?: string;
  /** the total number of users shares */
  total_shares?: string;
  /** the latest price of token-out in terms of token-in */
  live_price?: string;
  /** the current status of flow */
  status?: FlowStatus;
  /** the amount of creation deposit that should be revenue to the flow creator */
  creation_deposit?: CoinAmino;
  /** the fee ratio taken from token-out, this is copied from module params at the time of flow creation */
  token_out_fee_ratio?: string;
  /** the fee ratio taken from token-in, this is copied from module params at the time of flow creation */
  token_in_fee_ratio?: string;
  /**
   * if true, the swapped tokens are automatically sent to the treasury address when the flow ends
   * this option is only available when another module creates a flow using keeper api
   */
  automatic_treasury_collection?: boolean;
  /** the amount of spent in tokens that have been claimed by the flow's creator */
  claimed_token_in?: string;
  /** whether the flow is checked out, meaning the creation deposit and any remaining out tokens are transferred back to the creator */
  checked_out?: boolean;
  /**
   * the minimum price for the token-out in terms of token-in.
   * in each swap interval, if the calculated price is less than this limit, the swap doesn't happen in that turn
   * Since: v0.4
   */
  limit_price?: string;
  /**
   * the duration of the exit window before swap interval, in which users can only exit the flow and joining is not permitted
   * this duration is used to protect joiners from buying the token-out with a higher price when someone joins with a huge amount of token-in
   * Since: v0.4
   */
  exit_window_duration?: DurationAmino;
}
export interface FlowAminoMsg {
  type: "/refractedlabs.flowtrade.v1.Flow";
  value: FlowAmino;
}
/** Flow holds information and price calculations for a flow trade */
export interface FlowSDKType {
  id: bigint;
  creator: string;
  flow_info: FlowInfoSDKType;
  start_time: TimestampSDKType;
  end_time: TimestampSDKType;
  dist_interval: DurationSDKType;
  treasury_address: string;
  total_token_out: CoinSDKType;
  token_in_denom: string;
  token_out_claimable_after: TimestampSDKType;
  token_in_claimable_after: TimestampSDKType;
  stoppable: boolean;
  allow_immediate_token_out_claim_if_stopped: boolean;
  allow_immediate_token_in_claim_if_stopped: boolean;
  dist_index: string;
  last_dist_update: TimestampSDKType;
  token_out_balance: string;
  token_in_balance: string;
  spent_token_in: string;
  total_shares: string;
  live_price: string;
  status: FlowStatus;
  creation_deposit?: CoinSDKType;
  token_out_fee_ratio: string;
  token_in_fee_ratio: string;
  automatic_treasury_collection: boolean;
  claimed_token_in: string;
  checked_out: boolean;
  limit_price: string;
  exit_window_duration: DurationSDKType;
}
/** Informational data about the flow */
export interface FlowInfo {
  /** a name of the flow */
  name: string;
  /** a short description about the flow */
  description: string;
  /** a referring url */
  url: string;
}
export interface FlowInfoProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.FlowInfo";
  value: Uint8Array;
}
/** Informational data about the flow */
export interface FlowInfoAmino {
  /** a name of the flow */
  name: string;
  /** a short description about the flow */
  description: string;
  /** a referring url */
  url: string;
}
export interface FlowInfoAminoMsg {
  type: "/refractedlabs.flowtrade.v1.FlowInfo";
  value: FlowInfoAmino;
}
/** Informational data about the flow */
export interface FlowInfoSDKType {
  name: string;
  description: string;
  url: string;
}
/** a structure for requesting a new flow's creation */
export interface FlowCreationRequest {
  /** informational data about the flow */
  flowInfo: FlowInfo;
  /** the time that swap distribution starts */
  startTime: Timestamp;
  /** the time that flow is ended */
  endTime: Timestamp;
  /**
   * the interval in which the distribution index is updated and hence tokens are swapped
   * if dist_interval is 0, the flow is updated every time in or out tokens are increased or decreased
   * if dist_interval is equal to the duration of flow, it means that all of the tokens are swapped once after the flow ends
   */
  distInterval: Duration;
  /** the address that the swapped tokens are sent to after the flow ends */
  treasuryAddress: string;
  /** total amount creator provided to be swapped */
  tokensOut: Coin;
  /** the accepted token to buy the out tokens */
  tokenInDenom: string;
  /** the time from then the flow buyers can claim their purchased tokens */
  tokenOutClaimableAfter: Timestamp;
  /** the time from then the flow creator can claim the swapped tokens */
  tokenInClaimableAfter: Timestamp;
  /** whether the flow can be stopped by the flow's creator */
  stoppable: boolean;
  /** whether to allow buyers to claim their tokens immediately after the flow is stopped */
  allowImmediateTokenOutClaimIfStopped: boolean;
  /** whether to allow flow's creator to claim tokens immediately after the flow is stopped */
  allowImmediateTokenInClaimIfStopped: boolean;
  /**
   * the minimum price for the token-out in terms of token-in.
   * in each swap interval, if the calculated price is less than this limit, the swap doesn't happen in that turn
   * Since: v0.4
   */
  limitPrice: string;
  /**
   * the duration of the exit window before swap interval, in which users can only exit the flow and joining is not permitted
   * this duration is used to protect joiners from buying the token-out with a higher price when someone joins with a huge amount of token-in
   * Since: v0.4
   */
  exitWindowDuration: Duration;
}
export interface FlowCreationRequestProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.FlowCreationRequest";
  value: Uint8Array;
}
/** a structure for requesting a new flow's creation */
export interface FlowCreationRequestAmino {
  /** informational data about the flow */
  flow_info: FlowInfoAmino;
  /** the time that swap distribution starts */
  start_time: string;
  /** the time that flow is ended */
  end_time: string;
  /**
   * the interval in which the distribution index is updated and hence tokens are swapped
   * if dist_interval is 0, the flow is updated every time in or out tokens are increased or decreased
   * if dist_interval is equal to the duration of flow, it means that all of the tokens are swapped once after the flow ends
   */
  dist_interval: DurationAmino;
  /** the address that the swapped tokens are sent to after the flow ends */
  treasury_address: string;
  /** total amount creator provided to be swapped */
  tokens_out: CoinAmino;
  /** the accepted token to buy the out tokens */
  token_in_denom?: string;
  /** the time from then the flow buyers can claim their purchased tokens */
  token_out_claimable_after: string;
  /** the time from then the flow creator can claim the swapped tokens */
  token_in_claimable_after: string;
  /** whether the flow can be stopped by the flow's creator */
  stoppable: boolean;
  /** whether to allow buyers to claim their tokens immediately after the flow is stopped */
  allow_immediate_token_out_claim_if_stopped: boolean;
  /** whether to allow flow's creator to claim tokens immediately after the flow is stopped */
  allow_immediate_token_in_claim_if_stopped: boolean;
  /**
   * the minimum price for the token-out in terms of token-in.
   * in each swap interval, if the calculated price is less than this limit, the swap doesn't happen in that turn
   * Since: v0.4
   */
  limit_price: string;
  /**
   * the duration of the exit window before swap interval, in which users can only exit the flow and joining is not permitted
   * this duration is used to protect joiners from buying the token-out with a higher price when someone joins with a huge amount of token-in
   * Since: v0.4
   */
  exit_window_duration: DurationAmino;
}
export interface FlowCreationRequestAminoMsg {
  type: "/refractedlabs.flowtrade.v1.FlowCreationRequest";
  value: FlowCreationRequestAmino;
}
/** a structure for requesting a new flow's creation */
export interface FlowCreationRequestSDKType {
  flow_info: FlowInfoSDKType;
  start_time: TimestampSDKType;
  end_time: TimestampSDKType;
  dist_interval: DurationSDKType;
  treasury_address: string;
  tokens_out: CoinSDKType;
  token_in_denom: string;
  token_out_claimable_after: TimestampSDKType;
  token_in_claimable_after: TimestampSDKType;
  stoppable: boolean;
  allow_immediate_token_out_claim_if_stopped: boolean;
  allow_immediate_token_in_claim_if_stopped: boolean;
  limit_price: string;
  exit_window_duration: DurationSDKType;
}
function createBaseFlow(): Flow {
  return {
    id: BigInt(0),
    creator: "",
    flowInfo: FlowInfo.fromPartial({}),
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    distInterval: Duration.fromPartial({}),
    treasuryAddress: "",
    totalTokenOut: Coin.fromPartial({}),
    tokenInDenom: "",
    tokenOutClaimableAfter: Timestamp.fromPartial({}),
    tokenInClaimableAfter: Timestamp.fromPartial({}),
    stoppable: false,
    allowImmediateTokenOutClaimIfStopped: false,
    allowImmediateTokenInClaimIfStopped: false,
    distIndex: "",
    lastDistUpdate: Timestamp.fromPartial({}),
    tokenOutBalance: "",
    tokenInBalance: "",
    spentTokenIn: "",
    totalShares: "",
    livePrice: "",
    status: 0,
    creationDeposit: undefined,
    tokenOutFeeRatio: "",
    tokenInFeeRatio: "",
    automaticTreasuryCollection: false,
    claimedTokenIn: "",
    checkedOut: false,
    limitPrice: "",
    exitWindowDuration: Duration.fromPartial({})
  };
}
export const Flow = {
  typeUrl: "/refractedlabs.flowtrade.v1.Flow",
  is(o: any): o is Flow {
    return o && (o.$typeUrl === Flow.typeUrl || typeof o.id === "bigint" && typeof o.creator === "string" && FlowInfo.is(o.flowInfo) && Timestamp.is(o.startTime) && Timestamp.is(o.endTime) && Duration.is(o.distInterval) && typeof o.treasuryAddress === "string" && Coin.is(o.totalTokenOut) && typeof o.tokenInDenom === "string" && Timestamp.is(o.tokenOutClaimableAfter) && Timestamp.is(o.tokenInClaimableAfter) && typeof o.stoppable === "boolean" && typeof o.allowImmediateTokenOutClaimIfStopped === "boolean" && typeof o.allowImmediateTokenInClaimIfStopped === "boolean" && typeof o.distIndex === "string" && Timestamp.is(o.lastDistUpdate) && typeof o.tokenOutBalance === "string" && typeof o.tokenInBalance === "string" && typeof o.spentTokenIn === "string" && typeof o.totalShares === "string" && typeof o.livePrice === "string" && isSet(o.status) && typeof o.tokenOutFeeRatio === "string" && typeof o.tokenInFeeRatio === "string" && typeof o.automaticTreasuryCollection === "boolean" && typeof o.claimedTokenIn === "string" && typeof o.checkedOut === "boolean" && typeof o.limitPrice === "string" && Duration.is(o.exitWindowDuration));
  },
  isSDK(o: any): o is FlowSDKType {
    return o && (o.$typeUrl === Flow.typeUrl || typeof o.id === "bigint" && typeof o.creator === "string" && FlowInfo.isSDK(o.flow_info) && Timestamp.isSDK(o.start_time) && Timestamp.isSDK(o.end_time) && Duration.isSDK(o.dist_interval) && typeof o.treasury_address === "string" && Coin.isSDK(o.total_token_out) && typeof o.token_in_denom === "string" && Timestamp.isSDK(o.token_out_claimable_after) && Timestamp.isSDK(o.token_in_claimable_after) && typeof o.stoppable === "boolean" && typeof o.allow_immediate_token_out_claim_if_stopped === "boolean" && typeof o.allow_immediate_token_in_claim_if_stopped === "boolean" && typeof o.dist_index === "string" && Timestamp.isSDK(o.last_dist_update) && typeof o.token_out_balance === "string" && typeof o.token_in_balance === "string" && typeof o.spent_token_in === "string" && typeof o.total_shares === "string" && typeof o.live_price === "string" && isSet(o.status) && typeof o.token_out_fee_ratio === "string" && typeof o.token_in_fee_ratio === "string" && typeof o.automatic_treasury_collection === "boolean" && typeof o.claimed_token_in === "string" && typeof o.checked_out === "boolean" && typeof o.limit_price === "string" && Duration.isSDK(o.exit_window_duration));
  },
  isAmino(o: any): o is FlowAmino {
    return o && (o.$typeUrl === Flow.typeUrl || typeof o.id === "bigint" && typeof o.creator === "string" && FlowInfo.isAmino(o.flow_info) && Timestamp.isAmino(o.start_time) && Timestamp.isAmino(o.end_time) && Duration.isAmino(o.dist_interval) && typeof o.treasury_address === "string" && Coin.isAmino(o.total_token_out) && typeof o.token_in_denom === "string" && Timestamp.isAmino(o.token_out_claimable_after) && Timestamp.isAmino(o.token_in_claimable_after) && typeof o.stoppable === "boolean" && typeof o.allow_immediate_token_out_claim_if_stopped === "boolean" && typeof o.allow_immediate_token_in_claim_if_stopped === "boolean" && typeof o.dist_index === "string" && Timestamp.isAmino(o.last_dist_update) && typeof o.token_out_balance === "string" && typeof o.token_in_balance === "string" && typeof o.spent_token_in === "string" && typeof o.total_shares === "string" && typeof o.live_price === "string" && isSet(o.status) && typeof o.token_out_fee_ratio === "string" && typeof o.token_in_fee_ratio === "string" && typeof o.automatic_treasury_collection === "boolean" && typeof o.claimed_token_in === "string" && typeof o.checked_out === "boolean" && typeof o.limit_price === "string" && Duration.isAmino(o.exit_window_duration));
  },
  encode(message: Flow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.flowInfo !== undefined) {
      FlowInfo.encode(message.flowInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.distInterval !== undefined) {
      Duration.encode(message.distInterval, writer.uint32(50).fork()).ldelim();
    }
    if (message.treasuryAddress !== "") {
      writer.uint32(58).string(message.treasuryAddress);
    }
    if (message.totalTokenOut !== undefined) {
      Coin.encode(message.totalTokenOut, writer.uint32(66).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(74).string(message.tokenInDenom);
    }
    if (message.tokenOutClaimableAfter !== undefined) {
      Timestamp.encode(message.tokenOutClaimableAfter, writer.uint32(82).fork()).ldelim();
    }
    if (message.tokenInClaimableAfter !== undefined) {
      Timestamp.encode(message.tokenInClaimableAfter, writer.uint32(90).fork()).ldelim();
    }
    if (message.stoppable === true) {
      writer.uint32(96).bool(message.stoppable);
    }
    if (message.allowImmediateTokenOutClaimIfStopped === true) {
      writer.uint32(104).bool(message.allowImmediateTokenOutClaimIfStopped);
    }
    if (message.allowImmediateTokenInClaimIfStopped === true) {
      writer.uint32(112).bool(message.allowImmediateTokenInClaimIfStopped);
    }
    if (message.distIndex !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.distIndex, 18).atomics);
    }
    if (message.lastDistUpdate !== undefined) {
      Timestamp.encode(message.lastDistUpdate, writer.uint32(130).fork()).ldelim();
    }
    if (message.tokenOutBalance !== "") {
      writer.uint32(138).string(message.tokenOutBalance);
    }
    if (message.tokenInBalance !== "") {
      writer.uint32(146).string(message.tokenInBalance);
    }
    if (message.spentTokenIn !== "") {
      writer.uint32(154).string(message.spentTokenIn);
    }
    if (message.totalShares !== "") {
      writer.uint32(162).string(message.totalShares);
    }
    if (message.livePrice !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.livePrice, 18).atomics);
    }
    if (message.status !== 0) {
      writer.uint32(176).int32(message.status);
    }
    if (message.creationDeposit !== undefined) {
      Coin.encode(message.creationDeposit, writer.uint32(186).fork()).ldelim();
    }
    if (message.tokenOutFeeRatio !== "") {
      writer.uint32(194).string(Decimal.fromUserInput(message.tokenOutFeeRatio, 18).atomics);
    }
    if (message.tokenInFeeRatio !== "") {
      writer.uint32(202).string(Decimal.fromUserInput(message.tokenInFeeRatio, 18).atomics);
    }
    if (message.automaticTreasuryCollection === true) {
      writer.uint32(208).bool(message.automaticTreasuryCollection);
    }
    if (message.claimedTokenIn !== "") {
      writer.uint32(218).string(message.claimedTokenIn);
    }
    if (message.checkedOut === true) {
      writer.uint32(224).bool(message.checkedOut);
    }
    if (message.limitPrice !== "") {
      writer.uint32(234).string(Decimal.fromUserInput(message.limitPrice, 18).atomics);
    }
    if (message.exitWindowDuration !== undefined) {
      Duration.encode(message.exitWindowDuration, writer.uint32(242).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Flow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.flowInfo = FlowInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.distInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.treasuryAddress = reader.string();
          break;
        case 8:
          message.totalTokenOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.tokenInDenom = reader.string();
          break;
        case 10:
          message.tokenOutClaimableAfter = Timestamp.decode(reader, reader.uint32());
          break;
        case 11:
          message.tokenInClaimableAfter = Timestamp.decode(reader, reader.uint32());
          break;
        case 12:
          message.stoppable = reader.bool();
          break;
        case 13:
          message.allowImmediateTokenOutClaimIfStopped = reader.bool();
          break;
        case 14:
          message.allowImmediateTokenInClaimIfStopped = reader.bool();
          break;
        case 15:
          message.distIndex = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.lastDistUpdate = Timestamp.decode(reader, reader.uint32());
          break;
        case 17:
          message.tokenOutBalance = reader.string();
          break;
        case 18:
          message.tokenInBalance = reader.string();
          break;
        case 19:
          message.spentTokenIn = reader.string();
          break;
        case 20:
          message.totalShares = reader.string();
          break;
        case 21:
          message.livePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 22:
          message.status = (reader.int32() as any);
          break;
        case 23:
          message.creationDeposit = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 24:
          message.tokenOutFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 25:
          message.tokenInFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 26:
          message.automaticTreasuryCollection = reader.bool();
          break;
        case 27:
          message.claimedTokenIn = reader.string();
          break;
        case 28:
          message.checkedOut = reader.bool();
          break;
        case 29:
          message.limitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 30:
          message.exitWindowDuration = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Flow {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
      flowInfo: isSet(object.flowInfo) ? FlowInfo.fromJSON(object.flowInfo) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      distInterval: isSet(object.distInterval) ? Duration.fromJSON(object.distInterval) : undefined,
      treasuryAddress: isSet(object.treasuryAddress) ? String(object.treasuryAddress) : "",
      totalTokenOut: isSet(object.totalTokenOut) ? Coin.fromJSON(object.totalTokenOut) : undefined,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenOutClaimableAfter: isSet(object.tokenOutClaimableAfter) ? fromJsonTimestamp(object.tokenOutClaimableAfter) : undefined,
      tokenInClaimableAfter: isSet(object.tokenInClaimableAfter) ? fromJsonTimestamp(object.tokenInClaimableAfter) : undefined,
      stoppable: isSet(object.stoppable) ? Boolean(object.stoppable) : false,
      allowImmediateTokenOutClaimIfStopped: isSet(object.allowImmediateTokenOutClaimIfStopped) ? Boolean(object.allowImmediateTokenOutClaimIfStopped) : false,
      allowImmediateTokenInClaimIfStopped: isSet(object.allowImmediateTokenInClaimIfStopped) ? Boolean(object.allowImmediateTokenInClaimIfStopped) : false,
      distIndex: isSet(object.distIndex) ? String(object.distIndex) : "",
      lastDistUpdate: isSet(object.lastDistUpdate) ? fromJsonTimestamp(object.lastDistUpdate) : undefined,
      tokenOutBalance: isSet(object.tokenOutBalance) ? String(object.tokenOutBalance) : "",
      tokenInBalance: isSet(object.tokenInBalance) ? String(object.tokenInBalance) : "",
      spentTokenIn: isSet(object.spentTokenIn) ? String(object.spentTokenIn) : "",
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : "",
      livePrice: isSet(object.livePrice) ? String(object.livePrice) : "",
      status: isSet(object.status) ? flowStatusFromJSON(object.status) : -1,
      creationDeposit: isSet(object.creationDeposit) ? Coin.fromJSON(object.creationDeposit) : undefined,
      tokenOutFeeRatio: isSet(object.tokenOutFeeRatio) ? String(object.tokenOutFeeRatio) : "",
      tokenInFeeRatio: isSet(object.tokenInFeeRatio) ? String(object.tokenInFeeRatio) : "",
      automaticTreasuryCollection: isSet(object.automaticTreasuryCollection) ? Boolean(object.automaticTreasuryCollection) : false,
      claimedTokenIn: isSet(object.claimedTokenIn) ? String(object.claimedTokenIn) : "",
      checkedOut: isSet(object.checkedOut) ? Boolean(object.checkedOut) : false,
      limitPrice: isSet(object.limitPrice) ? String(object.limitPrice) : "",
      exitWindowDuration: isSet(object.exitWindowDuration) ? Duration.fromJSON(object.exitWindowDuration) : undefined
    };
  },
  toJSON(message: Flow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.flowInfo !== undefined && (obj.flowInfo = message.flowInfo ? FlowInfo.toJSON(message.flowInfo) : undefined);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.distInterval !== undefined && (obj.distInterval = message.distInterval ? Duration.toJSON(message.distInterval) : undefined);
    message.treasuryAddress !== undefined && (obj.treasuryAddress = message.treasuryAddress);
    message.totalTokenOut !== undefined && (obj.totalTokenOut = message.totalTokenOut ? Coin.toJSON(message.totalTokenOut) : undefined);
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOutClaimableAfter !== undefined && (obj.tokenOutClaimableAfter = fromTimestamp(message.tokenOutClaimableAfter).toISOString());
    message.tokenInClaimableAfter !== undefined && (obj.tokenInClaimableAfter = fromTimestamp(message.tokenInClaimableAfter).toISOString());
    message.stoppable !== undefined && (obj.stoppable = message.stoppable);
    message.allowImmediateTokenOutClaimIfStopped !== undefined && (obj.allowImmediateTokenOutClaimIfStopped = message.allowImmediateTokenOutClaimIfStopped);
    message.allowImmediateTokenInClaimIfStopped !== undefined && (obj.allowImmediateTokenInClaimIfStopped = message.allowImmediateTokenInClaimIfStopped);
    message.distIndex !== undefined && (obj.distIndex = message.distIndex);
    message.lastDistUpdate !== undefined && (obj.lastDistUpdate = fromTimestamp(message.lastDistUpdate).toISOString());
    message.tokenOutBalance !== undefined && (obj.tokenOutBalance = message.tokenOutBalance);
    message.tokenInBalance !== undefined && (obj.tokenInBalance = message.tokenInBalance);
    message.spentTokenIn !== undefined && (obj.spentTokenIn = message.spentTokenIn);
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    message.livePrice !== undefined && (obj.livePrice = message.livePrice);
    message.status !== undefined && (obj.status = flowStatusToJSON(message.status));
    message.creationDeposit !== undefined && (obj.creationDeposit = message.creationDeposit ? Coin.toJSON(message.creationDeposit) : undefined);
    message.tokenOutFeeRatio !== undefined && (obj.tokenOutFeeRatio = message.tokenOutFeeRatio);
    message.tokenInFeeRatio !== undefined && (obj.tokenInFeeRatio = message.tokenInFeeRatio);
    message.automaticTreasuryCollection !== undefined && (obj.automaticTreasuryCollection = message.automaticTreasuryCollection);
    message.claimedTokenIn !== undefined && (obj.claimedTokenIn = message.claimedTokenIn);
    message.checkedOut !== undefined && (obj.checkedOut = message.checkedOut);
    message.limitPrice !== undefined && (obj.limitPrice = message.limitPrice);
    message.exitWindowDuration !== undefined && (obj.exitWindowDuration = message.exitWindowDuration ? Duration.toJSON(message.exitWindowDuration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Flow>): Flow {
    const message = createBaseFlow();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.flowInfo = object.flowInfo !== undefined && object.flowInfo !== null ? FlowInfo.fromPartial(object.flowInfo) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.distInterval = object.distInterval !== undefined && object.distInterval !== null ? Duration.fromPartial(object.distInterval) : undefined;
    message.treasuryAddress = object.treasuryAddress ?? "";
    message.totalTokenOut = object.totalTokenOut !== undefined && object.totalTokenOut !== null ? Coin.fromPartial(object.totalTokenOut) : undefined;
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutClaimableAfter = object.tokenOutClaimableAfter !== undefined && object.tokenOutClaimableAfter !== null ? Timestamp.fromPartial(object.tokenOutClaimableAfter) : undefined;
    message.tokenInClaimableAfter = object.tokenInClaimableAfter !== undefined && object.tokenInClaimableAfter !== null ? Timestamp.fromPartial(object.tokenInClaimableAfter) : undefined;
    message.stoppable = object.stoppable ?? false;
    message.allowImmediateTokenOutClaimIfStopped = object.allowImmediateTokenOutClaimIfStopped ?? false;
    message.allowImmediateTokenInClaimIfStopped = object.allowImmediateTokenInClaimIfStopped ?? false;
    message.distIndex = object.distIndex ?? "";
    message.lastDistUpdate = object.lastDistUpdate !== undefined && object.lastDistUpdate !== null ? Timestamp.fromPartial(object.lastDistUpdate) : undefined;
    message.tokenOutBalance = object.tokenOutBalance ?? "";
    message.tokenInBalance = object.tokenInBalance ?? "";
    message.spentTokenIn = object.spentTokenIn ?? "";
    message.totalShares = object.totalShares ?? "";
    message.livePrice = object.livePrice ?? "";
    message.status = object.status ?? 0;
    message.creationDeposit = object.creationDeposit !== undefined && object.creationDeposit !== null ? Coin.fromPartial(object.creationDeposit) : undefined;
    message.tokenOutFeeRatio = object.tokenOutFeeRatio ?? "";
    message.tokenInFeeRatio = object.tokenInFeeRatio ?? "";
    message.automaticTreasuryCollection = object.automaticTreasuryCollection ?? false;
    message.claimedTokenIn = object.claimedTokenIn ?? "";
    message.checkedOut = object.checkedOut ?? false;
    message.limitPrice = object.limitPrice ?? "";
    message.exitWindowDuration = object.exitWindowDuration !== undefined && object.exitWindowDuration !== null ? Duration.fromPartial(object.exitWindowDuration) : undefined;
    return message;
  },
  fromAmino(object: FlowAmino): Flow {
    const message = createBaseFlow();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.flow_info !== undefined && object.flow_info !== null) {
      message.flowInfo = FlowInfo.fromAmino(object.flow_info);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.dist_interval !== undefined && object.dist_interval !== null) {
      message.distInterval = Duration.fromAmino(object.dist_interval);
    }
    if (object.treasury_address !== undefined && object.treasury_address !== null) {
      message.treasuryAddress = object.treasury_address;
    }
    if (object.total_token_out !== undefined && object.total_token_out !== null) {
      message.totalTokenOut = Coin.fromAmino(object.total_token_out);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.token_out_claimable_after !== undefined && object.token_out_claimable_after !== null) {
      message.tokenOutClaimableAfter = Timestamp.fromAmino(object.token_out_claimable_after);
    }
    if (object.token_in_claimable_after !== undefined && object.token_in_claimable_after !== null) {
      message.tokenInClaimableAfter = Timestamp.fromAmino(object.token_in_claimable_after);
    }
    if (object.stoppable !== undefined && object.stoppable !== null) {
      message.stoppable = object.stoppable;
    }
    if (object.allow_immediate_token_out_claim_if_stopped !== undefined && object.allow_immediate_token_out_claim_if_stopped !== null) {
      message.allowImmediateTokenOutClaimIfStopped = object.allow_immediate_token_out_claim_if_stopped;
    }
    if (object.allow_immediate_token_in_claim_if_stopped !== undefined && object.allow_immediate_token_in_claim_if_stopped !== null) {
      message.allowImmediateTokenInClaimIfStopped = object.allow_immediate_token_in_claim_if_stopped;
    }
    if (object.dist_index !== undefined && object.dist_index !== null) {
      message.distIndex = object.dist_index;
    }
    if (object.last_dist_update !== undefined && object.last_dist_update !== null) {
      message.lastDistUpdate = Timestamp.fromAmino(object.last_dist_update);
    }
    if (object.token_out_balance !== undefined && object.token_out_balance !== null) {
      message.tokenOutBalance = object.token_out_balance;
    }
    if (object.token_in_balance !== undefined && object.token_in_balance !== null) {
      message.tokenInBalance = object.token_in_balance;
    }
    if (object.spent_token_in !== undefined && object.spent_token_in !== null) {
      message.spentTokenIn = object.spent_token_in;
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = object.total_shares;
    }
    if (object.live_price !== undefined && object.live_price !== null) {
      message.livePrice = object.live_price;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.creation_deposit !== undefined && object.creation_deposit !== null) {
      message.creationDeposit = Coin.fromAmino(object.creation_deposit);
    }
    if (object.token_out_fee_ratio !== undefined && object.token_out_fee_ratio !== null) {
      message.tokenOutFeeRatio = object.token_out_fee_ratio;
    }
    if (object.token_in_fee_ratio !== undefined && object.token_in_fee_ratio !== null) {
      message.tokenInFeeRatio = object.token_in_fee_ratio;
    }
    if (object.automatic_treasury_collection !== undefined && object.automatic_treasury_collection !== null) {
      message.automaticTreasuryCollection = object.automatic_treasury_collection;
    }
    if (object.claimed_token_in !== undefined && object.claimed_token_in !== null) {
      message.claimedTokenIn = object.claimed_token_in;
    }
    if (object.checked_out !== undefined && object.checked_out !== null) {
      message.checkedOut = object.checked_out;
    }
    if (object.limit_price !== undefined && object.limit_price !== null) {
      message.limitPrice = object.limit_price;
    }
    if (object.exit_window_duration !== undefined && object.exit_window_duration !== null) {
      message.exitWindowDuration = Duration.fromAmino(object.exit_window_duration);
    }
    return message;
  },
  toAmino(message: Flow, useInterfaces: boolean = true): FlowAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.flow_info = message.flowInfo ? FlowInfo.toAmino(message.flowInfo, useInterfaces) : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime, useInterfaces) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime, useInterfaces) : undefined;
    obj.dist_interval = message.distInterval ? Duration.toAmino(message.distInterval, useInterfaces) : undefined;
    obj.treasury_address = message.treasuryAddress === "" ? undefined : message.treasuryAddress;
    obj.total_token_out = message.totalTokenOut ? Coin.toAmino(message.totalTokenOut, useInterfaces) : undefined;
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.token_out_claimable_after = message.tokenOutClaimableAfter ? Timestamp.toAmino(message.tokenOutClaimableAfter, useInterfaces) : undefined;
    obj.token_in_claimable_after = message.tokenInClaimableAfter ? Timestamp.toAmino(message.tokenInClaimableAfter, useInterfaces) : undefined;
    obj.stoppable = message.stoppable === false ? undefined : message.stoppable;
    obj.allow_immediate_token_out_claim_if_stopped = message.allowImmediateTokenOutClaimIfStopped === false ? undefined : message.allowImmediateTokenOutClaimIfStopped;
    obj.allow_immediate_token_in_claim_if_stopped = message.allowImmediateTokenInClaimIfStopped === false ? undefined : message.allowImmediateTokenInClaimIfStopped;
    obj.dist_index = padDecimal(message.distIndex) === "" ? undefined : padDecimal(message.distIndex);
    obj.last_dist_update = message.lastDistUpdate ? Timestamp.toAmino(message.lastDistUpdate, useInterfaces) : undefined;
    obj.token_out_balance = message.tokenOutBalance === "" ? undefined : message.tokenOutBalance;
    obj.token_in_balance = message.tokenInBalance === "" ? undefined : message.tokenInBalance;
    obj.spent_token_in = message.spentTokenIn === "" ? undefined : message.spentTokenIn;
    obj.total_shares = message.totalShares === "" ? undefined : message.totalShares;
    obj.live_price = padDecimal(message.livePrice) === "" ? undefined : padDecimal(message.livePrice);
    obj.status = message.status === 0 ? undefined : message.status;
    obj.creation_deposit = message.creationDeposit ? Coin.toAmino(message.creationDeposit, useInterfaces) : undefined;
    obj.token_out_fee_ratio = padDecimal(message.tokenOutFeeRatio) === "" ? undefined : padDecimal(message.tokenOutFeeRatio);
    obj.token_in_fee_ratio = padDecimal(message.tokenInFeeRatio) === "" ? undefined : padDecimal(message.tokenInFeeRatio);
    obj.automatic_treasury_collection = message.automaticTreasuryCollection === false ? undefined : message.automaticTreasuryCollection;
    obj.claimed_token_in = message.claimedTokenIn === "" ? undefined : message.claimedTokenIn;
    obj.checked_out = message.checkedOut === false ? undefined : message.checkedOut;
    obj.limit_price = padDecimal(message.limitPrice) === "" ? undefined : padDecimal(message.limitPrice);
    obj.exit_window_duration = message.exitWindowDuration ? Duration.toAmino(message.exitWindowDuration, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: FlowAminoMsg): Flow {
    return Flow.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowProtoMsg, useInterfaces: boolean = true): Flow {
    return Flow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Flow): Uint8Array {
    return Flow.encode(message).finish();
  },
  toProtoMsg(message: Flow): FlowProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.Flow",
      value: Flow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Flow.typeUrl, Flow);
function createBaseFlowInfo(): FlowInfo {
  return {
    name: "",
    description: "",
    url: ""
  };
}
export const FlowInfo = {
  typeUrl: "/refractedlabs.flowtrade.v1.FlowInfo",
  is(o: any): o is FlowInfo {
    return o && (o.$typeUrl === FlowInfo.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.url === "string");
  },
  isSDK(o: any): o is FlowInfoSDKType {
    return o && (o.$typeUrl === FlowInfo.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.url === "string");
  },
  isAmino(o: any): o is FlowInfoAmino {
    return o && (o.$typeUrl === FlowInfo.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.url === "string");
  },
  encode(message: FlowInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FlowInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FlowInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : ""
    };
  },
  toJSON(message: FlowInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
  fromPartial(object: Partial<FlowInfo>): FlowInfo {
    const message = createBaseFlowInfo();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    return message;
  },
  fromAmino(object: FlowInfoAmino): FlowInfo {
    const message = createBaseFlowInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    return message;
  },
  toAmino(message: FlowInfo, useInterfaces: boolean = true): FlowInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.url = message.url === "" ? undefined : message.url;
    return obj;
  },
  fromAminoMsg(object: FlowInfoAminoMsg): FlowInfo {
    return FlowInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowInfoProtoMsg, useInterfaces: boolean = true): FlowInfo {
    return FlowInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FlowInfo): Uint8Array {
    return FlowInfo.encode(message).finish();
  },
  toProtoMsg(message: FlowInfo): FlowInfoProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.FlowInfo",
      value: FlowInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FlowInfo.typeUrl, FlowInfo);
function createBaseFlowCreationRequest(): FlowCreationRequest {
  return {
    flowInfo: FlowInfo.fromPartial({}),
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    distInterval: Duration.fromPartial({}),
    treasuryAddress: "",
    tokensOut: Coin.fromPartial({}),
    tokenInDenom: "",
    tokenOutClaimableAfter: Timestamp.fromPartial({}),
    tokenInClaimableAfter: Timestamp.fromPartial({}),
    stoppable: false,
    allowImmediateTokenOutClaimIfStopped: false,
    allowImmediateTokenInClaimIfStopped: false,
    limitPrice: "",
    exitWindowDuration: Duration.fromPartial({})
  };
}
export const FlowCreationRequest = {
  typeUrl: "/refractedlabs.flowtrade.v1.FlowCreationRequest",
  is(o: any): o is FlowCreationRequest {
    return o && (o.$typeUrl === FlowCreationRequest.typeUrl || FlowInfo.is(o.flowInfo) && Timestamp.is(o.startTime) && Timestamp.is(o.endTime) && Duration.is(o.distInterval) && typeof o.treasuryAddress === "string" && Coin.is(o.tokensOut) && typeof o.tokenInDenom === "string" && Timestamp.is(o.tokenOutClaimableAfter) && Timestamp.is(o.tokenInClaimableAfter) && typeof o.stoppable === "boolean" && typeof o.allowImmediateTokenOutClaimIfStopped === "boolean" && typeof o.allowImmediateTokenInClaimIfStopped === "boolean" && typeof o.limitPrice === "string" && Duration.is(o.exitWindowDuration));
  },
  isSDK(o: any): o is FlowCreationRequestSDKType {
    return o && (o.$typeUrl === FlowCreationRequest.typeUrl || FlowInfo.isSDK(o.flow_info) && Timestamp.isSDK(o.start_time) && Timestamp.isSDK(o.end_time) && Duration.isSDK(o.dist_interval) && typeof o.treasury_address === "string" && Coin.isSDK(o.tokens_out) && typeof o.token_in_denom === "string" && Timestamp.isSDK(o.token_out_claimable_after) && Timestamp.isSDK(o.token_in_claimable_after) && typeof o.stoppable === "boolean" && typeof o.allow_immediate_token_out_claim_if_stopped === "boolean" && typeof o.allow_immediate_token_in_claim_if_stopped === "boolean" && typeof o.limit_price === "string" && Duration.isSDK(o.exit_window_duration));
  },
  isAmino(o: any): o is FlowCreationRequestAmino {
    return o && (o.$typeUrl === FlowCreationRequest.typeUrl || FlowInfo.isAmino(o.flow_info) && Timestamp.isAmino(o.start_time) && Timestamp.isAmino(o.end_time) && Duration.isAmino(o.dist_interval) && typeof o.treasury_address === "string" && Coin.isAmino(o.tokens_out) && typeof o.token_in_denom === "string" && Timestamp.isAmino(o.token_out_claimable_after) && Timestamp.isAmino(o.token_in_claimable_after) && typeof o.stoppable === "boolean" && typeof o.allow_immediate_token_out_claim_if_stopped === "boolean" && typeof o.allow_immediate_token_in_claim_if_stopped === "boolean" && typeof o.limit_price === "string" && Duration.isAmino(o.exit_window_duration));
  },
  encode(message: FlowCreationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowInfo !== undefined) {
      FlowInfo.encode(message.flowInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.distInterval !== undefined) {
      Duration.encode(message.distInterval, writer.uint32(34).fork()).ldelim();
    }
    if (message.treasuryAddress !== "") {
      writer.uint32(42).string(message.treasuryAddress);
    }
    if (message.tokensOut !== undefined) {
      Coin.encode(message.tokensOut, writer.uint32(50).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(58).string(message.tokenInDenom);
    }
    if (message.tokenOutClaimableAfter !== undefined) {
      Timestamp.encode(message.tokenOutClaimableAfter, writer.uint32(66).fork()).ldelim();
    }
    if (message.tokenInClaimableAfter !== undefined) {
      Timestamp.encode(message.tokenInClaimableAfter, writer.uint32(74).fork()).ldelim();
    }
    if (message.stoppable === true) {
      writer.uint32(80).bool(message.stoppable);
    }
    if (message.allowImmediateTokenOutClaimIfStopped === true) {
      writer.uint32(88).bool(message.allowImmediateTokenOutClaimIfStopped);
    }
    if (message.allowImmediateTokenInClaimIfStopped === true) {
      writer.uint32(96).bool(message.allowImmediateTokenInClaimIfStopped);
    }
    if (message.limitPrice !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.limitPrice, 18).atomics);
    }
    if (message.exitWindowDuration !== undefined) {
      Duration.encode(message.exitWindowDuration, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FlowCreationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowCreationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowInfo = FlowInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.distInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.treasuryAddress = reader.string();
          break;
        case 6:
          message.tokensOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.tokenInDenom = reader.string();
          break;
        case 8:
          message.tokenOutClaimableAfter = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.tokenInClaimableAfter = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.stoppable = reader.bool();
          break;
        case 11:
          message.allowImmediateTokenOutClaimIfStopped = reader.bool();
          break;
        case 12:
          message.allowImmediateTokenInClaimIfStopped = reader.bool();
          break;
        case 13:
          message.limitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.exitWindowDuration = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FlowCreationRequest {
    return {
      flowInfo: isSet(object.flowInfo) ? FlowInfo.fromJSON(object.flowInfo) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      distInterval: isSet(object.distInterval) ? Duration.fromJSON(object.distInterval) : undefined,
      treasuryAddress: isSet(object.treasuryAddress) ? String(object.treasuryAddress) : "",
      tokensOut: isSet(object.tokensOut) ? Coin.fromJSON(object.tokensOut) : undefined,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenOutClaimableAfter: isSet(object.tokenOutClaimableAfter) ? fromJsonTimestamp(object.tokenOutClaimableAfter) : undefined,
      tokenInClaimableAfter: isSet(object.tokenInClaimableAfter) ? fromJsonTimestamp(object.tokenInClaimableAfter) : undefined,
      stoppable: isSet(object.stoppable) ? Boolean(object.stoppable) : false,
      allowImmediateTokenOutClaimIfStopped: isSet(object.allowImmediateTokenOutClaimIfStopped) ? Boolean(object.allowImmediateTokenOutClaimIfStopped) : false,
      allowImmediateTokenInClaimIfStopped: isSet(object.allowImmediateTokenInClaimIfStopped) ? Boolean(object.allowImmediateTokenInClaimIfStopped) : false,
      limitPrice: isSet(object.limitPrice) ? String(object.limitPrice) : "",
      exitWindowDuration: isSet(object.exitWindowDuration) ? Duration.fromJSON(object.exitWindowDuration) : undefined
    };
  },
  toJSON(message: FlowCreationRequest): unknown {
    const obj: any = {};
    message.flowInfo !== undefined && (obj.flowInfo = message.flowInfo ? FlowInfo.toJSON(message.flowInfo) : undefined);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.distInterval !== undefined && (obj.distInterval = message.distInterval ? Duration.toJSON(message.distInterval) : undefined);
    message.treasuryAddress !== undefined && (obj.treasuryAddress = message.treasuryAddress);
    message.tokensOut !== undefined && (obj.tokensOut = message.tokensOut ? Coin.toJSON(message.tokensOut) : undefined);
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOutClaimableAfter !== undefined && (obj.tokenOutClaimableAfter = fromTimestamp(message.tokenOutClaimableAfter).toISOString());
    message.tokenInClaimableAfter !== undefined && (obj.tokenInClaimableAfter = fromTimestamp(message.tokenInClaimableAfter).toISOString());
    message.stoppable !== undefined && (obj.stoppable = message.stoppable);
    message.allowImmediateTokenOutClaimIfStopped !== undefined && (obj.allowImmediateTokenOutClaimIfStopped = message.allowImmediateTokenOutClaimIfStopped);
    message.allowImmediateTokenInClaimIfStopped !== undefined && (obj.allowImmediateTokenInClaimIfStopped = message.allowImmediateTokenInClaimIfStopped);
    message.limitPrice !== undefined && (obj.limitPrice = message.limitPrice);
    message.exitWindowDuration !== undefined && (obj.exitWindowDuration = message.exitWindowDuration ? Duration.toJSON(message.exitWindowDuration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<FlowCreationRequest>): FlowCreationRequest {
    const message = createBaseFlowCreationRequest();
    message.flowInfo = object.flowInfo !== undefined && object.flowInfo !== null ? FlowInfo.fromPartial(object.flowInfo) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.distInterval = object.distInterval !== undefined && object.distInterval !== null ? Duration.fromPartial(object.distInterval) : undefined;
    message.treasuryAddress = object.treasuryAddress ?? "";
    message.tokensOut = object.tokensOut !== undefined && object.tokensOut !== null ? Coin.fromPartial(object.tokensOut) : undefined;
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutClaimableAfter = object.tokenOutClaimableAfter !== undefined && object.tokenOutClaimableAfter !== null ? Timestamp.fromPartial(object.tokenOutClaimableAfter) : undefined;
    message.tokenInClaimableAfter = object.tokenInClaimableAfter !== undefined && object.tokenInClaimableAfter !== null ? Timestamp.fromPartial(object.tokenInClaimableAfter) : undefined;
    message.stoppable = object.stoppable ?? false;
    message.allowImmediateTokenOutClaimIfStopped = object.allowImmediateTokenOutClaimIfStopped ?? false;
    message.allowImmediateTokenInClaimIfStopped = object.allowImmediateTokenInClaimIfStopped ?? false;
    message.limitPrice = object.limitPrice ?? "";
    message.exitWindowDuration = object.exitWindowDuration !== undefined && object.exitWindowDuration !== null ? Duration.fromPartial(object.exitWindowDuration) : undefined;
    return message;
  },
  fromAmino(object: FlowCreationRequestAmino): FlowCreationRequest {
    const message = createBaseFlowCreationRequest();
    if (object.flow_info !== undefined && object.flow_info !== null) {
      message.flowInfo = FlowInfo.fromAmino(object.flow_info);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.dist_interval !== undefined && object.dist_interval !== null) {
      message.distInterval = Duration.fromAmino(object.dist_interval);
    }
    if (object.treasury_address !== undefined && object.treasury_address !== null) {
      message.treasuryAddress = object.treasury_address;
    }
    if (object.tokens_out !== undefined && object.tokens_out !== null) {
      message.tokensOut = Coin.fromAmino(object.tokens_out);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.token_out_claimable_after !== undefined && object.token_out_claimable_after !== null) {
      message.tokenOutClaimableAfter = Timestamp.fromAmino(object.token_out_claimable_after);
    }
    if (object.token_in_claimable_after !== undefined && object.token_in_claimable_after !== null) {
      message.tokenInClaimableAfter = Timestamp.fromAmino(object.token_in_claimable_after);
    }
    if (object.stoppable !== undefined && object.stoppable !== null) {
      message.stoppable = object.stoppable;
    }
    if (object.allow_immediate_token_out_claim_if_stopped !== undefined && object.allow_immediate_token_out_claim_if_stopped !== null) {
      message.allowImmediateTokenOutClaimIfStopped = object.allow_immediate_token_out_claim_if_stopped;
    }
    if (object.allow_immediate_token_in_claim_if_stopped !== undefined && object.allow_immediate_token_in_claim_if_stopped !== null) {
      message.allowImmediateTokenInClaimIfStopped = object.allow_immediate_token_in_claim_if_stopped;
    }
    if (object.limit_price !== undefined && object.limit_price !== null) {
      message.limitPrice = object.limit_price;
    }
    if (object.exit_window_duration !== undefined && object.exit_window_duration !== null) {
      message.exitWindowDuration = Duration.fromAmino(object.exit_window_duration);
    }
    return message;
  },
  toAmino(message: FlowCreationRequest, useInterfaces: boolean = true): FlowCreationRequestAmino {
    const obj: any = {};
    obj.flow_info = message.flowInfo ? FlowInfo.toAmino(message.flowInfo, useInterfaces) : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime, useInterfaces) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime, useInterfaces) : undefined;
    obj.dist_interval = message.distInterval ? Duration.toAmino(message.distInterval, useInterfaces) : undefined;
    obj.treasury_address = message.treasuryAddress === "" ? undefined : message.treasuryAddress;
    obj.tokens_out = message.tokensOut ? Coin.toAmino(message.tokensOut, useInterfaces) : undefined;
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.token_out_claimable_after = message.tokenOutClaimableAfter ? Timestamp.toAmino(message.tokenOutClaimableAfter, useInterfaces) : undefined;
    obj.token_in_claimable_after = message.tokenInClaimableAfter ? Timestamp.toAmino(message.tokenInClaimableAfter, useInterfaces) : undefined;
    obj.stoppable = message.stoppable === false ? undefined : message.stoppable;
    obj.allow_immediate_token_out_claim_if_stopped = message.allowImmediateTokenOutClaimIfStopped === false ? undefined : message.allowImmediateTokenOutClaimIfStopped;
    obj.allow_immediate_token_in_claim_if_stopped = message.allowImmediateTokenInClaimIfStopped === false ? undefined : message.allowImmediateTokenInClaimIfStopped;
    obj.limit_price = padDecimal(message.limitPrice) === "" ? undefined : padDecimal(message.limitPrice);
    obj.exit_window_duration = message.exitWindowDuration ? Duration.toAmino(message.exitWindowDuration, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: FlowCreationRequestAminoMsg): FlowCreationRequest {
    return FlowCreationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowCreationRequestProtoMsg, useInterfaces: boolean = true): FlowCreationRequest {
    return FlowCreationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FlowCreationRequest): Uint8Array {
    return FlowCreationRequest.encode(message).finish();
  },
  toProtoMsg(message: FlowCreationRequest): FlowCreationRequestProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.FlowCreationRequest",
      value: FlowCreationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FlowCreationRequest.typeUrl, FlowCreationRequest);