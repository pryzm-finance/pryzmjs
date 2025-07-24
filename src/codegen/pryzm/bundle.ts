import * as _164 from "./amm/v1/event";
import * as _165 from "./amm/v1/genesis";
import * as _166 from "./amm/v1/operations";
import * as _167 from "./amm/v1/oracle_payload";
import * as _168 from "./amm/v1/oracle_price_pair";
import * as _169 from "./amm/v1/order";
import * as _170 from "./amm/v1/pair_match_proposal";
import * as _171 from "./amm/v1/params";
import * as _172 from "./amm/v1/pending_token_introduction";
import * as _173 from "./amm/v1/pool_token";
import * as _174 from "./amm/v1/pool";
import * as _175 from "./amm/v1/query";
import * as _176 from "./amm/v1/route_step";
import * as _177 from "./amm/v1/schedule_order_count";
import * as _178 from "./amm/v1/schedule_order";
import * as _179 from "./amm/v1/token_circuit_breaker_settings";
import * as _180 from "./amm/v1/token_weight";
import * as _181 from "./amm/v1/tx";
import * as _182 from "./amm/v1/virtual_balance_pool_token";
import * as _183 from "./amm/v1/weight_update_timing";
import * as _184 from "./amm/v1/weighted_token";
import * as _185 from "./amm/v1/whitelisted_route";
import * as _186 from "./amm/v1/yamm_configuration";
import * as _187 from "./amm/v2/pair_match_proposal";
import * as _188 from "./amm/v2/tx";
import * as _189 from "./assets/v1/event";
import * as _190 from "./assets/v1/genesis";
import * as _191 from "./assets/v1/maturity_level";
import * as _192 from "./assets/v1/oracle_payload";
import * as _193 from "./assets/v1/params";
import * as _194 from "./assets/v1/query";
import * as _195 from "./assets/v1/refractable_asset";
import * as _196 from "./assets/v1/tx";
import * as _197 from "./icstaking/v1/event";
import * as _198 from "./icstaking/v1/genesis";
import * as _199 from "./icstaking/v1/host_chain";
import * as _200 from "./icstaking/v1/loopback";
import * as _201 from "./icstaking/v1/lsm";
import * as _202 from "./icstaking/v1/multisig";
import * as _203 from "./icstaking/v1/oracle_payload";
import * as _204 from "./icstaking/v1/params";
import * as _205 from "./icstaking/v1/query";
import * as _206 from "./icstaking/v1/reply";
import * as _207 from "./icstaking/v1/sweep";
import * as _208 from "./icstaking/v1/tx";
import * as _209 from "./icstaking/v1/undelegation";
import * as _210 from "./incentives/v1/bond";
import * as _211 from "./incentives/v1/event";
import * as _212 from "./incentives/v1/genesis";
import * as _213 from "./incentives/v1/params";
import * as _214 from "./incentives/v1/pool";
import * as _215 from "./incentives/v1/query";
import * as _216 from "./incentives/v1/tx";
import * as _217 from "./incentives/v1/unbonding";
import * as _218 from "./mint/v1/event";
import * as _219 from "./mint/v1/genesis";
import * as _220 from "./mint/v1/minter";
import * as _221 from "./mint/v1/params";
import * as _222 from "./mint/v1/query";
import * as _223 from "./mint/v1/tx";
import * as _224 from "./pgov/v1/event";
import * as _225 from "./pgov/v1/genesis";
import * as _226 from "./pgov/v1/params";
import * as _227 from "./pgov/v1/proposal";
import * as _228 from "./pgov/v1/query";
import * as _229 from "./pgov/v1/reply";
import * as _230 from "./pgov/v1/staked_p_asset";
import * as _231 from "./pgov/v1/tx";
import * as _232 from "./pgov/v1/vote";
import * as _233 from "./refractor/v1/asset_state";
import * as _234 from "./refractor/v1/event";
import * as _235 from "./refractor/v1/genesis";
import * as _236 from "./refractor/v1/params";
import * as _237 from "./refractor/v1/query";
import * as _238 from "./refractor/v1/tx";
import * as _239 from "./treasury/v1/action";
import * as _240 from "./treasury/v1/event";
import * as _241 from "./treasury/v1/flow_trade";
import * as _242 from "./treasury/v1/genesis";
import * as _243 from "./treasury/v1/params";
import * as _244 from "./treasury/v1/query";
import * as _245 from "./treasury/v1/tx";
import * as _246 from "./ystaking/v1/asset_pool_state";
import * as _247 from "./ystaking/v1/event";
import * as _248 from "./ystaking/v1/genesis";
import * as _249 from "./ystaking/v1/query";
import * as _250 from "./ystaking/v1/tx";
import * as _251 from "./ystaking/v1/user_stake_state";
import * as _395 from "./amm/v1/tx.amino";
import * as _396 from "./amm/v2/tx.amino";
import * as _397 from "./assets/v1/tx.amino";
import * as _398 from "./icstaking/v1/tx.amino";
import * as _399 from "./incentives/v1/tx.amino";
import * as _400 from "./mint/v1/tx.amino";
import * as _401 from "./pgov/v1/tx.amino";
import * as _402 from "./refractor/v1/tx.amino";
import * as _403 from "./treasury/v1/tx.amino";
import * as _404 from "./ystaking/v1/tx.amino";
import * as _405 from "./amm/v1/tx.registry";
import * as _406 from "./amm/v2/tx.registry";
import * as _407 from "./assets/v1/tx.registry";
import * as _408 from "./icstaking/v1/tx.registry";
import * as _409 from "./incentives/v1/tx.registry";
import * as _410 from "./mint/v1/tx.registry";
import * as _411 from "./pgov/v1/tx.registry";
import * as _412 from "./refractor/v1/tx.registry";
import * as _413 from "./treasury/v1/tx.registry";
import * as _414 from "./ystaking/v1/tx.registry";
import * as _415 from "./amm/v1/query.lcd";
import * as _416 from "./assets/v1/query.lcd";
import * as _417 from "./icstaking/v1/query.lcd";
import * as _418 from "./incentives/v1/query.lcd";
import * as _419 from "./mint/v1/query.lcd";
import * as _420 from "./pgov/v1/query.lcd";
import * as _421 from "./refractor/v1/query.lcd";
import * as _422 from "./treasury/v1/query.lcd";
import * as _423 from "./ystaking/v1/query.lcd";
import * as _424 from "./amm/v1/query.rpc.Query";
import * as _425 from "./assets/v1/query.rpc.Query";
import * as _426 from "./icstaking/v1/query.rpc.Query";
import * as _427 from "./incentives/v1/query.rpc.Query";
import * as _428 from "./mint/v1/query.rpc.Query";
import * as _429 from "./pgov/v1/query.rpc.Query";
import * as _430 from "./refractor/v1/query.rpc.Query";
import * as _431 from "./treasury/v1/query.rpc.Query";
import * as _432 from "./ystaking/v1/query.rpc.Query";
import * as _433 from "./amm/v1/tx.rpc.msg";
import * as _434 from "./amm/v2/tx.rpc.msg";
import * as _435 from "./assets/v1/tx.rpc.msg";
import * as _436 from "./icstaking/v1/tx.rpc.msg";
import * as _437 from "./incentives/v1/tx.rpc.msg";
import * as _438 from "./mint/v1/tx.rpc.msg";
import * as _439 from "./pgov/v1/tx.rpc.msg";
import * as _440 from "./refractor/v1/tx.rpc.msg";
import * as _441 from "./treasury/v1/tx.rpc.msg";
import * as _442 from "./ystaking/v1/tx.rpc.msg";
export namespace pryzm {
  export namespace amm {
    export const v1 = {
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._395,
      ..._405,
      ..._415,
      ..._424,
      ..._433
    };
    export const v2 = {
      ..._187,
      ..._188,
      ..._396,
      ..._406,
      ..._434
    };
  }
  export namespace assets {
    export const v1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._397,
      ..._407,
      ..._416,
      ..._425,
      ..._435
    };
  }
  export namespace icstaking {
    export const v1 = {
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
      ..._398,
      ..._408,
      ..._417,
      ..._426,
      ..._436
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._399,
      ..._409,
      ..._418,
      ..._427,
      ..._437
    };
  }
  export namespace mint {
    export const v1 = {
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._400,
      ..._410,
      ..._419,
      ..._428,
      ..._438
    };
  }
  export namespace pgov {
    export const v1 = {
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._401,
      ..._411,
      ..._420,
      ..._429,
      ..._439
    };
  }
  export namespace refractor {
    export const v1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._402,
      ..._412,
      ..._421,
      ..._430,
      ..._440
    };
  }
  export namespace treasury {
    export const v1 = {
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._403,
      ..._413,
      ..._422,
      ..._431,
      ..._441
    };
  }
  export namespace ystaking {
    export const v1 = {
      ..._246,
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._404,
      ..._414,
      ..._423,
      ..._432,
      ..._442
    };
  }
}