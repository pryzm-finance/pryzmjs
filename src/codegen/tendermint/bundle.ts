import * as _191 from "./abci/types";
import * as _192 from "./crypto/keys";
import * as _193 from "./crypto/proof";
import * as _194 from "./libs/bits/types";
import * as _195 from "./p2p/types";
import * as _196 from "./types/block";
import * as _197 from "./types/evidence";
import * as _198 from "./types/params";
import * as _199 from "./types/types";
import * as _200 from "./types/validator";
import * as _201 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._191
  };
  export const crypto = {
    ..._192,
    ..._193
  };
  export namespace libs {
    export const bits = {
      ..._194
    };
  }
  export const p2p = {
    ..._195
  };
  export const types = {
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._200
  };
  export const version = {
    ..._201
  };
}