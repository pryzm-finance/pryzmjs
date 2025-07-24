import * as _264 from "./abci/types";
import * as _265 from "./blocksync/types";
import * as _266 from "./crypto/keys";
import * as _267 from "./crypto/proof";
import * as _268 from "./libs/bits/types";
import * as _269 from "./p2p/types";
import * as _270 from "./types/block";
import * as _271 from "./types/evidence";
import * as _272 from "./types/params";
import * as _273 from "./types/types";
import * as _274 from "./types/validator";
import * as _275 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._264
  };
  export const blocksync = {
    ..._265
  };
  export const crypto = {
    ..._266,
    ..._267
  };
  export namespace libs {
    export const bits = {
      ..._268
    };
  }
  export const p2p = {
    ..._269
  };
  export const types = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274
  };
  export const version = {
    ..._275
  };
}