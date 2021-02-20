// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Int32 = require("bs-platform/lib/js/int32.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function rotr(x, n) {
  return (x >>> n) | 0 | (x << (64 - n | 0));
}

function change(x, y, z) {
  return x & y ^ Int32.lognot(x) & z;
}

function majority(x, y, z) {
  return x & y ^ x & z ^ y & z;
}

function sum0(x) {
  return rotr(x, 2) ^ rotr(x, 13) ^ rotr(x, 22);
}

function sum1(x) {
  return rotr(x, 6) ^ rotr(x, 11) ^ rotr(x, 25);
}

function sigma0(x) {
  return rotr(x, 7) ^ rotr(x, 18) ^ (x >>> 3);
}

function sigma1(x) {
  return rotr(x, 17) ^ rotr(x, 19) ^ (x >>> 10);
}

function append32(hash, value, offset) {
  for(var j = 0; j <= 3; ++j){
    hash[j + offset | 0] = (value >>> (24 - (j << 3) | 0)) & 255;
  }
  return hash;
}

var k = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];

function pad(msg) {
  var size = (msg.length + 8 | 0) + 1 | 0;
  while(size % 64 !== 0) {
    size = size + 1 | 0;
  };
  var length = msg.length;
  var bytes = Belt_Array.makeBy(size, (function (index) {
          if (index < length) {
            return msg.charCodeAt(index) | 0;
          } else if (index === length) {
            return 128;
          } else {
            return 0;
          }
        }));
  var va = (length << 3);
  for(var i = 1; i <= 15; ++i){
    bytes[bytes.length - i | 0] = va & 255;
    va = (va >> 8);
  }
  return bytes;
}

function make(message) {
  var message$1 = pad(message);
  var chunks = ((message$1.length + 8 | 0) >> 6);
  var a = {
    contents: 1779033703
  };
  var b = {
    contents: -1150833019
  };
  var c = {
    contents: 1013904242
  };
  var d = {
    contents: -1521486534
  };
  var e = {
    contents: 1359893119
  };
  var f = {
    contents: -1694144372
  };
  var g = {
    contents: 528734635
  };
  var h = {
    contents: 1541459225
  };
  for(var i = 0; i < chunks; ++i){
    var w = Belt_Array.make(64, 0);
    for(var t = 0; t <= 15; ++t){
      var result = (message$1[(i << 6) + (t << 2) | 0] << 24) & -16777216 | (message$1[((i << 6) + (t << 2) | 0) + 1 | 0] << 16) & 16711680 | (message$1[((i << 6) + (t << 2) | 0) + 2 | 0] << 8) & 65280 | message$1[((i << 6) + (t << 2) | 0) + 3 | 0] & 255;
      w[t] = result;
    }
    for(var t$1 = 16; t$1 <= 63; ++t$1){
      var t2 = w[t$1 - 2 | 0];
      var t7 = w[t$1 - 7 | 0];
      var t15 = w[t$1 - 15 | 0];
      var t16 = w[t$1 - 16 | 0];
      var result$1 = ((sigma1(t2) + t7 | 0) + sigma0(t15) | 0) + t16 | 0;
      w[t$1] = result$1;
    }
    var originalA = a.contents;
    var originalB = b.contents;
    var originalC = c.contents;
    var originalD = d.contents;
    var originalE = e.contents;
    var originalF = f.contents;
    var originalG = g.contents;
    var originalH = h.contents;
    k.forEach((function(w){
        return function (k, t) {
          var temp1 = (((h.contents + sum1(e.contents) | 0) + change(e.contents, f.contents, g.contents) | 0) + k | 0) + w[t] | 0;
          var temp2 = sum0(a.contents) + majority(a.contents, b.contents, c.contents) | 0;
          h.contents = g.contents;
          g.contents = f.contents;
          f.contents = e.contents;
          e.contents = d.contents + temp1 | 0;
          d.contents = c.contents;
          c.contents = b.contents;
          b.contents = a.contents;
          a.contents = temp1 + temp2 | 0;
          
        }
        }(w)));
    a.contents = originalA + a.contents | 0;
    b.contents = originalB + b.contents | 0;
    c.contents = originalC + c.contents | 0;
    d.contents = originalD + d.contents | 0;
    e.contents = originalE + e.contents | 0;
    f.contents = originalF + f.contents | 0;
    g.contents = originalG + g.contents | 0;
    h.contents = originalH + h.contents | 0;
  }
  var input = append32(append32(append32(append32(append32(append32(append32(append32(Belt_Array.make(32, 0), a.contents, 0), b.contents, 4), c.contents, 8), d.contents, 12), e.contents, 16), f.contents, 20), g.contents, 24), h.contents, 28).reduce((function (acc, curr) {
          return acc + String.fromCharCode(curr);
        }), "");
  var hex = "0123456789abcdef";
  return input.split("").reduce((function (acc, curr) {
                var charCode = curr.charCodeAt(0) | 0;
                return acc + (hex.charAt((charCode >>> 4) & 15) + hex.charAt(charCode & 15));
              }), "");
}

var makeU = make;

exports.make = make;
exports.makeU = makeU;
/* No side effect */
