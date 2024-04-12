import * as _309 from "./abci/types";
import * as _310 from "./blocksync/types";
import * as _311 from "./crypto/keys";
import * as _312 from "./crypto/proof";
import * as _313 from "./libs/bits/types";
import * as _314 from "./p2p/types";
import * as _315 from "./types/block";
import * as _316 from "./types/evidence";
import * as _317 from "./types/params";
import * as _318 from "./types/types";
import * as _319 from "./types/validator";
import * as _320 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._309
  };
  export const blocksync = {
    ..._310
  };
  export const crypto = {
    ..._311,
    ..._312
  };
  export namespace libs {
    export const bits = {
      ..._313
    };
  }
  export const p2p = {
    ..._314
  };
  export const types = {
    ..._315,
    ..._316,
    ..._317,
    ..._318,
    ..._319
  };
  export const version = {
    ..._320
  };
}