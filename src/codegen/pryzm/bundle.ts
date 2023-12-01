import * as _194 from "./amm/v1/event";
import * as _195 from "./amm/v1/genesis";
import * as _196 from "./amm/v1/operations";
import * as _197 from "./amm/v1/oracle_payload";
import * as _198 from "./amm/v1/oracle_price_pair";
import * as _199 from "./amm/v1/order";
import * as _200 from "./amm/v1/pair_match_proposal";
import * as _201 from "./amm/v1/params";
import * as _202 from "./amm/v1/pending_token_introduction";
import * as _203 from "./amm/v1/pool_token";
import * as _204 from "./amm/v1/pool";
import * as _205 from "./amm/v1/query";
import * as _206 from "./amm/v1/route_step";
import * as _207 from "./amm/v1/schedule_order_count";
import * as _208 from "./amm/v1/schedule_order";
import * as _209 from "./amm/v1/token_circuit_breaker_settings";
import * as _210 from "./amm/v1/token_weight";
import * as _211 from "./amm/v1/tx";
import * as _212 from "./amm/v1/virtual_balance_pool_token";
import * as _213 from "./amm/v1/weight_update_timing";
import * as _214 from "./amm/v1/weighted_token";
import * as _215 from "./amm/v1/whitelisted_route";
import * as _216 from "./amm/v1/yamm_configuration";
import * as _217 from "./assets/v1/event";
import * as _218 from "./assets/v1/genesis";
import * as _219 from "./assets/v1/maturity_level";
import * as _220 from "./assets/v1/oracle_payload";
import * as _221 from "./assets/v1/params";
import * as _222 from "./assets/v1/query";
import * as _223 from "./assets/v1/refractable_asset";
import * as _224 from "./assets/v1/tx";
import * as _225 from "./icstaking/v1/event";
import * as _226 from "./icstaking/v1/genesis";
import * as _227 from "./icstaking/v1/host_chain";
import * as _228 from "./icstaking/v1/oracle_payload";
import * as _229 from "./icstaking/v1/params";
import * as _230 from "./icstaking/v1/query";
import * as _231 from "./icstaking/v1/reply";
import * as _232 from "./icstaking/v1/tx";
import * as _233 from "./icstaking/v1/undelegation";
import * as _234 from "./incentives/v1/bond";
import * as _235 from "./incentives/v1/event";
import * as _236 from "./incentives/v1/genesis";
import * as _237 from "./incentives/v1/params";
import * as _238 from "./incentives/v1/pool";
import * as _239 from "./incentives/v1/query";
import * as _240 from "./incentives/v1/tx";
import * as _241 from "./incentives/v1/unbonding";
import * as _242 from "./mint/v1/event";
import * as _243 from "./mint/v1/genesis";
import * as _244 from "./mint/v1/minter";
import * as _245 from "./mint/v1/params";
import * as _246 from "./mint/v1/query";
import * as _247 from "./mint/v1/tx";
import * as _248 from "./pgov/v1/event";
import * as _249 from "./pgov/v1/genesis";
import * as _250 from "./pgov/v1/params";
import * as _251 from "./pgov/v1/proposal";
import * as _252 from "./pgov/v1/query";
import * as _253 from "./pgov/v1/staked_p_asset";
import * as _254 from "./pgov/v1/tx";
import * as _255 from "./pgov/v1/vote";
import * as _256 from "./refractor/v1/asset_state";
import * as _257 from "./refractor/v1/event";
import * as _258 from "./refractor/v1/genesis";
import * as _259 from "./refractor/v1/query";
import * as _260 from "./refractor/v1/tx";
import * as _261 from "./treasury/v1/action";
import * as _262 from "./treasury/v1/event";
import * as _263 from "./treasury/v1/flow_trade";
import * as _264 from "./treasury/v1/genesis";
import * as _265 from "./treasury/v1/params";
import * as _266 from "./treasury/v1/query";
import * as _267 from "./treasury/v1/tx";
import * as _268 from "./ystaking/v1/asset_pool_state";
import * as _269 from "./ystaking/v1/event";
import * as _270 from "./ystaking/v1/genesis";
import * as _271 from "./ystaking/v1/query";
import * as _272 from "./ystaking/v1/tx";
import * as _273 from "./ystaking/v1/user_stake_state";
import * as _474 from "./amm/v1/tx.amino";
import * as _475 from "./assets/v1/tx.amino";
import * as _476 from "./icstaking/v1/tx.amino";
import * as _477 from "./incentives/v1/tx.amino";
import * as _478 from "./mint/v1/tx.amino";
import * as _479 from "./pgov/v1/tx.amino";
import * as _480 from "./refractor/v1/tx.amino";
import * as _481 from "./treasury/v1/tx.amino";
import * as _482 from "./ystaking/v1/tx.amino";
import * as _483 from "./amm/v1/tx.registry";
import * as _484 from "./assets/v1/tx.registry";
import * as _485 from "./icstaking/v1/tx.registry";
import * as _486 from "./incentives/v1/tx.registry";
import * as _487 from "./mint/v1/tx.registry";
import * as _488 from "./pgov/v1/tx.registry";
import * as _489 from "./refractor/v1/tx.registry";
import * as _490 from "./treasury/v1/tx.registry";
import * as _491 from "./ystaking/v1/tx.registry";
import * as _492 from "./amm/v1/query.lcd";
import * as _493 from "./assets/v1/query.lcd";
import * as _494 from "./icstaking/v1/query.lcd";
import * as _495 from "./incentives/v1/query.lcd";
import * as _496 from "./mint/v1/query.lcd";
import * as _497 from "./pgov/v1/query.lcd";
import * as _498 from "./refractor/v1/query.lcd";
import * as _499 from "./treasury/v1/query.lcd";
import * as _500 from "./ystaking/v1/query.lcd";
import * as _501 from "./amm/v1/query.rpc.Query";
import * as _502 from "./assets/v1/query.rpc.Query";
import * as _503 from "./icstaking/v1/query.rpc.Query";
import * as _504 from "./incentives/v1/query.rpc.Query";
import * as _505 from "./mint/v1/query.rpc.Query";
import * as _506 from "./pgov/v1/query.rpc.Query";
import * as _507 from "./refractor/v1/query.rpc.Query";
import * as _508 from "./treasury/v1/query.rpc.Query";
import * as _509 from "./ystaking/v1/query.rpc.Query";
import * as _510 from "./amm/v1/tx.rpc.msg";
import * as _511 from "./assets/v1/tx.rpc.msg";
import * as _512 from "./icstaking/v1/tx.rpc.msg";
import * as _513 from "./incentives/v1/tx.rpc.msg";
import * as _514 from "./mint/v1/tx.rpc.msg";
import * as _515 from "./pgov/v1/tx.rpc.msg";
import * as _516 from "./refractor/v1/tx.rpc.msg";
import * as _517 from "./treasury/v1/tx.rpc.msg";
import * as _518 from "./ystaking/v1/tx.rpc.msg";
import * as _545 from "./lcd";
import * as _546 from "./rpc.query";
import * as _547 from "./rpc.tx";
export namespace pryzm {
  export namespace amm {
    export const v1 = {
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._474,
      ..._483,
      ..._492,
      ..._501,
      ..._510
    };
  }
  export namespace assets {
    export const v1 = {
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._475,
      ..._484,
      ..._493,
      ..._502,
      ..._511
    };
  }
  export namespace icstaking {
    export const v1 = {
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._476,
      ..._485,
      ..._494,
      ..._503,
      ..._512
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._477,
      ..._486,
      ..._495,
      ..._504,
      ..._513
    };
  }
  export namespace mint {
    export const v1 = {
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._478,
      ..._487,
      ..._496,
      ..._505,
      ..._514
    };
  }
  export namespace pgov {
    export const v1 = {
      ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._479,
      ..._488,
      ..._497,
      ..._506,
      ..._515
    };
  }
  export namespace refractor {
    export const v1 = {
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._480,
      ..._489,
      ..._498,
      ..._507,
      ..._516
    };
  }
  export namespace treasury {
    export const v1 = {
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._481,
      ..._490,
      ..._499,
      ..._508,
      ..._517
    };
  }
  export namespace ystaking {
    export const v1 = {
      ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._272,
      ..._273,
      ..._482,
      ..._491,
      ..._500,
      ..._509,
      ..._518
    };
  }
  export const ClientFactory = {
    ..._545,
    ..._546,
    ..._547
  };
}