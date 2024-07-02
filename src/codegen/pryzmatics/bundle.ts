import * as _251 from "./asset/asset";
import * as _252 from "./common/time_resolution";
import * as _253 from "./database/flowtrade/flow_position_pair";
import * as _254 from "./database/gov/proposal";
import * as _255 from "./database/gov/vote";
import * as _256 from "./database/trade/order";
import * as _257 from "./database/trade/user_trade_history";
import * as _258 from "./flowtrade/flow_historical_price";
import * as _259 from "./flowtrade/flow_position_pair";
import * as _260 from "./flowtrade/participation_type";
import * as _261 from "./gov/proposal";
import * as _262 from "./gov/tally_result";
import * as _263 from "./gov/vote";
import * as _264 from "./icstaking/host_chain";
import * as _265 from "./icstaking/transfer_channels";
import * as _266 from "./icstaking/validator_states";
import * as _267 from "./icstaking/validators";
import * as _268 from "./maturity/maturity";
import * as _269 from "./oracle/ballot_vote_result";
import * as _270 from "./oracle/pre_vote";
import * as _271 from "./oracle/slash_window_analysis";
import * as _272 from "./oracle/slash_window";
import * as _273 from "./oracle/validator_slash_window_summary";
import * as _274 from "./oracle/validator_vote_interval_summary";
import * as _275 from "./oracle/validator";
import * as _276 from "./oracle/vote_interval_report";
import * as _277 from "./oracle/vote_interval";
import * as _278 from "./oracle/vote_summary";
import * as _279 from "./oracle/vote";
import * as _280 from "./pgov/pgov";
import * as _281 from "./pool/extended_pool";
import * as _282 from "./pool/historical_pool_apr";
import * as _283 from "./pool/historical_token_yield";
import * as _284 from "./pool/pool_apr";
import * as _285 from "./pool/pool_token";
import * as _286 from "./pool/pool";
import * as _287 from "./pool/token_yield";
import * as _288 from "./pool/token";
import * as _289 from "./price/historical_price";
import * as _290 from "./price/token_price";
import * as _291 from "./server/query";
import * as _292 from "./statistics/market_cap";
import * as _293 from "./statistics/misc";
import * as _294 from "./statistics/treasury";
import * as _295 from "./statistics/tvl";
import * as _296 from "./trade/directly_connected_token_pair";
import * as _297 from "./trade/operation_volume";
import * as _298 from "./trade/order";
import * as _299 from "./trade/pool_trade_history";
import * as _300 from "./trade/pulse_tradable_pair";
import * as _301 from "./trade/route_steps";
import * as _302 from "./trade/swap_steps";
import * as _303 from "./trade/token_amounts";
import * as _304 from "./trade/trade_volume";
import * as _305 from "./trade/user_trade_history";
import * as _306 from "./ystaking/user_stake";
import * as _489 from "./server/query.lcd";
import * as _490 from "./server/query.rpc.Query";
export namespace pryzmatics {
  export const asset = {
    ..._251
  };
  export const common = {
    ..._252
  };
  export namespace database {
    export const flowtrade = {
      ..._253
    };
    export const gov = {
      ..._254,
      ..._255
    };
    export const trade = {
      ..._256,
      ..._257
    };
  }
  export const flowtrade = {
    ..._258,
    ..._259,
    ..._260
  };
  export const gov = {
    ..._261,
    ..._262,
    ..._263
  };
  export const icstaking = {
    ..._264,
    ..._265,
    ..._266,
    ..._267
  };
  export const maturity = {
    ..._268
  };
  export const oracle = {
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279
  };
  export const pgov = {
    ..._280
  };
  export const pool = {
    ..._281,
    ..._282,
    ..._283,
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._288
  };
  export const price = {
    ..._289,
    ..._290
  };
  export const server = {
    ..._291,
    ..._489,
    ..._490
  };
  export const statistics = {
    ..._292,
    ..._293,
    ..._294,
    ..._295
  };
  export const trade = {
    ..._296,
    ..._297,
    ..._298,
    ..._299,
    ..._300,
    ..._301,
    ..._302,
    ..._303,
    ..._304,
    ..._305
  };
  export const ystaking = {
    ..._306
  };
}