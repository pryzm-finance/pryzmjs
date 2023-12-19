import * as _233 from "./asset/asset";
import * as _234 from "./common/time_resolution";
import * as _235 from "./flowtrade/flow_historical_price";
import * as _236 from "./flowtrade/flow_position_pair";
import * as _237 from "./flowtrade/participation_type";
import * as _238 from "./icstaking/host_chain";
import * as _239 from "./maturity/maturity";
import * as _240 from "./oracle/ballot_vote_result";
import * as _241 from "./oracle/pre_vote";
import * as _242 from "./oracle/slash_window";
import * as _243 from "./oracle/validator_slash_window_summary";
import * as _244 from "./oracle/validator_vote_interval_summary";
import * as _245 from "./oracle/validator";
import * as _246 from "./oracle/vote_interval_report";
import * as _247 from "./oracle/vote_interval";
import * as _248 from "./oracle/vote_summary";
import * as _249 from "./oracle/vote";
import * as _250 from "./pgov/pgov";
import * as _251 from "./pool/extended_pool";
import * as _252 from "./pool/historical_pool_apr";
import * as _253 from "./pool/historical_token_yield";
import * as _254 from "./pool/pool_apr";
import * as _255 from "./pool/pool_token";
import * as _256 from "./pool/pool";
import * as _257 from "./pool/token_yield";
import * as _258 from "./pool/token";
import * as _259 from "./price/historical_price";
import * as _260 from "./price/token_price";
import * as _261 from "./server/query";
import * as _262 from "./trade/order";
import * as _263 from "./trade/pool_trade_history";
import * as _264 from "./trade/pulse_tradable_pair";
import * as _265 from "./trade/trade_volume";
import * as _266 from "./trade/user_trade_history";
import * as _267 from "./ystaking/user_stake";
import * as _448 from "./server/query.lcd";
import * as _449 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._233
  };
  export const common = {
    ..._234
  };
  export const flowtrade = {
    ..._235,
    ..._236,
    ..._237
  };
  export const icstaking = {
    ..._238
  };
  export const maturity = {
    ..._239
  };
  export const oracle = {
    ..._240,
    ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249
  };
  export const pgov = {
    ..._250
  };
  export const pool = {
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._255,
    ..._256,
    ..._257,
    ..._258
  };
  export const price = {
    ..._259,
    ..._260
  };
  export const server = {
    ..._261,
    ..._448,
    ..._449
  };
  export const trade = {
    ..._262,
    ..._263,
    ..._264,
    ..._265,
    ..._266
  };
  export const ystaking = {
    ..._267
  };
}