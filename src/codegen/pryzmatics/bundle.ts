import * as _238 from "./asset/asset";
import * as _239 from "./common/time_resolution";
import * as _240 from "./database/flowtrade/flow_position_pair";
import * as _241 from "./database/trade/order";
import * as _242 from "./database/trade/user_trade_history";
import * as _243 from "./flowtrade/flow_historical_price";
import * as _244 from "./flowtrade/flow_position_pair";
import * as _245 from "./flowtrade/participation_type";
import * as _246 from "./icstaking/host_chain";
import * as _247 from "./maturity/maturity";
import * as _248 from "./oracle/ballot_vote_result";
import * as _249 from "./oracle/pre_vote";
import * as _250 from "./oracle/slash_window";
import * as _251 from "./oracle/validator_slash_window_summary";
import * as _252 from "./oracle/validator_vote_interval_summary";
import * as _253 from "./oracle/validator";
import * as _254 from "./oracle/vote_interval_report";
import * as _255 from "./oracle/vote_interval";
import * as _256 from "./oracle/vote_summary";
import * as _257 from "./oracle/vote";
import * as _258 from "./pgov/pgov";
import * as _259 from "./pool/extended_pool";
import * as _260 from "./pool/historical_pool_apr";
import * as _261 from "./pool/historical_token_yield";
import * as _262 from "./pool/pool_apr";
import * as _263 from "./pool/pool_token";
import * as _264 from "./pool/pool";
import * as _265 from "./pool/token_yield";
import * as _266 from "./pool/token";
import * as _267 from "./price/historical_price";
import * as _268 from "./price/token_price";
import * as _269 from "./server/query";
import * as _270 from "./trade/order";
import * as _271 from "./trade/pool_trade_history";
import * as _272 from "./trade/pulse_tradable_pair";
import * as _273 from "./trade/trade_volume";
import * as _274 from "./trade/user_trade_history";
import * as _275 from "./ystaking/user_stake";
import * as _458 from "./server/query.lcd";
import * as _459 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._238
  };
  export const common = {
    ..._239
  };
  export namespace database {
    export const flowtrade = {
      ..._240
    };
    export const trade = {
      ..._241,
      ..._242
    };
  }
  export const flowtrade = {
    ..._243,
    ..._244,
    ..._245
  };
  export const icstaking = {
    ..._246
  };
  export const maturity = {
    ..._247
  };
  export const oracle = {
    ..._248,
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._255,
    ..._256,
    ..._257
  };
  export const pgov = {
    ..._258
  };
  export const pool = {
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263,
    ..._264,
    ..._265,
    ..._266
  };
  export const price = {
    ..._267,
    ..._268
  };
  export const server = {
    ..._269,
    ..._458,
    ..._459
  };
  export const trade = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274
  };
  export const ystaking = {
    ..._275
  };
}