import * as _235 from "./asset/asset";
import * as _236 from "./common/time_resolution";
import * as _237 from "./database/flowtrade/flow_position_pair";
import * as _238 from "./database/trade/order";
import * as _239 from "./flowtrade/flow_historical_price";
import * as _240 from "./flowtrade/flow_position_pair";
import * as _241 from "./flowtrade/participation_type";
import * as _242 from "./icstaking/host_chain";
import * as _243 from "./maturity/maturity";
import * as _244 from "./oracle/ballot_vote_result";
import * as _245 from "./oracle/pre_vote";
import * as _246 from "./oracle/slash_window";
import * as _247 from "./oracle/validator_slash_window_summary";
import * as _248 from "./oracle/validator_vote_interval_summary";
import * as _249 from "./oracle/validator";
import * as _250 from "./oracle/vote_interval_report";
import * as _251 from "./oracle/vote_interval";
import * as _252 from "./oracle/vote_summary";
import * as _253 from "./oracle/vote";
import * as _254 from "./pgov/pgov";
import * as _255 from "./pool/extended_pool";
import * as _256 from "./pool/historical_pool_apr";
import * as _257 from "./pool/historical_token_yield";
import * as _258 from "./pool/pool_apr";
import * as _259 from "./pool/pool_token";
import * as _260 from "./pool/pool";
import * as _261 from "./pool/token_yield";
import * as _262 from "./pool/token";
import * as _263 from "./price/historical_price";
import * as _264 from "./price/token_price";
import * as _265 from "./server/query";
import * as _266 from "./trade/order";
import * as _267 from "./trade/pool_trade_history";
import * as _268 from "./trade/pulse_tradable_pair";
import * as _269 from "./trade/trade_volume";
import * as _270 from "./trade/user_trade_history";
import * as _271 from "./ystaking/user_stake";
import * as _454 from "./server/query.lcd";
import * as _455 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._235
  };
  export const common = {
    ..._236
  };
  export namespace database {
    export const flowtrade = {
      ..._237
    };
    export const trade = {
      ..._238
    };
  }
  export const flowtrade = {
    ..._239,
    ..._240,
    ..._241
  };
  export const icstaking = {
    ..._242
  };
  export const maturity = {
    ..._243
  };
  export const oracle = {
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._253
  };
  export const pgov = {
    ..._254
  };
  export const pool = {
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262
  };
  export const price = {
    ..._263,
    ..._264
  };
  export const server = {
    ..._265,
    ..._454,
    ..._455
  };
  export const trade = {
    ..._266,
    ..._267,
    ..._268,
    ..._269,
    ..._270
  };
  export const ystaking = {
    ..._271
  };
}