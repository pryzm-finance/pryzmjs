import * as _235 from "./asset/asset";
import * as _236 from "./common/time_resolution";
import * as _237 from "./flowtrade/flow_historical_price";
import * as _238 from "./flowtrade/flow_position_pair";
import * as _239 from "./flowtrade/participation_type";
import * as _240 from "./icstaking/host_chain";
import * as _241 from "./maturity/maturity";
import * as _242 from "./oracle/ballot_vote_result";
import * as _243 from "./oracle/pre_vote";
import * as _244 from "./oracle/slash_window";
import * as _245 from "./oracle/validator_slash_window_summary";
import * as _246 from "./oracle/validator_vote_interval_summary";
import * as _247 from "./oracle/validator";
import * as _248 from "./oracle/vote_interval_report";
import * as _249 from "./oracle/vote_interval";
import * as _250 from "./oracle/vote_summary";
import * as _251 from "./oracle/vote";
import * as _252 from "./pgov/pgov";
import * as _253 from "./pool/extended_pool";
import * as _254 from "./pool/historical_pool_apr";
import * as _255 from "./pool/historical_token_yield";
import * as _256 from "./pool/pool_apr";
import * as _257 from "./pool/pool_token";
import * as _258 from "./pool/pool";
import * as _259 from "./pool/token_yield";
import * as _260 from "./pool/token";
import * as _261 from "./price/historical_price";
import * as _262 from "./price/token_price";
import * as _263 from "./server/query";
import * as _264 from "./trade/order";
import * as _265 from "./trade/pool_trade_history";
import * as _266 from "./trade/pulse_tradable_pair";
import * as _267 from "./trade/trade_volume";
import * as _268 from "./trade/user_trade_history";
import * as _269 from "./ystaking/user_stake";
import * as _452 from "./server/query.lcd";
import * as _453 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._235
  };
  export const common = {
    ..._236
  };
  export const flowtrade = {
    ..._237,
    ..._238,
    ..._239
  };
  export const icstaking = {
    ..._240
  };
  export const maturity = {
    ..._241
  };
  export const oracle = {
    ..._242,
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._251
  };
  export const pgov = {
    ..._252
  };
  export const pool = {
    ..._253,
    ..._254,
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._259,
    ..._260
  };
  export const price = {
    ..._261,
    ..._262
  };
  export const server = {
    ..._263,
    ..._452,
    ..._453
  };
  export const trade = {
    ..._264,
    ..._265,
    ..._266,
    ..._267,
    ..._268
  };
  export const ystaking = {
    ..._269
  };
}