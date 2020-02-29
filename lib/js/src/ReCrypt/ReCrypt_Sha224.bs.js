// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Char = require("bs-platform/lib/js/char.js");
var Bytes = require("bs-platform/lib/js/bytes.js");
var Int32 = require("bs-platform/lib/js/int32.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReCrypt_Utils = require("./ReCrypt_Utils.bs.js");
var ReCrypt_Constants = require("./ReCrypt_Constants.bs.js");
var ReCrypt_Functions = require("./ReCrypt_Functions.bs.js");
var ReCrypt_Preprocess = require("./ReCrypt_Preprocess.bs.js");

var initialHash = [
  -1056596264,
  914150663,
  812702999,
  -150054599,
  -4191439,
  1750603025,
  1694076839,
  -1090891868
];

function make(message) {
  var messageBytes = Bytes.of_string(message);
  var message$1 = ReCrypt_Preprocess.Sha1_224_256.pad(messageBytes);
  var chunks = ((message$1.length + 8 | 0) >> 6);
  var a = Caml_array.caml_array_get(initialHash, 0);
  var b = Caml_array.caml_array_get(initialHash, 1);
  var c = Caml_array.caml_array_get(initialHash, 2);
  var d = Caml_array.caml_array_get(initialHash, 3);
  var e = Caml_array.caml_array_get(initialHash, 4);
  var f = Caml_array.caml_array_get(initialHash, 5);
  var g = Caml_array.caml_array_get(initialHash, 6);
  var h = Caml_array.caml_array_get(initialHash, 7);
  for(var i = 0 ,i_finish = chunks - 1 | 0; i <= i_finish; ++i){
    var w = Caml_array.caml_make_vect(64, Int32.zero);
    for(var t = 0; t <= 15; ++t){
      Caml_array.caml_array_set(w, t, (message$1[(i << 6) + (t << 2) | 0] << 24) & -16777216);
      Caml_array.caml_array_set(w, t, Caml_array.caml_array_get(w, t) | (message$1[((i << 6) + (t << 2) | 0) + 1 | 0] << 16) & 16711680);
      Caml_array.caml_array_set(w, t, Caml_array.caml_array_get(w, t) | (message$1[((i << 6) + (t << 2) | 0) + 2 | 0] << 8) & 65280 | message$1[((i << 6) + (t << 2) | 0) + 3 | 0] & 255);
    }
    for(var t$1 = 16; t$1 <= 63; ++t$1){
      Caml_array.caml_array_set(w, t$1, ((ReCrypt_Functions.Sha224_256.sigma1(Caml_array.caml_array_get(w, t$1 - 2 | 0)) + Caml_array.caml_array_get(w, t$1 - 7 | 0) | 0) + ReCrypt_Functions.Sha224_256.sigma0(Caml_array.caml_array_get(w, t$1 - 15 | 0)) | 0) + Caml_array.caml_array_get(w, t$1 - 16 | 0) | 0);
    }
    var originalA = a;
    var originalB = b;
    var originalC = c;
    var originalD = d;
    var originalE = e;
    var originalF = f;
    var originalG = g;
    var originalH = h;
    for(var t$2 = 0; t$2 <= 63; ++t$2){
      var temp1 = (((h + ReCrypt_Functions.Sha224_256.sum1(e) | 0) + ReCrypt_Functions.Sha224_256.change(e, f, g) | 0) + Caml_array.caml_array_get(ReCrypt_Constants.sha224, t$2) | 0) + Caml_array.caml_array_get(w, t$2) | 0;
      var temp2 = ReCrypt_Functions.Sha224_256.sum0(a) + ReCrypt_Functions.Sha224_256.majority(a, b, c) | 0;
      h = g;
      g = f;
      f = e;
      e = d + temp1 | 0;
      d = c;
      c = b;
      b = a;
      a = temp1 + temp2 | 0;
    }
    a = originalA + a | 0;
    b = originalB + b | 0;
    c = originalC + c | 0;
    d = originalD + d | 0;
    e = originalE + e | 0;
    f = originalF + f | 0;
    g = originalG + g | 0;
    h = originalH + h | 0;
  }
  var sha224raw = Bytes.make(28, Char.chr(0));
  ReCrypt_Utils.append32(sha224raw, a, 0);
  ReCrypt_Utils.append32(sha224raw, b, 4);
  ReCrypt_Utils.append32(sha224raw, c, 8);
  ReCrypt_Utils.append32(sha224raw, d, 12);
  ReCrypt_Utils.append32(sha224raw, e, 16);
  ReCrypt_Utils.append32(sha224raw, f, 20);
  ReCrypt_Utils.append32(sha224raw, g, 24);
  return ReCrypt_Utils.stringToHex(Bytes.to_string(sha224raw));
}

exports.make = make;
/* No side effect */