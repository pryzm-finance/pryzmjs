import * as _274 from "./asset/asset";
import * as _275 from "./common/time_resolution";
import * as _276 from "./flowtrade/flow_historical_price";
import * as _277 from "./flowtrade/flow_position_pair";
import * as _278 from "./flowtrade/participation_type";
import * as _279 from "./icstaking/host_chain";
import * as _280 from "./maturity/maturity";
import * as _281 from "./oracle/ballot_vote_result";
import * as _282 from "./oracle/pre_vote";
import * as _283 from "./oracle/slash_window";
import * as _284 from "./oracle/validator_slash_window_summary";
import * as _285 from "./oracle/validator_vote_interval_summary";
import * as _286 from "./oracle/validator";
import * as _287 from "./oracle/vote_interval_report";
import * as _288 from "./oracle/vote_interval";
import * as _289 from "./oracle/vote_summary";
import * as _290 from "./oracle/vote";
import * as _291 from "./pgov/pgov";
import * as _292 from "./pool/historical_pool_apr";
import * as _293 from "./pool/historical_token_yield";
import * as _294 from "./pool/pool_apr";
import * as _295 from "./pool/pool_token";
import * as _296 from "./pool/pool";
import * as _297 from "./pool/token_yield";
import * as _298 from "./pool/token";
import * as _299 from "./price/historical_price";
import * as _300 from "./price/token_price";
import * as _302 from "./trade/order";
import * as _303 from "./trade/pool_trade_history";
import * as _304 from "./trade/pulse_tradable_pair";
import * as _305 from "./trade/trade_volume";
import * as _306 from "./trade/user_trade_history";
import * as _307 from "./ystaking/user_stake";
import * as _515 from "./server/query.lcd";
import * as _534 from "./lcd";
export namespace pryzmatics {
  export const asset = {
    ..._274
  };
  export const common = {
    ..._275
  };
  export const flowtrade = {
    ..._276,
    ..._277,
    ..._278
  };
  export const icstaking = {
    ..._279
  };
  export const maturity = {
    ..._280
  };
  export const oracle = {
    ..._281,
    ..._282,
    ..._283,
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._289,
    ..._290
  };
  export const pgov = {
    ..._291
  };
  export const pool = {
    ..._292,
    ..._293,
    ..._294,
    ..._295,
    ..._296,
    ..._297,
    ..._298
  };
  export const price = {
    ..._299,
    ..._300
  };
  export const server = {
    ..._515,
  };
  export const trade = {
    ..._302,
    ..._303,
    ..._304,
    ..._305,
    ..._306
  };
  export const ystaking = {
    ..._307
  };
  export const ClientFactory = {
    ..._534,
  };
}