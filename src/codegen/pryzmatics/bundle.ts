import * as _275 from "./asset/asset";
import * as _276 from "./common/time_resolution";
import * as _277 from "./flowtrade/flow_historical_price";
import * as _278 from "./flowtrade/flow_position_pair";
import * as _279 from "./flowtrade/participation_type";
import * as _280 from "./icstaking/host_chain";
import * as _281 from "./maturity/maturity";
import * as _282 from "./oracle/ballot_vote_result";
import * as _283 from "./oracle/pre_vote";
import * as _284 from "./oracle/slash_window";
import * as _285 from "./oracle/validator_slash_window_summary";
import * as _286 from "./oracle/validator_vote_interval_summary";
import * as _287 from "./oracle/validator";
import * as _288 from "./oracle/vote_interval_report";
import * as _289 from "./oracle/vote_interval";
import * as _290 from "./oracle/vote_summary";
import * as _291 from "./oracle/vote";
import * as _292 from "./pgov/pgov";
import * as _293 from "./pool/extended_pool";
import * as _294 from "./pool/historical_pool_apr";
import * as _295 from "./pool/historical_token_yield";
import * as _296 from "./pool/pool_apr";
import * as _297 from "./pool/pool_token";
import * as _298 from "./pool/pool";
import * as _299 from "./pool/token_yield";
import * as _300 from "./pool/token";
import * as _301 from "./price/historical_price";
import * as _302 from "./price/token_price";
import * as _304 from "./trade/order";
import * as _305 from "./trade/pool_trade_history";
import * as _306 from "./trade/pulse_tradable_pair";
import * as _307 from "./trade/trade_volume";
import * as _308 from "./trade/user_trade_history";
import * as _309 from "./ystaking/user_stake";
import * as _517 from "./server/query.lcd";
import * as _536 from "./lcd";
export namespace pryzmatics {
  export const asset = {
    ..._275
  };
  export const common = {
    ..._276
  };
  export const flowtrade = {
    ..._277,
    ..._278,
    ..._279
  };
  export const icstaking = {
    ..._280
  };
  export const maturity = {
    ..._281
  };
  export const oracle = {
    ..._282,
    ..._283,
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._289,
    ..._290,
    ..._291
  };
  export const pgov = {
    ..._292
  };
  export const pool = {
    ..._293,
    ..._294,
    ..._295,
    ..._296,
    ..._297,
    ..._298,
    ..._299,
    ..._300
  };
  export const price = {
    ..._301,
    ..._302
  };
  export const server = {
    ..._517,
  };
  export const trade = {
    ..._304,
    ..._305,
    ..._306,
    ..._307,
    ..._308
  };
  export const ystaking = {
    ..._309
  };
  export const ClientFactory = {
    ..._536,
  };
}