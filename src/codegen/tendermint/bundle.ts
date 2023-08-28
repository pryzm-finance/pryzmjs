import * as _255 from "./abci/types";
import * as _256 from "./blocksync/types";
import * as _257 from "./crypto/keys";
import * as _258 from "./crypto/proof";
import * as _259 from "./libs/bits/types";
import * as _260 from "./p2p/types";
import * as _261 from "./types/block";
import * as _262 from "./types/evidence";
import * as _263 from "./types/params";
import * as _264 from "./types/types";
import * as _265 from "./types/validator";
import * as _266 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._255
  };
  export const blocksync = {
    ..._256
  };
  export const crypto = {
    ..._257,
    ..._258
  };
  export namespace libs {
    export const bits = {
      ..._259
    };
  }
  export const p2p = {
    ..._260
  };
  export const types = {
    ..._261,
    ..._262,
    ..._263,
    ..._264,
    ..._265
  };
  export const version = {
    ..._266
  };
}