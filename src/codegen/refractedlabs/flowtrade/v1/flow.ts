import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
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
  decode(input: BinaryReader | Uint8Array, length?: number): Flow {
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
          message.flowInfo = FlowInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.distInterval = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.treasuryAddress = reader.string();
          break;
        case 8:
          message.totalTokenOut = Coin.decode(reader, reader.uint32());
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
          message.creationDeposit = Coin.decode(reader, reader.uint32());
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
          message.exitWindowDuration = Duration.decode(reader, reader.uint32());
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
  }
};
function createBaseFlowInfo(): FlowInfo {
  return {
    name: "",
    description: "",
    url: ""
  };
}
export const FlowInfo = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): FlowInfo {
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
  }
};
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
  decode(input: BinaryReader | Uint8Array, length?: number): FlowCreationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowCreationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowInfo = FlowInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.distInterval = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.treasuryAddress = reader.string();
          break;
        case 6:
          message.tokensOut = Coin.decode(reader, reader.uint32());
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
          message.exitWindowDuration = Duration.decode(reader, reader.uint32());
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
  }
};