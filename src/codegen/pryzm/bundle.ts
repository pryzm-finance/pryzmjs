import * as _161 from "./amm/v1/event";
import * as _162 from "./amm/v1/genesis";
import * as _163 from "./amm/v1/operations";
import * as _164 from "./amm/v1/oracle_payload";
import * as _165 from "./amm/v1/oracle_price_pair";
import * as _166 from "./amm/v1/order";
import * as _167 from "./amm/v1/pair_match_proposal";
import * as _168 from "./amm/v1/params";
import * as _169 from "./amm/v1/pending_token_introduction";
import * as _170 from "./amm/v1/pool_token";
import * as _171 from "./amm/v1/pool";
import * as _172 from "./amm/v1/query";
import * as _173 from "./amm/v1/route_step";
import * as _174 from "./amm/v1/schedule_order_count";
import * as _175 from "./amm/v1/schedule_order";
import * as _176 from "./amm/v1/token_circuit_breaker_settings";
import * as _177 from "./amm/v1/token_weight";
import * as _178 from "./amm/v1/tx";
import * as _179 from "./amm/v1/virtual_balance_pool_token";
import * as _180 from "./amm/v1/weight_update_timing";
import * as _181 from "./amm/v1/weighted_token";
import * as _182 from "./amm/v1/whitelisted_route";
import * as _183 from "./amm/v1/yamm_configuration";
import * as _184 from "./amm/v2/pair_match_proposal";
import * as _185 from "./amm/v2/tx";
import * as _186 from "./assets/v1/event";
import * as _187 from "./assets/v1/genesis";
import * as _188 from "./assets/v1/maturity_level";
import * as _189 from "./assets/v1/oracle_payload";
import * as _190 from "./assets/v1/params";
import * as _191 from "./assets/v1/query";
import * as _192 from "./assets/v1/refractable_asset";
import * as _193 from "./assets/v1/tx";
import * as _194 from "./icstaking/v1/event";
import * as _195 from "./icstaking/v1/genesis";
import * as _196 from "./icstaking/v1/host_chain";
import * as _197 from "./icstaking/v1/loopback";
import * as _198 from "./icstaking/v1/lsm";
import * as _199 from "./icstaking/v1/multisig";
import * as _200 from "./icstaking/v1/oracle_payload";
import * as _201 from "./icstaking/v1/params";
import * as _202 from "./icstaking/v1/query";
import * as _203 from "./icstaking/v1/reply";
import * as _204 from "./icstaking/v1/sweep";
import * as _205 from "./icstaking/v1/tx";
import * as _206 from "./icstaking/v1/undelegation";
import * as _207 from "./incentives/v1/bond";
import * as _208 from "./incentives/v1/event";
import * as _209 from "./incentives/v1/genesis";
import * as _210 from "./incentives/v1/params";
import * as _211 from "./incentives/v1/pool";
import * as _212 from "./incentives/v1/query";
import * as _213 from "./incentives/v1/tx";
import * as _214 from "./incentives/v1/unbonding";
import * as _215 from "./mint/v1/event";
import * as _216 from "./mint/v1/genesis";
import * as _217 from "./mint/v1/minter";
import * as _218 from "./mint/v1/params";
import * as _219 from "./mint/v1/query";
import * as _220 from "./mint/v1/tx";
import * as _221 from "./pgov/v1/event";
import * as _222 from "./pgov/v1/genesis";
import * as _223 from "./pgov/v1/params";
import * as _224 from "./pgov/v1/proposal";
import * as _225 from "./pgov/v1/query";
import * as _226 from "./pgov/v1/reply";
import * as _227 from "./pgov/v1/staked_p_asset";
import * as _228 from "./pgov/v1/tx";
import * as _229 from "./pgov/v1/vote";
import * as _230 from "./refractor/v1/asset_state";
import * as _231 from "./refractor/v1/event";
import * as _232 from "./refractor/v1/genesis";
import * as _233 from "./refractor/v1/params";
import * as _234 from "./refractor/v1/query";
import * as _235 from "./refractor/v1/tx";
import * as _236 from "./treasury/v1/action";
import * as _237 from "./treasury/v1/event";
import * as _238 from "./treasury/v1/flow_trade";
import * as _239 from "./treasury/v1/genesis";
import * as _240 from "./treasury/v1/params";
import * as _241 from "./treasury/v1/query";
import * as _242 from "./treasury/v1/tx";
import * as _243 from "./ystaking/v1/asset_pool_state";
import * as _244 from "./ystaking/v1/event";
import * as _245 from "./ystaking/v1/genesis";
import * as _246 from "./ystaking/v1/query";
import * as _247 from "./ystaking/v1/tx";
import * as _248 from "./ystaking/v1/user_stake_state";
import * as _387 from "./amm/v1/tx.amino";
import * as _388 from "./amm/v2/tx.amino";
import * as _389 from "./assets/v1/tx.amino";
import * as _390 from "./icstaking/v1/tx.amino";
import * as _391 from "./incentives/v1/tx.amino";
import * as _392 from "./mint/v1/tx.amino";
import * as _393 from "./pgov/v1/tx.amino";
import * as _394 from "./refractor/v1/tx.amino";
import * as _395 from "./treasury/v1/tx.amino";
import * as _396 from "./ystaking/v1/tx.amino";
import * as _397 from "./amm/v1/tx.registry";
import * as _398 from "./amm/v2/tx.registry";
import * as _399 from "./assets/v1/tx.registry";
import * as _400 from "./icstaking/v1/tx.registry";
import * as _401 from "./incentives/v1/tx.registry";
import * as _402 from "./mint/v1/tx.registry";
import * as _403 from "./pgov/v1/tx.registry";
import * as _404 from "./refractor/v1/tx.registry";
import * as _405 from "./treasury/v1/tx.registry";
import * as _406 from "./ystaking/v1/tx.registry";
import * as _407 from "./amm/v1/query.lcd";
import * as _408 from "./assets/v1/query.lcd";
import * as _409 from "./icstaking/v1/query.lcd";
import * as _410 from "./incentives/v1/query.lcd";
import * as _411 from "./mint/v1/query.lcd";
import * as _412 from "./pgov/v1/query.lcd";
import * as _413 from "./refractor/v1/query.lcd";
import * as _414 from "./treasury/v1/query.lcd";
import * as _415 from "./ystaking/v1/query.lcd";
import * as _416 from "./amm/v1/query.rpc.Query";
import * as _417 from "./assets/v1/query.rpc.Query";
import * as _418 from "./icstaking/v1/query.rpc.Query";
import * as _419 from "./incentives/v1/query.rpc.Query";
import * as _420 from "./mint/v1/query.rpc.Query";
import * as _421 from "./pgov/v1/query.rpc.Query";
import * as _422 from "./refractor/v1/query.rpc.Query";
import * as _423 from "./treasury/v1/query.rpc.Query";
import * as _424 from "./ystaking/v1/query.rpc.Query";
import * as _425 from "./amm/v1/tx.rpc.msg";
import * as _426 from "./amm/v2/tx.rpc.msg";
import * as _427 from "./assets/v1/tx.rpc.msg";
import * as _428 from "./icstaking/v1/tx.rpc.msg";
import * as _429 from "./incentives/v1/tx.rpc.msg";
import * as _430 from "./mint/v1/tx.rpc.msg";
import * as _431 from "./pgov/v1/tx.rpc.msg";
import * as _432 from "./refractor/v1/tx.rpc.msg";
import * as _433 from "./treasury/v1/tx.rpc.msg";
import * as _434 from "./ystaking/v1/tx.rpc.msg";
export namespace pryzm {
  export namespace amm {
    export const v1 = {
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
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._387,
      ..._397,
      ..._407,
      ..._416,
      ..._425
    };
    export const v2 = {
      ..._184,
      ..._185,
      ..._388,
      ..._398,
      ..._426
    };
  }
  export namespace assets {
    export const v1 = {
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._389,
      ..._399,
      ..._408,
      ..._417,
      ..._427
    };
  }
  export namespace icstaking {
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
      ..._390,
      ..._400,
      ..._409,
      ..._418,
      ..._428
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._391,
      ..._401,
      ..._410,
      ..._419,
      ..._429
    };
  }
  export namespace mint {
    export const v1 = {
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._392,
      ..._402,
      ..._411,
      ..._420,
      ..._430
    };
  }
  export namespace pgov {
    export const v1 = {
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._393,
      ..._403,
      ..._412,
      ..._421,
      ..._431
    };
  }
  export namespace refractor {
    export const v1 = {
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._394,
      ..._404,
      ..._413,
      ..._422,
      ..._432
    };
  }
  export namespace treasury {
    export const v1 = {
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._395,
      ..._405,
      ..._414,
      ..._423,
      ..._433
    };
  }
  export namespace ystaking {
    export const v1 = {
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._248,
      ..._396,
      ..._406,
      ..._415,
      ..._424,
      ..._434
    };
  }
}