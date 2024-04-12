import * as _250 from "./asset/asset";
import * as _251 from "./common/time_resolution";
import * as _252 from "./database/flowtrade/flow_position_pair";
import * as _253 from "./database/gov/proposal";
import * as _254 from "./database/gov/vote";
import * as _255 from "./database/trade/order";
import * as _256 from "./database/trade/user_trade_history";
import * as _257 from "./flowtrade/flow_historical_price";
import * as _258 from "./flowtrade/flow_position_pair";
import * as _259 from "./flowtrade/participation_type";
import * as _260 from "./gov/proposal";
import * as _261 from "./gov/tally_result";
import * as _262 from "./gov/vote";
import * as _263 from "./icstaking/host_chain";
import * as _264 from "./maturity/maturity";
import * as _265 from "./oracle/ballot_vote_result";
import * as _266 from "./oracle/pre_vote";
import * as _267 from "./oracle/slash_window";
import * as _268 from "./oracle/validator_slash_window_summary";
import * as _269 from "./oracle/validator_vote_interval_summary";
import * as _270 from "./oracle/validator";
import * as _271 from "./oracle/vote_interval_report";
import * as _272 from "./oracle/vote_interval";
import * as _273 from "./oracle/vote_summary";
import * as _274 from "./oracle/vote";
import * as _275 from "./pgov/pgov";
import * as _276 from "./pool/extended_pool";
import * as _277 from "./pool/historical_pool_apr";
import * as _278 from "./pool/historical_token_yield";
import * as _279 from "./pool/pool_apr";
import * as _280 from "./pool/pool_token";
import * as _281 from "./pool/pool";
import * as _282 from "./pool/token_yield";
import * as _283 from "./pool/token";
import * as _284 from "./price/historical_price";
import * as _285 from "./price/token_price";
import * as _286 from "./server/query";
import * as _287 from "./statistics/market_cap";
import * as _288 from "./statistics/misc";
import * as _289 from "./statistics/treasury";
import * as _290 from "./statistics/tvl";
import * as _291 from "./trade/order";
import * as _292 from "./trade/pool_trade_history";
import * as _293 from "./trade/pulse_tradable_pair";
import * as _294 from "./trade/trade_volume";
import * as _295 from "./trade/user_trade_history";
import * as _296 from "./ystaking/user_stake";
import * as _479 from "./server/query.lcd";
import * as _480 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._250
  };
  export const common = {
    ..._251
  };
  export namespace database {
    export const flowtrade = {
      ..._252
    };
    export const gov = {
      ..._253,
      ..._254
    };
    export const trade = {
      ..._255,
      ..._256
    };
  }
  export const flowtrade = {
    ..._257,
    ..._258,
    ..._259
  };
  export const gov = {
    ..._260,
    ..._261,
    ..._262
  };
  export const icstaking = {
    ..._263
  };
  export const maturity = {
    ..._264
  };
  export const oracle = {
    ..._265,
    ..._266,
    ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274
  };
  export const pgov = {
    ..._275
  };
  export const pool = {
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._280,
    ..._281,
    ..._282,
    ..._283
  };
  export const price = {
    ..._284,
    ..._285
  };
  export const server = {
    ..._286,
    ..._479,
    ..._480
  };
  export const statistics = {
    ..._287,
    ..._288,
    ..._289,
    ..._290
  };
  export const trade = {
    ..._291,
    ..._292,
    ..._293,
    ..._294,
    ..._295
  };
  export const ystaking = {
    ..._296
  };
}