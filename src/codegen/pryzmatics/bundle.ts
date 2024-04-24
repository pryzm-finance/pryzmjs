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
import * as _264 from "./icstaking/transfer_channels";
import * as _265 from "./icstaking/validator_states";
import * as _266 from "./icstaking/validators";
import * as _267 from "./maturity/maturity";
import * as _268 from "./oracle/ballot_vote_result";
import * as _269 from "./oracle/pre_vote";
import * as _270 from "./oracle/slash_window";
import * as _271 from "./oracle/validator_slash_window_summary";
import * as _272 from "./oracle/validator_vote_interval_summary";
import * as _273 from "./oracle/validator";
import * as _274 from "./oracle/vote_interval_report";
import * as _275 from "./oracle/vote_interval";
import * as _276 from "./oracle/vote_summary";
import * as _277 from "./oracle/vote";
import * as _278 from "./pgov/pgov";
import * as _279 from "./pool/extended_pool";
import * as _280 from "./pool/historical_pool_apr";
import * as _281 from "./pool/historical_token_yield";
import * as _282 from "./pool/pool_apr";
import * as _283 from "./pool/pool_token";
import * as _284 from "./pool/pool";
import * as _285 from "./pool/token_yield";
import * as _286 from "./pool/token";
import * as _287 from "./price/historical_price";
import * as _288 from "./price/token_price";
import * as _289 from "./server/query";
import * as _290 from "./statistics/market_cap";
import * as _291 from "./statistics/misc";
import * as _292 from "./statistics/treasury";
import * as _293 from "./statistics/tvl";
import * as _294 from "./trade/order";
import * as _295 from "./trade/pool_trade_history";
import * as _296 from "./trade/pulse_tradable_pair";
import * as _297 from "./trade/route_steps";
import * as _298 from "./trade/swap_steps";
import * as _299 from "./trade/token_amounts";
import * as _300 from "./trade/trade_volume";
import * as _301 from "./trade/user_trade_history";
import * as _302 from "./ystaking/user_stake";
import * as _485 from "./server/query.lcd";
import * as _486 from "./server/query.rpc.Query";
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
    ..._263,
    ..._264,
    ..._265,
    ..._266
  };
  export const maturity = {
    ..._267
  };
  export const oracle = {
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._275,
    ..._276,
    ..._277
  };
  export const pgov = {
    ..._278
  };
  export const pool = {
    ..._279,
    ..._280,
    ..._281,
    ..._282,
    ..._283,
    ..._284,
    ..._285,
    ..._286
  };
  export const price = {
    ..._287,
    ..._288
  };
  export const server = {
    ..._289,
    ..._485,
    ..._486
  };
  export const statistics = {
    ..._290,
    ..._291,
    ..._292,
    ..._293
  };
  export const trade = {
    ..._294,
    ..._295,
    ..._296,
    ..._297,
    ..._298,
    ..._299,
    ..._300,
    ..._301
  };
  export const ystaking = {
    ..._302
  };
}