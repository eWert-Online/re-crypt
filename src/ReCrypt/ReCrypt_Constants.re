/**
  * Constants [§4.2]
  */

let sha256 = [|
  0x428a2f98l,
  0x71374491l,
  (-0x4a3f0431l),
  (-0x164a245bl),
  0x3956c25bl,
  0x59f111f1l,
  (-0x6dc07d5cl),
  (-0x54e3a12bl),
  (-0x27f85568l),
  0x12835b01l,
  0x243185bel,
  0x550c7dc3l,
  0x72be5d74l,
  (-0x7f214e02l),
  (-0x6423f959l),
  (-0x3e640e8cl),
  (-0x1b64963fl),
  (-0x1041b87al),
  0x0fc19dc6l,
  0x240ca1ccl,
  0x2de92c6fl,
  0x4a7484aal,
  0x5cb0a9dcl,
  0x76f988dal,
  (-0x67c1aeael),
  (-0x57ce3993l),
  (-0x4ffcd838l),
  (-0x40a68039l),
  (-0x391ff40dl),
  (-0x2a586eb9l),
  0x06ca6351l,
  0x14292967l,
  0x27b70a85l,
  0x2e1b2138l,
  0x4d2c6dfcl,
  0x53380d13l,
  0x650a7354l,
  0x766a0abbl,
  (-0x7e3d36d2l),
  (-0x6d8dd37bl),
  (-0x5d40175fl),
  (-0x57e599b5l),
  (-0x3db47490l),
  (-0x3893ae5dl),
  (-0x2e6d17e7l),
  (-0x2966f9dcl),
  (-0xbf1ca7bl),
  0x106aa070l,
  0x19a4c116l,
  0x1e376c08l,
  0x2748774cl,
  0x34b0bcb5l,
  0x391c0cb3l,
  0x4ed8aa4al,
  0x5b9cca4fl,
  0x682e6ff3l,
  0x748f82eel,
  0x78a5636fl,
  (-0x7b3787ecl),
  (-0x7338fdf8l),
  (-0x6f410006l),
  (-0x5baf9315l),
  (-0x41065c09l),
  (-0x398e870el),
|];

let sha512 = [|
  0x428a2f98d728ae22L,
  0x7137449123ef65cdL,
  0xb5c0fbcfec4d3b2fL,
  0xe9b5dba58189dbbcL,
  0x3956c25bf348b538L,
  0x59f111f1b605d019L,
  0x923f82a4af194f9bL,
  0xab1c5ed5da6d8118L,
  0xd807aa98a3030242L,
  0x12835b0145706fbeL,
  0x243185be4ee4b28cL,
  0x550c7dc3d5ffb4e2L,
  0x72be5d74f27b896fL,
  0x80deb1fe3b1696b1L,
  0x9bdc06a725c71235L,
  0xc19bf174cf692694L,
  0xe49b69c19ef14ad2L,
  0xefbe4786384f25e3L,
  0x0fc19dc68b8cd5b5L,
  0x240ca1cc77ac9c65L,
  0x2de92c6f592b0275L,
  0x4a7484aa6ea6e483L,
  0x5cb0a9dcbd41fbd4L,
  0x76f988da831153b5L,
  0x983e5152ee66dfabL,
  0xa831c66d2db43210L,
  0xb00327c898fb213fL,
  0xbf597fc7beef0ee4L,
  0xc6e00bf33da88fc2L,
  0xd5a79147930aa725L,
  0x06ca6351e003826fL,
  0x142929670a0e6e70L,
  0x27b70a8546d22ffcL,
  0x2e1b21385c26c926L,
  0x4d2c6dfc5ac42aedL,
  0x53380d139d95b3dfL,
  0x650a73548baf63deL,
  0x766a0abb3c77b2a8L,
  0x81c2c92e47edaee6L,
  0x92722c851482353bL,
  0xa2bfe8a14cf10364L,
  0xa81a664bbc423001L,
  0xc24b8b70d0f89791L,
  0xc76c51a30654be30L,
  0xd192e819d6ef5218L,
  0xd69906245565a910L,
  0xf40e35855771202aL,
  0x106aa07032bbd1b8L,
  0x19a4c116b8d2d0c8L,
  0x1e376c085141ab53L,
  0x2748774cdf8eeb99L,
  0x34b0bcb5e19b48a8L,
  0x391c0cb3c5c95a63L,
  0x4ed8aa4ae3418acbL,
  0x5b9cca4f7763e373L,
  0x682e6ff3d6b2b8a3L,
  0x748f82ee5defb2fcL,
  0x78a5636f43172f60L,
  0x84c87814a1f0ab72L,
  0x8cc702081a6439ecL,
  0x90befffa23631e28L,
  0xa4506cebde82bde9L,
  0xbef9a3f7b2c67915L,
  0xc67178f2e372532bL,
  0xca273eceea26619cL,
  0xd186b8c721c0c207L,
  0xeada7dd6cde0eb1eL,
  0xf57d4f7fee6ed178L,
  0x06f067aa72176fbaL,
  0x0a637dc5a2c898a6L,
  0x113f9804bef90daeL,
  0x1b710b35131c471bL,
  0x28db77f523047d84L,
  0x32caab7b40c72493L,
  0x3c9ebe0a15c9bebcL,
  0x431d67c49c100d4cL,
  0x4cc5d4becb3e42b6L,
  0x597f299cfc657e2aL,
  0x5fcb6fab3ad6faecL,
  0x6c44198c4a475817L,
|];