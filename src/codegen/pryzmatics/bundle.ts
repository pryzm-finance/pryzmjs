import * as _238 from "./asset/asset";
import * as _239 from "./common/time_resolution";
import * as _240 from "./database/flowtrade/flow_position_pair";
import * as _241 from "./database/gov/proposal";
import * as _242 from "./database/gov/vote";
import * as _243 from "./database/trade/order";
import * as _244 from "./database/trade/user_trade_history";
import * as _245 from "./flowtrade/flow_historical_price";
import * as _246 from "./flowtrade/flow_position_pair";
import * as _247 from "./flowtrade/participation_type";
import * as _248 from "./gov/proposal";
import * as _249 from "./gov/tally_result";
import * as _250 from "./gov/vote";
import * as _251 from "./icstaking/host_chain";
import * as _252 from "./maturity/maturity";
import * as _253 from "./oracle/ballot_vote_result";
import * as _254 from "./oracle/pre_vote";
import * as _255 from "./oracle/slash_window";
import * as _256 from "./oracle/validator_slash_window_summary";
import * as _257 from "./oracle/validator_vote_interval_summary";
import * as _258 from "./oracle/validator";
import * as _259 from "./oracle/vote_interval_report";
import * as _260 from "./oracle/vote_interval";
import * as _261 from "./oracle/vote_summary";
import * as _262 from "./oracle/vote";
import * as _263 from "./pgov/pgov";
import * as _264 from "./pool/extended_pool";
import * as _265 from "./pool/historical_pool_apr";
import * as _266 from "./pool/historical_token_yield";
import * as _267 from "./pool/pool_apr";
import * as _268 from "./pool/pool_token";
import * as _269 from "./pool/pool";
import * as _270 from "./pool/token_yield";
import * as _271 from "./pool/token";
import * as _272 from "./price/historical_price";
import * as _273 from "./price/token_price";
import * as _274 from "./server/query";
import * as _275 from "./statistics/market_cap";
import * as _276 from "./statistics/treasury";
import * as _277 from "./statistics/tvl";
import * as _278 from "./trade/order";
import * as _279 from "./trade/pool_trade_history";
import * as _280 from "./trade/pulse_tradable_pair";
import * as _281 from "./trade/trade_volume";
import * as _282 from "./trade/user_trade_history";
import * as _283 from "./ystaking/user_stake";
import * as _466 from "./server/query.lcd";
import * as _467 from "./server/query.rpc.Query";
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
    export const gov = {
      ..._241,
      ..._242
    };
    export const trade = {
      ..._243,
      ..._244
    };
  }
  export const flowtrade = {
    ..._245,
    ..._246,
    ..._247
  };
  export const gov = {
    ..._248,
    ..._249,
    ..._250
  };
  export const icstaking = {
    ..._251
  };
  export const maturity = {
    ..._252
  };
  export const oracle = {
    ..._253,
    ..._254,
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262
  };
  export const pgov = {
    ..._263
  };
  export const pool = {
    ..._264,
    ..._265,
    ..._266,
    ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271
  };
  export const price = {
    ..._272,
    ..._273
  };
  export const server = {
    ..._274,
    ..._466,
    ..._467
  };
  export const statistics = {
    ..._275,
    ..._276,
    ..._277
  };
  export const trade = {
    ..._278,
    ..._279,
    ..._280,
    ..._281,
    ..._282
  };
  export const ystaking = {
    ..._283
  };
}