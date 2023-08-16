import * as _254 from "./abci/types";
import * as _255 from "./blocksync/types";
import * as _256 from "./crypto/keys";
import * as _257 from "./crypto/proof";
import * as _258 from "./libs/bits/types";
import * as _259 from "./p2p/types";
import * as _260 from "./types/block";
import * as _261 from "./types/evidence";
import * as _262 from "./types/params";
import * as _263 from "./types/types";
import * as _264 from "./types/validator";
import * as _265 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._254
  };
  export const blocksync = {
    ..._255
  };
  export const crypto = {
    ..._256,
    ..._257
  };
  export namespace libs {
    export const bits = {
      ..._258
    };
  }
  export const p2p = {
    ..._259
  };
  export const types = {
    ..._260,
    ..._261,
    ..._262,
    ..._263,
    ..._264
  };
  export const version = {
    ..._265
  };
}