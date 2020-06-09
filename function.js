const FUNCTION_TYPE = {
  latex: 1,
  proeq: 2,
  user: 3,
}

let function_type_table

const _FUNCTION_TYPE_TABLE = {
  frac: FUNCTION_TYPE.latex,
  sqrt: FUNCTION_TYPE.latex,
  // line styles
  dsplaystyle: FUNCTION_TYPE.latex,
  textstyle: FUNCTION_TYPE.latex,
  // font styles
  mathrm: FUNCTION_TYPE.latex,
  mathbf: FUNCTION_TYPE.latex,
  mathit: FUNCTION_TYPE.latex,
  mathsf: FUNCTION_TYPE.latex,
  mathtt: FUNCTION_TYPE.latex,
  mathmc: FUNCTION_TYPE.latex,
  mathgt: FUNCTION_TYPE.latex,
  mathnormal: FUNCTION_TYPE.latex,
  mathcal: FUNCTION_TYPE.latex,
  // spacing
  quad: FUNCTION_TYPE.latex,
  qquad: FUNCTION_TYPE.latex,
  // text decorations
  overline: FUNCTION_TYPE.latex,
  underline: FUNCTION_TYPE.latex,
  overrightarrow: FUNCTION_TYPE.latex,
  overleftarrow: FUNCTION_TYPE.latex,
  widehat: FUNCTION_TYPE.latex,
  widetilde: FUNCTION_TYPE.latex,
  overbrace: FUNCTION_TYPE.latex,
  underbrace: FUNCTION_TYPE.latex,
  // Greek letters
  alpha: FUNCTION_TYPE.latex,
  beta: FUNCTION_TYPE.latex,
  gamma: FUNCTION_TYPE.latex,
  delta: FUNCTION_TYPE.latex,
  epsilon: FUNCTION_TYPE.latex,
  zeta: FUNCTION_TYPE.latex,
  eta: FUNCTION_TYPE.latex,
  theta: FUNCTION_TYPE.latex,
  iota: FUNCTION_TYPE.latex,
  kappa: FUNCTION_TYPE.latex,
  lambda: FUNCTION_TYPE.latex,
  mu: FUNCTION_TYPE.latex,
  nu: FUNCTION_TYPE.latex,
  xi: FUNCTION_TYPE.latex,
  omicron: FUNCTION_TYPE.latex,
  pi: FUNCTION_TYPE.latex,
  rho: FUNCTION_TYPE.latex,
  sigma: FUNCTION_TYPE.latex,
  tau: FUNCTION_TYPE.latex,
  upsilon: FUNCTION_TYPE.latex,
  phi: FUNCTION_TYPE.latex,
  chi: FUNCTION_TYPE.latex,
  psi: FUNCTION_TYPE.latex,
  omega: FUNCTION_TYPE.latex,
  Alpha: FUNCTION_TYPE.latex,
  Beta: FUNCTION_TYPE.latex,
  Gamma: FUNCTION_TYPE.latex,
  Delta: FUNCTION_TYPE.latex,
  Epsilon: FUNCTION_TYPE.latex,
  Zeta: FUNCTION_TYPE.latex,
  Eta: FUNCTION_TYPE.latex,
  Theta: FUNCTION_TYPE.latex,
  Iota: FUNCTION_TYPE.latex,
  Kappa: FUNCTION_TYPE.latex,
  Lambda: FUNCTION_TYPE.latex,
  Mu: FUNCTION_TYPE.latex,
  Nu: FUNCTION_TYPE.latex,
  Xi: FUNCTION_TYPE.latex,
  Omicron: FUNCTION_TYPE.latex,
  Pi: FUNCTION_TYPE.latex,
  Rho: FUNCTION_TYPE.latex,
  Sigma: FUNCTION_TYPE.latex,
  Tau: FUNCTION_TYPE.latex,
  Upsilon: FUNCTION_TYPE.latex,
  Phi: FUNCTION_TYPE.latex,
  Chi: FUNCTION_TYPE.latex,
  Psi: FUNCTION_TYPE.latex,
  Omega: FUNCTION_TYPE.latex,
  varpi: FUNCTION_TYPE.latex,
  varphi: FUNCTION_TYPE.latex,
  varepsilon: FUNCTION_TYPE.latex,
  vartheta: FUNCTION_TYPE.latex,
  varsigma: FUNCTION_TYPE.latex,
  //binomial operators
  times: FUNCTION_TYPE.latex,
  div: FUNCTION_TYPE.latex,
  cdot: FUNCTION_TYPE.latex,
  ast: FUNCTION_TYPE.latex,
  star: FUNCTION_TYPE.latex,
  pm: FUNCTION_TYPE.latex,
  mp: FUNCTION_TYPE.latex,
  vee: FUNCTION_TYPE.latex,
  wedge: FUNCTION_TYPE.latex,
  cap: FUNCTION_TYPE.latex,
  cup: FUNCTION_TYPE.latex,
  sqcap: FUNCTION_TYPE.latex,
  sqcup: FUNCTION_TYPE.latex,
  uplus: FUNCTION_TYPE.latex,
  setminus: FUNCTION_TYPE.latex,
  otimes: FUNCTION_TYPE.latex,
  odot: FUNCTION_TYPE.latex,
  oslash: FUNCTION_TYPE.latex,
  oplus: FUNCTION_TYPE.latex,
  ominus: FUNCTION_TYPE.latex,
  bullet: FUNCTION_TYPE.latex,
  circ: FUNCTION_TYPE.latex,
  bigcirc: FUNCTION_TYPE.latex,
  dagger: FUNCTION_TYPE.latex,
  ddagger: FUNCTION_TYPE.latex,
  triangleright: FUNCTION_TYPE.latex,
  triangleleft: FUNCTION_TYPE.latex,
  bigtriangleup: FUNCTION_TYPE.latex,
  bigtriangledown: FUNCTION_TYPE.latex,
  amalg: FUNCTION_TYPE.latex,
  wr: FUNCTION_TYPE.latex,
  mathbin: FUNCTION_TYPE.latex,
  // relational operators
  neq: FUNCTION_TYPE.latex,
  leq: FUNCTION_TYPE.latex,
  geq: FUNCTION_TYPE.latex,
  gg: FUNCTION_TYPE.latex,
  ll: FUNCTION_TYPE.latex,
  "in": FUNCTION_TYPE.latex,
  ni: FUNCTION_TYPE.latex,
  supset: FUNCTION_TYPE.latex,
  subset: FUNCTION_TYPE.latex,
  supseteq: FUNCTION_TYPE.latex,
  subseteq: FUNCTION_TYPE.latex,
  sqsupseteq: FUNCTION_TYPE.latex,
  sqsubseteq: FUNCTION_TYPE.latex,
  bowtie: FUNCTION_TYPE.latex,
  perp: FUNCTION_TYPE.latex,
  equiv: FUNCTION_TYPE.latex,
  sim: FUNCTION_TYPE.latex,
  cong: FUNCTION_TYPE.latex,
  succ: FUNCTION_TYPE.latex,
  prec: FUNCTION_TYPE.latex,
  not: FUNCTION_TYPE.latex,
  parallel: FUNCTION_TYPE.latex,
  doteq: FUNCTION_TYPE.latex,
  simeq: FUNCTION_TYPE.latex,
  approx: FUNCTION_TYPE.latex,
  succeq: FUNCTION_TYPE.latex,
  preceq: FUNCTION_TYPE.latex,
  mid: FUNCTION_TYPE.latex,
  asymp: FUNCTION_TYPE.latex,
  models: FUNCTION_TYPE.latex,
  propto: FUNCTION_TYPE.latex,
  dashv: FUNCTION_TYPE.latex,
  vdash: FUNCTION_TYPE.latex,
  mathrel: FUNCTION_TYPE.latex,
  // large operators
  oint: FUNCTION_TYPE.latex,
  prod: FUNCTION_TYPE.latex,
  coprod: FUNCTION_TYPE.latex,
  bigotimes: FUNCTION_TYPE.latex,
  bigoplus: FUNCTION_TYPE.latex,
  bigodot: FUNCTION_TYPE.latex,
  bigcap: FUNCTION_TYPE.latex,
  bigcup: FUNCTION_TYPE.latex,
  bigsqcup: FUNCTION_TYPE.latex,
  biguplus: FUNCTION_TYPE.latex,
  bigvee: FUNCTION_TYPE.latex,
  bigwedge: FUNCTION_TYPE.latex,
  smallint: FUNCTION_TYPE.latex,
  mathop: FUNCTION_TYPE.latex,
  // parentheses
  left: FUNCTION_TYPE.latex,
  right: FUNCTION_TYPE.latex,
  langle: FUNCTION_TYPE.latex,
  rangle: FUNCTION_TYPE.latex,
  lceil: FUNCTION_TYPE.latex,
  rceil: FUNCTION_TYPE.latex,
  lfloor: FUNCTION_TYPE.latex,
  rfloor: FUNCTION_TYPE.latex,
  lgroup: FUNCTION_TYPE.latex,
  rgroup: FUNCTION_TYPE.latex,
  lmoustache: FUNCTION_TYPE.latex,
  rmoustache: FUNCTION_TYPE.latex,
  mathopen: FUNCTION_TYPE.latex,
  mathclose: FUNCTION_TYPE.latex,
  // arrows
  to: FUNCTION_TYPE.latex,
  gets: FUNCTION_TYPE.latex,
  nearro: FUNCTION_TYPE.latex,
  searrow: FUNCTION_TYPE.latex,
  nwarrow: FUNCTION_TYPE.latex,
  swarrow: FUNCTION_TYPE.latex,
  mapsto: FUNCTION_TYPE.latex,
  longmapsto: FUNCTION_TYPE.latex,
  uparrow: FUNCTION_TYPE.latex,
  downarrow: FUNCTION_TYPE.latex,
  leftarrow: FUNCTION_TYPE.latex,
  rightarrow: FUNCTION_TYPE.latex,
  updownarrow: FUNCTION_TYPE.latex,
  leftrightarrow: FUNCTION_TYPE.latex,
  Uparrow: FUNCTION_TYPE.latex,
  Downarrow: FUNCTION_TYPE.latex,
  Leftarrow: FUNCTION_TYPE.latex,
  Rightarrow: FUNCTION_TYPE.latex,
  Updownarrow: FUNCTION_TYPE.latex,
  Leftrightarrow: FUNCTION_TYPE.latex,
  longleftarrow: FUNCTION_TYPE.latex,
  longrightarrow: FUNCTION_TYPE.latex,
  Longleftarrow: FUNCTION_TYPE.latex,
  Longrightarrow: FUNCTION_TYPE.latex,
  longleftrightarrow: FUNCTION_TYPE.latex,
  Longleftrightarrow: FUNCTION_TYPE.latex,
  hookleftarrow: FUNCTION_TYPE.latex,
  hookrightarrow: FUNCTION_TYPE.latex,
  leftharpoonup: FUNCTION_TYPE.latex,
  leftharpoondown: FUNCTION_TYPE.latex,
  rightharpoonup: FUNCTION_TYPE.latex,
  rightharpoondown: FUNCTION_TYPE.latex,
  rightleftharpoons: FUNCTION_TYPE.latex,
  iff: FUNCTION_TYPE.latex,
  // functions
  log: FUNCTION_TYPE.latex,
  lg: FUNCTION_TYPE.latex,
  ln: FUNCTION_TYPE.latex,
  sin: FUNCTION_TYPE.latex,
  cos: FUNCTION_TYPE.latex,
  tan: FUNCTION_TYPE.latex,
  cot: FUNCTION_TYPE.latex,
  sec: FUNCTION_TYPE.latex,
  csc: FUNCTION_TYPE.latex,
  arcsin: FUNCTION_TYPE.latex,
  arccos: FUNCTION_TYPE.latex,
  arctan: FUNCTION_TYPE.latex,
  sinh: FUNCTION_TYPE.latex,
  cosh: FUNCTION_TYPE.latex,
  tanh: FUNCTION_TYPE.latex,
  coth: FUNCTION_TYPE.latex,
  max: FUNCTION_TYPE.latex,
  min: FUNCTION_TYPE.latex,
  sup: FUNCTION_TYPE.latex,
  inf: FUNCTION_TYPE.latex,
  arg: FUNCTION_TYPE.latex,
  limsup: FUNCTION_TYPE.latex,
  liminf: FUNCTION_TYPE.latex,
  exp: FUNCTION_TYPE.latex,
  Pr: FUNCTION_TYPE.latex,
  gcd: FUNCTION_TYPE.latex,
  deg: FUNCTION_TYPE.latex,
  ker: FUNCTION_TYPE.latex,
  dim: FUNCTION_TYPE.latex,
  hom: FUNCTION_TYPE.latex,
  det: FUNCTION_TYPE.latex,
  // accents
  bar: FUNCTION_TYPE.latex,
  vec: FUNCTION_TYPE.latex,
  hat: FUNCTION_TYPE.latex,
  dot: FUNCTION_TYPE.latex,
  ddot: FUNCTION_TYPE.latex,
  tilde: FUNCTION_TYPE.latex,
  acute: FUNCTION_TYPE.latex,
  breve: FUNCTION_TYPE.latex,
  grave: FUNCTION_TYPE.latex,
  check: FUNCTION_TYPE.latex,
  mathring: FUNCTION_TYPE.latex,
  // others
  codts: FUNCTION_TYPE.latex,
  ldots: FUNCTION_TYPE.latex,
  vdots: FUNCTION_TYPE.latex,
  ddots: FUNCTION_TYPE.latex,
  infty: FUNCTION_TYPE.latex,
  nabla: FUNCTION_TYPE.latex,
  partial: FUNCTION_TYPE.latex,
  hbar: FUNCTION_TYPE.latex,
  forall: FUNCTION_TYPE.latex,
  exists: FUNCTION_TYPE.latex,
  neg: FUNCTION_TYPE.latex,
  emptyset: FUNCTION_TYPE.latex,
  angle: FUNCTION_TYPE.latex,
  triangle: FUNCTION_TYPE.latex,
  imath: FUNCTION_TYPE.latex,
  jmath: FUNCTION_TYPE.latex,
  aleph: FUNCTION_TYPE.latex,
  Re: FUNCTION_TYPE.latex,
  Im: FUNCTION_TYPE.latex,
  ell: FUNCTION_TYPE.latex,
  wp: FUNCTION_TYPE.latex,
  surd: FUNCTION_TYPE.latex,
  smile: FUNCTION_TYPE.latex,
  frown: FUNCTION_TYPE.latex,
  top: FUNCTION_TYPE.latex,
  bot: FUNCTION_TYPE.latex,
  sharp: FUNCTION_TYPE.latex,
  flat: FUNCTION_TYPE.latex,
  natural: FUNCTION_TYPE.latex,
  prime: FUNCTION_TYPE.latex,
  spadesuit: FUNCTION_TYPE.latex,
  heartsuit: FUNCTION_TYPE.latex,
  diamondsuit: FUNCTION_TYPE.latex,
  clubsuit: FUNCTION_TYPE.latex,
  diamond: FUNCTION_TYPE.latex,
  backslash: FUNCTION_TYPE.latex,
  //ProEq functions
  par: FUNCTION_TYPE.proeq,
  sum: FUNCTION_TYPE.proeq,
  int: FUNCTION_TYPE.proeq,
  lim: FUNCTION_TYPE.proeq,
}

const PROEQ_FUNCTIONS = {
  par: (p) => `\\left( ${p.join(' ')} \\right)`,
  sum: (p) => `\\sum${p.length > 1 ? `_{${p[0]}}` : ''}${p.length> 2 ? `^{${p[1]}}` : ''}{${p.length > 0 ? p[p.length - 1] : ''}}`,
  int: (p) => `\\int${p.length > 1 ? `_{${p[0]}}` : ''}${p.length> 2 ? `^{${p[1]}}` : ''}{${p.length > 0 ? p[p.length - 1] : ''}}`,
  lim: (p) => `\\lim${p.length > 1 ? `_{${p[0]}${p.length > 2 ? `\\to ${p[1]}` : ''}}` : ''}{${p.length > 0 ? p[p.length - 1] : ''}}`,
}

const refresh_function_table = () => {
  function_type_table = {..._FUNCTION_TYPE_TABLE}
}