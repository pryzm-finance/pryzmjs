import * as _155 from "./amm/v1/event";
import * as _156 from "./amm/v1/genesis";
import * as _157 from "./amm/v1/operations";
import * as _158 from "./amm/v1/oracle_payload";
import * as _159 from "./amm/v1/oracle_price_pair";
import * as _160 from "./amm/v1/order";
import * as _161 from "./amm/v1/pair_match_proposal";
import * as _162 from "./amm/v1/params";
import * as _163 from "./amm/v1/pending_token_introduction";
import * as _164 from "./amm/v1/pool_token";
import * as _165 from "./amm/v1/pool";
import * as _166 from "./amm/v1/query";
import * as _167 from "./amm/v1/route_step";
import * as _168 from "./amm/v1/schedule_order_count";
import * as _169 from "./amm/v1/schedule_order";
import * as _170 from "./amm/v1/token_circuit_breaker_settings";
import * as _171 from "./amm/v1/token_weight";
import * as _172 from "./amm/v1/tx";
import * as _173 from "./amm/v1/virtual_balance_pool_token";
import * as _174 from "./amm/v1/weight_update_timing";
import * as _175 from "./amm/v1/weighted_token";
import * as _176 from "./amm/v1/whitelisted_route";
import * as _177 from "./amm/v1/yamm_configuration";
import * as _178 from "./assets/v1/event";
import * as _179 from "./assets/v1/genesis";
import * as _180 from "./assets/v1/maturity_level";
import * as _181 from "./assets/v1/oracle_payload";
import * as _182 from "./assets/v1/params";
import * as _183 from "./assets/v1/query";
import * as _184 from "./assets/v1/refractable_asset";
import * as _185 from "./assets/v1/tx";
import * as _186 from "./icstaking/v1/event";
import * as _187 from "./icstaking/v1/genesis";
import * as _188 from "./icstaking/v1/host_chain";
import * as _189 from "./icstaking/v1/oracle_payload";
import * as _190 from "./icstaking/v1/params";
import * as _191 from "./icstaking/v1/query";
import * as _192 from "./icstaking/v1/reply";
import * as _193 from "./icstaking/v1/tx";
import * as _194 from "./icstaking/v1/undelegation";
import * as _195 from "./incentives/v1/bond";
import * as _196 from "./incentives/v1/event";
import * as _197 from "./incentives/v1/genesis";
import * as _198 from "./incentives/v1/params";
import * as _199 from "./incentives/v1/pool";
import * as _200 from "./incentives/v1/query";
import * as _201 from "./incentives/v1/tx";
import * as _202 from "./incentives/v1/unbonding";
import * as _203 from "./mint/v1/event";
import * as _204 from "./mint/v1/genesis";
import * as _205 from "./mint/v1/minter";
import * as _206 from "./mint/v1/params";
import * as _207 from "./mint/v1/query";
import * as _208 from "./mint/v1/tx";
import * as _209 from "./pgov/v1/event";
import * as _210 from "./pgov/v1/genesis";
import * as _211 from "./pgov/v1/params";
import * as _212 from "./pgov/v1/proposal";
import * as _213 from "./pgov/v1/query";
import * as _214 from "./pgov/v1/staked_p_asset";
import * as _215 from "./pgov/v1/tx";
import * as _216 from "./pgov/v1/vote";
import * as _217 from "./refractor/v1/asset_state";
import * as _218 from "./refractor/v1/event";
import * as _219 from "./refractor/v1/genesis";
import * as _220 from "./refractor/v1/query";
import * as _221 from "./refractor/v1/tx";
import * as _222 from "./treasury/v1/action";
import * as _223 from "./treasury/v1/event";
import * as _224 from "./treasury/v1/flow_trade";
import * as _225 from "./treasury/v1/genesis";
import * as _226 from "./treasury/v1/params";
import * as _227 from "./treasury/v1/query";
import * as _228 from "./treasury/v1/tx";
import * as _229 from "./ystaking/v1/asset_pool_state";
import * as _230 from "./ystaking/v1/event";
import * as _231 from "./ystaking/v1/genesis";
import * as _232 from "./ystaking/v1/query";
import * as _233 from "./ystaking/v1/tx";
import * as _234 from "./ystaking/v1/user_stake_state";
import * as _409 from "./amm/v1/tx.amino";
import * as _410 from "./assets/v1/tx.amino";
import * as _411 from "./icstaking/v1/tx.amino";
import * as _412 from "./incentives/v1/tx.amino";
import * as _413 from "./mint/v1/tx.amino";
import * as _414 from "./pgov/v1/tx.amino";
import * as _415 from "./refractor/v1/tx.amino";
import * as _416 from "./treasury/v1/tx.amino";
import * as _417 from "./ystaking/v1/tx.amino";
import * as _418 from "./amm/v1/tx.registry";
import * as _419 from "./assets/v1/tx.registry";
import * as _420 from "./icstaking/v1/tx.registry";
import * as _421 from "./incentives/v1/tx.registry";
import * as _422 from "./mint/v1/tx.registry";
import * as _423 from "./pgov/v1/tx.registry";
import * as _424 from "./refractor/v1/tx.registry";
import * as _425 from "./treasury/v1/tx.registry";
import * as _426 from "./ystaking/v1/tx.registry";
import * as _427 from "./amm/v1/query.lcd";
import * as _428 from "./assets/v1/query.lcd";
import * as _429 from "./icstaking/v1/query.lcd";
import * as _430 from "./incentives/v1/query.lcd";
import * as _431 from "./mint/v1/query.lcd";
import * as _432 from "./pgov/v1/query.lcd";
import * as _433 from "./refractor/v1/query.lcd";
import * as _434 from "./treasury/v1/query.lcd";
import * as _435 from "./ystaking/v1/query.lcd";
import * as _436 from "./amm/v1/query.rpc.Query";
import * as _437 from "./assets/v1/query.rpc.Query";
import * as _438 from "./icstaking/v1/query.rpc.Query";
import * as _439 from "./incentives/v1/query.rpc.Query";
import * as _440 from "./mint/v1/query.rpc.Query";
import * as _441 from "./pgov/v1/query.rpc.Query";
import * as _442 from "./refractor/v1/query.rpc.Query";
import * as _443 from "./treasury/v1/query.rpc.Query";
import * as _444 from "./ystaking/v1/query.rpc.Query";
import * as _445 from "./amm/v1/tx.rpc.msg";
import * as _446 from "./assets/v1/tx.rpc.msg";
import * as _447 from "./icstaking/v1/tx.rpc.msg";
import * as _448 from "./incentives/v1/tx.rpc.msg";
import * as _449 from "./mint/v1/tx.rpc.msg";
import * as _450 from "./pgov/v1/tx.rpc.msg";
import * as _451 from "./refractor/v1/tx.rpc.msg";
import * as _452 from "./treasury/v1/tx.rpc.msg";
import * as _453 from "./ystaking/v1/tx.rpc.msg";
export namespace pryzm {
  export namespace amm {
    export const v1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
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
      ..._409,
      ..._418,
      ..._427,
      ..._436,
      ..._445
    };
  }
  export namespace assets {
    export const v1 = {
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._410,
      ..._419,
      ..._428,
      ..._437,
      ..._446
    };
  }
  export namespace icstaking {
    export const v1 = {
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._411,
      ..._420,
      ..._429,
      ..._438,
      ..._447
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._412,
      ..._421,
      ..._430,
      ..._439,
      ..._448
    };
  }
  export namespace mint {
    export const v1 = {
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._413,
      ..._422,
      ..._431,
      ..._440,
      ..._449
    };
  }
  export namespace pgov {
    export const v1 = {
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._414,
      ..._423,
      ..._432,
      ..._441,
      ..._450
    };
  }
  export namespace refractor {
    export const v1 = {
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._415,
      ..._424,
      ..._433,
      ..._442,
      ..._451
    };
  }
  export namespace treasury {
    export const v1 = {
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._416,
      ..._425,
      ..._434,
      ..._443,
      ..._452
    };
  }
  export namespace ystaking {
    export const v1 = {
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._417,
      ..._426,
      ..._435,
      ..._444,
      ..._453
    };
  }
}