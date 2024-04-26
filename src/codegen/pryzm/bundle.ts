import * as _166 from "./amm/v1/event";
import * as _167 from "./amm/v1/genesis";
import * as _168 from "./amm/v1/operations";
import * as _169 from "./amm/v1/oracle_payload";
import * as _170 from "./amm/v1/oracle_price_pair";
import * as _171 from "./amm/v1/order";
import * as _172 from "./amm/v1/pair_match_proposal";
import * as _173 from "./amm/v1/params";
import * as _174 from "./amm/v1/pending_token_introduction";
import * as _175 from "./amm/v1/pool_token";
import * as _176 from "./amm/v1/pool";
import * as _177 from "./amm/v1/query";
import * as _178 from "./amm/v1/route_step";
import * as _179 from "./amm/v1/schedule_order_count";
import * as _180 from "./amm/v1/schedule_order";
import * as _181 from "./amm/v1/token_circuit_breaker_settings";
import * as _182 from "./amm/v1/token_weight";
import * as _183 from "./amm/v1/tx";
import * as _184 from "./amm/v1/virtual_balance_pool_token";
import * as _185 from "./amm/v1/weight_update_timing";
import * as _186 from "./amm/v1/weighted_token";
import * as _187 from "./amm/v1/whitelisted_route";
import * as _188 from "./amm/v1/yamm_configuration";
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
import * as _236 from "./refractor/v1/query";
import * as _237 from "./refractor/v1/tx";
import * as _238 from "./treasury/v1/action";
import * as _239 from "./treasury/v1/event";
import * as _240 from "./treasury/v1/flow_trade";
import * as _241 from "./treasury/v1/genesis";
import * as _242 from "./treasury/v1/params";
import * as _243 from "./treasury/v1/query";
import * as _244 from "./treasury/v1/tx";
import * as _245 from "./ystaking/v1/asset_pool_state";
import * as _246 from "./ystaking/v1/event";
import * as _247 from "./ystaking/v1/genesis";
import * as _248 from "./ystaking/v1/query";
import * as _249 from "./ystaking/v1/tx";
import * as _250 from "./ystaking/v1/user_stake_state";
import * as _441 from "./amm/v1/tx.amino";
import * as _442 from "./assets/v1/tx.amino";
import * as _443 from "./icstaking/v1/tx.amino";
import * as _444 from "./incentives/v1/tx.amino";
import * as _445 from "./mint/v1/tx.amino";
import * as _446 from "./pgov/v1/tx.amino";
import * as _447 from "./refractor/v1/tx.amino";
import * as _448 from "./treasury/v1/tx.amino";
import * as _449 from "./ystaking/v1/tx.amino";
import * as _450 from "./amm/v1/tx.registry";
import * as _451 from "./assets/v1/tx.registry";
import * as _452 from "./icstaking/v1/tx.registry";
import * as _453 from "./incentives/v1/tx.registry";
import * as _454 from "./mint/v1/tx.registry";
import * as _455 from "./pgov/v1/tx.registry";
import * as _456 from "./refractor/v1/tx.registry";
import * as _457 from "./treasury/v1/tx.registry";
import * as _458 from "./ystaking/v1/tx.registry";
import * as _459 from "./amm/v1/query.lcd";
import * as _460 from "./assets/v1/query.lcd";
import * as _461 from "./icstaking/v1/query.lcd";
import * as _462 from "./incentives/v1/query.lcd";
import * as _463 from "./mint/v1/query.lcd";
import * as _464 from "./pgov/v1/query.lcd";
import * as _465 from "./refractor/v1/query.lcd";
import * as _466 from "./treasury/v1/query.lcd";
import * as _467 from "./ystaking/v1/query.lcd";
import * as _468 from "./amm/v1/query.rpc.Query";
import * as _469 from "./assets/v1/query.rpc.Query";
import * as _470 from "./icstaking/v1/query.rpc.Query";
import * as _471 from "./incentives/v1/query.rpc.Query";
import * as _472 from "./mint/v1/query.rpc.Query";
import * as _473 from "./pgov/v1/query.rpc.Query";
import * as _474 from "./refractor/v1/query.rpc.Query";
import * as _475 from "./treasury/v1/query.rpc.Query";
import * as _476 from "./ystaking/v1/query.rpc.Query";
import * as _477 from "./amm/v1/tx.rpc.msg";
import * as _478 from "./assets/v1/tx.rpc.msg";
import * as _479 from "./icstaking/v1/tx.rpc.msg";
import * as _480 from "./incentives/v1/tx.rpc.msg";
import * as _481 from "./mint/v1/tx.rpc.msg";
import * as _482 from "./pgov/v1/tx.rpc.msg";
import * as _483 from "./refractor/v1/tx.rpc.msg";
import * as _484 from "./treasury/v1/tx.rpc.msg";
import * as _485 from "./ystaking/v1/tx.rpc.msg";
export namespace pryzm {
  export namespace amm {
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
      ..._187,
      ..._188,
      ..._441,
      ..._450,
      ..._459,
      ..._468,
      ..._477
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
      ..._442,
      ..._451,
      ..._460,
      ..._469,
      ..._478
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
      ..._443,
      ..._452,
      ..._461,
      ..._470,
      ..._479
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
      ..._444,
      ..._453,
      ..._462,
      ..._471,
      ..._480
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
      ..._445,
      ..._454,
      ..._463,
      ..._472,
      ..._481
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
      ..._446,
      ..._455,
      ..._464,
      ..._473,
      ..._482
    };
  }
  export namespace refractor {
    export const v1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._447,
      ..._456,
      ..._465,
      ..._474,
      ..._483
    };
  }
  export namespace treasury {
    export const v1 = {
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._448,
      ..._457,
      ..._466,
      ..._475,
      ..._484
    };
  }
  export namespace ystaking {
    export const v1 = {
      ..._245,
      ..._246,
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._449,
      ..._458,
      ..._467,
      ..._476,
      ..._485
    };
  }
}