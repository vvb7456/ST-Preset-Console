/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function tn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Y = {}, gt = [], $e = () => {
}, or = () => !1, gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ms = (e) => e.startsWith("onUpdate:"), oe = Object.assign, sn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Pi = Object.prototype.hasOwnProperty, U = (e, t) => Pi.call(e, t), D = Array.isArray, mt = (e) => qt(e) === "[object Map]", lr = (e) => qt(e) === "[object Set]", wn = (e) => qt(e) === "[object Date]", j = (e) => typeof e == "function", ee = (e) => typeof e == "string", ye = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", cr = (e) => (G(e) || j(e)) && j(e.then) && j(e.catch), fr = Object.prototype.toString, qt = (e) => fr.call(e), Ri = (e) => qt(e).slice(8, -1), ur = (e) => qt(e) === "[object Object]", _s = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mt = /* @__PURE__ */ tn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Mi = /-\w/g, we = bs(
  (e) => e.replace(Mi, (t) => t.slice(1).toUpperCase())
), Ii = /\B([A-Z])/g, ft = bs(
  (e) => e.replace(Ii, "-$1").toLowerCase()
), ar = bs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Rs = bs(
  (e) => e ? `on${ar(e)}` : ""
), je = (e, t) => !Object.is(e, t), Ms = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, dr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Fi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Cn;
const vs = () => Cn || (Cn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function nn(e) {
  if (D(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ee(n) ? Ni(n) : nn(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ee(e) || G(e))
    return e;
}
const Di = /;(?![^(]*\))/g, ji = /:([^]+)/, $i = /\/\*[^]*?\*\//g;
function Ni(e) {
  const t = {};
  return e.replace($i, "").split(Di).forEach((s) => {
    if (s) {
      const n = s.split(ji);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function it(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (D(e))
    for (let s = 0; s < e.length; s++) {
      const n = it(e[s]);
      n && (t += n + " ");
    }
  else if (G(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Hi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Li = /* @__PURE__ */ tn(Hi);
function hr(e) {
  return !!e || e === "";
}
function Vi(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = rn(e[n], t[n]);
  return s;
}
function rn(e, t) {
  if (e === t) return !0;
  let s = wn(e), n = wn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = ye(e), n = ye(t), s || n)
    return e === t;
  if (s = D(e), n = D(t), s || n)
    return s && n ? Vi(e, t) : !1;
  if (s = G(e), n = G(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !rn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const pr = (e) => !!(e && e.__v_isRef === !0), Xe = (e) => ee(e) ? e : e == null ? "" : D(e) || G(e) && (e.toString === fr || !j(e.toString)) ? pr(e) ? Xe(e.value) : JSON.stringify(e, gr, 2) : String(e), gr = (e, t) => pr(t) ? gr(e, t.value) : mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[Is(n, i) + " =>"] = r, s),
    {}
  )
} : lr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Is(s))
} : ye(t) ? Is(t) : G(t) && !D(t) && !ur(t) ? String(t) : t, Is = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ye(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let re;
class mr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && re && (re.active ? (this.parent = re, this.index = (re.scopes || (re.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, s = n.length; t < s; t++)
          n[t].pause();
      }
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, s = r.length; t < s; t++)
          r[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, s = n.length; t < s; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = re;
      try {
        return re = this, t();
      } finally {
        re = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = re, re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (re === this)
        re = this.prevScope;
      else {
        let t = re;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        const r = this.scopes.slice();
        for (s = 0, n = r.length; s < n; s++)
          r[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function _r(e) {
  return new mr(e);
}
function br() {
  return re;
}
function Bi(e, t = !1) {
  re && re.cleanups.push(e);
}
let X;
const Fs = /* @__PURE__ */ new WeakSet();
class vr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, re && (re.active ? re.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fs.has(this) && (Fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Tn(this), Sr(this);
    const t = X, s = Ce;
    X = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      wr(this), X = t, Ce = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        cn(t);
      this.deps = this.depsTail = void 0, Tn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ks(this) && this.run();
  }
  get dirty() {
    return Ks(this);
  }
}
let yr = 0, It, Ft;
function xr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ft, Ft = e;
    return;
  }
  e.next = It, It = e;
}
function on() {
  yr++;
}
function ln() {
  if (--yr > 0)
    return;
  if (Ft) {
    let t = Ft;
    for (Ft = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; It; ) {
    let t = It;
    for (It = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Sr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), cn(n), Ki(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function Ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vt) || (e.globalVersion = Vt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ks(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = X, n = Ce;
  X = e, Ce = !0;
  try {
    Sr(e);
    const r = e.fn(e._value);
    (t.version === 0 || je(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    X = s, Ce = n, wr(e), e.flags &= -3;
  }
}
function cn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      cn(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Ki(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const Tr = [];
function We() {
  Tr.push(Ce), Ce = !1;
}
function ke() {
  const e = Tr.pop();
  Ce = e === void 0 ? !0 : e;
}
function Tn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = X;
    X = void 0;
    try {
      t();
    } finally {
      X = s;
    }
  }
}
let Vt = 0;
class Ui {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class fn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!X || !Ce || X === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== X)
      s = this.activeLink = new Ui(X, this), X.deps ? (s.prevDep = X.depsTail, X.depsTail.nextDep = s, X.depsTail = s) : X.deps = X.depsTail = s, Er(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = X.depsTail, s.nextDep = void 0, X.depsTail.nextDep = s, X.depsTail = s, X.deps === s && (X.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Vt++, this.notify(t);
  }
  notify(t) {
    on();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ln();
    }
  }
}
function Er(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Er(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const is = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ Symbol(
  ""
), Us = /* @__PURE__ */ Symbol(
  ""
), Bt = /* @__PURE__ */ Symbol(
  ""
);
function ce(e, t, s) {
  if (Ce && X) {
    let n = is.get(e);
    n || is.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new fn()), r.map = n, r.key = s), r.track();
  }
}
function Be(e, t, s, n, r, i) {
  const o = is.get(e);
  if (!o) {
    Vt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (on(), t === "clear")
    o.forEach(l);
  else {
    const f = D(e), d = f && _s(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, C) => {
        (C === "length" || C === Bt || !ye(C) && C >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Bt)), t) {
        case "add":
          f ? d && l(o.get("length")) : (l(o.get(ot)), mt(e) && l(o.get(Us)));
          break;
        case "delete":
          f || (l(o.get(ot)), mt(e) && l(o.get(Us)));
          break;
        case "set":
          mt(e) && l(o.get(ot));
          break;
      }
  }
  ln();
}
function Wi(e, t) {
  const s = is.get(e);
  return s && s.get(t);
}
function at(e) {
  const t = /* @__PURE__ */ V(e);
  return t === e ? t : (ce(t, "iterate", Bt), /* @__PURE__ */ be(e) ? t : t.map(Te));
}
function ys(e) {
  return ce(e = /* @__PURE__ */ V(e), "iterate", Bt), e;
}
function Fe(e, t) {
  return /* @__PURE__ */ qe(e) ? yt(/* @__PURE__ */ Ue(e) ? Te(t) : t) : Te(t);
}
const ki = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ds(this, Symbol.iterator, (e) => Fe(this, e));
  },
  concat(...e) {
    return at(this).concat(
      ...e.map((t) => D(t) ? at(t) : t)
    );
  },
  entries() {
    return Ds(this, "entries", (e) => (e[1] = Fe(this, e[1]), e));
  },
  every(e, t) {
    return He(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return He(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Fe(this, n)),
      arguments
    );
  },
  find(e, t) {
    return He(
      this,
      "find",
      e,
      t,
      (s) => Fe(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return He(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return He(
      this,
      "findLast",
      e,
      t,
      (s) => Fe(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return He(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return He(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return js(this, "includes", e);
  },
  indexOf(...e) {
    return js(this, "indexOf", e);
  },
  join(e) {
    return at(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return js(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Et(this, "pop");
  },
  push(...e) {
    return Et(this, "push", e);
  },
  reduce(e, ...t) {
    return En(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return En(this, "reduceRight", e, t);
  },
  shift() {
    return Et(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Et(this, "splice", e);
  },
  toReversed() {
    return at(this).toReversed();
  },
  toSorted(e) {
    return at(this).toSorted(e);
  },
  toSpliced(...e) {
    return at(this).toSpliced(...e);
  },
  unshift(...e) {
    return Et(this, "unshift", e);
  },
  values() {
    return Ds(this, "values", (e) => Fe(this, e));
  }
};
function Ds(e, t, s) {
  const n = ys(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ be(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const qi = Array.prototype;
function He(e, t, s, n, r, i) {
  const o = ys(e), l = o !== e && !/* @__PURE__ */ be(e), f = o[t];
  if (f !== qi[t]) {
    const p = f.apply(e, i);
    return l ? Te(p) : p;
  }
  let d = s;
  o !== e && (l ? d = function(p, C) {
    return s.call(this, Fe(e, p), C, e);
  } : s.length > 2 && (d = function(p, C) {
    return s.call(this, p, C, e);
  }));
  const a = f.call(o, d, n);
  return l && r ? r(a) : a;
}
function En(e, t, s, n) {
  const r = ys(e), i = r !== e && !/* @__PURE__ */ be(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(d, a, p) {
    return l && (l = !1, d = Fe(e, d)), s.call(this, d, Fe(e, a), p, e);
  }) : s.length > 3 && (o = function(d, a, p) {
    return s.call(this, d, a, p, e);
  }));
  const f = r[t](o, ...n);
  return l ? Fe(e, f) : f;
}
function js(e, t, s) {
  const n = /* @__PURE__ */ V(e);
  ce(n, "iterate", Bt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Ss(s[0]) ? (s[0] = /* @__PURE__ */ V(s[0]), n[t](...s)) : r;
}
function Et(e, t, s = []) {
  We(), on();
  const n = (/* @__PURE__ */ V(e))[t].apply(e, s);
  return ln(), ke(), n;
}
const Gi = /* @__PURE__ */ tn("__proto__,__v_isRef,__isVue"), Ar = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ye)
);
function Ji(e) {
  ye(e) || (e = String(e));
  const t = /* @__PURE__ */ V(this);
  return ce(t, "has", e), t.hasOwnProperty(e);
}
class Or {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? ro : Ir : i ? Mr : Rr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = D(t);
    if (!r) {
      let f;
      if (o && (f = ki[s]))
        return f;
      if (s === "hasOwnProperty")
        return Ji;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ te(t) ? t : n
    );
    if ((ye(s) ? Ar.has(s) : Gi(s)) || (r || ce(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ te(l)) {
      const f = o && _s(s) ? l : l.value;
      return r && G(f) ? /* @__PURE__ */ ks(f) : f;
    }
    return G(l) ? r ? /* @__PURE__ */ ks(l) : /* @__PURE__ */ xs(l) : l;
  }
}
class Pr extends Or {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = D(t) && _s(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ qe(i);
      if (!/* @__PURE__ */ be(n) && !/* @__PURE__ */ qe(n) && (i = /* @__PURE__ */ V(i), n = /* @__PURE__ */ V(n)), !o && /* @__PURE__ */ te(i) && !/* @__PURE__ */ te(n))
        return d || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : U(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ te(t) ? t : r
    );
    return t === /* @__PURE__ */ V(r) && f && (l ? je(n, i) && Be(t, "set", s, n) : Be(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = U(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Be(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!ye(s) || !Ar.has(s)) && ce(t, "has", s), n;
  }
  ownKeys(t) {
    return ce(
      t,
      "iterate",
      D(t) ? "length" : ot
    ), Reflect.ownKeys(t);
  }
}
class Yi extends Or {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const zi = /* @__PURE__ */ new Pr(), Xi = /* @__PURE__ */ new Yi(), Zi = /* @__PURE__ */ new Pr(!0);
const Ws = (e) => e, Xt = (e) => Reflect.getPrototypeOf(e);
function Qi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ V(r), o = mt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...n), a = s ? Ws : t ? yt : Te;
    return !t && ce(
      i,
      "iterate",
      f ? Us : ot
    ), oe(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: C } = d.next();
          return C ? { value: p, done: C } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: C
          };
        }
      }
    );
  };
}
function Zt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function eo(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ V(i), l = /* @__PURE__ */ V(r);
      e || (je(r, l) && ce(o, "get", r), ce(o, "get", l));
      const { has: f } = Xt(o), d = t ? Ws : e ? yt : Te;
      if (f.call(o, r))
        return d(i.get(r));
      if (f.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ce(/* @__PURE__ */ V(r), "iterate", ot), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ V(i), l = /* @__PURE__ */ V(r);
      return e || (je(r, l) && ce(o, "has", r), ce(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ V(l), d = t ? Ws : e ? yt : Te;
      return !e && ce(f, "iterate", ot), l.forEach((a, p) => r.call(i, d(a), d(p), o));
    }
  };
  return oe(
    s,
    e ? {
      add: Zt("add"),
      set: Zt("set"),
      delete: Zt("delete"),
      clear: Zt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ V(this), o = Xt(i), l = /* @__PURE__ */ V(r), f = !t && !/* @__PURE__ */ be(r) && !/* @__PURE__ */ qe(r) ? l : r;
        return o.has.call(i, f) || je(r, f) && o.has.call(i, r) || je(l, f) && o.has.call(i, l) || (i.add(f), Be(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ be(i) && !/* @__PURE__ */ qe(i) && (i = /* @__PURE__ */ V(i));
        const o = /* @__PURE__ */ V(this), { has: l, get: f } = Xt(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ V(r), d = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), d ? je(i, a) && Be(o, "set", r, i) : Be(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ V(this), { has: o, get: l } = Xt(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ V(r), f = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return f && Be(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ V(this), i = r.size !== 0, o = r.clear();
        return i && Be(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = Qi(r, e, t);
  }), s;
}
function un(e, t) {
  const s = eo(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    U(s, r) && r in n ? s : n,
    r,
    i
  );
}
const to = {
  get: /* @__PURE__ */ un(!1, !1)
}, so = {
  get: /* @__PURE__ */ un(!1, !0)
}, no = {
  get: /* @__PURE__ */ un(!0, !1)
};
const Rr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), ro = /* @__PURE__ */ new WeakMap();
function io(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function xs(e) {
  return /* @__PURE__ */ qe(e) ? e : an(
    e,
    !1,
    zi,
    to,
    Rr
  );
}
// @__NO_SIDE_EFFECTS__
function oo(e) {
  return an(
    e,
    !1,
    Zi,
    so,
    Mr
  );
}
// @__NO_SIDE_EFFECTS__
function ks(e) {
  return an(
    e,
    !0,
    Xi,
    no,
    Ir
  );
}
function an(e, t, s, n, r) {
  if (!G(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = io(Ri(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return /* @__PURE__ */ qe(e) ? /* @__PURE__ */ Ue(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function V(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ V(t) : e;
}
function dn(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && dr(e, "__v_skip", !0), e;
}
const Te = (e) => G(e) ? /* @__PURE__ */ xs(e) : e, yt = (e) => G(e) ? /* @__PURE__ */ ks(e) : e;
// @__NO_SIDE_EFFECTS__
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function os(e) {
  return lo(e, !1);
}
function lo(e, t) {
  return /* @__PURE__ */ te(e) ? e : new co(e, t);
}
class co {
  constructor(t, s) {
    this.dep = new fn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ V(t), this._value = s ? t : Te(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ be(t) || /* @__PURE__ */ qe(t);
    t = n ? t : /* @__PURE__ */ V(t), je(t, s) && (this._rawValue = t, this._value = n ? t : Te(t), this.dep.trigger());
  }
}
function Se(e) {
  return /* @__PURE__ */ te(e) ? e.value : e;
}
const fo = {
  get: (e, t, s) => t === "__v_raw" ? e : Se(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ te(r) && !/* @__PURE__ */ te(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Fr(e) {
  return /* @__PURE__ */ Ue(e) ? e : new Proxy(e, fo);
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
  const t = D(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = ho(e, s);
  return t;
}
class ao {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = ye(s) ? s : String(s), this._raw = /* @__PURE__ */ V(t);
    let r = !0, i = t;
    if (!D(t) || ye(this._key) || !_s(this._key))
      do
        r = !/* @__PURE__ */ Ss(i) || /* @__PURE__ */ be(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Se(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ te(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ te(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Wi(this._raw, this._key);
  }
}
function ho(e, t, s) {
  return new ao(e, t, s);
}
class po {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new fn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return xr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Cr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function go(e, t, s = !1) {
  let n, r;
  return j(e) ? n = e : (n = e.get, r = e.set), new po(n, r, s);
}
const Qt = {}, ls = /* @__PURE__ */ new WeakMap();
let rt;
function mo(e, t = !1, s = rt) {
  if (s) {
    let n = ls.get(s);
    n || ls.set(s, n = []), n.push(e);
  }
}
function _o(e, t, s = Y) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, d = (I) => r ? I : /* @__PURE__ */ be(I) || r === !1 || r === 0 ? Ke(I, 1) : Ke(I);
  let a, p, C, E, x = !1, v = !1;
  if (/* @__PURE__ */ te(e) ? (p = () => e.value, x = /* @__PURE__ */ be(e)) : /* @__PURE__ */ Ue(e) ? (p = () => d(e), x = !0) : D(e) ? (v = !0, x = e.some((I) => /* @__PURE__ */ Ue(I) || /* @__PURE__ */ be(I)), p = () => e.map((I) => {
    if (/* @__PURE__ */ te(I))
      return I.value;
    if (/* @__PURE__ */ Ue(I))
      return d(I);
    if (j(I))
      return f ? f(I, 2) : I();
  })) : j(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (C) {
      We();
      try {
        C();
      } finally {
        ke();
      }
    }
    const I = rt;
    rt = a;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      rt = I;
    }
  } : p = $e, t && r) {
    const I = p, B = r === !0 ? 1 / 0 : r;
    p = () => Ke(I(), B);
  }
  const O = br(), A = () => {
    a.stop(), O && O.active && sn(O.effects, a);
  };
  if (i && t) {
    const I = t;
    t = (...B) => {
      const le = I(...B);
      return A(), le;
    };
  }
  let R = v ? new Array(e.length).fill(Qt) : Qt;
  const W = (I) => {
    if (!(!(a.flags & 1) || !a.dirty && !I))
      if (t) {
        const B = a.run();
        if (I || r || x || (v ? B.some((le, H) => je(le, R[H])) : je(B, R))) {
          C && C();
          const le = rt;
          rt = a;
          try {
            const H = [
              B,
              // pass undefined as the old value when it's changed for the first time
              R === Qt ? void 0 : v && R[0] === Qt ? [] : R,
              E
            ];
            R = B, f ? f(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            rt = le;
          }
        }
      } else
        a.run();
  };
  return l && l(W), a = new vr(p), a.scheduler = o ? () => o(W, !1) : W, E = (I) => mo(I, !1, a), C = a.onStop = () => {
    const I = ls.get(a);
    if (I) {
      if (f)
        f(I, 4);
      else
        for (const B of I) B();
      ls.delete(a);
    }
  }, t ? n ? W(!0) : R = a.run() : o ? o(W.bind(null, !0), !0) : a.run(), A.pause = a.pause.bind(a), A.resume = a.resume.bind(a), A.stop = A, A;
}
function Ke(e, t = 1 / 0, s) {
  if (t <= 0 || !G(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ te(e))
    Ke(e.value, t, s);
  else if (D(e))
    for (let n = 0; n < e.length; n++)
      Ke(e[n], t, s);
  else if (lr(e) || mt(e))
    e.forEach((n) => {
      Ke(n, t, s);
    });
  else if (ur(e)) {
    for (const n in e)
      Ke(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ke(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Gt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    ws(r, t, s);
  }
}
function Ee(e, t, s, n) {
  if (j(e)) {
    const r = Gt(e, t, s, n);
    return r && cr(r) && r.catch((i) => {
      ws(i, t, s);
    }), r;
  }
  if (D(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ee(e[i], t, s, n));
    return r;
  }
}
function ws(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Y;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, f, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      We(), Gt(i, null, 10, [
        e,
        f,
        d
      ]), ke();
      return;
    }
  }
  bo(e, s, r, n, o);
}
function bo(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ae = [];
let Ie = -1;
const _t = [];
let Ze = null, ht = 0;
const Dr = /* @__PURE__ */ Promise.resolve();
let cs = null;
function hn(e) {
  const t = cs || Dr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vo(e) {
  let t = Ie + 1, s = ae.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ae[n], i = Kt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function pn(e) {
  if (!(e.flags & 1)) {
    const t = Kt(e), s = ae[ae.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kt(s) ? ae.push(e) : ae.splice(vo(t), 0, e), e.flags |= 1, jr();
  }
}
function jr() {
  cs || (cs = Dr.then(Nr));
}
function yo(e) {
  D(e) ? _t.push(...e) : Ze && e.id === -1 ? Ze.splice(ht + 1, 0, e) : e.flags & 1 || (_t.push(e), e.flags |= 1), jr();
}
function An(e, t, s = Ie + 1) {
  for (; s < ae.length; s++) {
    const n = ae[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ae.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function $r(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort(
      (s, n) => Kt(s) - Kt(n)
    );
    if (_t.length = 0, Ze) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, ht = 0; ht < Ze.length; ht++) {
      const s = Ze[ht];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ze = null, ht = 0;
  }
}
const Kt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Nr(e) {
  try {
    for (Ie = 0; Ie < ae.length; Ie++) {
      const t = ae[Ie];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Gt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ie < ae.length; Ie++) {
      const t = ae[Ie];
      t && (t.flags &= -2);
    }
    Ie = -1, ae.length = 0, $r(), cs = null, (ae.length || _t.length) && Nr();
  }
}
let ve = null, Hr = null;
function fs(e) {
  const t = ve;
  return ve = e, Hr = e && e.type.__scopeId || null, t;
}
function xo(e, t = ve, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && Ln(-1);
    const i = fs(t), o = ct.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let f = ct.length; f > o; f--) ai();
      fs(i), n._d && Ln(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function On(e, t) {
  if (ve === null)
    return e;
  const s = As(ve), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, f = Y] = t[r];
    i && (j(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ke(o), n.push({
      dir: i,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function st(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (We(), Ee(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), ke());
  }
}
function So(e, t) {
  if (de) {
    let s = de.provides;
    const n = de.parent && de.parent.provides;
    n === s && (s = de.provides = Object.create(n)), s[e] = t;
  }
}
function Dt(e, t, s = !1) {
  const n = mi();
  if (n || lt) {
    let r = lt ? lt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && j(t) ? t.call(n && n.proxy) : t;
  }
}
function wo() {
  return !!(mi() || lt);
}
const Co = /* @__PURE__ */ Symbol.for("v-scx"), To = () => Dt(Co);
function jt(e, t, s) {
  return Lr(e, t, s);
}
function Lr(e, t, s = Y) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = oe({}, s), f = t && n || !t && i !== "post";
  let d;
  if (Wt) {
    if (i === "sync") {
      const E = To();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = $e, E.resume = $e, E.pause = $e, E;
    }
  }
  const a = de;
  l.call = (E, x, v) => Ee(E, a, x, v);
  let p = !1;
  i === "post" ? l.scheduler = (E) => {
    pe(E, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (E, x) => {
    x ? E() : pn(E);
  }), l.augmentJob = (E) => {
    t && (E.flags |= 4), p && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const C = _o(e, t, l);
  return Wt && (d ? d.push(C) : f && C()), C;
}
function Eo(e, t, s) {
  const n = this.proxy, r = ee(e) ? e.includes(".") ? Vr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  j(t) ? i = t : (i = t.handler, s = t);
  const o = Jt(this), l = Lr(r, i.bind(n), s);
  return o(), l;
}
function Vr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Ao = /* @__PURE__ */ Symbol("_vte"), Oo = (e) => e.__isTeleport, $s = /* @__PURE__ */ Symbol("_leaveCb");
function gn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, gn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Br(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    oe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Kr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const us = /* @__PURE__ */ new WeakMap();
function $t(e, t, s, n, r = !1) {
  if (D(e)) {
    e.forEach(
      (v, O) => $t(
        v,
        t && (D(t) ? t[O] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Nt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && $t(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? As(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, a = l.refs === Y ? l.refs = {} : l.refs, p = l.setupState, C = /* @__PURE__ */ V(p), E = p === Y ? or : (v) => Pn(a, v) ? !1 : U(C, v), x = (v, O) => !(O && Pn(a, O));
  if (d != null && d !== f) {
    if (Rn(t), ee(d))
      a[d] = null, E(d) && (p[d] = null);
    else if (/* @__PURE__ */ te(d)) {
      const v = t;
      x(d, v.k) && (d.value = null), v.k && (a[v.k] = null);
    }
  }
  if (j(f))
    Gt(f, l, 12, [o, a]);
  else {
    const v = ee(f), O = /* @__PURE__ */ te(f);
    if (v || O) {
      const A = () => {
        if (e.f) {
          const R = v ? E(f) ? p[f] : a[f] : x() || !e.k ? f.value : a[e.k];
          if (r)
            D(R) && sn(R, i);
          else if (D(R))
            R.includes(i) || R.push(i);
          else if (v)
            a[f] = [i], E(f) && (p[f] = a[f]);
          else {
            const W = [i];
            x(f, e.k) && (f.value = W), e.k && (a[e.k] = W);
          }
        } else v ? (a[f] = o, E(f) && (p[f] = o)) : O && (x(f, e.k) && (f.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const R = () => {
          A(), us.delete(e);
        };
        R.id = -1, us.set(e, R), pe(R, s);
      } else
        Rn(e), A();
    }
  }
}
function Rn(e) {
  const t = us.get(e);
  t && (t.flags |= 8, us.delete(e));
}
vs().requestIdleCallback;
vs().cancelIdleCallback;
const Nt = (e) => !!e.type.__asyncLoader, Ur = (e) => e.type.__isKeepAlive;
function Po(e, t) {
  Wr(e, "a", t);
}
function Ro(e, t) {
  Wr(e, "da", t);
}
function Wr(e, t, s = de) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Cs(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Ur(r.parent.vnode) && Mo(n, t, s, r), r = r.parent;
  }
}
function Mo(e, t, s, n) {
  const r = Cs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Gr(() => {
    sn(n[t], r);
  }, s);
}
function Cs(e, t, s = de, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      We();
      const l = Jt(s), f = Ee(t, s, e, o);
      return l(), ke(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ge = (e) => (t, s = de) => {
  (!Wt || e === "sp") && Cs(e, (...n) => t(...n), s);
}, Io = Ge("bm"), kr = Ge("m"), Fo = Ge(
  "bu"
), Do = Ge("u"), qr = Ge(
  "bum"
), Gr = Ge("um"), jo = Ge(
  "sp"
), $o = Ge("rtg"), No = Ge("rtc");
function Ho(e, t = de) {
  Cs("ec", e, t);
}
const Lo = /* @__PURE__ */ Symbol.for("v-ndc");
function es(e, t, s, n) {
  let r;
  const i = s, o = D(e);
  if (o || ee(e)) {
    const l = o && /* @__PURE__ */ Ue(e);
    let f = !1, d = !1;
    l && (f = !/* @__PURE__ */ be(e), d = /* @__PURE__ */ qe(e), e = ys(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? d ? yt(Te(e[a])) : Te(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (G(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, d = l.length; f < d; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
const qs = (e) => e ? _i(e) ? As(e) : qs(e.parent) : null, Ht = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ oe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => qs(e.parent),
    $root: (e) => qs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      pn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = hn.bind(e.proxy)),
    $watch: (e) => Eo.bind(e)
  })
), Ns = (e, t) => e !== Y && !e.__isScriptSetup && U(e, t), Vo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (Ns(n, t))
          return o[t] = 1, n[t];
        if (r !== Y && U(r, t))
          return o[t] = 2, r[t];
        if (U(i, t))
          return o[t] = 3, i[t];
        if (s !== Y && U(s, t))
          return o[t] = 4, s[t];
        Gs && (o[t] = 0);
      }
    }
    const d = Ht[t];
    let a, p;
    if (d)
      return t === "$attrs" && ce(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== Y && U(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = f.config.globalProperties, U(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return Ns(r, t) ? (r[t] = s, !0) : n !== Y && U(n, t) ? (n[t] = s, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(s[l] || e !== Y && l[0] !== "$" && U(e, l) || Ns(t, l) || U(i, l) || U(n, l) || U(Ht, l) || U(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : U(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Mn(e) {
  return D(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Gs = !0;
function Bo(e) {
  const t = Yr(e), s = e.proxy, n = e.ctx;
  Gs = !1, t.beforeCreate && In(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: C,
    beforeUpdate: E,
    updated: x,
    activated: v,
    deactivated: O,
    beforeDestroy: A,
    beforeUnmount: R,
    destroyed: W,
    unmounted: I,
    render: B,
    renderTracked: le,
    renderTriggered: H,
    errorCaptured: N,
    serverPrefetch: fe,
    // public API
    expose: he,
    inheritAttrs: xe,
    // assets
    components: Je,
    directives: ut,
    filters: St
  } = t;
  if (d && Ko(d, n, null), o)
    for (const Z in o) {
      const z = o[Z];
      j(z) && (n[Z] = z.bind(s));
    }
  if (r) {
    const Z = r.call(s, s);
    G(Z) && (e.data = /* @__PURE__ */ xs(Z));
  }
  if (Gs = !0, i)
    for (const Z in i) {
      const z = i[Z], et = j(z) ? z.bind(s, s) : j(z.get) ? z.get.bind(s, s) : $e, Yt = !j(z) && j(z.set) ? z.set.bind(s) : $e, tt = vi({
        get: et,
        set: Yt
      });
      Object.defineProperty(n, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (Ae) => tt.value = Ae
      });
    }
  if (l)
    for (const Z in l)
      Jr(l[Z], n, s, Z);
  if (f) {
    const Z = j(f) ? f.call(s) : f;
    Reflect.ownKeys(Z).forEach((z) => {
      So(z, Z[z]);
    });
  }
  a && In(a, e, "c");
  function k(Z, z) {
    D(z) ? z.forEach((et) => Z(et.bind(s))) : z && Z(z.bind(s));
  }
  if (k(Io, p), k(kr, C), k(Fo, E), k(Do, x), k(Po, v), k(Ro, O), k(Ho, N), k(No, le), k($o, H), k(qr, R), k(Gr, I), k(jo, fe), D(he))
    if (he.length) {
      const Z = e.exposed || (e.exposed = {});
      he.forEach((z) => {
        Object.defineProperty(Z, z, {
          get: () => s[z],
          set: (et) => s[z] = et,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === $e && (e.render = B), xe != null && (e.inheritAttrs = xe), Je && (e.components = Je), ut && (e.directives = ut), fe && Kr(e);
}
function Ko(e, t, s = $e) {
  D(e) && (e = Js(e));
  for (const n in e) {
    const r = e[n];
    let i;
    G(r) ? "default" in r ? i = Dt(
      r.from || n,
      r.default,
      !0
    ) : i = Dt(r.from || n) : i = Dt(r), /* @__PURE__ */ te(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function In(e, t, s) {
  Ee(
    D(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Jr(e, t, s, n) {
  let r = n.includes(".") ? Vr(s, n) : () => s[n];
  if (ee(e)) {
    const i = t[e];
    j(i) && jt(r, i);
  } else if (j(e))
    jt(r, e.bind(s));
  else if (G(e))
    if (D(e))
      e.forEach((i) => Jr(i, t, s, n));
    else {
      const i = j(e.handler) ? e.handler.bind(s) : t[e.handler];
      j(i) && jt(r, i, e);
    }
}
function Yr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (d) => as(f, d, o, !0)
  ), as(f, t, o)), G(t) && i.set(t, f), f;
}
function as(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && as(e, i, s, !0), r && r.forEach(
    (o) => as(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = Uo[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Uo = {
  data: Fn,
  props: Dn,
  emits: Dn,
  // objects
  methods: Pt,
  computed: Pt,
  // lifecycle
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  // assets
  components: Pt,
  directives: Pt,
  // watch
  watch: ko,
  // provide / inject
  provide: Fn,
  inject: Wo
};
function Fn(e, t) {
  return t ? e ? function() {
    return oe(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wo(e, t) {
  return Pt(Js(e), Js(t));
}
function Js(e) {
  if (D(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pt(e, t) {
  return e ? oe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Dn(e, t) {
  return e ? D(e) && D(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : oe(
    /* @__PURE__ */ Object.create(null),
    Mn(e),
    Mn(t ?? {})
  ) : t;
}
function ko(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = oe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ue(e[n], t[n]);
  return s;
}
function zr() {
  return {
    app: null,
    config: {
      isNativeTag: or,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let qo = 0;
function Go(e, t) {
  return function(n, r = null) {
    j(n) || (n = oe({}, n)), r != null && !G(r) && (r = null);
    const i = zr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = i.app = {
      _uid: qo++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Cl,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && j(a.install) ? (o.add(a), a.install(d, ...p)) : j(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (i.components[a] = p, d) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, d) : i.directives[a];
      },
      mount(a, p, C) {
        if (!f) {
          const E = d._ceVNode || Ne(n, r);
          return E.appContext = i, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(E, a, C), f = !0, d._container = a, a.__vue_app__ = d, As(E.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Ee(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = lt;
        lt = d;
        try {
          return a();
        } finally {
          lt = p;
        }
      }
    };
    return d;
  };
}
let lt = null;
const Jo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${ft(t)}Modifiers`];
function Yo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Y;
  let r = s;
  const i = t.startsWith("update:"), o = i && Jo(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => ee(a) ? a.trim() : a)), o.number && (r = s.map(Fi)));
  let l, f = n[l = Rs(t)] || // also try camelCase event handler (#2249)
  n[l = Rs(we(t))];
  !f && i && (f = n[l = Rs(ft(t))]), f && Ee(
    f,
    e,
    6,
    r
  );
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ee(
      d,
      e,
      6,
      r
    );
  }
}
const zo = /* @__PURE__ */ new WeakMap();
function Xr(e, t, s = !1) {
  const n = s ? zo : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!j(e)) {
    const f = (d) => {
      const a = Xr(d, t, !0);
      a && (l = !0, oe(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (G(e) && n.set(e, null), null) : (D(i) ? i.forEach((f) => o[f] = null) : oe(o, i), G(e) && n.set(e, o), o);
}
function Ts(e, t) {
  return !e || !gs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, ft(t)) || U(e, t));
}
function jn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: d,
    renderCache: a,
    props: p,
    data: C,
    setupState: E,
    ctx: x,
    inheritAttrs: v
  } = e, O = fs(e);
  let A, R;
  try {
    if (s.shapeFlag & 4) {
      const I = r || n, B = I;
      A = De(
        d.call(
          B,
          I,
          a,
          p,
          E,
          C,
          x
        )
      ), R = l;
    } else {
      const I = t;
      A = De(
        I.length > 1 ? I(
          p,
          { attrs: l, slots: o, emit: f }
        ) : I(
          p,
          null
        )
      ), R = t.props ? l : Xo(l);
    }
  } catch (I) {
    ct.length = 0, ws(I, e, 1), A = Ne(Qe);
  }
  let W = A;
  if (R && v !== !1) {
    const I = Object.keys(R), { shapeFlag: B } = W;
    I.length && B & 7 && (i && I.some(ms) && (R = Zo(
      R,
      i
    )), W = xt(W, R, !1, !0));
  }
  return s.dirs && (W = xt(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && gn(W, s.transition), A = W, fs(O), A;
}
const Xo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || gs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Zo = (e, t) => {
  const s = {};
  for (const n in e)
    (!ms(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Qo(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? $n(n, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const C = a[p];
        if (Zr(o, n, C) && !Ts(d, C))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? $n(n, o, d) : !0 : !!o;
  return !1;
}
function $n(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (Zr(t, e, i) && !Ts(s, i))
      return !0;
  }
  return !1;
}
function Zr(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && G(n) && G(r) ? !rn(n, r) : n !== r;
}
function el({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Qr = {}, ei = () => Object.create(Qr), ti = (e) => Object.getPrototypeOf(e) === Qr;
function tl(e, t, s, n = !1) {
  const r = {}, i = ei();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), si(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ oo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function sl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ V(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let C = a[p];
        if (Ts(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (f)
          if (U(i, C))
            E !== i[C] && (i[C] = E, d = !0);
          else {
            const x = we(C);
            r[x] = Ys(
              f,
              l,
              x,
              E,
              e,
              !1
            );
          }
        else
          E !== i[C] && (i[C] = E, d = !0);
      }
    }
  } else {
    si(e, t, r, i) && (d = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !U(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ft(p)) === p || !U(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = Ys(
        f,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !U(t, p)) && (delete i[p], d = !0);
  }
  d && Be(e.attrs, "set", "");
}
function si(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (Mt(f))
        continue;
      const d = t[f];
      let a;
      r && U(r, a = we(f)) ? !i || !i.includes(a) ? s[a] = d : (l || (l = {}))[a] = d : Ts(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ V(s), d = l || Y;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = Ys(
        r,
        f,
        p,
        d[p],
        e,
        !U(d, p)
      );
    }
  }
  return o;
}
function Ys(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = U(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && j(f)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const a = Jt(r);
          n = d[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ft(s)) && (n = !0));
  }
  return n;
}
const nl = /* @__PURE__ */ new WeakMap();
function ni(e, t, s = !1) {
  const n = s ? nl : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!j(e)) {
    const a = (p) => {
      f = !0;
      const [C, E] = ni(p, t, !0);
      oe(o, C), E && l.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return G(e) && n.set(e, gt), gt;
  if (D(i))
    for (let a = 0; a < i.length; a++) {
      const p = we(i[a]);
      Nn(p) && (o[p] = Y);
    }
  else if (i)
    for (const a in i) {
      const p = we(a);
      if (Nn(p)) {
        const C = i[a], E = o[p] = D(C) || j(C) ? { type: C } : oe({}, C), x = E.type;
        let v = !1, O = !0;
        if (D(x))
          for (let A = 0; A < x.length; ++A) {
            const R = x[A], W = j(R) && R.name;
            if (W === "Boolean") {
              v = !0;
              break;
            } else W === "String" && (O = !1);
          }
        else
          v = j(x) && x.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = v, E[
          1
          /* shouldCastTrue */
        ] = O, (v || U(E, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return G(e) && n.set(e, d), d;
}
function Nn(e) {
  return e[0] !== "$" && !Mt(e);
}
const mn = (e) => e === "_" || e === "_ctx" || e === "$stable", _n = (e) => D(e) ? e.map(De) : [De(e)], rl = (e, t, s) => {
  if (t._n)
    return t;
  const n = xo((...r) => _n(t(...r)), s);
  return n._c = !1, n;
}, ri = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (mn(r)) continue;
    const i = e[r];
    if (j(i))
      t[r] = rl(r, i, n);
    else if (i != null) {
      const o = _n(i);
      t[r] = () => o;
    }
  }
}, ii = (e, t) => {
  const s = _n(t);
  e.slots.default = () => s;
}, oi = (e, t, s) => {
  for (const n in t)
    (s || !mn(n)) && (e[n] = t[n]);
}, il = (e, t, s) => {
  const n = e.slots = ei();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (oi(n, t, s), s && dr(n, "_", r, !0)) : ri(t, n);
  } else t && ii(e, t);
}, ol = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = Y;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : oi(r, t, s) : (i = !t.$stable, ri(t, r)), o = t;
  } else t && (ii(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !mn(l) && o[l] == null && delete r[l];
}, pe = al;
function ll(e) {
  return cl(e);
}
function cl(e, t) {
  const s = vs();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: C,
    setScopeId: E = $e,
    insertStaticContent: x
  } = e, v = (c, u, h, b = null, _ = null, g = null, w = void 0, S = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !At(c, u) && (b = zt(c), Ae(c, _, g, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: m, ref: M, shapeFlag: T } = u;
    switch (m) {
      case Es:
        O(c, u, h, b);
        break;
      case Qe:
        A(c, u, h, b);
        break;
      case ss:
        c == null && R(u, h, b, w);
        break;
      case ge:
        Je(
          c,
          u,
          h,
          b,
          _,
          g,
          w,
          S,
          y
        );
        break;
      default:
        T & 1 ? B(
          c,
          u,
          h,
          b,
          _,
          g,
          w,
          S,
          y
        ) : T & 6 ? ut(
          c,
          u,
          h,
          b,
          _,
          g,
          w,
          S,
          y
        ) : (T & 64 || T & 128) && m.process(
          c,
          u,
          h,
          b,
          _,
          g,
          w,
          S,
          y,
          Ct
        );
    }
    M != null && _ ? $t(M, c && c.ref, g, u || c, !u) : M == null && c && c.ref != null && $t(c.ref, null, g, c, !0);
  }, O = (c, u, h, b) => {
    if (c == null)
      n(
        u.el = l(u.children),
        h,
        b
      );
    else {
      const _ = u.el = c.el;
      u.children !== c.children && d(_, u.children);
    }
  }, A = (c, u, h, b) => {
    c == null ? n(
      u.el = f(u.children || ""),
      h,
      b
    ) : u.el = c.el;
  }, R = (c, u, h, b) => {
    [c.el, c.anchor] = x(
      c.children,
      u,
      h,
      b,
      c.el,
      c.anchor
    );
  }, W = ({ el: c, anchor: u }, h, b) => {
    let _;
    for (; c && c !== u; )
      _ = C(c), n(c, h, b), c = _;
    n(u, h, b);
  }, I = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = C(c), r(c), c = h;
    r(u);
  }, B = (c, u, h, b, _, g, w, S, y) => {
    if (u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null)
      le(
        u,
        h,
        b,
        _,
        g,
        w,
        S,
        y
      );
    else {
      const m = c.el && c.el._isVueCE ? c.el : null;
      try {
        m && m._beginPatch(), fe(
          c,
          u,
          _,
          g,
          w,
          S,
          y
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, le = (c, u, h, b, _, g, w, S) => {
    let y, m;
    const { props: M, shapeFlag: T, transition: P, dirs: F } = c;
    if (y = c.el = o(
      c.type,
      g,
      M && M.is,
      M
    ), T & 8 ? a(y, c.children) : T & 16 && N(
      c.children,
      y,
      null,
      b,
      _,
      Hs(c, g),
      w,
      S
    ), F && st(c, null, b, "created"), H(y, c, c.scopeId, w, b), M) {
      for (const J in M)
        J !== "value" && !Mt(J) && i(y, J, null, M[J], g, b);
      "value" in M && i(y, "value", null, M.value, g), (m = M.onVnodeBeforeMount) && Me(m, b, c);
    }
    F && st(c, null, b, "beforeMount");
    const L = fl(_, P);
    L && P.beforeEnter(y), n(y, u, h), ((m = M && M.onVnodeMounted) || L || F) && pe(() => {
      try {
        m && Me(m, b, c), L && P.enter(y), F && st(c, null, b, "mounted");
      } finally {
      }
    }, _);
  }, H = (c, u, h, b, _) => {
    if (h && E(c, h), b)
      for (let g = 0; g < b.length; g++)
        E(c, b[g]);
    if (_) {
      let g = _.subTree;
      if (u === g || ui(g.type) && (g.ssContent === u || g.ssFallback === u)) {
        const w = _.vnode;
        H(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, N = (c, u, h, b, _, g, w, S, y = 0) => {
    for (let m = y; m < c.length; m++) {
      const M = c[m] = S ? Ve(c[m]) : De(c[m]);
      v(
        null,
        M,
        u,
        h,
        b,
        _,
        g,
        w,
        S
      );
    }
  }, fe = (c, u, h, b, _, g, w) => {
    const S = u.el = c.el;
    let { patchFlag: y, dynamicChildren: m, dirs: M } = u;
    y |= c.patchFlag & 16;
    const T = c.props || Y, P = u.props || Y;
    let F;
    if (h && nt(h, !1), (F = P.onVnodeBeforeUpdate) && Me(F, h, u, c), M && st(u, c, h, "beforeUpdate"), h && nt(h, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    m && (!c.dynamicChildren || c.dynamicChildren.length !== m.length) && (y = 0, w = !1, m = null), (T.innerHTML && P.innerHTML == null || T.textContent && P.textContent == null) && a(S, ""), m ? he(
      c.dynamicChildren,
      m,
      S,
      h,
      b,
      Hs(u, _),
      g
    ) : w || z(
      c,
      u,
      S,
      null,
      h,
      b,
      Hs(u, _),
      g,
      !1
    ), y > 0) {
      if (y & 16)
        xe(S, T, P, h, _);
      else if (y & 2 && T.class !== P.class && i(S, "class", null, P.class, _), y & 4 && i(S, "style", T.style, P.style, _), y & 8) {
        const L = u.dynamicProps;
        for (let J = 0; J < L.length; J++) {
          const q = L[J], ne = T[q], ie = P[q];
          (ie !== ne || q === "value") && i(S, q, ne, ie, _, h);
        }
      }
      y & 1 && c.children !== u.children && a(S, u.children);
    } else !w && m == null && xe(S, T, P, h, _);
    ((F = P.onVnodeUpdated) || M) && pe(() => {
      F && Me(F, h, u, c), M && st(u, c, h, "updated");
    }, b);
  }, he = (c, u, h, b, _, g, w) => {
    for (let S = 0; S < u.length; S++) {
      const y = c[S], m = u[S], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !At(y, m) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      v(
        y,
        m,
        M,
        null,
        b,
        _,
        g,
        w,
        !0
      );
    }
  }, xe = (c, u, h, b, _) => {
    if (u !== h) {
      if (u !== Y)
        for (const g in u)
          !Mt(g) && !(g in h) && i(
            c,
            g,
            u[g],
            null,
            _,
            b
          );
      for (const g in h) {
        if (Mt(g)) continue;
        const w = h[g], S = u[g];
        w !== S && g !== "value" && i(c, g, S, w, _, b);
      }
      "value" in h && i(c, "value", u.value, h.value, _);
    }
  }, Je = (c, u, h, b, _, g, w, S, y) => {
    const m = u.el = c ? c.el : l(""), M = u.anchor = c ? c.anchor : l("");
    let { patchFlag: T, dynamicChildren: P, slotScopeIds: F } = u;
    F && (S = S ? S.concat(F) : F), c == null ? (n(m, h, b), n(M, h, b), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      M,
      _,
      g,
      w,
      S,
      y
    )) : T > 0 && T & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === P.length ? (he(
      c.dynamicChildren,
      P,
      h,
      _,
      g,
      w,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && li(
      c,
      u,
      !0
      /* shallow */
    )) : z(
      c,
      u,
      h,
      M,
      _,
      g,
      w,
      S,
      y
    );
  }, ut = (c, u, h, b, _, g, w, S, y) => {
    u.slotScopeIds = S, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      b,
      w,
      y
    ) : St(
      u,
      h,
      b,
      _,
      g,
      w,
      y
    ) : Ye(c, u, y);
  }, St = (c, u, h, b, _, g, w) => {
    const S = c.component = bl(
      c,
      b,
      _
    );
    if (Ur(c) && (S.ctx.renderer = Ct), vl(S, !1, w), S.asyncDep) {
      if (_ && _.registerDep(S, k, w), !c.el) {
        const y = S.subTree = Ne(Qe);
        A(null, y, u, h), c.placeholder = y.el;
      }
    } else
      k(
        S,
        c,
        u,
        h,
        _,
        g,
        w
      );
  }, Ye = (c, u, h) => {
    const b = u.component = c.component;
    if (Qo(c, u, h))
      if (b.asyncDep && !b.asyncResolved) {
        Z(b, u, h);
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, k = (c, u, h, b, _, g, w) => {
    const S = () => {
      if (c.isMounted) {
        let { next: T, bu: P, u: F, parent: L, vnode: J } = c;
        {
          const Pe = ci(c);
          if (Pe) {
            T && (T.el = J.el, Z(c, T, w)), Pe.asyncDep.then(() => {
              pe(() => {
                c.isUnmounted || m();
              }, _);
            });
            return;
          }
        }
        let q = T, ne;
        nt(c, !1), T ? (T.el = J.el, Z(c, T, w)) : T = J, P && Ms(P), (ne = T.props && T.props.onVnodeBeforeUpdate) && Me(ne, L, T, J), nt(c, !0);
        const ie = jn(c), Oe = c.subTree;
        c.subTree = ie, v(
          Oe,
          ie,
          // parent may have changed if it's in a teleport
          p(Oe.el),
          // anchor may have changed if it's in a fragment
          zt(Oe),
          c,
          _,
          g
        ), T.el = ie.el, q === null && el(c, ie.el), F && pe(F, _), (ne = T.props && T.props.onVnodeUpdated) && pe(
          () => Me(ne, L, T, J),
          _
        );
      } else {
        let T;
        const { el: P, props: F } = u, { bm: L, m: J, parent: q, root: ne, type: ie } = c, Oe = Nt(u);
        nt(c, !1), L && Ms(L), !Oe && (T = F && F.onVnodeBeforeMount) && Me(T, q, u), nt(c, !0);
        {
          ne.ce && ne.ce._hasShadowRoot() && ne.ce._injectChildStyle(
            ie,
            c.parent ? c.parent.type : void 0
          );
          const Pe = c.subTree = jn(c);
          v(
            null,
            Pe,
            h,
            b,
            c,
            _,
            g
          ), u.el = Pe.el;
        }
        if (J && pe(J, _), !Oe && (T = F && F.onVnodeMounted)) {
          const Pe = u;
          pe(
            () => Me(T, q, Pe),
            _
          );
        }
        (u.shapeFlag & 256 || q && Nt(q.vnode) && q.vnode.shapeFlag & 256) && c.a && pe(c.a, _), c.isMounted = !0, u = h = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new vr(S);
    c.scope.off();
    const m = c.update = y.run.bind(y), M = c.job = y.runIfDirty.bind(y);
    M.i = c, M.id = c.uid, y.scheduler = () => pn(M), nt(c, !0), m();
  }, Z = (c, u, h) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, sl(c, u.props, b, h), ol(c, u.children, h), We(), An(c), ke();
  }, z = (c, u, h, b, _, g, w, S, y = !1) => {
    const m = c && c.children, M = c ? c.shapeFlag : 0, T = u.children, { patchFlag: P, shapeFlag: F } = u;
    if (P > 0) {
      if (P & 128) {
        Yt(
          m,
          T,
          h,
          b,
          _,
          g,
          w,
          S,
          y
        );
        return;
      } else if (P & 256) {
        et(
          m,
          T,
          h,
          b,
          _,
          g,
          w,
          S,
          y
        );
        return;
      }
    }
    F & 8 ? (M & 16 && wt(m, _, g), T !== m && a(h, T)) : M & 16 ? F & 16 ? Yt(
      m,
      T,
      h,
      b,
      _,
      g,
      w,
      S,
      y
    ) : wt(m, _, g, !0) : (M & 8 && a(h, ""), F & 16 && N(
      T,
      h,
      b,
      _,
      g,
      w,
      S,
      y
    ));
  }, et = (c, u, h, b, _, g, w, S, y) => {
    c = c || gt, u = u || gt;
    const m = c.length, M = u.length, T = Math.min(m, M);
    let P;
    for (P = 0; P < T; P++) {
      const F = u[P] = y ? Ve(u[P]) : De(u[P]);
      v(
        c[P],
        F,
        h,
        null,
        _,
        g,
        w,
        S,
        y
      );
    }
    m > M ? wt(
      c,
      _,
      g,
      !0,
      !1,
      T
    ) : N(
      u,
      h,
      b,
      _,
      g,
      w,
      S,
      y,
      T
    );
  }, Yt = (c, u, h, b, _, g, w, S, y) => {
    let m = 0;
    const M = u.length;
    let T = c.length - 1, P = M - 1;
    for (; m <= T && m <= P; ) {
      const F = c[m], L = u[m] = y ? Ve(u[m]) : De(u[m]);
      if (At(F, L))
        v(
          F,
          L,
          h,
          null,
          _,
          g,
          w,
          S,
          y
        );
      else
        break;
      m++;
    }
    for (; m <= T && m <= P; ) {
      const F = c[T], L = u[P] = y ? Ve(u[P]) : De(u[P]);
      if (At(F, L))
        v(
          F,
          L,
          h,
          null,
          _,
          g,
          w,
          S,
          y
        );
      else
        break;
      T--, P--;
    }
    if (m > T) {
      if (m <= P) {
        const F = P + 1, L = F < M ? u[F].el : b;
        for (; m <= P; )
          v(
            null,
            u[m] = y ? Ve(u[m]) : De(u[m]),
            h,
            L,
            _,
            g,
            w,
            S,
            y
          ), m++;
      }
    } else if (m > P)
      for (; m <= T; )
        Ae(c[m], _, g, !0), m++;
    else {
      const F = m, L = m, J = /* @__PURE__ */ new Map();
      for (m = L; m <= P; m++) {
        const me = u[m] = y ? Ve(u[m]) : De(u[m]);
        me.key != null && J.set(me.key, m);
      }
      let q, ne = 0;
      const ie = P - L + 1;
      let Oe = !1, Pe = 0;
      const Tt = new Array(ie);
      for (m = 0; m < ie; m++) Tt[m] = 0;
      for (m = F; m <= T; m++) {
        const me = c[m];
        if (ne >= ie) {
          Ae(me, _, g, !0);
          continue;
        }
        let Re;
        if (me.key != null)
          Re = J.get(me.key);
        else
          for (q = L; q <= P; q++)
            if (Tt[q - L] === 0 && At(me, u[q])) {
              Re = q;
              break;
            }
        Re === void 0 ? Ae(me, _, g, !0) : (Tt[Re - L] = m + 1, Re >= Pe ? Pe = Re : Oe = !0, v(
          me,
          u[Re],
          h,
          null,
          _,
          g,
          w,
          S,
          y
        ), ne++);
      }
      const yn = Oe ? ul(Tt) : gt;
      for (q = yn.length - 1, m = ie - 1; m >= 0; m--) {
        const me = L + m, Re = u[me], xn = u[me + 1], Sn = me + 1 < M ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xn.el || fi(xn)
        ) : b;
        Tt[m] === 0 ? v(
          null,
          Re,
          h,
          Sn,
          _,
          g,
          w,
          S,
          y
        ) : Oe && (q < 0 || m !== yn[q] ? tt(Re, h, Sn, 2) : q--);
      }
    }
  }, tt = (c, u, h, b, _ = null) => {
    const { el: g, type: w, transition: S, children: y, shapeFlag: m } = c;
    if (m & 6) {
      tt(c.component.subTree, u, h, b);
      return;
    }
    if (m & 128) {
      c.suspense.move(u, h, b);
      return;
    }
    if (m & 64) {
      w.move(c, u, h, Ct);
      return;
    }
    if (w === ge) {
      n(g, u, h);
      for (let T = 0; T < y.length; T++)
        tt(y[T], u, h, b);
      n(c.anchor, u, h);
      return;
    }
    if (w === ss) {
      W(c, u, h);
      return;
    }
    if (b !== 2 && m & 1 && S)
      if (b === 0)
        S.persisted && !g[$s] ? n(g, u, h) : (S.beforeEnter(g), n(g, u, h), pe(() => S.enter(g), _));
      else {
        const { leave: T, delayLeave: P, afterLeave: F } = S, L = () => {
          c.ctx.isUnmounted ? r(g) : n(g, u, h);
        }, J = () => {
          const q = g._isLeaving || !!g[$s];
          g._isLeaving && g[$s](
            !0
            /* cancelled */
          ), S.persisted && !q ? L() : T(g, () => {
            L(), F && F();
          });
        };
        P ? P(g, L, J) : J();
      }
    else
      n(g, u, h);
  }, Ae = (c, u, h, b = !1, _ = !1) => {
    const {
      type: g,
      props: w,
      ref: S,
      children: y,
      dynamicChildren: m,
      shapeFlag: M,
      patchFlag: T,
      dirs: P,
      cacheIndex: F,
      memo: L
    } = c;
    if (T === -2 && (_ = !1), S != null && (We(), $t(S, null, h, c, !0), ke()), F != null && (u.renderCache[F] = void 0), M & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const J = M & 1 && P, q = !Nt(c);
    let ne;
    if (q && (ne = w && w.onVnodeBeforeUnmount) && Me(ne, u, c), M & 6)
      Oi(c.component, h, b);
    else {
      if (M & 128) {
        c.suspense.unmount(h, b);
        return;
      }
      J && st(c, null, u, "beforeUnmount"), M & 64 ? c.type.remove(
        c,
        u,
        h,
        Ct,
        b
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== ge || T > 0 && T & 64) ? wt(
        m,
        u,
        h,
        !1,
        !0
      ) : (g === ge && T & 384 || !_ && M & 16) && wt(y, u, h), b && bn(c);
    }
    const ie = L != null && F == null;
    (q && (ne = w && w.onVnodeUnmounted) || J || ie) && pe(() => {
      ne && Me(ne, u, c), J && st(c, null, u, "unmounted"), ie && (c.el = null);
    }, h);
  }, bn = (c) => {
    const { type: u, el: h, anchor: b, transition: _ } = c;
    if (u === ge) {
      Ai(h, b);
      return;
    }
    if (u === ss) {
      I(c);
      return;
    }
    const g = () => {
      r(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: S } = _, y = () => w(h, g);
      S ? S(c.el, g, y) : y();
    } else
      g();
  }, Ai = (c, u) => {
    let h;
    for (; c !== u; )
      h = C(c), r(c), c = h;
    r(u);
  }, Oi = (c, u, h) => {
    const { bum: b, scope: _, job: g, subTree: w, um: S, m: y, a: m } = c;
    Hn(y), Hn(m), b && Ms(b), _.stop(), g && (g.flags |= 8, Ae(w, c, u, h)), S && pe(S, u), pe(() => {
      c.isUnmounted = !0;
    }, u);
  }, wt = (c, u, h, b = !1, _ = !1, g = 0) => {
    for (let w = g; w < c.length; w++)
      Ae(c[w], u, h, b, _);
  }, zt = (c) => {
    if (c.shapeFlag & 6)
      return zt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = C(c.anchor || c.el), h = u && u[Ao];
    return h ? C(h) : u;
  };
  let Ps = !1;
  const vn = (c, u, h) => {
    let b;
    c == null ? u._vnode && (Ae(u._vnode, null, null, !0), b = u._vnode.component) : v(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, Ps || (Ps = !0, An(b), $r(), Ps = !1);
  }, Ct = {
    p: v,
    um: Ae,
    m: tt,
    r: bn,
    mt: St,
    mc: N,
    pc: z,
    pbc: he,
    n: zt,
    o: e
  };
  return {
    render: vn,
    hydrate: void 0,
    createApp: Go(vn)
  };
}
function Hs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function nt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function li(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (D(n) && D(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ve(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && li(o, l)), l.type === Es && (l.patchFlag === -1 && (l = r[i] = Ve(l)), l.el = o.el), l.type === Qe && !l.el && (l.el = o.el);
    }
}
function ul(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < d ? i = l + 1 : o = l;
      d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function ci(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ci(t);
}
function Hn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function fi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? fi(t.subTree) : null;
}
const ui = (e) => e.__isSuspense;
function al(e, t) {
  t && t.pendingBranch ? D(e) ? t.effects.push(...e) : t.effects.push(e) : yo(e);
}
const ge = /* @__PURE__ */ Symbol.for("v-fgt"), Es = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), ss = /* @__PURE__ */ Symbol.for("v-stc"), ct = [];
let _e = null;
function Q(e = !1) {
  ct.push(_e = e ? null : []);
}
function ai() {
  ct.pop(), _e = ct[ct.length - 1] || null;
}
let Ut = 1;
function Ln(e, t = !1) {
  Ut += e, e < 0 && _e && t && (_e.hasOnce = !0);
}
function di(e) {
  return e.dynamicChildren = Ut > 0 ? _e || gt : null, ai(), Ut > 0 && _e && _e.push(e), e;
}
function se(e, t, s, n, r, i) {
  return di(
    K(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function hi(e, t, s, n, r) {
  return di(
    Ne(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function pi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  return e.type === t.type && e.key === t.key;
}
const gi = ({ key: e }) => e ?? null, ns = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ee(e) || /* @__PURE__ */ te(e) || j(e) ? { i: ve, r: e, k: t, f: !!s } : e : null);
function K(e, t = null, s = null, n = 0, r = null, i = e === ge ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gi(t),
    ref: t && ns(t),
    scopeId: Hr,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return l ? (ds(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= ee(s) ? 8 : 16), Ut > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && _e.push(f), f;
}
const Ne = dl;
function dl(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Lo) && (e = Qe), pi(e)) {
    const l = xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && ds(l, s), Ut > 0 && !i && _e && (l.shapeFlag & 6 ? _e[_e.indexOf(e)] = l : _e.push(l)), l.patchFlag = -2, l;
  }
  if (wl(e) && (e = e.__vccOpts), t) {
    t = hl(t);
    let { class: l, style: f } = t;
    l && !ee(l) && (t.class = it(l)), G(f) && (/* @__PURE__ */ Ss(f) && !D(f) && (f = oe({}, f)), t.style = nn(f));
  }
  const o = ee(e) ? 1 : ui(e) ? 128 : Oo(e) ? 64 : G(e) ? 4 : j(e) ? 2 : 0;
  return K(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function hl(e) {
  return e ? /* @__PURE__ */ Ss(e) || ti(e) ? oe({}, e) : e : null;
}
function xt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? gl(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && gi(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? D(i) ? i.concat(ns(t)) : [i, ns(t)] : ns(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ge ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && xt(e.ssContent),
    ssFallback: e.ssFallback && xt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && gn(
    a,
    f.clone(a)
  ), a;
}
function rs(e = " ", t = 0) {
  return Ne(Es, null, e, t);
}
function pl(e, t) {
  const s = Ne(ss, null, e);
  return s.staticCount = t, s;
}
function pt(e = "", t = !1) {
  return t ? (Q(), hi(Qe, null, e)) : Ne(Qe, null, e);
}
function De(e) {
  return e == null || typeof e == "boolean" ? Ne(Qe) : D(e) ? Ne(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pi(e) ? Ve(e) : Ne(Es, null, String(e));
}
function Ve(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xt(e);
}
function ds(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (D(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ds(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !ti(t) ? t._ctx = ve : r === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (j(t)) {
    if (n & 65) {
      ds(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ve }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [rs(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function gl(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = it([t.class, n.class]));
      else if (r === "style")
        t.style = nn([t.style, n.style]);
      else if (gs(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(D(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ms(r) && (t[r] = o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Me(e, t, s, n = null) {
  Ee(e, t, 7, [
    s,
    n
  ]);
}
const ml = zr();
let _l = 0;
function bl(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || ml, i = {
    uid: _l++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new mr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ni(n, r),
    emitsOptions: Xr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Y,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Y,
    data: Y,
    props: Y,
    attrs: Y,
    slots: Y,
    refs: Y,
    setupState: Y,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Yo.bind(null, i), e.ce && e.ce(i), i;
}
let de = null;
const mi = () => de || ve;
let hs, zs;
{
  const e = vs(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  hs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => de = s
  ), zs = t(
    "__VUE_SSR_SETTERS__",
    (s) => Wt = s
  );
}
const Jt = (e) => {
  const t = de;
  return hs(e), e.scope.on(), () => {
    e.scope.off(), hs(t);
  };
}, Vn = () => {
  de && de.scope.off(), hs(null);
};
function _i(e) {
  return e.vnode.shapeFlag & 4;
}
let Wt = !1;
function vl(e, t = !1, s = !1) {
  t && zs(t);
  const { props: n, children: r } = e.vnode, i = _i(e);
  tl(e, n, i, t), il(e, r, s || t);
  const o = i ? yl(e, t) : void 0;
  return t && zs(!1), o;
}
function yl(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vo);
  const { setup: n } = s;
  if (n) {
    We();
    const r = e.setupContext = n.length > 1 ? Sl(e) : null, i = Jt(e), o = Gt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = cr(o);
    if (ke(), i(), (l || e.sp) && !Nt(e) && Kr(e), l) {
      if (o.then(Vn, Vn), t)
        return o.then((f) => {
          Bn(e, f);
        }).catch((f) => {
          ws(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Bn(e, o);
  } else
    bi(e);
}
function Bn(e, t, s) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) && (e.setupState = Fr(t)), bi(e);
}
function bi(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || $e);
  {
    const r = Jt(e);
    We();
    try {
      Bo(e);
    } finally {
      ke(), r();
    }
  }
}
const xl = {
  get(e, t) {
    return ce(e, "get", ""), e[t];
  }
};
function Sl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, xl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function As(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fr(dn(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Ht)
        return Ht[s](e);
    },
    has(t, s) {
      return s in t || s in Ht;
    }
  })) : e.proxy;
}
function wl(e) {
  return j(e) && "__vccOpts" in e;
}
const vi = (e, t) => /* @__PURE__ */ go(e, t, Wt), Cl = "3.5.40";
/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xs;
const Kn = typeof window < "u" && window.trustedTypes;
if (Kn)
  try {
    Xs = /* @__PURE__ */ Kn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yi = Xs ? (e) => Xs.createHTML(e) : (e) => e, Tl = "http://www.w3.org/2000/svg", El = "http://www.w3.org/1998/Math/MathML", Le = typeof document < "u" ? document : null, Un = Le && /* @__PURE__ */ Le.createElement("template"), Al = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Le.createElementNS(Tl, e) : t === "mathml" ? Le.createElementNS(El, e) : s ? Le.createElement(e, { is: s }) : Le.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Le.createTextNode(e),
  createComment: (e) => Le.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Le.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Un.innerHTML = yi(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Un.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Ol = /* @__PURE__ */ Symbol("_vtc");
function Pl(e, t, s) {
  const n = e[Ol];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const ps = /* @__PURE__ */ Symbol("_vod"), xi = /* @__PURE__ */ Symbol("_vsh"), Wn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[ps] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Ot(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Ot(e, !0), n.enter(e)) : n.leave(e, () => {
      Ot(e, !1);
    }) : Ot(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ot(e, t);
  }
};
function Ot(e, t) {
  e.style.display = t ? e[ps] : "none", e[xi] = !t;
}
const Rl = /* @__PURE__ */ Symbol(""), Ml = /(?:^|;)\s*display\s*:/;
function Il(e, t, s) {
  const n = e.style, r = ee(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ee(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Rt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Rt(n, o, "");
    for (const o in s) {
      o === "display" && (i = !0);
      const l = s[o];
      l != null ? Dl(
        e,
        o,
        !ee(t) && t ? t[o] : void 0,
        l
      ) || Rt(n, o, l) : Rt(n, o, "");
    }
  } else if (r) {
    if (t !== s) {
      const o = n[Rl];
      o && (s += ";" + o), n.cssText = s, i = Ml.test(s);
    }
  } else t && e.removeAttribute("style");
  ps in e && (e[ps] = i ? n.display : "", e[xi] && (n.display = "none"));
}
const kn = /\s*!important$/;
function Rt(e, t, s) {
  if (D(s))
    s.forEach((n) => Rt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Fl(e, t);
    kn.test(s) ? e.setProperty(
      ft(n),
      s.replace(kn, ""),
      "important"
    ) : e[n] = s;
  }
}
const qn = ["Webkit", "Moz", "ms"], Ls = {};
function Fl(e, t) {
  const s = Ls[t];
  if (s)
    return s;
  let n = we(t);
  if (n !== "filter" && n in e)
    return Ls[t] = n;
  n = ar(n);
  for (let r = 0; r < qn.length; r++) {
    const i = qn[r] + n;
    if (i in e)
      return Ls[t] = i;
  }
  return t;
}
function Dl(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ee(n) && s === n;
}
const Gn = "http://www.w3.org/1999/xlink";
function Jn(e, t, s, n, r, i = Li(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Gn, t.slice(6, t.length)) : e.setAttributeNS(Gn, t, s) : s == null || i && !hr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ye(s) ? String(s) : s
  );
}
function Yn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? yi(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = hr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function jl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function $l(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const zn = /* @__PURE__ */ Symbol("_vei");
function Nl(e, t, s, n, r = null) {
  const i = e[zn] || (e[zn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = Vl(t);
    if (n) {
      const d = i[t] = Ul(
        n,
        r
      );
      jl(e, l, d, f);
    } else o && ($l(e, l, o, f), i[t] = void 0);
  }
}
const Hl = /(Once|Passive|Capture)$/, Ll = /^on:?(?:Once|Passive|Capture)$/;
function Vl(e) {
  let t, s;
  for (; (s = e.match(Hl)) && !Ll.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ft(e.slice(2)), t];
}
let Vs = 0;
const Bl = /* @__PURE__ */ Promise.resolve(), Kl = () => Vs || (Bl.then(() => Vs = 0), Vs = Date.now());
function Ul(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const r = s.value;
    if (D(r)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const o = r.slice(), l = [n];
      for (let f = 0; f < o.length && !n._stopped; f++) {
        const d = o[f];
        d && Ee(
          d,
          t,
          5,
          l
        );
      }
    } else
      Ee(
        r,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = Kl(), s;
}
const Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wl = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Pl(e, n, o) : t === "style" ? Il(e, s, n) : gs(t) ? ms(t) || Nl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kl(e, t, n, o)) ? (Yn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Jn(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ql(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ee(n))) ? Yn(e, we(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Jn(e, t, n, o));
};
function kl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xn(t) && j(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Xn(t) && ee(s) ? !1 : t in e;
}
function ql(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = we(t);
  return Array.isArray(s) ? s.some((r) => we(r) === n) : Object.keys(s).some((r) => we(r) === n);
}
const Gl = /* @__PURE__ */ oe({ patchProp: Wl }, Al);
let Zn;
function Jl() {
  return Zn || (Zn = ll(Gl));
}
const Yl = (...e) => {
  const t = Jl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Xl(n);
    if (!r) return;
    const i = t._component;
    !j(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, zl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function zl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Xl(e) {
  return ee(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v4.0.2
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
let Si;
const Os = (e) => Si = e, wi = (
  /* istanbul ignore next */
  Symbol()
);
function Qn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
function Zl() {
  const e = _r(!0), t = e.run(() => /* @__PURE__ */ os({}));
  let s = [], n = [];
  const r = dn({
    install(i) {
      Os(r), r._a = i, i.provide(wi, r), i.config.globalProperties.$pinia = r, n.forEach((o) => s.push(o)), n = [];
    },
    use(i) {
      return this._a ? s.push(i) : n.push(i), this;
    },
    _p: s,
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return r;
}
const Zs = () => {
};
function er(e, t, s, n = Zs) {
  e.add(t);
  const r = () => {
    e.delete(t) && n();
  };
  return !s && br() && Bi(r), r;
}
function dt(e, ...t) {
  e.forEach((s) => {
    s(...t);
  });
}
const Ql = (e) => e(), tr = Symbol(), Bs = Symbol();
function Qs(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!Object.hasOwn(t, s)) continue;
    const n = t[s], r = e[s];
    Qn(r) && Qn(n) && Object.hasOwn(e, s) && !/* @__PURE__ */ te(n) && !/* @__PURE__ */ Ue(n) ? e[s] = Qs(r, n) : e[s] = n;
  }
  return e;
}
const ec = (
  /* istanbul ignore next */
  Symbol()
);
function tc(e) {
  return !e || typeof e != "object" || !Object.hasOwn(e, ec);
}
const { assign: ze } = Object;
function sc(e) {
  return !!(/* @__PURE__ */ te(e) && e.effect);
}
function nc(e, t, s, n) {
  const { state: r, actions: i, getters: o } = t, l = s.state.value[e];
  let f;
  function d() {
    l || (s.state.value[e] = r ? r() : {});
    const a = /* @__PURE__ */ uo(s.state.value[e]);
    return ze(a, i, Object.keys(o || {}).reduce((p, C) => (p[C] = dn(vi(() => {
      Os(s);
      const E = s._s.get(e);
      return o[C].call(E, E);
    })), p), {}));
  }
  return f = Ci(e, d, t, s, n, !0), f;
}
function Ci(e, t, s = {}, n, r, i) {
  let o;
  const l = ze({ actions: {} }, s), f = { deep: !0 };
  let d, a, p = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set(), E;
  const x = n.state.value[e];
  !i && !x && (n.state.value[e] = {});
  let v;
  function O(H) {
    let N;
    d = a = !1, typeof H == "function" ? (H(n.state.value[e]), N = {
      type: "patch function",
      storeId: e,
      events: E
    }) : (Qs(n.state.value[e], H), N = {
      type: "patch object",
      payload: H,
      storeId: e,
      events: E
    });
    const fe = v = Symbol();
    hn().then(() => {
      v === fe && (d = !0);
    }), a = !0, dt(p, N, n.state.value[e]);
  }
  const A = i ? function() {
    const { state: N } = s, fe = N ? N() : {};
    this.$patch((he) => {
      ze(he, fe);
    });
  } : Zs;
  function R() {
    o.stop(), p.clear(), C.clear(), n._s.delete(e);
  }
  const W = (H, N = "") => {
    if (tr in H)
      return H[Bs] = N, H;
    const fe = function() {
      Os(n);
      const he = Array.from(arguments), xe = /* @__PURE__ */ new Set(), Je = /* @__PURE__ */ new Set();
      function ut(k) {
        xe.add(k);
      }
      function St(k) {
        Je.add(k);
      }
      dt(C, {
        args: he,
        name: fe[Bs],
        store: B,
        after: ut,
        onError: St
      });
      let Ye;
      try {
        Ye = H.apply(this && this.$id === e ? this : B, he);
      } catch (k) {
        throw dt(Je, k), k;
      }
      return Ye instanceof Promise ? Ye.then((k) => (dt(xe, k), k)).catch((k) => (dt(Je, k), Promise.reject(k))) : (dt(xe, Ye), Ye);
    };
    return fe[tr] = !0, fe[Bs] = N, fe;
  }, I = {
    _p: n,
    $id: e,
    $onAction: er.bind(null, C),
    $patch: O,
    $reset: A,
    $subscribe(H, N = {}) {
      if (p.has(H))
        return Zs;
      const fe = er(p, H, N.detached, () => he()), he = o.run(() => jt(() => n.state.value[e], (xe) => {
        (N.flush === "sync" ? a : d) && H({
          storeId: e,
          type: "direct",
          events: E
        }, xe);
      }, ze({}, f, N)));
      return fe;
    },
    $dispose: R
  }, B = /* @__PURE__ */ xs(I);
  n._s.set(e, B);
  const le = (n._a && n._a.runWithContext || Ql)(() => n._e.run(() => (o = _r()).run(() => t({ action: W }))));
  for (const H in le) {
    const N = le[H];
    /* @__PURE__ */ te(N) && !sc(N) || /* @__PURE__ */ Ue(N) ? i || (x && tc(N) && (/* @__PURE__ */ te(N) ? N.value = x[H] : Qs(N, x[H])), n.state.value[e][H] = N) : typeof N == "function" && (le[H] = W(N, H), l.actions[H] = N);
  }
  return ze(B, le), ze(/* @__PURE__ */ V(B), le), Object.defineProperty(B, "$state", {
    get: () => n.state.value[e],
    set: (H) => {
      O((N) => {
        ze(N, H);
      });
    }
  }), n._p.forEach((H) => {
    const N = o.run(() => H({
      store: B,
      app: n._a,
      pinia: n,
      options: l
    }));
    ze(B, N);
  }), x && i && s.hydrate && s.hydrate(B.$state, x), d = !0, a = !0, B;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function rc(e, t, s) {
  let n;
  const r = typeof t == "function";
  n = r ? s : t;
  function i(o, l) {
    const f = wo();
    return o = o || (f ? Dt(wi, null) : null), o && Os(o), o = Si, o._s.has(e) || (r ? Ci(e, t, n, o) : nc(e, n, o)), o._s.get(e);
  }
  return i.$id = e, i;
}
function ic(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function sr(e, t) {
  const s = t[e.var] ?? "";
  return e.equals !== void 0 ? s === e.equals : e.not !== void 0 ? s !== e.not : !0;
}
function kt() {
  try {
    return SillyTavern.getContext();
  } catch {
    return null;
  }
}
function nr(e, t) {
  const s = kt();
  if (!s) return t;
  const n = s.variables.global.get(e);
  return n == null || n === "" ? t : String(n);
}
function rr(e, t) {
  const s = kt();
  s && s.variables.global.set(e, t);
}
function ir(e) {
  const t = kt();
  if (t)
    try {
      typeof t.variables.global.del == "function" ? t.variables.global.del(e) : delete t.extensionSettings.variables.global[e];
    } catch {
    }
}
function oc(e, t) {
  return e.type === "toggle" ? t === "true" || t === "false" : Array.isArray(e.options) ? e.options.includes(t) : !0;
}
const Ti = /* @__PURE__ */ rc("vp-variables", {
  state: () => ({
    manifest: null,
    currentPresetName: null,
    values: {}
  }),
  getters: {
    hasManifest(e) {
      return e.manifest !== null && e.manifest.groups.length > 0;
    }
  },
  actions: {
    readAll() {
      if (!this.manifest) return;
      const e = {};
      for (const t of this.manifest.groups)
        for (const s of t.defs) {
          const n = nr(s.name, s.default);
          e[s.name] = oc(s, n) ? n : s.default;
        }
      this.values = e, this.applyVif();
    },
    activateManifest(e) {
      this.manifest = e, this.readAll();
    },
    async init() {
      kt() && await this.reloadForPreset();
    },
    async reloadForPreset() {
      const t = kt()?.chatCompletionSettings;
      if (!t) {
        this.manifest = null, this.currentPresetName = null, this.values = {};
        return;
      }
      this.currentPresetName = t.preset_settings_openai ?? null;
      const s = t.extensions?.["ST-Preset-Console"]?.manifest;
      if (s && Array.isArray(s.groups)) {
        this.activateManifest(s);
        return;
      }
      const n = t.variable_manifest;
      if (n && Array.isArray(n.groups)) {
        this.activateManifest(n);
        return;
      }
      this.manifest = null, this.values = {};
    },
    set(e, t) {
      this.values[e] = t, this.applyVif(), this.values[e] === t && rr(e, t);
    },
    applyVif() {
      if (this.manifest)
        for (let e = 0; e < 3; e++) {
          let t = !1;
          for (const s of this.manifest.groups)
            for (const n of s.defs) {
              const r = ic(n.vif), i = r.some((l) => l.mode === "flip" && !sr(l, this.values)), o = r.some((l) => l.mode !== "flip" && !sr(l, this.values));
              i ? (this.values[n.name] !== "false" && (this.values[n.name] = "false", t = !0), ir(n.name)) : o ? (this.values[n.name] !== n.default && (this.values[n.name] = n.default, t = !0), ir(n.name)) : nr(n.name, "") === "" && n.default !== "" && (this.values[n.name] !== n.default && (this.values[n.name] = n.default, t = !0), rr(n.name, n.default));
            }
          if (!t) break;
        }
    },
    reset(e) {
      const t = this.findDef(e);
      t && this.set(e, t.default);
    },
    findDef(e) {
      if (this.manifest)
        for (const t of this.manifest.groups) {
          const s = t.defs.find((n) => n.name === e);
          if (s) return s;
        }
    }
  }
});
function ts(e, t, s) {
  if (e === "debug") return;
  console[e](`[预设控制台] ${t}`, ...s);
}
const bt = {
  debug: (e, ...t) => ts("debug", e, t),
  info: (e, ...t) => ts("info", e, t),
  warn: (e, ...t) => ts("warn", e, t),
  error: (e, ...t) => ts("error", e, t)
}, lc = {
  key: 0,
  class: "stmp-switch-label"
}, cc = { class: "stmp-switch" }, fc = ["checked", "disabled"], uc = /* @__PURE__ */ Br({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, r = /* @__PURE__ */ os(null);
    function i() {
      const o = s.modelValue;
      n("update:modelValue", !o), hn(() => {
        r.value && s.modelValue === o && r.value.checked !== o && (r.value.checked = o);
      });
    }
    return (o, l) => (Q(), se("label", {
      class: it(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (Q(), se("span", lc, Xe(e.label), 1)) : pt("", !0),
      K("span", cc, [
        K("input", {
          ref_key: "inputRef",
          ref: r,
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: i
        }, null, 40, fc),
        l[0] || (l[0] = K("span", { class: "stmp-switch-track" }, [
          K("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), Ei = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, ac = /* @__PURE__ */ Ei(uc, [["__scopeId", "data-v-529649ca"]]), dc = { class: "stmp-settings" }, hc = {
  key: 0,
  class: "stmp-tab-bar"
}, pc = ["onClick"], gc = {
  key: 1,
  class: "stmp-tab-content"
}, mc = {
  key: 0,
  class: "stmp-row"
}, _c = { class: "stmp-row-info" }, bc = { class: "stmp-row-title" }, vc = ["title"], yc = {
  key: 0,
  class: "stmp-row-subtitle"
}, xc = {
  key: 0,
  class: "stmp-chips"
}, Sc = ["onClick"], wc = ["onClick"], Cc = {
  key: 3,
  class: "stmp-model-wrap"
}, Tc = ["value", "placeholder", "onChange"], Ec = ["onClick"], Ac = { class: "stmp-tab-panel" }, Oc = { class: "stmp-row" }, Pc = { class: "stmp-row-info" }, Rc = { class: "stmp-row-desc" }, Mc = {
  key: 0,
  class: "fa-solid fa-circle-check stmp-preset-ok",
  title: "该预设已启用变量控制"
}, Ic = { class: "stmp-about" }, Fc = { class: "stmp-about-version" }, Dc = {
  key: 2,
  class: "stmp-unsupported"
}, jc = /* @__PURE__ */ Br({
  __name: "VariablePanel",
  setup(e) {
    const t = Ti(), s = { id: "通用", label: "通用", icon: "fa-solid fa-sliders" }, n = "0.1.1", r = /* @__PURE__ */ os(""), i = /* @__PURE__ */ os([]);
    jt(
      () => t.manifest,
      (x) => {
        const v = x && x.groups.length > 0 ? x.groups.map((O) => ({
          id: O.title,
          label: O.title,
          icon: O.icon
        })) : [];
        i.value = [...v, s], i.value.some((O) => O.id === r.value) || (r.value = v.length > 0 ? v[0].id : s.id);
      },
      { immediate: !0 }
    );
    function o(x, v) {
      const O = v.target;
      t.set(x.name, O.value);
    }
    function l(x, v) {
      t.set(x.name, v);
    }
    function f(x, v) {
      t.set(x.name, v ? "true" : "false");
    }
    function d(x) {
      t.reset(x.name), typeof toastr < "u" && toastr.info(`${x.label} 已重置`, "预设控制台");
    }
    function a(x) {
      if (!x.vif) return !0;
      const v = Array.isArray(x.vif) ? x.vif : [x.vif];
      for (const O of v) {
        if (O.mode === "flip") continue;
        const A = t.values[O.var] ?? "";
        if (O.equals !== void 0 && A !== O.equals || O.not !== void 0 && A === O.not) return !1;
      }
      return !0;
    }
    function p(x) {
      return x.vif ? (Array.isArray(x.vif) ? x.vif : [x.vif]).some((O) => O.mode === "flip" && !C(O)) : !1;
    }
    function C(x) {
      const v = t.values[x.var] ?? "";
      return x.equals !== void 0 ? v === x.equals : x.not !== void 0 ? v !== x.not : !0;
    }
    async function E(x) {
      const v = (() => {
        try {
          return SillyTavern.getContext();
        } catch {
          return null;
        }
      })();
      if (!v) return;
      const O = t.values[x.name] ?? x.default, A = `<h3 style="margin:0 0 8px 0">${x.label}</h3>${x.help ? `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.8">${x.help}</div>` : ""}`, R = await v.callPopup(A, "input", O, { wide: !0, rows: 20, okButton: "保存" });
      R !== !1 && typeof R == "string" && (t.set(x.name, R.trim()), typeof toastr < "u" && toastr.success(`${x.label} 已保存`, "预设控制台"));
    }
    return kr(() => {
      const x = (() => {
        try {
          return SillyTavern.getContext();
        } catch {
          return null;
        }
      })();
      x?.eventSource.on(x.event_types.APP_READY, t.init), bt.info("panel mounted");
    }), qr(() => {
      const x = (() => {
        try {
          return SillyTavern.getContext();
        } catch {
          return null;
        }
      })();
      x?.eventSource.removeListener(x.event_types.APP_READY, t.init);
    }), (x, v) => (Q(), se("div", dc, [
      Se(t).hasManifest ? (Q(), se("div", hc, [
        (Q(!0), se(ge, null, es(i.value, (O) => (Q(), se("div", {
          key: O.id,
          class: it(["stmp-tab", { active: r.value === O.id }]),
          onClick: (A) => r.value = O.id
        }, [
          K("i", {
            class: it(O.icon)
          }, null, 2),
          K("span", null, Xe(O.label), 1)
        ], 10, pc))), 128))
      ])) : pt("", !0),
      Se(t).hasManifest ? (Q(), se("div", gc, [
        (Q(!0), se(ge, null, es(Se(t).manifest?.groups, (O) => On((Q(), se("div", {
          key: O.title,
          class: "stmp-tab-panel"
        }, [
          (Q(!0), se(ge, null, es(O.defs, (A) => (Q(), se(ge, {
            key: A.name
          }, [
            a(A) ? (Q(), se("div", mc, [
              K("div", _c, [
                K("div", bc, [
                  rs(Xe(A.label) + " ", 1),
                  A.help ? (Q(), se("i", {
                    key: 0,
                    class: "fa-solid fa-circle-info stmp-help-tip",
                    title: A.help
                  }, null, 8, vc)) : pt("", !0)
                ]),
                A.subtitle ? (Q(), se("div", yc, Xe(A.subtitle), 1)) : pt("", !0)
              ]),
              A.options ? (Q(), se("div", xc, [
                (Q(!0), se(ge, null, es(A.options, (R) => (Q(), se("div", {
                  key: R,
                  class: it(["stmp-chip", { active: Se(t).values[A.name] === R }]),
                  onClick: (W) => l(A, R)
                }, [
                  K("span", null, Xe(A.optionLabels?.[R] ?? R), 1)
                ], 10, Sc))), 128))
              ])) : A.type === "toggle" ? (Q(), hi(ac, {
                key: 1,
                "model-value": Se(t).values[A.name] === "true",
                disabled: p(A),
                "onUpdate:modelValue": (R) => f(A, R)
              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])) : A.type === "textarea" ? (Q(), se("div", {
                key: 2,
                class: "menu_button menu_button_icon stmp-action-btn",
                title: "编辑",
                onClick: (R) => E(A)
              }, [...v[0] || (v[0] = [
                K("i", { class: "fa-solid fa-pen-to-square" }, null, -1)
              ])], 8, wc)) : (Q(), se("div", Cc, [
                K("input", {
                  class: "text_pole stmp-text-input",
                  value: Se(t).values[A.name],
                  placeholder: A.help || "",
                  onChange: (R) => o(A, R)
                }, null, 40, Tc),
                K("div", {
                  class: "menu_button menu_button_icon stmp-action-btn",
                  title: "重置",
                  onClick: (R) => d(A)
                }, [...v[1] || (v[1] = [
                  K("i", { class: "fa-solid fa-rotate-left" }, null, -1)
                ])], 8, Ec)
              ]))
            ])) : pt("", !0)
          ], 64))), 128))
        ])), [
          [Wn, r.value === O.title]
        ])), 128)),
        On(K("div", Ac, [
          K("div", Oc, [
            K("div", Pc, [
              v[2] || (v[2] = K("div", { class: "stmp-row-title" }, "当前预设", -1)),
              K("div", Rc, Xe(Se(t).currentPresetName ?? "未选择"), 1)
            ]),
            Se(t).hasManifest ? (Q(), se("i", Mc)) : pt("", !0)
          ]),
          v[6] || (v[6] = K("div", { class: "stmp-separator" }, null, -1)),
          K("div", Ic, [
            v[3] || (v[3] = K("div", { class: "stmp-about-icon" }, [
              K("i", { class: "fa-solid fa-sliders" })
            ], -1)),
            v[4] || (v[4] = K("div", { class: "stmp-about-name" }, "预设控制台", -1)),
            K("div", Fc, "Version " + Xe(Se(n)), 1),
            v[5] || (v[5] = pl('<div class="stmp-about-desc" data-v-cc5a1be9>SillyTavern 预设变量控制面板</div><a href="https://github.com/vvb7456/ST-Preset-Console" target="_blank" rel="noopener" class="stmp-about-link" data-v-cc5a1be9><i class="fa-brands fa-github" data-v-cc5a1be9></i><span data-v-cc5a1be9>GitHub</span></a><div class="stmp-about-copyright" data-v-cc5a1be9><a href="https://www.erocraft.com" target="_blank" rel="noopener" data-v-cc5a1be9>艾萝工坊</a> © 2015 - 2026</div>', 3))
          ])
        ], 512), [
          [Wn, r.value === s.id]
        ])
      ])) : (Q(), se("div", Dc, [...v[7] || (v[7] = [
        K("i", { class: "fa-solid fa-circle-exclamation stmp-unsupported-icon" }, null, -1),
        K("div", { class: "stmp-unsupported-title" }, "不支持的预设", -1),
        K("div", { class: "stmp-unsupported-desc" }, [
          rs("当前预设未携带 manifest，无法显示变量面板。"),
          K("br"),
          rs("请导入带有 ST-Preset-Console manifest 的预设，或切换到支持的预设。")
        ], -1)
      ])]))
    ]));
  }
}), $c = /* @__PURE__ */ Ei(jc, [["__scopeId", "data-v-cc5a1be9"]]), Nc = `
<div class="inline-drawer">
    <div class="inline-drawer-toggle inline-drawer-header">
        <b data-i18n="预设控制台">预设控制台</b>
        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
    </div>
    <div class="inline-drawer-content stmp-ext-settings-content">
        <div id="vp-mount"></div>
    </div>
</div>
`;
let vt = null, Lt = null;
function Hc() {
  const e = $("#extensions_settings2");
  if (!e || !e.length)
    return bt.warn("extensions_settings2 not found"), !1;
  if (e.append(Nc), Lt = e.children(".inline-drawer").last()[0] ?? null, !Lt) return !1;
  const t = Lt.querySelector("#vp-mount");
  if (!t) return !1;
  const s = Zl();
  vt = Yl($c), vt.use(s), vt.mount(t);
  const n = Ti(s);
  n.init();
  const r = SillyTavern.getContext(), i = () => {
    n.reloadForPreset();
  };
  return r.eventSource?.on(r.event_types?.PRESET_CHANGED, i), en = () => {
    r.eventSource?.off(r.event_types?.PRESET_CHANGED, i);
  }, !0;
}
function Lc() {
  en?.(), en = null, vt && (vt.unmount(), vt = null), Lt?.remove(), Lt = null;
}
let en = null;
function Kc() {
  try {
    Hc() ? bt.info("loaded") : bt.error("drawer mount failed");
  } catch (e) {
    bt.error("init failed", e);
  }
}
function Vc() {
  Lc(), bt.info("destroyed");
}
function Uc() {
  Vc();
}
export {
  Vc as destroy,
  Uc as disable,
  Kc as init
};
