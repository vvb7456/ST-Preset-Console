/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function en(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Y = {}, gt = [], $e = () => {
}, ti = () => !1, ps = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gs = (e) => e.startsWith("onUpdate:"), oe = Object.assign, tn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Er = Object.prototype.hasOwnProperty, B = (e, t) => Er.call(e, t), j = Array.isArray, mt = (e) => Gt(e) === "[object Map]", si = (e) => Gt(e) === "[object Set]", Sn = (e) => Gt(e) === "[object Date]", D = (e) => typeof e == "function", ee = (e) => typeof e == "string", ye = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", ni = (e) => (G(e) || D(e)) && D(e.then) && D(e.catch), ii = Object.prototype.toString, Gt = (e) => ii.call(e), Or = (e) => Gt(e).slice(8, -1), ri = (e) => Gt(e) === "[object Object]", ms = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ en(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _s = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Ar = /-\w/g, we = _s(
  (e) => e.replace(Ar, (t) => t.slice(1).toUpperCase())
), Pr = /\B([A-Z])/g, ft = _s(
  (e) => e.replace(Pr, "-$1").toLowerCase()
), oi = _s((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ps = _s(
  (e) => e ? `on${oi(e)}` : ""
), De = (e, t) => !Object.is(e, t), Rs = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, li = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Rr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let wn;
const bs = () => wn || (wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sn(e) {
  if (j(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = ee(n) ? jr(n) : sn(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ee(e) || G(e))
    return e;
}
const Mr = /;(?![^(]*\))/g, Ir = /:([^]+)/, Fr = /\/\*[^]*?\*\//g;
function jr(e) {
  const t = {};
  return e.replace(Fr, "").split(Mr).forEach((s) => {
    if (s) {
      const n = s.split(Ir);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ze(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (j(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ze(e[s]);
      n && (t += n + " ");
    }
  else if (G(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Dr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $r = /* @__PURE__ */ en(Dr);
function ci(e) {
  return !!e || e === "";
}
function Nr(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = nn(e[n], t[n]);
  return s;
}
function nn(e, t) {
  if (e === t) return !0;
  let s = Sn(e), n = Sn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = ye(e), n = ye(t), s || n)
    return e === t;
  if (s = j(e), n = j(t), s || n)
    return s && n ? Nr(e, t) : !1;
  if (s = G(e), n = G(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !nn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const fi = (e) => !!(e && e.__v_isRef === !0), rt = (e) => ee(e) ? e : e == null ? "" : j(e) || G(e) && (e.toString === ii || !D(e.toString)) ? fi(e) ? rt(e.value) : JSON.stringify(e, ui, 2) : String(e), ui = (e, t) => fi(t) ? ui(e, t.value) : mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[Ms(n, r) + " =>"] = i, s),
    {}
  )
} : si(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Ms(s))
} : ye(t) ? Ms(t) : G(t) && !j(t) && !ri(t) ? String(t) : t, Ms = (e, t = "") => {
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
let ie;
class ai {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ie && (ie.active ? (this.parent = ie, this.index = (ie.scopes || (ie.scopes = [])).push(
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
        const i = this.scopes.slice();
        for (t = 0, s = i.length; t < s; t++)
          i[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, s = n.length; t < s; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ie;
      try {
        return ie = this, t();
      } finally {
        ie = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ie === this)
        ie = this.prevScope;
      else {
        let t = ie;
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
        const i = this.scopes.slice();
        for (s = 0, n = i.length; s < n; s++)
          i[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function di(e) {
  return new ai(e);
}
function hi() {
  return ie;
}
function Hr(e, t = !1) {
  ie && ie.cleanups.push(e);
}
let X;
const Is = /* @__PURE__ */ new WeakSet();
class pi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && (ie.active ? ie.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Is.has(this) && (Is.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cn(this), _i(this);
    const t = X, s = Ce;
    X = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      bi(this), X = t, Ce = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ln(t);
      this.deps = this.depsTail = void 0, Cn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Is.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let gi = 0, Ft, jt;
function mi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = jt, jt = e;
    return;
  }
  e.next = Ft, Ft = e;
}
function rn() {
  gi++;
}
function on() {
  if (--gi > 0)
    return;
  if (jt) {
    let t = jt;
    for (jt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Ft; ) {
    let t = Ft;
    for (Ft = void 0; t; ) {
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
function _i(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function bi(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), ln(n), Lr(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (vi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function vi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Kt) || (e.globalVersion = Kt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ks(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = X, n = Ce;
  X = e, Ce = !0;
  try {
    _i(e);
    const i = e.fn(e._value);
    (t.version === 0 || De(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    X = s, Ce = n, bi(e), e.flags &= -3;
  }
}
function ln(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      ln(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Lr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const yi = [];
function Be() {
  yi.push(Ce), Ce = !1;
}
function ke() {
  const e = yi.pop();
  Ce = e === void 0 ? !0 : e;
}
function Cn(e) {
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
let Kt = 0;
class Vr {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!X || !Ce || X === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== X)
      s = this.activeLink = new Vr(X, this), X.deps ? (s.prevDep = X.depsTail, X.depsTail.nextDep = s, X.depsTail = s) : X.deps = X.depsTail = s, xi(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = X.depsTail, s.nextDep = void 0, X.depsTail.nextDep = s, X.depsTail = s, X.deps === s && (X.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Kt++, this.notify(t);
  }
  notify(t) {
    rn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      on();
    }
  }
}
function xi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        xi(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const rs = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ Symbol(
  ""
), Us = /* @__PURE__ */ Symbol(
  ""
), Ut = /* @__PURE__ */ Symbol(
  ""
);
function ce(e, t, s) {
  if (Ce && X) {
    let n = rs.get(e);
    n || rs.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new cn()), i.map = n, i.key = s), i.track();
  }
}
function Ke(e, t, s, n, i, r) {
  const o = rs.get(e);
  if (!o) {
    Kt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (rn(), t === "clear")
    o.forEach(l);
  else {
    const f = j(e), d = f && ms(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === Ut || !ye(w) && w >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Ut)), t) {
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
  on();
}
function Kr(e, t) {
  const s = rs.get(e);
  return s && s.get(t);
}
function at(e) {
  const t = /* @__PURE__ */ K(e);
  return t === e ? t : (ce(t, "iterate", Ut), /* @__PURE__ */ be(e) ? t : t.map(Te));
}
function vs(e) {
  return ce(e = /* @__PURE__ */ K(e), "iterate", Ut), e;
}
function Fe(e, t) {
  return /* @__PURE__ */ qe(e) ? yt(/* @__PURE__ */ We(e) ? Te(t) : t) : Te(t);
}
const Ur = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fs(this, Symbol.iterator, (e) => Fe(this, e));
  },
  concat(...e) {
    return at(this).concat(
      ...e.map((t) => j(t) ? at(t) : t)
    );
  },
  entries() {
    return Fs(this, "entries", (e) => (e[1] = Fe(this, e[1]), e));
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
    return Tn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Tn(this, "reduceRight", e, t);
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
    return Fs(this, "values", (e) => Fe(this, e));
  }
};
function Fs(e, t, s) {
  const n = vs(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ be(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Wr = Array.prototype;
function He(e, t, s, n, i, r) {
  const o = vs(e), l = o !== e && !/* @__PURE__ */ be(e), f = o[t];
  if (f !== Wr[t]) {
    const p = f.apply(e, r);
    return l ? Te(p) : p;
  }
  let d = s;
  o !== e && (l ? d = function(p, w) {
    return s.call(this, Fe(e, p), w, e);
  } : s.length > 2 && (d = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const a = f.call(o, d, n);
  return l && i ? i(a) : a;
}
function Tn(e, t, s, n) {
  const i = vs(e), r = i !== e && !/* @__PURE__ */ be(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, a, p) {
    return l && (l = !1, d = Fe(e, d)), s.call(this, d, Fe(e, a), p, e);
  }) : s.length > 3 && (o = function(d, a, p) {
    return s.call(this, d, a, p, e);
  }));
  const f = i[t](o, ...n);
  return l ? Fe(e, f) : f;
}
function js(e, t, s) {
  const n = /* @__PURE__ */ K(e);
  ce(n, "iterate", Ut);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ xs(s[0]) ? (s[0] = /* @__PURE__ */ K(s[0]), n[t](...s)) : i;
}
function Et(e, t, s = []) {
  Be(), rn();
  const n = (/* @__PURE__ */ K(e))[t].apply(e, s);
  return on(), ke(), n;
}
const Br = /* @__PURE__ */ en("__proto__,__v_isRef,__isVue"), Si = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ye)
);
function kr(e) {
  ye(e) || (e = String(e));
  const t = /* @__PURE__ */ K(this);
  return ce(t, "has", e), t.hasOwnProperty(e);
}
class wi {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return n === (i ? r ? to : Oi : r ? Ei : Ti).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = j(t);
    if (!i) {
      let f;
      if (o && (f = Ur[s]))
        return f;
      if (s === "hasOwnProperty")
        return kr;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ te(t) ? t : n
    );
    if ((ye(s) ? Si.has(s) : Br(s)) || (i || ce(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ te(l)) {
      const f = o && ms(s) ? l : l.value;
      return i && G(f) ? /* @__PURE__ */ Bs(f) : f;
    }
    return G(l) ? i ? /* @__PURE__ */ Bs(l) : /* @__PURE__ */ ys(l) : l;
  }
}
class Ci extends wi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = j(t) && ms(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ qe(r);
      if (!/* @__PURE__ */ be(n) && !/* @__PURE__ */ qe(n) && (r = /* @__PURE__ */ K(r), n = /* @__PURE__ */ K(n)), !o && /* @__PURE__ */ te(r) && !/* @__PURE__ */ te(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : B(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ te(t) ? t : i
    );
    return t === /* @__PURE__ */ K(i) && f && (l ? De(n, r) && Ke(t, "set", s, n) : Ke(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = B(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Ke(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!ye(s) || !Si.has(s)) && ce(t, "has", s), n;
  }
  ownKeys(t) {
    return ce(
      t,
      "iterate",
      j(t) ? "length" : ot
    ), Reflect.ownKeys(t);
  }
}
class qr extends wi {
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
const Gr = /* @__PURE__ */ new Ci(), Jr = /* @__PURE__ */ new qr(), Yr = /* @__PURE__ */ new Ci(!0);
const Ws = (e) => e, Zt = (e) => Reflect.getPrototypeOf(e);
function zr(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ K(i), o = mt(r), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = i[e](...n), a = s ? Ws : t ? yt : Te;
    return !t && ce(
      r,
      "iterate",
      f ? Us : ot
    ), oe(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = d.next();
          return w ? { value: p, done: w } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: w
          };
        }
      }
    );
  };
}
function Qt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xr(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ K(r), l = /* @__PURE__ */ K(i);
      e || (De(i, l) && ce(o, "get", i), ce(o, "get", l));
      const { has: f } = Zt(o), d = t ? Ws : e ? yt : Te;
      if (f.call(o, i))
        return d(r.get(i));
      if (f.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ce(/* @__PURE__ */ K(i), "iterate", ot), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ K(r), l = /* @__PURE__ */ K(i);
      return e || (De(i, l) && ce(o, "has", i), ce(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ K(l), d = t ? Ws : e ? yt : Te;
      return !e && ce(f, "iterate", ot), l.forEach((a, p) => i.call(r, d(a), d(p), o));
    }
  };
  return oe(
    s,
    e ? {
      add: Qt("add"),
      set: Qt("set"),
      delete: Qt("delete"),
      clear: Qt("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ K(this), o = Zt(r), l = /* @__PURE__ */ K(i), f = !t && !/* @__PURE__ */ be(i) && !/* @__PURE__ */ qe(i) ? l : i;
        return o.has.call(r, f) || De(i, f) && o.has.call(r, i) || De(l, f) && o.has.call(r, l) || (r.add(f), Ke(r, "add", f, f)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ be(r) && !/* @__PURE__ */ qe(r) && (r = /* @__PURE__ */ K(r));
        const o = /* @__PURE__ */ K(this), { has: l, get: f } = Zt(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ K(i), d = l.call(o, i));
        const a = f.call(o, i);
        return o.set(i, r), d ? De(r, a) && Ke(o, "set", i, r) : Ke(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ K(this), { has: o, get: l } = Zt(r);
        let f = o.call(r, i);
        f || (i = /* @__PURE__ */ K(i), f = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return f && Ke(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ K(this), r = i.size !== 0, o = i.clear();
        return r && Ke(
          i,
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
  ].forEach((i) => {
    s[i] = zr(i, e, t);
  }), s;
}
function fn(e, t) {
  const s = Xr(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    B(s, i) && i in n ? s : n,
    i,
    r
  );
}
const Zr = {
  get: /* @__PURE__ */ fn(!1, !1)
}, Qr = {
  get: /* @__PURE__ */ fn(!1, !0)
}, eo = {
  get: /* @__PURE__ */ fn(!0, !1)
};
const Ti = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap();
function so(e) {
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
function ys(e) {
  return /* @__PURE__ */ qe(e) ? e : un(
    e,
    !1,
    Gr,
    Zr,
    Ti
  );
}
// @__NO_SIDE_EFFECTS__
function no(e) {
  return un(
    e,
    !1,
    Yr,
    Qr,
    Ei
  );
}
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  return un(
    e,
    !0,
    Jr,
    eo,
    Oi
  );
}
function un(e, t, s, n, i) {
  if (!G(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = so(Or(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return /* @__PURE__ */ qe(e) ? /* @__PURE__ */ We(e.__v_raw) : !!(e && e.__v_isReactive);
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
function xs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function K(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ K(t) : e;
}
function an(e) {
  return !B(e, "__v_skip") && Object.isExtensible(e) && li(e, "__v_skip", !0), e;
}
const Te = (e) => G(e) ? /* @__PURE__ */ ys(e) : e, yt = (e) => G(e) ? /* @__PURE__ */ Bs(e) : e;
// @__NO_SIDE_EFFECTS__
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return io(e, !1);
}
function io(e, t) {
  return /* @__PURE__ */ te(e) ? e : new ro(e, t);
}
class ro {
  constructor(t, s) {
    this.dep = new cn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ K(t), this._value = s ? t : Te(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ be(t) || /* @__PURE__ */ qe(t);
    t = n ? t : /* @__PURE__ */ K(t), De(t, s) && (this._rawValue = t, this._value = n ? t : Te(t), this.dep.trigger());
  }
}
function Se(e) {
  return /* @__PURE__ */ te(e) ? e.value : e;
}
const oo = {
  get: (e, t, s) => t === "__v_raw" ? e : Se(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ te(i) && !/* @__PURE__ */ te(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Ai(e) {
  return /* @__PURE__ */ We(e) ? e : new Proxy(e, oo);
}
// @__NO_SIDE_EFFECTS__
function lo(e) {
  const t = j(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = fo(e, s);
  return t;
}
class co {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = ye(s) ? s : String(s), this._raw = /* @__PURE__ */ K(t);
    let i = !0, r = t;
    if (!j(t) || ye(this._key) || !ms(this._key))
      do
        i = !/* @__PURE__ */ xs(r) || /* @__PURE__ */ be(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
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
    return Kr(this._raw, this._key);
  }
}
function fo(e, t, s) {
  return new co(e, t, s);
}
class uo {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new cn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Kt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return mi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return vi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ao(e, t, s = !1) {
  let n, i;
  return D(e) ? n = e : (n = e.get, i = e.set), new uo(n, i, s);
}
const es = {}, os = /* @__PURE__ */ new WeakMap();
let it;
function ho(e, t = !1, s = it) {
  if (s) {
    let n = os.get(s);
    n || os.set(s, n = []), n.push(e);
  }
}
function po(e, t, s = Y) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: f } = s, d = (I) => i ? I : /* @__PURE__ */ be(I) || i === !1 || i === 0 ? Ue(I, 1) : Ue(I);
  let a, p, w, T, E = !1, v = !1;
  if (/* @__PURE__ */ te(e) ? (p = () => e.value, E = /* @__PURE__ */ be(e)) : /* @__PURE__ */ We(e) ? (p = () => d(e), E = !0) : j(e) ? (v = !0, E = e.some((I) => /* @__PURE__ */ We(I) || /* @__PURE__ */ be(I)), p = () => e.map((I) => {
    if (/* @__PURE__ */ te(I))
      return I.value;
    if (/* @__PURE__ */ We(I))
      return d(I);
    if (D(I))
      return f ? f(I, 2) : I();
  })) : D(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (w) {
      Be();
      try {
        w();
      } finally {
        ke();
      }
    }
    const I = it;
    it = a;
    try {
      return f ? f(e, 3, [T]) : e(T);
    } finally {
      it = I;
    }
  } : p = $e, t && i) {
    const I = p, W = i === !0 ? 1 / 0 : i;
    p = () => Ue(I(), W);
  }
  const A = hi(), P = () => {
    a.stop(), A && A.active && tn(A.effects, a);
  };
  if (r && t) {
    const I = t;
    t = (...W) => {
      const le = I(...W);
      return P(), le;
    };
  }
  let M = v ? new Array(e.length).fill(es) : es;
  const U = (I) => {
    if (!(!(a.flags & 1) || !a.dirty && !I))
      if (t) {
        const W = a.run();
        if (I || i || E || (v ? W.some((le, H) => De(le, M[H])) : De(W, M))) {
          w && w();
          const le = it;
          it = a;
          try {
            const H = [
              W,
              // pass undefined as the old value when it's changed for the first time
              M === es ? void 0 : v && M[0] === es ? [] : M,
              T
            ];
            M = W, f ? f(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            it = le;
          }
        }
      } else
        a.run();
  };
  return l && l(U), a = new pi(p), a.scheduler = o ? () => o(U, !1) : U, T = (I) => ho(I, !1, a), w = a.onStop = () => {
    const I = os.get(a);
    if (I) {
      if (f)
        f(I, 4);
      else
        for (const W of I) W();
      os.delete(a);
    }
  }, t ? n ? U(!0) : M = a.run() : o ? o(U.bind(null, !0), !0) : a.run(), P.pause = a.pause.bind(a), P.resume = a.resume.bind(a), P.stop = P, P;
}
function Ue(e, t = 1 / 0, s) {
  if (t <= 0 || !G(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ te(e))
    Ue(e.value, t, s);
  else if (j(e))
    for (let n = 0; n < e.length; n++)
      Ue(e[n], t, s);
  else if (si(e) || mt(e))
    e.forEach((n) => {
      Ue(n, t, s);
    });
  else if (ri(e)) {
    for (const n in e)
      Ue(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ue(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Jt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Ss(i, t, s);
  }
}
function Ee(e, t, s, n) {
  if (D(e)) {
    const i = Jt(e, t, s, n);
    return i && ni(i) && i.catch((r) => {
      Ss(r, t, s);
    }), i;
  }
  if (j(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ee(e[r], t, s, n));
    return i;
  }
}
function Ss(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Y;
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
    if (r) {
      Be(), Jt(r, null, 10, [
        e,
        f,
        d
      ]), ke();
      return;
    }
  }
  go(e, s, i, n, o);
}
function go(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ae = [];
let Ie = -1;
const _t = [];
let Xe = null, ht = 0;
const Pi = /* @__PURE__ */ Promise.resolve();
let ls = null;
function dn(e) {
  const t = ls || Pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mo(e) {
  let t = Ie + 1, s = ae.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = ae[n], r = Wt(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function hn(e) {
  if (!(e.flags & 1)) {
    const t = Wt(e), s = ae[ae.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wt(s) ? ae.push(e) : ae.splice(mo(t), 0, e), e.flags |= 1, Ri();
  }
}
function Ri() {
  ls || (ls = Pi.then(Ii));
}
function _o(e) {
  j(e) ? _t.push(...e) : Xe && e.id === -1 ? Xe.splice(ht + 1, 0, e) : e.flags & 1 || (_t.push(e), e.flags |= 1), Ri();
}
function En(e, t, s = Ie + 1) {
  for (; s < ae.length; s++) {
    const n = ae[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ae.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Mi(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort(
      (s, n) => Wt(s) - Wt(n)
    );
    if (_t.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, ht = 0; ht < Xe.length; ht++) {
      const s = Xe[ht];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Xe = null, ht = 0;
  }
}
const Wt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ii(e) {
  try {
    for (Ie = 0; Ie < ae.length; Ie++) {
      const t = ae[Ie];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Jt(
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
    Ie = -1, ae.length = 0, Mi(), ls = null, (ae.length || _t.length) && Ii();
  }
}
let ve = null, Fi = null;
function cs(e) {
  const t = ve;
  return ve = e, Fi = e && e.type.__scopeId || null, t;
}
function bo(e, t = ve, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Hn(-1);
    const r = cs(t), o = ct.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let f = ct.length; f > o; f--) or();
      cs(r), n._d && Hn(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function On(e, t) {
  if (ve === null)
    return e;
  const s = Es(ve), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, f = Y] = t[i];
    r && (D(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ue(o), n.push({
      dir: r,
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
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let f = l.dir[n];
    f && (Be(), Ee(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), ke());
  }
}
function vo(e, t) {
  if (de) {
    let s = de.provides;
    const n = de.parent && de.parent.provides;
    n === s && (s = de.provides = Object.create(n)), s[e] = t;
  }
}
function Dt(e, t, s = !1) {
  const n = dr();
  if (n || lt) {
    let i = lt ? lt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && D(t) ? t.call(n && n.proxy) : t;
  }
}
function yo() {
  return !!(dr() || lt);
}
const xo = /* @__PURE__ */ Symbol.for("v-scx"), So = () => Dt(xo);
function $t(e, t, s) {
  return ji(e, t, s);
}
function ji(e, t, s = Y) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = oe({}, s), f = t && n || !t && r !== "post";
  let d;
  if (kt) {
    if (r === "sync") {
      const T = So();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!f) {
      const T = () => {
      };
      return T.stop = $e, T.resume = $e, T.pause = $e, T;
    }
  }
  const a = de;
  l.call = (T, E, v) => Ee(T, a, E, v);
  let p = !1;
  r === "post" ? l.scheduler = (T) => {
    pe(T, a && a.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (T, E) => {
    E ? T() : hn(T);
  }), l.augmentJob = (T) => {
    t && (T.flags |= 4), p && (T.flags |= 2, a && (T.id = a.uid, T.i = a));
  };
  const w = po(e, t, l);
  return kt && (d ? d.push(w) : f && w()), w;
}
function wo(e, t, s) {
  const n = this.proxy, i = ee(e) ? e.includes(".") ? Di(n, e) : () => n[e] : e.bind(n, n);
  let r;
  D(t) ? r = t : (r = t.handler, s = t);
  const o = Yt(this), l = ji(i, r.bind(n), s);
  return o(), l;
}
function Di(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const Co = /* @__PURE__ */ Symbol("_vte"), To = (e) => e.__isTeleport, Ds = /* @__PURE__ */ Symbol("_leaveCb");
function pn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function $i(e, t) {
  return D(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    oe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ni(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function An(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const fs = /* @__PURE__ */ new WeakMap();
function Nt(e, t, s, n, i = !1) {
  if (j(e)) {
    e.forEach(
      (v, A) => Nt(
        v,
        t && (j(t) ? t[A] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (Ht(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Nt(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Es(n.component) : n.el, o = i ? null : r, { i: l, r: f } = e, d = t && t.r, a = l.refs === Y ? l.refs = {} : l.refs, p = l.setupState, w = /* @__PURE__ */ K(p), T = p === Y ? ti : (v) => An(a, v) ? !1 : B(w, v), E = (v, A) => !(A && An(a, A));
  if (d != null && d !== f) {
    if (Pn(t), ee(d))
      a[d] = null, T(d) && (p[d] = null);
    else if (/* @__PURE__ */ te(d)) {
      const v = t;
      E(d, v.k) && (d.value = null), v.k && (a[v.k] = null);
    }
  }
  if (D(f))
    Jt(f, l, 12, [o, a]);
  else {
    const v = ee(f), A = /* @__PURE__ */ te(f);
    if (v || A) {
      const P = () => {
        if (e.f) {
          const M = v ? T(f) ? p[f] : a[f] : E() || !e.k ? f.value : a[e.k];
          if (i)
            j(M) && tn(M, r);
          else if (j(M))
            M.includes(r) || M.push(r);
          else if (v)
            a[f] = [r], T(f) && (p[f] = a[f]);
          else {
            const U = [r];
            E(f, e.k) && (f.value = U), e.k && (a[e.k] = U);
          }
        } else v ? (a[f] = o, T(f) && (p[f] = o)) : A && (E(f, e.k) && (f.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const M = () => {
          P(), fs.delete(e);
        };
        M.id = -1, fs.set(e, M), pe(M, s);
      } else
        Pn(e), P();
    }
  }
}
function Pn(e) {
  const t = fs.get(e);
  t && (t.flags |= 8, fs.delete(e));
}
bs().requestIdleCallback;
bs().cancelIdleCallback;
const Ht = (e) => !!e.type.__asyncLoader, Hi = (e) => e.type.__isKeepAlive;
function Eo(e, t) {
  Li(e, "a", t);
}
function Oo(e, t) {
  Li(e, "da", t);
}
function Li(e, t, s = de) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ws(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      Hi(i.parent.vnode) && Ao(n, t, s, i), i = i.parent;
  }
}
function Ao(e, t, s, n) {
  const i = ws(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ui(() => {
    tn(n[t], i);
  }, s);
}
function ws(e, t, s = de, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Be();
      const l = Yt(s), f = Ee(t, s, e, o);
      return l(), ke(), f;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const Ge = (e) => (t, s = de) => {
  (!kt || e === "sp") && ws(e, (...n) => t(...n), s);
}, Po = Ge("bm"), Vi = Ge("m"), Ro = Ge(
  "bu"
), Mo = Ge("u"), Ki = Ge(
  "bum"
), Ui = Ge("um"), Io = Ge(
  "sp"
), Fo = Ge("rtg"), jo = Ge("rtc");
function Do(e, t = de) {
  ws("ec", e, t);
}
const $o = /* @__PURE__ */ Symbol.for("v-ndc");
function Ot(e, t, s, n) {
  let i;
  const r = s, o = j(e);
  if (o || ee(e)) {
    const l = o && /* @__PURE__ */ We(e);
    let f = !1, d = !1;
    l && (f = !/* @__PURE__ */ be(e), d = /* @__PURE__ */ qe(e), e = vs(e)), i = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      i[a] = t(
        f ? d ? yt(Te(e[a])) : Te(e[a]) : e[a],
        a,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (G(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, f) => t(l, f, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let f = 0, d = l.length; f < d; f++) {
        const a = l[f];
        i[f] = t(e[a], a, f, r);
      }
    }
  else
    i = [];
  return i;
}
const ks = (e) => e ? hr(e) ? Es(e) : ks(e.parent) : null, Lt = (
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
    $parent: (e) => ks(e.parent),
    $root: (e) => ks(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = dn.bind(e.proxy)),
    $watch: (e) => wo.bind(e)
  })
), $s = (e, t) => e !== Y && !e.__isScriptSetup && B(e, t), No = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if ($s(n, t))
          return o[t] = 1, n[t];
        if (i !== Y && B(i, t))
          return o[t] = 2, i[t];
        if (B(r, t))
          return o[t] = 3, r[t];
        if (s !== Y && B(s, t))
          return o[t] = 4, s[t];
        qs && (o[t] = 0);
      }
    }
    const d = Lt[t];
    let a, p;
    if (d)
      return t === "$attrs" && ce(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== Y && B(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = f.config.globalProperties, B(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return $s(i, t) ? (i[t] = s, !0) : n !== Y && B(n, t) ? (n[t] = s, !0) : B(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let f;
    return !!(s[l] || e !== Y && l[0] !== "$" && B(e, l) || $s(t, l) || B(r, l) || B(n, l) || B(Lt, l) || B(i.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : B(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Rn(e) {
  return j(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let qs = !0;
function Ho(e) {
  const t = Bi(e), s = e.proxy, n = e.ctx;
  qs = !1, t.beforeCreate && Mn(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: f,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: w,
    beforeUpdate: T,
    updated: E,
    activated: v,
    deactivated: A,
    beforeDestroy: P,
    beforeUnmount: M,
    destroyed: U,
    unmounted: I,
    render: W,
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
  if (d && Lo(d, n, null), o)
    for (const Z in o) {
      const z = o[Z];
      D(z) && (n[Z] = z.bind(s));
    }
  if (i) {
    const Z = i.call(s, s);
    G(Z) && (e.data = /* @__PURE__ */ ys(Z));
  }
  if (qs = !0, r)
    for (const Z in r) {
      const z = r[Z], et = D(z) ? z.bind(s, s) : D(z.get) ? z.get.bind(s, s) : $e, zt = !D(z) && D(z.set) ? z.set.bind(s) : $e, tt = gr({
        get: et,
        set: zt
      });
      Object.defineProperty(n, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (Oe) => tt.value = Oe
      });
    }
  if (l)
    for (const Z in l)
      Wi(l[Z], n, s, Z);
  if (f) {
    const Z = D(f) ? f.call(s) : f;
    Reflect.ownKeys(Z).forEach((z) => {
      vo(z, Z[z]);
    });
  }
  a && Mn(a, e, "c");
  function k(Z, z) {
    j(z) ? z.forEach((et) => Z(et.bind(s))) : z && Z(z.bind(s));
  }
  if (k(Po, p), k(Vi, w), k(Ro, T), k(Mo, E), k(Eo, v), k(Oo, A), k(Do, N), k(jo, le), k(Fo, H), k(Ki, M), k(Ui, I), k(Io, fe), j(he))
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
  W && e.render === $e && (e.render = W), xe != null && (e.inheritAttrs = xe), Je && (e.components = Je), ut && (e.directives = ut), fe && Ni(e);
}
function Lo(e, t, s = $e) {
  j(e) && (e = Gs(e));
  for (const n in e) {
    const i = e[n];
    let r;
    G(i) ? "default" in i ? r = Dt(
      i.from || n,
      i.default,
      !0
    ) : r = Dt(i.from || n) : r = Dt(i), /* @__PURE__ */ te(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Mn(e, t, s) {
  Ee(
    j(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Wi(e, t, s, n) {
  let i = n.includes(".") ? Di(s, n) : () => s[n];
  if (ee(e)) {
    const r = t[e];
    D(r) && $t(i, r);
  } else if (D(e))
    $t(i, e.bind(s));
  else if (G(e))
    if (j(e))
      e.forEach((r) => Wi(r, t, s, n));
    else {
      const r = D(e.handler) ? e.handler.bind(s) : t[e.handler];
      D(r) && $t(i, r, e);
    }
}
function Bi(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let f;
  return l ? f = l : !i.length && !s && !n ? f = t : (f = {}, i.length && i.forEach(
    (d) => us(f, d, o, !0)
  ), us(f, t, o)), G(t) && r.set(t, f), f;
}
function us(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && us(e, r, s, !0), i && i.forEach(
    (o) => us(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = Vo[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Vo = {
  data: In,
  props: Fn,
  emits: Fn,
  // objects
  methods: Rt,
  computed: Rt,
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
  components: Rt,
  directives: Rt,
  // watch
  watch: Uo,
  // provide / inject
  provide: In,
  inject: Ko
};
function In(e, t) {
  return t ? e ? function() {
    return oe(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ko(e, t) {
  return Rt(Gs(e), Gs(t));
}
function Gs(e) {
  if (j(e)) {
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
function Rt(e, t) {
  return e ? oe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fn(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : oe(
    /* @__PURE__ */ Object.create(null),
    Rn(e),
    Rn(t ?? {})
  ) : t;
}
function Uo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = oe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ue(e[n], t[n]);
  return s;
}
function ki() {
  return {
    app: null,
    config: {
      isNativeTag: ti,
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
let Wo = 0;
function Bo(e, t) {
  return function(n, i = null) {
    D(n) || (n = oe({}, n)), i != null && !G(i) && (i = null);
    const r = ki(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = r.app = {
      _uid: Wo++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: xl,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && D(a.install) ? (o.add(a), a.install(d, ...p)) : D(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (r.components[a] = p, d) : r.components[a];
      },
      directive(a, p) {
        return p ? (r.directives[a] = p, d) : r.directives[a];
      },
      mount(a, p, w) {
        if (!f) {
          const T = d._ceVNode || Ne(n, i);
          return T.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(T, a, w), f = !0, d._container = a, a.__vue_app__ = d, Es(T.component);
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
        return r.provides[a] = p, d;
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
const ko = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${ft(t)}Modifiers`];
function qo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Y;
  let i = s;
  const r = t.startsWith("update:"), o = r && ko(n, t.slice(7));
  o && (o.trim && (i = s.map((a) => ee(a) ? a.trim() : a)), o.number && (i = s.map(Rr)));
  let l, f = n[l = Ps(t)] || // also try camelCase event handler (#2249)
  n[l = Ps(we(t))];
  !f && r && (f = n[l = Ps(ft(t))]), f && Ee(
    f,
    e,
    6,
    i
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
      i
    );
  }
}
const Go = /* @__PURE__ */ new WeakMap();
function qi(e, t, s = !1) {
  const n = s ? Go : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!D(e)) {
    const f = (d) => {
      const a = qi(d, t, !0);
      a && (l = !0, oe(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !l ? (G(e) && n.set(e, null), null) : (j(r) ? r.forEach((f) => o[f] = null) : oe(o, r), G(e) && n.set(e, o), o);
}
function Cs(e, t) {
  return !e || !ps(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), B(e, t[0].toLowerCase() + t.slice(1)) || B(e, ft(t)) || B(e, t));
}
function jn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: f,
    render: d,
    renderCache: a,
    props: p,
    data: w,
    setupState: T,
    ctx: E,
    inheritAttrs: v
  } = e, A = cs(e);
  let P, M;
  try {
    if (s.shapeFlag & 4) {
      const I = i || n, W = I;
      P = je(
        d.call(
          W,
          I,
          a,
          p,
          T,
          w,
          E
        )
      ), M = l;
    } else {
      const I = t;
      P = je(
        I.length > 1 ? I(
          p,
          { attrs: l, slots: o, emit: f }
        ) : I(
          p,
          null
        )
      ), M = t.props ? l : Jo(l);
    }
  } catch (I) {
    ct.length = 0, Ss(I, e, 1), P = Ne(Qe);
  }
  let U = P;
  if (M && v !== !1) {
    const I = Object.keys(M), { shapeFlag: W } = U;
    I.length && W & 7 && (r && I.some(gs) && (M = Yo(
      M,
      r
    )), U = xt(U, M, !1, !0));
  }
  return s.dirs && (U = xt(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(s.dirs) : s.dirs), s.transition && pn(U, s.transition), P = U, cs(A), P;
}
const Jo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || ps(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Yo = (e, t) => {
  const s = {};
  for (const n in e)
    (!gs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function zo(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: f } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Dn(n, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (Gi(o, n, w) && !Cs(d, w))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Dn(n, o, d) : !0 : !!o;
  return !1;
}
function Dn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (Gi(t, e, r) && !Cs(s, r))
      return !0;
  }
  return !1;
}
function Gi(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && G(n) && G(i) ? !nn(n, i) : n !== i;
}
function Xo({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Ji = {}, Yi = () => Object.create(Ji), zi = (e) => Object.getPrototypeOf(e) === Ji;
function Zo(e, t, s, n = !1) {
  const i = {}, r = Yi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xi(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ no(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Qo(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ K(i), [f] = e.propsOptions;
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
        let w = a[p];
        if (Cs(e.emitsOptions, w))
          continue;
        const T = t[w];
        if (f)
          if (B(r, w))
            T !== r[w] && (r[w] = T, d = !0);
          else {
            const E = we(w);
            i[E] = Js(
              f,
              l,
              E,
              T,
              e,
              !1
            );
          }
        else
          T !== r[w] && (r[w] = T, d = !0);
      }
    }
  } else {
    Xi(e, t, i, r) && (d = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !B(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ft(p)) === p || !B(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (i[p] = Js(
        f,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== l)
      for (const p in r)
        (!t || !B(t, p)) && (delete r[p], d = !0);
  }
  d && Ke(e.attrs, "set", "");
}
function Xi(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (It(f))
        continue;
      const d = t[f];
      let a;
      i && B(i, a = we(f)) ? !r || !r.includes(a) ? s[a] = d : (l || (l = {}))[a] = d : Cs(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, o = !0);
    }
  if (r) {
    const f = /* @__PURE__ */ K(s), d = l || Y;
    for (let a = 0; a < r.length; a++) {
      const p = r[a];
      s[p] = Js(
        i,
        f,
        p,
        d[p],
        e,
        !B(d, p)
      );
    }
  }
  return o;
}
function Js(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = B(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && D(f)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const a = Yt(i);
          n = d[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ft(s)) && (n = !0));
  }
  return n;
}
const el = /* @__PURE__ */ new WeakMap();
function Zi(e, t, s = !1) {
  const n = s ? el : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let f = !1;
  if (!D(e)) {
    const a = (p) => {
      f = !0;
      const [w, T] = Zi(p, t, !0);
      oe(o, w), T && l.push(...T);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !f)
    return G(e) && n.set(e, gt), gt;
  if (j(r))
    for (let a = 0; a < r.length; a++) {
      const p = we(r[a]);
      $n(p) && (o[p] = Y);
    }
  else if (r)
    for (const a in r) {
      const p = we(a);
      if ($n(p)) {
        const w = r[a], T = o[p] = j(w) || D(w) ? { type: w } : oe({}, w), E = T.type;
        let v = !1, A = !0;
        if (j(E))
          for (let P = 0; P < E.length; ++P) {
            const M = E[P], U = D(M) && M.name;
            if (U === "Boolean") {
              v = !0;
              break;
            } else U === "String" && (A = !1);
          }
        else
          v = D(E) && E.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = v, T[
          1
          /* shouldCastTrue */
        ] = A, (v || B(T, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return G(e) && n.set(e, d), d;
}
function $n(e) {
  return e[0] !== "$" && !It(e);
}
const gn = (e) => e === "_" || e === "_ctx" || e === "$stable", mn = (e) => j(e) ? e.map(je) : [je(e)], tl = (e, t, s) => {
  if (t._n)
    return t;
  const n = bo((...i) => mn(t(...i)), s);
  return n._c = !1, n;
}, Qi = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (gn(i)) continue;
    const r = e[i];
    if (D(r))
      t[i] = tl(i, r, n);
    else if (r != null) {
      const o = mn(r);
      t[i] = () => o;
    }
  }
}, er = (e, t) => {
  const s = mn(t);
  e.slots.default = () => s;
}, tr = (e, t, s) => {
  for (const n in t)
    (s || !gn(n)) && (e[n] = t[n]);
}, sl = (e, t, s) => {
  const n = e.slots = Yi();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (tr(n, t, s), s && li(n, "_", i, !0)) : Qi(t, n);
  } else t && er(e, t);
}, nl = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = Y;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : tr(i, t, s) : (r = !t.$stable, Qi(t, i)), o = t;
  } else t && (er(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !gn(l) && o[l] == null && delete i[l];
}, pe = cl;
function il(e) {
  return rl(e);
}
function rl(e, t) {
  const s = bs();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: T = $e,
    insertStaticContent: E
  } = e, v = (c, u, h, b = null, _ = null, g = null, S = void 0, x = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !At(c, u) && (b = Xt(c), Oe(c, _, g, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: m, ref: R, shapeFlag: C } = u;
    switch (m) {
      case Ts:
        A(c, u, h, b);
        break;
      case Qe:
        P(c, u, h, b);
        break;
      case ss:
        c == null && M(u, h, b, S);
        break;
      case ge:
        Je(
          c,
          u,
          h,
          b,
          _,
          g,
          S,
          x,
          y
        );
        break;
      default:
        C & 1 ? W(
          c,
          u,
          h,
          b,
          _,
          g,
          S,
          x,
          y
        ) : C & 6 ? ut(
          c,
          u,
          h,
          b,
          _,
          g,
          S,
          x,
          y
        ) : (C & 64 || C & 128) && m.process(
          c,
          u,
          h,
          b,
          _,
          g,
          S,
          x,
          y,
          Ct
        );
    }
    R != null && _ ? Nt(R, c && c.ref, g, u || c, !u) : R == null && c && c.ref != null && Nt(c.ref, null, g, c, !0);
  }, A = (c, u, h, b) => {
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
  }, P = (c, u, h, b) => {
    c == null ? n(
      u.el = f(u.children || ""),
      h,
      b
    ) : u.el = c.el;
  }, M = (c, u, h, b) => {
    [c.el, c.anchor] = E(
      c.children,
      u,
      h,
      b,
      c.el,
      c.anchor
    );
  }, U = ({ el: c, anchor: u }, h, b) => {
    let _;
    for (; c && c !== u; )
      _ = w(c), n(c, h, b), c = _;
    n(u, h, b);
  }, I = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = w(c), i(c), c = h;
    i(u);
  }, W = (c, u, h, b, _, g, S, x, y) => {
    if (u.type === "svg" ? S = "svg" : u.type === "math" && (S = "mathml"), c == null)
      le(
        u,
        h,
        b,
        _,
        g,
        S,
        x,
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
          S,
          x,
          y
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, le = (c, u, h, b, _, g, S, x) => {
    let y, m;
    const { props: R, shapeFlag: C, transition: O, dirs: F } = c;
    if (y = c.el = o(
      c.type,
      g,
      R && R.is,
      R
    ), C & 8 ? a(y, c.children) : C & 16 && N(
      c.children,
      y,
      null,
      b,
      _,
      Ns(c, g),
      S,
      x
    ), F && st(c, null, b, "created"), H(y, c, c.scopeId, S, b), R) {
      for (const J in R)
        J !== "value" && !It(J) && r(y, J, null, R[J], g, b);
      "value" in R && r(y, "value", null, R.value, g), (m = R.onVnodeBeforeMount) && Me(m, b, c);
    }
    F && st(c, null, b, "beforeMount");
    const V = ol(_, O);
    V && O.beforeEnter(y), n(y, u, h), ((m = R && R.onVnodeMounted) || V || F) && pe(() => {
      try {
        m && Me(m, b, c), V && O.enter(y), F && st(c, null, b, "mounted");
      } finally {
      }
    }, _);
  }, H = (c, u, h, b, _) => {
    if (h && T(c, h), b)
      for (let g = 0; g < b.length; g++)
        T(c, b[g]);
    if (_) {
      let g = _.subTree;
      if (u === g || rr(g.type) && (g.ssContent === u || g.ssFallback === u)) {
        const S = _.vnode;
        H(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          _.parent
        );
      }
    }
  }, N = (c, u, h, b, _, g, S, x, y = 0) => {
    for (let m = y; m < c.length; m++) {
      const R = c[m] = x ? Ve(c[m]) : je(c[m]);
      v(
        null,
        R,
        u,
        h,
        b,
        _,
        g,
        S,
        x
      );
    }
  }, fe = (c, u, h, b, _, g, S) => {
    const x = u.el = c.el;
    let { patchFlag: y, dynamicChildren: m, dirs: R } = u;
    y |= c.patchFlag & 16;
    const C = c.props || Y, O = u.props || Y;
    let F;
    if (h && nt(h, !1), (F = O.onVnodeBeforeUpdate) && Me(F, h, u, c), R && st(u, c, h, "beforeUpdate"), h && nt(h, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    m && (!c.dynamicChildren || c.dynamicChildren.length !== m.length) && (y = 0, S = !1, m = null), (C.innerHTML && O.innerHTML == null || C.textContent && O.textContent == null) && a(x, ""), m ? he(
      c.dynamicChildren,
      m,
      x,
      h,
      b,
      Ns(u, _),
      g
    ) : S || z(
      c,
      u,
      x,
      null,
      h,
      b,
      Ns(u, _),
      g,
      !1
    ), y > 0) {
      if (y & 16)
        xe(x, C, O, h, _);
      else if (y & 2 && C.class !== O.class && r(x, "class", null, O.class, _), y & 4 && r(x, "style", C.style, O.style, _), y & 8) {
        const V = u.dynamicProps;
        for (let J = 0; J < V.length; J++) {
          const q = V[J], se = C[q], re = O[q];
          (re !== se || q === "value") && r(x, q, se, re, _, h);
        }
      }
      y & 1 && c.children !== u.children && a(x, u.children);
    } else !S && m == null && xe(x, C, O, h, _);
    ((F = O.onVnodeUpdated) || R) && pe(() => {
      F && Me(F, h, u, c), R && st(u, c, h, "updated");
    }, b);
  }, he = (c, u, h, b, _, g, S) => {
    for (let x = 0; x < u.length; x++) {
      const y = c[x], m = u[x], R = (
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
        R,
        null,
        b,
        _,
        g,
        S,
        !0
      );
    }
  }, xe = (c, u, h, b, _) => {
    if (u !== h) {
      if (u !== Y)
        for (const g in u)
          !It(g) && !(g in h) && r(
            c,
            g,
            u[g],
            null,
            _,
            b
          );
      for (const g in h) {
        if (It(g)) continue;
        const S = h[g], x = u[g];
        S !== x && g !== "value" && r(c, g, x, S, _, b);
      }
      "value" in h && r(c, "value", u.value, h.value, _);
    }
  }, Je = (c, u, h, b, _, g, S, x, y) => {
    const m = u.el = c ? c.el : l(""), R = u.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: O, slotScopeIds: F } = u;
    F && (x = x ? x.concat(F) : F), c == null ? (n(m, h, b), n(R, h, b), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      R,
      _,
      g,
      S,
      x,
      y
    )) : C > 0 && C & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === O.length ? (he(
      c.dynamicChildren,
      O,
      h,
      _,
      g,
      S,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && sr(
      c,
      u,
      !0
      /* shallow */
    )) : z(
      c,
      u,
      h,
      R,
      _,
      g,
      S,
      x,
      y
    );
  }, ut = (c, u, h, b, _, g, S, x, y) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      b,
      S,
      y
    ) : St(
      u,
      h,
      b,
      _,
      g,
      S,
      y
    ) : Ye(c, u, y);
  }, St = (c, u, h, b, _, g, S) => {
    const x = c.component = gl(
      c,
      b,
      _
    );
    if (Hi(c) && (x.ctx.renderer = Ct), ml(x, !1, S), x.asyncDep) {
      if (_ && _.registerDep(x, k, S), !c.el) {
        const y = x.subTree = Ne(Qe);
        P(null, y, u, h), c.placeholder = y.el;
      }
    } else
      k(
        x,
        c,
        u,
        h,
        _,
        g,
        S
      );
  }, Ye = (c, u, h) => {
    const b = u.component = c.component;
    if (zo(c, u, h))
      if (b.asyncDep && !b.asyncResolved) {
        Z(b, u, h);
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, k = (c, u, h, b, _, g, S) => {
    const x = () => {
      if (c.isMounted) {
        let { next: C, bu: O, u: F, parent: V, vnode: J } = c;
        {
          const Pe = nr(c);
          if (Pe) {
            C && (C.el = J.el, Z(c, C, S)), Pe.asyncDep.then(() => {
              pe(() => {
                c.isUnmounted || m();
              }, _);
            });
            return;
          }
        }
        let q = C, se;
        nt(c, !1), C ? (C.el = J.el, Z(c, C, S)) : C = J, O && Rs(O), (se = C.props && C.props.onVnodeBeforeUpdate) && Me(se, V, C, J), nt(c, !0);
        const re = jn(c), Ae = c.subTree;
        c.subTree = re, v(
          Ae,
          re,
          // parent may have changed if it's in a teleport
          p(Ae.el),
          // anchor may have changed if it's in a fragment
          Xt(Ae),
          c,
          _,
          g
        ), C.el = re.el, q === null && Xo(c, re.el), F && pe(F, _), (se = C.props && C.props.onVnodeUpdated) && pe(
          () => Me(se, V, C, J),
          _
        );
      } else {
        let C;
        const { el: O, props: F } = u, { bm: V, m: J, parent: q, root: se, type: re } = c, Ae = Ht(u);
        nt(c, !1), V && Rs(V), !Ae && (C = F && F.onVnodeBeforeMount) && Me(C, q, u), nt(c, !0);
        {
          se.ce && se.ce._hasShadowRoot() && se.ce._injectChildStyle(
            re,
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
        if (J && pe(J, _), !Ae && (C = F && F.onVnodeMounted)) {
          const Pe = u;
          pe(
            () => Me(C, q, Pe),
            _
          );
        }
        (u.shapeFlag & 256 || q && Ht(q.vnode) && q.vnode.shapeFlag & 256) && c.a && pe(c.a, _), c.isMounted = !0, u = h = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new pi(x);
    c.scope.off();
    const m = c.update = y.run.bind(y), R = c.job = y.runIfDirty.bind(y);
    R.i = c, R.id = c.uid, y.scheduler = () => hn(R), nt(c, !0), m();
  }, Z = (c, u, h) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, Qo(c, u.props, b, h), nl(c, u.children, h), Be(), En(c), ke();
  }, z = (c, u, h, b, _, g, S, x, y = !1) => {
    const m = c && c.children, R = c ? c.shapeFlag : 0, C = u.children, { patchFlag: O, shapeFlag: F } = u;
    if (O > 0) {
      if (O & 128) {
        zt(
          m,
          C,
          h,
          b,
          _,
          g,
          S,
          x,
          y
        );
        return;
      } else if (O & 256) {
        et(
          m,
          C,
          h,
          b,
          _,
          g,
          S,
          x,
          y
        );
        return;
      }
    }
    F & 8 ? (R & 16 && wt(m, _, g), C !== m && a(h, C)) : R & 16 ? F & 16 ? zt(
      m,
      C,
      h,
      b,
      _,
      g,
      S,
      x,
      y
    ) : wt(m, _, g, !0) : (R & 8 && a(h, ""), F & 16 && N(
      C,
      h,
      b,
      _,
      g,
      S,
      x,
      y
    ));
  }, et = (c, u, h, b, _, g, S, x, y) => {
    c = c || gt, u = u || gt;
    const m = c.length, R = u.length, C = Math.min(m, R);
    let O;
    for (O = 0; O < C; O++) {
      const F = u[O] = y ? Ve(u[O]) : je(u[O]);
      v(
        c[O],
        F,
        h,
        null,
        _,
        g,
        S,
        x,
        y
      );
    }
    m > R ? wt(
      c,
      _,
      g,
      !0,
      !1,
      C
    ) : N(
      u,
      h,
      b,
      _,
      g,
      S,
      x,
      y,
      C
    );
  }, zt = (c, u, h, b, _, g, S, x, y) => {
    let m = 0;
    const R = u.length;
    let C = c.length - 1, O = R - 1;
    for (; m <= C && m <= O; ) {
      const F = c[m], V = u[m] = y ? Ve(u[m]) : je(u[m]);
      if (At(F, V))
        v(
          F,
          V,
          h,
          null,
          _,
          g,
          S,
          x,
          y
        );
      else
        break;
      m++;
    }
    for (; m <= C && m <= O; ) {
      const F = c[C], V = u[O] = y ? Ve(u[O]) : je(u[O]);
      if (At(F, V))
        v(
          F,
          V,
          h,
          null,
          _,
          g,
          S,
          x,
          y
        );
      else
        break;
      C--, O--;
    }
    if (m > C) {
      if (m <= O) {
        const F = O + 1, V = F < R ? u[F].el : b;
        for (; m <= O; )
          v(
            null,
            u[m] = y ? Ve(u[m]) : je(u[m]),
            h,
            V,
            _,
            g,
            S,
            x,
            y
          ), m++;
      }
    } else if (m > O)
      for (; m <= C; )
        Oe(c[m], _, g, !0), m++;
    else {
      const F = m, V = m, J = /* @__PURE__ */ new Map();
      for (m = V; m <= O; m++) {
        const me = u[m] = y ? Ve(u[m]) : je(u[m]);
        me.key != null && J.set(me.key, m);
      }
      let q, se = 0;
      const re = O - V + 1;
      let Ae = !1, Pe = 0;
      const Tt = new Array(re);
      for (m = 0; m < re; m++) Tt[m] = 0;
      for (m = F; m <= C; m++) {
        const me = c[m];
        if (se >= re) {
          Oe(me, _, g, !0);
          continue;
        }
        let Re;
        if (me.key != null)
          Re = J.get(me.key);
        else
          for (q = V; q <= O; q++)
            if (Tt[q - V] === 0 && At(me, u[q])) {
              Re = q;
              break;
            }
        Re === void 0 ? Oe(me, _, g, !0) : (Tt[Re - V] = m + 1, Re >= Pe ? Pe = Re : Ae = !0, v(
          me,
          u[Re],
          h,
          null,
          _,
          g,
          S,
          x,
          y
        ), se++);
      }
      const vn = Ae ? ll(Tt) : gt;
      for (q = vn.length - 1, m = re - 1; m >= 0; m--) {
        const me = V + m, Re = u[me], yn = u[me + 1], xn = me + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          yn.el || ir(yn)
        ) : b;
        Tt[m] === 0 ? v(
          null,
          Re,
          h,
          xn,
          _,
          g,
          S,
          x,
          y
        ) : Ae && (q < 0 || m !== vn[q] ? tt(Re, h, xn, 2) : q--);
      }
    }
  }, tt = (c, u, h, b, _ = null) => {
    const { el: g, type: S, transition: x, children: y, shapeFlag: m } = c;
    if (m & 6) {
      tt(c.component.subTree, u, h, b);
      return;
    }
    if (m & 128) {
      c.suspense.move(u, h, b);
      return;
    }
    if (m & 64) {
      S.move(c, u, h, Ct);
      return;
    }
    if (S === ge) {
      n(g, u, h);
      for (let C = 0; C < y.length; C++)
        tt(y[C], u, h, b);
      n(c.anchor, u, h);
      return;
    }
    if (S === ss) {
      U(c, u, h);
      return;
    }
    if (b !== 2 && m & 1 && x)
      if (b === 0)
        x.persisted && !g[Ds] ? n(g, u, h) : (x.beforeEnter(g), n(g, u, h), pe(() => x.enter(g), _));
      else {
        const { leave: C, delayLeave: O, afterLeave: F } = x, V = () => {
          c.ctx.isUnmounted ? i(g) : n(g, u, h);
        }, J = () => {
          const q = g._isLeaving || !!g[Ds];
          g._isLeaving && g[Ds](
            !0
            /* cancelled */
          ), x.persisted && !q ? V() : C(g, () => {
            V(), F && F();
          });
        };
        O ? O(g, V, J) : J();
      }
    else
      n(g, u, h);
  }, Oe = (c, u, h, b = !1, _ = !1) => {
    const {
      type: g,
      props: S,
      ref: x,
      children: y,
      dynamicChildren: m,
      shapeFlag: R,
      patchFlag: C,
      dirs: O,
      cacheIndex: F,
      memo: V
    } = c;
    if (C === -2 && (_ = !1), x != null && (Be(), Nt(x, null, h, c, !0), ke()), F != null && (u.renderCache[F] = void 0), R & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const J = R & 1 && O, q = !Ht(c);
    let se;
    if (q && (se = S && S.onVnodeBeforeUnmount) && Me(se, u, c), R & 6)
      Tr(c.component, h, b);
    else {
      if (R & 128) {
        c.suspense.unmount(h, b);
        return;
      }
      J && st(c, null, u, "beforeUnmount"), R & 64 ? c.type.remove(
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
      (g !== ge || C > 0 && C & 64) ? wt(
        m,
        u,
        h,
        !1,
        !0
      ) : (g === ge && C & 384 || !_ && R & 16) && wt(y, u, h), b && _n(c);
    }
    const re = V != null && F == null;
    (q && (se = S && S.onVnodeUnmounted) || J || re) && pe(() => {
      se && Me(se, u, c), J && st(c, null, u, "unmounted"), re && (c.el = null);
    }, h);
  }, _n = (c) => {
    const { type: u, el: h, anchor: b, transition: _ } = c;
    if (u === ge) {
      Cr(h, b);
      return;
    }
    if (u === ss) {
      I(c);
      return;
    }
    const g = () => {
      i(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: S, delayLeave: x } = _, y = () => S(h, g);
      x ? x(c.el, g, y) : y();
    } else
      g();
  }, Cr = (c, u) => {
    let h;
    for (; c !== u; )
      h = w(c), i(c), c = h;
    i(u);
  }, Tr = (c, u, h) => {
    const { bum: b, scope: _, job: g, subTree: S, um: x, m: y, a: m } = c;
    Nn(y), Nn(m), b && Rs(b), _.stop(), g && (g.flags |= 8, Oe(S, c, u, h)), x && pe(x, u), pe(() => {
      c.isUnmounted = !0;
    }, u);
  }, wt = (c, u, h, b = !1, _ = !1, g = 0) => {
    for (let S = g; S < c.length; S++)
      Oe(c[S], u, h, b, _);
  }, Xt = (c) => {
    if (c.shapeFlag & 6)
      return Xt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = w(c.anchor || c.el), h = u && u[Co];
    return h ? w(h) : u;
  };
  let As = !1;
  const bn = (c, u, h) => {
    let b;
    c == null ? u._vnode && (Oe(u._vnode, null, null, !0), b = u._vnode.component) : v(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, As || (As = !0, En(b), Mi(), As = !1);
  }, Ct = {
    p: v,
    um: Oe,
    m: tt,
    r: _n,
    mt: St,
    mc: N,
    pc: z,
    pbc: he,
    n: Xt,
    o: e
  };
  return {
    render: bn,
    hydrate: void 0,
    createApp: Bo(bn)
  };
}
function Ns({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function nt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ol(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (j(n) && j(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Ve(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && sr(o, l)), l.type === Ts && (l.patchFlag === -1 && (l = i[r] = Ve(l)), l.el = o.el), l.type === Qe && !l.el && (l.el = o.el);
    }
}
function ll(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (i = s[s.length - 1], e[i] < d) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        l = r + o >> 1, e[s[l]] < d ? r = l + 1 : o = l;
      d < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = t[o];
  return s;
}
function nr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : nr(t);
}
function Nn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ir(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ir(t.subTree) : null;
}
const rr = (e) => e.__isSuspense;
function cl(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : _o(e);
}
const ge = /* @__PURE__ */ Symbol.for("v-fgt"), Ts = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), ss = /* @__PURE__ */ Symbol.for("v-stc"), ct = [];
let _e = null;
function Q(e = !1) {
  ct.push(_e = e ? null : []);
}
function or() {
  ct.pop(), _e = ct[ct.length - 1] || null;
}
let Bt = 1;
function Hn(e, t = !1) {
  Bt += e, e < 0 && _e && t && (_e.hasOnce = !0);
}
function lr(e) {
  return e.dynamicChildren = Bt > 0 ? _e || gt : null, or(), Bt > 0 && _e && _e.push(e), e;
}
function ne(e, t, s, n, i, r) {
  return lr(
    L(
      e,
      t,
      s,
      n,
      i,
      r,
      !0
    )
  );
}
function cr(e, t, s, n, i) {
  return lr(
    Ne(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function fr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ur = ({ key: e }) => e ?? null, ns = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ee(e) || /* @__PURE__ */ te(e) || D(e) ? { i: ve, r: e, k: t, f: !!s } : e : null);
function L(e, t = null, s = null, n = 0, i = null, r = e === ge ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ur(t),
    ref: t && ns(t),
    scopeId: Fi,
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
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return l ? (as(f, s), r & 128 && e.normalize(f)) : s && (f.shapeFlag |= ee(s) ? 8 : 16), Bt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && _e.push(f), f;
}
const Ne = fl;
function fl(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === $o) && (e = Qe), fr(e)) {
    const l = xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && as(l, s), Bt > 0 && !r && _e && (l.shapeFlag & 6 ? _e[_e.indexOf(e)] = l : _e.push(l)), l.patchFlag = -2, l;
  }
  if (yl(e) && (e = e.__vccOpts), t) {
    t = ul(t);
    let { class: l, style: f } = t;
    l && !ee(l) && (t.class = Ze(l)), G(f) && (/* @__PURE__ */ xs(f) && !j(f) && (f = oe({}, f)), t.style = sn(f));
  }
  const o = ee(e) ? 1 : rr(e) ? 128 : To(e) ? 64 : G(e) ? 4 : D(e) ? 2 : 0;
  return L(
    e,
    t,
    s,
    n,
    i,
    o,
    r,
    !0
  );
}
function ul(e) {
  return e ? /* @__PURE__ */ xs(e) || zi(e) ? oe({}, e) : e : null;
}
function xt(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: f } = e, d = t ? dl(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && ur(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? j(r) ? r.concat(ns(t)) : [r, ns(t)] : ns(t)
    ) : r,
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
  return f && n && pn(
    a,
    f.clone(a)
  ), a;
}
function ar(e = " ", t = 0) {
  return Ne(Ts, null, e, t);
}
function al(e, t) {
  const s = Ne(ss, null, e);
  return s.staticCount = t, s;
}
function is(e = "", t = !1) {
  return t ? (Q(), cr(Qe, null, e)) : Ne(Qe, null, e);
}
function je(e) {
  return e == null || typeof e == "boolean" ? Ne(Qe) : j(e) ? Ne(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : fr(e) ? Ve(e) : Ne(Ts, null, String(e));
}
function Ve(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xt(e);
}
function as(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (j(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), as(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !zi(t) ? t._ctx = ve : i === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (D(t)) {
    if (n & 65) {
      as(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ve }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [ar(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function dl(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Ze([t.class, n.class]));
      else if (i === "style")
        t.style = sn([t.style, n.style]);
      else if (ps(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(j(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !gs(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Me(e, t, s, n = null) {
  Ee(e, t, 7, [
    s,
    n
  ]);
}
const hl = ki();
let pl = 0;
function gl(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || hl, r = {
    uid: pl++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ai(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Zi(n, i),
    emitsOptions: qi(n, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = qo.bind(null, r), e.ce && e.ce(r), r;
}
let de = null;
const dr = () => de || ve;
let ds, Ys;
{
  const e = bs(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => de = s
  ), Ys = t(
    "__VUE_SSR_SETTERS__",
    (s) => kt = s
  );
}
const Yt = (e) => {
  const t = de;
  return ds(e), e.scope.on(), () => {
    e.scope.off(), ds(t);
  };
}, Ln = () => {
  de && de.scope.off(), ds(null);
};
function hr(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function ml(e, t = !1, s = !1) {
  t && Ys(t);
  const { props: n, children: i } = e.vnode, r = hr(e);
  Zo(e, n, r, t), sl(e, i, s || t);
  const o = r ? _l(e, t) : void 0;
  return t && Ys(!1), o;
}
function _l(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, No);
  const { setup: n } = s;
  if (n) {
    Be();
    const i = e.setupContext = n.length > 1 ? vl(e) : null, r = Yt(e), o = Jt(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = ni(o);
    if (ke(), r(), (l || e.sp) && !Ht(e) && Ni(e), l) {
      if (o.then(Ln, Ln), t)
        return o.then((f) => {
          Vn(e, f);
        }).catch((f) => {
          Ss(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Vn(e, o);
  } else
    pr(e);
}
function Vn(e, t, s) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) && (e.setupState = Ai(t)), pr(e);
}
function pr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || $e);
  {
    const i = Yt(e);
    Be();
    try {
      Ho(e);
    } finally {
      ke(), i();
    }
  }
}
const bl = {
  get(e, t) {
    return ce(e, "get", ""), e[t];
  }
};
function vl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, bl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Es(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ai(an(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Lt)
        return Lt[s](e);
    },
    has(t, s) {
      return s in t || s in Lt;
    }
  })) : e.proxy;
}
function yl(e) {
  return D(e) && "__vccOpts" in e;
}
const gr = (e, t) => /* @__PURE__ */ ao(e, t, kt), xl = "3.5.40";
/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zs;
const Kn = typeof window < "u" && window.trustedTypes;
if (Kn)
  try {
    zs = /* @__PURE__ */ Kn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const mr = zs ? (e) => zs.createHTML(e) : (e) => e, Sl = "http://www.w3.org/2000/svg", wl = "http://www.w3.org/1998/Math/MathML", Le = typeof document < "u" ? document : null, Un = Le && /* @__PURE__ */ Le.createElement("template"), Cl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Le.createElementNS(Sl, e) : t === "mathml" ? Le.createElementNS(wl, e) : s ? Le.createElement(e, { is: s }) : Le.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
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
  insertStaticContent(e, t, s, n, i, r) {
    const o = s ? s.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Un.innerHTML = mr(
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
}, Tl = /* @__PURE__ */ Symbol("_vtc");
function El(e, t, s) {
  const n = e[Tl];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const hs = /* @__PURE__ */ Symbol("_vod"), _r = /* @__PURE__ */ Symbol("_vsh"), Wn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[hs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Pt(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Pt(e, !0), n.enter(e)) : n.leave(e, () => {
      Pt(e, !1);
    }) : Pt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Pt(e, t);
  }
};
function Pt(e, t) {
  e.style.display = t ? e[hs] : "none", e[_r] = !t;
}
const Ol = /* @__PURE__ */ Symbol(""), Al = /(?:^|;)\s*display\s*:/;
function Pl(e, t, s) {
  const n = e.style, i = ee(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (ee(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Mt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Mt(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? Ml(
        e,
        o,
        !ee(t) && t ? t[o] : void 0,
        l
      ) || Mt(n, o, l) : Mt(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[Ol];
      o && (s += ";" + o), n.cssText = s, r = Al.test(s);
    }
  } else t && e.removeAttribute("style");
  hs in e && (e[hs] = r ? n.display : "", e[_r] && (n.display = "none"));
}
const Bn = /\s*!important$/;
function Mt(e, t, s) {
  if (j(s))
    s.forEach((n) => Mt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Rl(e, t);
    Bn.test(s) ? e.setProperty(
      ft(n),
      s.replace(Bn, ""),
      "important"
    ) : e[n] = s;
  }
}
const kn = ["Webkit", "Moz", "ms"], Hs = {};
function Rl(e, t) {
  const s = Hs[t];
  if (s)
    return s;
  let n = we(t);
  if (n !== "filter" && n in e)
    return Hs[t] = n;
  n = oi(n);
  for (let i = 0; i < kn.length; i++) {
    const r = kn[i] + n;
    if (r in e)
      return Hs[t] = r;
  }
  return t;
}
function Ml(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ee(n) && s === n;
}
const qn = "http://www.w3.org/1999/xlink";
function Gn(e, t, s, n, i, r = $r(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(qn, t.slice(6, t.length)) : e.setAttributeNS(qn, t, s) : s == null || r && !ci(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ye(s) ? String(s) : s
  );
}
function Jn(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? mr(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
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
    l === "boolean" ? s = ci(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Il(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Fl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Yn = /* @__PURE__ */ Symbol("_vei");
function jl(e, t, s, n, i = null) {
  const r = e[Yn] || (e[Yn] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = Nl(t);
    if (n) {
      const d = r[t] = Vl(
        n,
        i
      );
      Il(e, l, d, f);
    } else o && (Fl(e, l, o, f), r[t] = void 0);
  }
}
const Dl = /(Once|Passive|Capture)$/, $l = /^on:?(?:Once|Passive|Capture)$/;
function Nl(e) {
  let t, s;
  for (; (s = e.match(Dl)) && !$l.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ft(e.slice(2)), t];
}
let Ls = 0;
const Hl = /* @__PURE__ */ Promise.resolve(), Ll = () => Ls || (Hl.then(() => Ls = 0), Ls = Date.now());
function Vl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (j(i)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = i.slice(), l = [n];
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
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = Ll(), s;
}
const zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kl = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? El(e, n, o) : t === "style" ? Pl(e, s, n) : ps(t) ? gs(t) || jl(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ul(e, t, n, o)) ? (Jn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gn(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Wl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ee(n))) ? Jn(e, we(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Gn(e, t, n, o));
};
function Ul(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zn(t) && D(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return zn(t) && ee(s) ? !1 : t in e;
}
function Wl(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = we(t);
  return Array.isArray(s) ? s.some((i) => we(i) === n) : Object.keys(s).some((i) => we(i) === n);
}
const Bl = /* @__PURE__ */ oe({ patchProp: Kl }, Cl);
let Xn;
function kl() {
  return Xn || (Xn = il(Bl));
}
const ql = (...e) => {
  const t = kl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = Jl(n);
    if (!i) return;
    const r = t._component;
    !D(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, Gl(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function Gl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Jl(e) {
  return ee(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v4.0.2
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
let br;
const Os = (e) => br = e, vr = (
  /* istanbul ignore next */
  Symbol()
);
function Zn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
function Yl() {
  const e = di(!0), t = e.run(() => /* @__PURE__ */ pt({}));
  let s = [], n = [];
  const i = an({
    install(r) {
      Os(i), i._a = r, r.provide(vr, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
    },
    use(r) {
      return this._a ? s.push(r) : n.push(r), this;
    },
    _p: s,
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return i;
}
const Xs = () => {
};
function Qn(e, t, s, n = Xs) {
  e.add(t);
  const i = () => {
    e.delete(t) && n();
  };
  return !s && hi() && Hr(i), i;
}
function dt(e, ...t) {
  e.forEach((s) => {
    s(...t);
  });
}
const zl = (e) => e(), ei = Symbol(), Vs = Symbol();
function Zs(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!Object.hasOwn(t, s)) continue;
    const n = t[s], i = e[s];
    Zn(i) && Zn(n) && Object.hasOwn(e, s) && !/* @__PURE__ */ te(n) && !/* @__PURE__ */ We(n) ? e[s] = Zs(i, n) : e[s] = n;
  }
  return e;
}
const Xl = (
  /* istanbul ignore next */
  Symbol()
);
function Zl(e) {
  return !e || typeof e != "object" || !Object.hasOwn(e, Xl);
}
const { assign: ze } = Object;
function Ql(e) {
  return !!(/* @__PURE__ */ te(e) && e.effect);
}
function ec(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let f;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const a = /* @__PURE__ */ lo(s.state.value[e]);
    return ze(a, r, Object.keys(o || {}).reduce((p, w) => (p[w] = an(gr(() => {
      Os(s);
      const T = s._s.get(e);
      return o[w].call(T, T);
    })), p), {}));
  }
  return f = yr(e, d, t, s, n, !0), f;
}
function yr(e, t, s = {}, n, i, r) {
  let o;
  const l = ze({ actions: {} }, s), f = { deep: !0 };
  let d, a, p = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set(), T;
  const E = n.state.value[e];
  !r && !E && (n.state.value[e] = {});
  let v;
  function A(H) {
    let N;
    d = a = !1, typeof H == "function" ? (H(n.state.value[e]), N = {
      type: "patch function",
      storeId: e,
      events: T
    }) : (Zs(n.state.value[e], H), N = {
      type: "patch object",
      payload: H,
      storeId: e,
      events: T
    });
    const fe = v = Symbol();
    dn().then(() => {
      v === fe && (d = !0);
    }), a = !0, dt(p, N, n.state.value[e]);
  }
  const P = r ? function() {
    const { state: N } = s, fe = N ? N() : {};
    this.$patch((he) => {
      ze(he, fe);
    });
  } : Xs;
  function M() {
    o.stop(), p.clear(), w.clear(), n._s.delete(e);
  }
  const U = (H, N = "") => {
    if (ei in H)
      return H[Vs] = N, H;
    const fe = function() {
      Os(n);
      const he = Array.from(arguments), xe = /* @__PURE__ */ new Set(), Je = /* @__PURE__ */ new Set();
      function ut(k) {
        xe.add(k);
      }
      function St(k) {
        Je.add(k);
      }
      dt(w, {
        args: he,
        name: fe[Vs],
        store: W,
        after: ut,
        onError: St
      });
      let Ye;
      try {
        Ye = H.apply(this && this.$id === e ? this : W, he);
      } catch (k) {
        throw dt(Je, k), k;
      }
      return Ye instanceof Promise ? Ye.then((k) => (dt(xe, k), k)).catch((k) => (dt(Je, k), Promise.reject(k))) : (dt(xe, Ye), Ye);
    };
    return fe[ei] = !0, fe[Vs] = N, fe;
  }, I = {
    _p: n,
    $id: e,
    $onAction: Qn.bind(null, w),
    $patch: A,
    $reset: P,
    $subscribe(H, N = {}) {
      if (p.has(H))
        return Xs;
      const fe = Qn(p, H, N.detached, () => he()), he = o.run(() => $t(() => n.state.value[e], (xe) => {
        (N.flush === "sync" ? a : d) && H({
          storeId: e,
          type: "direct",
          events: T
        }, xe);
      }, ze({}, f, N)));
      return fe;
    },
    $dispose: M
  }, W = /* @__PURE__ */ ys(I);
  n._s.set(e, W);
  const le = (n._a && n._a.runWithContext || zl)(() => n._e.run(() => (o = di()).run(() => t({ action: U }))));
  for (const H in le) {
    const N = le[H];
    /* @__PURE__ */ te(N) && !Ql(N) || /* @__PURE__ */ We(N) ? r || (E && Zl(N) && (/* @__PURE__ */ te(N) ? N.value = E[H] : Zs(N, E[H])), n.state.value[e][H] = N) : typeof N == "function" && (le[H] = U(N, H), l.actions[H] = N);
  }
  return ze(W, le), ze(/* @__PURE__ */ K(W), le), Object.defineProperty(W, "$state", {
    get: () => n.state.value[e],
    set: (H) => {
      A((N) => {
        ze(N, H);
      });
    }
  }), n._p.forEach((H) => {
    const N = o.run(() => H({
      store: W,
      app: n._a,
      pinia: n,
      options: l
    }));
    ze(W, N);
  }), E && r && s.hydrate && s.hydrate(W.$state, E), d = !0, a = !0, W;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function tc(e, t, s) {
  let n;
  const i = typeof t == "function";
  n = i ? s : t;
  function r(o, l) {
    const f = yo();
    return o = o || (f ? Dt(vr, null) : null), o && Os(o), o = br, o._s.has(e) || (i ? yr(e, t, n, o) : ec(e, n, o)), o._s.get(e);
  }
  return r.$id = e, r;
}
const Qs = "preset-console";
function qt() {
  try {
    return SillyTavern.getContext();
  } catch {
    return null;
  }
}
function sc(e, t) {
  const s = qt();
  if (!s) return t;
  const n = s.variables.global.get(e);
  return n == null || n === "" ? t : String(n);
}
function nc(e, t) {
  const s = qt();
  s && s.variables.global.set(e, t);
}
function ic() {
  const e = qt();
  if (!e) return {};
  const t = e.extensionSettings[Qs];
  return t && typeof t.manifests == "object" ? t.manifests : {};
}
const xr = /* @__PURE__ */ tc("vp-variables", {
  state: () => ({
    manifest: null,
    presetName: null,
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
        for (const s of t.defs)
          e[s.name] = sc(s.name, s.default);
      this.values = e;
    },
    activateManifest(e, t) {
      this.manifest = e, this.presetName = t, this.readAll();
    },
    cacheManifest(e, t) {
      const s = qt();
      if (!s) return;
      const n = s.extensionSettings[Qs] ?? {};
      n.manifests = { ...n.manifests ?? {}, [t]: e }, s.extensionSettings[Qs] = n, s.saveSettingsDebounced(), this.activateManifest(e, t);
    },
    init() {
      const e = qt();
      if (!e) return;
      const t = e.chatCompletionSettings, s = t?.variable_manifest;
      if (s && Array.isArray(s.groups)) {
        this.activateManifest(s, t.preset_settings_openai ?? null);
        return;
      }
      const n = ic(), i = Object.keys(n);
      if (i.length > 0) {
        this.activateManifest(n[i[0]], i[0]);
        return;
      }
      this.manifest = null, this.presetName = null, this.values = {};
    },
    set(e, t) {
      this.values[e] = t, nc(e, t);
    },
    reset(e) {
      if (this.manifest)
        for (const t of this.manifest.groups) {
          const s = t.defs.find((n) => n.name === e);
          if (s) {
            this.set(e, s.default);
            return;
          }
        }
    },
    refresh() {
      this.readAll();
    }
  }
}), Sr = "/scripts/extensions/third-party/ST-Preset-Console";
async function rc() {
  try {
    const e = await fetch(`${Sr}/presets.json`);
    if (!e.ok) return [];
    const t = await e.json();
    return Array.isArray(t.presets) ? t.presets : [];
  } catch {
    return [];
  }
}
async function oc(e) {
  try {
    const t = await fetch(`${Sr}/${e.file}`);
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
function ts(e, t, s) {
  if (e === "debug" || e === "info") return;
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
}, cc = { class: "stmp-switch" }, fc = ["checked", "disabled"], uc = /* @__PURE__ */ $i({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = /* @__PURE__ */ pt(null);
    function r() {
      const o = s.modelValue;
      n("update:modelValue", !o), dn(() => {
        i.value && s.modelValue === o && i.value.checked !== o && (i.value.checked = o);
      });
    }
    return (o, l) => (Q(), ne("label", {
      class: Ze(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (Q(), ne("span", lc, rt(e.label), 1)) : is("", !0),
      L("span", cc, [
        L("input", {
          ref_key: "inputRef",
          ref: i,
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: r
        }, null, 40, fc),
        l[0] || (l[0] = L("span", { class: "stmp-switch-track" }, [
          L("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), wr = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, ac = /* @__PURE__ */ wr(uc, [["__scopeId", "data-v-529649ca"]]), dc = { class: "stmp-settings" }, hc = { class: "stmp-tab-bar" }, pc = ["onClick"], gc = { class: "stmp-tab-content" }, mc = {
  key: 0,
  class: "stmp-row"
}, _c = { class: "stmp-row-info" }, bc = { class: "stmp-row-title" }, vc = ["title"], yc = {
  key: 0,
  class: "stmp-chips"
}, xc = ["onClick"], Sc = {
  key: 2,
  class: "stmp-model-wrap"
}, wc = ["value", "placeholder", "onChange"], Cc = ["value", "placeholder", "onChange"], Tc = ["onClick"], Ec = { class: "stmp-tab-panel" }, Oc = {
  key: 0,
  class: "stmp-row"
}, Ac = { class: "stmp-row-info" }, Pc = { class: "stmp-row-title" }, Rc = ["onClick"], Mc = { class: "stmp-about" }, Ic = { class: "stmp-about-version" }, Fc = /* @__PURE__ */ $i({
  __name: "VariablePanel",
  setup(e) {
    const t = xr(), s = { id: "通用", label: "通用", icon: "fa-solid fa-sliders" }, n = "0.1.0", i = /* @__PURE__ */ pt(""), r = /* @__PURE__ */ pt([]), o = /* @__PURE__ */ pt(null), l = /* @__PURE__ */ pt([]);
    $t(
      () => t.manifest,
      (E) => {
        const v = E && E.groups.length > 0 ? E.groups.map((A) => ({
          id: A.title,
          label: A.title,
          icon: A.icon
        })) : [];
        l.value = [...v, s], l.value.some((A) => A.id === i.value) || (i.value = v.length > 0 ? v[0].id : s.id);
      },
      { immediate: !0 }
    );
    function f() {
      t.refresh();
    }
    function d(E, v) {
      const A = v.target;
      t.set(E.name, A.value);
    }
    function a(E, v) {
      t.set(E.name, v);
    }
    function p(E, v) {
      t.set(E.name, v ? "开" : "关");
    }
    function w(E) {
      t.reset(E.name), typeof toastr < "u" && toastr.info(`${E.label} 已重置`, "预设控制台");
    }
    async function T(E) {
      if (!o.value) {
        o.value = E.name;
        try {
          const v = await oc(E);
          if (!v) throw new Error("预设资源加载失败");
          await new Promise((P, M) => {
            $.ajax({
              type: "POST",
              url: "/api/presets/save",
              data: JSON.stringify({ name: E.name, preset: v, apiId: "openai" }),
              contentType: "application/json",
              success: () => P(),
              error: (U) => M(new Error(`HTTP ${U.status}`))
            });
          });
          const A = v.variable_manifest;
          A && Array.isArray(A.groups) && t.cacheManifest(A, E.name), typeof toastr < "u" && toastr.success(`预设 ${E.name} 已写入磁盘，即将刷新页面加载`, "预设控制台"), setTimeout(() => {
            window.location.reload();
          }, 1500);
        } catch (v) {
          typeof toastr < "u" && toastr.error(`导入失败：${v instanceof Error ? v.message : String(v)}`, "预设控制台");
        } finally {
          o.value = null;
        }
      }
    }
    return Vi(() => {
      t.init(), rc().then((v) => {
        r.value = v;
      });
      const E = (() => {
        try {
          return SillyTavern.getContext();
        } catch {
          return null;
        }
      })();
      E?.eventSource.on(E.event_types.APP_READY, t.init), bt.info("panel mounted");
    }), Ki(() => {
      const E = (() => {
        try {
          return SillyTavern.getContext();
        } catch {
          return null;
        }
      })();
      E?.eventSource.removeListener(E.event_types.APP_READY, t.init);
    }), (E, v) => (Q(), ne("div", dc, [
      L("div", hc, [
        (Q(!0), ne(ge, null, Ot(l.value, (A) => (Q(), ne("div", {
          key: A.id,
          class: Ze(["stmp-tab", { active: i.value === A.id }]),
          onClick: (P) => i.value = A.id
        }, [
          L("i", {
            class: Ze(A.icon)
          }, null, 2),
          L("span", null, rt(A.label), 1)
        ], 10, pc))), 128))
      ]),
      L("div", gc, [
        (Q(!0), ne(ge, null, Ot(Se(t).manifest?.groups, (A) => On((Q(), ne("div", {
          key: A.title,
          class: "stmp-tab-panel"
        }, [
          Se(t).manifest?.groups[0] && A.title === Se(t).manifest.groups[0].title ? (Q(), ne("div", mc, [
            v[1] || (v[1] = L("div", { class: "stmp-row-info" }, [
              L("div", { class: "stmp-row-title" }, "变量状态")
            ], -1)),
            L("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              title: "刷新",
              onClick: f
            }, [...v[0] || (v[0] = [
              L("i", { class: "fa-solid fa-rotate" }, null, -1)
            ])])
          ])) : is("", !0),
          (Q(!0), ne(ge, null, Ot(A.defs, (P) => (Q(), ne("div", {
            key: P.name,
            class: "stmp-row"
          }, [
            L("div", _c, [
              L("div", bc, [
                ar(rt(P.label) + " ", 1),
                P.help ? (Q(), ne("i", {
                  key: 0,
                  class: "fa-solid fa-circle-info stmp-help-tip",
                  title: P.help
                }, null, 8, vc)) : is("", !0)
              ])
            ]),
            P.options ? (Q(), ne("div", yc, [
              (Q(!0), ne(ge, null, Ot(P.options, (M) => (Q(), ne("div", {
                key: M,
                class: Ze(["stmp-chip", { active: Se(t).values[P.name] === M }]),
                onClick: (U) => a(P, M)
              }, [
                L("span", null, rt(M), 1)
              ], 10, xc))), 128))
            ])) : P.type === "toggle" ? (Q(), cr(ac, {
              key: 1,
              "model-value": Se(t).values[P.name] === "开",
              "onUpdate:modelValue": (M) => p(P, M)
            }, null, 8, ["model-value", "onUpdate:modelValue"])) : (Q(), ne("div", Sc, [
              P.type === "text" ? (Q(), ne("input", {
                key: 0,
                class: "text_pole stmp-text-input",
                value: Se(t).values[P.name],
                placeholder: P.help || "",
                onChange: (M) => d(P, M)
              }, null, 40, wc)) : (Q(), ne("textarea", {
                key: 1,
                class: "text_pole stmp-text-input vp-textarea",
                value: Se(t).values[P.name],
                placeholder: P.help || "",
                onChange: (M) => d(P, M)
              }, null, 40, Cc)),
              L("div", {
                class: "menu_button menu_button_icon stmp-action-btn",
                title: "重置",
                onClick: (M) => w(P)
              }, [...v[2] || (v[2] = [
                L("i", { class: "fa-solid fa-rotate-left" }, null, -1)
              ])], 8, Tc)
            ]))
          ]))), 128))
        ])), [
          [Wn, i.value === A.title]
        ])), 128)),
        On(L("div", Ec, [
          Se(t).hasManifest ? is("", !0) : (Q(), ne("div", Oc, [...v[3] || (v[3] = [
            L("div", { class: "stmp-row-info" }, [
              L("div", { class: "stmp-row-title" }, "未检测到变量面板"),
              L("div", { class: "stmp-row-desc" }, "当前预设未声明 variable_manifest，请先导入支持的预设")
            ], -1)
          ])])),
          v[8] || (v[8] = L("div", { class: "stmp-section-header" }, [
            L("div", { class: "stmp-section-title" }, [
              L("i", { class: "fa-solid fa-file-import" }),
              L("span", null, "预设导入")
            ])
          ], -1)),
          (Q(!0), ne(ge, null, Ot(r.value, (A) => (Q(), ne("div", {
            key: A.name,
            class: "stmp-row"
          }, [
            L("div", Ac, [
              L("div", Pc, rt(A.name), 1)
            ]),
            L("div", {
              class: Ze(["menu_button menu_button_icon stmp-action-btn", { "stmp-spin": o.value === A.name }]),
              title: "导入",
              onClick: (P) => T(A)
            }, [...v[4] || (v[4] = [
              L("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])], 10, Rc)
          ]))), 128)),
          v[9] || (v[9] = L("div", { class: "stmp-separator" }, null, -1)),
          L("div", Mc, [
            v[5] || (v[5] = L("div", { class: "stmp-about-icon" }, [
              L("i", { class: "fa-solid fa-sliders" })
            ], -1)),
            v[6] || (v[6] = L("div", { class: "stmp-about-name" }, "预设控制台", -1)),
            L("div", Ic, "Version " + rt(Se(n)), 1),
            v[7] || (v[7] = al('<div class="stmp-about-desc" data-v-97b00ede>SillyTavern 预设变量控制面板</div><a href="https://github.com/vvb7456/ST-Preset-Console" target="_blank" rel="noopener" class="stmp-about-link" data-v-97b00ede><i class="fa-brands fa-github" data-v-97b00ede></i><span data-v-97b00ede>GitHub</span></a><div class="stmp-about-copyright" data-v-97b00ede><a href="https://www.erocraft.com" target="_blank" rel="noopener" data-v-97b00ede>艾萝工坊</a> © 2015 - 2026</div>', 3))
          ])
        ], 512), [
          [Wn, i.value === s.id]
        ])
      ])
    ]));
  }
}), jc = /* @__PURE__ */ wr(Fc, [["__scopeId", "data-v-97b00ede"]]), Dc = `
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
let vt = null, Vt = null;
function $c() {
  const e = $("#extensions_settings2");
  if (!e || !e.length)
    return bt.warn("extensions_settings2 not found"), !1;
  if (e.append(Dc), Vt = e.children(".inline-drawer").last()[0] ?? null, !Vt) return !1;
  const t = Vt.querySelector("#vp-mount");
  if (!t) return !1;
  const s = Yl();
  return vt = ql(jc), vt.use(s), vt.mount(t), xr(s).init(), !0;
}
function Nc() {
  vt && (vt.unmount(), vt = null), Vt?.remove(), Vt = null;
}
function Vc() {
  try {
    $c() ? bt.info("loaded") : bt.error("drawer mount failed");
  } catch (e) {
    bt.error("init failed", e);
  }
}
function Hc() {
  Nc(), bt.info("destroyed");
}
function Kc() {
  Hc();
}
export {
  Hc as destroy,
  Kc as disable,
  Vc as init
};
