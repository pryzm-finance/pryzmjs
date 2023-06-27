import * as _243 from "./abci/types";
import * as _244 from "./blocksync/types";
import * as _245 from "./crypto/keys";
import * as _246 from "./crypto/proof";
import * as _247 from "./libs/bits/types";
import * as _248 from "./p2p/types";
import * as _249 from "./types/block";
import * as _250 from "./types/evidence";
import * as _251 from "./types/params";
import * as _252 from "./types/types";
import * as _253 from "./types/validator";
import * as _254 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._243
  };
  export const blocksync = {
    ..._244
  };
  export const crypto = {
    ..._245,
    ..._246
  };
  export namespace libs {
    export const bits = {
      ..._247
    };
  }
  export const p2p = {
    ..._248
  };
  export const types = {
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._253
  };
  export const version = {
    ..._254
  };
}