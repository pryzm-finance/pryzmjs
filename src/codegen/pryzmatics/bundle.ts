import * as _237 from "./asset/asset";
import * as _238 from "./common/time_resolution";
import * as _239 from "./database/flowtrade/flow_position_pair";
import * as _240 from "./database/trade/order";
import * as _241 from "./database/trade/user_trade_history";
import * as _242 from "./flowtrade/flow_historical_price";
import * as _243 from "./flowtrade/flow_position_pair";
import * as _244 from "./flowtrade/participation_type";
import * as _245 from "./icstaking/host_chain";
import * as _246 from "./maturity/maturity";
import * as _247 from "./oracle/ballot_vote_result";
import * as _248 from "./oracle/pre_vote";
import * as _249 from "./oracle/slash_window";
import * as _250 from "./oracle/validator_slash_window_summary";
import * as _251 from "./oracle/validator_vote_interval_summary";
import * as _252 from "./oracle/validator";
import * as _253 from "./oracle/vote_interval_report";
import * as _254 from "./oracle/vote_interval";
import * as _255 from "./oracle/vote_summary";
import * as _256 from "./oracle/vote";
import * as _257 from "./pgov/pgov";
import * as _258 from "./pool/extended_pool";
import * as _259 from "./pool/historical_pool_apr";
import * as _260 from "./pool/historical_token_yield";
import * as _261 from "./pool/pool_apr";
import * as _262 from "./pool/pool_token";
import * as _263 from "./pool/pool";
import * as _264 from "./pool/token_yield";
import * as _265 from "./pool/token";
import * as _266 from "./price/historical_price";
import * as _267 from "./price/token_price";
import * as _268 from "./server/query";
import * as _269 from "./trade/order";
import * as _270 from "./trade/pool_trade_history";
import * as _271 from "./trade/pulse_tradable_pair";
import * as _272 from "./trade/trade_volume";
import * as _273 from "./trade/user_trade_history";
import * as _274 from "./ystaking/user_stake";
import * as _457 from "./server/query.lcd";
import * as _458 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._237
  };
  export const common = {
    ..._238
  };
  export namespace database {
    export const flowtrade = {
      ..._239
    };
    export const trade = {
      ..._240,
      ..._241
    };
  }
  export const flowtrade = {
    ..._242,
    ..._243,
    ..._244
  };
  export const icstaking = {
    ..._245
  };
  export const maturity = {
    ..._246
  };
  export const oracle = {
    ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._255,
    ..._256
  };
  export const pgov = {
    ..._257
  };
  export const pool = {
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263,
    ..._264,
    ..._265
  };
  export const price = {
    ..._266,
    ..._267
  };
  export const server = {
    ..._268,
    ..._457,
    ..._458
  };
  export const trade = {
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._273
  };
  export const ystaking = {
    ..._274
  };
}