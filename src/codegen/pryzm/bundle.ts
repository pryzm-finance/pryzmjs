import * as _135 from "./amm/v1/event";
import * as _136 from "./amm/v1/genesis";
import * as _137 from "./amm/v1/operations";
import * as _138 from "./amm/v1/oracle_payload";
import * as _139 from "./amm/v1/oracle_price_pair";
import * as _140 from "./amm/v1/order";
import * as _141 from "./amm/v1/pair_match_proposal";
import * as _142 from "./amm/v1/params";
import * as _143 from "./amm/v1/pending_token_introduction";
import * as _144 from "./amm/v1/pool_token";
import * as _145 from "./amm/v1/pool";
import * as _146 from "./amm/v1/query";
import * as _147 from "./amm/v1/route_step";
import * as _148 from "./amm/v1/schedule_order_count";
import * as _149 from "./amm/v1/schedule_order";
import * as _150 from "./amm/v1/token_circuit_breaker_settings";
import * as _151 from "./amm/v1/token_weight";
import * as _152 from "./amm/v1/tx";
import * as _153 from "./amm/v1/virtual_balance_pool_token";
import * as _154 from "./amm/v1/weight_update_timing";
import * as _155 from "./amm/v1/weighted_token";
import * as _156 from "./amm/v1/whitelisted_route";
import * as _157 from "./amm/v1/yamm_configuration";
import * as _158 from "./assets/v1/event";
import * as _159 from "./assets/v1/genesis";
import * as _160 from "./assets/v1/maturity_level";
import * as _161 from "./assets/v1/oracle_payload";
import * as _162 from "./assets/v1/params";
import * as _163 from "./assets/v1/query";
import * as _164 from "./assets/v1/refractable_asset";
import * as _165 from "./assets/v1/tx";
import * as _166 from "./icstaking/v1/event";
import * as _167 from "./icstaking/v1/genesis";
import * as _168 from "./icstaking/v1/host_chain";
import * as _169 from "./icstaking/v1/oracle_payload";
import * as _170 from "./icstaking/v1/params";
import * as _171 from "./icstaking/v1/query";
import * as _172 from "./icstaking/v1/reply";
import * as _173 from "./icstaking/v1/tx";
import * as _174 from "./icstaking/v1/undelegation";
import * as _175 from "./incentives/v1/bond";
import * as _176 from "./incentives/v1/event";
import * as _177 from "./incentives/v1/genesis";
import * as _178 from "./incentives/v1/params";
import * as _179 from "./incentives/v1/pool";
import * as _180 from "./incentives/v1/query";
import * as _181 from "./incentives/v1/tx";
import * as _182 from "./incentives/v1/unbonding";
import * as _183 from "./mint/v1/event";
import * as _184 from "./mint/v1/genesis";
import * as _185 from "./mint/v1/minter";
import * as _186 from "./mint/v1/params";
import * as _187 from "./mint/v1/query";
import * as _188 from "./mint/v1/tx";
import * as _189 from "./pgov/v1/event";
import * as _190 from "./pgov/v1/genesis";
import * as _191 from "./pgov/v1/params";
import * as _192 from "./pgov/v1/proposal";
import * as _193 from "./pgov/v1/query";
import * as _194 from "./pgov/v1/staked_p_asset";
import * as _195 from "./pgov/v1/tx";
import * as _196 from "./pgov/v1/vote";
import * as _197 from "./refractor/v1/asset_state";
import * as _198 from "./refractor/v1/event";
import * as _199 from "./refractor/v1/genesis";
import * as _200 from "./refractor/v1/query";
import * as _201 from "./refractor/v1/tx";
import * as _202 from "./treasury/v1/action";
import * as _203 from "./treasury/v1/event";
import * as _204 from "./treasury/v1/flow_trade";
import * as _205 from "./treasury/v1/genesis";
import * as _206 from "./treasury/v1/params";
import * as _207 from "./treasury/v1/query";
import * as _208 from "./treasury/v1/tx";
import * as _209 from "./ystaking/v1/asset_pool_state";
import * as _210 from "./ystaking/v1/event";
import * as _211 from "./ystaking/v1/genesis";
import * as _212 from "./ystaking/v1/query";
import * as _213 from "./ystaking/v1/tx";
import * as _214 from "./ystaking/v1/user_stake_state";
import * as _387 from "./amm/v1/tx.amino";
import * as _388 from "./assets/v1/tx.amino";
import * as _389 from "./icstaking/v1/tx.amino";
import * as _390 from "./incentives/v1/tx.amino";
import * as _391 from "./mint/v1/tx.amino";
import * as _392 from "./pgov/v1/tx.amino";
import * as _393 from "./refractor/v1/tx.amino";
import * as _394 from "./treasury/v1/tx.amino";
import * as _395 from "./ystaking/v1/tx.amino";
import * as _396 from "./amm/v1/tx.registry";
import * as _397 from "./assets/v1/tx.registry";
import * as _398 from "./icstaking/v1/tx.registry";
import * as _399 from "./incentives/v1/tx.registry";
import * as _400 from "./mint/v1/tx.registry";
import * as _401 from "./pgov/v1/tx.registry";
import * as _402 from "./refractor/v1/tx.registry";
import * as _403 from "./treasury/v1/tx.registry";
import * as _404 from "./ystaking/v1/tx.registry";
import * as _405 from "./amm/v1/query.lcd";
import * as _406 from "./assets/v1/query.lcd";
import * as _407 from "./icstaking/v1/query.lcd";
import * as _408 from "./incentives/v1/query.lcd";
import * as _409 from "./mint/v1/query.lcd";
import * as _410 from "./pgov/v1/query.lcd";
import * as _411 from "./refractor/v1/query.lcd";
import * as _412 from "./treasury/v1/query.lcd";
import * as _413 from "./ystaking/v1/query.lcd";
import * as _414 from "./amm/v1/query.rpc.Query";
import * as _415 from "./assets/v1/query.rpc.Query";
import * as _416 from "./icstaking/v1/query.rpc.Query";
import * as _417 from "./incentives/v1/query.rpc.Query";
import * as _418 from "./mint/v1/query.rpc.Query";
import * as _419 from "./pgov/v1/query.rpc.Query";
import * as _420 from "./refractor/v1/query.rpc.Query";
import * as _421 from "./treasury/v1/query.rpc.Query";
import * as _422 from "./ystaking/v1/query.rpc.Query";
import * as _423 from "./amm/v1/tx.rpc.msg";
import * as _424 from "./assets/v1/tx.rpc.msg";
import * as _425 from "./icstaking/v1/tx.rpc.msg";
import * as _426 from "./incentives/v1/tx.rpc.msg";
import * as _427 from "./mint/v1/tx.rpc.msg";
import * as _428 from "./pgov/v1/tx.rpc.msg";
import * as _429 from "./refractor/v1/tx.rpc.msg";
import * as _430 from "./treasury/v1/tx.rpc.msg";
import * as _431 from "./ystaking/v1/tx.rpc.msg";
export namespace pryzm {
  export namespace amm {
    export const v1 = {
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._387,
      ..._396,
      ..._405,
      ..._414,
      ..._423
    };
  }
  export namespace assets {
    export const v1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._388,
      ..._397,
      ..._406,
      ..._415,
      ..._424
    };
  }
  export namespace icstaking {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._389,
      ..._398,
      ..._407,
      ..._416,
      ..._425
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._390,
      ..._399,
      ..._408,
      ..._417,
      ..._426
    };
  }
  export namespace mint {
    export const v1 = {
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._391,
      ..._400,
      ..._409,
      ..._418,
      ..._427
    };
  }
  export namespace pgov {
    export const v1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._392,
      ..._401,
      ..._410,
      ..._419,
      ..._428
    };
  }
  export namespace refractor {
    export const v1 = {
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._393,
      ..._402,
      ..._411,
      ..._420,
      ..._429
    };
  }
  export namespace treasury {
    export const v1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._394,
      ..._403,
      ..._412,
      ..._421,
      ..._430
    };
  }
  export namespace ystaking {
    export const v1 = {
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._395,
      ..._404,
      ..._413,
      ..._422,
      ..._431
    };
  }
}