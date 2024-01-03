import * as _262 from "./abci/types";
import * as _263 from "./blocksync/types";
import * as _264 from "./crypto/keys";
import * as _265 from "./crypto/proof";
import * as _266 from "./libs/bits/types";
import * as _267 from "./p2p/types";
import * as _268 from "./types/block";
import * as _269 from "./types/evidence";
import * as _270 from "./types/params";
import * as _271 from "./types/types";
import * as _272 from "./types/validator";
import * as _273 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._262
  };
  export const blocksync = {
    ..._263
  };
  export const crypto = {
    ..._264,
    ..._265
  };
  export namespace libs {
    export const bits = {
      ..._266
    };
  }
  export const p2p = {
    ..._267
  };
  export const types = {
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272
  };
  export const version = {
    ..._273
  };
}