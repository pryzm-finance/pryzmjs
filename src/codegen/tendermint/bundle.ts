import * as _242 from "./abci/types";
import * as _243 from "./blocksync/types";
import * as _244 from "./crypto/keys";
import * as _245 from "./crypto/proof";
import * as _246 from "./libs/bits/types";
import * as _247 from "./p2p/types";
import * as _248 from "./types/block";
import * as _249 from "./types/evidence";
import * as _250 from "./types/params";
import * as _251 from "./types/types";
import * as _252 from "./types/validator";
import * as _253 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._242
  };
  export const blocksync = {
    ..._243
  };
  export const crypto = {
    ..._244,
    ..._245
  };
  export namespace libs {
    export const bits = {
      ..._246
    };
  }
  export const p2p = {
    ..._247
  };
  export const types = {
    ..._248,
    ..._249,
    ..._250,
    ..._251,
    ..._252
  };
  export const version = {
    ..._253
  };
}