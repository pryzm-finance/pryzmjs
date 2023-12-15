import * as _153 from "./amm/v1/event";
import * as _154 from "./amm/v1/genesis";
import * as _155 from "./amm/v1/operations";
import * as _156 from "./amm/v1/oracle_payload";
import * as _157 from "./amm/v1/oracle_price_pair";
import * as _158 from "./amm/v1/order";
import * as _159 from "./amm/v1/pair_match_proposal";
import * as _160 from "./amm/v1/params";
import * as _161 from "./amm/v1/pending_token_introduction";
import * as _162 from "./amm/v1/pool_token";
import * as _163 from "./amm/v1/pool";
import * as _164 from "./amm/v1/query";
import * as _165 from "./amm/v1/route_step";
import * as _166 from "./amm/v1/schedule_order_count";
import * as _167 from "./amm/v1/schedule_order";
import * as _168 from "./amm/v1/token_circuit_breaker_settings";
import * as _169 from "./amm/v1/token_weight";
import * as _170 from "./amm/v1/tx";
import * as _171 from "./amm/v1/virtual_balance_pool_token";
import * as _172 from "./amm/v1/weight_update_timing";
import * as _173 from "./amm/v1/weighted_token";
import * as _174 from "./amm/v1/whitelisted_route";
import * as _175 from "./amm/v1/yamm_configuration";
import * as _176 from "./assets/v1/event";
import * as _177 from "./assets/v1/genesis";
import * as _178 from "./assets/v1/maturity_level";
import * as _179 from "./assets/v1/oracle_payload";
import * as _180 from "./assets/v1/params";
import * as _181 from "./assets/v1/query";
import * as _182 from "./assets/v1/refractable_asset";
import * as _183 from "./assets/v1/tx";
import * as _184 from "./icstaking/v1/event";
import * as _185 from "./icstaking/v1/genesis";
import * as _186 from "./icstaking/v1/host_chain";
import * as _187 from "./icstaking/v1/oracle_payload";
import * as _188 from "./icstaking/v1/params";
import * as _189 from "./icstaking/v1/query";
import * as _190 from "./icstaking/v1/reply";
import * as _191 from "./icstaking/v1/tx";
import * as _192 from "./icstaking/v1/undelegation";
import * as _193 from "./incentives/v1/bond";
import * as _194 from "./incentives/v1/event";
import * as _195 from "./incentives/v1/genesis";
import * as _196 from "./incentives/v1/params";
import * as _197 from "./incentives/v1/pool";
import * as _198 from "./incentives/v1/query";
import * as _199 from "./incentives/v1/tx";
import * as _200 from "./incentives/v1/unbonding";
import * as _201 from "./mint/v1/event";
import * as _202 from "./mint/v1/genesis";
import * as _203 from "./mint/v1/minter";
import * as _204 from "./mint/v1/params";
import * as _205 from "./mint/v1/query";
import * as _206 from "./mint/v1/tx";
import * as _207 from "./pgov/v1/event";
import * as _208 from "./pgov/v1/genesis";
import * as _209 from "./pgov/v1/params";
import * as _210 from "./pgov/v1/proposal";
import * as _211 from "./pgov/v1/query";
import * as _212 from "./pgov/v1/staked_p_asset";
import * as _213 from "./pgov/v1/tx";
import * as _214 from "./pgov/v1/vote";
import * as _215 from "./refractor/v1/asset_state";
import * as _216 from "./refractor/v1/event";
import * as _217 from "./refractor/v1/genesis";
import * as _218 from "./refractor/v1/query";
import * as _219 from "./refractor/v1/tx";
import * as _220 from "./treasury/v1/action";
import * as _221 from "./treasury/v1/event";
import * as _222 from "./treasury/v1/flow_trade";
import * as _223 from "./treasury/v1/genesis";
import * as _224 from "./treasury/v1/params";
import * as _225 from "./treasury/v1/query";
import * as _226 from "./treasury/v1/tx";
import * as _227 from "./ystaking/v1/asset_pool_state";
import * as _228 from "./ystaking/v1/event";
import * as _229 from "./ystaking/v1/genesis";
import * as _230 from "./ystaking/v1/query";
import * as _231 from "./ystaking/v1/tx";
import * as _232 from "./ystaking/v1/user_stake_state";
import * as _403 from "./amm/v1/tx.amino";
import * as _404 from "./assets/v1/tx.amino";
import * as _405 from "./icstaking/v1/tx.amino";
import * as _406 from "./incentives/v1/tx.amino";
import * as _407 from "./mint/v1/tx.amino";
import * as _408 from "./pgov/v1/tx.amino";
import * as _409 from "./refractor/v1/tx.amino";
import * as _410 from "./treasury/v1/tx.amino";
import * as _411 from "./ystaking/v1/tx.amino";
import * as _412 from "./amm/v1/tx.registry";
import * as _413 from "./assets/v1/tx.registry";
import * as _414 from "./icstaking/v1/tx.registry";
import * as _415 from "./incentives/v1/tx.registry";
import * as _416 from "./mint/v1/tx.registry";
import * as _417 from "./pgov/v1/tx.registry";
import * as _418 from "./refractor/v1/tx.registry";
import * as _419 from "./treasury/v1/tx.registry";
import * as _420 from "./ystaking/v1/tx.registry";
import * as _421 from "./amm/v1/query.lcd";
import * as _422 from "./assets/v1/query.lcd";
import * as _423 from "./icstaking/v1/query.lcd";
import * as _424 from "./incentives/v1/query.lcd";
import * as _425 from "./mint/v1/query.lcd";
import * as _426 from "./pgov/v1/query.lcd";
import * as _427 from "./refractor/v1/query.lcd";
import * as _428 from "./treasury/v1/query.lcd";
import * as _429 from "./ystaking/v1/query.lcd";
import * as _430 from "./amm/v1/query.rpc.Query";
import * as _431 from "./assets/v1/query.rpc.Query";
import * as _432 from "./icstaking/v1/query.rpc.Query";
import * as _433 from "./incentives/v1/query.rpc.Query";
import * as _434 from "./mint/v1/query.rpc.Query";
import * as _435 from "./pgov/v1/query.rpc.Query";
import * as _436 from "./refractor/v1/query.rpc.Query";
import * as _437 from "./treasury/v1/query.rpc.Query";
import * as _438 from "./ystaking/v1/query.rpc.Query";
import * as _439 from "./amm/v1/tx.rpc.msg";
import * as _440 from "./assets/v1/tx.rpc.msg";
import * as _441 from "./icstaking/v1/tx.rpc.msg";
import * as _442 from "./incentives/v1/tx.rpc.msg";
import * as _443 from "./mint/v1/tx.rpc.msg";
import * as _444 from "./pgov/v1/tx.rpc.msg";
import * as _445 from "./refractor/v1/tx.rpc.msg";
import * as _446 from "./treasury/v1/tx.rpc.msg";
import * as _447 from "./ystaking/v1/tx.rpc.msg";
export namespace pryzm {
  export namespace amm {
    export const v1 = {
      ..._153,
      ..._154,
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
      ..._403,
      ..._412,
      ..._421,
      ..._430,
      ..._439
    };
  }
  export namespace assets {
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._404,
      ..._413,
      ..._422,
      ..._431,
      ..._440
    };
  }
  export namespace icstaking {
    export const v1 = {
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._405,
      ..._414,
      ..._423,
      ..._432,
      ..._441
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._406,
      ..._415,
      ..._424,
      ..._433,
      ..._442
    };
  }
  export namespace mint {
    export const v1 = {
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._407,
      ..._416,
      ..._425,
      ..._434,
      ..._443
    };
  }
  export namespace pgov {
    export const v1 = {
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._408,
      ..._417,
      ..._426,
      ..._435,
      ..._444
    };
  }
  export namespace refractor {
    export const v1 = {
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._409,
      ..._418,
      ..._427,
      ..._436,
      ..._445
    };
  }
  export namespace treasury {
    export const v1 = {
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._410,
      ..._419,
      ..._428,
      ..._437,
      ..._446
    };
  }
  export namespace ystaking {
    export const v1 = {
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._411,
      ..._420,
      ..._429,
      ..._438,
      ..._447
    };
  }
}