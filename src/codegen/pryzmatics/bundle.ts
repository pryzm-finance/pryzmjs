import * as _248 from "./asset/asset";
import * as _249 from "./common/time_resolution";
import * as _250 from "./database/flowtrade/flow_position_pair";
import * as _251 from "./database/gov/proposal";
import * as _252 from "./database/gov/vote";
import * as _253 from "./database/trade/order";
import * as _254 from "./database/trade/user_trade_history";
import * as _255 from "./flowtrade/flow_historical_price";
import * as _256 from "./flowtrade/flow_position_pair";
import * as _257 from "./flowtrade/participation_type";
import * as _258 from "./gov/proposal";
import * as _259 from "./gov/tally_result";
import * as _260 from "./gov/vote";
import * as _261 from "./icstaking/host_chain";
import * as _262 from "./maturity/maturity";
import * as _263 from "./oracle/ballot_vote_result";
import * as _264 from "./oracle/pre_vote";
import * as _265 from "./oracle/slash_window";
import * as _266 from "./oracle/validator_slash_window_summary";
import * as _267 from "./oracle/validator_vote_interval_summary";
import * as _268 from "./oracle/validator";
import * as _269 from "./oracle/vote_interval_report";
import * as _270 from "./oracle/vote_interval";
import * as _271 from "./oracle/vote_summary";
import * as _272 from "./oracle/vote";
import * as _273 from "./pgov/pgov";
import * as _274 from "./pool/extended_pool";
import * as _275 from "./pool/historical_pool_apr";
import * as _276 from "./pool/historical_token_yield";
import * as _277 from "./pool/pool_apr";
import * as _278 from "./pool/pool_token";
import * as _279 from "./pool/pool";
import * as _280 from "./pool/token_yield";
import * as _281 from "./pool/token";
import * as _282 from "./price/historical_price";
import * as _283 from "./price/token_price";
import * as _284 from "./server/query";
import * as _285 from "./statistics/market_cap";
import * as _286 from "./statistics/treasury";
import * as _287 from "./statistics/tvl";
import * as _288 from "./trade/order";
import * as _289 from "./trade/pool_trade_history";
import * as _290 from "./trade/pulse_tradable_pair";
import * as _291 from "./trade/trade_volume";
import * as _292 from "./trade/user_trade_history";
import * as _293 from "./ystaking/user_stake";
import * as _476 from "./server/query.lcd";
import * as _477 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._248
  };
  export const common = {
    ..._249
  };
  export namespace database {
    export const flowtrade = {
      ..._250
    };
    export const gov = {
      ..._251,
      ..._252
    };
    export const trade = {
      ..._253,
      ..._254
    };
  }
  export const flowtrade = {
    ..._255,
    ..._256,
    ..._257
  };
  export const gov = {
    ..._258,
    ..._259,
    ..._260
  };
  export const icstaking = {
    ..._261
  };
  export const maturity = {
    ..._262
  };
  export const oracle = {
    ..._263,
    ..._264,
    ..._265,
    ..._266,
    ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272
  };
  export const pgov = {
    ..._273
  };
  export const pool = {
    ..._274,
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._280,
    ..._281
  };
  export const price = {
    ..._282,
    ..._283
  };
  export const server = {
    ..._284,
    ..._476,
    ..._477
  };
  export const statistics = {
    ..._285,
    ..._286,
    ..._287
  };
  export const trade = {
    ..._288,
    ..._289,
    ..._290,
    ..._291,
    ..._292
  };
  export const ystaking = {
    ..._293
  };
}