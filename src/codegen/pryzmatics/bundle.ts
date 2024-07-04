import * as _251 from "./asset/asset";
import * as _252 from "./common/time_resolution";
import * as _253 from "./database/flowtrade/flow_position_pair";
import * as _254 from "./database/gov/proposal";
import * as _255 from "./database/gov/vote";
import * as _256 from "./database/maturity/maturity";
import * as _257 from "./database/trade/order";
import * as _258 from "./database/trade/user_trade_history";
import * as _259 from "./flowtrade/flow_historical_price";
import * as _260 from "./flowtrade/flow_position_pair";
import * as _261 from "./flowtrade/participation_type";
import * as _262 from "./gov/proposal";
import * as _263 from "./gov/tally_result";
import * as _264 from "./gov/vote";
import * as _265 from "./icstaking/host_chain";
import * as _266 from "./icstaking/transfer_channels";
import * as _267 from "./icstaking/validator_states";
import * as _268 from "./icstaking/validators";
import * as _269 from "./maturity/maturity";
import * as _270 from "./oracle/ballot_vote_result";
import * as _271 from "./oracle/pre_vote";
import * as _272 from "./oracle/slash_window_analysis";
import * as _273 from "./oracle/slash_window";
import * as _274 from "./oracle/validator_slash_window_summary";
import * as _275 from "./oracle/validator_vote_interval_summary";
import * as _276 from "./oracle/validator";
import * as _277 from "./oracle/vote_interval_report";
import * as _278 from "./oracle/vote_interval";
import * as _279 from "./oracle/vote_summary";
import * as _280 from "./oracle/vote";
import * as _281 from "./pgov/pgov";
import * as _282 from "./pool/extended_pool";
import * as _283 from "./pool/historical_pool_apr";
import * as _284 from "./pool/historical_token_yield";
import * as _285 from "./pool/pool_apr";
import * as _286 from "./pool/pool_token";
import * as _287 from "./pool/pool";
import * as _288 from "./pool/token_yield";
import * as _289 from "./pool/token";
import * as _290 from "./price/historical_price";
import * as _291 from "./price/token_price";
import * as _292 from "./server/query";
import * as _293 from "./statistics/market_cap";
import * as _294 from "./statistics/misc";
import * as _295 from "./statistics/treasury";
import * as _296 from "./statistics/tvl";
import * as _297 from "./trade/directly_connected_token_pair";
import * as _298 from "./trade/operation_volume";
import * as _299 from "./trade/order";
import * as _300 from "./trade/pool_trade_history";
import * as _301 from "./trade/pulse_tradable_pair";
import * as _302 from "./trade/route_steps";
import * as _303 from "./trade/swap_steps";
import * as _304 from "./trade/token_amounts";
import * as _305 from "./trade/trade_volume";
import * as _306 from "./trade/user_trade_history";
import * as _307 from "./ystaking/user_stake";
import * as _490 from "./server/query.lcd";
import * as _491 from "./server/query.rpc.Query";
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
    export const maturity = {
      ..._256
    };
    export const trade = {
      ..._257,
      ..._258
    };
  }
  export const flowtrade = {
    ..._259,
    ..._260,
    ..._261
  };
  export const gov = {
    ..._262,
    ..._263,
    ..._264
  };
  export const icstaking = {
    ..._265,
    ..._266,
    ..._267,
    ..._268
  };
  export const maturity = {
    ..._269
  };
  export const oracle = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._280
  };
  export const pgov = {
    ..._281
  };
  export const pool = {
    ..._282,
    ..._283,
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._289
  };
  export const price = {
    ..._290,
    ..._291
  };
  export const server = {
    ..._292,
    ..._490,
    ..._491
  };
  export const statistics = {
    ..._293,
    ..._294,
    ..._295,
    ..._296
  };
  export const trade = {
    ..._297,
    ..._298,
    ..._299,
    ..._300,
    ..._301,
    ..._302,
    ..._303,
    ..._304,
    ..._305,
    ..._306
  };
  export const ystaking = {
    ..._307
  };
}