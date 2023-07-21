import * as _248 from "./abci/types";
import * as _249 from "./blocksync/types";
import * as _250 from "./crypto/keys";
import * as _251 from "./crypto/proof";
import * as _252 from "./libs/bits/types";
import * as _253 from "./p2p/types";
import * as _254 from "./types/block";
import * as _255 from "./types/evidence";
import * as _256 from "./types/params";
import * as _257 from "./types/types";
import * as _258 from "./types/validator";
import * as _259 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._248
  };
  export const blocksync = {
    ..._249
  };
  export const crypto = {
    ..._250,
    ..._251
  };
  export namespace libs {
    export const bits = {
      ..._252
    };
  }
  export const p2p = {
    ..._253
  };
  export const types = {
    ..._254,
    ..._255,
    ..._256,
    ..._257,
    ..._258
  };
  export const version = {
    ..._259
  };
}