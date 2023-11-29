import * as _252 from "./asset/asset";
import * as _253 from "./common/time_resolution";
import * as _254 from "./flowtrade/flow_historical_price";
import * as _255 from "./icstaking/host_chain";
import * as _256 from "./maturity/maturity";
import * as _257 from "./oracle/ballot_vote_result";
import * as _258 from "./oracle/pre_vote";
import * as _259 from "./oracle/slash_window";
import * as _260 from "./oracle/validator_slash_window_summary";
import * as _261 from "./oracle/validator_vote_interval_summary";
import * as _262 from "./oracle/validator";
import * as _263 from "./oracle/vote_interval_report";
import * as _264 from "./oracle/vote_interval";
import * as _265 from "./oracle/vote_summary";
import * as _266 from "./oracle/vote";
import * as _267 from "./pgov/pgov";
import * as _268 from "./pool/historical_pool_apr";
import * as _269 from "./pool/historical_token_yield";
import * as _270 from "./pool/pool_apr";
import * as _271 from "./pool/pool_token";
import * as _272 from "./pool/pool";
import * as _273 from "./pool/token_yield";
import * as _274 from "./pool/token";
import * as _275 from "./price/historical_price";
import * as _276 from "./price/token_price";
import * as _278 from "./trade/order";
import * as _279 from "./trade/pool_trade_history";
import * as _280 from "./trade/pulse_tradable_pair";
import * as _281 from "./trade/trade_volume";
import * as _282 from "./trade/user_trade_history";
import * as _283 from "./ystaking/user_stake";
import * as _485 from "./server/query.lcd";
import * as _504 from "./lcd";
export namespace pryzmatics {
  export const asset = {
    ..._252
  };
  export const common = {
    ..._253
  };
  export const flowtrade = {
    ..._254
  };
  export const icstaking = {
    ..._255
  };
  export const maturity = {
    ..._256
  };
  export const oracle = {
    ..._257,
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263,
    ..._264,
    ..._265,
    ..._266
  };
  export const pgov = {
    ..._267
  };
  export const pool = {
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274
  };
  export const price = {
    ..._275,
    ..._276
  };
  export const server = {
    ..._485,
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
  export const ClientFactory = {
    ..._504,
  };
}