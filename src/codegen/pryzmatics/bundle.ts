import * as _215 from "./asset/asset";
import * as _216 from "./common/time_resolution";
import * as _217 from "./flowtrade/flow_historical_price";
import * as _218 from "./flowtrade/flow_position_pair";
import * as _219 from "./flowtrade/participation_type";
import * as _220 from "./icstaking/host_chain";
import * as _221 from "./maturity/maturity";
import * as _222 from "./oracle/ballot_vote_result";
import * as _223 from "./oracle/pre_vote";
import * as _224 from "./oracle/slash_window";
import * as _225 from "./oracle/validator_slash_window_summary";
import * as _226 from "./oracle/validator_vote_interval_summary";
import * as _227 from "./oracle/validator";
import * as _228 from "./oracle/vote_interval_report";
import * as _229 from "./oracle/vote_interval";
import * as _230 from "./oracle/vote_summary";
import * as _231 from "./oracle/vote";
import * as _232 from "./pgov/pgov";
import * as _233 from "./pool/extended_pool";
import * as _234 from "./pool/historical_pool_apr";
import * as _235 from "./pool/historical_token_yield";
import * as _236 from "./pool/pool_apr";
import * as _237 from "./pool/pool_token";
import * as _238 from "./pool/pool";
import * as _239 from "./pool/token_yield";
import * as _240 from "./pool/token";
import * as _241 from "./price/historical_price";
import * as _242 from "./price/token_price";
import * as _243 from "./server/query";
import * as _244 from "./trade/order";
import * as _245 from "./trade/pool_trade_history";
import * as _246 from "./trade/pulse_tradable_pair";
import * as _247 from "./trade/trade_volume";
import * as _248 from "./trade/user_trade_history";
import * as _249 from "./ystaking/user_stake";
import * as _432 from "./server/query.lcd";
import * as _433 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._215
  };
  export const common = {
    ..._216
  };
  export const flowtrade = {
    ..._217,
    ..._218,
    ..._219
  };
  export const icstaking = {
    ..._220
  };
  export const maturity = {
    ..._221
  };
  export const oracle = {
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231
  };
  export const pgov = {
    ..._232
  };
  export const pool = {
    ..._233,
    ..._234,
    ..._235,
    ..._236,
    ..._237,
    ..._238,
    ..._239,
    ..._240
  };
  export const price = {
    ..._241,
    ..._242
  };
  export const server = {
    ..._243,
    ..._432,
    ..._433
  };
  export const trade = {
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248
  };
  export const ystaking = {
    ..._249
  };
}